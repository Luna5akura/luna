import{r as x,j as e}from"./react-vendor-DQzRK5C9.js";import{J as Oe,K as Pe,O as X,Q as Re,U as Be,X as ze,Y as Le,_ as Te,$ as Ie,a0 as V,a1 as Z,e as Ae,a2 as De,a3 as Me,a4 as Ke}from"./ui-vendor-H55Jv09Z.js";import"./misc-vendor-BZVMSyEO.js";const N="root",Fe=["K","R","B","G","S","N","L","P"],_e=["R","B","G","S","N","L","P"],$=["R","B","S","N","L","P"],re=["一","二","三","四","五","六","七","八","九"],oe=["９","８","７","６","５","４","３","２","１"],He="../data/shogi-kifu/",Ge=Object.assign({}),m={sente:{label:"先手",mark:"▲",tone:"text-cyan-200"},gote:{label:"後手",mark:"△",tone:"text-rose-200"}},w={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},Q={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},ae={R:"龍",B:"馬",S:"全",N:"圭",L:"杏",P:"と"},Ue={R:"龍",B:"馬",S:"成銀",N:"成桂",L:"成香",P:"と"},qe=s=>s.replace(He,"").replace(/\.(kif|json)$/i,"").split("/").map(l=>l.replace(/[-_]/g," ")).join(" / ");Object.entries(Ge).map(([s,l])=>({path:s,title:qe(s),extension:s.toLowerCase().endsWith(".json")?"json":"kif",content:l})).sort((s,l)=>s.title.localeCompare(l.title,"zh-Hans"));const v=(s,l,i=!1,d=Math.random().toString(36).slice(2))=>({id:`${l}-${s}-${d}`,kind:s,owner:l,promoted:i&&$.includes(s)}),ie=()=>Array.from({length:81},()=>null),ne=()=>({sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}}),S=s=>s.map(l=>l?{...l}:null),A=s=>({sente:{...s.sente},gote:{...s.gote}}),Je=()=>{const s=ie();["L","N","S","G","K","G","S","N","L"].forEach((i,d)=>{s[d]=v(i,"gote",!1,`a${d}`),s[72+d]=v(i,"sente",!1,`i${d}`)}),s[10]=v("R","gote",!1,"b-rook"),s[16]=v("B","gote",!1,"b-bishop"),s[64]=v("B","sente",!1,"h-bishop"),s[70]=v("R","sente",!1,"h-rook");for(let i=0;i<9;i+=1)s[18+i]=v("P","gote",!1,`c${i}`),s[54+i]=v("P","sente",!1,`g${i}`);return s},W=()=>({id:N,children:[],board:Je(),hands:ne(),comment:"",moveNumber:0,createdAt:Date.now()}),ee=s=>s.promoted?ae[s.kind]??w[s.kind]:w[s.kind],Ye=(s,l)=>l?Ue[s]??Q[s]:Q[s],le=s=>{const l=Math.floor(s/9),i=s%9;return`${oe[i]}${re[l]}`},Xe=s=>{const l=Math.floor(s/9);return`${9-s%9}${l+1}`},Ve=s=>{const l=m[s.owner].mark,i=Ye(s.piece,s.promotedBefore),d=s.drop?"打":s.from!==void 0?`(${Xe(s.from)})`:"",u=s.promotedAfter&&!s.promotedBefore?"成":"";return`${l}${le(s.to)}${i}${d}${u}`},te=(s,l,i)=>{const d=new Blob([l],{type:i}),u=URL.createObjectURL(d),y=document.createElement("a");y.href=u,y.download=s,y.click(),URL.revokeObjectURL(u)},se=()=>{const s=new Date,l=i=>i.toString().padStart(2,"0");return`${s.getFullYear()}${l(s.getMonth()+1)}${l(s.getDate())}-${l(s.getHours())}${l(s.getMinutes())}`},ce=(s,l)=>{const i=s[l];return i?i.children.flatMap(d=>[d,...ce(s,d)]):[]},et=()=>{var q;const[s,l]=x.useState(()=>({[N]:W()})),[i,d]=x.useState(N),[u,y]=x.useState("record"),[E,de]=x.useState("sente"),[C,D]=x.useState(!1),[M,B]=x.useState(!1),[o,g]=x.useState(null),[z,O]=x.useState(!1),[ge,K]=x.useState("idle"),P=x.useRef(0),h=s[i]??s[N],p=h.board,f=h.hands,F=x.useMemo(()=>{var a;const t=[];let r=i;for(;r;)t.push(r),r=(a=s[r])==null?void 0:a.parentId;return t.reverse()},[i,s]),L=x.useMemo(()=>F.map(t=>s[t]).filter(t=>t==null?void 0:t.move),[F,s]),T=h.moveNumber%2===0?"sente":"gote",_=(t,r,a=!1)=>(P.current+=1,v(t,r,a,`runtime-${P.current}`)),k=(t,r)=>{l(a=>({...a,[i]:{...a[i],board:t,hands:r}}))},H=(t,r,a)=>{const n=s[i];if(!n)return;P.current+=1;const c=`node-${Date.now().toString(36)}-${P.current}`,b={...t,notation:Ve(t)};l(j=>({...j,[i]:{...j[i],children:[...j[i].children,c]},[c]:{id:c,parentId:i,children:[],move:b,board:r,hands:a,comment:"",moveNumber:n.moveNumber+1,createdAt:Date.now()}})),d(c),g(null),B(!1),O(!1)},he=(t,r)=>{const a=p[t],n=p[r];if(!a)return;if((n==null?void 0:n.owner)===a.owner){g({source:"board",index:r});return}const c=S(p),b=A(f),j=a.promoted||M&&$.includes(a.kind);c[t]=null,c[r]={...a,promoted:j},n&&n.kind!=="K"&&(b[a.owner][n.kind]+=1),H({owner:a.owner,piece:a.kind,promotedBefore:a.promoted,promotedAfter:j,from:t,to:r,captured:n?{kind:n.kind,promoted:n.promoted,owner:n.owner}:void 0},c,b)},pe=(t,r,a)=>{if(p[a]||f[t][r]<=0)return;const n=S(p),c=A(f);n[a]=_(r,t,!1),c[t][r]-=1,H({owner:t,piece:r,promotedBefore:!1,promotedAfter:!1,to:a,drop:!0},n,c)},me=t=>{const r=p[t];if(u==="setup"){if((o==null?void 0:o.source)==="palette"){const a=S(p);a[t]=_(o.kind,o.owner,o.promoted),k(a,f);return}if((o==null?void 0:o.source)==="board"){if(o.index===t){g(null);return}const a=S(p),n=a[o.index];if(!n){g(null);return}a[o.index]=null,a[t]=n,k(a,f),g({source:"board",index:t});return}g(r?{source:"board",index:t}:null);return}if((o==null?void 0:o.source)==="hand"){pe(o.owner,o.kind,t);return}if((o==null?void 0:o.source)==="board"){if(o.index===t){g(null);return}he(o.index,t);return}g(r?{source:"board",index:t}:null)},be=t=>{y("setup"),g({source:"palette",kind:t,owner:E,promoted:C&&$.includes(t)})},ue=(t,r)=>{u!=="setup"&&(f[t][r]<=0||g({source:"hand",owner:t,kind:r}))},G=(t,r,a)=>{const n=A(f);n[t][r]=Math.max(0,n[t][r]+a),k(p,n)},xe=()=>{if((o==null?void 0:o.source)!=="board")return;const t=S(p);t[o.index]=null,k(t,f),g(null)},fe=()=>{if((o==null?void 0:o.source)!=="board")return;const t=S(p),r=t[o.index];r&&(r.owner=r.owner==="sente"?"gote":"sente",k(t,f))},je=()=>{if((o==null?void 0:o.source)!=="board")return;const t=S(p),r=t[o.index];!r||!$.includes(r.kind)||(r.promoted=!r.promoted,k(t,f))},Ne=()=>{l({[N]:W()}),d(N),g(null),B(!1),O(!1)},ve=()=>{k(ie(),ne()),g(null)},we=()=>{if(i===N||!h.parentId)return;const t=h.parentId,r=[i,...ce(s,i)];l(a=>{const n={...a};return r.forEach(c=>{delete n[c]}),n[t]={...n[t],children:n[t].children.filter(c=>c!==i)},n}),d(t),g(null)},ye=()=>{h.parentId&&d(h.parentId),g(null),O(!0)},ke=t=>{l(r=>({...r,[i]:{...r[i],comment:t}}))},I=()=>{const t=["#KIF version=2.0 encoding=UTF-8","# Generated by LUNA_PROTOCOL SHOGI_NODE",`開始日時：${new Date().toLocaleString("ja-JP")}`,"手合割：平手","先手：SENTE","後手：GOTE","手数----指手---------消費時間--"],r=c=>{c.move&&(t.push(`${c.moveNumber} ${c.move.notation}`),c.comment.trim()&&c.comment.split(/\r?\n/).forEach(b=>{t.push(`*${b}`)}))},a=c=>{let b=c;for(;b;){const j=s[b];if(!j)break;r(j),j.children.slice(1).forEach(J=>{const Y=s[J];Y&&(t.push(""),t.push(`変化：${Y.moveNumber}手`),a(J))}),b=j.children[0]}},n=s[N];return n.children[0]&&a(n.children[0]),n.children.slice(1).forEach(c=>{t.push(""),t.push("変化：1手"),a(c)}),`${t.join(`
`)}
`},Se=()=>{te(`luna-shogi-${se()}.kif`,I(),"text/plain;charset=utf-8")},$e=()=>{const t={version:"luna-shogi-kifu-v1",exportedAt:new Date().toISOString(),currentId:i,nodes:s};te(`luna-shogi-${se()}.json`,JSON.stringify(t,null,2),"application/json;charset=utf-8")},Ee=()=>{navigator.clipboard.writeText(I()).then(()=>{K("copied"),window.setTimeout(()=>K("idle"),1200)})},U=(t,r=0)=>{var n;const a=s[t];return a?e.jsxs("div",{className:"shogi-tree-branch",style:{"--depth":r},children:[e.jsxs("button",{type:"button",className:`shogi-tree-node ${i===t?"is-active":""}`,onClick:()=>{d(t),g(null),O(!1)},children:[e.jsx("span",{children:a.move?a.moveNumber.toString().padStart(2,"0"):"00"}),e.jsx("strong",{children:((n=a.move)==null?void 0:n.notation)??"初期局面"}),a.children.length>1&&e.jsxs("em",{children:[a.children.length," BR"]})]}),a.children.length>0&&e.jsx("div",{className:"shogi-tree-children",children:a.children.map(c=>U(c,r+1))})]},t):null},Ce=I(),R=(o==null?void 0:o.source)==="board"?p[o.index]:null;return e.jsxs("section",{className:"shogi-page relative min-h-screen overflow-hidden px-4 pb-20 pt-36 text-slate-100 md:px-8 md:pt-40",children:[e.jsx("div",{className:"shogi-scanline","aria-hidden":"true"}),e.jsx("div",{className:"shogi-grid-glow","aria-hidden":"true"}),e.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4",children:[e.jsxs("header",{className:"shogi-header",children:[e.jsxs("div",{children:[e.jsx("p",{className:"shogi-kicker",children:"TACTICAL KIFU EDITOR // SHOGI"}),e.jsx("h1",{children:"将棋打谱节点"})]}),e.jsxs("div",{className:"shogi-status-strip","aria-label":"current shogi status",children:[e.jsxs("span",{className:m[T].tone,children:[m[T].mark," ",m[T].label]}),e.jsxs("span",{children:[h.moveNumber.toString().padStart(3,"0")," TURNS"]}),e.jsxs("span",{children:[Object.keys(s).length.toString().padStart(3,"0")," NODES"]}),e.jsx("span",{className:z?"text-amber-200":"text-slate-500",children:z?"BRANCH ARMED":"MAINLINE"})]})]}),e.jsxs("div",{className:"shogi-workspace",children:[e.jsxs("section",{className:"shogi-panel shogi-board-panel","aria-label":"shogi board editor",children:[e.jsxs("div",{className:"shogi-panel-head",children:[e.jsxs("div",{children:[e.jsx("p",{children:"BOARD MATRIX"}),e.jsx("h2",{children:"盤面"})]}),e.jsxs("div",{className:"shogi-tool-row",children:[e.jsx("button",{type:"button",className:`shogi-icon-button ${u==="record"?"is-active":""}`,onClick:()=>{y("record"),g(null)},title:"记录走子","aria-label":"记录走子",children:e.jsx(Oe,{size:16})}),e.jsx("button",{type:"button",className:`shogi-icon-button ${u==="setup"?"is-active":""}`,onClick:()=>{y("setup"),g(null)},title:"摆放棋子","aria-label":"摆放棋子",children:e.jsx(Pe,{size:16})}),e.jsx("button",{type:"button",className:`shogi-icon-button ${M?"is-active":""}`,onClick:()=>B(t=>!t),title:"下一手升变","aria-label":"下一手升变",disabled:u!=="record",children:e.jsx(X,{size:16})})]})]}),e.jsxs("div",{className:"shogi-board-shell",children:[e.jsx("div",{className:"shogi-file-labels","aria-hidden":"true",children:oe.map(t=>e.jsx("span",{children:t},t))}),e.jsxs("div",{className:"shogi-board-row",children:[e.jsx("div",{className:"shogi-rank-labels","aria-hidden":"true",children:re.map(t=>e.jsx("span",{children:t},t))}),e.jsx("div",{className:"shogi-board",role:"grid","aria-label":"将棋棋盘",children:p.map((t,r)=>{var c,b;const a=(o==null?void 0:o.source)==="board"&&o.index===r,n=((c=h.move)==null?void 0:c.to)===r||((b=h.move)==null?void 0:b.from)===r;return e.jsx("button",{type:"button",role:"gridcell",className:`shogi-square ${a?"is-selected":""} ${n?"is-last-move":""}`,onClick:()=>me(r),"aria-label":`${le(r)} ${t?`${m[t.owner].label}${ee(t)}`:"空"}`,children:t&&e.jsx("span",{className:`shogi-piece ${t.owner==="gote"?"is-gote":"is-sente"}`,children:e.jsx("span",{children:ee(t)})})},`${r}-${(t==null?void 0:t.id)??"empty"}`)})})]})]}),e.jsx("div",{className:"shogi-hands",children:["gote","sente"].map(t=>e.jsxs("div",{className:"shogi-hand-tray",children:[e.jsxs("div",{className:"shogi-hand-owner",children:[e.jsx("span",{children:m[t].mark}),e.jsx("strong",{children:m[t].label})]}),e.jsx("div",{className:"shogi-hand-pieces",children:_e.map(r=>{const a=f[t][r],n=(o==null?void 0:o.source)==="hand"&&o.owner===t&&o.kind===r;return e.jsxs("div",{className:"shogi-hand-unit",children:[u==="setup"&&e.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>G(t,r,-1),title:"减少持驹","aria-label":`减少${m[t].label}${w[r]}`,children:e.jsx(Re,{size:11})}),e.jsxs("button",{type:"button",className:`shogi-hand-piece ${n?"is-selected":""}`,onClick:()=>ue(t,r),title:"选择持驹打入","aria-label":`${m[t].label}${w[r]} ${a}`,children:[e.jsx("span",{children:w[r]}),e.jsx("b",{children:a})]}),u==="setup"&&e.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>G(t,r,1),title:"增加持驹","aria-label":`增加${m[t].label}${w[r]}`,children:e.jsx(Be,{size:11})})]},`${t}-${r}`)})})]},t))})]}),e.jsxs("section",{className:"shogi-panel shogi-tree-panel","aria-label":"move tree and annotation",children:[e.jsxs("div",{className:"shogi-panel-head",children:[e.jsxs("div",{children:[e.jsx("p",{children:"KIFU GRAPH"}),e.jsx("h2",{children:"分支"})]}),e.jsxs("div",{className:"shogi-tool-row",children:[e.jsx("button",{type:"button",className:"shogi-icon-button",onClick:()=>h.parentId&&d(h.parentId),title:"回到上一手","aria-label":"回到上一手",disabled:!h.parentId,children:e.jsx(ze,{size:16})}),e.jsx("button",{type:"button",className:"shogi-icon-button",onClick:()=>h.children[0]&&d(h.children[0]),title:"进入主线下一手","aria-label":"进入主线下一手",disabled:!h.children[0],children:e.jsx(Le,{size:16})}),e.jsx("button",{type:"button",className:`shogi-icon-button ${z?"is-active":""}`,onClick:ye,title:"开分支","aria-label":"开分支",children:e.jsx(Te,{size:16})}),e.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:we,title:"删除当前节点","aria-label":"删除当前节点",disabled:i===N,children:e.jsx(Ie,{size:16})})]})]}),e.jsxs("div",{className:"shogi-current-move",children:[e.jsx("span",{children:h.move?h.moveNumber.toString().padStart(2,"0"):"00"}),e.jsx("strong",{children:((q=h.move)==null?void 0:q.notation)??"初期局面"}),e.jsxs("em",{children:[h.children.length," NEXT"]})]}),e.jsx("div",{className:"shogi-tree-scroll",children:U(N)}),e.jsxs("label",{className:"shogi-comment-box",children:[e.jsx("span",{children:"COMMENT BUFFER"}),e.jsx("textarea",{value:h.comment,onChange:t=>ke(t.target.value),placeholder:"节点注释"})]})]}),e.jsxs("aside",{className:"shogi-side-stack",children:[e.jsxs("section",{className:"shogi-panel","aria-label":"setup controls",children:[e.jsxs("div",{className:"shogi-panel-head",children:[e.jsxs("div",{children:[e.jsx("p",{children:"PIECE BAY"}),e.jsx("h2",{children:"摆放"})]}),e.jsxs("div",{className:"shogi-tool-row",children:[e.jsx("button",{type:"button",className:"shogi-icon-button",onClick:fe,title:"反转所选阵营","aria-label":"反转所选阵营",disabled:!R,children:e.jsx(V,{size:16})}),e.jsx("button",{type:"button",className:"shogi-icon-button",onClick:je,title:"切换所选升变","aria-label":"切换所选升变",disabled:!R||!$.includes(R.kind),children:e.jsx(X,{size:16})}),e.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:xe,title:"移除所选棋子","aria-label":"移除所选棋子",disabled:!R,children:e.jsx(Z,{size:16})})]})]}),e.jsx("div",{className:"shogi-segmented",role:"group","aria-label":"setup owner",children:["sente","gote"].map(t=>e.jsxs("button",{type:"button",className:E===t?"is-active":"",onClick:()=>{de(t),(o==null?void 0:o.source)==="palette"&&g({...o,owner:t})},children:[m[t].mark," ",m[t].label]},t))}),e.jsxs("div",{className:"shogi-segmented",role:"group","aria-label":"setup promotion",children:[e.jsx("button",{type:"button",className:C?"":"is-active",onClick:()=>{D(!1),(o==null?void 0:o.source)==="palette"&&g({...o,promoted:!1})},children:"生駒"}),e.jsx("button",{type:"button",className:C?"is-active":"",onClick:()=>{D(!0),(o==null?void 0:o.source)==="palette"&&g({...o,promoted:$.includes(o.kind)})},children:"成駒"})]}),e.jsx("div",{className:"shogi-palette",children:Fe.map(t=>{const r=(o==null?void 0:o.source)==="palette"&&o.kind===t,a=C&&$.includes(t)?ae[t]??w[t]:w[t];return e.jsx("button",{type:"button",className:`shogi-palette-piece ${r?"is-selected":""}`,onClick:()=>be(t),title:`${m[E].label}${a}`,"aria-label":`${m[E].label}${a}`,children:e.jsx("span",{className:E==="gote"?"is-gote":"",children:a})},t)})}),e.jsxs("div",{className:"shogi-action-grid",children:[e.jsxs("button",{type:"button",onClick:ve,children:[e.jsx(Z,{size:15}),"清空局面"]}),e.jsxs("button",{type:"button",onClick:Ne,children:[e.jsx(V,{size:15}),"平手初形"]})]})]}),e.jsxs("section",{className:"shogi-panel","aria-label":"export kifu",children:[e.jsxs("div",{className:"shogi-panel-head",children:[e.jsxs("div",{children:[e.jsx("p",{children:"EXPORT BUS"}),e.jsx("h2",{children:"导出"})]}),e.jsx(Ae,{size:18,className:"text-cyan-300"})]}),e.jsxs("div",{className:"shogi-export-actions",children:[e.jsxs("button",{type:"button",onClick:Se,children:[e.jsx(De,{size:16}),"KIF"]}),e.jsxs("button",{type:"button",onClick:$e,children:[e.jsx(Me,{size:16}),"JSON"]}),e.jsxs("button",{type:"button",onClick:Ee,children:[e.jsx(Ke,{size:16}),ge==="copied"?"COPIED":"COPY"]})]}),e.jsx("pre",{className:"shogi-kif-preview",children:Ce})]}),e.jsxs("section",{className:"shogi-panel","aria-label":"active line",children:[e.jsxs("div",{className:"shogi-panel-head",children:[e.jsxs("div",{children:[e.jsx("p",{children:"ACTIVE LINE"}),e.jsx("h2",{children:"主线"})]}),e.jsx("span",{className:"shogi-node-count",children:L.length})]}),e.jsx("div",{className:"shogi-line-list",children:L.length===0?e.jsx("span",{className:"shogi-empty-state",children:"NO MOVES"}):L.map(t=>{var r;return e.jsxs("button",{type:"button",className:t.id===i?"is-active":"",onClick:()=>d(t.id),children:[e.jsx("span",{children:t.moveNumber}),e.jsx("strong",{children:(r=t.move)==null?void 0:r.notation})]},t.id)})})]})]})]})]}),e.jsx("style",{children:`
        .shogi-page {
          background:
            radial-gradient(circle at 18% 8%, rgba(34, 211, 238, 0.16), transparent 28rem),
            radial-gradient(circle at 88% 20%, rgba(244, 114, 182, 0.09), transparent 24rem),
            linear-gradient(180deg, #02050a 0%, #04070d 48%, #080706 100%);
        }

        .shogi-scanline {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.055) 0,
            rgba(255, 255, 255, 0.055) 1px,
            transparent 1px,
            transparent 5px
          );
          opacity: 0.18;
          mix-blend-mode: screen;
        }

        .shogi-grid-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent 78%);
        }

        .shogi-header,
        .shogi-panel {
          border: 1px solid rgba(103, 232, 249, 0.18);
          background: linear-gradient(180deg, rgba(4, 10, 18, 0.92), rgba(3, 7, 12, 0.78));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(18px);
          border-radius: 6px;
        }

        .shogi-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.15rem;
        }

        .shogi-kicker,
        .shogi-panel-head p {
          color: rgba(34, 211, 238, 0.74);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.28em;
          margin: 0 0 0.25rem;
          text-transform: uppercase;
        }

        .shogi-header h1,
        .shogi-panel-head h2 {
          margin: 0;
          color: #edf7ff;
          font-weight: 900;
          letter-spacing: 0;
        }

        .shogi-header h1 {
          font-size: clamp(1.35rem, 2.2rem, 2.2rem);
          text-shadow: 0 0 18px rgba(34, 211, 238, 0.2);
        }

        .shogi-status-strip {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 0.5rem;
          align-items: center;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .shogi-status-strip span {
          border: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(2, 6, 12, 0.72);
          padding: 0.45rem 0.55rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .shogi-workspace {
          display: grid;
          grid-template-columns: minmax(520px, 0.95fr) minmax(320px, 0.55fr) minmax(350px, 0.58fr);
          gap: 1rem;
          align-items: start;
        }

        .shogi-panel {
          min-width: 0;
          padding: 1rem;
        }

        .shogi-board-panel {
          position: sticky;
          top: 7rem;
        }

        .shogi-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.9rem;
        }

        .shogi-panel-head h2 {
          font-size: 1rem;
        }

        .shogi-tool-row,
        .shogi-export-actions,
        .shogi-action-grid {
          display: flex;
          gap: 0.45rem;
          align-items: center;
        }

        .shogi-icon-button,
        .shogi-mini-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(103, 232, 249, 0.18);
          background: rgba(8, 16, 28, 0.82);
          color: #94a3b8;
          transition: border-color 160ms ease, color 160ms ease, background 160ms ease, box-shadow 160ms ease;
          border-radius: 4px;
        }

        .shogi-icon-button {
          width: 2.1rem;
          height: 2.1rem;
        }

        .shogi-mini-button {
          width: 1.25rem;
          height: 1.25rem;
        }

        .shogi-icon-button:hover:not(:disabled),
        .shogi-mini-button:hover:not(:disabled),
        .shogi-icon-button.is-active {
          border-color: rgba(34, 211, 238, 0.64);
          background: rgba(8, 47, 73, 0.72);
          color: #cffafe;
          box-shadow: 0 0 18px rgba(34, 211, 238, 0.16);
        }

        .shogi-icon-button.danger:hover:not(:disabled) {
          border-color: rgba(244, 63, 94, 0.74);
          color: #fecdd3;
          box-shadow: 0 0 18px rgba(244, 63, 94, 0.16);
        }

        .shogi-icon-button:disabled,
        .shogi-mini-button:disabled {
          opacity: 0.35;
        }

        .shogi-board-shell {
          display: grid;
          gap: 0.35rem;
        }

        .shogi-file-labels {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          margin-left: 1.35rem;
          color: rgba(251, 191, 36, 0.78);
          font-size: 0.72rem;
          font-weight: 800;
          text-align: center;
        }

        .shogi-board-row {
          display: grid;
          grid-template-columns: 1rem minmax(0, 1fr);
          gap: 0.35rem;
          align-items: stretch;
        }

        .shogi-rank-labels {
          display: grid;
          grid-template-rows: repeat(9, 1fr);
          color: rgba(251, 191, 36, 0.78);
          font-size: 0.72rem;
          font-weight: 800;
          text-align: center;
        }

        .shogi-rank-labels span {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shogi-board {
          display: grid;
          grid-template-columns: repeat(9, minmax(0, 1fr));
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          border: 3px solid #2a1608;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.16), transparent 22%),
            linear-gradient(90deg, rgba(120, 53, 15, 0.16), transparent 28%, rgba(120, 53, 15, 0.22) 62%, transparent),
            #d69a48;
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.58), 0 0 0 1px rgba(251, 191, 36, 0.16);
        }

        .shogi-square {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(67, 31, 8, 0.68);
          background: transparent;
          min-width: 0;
          min-height: 0;
          transition: background 140ms ease, box-shadow 140ms ease;
        }

        .shogi-square:hover {
          background: rgba(255, 247, 237, 0.18);
          box-shadow: inset 0 0 0 1px rgba(6, 182, 212, 0.48);
        }

        .shogi-square.is-selected {
          background: rgba(6, 182, 212, 0.22);
          box-shadow: inset 0 0 0 2px rgba(8, 145, 178, 0.88), 0 0 18px rgba(34, 211, 238, 0.28);
        }

        .shogi-square.is-last-move::after {
          content: "";
          position: absolute;
          inset: 0.34rem;
          border: 1px solid rgba(244, 63, 94, 0.58);
          pointer-events: none;
        }

        .shogi-piece {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72%;
          height: 84%;
          clip-path: polygon(50% 1%, 92% 22%, 84% 100%, 16% 100%, 8% 22%);
          border: 1px solid rgba(67, 31, 8, 0.82);
          background:
            linear-gradient(160deg, rgba(255, 251, 235, 0.98), rgba(241, 198, 115, 0.96) 55%, rgba(180, 83, 9, 0.82)),
            #f5c36b;
          color: #251407;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0.55rem 0.8rem rgba(53, 23, 5, 0.28);
        }

        .shogi-piece.is-gote,
        .shogi-palette-piece span.is-gote {
          transform: rotate(180deg);
        }

        .shogi-piece span {
          display: block;
          writing-mode: vertical-rl;
          font-family: "FZSTK", "A-OTF-HASETOPPOSTD-DEBOLD", serif;
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: 0;
          line-height: 1;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
        }

        .shogi-hands {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.9rem;
        }

        .shogi-hand-tray {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.7rem;
          align-items: center;
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: rgba(2, 6, 12, 0.48);
          padding: 0.55rem;
          border-radius: 4px;
        }

        .shogi-hand-owner {
          min-width: 3.6rem;
          color: #e2e8f0;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .shogi-hand-owner span {
          margin-right: 0.25rem;
          color: #67e8f9;
        }

        .shogi-hand-pieces {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.35rem;
        }

        .shogi-hand-unit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
        }

        .shogi-hand-piece {
          display: grid;
          min-width: 2.4rem;
          border: 1px solid rgba(251, 191, 36, 0.16);
          background: rgba(41, 25, 12, 0.78);
          color: #fde68a;
          padding: 0.3rem 0.38rem;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-hand-piece:hover,
        .shogi-hand-piece.is-selected {
          border-color: rgba(251, 191, 36, 0.68);
          background: rgba(120, 53, 15, 0.74);
        }

        .shogi-hand-piece span {
          font-size: 0.78rem;
          font-weight: 900;
        }

        .shogi-hand-piece b {
          color: #f8fafc;
          font-size: 0.65rem;
          line-height: 1;
        }

        .shogi-tree-panel {
          min-height: 720px;
        }

        .shogi-current-move {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 0.6rem;
          align-items: center;
          border: 1px solid rgba(34, 211, 238, 0.2);
          background: rgba(8, 47, 73, 0.26);
          color: #e0f2fe;
          padding: 0.72rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }

        .shogi-current-move span,
        .shogi-tree-node span {
          color: #67e8f9;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .shogi-current-move strong,
        .shogi-tree-node strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .shogi-current-move em,
        .shogi-tree-node em {
          color: #fbbf24;
          font-size: 0.62rem;
          font-style: normal;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .shogi-tree-scroll {
          max-height: 360px;
          overflow: auto;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(0, 0, 0, 0.18);
          padding: 0.55rem;
          border-radius: 4px;
        }

        .shogi-tree-branch {
          margin-left: calc(var(--depth) * 0.85rem);
        }

        .shogi-tree-node {
          display: grid;
          grid-template-columns: 2.1rem minmax(0, 1fr) auto;
          gap: 0.45rem;
          align-items: center;
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(2, 6, 12, 0.6);
          color: #cbd5e1;
          margin-bottom: 0.32rem;
          padding: 0.48rem 0.52rem;
          text-align: left;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-tree-node:hover,
        .shogi-tree-node.is-active {
          border-color: rgba(34, 211, 238, 0.52);
          background: rgba(8, 47, 73, 0.54);
        }

        .shogi-comment-box {
          display: grid;
          gap: 0.45rem;
          margin-top: 0.8rem;
        }

        .shogi-comment-box span {
          color: rgba(34, 211, 238, 0.72);
          font-size: 0.64rem;
          font-weight: 900;
          letter-spacing: 0.22em;
        }

        .shogi-comment-box textarea {
          min-height: 150px;
          resize: vertical;
          border: 1px solid rgba(103, 232, 249, 0.16);
          background: rgba(2, 6, 12, 0.74);
          color: #e2e8f0;
          font-size: 0.86rem;
          line-height: 1.55;
          border-radius: 4px;
        }

        .shogi-side-stack {
          display: grid;
          gap: 1rem;
        }

        .shogi-segmented {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.35rem;
          margin-bottom: 0.6rem;
        }

        .shogi-segmented button,
        .shogi-action-grid button,
        .shogi-export-actions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          min-height: 2.2rem;
          border: 1px solid rgba(103, 232, 249, 0.16);
          background: rgba(8, 16, 28, 0.74);
          color: #cbd5e1;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
        }

        .shogi-segmented button:hover,
        .shogi-segmented button.is-active,
        .shogi-action-grid button:hover,
        .shogi-export-actions button:hover {
          border-color: rgba(34, 211, 238, 0.58);
          background: rgba(8, 47, 73, 0.58);
          color: #ecfeff;
        }

        .shogi-palette {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.45rem;
          margin: 0.8rem 0;
        }

        .shogi-palette-piece {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          border: 1px solid rgba(251, 191, 36, 0.18);
          background:
            linear-gradient(160deg, rgba(255, 251, 235, 0.95), rgba(245, 158, 11, 0.78)),
            #f5c36b;
          color: #251407;
          clip-path: polygon(50% 1%, 92% 22%, 84% 100%, 16% 100%, 8% 22%);
          transition: filter 160ms ease, transform 160ms ease, box-shadow 160ms ease;
        }

        .shogi-palette-piece:hover,
        .shogi-palette-piece.is-selected {
          filter: brightness(1.08);
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(251, 191, 36, 0.26);
        }

        .shogi-palette-piece span {
          writing-mode: vertical-rl;
          font-family: "FZSTK", "A-OTF-HASETOPPOSTD-DEBOLD", serif;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 0;
        }

        .shogi-action-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .shogi-export-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 0.8rem;
        }

        .shogi-kif-preview {
          max-height: 220px;
          overflow: auto;
          white-space: pre-wrap;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(0, 0, 0, 0.32);
          color: #bae6fd;
          font-size: 0.7rem;
          line-height: 1.55;
          padding: 0.8rem;
          border-radius: 4px;
        }

        .shogi-node-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border: 1px solid rgba(34, 211, 238, 0.22);
          background: rgba(8, 47, 73, 0.4);
          color: #67e8f9;
          font-weight: 900;
          border-radius: 4px;
        }

        .shogi-line-list {
          display: grid;
          gap: 0.35rem;
          max-height: 220px;
          overflow: auto;
        }

        .shogi-line-list button {
          display: grid;
          grid-template-columns: 2rem minmax(0, 1fr);
          gap: 0.5rem;
          align-items: center;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(2, 6, 12, 0.48);
          color: #cbd5e1;
          padding: 0.45rem 0.52rem;
          text-align: left;
          border-radius: 4px;
        }

        .shogi-line-list button.is-active,
        .shogi-line-list button:hover {
          border-color: rgba(251, 191, 36, 0.52);
          background: rgba(120, 53, 15, 0.34);
        }

        .shogi-line-list span,
        .shogi-empty-state {
          color: #67e8f9;
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .shogi-line-list strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .shogi-empty-state {
          border: 1px dashed rgba(148, 163, 184, 0.18);
          padding: 0.8rem;
          text-align: center;
          border-radius: 4px;
        }

        @media (max-width: 1280px) {
          .shogi-workspace {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.6fr);
          }

          .shogi-side-stack {
            grid-column: 1 / -1;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .shogi-board-panel {
            position: static;
          }
        }

        @media (max-width: 900px) {
          .shogi-header {
            align-items: stretch;
            flex-direction: column;
          }

          .shogi-status-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .shogi-workspace,
          .shogi-side-stack {
            grid-template-columns: 1fr;
          }

          .shogi-tree-panel {
            min-height: 0;
          }
        }

        @media (max-width: 640px) {
          .shogi-page {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          .shogi-panel {
            padding: 0.75rem;
          }

          .shogi-piece span {
            font-size: 0.82rem;
          }

          .shogi-hand-tray {
            grid-template-columns: 1fr;
          }

          .shogi-hand-pieces {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .shogi-palette {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .shogi-file-labels,
          .shogi-rank-labels {
            font-size: 0.62rem;
          }
        }
      `})]})};export{et as default};
