这是一篇针对 `xkmod` 题目的详细漏洞分析与解题报告。

---

### 一、 漏洞来源分析 (Vulnerability Analysis)

这个题目的核心漏洞是 **全局变量导致的 Use-After-Free (UAF)**。

#### 1. 核心逻辑重构
根据我们调试的汇编和行为，内核模块 `xkmod.ko` 的逻辑大致如下：

```c
// 假设的内核源码逻辑
struct param *global_buf; // <--- 【致命错误1】这是一个全局变量

// ioctl 处理函数
static long xkmod_ioctl(struct file *file, unsigned int cmd, unsigned long arg) {
    switch(cmd) {
        case ALLOC:
            // 分配 192 字节内存
            // 【致命错误2】将分配的地址存入了全局变量 global_buf
            global_buf = kmem_cache_alloc(s, GFP_KERNEL); 
            break;
            
        case WRITE:
            // 使用全局变量写入数据
            // 【致命错误3】没有检查 global_buf 是否已经被释放
            copy_from_user(global_buf, user_data, len);
            break;
    }
}

// release 处理函数 (对应 close)
static int xkmod_release(struct inode *inode, struct file *file) {
    // 释放内存
    kmem_cache_free(s, global_buf);
    // 【致命错误4】释放后没有将 global_buf 置为 NULL (悬垂指针)
    // global_buf = NULL; // 这一行缺失！
}
```

#### 2. 漏洞成因
1.  **悬垂指针 (Dangling Pointer)**：当用户调用 `close(fd1)` 时，触发 `xkmod_release`，内存被释放（Free）。但是，指向这块内存的指针 `global_buf` 依然保留在内核的数据段中，指向那块已经被标记为“空闲”的地址。
2.  **全局变量共享**：由于 `global_buf` 是全局变量，**所有**打开该设备的进程或文件描述符都能访问它。即使 `fd1` 关闭了，我们依然可以通过 `fd2` 调用 `ioctl(WRITE)` 来访问这个并未清空的指针。

---

### 二、 解题细节与利用手法 (Exploitation Details)

Exp 脚本利用了 Linux 内核内存管理机制（SLAB/SLUB 分配器）的特性，通过 **Heap Spray（堆喷/堆风水）** 技术实现了提权。

#### 步骤 1：打开两扇门 (`fd1` 和 `fd2`)
```c
int fd1 = open("/dev/xkmod", O_RDWR);
int fd2 = open("/dev/xkmod", O_RDWR);
```
*   **为什么需要两个？**
    *   `fd1` 用来**申请**和**释放**内存。
    *   `fd2` 用来在 `fd1` 关闭（导致内存释放）之后，依然保持对驱动的访问权限，利用那个悬垂指针进行**写入**。

#### 步骤 2：下诱饵 (Alloc)
```c
ioctl(fd1, ALLOC, &p);
```
*   驱动分配了一块 **192 字节** 的内核内存。
*   **关键点**：这个大小（192字节）不是随便选的，它与内核中 `struct cred` 结构体的大小完全一致。这是后续“移花接木”的基础。

#### 步骤 3：设置陷阱 (Free / UAF)
```c
close(fd1);
```
*   `close(fd1)` 触发驱动的 `release` 函数，调用 `kfree`。
*   此时，这块 192 字节的内存回到了内核的 **SLUB 空闲链表** 中，变成了“无主之地”。
*   但是，驱动里的全局变量依然指着它。

#### 步骤 4：移花接木 (Fork / Heap Reuse)
```c
pid_t pid = fork();
```
这是最精彩的一步。
1.  **Fork 的副作用**：`fork()` 系统调用会创建子进程。内核必须为新进程分配一个新的 `struct cred` 来记录它的权限（UID, GID 等）。
2.  **大小匹配**：`struct cred` 的大小正好也是 **192 字节**。
3.  **SLUB 分配机制**：内核分配器（SLUB）非常注重效率。当它需要分配 192 字节时，它会优先查看“最近释放的”空闲块。
4.  **重用 (Reuse)**：刚才通过 `fd1` 释放的那块内存，立刻被分配给了子进程，作为它的 `struct cred`。
5.  **现状**：驱动里的悬垂指针现在指向了**子进程的身份证（Cred）**。

