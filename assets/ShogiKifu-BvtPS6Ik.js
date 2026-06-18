import{j as n,r as I}from"./react-vendor-DQzRK5C9.js";import{J as Pe,K as Ee,O as ye,Q as $e,U as xe,X as be,Y as ge,e as Oe,_ as Be,$ as Le,a0 as Ie,a1 as Me,a2 as ie,a3 as Re,a4 as le}from"./ui-vendor-CuvnnbBR.js";import"./misc-vendor-BZVMSyEO.js";const $="root",Ke=["K","R","B","G","S","N","L","P"],Te=["R","B","G","S","N","L","P"],U=["R","B","S","N","L","P"],re=["一","二","三","四","五","六","七","八","九"],je=["９","８","７","６","５","４","３","２","１"],E={sente:{label:"先手",mark:"▲",tone:"text-cyan-200"},gote:{label:"後手",mark:"△",tone:"text-rose-200"}},D={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},ce={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},Ne={R:"龍",B:"馬",S:"全",N:"圭",L:"杏",P:"と"},De={R:"龍",B:"馬",S:"成銀",N:"成桂",L:"成香",P:"と"},Fe=[["成銀","S",!0],["成桂","N",!0],["成香","L",!0],["龍","R",!0],["竜","R",!0],["馬","B",!0],["と","P",!0],["玉","K",!1],["王","K",!1],["飛","R",!1],["角","B",!1],["金","G",!1],["銀","S",!1],["桂","N",!1],["香","L",!1],["歩","P",!1],["步","P",!1]],M=(e,s,t=!1,r=Math.random().toString(36).slice(2))=>({id:`${s}-${e}-${r}`,kind:e,owner:s,promoted:t&&U.includes(e)}),ve=()=>Array.from({length:81},()=>null),Se=()=>({sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}}),R=e=>e.map(s=>s?{...s}:null),q=e=>({sente:{...e.sente},gote:{...e.gote}}),Ae=()=>{const e=ve();["L","N","S","G","K","G","S","N","L"].forEach((t,r)=>{e[r]=M(t,"gote",!1,`a${r}`),e[72+r]=M(t,"sente",!1,`i${r}`)}),e[10]=M("R","gote",!1,"b-rook"),e[16]=M("B","gote",!1,"b-bishop"),e[64]=M("B","sente",!1,"h-bishop"),e[70]=M("R","sente",!1,"h-rook");for(let t=0;t<9;t+=1)e[18+t]=M("P","gote",!1,`c${t}`),e[54+t]=M("P","sente",!1,`g${t}`);return e},te=()=>({id:$,children:[],board:Ae(),hands:Se(),comment:"",moveNumber:0,createdAt:Date.now()}),de=e=>e.promoted?Ne[e.kind]??D[e.kind]:D[e.kind],_e=(e,s)=>s?De[e]??ce[e]:ce[e],se=e=>{const s=Math.floor(e/9),t=e%9;return`${je[t]}${re[s]}`},Ue=e=>{const s=Math.floor(e/9);return`${9-e%9}${s+1}`},F=e=>({row:Math.floor(e/9),col:e%9}),ze=({board:e,hands:s,mode:t,nextPlayer:r,notice:a,selection:l,pendingPromotion:u,pendingPromotionPiece:o,lastFrom:m,lastTo:N,onSetMode:g,onBoardClick:j,onHandSelect:p,onHandCountChange:d,onPromotionChoice:x})=>n.jsxs("section",{className:"shogi-panel shogi-board-panel","aria-label":"shogi board editor",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"BOARD MATRIX"}),n.jsx("h2",{children:"盤面"})]}),n.jsxs("div",{className:"shogi-tool-row",children:[n.jsx("button",{type:"button",className:`shogi-icon-button ${t==="record"?"is-active":""}`,onClick:()=>g("record"),title:"记录走子 (R)","aria-label":"记录走子，快捷键 R",children:n.jsx(Pe,{size:16})}),n.jsx("button",{type:"button",className:`shogi-icon-button ${t==="setup"?"is-active":""}`,onClick:()=>g("setup"),title:"摆放棋子 (S)","aria-label":"摆放棋子，快捷键 S",children:n.jsx(Ee,{size:16})})]})]}),n.jsxs("div",{className:"shogi-board-stage",children:[n.jsxs("div",{className:"shogi-board-shell",children:[n.jsx("div",{className:"shogi-file-labels","aria-hidden":"true",children:je.map(i=>n.jsx("span",{children:i},i))}),n.jsxs("div",{className:"shogi-board-row",children:[n.jsx("div",{className:"shogi-rank-labels","aria-hidden":"true",children:re.map(i=>n.jsx("span",{children:i},i))}),n.jsx("div",{className:"shogi-board",role:"grid","aria-label":"将棋棋盘",children:e.map((i,h)=>{const k=(l==null?void 0:l.source)==="board"&&l.index===h,O=N===h||m===h;return n.jsx("button",{type:"button",role:"gridcell",className:`shogi-square ${k?"is-selected":""} ${O?"is-last-move":""}`,onClick:()=>j(h),"aria-label":`${se(h)} ${i?`${E[i.owner].label}${de(i)}`:"空"}`,children:i&&n.jsx("span",{className:`shogi-piece ${i.owner==="gote"?"is-gote":"is-sente"}`,children:n.jsx("span",{children:de(i)})})},`${h}-${(i==null?void 0:i.id)??"empty"}`)})})]})]}),n.jsx("div",{className:"shogi-rule-bar","aria-live":"polite",children:u&&o?n.jsxs(n.Fragment,{children:[n.jsxs("span",{children:[E[o.owner].mark,se(u.to),D[o.kind]," 是否升变"]}),n.jsxs("div",{className:"shogi-promotion-actions",children:[n.jsx("button",{type:"button",onClick:()=>x(!0),children:"成"}),n.jsx("button",{type:"button",onClick:()=>x(!1),children:"不成"})]})]}):n.jsx("span",{children:a||`${E[r].mark} ${E[r].label} 行棋`})}),n.jsx("div",{className:"shogi-hands",children:["gote","sente"].map(i=>n.jsxs("div",{className:"shogi-hand-tray",children:[n.jsxs("div",{className:"shogi-hand-owner",children:[n.jsx("span",{children:E[i].mark}),n.jsx("strong",{children:E[i].label})]}),n.jsx("div",{className:"shogi-hand-pieces",children:Te.map(h=>{const k=s[i][h],O=(l==null?void 0:l.source)==="hand"&&l.owner===i&&l.kind===h;return n.jsxs("div",{className:"shogi-hand-unit",children:[t==="setup"&&n.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>d(i,h,-1),title:"减少持驹","aria-label":`减少${E[i].label}${D[h]}`,children:n.jsx(ye,{size:11})}),n.jsxs("button",{type:"button",className:`shogi-hand-piece ${O?"is-selected":""}`,onClick:()=>p(i,h),title:"选择持驹打入","aria-label":`${E[i].label}${D[h]} ${k}`,children:[n.jsx("span",{children:D[h]}),n.jsx("b",{children:k})]}),t==="setup"&&n.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>d(i,h,1),title:"增加持驹","aria-label":`增加${E[i].label}${D[h]}`,children:n.jsx($e,{size:11})})]},`${i}-${h}`)})})]},i))})]})]}),He=({nextPlayer:e,moveNumber:s,nodeCount:t})=>n.jsxs("header",{className:"shogi-header",children:[n.jsxs("div",{children:[n.jsx("p",{className:"shogi-kicker",children:"TACTICAL KIFU EDITOR // SHOGI"}),n.jsx("h1",{children:"将棋打谱节点"})]}),n.jsxs("div",{className:"shogi-status-strip","aria-label":"current shogi status",children:[n.jsxs("span",{className:E[e].tone,children:[E[e].mark," ",E[e].label]}),n.jsxs("span",{children:[s.toString().padStart(3,"0")," TURNS"]}),n.jsxs("span",{children:[t.toString().padStart(3,"0")," NODES"]}),n.jsx("span",{className:"text-slate-500",children:"MAINLINE"})]})]}),ne=e=>{var s;return((s=e==null?void 0:e.move)==null?void 0:s.notation)??"初期局面"},Ge=e=>e!=null&&e.move?e.moveNumber.toString().padStart(2,"0"):"00",Je=({currentId:e,currentNode:s,nodes:t,onSelectNode:r,onStepBack:a,onStepForward:l,onDeleteCurrent:u})=>{const o=s.parentId?t[s.parentId]:void 0,m=(o==null?void 0:o.children)??[],N=s.children,g=m.length>1,j=N.length>1;return n.jsxs("section",{className:"shogi-panel shogi-mobile-kifu-bar","aria-label":"mobile kifu controls",children:[n.jsxs("div",{className:"shogi-mobile-kifu-top",children:[n.jsxs("div",{className:"shogi-mobile-kifu-current",children:[n.jsx("span",{children:Ge(s)}),n.jsx("strong",{children:ne(s)}),n.jsxs("em",{children:[s.children.length," NEXT"]})]}),n.jsxs("div",{className:"shogi-tool-row",children:[n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:a,title:"回到上一手 (←)","aria-label":"回到上一手，快捷键左方向键",disabled:!s.parentId,children:n.jsx(xe,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:l,title:"进入主线下一手 (→)","aria-label":"进入主线下一手，快捷键右方向键",disabled:!s.children[0],children:n.jsx(be,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:u,title:"删除当前节点 (Delete)","aria-label":"删除当前节点，快捷键 Delete",disabled:e==="root",children:n.jsx(ge,{size:16})})]})]}),(g||j)&&n.jsxs("div",{className:"shogi-mobile-variation-zone","aria-label":"mobile variation choices",children:[g&&n.jsxs("div",{className:"shogi-mobile-variation-row",children:[n.jsx("span",{children:"同局面"}),n.jsx("div",{children:m.map((p,d)=>{const x=t[p];return x?n.jsxs("button",{type:"button",className:p===e?"is-active":"",onClick:()=>r(p),children:[n.jsx("b",{children:d===0?"主线":`变${d}`}),n.jsx("strong",{children:ne(x)})]},p):null})})]}),j&&n.jsxs("div",{className:"shogi-mobile-variation-row",children:[n.jsx("span",{children:"下一手"}),n.jsx("div",{children:N.map((p,d)=>{const x=t[p];return x?n.jsxs("button",{type:"button",onClick:()=>r(p),children:[n.jsx("b",{children:String.fromCharCode(65+d)}),n.jsx("strong",{children:ne(x)})]},p):null})})]})]})]})},Ve=({copyState:e,kifPreview:s,onExportKif:t,onExportJson:r,onCopyKif:a})=>n.jsxs("section",{className:"shogi-panel","aria-label":"export kifu",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"EXPORT BUS"}),n.jsx("h2",{children:"导出"})]}),n.jsx(Oe,{size:18,className:"text-cyan-300"})]}),n.jsxs("div",{className:"shogi-export-actions",children:[n.jsxs("button",{type:"button",onClick:t,children:[n.jsx(Be,{size:16}),"KIF"]}),n.jsxs("button",{type:"button",onClick:r,children:[n.jsx(Le,{size:16}),"JSON"]}),n.jsxs("button",{type:"button",onClick:a,children:[n.jsx(Ie,{size:16}),e==="copied"?"COPIED":"COPY"]})]}),n.jsx("pre",{className:"shogi-kif-preview",children:s})]}),We=({storedFiles:e,activeStoredPath:s,onStoredLoad:t})=>n.jsxs("section",{className:"shogi-panel","aria-label":"stored kifu library",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"KIFU LIBRARY"}),n.jsx("h2",{children:"棋谱库"})]}),n.jsx(Me,{size:18,className:"text-cyan-300"})]}),n.jsx("div",{className:"shogi-library-list",children:e.length===0?n.jsx("span",{className:"shogi-empty-state",children:"NO STORED KIFU"}):e.map(r=>n.jsxs("button",{type:"button",className:s===r.path?"is-active":"",onClick:()=>t(r),children:[n.jsx("span",{children:r.extension.toUpperCase()}),n.jsx("strong",{children:r.title})]},r.path))})]}),qe=({moveLine:e,currentId:s,onSelectLineNode:t})=>n.jsxs("section",{className:"shogi-panel","aria-label":"active line",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"ACTIVE LINE"}),n.jsx("h2",{children:"主线"})]}),n.jsx("span",{className:"shogi-node-count",children:e.length})]}),n.jsx("div",{className:"shogi-line-list",children:e.length===0?n.jsx("span",{className:"shogi-empty-state",children:"NO MOVES"}):e.map(r=>{var a;return n.jsxs("button",{type:"button",className:r.id===s?"is-active":"",onClick:()=>t(r.id),children:[n.jsx("span",{children:r.moveNumber}),n.jsx("strong",{children:(a=r.move)==null?void 0:a.notation})]},r.id)})})]}),Xe=({setupOwner:e,setupPromoted:s,selection:t,selectedBoardPiece:r,onSetupOwnerChange:a,onSetupPromotedChange:l,onPaletteSelect:u,onClearPosition:o,onReset:m,onFlipSelectedOwner:N,onToggleSelectedPromotion:g,onRemoveSelectedPiece:j})=>n.jsxs("section",{className:"shogi-panel","aria-label":"setup controls",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"PIECE BAY"}),n.jsx("h2",{children:"摆放"})]}),n.jsxs("div",{className:"shogi-tool-row",children:[n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:N,title:"反转所选阵营","aria-label":"反转所选阵营",disabled:!r,children:n.jsx(ie,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:g,title:"切换所选升变","aria-label":"切换所选升变",disabled:!r||!U.includes(r.kind),children:n.jsx(Re,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:j,title:"移除所选棋子 (Delete)","aria-label":"移除所选棋子，快捷键 Delete",disabled:!r,children:n.jsx(le,{size:16})})]})]}),n.jsx("div",{className:"shogi-segmented",role:"group","aria-label":"setup owner",children:["sente","gote"].map(p=>n.jsxs("button",{type:"button",className:e===p?"is-active":"",onClick:()=>a(p),children:[E[p].mark," ",E[p].label]},p))}),n.jsxs("div",{className:"shogi-segmented",role:"group","aria-label":"setup promotion",children:[n.jsx("button",{type:"button",className:s?"":"is-active",onClick:()=>l(!1),children:"生駒"}),n.jsx("button",{type:"button",className:s?"is-active":"",onClick:()=>l(!0),children:"成駒"})]}),n.jsx("div",{className:"shogi-palette",children:Ke.map(p=>{const d=(t==null?void 0:t.source)==="palette"&&t.kind===p,x=s&&U.includes(p)?Ne[p]??D[p]:D[p];return n.jsx("button",{type:"button",className:`shogi-palette-piece ${d?"is-selected":""}`,onClick:()=>u(p),title:`${E[e].label}${x}`,"aria-label":`${E[e].label}${x}`,children:n.jsx("span",{className:e==="gote"?"is-gote":"",children:x})},p)})}),n.jsxs("div",{className:"shogi-action-grid",children:[n.jsxs("button",{type:"button",onClick:o,children:[n.jsx(le,{size:15}),"清空局面"]}),n.jsxs("button",{type:"button",onClick:m,children:[n.jsx(ie,{size:15}),"平手初形"]})]})]}),Ye=e=>n.jsxs("aside",{className:"shogi-side-stack",children:[n.jsx(Xe,{setupOwner:e.setupOwner,setupPromoted:e.setupPromoted,selection:e.selection,selectedBoardPiece:e.selectedBoardPiece,onSetupOwnerChange:e.onSetupOwnerChange,onSetupPromotedChange:e.onSetupPromotedChange,onPaletteSelect:e.onPaletteSelect,onClearPosition:e.onClearPosition,onReset:e.onReset,onFlipSelectedOwner:e.onFlipSelectedOwner,onToggleSelectedPromotion:e.onToggleSelectedPromotion,onRemoveSelectedPiece:e.onRemoveSelectedPiece}),n.jsx(We,{storedFiles:e.storedFiles,activeStoredPath:e.activeStoredPath,onStoredLoad:e.onStoredLoad}),n.jsx(Ve,{copyState:e.copyState,kifPreview:e.kifPreview,onExportKif:e.onExportKif,onExportJson:e.onExportJson,onCopyKif:e.onCopyKif}),n.jsx(qe,{moveLine:e.moveLine,currentId:e.currentId,onSelectLineNode:e.onSelectLineNode})]}),V=e=>{var s;return((s=e==null?void 0:e.move)==null?void 0:s.notation)??"初期局面"},ue=e=>e!=null&&e.move?e.moveNumber.toString().padStart(2,"0"):"00",Qe=({nodes:e,currentId:s,currentNode:t,onSelectNode:r,onStepBack:a,onStepForward:l,onDeleteCurrent:u,onCommentChange:o})=>{const m=(()=>{var i;const d=[];let x=s;for(;x;)d.push(x),x=(i=e[x])==null?void 0:i.parentId;return d.reverse()})(),N=m.map(d=>e[d]).filter(Boolean),g=t.parentId?e[t.parentId]:void 0,j=(g==null?void 0:g.children)??[],p=m.map((d,x)=>{const i=e[d],h=m[x+1];return!i||i.children.length<=1||!h?null:{node:i,selectedChildId:h,selectedIndex:i.children.indexOf(h)}}).filter(d=>!!d);return n.jsxs("section",{className:"shogi-panel shogi-tree-panel","aria-label":"move tree and annotation",children:[n.jsxs("div",{className:"shogi-panel-head",children:[n.jsxs("div",{children:[n.jsx("p",{children:"KIFU ROUTE"}),n.jsx("h2",{children:"路线"})]}),n.jsxs("div",{className:"shogi-tool-row",children:[n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:a,title:"回到上一手 (←)","aria-label":"回到上一手，快捷键左方向键",disabled:!t.parentId,children:n.jsx(xe,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button",onClick:l,title:"进入主线下一手 (→)","aria-label":"进入主线下一手，快捷键右方向键",disabled:!t.children[0],children:n.jsx(be,{size:16})}),n.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:u,title:"删除当前节点 (Delete)","aria-label":"删除当前节点，快捷键 Delete",disabled:s==="root",children:n.jsx(ge,{size:16})})]})]}),n.jsxs("div",{className:"shogi-current-move",children:[n.jsx("span",{children:ue(t)}),n.jsx("strong",{children:V(t)}),n.jsxs("em",{children:[t.children.length," NEXT"]})]}),n.jsxs("div",{className:"shogi-route-section",children:[n.jsxs("div",{className:"shogi-route-title",children:[n.jsx("span",{children:"ACTIVE ROUTE"}),n.jsxs("strong",{children:[N.length-1," MOVES"]})]}),n.jsx("div",{className:"shogi-route-list",children:N.map(d=>n.jsxs("button",{type:"button",className:d.id===s?"is-active":"",onClick:()=>r(d.id),children:[n.jsx("span",{children:ue(d)}),n.jsx("strong",{children:V(d)}),d.children.length>1&&n.jsxs("em",{children:[d.children.length," choices"]})]},d.id))})]}),n.jsx("div",{className:"shogi-branch-breadcrumbs",children:p.length===0?n.jsx("span",{children:"NO BRANCH ON THIS ROUTE"}):p.map(({node:d,selectedChildId:x,selectedIndex:i})=>n.jsxs("button",{type:"button",onClick:()=>r(x),children:[n.jsxs("span",{children:[d.moveNumber,"手目"]}),n.jsx("strong",{children:String.fromCharCode(65+Math.max(i,0))})]},`${d.id}-${x}`))}),n.jsxs("div",{className:"shogi-choice-grid","aria-label":"current variation choices",children:[n.jsxs("div",{className:"shogi-route-title",children:[n.jsx("span",{children:"THIS POSITION"}),n.jsxs("strong",{children:[j.length||1," CHOICES"]})]}),n.jsx("div",{className:"shogi-choice-list",children:j.length<=1?n.jsx("span",{className:"shogi-choice-empty",children:"当前手没有同局面变化"}):j.map((d,x)=>{const i=e[d];if(!i)return null;const h=x===0?"主线":`变化 ${x}`;return n.jsxs("button",{type:"button",className:d===s?"is-active":"",onClick:()=>r(d),children:[n.jsx("span",{children:h}),n.jsx("strong",{children:V(i)}),n.jsxs("em",{children:[i.children.length," next"]})]},d)})})]}),n.jsxs("div",{className:"shogi-next-choices","aria-label":"next move choices",children:[n.jsxs("div",{className:"shogi-route-title",children:[n.jsx("span",{children:"NEXT MOVES"}),n.jsxs("strong",{children:[t.children.length," AVAILABLE"]})]}),n.jsx("div",{className:"shogi-next-list",children:t.children.length===0?n.jsx("span",{className:"shogi-choice-empty",children:"当前局面没有后续手"}):t.children.map((d,x)=>{const i=e[d];return i?n.jsxs("button",{type:"button",onClick:()=>r(d),children:[n.jsx("span",{children:String.fromCharCode(65+x)}),n.jsx("strong",{children:V(i)})]},d):null})})]}),n.jsxs("label",{className:"shogi-comment-box",children:[n.jsx("span",{children:"COMMENT BUFFER"}),n.jsx("textarea",{value:t.comment,onChange:d=>o(d.target.value),placeholder:"节点注释"})]})]})},Ze=`#KIF version=2.0 encoding=UTF-8
# Generated by LUNA_PROTOCOL SHOGI_NODE
開始日時：2026/6/17 0:46:07
手合割：平手
先手：SENTE
後手：GOTE
手数----指手---------消費時間--
1 ▲２六歩(27)
2 △８四歩(83)
3 ▲２五歩(26)
4 △８五歩(84)

変化：5手
5 ▲７八金(69)
*标准走法，保护8七，8八
6 △３二金(41)

変化：7手
7 ▲３八銀(39)
*定迹
8 △７二銀(71)

変化：9手
9 ▲９六歩(97)

変化：10手
10 △１四歩(13)

変化：11手
11 ▲１六歩(17)

変化：12手
12 △９四歩(93)

変化：13手
13 ▲２四歩(25)
14 △２四歩(23)
15 ▲２四飛(28)
16 △２三歩打
17 ▲２六飛(24)

変化：18手
18 △３四歩(33)
19 ▲７六歩(77)
20 △８六歩(85)
21 ▲８六歩(87)
22 △８六飛(82)
23 ▲３六飛(26)
24 △３三金(32)
25 ▲７五歩(76)
26 △８二飛(86)
27 ▲７七桂(89)

変化：28手
28 △６四歩(63)
29 ▲８五歩打
30 △６三銀(72)
31 ▲８六飛(36)
32 △７二金(61)
33 ▲４八玉(59)
28 △８六歩打
29 ▲８七歩打
18 △６四歩(63)
19 ▲３六歩(37)

変化：20手
20 △３四歩(33)
21 ▲３七銀(38)
22 △８六歩(85)
23 ▲８六歩(87)
24 △８六飛(82)
25 ▲８七歩打
26 △８四飛(86)
27 ▲４六銀(37)
28 △６三銀(72)

変化：29手
29 ▲３七桂(29)
29 ▲３五歩(36)
20 △６三銀(72)
21 ▲３五歩(36)

変化：13手
13 ▲４六歩(47)
14 △８六歩(85)
15 ▲８六歩(87)
16 △８六飛(82)

変化：17手
17 ▲４七銀(38)
18 △８四飛(86)
19 ▲８七歩打
20 △６四歩(63)
21 ▲３六歩(37)
22 △６三銀(72)
23 ▲３七桂(29)
24 △５二玉(51)
25 ▲５八玉(59)
26 △６二金(61)
27 ▲４八金(49)
28 △７四歩(73)
29 ▲２四歩(25)
30 △２四歩(23)
31 ▲２四飛(28)
32 △２三歩打
33 ▲２九飛(24)
17 ▲８七歩打
18 △４六飛(86)

変化：13手
13 ▲３六歩(37)
14 △３四歩(33)
15 ▲３七桂(29)
16 △５二玉(51)
13 ▲２四歩(25)
14 △２四歩(23)
15 ▲２四飛(28)
16 △２三歩打
17 ▲２八飛(24)
18 △５二玉(51)
*虚着，展示后续方向
19 ▲２七銀(38)

変化：20手
20 △３四歩(33)
21 ▲２六銀(27)
22 △８六歩(85)
23 ▲８六歩(87)
24 △８六飛(82)
25 ▲８七歩打
26 △８四飛(86)
27 ▲２五銀(26)

変化：28手
28 △５一玉(52)
29 ▲２四歩打
30 △２四歩(23)
31 ▲２四銀(25)
32 △４四角(22)
33 ▲２三銀(24)成
34 △２七歩打
35 ▲２七飛(28)
36 △２六歩打
28 △３五歩(34)
29 ▲２四歩打
30 △２四歩(23)
31 ▲２四銀(25)
32 △３六歩(35)
33 ▲３六歩(37)
34 △５五角(22)
20 △５一玉(52)

変化：21手
21 ▲３六銀(27)
22 △３四歩(33)
23 ▲４五銀(36)
21 ▲２六銀(27)
22 △５二玉(51)
23 ▲２五銀(26)
24 △５一玉(52)
25 ▲２四歩打
26 △２四歩(23)
27 ▲２四銀(25)
28 △２三歩打
29 ▲２三銀(24)成
30 △２三金(32)
31 ▲２三飛(28)成
12 △６四歩(63)
13 ▲２四歩(25)
14 △２四歩(23)
15 ▲２四飛(28)
16 △３四歩(33)
17 ▲３四飛(24)

変化：18手
18 △５二玉(51)
*虚着，展示1六步另一个作用
19 ▲１五歩(16)
20 △１五歩(14)
21 ▲１三歩打
22 △１三香(11)
23 ▲１四歩打
18 △２八歩打
19 ▲１七桂(29)
11 ▲４六歩(47)
12 △８六歩(85)
13 ▲８六歩(87)
14 △８六飛(82)
15 ▲４七銀(38)
10 △７四歩(73)
11 ▲２四歩(25)
12 △２四歩(23)
13 ▲２四飛(28)

変化：14手
14 △３四歩(33)
15 ▲３四飛(24)
16 △２八歩打

変化：17手
17 ▲２四飛(34)
18 △２九歩(28)成
19 ▲２九飛(24)
20 △８六歩(85)
21 ▲８六歩(87)
22 △８六飛(82)

変化：23手
23 ▲２四歩打

変化：24手
24 △２六歩打
25 ▲８七歩打
26 △８五飛(86)
27 ▲２六飛(29)
28 △４四角(22)
29 ▲２八飛(26)
30 △２二銀(31)
24 △８七歩打
25 ▲９七角(88)
26 △８五飛(86)
27 ▲２三歩(24)成
23 ▲８七歩打
24 △８五飛(86)
25 ▲２四歩打
26 △２五歩打
17 ▲７四飛(34)
18 △２九歩(28)成
19 ▲２九銀(38)
14 △２三歩打
15 ▲７四飛(24)
16 △７三銀(72)
17 ▲７六飛(74)
18 △６四銀(73)
19 ▲２六飛(76)
9 ▲２四歩(25)
10 △２四歩(23)
11 ▲２四飛(28)
12 △２三歩打
13 ▲２六飛(24)
14 △５二玉(51)
15 ▲７六歩(77)
16 △８六歩(85)
17 ▲８六歩(87)
18 △８六飛(82)
19 ▲８七歩打
20 △８二飛(86)
7 ▲２四歩(25)
8 △２四歩(23)
9 ▲２四飛(28)
10 △２三歩打

変化：11手
11 ▲２六飛(24)
*相比2八飞可以保护8六格。后续定迹待补充
11 ▲２八飛(24)
*较为被动
12 △８六歩(85)
5 ▲２四歩(25)
*5步爆弹

変化：6手
6 △８六歩(85)
*恶手
7 ▲２三歩(24)成
8 △８七歩(86)成
9 ▲８三歩打
*先手优势
6 △２四歩(23)

変化：7手
7 ▲７八金(69)
8 △３二金(41)
*与定迹合流

変化：7手
7 ▲７六歩(77)
8 △３二金(41)
9 ▲２四飛(28)
10 △２三歩打
11 ▲２六飛(24)
*与定迹合流
7 ▲２四飛(28)
*恶手
8 △８六歩(85)

変化：9手
9 ▲２三歩打
*恶手
10 △８七歩(86)成
11 ▲２二歩(23)成
12 △２二銀(31)
13 ▲２八飛(24)
14 △２七歩打
15 ▲５八飛(28)
16 △８六歩打

変化：9手
9 ▲２三歩打
10 △８七歩(86)成
11 ▲２二歩(23)成
12 △２二銀(31)
13 ▲２八飛(24)

変化：14手
14 △８六歩打
14 △８八と(87)
15 ▲８八銀(79)
*先手劣势
9 ▲８六歩(87)
10 △８七歩打
11 ▲２三歩打
12 △８八歩(87)成
13 ▲８八銀(79)
14 △３五角打
15 ▲２八飛(24)
16 △５七角(35)成
17 ▲２二歩(23)成

変化：18手
18 △２二銀(31)
*恶手
19 ▲３六角打

変化：20手
20 △２七歩打
21 ▲２七飛(28)
22 △８六飛(82)
23 ▲８七歩打
24 △３六飛(86)

変化：25手
25 ▲２二飛(27)成
25 ▲３六歩(37)
*恶手
26 △２六歩打
27 ▲２六飛(27)
28 △１五角打
29 ▲２五飛打
30 △２六角(15)
31 ▲２六飛(25)
32 △２三歩打
20 △６二飛(82)
21 ▲５二歩打
22 △５二飛(62)
23 ▲６三角(36)成
18 △２二飛(82)
19 ▲２三歩打
*后手优势
`,en="../data/shogi-kifu/",nn=Object.assign({"../../data/shogi-kifu/aigakari.kif":Ze}),tn=e=>e.replace(en,"").replace("../../data/shogi-kifu/","").replace(/\.(kif|json)$/i,"").split("/").map(s=>s.replace(/[-_]/g," ")).join(" / "),sn=Object.entries(nn).map(([e,s])=>({path:e,title:tn(e),extension:e.toLowerCase().endsWith(".json")?"json":"kif",content:s})).sort((e,s)=>e.title.localeCompare(s.title,"zh-Hans")),rn=e=>{const s=E[e.owner].mark,t=_e(e.piece,e.promotedBefore),r=e.drop?"打":e.from!==void 0?`(${Ue(e.from)})`:"",a=e.promotedAfter&&!e.promotedBefore?"成":"";return`${s}${se(e.to)}${t}${r}${a}`},he=(e,s,t)=>{const r=new Blob([s],{type:t}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download=e,l.click(),URL.revokeObjectURL(a)},me=()=>{const e=new Date,s=t=>t.toString().padStart(2,"0");return`${e.getFullYear()}${s(e.getMonth()+1)}${s(e.getDate())}-${s(e.getHours())}${s(e.getMinutes())}`},we=(e,s)=>{const t=e[s];return t?t.children.flatMap(r=>[r,...we(e,r)]):[]},on=e=>{const s=["#KIF version=2.0 encoding=UTF-8","# Generated by LUNA_PROTOCOL SHOGI_NODE",`開始日時：${new Date().toLocaleString("ja-JP")}`,"手合割：平手","先手：SENTE","後手：GOTE","手数----指手---------消費時間--"],t=l=>{l.move&&(s.push(`${l.moveNumber} ${l.move.notation}`),l.comment.trim()&&l.comment.split(/\r?\n/).forEach(u=>s.push(`*${u}`)))},r=l=>{let u=l;for(;u;){const o=e[u];if(!o)break;t(o),o.children.slice(1).forEach(m=>{const N=e[m];N&&(s.push(""),s.push(`変化：${N.moveNumber}手`),r(m))}),u=o.children[0]}},a=e[$];return a!=null&&a.children[0]&&r(a.children[0]),a==null||a.children.slice(1).forEach(l=>{s.push(""),s.push("変化：1手"),r(l)}),`${s.join(`
`)}
`},an=["９","８","７","６","５","４","３","２","１"],oe=(e,s=$)=>{var r;let t=s;for(;(r=e[t])!=null&&r.children[0];)t=e[t].children[0];return t},ln=e=>{var t;const s=JSON.parse(e);if(!((t=s.nodes)!=null&&t[$]))throw new Error("JSON 中没有 root 节点。");return{nodes:s.nodes,currentId:s.currentId&&s.nodes[s.currentId]?s.currentId:oe(s.nodes)}},cn=(e,s)=>{if(!(e<1||e>9||s<1||s>9))return(s-1)*9+(9-e)},dn=(e,s)=>{const t=an.indexOf(e),r=re.indexOf(s);if(!(t<0||r<0))return r*9+t},un=(e,s)=>{const t=e.match(/^\s*(\d+)\s+(.+)$/);if(!t)return null;const r=Number(t[1]);if(!Number.isFinite(r))return null;const a=t[2].trim().replace(/\s+\(.+$/,""),u=(a.startsWith("△")?"gote":a.startsWith("▲")?"sente":void 0)??(r%2===1?"sente":"gote");let o=a.replace(/^[▲△]/,"").replace(/\u3000/g," ").trim(),m;if(o.startsWith("同")?(m=s,o=o.replace(/^同\s*/,"")):(m=dn(o.slice(0,1),o.slice(1,2)),o=o.slice(2).trim()),m===void 0)return null;const N=Fe.find(([h])=>o.startsWith(h));if(!N)return null;const[g,j,p]=N,d=o.slice(g.length),x=d.match(/\(([1-9])([1-9])\)/),i=x?cn(Number(x[1]),Number(x[2])):void 0;return{moveNumber:r,owner:u,piece:j,promotedBefore:p,promotedAfter:p||!p&&d.includes("成")&&!d.includes("不成"),from:i,to:m,drop:d.includes("打"),notation:a}},hn=(e,s)=>{const t=e.findIndex(r=>!!r&&(r==null?void 0:r.owner)===s.owner&&r.kind===s.piece&&r.promoted===s.promotedBefore);return t>=0?t:void 0},mn=(e,s,t)=>{const r=R(e),a=q(s),l=t.drop?void 0:t.from??hn(e,t),u=l!==void 0&&r[l]?r[l]:M(t.piece,t.owner,t.promotedBefore,`import-${t.moveNumber}`),o=r[t.to];return l!==void 0&&(r[l]=null),t.drop&&t.piece!=="K"&&a[t.owner][t.piece]>0&&(a[t.owner][t.piece]-=1),o&&o.kind!=="K"&&(a[t.owner][o.kind]+=1),r[t.to]={...u,owner:t.owner,kind:t.piece,promoted:t.promotedAfter},{board:r,hands:a,record:{owner:t.owner,piece:t.piece,promotedBefore:t.promotedBefore,promotedAfter:t.promotedAfter,from:l,to:t.to,drop:t.drop,captured:o?{kind:o.kind,promoted:o.promoted,owner:o.owner}:void 0,notation:t.notation}}},pn=(e,s)=>!!e&&e.owner===s.owner&&e.piece===s.piece&&e.promotedBefore===s.promotedBefore&&e.promotedAfter===s.promotedAfter&&e.from===s.from&&e.to===s.to&&!!e.drop===s.drop,fn=e=>{const s=te(),t={[$]:s};let r=$,a=null,l=0;const u=Date.now(),o=new Set,m={0:$},N=(g,j,p)=>{const d=t[g];if(d){if(p||o.has(g)){d.children=[...d.children,j];return}d.children=[j,...d.children],o.add(g)}};return e.split(/\r?\n/).forEach(g=>{var K;const j=g.trim();if(!j)return;const p=j.match(/^変化：\s*(\d+)手/);if(p){a=Number(p[1]);return}if(j.startsWith("*")){const y=t[r]??t[$];y.comment=[y.comment,j.slice(1).trim()].filter(Boolean).join(`
`);return}if(j.startsWith("#")||j.includes("手数----"))return;const d=j.match(/^\s*(\d+)\s+/),x=d?Number(d[1]):NaN;if(!Number.isFinite(x))return;const i=m[x-1],h=i?t[i]:void 0;if(!h)return;const k=un(j,(K=h.move)==null?void 0:K.to);if(!k)return;const O=h.children.find(y=>{var A;return pn((A=t[y])==null?void 0:A.move,k)});if(O){r=O,m[k.moveNumber]=O,Object.keys(m).forEach(y=>{Number(y)>k.moveNumber&&delete m[Number(y)]}),a=null;return}const P=mn(h.board,h.hands,k);l+=1;const B=`import-${k.moveNumber}-${l}`,C=a===k.moveNumber;N(i,B,C),t[B]={id:B,parentId:i,children:[],move:P.record,board:P.board,hands:P.hands,comment:"",moveNumber:k.moveNumber,createdAt:u+l},r=B,m[k.moveNumber]=B,Object.keys(m).forEach(y=>{Number(y)>k.moveNumber&&delete m[Number(y)]}),a=null}),{nodes:t,currentId:oe(t)}},ae=e=>e==="sente"?-1:1,pe=(e,s)=>{const{row:t}=F(s);return e==="sente"?t<=2:t>=6},xn=(e,s,t)=>!e.promoted&&U.includes(e.kind)&&(pe(e.owner,s)||pe(e.owner,t)),bn=(e,s)=>{if(e.promoted)return!1;const{row:t}=F(s);return e.kind==="P"||e.kind==="L"?e.owner==="sente"?t===0:t===8:e.kind==="N"?e.owner==="sente"?t<=1:t>=7:!1},W=(e,s,t,r,a)=>{const l=F(s),u=F(t);let o=l.row+r,m=l.col+a;for(;o!==u.row||m!==u.col;){if(e[o*9+m])return!1;o+=r,m+=a}return!0},fe=(e,s,t)=>{const r=ae(e);return s===r&&Math.abs(t)<=1||s===0&&Math.abs(t)===1||s===-r&&t===0},gn=(e,s,t)=>{const r=ae(e);return s===r&&Math.abs(t)<=1||s===-r&&Math.abs(t)===1},ke=(e,s,t,r)=>{const a=F(t),l=F(r),u=l.row-a.row,o=l.col-a.col,m=Math.abs(u),N=Math.abs(o),g=ae(s.owner);if(u===0&&o===0)return!1;if(s.promoted&&["S","N","L","P"].includes(s.kind))return fe(s.owner,u,o);switch(s.kind){case"K":return Math.max(m,N)===1;case"G":return fe(s.owner,u,o);case"S":return gn(s.owner,u,o);case"N":return u===g*2&&N===1;case"L":return o===0&&u*g>0&&W(e,t,r,g,0);case"P":return o===0&&u===g;case"R":return u===0&&o!==0?W(e,t,r,0,Math.sign(o)):o===0&&u!==0?W(e,t,r,Math.sign(u),0):s.promoted&&m===1&&N===1;case"B":return m===N?W(e,t,r,Math.sign(u),Math.sign(o)):s.promoted&&(m===1&&o===0||u===0&&N===1);default:return!1}},jn=(e,s,t)=>{const{col:r}=F(t);return e.some((a,l)=>l%9===r&&(a==null?void 0:a.owner)===s&&a.kind==="P"&&!a.promoted)},Ce=(e,s)=>{const t=e.findIndex(r=>(r==null?void 0:r.owner)===s&&r.kind==="K");return t<0?!1:e.some((r,a)=>!!r&&(r==null?void 0:r.owner)!==s&&ke(e,r,a,t))},Nn=(e,s,t,r)=>{const a=R(e),l=a[t];return l?(a[t]=null,a[r]=l,Ce(a,s)):!1},vn=(e,s,t,r)=>{const a=R(e);return a[r]={id:"validation-drop",kind:t,owner:s,promoted:!1},Ce(a,s)},Sn=(e,s,t,r)=>{const a=e[t],l=e[r];return a?a.owner!==s?{legal:!1,reason:`现在轮到${E[s].label}。`}:(l==null?void 0:l.owner)===a.owner?{legal:!1,reason:"不能吃自己的棋子。"}:(l==null?void 0:l.kind)==="K"?{legal:!1,reason:"不能直接吃王。"}:ke(e,a,t,r)?Nn(e,a.owner,t,r)?{legal:!1,reason:"这手会让己方王处于被攻击状态。"}:{legal:!0,canPromote:xn(a,t,r),mustPromote:bn(a,r)}:{legal:!1,reason:"该棋子的走法不能到达目标格。"}:{legal:!1,reason:"没有可移动的棋子。"}},wn=(e,s,t,r,a,l)=>{if(r!==t)return{legal:!1,reason:`现在轮到${E[t].label}。`};if(e[l])return{legal:!1,reason:"目标格已有棋子。"};if(s[r][a]<=0)return{legal:!1,reason:"没有这枚持驹。"};const{row:u}=F(l);return(a==="P"||a==="L")&&(r==="sente"?u===0:u===8)?{legal:!1,reason:"步兵和香车不能打在最后一段。"}:a==="N"&&(r==="sente"?u<=1:u>=7)?{legal:!1,reason:"桂马不能打在无法前进的段。"}:a==="P"&&jn(e,r,l)?{legal:!1,reason:"同一筋不能有两枚未升变的步。"}:vn(e,r,a,l)?{legal:!1,reason:"这手不能解除己方王被攻击。"}:{legal:!0}},kn=(e,s)=>!!e&&e.owner===s.owner&&e.piece===s.piece&&e.promotedBefore===s.promotedBefore&&e.promotedAfter===s.promotedAfter&&e.from===s.from&&e.to===s.to&&!!e.drop==!!s.drop,Cn=({board:e,currentId:s,hands:t,mode:r,nextPlayer:a,nodes:l,pendingPromotion:u,selection:o,serialRef:m,setupOwner:N,setupPromoted:g,pushNotice:j,setCurrentId:p,setMode:d,setNodes:x,setPendingPromotion:i,setSelection:h,setSetupOwner:k,setSetupPromoted:O})=>{const P=()=>{h(null),i(null)},B=(c,f,w=!1)=>(m.current+=1,M(c,f,w,`runtime-${m.current}`)),C=(c,f)=>{x(w=>({...w,[s]:{...w[s],board:c,hands:f}}))},K=(c,f,w)=>{const v=l[s];if(!v)return;const b=v.children.find(L=>{var z;return kn((z=l[L])==null?void 0:z.move,c)});if(b){p(b),P();return}m.current+=1;const S=`node-${Date.now().toString(36)}-${m.current}`,T={...c,notation:rn(c)};x(L=>({...L,[s]:{...L[s],children:[...L[s].children,S]},[S]:{id:S,parentId:s,children:[],move:T,board:f,hands:w,comment:"",moveNumber:v.moveNumber+1,createdAt:Date.now()}})),p(S),P()},y=(c,f,w=!1)=>{const v=e[c],b=e[f];if(!v)return;const S=R(e),T=q(t),L=v.promoted||w;S[c]=null,S[f]={...v,promoted:L},b&&b.kind!=="K"&&(T[v.owner][b.kind]+=1),K({owner:v.owner,piece:v.kind,promotedBefore:v.promoted,promotedAfter:L,from:c,to:f,captured:b?{kind:b.kind,promoted:b.promoted,owner:b.owner}:void 0},S,T)},A=(c,f,w)=>{const v=wn(e,t,a,c,f,w);if(!v.legal)return j(v.reason??"不能在这里打入。");const b=R(e),S=q(t);b[w]=B(f,c,!1),S[c][f]-=1,K({owner:c,piece:f,promotedBefore:!1,promotedAfter:!1,to:w,drop:!0},b,S)},J=(c,f)=>{if((o==null?void 0:o.source)==="palette"){const w=R(e);return w[c]=B(o.kind,o.owner,o.promoted),C(w,t),void i(null)}if((o==null?void 0:o.source)==="board"){if(o.index===c)return P();const w=R(e),v=w[o.index];return v?(w[o.index]=null,w[c]=v,C(w,t),h({source:"board",index:c}),void i(null)):P()}h(f?{source:"board",index:c}:null),i(null)},X=(c,f)=>{if((o==null?void 0:o.source)!=="board")return;if(o.index===c)return P();const w=e[o.index];if((f==null?void 0:f.owner)===(w==null?void 0:w.owner))return f.owner===a?(h({source:"board",index:c}),void i(null)):j(`现在轮到${E[a].label}。`);const v=Sn(e,a,o.index,c);if(!v.legal)return j(v.reason??"这手不合法。");if(v.mustPromote)return y(o.index,c,!0);if(v.canPromote)return void i({from:o.index,to:c});y(o.index,c,!1)},H=c=>{const f=e[c];if(r==="setup")return J(c,f);if((o==null?void 0:o.source)==="hand")return A(o.owner,o.kind,c);if((o==null?void 0:o.source)==="board")return X(c,f);if(f&&f.owner!==a)return j(`现在轮到${E[a].label}。`);h(f?{source:"board",index:c}:null),i(null)},_=c=>{d("setup"),h({source:"palette",kind:c,owner:N,promoted:g&&U.includes(c)})},Y=(c,f)=>{if(!(r==="setup"||t[c][f]<=0)){if(c!==a)return j(`现在轮到${E[a].label}。`);h({source:"hand",owner:c,kind:f}),i(null)}},Q=(c,f,w)=>{const v=q(t);v[c][f]=Math.max(0,v[c][f]+w),C(e,v)},Z=()=>{if((o==null?void 0:o.source)!=="board")return;const c=R(e);c[o.index]=null,C(c,t),P()},ee=()=>{if((o==null?void 0:o.source)!=="board")return;const c=R(e),f=c[o.index];f&&(f.owner=f.owner==="sente"?"gote":"sente",C(c,t))},G=()=>{if((o==null?void 0:o.source)!=="board")return;const c=R(e),f=c[o.index];!f||!U.includes(f.kind)||(f.promoted=!f.promoted,C(c,t))};return{changeHandCount:Q,changeSetupOwner:c=>{k(c),(o==null?void 0:o.source)==="palette"&&h({...o,owner:c})},changeSetupPromoted:c=>{O(c),(o==null?void 0:o.source)==="palette"&&h({...o,promoted:c&&U.includes(o.kind)})},clearPosition:()=>{C(ve(),Se()),P()},clearTransient:P,flipSelectedOwner:ee,handleBoardClick:H,recordPendingPromotion:c=>u&&y(u.from,u.to,c),removeSelectedPiece:Z,selectHandPiece:Y,selectPalettePiece:_,selectedBoardPiece:(o==null?void 0:o.source)==="board"?e[o.index]:null,setModeAndClear:c=>{d(c),P()},toggleSelectedPromotion:G}},Pn=()=>{const[e,s]=I.useState(()=>({[$]:te()})),[t,r]=I.useState($),[a,l]=I.useState("record"),[u,o]=I.useState("sente"),[m,N]=I.useState(!1),[g,j]=I.useState(null),[p,d]=I.useState(null),[x,i]=I.useState("idle"),[h,k]=I.useState(""),[O,P]=I.useState(""),B=I.useRef(0),C=e[t]??e[$],K=C.board,y=C.hands,A=C.moveNumber%2===0?"sente":"gote",J=I.useMemo(()=>{var T;const b=[];let S=t;for(;S;)b.push(S),S=(T=e[S])==null?void 0:T.parentId;return b.reverse()},[t,e]),X=I.useMemo(()=>J.map(b=>e[b]).filter(b=>!!(b!=null&&b.move)),[J,e]),H=b=>{k(b),window.setTimeout(()=>k(S=>S===b?"":S),1800)},_=Cn({board:K,currentId:t,hands:y,mode:a,nextPlayer:A,nodes:e,pendingPromotion:g,selection:p,serialRef:B,setupOwner:u,setupPromoted:m,pushNotice:H,setCurrentId:r,setMode:l,setNodes:s,setPendingPromotion:j,setSelection:d,setSetupOwner:o,setSetupPromoted:N}),Y=()=>{s({[$]:te()}),r($),_.clearTransient(),P(""),k("")},Q=()=>{if(t===$||!C.parentId)return;const b=C.parentId,S=[t,...we(e,t)];s(T=>{const L={...T};return S.forEach(z=>delete L[z]),L[b]={...L[b],children:L[b].children.filter(z=>z!==t)},L}),r(b),_.clearTransient()},Z=b=>{s(S=>({...S,[t]:{...S[t],comment:b}}))},ee=b=>{try{const S=b.extension==="json"?ln(b.content):fn(b.content);s(S.nodes),r(S.currentId),_.clearTransient(),P(b.path),H(`已载入 ${b.title}`)}catch(S){H(S instanceof Error?S.message:"棋谱读取失败。")}},G=on(e),c=()=>he(`luna-shogi-${me()}.kif`,G,"text/plain;charset=utf-8"),f=()=>{const b={version:"luna-shogi-kifu-v1",exportedAt:new Date().toISOString(),currentId:t,nodes:e};he(`luna-shogi-${me()}.json`,JSON.stringify(b,null,2),"application/json;charset=utf-8")},w=()=>{navigator.clipboard.writeText(G).then(()=>{i("copied"),window.setTimeout(()=>i("idle"),1200)})},v=b=>{r(b),_.clearTransient()};return{activeStoredPath:O,board:K,copyKif:w,copyState:x,currentId:t,currentNode:C,deleteCurrentNode:Q,exportJson:f,exportKif:c,hands:y,kifPreview:G,loadStoredKifu:ee,mode:a,moveLine:X,nextPlayer:A,nodes:e,notice:h,pendingPromotion:g,pendingPromotionPiece:g?K[g.from]:null,resetToInitial:Y,selectNode:v,selection:p,setupOwner:u,setupPromoted:m,stepBack:()=>C.parentId&&v(C.parentId),stepForward:()=>C.children[0]&&v(C.children[0]),updateComment:Z,..._}},En=e=>e instanceof HTMLElement?e.isContentEditable||e.closest("input, textarea, select, [contenteditable='true']")!==null:!1,yn=({currentId:e,currentNode:s,mode:t,nodes:r,pendingPromotion:a,selectedBoardPiece:l,cancelTransient:u,deleteCurrentNode:o,recordPendingPromotion:m,removeSelectedPiece:N,selectNode:g,setModeAndClear:j,stepBack:p,stepForward:d})=>{I.useEffect(()=>{const x=i=>{if(i.defaultPrevented||En(i.target)||i.altKey||i.ctrlKey||i.metaKey)return;const h=i.key.toLowerCase(),k=s.parentId?r[s.parentId]:void 0,O=(k==null?void 0:k.children)??[],P=O.indexOf(e),B=/^[1-9]$/.test(i.key)?Number(i.key)-1:-1;if(a){if(h==="enter"||h==="y"){i.preventDefault(),m(!0);return}if(h==="n"){i.preventDefault(),m(!1);return}h==="escape"&&(i.preventDefault(),u());return}if(B>=0&&s.children[B]){i.preventDefault(),g(s.children[B]);return}switch(h){case"arrowleft":s.parentId&&(i.preventDefault(),p());break;case"arrowright":s.children[0]&&(i.preventDefault(),d());break;case"arrowup":P>0&&(i.preventDefault(),g(O[P-1]));break;case"arrowdown":P>=0&&P<O.length-1&&(i.preventDefault(),g(O[P+1]));break;case"home":e!==$&&(i.preventDefault(),g($));break;case"end":{const C=oe(r,e);C!==e&&(i.preventDefault(),g(C));break}case"r":i.preventDefault(),j("record");break;case"s":i.preventDefault(),j("setup");break;case"escape":i.preventDefault(),u();break;case"delete":t==="setup"&&l?(i.preventDefault(),N()):e!==$&&(i.preventDefault(),o());break}};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[u,e,s,o,t,r,a,m,N,l,g,j,p,d])},Ln=()=>{var s,t;const e=Pn();return yn(e),n.jsxs("section",{className:"shogi-page relative min-h-dvh overflow-hidden px-2 pb-24 pt-5 text-slate-100 sm:px-4 md:px-8 md:pb-20 md:pt-40",children:[n.jsx("div",{className:"shogi-scanline","aria-hidden":"true"}),n.jsx("div",{className:"shogi-grid-glow","aria-hidden":"true"}),n.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4",children:[n.jsx(He,{nextPlayer:e.nextPlayer,moveNumber:e.currentNode.moveNumber,nodeCount:Object.keys(e.nodes).length}),n.jsxs("div",{className:"shogi-workspace",children:[n.jsx(ze,{board:e.board,hands:e.hands,mode:e.mode,nextPlayer:e.nextPlayer,notice:e.notice,selection:e.selection,pendingPromotion:e.pendingPromotion,pendingPromotionPiece:e.pendingPromotionPiece,lastFrom:(s=e.currentNode.move)==null?void 0:s.from,lastTo:(t=e.currentNode.move)==null?void 0:t.to,onSetMode:e.setModeAndClear,onBoardClick:e.handleBoardClick,onHandSelect:e.selectHandPiece,onHandCountChange:e.changeHandCount,onPromotionChoice:e.recordPendingPromotion}),n.jsx(Je,{currentId:e.currentId,currentNode:e.currentNode,nodes:e.nodes,onSelectNode:e.selectNode,onStepBack:e.stepBack,onStepForward:e.stepForward,onDeleteCurrent:e.deleteCurrentNode}),n.jsx(Qe,{nodes:e.nodes,currentId:e.currentId,currentNode:e.currentNode,onSelectNode:e.selectNode,onStepBack:e.stepBack,onStepForward:e.stepForward,onDeleteCurrent:e.deleteCurrentNode,onCommentChange:e.updateComment}),n.jsx(Ye,{moveLine:e.moveLine,currentId:e.currentId,setupOwner:e.setupOwner,setupPromoted:e.setupPromoted,selection:e.selection,selectedBoardPiece:e.selectedBoardPiece,storedFiles:sn,activeStoredPath:e.activeStoredPath,copyState:e.copyState,kifPreview:e.kifPreview,onSetupOwnerChange:e.changeSetupOwner,onSetupPromotedChange:e.changeSetupPromoted,onPaletteSelect:e.selectPalettePiece,onClearPosition:e.clearPosition,onReset:e.resetToInitial,onFlipSelectedOwner:e.flipSelectedOwner,onToggleSelectedPromotion:e.toggleSelectedPromotion,onRemoveSelectedPiece:e.removeSelectedPiece,onStoredLoad:e.loadStoredKifu,onExportKif:e.exportKif,onExportJson:e.exportJson,onCopyKif:e.copyKif,onSelectLineNode:e.selectNode})]})]})]})};export{Ln as default};
