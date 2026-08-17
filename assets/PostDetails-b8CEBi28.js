import{r as p,j as e,b as Y,u as C,f as H}from"./react-vendor-Bh-3n_MM.js";import{c as _,u as O,r as U}from"./index-BVN_ike7.js";import{a as A,m as j,c as z,b as B,e as $}from"./motion-vendor-UvoY4BNv.js";import{N as W,a6 as R,a as T,a7 as Z,D as F,b as G,T as M,A as P}from"./ui-vendor-B7I3-CDB.js";import{e as K,f as X,h as J,j as Q,k as V}from"./misc-vendor-njjDjbYI.js";const ee=".markdown-sys-container h1, .markdown-sys-container h2, .markdown-sys-container h3, .markdown-sys-container h4, .markdown-sys-container h5, .markdown-sys-container h6",te=({text:m,className:x})=>{const n=p.useRef(null);return p.useEffect(()=>{const a=n.current;if(!a)return;const s=a.closest("li");if(!s)return;let r;const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*",c=Array.from(m),d=c.length,h=()=>{cancelAnimationFrame(r);let o=0;const b=()=>{let f="";for(let y=0;y<d;y++)y<o?f+=c[y]:f+=g[Math.floor(Math.random()*g.length)];a.textContent=f,o<d?(o+=Math.max(1,d/10),r=requestAnimationFrame(b)):a.textContent=m};r=requestAnimationFrame(b)};return s.addEventListener("sys-decrypt-trigger",h),()=>{s.removeEventListener("sys-decrypt-trigger",h),cancelAnimationFrame(r)}},[m]),e.jsx("span",{ref:n,className:x,children:m})},se=({content:m,isOpen:x,setIsOpen:n,isMobile:a})=>{const[s,r]=p.useState([]),g=p.useRef(""),c=p.useRef({}),d=p.useRef(null),h=A(0,{stiffness:300,damping:30,mass:.8}),o=A(20,{stiffness:300,damping:30}),b=A(0,{stiffness:300,damping:30});p.useEffect(()=>{const t=Array.from(document.querySelectorAll(ee)),u=[],i=[];let l=0;t.forEach(v=>{if(!v.id)return;const k=parseInt(v.tagName[1]),S=`0x${l.toString(16).toUpperCase().padStart(2,"0")}`,N={id:v.id,text:v.textContent||"UNKNOWN_NODE",level:k,hexId:S,children:[]};for(l++;i.length>0&&i[i.length-1].level>=k;)i.pop();i.length===0?u.push(N):i[i.length-1].children.push(N),i.push(N)}),r(u)},[m]);const f=p.useCallback(t=>{if(g.current===t)return;g.current=t;const u=c.current[t];if(u&&d.current){const i=u.offsetTop;h.set(i),o.set(u.offsetHeight),b.set(1);const l=i-d.current.offsetHeight/2+u.offsetHeight/2;d.current.scrollTo({top:l,behavior:"smooth"})}Object.entries(c.current).forEach(([i,l])=>{i===t?(l.classList.add("toc-item-active"),l.dispatchEvent(new CustomEvent("sys-decrypt-trigger"))):l.classList.remove("toc-item-active")})},[h,o,b]);p.useEffect(()=>{if(s.length===0){b.set(0);return}const t=s.flatMap(i=>{const l=v=>[v.id,...v.children.flatMap(l)];return l(i)}).map(i=>document.getElementById(i)).filter(Boolean),u=new IntersectionObserver(i=>{const l=i.filter(v=>v.isIntersecting);l.length>0&&(l.sort((v,k)=>v.boundingClientRect.top-k.boundingClientRect.top),f(l[0].target.id))},{rootMargin:"-10% 0px -80% 0px",threshold:0});return t.forEach(i=>u.observe(i)),()=>u.disconnect()},[s,f,b]);const y=p.useCallback(t=>{const u=document.getElementById(t);if(!u)return;const i=u.getBoundingClientRect().top+window.scrollY-80,l=window.scrollY,v=i-l,k=800;let S=null;const N=I=>{S||(S=I);const E=Math.min((I-S)/k,1),D=E<.5?16*Math.pow(E,5):1-Math.pow(-2*E+2,5)/2;window.scrollTo(0,l+v*D),E<1&&window.requestAnimationFrame(N)};window.requestAnimationFrame(N),a&&n(!1)},[a,n]),w=({node:t})=>{const u=t.level===1?"pl-2":t.level===2?"pl-6":"pl-10",i=t.level===1?"font-bold tracking-wider uppercase text-[13px]":"";return e.jsxs("li",{ref:l=>{l?c.current[t.id]=l:delete c.current[t.id]},className:"relative py-1.5",children:[e.jsxs("div",{onClick:()=>y(t.id),className:_("toc-node-container group flex items-center cursor-pointer transition-colors duration-300 w-full relative z-10",u),children:[e.jsxs("span",{className:"toc-hex font-mono text-[8px] tracking-widest mr-3 transition-colors",children:["[",t.hexId,"]"]}),e.jsx(te,{text:t.text,className:_("toc-text font-mono text-xs truncate transition-all duration-300",i)}),e.jsxs("span",{className:"toc-jump-icon ml-auto opacity-0 transition-opacity flex items-center gap-1 text-[9px] text-cyan-800 font-mono pr-2",children:["JUMP ",e.jsx(T,{className:"w-3 h-3"})]})]}),t.children.length>0&&e.jsxs("ul",{className:"relative mt-1",children:[e.jsx("div",{className:_("absolute left-3 top-0 bottom-0 w-[1px] bg-cyan-950",t.level>1&&"left-7")}),t.children.map(l=>e.jsx(w,{node:l},l.id))]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* 
           【极致优化点 4：C++ 级 CSS 视觉状态机】
           我们撤销了原代码中所有的 React 动态字符串插值 (如 isActive ? 'text-cyan-400' : 'text-slate-500')。
           现在所有复杂的层级颜色渐变、光晕、物理位移，全由浏览器底层通过命中 .toc-item-active 原生接管！
           真正实现了 144Hz 极度丝滑的滚动！
        */
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(8, 145, 178, 0.3); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.8); }

        .toc-node-container { color: rgba(22, 78, 99, 0.6); }
        .toc-node-container:hover { color: #0891b2; }
        .toc-hex { color: #042f2e; }
        .toc-node-container:hover .toc-hex { color: #155e75; }

        .toc-item-active > .toc-node-container { color: #22d3ee; }
        .toc-item-active > .toc-node-container .toc-hex { color: #67e8f9; }
        .toc-item-active > .toc-node-container .toc-text {
            text-shadow: 0 0 8px rgba(34,211,238,0.8);
            transform: translateX(4px);
        }
        .toc-item-active > .toc-node-container .toc-jump-icon { opacity: 1; }
      `}),e.jsx("button",{className:_("fixed z-40 transition-all duration-500 ease-out flex items-center justify-center border border-cyan-900/50 bg-[#050505]/80 backdrop-blur-md text-cyan-500 hover:border-cyan-400 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] will-change-transform transform-gpu",a?"bottom-8 right-8 h-12 w-12 rounded-full shadow-[0_0_20px_rgba(0,0,0,1)]":`top-32 right-12 h-10 w-10 rounded-sm ${x?"opacity-0 pointer-events-none translate-x-10":"opacity-100"}`),onClick:()=>n(!x),children:e.jsx(W,{className:"h-4 w-4"})}),e.jsxs("div",{className:_("fixed z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyan-900/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col transition-all duration-500 will-change-transform transform-gpu",a?"inset-x-0 bottom-0 rounded-t-xl border-b-0 h-[65vh]":"top-32 right-12 rounded-sm w-72 max-h-[70vh]"),style:{transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",transform:x?"translateY(0) translateX(0)":a?"translateY(100%)":"translateX(120%)",opacity:x?1:0,pointerEvents:x?"auto":"none"},children:[e.jsxs("div",{className:"p-4 border-b border-cyan-900/30 flex justify-between items-center bg-cyan-950/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{className:"w-4 h-4 text-cyan-500 animate-pulse"}),e.jsx("span",{className:"font-mono text-xs text-cyan-500 tracking-widest uppercase font-bold",children:"TOPOLOGY_RADAR"})]}),e.jsx("button",{onClick:()=>n(!1),className:"h-6 w-6 flex items-center justify-center rounded hover:bg-cyan-900/30 text-cyan-700 hover:text-cyan-300 transition-colors",children:e.jsx(T,{className:_("h-4 w-4 transition-transform",a?"rotate-90":"")})})]}),e.jsxs("div",{className:"relative flex-1 overflow-hidden p-2",children:[e.jsx(j.div,{className:"absolute left-2 w-[3px] bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] z-20 pointer-events-none will-change-transform transform-gpu",style:{y:h,height:o,opacity:b}}),e.jsxs("div",{ref:d,className:"h-full overflow-y-auto custom-scrollbar font-mono pr-2 relative",children:[e.jsx("ul",{className:"space-y-1 relative pb-10",children:s.map(t=>e.jsx(w,{node:t},t.id))}),s.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-cyan-900/50 font-mono text-[10px] space-y-2",children:[e.jsx(R,{className:"w-8 h-8 animate-ping opacity-20"}),e.jsx("span",{children:"NO_ANCHORS_DETECTED"})]})]})]}),e.jsxs("div",{className:"p-2 border-t border-cyan-900/30 bg-cyan-950/20 text-[9px] font-mono text-cyan-700 flex justify-between items-center",children:[e.jsxs("span",{children:["NODES: 0x",s.length.toString(16).toUpperCase().padStart(2,"0")]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"SYNC: ACTIVE"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"})]})]})]}),a&&x&&e.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300",onClick:()=>n(!1)})]})},q=document.createElement("template");q.innerHTML=`
  <div class="terminal-header absolute top-0 left-0 w-full h-9 bg-[#02040a]/95 border-b border-[#0ea5e9]/30 flex items-center justify-between px-4 select-none backdrop-blur-md z-10 shadow-[0_2px_8px_-2px_rgba(14,165,233,0.15)]">
    <div class="flex gap-2 items-center">
      <div class="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_6px_#ef4444]"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_6px_#eab308]"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_6px_#10b981]"></div>
    </div>
    <div class="flex items-center gap-3 text-[10px] font-mono text-[#0ea5e9]/70 uppercase tracking-[1.5px]">
      <span class="process-id">PROCESS_0x00</span>
      <div class="w-px h-3 bg-[#0ea5e9]/40"></div>
      <span class="inline-flex items-center gap-1">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
        </span>
        LIVE
      </span>
    </div>
  </div>
`;const L=(m,x=800)=>{const n=window.scrollY,a=m-n;let s=null;const r=g=>{s||(s=g);const c=Math.min((g-s)/x,1),d=1-Math.pow(1-c,5);window.scrollTo(0,n+a*d),c<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},ne=({content:m,children:x})=>{const n=Y(),a=C(),s=p.useRef(null),{scrollYProgress:r}=z(),g=A(r,{stiffness:200,damping:25,mass:.5});return p.useEffect(()=>{if(!s.current)return;const c=s.current;c.querySelectorAll("pre:not([data-sys-injected])").forEach((o,b)=>{o.setAttribute("data-sys-injected","true"),o.style.position="relative",o.style.paddingTop="2.75rem",o.classList.add("sys-code-block");const f=q.content.cloneNode(!0),y=`0x${b.toString(16).toUpperCase().padStart(2,"0")}`,w=f.querySelector(".process-id");w&&(w.textContent=`PROCESS_${y}`),o.appendChild(f)}),c.querySelectorAll('a[href^="http"]:not(.external-cyber-link)').forEach(o=>{o.setAttribute("target","_blank"),o.setAttribute("rel","noopener noreferrer"),o.classList.add("external-cyber-link")})},[m]),p.useEffect(()=>{if(!s.current)return;const c=s.current.querySelectorAll("p, h1, h2, h3, h4, li, blockquote, img, table, pre"),d=new IntersectionObserver(h=>{h.forEach(o=>{o.isIntersecting&&(o.target.classList.add("sys-reveal-visible"),d.unobserve(o.target))})},{rootMargin:"0px 0px -40px 0px",threshold:.15});return c.forEach(h=>d.observe(h)),()=>d.disconnect()},[m]),p.useEffect(()=>{const c=s.current;if(!c)return;const d=h=>{const o=h.target.closest("a");if(!o)return;const b=o.getAttribute("href");if(b!=null&&b.startsWith("#")&&!b.startsWith("#/")){h.preventDefault();const f=b.slice(1),y=document.getElementById(f);if(y){const w=y.getBoundingClientRect().top+window.scrollY-100;L(w,800),y.animate([{filter:"brightness(2.5)",transform:"translateX(12px)",textShadow:"0 0 20px #22d3ee"},{filter:"brightness(1)",transform:"translateX(0)",textShadow:"0 0 0 transparent"}],{duration:1100,easing:"cubic-bezier(0.16, 1, 0.3, 1)"});const t=new URLSearchParams(n.search);t.set("scrollTo",f),a(`${n.pathname}?${t.toString()}`,{replace:!0})}}};return c.addEventListener("click",d),()=>c.removeEventListener("click",d)},[n,a]),p.useEffect(()=>{const d=new URLSearchParams(n.search).get("scrollTo");if(d){const h=document.getElementById(d);h&&L(h.getBoundingClientRect().top+window.scrollY-100,1e3)}},[n.search]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .markdown-sys-container {
          font-family: 'Segoe UI', 'PingFang SC', 'Noto Sans SC', sans-serif;
          color: #cbd5e1;
          line-height: 1.85;
          font-size: 1.05rem;
        }
        .markdown-sys-container > * + * {
          margin-top: 1.45rem;
        }
        .markdown-sys-container h1,
        .markdown-sys-container h2,
        .markdown-sys-container h3 {
          font-family: 'JetBrains Mono', monospace;
          color: #f1f5f9;
          font-weight: 700;
          letter-spacing: -0.04em;
          position: relative;
          padding-left: 1.75rem;
        }
        .markdown-sys-container h1,
        .markdown-sys-container h2 {
          margin-top: 3.4rem;
          margin-bottom: 1.2rem;
        }
        .markdown-sys-container h3,
        .markdown-sys-container h4 {
          margin-top: 2.4rem;
          margin-bottom: 0.9rem;
        }
        .markdown-sys-container h2::before,
        .markdown-sys-container h3::before {
          content: '◉';
          position: absolute;
          left: 0;
          color: #0ea5e9;
          opacity: 0.6;
          font-size: 0.85em;
        }
        .markdown-sys-container h1::before { content: '◆'; }
        .markdown-sys-container p,
        .markdown-sys-container li {
          letter-spacing: 0.01em;
        }
        .markdown-sys-container ul,
        .markdown-sys-container ol {
          padding-left: 1.25rem;
        }
        .markdown-sys-container hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.35), transparent);
          margin: 3rem 0;
        }

        /* 代码块增强 */
        .sys-code-block {
          background: #02040a !important;
          border: 1px solid rgba(14, 165, 233, 0.25);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 
            0 10px 30px -10px rgba(0,0,0,0.9),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .terminal-header { 
          box-shadow: 0 1px 0 rgba(14,165,233,0.15) inset; 
        }

        /* 段落揭示 - 数据流效果 */
        .markdown-sys-container p:not(.sys-reveal-visible),
        .markdown-sys-container h1:not(.sys-reveal-visible),
        .markdown-sys-container h2:not(.sys-reveal-visible),
        .markdown-sys-container h3:not(.sys-reveal-visible),
        .markdown-sys-container h4:not(.sys-reveal-visible),
        .markdown-sys-container li:not(.sys-reveal-visible),
        .markdown-sys-container blockquote:not(.sys-reveal-visible),
        .markdown-sys-container img:not(.sys-reveal-visible),
        .markdown-sys-container table:not(.sys-reveal-visible),
        .markdown-sys-container pre:not(.sys-reveal-visible) {
          opacity: 0;
          transform: translateY(18px);
          transition: none;
        }
        .sys-reveal-visible {
          opacity: 1;
          transform: translateY(0);
          will-change: opacity, transform;
          transition: 
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 选中文本 - 数据泄露感 */
        .markdown-sys-container ::selection {
          background: rgba(14, 165, 233, 0.35);
          color: #fff;
          text-shadow: 0 0 12px rgba(14, 165, 233, 0.9);
        }

        .external-cyber-link {
          color: #22d3ee;
          text-decoration: none;
          border-bottom: 1px dashed rgba(14, 165, 233, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .external-cyber-link:hover {
          border-bottom-style: solid;
          text-shadow: 0 0 12px #22d3ee;
          background: rgba(14, 165, 233, 0.08);
        }

        /* ==================== 表格赛博终端风格 ==================== */
        .markdown-sys-container table {
          width: 100%;
          border-collapse: collapse;
          background: #02040a !important;
          border: 1px solid rgba(14, 165, 233, 0.25);
          border-radius: 6px;
          overflow: hidden;
          box-shadow:
            0 10px 30px -10px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          margin: 2.5rem 0;
        }

        .markdown-sys-container th,
        .markdown-sys-container td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(14, 165, 233, 0.15);
          text-align: left;
          vertical-align: top;
          font-size: 1.02rem;
          line-height: 1.7;
        }

        .markdown-sys-container th {
          background: rgba(14, 165, 233, 0.08);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          color: #f1f5f9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.95rem;
        }

        .markdown-sys-container tr:last-child td {
          border-bottom: none;
        }

        .markdown-sys-container tr:hover {
          background: rgba(14, 165, 233, 0.06);
        }

        /* 表格内多行 <br> 增强可读性 */
        .markdown-sys-container td br {
          display: block;
          margin: 0.4em 0;
          content: '';
        }
      `}),e.jsx(j.div,{style:{scaleX:g},className:"fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent origin-left z-[9999] shadow-[0_0_15px_#22d3ee] pointer-events-none will-change-transform"}),e.jsx("div",{className:"markdown-sys-container relative w-full max-w-none",ref:s,children:x})]})},ae=()=>m=>{const x=[];let n=[],a=null;const s=m;if(s.children.forEach(r=>{if(r.type==="heading"){const g=r;if(n.length>0){const c={type:"element",tagName:"div",properties:{className:[`section-level-${a}`]},children:n};x.push(c),n=[]}a=g.depth,n.push(r)}else n.push(r)}),n.length>0){const r={type:"element",tagName:"div",properties:{className:[`section-level-${a}`]},children:n};x.push(r)}s.children=x},re=()=>{const{scrollYProgress:m}=z(),x=B(m,a=>`0x${Math.floor(a*255).toString(16).toUpperCase().padStart(2,"0")}`),n=$`[READ_OFFSET: ${x}]`;return e.jsxs(j.div,{className:"fixed top-8 right-8 z-50 text-[10px] font-mono text-cyan-500 tracking-widest bg-[#050505]/80 backdrop-blur-md border border-cyan-900/50 px-2 py-1 shadow-[0_0_10px_rgba(6,182,212,0.2)] hidden md:flex items-center gap-2 mix-blend-screen",children:[e.jsx(P,{className:"w-3 h-3 animate-pulse"}),e.jsx(j.span,{children:n})]})},oe=()=>{const m=C();return e.jsxs("div",{className:"relative flex min-h-screen items-start justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))] p-8 font-mono text-white selection:bg-cyan-300/30 selection:text-cyan-50 md:p-16",children:[e.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTAzLDIzMiwyNDksMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_0_28%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.08),transparent_0_22%)] pointer-events-none"}),e.jsx(j.div,{animate:{opacity:[1,.8,1,.5,1]},transition:{repeat:1/0,duration:.2},className:"mb-8 border border-cyan-300/40 bg-cyan-100 text-[#031015] px-2 py-1 text-2xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.18)]",children:"FATAL_ERROR"}),e.jsx("div",{className:"text-xl md:text-3xl tracking-tight mb-4",children:"A problem has been detected and LUNA_OS has been shut down to prevent damage to your consciousness."}),e.jsxs("div",{className:"text-sm md:text-lg opacity-80 mb-8 max-w-4xl leading-relaxed",children:["PAGE_FAULT_IN_NONPAGED_AREA",e.jsx("br",{}),e.jsx("br",{}),"If this is the first time you've seen this stop error screen, restart your terminal. If this screen appears again, follow these steps:",e.jsx("br",{}),e.jsx("br",{}),"Check to make sure any new neural hardware or software is properly installed. If this is a new installation, ask your hardware manufacturer for any LUNA updates you might need."]}),e.jsxs("div",{className:"mb-12 flex flex-col gap-1 text-sm text-cyan-100/60",children:[e.jsx("span",{children:"*** STOP: 0x00000050 (0xFFFFF80002A90000, 0x0000000000000000, 0xFFFFF80002A90000, 0x0000000000000000)"}),e.jsx("span",{children:"*** sys_core_router.sys - Address 0xFFFFF80002A90000 base at 0xFFFFF80002A90000, DateStamp 64f1a2b3"})]}),e.jsxs("button",{onClick:()=>m("/"),className:"flex items-center gap-2 border-2 border-cyan-300 px-6 py-2 font-bold uppercase tracking-widest text-cyan-100 transition-colors hover:bg-cyan-100 hover:text-[#031015]",children:[e.jsx(M,{className:"w-5 h-5"})," Reboot System"]})]})},ie=()=>e.jsx("div",{className:"min-h-screen bg-[#050505] px-6 py-24 text-slate-300",children:e.jsxs("div",{className:"mx-auto max-w-4xl border border-cyan-900/40 bg-[#060a12]/85 p-8 font-mono shadow-[0_0_40px_rgba(0,0,0,0.45)]",children:[e.jsx("div",{className:"mb-4 text-[10px] uppercase tracking-[0.32em] text-cyan-600",children:"Archive Link Established"}),e.jsx("div",{className:"text-sm uppercase tracking-[0.2em] text-slate-500",children:"Streaming markdown payload..."}),e.jsx("div",{className:"mt-6 h-px w-full overflow-hidden bg-cyan-950/60",children:e.jsx("div",{className:"h-full w-1/3 animate-[pulse_1s_linear_infinite] bg-cyan-400/80"})})]})}),xe=()=>{const{"*":m}=H(),x=C(),{posts:n,loadContent:a}=O(),s=p.useMemo(()=>m?n.find(t=>t.contentKey===m):void 0,[n,m]),[r,g]=p.useState(void 0),[c,d]=p.useState(!1),[h,o]=p.useState(!1),[b,f]=p.useState(!0);p.useEffect(()=>{const t=()=>o(window.innerWidth<1024);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),p.useEffect(()=>{let t=!1;if(!s){g(void 0),f(!1);return}return g(void 0),f(!0),a(s.contentKey).then(u=>{t||g(u)},()=>{t||g(void 0)}).finally(()=>{t||f(!1)}),()=>{t=!0}},[s,a]);const y=p.useMemo(()=>{if(!r)return{words:0,time:0,hexSize:"0x00"};const t=r.length;return{words:t,time:Math.max(1,Math.ceil(t/400)),hexSize:`0x${(t*2).toString(16).toUpperCase()}`}},[r]);if(b)return e.jsx(ie,{});if(!s||!r)return e.jsx(oe,{});const w=t=>{t.preventDefault(),U(()=>x("/"))};return e.jsxs(j.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"relative min-h-screen w-full bg-[#050505] text-slate-300",children:[e.jsx(re,{}),e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_0_26%),radial-gradient(circle_at_82%_14%,rgba(20,184,166,0.07),transparent_0_24%),linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))]"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.05]",style:{backgroundImage:"linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",backgroundSize:"96px 96px"}})]}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-24",children:[e.jsx("div",{className:"mb-12",children:e.jsxs("a",{href:"/",onClick:w,className:"group inline-flex items-center gap-2 font-mono text-xs text-cyan-600 hover:text-cyan-300 transition-colors cursor-none",children:[e.jsx("div",{className:"p-1.5 border border-cyan-900/50 bg-cyan-950/20 group-hover:bg-cyan-500/20 transition-colors",children:e.jsx(Z,{className:"w-3 h-3"})}),e.jsxs("span",{className:"tracking-[0.2em] uppercase relative",children:[e.jsx("span",{className:"opacity-50 mr-2",children:"cd"}),"..",e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"})]})]})}),e.jsxs("div",{className:"relative mb-16 overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,24,0.86),rgba(4,8,16,0.58))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl md:px-8 md:py-10",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_0_32%)]"}),e.jsx("div",{className:"pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-700",children:[e.jsx("span",{children:"Archive Entry"}),e.jsxs("span",{className:"text-slate-500",children:["Sector / ",s.category]})]}),e.jsx("h1",{className:"mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-[-0.05em] text-slate-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.12)] md:text-6xl lg:text-7xl",style:{viewTransitionName:`post-title-${s.id}`},children:s.title}),e.jsx("p",{className:"mb-10 max-w-3xl text-sm leading-7 text-slate-400 md:text-base",children:"Structured as a reading terminal, treated like a publication. The chrome stays cybernetic, but the typography and spacing should let the content feel carefully edited instead of merely decorated."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:grid-cols-5",children:[e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(F,{className:"w-3 h-3"})," Sector"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.category})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(G,{className:"w-3 h-3"})," Mem_Alloc"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:y.hexSize})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(M,{className:"w-3 h-3"})," Timestamp"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.date})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(P,{className:"w-3 h-3"})," Est_Read"]}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[y.time," min"]})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(F,{className:"w-3 h-3"})," Author"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.author})]})]})]})]}),e.jsxs(j.div,{initial:{clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)",filter:"brightness(2) blur(10px)"},animate:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",filter:"brightness(1) blur(0px)"},transition:{duration:1.2,ease:[.16,1,.3,1],delay:.2},className:"relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(5,8,15,0.9),rgba(4,7,13,0.72))] px-5 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-8 md:py-10",children:[e.jsx(j.div,{initial:{top:"0%",opacity:1},animate:{top:"100%",opacity:0},transition:{duration:1.2,ease:[.16,1,.3,1],delay:.2},className:"absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#06b6d4] z-50 pointer-events-none"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cyan-500/8 to-transparent"}),e.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"}),e.jsx("div",{className:`
              prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tighter prose-headings:uppercase
              prose-h1:text-cyan-50 prose-h2:text-cyan-100 prose-h3:text-cyan-200
              prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:font-sans
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
              prose-pre:bg-[#020617] prose-pre:border prose-pre:border-cyan-900/30 prose-pre:rounded-sm
              prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-950/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-slate-400 prose-blockquote:font-mono prose-blockquote:not-italic
              prose-img:rounded-sm prose-img:border prose-img:border-white/10 prose-img:grayscale-[50%] hover:prose-img:grayscale-0 prose-img:transition-all prose-img:duration-500
              prose-code:text-pink-400 prose-code:bg-pink-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              marker:text-cyan-500
          `,children:e.jsx(ne,{content:r,children:e.jsx(K,{remarkPlugins:[X,J,ae],rehypePlugins:[Q,V],children:r})})})]})]}),e.jsx(se,{content:r,isOpen:c,setIsOpen:d,isMobile:h})]})};export{xe as default};