#### 步骤 5：偷天换日 (Overwrite)
```c
if (pid == 0) { // 子进程中
    char payload[0x40] = {0}; // 全 0 数组
    ioctl(fd2, WRITE, &p);    // 写入
}
```
1.  子进程通过 `fd2` 调用驱动的 `WRITE` 功能。
2.  驱动拿着那个悬垂指针（现在指向子进程的 `cred`），把用户传进来的全 0 数据写了进去。
3.  `struct cred` 的前几个成员是：
    *   `usage` (引用计数)
    *   `uid` (用户ID)
    *   `gid` (组ID)
    *   `suid` ...
4.  写入全 0 后，`uid` 变为 0。在 Linux 中，**UID 0 代表 Root**。

#### 步骤 6：获取权限
```c
if (getuid() == 0) {
    execve("/bin/sh", ...);
}
```
子进程检查自己的 UID，发现变成了 0，说明提权成功，启动 Shell。

---

### 三、 形象化类比 (The Analogy)

为了方便理解，我们可以用**“酒店房间”**来比喻这个过程：

1.  **Alloc (开房)**：
    你通过前台 A (`fd1`) 开了一间房（192号房）。酒店系统（全局变量）记录下：**VIP 客户住在 192 号**。

2.  **Free (退房)**：
    你通过前台 A 退房了。192 号房被打扫干净，挂上了“空闲”牌子。
    *   **漏洞**：酒店系统（全局变量）**忘了删除**“VIP 客户住在 192 号”这条记录。此时你手里还通过前台 B (`fd2`) 握着 192 号房的万能钥匙。

3.  **Fork (新客入住)**：
    此时，一个重要的大人物（子进程的 `cred`）来住店。
    酒店经理看 192 号房刚好空着，就安排大人物住了进去。
    大人物把自己的身份证、机密文件（权限信息）都放在了房间里。

4.  **Write (盗窃)**：
    你拿着前台 B (`fd2`) 的万能钥匙，根据系统里没删掉的记录，再次进入了 192 号房。
    你没看清里面住的是谁，直接把房间里所有的东西都涂改成 0（全 0 覆盖）。
    大人物的身份证被你涂改成了“超级管理员”。

5.  **Result**：
    大人物醒来一看身份证：“哦，原来我是超级管理员”，于是你获得了最高权限。

---

### 四、 总结

*   **漏洞类型**：UAF (Use-After-Free)
*   **关键对象**：`struct cred` (权限凭证结构体)
*   **对象大小**：192 字节 (kmalloc-192)
*   **利用核心**：利用未清空的全局指针，修改被重用的内核对象，从而覆盖进程权限位 (UID) 为 0。

这份大纲通过 **构建环境 -> 编译内核/工具 -> 制作文件系统 -> 启动仿真 -> 调试内核启动 -> 复现漏洞** 的完整流程，展示了 Linux 内核开发和安全研究的标准路径。

下面我详细解释每个步骤的操作原因和作用：

---

### 1. 环境准备 (Get Linux Kernel)

这部分是在构建一个独立的、工具齐全的编译环境。

```bash
sudo docker run ... ubuntu  # 使用 Docker 保证环境纯净，避免污染宿主机，且方便复现
apt install ...             # 安装依赖
```

**为什么需要这些特定的包？** (针对你问的 `why?`)：

*   **busybox 依赖**:
    *   `bzip2`: BusyBox 源码通常是 `.tar.bz2` 格式，解压需要它。
    *   `make gcc`: 编译 C 语言源码的基础工具链。
*   **Menuconfig 依赖**:
    *   `libncurses-dev`: Linux 内核和 BusyBox 的 `make menuconfig`（那个蓝色的配置界面）是基于 ncurses 库绘制的文本图形界面。
*   **Kernel 编译依赖**:
    *   `flex`, `bison`: 内核配置系统（Kconfig）需要用到词法分析和语法分析工具来解析配置文件。
    *   `bc`: 任意精度计算器语言。内核构建过程中计算时间戳、版本号或特定数值需要用到。
    *   `libelf-dev`: 内核 4.x+ 在编译时需要处理 ELF 文件（OBJTOOL），用于栈回溯验证等。
    *   `libssl-dev`: 编译内核模块时，需要用到 OpenSSL 来生成签名密钥（即使不签名，构建脚本通常也会检查它）。
*   **Initramfs 依赖**:
    *   `cpio`: Linux 启动时加载的初始内存文件系统（initramfs）本质上是一个 cpio 归档文件。
