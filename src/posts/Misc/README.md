# Get Linux Kernel

```
sudo docker run --privileged -it --name kernel-dev -v "/home/user/kernel-debug-talk:/root/work" ubuntu
apt update
apt install -y build-essential git bzip2 make gcc libncurses-dev flex bison bc cpio libelf-dev libssl-dev qemu-system-x86 libgtk-3-dev gdb wget
```

- buzybox: bzip2
- compile: make gcc
- menuconfig: libncurses-dev
- kernel: flex bison bc libelf-dev libssl-dev
- initramfs: cpio
(why?)

```
cd /root/work
git clone --depth 1 https://github.com/torvalds/linux.git

wget https://busybox.net/downloads/busybox-1.36.1.tar.bz2
tar -xjf busybox-1.36.1.tar.bz2
cd busybox-1.36.1
make defconfig
sed -i 's|.*CONFIG_STATIC.*|CONFIG_STATIC=y|' .config
make menuconfig
Networking Utilities -> DISABLE tc
make -j $(nproc)
make install
cd _install
```

```
mkdir -p dev proc sys
mknod -m 660 dev/console c 5 1
mknod -m 660 dev/ttyS0 c 4 64
mkdir -p etc/init.d
touch etc/init.d/rcS
chmod +x etc/init.d/rcS

cat << EOF > etc/inittab
::sysinit:/etc/init.d/rcS
ttyS0::respawn:-/bin/sh
::ctrlaltdel:/sbin/reboot
::shutdown:/bin/umount -a -r
EOF

cat << EOF > etc/init.d/rcS
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devtmpfs none /dev
EOF
chmod +x etc/init.d/rcS

cat << EOF > ./init
exec /sbin/init
EOF
chmod +x ./init


find . | cpio -o -H newc > ../../init.cpio
```



```
cd ~/work/linux
make menuconfig
```

search(/): 
config_gdb_scripts
-> Compile-time checks and compiler options -> Debug information (Disable debug information) -> Rely on the toolchain's implicit default DWARF version

-> Provide GDB scripts for kernel debugging

exit

```
make -j $(nproc)
qemu-system-x86_64 -kernel arch/x86_64/boot/bzImage \
                   -initrd ../init.cpio \
                   -append "console=ttyS0 nokaslr" \
                   -s -S -nographic
```

```
sudo docker exec -it kernel-dev /bin/bash
cd /root/work/linux
echo "add-auto-load-safe-path /root/work/linux" > ~/.gdbinit
gdb ./vmlinux
```

```
target remote :1234

```

Shortcut:

- Ctrl + l: clear screen
- hbreak: hardware breakpoint
- c/continue: continue without stop (until breakpoint)
- n/next: run this line, stop at next line
- s/step: step into the function


in gdb:

```
target remote :1234
hbreak kernel_init
```

c: break at kernel_init

## n: wait_for_completion(&kthreadd_done);

- init: PID 1, create threads
- kthreadd: manage kernel threads

## n: kernel_init_freeable();

- many of them can be freed.

### s: gfp_allowed_mask = __GFP_BITS_MASK;

- GFP: get free pages
  - gfp flags: GFP_KERNEL, GFP_ATOMIC, GFP_DMA
- gfp_allowed_mask: the mask for allowed gfp flag
  - __GFP_BITS_MASK: all

### n: set_mems_allowed(node_states[N_MEMORY]);

- NUMA: Non-Uniform Memory Access
  - nodes connect some CPU and memory
  - N_MEMORY: all memory

### n: arch_local_irq_disable();

- irq: interrupt request

### n: write_seqcount_begin(&current->mems_allowed_seq);

seqlock: if writting, can't read

### some codes:

n: return this_cpu_read_const(const_current_task);

n: write_seqcount_end(&current->mems_allowed_seq);

n: local_irq_restore(flags);

n: task_unlock(current);

n: cad_pid = get_pid(task_pid(current));

### n: smp_prepare_cpus(setup_max_cpus);

prepare for all APs in SMP

- SMP: symmetric multi-processing
- AP: application processor
- BSP: bootstrap processor

### n: workqueue_init();

- ps aux | grep kworker

### n: init_mm_internals();

- mm: memory management

### do_pre_smp_initcalls();

do before multiple CPUs

### n: smp_init();

### n: sched_init_smp();

scheduler

### next:

workqueue_init_topology();

async_init();

### n: padata_init();

parallel data

### n: do_basic_setup();

#### s: cpuset_init_smp();

#### n: driver_init();

##### s

##### n: bdi_init(&noop_backing_dev_info);

bdi: backing device information

##### n: devtmpfs_init();

device tmp file system

##### n: devices_init();

###### s

###### n: devices_kset = kset_create_and_add("devices", &device_uevent_ops, NULL);

kernel set

###### next

dev_kobj = kobject_create_and_add("dev", NULL); 

sysfs_dev_block_kobj = kobject_create_and_add("block", dev_kobj); 

sysfs_dev_char_kobj = kobject_create_and_add("char", dev_kobj);

device_link_wq = alloc_workqueue("device_link_wq", 0, 0);

buses_init();

prepare_namespace()

init_post()

# Trace "ps"

hbreak __x64_sys_getpid

# get cred

p current_task

p __per_cpu_offset

set $percpu_base = __per_cpu_offset[0] + (unsigned long)&current_task

p *(struct task_struct **)$percpu_base

p  -> cred

sudo docker start -ai kernel-dev

qemu-system-x86_64 \
    -kernel linux/arch/x86_64/boot/bzImage \
    -initrd ctf_rootfs.cpio \
    -append "console=ttyS0 nokaslr" \
    -cpu kvm64,+smep,+smap \
    --nographic \
    -monitor /dev/null \
    -s -S

```
file ?/vmlinux
add-symbol-file ?/xkmod.ko 0xffffffffc0000000
b xkmod_ioctl
b xkmod_release
c
disassemble
p $lx_current().cred <- it doesn't change
goto 10a (ni)
p/x $rax <- it's the pointer of the chunk of the device
p $lx_current().cred <- right after the first cred
x/4gx $rax
c
disassemble
goto 63
x/4gx ADDR <- it's freed
c
disassemble
p $lx_current().cred <- it's now a new cred, and use ADDR
x/20gx ADDR <- it's uid 1000, and can be changed
```


