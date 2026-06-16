import{r as y,j as t}from"./react-vendor-DQzRK5C9.js";import{J as Ue,K as Ge,O as He,Q as qe,U as Je,X as We,Y as Ye,_ as Xe,$ as de,a0 as Ve,a1 as ge,a2 as Ze,e as Qe,a3 as et,a4 as tt,a5 as rt}from"./ui-vendor-D-yKJ4em.js";import"./misc-vendor-BZVMSyEO.js";const ot=`#KIF version=2.0 encoding=UTF-8
# Stored sample for ShogiKifu.tsx
開始日時：2026/06/16
手合割：平手
先手：Sample Sente
後手：Sample Gote
手数----指手---------消費時間--
1 ▲７六歩(77)
2 △８四歩(83)
3 ▲６八銀(79)
4 △３四歩(33)
5 ▲６六歩(67)
6 △６二銀(71)
7 ▲５六歩(57)
8 △５四歩(53)
9 ▲４八銀(39)
10 △４二銀(31)
11 ▲５八金(49)
12 △３二金(41)
13 ▲７八金(69)
14 △４一玉(51)
15 ▲６九玉(59)
16 △５二金(61)
17 ▲７七銀(68)
18 △３三銀(42)
19 ▲６七金(58)
20 △４四歩(43)
21 ▲７九角(88)
22 △３一角(22)
23 ▲３六歩(37)
24 △７四歩(73)
25 ▲３七銀(48)
26 △４三金(52)
27 ▲６八角(79)
28 △８五歩(84)
29 ▲７九玉(69)
30 △７三銀(62)
31 ▲８八玉(79)
`,k="root",st=["K","R","B","G","S","N","L","P"],nt=["R","B","G","S","N","L","P"],A=["R","B","S","N","L","P"],Q=["一","二","三","四","五","六","七","八","九"],ee=["９","８","７","６","５","４","３","２","１"],at="../data/shogi-kifu/",it=Object.assign({"../data/shogi-kifu/sample-yagura-opening.kif":ot}),j={sente:{label:"先手",mark:"▲",tone:"text-cyan-200"},gote:{label:"後手",mark:"△",tone:"text-rose-200"}},O={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},he={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},je={R:"龍",B:"馬",S:"全",N:"圭",L:"杏",P:"と"},lt={R:"龍",B:"馬",S:"成銀",N:"成桂",L:"成香",P:"と"},ct=[["成銀","S",!0],["成桂","N",!0],["成香","L",!0],["龍","R",!0],["竜","R",!0],["馬","B",!0],["と","P",!0],["玉","K",!1],["王","K",!1],["飛","R",!1],["角","B",!1],["金","G",!1],["銀","S",!1],["桂","N",!1],["香","L",!1],["歩","P",!1],["步","P",!1]],dt=r=>r.replace(at,"").replace(/\.(kif|json)$/i,"").split("/").map(s=>s.replace(/[-_]/g," ")).join(" / "),me=Object.entries(it).map(([r,s])=>({path:r,title:dt(r),extension:r.toLowerCase().endsWith(".json")?"json":"kif",content:s})).sort((r,s)=>r.title.localeCompare(s.title,"zh-Hans")),C=(r,s,o=!1,n=Math.random().toString(36).slice(2))=>({id:`${s}-${r}-${n}`,kind:r,owner:s,promoted:o&&A.includes(r)}),we=()=>Array.from({length:81},()=>null),Ne=()=>({sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}}),I=r=>r.map(s=>s?{...s}:null),T=r=>({sente:{...r.sente},gote:{...r.gote}}),gt=()=>{const r=we();["L","N","S","G","K","G","S","N","L"].forEach((o,n)=>{r[n]=C(o,"gote",!1,`a${n}`),r[72+n]=C(o,"sente",!1,`i${n}`)}),r[10]=C("R","gote",!1,"b-rook"),r[16]=C("B","gote",!1,"b-bishop"),r[64]=C("B","sente",!1,"h-bishop"),r[70]=C("R","sente",!1,"h-rook");for(let o=0;o<9;o+=1)r[18+o]=C("P","gote",!1,`c${o}`),r[54+o]=C("P","sente",!1,`g${o}`);return r},V=()=>({id:k,children:[],board:gt(),hands:Ne(),comment:"",moveNumber:0,createdAt:Date.now()}),pe=r=>r.promoted?je[r.kind]??O[r.kind]:O[r.kind],ht=(r,s)=>s?lt[r]??he[r]:he[r],Z=r=>{const s=Math.floor(r/9),o=r%9;return`${ee[o]}${Q[s]}`},mt=r=>{const s=Math.floor(r/9);return`${9-r%9}${s+1}`},z=r=>({row:Math.floor(r/9),col:r%9}),te=r=>r==="sente"?-1:1,ue=(r,s)=>{const{row:o}=z(s);return r==="sente"?o<=2:o>=6},pt=(r,s,o)=>!r.promoted&&A.includes(r.kind)&&(ue(r.owner,s)||ue(r.owner,o)),ut=(r,s)=>{if(r.promoted)return!1;const{row:o}=z(s);return r.kind==="P"||r.kind==="L"?r.owner==="sente"?o===0:o===8:r.kind==="N"?r.owner==="sente"?o<=1:o>=7:!1},G=(r,s,o,n,l)=>{const d=z(s),m=z(o);let h=d.row+n,x=d.col+l;for(;h!==m.row||x!==m.col;){if(r[h*9+x])return!1;h+=n,x+=l}return!0},be=(r,s,o)=>{const n=te(r);return s===n&&Math.abs(o)<=1||s===0&&Math.abs(o)===1||s===-n&&o===0},bt=(r,s,o)=>{const n=te(r);return s===n&&Math.abs(o)<=1||s===-n&&Math.abs(o)===1},ve=(r,s,o,n)=>{const l=z(o),d=z(n),m=d.row-l.row,h=d.col-l.col,x=Math.abs(m),S=Math.abs(h),f=te(s.owner);if(m===0&&h===0)return!1;if(s.promoted&&["S","N","L","P"].includes(s.kind))return be(s.owner,m,h);switch(s.kind){case"K":return Math.max(x,S)===1;case"G":return be(s.owner,m,h);case"S":return bt(s.owner,m,h);case"N":return m===f*2&&S===1;case"L":return h===0&&m*f>0&&G(r,o,n,f,0);case"P":return h===0&&m===f;case"R":return m===0&&h!==0?G(r,o,n,0,Math.sign(h)):h===0&&m!==0?G(r,o,n,Math.sign(m),0):s.promoted&&x===1&&S===1;case"B":return x===S?G(r,o,n,Math.sign(m),Math.sign(h)):s.promoted&&(x===1&&h===0||m===0&&S===1);default:return!1}},ft=(r,s,o)=>{const{col:n}=z(o);return r.some((l,d)=>d%9===n&&(l==null?void 0:l.owner)===s&&l.kind==="P"&&!l.promoted)},ke=(r,s)=>{const o=r.findIndex(n=>(n==null?void 0:n.owner)===s&&n.kind==="K");return o<0?!1:r.some((n,l)=>!!n&&(n==null?void 0:n.owner)!==s&&ve(r,n,l,o))},xt=(r,s,o,n)=>{const l=I(r),d=l[o];return d?(l[o]=null,l[n]=d,ke(l,s)):!1},jt=(r,s,o,n)=>{const l=I(r);return l[n]={id:"validation-drop",kind:o,owner:s,promoted:!1},ke(l,s)},wt=(r,s,o,n)=>{const l=r[o],d=r[n];if(!l)return{legal:!1,reason:"没有可移动的棋子。"};if(l.owner!==s)return{legal:!1,reason:`现在轮到${j[s].label}。`};if((d==null?void 0:d.owner)===l.owner)return{legal:!1,reason:"不能吃自己的棋子。"};if((d==null?void 0:d.kind)==="K")return{legal:!1,reason:"不能直接吃王。"};if(!ve(r,l,o,n))return{legal:!1,reason:"该棋子的走法不能到达目标格。"};if(xt(r,l.owner,o,n))return{legal:!1,reason:"这手会让己方王处于被攻击状态。"};const m=pt(l,o,n),h=ut(l,n);return{legal:!0,canPromote:m,mustPromote:h}},Nt=(r,s,o,n,l,d)=>{if(n!==o)return{legal:!1,reason:`现在轮到${j[o].label}。`};if(r[d])return{legal:!1,reason:"目标格已有棋子。"};if(s[n][l]<=0)return{legal:!1,reason:"没有这枚持驹。"};const{row:m}=z(d);return(l==="P"||l==="L")&&(n==="sente"?m===0:m===8)?{legal:!1,reason:"步兵和香车不能打在最后一段。"}:l==="N"&&(n==="sente"?m<=1:m>=7)?{legal:!1,reason:"桂马不能打在无法前进的段。"}:l==="P"&&ft(r,n,d)?{legal:!1,reason:"同一筋不能有两枚未升变的步。"}:jt(r,n,l,d)?{legal:!1,reason:"这手不能解除己方王被攻击。"}:{legal:!0}},vt=r=>{const s=j[r.owner].mark,o=ht(r.piece,r.promotedBefore),n=r.drop?"打":r.from!==void 0?`(${mt(r.from)})`:"",l=r.promotedAfter&&!r.promotedBefore?"成":"";return`${s}${Z(r.to)}${o}${n}${l}`},fe=(r,s,o)=>{const n=new Blob([s],{type:o}),l=URL.createObjectURL(n),d=document.createElement("a");d.href=l,d.download=r,d.click(),URL.revokeObjectURL(l)},xe=()=>{const r=new Date,s=o=>o.toString().padStart(2,"0");return`${r.getFullYear()}${s(r.getMonth()+1)}${s(r.getDate())}-${s(r.getHours())}${s(r.getMinutes())}`},ye=(r,s)=>{const o=r[s];return o?o.children.flatMap(n=>[n,...ye(r,n)]):[]},kt=(r,s=k)=>{var n;let o=s;for(;(n=r[o])!=null&&n.children[0];)o=r[o].children[0];return o},yt=r=>{var n;const s=JSON.parse(r);if(!((n=s.nodes)!=null&&n[k]))throw new Error("JSON 中没有 root 节点。");const o=s.currentId&&s.nodes[s.currentId]?s.currentId:kt(s.nodes);return{nodes:s.nodes,currentId:o}},St=(r,s)=>{if(!(r<1||r>9||s<1||s>9))return(s-1)*9+(9-r)},Pt=(r,s)=>{const o=ee.indexOf(r),n=Q.indexOf(s);if(!(o<0||n<0))return n*9+o},$t=(r,s)=>{const o=r.match(/^\s*(\d+)\s+(.+)$/);if(!o)return null;const n=Number(o[1]);if(!Number.isFinite(n))return null;const l=o[2].trim().replace(/\s+\(.+$/,""),m=(l.startsWith("△")?"gote":l.startsWith("▲")?"sente":void 0)??(n%2===1?"sente":"gote");let h=l.replace(/^[▲△]/,"").replace(/\u3000/g," ").trim(),x;if(h.startsWith("同")?(x=s,h=h.replace(/^同\s*/,"")):(x=Pt(h.slice(0,1),h.slice(1,2)),h=h.slice(2).trim()),x===void 0)return null;const S=ct.find(([q])=>h.startsWith(q));if(!S)return null;const[f,b,i]=S,p=h.slice(f.length),B=p.match(/\(([1-9])([1-9])\)/),L=B?St(Number(B[1]),Number(B[2])):void 0,H=p.includes("打"),F=!i&&p.includes("成")&&!p.includes("不成");return{moveNumber:n,owner:m,piece:b,promotedBefore:i,promotedAfter:i||F,from:L,to:x,drop:H,notation:l}},Et=(r,s)=>{const o=r.findIndex(n=>!!n&&(n==null?void 0:n.owner)===s.owner&&n.kind===s.piece&&n.promoted===s.promotedBefore);return o>=0?o:void 0},It=(r,s,o)=>{const n=I(r),l=T(s),d=o.drop?void 0:o.from??Et(r,o),m=d!==void 0&&n[d]?n[d]:C(o.piece,o.owner,o.promotedBefore,`import-${o.moveNumber}`),h=n[o.to];return d!==void 0&&(n[d]=null),o.drop&&o.piece!=="K"&&l[o.owner][o.piece]>0&&(l[o.owner][o.piece]-=1),h&&h.kind!=="K"&&(l[o.owner][h.kind]+=1),n[o.to]={...m,owner:o.owner,kind:o.piece,promoted:o.promotedAfter},{board:n,hands:l,record:{owner:o.owner,piece:o.piece,promotedBefore:o.promotedBefore,promotedAfter:o.promotedAfter,from:d,to:o.to,drop:o.drop,captured:h?{kind:h.kind,promoted:h.promoted,owner:h.owner}:void 0,notation:o.notation}}},Bt=r=>{const s=V(),o={[k]:s};let n=I(s.board),l=T(s.hands),d=k,m=k,h,x=!1;return r.split(/\r?\n/).forEach(S=>{const f=S.trim();if(!f){x=!1;return}if(f.startsWith("変化：")){x=!0;return}if(f.startsWith("*")){const B=o[m]??o[k];B.comment=[B.comment,f.slice(1).trim()].filter(Boolean).join(`
`);return}if(x||f.startsWith("#")||f.includes("手数----"))return;const b=$t(f,h);if(!b)return;const i=It(n,l,b),p=`import-${b.moveNumber}`;o[d].children=[...o[d].children,p],o[p]={id:p,parentId:d,children:[],move:i.record,board:i.board,hands:i.hands,comment:"",moveNumber:b.moveNumber,createdAt:Date.now()+b.moveNumber},n=i.board,l=i.hands,d=p,m=p,h=b.to}),{nodes:o,currentId:m}},Lt=()=>{var le;const[r,s]=y.useState(()=>({[k]:V()})),[o,n]=y.useState(k),[l,d]=y.useState("record"),[m,h]=y.useState("sente"),[x,S]=y.useState(!1),[f,b]=y.useState(null),[i,p]=y.useState(null),[B,L]=y.useState(!1),[H,F]=y.useState("idle"),[q,J]=y.useState(""),[Se,re]=y.useState(""),D=y.useRef(0),w=r[o]??r[k],v=w.board,$=w.hands,oe=y.useMemo(()=>{var c;const e=[];let a=o;for(;a;)e.push(a),a=(c=r[a])==null?void 0:c.parentId;return e.reverse()},[o,r]),W=y.useMemo(()=>oe.map(e=>r[e]).filter(e=>e==null?void 0:e.move),[oe,r]),P=w.moveNumber%2===0?"sente":"gote",se=(e,a,c=!1)=>(D.current+=1,C(e,a,c,`runtime-${D.current}`)),R=(e,a)=>{s(c=>({...c,[o]:{...c[o],board:e,hands:a}}))},ne=(e,a,c)=>{const g=r[o];if(!g)return;D.current+=1;const u=`node-${Date.now().toString(36)}-${D.current}`,N={...e,notation:vt(e)};s(E=>({...E,[o]:{...E[o],children:[...E[o].children,u]},[u]:{id:u,parentId:o,children:[],move:N,board:a,hands:c,comment:"",moveNumber:g.moveNumber+1,createdAt:Date.now()}})),n(u),p(null),b(null),L(!1)},M=e=>{J(e),window.setTimeout(()=>{J(a=>a===e?"":a)},1800)},_=(e,a,c=!1)=>{const g=v[e],u=v[a];if(!g)return;const N=I(v),E=T($),K=g.promoted||c;N[e]=null,N[a]={...g,promoted:K},u&&u.kind!=="K"&&(E[g.owner][u.kind]+=1),ne({owner:g.owner,piece:g.kind,promotedBefore:g.promoted,promotedAfter:K,from:e,to:a,captured:u?{kind:u.kind,promoted:u.promoted,owner:u.owner}:void 0},N,E)},Pe=(e,a,c)=>{const g=Nt(v,$,P,e,a,c);if(!g.legal){M(g.reason??"不能在这里打入。");return}const u=I(v),N=T($);u[c]=se(a,e,!1),N[e][a]-=1,ne({owner:e,piece:a,promotedBefore:!1,promotedAfter:!1,to:c,drop:!0},u,N)},$e=e=>{const a=v[e];if(l==="setup"){if((i==null?void 0:i.source)==="palette"){const c=I(v);c[e]=se(i.kind,i.owner,i.promoted),R(c,$),b(null);return}if((i==null?void 0:i.source)==="board"){if(i.index===e){p(null);return}const c=I(v),g=c[i.index];if(!g){p(null);return}c[i.index]=null,c[e]=g,R(c,$),p({source:"board",index:e}),b(null);return}p(a?{source:"board",index:e}:null),b(null);return}if((i==null?void 0:i.source)==="hand"){Pe(i.owner,i.kind,e);return}if((i==null?void 0:i.source)==="board"){if(i.index===e){p(null),b(null);return}const c=v[i.index];if((a==null?void 0:a.owner)===(c==null?void 0:c.owner)){if(a.owner===P){p({source:"board",index:e}),b(null);return}M(`现在轮到${j[P].label}。`);return}const g=wt(v,P,i.index,e);if(!g.legal){M(g.reason??"这手不合法。");return}if(g.mustPromote){_(i.index,e,!0);return}if(g.canPromote){b({from:i.index,to:e});return}_(i.index,e,!1);return}if(a&&a.owner!==P){M(`现在轮到${j[P].label}。`);return}p(a?{source:"board",index:e}:null),b(null)},Ee=e=>{d("setup"),p({source:"palette",kind:e,owner:m,promoted:x&&A.includes(e)})},Ie=(e,a)=>{if(l!=="setup"&&!($[e][a]<=0)){if(e!==P){M(`现在轮到${j[P].label}。`);return}p({source:"hand",owner:e,kind:a}),b(null)}},ae=(e,a,c)=>{const g=T($);g[e][a]=Math.max(0,g[e][a]+c),R(v,g)},Be=()=>{if((i==null?void 0:i.source)!=="board")return;const e=I(v);e[i.index]=null,R(e,$),p(null)},Ce=()=>{if((i==null?void 0:i.source)!=="board")return;const e=I(v),a=e[i.index];a&&(a.owner=a.owner==="sente"?"gote":"sente",R(e,$))},Oe=()=>{if((i==null?void 0:i.source)!=="board")return;const e=I(v),a=e[i.index];!a||!A.includes(a.kind)||(a.promoted=!a.promoted,R(e,$))},ze=()=>{s({[k]:V()}),n(k),p(null),b(null),L(!1),re(""),J("")},Le=()=>{R(we(),Ne()),p(null),b(null)},Re=()=>{if(o===k||!w.parentId)return;const e=w.parentId,a=[o,...ye(r,o)];s(c=>{const g={...c};return a.forEach(u=>{delete g[u]}),g[e]={...g[e],children:g[e].children.filter(u=>u!==o)},g}),n(e),p(null),b(null)},Me=()=>{w.parentId&&n(w.parentId),p(null),b(null),L(!0)},Ae=e=>{s(a=>({...a,[o]:{...a[o],comment:e}}))},Ke=e=>{try{const a=e.extension==="json"?yt(e.content):Bt(e.content);s(a.nodes),n(a.currentId),p(null),b(null),L(!1),re(e.path),M(`已载入 ${e.title}`)}catch(a){M(a instanceof Error?a.message:"棋谱读取失败。")}},Y=()=>{const e=["#KIF version=2.0 encoding=UTF-8","# Generated by LUNA_PROTOCOL SHOGI_NODE",`開始日時：${new Date().toLocaleString("ja-JP")}`,"手合割：平手","先手：SENTE","後手：GOTE","手数----指手---------消費時間--"],a=u=>{u.move&&(e.push(`${u.moveNumber} ${u.move.notation}`),u.comment.trim()&&u.comment.split(/\r?\n/).forEach(N=>{e.push(`*${N}`)}))},c=u=>{let N=u;for(;N;){const E=r[N];if(!E)break;a(E),E.children.slice(1).forEach(K=>{const ce=r[K];ce&&(e.push(""),e.push(`変化：${ce.moveNumber}手`),c(K))}),N=E.children[0]}},g=r[k];return g.children[0]&&c(g.children[0]),g.children.slice(1).forEach(u=>{e.push(""),e.push("変化：1手"),c(u)}),`${e.join(`
`)}
`},Te=()=>{fe(`luna-shogi-${xe()}.kif`,Y(),"text/plain;charset=utf-8")},Fe=()=>{const e={version:"luna-shogi-kifu-v1",exportedAt:new Date().toISOString(),currentId:o,nodes:r};fe(`luna-shogi-${xe()}.json`,JSON.stringify(e,null,2),"application/json;charset=utf-8")},De=()=>{navigator.clipboard.writeText(Y()).then(()=>{F("copied"),window.setTimeout(()=>F("idle"),1200)})},ie=(e,a=0)=>{var g;const c=r[e];return c?t.jsxs("div",{className:"shogi-tree-branch",style:{"--depth":a},children:[t.jsxs("button",{type:"button",className:`shogi-tree-node ${o===e?"is-active":""}`,onClick:()=>{n(e),p(null),b(null),L(!1)},children:[t.jsx("span",{children:c.move?c.moveNumber.toString().padStart(2,"0"):"00"}),t.jsx("strong",{children:((g=c.move)==null?void 0:g.notation)??"初期局面"}),c.children.length>1&&t.jsxs("em",{children:[c.children.length," BR"]})]}),c.children.length>0&&t.jsx("div",{className:"shogi-tree-children",children:c.children.map((u,N)=>ie(u,N===0?0:1))})]},e):null},_e=Y(),U=(i==null?void 0:i.source)==="board"?v[i.index]:null,X=f?v[f.from]:null;return t.jsxs("section",{className:"shogi-page relative min-h-screen overflow-hidden px-4 pb-20 pt-36 text-slate-100 md:px-8 md:pt-40",children:[t.jsx("div",{className:"shogi-scanline","aria-hidden":"true"}),t.jsx("div",{className:"shogi-grid-glow","aria-hidden":"true"}),t.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4",children:[t.jsxs("header",{className:"shogi-header",children:[t.jsxs("div",{children:[t.jsx("p",{className:"shogi-kicker",children:"TACTICAL KIFU EDITOR // SHOGI"}),t.jsx("h1",{children:"将棋打谱节点"})]}),t.jsxs("div",{className:"shogi-status-strip","aria-label":"current shogi status",children:[t.jsxs("span",{className:j[P].tone,children:[j[P].mark," ",j[P].label]}),t.jsxs("span",{children:[w.moveNumber.toString().padStart(3,"0")," TURNS"]}),t.jsxs("span",{children:[Object.keys(r).length.toString().padStart(3,"0")," NODES"]}),t.jsx("span",{className:B?"text-amber-200":"text-slate-500",children:B?"BRANCH ARMED":"MAINLINE"})]})]}),t.jsxs("div",{className:"shogi-workspace",children:[t.jsxs("section",{className:"shogi-panel shogi-board-panel","aria-label":"shogi board editor",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"BOARD MATRIX"}),t.jsx("h2",{children:"盤面"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:`shogi-icon-button ${l==="record"?"is-active":""}`,onClick:()=>{d("record"),p(null),b(null)},title:"记录走子","aria-label":"记录走子",children:t.jsx(Ue,{size:16})}),t.jsx("button",{type:"button",className:`shogi-icon-button ${l==="setup"?"is-active":""}`,onClick:()=>{d("setup"),p(null),b(null)},title:"摆放棋子","aria-label":"摆放棋子",children:t.jsx(Ge,{size:16})})]})]}),t.jsxs("div",{className:"shogi-board-shell",children:[t.jsx("div",{className:"shogi-file-labels","aria-hidden":"true",children:ee.map(e=>t.jsx("span",{children:e},e))}),t.jsxs("div",{className:"shogi-board-row",children:[t.jsx("div",{className:"shogi-rank-labels","aria-hidden":"true",children:Q.map(e=>t.jsx("span",{children:e},e))}),t.jsx("div",{className:"shogi-board",role:"grid","aria-label":"将棋棋盘",children:v.map((e,a)=>{var u,N;const c=(i==null?void 0:i.source)==="board"&&i.index===a,g=((u=w.move)==null?void 0:u.to)===a||((N=w.move)==null?void 0:N.from)===a;return t.jsx("button",{type:"button",role:"gridcell",className:`shogi-square ${c?"is-selected":""} ${g?"is-last-move":""}`,onClick:()=>$e(a),"aria-label":`${Z(a)} ${e?`${j[e.owner].label}${pe(e)}`:"空"}`,children:e&&t.jsx("span",{className:`shogi-piece ${e.owner==="gote"?"is-gote":"is-sente"}`,children:t.jsx("span",{children:pe(e)})})},`${a}-${(e==null?void 0:e.id)??"empty"}`)})})]})]}),t.jsx("div",{className:"shogi-rule-bar","aria-live":"polite",children:f&&X?t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:[j[X.owner].mark,Z(f.to),O[X.kind]," 是否升变"]}),t.jsxs("div",{className:"shogi-promotion-actions",children:[t.jsx("button",{type:"button",onClick:()=>_(f.from,f.to,!0),children:"成"}),t.jsx("button",{type:"button",onClick:()=>_(f.from,f.to,!1),children:"不成"})]})]}):t.jsx("span",{children:q||`${j[P].mark} ${j[P].label} 行棋`})}),t.jsx("div",{className:"shogi-hands",children:["gote","sente"].map(e=>t.jsxs("div",{className:"shogi-hand-tray",children:[t.jsxs("div",{className:"shogi-hand-owner",children:[t.jsx("span",{children:j[e].mark}),t.jsx("strong",{children:j[e].label})]}),t.jsx("div",{className:"shogi-hand-pieces",children:nt.map(a=>{const c=$[e][a],g=(i==null?void 0:i.source)==="hand"&&i.owner===e&&i.kind===a;return t.jsxs("div",{className:"shogi-hand-unit",children:[l==="setup"&&t.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>ae(e,a,-1),title:"减少持驹","aria-label":`减少${j[e].label}${O[a]}`,children:t.jsx(He,{size:11})}),t.jsxs("button",{type:"button",className:`shogi-hand-piece ${g?"is-selected":""}`,onClick:()=>Ie(e,a),title:"选择持驹打入","aria-label":`${j[e].label}${O[a]} ${c}`,children:[t.jsx("span",{children:O[a]}),t.jsx("b",{children:c})]}),l==="setup"&&t.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>ae(e,a,1),title:"增加持驹","aria-label":`增加${j[e].label}${O[a]}`,children:t.jsx(qe,{size:11})})]},`${e}-${a}`)})})]},e))})]}),t.jsxs("section",{className:"shogi-panel shogi-tree-panel","aria-label":"move tree and annotation",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"KIFU GRAPH"}),t.jsx("h2",{children:"分支"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:()=>{w.parentId&&n(w.parentId),p(null),b(null)},title:"回到上一手","aria-label":"回到上一手",disabled:!w.parentId,children:t.jsx(Je,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:()=>{w.children[0]&&n(w.children[0]),p(null),b(null)},title:"进入主线下一手","aria-label":"进入主线下一手",disabled:!w.children[0],children:t.jsx(We,{size:16})}),t.jsx("button",{type:"button",className:`shogi-icon-button ${B?"is-active":""}`,onClick:Me,title:"开分支","aria-label":"开分支",children:t.jsx(Ye,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:Re,title:"删除当前节点","aria-label":"删除当前节点",disabled:o===k,children:t.jsx(Xe,{size:16})})]})]}),t.jsxs("div",{className:"shogi-current-move",children:[t.jsx("span",{children:w.move?w.moveNumber.toString().padStart(2,"0"):"00"}),t.jsx("strong",{children:((le=w.move)==null?void 0:le.notation)??"初期局面"}),t.jsxs("em",{children:[w.children.length," NEXT"]})]}),t.jsx("div",{className:"shogi-tree-scroll",children:ie(k)}),t.jsxs("label",{className:"shogi-comment-box",children:[t.jsx("span",{children:"COMMENT BUFFER"}),t.jsx("textarea",{value:w.comment,onChange:e=>Ae(e.target.value),placeholder:"节点注释"})]})]}),t.jsxs("aside",{className:"shogi-side-stack",children:[t.jsxs("section",{className:"shogi-panel","aria-label":"setup controls",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"PIECE BAY"}),t.jsx("h2",{children:"摆放"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:Ce,title:"反转所选阵营","aria-label":"反转所选阵营",disabled:!U,children:t.jsx(de,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:Oe,title:"切换所选升变","aria-label":"切换所选升变",disabled:!U||!A.includes(U.kind),children:t.jsx(Ve,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:Be,title:"移除所选棋子","aria-label":"移除所选棋子",disabled:!U,children:t.jsx(ge,{size:16})})]})]}),t.jsx("div",{className:"shogi-segmented",role:"group","aria-label":"setup owner",children:["sente","gote"].map(e=>t.jsxs("button",{type:"button",className:m===e?"is-active":"",onClick:()=>{h(e),(i==null?void 0:i.source)==="palette"&&p({...i,owner:e})},children:[j[e].mark," ",j[e].label]},e))}),t.jsxs("div",{className:"shogi-segmented",role:"group","aria-label":"setup promotion",children:[t.jsx("button",{type:"button",className:x?"":"is-active",onClick:()=>{S(!1),(i==null?void 0:i.source)==="palette"&&p({...i,promoted:!1})},children:"生駒"}),t.jsx("button",{type:"button",className:x?"is-active":"",onClick:()=>{S(!0),(i==null?void 0:i.source)==="palette"&&p({...i,promoted:A.includes(i.kind)})},children:"成駒"})]}),t.jsx("div",{className:"shogi-palette",children:st.map(e=>{const a=(i==null?void 0:i.source)==="palette"&&i.kind===e,c=x&&A.includes(e)?je[e]??O[e]:O[e];return t.jsx("button",{type:"button",className:`shogi-palette-piece ${a?"is-selected":""}`,onClick:()=>Ee(e),title:`${j[m].label}${c}`,"aria-label":`${j[m].label}${c}`,children:t.jsx("span",{className:m==="gote"?"is-gote":"",children:c})},e)})}),t.jsxs("div",{className:"shogi-action-grid",children:[t.jsxs("button",{type:"button",onClick:Le,children:[t.jsx(ge,{size:15}),"清空局面"]}),t.jsxs("button",{type:"button",onClick:ze,children:[t.jsx(de,{size:15}),"平手初形"]})]})]}),t.jsxs("section",{className:"shogi-panel","aria-label":"stored kifu library",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"KIFU LIBRARY"}),t.jsx("h2",{children:"棋谱库"})]}),t.jsx(Ze,{size:18,className:"text-cyan-300"})]}),t.jsx("div",{className:"shogi-library-list",children:me.length===0?t.jsx("span",{className:"shogi-empty-state",children:"NO STORED KIFU"}):me.map(e=>t.jsxs("button",{type:"button",className:Se===e.path?"is-active":"",onClick:()=>Ke(e),children:[t.jsx("span",{children:e.extension.toUpperCase()}),t.jsx("strong",{children:e.title})]},e.path))})]}),t.jsxs("section",{className:"shogi-panel","aria-label":"export kifu",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"EXPORT BUS"}),t.jsx("h2",{children:"导出"})]}),t.jsx(Qe,{size:18,className:"text-cyan-300"})]}),t.jsxs("div",{className:"shogi-export-actions",children:[t.jsxs("button",{type:"button",onClick:Te,children:[t.jsx(et,{size:16}),"KIF"]}),t.jsxs("button",{type:"button",onClick:Fe,children:[t.jsx(tt,{size:16}),"JSON"]}),t.jsxs("button",{type:"button",onClick:De,children:[t.jsx(rt,{size:16}),H==="copied"?"COPIED":"COPY"]})]}),t.jsx("pre",{className:"shogi-kif-preview",children:_e})]}),t.jsxs("section",{className:"shogi-panel","aria-label":"active line",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"ACTIVE LINE"}),t.jsx("h2",{children:"主线"})]}),t.jsx("span",{className:"shogi-node-count",children:W.length})]}),t.jsx("div",{className:"shogi-line-list",children:W.length===0?t.jsx("span",{className:"shogi-empty-state",children:"NO MOVES"}):W.map(e=>{var a;return t.jsxs("button",{type:"button",className:e.id===o?"is-active":"",onClick:()=>{n(e.id),p(null),b(null)},children:[t.jsx("span",{children:e.moveNumber}),t.jsx("strong",{children:(a=e.move)==null?void 0:a.notation})]},e.id)})})]})]})]})]}),t.jsx("style",{children:`
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
          container-type: inline-size;
          --board-size: min(680px, calc(100cqw - 1.35rem), calc(100vw - 4.5rem));
          display: grid;
          gap: 0.35rem;
          justify-content: center;
        }

        .shogi-file-labels {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          width: var(--board-size);
          margin-left: calc(1rem + 0.35rem);
          color: rgba(251, 191, 36, 0.78);
          font-size: 0.72rem;
          font-weight: 800;
          text-align: center;
        }

        .shogi-board-row {
          display: grid;
          grid-template-columns: 1rem var(--board-size);
          gap: 0.35rem;
          align-items: stretch;
        }

        .shogi-rank-labels {
          display: grid;
          grid-template-rows: repeat(9, 1fr);
          height: var(--board-size);
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
          grid-template-columns: repeat(9, calc(var(--board-size) / 9));
          grid-template-rows: repeat(9, calc(var(--board-size) / 9));
          width: var(--board-size);
          height: var(--board-size);
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
          width: calc(var(--board-size) / 9);
          height: calc(var(--board-size) / 9);
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
          font-size: clamp(0.82rem, calc(var(--board-size) / 26), 1.45rem);
          font-weight: 900;
          letter-spacing: 0;
          line-height: 1;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
        }

        .shogi-rule-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          min-height: 2.45rem;
          margin-top: 0.75rem;
          border: 1px solid rgba(103, 232, 249, 0.16);
          background: rgba(2, 6, 12, 0.55);
          color: #bae6fd;
          padding: 0.45rem 0.55rem;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .shogi-promotion-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(3.4rem, 1fr));
          gap: 0.35rem;
        }

        .shogi-promotion-actions button {
          border: 1px solid rgba(251, 191, 36, 0.24);
          background: rgba(120, 53, 15, 0.58);
          color: #fef3c7;
          min-height: 1.8rem;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-promotion-actions button:hover {
          border-color: rgba(251, 191, 36, 0.72);
          background: rgba(180, 83, 9, 0.7);
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
          padding-left: calc(var(--depth) * 0.85rem);
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

        .shogi-library-list {
          display: grid;
          gap: 0.35rem;
          max-height: 190px;
          overflow: auto;
        }

        .shogi-library-list button {
          display: grid;
          grid-template-columns: 3.2rem minmax(0, 1fr);
          gap: 0.5rem;
          align-items: center;
          border: 1px solid rgba(148, 163, 184, 0.12);
          background: rgba(2, 6, 12, 0.48);
          color: #cbd5e1;
          padding: 0.5rem 0.55rem;
          text-align: left;
          border-radius: 4px;
          transition: border-color 160ms ease, background 160ms ease;
        }

        .shogi-library-list button:hover,
        .shogi-library-list button.is-active {
          border-color: rgba(34, 211, 238, 0.52);
          background: rgba(8, 47, 73, 0.44);
        }

        .shogi-library-list span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 1.35rem;
          border: 1px solid rgba(251, 191, 36, 0.2);
          background: rgba(120, 53, 15, 0.28);
          color: #fef3c7;
          font-size: 0.62rem;
          font-weight: 900;
          border-radius: 4px;
        }

        .shogi-library-list strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.76rem;
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
      `})]})};export{Lt as default};