*   **仿真与调试**:
    *   `qemu-system-x86`: 用于模拟一台 x86 电脑来运行我们编译好的内核。
    *   `gdb`: 用于连接 QEMU 调试内核。

---

### 2. 编译用户态工具 (BusyBox)

Linux 内核启动后需要运行“用户程序”（如 `ls`, `cat`, `sh`, `init`）。BusyBox 将这些常用命令打包在一个二进制文件里，非常适合制作最小系统。

*   `make defconfig`: 生成默认配置。
*   **`CONFIG_STATIC=y`**: **关键步骤！**
    *   **原因**：我们制作的简易文件系统里没有 `libc.so` 等动态链接库。
    *   **作用**：强制静态编译，把所有依赖库都打进 `busybox` 二进制文件里，使其能独立运行。
*   `Networking Utilities -> DISABLE tc`: `tc` (Traffic Control) 命令在某些新版 GCC 上编译会报错，且调试内核通常用不到它，禁掉省事。
*   `make install`: 将编译好的二进制和符号链接（如 `ls -> busybox`）输出到 `_install` 目录。

---

### 3. 制作根文件系统 (Initramfs)

内核启动后需要挂载“根目录”(/)。这里我们手动创建一个基于内存的文件系统。

*   `mkdir -p dev proc sys`: 创建挂载点，Linux 运行时必须有这些目录。
*   `mknod ... dev/console ... dev/ttyS0`: 手动创建设备节点。
    *   `console`: 系统控制台，内核日志输出的地方。
    *   `ttyS0`: 串口设备。因为我们用 QEMU `-nographic` 模式，输入输出都是走串口的。
*   **`etc/init.d/rcS`**:
    *   这是 BusyBox 的 `init` 进程启动后执行的第一个脚本。
    *   `mount -t proc ...`: 挂载 `/proc` (查看进程信息), `/sys` (查看硬件信息), `/dev` (设备管理)。没有这些，很多命令会报错。
*   **`etc/inittab`**: 配置 `init` 进程的行为。
    *   `::sysinit:/etc/init.d/rcS`: 开机初始化。
    *   `ttyS0::respawn:-/bin/sh`: **关键！** 在串口上启动一个 Shell，且退出后自动重启。这就是你能输入命令的原因。
*   `init` 脚本: 有时 QEMU 会直接指定它为启动程序，作为内核执行的第一个用户进程。
*   **`find . | cpio ...`**: 将当前目录打包成 `.cpio` 格式，内核认识这种格式并会在启动时解压到内存中。

---

### 4. 编译 Linux 内核

*   `make menuconfig`: 配置内核。
*   **`config_gdb_scripts`**:
    *   **作用**：在构建目录生成 `vmlinux-gdb.py`。
    *   **原因**：这是 GDB 的 Python 扩展，允许在 GDB 里使用 `lx-dmesg`, `lx-lsmod`, `lx-current` 等命令，极大地简化内核调试。
*   `Disable debug information` + `implicit default DWARF`:
    *   **原因**：完整的调试信息（Debug Info）会让内核文件变得巨大（几百MB），导致 QEMU 加载慢或 GDB 处理卡顿。通常利用工具链默认的 DWARF 信息就足够调试函数名和行号了。
*   **QEMU 启动参数**:
    *   `-kernel .../bzImage`: 指定压缩后的内核镜像。
    *   `-initrd .../init.cpio`: 指定刚才做的根文件系统。
    *   **`nokaslr`**: **非常重要！** 禁用内核地址随机化。如果不禁用，每次启动内核代码地址都会变，GDB 下的断点就会失效。
    *   `-s -S`: 开启 GDB 监听端口 (1234) 并在启动时冻结 CPU，等待调试器连接。

---

### 5. GDB 调试设置

*   `add-auto-load-safe-path`: 允许 GDB 加载内核目录下的 Python 辅助脚本（安全限制）。
*   `file vmlinux`: 加载带有符号表的**未压缩**内核文件。`bzImage` 是压缩的，没法调试，`vmlinux` 才有函数名和变量地址。
*   `target remote :1234`: 连接到 QEMU。

---

### 6. 跟踪内核启动流程 (Kernel Init)

这部分演示了如何跟踪 Linux 的启动代码。

