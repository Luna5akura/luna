import{j as t,r as L}from"./react-vendor-DQzRK5C9.js";import{J as Ce,K as Pe,O as Ee,Q as Be,e as Oe,U as $e,X as ye,Y as Ie,_ as Le,$ as ce,a0 as Me,a1 as de,a2 as Re,a3 as Te,a4 as Ke,a5 as Ae}from"./ui-vendor-C1dcfVgQ.js";import"./misc-vendor-BZVMSyEO.js";const O="root",De=["K","R","B","G","S","N","L","P"],Fe=["R","B","G","S","N","L","P"],H=["R","B","S","N","L","P"],ae=["一","二","三","四","五","六","七","八","九"],be=["９","８","７","６","５","４","３","２","１"],E={sente:{label:"先手",mark:"▲",tone:"text-cyan-200"},gote:{label:"後手",mark:"△",tone:"text-rose-200"}},D={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},ue={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},je={R:"龍",B:"馬",S:"全",N:"圭",L:"杏",P:"と"},_e={R:"龍",B:"馬",S:"成銀",N:"成桂",L:"成香",P:"と"},Ue=[["成銀","S",!0],["成桂","N",!0],["成香","L",!0],["龍","R",!0],["竜","R",!0],["馬","B",!0],["と","P",!0],["玉","K",!1],["王","K",!1],["飛","R",!1],["角","B",!1],["金","G",!1],["銀","S",!1],["桂","N",!1],["香","L",!1],["歩","P",!1],["步","P",!1]],K=(e,s,n=!1,r=Math.random().toString(36).slice(2))=>({id:`${s}-${e}-${r}`,kind:e,owner:s,promoted:n&&H.includes(e)}),Ne=()=>Array.from({length:81},()=>null),Se=()=>({sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}}),A=e=>e.map(s=>s?{...s}:null),X=e=>({sente:{...e.sente},gote:{...e.gote}}),He=()=>{const e=Ne();["L","N","S","G","K","G","S","N","L"].forEach((n,r)=>{e[r]=K(n,"gote",!1,`a${r}`),e[72+r]=K(n,"sente",!1,`i${r}`)}),e[10]=K("R","gote",!1,"b-rook"),e[16]=K("B","gote",!1,"b-bishop"),e[64]=K("B","sente",!1,"h-bishop"),e[70]=K("R","sente",!1,"h-rook");for(let n=0;n<9;n+=1)e[18+n]=K("P","gote",!1,`c${n}`),e[54+n]=K("P","sente",!1,`g${n}`);return e},re=()=>({id:O,children:[],board:He(),hands:Se(),comment:"",moveNumber:0,createdAt:Date.now()}),he=e=>e.promoted?je[e.kind]??D[e.kind]:D[e.kind],ze=(e,s)=>s?_e[e]??ue[e]:ue[e],oe=e=>{const s=Math.floor(e/9),n=e%9;return`${be[n]}${ae[s]}`},Ge=e=>{const s=Math.floor(e/9);return`${9-e%9}${s+1}`},_=e=>({row:Math.floor(e/9),col:e%9}),Je=({board:e,hands:s,mode:n,nextPlayer:r,notice:a,selection:c,pendingPromotion:h,pendingPromotionPiece:o,lastFrom:p,lastTo:v,onSetMode:b,onBoardClick:x,onHandSelect:f,onHandCountChange:j,onPromotionChoice:C})=>t.jsxs("section",{className:"shogi-panel shogi-board-panel","aria-label":"shogi board editor",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"BOARD MATRIX"}),t.jsx("h2",{children:"盤面"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:`shogi-icon-button ${n==="record"?"is-active":""}`,onClick:()=>b("record"),title:"记录走子 (R)","aria-label":"记录走子，快捷键 R",children:t.jsx(Ce,{size:16})}),t.jsx("button",{type:"button",className:`shogi-icon-button ${n==="setup"?"is-active":""}`,onClick:()=>b("setup"),title:"摆放棋子 (S)","aria-label":"摆放棋子，快捷键 S",children:t.jsx(Pe,{size:16})})]})]}),t.jsxs("div",{className:"shogi-board-shell",children:[t.jsx("div",{className:"shogi-file-labels","aria-hidden":"true",children:be.map(i=>t.jsx("span",{children:i},i))}),t.jsxs("div",{className:"shogi-board-row",children:[t.jsx("div",{className:"shogi-rank-labels","aria-hidden":"true",children:ae.map(i=>t.jsx("span",{children:i},i))}),t.jsx("div",{className:"shogi-board",role:"grid","aria-label":"将棋棋盘",children:e.map((i,l)=>{const u=(c==null?void 0:c.source)==="board"&&c.index===l,B=v===l||p===l;return t.jsx("button",{type:"button",role:"gridcell",className:`shogi-square ${u?"is-selected":""} ${B?"is-last-move":""}`,onClick:()=>x(l),"aria-label":`${oe(l)} ${i?`${E[i.owner].label}${he(i)}`:"空"}`,children:i&&t.jsx("span",{className:`shogi-piece ${i.owner==="gote"?"is-gote":"is-sente"}`,children:t.jsx("span",{children:he(i)})})},`${l}-${(i==null?void 0:i.id)??"empty"}`)})})]})]}),t.jsx("div",{className:"shogi-rule-bar","aria-live":"polite",children:h&&o?t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:[E[o.owner].mark,oe(h.to),D[o.kind]," 是否升变"]}),t.jsxs("div",{className:"shogi-promotion-actions",children:[t.jsx("button",{type:"button",onClick:()=>C(!0),children:"成"}),t.jsx("button",{type:"button",onClick:()=>C(!1),children:"不成"})]})]}):t.jsx("span",{children:a||`${E[r].mark} ${E[r].label} 行棋`})}),t.jsx("div",{className:"shogi-hands",children:["gote","sente"].map(i=>t.jsxs("div",{className:"shogi-hand-tray",children:[t.jsxs("div",{className:"shogi-hand-owner",children:[t.jsx("span",{children:E[i].mark}),t.jsx("strong",{children:E[i].label})]}),t.jsx("div",{className:"shogi-hand-pieces",children:Fe.map(l=>{const u=s[i][l],B=(c==null?void 0:c.source)==="hand"&&c.owner===i&&c.kind===l;return t.jsxs("div",{className:"shogi-hand-unit",children:[n==="setup"&&t.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>j(i,l,-1),title:"减少持驹","aria-label":`减少${E[i].label}${D[l]}`,children:t.jsx(Ee,{size:11})}),t.jsxs("button",{type:"button",className:`shogi-hand-piece ${B?"is-selected":""}`,onClick:()=>f(i,l),title:"选择持驹打入","aria-label":`${E[i].label}${D[l]} ${u}`,children:[t.jsx("span",{children:D[l]}),t.jsx("b",{children:u})]}),n==="setup"&&t.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>j(i,l,1),title:"增加持驹","aria-label":`增加${E[i].label}${D[l]}`,children:t.jsx(Be,{size:11})})]},`${i}-${l}`)})})]},i))})]}),Ve=({nextPlayer:e,moveNumber:s,nodeCount:n,branchArmed:r})=>t.jsxs("header",{className:"shogi-header",children:[t.jsxs("div",{children:[t.jsx("p",{className:"shogi-kicker",children:"TACTICAL KIFU EDITOR // SHOGI"}),t.jsx("h1",{children:"将棋打谱节点"})]}),t.jsxs("div",{className:"shogi-status-strip","aria-label":"current shogi status",children:[t.jsxs("span",{className:E[e].tone,children:[E[e].mark," ",E[e].label]}),t.jsxs("span",{children:[s.toString().padStart(3,"0")," TURNS"]}),t.jsxs("span",{children:[n.toString().padStart(3,"0")," NODES"]}),t.jsx("span",{className:r?"text-amber-200":"text-slate-500",children:r?"BRANCH ARMED":"MAINLINE"})]})]}),We=({copyState:e,kifPreview:s,onExportKif:n,onExportJson:r,onCopyKif:a})=>t.jsxs("section",{className:"shogi-panel","aria-label":"export kifu",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"EXPORT BUS"}),t.jsx("h2",{children:"导出"})]}),t.jsx(Oe,{size:18,className:"text-cyan-300"})]}),t.jsxs("div",{className:"shogi-export-actions",children:[t.jsxs("button",{type:"button",onClick:n,children:[t.jsx($e,{size:16}),"KIF"]}),t.jsxs("button",{type:"button",onClick:r,children:[t.jsx(ye,{size:16}),"JSON"]}),t.jsxs("button",{type:"button",onClick:a,children:[t.jsx(Ie,{size:16}),e==="copied"?"COPIED":"COPY"]})]}),t.jsx("pre",{className:"shogi-kif-preview",children:s})]}),qe=({storedFiles:e,activeStoredPath:s,onStoredLoad:n})=>t.jsxs("section",{className:"shogi-panel","aria-label":"stored kifu library",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"KIFU LIBRARY"}),t.jsx("h2",{children:"棋谱库"})]}),t.jsx(Le,{size:18,className:"text-cyan-300"})]}),t.jsx("div",{className:"shogi-library-list",children:e.length===0?t.jsx("span",{className:"shogi-empty-state",children:"NO STORED KIFU"}):e.map(r=>t.jsxs("button",{type:"button",className:s===r.path?"is-active":"",onClick:()=>n(r),children:[t.jsx("span",{children:r.extension.toUpperCase()}),t.jsx("strong",{children:r.title})]},r.path))})]}),Ye=({moveLine:e,currentId:s,onSelectLineNode:n})=>t.jsxs("section",{className:"shogi-panel","aria-label":"active line",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"ACTIVE LINE"}),t.jsx("h2",{children:"主线"})]}),t.jsx("span",{className:"shogi-node-count",children:e.length})]}),t.jsx("div",{className:"shogi-line-list",children:e.length===0?t.jsx("span",{className:"shogi-empty-state",children:"NO MOVES"}):e.map(r=>{var a;return t.jsxs("button",{type:"button",className:r.id===s?"is-active":"",onClick:()=>n(r.id),children:[t.jsx("span",{children:r.moveNumber}),t.jsx("strong",{children:(a=r.move)==null?void 0:a.notation})]},r.id)})})]}),Xe=({setupOwner:e,setupPromoted:s,selection:n,selectedBoardPiece:r,onSetupOwnerChange:a,onSetupPromotedChange:c,onPaletteSelect:h,onClearPosition:o,onReset:p,onFlipSelectedOwner:v,onToggleSelectedPromotion:b,onRemoveSelectedPiece:x})=>t.jsxs("section",{className:"shogi-panel","aria-label":"setup controls",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"PIECE BAY"}),t.jsx("h2",{children:"摆放"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:v,title:"反转所选阵营","aria-label":"反转所选阵营",disabled:!r,children:t.jsx(ce,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:b,title:"切换所选升变","aria-label":"切换所选升变",disabled:!r||!H.includes(r.kind),children:t.jsx(Me,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:x,title:"移除所选棋子 (Delete)","aria-label":"移除所选棋子，快捷键 Delete",disabled:!r,children:t.jsx(de,{size:16})})]})]}),t.jsx("div",{className:"shogi-segmented",role:"group","aria-label":"setup owner",children:["sente","gote"].map(f=>t.jsxs("button",{type:"button",className:e===f?"is-active":"",onClick:()=>a(f),children:[E[f].mark," ",E[f].label]},f))}),t.jsxs("div",{className:"shogi-segmented",role:"group","aria-label":"setup promotion",children:[t.jsx("button",{type:"button",className:s?"":"is-active",onClick:()=>c(!1),children:"生駒"}),t.jsx("button",{type:"button",className:s?"is-active":"",onClick:()=>c(!0),children:"成駒"})]}),t.jsx("div",{className:"shogi-palette",children:De.map(f=>{const j=(n==null?void 0:n.source)==="palette"&&n.kind===f,C=s&&H.includes(f)?je[f]??D[f]:D[f];return t.jsx("button",{type:"button",className:`shogi-palette-piece ${j?"is-selected":""}`,onClick:()=>h(f),title:`${E[e].label}${C}`,"aria-label":`${E[e].label}${C}`,children:t.jsx("span",{className:e==="gote"?"is-gote":"",children:C})},f)})}),t.jsxs("div",{className:"shogi-action-grid",children:[t.jsxs("button",{type:"button",onClick:o,children:[t.jsx(de,{size:15}),"清空局面"]}),t.jsxs("button",{type:"button",onClick:p,children:[t.jsx(ce,{size:15}),"平手初形"]})]})]}),Qe=e=>t.jsxs("aside",{className:"shogi-side-stack",children:[t.jsx(Xe,{setupOwner:e.setupOwner,setupPromoted:e.setupPromoted,selection:e.selection,selectedBoardPiece:e.selectedBoardPiece,onSetupOwnerChange:e.onSetupOwnerChange,onSetupPromotedChange:e.onSetupPromotedChange,onPaletteSelect:e.onPaletteSelect,onClearPosition:e.onClearPosition,onReset:e.onReset,onFlipSelectedOwner:e.onFlipSelectedOwner,onToggleSelectedPromotion:e.onToggleSelectedPromotion,onRemoveSelectedPiece:e.onRemoveSelectedPiece}),t.jsx(qe,{storedFiles:e.storedFiles,activeStoredPath:e.activeStoredPath,onStoredLoad:e.onStoredLoad}),t.jsx(We,{copyState:e.copyState,kifPreview:e.kifPreview,onExportKif:e.onExportKif,onExportJson:e.onExportJson,onCopyKif:e.onCopyKif}),t.jsx(Ye,{moveLine:e.moveLine,currentId:e.currentId,onSelectLineNode:e.onSelectLineNode})]}),q=e=>{var s;return((s=e==null?void 0:e.move)==null?void 0:s.notation)??"初期局面"},me=e=>e!=null&&e.move?e.moveNumber.toString().padStart(2,"0"):"00",Ze=({nodes:e,currentId:s,currentNode:n,branchArmed:r,onSelectNode:a,onStepBack:c,onStepForward:h,onArmBranch:o,onDeleteCurrent:p,onCommentChange:v})=>{const b=(()=>{var u;const i=[];let l=s;for(;l;)i.push(l),l=(u=e[l])==null?void 0:u.parentId;return i.reverse()})(),x=b.map(i=>e[i]).filter(Boolean),f=n.parentId?e[n.parentId]:void 0,j=(f==null?void 0:f.children)??[],C=b.map((i,l)=>{const u=e[i],B=b[l+1];return!u||u.children.length<=1||!B?null:{node:u,selectedChildId:B,selectedIndex:u.children.indexOf(B)}}).filter(i=>!!i);return t.jsxs("section",{className:"shogi-panel shogi-tree-panel","aria-label":"move tree and annotation",children:[t.jsxs("div",{className:"shogi-panel-head",children:[t.jsxs("div",{children:[t.jsx("p",{children:"KIFU ROUTE"}),t.jsx("h2",{children:"路线"})]}),t.jsxs("div",{className:"shogi-tool-row",children:[t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:c,title:"回到上一手 (←)","aria-label":"回到上一手，快捷键左方向键",disabled:!n.parentId,children:t.jsx(Re,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button",onClick:h,title:"进入主线下一手 (→)","aria-label":"进入主线下一手，快捷键右方向键",disabled:!n.children[0],children:t.jsx(Te,{size:16})}),t.jsx("button",{type:"button",className:`shogi-icon-button ${r?"is-active":""}`,onClick:o,title:"开分支 (B)","aria-label":"开分支，快捷键 B",children:t.jsx(Ke,{size:16})}),t.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:p,title:"删除当前节点 (Delete)","aria-label":"删除当前节点，快捷键 Delete",disabled:s==="root",children:t.jsx(Ae,{size:16})})]})]}),t.jsxs("div",{className:"shogi-current-move",children:[t.jsx("span",{children:me(n)}),t.jsx("strong",{children:q(n)}),t.jsxs("em",{children:[n.children.length," NEXT"]})]}),t.jsxs("div",{className:"shogi-route-section",children:[t.jsxs("div",{className:"shogi-route-title",children:[t.jsx("span",{children:"ACTIVE ROUTE"}),t.jsxs("strong",{children:[x.length-1," MOVES"]})]}),t.jsx("div",{className:"shogi-route-list",children:x.map(i=>t.jsxs("button",{type:"button",className:i.id===s?"is-active":"",onClick:()=>a(i.id),children:[t.jsx("span",{children:me(i)}),t.jsx("strong",{children:q(i)}),i.children.length>1&&t.jsxs("em",{children:[i.children.length," choices"]})]},i.id))})]}),t.jsx("div",{className:"shogi-branch-breadcrumbs",children:C.length===0?t.jsx("span",{children:"NO BRANCH ON THIS ROUTE"}):C.map(({node:i,selectedChildId:l,selectedIndex:u})=>t.jsxs("button",{type:"button",onClick:()=>a(l),children:[t.jsxs("span",{children:[i.moveNumber,"手目"]}),t.jsx("strong",{children:String.fromCharCode(65+Math.max(u,0))})]},`${i.id}-${l}`))}),t.jsxs("div",{className:"shogi-choice-grid","aria-label":"current variation choices",children:[t.jsxs("div",{className:"shogi-route-title",children:[t.jsx("span",{children:"THIS POSITION"}),t.jsxs("strong",{children:[j.length||1," CHOICES"]})]}),t.jsx("div",{className:"shogi-choice-list",children:j.length<=1?t.jsx("span",{className:"shogi-choice-empty",children:"当前手没有同局面变化"}):j.map((i,l)=>{const u=e[i];if(!u)return null;const B=l===0?"主线":`变化 ${l}`;return t.jsxs("button",{type:"button",className:i===s?"is-active":"",onClick:()=>a(i),children:[t.jsx("span",{children:B}),t.jsx("strong",{children:q(u)}),t.jsxs("em",{children:[u.children.length," next"]})]},i)})})]}),t.jsxs("div",{className:"shogi-next-choices","aria-label":"next move choices",children:[t.jsxs("div",{className:"shogi-route-title",children:[t.jsx("span",{children:"NEXT MOVES"}),t.jsxs("strong",{children:[n.children.length," AVAILABLE"]})]}),t.jsx("div",{className:"shogi-next-list",children:n.children.length===0?t.jsx("span",{className:"shogi-choice-empty",children:"当前局面没有后续手"}):n.children.map((i,l)=>{const u=e[i];return u?t.jsxs("button",{type:"button",onClick:()=>a(i),children:[t.jsx("span",{children:String.fromCharCode(65+l)}),t.jsx("strong",{children:q(u)})]},i):null})})]}),t.jsxs("label",{className:"shogi-comment-box",children:[t.jsx("span",{children:"COMMENT BUFFER"}),t.jsx("textarea",{value:n.comment,onChange:i=>v(i.target.value),placeholder:"节点注释"})]})]})},en=`#KIF version=2.0 encoding=UTF-8
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
`,nn="../data/shogi-kifu/",tn=Object.assign({"../../data/shogi-kifu/aigakari.kif":en}),sn=e=>e.replace(nn,"").replace("../../data/shogi-kifu/","").replace(/\.(kif|json)$/i,"").split("/").map(s=>s.replace(/[-_]/g," ")).join(" / "),rn=Object.entries(tn).map(([e,s])=>({path:e,title:sn(e),extension:e.toLowerCase().endsWith(".json")?"json":"kif",content:s})).sort((e,s)=>e.title.localeCompare(s.title,"zh-Hans")),on=e=>{const s=E[e.owner].mark,n=ze(e.piece,e.promotedBefore),r=e.drop?"打":e.from!==void 0?`(${Ge(e.from)})`:"",a=e.promotedAfter&&!e.promotedBefore?"成":"";return`${s}${oe(e.to)}${n}${r}${a}`},pe=(e,s,n)=>{const r=new Blob([s],{type:n}),a=URL.createObjectURL(r),c=document.createElement("a");c.href=a,c.download=e,c.click(),URL.revokeObjectURL(a)},fe=()=>{const e=new Date,s=n=>n.toString().padStart(2,"0");return`${e.getFullYear()}${s(e.getMonth()+1)}${s(e.getDate())}-${s(e.getHours())}${s(e.getMinutes())}`},ve=(e,s)=>{const n=e[s];return n?n.children.flatMap(r=>[r,...ve(e,r)]):[]},an=e=>{const s=["#KIF version=2.0 encoding=UTF-8","# Generated by LUNA_PROTOCOL SHOGI_NODE",`開始日時：${new Date().toLocaleString("ja-JP")}`,"手合割：平手","先手：SENTE","後手：GOTE","手数----指手---------消費時間--"],n=c=>{c.move&&(s.push(`${c.moveNumber} ${c.move.notation}`),c.comment.trim()&&c.comment.split(/\r?\n/).forEach(h=>s.push(`*${h}`)))},r=c=>{let h=c;for(;h;){const o=e[h];if(!o)break;n(o),o.children.slice(1).forEach(p=>{const v=e[p];v&&(s.push(""),s.push(`変化：${v.moveNumber}手`),r(p))}),h=o.children[0]}},a=e[O];return a!=null&&a.children[0]&&r(a.children[0]),a==null||a.children.slice(1).forEach(c=>{s.push(""),s.push("変化：1手"),r(c)}),`${s.join(`
`)}
`},ln=["９","８","７","６","５","４","３","２","１"],ie=(e,s=O)=>{var r;let n=s;for(;(r=e[n])!=null&&r.children[0];)n=e[n].children[0];return n},cn=e=>{var n;const s=JSON.parse(e);if(!((n=s.nodes)!=null&&n[O]))throw new Error("JSON 中没有 root 节点。");return{nodes:s.nodes,currentId:s.currentId&&s.nodes[s.currentId]?s.currentId:ie(s.nodes)}},dn=(e,s)=>{if(!(e<1||e>9||s<1||s>9))return(s-1)*9+(9-e)},un=(e,s)=>{const n=ln.indexOf(e),r=ae.indexOf(s);if(!(n<0||r<0))return r*9+n},hn=(e,s)=>{const n=e.match(/^\s*(\d+)\s+(.+)$/);if(!n)return null;const r=Number(n[1]);if(!Number.isFinite(r))return null;const a=n[2].trim().replace(/\s+\(.+$/,""),h=(a.startsWith("△")?"gote":a.startsWith("▲")?"sente":void 0)??(r%2===1?"sente":"gote");let o=a.replace(/^[▲△]/,"").replace(/\u3000/g," ").trim(),p;if(o.startsWith("同")?(p=s,o=o.replace(/^同\s*/,"")):(p=un(o.slice(0,1),o.slice(1,2)),o=o.slice(2).trim()),p===void 0)return null;const v=Ue.find(([l])=>o.startsWith(l));if(!v)return null;const[b,x,f]=v,j=o.slice(b.length),C=j.match(/\(([1-9])([1-9])\)/),i=C?dn(Number(C[1]),Number(C[2])):void 0;return{moveNumber:r,owner:h,piece:x,promotedBefore:f,promotedAfter:f||!f&&j.includes("成")&&!j.includes("不成"),from:i,to:p,drop:j.includes("打"),notation:a}},mn=(e,s)=>{const n=e.findIndex(r=>!!r&&(r==null?void 0:r.owner)===s.owner&&r.kind===s.piece&&r.promoted===s.promotedBefore);return n>=0?n:void 0},pn=(e,s,n)=>{const r=A(e),a=X(s),c=n.drop?void 0:n.from??mn(e,n),h=c!==void 0&&r[c]?r[c]:K(n.piece,n.owner,n.promotedBefore,`import-${n.moveNumber}`),o=r[n.to];return c!==void 0&&(r[c]=null),n.drop&&n.piece!=="K"&&a[n.owner][n.piece]>0&&(a[n.owner][n.piece]-=1),o&&o.kind!=="K"&&(a[n.owner][o.kind]+=1),r[n.to]={...h,owner:n.owner,kind:n.piece,promoted:n.promotedAfter},{board:r,hands:a,record:{owner:n.owner,piece:n.piece,promotedBefore:n.promotedBefore,promotedAfter:n.promotedAfter,from:c,to:n.to,drop:n.drop,captured:o?{kind:o.kind,promoted:o.promoted,owner:o.owner}:void 0,notation:n.notation}}},fn=(e,s)=>!!e&&e.owner===s.owner&&e.piece===s.piece&&e.promotedBefore===s.promotedBefore&&e.promotedAfter===s.promotedAfter&&e.from===s.from&&e.to===s.to&&!!e.drop===s.drop,xn=e=>{const s=re(),n={[O]:s};let r=O,a=null,c=0;const h=Date.now(),o=new Set,p={0:O},v=(b,x,f)=>{const j=n[b];if(j){if(f||o.has(b)){j.children=[...j.children,x];return}j.children=[x,...j.children],o.add(b)}};return e.split(/\r?\n/).forEach(b=>{var $;const x=b.trim();if(!x)return;const f=x.match(/^変化：\s*(\d+)手/);if(f){a=Number(f[1]);return}if(x.startsWith("*")){const k=n[r]??n[O];k.comment=[k.comment,x.slice(1).trim()].filter(Boolean).join(`
`);return}if(x.startsWith("#")||x.includes("手数----"))return;const j=x.match(/^\s*(\d+)\s+/),C=j?Number(j[1]):NaN;if(!Number.isFinite(C))return;const i=p[C-1],l=i?n[i]:void 0;if(!l)return;const u=hn(x,($=l.move)==null?void 0:$.to);if(!u)return;const B=l.children.find(k=>{var T;return fn((T=n[k])==null?void 0:T.move,u)});if(B){r=B,p[u.moveNumber]=B,Object.keys(p).forEach(k=>{Number(k)>u.moveNumber&&delete p[Number(k)]}),a=null;return}const M=pn(l.board,l.hands,u);c+=1;const P=`import-${u.moveNumber}-${c}`,R=a===u.moveNumber;v(i,P,R),n[P]={id:P,parentId:i,children:[],move:M.record,board:M.board,hands:M.hands,comment:"",moveNumber:u.moveNumber,createdAt:h+c},r=P,p[u.moveNumber]=P,Object.keys(p).forEach(k=>{Number(k)>u.moveNumber&&delete p[Number(k)]}),a=null}),{nodes:n,currentId:ie(n)}},le=e=>e==="sente"?-1:1,xe=(e,s)=>{const{row:n}=_(s);return e==="sente"?n<=2:n>=6},gn=(e,s,n)=>!e.promoted&&H.includes(e.kind)&&(xe(e.owner,s)||xe(e.owner,n)),bn=(e,s)=>{if(e.promoted)return!1;const{row:n}=_(s);return e.kind==="P"||e.kind==="L"?e.owner==="sente"?n===0:n===8:e.kind==="N"?e.owner==="sente"?n<=1:n>=7:!1},Y=(e,s,n,r,a)=>{const c=_(s),h=_(n);let o=c.row+r,p=c.col+a;for(;o!==h.row||p!==h.col;){if(e[o*9+p])return!1;o+=r,p+=a}return!0},ge=(e,s,n)=>{const r=le(e);return s===r&&Math.abs(n)<=1||s===0&&Math.abs(n)===1||s===-r&&n===0},jn=(e,s,n)=>{const r=le(e);return s===r&&Math.abs(n)<=1||s===-r&&Math.abs(n)===1},we=(e,s,n,r)=>{const a=_(n),c=_(r),h=c.row-a.row,o=c.col-a.col,p=Math.abs(h),v=Math.abs(o),b=le(s.owner);if(h===0&&o===0)return!1;if(s.promoted&&["S","N","L","P"].includes(s.kind))return ge(s.owner,h,o);switch(s.kind){case"K":return Math.max(p,v)===1;case"G":return ge(s.owner,h,o);case"S":return jn(s.owner,h,o);case"N":return h===b*2&&v===1;case"L":return o===0&&h*b>0&&Y(e,n,r,b,0);case"P":return o===0&&h===b;case"R":return h===0&&o!==0?Y(e,n,r,0,Math.sign(o)):o===0&&h!==0?Y(e,n,r,Math.sign(h),0):s.promoted&&p===1&&v===1;case"B":return p===v?Y(e,n,r,Math.sign(h),Math.sign(o)):s.promoted&&(p===1&&o===0||h===0&&v===1);default:return!1}},Nn=(e,s,n)=>{const{col:r}=_(n);return e.some((a,c)=>c%9===r&&(a==null?void 0:a.owner)===s&&a.kind==="P"&&!a.promoted)},ke=(e,s)=>{const n=e.findIndex(r=>(r==null?void 0:r.owner)===s&&r.kind==="K");return n<0?!1:e.some((r,a)=>!!r&&(r==null?void 0:r.owner)!==s&&we(e,r,a,n))},Sn=(e,s,n,r)=>{const a=A(e),c=a[n];return c?(a[n]=null,a[r]=c,ke(a,s)):!1},vn=(e,s,n,r)=>{const a=A(e);return a[r]={id:"validation-drop",kind:n,owner:s,promoted:!1},ke(a,s)},wn=(e,s,n,r)=>{const a=e[n],c=e[r];return a?a.owner!==s?{legal:!1,reason:`现在轮到${E[s].label}。`}:(c==null?void 0:c.owner)===a.owner?{legal:!1,reason:"不能吃自己的棋子。"}:(c==null?void 0:c.kind)==="K"?{legal:!1,reason:"不能直接吃王。"}:we(e,a,n,r)?Sn(e,a.owner,n,r)?{legal:!1,reason:"这手会让己方王处于被攻击状态。"}:{legal:!0,canPromote:gn(a,n,r),mustPromote:bn(a,r)}:{legal:!1,reason:"该棋子的走法不能到达目标格。"}:{legal:!1,reason:"没有可移动的棋子。"}},kn=(e,s,n,r,a,c)=>{if(r!==n)return{legal:!1,reason:`现在轮到${E[n].label}。`};if(e[c])return{legal:!1,reason:"目标格已有棋子。"};if(s[r][a]<=0)return{legal:!1,reason:"没有这枚持驹。"};const{row:h}=_(c);return(a==="P"||a==="L")&&(r==="sente"?h===0:h===8)?{legal:!1,reason:"步兵和香车不能打在最后一段。"}:a==="N"&&(r==="sente"?h<=1:h>=7)?{legal:!1,reason:"桂马不能打在无法前进的段。"}:a==="P"&&Nn(e,r,c)?{legal:!1,reason:"同一筋不能有两枚未升变的步。"}:vn(e,r,a,c)?{legal:!1,reason:"这手不能解除己方王被攻击。"}:{legal:!0}},Cn=(e,s)=>!!e&&e.owner===s.owner&&e.piece===s.piece&&e.promotedBefore===s.promotedBefore&&e.promotedAfter===s.promotedAfter&&e.from===s.from&&e.to===s.to&&!!e.drop==!!s.drop,Pn=({board:e,currentId:s,hands:n,mode:r,nextPlayer:a,nodes:c,pendingPromotion:h,selection:o,serialRef:p,setupOwner:v,setupPromoted:b,pushNotice:x,setBranchArmed:f,setCurrentId:j,setMode:C,setNodes:i,setPendingPromotion:l,setSelection:u,setSetupOwner:B,setSetupPromoted:M})=>{const P=()=>{u(null),l(null)},R=(d,m,N=!1)=>(p.current+=1,K(d,m,N,`runtime-${p.current}`)),$=(d,m)=>{i(N=>({...N,[s]:{...N[s],board:d,hands:m}}))},k=(d,m,N)=>{const S=c[s];if(!S)return;const y=S.children.find(w=>{var U;return Cn((U=c[w])==null?void 0:U.move,d)});if(y){j(y),P(),f(!1);return}p.current+=1;const I=`node-${Date.now().toString(36)}-${p.current}`,g={...d,notation:on(d)};i(w=>({...w,[s]:{...w[s],children:[...w[s].children,I]},[I]:{id:I,parentId:s,children:[],move:g,board:m,hands:N,comment:"",moveNumber:S.moveNumber+1,createdAt:Date.now()}})),j(I),P(),f(!1)},T=(d,m,N=!1)=>{const S=e[d],y=e[m];if(!S)return;const I=A(e),g=X(n),w=S.promoted||N;I[d]=null,I[m]={...S,promoted:w},y&&y.kind!=="K"&&(g[S.owner][y.kind]+=1),k({owner:S.owner,piece:S.kind,promotedBefore:S.promoted,promotedAfter:w,from:d,to:m,captured:y?{kind:y.kind,promoted:y.promoted,owner:y.owner}:void 0},I,g)},J=(d,m,N)=>{const S=kn(e,n,a,d,m,N);if(!S.legal)return x(S.reason??"不能在这里打入。");const y=A(e),I=X(n);y[N]=R(m,d,!1),I[d][m]-=1,k({owner:d,piece:m,promotedBefore:!1,promotedAfter:!1,to:N,drop:!0},y,I)},V=(d,m)=>{if((o==null?void 0:o.source)==="palette"){const N=A(e);return N[d]=R(o.kind,o.owner,o.promoted),$(N,n),void l(null)}if((o==null?void 0:o.source)==="board"){if(o.index===d)return P();const N=A(e),S=N[o.index];return S?(N[o.index]=null,N[d]=S,$(N,n),u({source:"board",index:d}),void l(null)):P()}u(m?{source:"board",index:d}:null),l(null)},W=(d,m)=>{if((o==null?void 0:o.source)!=="board")return;if(o.index===d)return P();const N=e[o.index];if((m==null?void 0:m.owner)===(N==null?void 0:N.owner))return m.owner===a?(u({source:"board",index:d}),void l(null)):x(`现在轮到${E[a].label}。`);const S=wn(e,a,o.index,d);if(!S.legal)return x(S.reason??"这手不合法。");if(S.mustPromote)return T(o.index,d,!0);if(S.canPromote)return void l({from:o.index,to:d});T(o.index,d,!1)},Q=d=>{const m=e[d];if(r==="setup")return V(d,m);if((o==null?void 0:o.source)==="hand")return J(o.owner,o.kind,d);if((o==null?void 0:o.source)==="board")return W(d,m);if(m&&m.owner!==a)return x(`现在轮到${E[a].label}。`);u(m?{source:"board",index:d}:null),l(null)},z=d=>{C("setup"),u({source:"palette",kind:d,owner:v,promoted:b&&H.includes(d)})},F=(d,m)=>{if(!(r==="setup"||n[d][m]<=0)){if(d!==a)return x(`现在轮到${E[a].label}。`);u({source:"hand",owner:d,kind:m}),l(null)}},Z=(d,m,N)=>{const S=X(n);S[d][m]=Math.max(0,S[d][m]+N),$(e,S)},ee=()=>{if((o==null?void 0:o.source)!=="board")return;const d=A(e);d[o.index]=null,$(d,n),P()},ne=()=>{if((o==null?void 0:o.source)!=="board")return;const d=A(e),m=d[o.index];m&&(m.owner=m.owner==="sente"?"gote":"sente",$(d,n))},te=()=>{if((o==null?void 0:o.source)!=="board")return;const d=A(e),m=d[o.index];!m||!H.includes(m.kind)||(m.promoted=!m.promoted,$(d,n))};return{changeHandCount:Z,changeSetupOwner:d=>{B(d),(o==null?void 0:o.source)==="palette"&&u({...o,owner:d})},changeSetupPromoted:d=>{M(d),(o==null?void 0:o.source)==="palette"&&u({...o,promoted:d&&H.includes(o.kind)})},clearPosition:()=>{$(Ne(),Se()),P()},clearTransient:P,flipSelectedOwner:ne,handleBoardClick:Q,recordPendingPromotion:d=>h&&T(h.from,h.to,d),removeSelectedPiece:ee,selectHandPiece:F,selectPalettePiece:z,selectedBoardPiece:(o==null?void 0:o.source)==="board"?e[o.index]:null,setModeAndClear:d=>{C(d),P()},toggleSelectedPromotion:te}},En=()=>{const[e,s]=L.useState(()=>({[O]:re()})),[n,r]=L.useState(O),[a,c]=L.useState("record"),[h,o]=L.useState("sente"),[p,v]=L.useState(!1),[b,x]=L.useState(null),[f,j]=L.useState(null),[C,i]=L.useState(!1),[l,u]=L.useState("idle"),[B,M]=L.useState(""),[P,R]=L.useState(""),$=L.useRef(0),k=e[n]??e[O],T=k.board,J=k.hands,V=k.moveNumber%2===0?"sente":"gote",W=L.useMemo(()=>{var U;const g=[];let w=n;for(;w;)g.push(w),w=(U=e[w])==null?void 0:U.parentId;return g.reverse()},[n,e]),Q=L.useMemo(()=>W.map(g=>e[g]).filter(g=>!!(g!=null&&g.move)),[W,e]),z=g=>{M(g),window.setTimeout(()=>M(w=>w===g?"":w),1800)},F=Pn({board:T,currentId:n,hands:J,mode:a,nextPlayer:V,nodes:e,pendingPromotion:b,selection:f,serialRef:$,setupOwner:h,setupPromoted:p,pushNotice:z,setBranchArmed:i,setCurrentId:r,setMode:c,setNodes:s,setPendingPromotion:x,setSelection:j,setSetupOwner:o,setSetupPromoted:v}),Z=()=>{s({[O]:re()}),r(O),F.clearTransient(),i(!1),R(""),M("")},ee=()=>{if(n===O||!k.parentId)return;const g=k.parentId,w=[n,...ve(e,n)];s(U=>{const G={...U};return w.forEach(se=>delete G[se]),G[g]={...G[g],children:G[g].children.filter(se=>se!==n)},G}),r(g),F.clearTransient()},ne=()=>{k.parentId&&r(k.parentId),F.clearTransient(),i(!0)},te=g=>{s(w=>({...w,[n]:{...w[n],comment:g}}))},d=g=>{try{const w=g.extension==="json"?cn(g.content):xn(g.content);s(w.nodes),r(w.currentId),F.clearTransient(),i(!1),R(g.path),z(`已载入 ${g.title}`)}catch(w){z(w instanceof Error?w.message:"棋谱读取失败。")}},m=an(e),N=()=>pe(`luna-shogi-${fe()}.kif`,m,"text/plain;charset=utf-8"),S=()=>{const g={version:"luna-shogi-kifu-v1",exportedAt:new Date().toISOString(),currentId:n,nodes:e};pe(`luna-shogi-${fe()}.json`,JSON.stringify(g,null,2),"application/json;charset=utf-8")},y=()=>{navigator.clipboard.writeText(m).then(()=>{u("copied"),window.setTimeout(()=>u("idle"),1200)})},I=g=>{r(g),F.clearTransient(),i(!1)};return{activeStoredPath:P,board:T,branchArmed:C,copyKif:y,copyState:l,currentId:n,currentNode:k,deleteCurrentNode:ee,exportJson:S,exportKif:N,hands:J,kifPreview:m,loadStoredKifu:d,mode:a,moveLine:Q,nextPlayer:V,nodes:e,notice:B,pendingPromotion:b,pendingPromotionPiece:b?T[b.from]:null,resetToInitial:Z,selectNode:I,selection:f,setupOwner:h,setupPromoted:p,stepBack:()=>k.parentId&&I(k.parentId),stepForward:()=>k.children[0]&&I(k.children[0]),armSiblingBranch:ne,updateComment:te,...F}},Bn=e=>e instanceof HTMLElement?e.isContentEditable||e.closest("input, textarea, select, [contenteditable='true']")!==null:!1,On=({currentId:e,currentNode:s,mode:n,nodes:r,pendingPromotion:a,selectedBoardPiece:c,armSiblingBranch:h,cancelTransient:o,deleteCurrentNode:p,recordPendingPromotion:v,removeSelectedPiece:b,selectNode:x,setModeAndClear:f,stepBack:j,stepForward:C})=>{L.useEffect(()=>{const i=l=>{if(l.defaultPrevented||Bn(l.target)||l.altKey||l.ctrlKey||l.metaKey)return;const u=l.key.toLowerCase(),B=s.parentId?r[s.parentId]:void 0,M=(B==null?void 0:B.children)??[],P=M.indexOf(e),R=/^[1-9]$/.test(l.key)?Number(l.key)-1:-1;if(a){if(u==="enter"||u==="y"){l.preventDefault(),v(!0);return}if(u==="n"){l.preventDefault(),v(!1);return}u==="escape"&&(l.preventDefault(),o());return}if(R>=0&&s.children[R]){l.preventDefault(),x(s.children[R]);return}switch(u){case"arrowleft":s.parentId&&(l.preventDefault(),j());break;case"arrowright":s.children[0]&&(l.preventDefault(),C());break;case"arrowup":P>0&&(l.preventDefault(),x(M[P-1]));break;case"arrowdown":P>=0&&P<M.length-1&&(l.preventDefault(),x(M[P+1]));break;case"home":e!==O&&(l.preventDefault(),x(O));break;case"end":{const $=ie(r,e);$!==e&&(l.preventDefault(),x($));break}case"r":l.preventDefault(),f("record");break;case"s":l.preventDefault(),f("setup");break;case"b":l.preventDefault(),h();break;case"escape":l.preventDefault(),o();break;case"delete":n==="setup"&&c?(l.preventDefault(),b()):e!==O&&(l.preventDefault(),p());break}};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[h,o,e,s,p,n,r,a,v,b,c,x,f,j,C])},Ln=()=>{var s,n;const e=En();return On(e),t.jsxs("section",{className:"shogi-page relative min-h-dvh overflow-hidden px-2 pb-24 pt-5 text-slate-100 sm:px-4 md:px-8 md:pb-20 md:pt-40",children:[t.jsx("div",{className:"shogi-scanline","aria-hidden":"true"}),t.jsx("div",{className:"shogi-grid-glow","aria-hidden":"true"}),t.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4",children:[t.jsx(Ve,{nextPlayer:e.nextPlayer,moveNumber:e.currentNode.moveNumber,nodeCount:Object.keys(e.nodes).length,branchArmed:e.branchArmed}),t.jsxs("div",{className:"shogi-workspace",children:[t.jsx(Je,{board:e.board,hands:e.hands,mode:e.mode,nextPlayer:e.nextPlayer,notice:e.notice,selection:e.selection,pendingPromotion:e.pendingPromotion,pendingPromotionPiece:e.pendingPromotionPiece,lastFrom:(s=e.currentNode.move)==null?void 0:s.from,lastTo:(n=e.currentNode.move)==null?void 0:n.to,onSetMode:e.setModeAndClear,onBoardClick:e.handleBoardClick,onHandSelect:e.selectHandPiece,onHandCountChange:e.changeHandCount,onPromotionChoice:e.recordPendingPromotion}),t.jsx(Ze,{nodes:e.nodes,currentId:e.currentId,currentNode:e.currentNode,branchArmed:e.branchArmed,onSelectNode:e.selectNode,onStepBack:e.stepBack,onStepForward:e.stepForward,onArmBranch:e.armSiblingBranch,onDeleteCurrent:e.deleteCurrentNode,onCommentChange:e.updateComment}),t.jsx(Qe,{moveLine:e.moveLine,currentId:e.currentId,setupOwner:e.setupOwner,setupPromoted:e.setupPromoted,selection:e.selection,selectedBoardPiece:e.selectedBoardPiece,storedFiles:rn,activeStoredPath:e.activeStoredPath,copyState:e.copyState,kifPreview:e.kifPreview,onSetupOwnerChange:e.changeSetupOwner,onSetupPromotedChange:e.changeSetupPromoted,onPaletteSelect:e.selectPalettePiece,onClearPosition:e.clearPosition,onReset:e.resetToInitial,onFlipSelectedOwner:e.flipSelectedOwner,onToggleSelectedPromotion:e.toggleSelectedPromotion,onRemoveSelectedPiece:e.removeSelectedPiece,onStoredLoad:e.loadStoredKifu,onExportKif:e.exportKif,onExportJson:e.exportJson,onCopyKif:e.copyKif,onSelectLineNode:e.selectNode})]})]})]})};export{Ln as default};
