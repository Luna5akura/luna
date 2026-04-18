import{r as d,j as e,u as D,b as I,g as H}from"./react-vendor-D5uu0Jun.js";import{c as S,u as O}from"./index-CH1RwYpQ.js";import{a as C,m as k,d as L,b as U,f as B}from"./motion-vendor-6AVJ7XyZ.js";import{N as $,m as T,a as R,n as W,D as F,b as Z,T as M,A as P}from"./ui-vendor-td_faU8Q.js";import{M as G,r as K,a as X,b as J,c as V}from"./markdown-vendor-C9hxAi1z.js";import"./misc-vendor-H0r4-IPV.js";const Q=({text:p,className:m})=>{const n=d.useRef(null);return d.useEffect(()=>{const o=n.current;if(!o)return;const s=o.closest("li");if(!s)return;let x;const h="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*",c=()=>{cancelAnimationFrame(x);let l=0;const b=p.length,r=()=>{let u="";for(let f=0;f<b;f++)f<l?u+=p[f]:u+=h[Math.floor(Math.random()*h.length)];o.textContent=u,l<b?(l+=Math.max(1,b/10),x=requestAnimationFrame(r)):o.textContent=p};x=requestAnimationFrame(r)};return s.addEventListener("sys-decrypt-trigger",c),()=>{s.removeEventListener("sys-decrypt-trigger",c),cancelAnimationFrame(x)}},[p]),e.jsx("span",{ref:n,className:m,children:p})},ee=({content:p,isOpen:m,setIsOpen:n,isMobile:o})=>{const[s,x]=d.useState([]),h=d.useRef(""),c=d.useRef({}),l=d.useRef(null),b=C(0,{stiffness:300,damping:30,mass:.8}),r=C(20,{stiffness:300,damping:30}),u=C(0,{stiffness:300,damping:30});d.useEffect(()=>{const i=setTimeout(()=>{const a=Array.from(document.querySelectorAll(".markdown-sys-container h1, .markdown-sys-container h2, .markdown-sys-container h3, .markdown-sys-container h4, .markdown-sys-container h5, .markdown-sys-container h6")),g=[],t=[];let y=0;a.forEach(j=>{j.id||(j.id=`sys-node-${Math.random().toString(36).substr(2,9)}`);const N=parseInt(j.tagName[1]),E=`0x${y.toString(16).toUpperCase().padStart(2,"0")}`,_={id:j.id,text:j.textContent||"UNKNOWN_NODE",level:N,hexId:E,children:[]};for(y++;t.length>0&&t[t.length-1].level>=N;)t.pop();t.length===0?g.push(_):t[t.length-1].children.push(_),t.push(_)}),x(g)},300);return()=>clearTimeout(i)},[p]);const f=d.useCallback(i=>{if(h.current===i)return;h.current=i;const a=c.current[i];if(a&&l.current){const g=a.offsetTop;b.set(g),r.set(a.offsetHeight),u.set(1);const t=g-l.current.offsetHeight/2+a.offsetHeight/2;l.current.scrollTo({top:t,behavior:"smooth"})}Object.entries(c.current).forEach(([g,t])=>{t&&(g===i?(t.classList.add("toc-item-active"),t.dispatchEvent(new CustomEvent("sys-decrypt-trigger"))):t.classList.remove("toc-item-active"))})},[b,r,u]);d.useEffect(()=>{if(s.length===0){u.set(0);return}const i=s.flatMap(g=>{const t=y=>[y.id,...y.children.flatMap(t)];return t(g)}).map(g=>document.getElementById(g)).filter(Boolean),a=new IntersectionObserver(g=>{const t=g.filter(y=>y.isIntersecting);t.length>0&&(t.sort((y,j)=>y.boundingClientRect.top-j.boundingClientRect.top),f(t[0].target.id))},{rootMargin:"-10% 0px -80% 0px",threshold:0});return i.forEach(g=>a.observe(g)),()=>a.disconnect()},[s,f,u]);const w=d.useCallback(i=>{const a=document.getElementById(i);if(!a)return;const g=a.getBoundingClientRect().top+window.scrollY-80,t=window.scrollY,y=g-t,j=800;let N=null;const E=_=>{N||(N=_);const A=Math.min((_-N)/j,1),Y=A<.5?16*Math.pow(A,5):1-Math.pow(-2*A+2,5)/2;window.scrollTo(0,t+y*Y),A<1&&window.requestAnimationFrame(E)};window.requestAnimationFrame(E),o&&n(!1)},[o,n]),v=({node:i})=>{const a=i.level===1?"pl-2":i.level===2?"pl-6":"pl-10",g=i.level===1?"font-bold tracking-wider uppercase text-[13px]":"";return e.jsxs("li",{ref:t=>{t&&(c.current[i.id]=t)},className:"relative py-1.5",children:[e.jsxs("div",{onClick:()=>w(i.id),className:S("toc-node-container group flex items-center cursor-pointer transition-colors duration-300 w-full relative z-10",a),children:[e.jsxs("span",{className:"toc-hex font-mono text-[8px] tracking-widest mr-3 transition-colors",children:["[",i.hexId,"]"]}),e.jsx(Q,{text:i.text,className:S("toc-text font-mono text-xs truncate transition-all duration-300",g)}),e.jsxs("span",{className:"toc-jump-icon ml-auto opacity-0 transition-opacity flex items-center gap-1 text-[9px] text-cyan-800 font-mono pr-2",children:["JUMP ",e.jsx(R,{className:"w-3 h-3"})]})]}),i.children.length>0&&e.jsxs("ul",{className:"relative mt-1",children:[e.jsx("div",{className:S("absolute left-3 top-0 bottom-0 w-[1px] bg-cyan-950",i.level>1&&"left-7")}),i.children.map(t=>e.jsx(v,{node:t},t.id))]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("button",{className:S("fixed z-40 transition-all duration-500 ease-out flex items-center justify-center border border-cyan-900/50 bg-[#050505]/80 backdrop-blur-md text-cyan-500 hover:border-cyan-400 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] will-change-transform transform-gpu",o?"bottom-8 right-8 h-12 w-12 rounded-full shadow-[0_0_20px_rgba(0,0,0,1)]":`top-32 right-12 h-10 w-10 rounded-sm ${m?"opacity-0 pointer-events-none translate-x-10":"opacity-100"}`),onClick:()=>n(!m),children:e.jsx($,{className:"h-4 w-4"})}),e.jsxs("div",{className:S("fixed z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyan-900/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col transition-all duration-500 will-change-transform transform-gpu",o?"inset-x-0 bottom-0 rounded-t-xl border-b-0 h-[65vh]":"top-32 right-12 rounded-sm w-72 max-h-[70vh]"),style:{transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",transform:m?"translateY(0) translateX(0)":o?"translateY(100%)":"translateX(120%)",opacity:m?1:0,pointerEvents:m?"auto":"none"},children:[e.jsxs("div",{className:"p-4 border-b border-cyan-900/30 flex justify-between items-center bg-cyan-950/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{className:"w-4 h-4 text-cyan-500 animate-pulse"}),e.jsx("span",{className:"font-mono text-xs text-cyan-500 tracking-widest uppercase font-bold",children:"TOPOLOGY_RADAR"})]}),e.jsx("button",{onClick:()=>n(!1),className:"h-6 w-6 flex items-center justify-center rounded hover:bg-cyan-900/30 text-cyan-700 hover:text-cyan-300 transition-colors",children:e.jsx(R,{className:S("h-4 w-4 transition-transform",o?"rotate-90":"")})})]}),e.jsxs("div",{className:"relative flex-1 overflow-hidden p-2",children:[e.jsx(k.div,{className:"absolute left-2 w-[3px] bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] z-20 pointer-events-none will-change-transform transform-gpu",style:{y:b,height:r,opacity:u}}),e.jsxs("div",{ref:l,className:"h-full overflow-y-auto custom-scrollbar font-mono pr-2 relative",children:[e.jsx("ul",{className:"space-y-1 relative pb-10",children:s.map(i=>e.jsx(v,{node:i},i.id))}),s.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-cyan-900/50 font-mono text-[10px] space-y-2",children:[e.jsx(T,{className:"w-8 h-8 animate-ping opacity-20"}),e.jsx("span",{children:"NO_ANCHORS_DETECTED"})]})]})]}),e.jsxs("div",{className:"p-2 border-t border-cyan-900/30 bg-cyan-950/20 text-[9px] font-mono text-cyan-700 flex justify-between items-center",children:[e.jsxs("span",{children:["NODES: 0x",s.length.toString(16).toUpperCase().padStart(2,"0")]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"SYNC: ACTIVE"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"})]})]})]}),o&&m&&e.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300",onClick:()=>n(!1)})]})},q=document.createElement("template");q.innerHTML=`
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
`;const z=(p,m=800)=>{const n=window.scrollY,o=p-n;let s=null;const x=h=>{s||(s=h);const c=Math.min((h-s)/m,1),l=1-Math.pow(1-c,5);window.scrollTo(0,n+o*l),c<1&&requestAnimationFrame(x)};requestAnimationFrame(x)},te=({content:p,children:m})=>{const n=D(),o=I(),s=d.useRef(null),{scrollYProgress:x}=L(),h=C(x,{stiffness:200,damping:25,mass:.5});return d.useEffect(()=>{if(!s.current)return;const c=s.current;c.querySelectorAll("pre:not([data-sys-injected])").forEach((r,u)=>{r.setAttribute("data-sys-injected","true"),r.style.position="relative",r.style.paddingTop="2.75rem",r.classList.add("sys-code-block");const f=q.content.cloneNode(!0),w=`0x${u.toString(16).toUpperCase().padStart(2,"0")}`,v=f.querySelector(".process-id");v&&(v.textContent=`PROCESS_${w}`),r.appendChild(f)}),c.querySelectorAll('a[href^="http"]:not(.external-cyber-link)').forEach(r=>{r.setAttribute("target","_blank"),r.setAttribute("rel","noopener noreferrer"),r.classList.add("external-cyber-link")})},[p]),d.useEffect(()=>{if(!s.current)return;const c=s.current.querySelectorAll("p, h1, h2, h3, h4, li, blockquote, img, table, pre"),l=new IntersectionObserver(b=>{b.forEach(r=>{r.isIntersecting&&(r.target.classList.add("sys-reveal-visible"),l.unobserve(r.target))})},{rootMargin:"0px 0px -40px 0px",threshold:.15});return c.forEach(b=>l.observe(b)),()=>l.disconnect()},[p]),d.useEffect(()=>{const c=l=>{const b=l.target.closest("a");if(!b)return;const r=b.getAttribute("href");if(r!=null&&r.startsWith("#")&&!r.startsWith("#/")){l.preventDefault();const u=r.slice(1),f=document.getElementById(u);if(f){const w=f.getBoundingClientRect().top+window.scrollY-100;z(w,800),f.animate([{filter:"brightness(2.5)",transform:"translateX(12px)",textShadow:"0 0 20px #22d3ee"},{filter:"brightness(1)",transform:"translateX(0)",textShadow:"0 0 0 transparent"}],{duration:1100,easing:"cubic-bezier(0.16, 1, 0.3, 1)"});const v=new URLSearchParams(n.search);v.set("scrollTo",u),o(`${n.pathname}?${v.toString()}`,{replace:!0})}}};return document.addEventListener("click",c,{capture:!0}),()=>document.removeEventListener("click",c,{capture:!0})},[n,o]),d.useEffect(()=>{const l=new URLSearchParams(n.search).get("scrollTo");l&&setTimeout(()=>{const b=document.getElementById(l);b&&z(b.getBoundingClientRect().top+window.scrollY-100,1e3)},300)},[n.search]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx(k.div,{style:{scaleX:h},className:"fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent origin-left z-[9999] shadow-[0_0_15px_#22d3ee] pointer-events-none will-change-transform"}),e.jsx("div",{className:"markdown-sys-container relative w-full max-w-none",ref:s,children:m})]})},se=()=>p=>{const m=[];let n=[],o=null;const s=p;if(s.children.forEach(x=>{if(x.type==="heading"){const h=x;if(n.length>0){const c={type:"element",tagName:"div",properties:{className:[`section-level-${o}`]},children:n};m.push(c),n=[]}o=h.depth,n.push(x)}else n.push(x)}),n.length>0){const x={type:"element",tagName:"div",properties:{className:[`section-level-${o}`]},children:n};m.push(x)}s.children=m},ne=()=>{const{scrollYProgress:p}=L(),m=U(p,o=>`0x${Math.floor(o*255).toString(16).toUpperCase().padStart(2,"0")}`),n=B`[READ_OFFSET: ${m}]`;return e.jsxs(k.div,{className:"fixed top-8 right-8 z-50 text-[10px] font-mono text-cyan-500 tracking-widest bg-[#050505]/80 backdrop-blur-md border border-cyan-900/50 px-2 py-1 shadow-[0_0_10px_rgba(6,182,212,0.2)] hidden md:flex items-center gap-2 mix-blend-screen",children:[e.jsx(P,{className:"w-3 h-3 animate-pulse"}),e.jsx(k.span,{children:n})]})},ae=()=>{const p=I();return e.jsxs("div",{className:"relative flex min-h-screen items-start justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))] p-8 font-mono text-white selection:bg-cyan-300/30 selection:text-cyan-50 md:p-16",children:[e.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTAzLDIzMiwyNDksMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_0_28%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.08),transparent_0_22%)] pointer-events-none"}),e.jsx(k.div,{animate:{opacity:[1,.8,1,.5,1]},transition:{repeat:1/0,duration:.2},className:"mb-8 border border-cyan-300/40 bg-cyan-100 text-[#031015] px-2 py-1 text-2xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.18)]",children:"FATAL_ERROR"}),e.jsx("div",{className:"text-xl md:text-3xl tracking-tight mb-4",children:"A problem has been detected and LUNA_OS has been shut down to prevent damage to your consciousness."}),e.jsxs("div",{className:"text-sm md:text-lg opacity-80 mb-8 max-w-4xl leading-relaxed",children:["PAGE_FAULT_IN_NONPAGED_AREA",e.jsx("br",{}),e.jsx("br",{}),"If this is the first time you've seen this stop error screen, restart your terminal. If this screen appears again, follow these steps:",e.jsx("br",{}),e.jsx("br",{}),"Check to make sure any new neural hardware or software is properly installed. If this is a new installation, ask your hardware manufacturer for any LUNA updates you might need."]}),e.jsxs("div",{className:"mb-12 flex flex-col gap-1 text-sm text-cyan-100/60",children:[e.jsx("span",{children:"*** STOP: 0x00000050 (0xFFFFF80002A90000, 0x0000000000000000, 0xFFFFF80002A90000, 0x0000000000000000)"}),e.jsx("span",{children:"*** sys_core_router.sys - Address 0xFFFFF80002A90000 base at 0xFFFFF80002A90000, DateStamp 64f1a2b3"})]}),e.jsxs("button",{onClick:()=>p("/"),className:"flex items-center gap-2 border-2 border-cyan-300 px-6 py-2 font-bold uppercase tracking-widest text-cyan-100 transition-colors hover:bg-cyan-100 hover:text-[#031015]",children:[e.jsx(M,{className:"w-5 h-5"})," Reboot System"]})]})},re=()=>e.jsx("div",{className:"min-h-screen bg-[#050505] px-6 py-24 text-slate-300",children:e.jsxs("div",{className:"mx-auto max-w-4xl border border-cyan-900/40 bg-[#060a12]/85 p-8 font-mono shadow-[0_0_40px_rgba(0,0,0,0.45)]",children:[e.jsx("div",{className:"mb-4 text-[10px] uppercase tracking-[0.32em] text-cyan-600",children:"Archive Link Established"}),e.jsx("div",{className:"text-sm uppercase tracking-[0.2em] text-slate-500",children:"Streaming markdown payload..."}),e.jsx("div",{className:"mt-6 h-px w-full overflow-hidden bg-cyan-950/60",children:e.jsx("div",{className:"h-full w-1/3 animate-[pulse_1s_linear_infinite] bg-cyan-400/80"})})]})}),me=()=>{const{"*":p}=H(),m=I(),{posts:n,loadContent:o}=O(),[s,x]=d.useState(void 0),[h,c]=d.useState(void 0),[l,b]=d.useState(!1),[r,u]=d.useState(!1),[f,w]=d.useState(!0);d.useEffect(()=>{const a=()=>u(window.innerWidth<1024);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),d.useEffect(()=>{let a=!0;return(async()=>{if(!p||n.length===0){a&&w(!1);return}const t=n.find(y=>y.contentKey===p);if(!t){a&&(x(void 0),c(void 0),w(!1));return}a&&(x(t),w(!0));try{const y=await o(t.contentKey);a&&c(y)}finally{a&&w(!1)}})(),()=>{a=!1}},[n,p,o]);const v=d.useMemo(()=>{if(!h)return{words:0,time:0,hexSize:"0x00"};const a=h.length;return{words:a,time:Math.max(1,Math.ceil(a/400)),hexSize:`0x${(a*2).toString(16).toUpperCase()}`}},[h]);if(f)return e.jsx(re,{});if(!s||!h)return e.jsx(ae,{});const i=a=>{a.preventDefault(),document.startViewTransition?document.startViewTransition(()=>m("/")):m("/")};return e.jsxs(k.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"relative min-h-screen w-full bg-[#050505] text-slate-300",children:[e.jsx(ne,{}),e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_0_26%),radial-gradient(circle_at_82%_14%,rgba(20,184,166,0.07),transparent_0_24%),linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))]"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.05]",style:{backgroundImage:"linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",backgroundSize:"96px 96px"}})]}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-24",children:[e.jsx("div",{className:"mb-12",children:e.jsxs("a",{href:"/",onClick:i,className:"group inline-flex items-center gap-2 font-mono text-xs text-cyan-600 hover:text-cyan-300 transition-colors cursor-none",children:[e.jsx("div",{className:"p-1.5 border border-cyan-900/50 bg-cyan-950/20 group-hover:bg-cyan-500/20 transition-colors",children:e.jsx(W,{className:"w-3 h-3"})}),e.jsxs("span",{className:"tracking-[0.2em] uppercase relative",children:[e.jsx("span",{className:"opacity-50 mr-2",children:"cd"}),"..",e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"})]})]})}),e.jsxs("div",{className:"relative mb-16 overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,24,0.86),rgba(4,8,16,0.58))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl md:px-8 md:py-10",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_0_32%)]"}),e.jsx("div",{className:"pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-700",children:[e.jsx("span",{children:"Archive Entry"}),e.jsxs("span",{className:"text-slate-500",children:["Sector / ",s.category]})]}),e.jsx("h1",{className:"mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-[-0.05em] text-slate-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.12)] md:text-6xl lg:text-7xl",style:{viewTransitionName:`post-title-${s.id}`},children:s.title}),e.jsx("p",{className:"mb-10 max-w-3xl text-sm leading-7 text-slate-400 md:text-base",children:"Structured as a reading terminal, treated like a publication. The chrome stays cybernetic, but the typography and spacing should let the content feel carefully edited instead of merely decorated."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 md:grid-cols-5",children:[e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(F,{className:"w-3 h-3"})," Sector"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.category})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(Z,{className:"w-3 h-3"})," Mem_Alloc"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:v.hexSize})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(M,{className:"w-3 h-3"})," Timestamp"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.date})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(P,{className:"w-3 h-3"})," Est_Read"]}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[v.time," min"]})]}),e.jsxs("div",{className:"border border-white/5 bg-black/20 p-4",children:[e.jsxs("span",{className:"mb-2 flex items-center gap-1.5 opacity-50",children:[e.jsx(F,{className:"w-3 h-3"})," Author"]}),e.jsx("span",{className:"text-cyan-300 font-bold",children:s.author})]})]})]})]}),e.jsxs(k.div,{initial:{clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)",filter:"brightness(2) blur(10px)"},animate:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",filter:"brightness(1) blur(0px)"},transition:{duration:1.2,ease:[.16,1,.3,1],delay:.2},className:"relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(5,8,15,0.9),rgba(4,7,13,0.72))] px-5 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-8 md:py-10",children:[e.jsx(k.div,{initial:{top:"0%",opacity:1},animate:{top:"100%",opacity:0},transition:{duration:1.2,ease:[.16,1,.3,1],delay:.2},className:"absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#06b6d4] z-50 pointer-events-none"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cyan-500/8 to-transparent"}),e.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"}),e.jsx("div",{className:`
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
          `,children:e.jsx(te,{content:h,children:e.jsx(G,{remarkPlugins:[K,X,se],rehypePlugins:[J,V],children:h})})})]})]}),e.jsx(ee,{content:h,isOpen:l,setIsOpen:b,isMobile:r})]})};export{me as default};