*   **`kernel_init`**: 它是 PID 1 (init 进程) 的内核态前身。
*   **`wait_for_completion(&kthreadd_done)`**: 等待内核线程守护进程 (`kthreadd`) 启动完成。
*   **`gfp_allowed_mask`**: (Get Free Page) 设置内存分配的掩码。
*   **`arch_local_irq_disable`**: 关闭中断。在进行关键硬件初始化时防止被打断。
*   **`smp_prepare_cpus`**: (Symmetric Multi-Processing) 准备多核 CPU 环境。BSP (主启动核) 唤醒 APs (应用核)。
*   **`workqueue_init`**: 初始化工作队列机制（你在 `ps` 里看到的 `kworker` 就是这个机制）。
*   **`driver_init`**: 初始化驱动模型。这会建立 `/sys/devices` 下的目录结构，并触发设备探测。
*   **`devices_kset`, `kobject_create_and_add`**: 这些是 Linux 设备驱动模型的核心对象，用于在 `/sys` 下构建层级关系。

---

### 7. 跟踪系统调用 (Trace "ps")

*   **`hbreak __x64_sys_getpid`**:
    *   这是 `getpid()` 系统调用在 64 位 x86 上的内核入口。
    *   当你在 Shell 里输入 `ps` 或者运行任何程序时，它们往往会调用 `getpid`，GDB 就会断下来，让你观察用户态如何陷入内核态。
*   **获取 `cred` (手动计算)**:
    *   这部分展示了如何在没有 Python 辅助脚本的情况下，硬核获取当前进程信息。
    *   `__per_cpu_offset`: Linux 在多核下使用 Per-CPU 变量。
    *   `current_task`: 这是一个 Per-CPU 变量，指向当前 CPU 正在运行的进程的 `task_struct`。
    *   **逻辑**: 基址 + 偏移 = 当前 CPU 上 `current_task` 的真实地址 -> 获取 `cred` 指针。

---

### 8. 跟踪 UAF 漏洞利用 (xkmod Exploit)

这是对前面提到的 UAF 提权题目的实战复现。

*   `cpu kvm64,+smep,+smap`:
    *   **SMEP/SMAP**: 安全防御机制。防止内核直接执行用户空间代码 (SMEP) 或访问用户空间数据 (SMAP)。开启这些是为了模拟真实的防御环境，增加利用难度（虽然该 exp 主要是针对数据流的攻击）。
*   `add-symbol-file ?/xkmod.ko ...`:
    *   加载外部内核模块的符号表。因为模块是动态加载的，GDB 不知道它的地址，需要我们手动指定加载基址（通过 `/proc/modules` 查看）。
*   **调试逻辑**:
    1.  `p $lx_current().cred`: 查看当前进程（Exp 进程）初始的凭证。
    2.  `goto 10a (ni)` (Alloc): 执行到分配内存后，获取 `$rax`（内存地址）。
    3.  `x/4gx $rax`: 查看刚申请的内存。
    4.  `goto 63` (Free): 执行到释放内存。
    5.  `x/4gx ADDR`: 验证内存被释放（通常前8字节变成 FreeList 指针）。
    6.  `p $lx_current().cred` (Fork后): 验证当前进程（子进程）的 `cred` 指针是否指向了刚才释放的 ADDR。
    7.  `x/20gx ADDR` (Write后): 验证内存内容是否被修改（UID 变为 0）。

**总结**: 整个大纲是为了让你具备“上帝视角”。从搭建世界（编译环境），到创造世界（启动内核），再到作为造物主暂停时间（GDB调试），最后观察并操纵世界中的细微瑕疵（漏洞复现）。

这是一个非常好的请求。跟踪内核启动流程（Kernel Init）是理解 Linux 内核架构最直观的方式。

你提供的大纲是从 `kernel_init` 函数开始的。为了让你完全理解发生了什么，我们需要先理清背景：在 `kernel_init` 执行之前，内核其实已经完成了物理内存映射、页表初始化等最底层的“脏活累活”（由 `start_kernel` 完成）。

**`kernel_init` 是内核启动的第二阶段**。它的主要使命是：**初始化所有设备驱动**，挂载根文件系统，最后启动用户态的第一个进程（init 进程）。

以下是对你大纲中每个关键步骤的详细深度解析：

---

### 1. 核心线程的同步 (The Birth of PID 1 & 2)

```c
n: wait_for_completion(&kthreadd_done);
```

*   **背景**：Linux 内核启动时，只有 **PID 0** (swapper/idle 进程)。PID 0 接着创建了两个最重要的线程：
    *   **PID 1 (init)**：就是我们现在跟踪的 `kernel_init`。它的目标是最终变成用户态进程。
    *   **PID 2 (kthreadd)**：这是所有内核线程的“父亲”。
*   **操作含义**：`wait_for_completion` 是一个同步屏障。
*   **原因**：PID 1 (`kernel_init`) 在启动过程中可能需要请求创建其他的辅助内核线程（比如工作队列）。但如果 PID 2 (`kthreadd`) 还没初始化好，PID 1 就没法创建线程。
*   **一句话解释**：**“大儿子(init) 必须等 二儿子(kthreadd) 把管家团队建好，才能开始干活。”**

---

### 2. 内存策略与限制 (Memory Constraints)

```c
n: kernel_init_freeable();
s: gfp_allowed_mask = __GFP_BITS_MASK;
n: set_mems_allowed(node_states[N_MEMORY]);
```

*   **`kernel_init_freeable()`**：
    *   这是一个巨大的封装函数，意为“初始化完成后可以释放的代码”。里面的初始化代码只运行一次，跑完就可以把占用的内存释放回给系统（我们在 dmesg 里经常看到的 `Freeing unused kernel memory` 就是指这个）。
*   **`gfp_allowed_mask`**:
    *   **GFP (Get Free Page)**：这是内核分配内存的标志位（如 `GFP_KERNEL` 表示可以睡眠等待内存）。
    *   **作用**：在启动极早期，某些分配行为（如触发 IO 换页）是不允许的，因为硬盘驱动还没加载。这里将其设置为 `__GFP_BITS_MASK` (全1)，意味着此时内核已经足够成熟，允许使用所有的内存分配策略了。
*   **`set_mems_allowed`**:
    *   **NUMA (非一致性内存访问)**：在服务器上，CPU 0 访问内存条 A 很快，访问内存条 B 很慢。
    *   **作用**：这行代码告诉当前进程（init），它有权访问系统中所有的内存节点（N_MEMORY）。

---

### 3. 临界区与锁 (Critical Sections)

```c
n: arch_local_irq_disable();
n: write_seqcount_begin(&current->mems_allowed_seq);
...
n: write_seqcount_end(&current->mems_allowed_seq);
n: local_irq_restore(flags);
```

*   **`arch_local_irq_disable()`**:
    *   **原因**：我们要修改当前进程非常核心的数据结构（内存访问权限）。如果不关中断，万一此时网卡来个中断，中断处理程序里又尝试读这个数据，就会导致数据不一致或死锁。
*   **`write_seqcount_begin` (顺序锁)**:
    *   **作用**：这是一种特殊的锁，**写者优先**。
    *   **原理**：写的时候，序列号 `seq` 加 1（变奇数）。读的时候，看 `seq` 是不是偶数。如果是奇数，说明有人正在写，读者就自旋等待。
    *   **场景**：用于保护 `mems_allowed` 这种读多写少的数据。

---

### 4. 多核 CPU 唤醒 (SMP Initialization)

```c
n: smp_prepare_cpus(setup_max_cpus);
```

*   **SMP (Symmetric Multi-Processing)**：对称多处理，即多核。
*   **现状**：到目前为止，Linux 依然是**单核运行**的！只有主处理器 (BSP, Bootstrap Processor) 在跑代码，其他的副处理器 (AP, Application Processors) 还在“沉睡”（死循环等待指令）。
*   **操作含义**：
    *   BSP 解析 ACPI 表或设备树，找出电脑上插了多少个 CPU。
    *   给每个 AP 分配内存、栈空间。
    *   **注意**：此时还没真正唤醒它们，只是做好了唤醒前的准备工作（Prepare）。

---

### 5. 工作队列 (Workqueues)

```c
n: workqueue_init();
```

*   **背景**：内核中有很多任务不需要立刻做完，可以稍后做。比如：按键后不需要立刻处理完所有逻辑，可以先记录，稍后由后台线程处理。
*   **kworker**：你在 `ps aux` 里看到的一大堆 `[kworker/u16:0]` 进程就是这里诞生的。
*   **作用**：初始化管理这些后台工人的机制。没有它，硬件驱动的中断下半部（Bottom Halves）就没法跑。

---

### 6. 调度器与多核启动 (Scheduler & SMP Boot)

```c
n: smp_init();
n: sched_init_smp();
```

*   **`smp_init()`**:
    *   **最激动人心的时刻**：BSP 发送 **IPI (核间中断)** 给其他 CPU。
    *   其他 CPU 收到信号，从死循环中醒来，开始执行初始化代码，最终加入调度队列。
    *   此时，`dmesg` 会打印 `SMP: Brought up 4 CPUs` 之类的信息。
*   **`sched_init_smp()`**:
    *   **作用**：告诉调度器（Scheduler）现在有多少个 CPU 可用。
    *   **负载均衡**：调度器开始构建“调度域”，决定如何把进程均匀地分配给这几个 CPU，防止“一核有难，八核围观”。

---

### 7. 驱动模型初始化 (Driver Model Init) - 这里的 `kset` 和 `kobject` 是重点

这部分是 Linux **“万物皆文件”** 思想在 `/sys` 目录下的体现。

```c
n: driver_init();
...
n: devices_kset = kset_create_and_add("devices", ...);
n: dev_kobj = kobject_create_and_add("dev", NULL);
n: sysfs_dev_block_kobj = kobject_create_and_add("block", dev_kobj);
n: sysfs_dev_char_kobj = kobject_create_and_add("char", dev_kobj);
```

*   **`driver_init()`**:
    *   这是整个设备驱动模型的基石。它不加载具体驱动，而是搭建**目录结构**。
*   **`kobject` (Kernel Object)**:
    *   它是内核数据结构的“基类”。
    *   **作用**：每创建一个 `kobject`，就会在 `/sys` 文件系统里自动创建一个**文件夹**。
*   **代码对应的目录**：
    *   `kset_create_and_add("devices")` -> 创建 `/sys/devices/` (存放所有物理设备，如 PCI 总线、USB 设备)。
    *   `kobject_create_and_add("dev")` -> 创建 `/sys/dev/`。
    *   `...("block", dev_kobj)` -> 创建 `/sys/dev/block/` (存放磁盘块设备映射)。
    *   `...("char", dev_kobj)` -> 创建 `/sys/dev/char/` (存放字符设备映射，如鼠标、键盘)。

**为什么这很重要？**
用户态的 `udev` 或 `mdev` 守护进程就是监控这些目录的变化。一旦这里多了一个文件夹（插了U盘），`udev` 就会自动在 `/dev` 下创建对应的设备文件。

---

### 8. 挂载根文件系统与执行 Init (The Finale)

```c
prepare_namespace();
init_post();
```

这是内核态的最后绝唱。

*   **`prepare_namespace()`**:
    *   **挂载根目录**：根据启动参数（如 `root=/dev/sda1` 或 `initrd=...`），将真正的根文件系统挂载到 `/`。
    *   如果这步失败，你就会看到著名的 `Kernel panic - not syncing: VFS: Unable to mount root fs`。
*   **`init_post()`**:
    *   **寻找 Init 程序**：按顺序查找 `/sbin/init`, `/etc/init`, `/bin/init`, `/bin/sh`。
    *   **Execve**：调用 `run_init_process()`。
    *   **变身**：此时，**内核线程 `kernel_init` (PID 1)** 执行 `execve` 系统调用，将自己的代码段替换为用户态的 `/sbin/init` 程序。
    *   **完成**：从此，PID 1 变成了用户进程，Linux 启动完成，进入用户空间。

---

### 总结：如何在 GDB 中理解这一过程？

当你在这个过程中按 `n` (Next) 时，你实际上是在见证一个**“混沌开天地”**的过程：

1.  **Wait kthreadd**: 等待管家（PID 2）。
2.  **Memory Init**: 划定地盘，制定内存规矩。
3.  **SMP Init**: 唤醒沉睡的兄弟们（其他 CPU 核）。
4.  **Driver Init**: 搭建办公室架子（`/sys` 目录结构），等待具体员工（驱动程序）入驻。
5.  **Mount RootFS**: 打开仓库大门（挂载硬盘）。
6.  **Exec Init**: 老板（内核）退居幕后，聘请 CEO（`/sbin/init`）来管理公司（用户空间）。

理解这个流程，对于调试内核 Crash（知道大概死在哪个阶段）或编写 Rootkit（知道哪里是Hook的最佳时机）至关重要。