import{j as r,r as E}from"./react-vendor-Bh-3n_MM.js";import{K as $n,P as Bn,O as En,Q as An,U as Ln,X as In,Y as On,_ as Mn,$ as Rn,d as Kn,a0 as Tn,a1 as Fn,a2 as Dn,a3 as zn,w as mn,a4 as Gn,a5 as dn}from"./ui-vendor-B7I3-CDB.js";import"./misc-vendor-njjDjbYI.js";const P="root",Hn=["K","R","B","G","S","N","L","P"],Un=["R","B","G","S","N","L","P"],F=["R","B","S","N","L","P"],ln=["一","二","三","四","五","六","七","八","九"],xn=["９","８","７","６","５","４","３","２","１"],C={sente:{label:"先手",mark:"▲",tone:"text-cyan-200"},gote:{label:"後手",mark:"△",tone:"text-rose-200"}},T={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},fn={K:"玉",R:"飛",B:"角",G:"金",S:"銀",N:"桂",L:"香",P:"歩"},Vn={R:"龍",B:"馬",S:"全",N:"圭",L:"杏",P:"と"},Jn={R:"龍",B:"馬",S:"成銀",N:"成桂",L:"成香",P:"と"},jn=[["成銀","S",!0],["成桂","N",!0],["成香","L",!0],["龍","R",!0],["竜","R",!0],["馬","B",!0],["と","P",!0],["玉","K",!1],["王","K",!1],["飛","R",!1],["角","B",!1],["金","G",!1],["銀","S",!1],["桂","N",!1],["香","L",!1],["歩","P",!1],["步","P",!1]],I=(n,i,e=!1,v=Math.random().toString(36).slice(2))=>({id:`${i}-${n}-${v}`,kind:n,owner:i,promoted:e&&F.includes(n)}),Nn=()=>Array.from({length:81},()=>null),Sn=()=>({sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}}),M=n=>n.map(i=>i?{...i}:null),X=n=>({sente:{...n.sente},gote:{...n.gote}}),Wn=()=>{const n=Nn();["L","N","S","G","K","G","S","N","L"].forEach((e,v)=>{n[v]=I(e,"gote",!1,`a${v}`),n[72+v]=I(e,"sente",!1,`i${v}`)}),n[10]=I("R","gote",!1,"b-rook"),n[16]=I("B","gote",!1,"b-bishop"),n[64]=I("B","sente",!1,"h-bishop"),n[70]=I("R","sente",!1,"h-rook");for(let e=0;e<9;e+=1)n[18+e]=I("P","gote",!1,`c${e}`),n[54+e]=I("P","sente",!1,`g${e}`);return n},an=(n=Wn(),i=Sn())=>({id:P,children:[],board:n,hands:i,comment:"",moveNumber:0,createdAt:Date.now()}),qn=n=>n.promoted?Vn[n.kind]??T[n.kind]:T[n.kind],un=(n,i,e=!1)=>{const v=i==="gote"?"W":"B",o=e&&F.includes(n)?"1":"0";return`/shogi/pieces/portella/${v}${n}${o}.png`},Yn=(n,i)=>i?Jn[n]??fn[n]:fn[n],_n=n=>{const i=Math.floor(n/9),e=n%9;return`${xn[e]}${ln[i]}`},Zn=n=>{const i=Math.floor(n/9);return`${9-n%9}${i+1}`},D=n=>({row:Math.floor(n/9),col:n%9}),Xn=({board:n,hands:i,mode:e,nextPlayer:v,notice:o,selection:s,pendingPromotion:_,pendingPromotionPiece:t,lastFrom:m,lastTo:h,onSetMode:l,onBoardClick:g,onHandSelect:c,onHandCountChange:b,onPromotionChoice:p})=>r.jsxs("section",{className:`shogi-panel shogi-board-panel ${e==="setup"?"is-setup-mode":"is-record-mode"}`,"aria-label":"shogi board editor",children:[r.jsxs("div",{className:"shogi-panel-head",children:[r.jsxs("div",{children:[r.jsx("p",{children:"POSITION"}),r.jsx("h2",{children:"棋盘"})]}),r.jsxs("div",{className:"shogi-tool-row",children:[r.jsx("button",{type:"button",className:`shogi-icon-button ${e==="record"?"is-active":""}`,onClick:()=>l("record"),title:"记录走子 (R)","aria-label":"记录走子，快捷键 R",children:r.jsx($n,{size:16})}),r.jsx("button",{type:"button",className:`shogi-icon-button ${e==="setup"?"is-active":""}`,onClick:()=>l("setup"),title:"摆放棋子 (S)","aria-label":"摆放棋子，快捷键 S",children:r.jsx(Bn,{size:16})})]})]}),r.jsxs("div",{className:"shogi-board-stage",children:[r.jsxs("div",{className:"shogi-board-shell",children:[r.jsx("div",{className:"shogi-file-labels","aria-hidden":"true",children:xn.map(a=>r.jsx("span",{children:a},a))}),r.jsxs("div",{className:"shogi-board-row",children:[r.jsx("div",{className:"shogi-rank-labels","aria-hidden":"true",children:ln.map(a=>r.jsx("span",{children:a},a))}),r.jsx("div",{className:"shogi-board",role:"grid","aria-label":"将棋棋盘",children:n.map((a,d)=>{const j=(s==null?void 0:s.source)==="board"&&s.index===d,S=h===d||m===d;return r.jsx("button",{type:"button",role:"gridcell",className:`shogi-square ${j?"is-selected":""} ${S?"is-last-move":""}`,onClick:()=>g(d),"aria-label":`${_n(d)} ${a?`${C[a.owner].label}${qn(a)}`:"空"}`,children:a&&r.jsx("span",{className:`shogi-piece ${a.owner==="gote"?"is-gote":"is-sente"} ${a.promoted?"is-promoted":""}`,children:r.jsx("img",{className:"shogi-piece-art",src:un(a.kind,a.owner,a.promoted),alt:"","aria-hidden":"true",draggable:!1})})},`${d}-${(a==null?void 0:a.id)??"empty"}`)})})]})]}),r.jsx("div",{className:`shogi-rule-bar ${_?"is-promotion":`is-${v}`}`,"aria-live":"polite",children:_&&t?r.jsxs(r.Fragment,{children:[r.jsxs("span",{children:[C[t.owner].mark,_n(_.to),T[t.kind]," 是否升变"]}),r.jsxs("div",{className:"shogi-promotion-actions",children:[r.jsx("button",{type:"button",onClick:()=>p(!0),children:"成"}),r.jsx("button",{type:"button",onClick:()=>p(!1),children:"不成"})]})]}):r.jsx("span",{children:o||`${C[v].mark} ${C[v].label} 行棋`})}),r.jsx("div",{className:"shogi-hands",children:["gote","sente"].map(a=>r.jsxs("div",{className:"shogi-hand-tray",children:[r.jsxs("div",{className:"shogi-hand-owner",children:[r.jsx("span",{children:C[a].mark}),r.jsx("strong",{children:C[a].label})]}),r.jsx("div",{className:"shogi-hand-pieces",children:Un.map(d=>{const j=i[a][d],S=(s==null?void 0:s.source)==="hand"&&s.owner===a&&s.kind===d;return r.jsxs("div",{className:"shogi-hand-unit",children:[e==="setup"&&r.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>b(a,d,-1),title:"减少持驹","aria-label":`减少${C[a].label}${T[d]}`,children:r.jsx(En,{size:11})}),r.jsxs("button",{type:"button",className:`shogi-hand-piece ${S?"is-selected":""}`,onClick:()=>c(a,d),title:"选择持驹打入","aria-label":`${C[a].label}${T[d]} ${j}`,children:[r.jsx("img",{className:`shogi-hand-piece-art ${a==="gote"?"is-gote":""}`,src:un(d,a),alt:"","aria-hidden":"true",draggable:!1}),r.jsx("b",{children:j})]}),e==="setup"&&r.jsx("button",{type:"button",className:"shogi-mini-button",onClick:()=>b(a,d,1),title:"增加持驹","aria-label":`增加${C[a].label}${T[d]}`,children:r.jsx(An,{size:11})})]},`${a}-${d}`)})})]},a))})]})]}),Qn=({nextPlayer:n,moveNumber:i,nodeCount:e})=>r.jsxs("header",{className:"shogi-header",children:[r.jsxs("div",{children:[r.jsx("p",{className:"shogi-kicker",children:"SHOGI WORKSPACE / KIFU"}),r.jsx("h1",{children:"诘将棋棋谱室"})]}),r.jsxs("div",{className:"shogi-status-strip","aria-label":"current shogi status",children:[r.jsxs("span",{className:C[n].tone,children:[C[n].mark," ",C[n].label]}),r.jsxs("span",{children:["第 ",i," 手"]}),r.jsxs("span",{children:[e," 个节点"]}),r.jsx("span",{className:"text-slate-500",children:"主线"})]})]}),sn=n=>{var i;return((i=n==null?void 0:n.move)==null?void 0:i.notation)??"初期局面"},nr=n=>n!=null&&n.move?n.moveNumber.toString().padStart(2,"0"):"00",rr=({currentId:n,currentNode:i,nodes:e,lineLength:v,onSelectNode:o,onGoToStart:s,onStepBack:_,onStepForward:t,onGoToEnd:m,onDeleteCurrent:h})=>{const l=i.parentId?e[i.parentId]:void 0,g=(l==null?void 0:l.children)??[],c=i.children,b=g.length>1,p=c.length>1;return r.jsxs("section",{className:"shogi-panel shogi-mobile-kifu-bar shogi-replay-toolbar","aria-label":"棋谱打谱控制",children:[r.jsxs("div",{className:"shogi-mobile-kifu-top",children:[r.jsxs("div",{className:"shogi-mobile-kifu-current",children:[r.jsx("span",{children:nr(i)}),r.jsx("strong",{children:sn(i)}),r.jsx("em",{children:v===0?"初始局面":`路线 ${v} 手`})]}),r.jsxs("div",{className:"shogi-replay-actions",children:[r.jsxs("button",{type:"button",className:"shogi-replay-button is-secondary",onClick:s,title:"回到初始局面 (Home)","aria-label":"回到初始局面，快捷键 Home",disabled:n==="root",children:[r.jsx(Ln,{size:18}),r.jsx("span",{children:"初始"})]}),r.jsxs("button",{type:"button",className:"shogi-replay-button is-secondary",onClick:_,title:"回到上一手 (←)","aria-label":"回到上一手，快捷键左方向键",disabled:!i.parentId,children:[r.jsx(In,{size:18}),r.jsx("span",{children:"上一手"})]}),r.jsxs("button",{type:"button",className:"shogi-replay-button is-primary",onClick:t,title:"进入主线下一手 (→)","aria-label":"进入主线下一手，快捷键右方向键",disabled:!i.children[0],children:[r.jsx(On,{size:18}),r.jsx("span",{children:"下一手"})]}),r.jsxs("button",{type:"button",className:"shogi-replay-button is-secondary",onClick:m,title:"跳到当前路线末尾 (End)","aria-label":"跳到当前路线末尾，快捷键 End",children:[r.jsx("span",{children:"末尾"}),r.jsx(Mn,{size:18})]}),r.jsx("button",{type:"button",className:"shogi-replay-delete",onClick:h,title:"删除当前节点 (Delete)","aria-label":"删除当前节点，快捷键 Delete",disabled:n==="root",children:r.jsx(Rn,{size:16})})]})]}),(b||p)&&r.jsxs("div",{className:"shogi-mobile-variation-zone","aria-label":"mobile variation choices",children:[b&&r.jsxs("div",{className:"shogi-mobile-variation-row",children:[r.jsx("span",{children:"同局面"}),r.jsx("div",{children:g.map((a,d)=>{const j=e[a];return j?r.jsxs("button",{type:"button",className:a===n?"is-active":"",onClick:()=>o(a),children:[r.jsx("b",{children:d===0?"主线":`变${d}`}),r.jsx("strong",{children:sn(j)})]},a):null})})]}),p&&r.jsxs("div",{className:"shogi-mobile-variation-row",children:[r.jsx("span",{children:"下一手"}),r.jsx("div",{children:c.map((a,d)=>{const j=e[a];return j?r.jsxs("button",{type:"button",onClick:()=>o(a),children:[r.jsx("b",{children:String.fromCharCode(65+d)}),r.jsx("strong",{children:sn(j)})]},a):null})})]})]})]})},ir=({copyState:n,kifPreview:i,onExportKif:e,onExportJson:v,onCopyKif:o})=>r.jsxs("section",{className:"shogi-panel","aria-label":"export kifu",children:[r.jsxs("div",{className:"shogi-panel-head",children:[r.jsxs("div",{children:[r.jsx("p",{children:"SAVE / EXPORT"}),r.jsx("h2",{children:"保存与导出"})]}),r.jsx(Kn,{size:18,className:"text-cyan-300"})]}),r.jsxs("div",{className:"shogi-export-actions",children:[r.jsxs("button",{type:"button",onClick:e,children:[r.jsx(Tn,{size:16}),"KIF"]}),r.jsxs("button",{type:"button",onClick:v,children:[r.jsx(Fn,{size:16}),"JSON"]}),r.jsxs("button",{type:"button",onClick:o,children:[r.jsx(Dn,{size:16}),n==="copied"?"已复制":"复制 KIF"]})]}),r.jsx("pre",{className:"shogi-kif-preview",children:i})]}),er=({storedFiles:n,activeStoredPath:i,onStoredLoad:e})=>r.jsxs("section",{className:"shogi-panel","aria-label":"stored kifu library",children:[r.jsxs("div",{className:"shogi-panel-head",children:[r.jsxs("div",{children:[r.jsx("p",{children:"PUZZLE LIBRARY"}),r.jsx("h2",{children:"诘将棋题库"})]}),r.jsx(zn,{size:18,className:"text-cyan-300"})]}),r.jsx("div",{className:"shogi-library-list",children:n.length===0?r.jsx("span",{className:"shogi-empty-state",children:"当前没有已保存棋谱"}):n.map(v=>r.jsxs("button",{type:"button",className:i===v.path?"is-active":"",onClick:()=>e(v),children:[r.jsx("span",{children:v.extension.toUpperCase()}),r.jsxs("div",{children:[r.jsx("strong",{children:v.title}),r.jsx("small",{children:[v.category,v.moveCount?`${v.moveCount} 手`:null,v.author].filter(Boolean).join(" · ")}),v.description&&r.jsx("small",{className:"shogi-library-source",children:v.description}),v.interest&&r.jsx("small",{className:"shogi-library-interest",children:v.interest})]})]},v.path))})]}),vr=({moveLine:n,currentId:i,onSelectLineNode:e})=>r.jsxs("section",{className:"shogi-panel","aria-label":"active line",children:[r.jsxs("div",{className:"shogi-panel-head",children:[r.jsxs("div",{children:[r.jsx("p",{children:"ACTIVE LINE"}),r.jsx("h2",{children:"当前主线"})]}),r.jsx("span",{className:"shogi-node-count",children:n.length})]}),r.jsx("div",{className:"shogi-line-list",children:n.length===0?r.jsx("span",{className:"shogi-empty-state",children:"当前还没有走法"}):n.map(v=>{var o;return r.jsxs("button",{type:"button",className:v.id===i?"is-active":"",onClick:()=>e(v.id),children:[r.jsx("span",{children:v.moveNumber}),r.jsx("strong",{children:(o=v.move)==null?void 0:o.notation})]},v.id)})})]}),tr=({setupOwner:n,setupPromoted:i,selection:e,selectedBoardPiece:v,onSetupOwnerChange:o,onSetupPromotedChange:s,onPaletteSelect:_,onClearPosition:t,onReset:m,onFlipSelectedOwner:h,onToggleSelectedPromotion:l,onRemoveSelectedPiece:g})=>r.jsxs("section",{className:"shogi-panel","aria-label":"setup controls",children:[r.jsxs("div",{className:"shogi-panel-head",children:[r.jsxs("div",{children:[r.jsx("p",{children:"POSITION SETUP"}),r.jsx("h2",{children:"摆局工具"})]}),r.jsxs("div",{className:"shogi-tool-row",children:[r.jsx("button",{type:"button",className:"shogi-icon-button",onClick:h,title:"反转所选阵营","aria-label":"反转所选阵营",disabled:!v,children:r.jsx(mn,{size:16})}),r.jsx("button",{type:"button",className:"shogi-icon-button",onClick:l,title:"切换所选升变","aria-label":"切换所选升变",disabled:!v||!F.includes(v.kind),children:r.jsx(Gn,{size:16})}),r.jsx("button",{type:"button",className:"shogi-icon-button danger",onClick:g,title:"移除所选棋子 (Delete)","aria-label":"移除所选棋子，快捷键 Delete",disabled:!v,children:r.jsx(dn,{size:16})})]})]}),r.jsx("div",{className:"shogi-segmented",role:"group","aria-label":"setup owner",children:["sente","gote"].map(c=>r.jsxs("button",{type:"button",className:n===c?"is-active":"",onClick:()=>o(c),children:[C[c].mark," ",C[c].label]},c))}),r.jsxs("div",{className:"shogi-segmented",role:"group","aria-label":"setup promotion",children:[r.jsx("button",{type:"button",className:i?"":"is-active",onClick:()=>s(!1),children:"生駒"}),r.jsx("button",{type:"button",className:i?"is-active":"",onClick:()=>s(!0),children:"成駒"})]}),r.jsx("div",{className:"shogi-palette",children:Hn.map(c=>{const b=(e==null?void 0:e.source)==="palette"&&e.kind===c,p=i&&F.includes(c)?Vn[c]??T[c]:T[c];return r.jsx("button",{type:"button",className:`shogi-palette-piece ${b?"is-selected":""}`,onClick:()=>_(c),title:`${C[n].label}${p}`,"aria-label":`${C[n].label}${p}`,children:r.jsx("img",{className:`shogi-palette-piece-art ${n==="gote"?"is-gote":""}`,src:un(c,n,i),alt:"","aria-hidden":"true",draggable:!1})},c)})}),r.jsxs("div",{className:"shogi-action-grid",children:[r.jsxs("button",{type:"button",onClick:t,children:[r.jsx(dn,{size:15}),"清空局面"]}),r.jsxs("button",{type:"button",onClick:m,children:[r.jsx(mn,{size:15}),"平手初形"]})]})]}),or=n=>r.jsxs("aside",{className:"shogi-side-stack",children:[r.jsx(er,{storedFiles:n.storedFiles,activeStoredPath:n.activeStoredPath,onStoredLoad:n.onStoredLoad}),r.jsx(vr,{moveLine:n.moveLine,currentId:n.currentId,onSelectLineNode:n.onSelectLineNode}),r.jsx(tr,{setupOwner:n.setupOwner,setupPromoted:n.setupPromoted,selection:n.selection,selectedBoardPiece:n.selectedBoardPiece,onSetupOwnerChange:n.onSetupOwnerChange,onSetupPromotedChange:n.onSetupPromotedChange,onPaletteSelect:n.onPaletteSelect,onClearPosition:n.onClearPosition,onReset:n.onReset,onFlipSelectedOwner:n.onFlipSelectedOwner,onToggleSelectedPromotion:n.onToggleSelectedPromotion,onRemoveSelectedPiece:n.onRemoveSelectedPiece}),r.jsx(ir,{copyState:n.copyState,kifPreview:n.kifPreview,onExportKif:n.onExportKif,onExportJson:n.onExportJson,onCopyKif:n.onCopyKif})]}),Y=n=>{var i;return((i=n==null?void 0:n.move)==null?void 0:i.notation)??"初期局面"},gn=n=>n!=null&&n.move?n.moveNumber.toString().padStart(2,"0"):"00",sr=({nodes:n,currentId:i,currentNode:e,onSelectNode:v,onCommentChange:o})=>{const s=(()=>{var c;const l=[];let g=i;for(;g;)l.push(g),g=(c=n[g])==null?void 0:c.parentId;return l.reverse()})(),_=s.map(l=>n[l]).filter(Boolean),t=e.parentId?n[e.parentId]:void 0,m=(t==null?void 0:t.children)??[],h=s.map((l,g)=>{const c=n[l],b=s[g+1];return!c||c.children.length<=1||!b?null:{node:c,selectedChildId:b,selectedIndex:c.children.indexOf(b)}}).filter(l=>!!l);return r.jsxs("section",{className:"shogi-panel shogi-tree-panel","aria-label":"move tree and annotation",children:[r.jsx("div",{className:"shogi-panel-head",children:r.jsxs("div",{children:[r.jsx("p",{children:"VARIATIONS"}),r.jsx("h2",{children:"变化树"})]})}),r.jsxs("div",{className:"shogi-current-move",children:[r.jsx("span",{children:gn(e)}),r.jsx("strong",{children:Y(e)}),r.jsxs("em",{children:[e.children.length," 个后续"]})]}),r.jsxs("div",{className:"shogi-route-section",children:[r.jsxs("div",{className:"shogi-route-title",children:[r.jsx("span",{children:"当前路线"}),r.jsxs("strong",{children:[_.length-1," 手"]})]}),r.jsx("div",{className:"shogi-route-list",children:_.map(l=>r.jsxs("button",{type:"button",className:l.id===i?"is-active":"",onClick:()=>v(l.id),children:[r.jsx("span",{children:gn(l)}),r.jsx("strong",{children:Y(l)}),l.children.length>1&&r.jsxs("em",{children:[l.children.length," 项变化"]})]},l.id))})]}),r.jsx("div",{className:"shogi-branch-breadcrumbs",children:h.length===0?r.jsx("span",{children:"当前路线没有分支"}):h.map(({node:l,selectedChildId:g,selectedIndex:c})=>r.jsxs("button",{type:"button",onClick:()=>v(g),children:[r.jsxs("span",{children:[l.moveNumber,"手目"]}),r.jsx("strong",{children:String.fromCharCode(65+Math.max(c,0))})]},`${l.id}-${g}`))}),r.jsxs("div",{className:"shogi-choice-grid","aria-label":"current variation choices",children:[r.jsxs("div",{className:"shogi-route-title",children:[r.jsx("span",{children:"同一局面的变化"}),r.jsxs("strong",{children:[m.length||1," 项"]})]}),r.jsx("div",{className:"shogi-choice-list",children:m.length<=1?r.jsx("span",{className:"shogi-choice-empty",children:"当前手没有同局面变化"}):m.map((l,g)=>{const c=n[l];if(!c)return null;const b=g===0?"主线":`变化 ${g}`;return r.jsxs("button",{type:"button",className:l===i?"is-active":"",onClick:()=>v(l),children:[r.jsx("span",{children:b}),r.jsx("strong",{children:Y(c)}),r.jsxs("em",{children:[c.children.length," 个后续"]})]},l)})})]}),r.jsxs("div",{className:"shogi-next-choices","aria-label":"next move choices",children:[r.jsxs("div",{className:"shogi-route-title",children:[r.jsx("span",{children:"下一步"}),r.jsxs("strong",{children:[e.children.length," 项"]})]}),r.jsx("div",{className:"shogi-next-list",children:e.children.length===0?r.jsx("span",{className:"shogi-choice-empty",children:"当前局面没有后续手"}):e.children.map((l,g)=>{const c=n[l];return c?r.jsxs("button",{type:"button",onClick:()=>v(l),children:[r.jsx("span",{children:String.fromCharCode(65+g)}),r.jsx("strong",{children:Y(c)})]},l):null})})]}),r.jsxs("label",{className:"shogi-comment-box",children:[r.jsx("span",{children:"节点备注"}),r.jsx("textarea",{value:e.comment,onChange:l=>o(l.target.value),placeholder:"节点注释"})]})]})},ar=`#KIF version=2.0 encoding=UTF-8
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
`,ur=`# --- 柿木将棋Ⅸ V9.30 棋譜ファイル ---\r
作品番号：記録1-105c
作品名：大駒煙（飛角煙）
作者：eureka・石川英樹
発表誌：詰パラ\r
発表年月：2018年11月\r
手数：45\r
備考：大駒煙(飛角煙)の長手数記録作品\r
手合割：平手　　\r
後手の持駒：金四　銀四　桂四　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ 飛 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・v玉 ・ ・ ・|四\r
| ・ ・ 角 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・v飛 ・ 角 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
手数----指手---------消費時間--\r
*盤面玉と飛角４枚、詰上り３枚＝大駒煙（飛角煙）の長手数記録作品（４５手）\r
*eureka・石川英樹　詰パラ２０１８年１１月\r
   1 ６六角(75)   ( 0:00/00:00:00)\r
   2 ４五玉(44)   ( 0:00/00:00:00)\r
   3 ４三飛成(63) ( 0:00/00:00:00)\r
   4 ５六玉(45)   ( 0:00/00:00:00)\r
   5 ５四龍(43)   ( 0:00/00:00:00)\r
   6 ４六玉(56)   ( 0:00/00:00:00)\r
   7 ４五飛打     ( 0:00/00:00:00)\r
   8 ３七玉(46)   ( 0:00/00:00:00)\r
   9 ５七龍(54)   ( 0:00/00:00:00)\r
  10 ２六玉(37)   ( 0:00/00:00:00)\r
  11 ４四角(66)   ( 0:00/00:00:00)\r
  12 ３五歩打     ( 0:00/00:00:00)\r
  13 同　角(44)   ( 0:00/00:00:00)\r
  14 １五玉(26)   ( 0:00/00:00:00)\r
  15 ５三角成(35) ( 0:00/00:00:00)\r
  16 ３五歩打     ( 0:00/00:00:00)\r
  17 同　飛(45)   ( 0:00/00:00:00)\r
  18 ２五桂打     ( 0:00/00:00:00)\r
  19 同　飛(35)   ( 0:00/00:00:00)\r
  20 同　玉(15)   ( 0:00/00:00:00)\r
  21 ２七龍(57)   ( 0:00/00:00:00)\r
  22 ３四玉(25)   ( 0:00/00:00:00)\r
  23 ３六龍(27)   ( 0:00/00:00:00)\r
  24 ２三玉(34)   ( 0:00/00:00:00)\r
  25 ２四歩打     ( 0:00/00:00:00)\r
  26 １三玉(23)   ( 0:00/00:00:00)\r
  27 ２五桂打     ( 0:00/00:00:00)\r
  28 １四玉(13)   ( 0:00/00:00:00)\r
  29 １五歩打     ( 0:00/00:00:00)\r
  30 同　玉(14)   ( 0:00/00:00:00)\r
  31 ２六馬(53)   ( 0:00/00:00:00)\r
  32 １四玉(15)   ( 0:00/00:00:00)\r
  33 １三桂成(25) ( 0:00/00:00:00)\r
  34 ２四玉(14)   ( 0:00/00:00:00)\r
  35 １四成桂(13) ( 0:00/00:00:00)\r
  36 同　玉(24)   ( 0:00/00:00:00)\r
  37 ２五龍(36)   ( 0:00/00:00:00)\r
  38 １三玉(14)   ( 0:00/00:00:00)\r
  39 ３五馬(26)   ( 0:00/00:00:00)\r
  40 １二玉(13)   ( 0:00/00:00:00)\r
  41 ３四馬(35)   ( 0:00/00:00:00)\r
  42 １一玉(12)   ( 0:00/00:00:00)\r
  43 ３三馬(34)   ( 0:00/00:00:00)\r
  44 １二玉(11)   ( 0:00/00:00:00)\r
  45 ２二馬(33)   ( 0:00/00:00:00)\r
  46 詰み         ( 0:00/00:00:00)\r
まで45手詰\r
`,_r=`# --- 柿木将棋Ⅸ V9.15 棋譜ファイル ---\r
作品番号：記録2-2d\r
作品名：来たるべきもの\r
作者：岡村孝雄\r
発表誌：詰パラ\r
発表年月：2015年5月\r
手数：73\r
備考：煙詰の短手数記録作品\r
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v金 ・ ・v玉|一\r
| と ・ ・ と ・ と ・ ・ ・|二\r
| ・ 歩 歩 桂 ・ とv歩 歩 歩|三\r
| ・vと ・v銀 ・v金v角 とv桂|四\r
| 銀v杏v歩 ・ 歩 龍 と と ・|五\r
|v杏v金vと 歩v金 飛 ・ ・ ・|六\r
| 銀 桂 ・ 銀 と ・ ・ ・ ・|七\r
| ・ 香 ・ ・ 桂 ・ ・ ・ ・|八\r
| 香 馬 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
手数----指手---------消費時間--\r
*盤面玉と全駒３８枚、詰上り３枚（煙詰）の短手数記録作品（７３手）\r
*岡村孝雄「来たるべきもの」　詰パラ２０１５年５月\r
   1 １二歩成(13) ( 0:00/00:00:00)\r
   2 同　玉(11)   ( 0:00/00:00:00)\r
   3 １三と(24)   ( 0:00/00:00:00)\r
   4 同　玉(12)   ( 0:00/00:00:00)\r
   5 １四と(25)   ( 0:00/00:00:00)\r
   6 同　玉(13)   ( 0:00/00:00:00)\r
   7 ３四龍(45)   ( 0:00/00:00:00)\r
   8 同　歩(33)   ( 0:00/00:00:00)\r
   9 ２五角打     ( 0:00/00:00:00)\r
  10 ２三玉(14)   ( 0:00/00:00:00)\r
  11 ３三と(43)   ( 0:00/00:00:00)\r
  12 同　玉(23)   ( 0:00/00:00:00)\r
  13 ４四と(35)   ( 0:00/00:00:00)\r
  14 ４二玉(33)   ( 0:00/00:00:00)\r
  15 ５三と(44)   ( 0:00/00:00:00)\r
  16 同　玉(42)   ( 0:00/00:00:00)\r
  17 ６五桂打     ( 0:00/00:00:00)\r
  18 同　銀(64)   ( 0:00/00:00:00)\r
  19 ５二金打     ( 0:00/00:00:00)\r
  20 同　金(41)   ( 0:00/00:00:00)\r
  21 同　と(62)   ( 0:00/00:00:00)\r
  22 同　玉(53)   ( 0:00/00:00:00)\r
  23 ３四角(25)   ( 0:00/00:00:00)\r
  24 ６三玉(52)   ( 0:00/00:00:00)\r
  25 ６四金打     ( 0:00/00:00:00)\r
  26 同　玉(63)   ( 0:00/00:00:00)\r
  27 ６五歩(66)   ( 0:00/00:00:00)\r
  28 ７三玉(64)   ( 0:00/00:00:00)\r
  29 ７四歩打     ( 0:00/00:00:00)\r
  30 ８三玉(73)   ( 0:00/00:00:00)\r
  31 ７五桂(87)   ( 0:00/00:00:00)\r
  32 ９二玉(83)   ( 0:00/00:00:00)\r
  33 ９三歩打     ( 0:00/00:00:00)\r
  34 同　玉(92)   ( 0:00/00:00:00)\r
  35 ８四銀(95)   ( 0:00/00:00:00)\r
  36 同　玉(93)   ( 0:00/00:00:00)\r
  37 ９三銀打     ( 0:00/00:00:00)\r
  38 ７五玉(84)   ( 0:00/00:00:00)\r
  39 ８六銀(97)   ( 0:00/00:00:00)\r
  40 同　成香(96) ( 0:00/00:00:00)\r
  41 ７六銀(67)   ( 0:00/00:00:00)\r
  42 同　成香(86) ( 0:00/00:00:00)\r
  43 ６六金打     ( 0:00/00:00:00)\r
  44 同　金(56)   ( 0:00/00:00:00)\r
  45 同　と(57)   ( 0:00/00:00:00)\r
  46 同　成香(76) ( 0:00/00:00:00)\r
  47 ８四銀(93)   ( 0:00/00:00:00)\r
  48 同　成香(85) ( 0:00/00:00:00)\r
  49 ８六金打     ( 0:00/00:00:00)\r
  50 ７四玉(75)   ( 0:00/00:00:00)\r
  51 ７五金(86)   ( 0:00/00:00:00)\r
  52 同　成香(84) ( 0:00/00:00:00)\r
  53 ６六桂(58)   ( 0:00/00:00:00)\r
  54 同　成香(75) ( 0:00/00:00:00)\r
  55 ７五歩打     ( 0:00/00:00:00)\r
  56 同　玉(74)   ( 0:00/00:00:00)\r
  57 ７六歩打     ( 0:00/00:00:00)\r
  58 同　成香(66) ( 0:00/00:00:00)\r
  59 同　飛(46)   ( 0:00/00:00:00)\r
  60 同　玉(75)   ( 0:00/00:00:00)\r
  61 ７七香打     ( 0:00/00:00:00)\r
  62 ６五玉(76)   ( 0:00/00:00:00)\r
  63 ６六香打     ( 0:00/00:00:00)\r
  64 ５五玉(65)   ( 0:00/00:00:00)\r
  65 ４五馬(89)   ( 0:00/00:00:00)\r
  66 ６六玉(55)   ( 0:00/00:00:00)\r
  67 ５六馬(45)   ( 0:00/00:00:00)\r
  68 ７七玉(66)   ( 0:00/00:00:00)\r
  69 ６七馬(56)   ( 0:00/00:00:00)\r
  70 ８八玉(77)   ( 0:00/00:00:00)\r
  71 ７八馬(67)   ( 0:00/00:00:00)\r
  72 ９九玉(88)   ( 0:00/00:00:00)\r
  73 ８九馬(78)   ( 0:00/00:00:00)\r
  74 詰み         ( 0:00/00:00:00)\r
まで73手詰\r
`,lr=`# --- 柿木将棋Ⅸ V9.81 棋譜ファイル ---\r
作品番号：記録1-40e\r
作品名：妖精2\r
作者：添川公司\r
発表誌：詰パラ\r
発表年月：2012年8月\r
出典：近代将棋2004年12月(改)\r
手数：247\r
備考：煙詰の長手数記録作品★旧記録\r
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉 ・ 杏 ・ ・ ・ ・ と と|一\r
| ・v香v杏v桂 ・ ・ ・v銀vと|二\r
| と 歩vと ・ ・ 桂v歩 ・v銀|三\r
| ・ ・ とv香 歩 ・vと 歩 ・|四\r
| ・ ・ ・ ・ と 桂 龍v飛 ・|五\r
| ・vと と ・ ・ ・ ・ ・ ・|六\r
| 馬 ・ ・ ・v金 と 銀v金 ・|七\r
|v歩 ・ ・v金 ・ と ・v金 ・|八\r
| ・ ・ 銀 ・ ・ 桂 歩v馬 ・|九\r
+---------------------------+\r
先手の持駒：なし\r
手数----指手---------消費時間--\r
*盤面玉と全駒３８枚、詰上り３枚（煙詰）の長手数記録作品（２４７手）★旧記録\r
*添川公司　詰パラ２０１２年８月（作意２０２０年８月）\r
*原図：近代将棋２００４年１２月\r
   1 ８二と(93)   ( 0:00/00:00:00)\r
   2 同　成香(72) ( 0:00/00:00:00)\r
   3 ９四香打     ( 0:00/00:00:00)\r
   4 ９二成香(82) ( 0:00/00:00:00)\r
   5 同　香成(94) ( 0:00/00:00:00)\r
   6 同　玉(91)   ( 0:00/00:00:00)\r
   7 ９四香打     ( 0:00/00:00:00)\r
   8 ９三香打     ( 0:00/00:00:00)\r
   9 同　香成(94) ( 0:00/00:00:00)\r
  10 同　玉(92)   ( 0:00/00:00:00)\r
  11 ９五香打     ( 0:00/00:00:00)\r
  12 ９四香打     ( 0:00/00:00:00)\r
  13 同　香(95)   ( 0:00/00:00:00)\r
  14 同　玉(93)   ( 0:00/00:00:00)\r
  15 ９五香打     ( 0:00/00:00:00)\r
  16 同　玉(94)   ( 0:00/00:00:00)\r
  17 ８六馬(97)   ( 0:00/00:00:00)\r
  18 ９四玉(95)   ( 0:00/00:00:00)\r
  19 ８五と(76)   ( 0:00/00:00:00)\r
  20 ９三玉(94)   ( 0:00/00:00:00)\r
  21 ７五馬(86)   ( 0:00/00:00:00)\r
  22 ９二玉(93)   ( 0:00/00:00:00)\r
  23 ８二歩成(83) ( 0:00/00:00:00)\r
  24 同　玉(92)   ( 0:00/00:00:00)\r
  25 ７三と(74)   ( 0:00/00:00:00)\r
  26 ９一玉(82)   ( 0:00/00:00:00)\r
  27 ９二歩打     ( 0:00/00:00:00)\r
  28 同　玉(91)   ( 0:00/00:00:00)\r
  29 ８三と(73)   ( 0:00/00:00:00)\r
  30 同　玉(92)   ( 0:00/00:00:00)\r
  31 ８四と(85)   ( 0:00/00:00:00)\r
  32 ８二玉(83)   ( 0:00/00:00:00)\r
  33 ６四馬(75)   ( 0:00/00:00:00)\r
  34 ７一玉(82)   ( 0:00/00:00:00)\r
  35 ７三香打     ( 0:00/00:00:00)\r
  36 ８一玉(71)   ( 0:00/00:00:00)\r
  37 ７二香成(73) ( 0:00/00:00:00)\r
  38 同　玉(81)   ( 0:00/00:00:00)\r
  39 ７三と(84)   ( 0:00/00:00:00)\r
  40 ７一玉(72)   ( 0:00/00:00:00)\r
  41 ７二歩打     ( 0:00/00:00:00)\r
  42 ６一玉(71)   ( 0:00/00:00:00)\r
  43 ６二と(73)   ( 0:00/00:00:00)\r
  44 同　玉(61)   ( 0:00/00:00:00)\r
  45 ７四桂打     ( 0:00/00:00:00)\r
  46 ６一玉(62)   ( 0:00/00:00:00)\r
  47 ７一歩成(72) ( 0:00/00:00:00)\r
  48 同　玉(61)   ( 0:00/00:00:00)\r
  49 ８二馬(64)   ( 0:00/00:00:00)\r
  50 ６一玉(71)   ( 0:00/00:00:00)\r
  51 ６二桂成(74) ( 0:00/00:00:00)\r
  52 同　玉(61)   ( 0:00/00:00:00)\r
  53 ５三歩成(54) ( 0:00/00:00:00)\r
  54 ６一玉(62)   ( 0:00/00:00:00)\r
  55 ５一桂成(43) ( 0:00/00:00:00)\r
  56 同　玉(61)   ( 0:00/00:00:00)\r
  57 ７三馬(82)   ( 0:00/00:00:00)\r
  58 ４一玉(51)   ( 0:00/00:00:00)\r
  59 ６三馬(73)   ( 0:00/00:00:00)\r
  60 ３二玉(41)   ( 0:00/00:00:00)\r
  61 ４三と(53)   ( 0:00/00:00:00)\r
  62 同　玉(32)   ( 0:00/00:00:00)\r
  63 ５四と(55)   ( 0:00/00:00:00)\r
  64 ３二玉(43)   ( 0:00/00:00:00)\r
  65 ４三と(54)   ( 0:00/00:00:00)\r
  66 同　玉(32)   ( 0:00/00:00:00)\r
  67 ５三馬(63)   ( 0:00/00:00:00)\r
  68 ３二玉(43)   ( 0:00/00:00:00)\r
  69 ２二と(21)   ( 0:00/00:00:00)\r
  70 同　玉(32)   ( 0:00/00:00:00)\r
  71 １二と(11)   ( 0:00/00:00:00)\r
  72 同　玉(22)   ( 0:00/00:00:00)\r
  73 ２三銀打     ( 0:00/00:00:00)\r
  74 ２一玉(12)   ( 0:00/00:00:00)\r
  75 ３三桂(45)   ( 0:00/00:00:00)\r
  76 １一玉(21)   ( 0:00/00:00:00)\r
  77 ２一桂成(33) ( 0:00/00:00:00)\r
  78 同　玉(11)   ( 0:00/00:00:00)\r
  79 ５四馬(53)   ( 0:00/00:00:00)\r
  80 ３二歩打     ( 0:00/00:00:00)\r
  81 同　銀(23)   ( 0:00/00:00:00)\r
  82 １一玉(21)   ( 0:00/00:00:00)\r
  83 １二歩打     ( 0:00/00:00:00)\r
  84 同　玉(11)   ( 0:00/00:00:00)\r
  85 ２三銀(32)   ( 0:00/00:00:00)\r
  86 １一玉(12)   ( 0:00/00:00:00)\r
  87 ５五馬(54)   ( 0:00/00:00:00)\r
  88 ２一玉(11)   ( 0:00/00:00:00)\r
  89 ６五馬(55)   ( 0:00/00:00:00)\r
  90 ３二歩打     ( 0:00/00:00:00)\r
  91 同　銀(23)   ( 0:00/00:00:00)\r
  92 １一玉(21)   ( 0:00/00:00:00)\r
  93 １二歩打     ( 0:00/00:00:00)\r
  94 同　玉(11)   ( 0:00/00:00:00)\r
  95 ２三銀(32)   ( 0:00/00:00:00)\r
  96 １一玉(12)   ( 0:00/00:00:00)\r
  97 ６六馬(65)   ( 0:00/00:00:00)\r
  98 ２一玉(11)   ( 0:00/00:00:00)\r
  99 ７六馬(66)   ( 0:00/00:00:00)\r
 100 ３二歩打     ( 0:00/00:00:00)\r
 101 同　銀(23)   ( 0:00/00:00:00)\r
 102 １一玉(21)   ( 0:00/00:00:00)\r
 103 １二歩打     ( 0:00/00:00:00)\r
 104 同　玉(11)   ( 0:00/00:00:00)\r
 105 ２三銀(32)   ( 0:00/00:00:00)\r
 106 １一玉(12)   ( 0:00/00:00:00)\r
 107 ７七馬(76)   ( 0:00/00:00:00)\r
 108 ２一玉(11)   ( 0:00/00:00:00)\r
 109 ８七馬(77)   ( 0:00/00:00:00)\r
 110 ３二歩打     ( 0:00/00:00:00)\r
 111 同　銀(23)   ( 0:00/00:00:00)\r
 112 １一玉(21)   ( 0:00/00:00:00)\r
 113 １二歩打     ( 0:00/00:00:00)\r
 114 同　玉(11)   ( 0:00/00:00:00)\r
 115 ２三銀(32)   ( 0:00/00:00:00)\r
 116 １一玉(12)   ( 0:00/00:00:00)\r
 117 ８八馬(87)   ( 0:00/00:00:00)\r
 118 ２一玉(11)   ( 0:00/00:00:00)\r
 119 ９八馬(88)   ( 0:00/00:00:00)\r
 120 ３二歩打     ( 0:00/00:00:00)\r
 121 同　銀(23)   ( 0:00/00:00:00)\r
 122 １一玉(21)   ( 0:00/00:00:00)\r
 123 １二歩打     ( 0:00/00:00:00)\r
 124 同　玉(11)   ( 0:00/00:00:00)\r
 125 ２三銀(32)   ( 0:00/00:00:00)\r
 126 １一玉(12)   ( 0:00/00:00:00)\r
 127 ８八馬(98)   ( 0:00/00:00:00)\r
 128 ２一玉(11)   ( 0:00/00:00:00)\r
 129 ８七馬(88)   ( 0:00/00:00:00)\r
 130 ３二歩打     ( 0:00/00:00:00)\r
 131 同　銀(23)   ( 0:00/00:00:00)\r
 132 １一玉(21)   ( 0:00/00:00:00)\r
 133 １二歩打     ( 0:00/00:00:00)\r
 134 同　玉(11)   ( 0:00/00:00:00)\r
 135 ２三銀(32)   ( 0:00/00:00:00)\r
 136 １一玉(12)   ( 0:00/00:00:00)\r
 137 ７七馬(87)   ( 0:00/00:00:00)\r
 138 ２一玉(11)   ( 0:00/00:00:00)\r
 139 ７六馬(77)   ( 0:00/00:00:00)\r
 140 ３二歩打     ( 0:00/00:00:00)\r
 141 同　銀(23)   ( 0:00/00:00:00)\r
 142 １一玉(21)   ( 0:00/00:00:00)\r
 143 １二歩打     ( 0:00/00:00:00)\r
 144 同　玉(11)   ( 0:00/00:00:00)\r
 145 ２三銀(32)   ( 0:00/00:00:00)\r
 146 １一玉(12)   ( 0:00/00:00:00)\r
 147 ６六馬(76)   ( 0:00/00:00:00)\r
 148 ２一玉(11)   ( 0:00/00:00:00)\r
 149 ６五馬(66)   ( 0:00/00:00:00)\r
 150 ３二歩打     ( 0:00/00:00:00)\r
 151 同　銀(23)   ( 0:00/00:00:00)\r
 152 １一玉(21)   ( 0:00/00:00:00)\r
 153 １二歩打     ( 0:00/00:00:00)\r
 154 同　玉(11)   ( 0:00/00:00:00)\r
 155 ２三銀(32)   ( 0:00/00:00:00)\r
 156 １一玉(12)   ( 0:00/00:00:00)\r
 157 ５五馬(65)   ( 0:00/00:00:00)\r
 158 ２一玉(11)   ( 0:00/00:00:00)\r
 159 ５四馬(55)   ( 0:00/00:00:00)\r
 160 ３二歩打     ( 0:00/00:00:00)\r
 161 同　銀(23)   ( 0:00/00:00:00)\r
 162 １一玉(21)   ( 0:00/00:00:00)\r
 163 １二歩打     ( 0:00/00:00:00)\r
 164 同　玉(11)   ( 0:00/00:00:00)\r
 165 ２三銀(32)   ( 0:00/00:00:00)\r
 166 １一玉(12)   ( 0:00/00:00:00)\r
 167 ４四馬(54)   ( 0:00/00:00:00)\r
 168 ２一玉(11)   ( 0:00/00:00:00)\r
 169 ４三馬(44)   ( 0:00/00:00:00)\r
 170 １一玉(21)   ( 0:00/00:00:00)\r
 171 １二銀成(23) ( 0:00/00:00:00)\r
 172 同　玉(11)   ( 0:00/00:00:00)\r
 173 ３四馬(43)   ( 0:00/00:00:00)\r
 174 １一玉(12)   ( 0:00/00:00:00)\r
 175 １二歩打     ( 0:00/00:00:00)\r
 176 ２一玉(11)   ( 0:00/00:00:00)\r
 177 ４三馬(34)   ( 0:00/00:00:00)\r
 178 １二玉(21)   ( 0:00/00:00:00)\r
 179 ３二龍(35)   ( 0:00/00:00:00)\r
 180 ２二銀(13)   ( 0:00/00:00:00)\r
 181 １三歩打     ( 0:00/00:00:00)\r
 182 同　玉(12)   ( 0:00/00:00:00)\r
 183 １四歩打     ( 0:00/00:00:00)\r
 184 同　玉(13)   ( 0:00/00:00:00)\r
 185 ２五馬(43)   ( 0:00/00:00:00)\r
 186 同　玉(14)   ( 0:00/00:00:00)\r
 187 ３六龍(32)   ( 0:00/00:00:00)\r
 188 ２四玉(25)   ( 0:00/00:00:00)\r
 189 ２五飛打     ( 0:00/00:00:00)\r
 190 １三玉(24)   ( 0:00/00:00:00)\r
 191 １四歩打     ( 0:00/00:00:00)\r
 192 １二玉(13)   ( 0:00/00:00:00)\r
 193 ２二飛(25)   ( 0:00/00:00:00)\r
 194 同　玉(12)   ( 0:00/00:00:00)\r
 195 １三歩成(14) ( 0:00/00:00:00)\r
 196 同　玉(22)   ( 0:00/00:00:00)\r
 197 ３三龍(36)   ( 0:00/00:00:00)\r
 198 １四玉(13)   ( 0:00/00:00:00)\r
 199 ３四龍(33)   ( 0:00/00:00:00)\r
 200 １五玉(14)   ( 0:00/00:00:00)\r
 201 ２六銀打     ( 0:00/00:00:00)\r
 202 同　金(27)   ( 0:00/00:00:00)\r
 203 同　銀(37)   ( 0:00/00:00:00)\r
 204 同　玉(15)   ( 0:00/00:00:00)\r
 205 ３七と(47)   ( 0:00/00:00:00)\r
 206 １七玉(26)   ( 0:00/00:00:00)\r
 207 ２七金打     ( 0:00/00:00:00)\r
 208 同　金(28)   ( 0:00/00:00:00)\r
 209 同　と(37)   ( 0:00/00:00:00)\r
 210 同　玉(17)   ( 0:00/00:00:00)\r
 211 ３八と(48)   ( 0:00/00:00:00)\r
 212 １八玉(27)   ( 0:00/00:00:00)\r
 213 ２八金打     ( 0:00/00:00:00)\r
 214 同　馬(29)   ( 0:00/00:00:00)\r
 215 同　と(38)   ( 0:00/00:00:00)\r
 216 同　玉(18)   ( 0:00/00:00:00)\r
 217 ３七龍(34)   ( 0:00/00:00:00)\r
 218 １八玉(28)   ( 0:00/00:00:00)\r
 219 ６三角打     ( 0:00/00:00:00)\r
 220 １九玉(18)   ( 0:00/00:00:00)\r
 221 １七龍(37)   ( 0:00/00:00:00)\r
 222 ２九玉(19)   ( 0:00/00:00:00)\r
 223 １八角成(63) ( 0:00/00:00:00)\r
 224 ３九玉(29)   ( 0:00/00:00:00)\r
 225 ２八龍(17)   ( 0:00/00:00:00)\r
 226 ４九玉(39)   ( 0:00/00:00:00)\r
 227 ２七馬(18)   ( 0:00/00:00:00)\r
 228 ５九玉(49)   ( 0:00/00:00:00)\r
 229 ６八銀(79)   ( 0:00/00:00:00)\r
 230 同　金(57)   ( 0:00/00:00:00)\r
 231 ４九馬(27)   ( 0:00/00:00:00)\r
 232 ６九玉(59)   ( 0:00/00:00:00)\r
 233 ５九金打     ( 0:00/00:00:00)\r
 234 同　金(68)   ( 0:00/00:00:00)\r
 235 同　馬(49)   ( 0:00/00:00:00)\r
 236 同　玉(69)   ( 0:00/00:00:00)\r
 237 ５八金打     ( 0:00/00:00:00)\r
 238 ６九玉(59)   ( 0:00/00:00:00)\r
 239 ６八金(58)   ( 0:00/00:00:00)\r
 240 ７九玉(69)   ( 0:00/00:00:00)\r
 241 ７八金(68)   ( 0:00/00:00:00)\r
 242 ８九玉(79)   ( 0:00/00:00:00)\r
 243 ８八金(78)   ( 0:00/00:00:00)\r
 244 ９九玉(89)   ( 0:00/00:00:00)\r
 245 ９八金(88)   ( 0:00/00:00:00)\r
 246 ８九玉(99)   ( 0:00/00:00:00)\r
 247 ８八龍(28)   ( 0:00/00:00:00)\r
 248 詰み         ( 0:00/00:00:00)\r
まで247手詰\r
`,cr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0295\r
作者：不明        \r
発表誌：詰将棋精選 第3番\r
発表年月：1916年7月\r
手数：11\r
備考：第1位、31件登録\r
解説：初形容易记忆，手顺中包含关键妙手；也是公开同一作检索中收录次数最多的作品。
手合割：平手　　\r
後手の持駒：飛二　角　金四　銀四　桂四　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v玉 ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| 歩 歩 歩 歩 歩 歩 歩 歩 歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　香四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５二香打    \r
   2 ６一玉(51)  \r
   3 ７二角打    \r
   4 ７一玉(61)  \r
   5 ８一角成(72)\r
   6 同　玉(71)  \r
   7 ８二香打    \r
   8 ７一玉(81)  \r
   9 ７二香打    \r
  10 ６一玉(71)  \r
  11 ６二香打    \r
  12 詰み        \r
まで11手詰\r
`,mr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0415\r
作者：渡瀬荘次郎      \r
発表誌：待宵 第1番\r
発表年月：慶応2年8月\r
手数：7\r
備考：第2位、28件登録\r
解説：实战型的好作，棋形自然，适合观察如何从看似普通的局面提炼唯一手顺。
手合割：平手　　\r
後手の持駒：飛二　角二　金二　銀　桂三　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ 金v桂v香|一\r
| ・ ・ ・ ・ ・ ・ 銀v玉 ・|二\r
| ・ ・ ・ ・ ・ ・v銀v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ 歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三銀打    \r
   2 同　桂(21)  \r
   3 １二金打    \r
   4 同　玉(22)  \r
   5 ２一銀(32)  \r
   6 ２二玉(12)  \r
   7 ３二金(31)  \r
   8 詰み        \r
まで7手詰\r
`,dr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0252\r
作品名：二上      \r
作者：柏川悦夫    \r
発表誌：近代将棋\r
発表年月：1953年6月\r
手数：17\r
受賞：近代将棋賞 特技賞\r
備考：第2位、28件登録\r
解説：立体曲詰：初形构成“二”，詰上り构成“上”，是为庆祝二上达也升为六段而作。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀三　桂　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ 角 香v玉 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 桂 銀v歩vと 飛 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂二　歩三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５五桂打    \r
   2 ４四玉(43)  \r
   3 ４五歩打    \r
   4 同　と(46)  \r
   5 ４三桂成(55)\r
   6 同　玉(44)  \r
   7 ５二角成(63)\r
   8 ５四玉(43)  \r
   9 ４六桂打    \r
  10 同　と(45)  \r
  11 ５五歩打    \r
  12 ４四玉(54)  \r
  13 ４五歩打    \r
  14 同　玉(44)  \r
  15 ６三馬(52)  \r
  16 ４四玉(45)  \r
  17 ５四馬(63)  \r
  18 詰み        \r
まで17手詰\r
`,fr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0305\r
作者：岡田秋葭    \r
発表誌：将棋月報\r
発表年月：1942年9月\r
手数：35\r
備考：第4位、25件登録\r
解説：裸玉名作：初形只有玉，所有防守资源都藏在持驹和王的活动范围里。
手合割：平手　　\r
後手の持駒：角二　金三　銀四　桂四　香四　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v玉 ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６一飛打    \r
   2 ７一桂打    \r
   3 ９一飛打    \r
   4 同　玉(81)  \r
   5 ７一飛成(61)\r
   6 ９二玉(91)  \r
   7 ７二龍(71)  \r
   8 ９三玉(92)  \r
   9 ７三龍(72)  \r
  10 ９四玉(93)  \r
  11 ７四龍(73)  \r
  12 ９五玉(94)  \r
  13 ７五龍(74)  \r
  14 ９六玉(95)  \r
  15 ７六龍(75)  \r
  16 ８六歩打    \r
  17 ８七金打    \r
  18 ９五玉(96)  \r
  19 ８六金(87)  \r
  20 ９四玉(95)  \r
  21 ８五金(86)  \r
  22 ８三玉(94)  \r
  23 ７四龍(76)  \r
  24 ９二玉(83)  \r
  25 ９三歩打    \r
  26 ８一玉(92)  \r
  27 ８二歩打    \r
  28 同　玉(81)  \r
  29 ９四桂打    \r
  30 ８一玉(82)  \r
  31 ９二歩成(93)\r
  32 同　玉(81)  \r
  33 ７二龍(74)  \r
  34 ９三玉(92)  \r
  35 ８二龍(72)  \r
  36 詰み        \r
まで35手詰\r
`,gr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0209\r
作品名：煙詰      \r
作者：伊藤看寿    \r
発表誌：将棋図巧 第99番\r
発表年月：宝暦5年3月\r
手数：117\r
備考：第5位、24件登録\r
解説：烟詰的代表性起点之一：初形 39 枚，詰上り只剩 3 枚，逐步清场的过程非常壮观。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉 ・ と ・ ・ ・ ・v桂 ・|一\r
| ・ ・ 香 と ・ ・v銀 香 ・|二\r
|v飛 ・ ・ ・ ・ と と ・ 歩|三\r
| 馬v歩 歩 とv香 ・ 龍v金 ・|四\r
| 桂 歩 ・ 銀 と 歩vと ・v金|五\r
| ・ ・ 香vと ・v金 と ・ と|六\r
| 歩v銀 ・ 金 ・ と ・ 桂 ・|七\r
| ・v銀 桂 ・ 歩 ・ ・ ・ ・|八\r
| 角 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一と(71)  \r
   2 同　玉(91)  \r
   3 ７一香成(72)\r
   4 ９一玉(81)  \r
   5 ８一成香(71)\r
   6 同　玉(91)  \r
   7 ７二と(62)  \r
   8 ９一玉(81)  \r
   9 ８二と(72)  \r
  10 同　玉(91)  \r
  11 ７三歩成(74)\r
  12 ９一玉(82)  \r
  13 ８二と(73)  \r
  14 同　玉(91)  \r
  15 ７三と(64)  \r
  16 ９一玉(82)  \r
  17 ８二と(73)  \r
  18 同　玉(91)  \r
  19 ７二香成(76)\r
  20 ９一玉(82)  \r
  21 ８二成香(72)\r
  22 同　玉(91)  \r
  23 ９三馬(94)  \r
  24 同　玉(82)  \r
  25 ７三飛打    \r
  26 ９四玉(93)  \r
  27 ８三飛成(73)\r
  28 ８五玉(94)  \r
  29 ８四龍(83)  \r
  30 同　玉(85)  \r
  31 ５四龍(34)  \r
  32 ９五玉(84)  \r
  33 ９六香打    \r
  34 同　銀成(87)\r
  35 同　歩(97)  \r
  36 同　玉(95)  \r
  37 ８七銀打    \r
  38 ９七玉(96)  \r
  39 ９四龍(54)  \r
  40 ８七玉(97)  \r
  41 ８五龍(94)  \r
  42 ７八玉(87)  \r
  43 ８八龍(85)  \r
  44 ６七玉(78)  \r
  45 ６八銀打    \r
  46 ５八玉(67)  \r
  47 ５七銀(68)  \r
  48 ４七玉(58)  \r
  49 ４六と(36)  \r
  50 ５七玉(47)  \r
  51 ５六金打    \r
  52 同　と(66)  \r
  53 同　と(55)  \r
  54 ６七玉(57)  \r
  55 ７六銀(65)  \r
  56 同　玉(67)  \r
  57 ６六と(56)  \r
  58 同　玉(76)  \r
  59 ７七龍(88)  \r
  60 ６五玉(66)  \r
  61 ５五と(46)  \r
  62 同　玉(65)  \r
  63 ６六龍(77)  \r
  64 ４五玉(55)  \r
  65 ４四と(43)  \r
  66 同　玉(45)  \r
  67 ５六龍(66)  \r
  68 ５五歩打    \r
  69 同　龍(56)  \r
  70 ３三玉(44)  \r
  71 ５三龍(55)  \r
  72 ３四玉(33)  \r
  73 ４四龍(53)  \r
  74 ２三玉(34)  \r
  75 ２四龍(44)  \r
  76 同　玉(23)  \r
  77 １五と(16)  \r
  78 ３四玉(24)  \r
  79 ４四金打    \r
  80 ２三玉(34)  \r
  81 ２四歩打    \r
  82 １三玉(23)  \r
  83 ２三金打    \r
  84 同　銀(32)  \r
  85 同　歩成(24)\r
  86 同　玉(13)  \r
  87 ３五桂(27)  \r
  88 １二玉(23)  \r
  89 １三歩打    \r
  90 同　玉(12)  \r
  91 １四歩打    \r
  92 １二玉(13)  \r
  93 １三銀打    \r
  94 同　桂(21)  \r
  95 同　歩成(14)\r
  96 同　玉(12)  \r
  97 ２三桂成(35)\r
  98 同　玉(13)  \r
  99 ３三金(44)  \r
 100 １二玉(23)  \r
 101 １三歩打    \r
 102 同　玉(12)  \r
 103 ２五桂打    \r
 104 １二玉(13)  \r
 105 ２三金(33)  \r
 106 同　玉(12)  \r
 107 ３三角成(99)\r
 108 １二玉(23)  \r
 109 １三桂成(25)\r
 110 同　玉(12)  \r
 111 ２四と(15)  \r
 112 １二玉(13)  \r
 113 ２三と(24)  \r
 114 １一玉(12)  \r
 115 ２一香成(22)\r
 116 同　玉(11)  \r
 117 ２二馬(33)  \r
 118 詰み        \r
まで117手詰\r
`,hr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0357\r
作者：不明      \r
発表誌：将棋月報\r
発表年月：1943年1月\r
手数：19\r
分類：大道棋\r
備考：第6位、22件登録\r
解説：大道棋香步问题，与 108f 是姊妹作；只差一枚步的位置，詰手顺就会完全改变。
手合割：平手　　\r
後手の持駒：飛二　角二　金三　銀三　桂二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v桂 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金v歩 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
|v歩 銀 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６三桂(75)  \r
   2 ８一玉(71)  \r
   3 ８四香打    \r
   4 ８三銀打    \r
   5 同　香(84)  \r
   6 ９二玉(81)  \r
   7 ８二香成(83)\r
   8 ９三玉(92)  \r
   9 ８三成香(82)\r
  10 ９四玉(93)  \r
  11 ９五歩打    \r
  12 同　玉(94)  \r
  13 ９六歩打    \r
  14 ９四玉(95)  \r
  15 ９五銀打    \r
  16 ８五玉(94)  \r
  17 ８六銀(95)  \r
  18 ９四玉(85)  \r
  19 ９五歩(96)  \r
  20 詰み        \r
まで19手詰\r
`,kr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0426\r
作者：伊藤看寿    \r
発表誌：将棋図巧 第98番\r
発表年月：宝暦5年3月\r
手数：31\r
備考：第7位、21件登録\r
解説：裸玉的早期代表作，几乎没有盘上掩体，却能用极少的线索构成完整机关。
手合割：平手　　\r
後手の持駒：飛　角二　金二　銀三　桂四　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金二　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三飛打    \r
   2 １二飛打    \r
   3 ２二金打    \r
   4 同　玉(11)  \r
   5 ３三銀打    \r
   6 ３一玉(22)  \r
   7 ３二金打    \r
   8 同　飛(12)  \r
   9 同　銀成(33)\r
  10 同　玉(31)  \r
  11 ３四飛打    \r
  12 ４二玉(32)  \r
  13 ４四飛(34)  \r
  14 ５二玉(42)  \r
  15 ５四飛(44)  \r
  16 ６二玉(52)  \r
  17 ６四飛(54)  \r
  18 ７二玉(62)  \r
  19 ７四飛(64)  \r
  20 ６二玉(72)  \r
  21 ７三飛成(74)\r
  22 ５一玉(62)  \r
  23 ５三飛成(13)\r
  24 ４一玉(51)  \r
  25 ７一龍(73)  \r
  26 ３二玉(41)  \r
  27 ６二龍(71)  \r
  28 ２一玉(32)  \r
  29 ２三龍(53)  \r
  30 １一玉(21)  \r
  31 １二龍(62)  \r
  32 詰み        \r
まで31手詰\r
`,yr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0216\r
作者：不明        \r
発表誌：将棋月報\r
発表年月：1927年8月\r
手数：5\r
備考：第8位、19件登録\r
解説：常被当作例题的短篇，适合练习第一手的辨识与后续强制应答。
手合割：平手　　\r
後手の持駒：飛二　角二　金三　銀二　桂三　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂v香|一\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 銀 ・v歩|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三銀打    \r
   2 １三玉(22)  \r
   3 １二銀成(23)\r
   4 同　玉(13)  \r
   5 ２三金打    \r
   6 詰み        \r
まで5手詰\r
`,br=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0278\r
作者：小原大介    \r
発表誌：象戯綱目 第4巻 第6番\r
発表年月：宝永4年6月\r
手数：19\r
完全性：駒余り\r
備考：第8位、19件登録\r
解説：从飞角图式走向途中裸玉，盘面信息会逐渐被剥离，构思转换很有意思。
手合割：平手　　\r
後手の持駒：金三　銀四　桂四　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v飛 ・ ・ ・ ・|一\r
| ・ ・ ・v飛v玉 角 ・ ・ ・|二\r
| ・ ・ ・ ・ 角 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５一角成(42)\r
   2 同　玉(52)  \r
   3 ６二角成(53)\r
   4 同　玉(51)  \r
   5 ６四飛打    \r
   6 ６三歩打    \r
   7 ６一飛打    \r
   8 同　玉(62)  \r
   9 ６三飛成(64)\r
  10 ６二歩打    \r
  11 ５二金打    \r
  12 ７一玉(61)  \r
  13 ６二金(52)  \r
  14 ８二玉(71)  \r
  15 ７二金(62)  \r
  16 ９二玉(82)  \r
  17 ９三歩打    \r
  18 ９一玉(92)  \r
  19 ６一龍(63)  \r
  20 詰み        \r
まで19手詰\r
`,pr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0205\r
作品名：寿        \r
作者：伊藤看寿    \r
発表誌：将棋図巧 第100番\r
発表年月：宝暦5年3月\r
手数：611\r
備考：第8位、19件登録\r
解説：《寿》是 611 手超长篇，重点不在短促杀法，而在漫长强制过程中的节奏与资源管理。
手合割：平手　　\r
後手の持駒：桂三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v金 ・ ・ ・v歩 ・ ・ ・v龍|一\r
| ・ ・ ・v香 歩 金 ・ ・ ・|二\r
| ・v銀 ・ ・ ・ ・v歩v歩v歩|三\r
| ・v香 ・ 角 ・ ・ ・ ・ 歩|四\r
| 香 ・ ・v角 ・v玉 歩v香 ・|五\r
| ・ ・ ・vと ・ ・ ・ 龍vと|六\r
| ・ ・ ・vと ・ ・v全 ・ 銀|七\r
| 圭 歩vと ・v金 銀 ・ ・ ・|八\r
| ・v金vと ・ ・ 歩 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４六龍(26)  \r
   2 ５四玉(45)  \r
   3 ５五龍(46)  \r
   4 ６三玉(54)  \r
   5 ５三龍(55)  \r
   6 ７四玉(63)  \r
   7 ７三龍(53)  \r
   8 ８五玉(74)  \r
   9 ７五龍(73)  \r
  10 ９六玉(85)  \r
  11 ９七成桂(98)\r
  12 同　玉(96)  \r
  13 ７七龍(75)  \r
  14 ９六玉(97)  \r
  15 ９七龍(77)  \r
  16 ８五玉(96)  \r
  17 ８六龍(97)  \r
  18 ７四玉(85)  \r
  19 ７五龍(86)  \r
  20 ６三玉(74)  \r
  21 ７三龍(75)  \r
  22 ５四玉(63)  \r
  23 ５三龍(73)  \r
  24 ４五玉(54)  \r
  25 ５五龍(53)  \r
  26 ３六玉(45)  \r
  27 ４六龍(55)  \r
  28 ２七玉(36)  \r
  29 ３七龍(46)  \r
  30 １八玉(27)  \r
  31 １九銀打    \r
  32 同　玉(18)  \r
  33 ３九龍(37)  \r
  34 １八玉(19)  \r
  35 １九龍(39)  \r
  36 ２七玉(18)  \r
  37 ２八龍(19)  \r
  38 ３六玉(27)  \r
  39 ３七龍(28)  \r
  40 ４五玉(36)  \r
  41 ４六龍(37)  \r
  42 ５四玉(45)  \r
  43 ５五龍(46)  \r
  44 ６三玉(54)  \r
  45 ５三龍(55)  \r
  46 ７四玉(63)  \r
  47 ７三龍(53)  \r
  48 ８五玉(74)  \r
  49 ７五龍(73)  \r
  50 ９六玉(85)  \r
  51 ９七歩打    \r
  52 同　玉(96)  \r
  53 ７七龍(75)  \r
  54 ９六玉(97)  \r
  55 ９七龍(77)  \r
  56 ８五玉(96)  \r
  57 ８六龍(97)  \r
  58 ７四玉(85)  \r
  59 ７五龍(86)  \r
  60 ６三玉(74)  \r
  61 ７三龍(75)  \r
  62 ５四玉(63)  \r
  63 ５三龍(73)  \r
  64 ４五玉(54)  \r
  65 ５五龍(53)  \r
  66 ３六玉(45)  \r
  67 ４六龍(55)  \r
  68 ２七玉(36)  \r
  69 １六龍(46)  \r
  70 ３八玉(27)  \r
  71 ３六龍(16)  \r
  72 ３七桂打    \r
  73 同　龍(36)  \r
  74 ２九玉(38)  \r
  75 ３九龍(37)  \r
  76 １八玉(29)  \r
  77 １九龍(39)  \r
  78 ２七玉(18)  \r
  79 ２八龍(19)  \r
  80 ３六玉(27)  \r
  81 ３七龍(28)  \r
  82 ４五玉(36)  \r
  83 ４六龍(37)  \r
  84 ５四玉(45)  \r
  85 ５五龍(46)  \r
  86 ６三玉(54)  \r
  87 ５三龍(55)  \r
  88 ７四玉(63)  \r
  89 ７三龍(53)  \r
  90 ８五玉(74)  \r
  91 ７五龍(73)  \r
  92 ９六玉(85)  \r
  93 ９七歩打    \r
  94 同　玉(96)  \r
  95 ７七龍(75)  \r
  96 ９六玉(97)  \r
  97 ９七龍(77)  \r
  98 ８五玉(96)  \r
  99 ８六龍(97)  \r
 100 ７四玉(85)  \r
 101 ７五龍(86)  \r
 102 ６三玉(74)  \r
 103 ７三龍(75)  \r
 104 ５四玉(63)  \r
 105 ５三龍(73)  \r
 106 ４五玉(54)  \r
 107 ５五龍(53)  \r
 108 ３六玉(45)  \r
 109 ４六龍(55)  \r
 110 ２七玉(36)  \r
 111 １六龍(46)  \r
 112 ３八玉(27)  \r
 113 ３六龍(16)  \r
 114 ３七桂打    \r
 115 同　龍(36)  \r
 116 ２九玉(38)  \r
 117 ３九龍(37)  \r
 118 １八玉(29)  \r
 119 １九龍(39)  \r
 120 ２七玉(18)  \r
 121 ２八龍(19)  \r
 122 ３六玉(27)  \r
 123 ３七龍(28)  \r
 124 ４五玉(36)  \r
 125 ４六龍(37)  \r
 126 ５四玉(45)  \r
 127 ５五龍(46)  \r
 128 ６三玉(54)  \r
 129 ５三龍(55)  \r
 130 ７四玉(63)  \r
 131 ７三龍(53)  \r
 132 ８五玉(74)  \r
 133 ７五龍(73)  \r
 134 ９六玉(85)  \r
 135 ９七歩打    \r
 136 同　玉(96)  \r
 137 ７七龍(75)  \r
 138 ９六玉(97)  \r
 139 ９七龍(77)  \r
 140 ８五玉(96)  \r
 141 ８六龍(97)  \r
 142 ７四玉(85)  \r
 143 ７五龍(86)  \r
 144 ６三玉(74)  \r
 145 ７三龍(75)  \r
 146 ５四玉(63)  \r
 147 ５三龍(73)  \r
 148 ４五玉(54)  \r
 149 ５五龍(53)  \r
 150 ３六玉(45)  \r
 151 ４六龍(55)  \r
 152 ２七玉(36)  \r
 153 １六龍(46)  \r
 154 ３八玉(27)  \r
 155 ３六龍(16)  \r
 156 ３七桂打    \r
 157 同　龍(36)  \r
 158 ２九玉(38)  \r
 159 ３九龍(37)  \r
 160 １八玉(29)  \r
 161 １九龍(39)  \r
 162 ２七玉(18)  \r
 163 ２八龍(19)  \r
 164 ３六玉(27)  \r
 165 ３七龍(28)  \r
 166 ４五玉(36)  \r
 167 ４六龍(37)  \r
 168 ５四玉(45)  \r
 169 ５五龍(46)  \r
 170 ６三玉(54)  \r
 171 ５三龍(55)  \r
 172 ７四玉(63)  \r
 173 ７三龍(53)  \r
 174 ８五玉(74)  \r
 175 ７五龍(73)  \r
 176 ９六玉(85)  \r
 177 ９七歩打    \r
 178 同　玉(96)  \r
 179 ７七龍(75)  \r
 180 ９六玉(97)  \r
 181 ９七龍(77)  \r
 182 ８五玉(96)  \r
 183 ８六龍(97)  \r
 184 ７四玉(85)  \r
 185 ７五龍(86)  \r
 186 ６三玉(74)  \r
 187 ７三龍(75)  \r
 188 ５四玉(63)  \r
 189 ５三龍(73)  \r
 190 ４五玉(54)  \r
 191 ５五龍(53)  \r
 192 ３六玉(45)  \r
 193 ４六龍(55)  \r
 194 ２七玉(36)  \r
 195 １六龍(46)  \r
 196 ３八玉(27)  \r
 197 ３六龍(16)  \r
 198 ３七桂打    \r
 199 同　龍(36)  \r
 200 ２九玉(38)  \r
 201 ３九龍(37)  \r
 202 １八玉(29)  \r
 203 １九龍(39)  \r
 204 ２七玉(18)  \r
 205 ２八龍(19)  \r
 206 ３六玉(27)  \r
 207 ３七龍(28)  \r
 208 ４五玉(36)  \r
 209 ４六龍(37)  \r
 210 ５四玉(45)  \r
 211 ５五龍(46)  \r
 212 ６三玉(54)  \r
 213 ５三龍(55)  \r
 214 ７四玉(63)  \r
 215 ７三龍(53)  \r
 216 ８五玉(74)  \r
 217 ７五龍(73)  \r
 218 ９六玉(85)  \r
 219 ９七歩打    \r
 220 同　玉(96)  \r
 221 ７七龍(75)  \r
 222 ９六玉(97)  \r
 223 ９七龍(77)  \r
 224 ８五玉(96)  \r
 225 ８六龍(97)  \r
 226 ７四玉(85)  \r
 227 ７五龍(86)  \r
 228 ６三玉(74)  \r
 229 ７三龍(75)  \r
 230 ５四玉(63)  \r
 231 ５三龍(73)  \r
 232 ４五玉(54)  \r
 233 ５五龍(53)  \r
 234 ３六玉(45)  \r
 235 ４六龍(55)  \r
 236 ２七玉(36)  \r
 237 １六龍(46)  \r
 238 ３八玉(27)  \r
 239 ３六龍(16)  \r
 240 ３七銀打    \r
 241 同　龍(36)  \r
 242 ２九玉(38)  \r
 243 ３九龍(37)  \r
 244 １八玉(29)  \r
 245 １九龍(39)  \r
 246 ２七玉(18)  \r
 247 ２八龍(19)  \r
 248 ３六玉(27)  \r
 249 ３七龍(28)  \r
 250 ４五玉(36)  \r
 251 ４六龍(37)  \r
 252 ５四玉(45)  \r
 253 ５五龍(46)  \r
 254 ６三玉(54)  \r
 255 ５三龍(55)  \r
 256 ７四玉(63)  \r
 257 ７三龍(53)  \r
 258 ８五玉(74)  \r
 259 ７七桂打    \r
 260 同　と(66)  \r
 261 ７五龍(73)  \r
 262 ９六玉(85)  \r
 263 ９七銀打    \r
 264 同　玉(96)  \r
 265 ７七龍(75)  \r
 266 ９六玉(97)  \r
 267 ９七龍(77)  \r
 268 ８五玉(96)  \r
 269 ８六龍(97)  \r
 270 ７四玉(85)  \r
 271 ７五龍(86)  \r
 272 ６三玉(74)  \r
 273 ７三龍(75)  \r
 274 ５四玉(63)  \r
 275 ５三龍(73)  \r
 276 ４五玉(54)  \r
 277 ５五龍(53)  \r
 278 ３六玉(45)  \r
 279 ４六龍(55)  \r
 280 ２七玉(36)  \r
 281 １六龍(46)  \r
 282 ３八玉(27)  \r
 283 ３六龍(16)  \r
 284 ３七桂打    \r
 285 同　龍(36)  \r
 286 ２九玉(38)  \r
 287 ３九龍(37)  \r
 288 １八玉(29)  \r
 289 １九龍(39)  \r
 290 ２七玉(18)  \r
 291 ２八龍(19)  \r
 292 ３六玉(27)  \r
 293 ３七龍(28)  \r
 294 ４五玉(36)  \r
 295 ４六龍(37)  \r
 296 ５四玉(45)  \r
 297 ５五龍(46)  \r
 298 ６三玉(54)  \r
 299 ５三龍(55)  \r
 300 ７四玉(63)  \r
 301 ７三龍(53)  \r
 302 ８五玉(74)  \r
 303 ７五龍(73)  \r
 304 ９六玉(85)  \r
 305 ９七歩打    \r
 306 同　玉(96)  \r
 307 ７七龍(75)  \r
 308 ９六玉(97)  \r
 309 ９七龍(77)  \r
 310 ８五玉(96)  \r
 311 ８六龍(97)  \r
 312 ７四玉(85)  \r
 313 ７五龍(86)  \r
 314 ６三玉(74)  \r
 315 ７三龍(75)  \r
 316 ５四玉(63)  \r
 317 ５三龍(73)  \r
 318 ４五玉(54)  \r
 319 ５五龍(53)  \r
 320 ３六玉(45)  \r
 321 ４六龍(55)  \r
 322 ２七玉(36)  \r
 323 １六龍(46)  \r
 324 ３八玉(27)  \r
 325 ３六龍(16)  \r
 326 ３七銀打    \r
 327 同　龍(36)  \r
 328 ２九玉(38)  \r
 329 ３九龍(37)  \r
 330 １八玉(29)  \r
 331 １九龍(39)  \r
 332 ２七玉(18)  \r
 333 ２八龍(19)  \r
 334 ３六玉(27)  \r
 335 ３七龍(28)  \r
 336 ４五玉(36)  \r
 337 ４六龍(37)  \r
 338 ５四玉(45)  \r
 339 ５五龍(46)  \r
 340 ６三玉(54)  \r
 341 ５三龍(55)  \r
 342 ７四玉(63)  \r
 343 ７三龍(53)  \r
 344 ８五玉(74)  \r
 345 ７七桂打    \r
 346 同　と(67)  \r
 347 ７五龍(73)  \r
 348 ９六玉(85)  \r
 349 ９七銀打    \r
 350 同　玉(96)  \r
 351 ７七龍(75)  \r
 352 ９六玉(97)  \r
 353 ９七龍(77)  \r
 354 ８五玉(96)  \r
 355 ８六龍(97)  \r
 356 ７四玉(85)  \r
 357 ７五龍(86)  \r
 358 ６三玉(74)  \r
 359 ７三龍(75)  \r
 360 ５四玉(63)  \r
 361 ５三龍(73)  \r
 362 ４五玉(54)  \r
 363 ５五龍(53)  \r
 364 ３六玉(45)  \r
 365 ４六龍(55)  \r
 366 ２七玉(36)  \r
 367 １六龍(46)  \r
 368 ３八玉(27)  \r
 369 ３六龍(16)  \r
 370 ３七桂打    \r
 371 同　龍(36)  \r
 372 ２九玉(38)  \r
 373 ３九龍(37)  \r
 374 １八玉(29)  \r
 375 １九龍(39)  \r
 376 ２七玉(18)  \r
 377 ２八龍(19)  \r
 378 ３六玉(27)  \r
 379 ３七龍(28)  \r
 380 ４五玉(36)  \r
 381 ４六龍(37)  \r
 382 ５四玉(45)  \r
 383 ５五龍(46)  \r
 384 ６三玉(54)  \r
 385 ５三龍(55)  \r
 386 ７四玉(63)  \r
 387 ７三龍(53)  \r
 388 ８五玉(74)  \r
 389 ７五龍(73)  \r
 390 ９六玉(85)  \r
 391 ９七歩打    \r
 392 同　玉(96)  \r
 393 ７七龍(75)  \r
 394 ９六玉(97)  \r
 395 ９七龍(77)  \r
 396 ８五玉(96)  \r
 397 ８六龍(97)  \r
 398 ７四玉(85)  \r
 399 ７五龍(86)  \r
 400 ６三玉(74)  \r
 401 ７三龍(75)  \r
 402 ５四玉(63)  \r
 403 ５三龍(73)  \r
 404 ４五玉(54)  \r
 405 ５五龍(53)  \r
 406 ３六玉(45)  \r
 407 ４六龍(55)  \r
 408 ２七玉(36)  \r
 409 １六龍(46)  \r
 410 ３八玉(27)  \r
 411 ３六龍(16)  \r
 412 ３七銀打    \r
 413 同　龍(36)  \r
 414 ２九玉(38)  \r
 415 ３九龍(37)  \r
 416 １八玉(29)  \r
 417 １九龍(39)  \r
 418 ２七玉(18)  \r
 419 ２八龍(19)  \r
 420 ３六玉(27)  \r
 421 ３七龍(28)  \r
 422 ４五玉(36)  \r
 423 ４六龍(37)  \r
 424 ５四玉(45)  \r
 425 ５五龍(46)  \r
 426 ６三玉(54)  \r
 427 ５三龍(55)  \r
 428 ７四玉(63)  \r
 429 ７三龍(53)  \r
 430 ８五玉(74)  \r
 431 ７七桂打    \r
 432 同　と(78)  \r
 433 ７五龍(73)  \r
 434 ９六玉(85)  \r
 435 ９七銀打    \r
 436 同　玉(96)  \r
 437 ７七龍(75)  \r
 438 ９六玉(97)  \r
 439 ９七龍(77)  \r
 440 ８五玉(96)  \r
 441 ８六龍(97)  \r
 442 ７四玉(85)  \r
 443 ７五龍(86)  \r
 444 ６三玉(74)  \r
 445 ７三龍(75)  \r
 446 ５四玉(63)  \r
 447 ５三龍(73)  \r
 448 ４五玉(54)  \r
 449 ５五龍(53)  \r
 450 ３六玉(45)  \r
 451 ４六龍(55)  \r
 452 ２七玉(36)  \r
 453 １六龍(46)  \r
 454 ３八玉(27)  \r
 455 ３六龍(16)  \r
 456 ３七桂打    \r
 457 同　龍(36)  \r
 458 ２九玉(38)  \r
 459 ３九龍(37)  \r
 460 １八玉(29)  \r
 461 １九龍(39)  \r
 462 ２七玉(18)  \r
 463 ２八龍(19)  \r
 464 ３六玉(27)  \r
 465 ３七龍(28)  \r
 466 ４五玉(36)  \r
 467 ４六龍(37)  \r
 468 ５四玉(45)  \r
 469 ５五龍(46)  \r
 470 ６三玉(54)  \r
 471 ５三龍(55)  \r
 472 ７四玉(63)  \r
 473 ７三龍(53)  \r
 474 ８五玉(74)  \r
 475 ７五龍(73)  \r
 476 ９六玉(85)  \r
 477 ９七歩打    \r
 478 同　玉(96)  \r
 479 ７七龍(75)  \r
 480 ９六玉(97)  \r
 481 ９七龍(77)  \r
 482 ８五玉(96)  \r
 483 ８六龍(97)  \r
 484 ７四玉(85)  \r
 485 ７五龍(86)  \r
 486 ６三玉(74)  \r
 487 ７三龍(75)  \r
 488 ５四玉(63)  \r
 489 ５三龍(73)  \r
 490 ４五玉(54)  \r
 491 ５五龍(53)  \r
 492 ３六玉(45)  \r
 493 ４六龍(55)  \r
 494 ２七玉(36)  \r
 495 １六龍(46)  \r
 496 ３八玉(27)  \r
 497 ３六龍(16)  \r
 498 ３七銀打    \r
 499 同　龍(36)  \r
 500 ２九玉(38)  \r
 501 ３九龍(37)  \r
 502 １八玉(29)  \r
 503 １九龍(39)  \r
 504 ２七玉(18)  \r
 505 ２八龍(19)  \r
 506 ３六玉(27)  \r
 507 ３七龍(28)  \r
 508 ４五玉(36)  \r
 509 ４六龍(37)  \r
 510 ５四玉(45)  \r
 511 ５五龍(46)  \r
 512 ６三玉(54)  \r
 513 ５三龍(55)  \r
 514 ７四玉(63)  \r
 515 ７三龍(53)  \r
 516 ８五玉(74)  \r
 517 ７七桂打    \r
 518 ９六玉(85)  \r
 519 ９七銀打    \r
 520 ９五玉(96)  \r
 521 ７五龍(73)  \r
 522 ９四玉(95)  \r
 523 ８六桂打    \r
 524 同　香(84)  \r
 525 ８五龍(75)  \r
 526 ９三玉(94)  \r
 527 ９五龍(85)  \r
 528 ９四桂打    \r
 529 ８五桂(77)  \r
 530 ９二玉(93)  \r
 531 ９四龍(95)  \r
 532 同　銀(83)  \r
 533 ８四桂打    \r
 534 ８一玉(92)  \r
 535 ９三桂打    \r
 536 ７一玉(81)  \r
 537 ７二桂成(84)\r
 538 同　玉(71)  \r
 539 ７三桂成(85)\r
 540 ６一玉(72)  \r
 541 ５一歩成(52)\r
 542 同　龍(11)  \r
 543 同　金(42)  \r
 544 同　玉(61)  \r
 545 ５二歩打    \r
 546 ４一玉(51)  \r
 547 ５一飛打    \r
 548 ３二玉(41)  \r
 549 ３一飛成(51)\r
 550 ４三玉(32)  \r
 551 ４二龍(31)  \r
 552 ５四玉(43)  \r
 553 ５三龍(42)  \r
 554 ４五玉(54)  \r
 555 ５五龍(53)  \r
 556 ３六玉(45)  \r
 557 ４六龍(55)  \r
 558 ２七玉(36)  \r
 559 １六龍(46)  \r
 560 ３八玉(27)  \r
 561 ３六龍(16)  \r
 562 ３七桂打    \r
 563 同　龍(36)  \r
 564 ２九玉(38)  \r
 565 ３九龍(37)  \r
 566 １八玉(29)  \r
 567 １九龍(39)  \r
 568 ２七玉(18)  \r
 569 ２八龍(19)  \r
 570 ３六玉(27)  \r
 571 ３七龍(28)  \r
 572 ４五玉(36)  \r
 573 ４六龍(37)  \r
 574 ５四玉(45)  \r
 575 ５五龍(46)  \r
 576 ４三玉(54)  \r
 577 ５三龍(55)  \r
 578 ３二玉(43)  \r
 579 ４二龍(53)  \r
 580 ２一玉(32)  \r
 581 ３一龍(42)  \r
 582 １二玉(21)  \r
 583 ２四桂打    \r
 584 同　歩(23)  \r
 585 １三歩成(14)\r
 586 同　玉(12)  \r
 587 １一龍(31)  \r
 588 ２三玉(13)  \r
 589 １五桂打    \r
 590 ３二玉(23)  \r
 591 ３一龍(11)  \r
 592 ４三玉(32)  \r
 593 ４二龍(31)  \r
 594 ５四玉(43)  \r
 595 ５三龍(42)  \r
 596 ４五玉(54)  \r
 597 ５五龍(53)  \r
 598 ３六玉(45)  \r
 599 ４六龍(55)  \r
 600 ２七玉(36)  \r
 601 ３七龍(46)  \r
 602 １八玉(27)  \r
 603 １九歩打    \r
 604 同　玉(18)  \r
 605 ２八銀(17)  \r
 606 １八玉(19)  \r
 607 １七龍(37)  \r
 608 ２九玉(18)  \r
 609 １九龍(17)  \r
 610 ３八玉(29)  \r
 611 ３九龍(19)  \r
 612 詰み        \r
まで611手詰\r
`,xr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0384\r
作者：渡瀬荘次郎\r
発表誌：待宵 第31番\r
発表年月：慶応2年8月\r
手数：9\r
備考：第8位、19件登録\r
解説：《待宵》第 31 番，常用作打步詰回避的例题；看似只差一步，合法詰形却完全不同。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀四　桂四　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ 角 ・ ・ ・ ・ ・ ・|一\r
| ・ ・v歩 ・ ・ ・ ・ ・ ・|二\r
| 龍v歩v玉v歩 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ 金 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| 香 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８二龍(93)  \r
   2 ８四玉(73)  \r
   3 ７三龍(82)  \r
   4 同　玉(84)  \r
   5 ７四歩打    \r
   6 ８四玉(73)  \r
   7 ９三角成(71)\r
   8 ８五玉(84)  \r
   9 ７五馬(93)  \r
  10 詰み        \r
まで9手詰\r
`,Vr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0240\r
作品名：新扇詰    \r
作者：奥薗幸雄    \r
発表誌：近代将棋\r
発表年月：1955年1月\r
手数：873\r
備考：第8位、19件登録\r
解説：《新扇詰》是 873 手超长篇，适合体验大型长篇詰将棋的耐心与全局控制。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v桂 ・ と ・ ・v歩 ・v歩v歩|一\r
| ・ 歩 ・ ・v桂 ・ ・ ・v香|二\r
| と ・ ・ ・v金vと ・ ・ 歩|三\r
|v歩 香v歩v桂 ・v飛v歩 ・ 角|四\r
| ・v歩vと ・v香 ・ ・ ・ ・|五\r
| ・ ・ 龍 金 ・ ・ ・ ・ 銀|六\r
| ・ ・ ・v香v玉 ・ ・v桂v全|七\r
| 銀v金 角vと ・v全 ・vと ・|八\r
| ・vと 金 ・ ・ 歩vと ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６七金(66)  \r
   2 同　と(68)  \r
   3 ５九香打    \r
   4 ５八と(67)  \r
   5 同　香(59)  \r
   6 同　成銀(48)\r
   7 ６七龍(76)  \r
   8 ４六玉(57)  \r
   9 ４七龍(67)  \r
  10 ３五玉(46)  \r
  11 ３六龍(47)  \r
  12 ２四玉(35)  \r
  13 ２五龍(36)  \r
  14 ３三玉(24)  \r
  15 ２三龍(25)  \r
  16 ４二玉(33)  \r
  17 ３二龍(23)  \r
  18 ５一玉(42)  \r
  19 ４一龍(32)  \r
  20 ６二玉(51)  \r
  21 ６一龍(41)  \r
  22 ７三玉(62)  \r
  23 ８三香成(84)\r
  24 同　桂(91)  \r
  25 ７二龍(61)  \r
  26 ８四玉(73)  \r
  27 ８三龍(72)  \r
  28 ９五玉(84)  \r
  29 ９四龍(83)  \r
  30 ８六玉(95)  \r
  31 ９七龍(94)  \r
  32 ７六玉(86)  \r
  33 ６七龍(97)  \r
  34 ８六玉(76)  \r
  35 ８七龍(67)  \r
  36 ９五玉(86)  \r
  37 ９六龍(87)  \r
  38 ８四玉(95)  \r
  39 ９四龍(96)  \r
  40 ７三玉(84)  \r
  41 ８三龍(94)  \r
  42 ６二玉(73)  \r
  43 ７二龍(83)  \r
  44 ５一玉(62)  \r
  45 ６一龍(72)  \r
  46 ４二玉(51)  \r
  47 ４一龍(61)  \r
  48 ３三玉(42)  \r
  49 ３二龍(41)  \r
  50 ２四玉(33)  \r
  51 ２三龍(32)  \r
  52 ３五玉(24)  \r
  53 ２五龍(23)  \r
  54 ４六玉(35)  \r
  55 ３六龍(25)  \r
  56 ５七玉(46)  \r
  57 ６九桂打    \r
  58 同　成銀(58)\r
  59 ５八歩打    \r
  60 同　玉(57)  \r
  61 ３八龍(36)  \r
  62 ５七玉(58)  \r
  63 ５八龍(38)  \r
  64 ４六玉(57)  \r
  65 ４七龍(58)  \r
  66 ３五玉(46)  \r
  67 ３六龍(47)  \r
  68 ２四玉(35)  \r
  69 ２五龍(36)  \r
  70 ３三玉(24)  \r
  71 ２三龍(25)  \r
  72 ４二玉(33)  \r
  73 ３二龍(23)  \r
  74 ５一玉(42)  \r
  75 ２一龍(32)  \r
  76 ６二玉(51)  \r
  77 ６一龍(21)  \r
  78 ７三玉(62)  \r
  79 ７二龍(61)  \r
  80 ８四玉(73)  \r
  81 ８三龍(72)  \r
  82 ９五玉(84)  \r
  83 ９四龍(83)  \r
  84 ８六玉(95)  \r
  85 ９七龍(94)  \r
  86 ７六玉(86)  \r
  87 ６七龍(97)  \r
  88 ８六玉(76)  \r
  89 ８七龍(67)  \r
  90 ９五玉(86)  \r
  91 ９六龍(87)  \r
  92 ８四玉(95)  \r
  93 ９四龍(96)  \r
  94 ７三玉(84)  \r
  95 ８三龍(94)  \r
  96 ６二玉(73)  \r
  97 ７二龍(83)  \r
  98 ５一玉(62)  \r
  99 ６一龍(72)  \r
 100 ４二玉(51)  \r
 101 ４一龍(61)  \r
 102 ３三玉(42)  \r
 103 ３二龍(41)  \r
 104 ２四玉(33)  \r
 105 ２三龍(32)  \r
 106 ３五玉(24)  \r
 107 ２五龍(23)  \r
 108 ４六玉(35)  \r
 109 ３六龍(25)  \r
 110 ５七玉(46)  \r
 111 ５八歩打    \r
 112 同　玉(57)  \r
 113 ３八龍(36)  \r
 114 ５七玉(58)  \r
 115 ５八龍(38)  \r
 116 ４六玉(57)  \r
 117 ４七龍(58)  \r
 118 ３五玉(46)  \r
 119 ３六龍(47)  \r
 120 ２四玉(35)  \r
 121 ２五龍(36)  \r
 122 ３三玉(24)  \r
 123 ２三龍(25)  \r
 124 ４二玉(33)  \r
 125 ２二龍(23)  \r
 126 ５一玉(42)  \r
 127 １一龍(22)  \r
 128 ６二玉(51)  \r
 129 ６一龍(11)  \r
 130 ７三玉(62)  \r
 131 ７二龍(61)  \r
 132 ８四玉(73)  \r
 133 ８三龍(72)  \r
 134 ９五玉(84)  \r
 135 ９四龍(83)  \r
 136 ８六玉(95)  \r
 137 ９七龍(94)  \r
 138 ７六玉(86)  \r
 139 ６七龍(97)  \r
 140 ８六玉(76)  \r
 141 ８七龍(67)  \r
 142 ９五玉(86)  \r
 143 ９六龍(87)  \r
 144 ８四玉(95)  \r
 145 ９四龍(96)  \r
 146 ７三玉(84)  \r
 147 ８三龍(94)  \r
 148 ６二玉(73)  \r
 149 ７二龍(83)  \r
 150 ５一玉(62)  \r
 151 ６一龍(72)  \r
 152 ４二玉(51)  \r
 153 ４一龍(61)  \r
 154 ３三玉(42)  \r
 155 ３二龍(41)  \r
 156 ２四玉(33)  \r
 157 ２三龍(32)  \r
 158 ３五玉(24)  \r
 159 ２五龍(23)  \r
 160 ４六玉(35)  \r
 161 ３六龍(25)  \r
 162 ５七玉(46)  \r
 163 ５八歩打    \r
 164 同　玉(57)  \r
 165 ３八龍(36)  \r
 166 ５七玉(58)  \r
 167 ５八龍(38)  \r
 168 ４六玉(57)  \r
 169 ４七龍(58)  \r
 170 ３五玉(46)  \r
 171 ３六龍(47)  \r
 172 ２四玉(35)  \r
 173 ２五龍(36)  \r
 174 ３三玉(24)  \r
 175 ２三龍(25)  \r
 176 ４二玉(33)  \r
 177 １二龍(23)  \r
 178 ５一玉(42)  \r
 179 ２一龍(12)  \r
 180 ６二玉(51)  \r
 181 ６一龍(21)  \r
 182 ７三玉(62)  \r
 183 ７二龍(61)  \r
 184 ８四玉(73)  \r
 185 ８三龍(72)  \r
 186 ９五玉(84)  \r
 187 ９四龍(83)  \r
 188 ８六玉(95)  \r
 189 ９七龍(94)  \r
 190 ７六玉(86)  \r
 191 ６七龍(97)  \r
 192 ８六玉(76)  \r
 193 ８七龍(67)  \r
 194 ９五玉(86)  \r
 195 ９六龍(87)  \r
 196 ８四玉(95)  \r
 197 ９四龍(96)  \r
 198 ７三玉(84)  \r
 199 ８三龍(94)  \r
 200 ６二玉(73)  \r
 201 ７二龍(83)  \r
 202 ５一玉(62)  \r
 203 ６一龍(72)  \r
 204 ４二玉(51)  \r
 205 ４一龍(61)  \r
 206 ３三玉(42)  \r
 207 ３二龍(41)  \r
 208 ２四玉(33)  \r
 209 ２三龍(32)  \r
 210 ３五玉(24)  \r
 211 ２五龍(23)  \r
 212 ４六玉(35)  \r
 213 ２六龍(25)  \r
 214 ３六香打    \r
 215 同　龍(26)  \r
 216 ５七玉(46)  \r
 217 ５八歩打    \r
 218 同　玉(57)  \r
 219 ３八龍(36)  \r
 220 ５七玉(58)  \r
 221 ５八龍(38)  \r
 222 ４六玉(57)  \r
 223 ４七龍(58)  \r
 224 ３五玉(46)  \r
 225 ３六龍(47)  \r
 226 ２四玉(35)  \r
 227 ２五龍(36)  \r
 228 ３三玉(24)  \r
 229 ２三龍(25)  \r
 230 ４二玉(33)  \r
 231 ３二龍(23)  \r
 232 ５一玉(42)  \r
 233 ４一龍(32)  \r
 234 ６二玉(51)  \r
 235 ６一龍(41)  \r
 236 ７三玉(62)  \r
 237 ７二龍(61)  \r
 238 ８四玉(73)  \r
 239 ８三龍(72)  \r
 240 ９五玉(84)  \r
 241 ９四龍(83)  \r
 242 ８六玉(95)  \r
 243 ９七龍(94)  \r
 244 ７六玉(86)  \r
 245 ６七龍(97)  \r
 246 ８六玉(76)  \r
 247 ８七龍(67)  \r
 248 ９五玉(86)  \r
 249 ９六龍(87)  \r
 250 ８四玉(95)  \r
 251 ９四龍(96)  \r
 252 ７三玉(84)  \r
 253 ８三龍(94)  \r
 254 ６二玉(73)  \r
 255 ７二龍(83)  \r
 256 ５一玉(62)  \r
 257 ６一龍(72)  \r
 258 ４二玉(51)  \r
 259 ４一龍(61)  \r
 260 ３三玉(42)  \r
 261 ３二龍(41)  \r
 262 ２四玉(33)  \r
 263 ２三龍(32)  \r
 264 ３五玉(24)  \r
 265 ２五龍(23)  \r
 266 ４六玉(35)  \r
 267 ２六龍(25)  \r
 268 ３六香打    \r
 269 同　龍(26)  \r
 270 ５七玉(46)  \r
 271 ５八歩打    \r
 272 同　玉(57)  \r
 273 ３八龍(36)  \r
 274 ５七玉(58)  \r
 275 ５八龍(38)  \r
 276 ４六玉(57)  \r
 277 ４七龍(58)  \r
 278 ３五玉(46)  \r
 279 ３六龍(47)  \r
 280 ２四玉(35)  \r
 281 ２五龍(36)  \r
 282 ３三玉(24)  \r
 283 ２三龍(25)  \r
 284 ４二玉(33)  \r
 285 ３二龍(23)  \r
 286 ５一玉(42)  \r
 287 ４一龍(32)  \r
 288 ６二玉(51)  \r
 289 ６一龍(41)  \r
 290 ７三玉(62)  \r
 291 ７二龍(61)  \r
 292 ８四玉(73)  \r
 293 ８三龍(72)  \r
 294 ９五玉(84)  \r
 295 ９四龍(83)  \r
 296 ８六玉(95)  \r
 297 ９七龍(94)  \r
 298 ７六玉(86)  \r
 299 ６七龍(97)  \r
 300 ８六玉(76)  \r
 301 ８七龍(67)  \r
 302 ９五玉(86)  \r
 303 ９六龍(87)  \r
 304 ８四玉(95)  \r
 305 ９四龍(96)  \r
 306 ７三玉(84)  \r
 307 ８三龍(94)  \r
 308 ６二玉(73)  \r
 309 ７二龍(83)  \r
 310 ５一玉(62)  \r
 311 ６一龍(72)  \r
 312 ４二玉(51)  \r
 313 ４一龍(61)  \r
 314 ３三玉(42)  \r
 315 ３二龍(41)  \r
 316 ２四玉(33)  \r
 317 ２三龍(32)  \r
 318 ３五玉(24)  \r
 319 ２五龍(23)  \r
 320 ４六玉(35)  \r
 321 ２六龍(25)  \r
 322 ３六桂打    \r
 323 同　龍(26)  \r
 324 ５七玉(46)  \r
 325 ５八香打    \r
 326 同　玉(57)  \r
 327 ３八龍(36)  \r
 328 ５七玉(58)  \r
 329 ５八龍(38)  \r
 330 ４六玉(57)  \r
 331 ４七龍(58)  \r
 332 ３五玉(46)  \r
 333 ３六龍(47)  \r
 334 ２四玉(35)  \r
 335 ２五龍(36)  \r
 336 ３三玉(24)  \r
 337 ２三龍(25)  \r
 338 ４二玉(33)  \r
 339 ３二龍(23)  \r
 340 ５一玉(42)  \r
 341 ４一龍(32)  \r
 342 ６二玉(51)  \r
 343 ６一龍(41)  \r
 344 ７三玉(62)  \r
 345 ７二龍(61)  \r
 346 ８四玉(73)  \r
 347 ８三龍(72)  \r
 348 ９五玉(84)  \r
 349 ９四龍(83)  \r
 350 ８六玉(95)  \r
 351 ９七龍(94)  \r
 352 ７六玉(86)  \r
 353 ６七龍(97)  \r
 354 ８六玉(76)  \r
 355 ８七龍(67)  \r
 356 ９五玉(86)  \r
 357 ９六龍(87)  \r
 358 ８四玉(95)  \r
 359 ９四龍(96)  \r
 360 ７三玉(84)  \r
 361 ８三龍(94)  \r
 362 ６二玉(73)  \r
 363 ７二龍(83)  \r
 364 ５一玉(62)  \r
 365 ６一龍(72)  \r
 366 ４二玉(51)  \r
 367 ４一龍(61)  \r
 368 ３三玉(42)  \r
 369 ３二龍(41)  \r
 370 ２四玉(33)  \r
 371 ２三龍(32)  \r
 372 ３五玉(24)  \r
 373 ２五龍(23)  \r
 374 ４六玉(35)  \r
 375 ３八桂打    \r
 376 同　と(39)  \r
 377 ２六龍(25)  \r
 378 ３六香打    \r
 379 同　龍(26)  \r
 380 ５七玉(46)  \r
 381 ５八香打    \r
 382 同　玉(57)  \r
 383 ３八龍(36)  \r
 384 ５七玉(58)  \r
 385 ５八龍(38)  \r
 386 ４六玉(57)  \r
 387 ４七龍(58)  \r
 388 ３五玉(46)  \r
 389 ３六龍(47)  \r
 390 ２四玉(35)  \r
 391 ２五龍(36)  \r
 392 ３三玉(24)  \r
 393 ２三龍(25)  \r
 394 ４二玉(33)  \r
 395 ３二龍(23)  \r
 396 ５一玉(42)  \r
 397 ４一龍(32)  \r
 398 ６二玉(51)  \r
 399 ６一龍(41)  \r
 400 ７三玉(62)  \r
 401 ７二龍(61)  \r
 402 ８四玉(73)  \r
 403 ８三龍(72)  \r
 404 ９五玉(84)  \r
 405 ９四龍(83)  \r
 406 ８六玉(95)  \r
 407 ９七龍(94)  \r
 408 ７六玉(86)  \r
 409 ６七龍(97)  \r
 410 ８六玉(76)  \r
 411 ８七龍(67)  \r
 412 ９五玉(86)  \r
 413 ９六龍(87)  \r
 414 ８四玉(95)  \r
 415 ９四龍(96)  \r
 416 ７三玉(84)  \r
 417 ８三龍(94)  \r
 418 ６二玉(73)  \r
 419 ７二龍(83)  \r
 420 ５一玉(62)  \r
 421 ６一龍(72)  \r
 422 ４二玉(51)  \r
 423 ４一龍(61)  \r
 424 ３三玉(42)  \r
 425 ３二龍(41)  \r
 426 ２四玉(33)  \r
 427 ２三龍(32)  \r
 428 ３五玉(24)  \r
 429 ２五龍(23)  \r
 430 ４六玉(35)  \r
 431 ２六龍(25)  \r
 432 ３六香打    \r
 433 同　龍(26)  \r
 434 ５七玉(46)  \r
 435 ５八歩打    \r
 436 同　玉(57)  \r
 437 ３八龍(36)  \r
 438 ５七玉(58)  \r
 439 ５八龍(38)  \r
 440 ４六玉(57)  \r
 441 ４七龍(58)  \r
 442 ３五玉(46)  \r
 443 ３六龍(47)  \r
 444 ２四玉(35)  \r
 445 ２五龍(36)  \r
 446 ３三玉(24)  \r
 447 ２三龍(25)  \r
 448 ４二玉(33)  \r
 449 ３二龍(23)  \r
 450 ５一玉(42)  \r
 451 ４一龍(32)  \r
 452 ６二玉(51)  \r
 453 ６一龍(41)  \r
 454 ７三玉(62)  \r
 455 ７二龍(61)  \r
 456 ８四玉(73)  \r
 457 ８三龍(72)  \r
 458 ９五玉(84)  \r
 459 ９四龍(83)  \r
 460 ８六玉(95)  \r
 461 ９七龍(94)  \r
 462 ７六玉(86)  \r
 463 ６七龍(97)  \r
 464 ８六玉(76)  \r
 465 ８七龍(67)  \r
 466 ９五玉(86)  \r
 467 ９六龍(87)  \r
 468 ８四玉(95)  \r
 469 ９四龍(96)  \r
 470 ７三玉(84)  \r
 471 ８三龍(94)  \r
 472 ６二玉(73)  \r
 473 ７二龍(83)  \r
 474 ５一玉(62)  \r
 475 ６一龍(72)  \r
 476 ４二玉(51)  \r
 477 ４一龍(61)  \r
 478 ３三玉(42)  \r
 479 ３二龍(41)  \r
 480 ２四玉(33)  \r
 481 ２三龍(32)  \r
 482 ３五玉(24)  \r
 483 ２五龍(23)  \r
 484 ４六玉(35)  \r
 485 ２六龍(25)  \r
 486 ３六桂打    \r
 487 同　龍(26)  \r
 488 ５七玉(46)  \r
 489 ５八香打    \r
 490 同　玉(57)  \r
 491 ３八龍(36)  \r
 492 ５七玉(58)  \r
 493 ５八龍(38)  \r
 494 ４六玉(57)  \r
 495 ４七龍(58)  \r
 496 ３五玉(46)  \r
 497 ３六龍(47)  \r
 498 ２四玉(35)  \r
 499 ２五龍(36)  \r
 500 ３三玉(24)  \r
 501 ２三龍(25)  \r
 502 ４二玉(33)  \r
 503 ３二龍(23)  \r
 504 ５一玉(42)  \r
 505 ４一龍(32)  \r
 506 ６二玉(51)  \r
 507 ６一龍(41)  \r
 508 ７三玉(62)  \r
 509 ７二龍(61)  \r
 510 ８四玉(73)  \r
 511 ８三龍(72)  \r
 512 ９五玉(84)  \r
 513 ９四龍(83)  \r
 514 ８六玉(95)  \r
 515 ９七龍(94)  \r
 516 ７六玉(86)  \r
 517 ６七龍(97)  \r
 518 ８六玉(76)  \r
 519 ８七龍(67)  \r
 520 ９五玉(86)  \r
 521 ９六龍(87)  \r
 522 ８四玉(95)  \r
 523 ９四龍(96)  \r
 524 ７三玉(84)  \r
 525 ８三龍(94)  \r
 526 ６二玉(73)  \r
 527 ７二龍(83)  \r
 528 ５一玉(62)  \r
 529 ６一龍(72)  \r
 530 ４二玉(51)  \r
 531 ４一龍(61)  \r
 532 ３三玉(42)  \r
 533 ３二龍(41)  \r
 534 ２四玉(33)  \r
 535 ２三龍(32)  \r
 536 ３五玉(24)  \r
 537 ２五龍(23)  \r
 538 ４六玉(35)  \r
 539 ３八桂打    \r
 540 同　と(28)  \r
 541 ２六龍(25)  \r
 542 ３六香打    \r
 543 同　龍(26)  \r
 544 ５七玉(46)  \r
 545 ５八香打    \r
 546 同　玉(57)  \r
 547 ３八龍(36)  \r
 548 ５七玉(58)  \r
 549 ５八龍(38)  \r
 550 ４六玉(57)  \r
 551 ４七龍(58)  \r
 552 ３五玉(46)  \r
 553 ３六龍(47)  \r
 554 ２四玉(35)  \r
 555 ２五龍(36)  \r
 556 ３三玉(24)  \r
 557 ２三龍(25)  \r
 558 ４二玉(33)  \r
 559 ３二龍(23)  \r
 560 ５一玉(42)  \r
 561 ４一龍(32)  \r
 562 ６二玉(51)  \r
 563 ６一龍(41)  \r
 564 ７三玉(62)  \r
 565 ７二龍(61)  \r
 566 ８四玉(73)  \r
 567 ８三龍(72)  \r
 568 ９五玉(84)  \r
 569 ９四龍(83)  \r
 570 ８六玉(95)  \r
 571 ９七龍(94)  \r
 572 ７六玉(86)  \r
 573 ６七龍(97)  \r
 574 ８六玉(76)  \r
 575 ８七龍(67)  \r
 576 ９五玉(86)  \r
 577 ９六龍(87)  \r
 578 ８四玉(95)  \r
 579 ９四龍(96)  \r
 580 ７三玉(84)  \r
 581 ８三龍(94)  \r
 582 ６二玉(73)  \r
 583 ７二龍(83)  \r
 584 ５一玉(62)  \r
 585 ６一龍(72)  \r
 586 ４二玉(51)  \r
 587 ４一龍(61)  \r
 588 ３三玉(42)  \r
 589 ３二龍(41)  \r
 590 ２四玉(33)  \r
 591 ２三龍(32)  \r
 592 ３五玉(24)  \r
 593 ２五龍(23)  \r
 594 ４六玉(35)  \r
 595 ２六龍(25)  \r
 596 ３六香打    \r
 597 同　龍(26)  \r
 598 ５七玉(46)  \r
 599 ５八歩打    \r
 600 同　玉(57)  \r
 601 ３八龍(36)  \r
 602 ５七玉(58)  \r
 603 ５八龍(38)  \r
 604 ４六玉(57)  \r
 605 ４七龍(58)  \r
 606 ３五玉(46)  \r
 607 ３六龍(47)  \r
 608 ２四玉(35)  \r
 609 ２五龍(36)  \r
 610 ３三玉(24)  \r
 611 ２三龍(25)  \r
 612 ４二玉(33)  \r
 613 ３二龍(23)  \r
 614 ５一玉(42)  \r
 615 ４一龍(32)  \r
 616 ６二玉(51)  \r
 617 ６一龍(41)  \r
 618 ７三玉(62)  \r
 619 ７二龍(61)  \r
 620 ８四玉(73)  \r
 621 ８三龍(72)  \r
 622 ９五玉(84)  \r
 623 ９四龍(83)  \r
 624 ８六玉(95)  \r
 625 ９七龍(94)  \r
 626 ７六玉(86)  \r
 627 ６七龍(97)  \r
 628 ８六玉(76)  \r
 629 ８七龍(67)  \r
 630 ９五玉(86)  \r
 631 ９六龍(87)  \r
 632 ８四玉(95)  \r
 633 ９四龍(96)  \r
 634 ７三玉(84)  \r
 635 ８三龍(94)  \r
 636 ６二玉(73)  \r
 637 ７二龍(83)  \r
 638 ５一玉(62)  \r
 639 ６一龍(72)  \r
 640 ４二玉(51)  \r
 641 ４一龍(61)  \r
 642 ３三玉(42)  \r
 643 ３二龍(41)  \r
 644 ２四玉(33)  \r
 645 ２三龍(32)  \r
 646 ３五玉(24)  \r
 647 ２五龍(23)  \r
 648 ４六玉(35)  \r
 649 ２六龍(25)  \r
 650 ３六桂打    \r
 651 同　龍(26)  \r
 652 ５七玉(46)  \r
 653 ５八香打    \r
 654 同　玉(57)  \r
 655 ３八龍(36)  \r
 656 ５七玉(58)  \r
 657 ５八龍(38)  \r
 658 ４六玉(57)  \r
 659 ４七龍(58)  \r
 660 ３五玉(46)  \r
 661 ３六龍(47)  \r
 662 ２四玉(35)  \r
 663 ２五龍(36)  \r
 664 ３三玉(24)  \r
 665 ２三龍(25)  \r
 666 ４二玉(33)  \r
 667 ３二龍(23)  \r
 668 ５一玉(42)  \r
 669 ４一龍(32)  \r
 670 ６二玉(51)  \r
 671 ６一龍(41)  \r
 672 ７三玉(62)  \r
 673 ７二龍(61)  \r
 674 ８四玉(73)  \r
 675 ８三龍(72)  \r
 676 ９五玉(84)  \r
 677 ９四龍(83)  \r
 678 ８六玉(95)  \r
 679 ９七龍(94)  \r
 680 ７六玉(86)  \r
 681 ６七龍(97)  \r
 682 ８六玉(76)  \r
 683 ８七龍(67)  \r
 684 ９五玉(86)  \r
 685 ９六龍(87)  \r
 686 ８四玉(95)  \r
 687 ９四龍(96)  \r
 688 ７三玉(84)  \r
 689 ８三龍(94)  \r
 690 ６二玉(73)  \r
 691 ７二龍(83)  \r
 692 ５一玉(62)  \r
 693 ６一龍(72)  \r
 694 ４二玉(51)  \r
 695 ４一龍(61)  \r
 696 ３三玉(42)  \r
 697 ３二龍(41)  \r
 698 ２四玉(33)  \r
 699 ２三龍(32)  \r
 700 ３五玉(24)  \r
 701 ３九香打    \r
 702 同　桂成(27)\r
 703 ２七桂打    \r
 704 同　成銀(17)\r
 705 ２五龍(23)  \r
 706 ４六玉(35)  \r
 707 ３六龍(25)  \r
 708 ５七玉(46)  \r
 709 ５八香打    \r
 710 同　玉(57)  \r
 711 ３八龍(36)  \r
 712 ５七玉(58)  \r
 713 ５八龍(38)  \r
 714 ４六玉(57)  \r
 715 ４七龍(58)  \r
 716 ３五玉(46)  \r
 717 ３六龍(47)  \r
 718 ２四玉(35)  \r
 719 ２七龍(36)  \r
 720 ３三玉(24)  \r
 721 ２三龍(27)  \r
 722 ４二玉(33)  \r
 723 ３二龍(23)  \r
 724 ５一玉(42)  \r
 725 ４一龍(32)  \r
 726 ６二玉(51)  \r
 727 ６一龍(41)  \r
 728 ７三玉(62)  \r
 729 ７二龍(61)  \r
 730 ８四玉(73)  \r
 731 ８三龍(72)  \r
 732 ９五玉(84)  \r
 733 ９四龍(83)  \r
 734 ８六玉(95)  \r
 735 ９七龍(94)  \r
 736 ７六玉(86)  \r
 737 ６七龍(97)  \r
 738 ８六玉(76)  \r
 739 ８七龍(67)  \r
 740 ９五玉(86)  \r
 741 ９六龍(87)  \r
 742 ８四玉(95)  \r
 743 ９四龍(96)  \r
 744 ７三玉(84)  \r
 745 ８三龍(94)  \r
 746 ６二玉(73)  \r
 747 ７二龍(83)  \r
 748 ５一玉(62)  \r
 749 ６一龍(72)  \r
 750 ４二玉(51)  \r
 751 ４一龍(61)  \r
 752 ３三玉(42)  \r
 753 ３二龍(41)  \r
 754 ２四玉(33)  \r
 755 ２三龍(32)  \r
 756 ３五玉(24)  \r
 757 ２五龍(23)  \r
 758 ４六玉(35)  \r
 759 ２六龍(25)  \r
 760 ３六桂打    \r
 761 同　龍(26)  \r
 762 ５七玉(46)  \r
 763 ５八銀打    \r
 764 同　玉(57)  \r
 765 ３八龍(36)  \r
 766 ５七玉(58)  \r
 767 ５八龍(38)  \r
 768 ４六玉(57)  \r
 769 ４八龍(58)  \r
 770 ４七歩打    \r
 771 同　龍(48)  \r
 772 ３五玉(46)  \r
 773 ３六龍(47)  \r
 774 ２四玉(35)  \r
 775 ２五龍(36)  \r
 776 ３三玉(24)  \r
 777 ２三龍(25)  \r
 778 ４二玉(33)  \r
 779 ３二龍(23)  \r
 780 ５一玉(42)  \r
 781 ４一龍(32)  \r
 782 ６二玉(51)  \r
 783 ６一龍(41)  \r
 784 ７三玉(62)  \r
 785 ７二龍(61)  \r
 786 ８四玉(73)  \r
 787 ８三龍(72)  \r
 788 ９五玉(84)  \r
 789 ９四龍(83)  \r
 790 ８六玉(95)  \r
 791 ９七龍(94)  \r
 792 ７六玉(86)  \r
 793 ６七龍(97)  \r
 794 ８六玉(76)  \r
 795 ８七龍(67)  \r
 796 ９五玉(86)  \r
 797 ９六龍(87)  \r
 798 ８四玉(95)  \r
 799 ９四龍(96)  \r
 800 ７三玉(84)  \r
 801 ８三龍(94)  \r
 802 ６二玉(73)  \r
 803 ７二龍(83)  \r
 804 ５一玉(62)  \r
 805 ６一龍(72)  \r
 806 ４二玉(51)  \r
 807 ４一龍(61)  \r
 808 ３三玉(42)  \r
 809 ３二龍(41)  \r
 810 ２四玉(33)  \r
 811 ２三龍(32)  \r
 812 ３五玉(24)  \r
 813 ２五龍(23)  \r
 814 ４六玉(35)  \r
 815 ３八桂打    \r
 816 同　成桂(39)\r
 817 ３六龍(25)  \r
 818 ５七玉(46)  \r
 819 ５八歩打    \r
 820 同　玉(57)  \r
 821 ３八龍(36)  \r
 822 ５七玉(58)  \r
 823 ５八龍(38)  \r
 824 ４六玉(57)  \r
 825 ４七龍(58)  \r
 826 ３五玉(46)  \r
 827 ３六龍(47)  \r
 828 ２四玉(35)  \r
 829 ２五龍(36)  \r
 830 ３三玉(24)  \r
 831 ２三龍(25)  \r
 832 ４二玉(33)  \r
 833 ３二龍(23)  \r
 834 ５一玉(42)  \r
 835 ４一龍(32)  \r
 836 ６二玉(51)  \r
 837 ６一龍(41)  \r
 838 ７三玉(62)  \r
 839 ７二龍(61)  \r
 840 ８四玉(73)  \r
 841 ８三龍(72)  \r
 842 ９五玉(84)  \r
 843 ９四龍(83)  \r
 844 ８六玉(95)  \r
 845 ９七龍(94)  \r
 846 ７六玉(86)  \r
 847 ６七龍(97)  \r
 848 ８六玉(76)  \r
 849 ８七龍(67)  \r
 850 ９五玉(86)  \r
 851 ９六龍(87)  \r
 852 ８四玉(95)  \r
 853 ９四龍(96)  \r
 854 ７三玉(84)  \r
 855 ８三龍(94)  \r
 856 ６二玉(73)  \r
 857 ７二龍(83)  \r
 858 ５一玉(62)  \r
 859 ６一龍(72)  \r
 860 ４二玉(51)  \r
 861 ４一龍(61)  \r
 862 ３三玉(42)  \r
 863 ３二龍(41)  \r
 864 ２四玉(33)  \r
 865 ２三龍(32)  \r
 866 ３五玉(24)  \r
 867 ２五龍(23)  \r
 868 ４六玉(35)  \r
 869 ３八桂打    \r
 870 ５七玉(46)  \r
 871 ５五龍(25)  \r
 872 ５六歩打    \r
 873 ５八香打    \r
 874 詰み        \r
まで873手詰\r
`,jr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0356\r
作者：不明      \r
発表誌：趣味の詰將棋 第9番\r
発表年月：1949年6月\r
手数：29\r
分類：大道棋\r
備考：第8位、19件登録\r
解説：另一道大道棋香步问题，与 106 是姊妹作；比较两题最能看出一格差异如何改变全局。
手合割：平手　　\r
後手の持駒：飛二　角二　金三　銀三　桂二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v桂 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金v歩 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|五\r
|v歩 ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三桂(75)  \r
   2 ８一玉(71)  \r
   3 ８二歩打    \r
   4 ９二玉(81)  \r
   5 ９四香打    \r
   6 ９三角打    \r
   7 ９一桂成(83)\r
   8 同　玉(92)  \r
   9 ９三香(94)  \r
  10 ９二角打    \r
  11 ８一歩成(82)\r
  12 同　玉(91)  \r
  13 ９二香成(93)\r
  14 同　玉(81)  \r
  15 ８三角打    \r
  16 ９三玉(92)  \r
  17 ８二角打    \r
  18 ８四玉(93)  \r
  19 ７四角成(83)\r
  20 ９五玉(84)  \r
  21 ９六馬(74)  \r
  22 ８四玉(95)  \r
  23 ７四馬(96)  \r
  24 ９五玉(84)  \r
  25 ９六歩打    \r
  26 ９四玉(95)  \r
  27 ９三角成(82)\r
  28 同　玉(94)  \r
  29 ８三馬(74)  \r
  30 詰み        \r
まで29手詰\r
`,Nr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0440\r
作者：岩木錦太郎      \r
発表誌：将棋月報\r
発表年月：1934年7月\r
手数：63\r
分類：大道棋\r
備考：第8位、19件登録\r
解説：岩木锦太郎的香步问题，达到 63 手，变化深且难解，属于大道棋中的长线作品。
手合割：平手　　\r
後手の持駒：飛二　角二　金三　銀四　桂　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v歩 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金 ・ 香 ・ ・ ・ ・|三\r
| ・ ・v桂 ・ ・ ・ ・ ・ ・|四\r
| 桂 ・ 香 ・ ・ ・ ・ ・ ・|五\r
|v歩 ・v香 ・ ・ 桂 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三桂(95)  \r
   2 ８一玉(71)  \r
   3 ８二歩打    \r
   4 ９二玉(81)  \r
   5 ９五香打    \r
   6 ９三角打    \r
   7 ９一桂成(83)\r
   8 同　玉(92)  \r
   9 ９三香(95)  \r
  10 ９二桂打    \r
  11 ８一歩成(82)\r
  12 同　玉(91)  \r
  13 ６三角打    \r
  14 ９一玉(81)  \r
  15 ９二香成(93)\r
  16 同　玉(91)  \r
  17 ７四角成(63)\r
  18 ９一玉(92)  \r
  19 ８三桂打    \r
  20 ９二玉(91)  \r
  21 ７一桂成(83)\r
  22 ９一玉(92)  \r
  23 ８一成桂(71)\r
  24 同　玉(91)  \r
  25 ７二金(73)  \r
  26 同　玉(81)  \r
  27 ８四桂打    \r
  28 ７一玉(72)  \r
  29 ６四馬(74)  \r
  30 ７三飛打    \r
  31 ７二桂成(84)\r
  32 同　飛(73)  \r
  33 同　香成(75)\r
  34 同　玉(71)  \r
  35 ７三飛打    \r
  36 ８二玉(72)  \r
  37 ７六飛成(73)\r
  38 ９三玉(82)  \r
  39 ９五香打    \r
  40 ９四桂打    \r
  41 ７三龍(76)  \r
  42 ８三金打    \r
  43 ７五馬(64)  \r
  44 ９二玉(93)  \r
  45 ９四香(95)  \r
  46 同　金(83)  \r
  47 ７四馬(75)  \r
  48 ８一玉(92)  \r
  49 ８三龍(73)  \r
  50 ８二金打    \r
  51 ７三桂打    \r
  52 ７一玉(81)  \r
  53 ８二龍(83)  \r
  54 同　玉(71)  \r
  55 ８三金打    \r
  56 ７一玉(82)  \r
  57 ８一桂成(73)\r
  58 同　玉(71)  \r
  59 ６三馬(74)  \r
  60 ９一玉(81)  \r
  61 ７三馬(63)  \r
  62 ８一玉(91)  \r
  63 ８二馬(73)  \r
  64 詰み        \r
まで63手詰\r
`,Sr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0227\r
作者：初代大橋宗桂\r
発表誌：象戯馬法并作物 第28番\r
発表年月：元和2年\r
手数：13\r
備考：第15位、18件登録\r
解説：初代大桥宗桂的实战型好作，古典棋形和实战感结合得很自然。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀三　桂二　香三　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂v香|一\r
| ・ ・ ・ ・ ・v玉 ・ ・ ・|二\r
| ・ ・ ・ 角 歩v歩v歩v歩v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 歩 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５二歩成(53)\r
   2 ３一玉(42)  \r
   3 ４一と(52)  \r
   4 ３二玉(31)  \r
   5 ２四桂打    \r
   6 同　歩(23)  \r
   7 ４二と(41)  \r
   8 同　玉(32)  \r
   9 ５一銀打    \r
  10 ３一玉(42)  \r
  11 ４一角成(63)\r
  12 同　玉(31)  \r
  13 ４二金打    \r
  14 詰み        \r
まで13手詰\r
`,wr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0414\r
作者：荻野真甫    \r
発表誌：象戯綱目 第5巻 第21番\r
発表年月：宝永4年6月\r
手数：37\r
備考：第15位、18件登録\r
解説：实战型小驹图式，重心落在细小棋子的配合与逐步收紧，而不是大子暴力压制。
手合割：平手　　\r
後手の持駒：飛二　角二　金二　銀　桂　香三　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香v桂v銀v玉 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・v歩v歩v歩 と ・ ・ ・ ・|三\r
|v歩 ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ 歩 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　銀二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６二銀打    \r
   2 同　銀(71)  \r
   3 ５二金打    \r
   4 ７一玉(61)  \r
   5 ６二金(52)  \r
   6 ８二玉(71)  \r
   7 ７四桂打    \r
   8 同　歩(73)  \r
   9 ７一銀打    \r
  10 ９二玉(82)  \r
  11 ８二金打    \r
  12 ９三玉(92)  \r
  13 ８三金(82)  \r
  14 同　玉(93)  \r
  15 ８四歩(85)  \r
  16 ９三玉(83)  \r
  17 ８二銀打    \r
  18 ９二玉(93)  \r
  19 ９三歩打    \r
  20 同　桂(81)  \r
  21 ８三歩成(84)\r
  22 同　玉(92)  \r
  23 ７三銀成(82)\r
  24 同　玉(83)  \r
  25 ６三と(53)  \r
  26 ８三玉(73)  \r
  27 ８四歩打    \r
  28 ９二玉(83)  \r
  29 ８二銀成(71)\r
  30 同　玉(92)  \r
  31 ７二金(62)  \r
  32 ９二玉(82)  \r
  33 ８三歩成(84)\r
  34 同　玉(92)  \r
  35 ７三と(63)  \r
  36 ９二玉(83)  \r
  37 ８二金(72)  \r
  38 詰み        \r
まで37手詰\r
`,Cr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0429\r
作者：渡瀬荘次郎\r
発表誌：待宵 第19番\r
発表年月：慶応2年8月\r
手数：7\r
備考：第15位、18件登録\r
解説：《待宵》第 19 番，以连续飞车捨为看点；每次捨飞都改变下一阶段的控制线。
手合割：平手　　\r
後手の持駒：角　金二　銀二　桂四　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v歩v金 ・ ・ ・|一\r
| ・ ・ 銀 銀v玉 ・ ・v金 ・|二\r
| ・ ・ ・ ・ ・v歩v歩 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二飛打    \r
   2 同　金(22)  \r
   3 ４二飛打    \r
   4 同　金(41)  \r
   5 ７四角打    \r
   6 ６二玉(52)  \r
   7 ６三角成(74)\r
   8 詰み        \r
まで7手詰\r
`,Pr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0369\r
作者：不明      \r
発表誌：詰将棋パラダイス\r
発表年月：1955年7月\r
手数：17\r
分類：大道棋\r
備考：第15位、18件登録\r
解説：大道棋双玉问题，解答中会出现逆王手，双方王同时参与让常规直觉失效。
手合割：平手　　\r
後手の持駒：飛　角二　金四　銀二　桂三　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v歩v香 ・ ・ ・ ・ ・|一\r
|v桂v玉 ・ 銀 ・ ・ ・ ・ ・|二\r
| ・ ・ 飛 玉 ・ ・ ・ ・ ・|三\r
| ・ ・ 歩 ・ ・ ・ ・ ・ ・|四\r
|v歩v歩 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９三銀打    \r
   2 ９一玉(82)  \r
   3 ７一飛成(73)\r
   4 ８一角打    \r
   5 同　龍(71)  \r
   6 同　玉(91)  \r
   7 ８二銀成(93)\r
   8 同　玉(81)  \r
   9 ７三歩成(74)\r
  10 ９三玉(82)  \r
  11 ９四歩打    \r
  12 同　玉(93)  \r
  13 ７二角打    \r
  14 ８四玉(94)  \r
  15 ７四と(73)  \r
  16 ９三玉(84)  \r
  17 ８三角成(72)\r
  18 詰み        \r
まで17手詰\r
`,$r=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0222\r
作者：伊藤看寿    \r
発表誌：将棋図巧 第1番\r
発表年月：宝暦5年3月\r
手数：69\r
備考：第19位、17件登録\r
解説：《将棋图巧》第 1 番，属于“角送り詰”趣向作；角的连续转移是全题的骨架。
手合割：平手　　\r
後手の持駒：金二　桂　香二　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v歩 金 ・ 角 ・ ・ ・ ・|一\r
| 金v銀 と ・ ・ ・ ・ ・ ・|二\r
|v歩 歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v桂 ・v香v銀 ・ ・ ・ ・ ・|四\r
| ・ ・ ・v玉 ・ ・ ・ ・ ・|五\r
|v桂 香 ・ ・ ・ ・v龍 ・v角|六\r
| ・vと ・v歩 龍 ・ ・ ・ ・|七\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５四銀打    \r
   2 ７五玉(65)  \r
   3 ８七桂(79)  \r
   4 ８六玉(75)  \r
   5 ６六龍(57)  \r
   6 同　龍(36)  \r
   7 ９五角成(51)\r
   8 ７六玉(86)  \r
   9 ７七歩打    \r
  10 同　龍(66)  \r
  11 同　馬(95)  \r
  12 ８五玉(76)  \r
  13 １五飛打    \r
  14 ２五飛打    \r
  15 同　飛(15)  \r
  16 同　角(16)  \r
  17 ９五馬(77)  \r
  18 ７六玉(85)  \r
  19 ２六飛打    \r
  20 ３六飛打    \r
  21 同　飛(26)  \r
  22 同　角(25)  \r
  23 ７七馬(95)  \r
  24 ８五玉(76)  \r
  25 ３五飛打    \r
  26 ４五飛打    \r
  27 同　飛(35)  \r
  28 同　角(36)  \r
  29 ９五馬(77)  \r
  30 ７六玉(85)  \r
  31 ４六飛打    \r
  32 ５六飛打    \r
  33 同　飛(46)  \r
  34 同　角(45)  \r
  35 ７七馬(95)  \r
  36 ８五玉(76)  \r
  37 ８四飛打    \r
  38 同　玉(85)  \r
  39 ９五馬(77)  \r
  40 ８三玉(84)  \r
  41 ８二金(92)  \r
  42 同　歩(81)  \r
  43 ７五桂(87)  \r
  44 同　香(74)  \r
  45 ８四歩打    \r
  46 ９二玉(83)  \r
  47 ８一銀打    \r
  48 ９一玉(92)  \r
  49 ８二と(72)  \r
  50 同　玉(91)  \r
  51 ７二金(71)  \r
  52 ９一玉(82)  \r
  53 ９二歩打    \r
  54 同　角(56)  \r
  55 同　銀成(81)\r
  56 同　玉(91)  \r
  57 ７四角打    \r
  58 ９一玉(92)  \r
  59 ８二金(72)  \r
  60 同　玉(91)  \r
  61 ８三歩成(84)\r
  62 ７一玉(82)  \r
  63 ６二馬(95)  \r
  64 同　玉(71)  \r
  65 ６三銀成(54)\r
  66 ６一玉(62)  \r
  67 ７二と(83)  \r
  68 ５一玉(61)  \r
  69 ５二成銀(63)\r
  70 詰み        \r
まで69手詰\r
`,Br=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0224\r
作者：渡瀬荘次郎  \r
発表誌：待宵 第5番\r
発表年月：慶応2年8月\r
手数：7\r
備考：第19位、17件登録\r
解説：《待宵》第 5 番，初形很像实战局面，趣味在于自然棋形下隐藏着唯一的精确手顺。
手合割：平手　　\r
後手の持駒：飛　角二　金二　銀三　桂三　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂v香|一\r
| ・ ・ ・ ・ ・ 龍 ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|三\r
| ・ ・ ・ ・ ・ ・v歩 ・v歩|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 歩 ・ 歩|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三金打    \r
   2 同　桂(21)  \r
   3 １三金打    \r
   4 同　香(11)  \r
   5 １二銀打    \r
   6 ２四玉(23)  \r
   7 ２二龍(42)  \r
   8 詰み        \r
まで7手詰\r
`,Er=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei 0392\r
作者：不明  \r
発表誌：小林棋好手記詰物丗一番 第30番\r
発表年月：明治初期\r
手数：13\r
分類：大道棋\r
備考：第19位、17件登録\r
解説：连续飞车不成是主要看点；不升变反而保留控制线，体现詰将棋对不成的精细利用。
手合割：平手　　\r
後手の持駒：飛　角二　金四　銀四　香四　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・v桂v桂v桂|三\r
| ・ ・ ・ ・ ・ 飛 ・ 桂 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二歩打    \r
   2 ２一玉(11)  \r
   3 ４一飛(44)  \r
   4 ３一歩打    \r
   5 １一歩成(12)\r
   6 同　玉(21)  \r
   7 ３一飛(41)  \r
   8 ２一銀打    \r
   9 １二歩打    \r
  10 ２二玉(11)  \r
  11 ３二桂成(24)\r
  12 同　銀(21)  \r
  13 １一飛成(31)\r
  14 詰み        \r
まで13手詰\r
`,Ar=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0157\r
作者：編集部      \r
発表誌：将棋マガジン\r
発表年月：1979年11月\r
手数：3\r
備考：6件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀四　桂三　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v歩v桂v香|一\r
| ・ ・ ・ ・ ・ ・v玉 ・ ・|二\r
| ・ ・ ・v角 龍 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４一角打    \r
   2 同　角(63)  \r
   3 ２三金打    \r
   4 詰み        \r
まで3手詰\r
`,Lr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0159\r
作者：編集部      \r
発表誌：将棋マガジン\r
発表年月：1979年12月\r
手数：3\r
備考：5件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金三　銀四　桂三　香三　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ 龍v香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・v龍 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ 桂|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 １五金打    \r
   2 同　玉(14)  \r
   3 ２五龍(21)  \r
   4 詰み        \r
まで3手詰\r
`,Ir=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0174\r
作者：編集部      \r
発表誌：将棋マガジン\r
発表年月：1980年9月\r
手数：3\r
備考：5件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金三　銀四　桂三　香四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 龍 ・v桂 ・|一\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|二\r
| ・ ・ ・ ・ ・ 歩 ・v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ 金 ・ 飛|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三金(34)  \r
   2 同　桂(21)  \r
   3 １一飛成(14)\r
   4 詰み        \r
まで3手詰\r
`,Or=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0175\r
作者：編集部      \r
発表誌：将棋マガジン\r
発表年月：1980年10月\r
手数：3\r
備考：5件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度。
手合割：平手　　\r
後手の持駒：飛　金四　銀四　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|三\r
| ・ ・ ・ ・ ・ ・v馬 ・v歩|四\r
| ・ ・ ・ ・ ・ ・ 馬 ・v玉|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ 飛 歩|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２五飛(27)  \r
   2 同　馬(34)  \r
   3 ２七桂打    \r
   4 詰み        \r
まで3手詰\r
`,Mr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0177\r
作者：編集部      \r
発表誌：将棋マガジン\r
発表年月：1980年11月\r
手数：3\r
備考：5件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀四　桂三　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・ ・ 角v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 歩 角|五\r
| ・ ・ ・ ・ ・ ・v飛 ・ 香|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １一角成(33)\r
   2 同　玉(12)  \r
   3 ３三角成(15)\r
   4 詰み        \r
まで3手詰\r
`,Rr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0229\r
作者：市橋豊      \r
発表誌：近代将棋\r
発表年月：1983年8月\r
手数：3\r
受賞：三手詰最優秀作\r
備考：5件登録、タイプA\r
解説：双玉构型会引入逆王手等反直觉应对。
手合割：平手　　\r
後手の持駒：金四　銀三　桂四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v香 ・ ・ ・ ・ ・|一\r
| 銀 ・ ・ ・ ・ ・ ・ ・ ・|二\r
|v香v歩 ・v龍 ・ ・ ・ ・ ・|三\r
|v玉 ・ ・ ・ ・ ・ ・ ・ ・|四\r
|v香 ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 玉 ・ ・ ・ ・ ・ ・|六\r
|v角 ・v歩 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ 馬 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６四飛打    \r
   2 ７四龍(63)  \r
   3 ６六玉(76)  \r
   4 詰み        \r
まで3手詰\r
`,Kr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0233\r
作者：愛上夫      \r
発表誌：近代将棋\r
発表年月：1984年11月\r
手数：3\r
備考：5件登録、タイプA\r
解説：双玉构型会引入逆王手等反直觉应对。
手合割：平手　　\r
後手の持駒：金四　桂三　香二　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ 角v香 ・ ・ ・ ・|一\r
| ・ ・ ・ ・v香 ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ 銀 銀 ・|三\r
| ・ ・ ・ ・ ・ 龍 ・ ・v銀|四\r
| ・ ・ ・ ・v桂 ・ ・v玉 ・|五\r
| ・ ・ ・ ・ ・ 龍 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ 玉 ・ ・ 銀|七\r
| ・ ・ ・ ・ ・vと ・ ・ ・|八\r
| ・ ・ ・ 角 ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六玉(47)  \r
   2 ４七桂成(55)\r
   3 ５五龍(44)  \r
   4 詰み        \r
まで3手詰\r
`,Tr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0306\r
作者：不明        \r
発表誌：将棋世界\r
発表年月：1985年4月\r
手数：3\r
備考：5件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀三　桂四　香三　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|一\r
| ・ ・ ・ ・ ・ ・ 銀 ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 馬 ・v玉|四\r
| ・ ・ ・ ・ ・ ・ ・ ・v馬|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三飛打    \r
   2 同　玉(14)  \r
   3 ２三馬(34)  \r
   4 詰み        \r
まで3手詰\r
`,Fr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0313\r
作者：田中寅彦    \r
発表誌：将棋世界\r
発表年月：1991年2月\r
手数：3\r
分類：広告\r
備考：10件登録、タイプC\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀三　桂二　香四　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ 銀v馬v玉|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・v歩 ・ 龍 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ 桂 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・v飛|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １四龍(23)  \r
   2 同　飛(15)  \r
   3 ２三桂打    \r
   4 詰み        \r
まで3手詰\r
`,Dr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0316\r
作者：田中寅彦    \r
発表誌：将棋世界\r
発表年月：1991年2月\r
手数：3\r
分類：広告\r
備考：9件登録、タイプC\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀四　桂四　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ とv香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ 角v金v玉|三\r
| ・ ・ ・ ・ ・ ・ 龍 ・v歩|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四龍(34)  \r
   2 同　金(23)  \r
   3 ２二角成(33)\r
   4 詰み        \r
まで3手詰\r
`,zr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0322\r
作者：不明        \r
発表誌：将棋世界\r
発表年月：1994年6月\r
手数：3\r
分類：広告\r
備考：15件登録、タイプC\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀四　桂四　香二　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ と ・|一\r
| ・ ・ ・ ・ ・ ・v香 ・ ・|二\r
| ・ ・ ・ ・ ・v歩v歩v玉v香|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 歩 ・ 歩 歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二角打    \r
   2 同　玉(23)  \r
   3 ２二金打    \r
   4 詰み        \r
まで3手詰\r
`,Gr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0185\r
作者：勝浦修      \r
発表誌：将棋マガジン\r
発表年月：1981年8月\r
手数：5\r
備考：11件登録、タイプA\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀三　桂三　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ 龍 銀 ・v玉 角|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・v歩v歩 桂 香|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二桂成(24)\r
   2 同　玉(22)  \r
   3 ４一龍(52)  \r
   4 ４三玉(32)  \r
   5 ２一角成(12)\r
   6 詰み        \r
まで5手詰\r
`,Hr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0307\r
作者：大山康晴    \r
発表誌：週刊新潮\r
発表年月：1976年5月20日\r
手数：7\r
分類：棋力診断\r
備考：6件登録、タイプB\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀三　桂三　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・v歩 銀v歩 ・|三\r
| ・ ・ ・ ・ ・ 馬 ・ ・v桂|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 歩 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三歩打    \r
   2 同　玉(12)  \r
   3 ２二銀(33)  \r
   4 ２四玉(13)  \r
   5 ３四馬(44)  \r
   6 同　玉(24)  \r
   7 ３五金打    \r
   8 詰み        \r
まで7手詰\r
`,Ur=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0206\r
作者：塚田正夫    \r
発表誌：近代将棋\r
発表年月：1978年3月\r
手数：7\r
分類：遺作\r
備考：5件登録、タイプA\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金二　銀四　桂三　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v玉v香|一\r
| ・ ・ ・ ・ ・ ・ ・v飛 ・|二\r
| ・ ・ ・ ・ ・ 歩 龍 ・v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二金打    \r
   2 同　飛(22)  \r
   3 ３一金打    \r
   4 同　飛(32)  \r
   5 ２二歩打    \r
   6 １二玉(21)  \r
   7 ２四桂打    \r
   8 詰み        \r
まで7手詰\r
`,Jr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0097\r
作者：赤羽守      \r
発表誌：詰将棋パラダイス\r
発表年月：1983年6月\r
手数：7\r
受賞：看寿賞\r
備考：6件登録、タイプA\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀　桂二　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ 角 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ 飛 ・ ・ ・ ・|四\r
|v歩 ・ ・ ・ ・v銀 ・ ・ ・|五\r
| ・v桂 ・ ・ ・ ・ ・ ・ 龍|六\r
| ・v玉 歩 ・ ・ ・ ・ ・ ・|七\r
| ・ 桂v銀 ・ ・vと ・ ・ ・|八\r
| 馬 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５五飛(54)  \r
   2 ７七玉(87)  \r
   3 ６六龍(16)  \r
   4 同　玉(77)  \r
   5 ５七銀打    \r
   6 ５五玉(66)  \r
   7 ７六桂(88)  \r
   8 詰み        \r
まで7手詰\r
`,Wr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0191\r
作者：愛上夫      \r
発表誌：詰棋めいと 創刊号\r
発表年月：1984年6月\r
手数：7\r
備考：6件登録、タイプA\r
解説：双玉构型会引入逆王手等反直觉应对；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂四　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・v金 ・v香 ・ ・ ・ ・ ・|三\r
| ・ ・ 金 ・v香 ・ ・ ・ ・|四\r
|v金v香 ・ ・ ・ ・ ・ ・ 角|五\r
|v金v玉 ・ ・ ・ ・ ・ ・ ・|六\r
| ・v銀 ・ 銀 ・ ・ ・ ・ ・|七\r
|v香 銀v歩 玉 銀 ・ ・ ・ ・|八\r
| ・ ・ ・ ・ 角v飛 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六飛打    \r
   2 ７六桂打    \r
   3 ６九玉(68)  \r
   4 ７七桂打    \r
   5 同　銀(88)  \r
   6 ９七玉(86)  \r
   7 ８九桂打    \r
   8 詰み        \r
まで7手詰\r
`,qr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0315\r
作者：田中寅彦    \r
発表誌：将棋世界\r
発表年月：1991年2月\r
手数：7\r
分類：広告\r
備考：9件登録、タイプC\r
解説：属于短篇，适合练习第一手和强制应答的精度；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀四　桂二　香四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v玉v桂|一\r
| ・ ・ ・ ・ ・ 龍 ・v金 ・|二\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 桂 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二角打    \r
   2 同　玉(21)  \r
   3 １三歩打    \r
   4 ２一玉(12)  \r
   5 ３三桂(25)  \r
   6 同　金(22)  \r
   7 １二歩成(13)\r
   8 詰み        \r
まで7手詰\r
`,Yr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0046\r
作者：谷口均      \r
発表誌：詰将棋パラダイス\r
発表年月：2009年11月\r
手数：7\r
受賞：半期賞、看寿賞\r
備考：7件登録、タイプA\r
解説：属于短篇，适合练习第一手和强制应答的精度。
手合割：平手　　\r
後手の持駒：角　金四　銀四　桂二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
|v桂v歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v歩v玉 ・ ・ ・ ・ 馬 飛 ・|四\r
| ・ ・ ・ ・v桂 ・ ・ ・ ・|五\r
| ・ ・ 飛 ・ ・ ・ ・ ・ ・|六\r
|vと ・ 香 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６七馬(34)  \r
   2 ８五玉(84)  \r
   3 １六飛(76)  \r
   4 ６七桂成(55)\r
   5 ２五飛(24)  \r
   6 ８四玉(85)  \r
   7 １四飛(16)  \r
   8 詰み        \r
まで7手詰\r
`,Zr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0296\r
作者：大山康晴    \r
発表誌：将棋世界\r
発表年月：1982年1月\r
手数：9\r
分類：棋力診断\r
備考：6件登録、タイプB\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　金三　銀二　桂三　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ 飛 ・v香|一\r
| ・ ・ ・ ・ ・ ・ 歩v玉 ・|二\r
| ・ ・ ・ ・ ・ ・v桂 ・v歩|三\r
| ・ ・ ・ ・ ・ ・v歩v歩 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ 歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２一金打    \r
   2 ２三玉(22)  \r
   3 １二銀打    \r
   4 同　香(11)  \r
   5 ２二金(21)  \r
   6 同　玉(23)  \r
   7 １一銀打    \r
   8 ２三玉(22)  \r
   9 ２一飛成(31)\r
  10 詰み        \r
まで9手詰\r
`,Xr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0300\r
作者：二上達也    \r
発表誌：将棋世界\r
発表年月：1983年1月\r
手数：9\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　金三　桂三　香三　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ 銀v桂v香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v銀|四\r
| ・ ・ ・ ・ ・ ・ ・ ・v銀|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二飛打    \r
   2 ２三玉(12)  \r
   3 ２四銀打    \r
   4 同　銀(15)  \r
   5 ２二金打    \r
   6 １三玉(23)  \r
   7 １二金(22)  \r
   8 同　香(11)  \r
   9 ２二飛成(32)\r
  10 詰み        \r
まで9手詰\r
`,Qr=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0314\r
作者：田中寅彦    \r
発表誌：将棋世界\r
発表年月：1991年2月\r
手数：9\r
分類：広告\r
備考：9件登録、タイプC\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀四　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ 飛 ・|一\r
| ・ ・ ・v歩v金v玉 ・ ・ ・|二\r
| ・ ・ ・ ・v歩v歩v馬 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４一金打    \r
   2 ３二玉(42)  \r
   3 ３一金(41)  \r
   4 ４二玉(32)  \r
   5 ３四桂打    \r
   6 同　馬(33)  \r
   7 ５一角打    \r
   8 同　玉(42)  \r
   9 ３二金(31)  \r
  10 詰み        \r
まで9手詰\r
`,n1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0017\r
作者：原亜津夫    \r
発表誌：詰将棋パラダイス\r
発表年月：2002年9月\r
手数：9\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀四　桂　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ 飛 ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・v龍 ・ ・ ・ ・|四\r
| ・ ・ 馬 ・ ・vと ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・v玉v桂 桂 ・ ・ ・|七\r
| ・ ・ ・ ・ ・v歩 ・ ・ ・|八\r
| ・ 香 歩vと ・ ・ 桂 ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９四角打    \r
   2 ８五金打    \r
   3 ５八金打    \r
   4 ７七玉(67)  \r
   5 ７六馬(75)  \r
   6 同　金(85)  \r
   7 ８六飛成(83)\r
   8 同　金(76)  \r
   9 ６七金(58)  \r
  10 詰み        \r
まで9手詰\r
`,r1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0205\r
作者：谷口均      \r
発表誌：近代将棋\r
発表年月：1978年1月\r
手数：11\r
受賞：塚田賞\r
備考：6件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀二　桂四　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|一\r
| ・ ・ ・ ・ ・ ・v香 ・ ・|二\r
| ・ ・ ・ ・ ・ ・v歩v玉 角|三\r
| ・ ・ ・ ・ ・ ・v龍v角 ・|四\r
| ・ ・ ・ ・ ・v歩 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀二　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二銀打    \r
   2 同　玉(23)  \r
   3 ３一角成(13)\r
   4 １五角(24)  \r
   5 同　香(16)  \r
   6 １四龍(34)  \r
   7 ３四角打    \r
   8 同　歩(33)  \r
   9 １三銀打    \r
  10 ２三玉(12)  \r
  11 ２二馬(31)  \r
  12 詰み        \r
まで11手詰\r
`,i1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0223\r
作者：伊藤果      \r
発表誌：東京スポーツ\r
発表年月：1981年8月9日\r
手数：11\r
備考：6件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金　銀四　桂三　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|一\r
| ・ ・ ・ ・ ・ ・v飛 ・ ・|二\r
| ・ ・ ・ ・ ・ 桂v角v歩v玉|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 歩 歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金三　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 １四香打    \r
   2 ２二玉(13)  \r
   3 １三金打    \r
   4 同　香(11)  \r
   5 １二金打    \r
   6 同　玉(22)  \r
   7 １三香(14)  \r
   8 同　玉(12)  \r
   9 １四香打    \r
  10 ２二玉(13)  \r
  11 １二金打    \r
  12 詰み        \r
まで11手詰\r
`,e1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0102\r
作者：愛上夫      \r
発表誌：詰将棋パラダイス\r
発表年月：1985年12月\r
手数：11\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀四　桂二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・v桂|六\r
| ・ ・ ・ ・ ・ 馬 ・ 歩 金|七\r
| ・ ・ ・ ・ ・ ・ ・ 香vと|八\r
| ・ ・ ・ ・ ・ ・v玉 ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３八飛打    \r
   2 ２九玉(39)  \r
   3 ３三飛(38)  \r
   4 ２八玉(29)  \r
   5 ３八飛(33)  \r
   6 １七玉(28)  \r
   7 ２九桂打    \r
   8 同　と(18)  \r
   9 １八歩打    \r
  10 ２七玉(17)  \r
  11 ３七馬(47)  \r
  12 詰み        \r
まで11手詰\r
`,v1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0031\r
作者：中村雅哉    \r
発表誌：詰将棋パラダイス\r
発表年月：2006年4月\r
手数：11\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀二　桂三　香二　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・v香 ・ ・ ・ ・ ・|三\r
| ・ ・v龍 ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ 銀 ・ 歩v玉vと 角 龍 ・|六\r
| ・v歩 ・ ・ ・ ・ 桂 ・ ・|七\r
| ・ 馬 ・ ・ ・ 金vと ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６五銀打    \r
   2 同　香(63)  \r
   3 ５七香打    \r
   4 同　と(46)  \r
   5 ７二角成(36)\r
   6 ６七玉(56)  \r
   7 ５六龍(26)  \r
   8 同　と(57)  \r
   9 ９四馬(72)  \r
  10 同　龍(74)  \r
  11 ７七馬(88)  \r
  12 詰み        \r
まで11手詰\r
`,t1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0056\r
作者：酒井克彦    \r
発表誌：詰将棋パラダイス\r
発表年月：1976年5月\r
手数：13\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　銀四　桂二　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v歩v角|一\r
| ・ ・ ・ ・ ・v歩 ・v玉 ・|二\r
| ・ ・ ・ ・ ・v桂 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・v金 ・|四\r
| ・ ・ ・ ・ ・ ・ 歩 金v歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角　金　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三金打    \r
   2 １三玉(22)  \r
   3 １四金(25)  \r
   4 同　玉(13)  \r
   5 ３六角打    \r
   6 １三玉(14)  \r
   7 ２五桂打    \r
   8 同　金(24)  \r
   9 １二飛打    \r
  10 同　玉(13)  \r
  11 ４五角(36)  \r
  12 １三玉(12)  \r
  13 ２三角成(45)\r
  14 詰み        \r
まで13手詰\r
`,o1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0202\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1977年10月\r
手数：13\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀　桂二　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ 飛 ・ 歩 ・|二\r
| ・ ・ ・ 角v金v歩v歩v玉 ・|三\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・v龍 香|五\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・v角 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀三　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四銀打    \r
   2 同　龍(25)  \r
   3 １四銀打    \r
   4 同　龍(24)  \r
   5 ２六香打    \r
   6 ２五龍(14)  \r
   7 ２四銀打    \r
   8 同　龍(25)  \r
   9 ３二飛成(42)\r
  10 同　玉(23)  \r
  11 ４一角成(63)\r
  12 同　玉(32)  \r
  13 ４二金打    \r
  14 詰み        \r
まで13手詰\r
`,s1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0227\r
作者：柳田明      \r
発表誌：近代将棋\r
発表年月：1982年5月\r
手数：13\r
受賞：塚田賞\r
備考：6件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀二　桂　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・v金 ・v桂|三\r
| ・ ・ ・ ・ ・ 歩v歩 ・v香|四\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|五\r
| ・ ・ ・ ・ 桂v歩v銀 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ 馬|七\r
| ・ ・ ・ ・ ・ ・ ・v銀 桂|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４五飛打    \r
   2 同　銀(36)  \r
   3 ２七飛打    \r
   4 ２六歩打    \r
   5 同　飛(27)  \r
   6 ３五玉(25)  \r
   7 ２四角打    \r
   8 同　金(33)  \r
   9 ３六歩打    \r
  10 同　銀(45)  \r
  11 ２五飛(26)  \r
  12 同　玉(35)  \r
  13 ２六馬(17)  \r
  14 詰み        \r
まで13手詰\r
`,a1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0266\r
作者：湯村光造    \r
発表誌：近代将棋\r
発表年月：1991年10月\r
手数：13\r
受賞：塚田賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀三　桂四　香二　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・v香v龍|五\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|六\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ 香 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 龍|九\r
+---------------------------+\r
先手の持駒：角二　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七角打    \r
   2 ２七玉(26)  \r
   3 １六角打    \r
   4 同　玉(27)  \r
   5 ３九角(17)  \r
   6 １八歩打    \r
   7 １七歩打    \r
   8 ２六玉(16)  \r
   9 ２八龍(19)  \r
  10 ２七金打    \r
  11 同　龍(28)  \r
  12 同　玉(26)  \r
  13 ３七金打    \r
  14 詰み        \r
まで13手詰\r
`,u1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0288\r
作者：北浜健介    \r
発表誌：将棋世界\r
発表年月：2008年10月\r
手数：13\r
備考：6件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀　香四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 銀v歩 ・v銀|一\r
| ・ ・ ・ ・ ・ 銀 ・v玉 歩|二\r
| ・ ・ ・ ・ ・ ・ ・v金 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・v角 ・ 桂 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　桂三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四桂打    \r
   2 同　角(45)  \r
   3 ３三銀成(42)\r
   4 １二玉(22)  \r
   5 ２四桂打    \r
   6 同　金(23)  \r
   7 ２三成銀(33)\r
   8 同　金(24)  \r
   9 ２四桂打    \r
  10 同　金(23)  \r
  11 １三金打    \r
  12 ２一玉(12)  \r
  13 ３三桂(25)  \r
  14 詰み        \r
まで13手詰\r
`,_1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0058\r
作者：北村憲一    \r
発表誌：詰将棋パラダイス\r
発表年月：1976年10月\r
手数：15\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀四　桂　香　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|一\r
| ・ ・ ・ ・ ・ ・v歩v香 ・|二\r
| ・ ・ ・ ・ 馬 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・v玉 桂|四\r
| ・ ・ ・ ・ ・ 歩 ・v桂 香|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ 歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３六桂打    \r
   2 １三玉(24)  \r
   3 ２二桂成(14)\r
   4 同　玉(13)  \r
   5 ２四飛打    \r
   6 ２三桂打    \r
   7 同　飛成(24)\r
   8 同　玉(22)  \r
   9 ３五桂打    \r
  10 ３三玉(23)  \r
  11 ４三馬(53)  \r
  12 ２二玉(33)  \r
  13 ２三桂成(35)\r
  14 同　玉(22)  \r
  15 ２四香打    \r
  16 詰み        \r
まで15手詰\r
`,l1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0204\r
作者：森長宏明    \r
発表誌：近代将棋\r
発表年月：1977年12月\r
手数：15\r
受賞：塚田賞\r
備考：6件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀二　桂三　香四　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|一\r
| ・ ・ ・ ・ ・v銀 銀 ・v歩|二\r
| ・ ・ ・ ・ ・ ・v龍 ・ 歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 龍 歩 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三角打    \r
   2 １三玉(14)  \r
   3 ２五桂打    \r
   4 ２四玉(13)  \r
   5 １四角成(23)\r
   6 同　玉(24)  \r
   7 １三桂成(25)\r
   8 ２四玉(14)  \r
   9 １四成桂(13)\r
  10 同　玉(24)  \r
  11 １五歩打    \r
  12 １三玉(14)  \r
  13 ３三龍(36)  \r
  14 同　銀(42)  \r
  15 ２三飛打    \r
  16 詰み        \r
まで15手詰\r
`,c1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0207\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1978年11月\r
手数：15\r
受賞：塚田賞\r
備考：8件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金三　銀四　桂　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v歩 ・v玉v歩 ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・v歩v金 ・ ・ ・ ・|三\r
| ・ ・ 桂 ・ ・ 桂 ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角二　桂　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四角打    \r
   2 ４二飛打    \r
   3 ７三角打    \r
   4 ６一玉(51)  \r
   5 ６二香打    \r
   6 ５一玉(61)  \r
   7 ４三桂打    \r
   8 同　金(53)  \r
   9 ６一香成(62)\r
  10 同　玉(51)  \r
  11 ５二桂成(44)\r
  12 同　飛(42)  \r
  13 ５一角成(24)\r
  14 同　飛(52)  \r
  15 ６二角成(73)\r
  16 詰み        \r
まで15手詰\r
`,m1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0217\r
作者：北川邦男    \r
発表誌：近代将棋\r
発表年月：1980年7月\r
手数：15\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀三　桂二　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・v香 ・ 馬 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・v銀 ・|四\r
| ・ ・ ・ ・ ・vと ・ ・ ・|五\r
| ・ ・ ・ ・ ・ 馬v桂 ・ 飛|六\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 金|九\r
+---------------------------+\r
先手の持駒：飛　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七飛(16)  \r
   2 同　玉(27)  \r
   3 ２九桂打    \r
   4 １六玉(17)  \r
   5 ４三馬(33)  \r
   6 ３四歩打    \r
   7 同　馬(43)  \r
   8 ２五桂打    \r
   9 １七歩打    \r
  10 ２六玉(16)  \r
  11 ２七飛打    \r
  12 同　玉(26)  \r
  13 ３七馬(46)  \r
  14 同　桂成(25)\r
  15 １六馬(34)  \r
  16 詰み        \r
まで15手詰\r
`,d1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0221\r
作者：伊藤果      \r
発表誌：近代将棋\r
発表年月：1981年5月\r
手数：15\r
受賞：塚田賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金　銀三　桂三　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|一\r
| ・ ・ 飛 ・ ・ ・v金v玉 ・|二\r
| ・ ・ ・ ・ ・v金v歩v歩 ・|三\r
| ・ ・ ・ ・ ・ 角 ・ ・v歩|四\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３一銀打    \r
   2 同　玉(22)  \r
   3 ４一金打    \r
   4 同　玉(31)  \r
   5 ６一飛打    \r
   6 ５一銀打    \r
   7 同　飛成(61)\r
   8 同　玉(41)  \r
   9 ５二銀打    \r
  10 ４二玉(51)  \r
  11 ４三銀成(52)\r
  12 同　玉(42)  \r
  13 ５三角成(44)\r
  14 同　玉(43)  \r
  15 ５四金打    \r
  16 詰み        \r
まで15手詰\r
`,f1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0222\r
作者：小笠原      \r
発表誌：近代将棋\r
発表年月：1981年10月\r
手数：15\r
分類：広告\r
備考：11件登録、タイプC\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　銀三　桂　香四　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v桂v桂 ・ ・ ・ ・ ・ ・ ・|一\r
|v金 と ・v玉v金 ・ ・ ・ ・|二\r
| ・ 角 ・v歩 ・ ・ ・ ・ ・|三\r
|v歩 ・v歩 ・ 歩v銀 ・ ・ ・|四\r
| ・v金 ・ ・ ・ 歩 ・ ・ ・|五\r
| ・ ・ 歩 ・ ・ ・ ・ ・ ・|六\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６一角成(83)\r
   2 ７三玉(62)  \r
   3 ６二角打    \r
   4 同　金(52)  \r
   5 同　馬(61)  \r
   6 ８二玉(73)  \r
   7 ７二金打    \r
   8 ８三玉(82)  \r
   9 ７三飛打    \r
  10 ８四玉(83)  \r
  11 ９三飛成(73)\r
  12 同　玉(84)  \r
  13 ８五桂(77)  \r
  14 ８三玉(93)  \r
  15 ８四金打    \r
  16 詰み        \r
まで15手詰\r
`,g1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0096\r
作者：浦野真彦    \r
発表誌：詰将棋パラダイス\r
発表年月：1983年3月\r
手数：15\r
受賞：看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀四　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ 馬 ・ ・v桂 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・v歩v歩 角|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ 歩 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二飛打    \r
   2 ２二桂打    \r
   3 ２三角成(14)\r
   4 同　玉(12)  \r
   5 ４三飛打    \r
   6 １二玉(23)  \r
   7 ２二飛成(32)\r
   8 同　玉(12)  \r
   9 １四桂打    \r
  10 １一玉(22)  \r
  11 １三飛成(43)\r
  12 同　桂(21)  \r
  13 ３三馬(51)  \r
  14 １二玉(11)  \r
  15 ２二馬(33)  \r
  16 詰み        \r
まで15手詰\r
`,h1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0232\r
作者：若島正      \r
発表誌：近代将棋\r
発表年月：1984年7月\r
手数：15\r
受賞：塚田賞\r
備考：7件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀四　桂二　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ 馬v香v歩v桂 ・|一\r
| ・ ・ ・ ・ ・ ・ ・v歩v玉|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 龍 歩 歩|四\r
| ・ ・ ・ ・ ・ ・v馬 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三歩成(14)\r
   2 同　玉(12)  \r
   3 １四金打    \r
   4 １二玉(13)  \r
   5 ２三龍(34)  \r
   6 １一玉(12)  \r
   7 ２二龍(23)  \r
   8 同　玉(11)  \r
   9 ２三金(14)  \r
  10 １一玉(22)  \r
  11 ３三馬(51)  \r
  12 同　桂(21)  \r
  13 １二歩打    \r
  14 ２一玉(11)  \r
  15 １三桂打    \r
  16 詰み        \r
まで15手詰\r
`,k1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0267\r
作者：柏川香悦    \r
発表誌：近代将棋\r
発表年月：1992年6月\r
手数：15\r
受賞：塚田賞\r
備考：7件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀二　桂　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|三\r
| ・ ・ ・ ・ ・ ・ 銀 ・v玉|四\r
| ・ ・ ・ ・ 馬v馬 ・v桂v銀|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・vと|七\r
| ・ ・ ・ ・ ・ ・ 龍 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|九\r
+---------------------------+\r
先手の持駒：飛　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２六桂打    \r
   2 同　銀(15)  \r
   3 ２四飛打    \r
   4 同　玉(14)  \r
   5 ３五龍(38)  \r
   6 同　銀(26)  \r
   7 ３三馬(55)  \r
   8 １四玉(24)  \r
   9 １七香(19)  \r
  10 同　桂成(25)\r
  11 ２六桂打    \r
  12 同　銀(35)  \r
  13 １五歩打    \r
  14 同　銀(26)  \r
  15 ２三馬(33)  \r
  16 詰み        \r
まで15手詰\r
`,y1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0319\r
作者：柏川香悦    \r
発表誌：将棋世界\r
発表年月：1992年9月\r
手数：15\r
受賞：年間最優秀賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀三　桂二　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香v桂v銀 ・ ・ ・ ・ ・ ・|一\r
| ・ ・v玉 ・ ・ ・ と ・ ・|二\r
| ・ ・v歩 歩 ・ ・ ・ ・ ・|三\r
| ・v歩 ・ 金 ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６一角打    \r
   2 ８二玉(72)  \r
   3 ７四桂打    \r
   4 同　歩(73)  \r
   5 ７三金(64)  \r
   6 同　玉(82)  \r
   7 ５五角打    \r
   8 ６三玉(73)  \r
   9 ６四飛打    \r
  10 ５三玉(63)  \r
  11 ４三角成(61)\r
  12 同　玉(53)  \r
  13 ３三角成(55)\r
  14 ５三玉(43)  \r
  15 ４二馬(33)  \r
  16 詰み        \r
まで15手詰\r
`,b1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0114\r
作者：若島正      \r
発表誌：詰将棋パラダイス\r
発表年月：1992年10月\r
手数：15\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀　桂四　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v歩 ・v香|一\r
| ・ ・ ・ 飛 ・ 馬 ・ ・ ・|二\r
| ・ ・ ・ ・ ・v歩 銀v玉v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 銀v銀 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二銀成(33)\r
   2 同　玉(23)  \r
   3 ２五香打    \r
   4 ２三飛打    \r
   5 同　香成(25)\r
   6 同　玉(22)  \r
   7 ２一飛打    \r
   8 １四玉(23)  \r
   9 ６四飛成(62)\r
  10 ４四桂打    \r
  11 同　龍(64)  \r
  12 同　歩(43)  \r
  13 ２六桂打    \r
  14 同　銀(35)  \r
  15 ２四馬(42)  \r
  16 詰み        \r
まで15手詰\r
`,p1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0124\r
作者：波崎黒生    \r
発表誌：詰将棋パラダイス\r
発表年月：1995年9月\r
手数：15\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金二　銀三　桂三　香二　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 龍 ・v桂 ・|一\r
| ・ ・ ・ ・ 歩 ・v金v玉v香|二\r
| ・ ・ ・ ・ 馬v歩 ・ ・v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|四\r
| ・ ・ ・ ・ ・ ・ 銀v歩 歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四馬(53)  \r
   2 同　歩(43)  \r
   3 １三香成(14)\r
   4 同　玉(22)  \r
   5 １四歩(15)  \r
   6 ２二玉(13)  \r
   7 ２三歩打    \r
   8 同　玉(22)  \r
   9 ２一龍(41)  \r
  10 ３三玉(23)  \r
  11 ４五桂打    \r
  12 同　歩(44)  \r
  13 ４四金打    \r
  14 ４二玉(33)  \r
  15 ５一龍(21)  \r
  16 詰み        \r
まで15手詰\r
`,x1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0136\r
作者：谷口均      \r
発表誌：詰将棋パラダイス\r
発表年月：1998年4月\r
手数：15\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀三　桂三　香二　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v龍 ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v金|二\r
| ・ ・ ・ ・ ・v香 とv銀 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|四\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|五\r
| ・ ・ ・ ・ ・ ・ 飛 ・v歩|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角二　金　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 １五香打    \r
   2 ２四玉(14)  \r
   3 ３五角打    \r
   4 ３三玉(24)  \r
   5 ５五角打    \r
   6 ４二玉(33)  \r
   7 ６四角(55)  \r
   8 ３三玉(42)  \r
   9 ４四角(35)  \r
  10 ２四玉(33)  \r
  11 ４二角成(64)\r
  12 同　龍(31)  \r
  13 ３四飛(36)  \r
  14 同　銀(23)  \r
  15 １四金打    \r
  16 詰み        \r
まで15手詰\r
`,V1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0008\r
作者：高橋和      \r
発表誌：詰将棋パラダイス\r
発表年月：2001年5月\r
手数：15\r
受賞：看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ 銀|一\r
| ・ ・ ・ ・ 角 ・v銀 飛 ・|二\r
| ・ ・ ・ ・ ・ ・v歩v歩v玉|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・v金 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四銀打    \r
   2 同　歩(23)  \r
   3 ２三飛成(22)\r
   4 同　玉(13)  \r
   5 ３五桂打    \r
   6 １二玉(23)  \r
   7 ３四角成(52)\r
   8 同　歩(33)  \r
   9 １三銀打    \r
  10 １一玉(12)  \r
  11 ２三桂(35)  \r
  12 同　銀(32)  \r
  13 ３三角打    \r
  14 ２一玉(11)  \r
  15 ２二銀成(13)\r
  16 詰み        \r
まで15手詰\r
`,j1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0027\r
作者：高坂研      \r
発表誌：詰将棋パラダイス\r
発表年月：2005年8月\r
手数：15\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：手数适中，适合从局部战术入手观察完整的詰手顺；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　銀三　桂二　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v桂 ・ ・ ・ ・ ・|一\r
| ・ ・v歩 ・v香 ・ ・ ・ ・|二\r
| ・v歩v玉 ・ ・ ・ 馬 ・ ・|三\r
| ・ ・ ・ ・v歩 ・ ・ ・ ・|四\r
| ・v銀 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ 桂 ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金四　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７四金打    \r
   2 同　銀(85)  \r
   3 ５一馬(33)  \r
   4 ６二銀打    \r
   5 ６四角打    \r
   6 ６三玉(73)  \r
   7 ５三角成(64)\r
   8 同　銀(62)  \r
   9 ６四香打    \r
  10 同　銀(53)  \r
  11 ７三金打    \r
  12 同　銀(64)  \r
  13 ６二金打    \r
  14 同　銀(73)  \r
  15 ６四金打    \r
  16 詰み        \r
まで15手詰\r
`,N1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0309\r
作者：相馬康幸    \r
発表誌：報知新聞\r
発表年月：1987年3月23日\r
手数：17\r
受賞：看寿賞\r
備考：8件登録、タイプA\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀四　桂　香　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・vと ・ ・ ・ ・ ・|三\r
| ・ ・ ・ 香v玉 香 ・ ・ ・|四\r
| ・ ・ ・vと ・ ・ ・ ・ ・|五\r
| ・ ・ ・ 香 桂 馬 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５三金打    \r
   2 同　玉(54)  \r
   3 ４五桂打    \r
   4 ５四玉(53)  \r
   5 ５三金打    \r
   6 同　と(63)  \r
   7 同　桂成(45)\r
   8 同　玉(54)  \r
   9 ４五桂打    \r
  10 ５四玉(53)  \r
  11 ５五歩打    \r
  12 同　と(65)  \r
  13 ５三桂成(45)\r
  14 同　玉(54)  \r
  15 ６三香成(64)\r
  16 ５四玉(53)  \r
  17 ６四成香(63)\r
  18 詰み        \r
まで17手詰\r
`,S1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0119\r
作品名：MOTOR DRIVE\r
作者：宗岡博之    \r
発表誌：詰将棋パラダイス\r
発表年月：1994年10月\r
手数：17\r
分類：大道棋\r
受賞：半期賞、看寿賞\r
備考：6件登録、タイプA\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀　桂三　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ 角|三\r
| ・ ・ ・ ・ ・ ・ 龍 ・ ・|四\r
| ・ ・ ・ ・ ・ 銀 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ 銀v歩 ・|七\r
| ・ ・vと ・ ・ ・v玉 ・ 桂|八\r
| ・ ・ ・ ・ 歩v龍 ・v銀vと|九\r
+---------------------------+\r
先手の持駒：角　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３九香打    \r
   2 同　龍(49)  \r
   3 ４八銀(37)  \r
   4 ３五桂打    \r
   5 同　龍(34)  \r
   6 ４八玉(38)  \r
   7 ６六角打    \r
   8 ４七玉(48)  \r
   9 ５六銀(45)  \r
  10 同　玉(47)  \r
  11 ５五龍(35)  \r
  12 ６七玉(56)  \r
  13 ７九桂打    \r
  14 同　と(78)  \r
  15 ６八角成(13)\r
  16 同　玉(67)  \r
  17 ５八龍(55)  \r
  18 詰み        \r
まで17手詰\r
`,w1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0139\r
作者：海老原辰夫  \r
発表誌：詰将棋パラダイス\r
発表年月：1999年3月\r
手数：17\r
受賞：半期賞\r
備考：5件登録、タイプA\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀　桂三　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・vと ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・v歩v香 ・ ・|六\r
| ・ ・ ・ ・ 歩 ・ 桂 ・ ・|七\r
| ・ 龍 ・ 銀 ・v玉 ・ ・ 銀|八\r
| ・ ・ ・ ・ ・ ・ ・vと ・|九\r
+---------------------------+\r
先手の持駒：角　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５九銀(68)  \r
   2 ５七玉(48)  \r
   3 ４八角打    \r
   4 ４七玉(57)  \r
   5 ５六銀打    \r
   6 同　と(65)  \r
   7 ５八龍(88)  \r
   8 ３八玉(47)  \r
   9 ９三角成(48)\r
  10 ３七玉(38)  \r
  11 ４八馬(93)  \r
  12 ２八玉(37)  \r
  13 ３九馬(48)  \r
  14 ３七玉(28)  \r
  15 ２八龍(58)  \r
  16 同　と(29)  \r
  17 ４八馬(39)  \r
  18 詰み        \r
まで17手詰\r
`,C1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0147\r
作者：伊田勇一    \r
発表誌：詰将棋パラダイス\r
発表年月：2000年10月\r
手数：17\r
受賞：半期賞、看寿賞\r
備考：5件登録、タイプA\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀三　桂　香　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ 歩v香 ・v桂|三\r
| ・ ・ ・v桂 ・ ・ ・v香 龍|四\r
| ・ ・ ・ ・ ・ 角v玉 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・vと ・ ・v馬 ・ ・ 歩|七\r
| ・ ・ ・ ・ 桂 ・ ・ 歩 ・|八\r
| ・ ・vと ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金二　銀　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 １五龍(14)  \r
   2 ２五香(24)  \r
   3 ２四龍(15)  \r
   4 ４五玉(35)  \r
   5 ６五飛打    \r
   6 ５五桂打    \r
   7 ５四銀打    \r
   8 ５六玉(45)  \r
   9 ６七金打    \r
  10 同　桂成(55)\r
  11 ５五飛(65)  \r
  12 同　玉(56)  \r
  13 ５七香打    \r
  14 同　馬(47)  \r
  15 ４四龍(24)  \r
  16 同　玉(55)  \r
  17 ４五金打    \r
  18 詰み        \r
まで17手詰\r
`,P1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei2 0286\r
作者：齋藤夏雄    \r
発表誌：将棋世界\r
発表年月：2003年3月\r
手数：17\r
受賞：年間最優秀賞、看寿賞\r
備考：6件登録、タイプA\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　銀二　桂　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 銀 ・ ・|四\r
| ・ ・ ・ ・ ・ ・v歩v桂 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・vと|六\r
| ・ ・ ・ ・ ・v馬v玉 ・ 銀|七\r
| ・ ・ ・ ・ 龍v歩 ・ ・ ・|八\r
| ・ ・ ・ ・ ・v馬 ・ ・ 金|九\r
+---------------------------+\r
先手の持駒：金二　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２九桂打    \r
   2 同　馬(47)  \r
   3 ５七龍(58)  \r
   4 ４七馬(29)  \r
   5 ３六金打    \r
   6 同　玉(37)  \r
   7 ４六金打    \r
   8 同　馬(47)  \r
   9 ２八桂打    \r
  10 同　馬(46)  \r
  11 ５六龍(57)  \r
  12 ４六馬(28)  \r
  13 ４五銀(34)  \r
  14 ２七玉(36)  \r
  15 ４七龍(56)  \r
  16 同　馬(46)  \r
  17 ２八金(19)  \r
  18 詰み        \r
まで17手詰\r
`,$1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0525\r
作者：添川公司    \r
発表誌：近代将棋\r
発表年月：1980年3月\r
手数：21\r
受賞：塚田賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀二　桂　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v角 ・v玉v金v歩 ・ ・ ・ ・|一\r
|v歩 ・v歩 ・ ・ ・ ・ ・ ・|二\r
|v桂 ・ ・ ・ ・ 銀 ・ ・ ・|三\r
| ・ 龍 ・ ・ ・ ・ ・ ・ ・|四\r
| 桂vと 銀 ・ ・ ・ ・ ・ ・|五\r
| ・ 桂 ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七角打    \r
   2 ６二飛打    \r
   3 ８三桂(95)  \r
   4 ８一玉(71)  \r
   5 ９一桂成(83)\r
   6 同　玉(81)  \r
   7 ８二角打    \r
   8 ８一玉(91)  \r
   9 ７一角成(82)\r
  10 同　玉(81)  \r
  11 ６二角成(17)\r
  12 同　玉(71)  \r
  13 ６三飛打    \r
  14 ７一玉(62)  \r
  15 ８二龍(84)  \r
  16 同　玉(71)  \r
  17 ７四桂(86)  \r
  18 ７一玉(82)  \r
  19 ６一飛成(63)\r
  20 同　玉(71)  \r
  21 ６二金打    \r
  22 詰み        \r
まで21手詰\r
`,B1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0001\r
作者：白井康彦    \r
発表誌：将棋ジャーナル\r
発表年月：1980年12月\r
手数：19\r
受賞：将棋ジャーナル賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金　銀二　桂　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂v香|一\r
| ・ ・ ・ ・ ・ 金 ・ ・v玉|二\r
| ・ ・ ・ ・ ・ 金 ・v歩v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ 角 ・ ・ ・v金|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四桂打    \r
   2 同　歩(23)  \r
   3 ３四角打    \r
   4 ２三桂打    \r
   5 ２二角成(55)\r
   6 同　玉(12)  \r
   7 ３三金(43)  \r
   8 同　桂(21)  \r
   9 ３二金(42)  \r
  10 同　玉(22)  \r
  11 ４三銀打    \r
  12 ２二玉(32)  \r
  13 ２三角成(34)\r
  14 同　玉(22)  \r
  15 ３五桂打    \r
  16 ２二玉(23)  \r
  17 ２三銀打    \r
  18 ２一玉(22)  \r
  19 ３二銀成(43)\r
  20 詰み        \r
まで19手詰\r
`,E1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0562\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1983年3月\r
手数：21\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀四　桂四　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ 龍v歩 金 ・v歩|六\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|七\r
| ・ ・ ・ ・ ・ 馬 ・ ・v香|八\r
| ・ ・ ・ ・ ・v角 ・v金 ・|九\r
+---------------------------+\r
先手の持駒：飛　金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２六馬(48)  \r
   2 ２八玉(17)  \r
   3 ３七馬(26)  \r
   4 ３九玉(28)  \r
   5 ４八馬(37)  \r
   6 ２八玉(39)  \r
   7 ３九金打    \r
   8 同　金(29)  \r
   9 ３七馬(48)  \r
  10 １七玉(28)  \r
  11 ２六馬(37)  \r
  12 ２八玉(17)  \r
  13 ５八龍(56)  \r
  14 ３八角成(49)\r
  15 ３七馬(26)  \r
  16 １七玉(28)  \r
  17 ２七飛打    \r
  18 同　馬(38)  \r
  19 ２八龍(58)  \r
  20 同　馬(27)  \r
  21 ２六馬(37)  \r
  22 詰み        \r
まで21手詰\r
`,A1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0279\r
作品名：日の出    \r
作者：岡田敏      \r
発表誌：詰将棋パラダイス\r
発表年月：1986年7月\r
手数：19\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　桂　香三　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ 角|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・v銀 銀 ・ ・|三\r
| ・ ・ ・ ・vと 龍 ・ ・ ・|四\r
| ・ ・ ・ ・vと ・ 角 桂 ・|五\r
|vと 桂 ・ ・ 龍 歩 と ・ ・|六\r
| ・ ・ 銀 ・ ・v金 金 ・ ・|七\r
| ・ ・v玉 ・ ・ ・v歩vと 香|八\r
| ・ ・ ・ ・ 金 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６七龍(56)  \r
   2 同　玉(78)  \r
   3 ６八金(59)  \r
   4 ５六玉(67)  \r
   5 ４七金(37)  \r
   6 同　玉(56)  \r
   7 ５八銀打    \r
   8 ３六玉(47)  \r
   9 ４八桂打    \r
  10 ３七玉(36)  \r
  11 ２六角(35)  \r
  12 同　玉(37)  \r
  13 ３五龍(44)  \r
  14 同　玉(26)  \r
  15 ３六金打    \r
  16 ３四玉(35)  \r
  17 ２四銀成(33)\r
  18 同　玉(34)  \r
  19 ３三角成(11)\r
  20 詰み        \r
まで19手詰\r
`,L1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0280\r
作品名：日没      \r
作者：岡田敏      \r
発表誌：詰将棋パラダイス\r
発表年月：1986年7月\r
手数：21\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀　桂　香四　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v玉 ・ ・ ・ ・|一\r
| ・ ・ ・v歩 ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・v歩 ・ ・v歩 と|三\r
| ・ ・ と ・ ・ 桂 ・ ・ ・|四\r
| 龍v桂 桂 ・ ・ ・ ・ 金 ・|五\r
| ・ 金 ・ 歩 ・ 銀 ・ ・ ・|六\r
| 角 ・ ・ ・ ・ 銀 ・ 龍 ・|七\r
| ・ ・ ・vとv馬 ・ ・ ・ ・|八\r
| ・vと ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６三桂(75)  \r
   2 同　歩(62)  \r
   3 ５二銀打    \r
   4 ４二玉(51)  \r
   5 ４三銀成(52)\r
   6 同　玉(42)  \r
   7 ３四金(25)  \r
   8 ５四玉(43)  \r
   9 ４五銀(46)  \r
  10 ５五玉(54)  \r
  11 ８五龍(95)  \r
  12 同　馬(58)  \r
  13 ５六銀(47)  \r
  14 ６六玉(55)  \r
  15 ７八桂打    \r
  16 同　と(68)  \r
  17 ７六金(86)  \r
  18 同　馬(85)  \r
  19 ７五角(97)  \r
  20 同　馬(76)  \r
  21 ６七龍(27)  \r
  22 詰み        \r
まで21手詰\r
`,I1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0608\r
作者：駒場和男    \r
発表誌：近代将棋\r
発表年月：1987年10月\r
手数：21\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀三　桂二　香　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v金 ・ ・v桂 ・|一\r
| ・ ・ ・ ・v香v玉 ・v香 銀|二\r
| ・ ・ ・ ・v歩 ・v歩 と ・|三\r
| ・ ・ ・ ・ ・v歩 ・ ・v角|四\r
| ・ ・ ・v馬 ・ ・ と ・ ・|五\r
| ・ ・ ・ ・ ・ 香 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ 飛 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四桂打    \r
   2 同　歩(33)  \r
   3 ４四香(46)  \r
   4 ４三桂打    \r
   5 同　香成(44)\r
   6 ３一玉(42)  \r
   7 ３二歩打    \r
   8 ４一玉(31)  \r
   9 ３三桂打    \r
  10 同　桂(21)  \r
  11 同　成香(43)\r
  12 ４七角成(14)\r
  13 ３一歩成(32)\r
  14 同　玉(41)  \r
  15 ２二成香(33)\r
  16 ４一玉(31)  \r
  17 ３三桂打    \r
  18 ４二玉(41)  \r
  19 ４四香打    \r
  20 ４三歩打    \r
  21 ３二と(23)  \r
  22 詰み        \r
まで21手詰\r
`,O1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0027\r
作者：若島正      \r
発表誌：将棋ジャーナル\r
発表年月：1989年3月\r
手数：21\r
受賞：将棋ジャーナル賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀四　桂四　香　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|五\r
| ・ ・ ・ ・ ・ 馬 ・v歩 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|七\r
| ・ ・ ・ ・ ・v飛 ・ ・ ・|八\r
| ・ ・ ・ ・ ・ 馬 香 香 ・|九\r
+---------------------------+\r
先手の持駒：飛　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２七飛打    \r
   2 １八玉(17)  \r
   3 ２八飛(27)  \r
   4 １七玉(18)  \r
   5 ２七馬(49)  \r
   6 同　歩(26)  \r
   7 ３五馬(46)  \r
   8 １六玉(17)  \r
   9 ３四馬(35)  \r
  10 ２五桂打    \r
  11 １七歩打    \r
  12 同　玉(16)  \r
  13 ３五馬(34)  \r
  14 １六玉(17)  \r
  15 ２六馬(35)  \r
  16 同　玉(16)  \r
  17 ２七飛(28)  \r
  18 １六玉(26)  \r
  19 １七歩打    \r
  20 同　桂成(25)\r
  21 ２六飛(27)  \r
  22 詰み        \r
まで21手詰\r
`,M1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0630\r
作者：桑原辰雄    \r
発表誌：近代将棋\r
発表年月：1989年10月\r
手数：19\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀三　桂　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ 馬 馬 ・v桂v香|一\r
| ・ ・ ・ ・ ・ ・v金v玉 ・|二\r
| ・ ・ ・ ・ ・v銀v歩v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 桂 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １四桂打    \r
   2 同　香(11)  \r
   3 １三金打    \r
   4 同　桂(21)  \r
   5 ３一馬(41)  \r
   6 同　玉(22)  \r
   7 ４一飛打    \r
   8 ２二玉(31)  \r
   9 ３三馬(51)  \r
  10 同　金(32)  \r
  11 ４二飛成(41)\r
  12 ３二金(33)  \r
  13 ３三桂成(25)\r
  14 １一玉(22)  \r
  15 １二歩打    \r
  16 同　玉(11)  \r
  17 ３二龍(42)  \r
  18 同　銀(43)  \r
  19 ２二金打    \r
  20 詰み        \r
まで19手詰\r
`,R1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0641\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1991年7月\r
手数：21\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀二　桂四　香四　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 龍 角 ・|四\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ 銀 ・v銀|七\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|八\r
| ・ ・ ・ ・ ・ 角 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２七角(49)  \r
   2 １九玉(18)  \r
   3 ２八銀(37)  \r
   4 同　銀成(17)\r
   5 １八金打    \r
   6 同　成銀(28)\r
   7 ２九金打    \r
   8 同　成銀(18)\r
   9 ４六角(24)  \r
  10 ３七銀打    \r
  11 同　角(46)  \r
  12 ２八成銀(29)\r
  13 同　角(37)  \r
  14 同　玉(19)  \r
  15 ３八龍(34)  \r
  16 １七玉(28)  \r
  17 ２六銀打    \r
  18 同　玉(17)  \r
  19 ３五銀打    \r
  20 １五玉(26)  \r
  21 １八龍(38)  \r
  22 詰み        \r
まで21手詰\r
`,K1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0655\r
作者：金成憲雄    \r
発表誌：近代将棋\r
発表年月：1993年8月\r
手数：19\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀二　桂三　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 馬 ・ ・|六\r
| ・ ・ ・ ・ 馬 ・ ・ ・v玉|七\r
| ・ ・ ・ ・ ・ ・v飛 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １八銀打    \r
   2 同　飛(38)  \r
   3 ３九馬(57)  \r
   4 ２八飛(18)  \r
   5 ２六銀打    \r
   6 １六玉(17)  \r
   7 ２五馬(36)  \r
   8 ２七玉(16)  \r
   9 １九桂打    \r
  10 １八玉(27)  \r
  11 ３六馬(25)  \r
  12 １九玉(18)  \r
  13 ２八馬(39)  \r
  14 同　玉(19)  \r
  15 ３七馬(36)  \r
  16 ３九玉(28)  \r
  17 ３八飛打    \r
  18 ４九玉(39)  \r
  19 ４八馬(37)  \r
  20 詰み        \r
まで19手詰\r
`,T1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0674\r
作品名：すり替え\r
作者：山田修司    \r
発表誌：近代将棋\r
発表年月：1995年12月\r
手数：21\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀二　桂三　香四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 角v角 ・v桂|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・v銀 飛 銀 ・ ・|三\r
| ・ ・ ・ ・ ・ ・v歩 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二銀成(33)\r
   2 同　玉(12)  \r
   3 ３三金打    \r
   4 １二玉(22)  \r
   5 １三歩打    \r
   6 同　玉(12)  \r
   7 ３四金(33)  \r
   8 １二玉(13)  \r
   9 ２三飛成(43)\r
  10 同　桂(11)  \r
  11 同　金(34)  \r
  12 ２一玉(12)  \r
  13 ３二角成(41)\r
  14 １一玉(21)  \r
  15 ３三馬(32)  \r
  16 ２一玉(11)  \r
  17 １一馬(33)  \r
  18 同　玉(21)  \r
  19 １二歩打    \r
  20 ２一玉(11)  \r
  21 ３三桂打    \r
  22 詰み        \r
まで21手詰\r
`,F1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0676\r
作者：市島啓樹    \r
発表誌：近代将棋\r
発表年月：1996年3月\r
手数：19\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀二　桂三　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|三\r
| ・ ・ ・ 飛 ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 銀v玉 ・ ・|五\r
| ・ ・ ・ ・ ・v銀 ・ 桂 ・|六\r
| ・ ・ ・ ・ ・ ・vと 歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三飛打    \r
   2 ２五玉(35)  \r
   3 ３四角打    \r
   4 ３五玉(25)  \r
   5 １二角(34)  \r
   6 ２五玉(35)  \r
   7 ３六銀(45)  \r
   8 同　と(37)  \r
   9 ３四角(12)  \r
  10 １五玉(25)  \r
  11 １三飛(33)  \r
  12 同　香(11)  \r
  13 １六歩打    \r
  14 ２四玉(15)  \r
  15 ４三角成(34)\r
  16 ２三玉(24)  \r
  17 ２四飛(64)  \r
  18 同　玉(23)  \r
  19 ３四馬(43)  \r
  20 詰み        \r
まで19手詰\r
`,D1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0400\r
作者：原亜津夫    \r
発表誌：詰将棋パラダイス\r
発表年月：1998年5月\r
手数：21\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀三　桂四　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v飛 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ 角 ・v歩|三\r
| ・ ・ ・ ・ ・v金 ・ 歩v玉|四\r
| ・ ・ ・ ・ ・ 龍 ・v香 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|六\r
| ・ ・ ・ ・ ・ 歩 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ 銀|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二角打    \r
   2 ２三飛(21)  \r
   3 同　角成(32)\r
   4 １五玉(14)  \r
   5 １四馬(23)  \r
   6 同　玉(15)  \r
   7 １五飛打    \r
   8 同　玉(14)  \r
   9 ２三歩成(24)\r
  10 ２六玉(15)  \r
  11 ４六龍(45)  \r
  12 ３六飛打    \r
  13 ４四角成(33)\r
  14 １五玉(26)  \r
  15 ３三馬(44)  \r
  16 同　飛(36)  \r
  17 １六龍(46)  \r
  18 同　玉(15)  \r
  19 １七金打    \r
  20 １五玉(16)  \r
  21 １六香打    \r
  22 詰み        \r
まで21手詰\r
`,z1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0115\r
作品名：奔龍      \r
作者：中村雅哉    \r
発表誌：詰将棋パラダイス\r
発表年月：2008年3月\r
手数：21\r
受賞：看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系。
手合割：平手　　\r
後手の持駒：金　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・v桂 ・ ・ ・ ・ ・|三\r
| ・ ・v馬v香 と ・v歩 ・ ・|四\r
| ・v銀v歩v玉 ・ 銀 ・ ・ ・|五\r
|v桂 ・ ・ ・ ・ 桂 ・ ・ ・|六\r
| ・ ・v飛 ・ ・v龍 ・ ・ ・|七\r
| ・ 馬 ・ ・ ・ ・ ・ ・ ・|八\r
| 歩 ・ ・ 桂 ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金三　銀二　香二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６七香打    \r
   2 同　龍(47)  \r
   3 ５六銀打    \r
   4 同　龍(67)  \r
   5 ６六香打    \r
   6 同　龍(56)  \r
   7 ７七桂(69)  \r
   8 同　龍(66)  \r
   9 ６七飛打    \r
  10 同　龍(77)  \r
  11 ６六金打    \r
  12 同　龍(67)  \r
  13 ５六銀打    \r
  14 同　龍(66)  \r
  15 ５五と(54)  \r
  16 同　龍(56)  \r
  17 ５六金打    \r
  18 同　龍(55)  \r
  19 ５四銀(45)  \r
  20 同　龍(56)  \r
  21 ６六金打    \r
  22 詰み        \r
まで21手詰\r
`,G1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0171\r
作者：岡田敏      \r
発表誌：詰将棋パラダイス\r
発表年月：1979年6月\r
手数：23\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v龍 ・ 馬 ・ ・ ・|一\r
| ・ ・ ・ ・ 銀v銀 ・ ・ ・|二\r
| ・ 銀 ・v桂 ・ 歩 ・ ・ ・|三\r
| ・ ・ 金 ・ ・ ・ ・ ・ ・|四\r
| ・v角 歩v玉 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・v金 金 ・ ・ ・|六\r
| ・ 金 龍v歩 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７六金(87)  \r
   2 同　角(85)  \r
   3 ６四金(74)  \r
   4 同　玉(65)  \r
   5 ４二馬(41)  \r
   6 ５三桂打    \r
   7 ６六龍(77)  \r
   8 同　金(56)  \r
   9 ７四銀成(83)\r
  10 ６五玉(64)  \r
  11 ５四銀打    \r
  12 同　玉(65)  \r
  13 ６三銀(52)  \r
  14 同　龍(61)  \r
  15 ５五銀打    \r
  16 ６五玉(54)  \r
  17 ５七桂打    \r
  18 同　金(66)  \r
  19 ６六銀(55)  \r
  20 同　玉(65)  \r
  21 ３三馬(42)  \r
  22 ６五玉(66)  \r
  23 ５五馬(33)  \r
  24 詰み        \r
まで23手詰\r
`,H1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0523\r
作者：新ヶ江幸弘  \r
発表誌：近代将棋\r
発表年月：1979年11月\r
手数：23\r
受賞：塚田賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀四　桂四　香三　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ 飛 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ 馬|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ 飛 ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|八\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３七馬(15)  \r
   2 ２八銀打    \r
   3 ４九飛成(43)\r
   4 ２九銀打    \r
   5 同　龍(49)  \r
   6 同　玉(19)  \r
   7 ５九飛(57)  \r
   8 ３九銀打    \r
   9 ３八銀打    \r
  10 １八玉(29)  \r
  11 ２七銀(38)  \r
  12 １九玉(18)  \r
  13 ３九飛(59)  \r
  14 ２九銀打    \r
  15 同　飛(39)  \r
  16 同　玉(19)  \r
  17 ３八銀打    \r
  18 １九玉(29)  \r
  19 ２八馬(37)  \r
  20 同　玉(19)  \r
  21 ３七銀打    \r
  22 １九玉(28)  \r
  23 ２八銀打    \r
  24 詰み        \r
まで23手詰\r
`,U1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0533\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1981年2月\r
手数：23\r
受賞：塚田賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀三　桂三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v歩v玉 ・ ・ ・ ・|一\r
| ・ ・ ・v桂 ・ ・ 歩 ・ ・|二\r
| ・ ・ ・ ・ ・ ・ と ・v角|三\r
| ・ ・ ・ 歩 ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|五\r
| ・ ・ ・v馬 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　香四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５三香打    \r
   2 ５二飛打    \r
   3 同　香成(53)\r
   4 同　玉(51)  \r
   5 ５六香打    \r
   6 同　馬(66)  \r
   7 ５一飛打    \r
   8 同　玉(52)  \r
   9 ５三香打    \r
  10 ５二飛打    \r
  11 ４一飛打    \r
  12 同　玉(51)  \r
  13 ４四香打    \r
  14 ４二銀打    \r
  15 ５二香成(53)\r
  16 同　玉(41)  \r
  17 ５一飛打    \r
  18 同　銀(42)  \r
  19 ４三香成(44)\r
  20 ４一玉(52)  \r
  21 ３一歩成(32)\r
  22 同　角(13)  \r
  23 ３二と(33)  \r
  24 詰み        \r
まで23手詰\r
`,J1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0540\r
作者：伊藤果      \r
発表誌：近代将棋\r
発表年月：1981年8月\r
手数：25\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　金三　桂四　香四　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v金 と ・ ・ ・|一\r
| ・ ・ ・v歩 ・ ・ 歩 ・v玉|二\r
| ・ ・ ・ ・ ・v歩v歩v歩 ・|三\r
| ・ ・ ・ 飛 ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２一銀打    \r
   2 同　玉(12)  \r
   3 ３一歩成(32)\r
   4 ２二玉(21)  \r
   5 １一銀打    \r
   6 同　玉(22)  \r
   7 １二銀打    \r
   8 ２二玉(11)  \r
   9 ２一銀成(12)\r
  10 １二玉(22)  \r
  11 １四飛(64)  \r
  12 １三金打    \r
  13 １一成銀(21)\r
  14 ２二玉(12)  \r
  15 １二成銀(11)\r
  16 同　金(13)  \r
  17 ３二と(31)  \r
  18 同　玉(22)  \r
  19 １二飛成(14)\r
  20 ４一玉(32)  \r
  21 ５二銀打    \r
  22 同　金(51)  \r
  23 ３二金打    \r
  24 ５一玉(41)  \r
  25 ２一龍(12)  \r
  26 詰み        \r
まで25手詰\r
`,W1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0583\r
作者：駒三十九    \r
発表誌：近代将棋\r
発表年月：1985年3月\r
手数：25\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀三　桂　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ と ・v歩v玉|一\r
| ・ ・ ・ ・ ・ 歩 ・v角 ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ 飛 ・|四\r
| ・ ・ ・ ・ ・ ・ 龍 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 銀 ・v歩|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二飛成(24)\r
   2 同　歩(21)  \r
   3 ２三桂打    \r
   4 同　歩(22)  \r
   5 ４四角打    \r
   6 ３三桂打    \r
   7 同　角成(44)\r
   8 ２二桂打    \r
   9 同　馬(33)  \r
  10 同　玉(11)  \r
  11 １四桂打    \r
  12 １二玉(22)  \r
  13 ２四桂打    \r
  14 同　歩(23)  \r
  15 ３二龍(35)  \r
  16 １三玉(12)  \r
  17 ２五桂打    \r
  18 同　歩(24)  \r
  19 ２二龍(32)  \r
  20 １四玉(13)  \r
  21 ２六桂打    \r
  22 同　歩(25)  \r
  23 ２五銀(36)  \r
  24 １五玉(14)  \r
  25 ２四龍(22)  \r
  26 詰み        \r
まで25手詰\r
`,q1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0588\r
作者：山村浩太郎  \r
発表誌：近代将棋\r
発表年月：1986年4月\r
手数：25\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀三　桂三　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂v香|一\r
| ・ ・ ・ ・v歩 ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 歩v角 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 角 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ 香 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三歩打    \r
   2 同　桂(21)  \r
   3 ４二飛打    \r
   4 同　角(24)  \r
   5 ２二金打    \r
   6 同　玉(12)  \r
   7 １四角(25)  \r
   8 ２五桂(13)  \r
   9 同　香(26)  \r
  10 ２四角(42)  \r
  11 同　香(25)  \r
  12 ３一玉(22)  \r
  13 ６四角打    \r
  14 ５三銀打    \r
  15 ２二香成(24)\r
  16 ４二玉(31)  \r
  17 ３二角成(14)\r
  18 ５一玉(42)  \r
  19 ７三角成(64)\r
  20 ６二金打    \r
  21 ６三桂打    \r
  22 ６一玉(51)  \r
  23 ７二銀打    \r
  24 同　金(62)  \r
  25 ５一馬(73)  \r
  26 詰み        \r
まで25手詰\r
`,Y1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0591\r
作者：若島正      \r
発表誌：近代将棋\r
発表年月：1986年11月\r
手数：23\r
受賞：塚田賞、看寿賞\r
備考：8件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀四　桂三　香二　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v飛v玉v香 ・|一\r
| ・ ・ ・ ・v金 ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ 角 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ 角|四\r
| ・ ・ ・ ・ ・ ・ 香 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ５五角成(33)\r
   2 ３三飛打    \r
   3 同　香(35)  \r
   4 ２二玉(31)  \r
   5 ３二香成(33)\r
   6 １三玉(22)  \r
   7 ２三角成(14)\r
   8 同　香(21)  \r
   9 １五飛打    \r
  10 １四角打    \r
  11 ２二馬(55)  \r
  12 ２四玉(13)  \r
  13 ３三馬(22)  \r
  14 １三玉(24)  \r
  15 ２五桂(37)  \r
  16 同　香(23)  \r
  17 １四飛(15)  \r
  18 同　玉(13)  \r
  19 ２三角打    \r
  20 １三玉(14)  \r
  21 １二角成(23)\r
  22 同　玉(13)  \r
  23 ２二馬(33)  \r
  24 詰み        \r
まで23手詰\r
`,Z1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0298\r
作者：若島正      \r
発表誌：詰将棋パラダイス\r
発表年月：1988年5月\r
手数：25\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金二　銀二　桂三　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 馬 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ 金|六\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|七\r
| ・ ・ ・ 飛 銀 ・ ・ ・ 桂|八\r
| ・ ・ ・ ・ ・ 金 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七金(16)  \r
   2 同　玉(27)  \r
   3 ３五馬(34)  \r
   4 ２八玉(17)  \r
   5 ４七銀(58)  \r
   6 ２九玉(28)  \r
   7 ３八銀(47)  \r
   8 １九玉(29)  \r
   9 ２八銀打    \r
  10 同　玉(19)  \r
  11 ２九銀(38)  \r
  12 同　玉(28)  \r
  13 ３九金(49)  \r
  14 同　玉(29)  \r
  15 ５七馬(35)  \r
  16 ４八歩打    \r
  17 同　馬(57)  \r
  18 ２八玉(39)  \r
  19 ２九歩打    \r
  20 １八玉(28)  \r
  21 ３七馬(48)  \r
  22 １七玉(18)  \r
  23 １八飛(68)  \r
  24 同　玉(17)  \r
  25 ２八馬(37)  \r
  26 詰み        \r
まで25手詰\r
`,X1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0635\r
作者：明石六郎    \r
発表誌：近代将棋\r
発表年月：1990年9月\r
手数：25\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　桂　香四　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ 馬 ・ ・ ・ ・|二\r
| ・ ・ ・ ・v歩 馬 ・ ・ ・|三\r
| ・ ・ ・ ・ ・v桂 ・ ・ 銀|四\r
| ・ ・ ・ ・ ・ ・ 銀 とv歩|五\r
| ・ ・ ・ ・ ・ ・ 銀 と ・|六\r
| ・ ・ ・ ・ ・vと ・ ・v玉|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・v飛 銀|九\r
+---------------------------+\r
先手の持駒：桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２七と(26)  \r
   2 同　飛(29)  \r
   3 ２九桂打    \r
   4 同　飛(27)  \r
   5 ２六銀(35)  \r
   6 同　飛(29)  \r
   7 ２九桂打    \r
   8 同　飛(26)  \r
   9 ４四馬(43)  \r
  10 ２六桂打    \r
  11 同　馬(44)  \r
  12 同　飛(29)  \r
  13 ２九桂打    \r
  14 同　飛(26)  \r
  15 ５三馬(52)  \r
  16 １六玉(17)  \r
  17 ２六と(25)  \r
  18 同　飛(29)  \r
  19 １七歩打    \r
  20 同　玉(16)  \r
  21 ２九桂打    \r
  22 １六玉(17)  \r
  23 ２五銀(14)  \r
  24 同　飛(26)  \r
  25 １七馬(53)  \r
  26 詰み        \r
まで25手詰\r
`,Q1=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0357\r
作者：波崎黒生    \r
発表誌：詰将棋パラダイス\r
発表年月：1994年7月\r
手数：23\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金三　銀二　桂三　香四　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ 銀 ・ ・|三\r
| ・ ・ ・ 歩vと ・ と ・ ・|四\r
| ・ と ・ 桂v玉v歩v龍 ・ ・|五\r
| ・ ・ ・ 飛 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・v歩 ・ ・|七\r
| ・ ・ ・ 金 ・ 歩 ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六銀打    \r
   2 ４六玉(55)  \r
   3 ６七銀(56)  \r
   4 ５五玉(46)  \r
   5 ５六飛(66)  \r
   6 ６五玉(55)  \r
   7 ６六飛(56)  \r
   8 ５五玉(65)  \r
   9 ５六銀(67)  \r
  10 ４六玉(55)  \r
  11 ６五銀(56)  \r
  12 ５五玉(46)  \r
  13 ４四銀(33)  \r
  14 同　龍(35)  \r
  15 ５六銀(65)  \r
  16 ４六玉(55)  \r
  17 ６七銀(56)  \r
  18 ５五玉(46)  \r
  19 ４六角打    \r
  20 同　歩(45)  \r
  21 ５六銀(67)  \r
  22 ６六玉(55)  \r
  23 ６七金(68)  \r
  24 詰み        \r
まで23手詰\r
`,n2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0365\r
作者：若島正      \r
発表誌：詰将棋パラダイス\r
発表年月：1995年8月\r
手数：23\r
受賞：半期賞、看寿賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金三　銀三　桂二　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v歩 ・ ・v歩 ・ ・ ・|一\r
| ・ ・ ・ ・ ・v玉 ・ ・ ・|二\r
| ・ ・ 龍 ・ ・ ・ ・v銀 ・|三\r
| ・ ・ ・ ・v歩 ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 馬 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|六\r
| ・ ・ ・ ・ ・v龍 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５二金打    \r
   2 同　玉(42)  \r
   3 ３四馬(45)  \r
   4 ４三金打    \r
   5 ４四桂打    \r
   6 ５一玉(52)  \r
   7 ３三馬(34)  \r
   8 ４二金(43)  \r
   9 ５三龍(73)  \r
  10 ６一玉(51)  \r
  11 ６三龍(53)  \r
  12 ６二金打    \r
  13 ４三馬(33)  \r
  14 ５一玉(61)  \r
  15 ４二馬(43)  \r
  16 同　玉(51)  \r
  17 ６二龍(63)  \r
  18 ４三玉(42)  \r
  19 ３三金打    \r
  20 同　玉(43)  \r
  21 ２四金打    \r
  22 同　銀(23)  \r
  23 ３二龍(62)  \r
  24 詰み        \r
まで23手詰\r
`,r2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0386\r
作者：谷川浩司    \r
発表誌：詰将棋パラダイス\r
発表年月：1997年2月\r
手数：25\r
受賞：半期賞、看寿賞\r
備考：10件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　桂四　香四　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|二\r
| ・ ・ ・ ・v歩v歩v玉 ・ ・|三\r
| ・ ・ ・ ・ ・ ・v歩 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|五\r
| ・ ・ ・ ・ ・ 歩 歩 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ 歩 ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金四　銀四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４二銀打    \r
   2 同　玉(33)  \r
   3 ５一銀打    \r
   4 ３二玉(42)  \r
   5 ４一銀打    \r
   6 ２三玉(32)  \r
   7 ３三金打    \r
   8 同　玉(23)  \r
   9 ４二銀(51)  \r
  10 ２四玉(33)  \r
  11 ２三金打    \r
  12 同　玉(24)  \r
  13 ３二銀(41)  \r
  14 １三玉(23)  \r
  15 ２二銀打    \r
  16 ２四玉(13)  \r
  17 ３三銀(42)  \r
  18 １五玉(24)  \r
  19 １四金打    \r
  20 同　玉(15)  \r
  21 ２三銀(32)  \r
  22 １五玉(14)  \r
  23 ２四銀(33)  \r
  24 同　玉(15)  \r
  25 １四金打    \r
  26 詰み        \r
まで25手詰\r
`,i2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0391\r
作品名：くもの糸\r
作者：斎藤吉雄    \r
発表誌：詰将棋パラダイス\r
発表年月：1997年11月\r
手数：25\r
受賞：半期賞、看寿賞\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀三　桂四　香二　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ 龍 ・ ・ とvと ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ 銀 馬|六\r
| ・ ・ ・ ・ ・v玉v香vと ・|七\r
| ・ ・ ・v角 ・ ・ ・ ・ 飛|八\r
| ・ ・ ・ ・ 香 ・ ・ 歩 ・|九\r
+---------------------------+\r
先手の持駒：歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四龍(64)  \r
   2 ４五桂打    \r
   3 ４八歩打    \r
   4 ４六玉(47)  \r
   5 ５五龍(44)  \r
   6 ３六玉(46)  \r
   7 ５六龍(55)  \r
   8 ４六角成(68)\r
   9 ２五銀(26)  \r
  10 同　と(24)  \r
  11 ４六龍(56)  \r
  12 同　玉(36)  \r
  13 １三角打    \r
  14 ２四桂打    \r
  15 ４七歩(48)  \r
  16 同　玉(46)  \r
  17 ２五馬(16)  \r
  18 ３六桂(24)  \r
  19 ４六角成(13)\r
  20 同　玉(47)  \r
  21 ４八飛(18)  \r
  22 同　桂成(36)\r
  23 ４七歩打    \r
  24 同　成桂(48)\r
  25 ３五馬(25)  \r
  26 詰み        \r
まで25手詰\r
`,e2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0410\r
作品名：連捨\r
作者：山田修司    \r
発表誌：詰将棋パラダイス\r
発表年月：1999年5月\r
手数：25\r
受賞：半期賞、打歩詰大賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金三　銀　香二　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・v銀 ・ ・ ・ ・ ・ ・|一\r
|v桂 歩v歩 ・ ・ ・ ・ ・ ・|二\r
| 桂 香v玉v歩 角 ・ ・ ・ ・|三\r
|v歩v金 ・ ・v歩 ・ ・ ・ ・|四\r
| ・ ・ ・ 銀 ・v歩 ・ ・ ・|五\r
| ・v歩 ・ ・ ・ ・ ・ ・ ・|六\r
| 歩 ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・vと ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８五桂打    \r
   2 ８三玉(73)  \r
   3 ７四銀打    \r
   4 同　金(84)  \r
   5 同　銀(65)  \r
   6 ８四玉(83)  \r
   7 ３九角打    \r
   8 ５七と(58)  \r
   9 同　角(39)  \r
  10 ７四玉(84)  \r
  11 ７五角成(53)\r
  12 ８三玉(74)  \r
  13 ７四金打    \r
  14 ８二玉(83)  \r
  15 ４六角(57)  \r
  16 同　歩(45)  \r
  17 ６四馬(75)  \r
  18 同　歩(63)  \r
  19 ８一桂成(93)\r
  20 同　玉(82)  \r
  21 ９三桂(85)  \r
  22 ８二玉(81)  \r
  23 ８三歩打    \r
  24 ９三玉(82)  \r
  25 ８五桂打    \r
  26 詰み        \r
まで25手詰\r
`,v2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0414\r
作者：相馬康幸    \r
発表誌：詰将棋パラダイス\r
発表年月：1999年12月\r
手数：25\r
受賞：看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金四　銀二　香　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v玉v桂 ・|一\r
| ・ ・ ・ ・v銀 ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ 馬 ・v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v桂|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　桂二　香三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３九香打    \r
   2 ２二玉(31)  \r
   3 ４四馬(43)  \r
   4 ３三銀打    \r
   5 ３四桂打    \r
   6 １二玉(22)  \r
   7 １三香打    \r
   8 同　桂(21)  \r
   9 ２四桂打    \r
  10 同　歩(23)  \r
  11 ２二桂成(34)\r
  12 同　銀(33)  \r
  13 同　馬(44)  \r
  14 同　玉(12)  \r
  15 ２三香打    \r
  16 同　玉(22)  \r
  17 ３二銀打    \r
  18 １二玉(23)  \r
  19 ２三銀打    \r
  20 １一玉(12)  \r
  21 ２一銀成(32)\r
  22 同　玉(11)  \r
  23 ３二香成(39)\r
  24 １一玉(21)  \r
  25 ２二成香(32)\r
  26 詰み        \r
まで25手詰\r
`,t2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0090\r
作者：有吉澄男    \r
発表誌：詰将棋パラダイス\r
発表年月：2005年10月\r
手数：25\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀三　桂二　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・v桂 ・ ・ ・ ・ ・|二\r
| ・ ・ 飛 銀 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ 歩v龍v金 ・ ・ ・|四\r
| ・ ・ 角 ・v玉 ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 金 ・ ・|六\r
| ・ ・ ・ 香 ・v角 ・ ・ ・|七\r
| ・ ・ ・ 桂 ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六角(75)  \r
   2 ６四玉(55)  \r
   3 ８四角(66)  \r
   4 ６五龍(54)  \r
   5 同　香(67)  \r
   6 同　角成(47)\r
   7 ５四銀成(63)\r
   8 同　馬(65)  \r
   9 ６六飛打    \r
  10 ６五馬(54)  \r
  11 同　飛(66)  \r
  12 同　玉(64)  \r
  13 ７六角打    \r
  14 ６四玉(65)  \r
  15 ５六桂(68)  \r
  16 ５五玉(64)  \r
  17 ５三飛成(73)\r
  18 ５四金(44)  \r
  19 同　龍(53)  \r
  20 同　桂(62)  \r
  21 ６六金打    \r
  22 同　桂(54)  \r
  23 ７三角成(84)\r
  24 ５六玉(55)  \r
  25 ４六馬(73)  \r
  26 詰み        \r
まで25手詰\r
`,o2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0139\r
作者：小西真人    \r
発表誌：詰将棋パラダイス\r
発表年月：1977年2月\r
手数：27\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀二　桂四　香　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ 歩v歩 ・ ・ 角v香|五\r
|v香 ・ ・ ・ ・vとvとv歩 馬|六\r
| ・ ・ ・ ・v香 ・ 金 ・ 銀|七\r
| 飛 ・ 銀 ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９九飛打    \r
   2 １八玉(19)  \r
   3 ３六角(25)  \r
   4 同　と(46)  \r
   5 ８九銀(78)  \r
   6 ５八角打    \r
   7 同　飛(98)  \r
   8 同　香成(57)\r
   9 １九歩打    \r
  10 同　玉(18)  \r
  11 ９八銀(89)  \r
  12 １八玉(19)  \r
  13 ２九角打    \r
  14 １九玉(18)  \r
  15 ４七角(29)  \r
  16 ４九飛打    \r
  17 同　飛(99)  \r
  18 同　成香(58)\r
  19 ２八銀(17)  \r
  20 同　玉(19)  \r
  21 ３八金(37)  \r
  22 １九玉(28)  \r
  23 ２九飛打    \r
  24 同　玉(19)  \r
  25 ３九金(38)  \r
  26 同　玉(29)  \r
  27 ３八馬(16)  \r
  28 詰み        \r
まで27手詰\r
`,s2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0511\r
作者：天地道人    \r
発表誌：近代将棋\r
発表年月：1978年9月\r
手数：27\r
受賞：塚田賞\r
備考：4件登録\r
解説：盘面棋子极少，几乎每一枚棋子都承担明确的功能；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　金三　銀二　桂四　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ 銀 ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|三\r
| ・ ・ ・ ・ ・ ・v歩 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　銀　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２九香打    \r
   2 ２六桂打    \r
   3 同　香(29)  \r
   4 ２五桂打    \r
   5 同　香(26)  \r
   6 １四玉(23)  \r
   7 １六飛打    \r
   8 ２五玉(14)  \r
   9 ２六金打    \r
  10 ２四玉(25)  \r
  11 ３六桂打    \r
  12 ２三玉(24)  \r
  13 １三飛成(16)\r
  14 同　玉(23)  \r
  15 ２五桂打    \r
  16 １四玉(13)  \r
  17 １五銀打    \r
  18 ２三玉(14)  \r
  19 ３三銀成(42)\r
  20 １二玉(23)  \r
  21 １三桂成(25)\r
  22 同　玉(12)  \r
  23 ２四銀(15)  \r
  24 １二玉(13)  \r
  25 ２三銀成(24)\r
  26 １一玉(12)  \r
  27 ２二成銀(23)\r
  28 詰み        \r
まで27手詰\r
`,a2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0538\r
作者：若島正      \r
発表誌：近代将棋\r
発表年月：1981年7月\r
手数：27\r
受賞：塚田賞、看寿賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　銀四　桂三　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ 馬 ・ ・v玉 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ 金 香 金 ・ ・|五\r
| ・ ・ 歩v金 ・ 金 角 ・ ・|六\r
| ・ ・ ・ ・ 桂 飛 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ５四金(55)  \r
   2 ６二玉(53)  \r
   3 ６三金(54)  \r
   4 同　玉(62)  \r
   5 ４三香成(45)\r
   6 ４五桂打    \r
   7 同　角(36)  \r
   8 ６四玉(63)  \r
   9 ５五金(46)  \r
  10 同　玉(64)  \r
  11 ６七桂打    \r
  12 ６四玉(55)  \r
  13 ６三角成(45)\r
  14 同　玉(64)  \r
  15 ５五桂(67)  \r
  16 ６四玉(63)  \r
  17 ４四飛(47)  \r
  18 ５四桂打    \r
  19 同　飛(44)  \r
  20 同　玉(64)  \r
  21 ４五金(35)  \r
  22 ６四玉(54)  \r
  23 ５六桂打    \r
  24 同　金(66)  \r
  25 ５四金(45)  \r
  26 同　玉(64)  \r
  27 ６五馬(83)  \r
  28 詰み        \r
まで27手詰\r
`,u2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0545\r
作者：柳田明      \r
発表誌：近代将棋\r
発表年月：1981年11月\r
手数：29\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀四　桂二　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・v香 ・v香 と|二\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|三\r
| ・ ・ ・ ・ 桂 と ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 角 ・v玉 ・|五\r
| ・ ・ ・ ・ 飛 ・ ・ ・ ・|六\r
| ・ ・ ・ ・ 香 ・ 角 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四角(45)  \r
   2 ３五玉(25)  \r
   3 ２六角(37)  \r
   4 ２四玉(35)  \r
   5 ３五角(26)  \r
   6 同　玉(24)  \r
   7 ４五と(44)  \r
   8 同　香(42)  \r
   9 ３七香打    \r
  10 ２四玉(35)  \r
  11 ２六飛(56)  \r
  12 １四玉(24)  \r
  13 １三と(12)  \r
  14 同　玉(14)  \r
  15 ２二飛成(26)\r
  16 同　玉(13)  \r
  17 ２五香打    \r
  18 ３三玉(22)  \r
  19 ２三香成(25)\r
  20 ４四玉(33)  \r
  21 ４三角成(34)\r
  22 同　玉(44)  \r
  23 ４二桂成(54)\r
  24 同　玉(43)  \r
  25 ３二成香(23)\r
  26 ４三玉(42)  \r
  27 ３三成香(32)\r
  28 ４四玉(43)  \r
  29 ３四成香(33)\r
  30 詰み        \r
まで29手詰\r
`,_2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0243\r
作者：伊藤正      \r
発表誌：詰将棋パラダイス\r
発表年月：1983年1月\r
手数：29\r
受賞：半期賞、看寿賞\r
備考：9件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀四　桂二　香四　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ と ・v歩|三\r
| ・ ・ ・ ・ ・v角 龍v歩v玉|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・v桂 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ 角 金vと|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　歩六　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三龍(34)  \r
   2 ２五玉(14)  \r
   3 ２六歩打    \r
   4 １五玉(25)  \r
   5 １六歩打    \r
   6 同　と(17)  \r
   7 ２五歩(26)  \r
   8 同　玉(15)  \r
   9 ３四龍(23)  \r
  10 １四玉(25)  \r
  11 １五歩打    \r
  12 同　と(16)  \r
  13 ２三龍(34)  \r
  14 ２五玉(14)  \r
  15 ２六歩打    \r
  16 同　と(15)  \r
  17 ３四龍(23)  \r
  18 １四玉(25)  \r
  19 １五歩打    \r
  20 同　玉(14)  \r
  21 １六歩打    \r
  22 １四玉(15)  \r
  23 ２三龍(34)  \r
  24 ２五玉(14)  \r
  25 １七桂打    \r
  26 同　と(26)  \r
  27 ３四龍(23)  \r
  28 １四玉(25)  \r
  29 １五歩(16)  \r
  30 詰み        \r
まで29手詰\r
`,l2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0571\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1983年10月\r
手数：27\r
備考：4件登録、谷川名人祝賀詰\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　銀　香四　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ 馬 ・ ・ ・ ・ 銀v桂 ・|二\r
| ・ 龍 ・ ・ 歩 歩v玉 ・ 歩|三\r
| ・v銀 歩 ・ ・ 桂 ・ ・ ・|四\r
| ・ ・v金 ・ ・ ・vと 銀 ・|五\r
| ・ 金 ・ ・ ・ ・ 金 ・ ・|六\r
| ・ 桂 ・ ・ 角 ・ ・ ・ 桂|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四銀(25)  \r
   2 同　玉(33)  \r
   3 ３五角(57)  \r
   4 ３三玉(24)  \r
   5 ３四歩打    \r
   6 同　桂(22)  \r
   7 ２五桂(17)  \r
   8 ２二玉(33)  \r
   9 １二歩成(13)\r
  10 同　玉(22)  \r
  11 ２三銀成(32)\r
  12 １一玉(12)  \r
  13 ２二成銀(23)\r
  14 同　玉(11)  \r
  15 ３二桂成(44)\r
  16 同　玉(22)  \r
  17 ７二龍(83)  \r
  18 ４三玉(32)  \r
  19 ３三桂成(25)\r
  20 ５四玉(43)  \r
  21 ６三龍(72)  \r
  22 同　玉(54)  \r
  23 ７五桂(87)  \r
  24 同　銀(84)  \r
  25 ７三馬(82)  \r
  26 ５四玉(63)  \r
  27 ５五金打    \r
  28 詰み        \r
まで27手詰\r
`,c2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0592\r
作者：酒井克彦    \r
発表誌：近代将棋\r
発表年月：1987年1月\r
手数：29\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀三　桂二　香四　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v角v桂 ・v玉|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ 銀 龍v飛 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ 歩 ・ 馬|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二歩打    \r
   2 ２一玉(11)  \r
   3 ２二歩打    \r
   4 同　飛(23)  \r
   5 １一歩成(12)\r
   6 同　玉(21)  \r
   7 ２二龍(33)  \r
   8 同　玉(11)  \r
   9 ２三歩打    \r
  10 同　角(41)  \r
  11 ３二銀成(43)\r
  12 同　角(23)  \r
  13 ３四桂打    \r
  14 １三玉(22)  \r
  15 ３三飛打    \r
  16 ２三角(32)  \r
  17 １四歩打    \r
  18 １二玉(13)  \r
  19 ２三飛成(33)\r
  20 同　玉(12)  \r
  21 １三歩成(14)\r
  22 同　玉(23)  \r
  23 ２二角打    \r
  24 １二玉(13)  \r
  25 １一角成(22)\r
  26 同　玉(12)  \r
  27 ３三馬(15)  \r
  28 １二玉(11)  \r
  29 ２二馬(33)  \r
  30 詰み        \r
まで29手詰\r
`,m2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0595\r
作者：北原義治    \r
発表誌：近代将棋\r
発表年月：1987年3月\r
手数：27\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　金四　桂二　香　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・ 銀 ・ ・ ・ ・ ・ ・|一\r
|v歩 ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・v桂 ・ ・ ・ ・ ・ ・ ・|三\r
|v玉v歩 銀 ・ ・ ・ ・ ・ ・|四\r
|v香 ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ 銀 香 ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８五銀打    \r
   2 ９三玉(94)  \r
   3 ８四銀(85)  \r
   4 同　玉(93)  \r
   5 ８五銀(86)  \r
   6 ９三玉(84)  \r
   7 ８四銀(85)  \r
   8 同　玉(93)  \r
   9 ８五歩打    \r
  10 ９四玉(84)  \r
  11 ８六桂打    \r
  12 ９三玉(94)  \r
  13 ８二銀(71)  \r
  14 同　玉(93)  \r
  15 ７三銀(74)  \r
  16 ９三玉(82)  \r
  17 ８四銀(73)  \r
  18 ８二玉(93)  \r
  19 ９四桂(86)  \r
  20 ８一玉(82)  \r
  21 ８二桂成(94)\r
  22 同　玉(81)  \r
  23 ７三銀(84)  \r
  24 ９三玉(82)  \r
  25 ９四歩打    \r
  26 同　玉(93)  \r
  27 ８四銀成(73)\r
  28 詰み        \r
まで27手詰\r
`,d2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0666\r
作者：巨椋鴻之介  \r
発表誌：近代将棋\r
発表年月：1994年12月\r
手数：29\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・v歩 ・ 歩|三\r
| ・ ・ ・ ・ ・v桂 桂 ・ ・|四\r
| ・v角 龍 ・ 香 ・ ・ ・ ・|五\r
| ・ ・ ・ ・ 桂v銀v玉 ・ ・|六\r
| ・ ・ ・ ・ ・ 桂 ・ ・ 馬|七\r
| ・ ・ 金 ・ ・ ・ ・vと ・|八\r
| ・ ・ ・ ・ ・ 金 ・ ・ 龍|九\r
+---------------------------+\r
先手の持駒：銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４五銀打    \r
   2 同　玉(36)  \r
   3 ４四馬(17)  \r
   4 ５六玉(45)  \r
   5 ５七歩打    \r
   6 同　銀(46)  \r
   7 ６七金(78)  \r
   8 同　角成(85)\r
   9 １六龍(19)  \r
  10 ４六銀打    \r
  11 ４五馬(44)  \r
  12 同　玉(56)  \r
  13 ５三香成(55)\r
  14 ５五銀打    \r
  15 同　龍(75)  \r
  16 同　銀(46)  \r
  17 ５四銀打    \r
  18 ３四玉(45)  \r
  19 １四龍(16)  \r
  20 ２四歩打    \r
  21 ２六桂打    \r
  22 ４四玉(34)  \r
  23 ２四龍(14)  \r
  24 ３四馬(67)  \r
  25 ３五龍(24)  \r
  26 同　馬(34)  \r
  27 ４五歩打    \r
  28 同　馬(35)  \r
  29 ４三銀成(54)\r
  30 詰み        \r
まで29手詰\r
`,f2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0682\r
作品名：砂中の金\r
作者：山田修司    \r
発表誌：近代将棋\r
発表年月：1997年5月\r
手数：29\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金二　銀三　桂　香四　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ と ・ と|三\r
| ・ ・ ・ ・ ・ 飛 ・ ・v桂|四\r
| ・ ・ ・ ・ ・v銀 ・v桂 歩|五\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|六\r
| ・ ・ ・ ・ ・vと 歩 ・ 飛|七\r
| ・ ・ ・ ・ ・ ・ 角 ・ 金|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 桂|九\r
+---------------------------+\r
先手の持駒：金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３六金打    \r
   2 同　銀(45)  \r
   3 ２七金(18)  \r
   4 同　銀成(36)\r
   5 同　飛(17)  \r
   6 １六玉(26)  \r
   7 １七銀打    \r
   8 同　桂成(25)\r
   9 ４六飛(44)  \r
  10 同　と(47)  \r
  11 ２三飛成(27)\r
  12 ２七成桂(17)\r
  13 同　龍(23)  \r
  14 １五玉(16)  \r
  15 １四と(13)  \r
  16 同　玉(15)  \r
  17 ４七角(38)  \r
  18 ３六桂打    \r
  19 ２三龍(27)  \r
  20 １五玉(14)  \r
  21 １六歩打    \r
  22 同　玉(15)  \r
  23 ２八桂打    \r
  24 同　桂成(36)\r
  25 ２五龍(23)  \r
  26 １七玉(16)  \r
  27 ２九桂打    \r
  28 １八玉(17)  \r
  29 １六龍(25)  \r
  30 詰み        \r
まで29手詰\r
`,g2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0392\r
作者：市島啓樹    \r
発表誌：詰将棋パラダイス\r
発表年月：1997年11月\r
手数：29\r
受賞：半期賞、打歩詰大賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀二　桂三　香二　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|二\r
| ・ ・ ・v龍 ・v歩 ・ ・ ・|三\r
| ・ ・ ・ ・ ・v玉 ・ 銀v金|四\r
| ・ ・ ・vと ・ ・ 香 金v歩|五\r
| ・ ・ ・v歩 ・ ・ ・ 歩 ・|六\r
| ・ ・ ・ ・ 龍vと ・ ・ ・|七\r
| ・ ・ ・ ・ ・vと ・ ・ ・|八\r
| ・ ・ ・ ・ ・ 桂 ・ 金 香|九\r
+---------------------------+\r
先手の持駒：角二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四金(25)  \r
   2 ４五玉(44)  \r
   3 ４四金(34)  \r
   4 同　玉(45)  \r
   5 ７一角打    \r
   6 ５三龍(63)  \r
   7 同　角成(71)\r
   8 同　銀(42)  \r
   9 ４五飛打    \r
  10 同　玉(44)  \r
  11 ２三角打    \r
  12 ３四飛打    \r
  13 同　角成(23)\r
  14 ３六玉(45)  \r
  15 ３七飛打    \r
  16 ２六玉(36)  \r
  17 １五銀(24)  \r
  18 同　金(14)  \r
  19 ３六飛(37)  \r
  20 同　玉(26)  \r
  21 ３七歩打    \r
  22 ２六玉(36)  \r
  23 ６六龍(57)  \r
  24 同　と(65)  \r
  25 ２七歩打    \r
  26 同　玉(26)  \r
  27 ４五馬(34)  \r
  28 ２六玉(27)  \r
  29 ３六馬(45)  \r
  30 詰み        \r
まで29手詰\r
`,h2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0421\r
作者：伊田勇一    \r
発表誌：詰将棋パラダイス\r
発表年月：2000年11月\r
手数：29\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀　香二　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v桂 ・v金 ・ ・ ・ ・ ・|一\r
|v香v玉v銀 ・ ・ ・ ・ ・ ・|二\r
| ・v歩 ・ 銀v桂 ・ ・ ・ ・|三\r
| ・ ・ ・v歩 ・ ・ ・ ・ ・|四\r
|v歩 角 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ 香 角 桂 ・ ・ ・ ・ ・|六\r
| ・ ・v龍 歩 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７二銀成(63)\r
   2 同　金(61)  \r
   3 ７三銀打    \r
   4 同　金(72)  \r
   5 ７四桂打    \r
   6 同　金(73)  \r
   7 同　桂(66)  \r
   8 ７三玉(82)  \r
   9 ６三飛打    \r
  10 ８四玉(73)  \r
  11 ８三飛(63)  \r
  12 同　玉(84)  \r
  13 ８二桂成(74)\r
  14 同　玉(83)  \r
  15 ８三歩打    \r
  16 同　玉(82)  \r
  17 ７二銀打    \r
  18 同　玉(83)  \r
  19 ５四角(76)  \r
  20 ８二玉(72)  \r
  21 ８一角成(54)\r
  22 ８三玉(82)  \r
  23 ７五桂打    \r
  24 同　龍(77)  \r
  25 ９四角(85)  \r
  26 同　玉(83)  \r
  27 ７二馬(81)  \r
  28 同　龍(75)  \r
  29 ８四金打    \r
  30 詰み        \r
まで29手詰\r
`,k2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0041\r
作者：江口伸治    \r
発表誌：詰将棋パラダイス\r
発表年月：2001年10月\r
手数：29\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀四　桂三　香四　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ 角 ・ ・v玉 ・|二\r
| ・ ・ ・ ・ 馬 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v飛|四\r
| ・ ・ ・ ・ ・ 飛 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三歩打    \r
   2 同　玉(22)  \r
   3 ４一角成(52)\r
   4 １二玉(23)  \r
   5 ４二飛成(45)\r
   6 ３二歩打    \r
   7 同　龍(42)  \r
   8 ２二歩打    \r
   9 １三歩打    \r
  10 同　玉(12)  \r
  11 ２五桂打    \r
  12 １二玉(13)  \r
  13 １三歩打    \r
  14 １一玉(12)  \r
  15 ３一龍(32)  \r
  16 ２一桂打    \r
  17 同　龍(31)  \r
  18 同　玉(11)  \r
  19 ３一馬(41)  \r
  20 １一玉(21)  \r
  21 ２三桂打    \r
  22 同　歩(22)  \r
  23 ４四馬(53)  \r
  24 同　飛(14)  \r
  25 １二歩成(13)\r
  26 同　玉(11)  \r
  27 １三桂成(25)\r
  28 １一玉(12)  \r
  29 ２二馬(31)  \r
  30 詰み        \r
まで29手詰\r
`,y2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0123\r
作者：谷口均      \r
発表誌：詰将棋パラダイス\r
発表年月：2008年9月\r
手数：29\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v香 ・v香|一\r
| ・ ・ ・v杏 ・ と ・ ・ 銀|二\r
| ・v歩 ・ ・ ・v角 ・ ・ ・|三\r
| ・ ・ ・ ・v歩 ・ 桂v金 ・|四\r
| ・ ・ ・ ・ ・ 桂v玉 ・v桂|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ 龍 ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金　銀二　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四銀打    \r
   2 同　玉(35)  \r
   3 ４三と(42)  \r
   4 同　玉(44)  \r
   5 ３三桂成(45)\r
   6 同　玉(43)  \r
   7 ２二角打    \r
   8 ３四玉(33)  \r
   9 ３五歩打    \r
  10 同　玉(34)  \r
  11 ３六銀打    \r
  12 同　玉(35)  \r
  13 ３八龍(88)  \r
  14 ２五玉(36)  \r
  15 ４三角打    \r
  16 ３四桂打    \r
  17 ３六金打    \r
  18 １四玉(25)  \r
  19 ２六桂打    \r
  20 同　桂(34)  \r
  21 ２五金(36)  \r
  22 同　金(24)  \r
  23 ３四龍(38)  \r
  24 同　香(31)  \r
  25 ３二角成(43)\r
  26 ２四玉(14)  \r
  27 １三角成(22)\r
  28 同　玉(24)  \r
  29 ２三馬(32)  \r
  30 詰み        \r
まで29手詰\r
`,b2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0516\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1979年1月\r
手数：31\r
受賞：塚田賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀　桂三　香四　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ 角 ・|三\r
| ・ ・ ・ ・ ・ 龍 と ・ ・|四\r
| ・ ・ ・ ・ ・ ・v歩v銀v玉|五\r
| ・ ・ ・v龍 ・ ・ ・ ・ 桂|六\r
| ・ ・ ・ ・ ・v角 歩 歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ 銀 ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １四角成(23)\r
   2 同　銀(25)  \r
   3 ２四銀打    \r
   4 ２五玉(15)  \r
   5 ２六歩(27)  \r
   6 同　玉(25)  \r
   7 ３五銀(24)  \r
   8 １五玉(26)  \r
   9 ２四銀(35)  \r
  10 ２六玉(15)  \r
  11 ２七歩打    \r
  12 ２五玉(26)  \r
  13 ４五龍(44)  \r
  14 ３五歩打    \r
  15 ２六歩(27)  \r
  16 同　玉(25)  \r
  17 ３五銀(24)  \r
  18 １五玉(26)  \r
  19 ２四銀(35)  \r
  20 ２六玉(15)  \r
  21 ２七歩打    \r
  22 １六玉(26)  \r
  23 ５六龍(45)  \r
  24 ３六角成(47)\r
  25 １七歩打    \r
  26 ２五玉(16)  \r
  27 ３六龍(56)  \r
  28 同　龍(66)  \r
  29 １六角打    \r
  30 同　龍(36)  \r
  31 ３五と(34)  \r
  32 詰み        \r
まで31手詰\r
`,p2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0524\r
作者：若島正      \r
発表誌：近代将棋\r
発表年月：1979年12月\r
手数：31\r
受賞：塚田賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀　桂四　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・v香 香 銀|三\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|四\r
| ・ ・ ・ ・ ・vとvとvと 歩|五\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|六\r
| ・ ・ ・ ・ ・ ・ 飛 ・ 香|七\r
| ・ ・ ・ ・ ・ 馬v銀 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ９七飛(37)  \r
   2 ３七歩打    \r
   3 同　馬(48)  \r
   4 １七玉(26)  \r
   5 ３八馬(37)  \r
   6 ５七歩打    \r
   7 同　飛(97)  \r
   8 ３七角打    \r
   9 同　飛(57)  \r
  10 ２六玉(17)  \r
  11 ２七飛(37)  \r
  12 １五玉(26)  \r
  13 ２四銀打    \r
  14 １四玉(15)  \r
  15 １五歩打    \r
  16 同　と(25)  \r
  17 同　銀(24)  \r
  18 同　玉(14)  \r
  19 ２四銀(13)  \r
  20 １四玉(15)  \r
  21 １三銀成(24)\r
  22 同　玉(14)  \r
  23 ２二角打    \r
  24 １四玉(13)  \r
  25 １五歩打    \r
  26 同　玉(14)  \r
  27 ３三角成(22)\r
  28 同　銀(44)  \r
  29 １六歩打    \r
  30 同　玉(15)  \r
  31 １七香打    \r
  32 詰み        \r
まで31手詰\r
`,x2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0220\r
作者：角建逸      \r
発表誌：詰将棋パラダイス\r
発表年月：1981年9月\r
手数：31\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金二　桂四　香二　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ と ・ ・|四\r
| ・ ・ ・ ・v銀 ・v香 と 香|五\r
| ・ ・ ・ 角 ・ ・ 歩 ・ ・|六\r
| ・ ・ ・ ・ ・ ・v銀 ・ ・|七\r
| ・ ・ ・ ・ 金 角v歩 銀v玉|八\r
| ・ ・ ・ ・ 金 ・ ・ 歩 ・|九\r
+---------------------------+\r
先手の持駒：銀　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 １九歩打    \r
   2 ２九玉(18)  \r
   3 １八銀打    \r
   4 ２八玉(29)  \r
   5 ２九歩打    \r
   6 １九玉(28)  \r
   7 ３七角(48)  \r
   8 ２八歩打    \r
   9 同　角(37)  \r
  10 １八玉(19)  \r
  11 １九歩打    \r
  12 ２九玉(18)  \r
  13 １八銀打    \r
  14 ２八玉(29)  \r
  15 ５五角(66)  \r
  16 ３七角打    \r
  17 ２九歩打    \r
  18 １九玉(28)  \r
  19 ３七角(55)  \r
  20 ２八歩打    \r
  21 同　角(37)  \r
  22 １八玉(19)  \r
  23 １九歩打    \r
  24 ２九玉(18)  \r
  25 １八銀打    \r
  26 ２八玉(29)  \r
  27 ２九歩打    \r
  28 １九玉(28)  \r
  29 ７三角打    \r
  30 １八玉(19)  \r
  31 ２八角成(73)\r
  32 詰み        \r
まで31手詰\r
`,V2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0546\r
作者：小沢正広    \r
発表誌：近代将棋\r
発表年月：1981年11月\r
手数：33\r
受賞：塚田賞\r
備考：5件登録\r
解説：裸玉构型让防守资源极少，王的位置和持驹成为解题核心；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀　桂四　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金二　銀三　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四角打    \r
   2 ３三金打    \r
   3 ２三銀打    \r
   4 同　玉(22)  \r
   5 ２四歩打    \r
   6 ３二玉(23)  \r
   7 ４二金打    \r
   8 同　玉(32)  \r
   9 ５三金打    \r
  10 ３二玉(42)  \r
  11 ４三銀打    \r
  12 同　金(33)  \r
  13 ２三銀打    \r
  14 ３一玉(32)  \r
  15 ３二歩打    \r
  16 ４一玉(31)  \r
  17 ４二歩打    \r
  18 同　金(43)  \r
  19 ３一歩成(32)\r
  20 同　玉(41)  \r
  21 ２二銀(23)  \r
  22 ４一玉(31)  \r
  23 ４二金(53)  \r
  24 同　玉(41)  \r
  25 ３三銀成(22)\r
  26 ５一玉(42)  \r
  27 ５二歩打    \r
  28 同　玉(51)  \r
  29 ５三金打    \r
  30 ５一玉(52)  \r
  31 ４二成銀(33)\r
  32 ６一玉(51)  \r
  33 ６二金(53)  \r
  34 詰み        \r
まで33手詰\r
`,j2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0559\r
作品名：一筒\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1982年10月\r
手数：31\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ 角 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・v香 ・ ・|二\r
| ・ ・ ・v香v香v歩 ・ ・ ・|三\r
| ・ ・ とv龍 銀 ・ ・ 銀 ・|四\r
| ・ ・vと ・ ・ 香 ・ 銀 ・|五\r
| ・ ・v歩v玉 ・ ・v桂 角 ・|六\r
| ・ ・ ・v桂 ・vと 金 ・ ・|七\r
| ・ ・ ・ 銀 ・ ・v龍 ・ ・|八\r
| ・ ・ ・ ・ 桂 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六金打    \r
   2 同　玉(66)  \r
   3 ４六金打    \r
   4 同　と(47)  \r
   5 同　金(37)  \r
   6 同　玉(56)  \r
   7 ３五銀(24)  \r
   8 同　香(32)  \r
   9 ５七金打    \r
  10 ５五玉(46)  \r
  11 ３七角(26)  \r
  12 同　龍(38)  \r
  13 ５六歩打    \r
  14 ５四玉(55)  \r
  15 ４三角成(61)\r
  16 ４五玉(54)  \r
  17 ４六歩打    \r
  18 同　龍(37)  \r
  19 同　金(57)  \r
  20 同　玉(45)  \r
  21 ４七飛打    \r
  22 ５六玉(46)  \r
  23 ５七銀(68)  \r
  24 ５五玉(56)  \r
  25 ６七桂(59)  \r
  26 同　龍(64)  \r
  27 ４五飛(47)  \r
  28 同　玉(55)  \r
  29 ３四銀(25)  \r
  30 ５五玉(45)  \r
  31 ４七桂打    \r
  32 詰み        \r
まで31手詰\r
`,N2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0579\r
作者：山本民雄    \r
発表誌：近代将棋\r
発表年月：1984年7月\r
手数：33\r
受賞：塚田賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金三　銀三　桂二　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ と ・ ・ 角 ・ ・ ・|一\r
|v金 ・ 歩 歩 ・ ・ 銀 ・ ・|二\r
| ・v歩 ・ ・v香 ・ ・ ・ ・|三\r
| ・v玉 ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ 龍 馬 ・ ・ ・ ・|五\r
| ・ ・ ・ 桂 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ 桂 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７三馬(55)  \r
   2 同　玉(84)  \r
   3 ７六龍(65)  \r
   4 ６二玉(73)  \r
   5 ７四桂(66)  \r
   6 ７三玉(62)  \r
   7 ６二桂成(74)\r
   8 同　玉(73)  \r
   9 ６六龍(76)  \r
  10 ６五歩打    \r
  11 同　龍(66)  \r
  12 ７三玉(62)  \r
  13 ７六龍(65)  \r
  14 ７五歩打    \r
  15 同　龍(76)  \r
  16 ８二玉(73)  \r
  17 ８一と(71)  \r
  18 ９三玉(82)  \r
  19 ９四歩打    \r
  20 同　玉(93)  \r
  21 ８五角成(41)\r
  22 ９三玉(94)  \r
  23 ８四龍(75)  \r
  24 同　歩(83)  \r
  25 ９四歩打    \r
  26 ８三玉(93)  \r
  27 ７五桂(67)  \r
  28 ７二玉(83)  \r
  29 ６三馬(85)  \r
  30 ６一玉(72)  \r
  31 ６二歩打    \r
  32 ５一玉(61)  \r
  33 ４一銀成(32)\r
  34 詰み        \r
まで33手詰\r
`,S2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0582\r
作者：北原義治    \r
発表誌：近代将棋\r
発表年月：1985年2月\r
手数：31\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金四　銀四　桂四　香二　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ 角v歩v玉v歩 馬 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香二　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六歩打    \r
   2 同　玉(55)  \r
   3 ５七馬(35)  \r
   4 ５五玉(56)  \r
   5 ５六香打    \r
   6 ４四玉(55)  \r
   7 ５三角成(75)\r
   8 ３三玉(44)  \r
   9 ３四歩打    \r
  10 ３二玉(33)  \r
  11 ４二馬(53)  \r
  12 同　玉(32)  \r
  13 ２四馬(57)  \r
  14 ４一玉(42)  \r
  15 ４三香打    \r
  16 ３一玉(41)  \r
  17 ４二香成(43)\r
  18 ２一玉(31)  \r
  19 ３二成香(42)\r
  20 同　玉(21)  \r
  21 ３三歩成(34)\r
  22 ２一玉(32)  \r
  23 ２二歩打    \r
  24 １一玉(21)  \r
  25 １二歩打    \r
  26 同　玉(11)  \r
  27 ２三馬(24)  \r
  28 １一玉(12)  \r
  29 ２一歩成(22)\r
  30 同　玉(11)  \r
  31 ２二馬(23)  \r
  32 詰み        \r
まで31手詰\r
`,w2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0646\r
作者：山田康平    \r
発表誌：近代将棋\r
発表年月：1992年5月\r
手数：33\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金四　銀四　桂三　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・v玉 角|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ 歩 ・|四\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　桂　香　歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三角成(12)\r
   2 ３一玉(22)  \r
   3 ５三角打    \r
   4 ４二金打    \r
   5 ３四香打    \r
   6 ３三歩打    \r
   7 同　香(34)  \r
   8 ２一玉(31)  \r
   9 ３二香成(33)\r
  10 同　金(42)  \r
  11 １三桂打    \r
  12 １一玉(21)  \r
  13 ４四角成(53)\r
  14 ２二桂打    \r
  15 ２一桂成(13)\r
  16 同　玉(11)  \r
  17 ３二馬(23)  \r
  18 同　玉(21)  \r
  19 ３三歩打    \r
  20 ４一玉(32)  \r
  21 ４二歩打    \r
  22 ５一玉(41)  \r
  23 ５二歩打    \r
  24 同　玉(51)  \r
  25 ５三金打    \r
  26 ５一玉(52)  \r
  27 ４一歩成(42)\r
  28 同　玉(51)  \r
  29 ３二歩成(33)\r
  30 同　玉(41)  \r
  31 ４三馬(44)  \r
  32 ３一玉(32)  \r
  33 ４二金(53)  \r
  34 詰み        \r
まで33手詰\r
`,C2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0656\r
作者：湯村光造    \r
発表誌：近代将棋\r
発表年月：1993年9月\r
手数：31\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ とv香|一\r
| ・ ・ ・ ・v金 ・ ・ ・v銀|二\r
| ・ ・ ・ ・v歩 ・v歩 ・v歩|三\r
| ・ ・ ・ 馬 ・ ・ ・v角 ・|四\r
|v飛 ・ ・ ・ ・v玉 歩 ・ ・|五\r
| ・ ・ 龍 ・ ・v圭 ・ ・ 銀|六\r
| ・ ・ ・ ・v銀 桂 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ 桂 ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５四銀打    \r
   2 同　歩(53)  \r
   3 ５六龍(76)  \r
   4 同　成桂(46)\r
   5 ３七桂打    \r
   6 ４四玉(45)  \r
   7 ５六桂(48)  \r
   8 ４三玉(44)  \r
   9 ５五桂打    \r
  10 同　飛(95)  \r
  11 同　桂(47)  \r
  12 同　歩(54)  \r
  13 ４五飛打    \r
  14 ４四歩打    \r
  15 同　飛(45)  \r
  16 ３二玉(43)  \r
  17 ４三飛成(44)\r
  18 同　玉(32)  \r
  19 ４四歩打    \r
  20 ３二玉(43)  \r
  21 ３一馬(64)  \r
  22 ２三玉(32)  \r
  23 ２二と(21)  \r
  24 １四玉(23)  \r
  25 ３二馬(31)  \r
  26 ２三歩打    \r
  27 同　馬(32)  \r
  28 同　銀(12)  \r
  29 １五歩打    \r
  30 同　角(24)  \r
  31 ２五銀(16)  \r
  32 詰み        \r
まで31手詰\r
`,P2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0471\r
作品名：トランプ詰　スペード\r
作者：森田銀杏    \r
発表誌：近代将棋\r
発表年月：2002年7月\r
手数：33\r
受賞：塚田賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀　桂　香二　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・v桂 ・v歩 ・ ・ ・ ・|二\r
| ・ 飛 ・ と 歩v銀 ・ ・ ・|三\r
| ・ ・ 歩 ・ ・v香 桂 ・ ・|四\r
| ・vと 銀 歩 ・ ・ ・ 香 ・|五\r
| ・ 歩 ・v歩 ・v玉 ・v歩 ・|六\r
| ・ ・ 飛v金 ・ ・v圭 金 ・|七\r
| ・ ・ ・ 金 馬 ・ 銀 ・ ・|八\r
| ・ ・ ・ ・ 角 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３七角(59)  \r
   2 ４五玉(46)  \r
   3 ３六金(27)  \r
   4 ５四玉(45)  \r
   5 ６四と(63)  \r
   6 同　桂(72)  \r
   7 ６三飛成(83)\r
   8 同　玉(54)  \r
   9 ６四銀(75)  \r
  10 ５四玉(63)  \r
  11 ５五銀(64)  \r
  12 ５三玉(54)  \r
  13 ６四銀(55)  \r
  14 ５四玉(53)  \r
  15 ６三銀(64)  \r
  16 ６五玉(54)  \r
  17 ５七桂打    \r
  18 同　金(67)  \r
  19 ７五飛(77)  \r
  20 同　玉(65)  \r
  21 ８五馬(58)  \r
  22 ６五玉(75)  \r
  23 ７七桂打    \r
  24 ５六玉(65)  \r
  25 ５七金(68)  \r
  26 同　玉(56)  \r
  27 ５八金打    \r
  28 ５六玉(57)  \r
  29 ４七銀(38)  \r
  30 同　香成(44)\r
  31 ５七歩打    \r
  32 同　成香(47)\r
  33 ４六金(36)  \r
  34 詰み        \r
まで33手詰\r
`,$2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0472\r
作品名：トランプ詰　ハート\r
作者：森田銀杏    \r
発表誌：近代将棋\r
発表年月：2002年7月\r
手数：33\r
受賞：塚田賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　桂　香二　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|二\r
| ・ ・ ・v歩 と ・v歩 ・ 飛|三\r
| ・ ・ ・ ・ 銀 と 角 桂 ・|四\r
| ・v桂 香 ・ ・v角v玉 ・ 金|五\r
| ・ ・v金vとv銀v桂vとv金 ・|六\r
| ・ ・ 歩 歩 ・ 香 ・ ・ ・|七\r
| ・ ・ 龍 ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４五と(44)  \r
   2 同　銀(56)  \r
   3 ２五金(15)  \r
   4 同　金(26)  \r
   5 ４四銀打    \r
   6 同　玉(35)  \r
   7 ４五銀(54)  \r
   8 ５三玉(44)  \r
   9 ３三飛成(13)\r
  10 同　銀(42)  \r
  11 ５四歩打    \r
  12 ６四玉(53)  \r
  13 ７三角打    \r
  14 ６五玉(64)  \r
  15 ７四銀打    \r
  16 ７五玉(65)  \r
  17 ７六歩(77)  \r
  18 ７四玉(75)  \r
  19 ８四金打    \r
  20 ６五玉(74)  \r
  21 ６六歩(67)  \r
  22 同　玉(65)  \r
  23 ６七歩打    \r
  24 ６五玉(66)  \r
  25 ５六銀(45)  \r
  26 ５四玉(65)  \r
  27 ４五銀(56)  \r
  28 ５三玉(54)  \r
  29 ５八龍(78)  \r
  30 同　桂成(46)\r
  31 ５四銀(45)  \r
  32 同　玉(53)  \r
  33 ４三角成(34)\r
  34 詰み        \r
まで33手詰\r
`,B2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0473\r
作品名：トランプ詰　ダイヤ\r
作者：森田銀杏    \r
発表誌：近代将棋\r
発表年月：2002年7月\r
手数：33\r
受賞：塚田賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　桂　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・v香 ・ ・ ・ ・|二\r
| ・ ・ と 歩 ・v歩 ・ ・ ・|三\r
| ・ 金 ・ 金 歩 ・ 桂 ・ ・|四\r
| ・ 銀v銀 ・ ・ ・ ・ 銀 ・|五\r
| ・ ・v桂 ・ ・v玉 ・ ・ ・|六\r
| ・v銀 ・ 馬 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ 歩 ・ 飛 ・|八\r
| ・ ・ ・ 金 角 桂 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ４七歩(48)  \r
   2 ５五玉(46)  \r
   3 ６五金(64)  \r
   4 同　玉(55)  \r
   5 ５七桂(49)  \r
   6 ５四玉(65)  \r
   7 ４五馬(67)  \r
   8 ５三玉(54)  \r
   9 ６五桂(57)  \r
  10 ６四玉(53)  \r
  11 ７四と(73)  \r
  12 ６五玉(64)  \r
  13 ７五と(74)  \r
  14 同　玉(65)  \r
  15 ８六銀打    \r
  16 ６五玉(75)  \r
  17 ７四銀(85)  \r
  18 ６四玉(65)  \r
  19 ７五銀(86)  \r
  20 同　玉(64)  \r
  21 ８五金(84)  \r
  22 ６六玉(75)  \r
  23 ７七角(59)  \r
  24 同　玉(66)  \r
  25 ７八金(69)  \r
  26 同　銀成(87)\r
  27 同　飛(28)  \r
  28 ６六玉(77)  \r
  29 ６七銀打    \r
  30 ５七玉(66)  \r
  31 ５八飛(78)  \r
  32 ４七玉(57)  \r
  33 ３六馬(45)  \r
  34 詰み        \r
まで33手詰\r
`,E2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0474\r
作品名：トランプ詰　クラブ\r
作者：森田銀杏    \r
発表誌：近代将棋\r
発表年月：2002年7月\r
手数：33\r
受賞：塚田賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金　桂　香四　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| 龍 ・ ・ ・v銀 ・ ・ ・ ・|二\r
| ・ ・ ・vと ・ 歩 ・ ・ ・|三\r
| ・ 銀 ・ ・v桂 桂 銀 ・ ・|四\r
| ・v歩 ・ ・v歩 ・v金 ・ ・|五\r
| 馬 ・ ・ ・v玉v歩 ・v銀 ・|六\r
|v桂 ・ 歩 歩 ・ ・ ・ ・ 金|七\r
| ・ ・ ・ 龍 歩 金 ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ５七龍(68)  \r
   2 ６五玉(56)  \r
   3 ６六歩(67)  \r
   4 ６四玉(65)  \r
   5 ９七馬(96)  \r
   6 ８六桂打    \r
   7 同　馬(97)  \r
   8 同　歩(85)  \r
   9 ７五銀(84)  \r
  10 ５三玉(64)  \r
  11 ５二龍(92)  \r
  12 ４四玉(53)  \r
  13 ４五銀打    \r
  14 同　金(35)  \r
  15 同　銀(34)  \r
  16 同　玉(44)  \r
  17 ３七桂打    \r
  18 同　銀成(26)\r
  19 ３五金打    \r
  20 同　玉(45)  \r
  21 ３七龍(57)  \r
  22 ４五玉(35)  \r
  23 ３六銀打    \r
  24 ４四玉(45)  \r
  25 ３五銀(36)  \r
  26 ４五玉(44)  \r
  27 ３六龍(37)  \r
  28 同　玉(45)  \r
  29 ２六金(17)  \r
  30 ４五玉(36)  \r
  31 ３七桂打    \r
  32 ５六玉(45)  \r
  33 ５七金(48)  \r
  34 詰み        \r
まで33手詰\r
`,A2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0573\r
作者：上田吉一    \r
発表誌：近代将棋\r
発表年月：1984年2月\r
手数：35\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金三　銀三　桂　香三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v玉v桂v香|一\r
| ・ ・ ・ ・ 龍 ・v金 ・ ・|二\r
| ・ ・ ・ ・ ・ 歩 ・v歩v歩|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ 歩|四\r
| ・ ・ ・ ・ ・ ・ ・ 龍 銀|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４二歩成(43)\r
   2 同　金(32)  \r
   3 ４三桂打    \r
   4 同　金(42)  \r
   5 ３四龍(25)  \r
   6 ３三香打    \r
   7 ４一龍(52)  \r
   8 ２二玉(31)  \r
   9 ２三龍(34)  \r
  10 同　玉(22)  \r
  11 ３五桂打    \r
  12 同　香(33)  \r
  13 ４三龍(41)  \r
  14 ３三飛打    \r
  15 ２四歩打    \r
  16 ２二玉(23)  \r
  17 ３二金打    \r
  18 １二玉(22)  \r
  19 １三歩成(14)\r
  20 同　桂(21)  \r
  21 ２三歩成(24)\r
  22 同　飛(33)  \r
  23 同　龍(43)  \r
  24 同　玉(12)  \r
  25 ３三飛打    \r
  26 １二玉(23)  \r
  27 １三飛成(33)\r
  28 同　玉(12)  \r
  29 ２五桂打    \r
  30 ２三玉(13)  \r
  31 ３三桂成(25)\r
  32 １三玉(23)  \r
  33 １四歩打    \r
  34 １二玉(13)  \r
  35 ２二金(32)  \r
  36 詰み        \r
まで35手詰\r
`,L2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0288\r
作者：若島正      \r
発表誌：詰将棋パラダイス\r
発表年月：1987年5月\r
手数：39\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀四　桂四　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v金v玉 ・v香|一\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|二\r
| ・ ・ ・ 馬 ・v金 ・ ・ ・|三\r
| ・ ・ 龍 ・ ・ ・ ・ と ・|四\r
| ・ ・ ・ ・ 馬v歩 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６四馬(63)  \r
   2 ５三歩打    \r
   3 同　馬(64)  \r
   4 同　金(43)  \r
   5 ３二歩打    \r
   6 同　金(41)  \r
   7 ７一龍(74)  \r
   8 ４一香打    \r
   9 ２一飛打    \r
  10 同　玉(31)  \r
  11 ４一龍(71)  \r
  12 ３一金打    \r
  13 ２三香打    \r
  14 同　金(32)  \r
  15 １一馬(55)  \r
  16 同　玉(21)  \r
  17 ３一龍(41)  \r
  18 ２一銀打    \r
  19 １二金打    \r
  20 同　玉(11)  \r
  21 １五香打    \r
  22 １四飛打    \r
  23 同　香(15)  \r
  24 同　金(23)  \r
  25 ４二飛打    \r
  26 ２二角打    \r
  27 同　飛成(42)\r
  28 同　銀(21)  \r
  29 ３四角打    \r
  30 ２三桂打    \r
  31 ２二龍(31)  \r
  32 同　玉(12)  \r
  33 ２三と(24)  \r
  34 ３一玉(22)  \r
  35 ３二銀打    \r
  36 ４二玉(31)  \r
  37 ５四桂打    \r
  38 同　金(53)  \r
  39 ４三角成(34)\r
  40 詰み        \r
まで39手詰\r
`,I2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0308\r
作品名：セブン・センシズ\r
作者：山田康平    \r
発表誌：詰将棋パラダイス\r
発表年月：1989年1月\r
手数：35\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀三　桂三　香三　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v香 ・|一\r
| ・ ・ ・ ・ ・ ・ 金 ・ ・|二\r
| ・ ・ ・ ・ ・ 銀 ・ 桂 ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 龍 歩 馬|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ２五馬(16)  \r
   2 １三玉(14)  \r
   3 ３五馬(25)  \r
   4 １二玉(13)  \r
   5 １一桂成(23)\r
   6 同　玉(12)  \r
   7 ２一金(32)  \r
   8 同　玉(11)  \r
   9 ２四香打    \r
  10 ２二桂打    \r
  11 同　香成(24)\r
  12 同　玉(21)  \r
  13 １四桂打    \r
  14 １二玉(22)  \r
  15 ４五馬(35)  \r
  16 ３四歩打    \r
  17 同　馬(45)  \r
  18 ２三歩打    \r
  19 同　馬(34)  \r
  20 同　玉(12)  \r
  21 ３二銀(43)  \r
  22 １二玉(23)  \r
  23 １三歩打    \r
  24 １一玉(12)  \r
  25 ２一銀成(32)\r
  26 同　玉(11)  \r
  27 １二歩成(13)\r
  28 同　玉(21)  \r
  29 ３二龍(36)  \r
  30 １三玉(12)  \r
  31 ２二龍(32)  \r
  32 １四玉(13)  \r
  33 １五歩打    \r
  34 同　玉(14)  \r
  35 ２五龍(22)  \r
  36 詰み        \r
まで35手詰\r
`,O2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0334\r
作品名：迷宮の王  \r
作者：大橋健司    \r
発表誌：詰将棋パラダイス\r
発表年月：1991年3月\r
手数：39\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀　桂　香　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ 香 ・ ・ ・|三\r
| ・ ・ ・ とvと ・ 歩vと ・|四\r
| ・ ・v銀 ・ 香 香 ・ ・ ・|五\r
| ・ 桂 ・ ・v玉 ・ ・ ・ ・|六\r
| ・v角vと ・ ・v歩 銀 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ 龍 ・|八\r
| ・ ・ 馬 桂 ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２六龍(28)  \r
   2 ５五玉(56)  \r
   3 ４六馬(79)  \r
   4 ６六玉(55)  \r
   5 ５七馬(46)  \r
   6 ５五玉(66)  \r
   7 ６七桂打    \r
   8 同　と(77)  \r
   9 ４六馬(57)  \r
  10 ６六玉(55)  \r
  11 ４七馬(46)  \r
  12 ５五玉(66)  \r
  13 ４六馬(47)  \r
  14 ６六玉(55)  \r
  15 ５七馬(46)  \r
  16 ５五玉(66)  \r
  17 ６六龍(26)  \r
  18 ４五玉(55)  \r
  19 ３六龍(66)  \r
  20 ４四玉(45)  \r
  21 ４五歩打    \r
  22 ５五玉(44)  \r
  23 ４六馬(57)  \r
  24 ６六玉(55)  \r
  25 ４七馬(46)  \r
  26 ５五玉(66)  \r
  27 ４四銀打    \r
  28 同　と(54)  \r
  29 ４六馬(47)  \r
  30 ６六玉(55)  \r
  31 ５七馬(46)  \r
  32 ５五玉(66)  \r
  33 ６六龍(36)  \r
  34 ４五玉(55)  \r
  35 ３六龍(66)  \r
  36 ５五玉(45)  \r
  37 ４六馬(57)  \r
  38 ６六玉(55)  \r
  39 ４五馬(46)  \r
  40 詰み        \r
まで39手詰\r
`,M2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0658\r
作品名：新・飛先飛香\r
作者：山田修司    \r
発表誌：近代将棋\r
発表年月：1994年5月\r
手数：35\r
受賞：塚田賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金三　銀三　桂　香　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v歩 ・v桂 と|一\r
| ・ ・ ・ ・ 歩 ・v香v金v香|二\r
| ・ ・ ・ ・ ・ ・v銀 香 ・|三\r
| ・ ・ ・ ・ ・ 歩v歩 ・v玉|四\r
| ・ ・ ・ ・ ・ ・ 馬 歩vと|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四飛打    \r
   2 １三玉(14)  \r
   3 １二と(11)  \r
   4 同　金(22)  \r
   5 １四飛打    \r
   6 同　と(15)  \r
   7 同　飛(24)  \r
   8 同　玉(13)  \r
   9 ２六桂打    \r
  10 ２三玉(14)  \r
  11 ２四香打    \r
  12 １三玉(23)  \r
  13 ２一香成(24)\r
  14 ２四角打    \r
  15 １四歩打    \r
  16 ２三玉(13)  \r
  17 ２四歩(25)  \r
  18 同　銀(33)  \r
  19 １五桂打    \r
  20 同　銀(24)  \r
  21 １三歩成(14)\r
  22 同　金(12)  \r
  23 １四角打    \r
  24 同　金(13)  \r
  25 ２二成香(21)\r
  26 同　玉(23)  \r
  27 １四桂(26)  \r
  28 ２三玉(22)  \r
  29 １三金打    \r
  30 ３三玉(23)  \r
  31 ４五桂打    \r
  32 ４二玉(33)  \r
  33 ４三歩成(44)\r
  34 同　玉(42)  \r
  35 ５三馬(35)  \r
  36 詰み        \r
まで35手詰\r
`,R2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0359\r
作品名：ドラゴン・パラドックス\r
作者：大橋健司    \r
発表誌：詰将棋パラダイス\r
発表年月：1994年11月\r
手数：35\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金三　銀二　桂二　香三　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ 銀 ・|一\r
| ・ ・ ・ ・ ・ ・v桂v歩 ・|二\r
| ・ ・ ・ ・ ・ ・v玉 ・ 桂|三\r
| ・ ・ ・ 銀 ・ ・ ・ ・ ・|四\r
| ・ 飛 ・ ・ ・ ・ ・v香 ・|五\r
| ・ ・ ・ ・v歩 金 ・ ・v歩|六\r
| ・ ・ ・ ・ ・ ・ 馬 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 １五馬(37)  \r
   2 ２四桂打    \r
   3 ３四歩打    \r
   4 ４二玉(33)  \r
   5 ８二飛(85)  \r
   6 ５一玉(42)  \r
   7 ２四馬(15)  \r
   8 同　桂(32)  \r
   9 ５二歩打    \r
  10 ４二玉(51)  \r
  11 ４三歩打    \r
  12 ３一玉(42)  \r
  13 ２三桂打    \r
  14 同　歩(22)  \r
  15 ３二銀成(21)\r
  16 同　玉(31)  \r
  17 ５一歩成(52)\r
  18 ４三玉(32)  \r
  19 ５二飛成(82)\r
  20 ４四玉(43)  \r
  21 ４二龍(52)  \r
  22 ４三飛打    \r
  23 同　龍(42)  \r
  24 同　玉(44)  \r
  25 ６三飛打    \r
  26 ５三桂打    \r
  27 同　飛(63)  \r
  28 ３四玉(43)  \r
  29 ３五歩打    \r
  30 ４四玉(34)  \r
  31 ３六桂打    \r
  32 同　桂(24)  \r
  33 ４五金(46)  \r
  34 同　玉(44)  \r
  35 ５五飛成(53)\r
  36 詰み        \r
まで35手詰\r
`,K2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0361\r
作品名：詰むや詰まざるやミニ\r
作者：山田修司    \r
発表誌：詰将棋パラダイス\r
発表年月：1995年1月\r
手数：39\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀三　桂三　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 角 ・ ・v香|一\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・v玉 角v金 香|三\r
| ・ ・ ・ ・vと ・v飛 ・ ・|四\r
| ・ ・ ・ ・ 銀 歩 ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四歩(45)  \r
   2 同　飛(34)  \r
   3 同　銀(55)  \r
   4 同　と(54)  \r
   5 ４二飛打    \r
   6 ３三玉(43)  \r
   7 ３二飛打    \r
   8 ２四玉(33)  \r
   9 ４四飛成(42)\r
  10 １五玉(24)  \r
  11 ３五飛成(32)\r
  12 ２五金打    \r
  13 １四龍(44)  \r
  14 同　金(23)  \r
  15 同　角成(41)\r
  16 同　玉(15)  \r
  17 １五歩打    \r
  18 ２三玉(14)  \r
  19 ２五龍(35)  \r
  20 ３三玉(23)  \r
  21 ３四金打    \r
  22 ４二玉(33)  \r
  23 ４三金打    \r
  24 ３一玉(42)  \r
  25 ２二龍(25)  \r
  26 同　玉(31)  \r
  27 ３三金(43)  \r
  28 ３一玉(22)  \r
  29 ４三桂打    \r
  30 ２一玉(31)  \r
  31 １一香成(13)\r
  32 同　玉(21)  \r
  33 １三香打    \r
  34 ２一玉(11)  \r
  35 １二香成(13)\r
  36 同　玉(21)  \r
  37 ２三金(34)  \r
  38 ２一玉(12)  \r
  39 ２二金(33)  \r
  40 詰み        \r
まで39手詰\r
`,T2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0669\r
作者：巨椋鴻之介  \r
発表誌：近代将棋\r
発表年月：1995年5月\r
手数：39\r
受賞：塚田賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　桂三　香三　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 銀v香v歩 ・ ・ ・ 歩|三\r
| ・ ・ ・ ・v玉 ・ と ・v歩|四\r
| ・ ・ ・ ・v銀 歩v桂v銀 ・|五\r
| ・ ・ 金 ・ ・v龍 ・v歩 ・|六\r
| ・ 角 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ 角 ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ 金 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六金(76)  \r
   2 ４五玉(54)  \r
   3 ５五金(66)  \r
   4 同　玉(45)  \r
   5 ６四銀(73)  \r
   6 同　香(63)  \r
   7 ４六角(68)  \r
   8 同　玉(55)  \r
   9 ５七銀打    \r
  10 ３六玉(46)  \r
  11 ６九角(87)  \r
  12 同　香成(64)\r
  13 ３七銀打    \r
  14 ２七玉(36)  \r
  15 ２八銀(37)  \r
  16 同　玉(27)  \r
  17 ４八飛打    \r
  18 １七玉(28)  \r
  19 １九飛打    \r
  20 １八香打    \r
  21 同　飛(19)  \r
  22 ２七玉(17)  \r
  23 ２八飛(18)  \r
  24 １六玉(27)  \r
  25 １九香打    \r
  26 １七銀打    \r
  27 同　香(19)  \r
  28 同　玉(16)  \r
  29 １八飛(28)  \r
  30 ２七玉(17)  \r
  31 ３六銀打    \r
  32 同　玉(27)  \r
  33 ３八飛(18)  \r
  34 ２七玉(36)  \r
  35 ３七飛(38)  \r
  36 同　玉(27)  \r
  37 ３八金(49)  \r
  38 ３六玉(37)  \r
  39 ４六飛(48)  \r
  40 詰み        \r
まで39手詰\r
`,F2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0369\r
作者：斎藤吉雄    \r
発表誌：詰将棋パラダイス\r
発表年月：1995年11月\r
手数：39\r
受賞：半期賞、打歩詰大賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀　桂　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・v龍 ・|二\r
| ・ ・ ・ ・ ・ ・v歩 ・ 歩|三\r
| ・ ・ ・v桂 銀 角 ・v玉 ・|四\r
| ・ ・ ・v馬 ・v歩 桂 ・v香|五\r
| ・ ・ ・ 金 ・ ・ ・ 銀 ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・v香|七\r
| ・ ・ ・ ・ 飛v銀 ・ 桂 ・|八\r
| ・ ・ ・ ・ ・ ・ 香 ・ ・|九\r
+---------------------------+\r
先手の持駒：香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三桂成(35)\r
   2 同　龍(22)  \r
   3 １五銀(26)  \r
   4 同　玉(24)  \r
   5 １六香打    \r
   6 ２四玉(15)  \r
   7 ２七香打    \r
   8 ２六桂打    \r
   9 同　香(27)  \r
  10 ２五桂打    \r
  11 ３五角(44)  \r
  12 ３四玉(24)  \r
  13 ４六桂打    \r
  14 同　歩(45)  \r
  15 同　角(35)  \r
  16 ４四玉(34)  \r
  17 ３五角(46)  \r
  18 ３四玉(44)  \r
  19 ５三角成(35)\r
  20 ３七桂(25)  \r
  21 同　香(39)  \r
  22 同　銀(48)  \r
  23 ４六桂打    \r
  24 同　銀成(37)\r
  25 ４三銀(54)  \r
  26 ４五玉(34)  \r
  27 ５五金(66)  \r
  28 同　馬(65)  \r
  29 ５四銀(43)  \r
  30 ３四玉(45)  \r
  31 ３八飛(58)  \r
  32 ３七桂打    \r
  33 同　飛(38)  \r
  34 同　成銀(46)\r
  35 ４六桂打    \r
  36 同　馬(55)  \r
  37 ３五歩打    \r
  38 同　馬(46)  \r
  39 ４三馬(53)  \r
  40 詰み        \r
まで39手詰\r
`,D2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0687\r
作者：金子義隆    \r
発表誌：近代将棋\r
発表年月：1999年8月\r
手数：37\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀二　香二　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v桂v歩 ・|一\r
| ・ ・ ・ ・v歩 ・v歩 ・v桂|二\r
| ・ ・ ・ とv香 ・ ・v銀 ・|三\r
| ・ ・ ・ ・ ・v玉 桂 ・ ・|四\r
| ・ ・v飛 香 ・ ・ ・ ・ 馬|五\r
| ・ ・ ・ ・ 銀 ・vと 歩 ・|六\r
| ・ ・ ・ ・ ・ 歩 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １一角打    \r
   2 ２二飛打    \r
   3 同　角(11)  \r
   4 同　歩(21)  \r
   5 ６四飛打    \r
   6 ５四角打    \r
   7 同　飛(64)  \r
   8 同　香(53)  \r
   9 ６六角打    \r
  10 ５五飛打    \r
  11 同　角(66)  \r
  12 同　香(54)  \r
  13 ６四飛打    \r
  14 ５四角打    \r
  15 同　飛(64)  \r
  16 同　玉(44)  \r
  17 ６四と(63)  \r
  18 ４四玉(54)  \r
  19 ６二角打    \r
  20 ５三飛打    \r
  21 ５四と(64)  \r
  22 同　玉(44)  \r
  23 ５三角成(62)\r
  24 同　玉(54)  \r
  25 ６三飛打    \r
  26 ４四玉(53)  \r
  27 ６四飛成(63)\r
  28 ５四香打    \r
  29 ５五龍(64)  \r
  30 同　香(54)  \r
  31 ４五香打    \r
  32 ３四玉(44)  \r
  33 ４六桂打    \r
  34 同　と(36)  \r
  35 ３五歩打    \r
  36 同　玉(34)  \r
  37 ２五馬(15)  \r
  38 詰み        \r
まで37手詰\r
`,z2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0064\r
作品名：デフォルト\r
作者：相馬康幸    \r
発表誌：詰将棋パラダイス\r
発表年月：2003年8月\r
手数：35\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：盘面棋子极少，几乎每一枚棋子都承担明确的功能；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　銀三　桂二　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v金v玉v金 ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金二　銀　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５四飛打    \r
   2 ５二桂打    \r
   3 ４三桂打    \r
   4 ６二玉(51)  \r
   5 ７三金打    \r
   6 同　玉(62)  \r
   7 ６五桂打    \r
   8 ６三玉(73)  \r
   9 ５三金打    \r
  10 ７二玉(63)  \r
  11 ７三銀打    \r
  12 ７一玉(72)  \r
  13 ６二金(53)  \r
  14 同　金(61)  \r
  15 同　銀(73)  \r
  16 ８一玉(71)  \r
  17 ８四飛(54)  \r
  18 ８二角打    \r
  19 同　飛成(84)\r
  20 同　玉(81)  \r
  21 ７三銀(62)  \r
  22 ８三玉(82)  \r
  23 ８四金打    \r
  24 ９二玉(83)  \r
  25 ８三角打    \r
  26 ９一玉(92)  \r
  27 ８二銀成(73)\r
  28 同　玉(91)  \r
  29 ７三桂成(65)\r
  30 ９一玉(82)  \r
  31 ９二角成(83)\r
  32 同　玉(91)  \r
  33 ８三金(84)  \r
  34 ９一玉(92)  \r
  35 ８二金(83)  \r
  36 詰み        \r
まで35手詰\r
`,G2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0079\r
作者：船江恒平    \r
発表誌：詰将棋パラダイス\r
発表年月：2004年10月\r
手数：39\r
受賞：半期賞、看寿賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金四　銀四　桂四　香　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・v香 ・ ・v玉 ・|二\r
| ・ ・ ・vと ・ 馬 歩 ・ ・|三\r
| ・ ・ ・ ・ ・ 角 ・ ・ ・|四\r
| ・ ・ ・ ・ ・v歩 ・ ・ ・|五\r
| ・ ・ ・ 香 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２七香打    \r
   2 ２四飛打    \r
   3 同　香(27)  \r
   4 １三玉(22)  \r
   5 １一飛打    \r
   6 １二歩打    \r
   7 ２三香成(24)\r
   8 同　玉(13)  \r
   9 ２一飛成(11)\r
  10 ２二香打    \r
  11 同　龍(21)  \r
  12 同　玉(23)  \r
  13 ２七香打    \r
  14 ２四飛打    \r
  15 ３二馬(43)  \r
  16 １一玉(22)  \r
  17 ２一馬(32)  \r
  18 同　玉(11)  \r
  19 ２四香(27)  \r
  20 ２三桂打    \r
  21 同　香(24)  \r
  22 ２二桂打    \r
  23 同　香成(23)\r
  24 同　玉(21)  \r
  25 ３二歩成(33)\r
  26 同　玉(22)  \r
  27 ３三飛打    \r
  28 ４一玉(32)  \r
  29 ４二歩打    \r
  30 同　玉(41)  \r
  31 ５四桂打    \r
  32 同　香(52)  \r
  33 ３四桂打    \r
  34 ５一玉(42)  \r
  35 ５三飛成(33)\r
  36 同　と(63)  \r
  37 ３三角成(44)\r
  38 ５二玉(51)  \r
  39 ４二馬(33)  \r
  40 詰み        \r
まで39手詰\r
`,H2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0127\r
作品名：ルービック・キューブ\r
作者：若島正      \r
発表誌：第6回詰将棋解答選手権 チャンピオン戦 10\r
発表年月：2009年3月29日\r
手数：39\r
受賞：看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　香　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・v桂 ・ ・ ・ ・ ・ ・|二\r
| ・v銀v桂 ・v香 ・ ・ ・ ・|三\r
| ・ ・v歩 ・ ・ ・ 龍 ・ ・|四\r
| ・v歩 ・v香 ・ 香vとv歩 ・|五\r
| ・ ・ ・ 歩v玉 ・ ・v桂 ・|六\r
| 馬 ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・v金 ・ 歩 ・ ・ ・|八\r
| ・ ・ 桂 銀 ・ 龍 馬 ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５九龍(49)  \r
   2 同　金(68)  \r
   3 ２九馬(39)  \r
   4 ３八飛打    \r
   5 同　馬(29)  \r
   6 同　桂成(26)\r
   7 １六飛打    \r
   8 ２六角打    \r
   9 同　飛(16)  \r
  10 同　歩(25)  \r
  11 ４七金打    \r
  12 ６六玉(56)  \r
  13 ９三角打    \r
  14 ８四飛打    \r
  15 同　角成(93)\r
  16 同　桂(72)  \r
  17 ３六飛打    \r
  18 ４六角打    \r
  19 同　飛(36)  \r
  20 同　と(35)  \r
  21 ４四角打    \r
  22 ５五飛打    \r
  23 同　角(44)  \r
  24 同　香(53)  \r
  25 ６八飛打    \r
  26 ６七歩打    \r
  27 同　飛(68)  \r
  28 ７六玉(66)  \r
  29 ６六飛(67)  \r
  30 ７七玉(76)  \r
  31 ７四龍(34)  \r
  32 同　銀(83)  \r
  33 ７八歩打    \r
  34 ６六玉(77)  \r
  35 ６七歩打    \r
  36 ７六玉(66)  \r
  37 ７七歩(78)  \r
  38 同　玉(76)  \r
  39 ８七馬(97)  \r
  40 詰み        \r
まで39手詰\r
`,U2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0518\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1979年2月\r
手数：41\r
受賞：塚田賞\r
備考：8件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀　香三　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ 銀v金v香 ・ ・ 飛|一\r
| ・ と ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・v金 ・ ・ ・ と ・ と|三\r
| ・ ・ ・ ・ ・ ・ ・ 歩 ・|四\r
|v歩 桂 銀 ・ と ・ ・v金v玉|五\r
| ・v金v桂v馬 ・ と ・v桂 ・|六\r
| ・ ・ 桂 馬 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ と ・ ・|八\r
| ・ 龍 ・ ・ 歩v銀 と ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １四と(13)  \r
   2 １六玉(15)  \r
   3 １五と(14)  \r
   4 同　金(25)  \r
   5 ２七と(38)  \r
   6 同　玉(16)  \r
   7 ４九馬(67)  \r
   8 ３七玉(27)  \r
   9 ２七馬(49)  \r
  10 ４六玉(37)  \r
  11 ３七銀打    \r
  12 ５七玉(46)  \r
  13 ４八と(39)  \r
  14 同　香成(41)\r
  15 ６六銀(75)  \r
  16 同　玉(57)  \r
  17 ７五角打    \r
  18 同　玉(66)  \r
  19 ６五と(55)  \r
  20 ８四玉(75)  \r
  21 ７五と(65)  \r
  22 ９四玉(84)  \r
  23 ７二馬(27)  \r
  24 同　金(73)  \r
  25 ９三桂成(85)\r
  26 同　玉(94)  \r
  27 ８四と(75)  \r
  28 ８二玉(93)  \r
  29 ７二銀成(61)\r
  30 同　玉(82)  \r
  31 ７三金打    \r
  32 ６一玉(72)  \r
  33 ６九龍(89)  \r
  34 ６八歩打    \r
  35 同　龍(69)  \r
  36 同　桂成(76)\r
  37 ６二歩打    \r
  38 ５二玉(61)  \r
  39 ５一飛成(11)\r
  40 同　玉(52)  \r
  41 ４二金打    \r
  42 詰み        \r
まで41手詰\r
`,J2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0529\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1980年10月\r
手数：45\r
受賞：塚田賞\r
備考：7件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| とv銀 ・ ・ ・ ・ ・v香v玉|一\r
| と ・ ・ 金 ・ ・ ・ ・ ・|二\r
| ・ 香v香 香v桂 ・ ・ 歩 ・|三\r
| ・vと ・vと 金 ・ ・ 金 角|四\r
| 歩 ・vと 龍 ・ ・ 銀 ・ 桂|五\r
| 桂 ・ ・ ・ ・ 歩 ・ ・ ・|六\r
|vと ・ 銀 ・ ・ ・vと ・ 飛|七\r
| ・ ・ ・ ・ ・ 角 ・ 銀 ・|八\r
| 桂 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六角(48)  \r
   2 同　と(75)  \r
   3 ２二歩成(23)\r
   4 同　香(21)  \r
   5 ２三桂(15)  \r
   6 ２一玉(11)  \r
   7 １一桂成(23)\r
   8 ３一玉(21)  \r
   9 ３二角成(14)\r
  10 同　玉(31)  \r
  11 ３三金(24)  \r
  12 ４一玉(32)  \r
  13 ５二金(62)  \r
  14 同　玉(41)  \r
  15 ５三金(54)  \r
  16 同　玉(52)  \r
  17 ４四銀(35)  \r
  18 ６三玉(53)  \r
  19 ５五桂打    \r
  20 ７二玉(63)  \r
  21 ８二香成(83)\r
  22 同　銀(81)  \r
  23 ８四桂(96)  \r
  24 ８三玉(72)  \r
  25 ８二と(92)  \r
  26 ８四玉(83)  \r
  27 ８五銀打    \r
  28 ９五玉(84)  \r
  29 ９六歩打    \r
  30 同　と(97)  \r
  31 同　銀(85)  \r
  32 同　玉(95)  \r
  33 ９七歩打    \r
  34 同　玉(96)  \r
  35 ９五龍(65)  \r
  36 ９六金打    \r
  37 同　龍(95)  \r
  38 同　玉(97)  \r
  39 ８六金打    \r
  40 ９七玉(96)  \r
  41 ８七金(86)  \r
  42 ９八玉(97)  \r
  43 ８八金(87)  \r
  44 ９九玉(98)  \r
  45 １九飛(17)  \r
  46 詰み        \r
まで45手詰\r
`,W2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0263\r
作者：森田銀杏    \r
発表誌：詰将棋パラダイス\r
発表年月：1984年8月\r
手数：44\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀三　桂　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ とv歩 角v香v銀 ・ ・|二\r
| ・ ・ ・ ・ 角 ・ ・ ・ ・|三\r
| ・ ・ ・ とv玉 歩 ・ ・ ・|四\r
| ・ ・ ・ 桂 ・v香 ・ ・ ・|五\r
| ・ ・ ・ 香 桂vと ・ ・ ・|六\r
| ・ ・ ・ 飛 ・ 飛 ・ ・ ・|七\r
| ・ ・ ・ 歩 桂 香 ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
後手番\r
先手：\r
後手：\r
手数----指手--\r
   1 ５五玉(54)  \r
   2 ５四と(64)  \r
   3 ５六玉(55)  \r
   4 ５七飛(67)  \r
   5 同　と(46)  \r
   6 ５五と(54)  \r
   7 同　玉(56)  \r
   8 ４五飛(47)  \r
   9 ５六玉(55)  \r
  10 ４六飛(45)  \r
  11 ５五玉(56)  \r
  12 ５六香打    \r
  13 同　と(57)  \r
  14 ４五飛(46)  \r
  15 ５四玉(55)  \r
  16 ６四角成(53)\r
  17 同　玉(54)  \r
  18 ５三桂成(65)\r
  19 ６六と(56)  \r
  20 ５四成桂(53)\r
  21 同　玉(64)  \r
  22 ６六桂(58)  \r
  23 ５三玉(54)  \r
  24 ４三歩成(44)\r
  25 同　香(42)  \r
  26 同　飛成(45)\r
  27 同　銀(32)  \r
  28 ５六香打    \r
  29 ４二玉(53)  \r
  30 ４三香成(48)\r
  31 ３一玉(42)  \r
  32 ４一角成(52)\r
  33 ２一玉(31)  \r
  34 ３二馬(41)  \r
  35 １一玉(21)  \r
  36 １二歩打    \r
  37 同　玉(11)  \r
  38 ２三銀打    \r
  39 １三玉(12)  \r
  40 １四銀成(23)\r
  41 １二玉(13)  \r
  42 ２三成銀(14)\r
  43 １一玉(12)  \r
  44 ２二成銀(23)\r
  45 詰み        \r
まで44手詰\r
`,q2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0581\r
作者：小沢正広    \r
発表誌：近代将棋\r
発表年月：1984年11月\r
手数：47\r
受賞：塚田賞\r
備考：5件登録\r
解説：裸玉构型让防守资源极少，王的位置和持驹成为解题核心；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金四　銀三　桂三　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・v玉 ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛二　銀　桂　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四飛打    \r
   2 ３二歩打    \r
   3 ４三桂打    \r
   4 ４二玉(31)  \r
   5 ５一銀打    \r
   6 ５三玉(42)  \r
   7 ５四飛打    \r
   8 ６三玉(53)  \r
   9 ６四飛(54)  \r
  10 ７二玉(63)  \r
  11 ７三歩打    \r
  12 ８二玉(72)  \r
  13 ８三歩打    \r
  14 ９二玉(82)  \r
  15 ９三歩打    \r
  16 ９一玉(92)  \r
  17 ８二歩成(83)\r
  18 同　玉(91)  \r
  19 ６二飛成(64)\r
  20 ８三玉(82)  \r
  21 ９二龍(62)  \r
  22 ７三玉(83)  \r
  23 ６二銀(51)  \r
  24 ６三玉(73)  \r
  25 ８三龍(92)  \r
  26 ６二玉(63)  \r
  27 ６四飛(34)  \r
  28 ５二玉(62)  \r
  29 ５一桂成(43)\r
  30 ４二玉(52)  \r
  31 ４四飛(64)  \r
  32 ３一玉(42)  \r
  33 ４一成桂(51)\r
  34 ２一玉(31)  \r
  35 ２二歩打    \r
  36 １一玉(21)  \r
  37 １四飛(44)  \r
  38 １二銀打    \r
  39 同　飛成(14)\r
  40 同　玉(11)  \r
  41 １三銀打    \r
  42 １一玉(12)  \r
  43 ２一歩成(22)\r
  44 同　玉(11)  \r
  45 ２三龍(83)  \r
  46 １一玉(21)  \r
  47 １二龍(23)  \r
  48 詰み        \r
まで47手詰\r
`,Y2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0269\r
作者：藤本和      \r
発表誌：詰将棋パラダイス\r
発表年月：1985年3月\r
手数：47\r
受賞：半期賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金　銀二　桂　香三　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v桂 ・ 龍 ・ ・|一\r
| ・ と ・v桂 ・ 銀 ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・v馬v玉|三\r
| ・ ・ ・v銀 金v歩 ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　桂　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七香打    \r
   2 １六金打    \r
   3 同　香(17)  \r
   4 １五桂打    \r
   5 同　香(16)  \r
   6 １四歩打    \r
   7 同　香(15)  \r
   8 同　馬(23)  \r
   9 ３三龍(31)  \r
  10 ２三飛打    \r
  11 同　龍(33)  \r
  12 同　馬(14)  \r
  13 １六飛打    \r
  14 １五銀打    \r
  15 同　飛(16)  \r
  16 １四角打    \r
  17 ２四金打    \r
  18 同　馬(23)  \r
  19 ２二銀打    \r
  20 同　玉(13)  \r
  21 ３三金打    \r
  22 同　馬(24)  \r
  23 同　銀成(42)\r
  24 同　玉(22)  \r
  25 ４五桂打    \r
  26 同　歩(44)  \r
  27 ４四角打    \r
  28 ２三玉(33)  \r
  29 ２四歩打    \r
  30 ３二玉(23)  \r
  31 ３五飛(15)  \r
  32 ４一玉(32)  \r
  33 ４二金打    \r
  34 同　玉(41)  \r
  35 ３三角成(44)\r
  36 ４一玉(42)  \r
  37 ５一馬(33)  \r
  38 同　玉(41)  \r
  39 ３一飛成(35)\r
  40 ４一香打    \r
  41 ６三桂打    \r
  42 ６一玉(51)  \r
  43 ７一と(82)  \r
  44 ５二玉(61)  \r
  45 ４四桂打    \r
  46 同　香(41)  \r
  47 ５一龍(31)  \r
  48 詰み        \r
まで47手詰\r
`,Z2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0412\r
作品名：回転銀    \r
作者：山田修司    \r
発表誌：詰将棋パラダイス\r
発表年月：1999年7月\r
手数：43\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|五\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|六\r
| ・ ・ ・ ・ 龍 ・ 桂 銀v馬|七\r
| ・ ・ ・ ・ 金 ・ ・ ・v飛|八\r
| ・ ・ ・ ・ ・ ・v玉 ・vと|九\r
+---------------------------+\r
先手の持駒：角　金　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４九金打    \r
   2 同　玉(39)  \r
   3 ４七龍(57)  \r
   4 ３九玉(49)  \r
   5 ４八銀打    \r
   6 ２九玉(39)  \r
   7 ３八角打    \r
   8 ２八玉(29)  \r
   9 ３九銀(48)  \r
  10 同　玉(28)  \r
  11 ４八龍(47)  \r
  12 ２八玉(39)  \r
  13 ４九角(38)  \r
  14 ２九玉(28)  \r
  15 ３八銀(27)  \r
  16 ２八玉(29)  \r
  17 ４七銀(38)  \r
  18 ２九玉(28)  \r
  19 ３八角(49)  \r
  20 ２八玉(29)  \r
  21 １六角(38)  \r
  22 ２九玉(28)  \r
  23 ３八銀(47)  \r
  24 ２八玉(29)  \r
  25 ４九銀(38)  \r
  26 ２九玉(28)  \r
  27 ３八角(16)  \r
  28 ２八玉(29)  \r
  29 ４七角(38)  \r
  30 ２七玉(28)  \r
  31 ３八銀(49)  \r
  32 ２八玉(27)  \r
  33 ２九銀(38)  \r
  34 ２七玉(28)  \r
  35 ３八龍(48)  \r
  36 同　飛成(18)\r
  37 同　角(47)  \r
  38 ３六玉(27)  \r
  39 ３四飛打    \r
  40 ４六玉(36)  \r
  41 ４七金(58)  \r
  42 ５五玉(46)  \r
  43 ５六金(47)  \r
  44 詰み        \r
まで43手詰\r
`,X2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei3 0057\r
作品名：風鈴      \r
作者：角建逸      \r
発表誌：詰将棋パラダイス\r
発表年月：2002年11月\r
手数：47\r
受賞：半期賞、看寿賞\r
備考：4件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　桂二　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・v歩 ・ ・ ・ ・ ・|二\r
| ・ ・ 香v玉 歩v歩 ・ ・ ・|三\r
| ・ 龍 ・ ・ ・ ・v香 ・ ・|四\r
| ・ ・ ・vと ・ 歩 桂 ・ ・|五\r
| ・ ・ 金 金v銀v銀 角 ・ ・|六\r
| 角 ・ ・v香 ・ ・ 飛 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６四歩打    \r
   2 ５三玉(63)  \r
   3 ６三歩成(64)\r
   4 同　玉(53)  \r
   5 ４四歩(45)  \r
   6 ４五桂打    \r
   7 同　角(36)  \r
   8 同　銀(56)  \r
   9 ５三角成(97)\r
  10 同　玉(63)  \r
  11 ５七飛(37)  \r
  12 ５六歩打    \r
  13 ４三歩成(44)\r
  14 ６三玉(53)  \r
  15 ７五桂打    \r
  16 同　と(65)  \r
  17 ６四歩打    \r
  18 ５四玉(63)  \r
  19 ６五金(66)  \r
  20 同　と(75)  \r
  21 ６三歩成(64)\r
  22 同　玉(54)  \r
  23 ７五桂打    \r
  24 同　と(65)  \r
  25 ６七飛(57)  \r
  26 ６六桂打    \r
  27 同　飛(67)  \r
  28 ６五桂打    \r
  29 同　飛(66)  \r
  30 同　と(75)  \r
  31 ７五桂打    \r
  32 同　と(65)  \r
  33 ６七香打    \r
  34 ６六桂打    \r
  35 同　香(67)  \r
  36 ６五桂打    \r
  37 同　香(66)  \r
  38 同　と(75)  \r
  39 ７五桂打    \r
  40 同　と(65)  \r
  41 ６四香打    \r
  42 ５四玉(63)  \r
  43 ６六桂打    \r
  44 同　と(75)  \r
  45 ６三香成(64)\r
  46 同　玉(54)  \r
  47 ７五桂打    \r
  48 詰み        \r
まで47手詰\r
`,Q2=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0100\r
作者：伊野辺看斎  \r
発表誌：象戯手段草 第2番\r
発表年月：享保9年11月\r
手数：41\r
完全性：余詰\r
備考：10件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v歩 ・ ・v角 ・v飛 ・v銀|一\r
| 銀v香 ・v歩 ・v香v歩 ・v玉|二\r
| と ・ ・ ・ 歩 ・v銀v歩 ・|三\r
| ・ 金v銀 歩 ・ ・ ・ ・ 桂|四\r
| ・ 桂v歩 ・ ・ ・v桂 ・ ・|五\r
| ・ 馬vと ・ 香 金 ・ 桂 香|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二桂成(14)\r
   2 同　玉(12)  \r
   3 １三金打    \r
   4 ２一玉(22)  \r
   5 ２二飛打    \r
   6 同　銀(33)  \r
   7 同　金(13)  \r
   8 同　玉(21)  \r
   9 １三銀打    \r
  10 ３三玉(22)  \r
  11 ３四歩打    \r
  12 ４三玉(33)  \r
  13 ７六馬(86)  \r
  14 同　歩(75)  \r
  15 ４四歩打    \r
  16 同　玉(43)  \r
  17 ５五金(46)  \r
  18 ５三玉(44)  \r
  19 ５四金(55)  \r
  20 ５二玉(53)  \r
  21 ５三金(54)  \r
  22 ６一玉(52)  \r
  23 ５二金(53)  \r
  24 ７一玉(61)  \r
  25 ８二と(93)  \r
  26 同　歩(81)  \r
  27 ７三香打    \r
  28 ７二桂打    \r
  29 同　香成(73)\r
  30 同　玉(71)  \r
  31 ７三金(84)   +\r
  32 ７一玉(72)  \r
  33 ７二金(73)  \r
  34 同　玉(71)  \r
  35 ８四桂打    \r
  36 ７一玉(72)  \r
  37 ６一金(52)  \r
  38 同　玉(71)  \r
  39 ７三桂(85)  \r
  40 ７一玉(61)  \r
  41 ８一銀成(92)\r
  42 詰み        \r
まで41手詰\r
\r
変化：31手\r
  31 ７三桂成(85)\r
  32 ７一玉(72)  \r
  33 ６二成桂(73)\r
  34 同　角(51)  \r
  35 ６三桂打    \r
  36 同　銀(74)  \r
  37 ６二金(52)  \r
  38 同　玉(71)  \r
  39 ６三歩成(64)\r
  40 同　玉(62)  \r
  41 ７四銀打    \r
  42 ７二玉(63)  \r
  43 ６三角打    \r
  44 ７一玉(72)  \r
  45 ７二歩打    \r
  46 ６二玉(71)  \r
  47 ５二香成(56)\r
  48 詰み        \r
まで47手詰\r
`,n3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0126\r
作者：三代伊藤宗看\r
発表誌：将棋無双 第2番\r
発表年月：享保19年8月\r
手数：47\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀　桂　歩十　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v金 ・v香 ・|一\r
| ・ ・ ・ と ・ ・v銀 ・v歩|二\r
| ・ 飛 ・ 角 ・ ・v歩 ・ 銀|三\r
| ・ ・ ・v桂v歩 銀 香 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・v歩v玉|五\r
| ・ ・ ・ 馬 ・ 香 ・ ・ ・|六\r
| ・ ・ ・ ・ ・v飛 桂 ・ 歩|七\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|九\r
+---------------------------+\r
先手の持駒：歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 １六歩(17)  \r
   2 １四玉(15)  \r
   3 １五歩(16)  \r
   4 １三玉(14)  \r
   5 １四歩(15)  \r
   6 ２四玉(13)  \r
   7 ３五銀(44)  \r
   8 同　玉(24)  \r
   9 ８五飛成(83)\r
  10 ３四玉(35)  \r
  11 ２六桂(38)  \r
  12 同　歩(25)  \r
  13 ４四馬(66)  \r
  14 ２三玉(34)  \r
  15 ２五龍(85)  \r
  16 ２四桂打    \r
  17 ３四龍(25)  \r
  18 同　歩(33)  \r
  19 ３三馬(44)  \r
  20 同　玉(23)  \r
  21 ２五桂(37)  \r
  22 ２二玉(33)  \r
  23 １三歩成(14)\r
  24 同　歩(12)  \r
  25 ２三歩打    \r
  26 同　銀(32)  \r
  27 １三香成(19)\r
  28 １一玉(22)  \r
  29 １二歩打    \r
  30 同　銀(23)  \r
  31 同　成香(13)\r
  32 同　玉(11)  \r
  33 １三歩打    \r
  34 １一玉(12)  \r
  35 １二銀打    \r
  36 ２二玉(11)  \r
  37 ２三銀成(12)\r
  38 同　玉(22)  \r
  39 ４一角成(63)\r
  40 ３二桂打    \r
  41 同　馬(41)  \r
  42 同　玉(23)  \r
  43 ３三金打    \r
  44 ３一玉(32)  \r
  45 ４三桂打    \r
  46 ４一玉(31)  \r
  47 ５一と(62)  \r
  48 詰み        \r
まで47手詰\r
`,r3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0131\r
作者：三代伊藤宗看\r
発表誌：将棋無双 第37番\r
発表年月：享保19年8月\r
手数：47\r
完全性：不詰\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀四　香　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v桂v香 とv金v龍 ・ ・ ・ ・|一\r
| ・ 歩 ・ ・v角 ・ ・ ・ ・|二\r
| 歩v玉 ・v飛 ・ ・ ・ ・ ・|三\r
|v歩 ・ 香v歩 香 ・ ・ ・ ・|四\r
|v金 ・ ・ ・ ・ ・ ・ ・ ・|五\r
| 桂 ・ 歩 金v馬 ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　桂二　歩三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７五桂打    \r
   2 ９三玉(83)  \r
   3 ８四金打    \r
   4 ８二玉(93)  \r
   5 ７二と(71)  \r
   6 同　金(61)  \r
   7 同　香成(74)\r
   8 ９二玉(82)  \r
   9 ９三歩打    \r
  10 同　飛(63)  \r
  11 ８三桂成(75)\r
  12 同　飛(93)  \r
  13 ９三歩打    \r
  14 同　飛(83)  \r
  15 ８三金(84)  \r
  16 同　飛(93)  \r
*８三同桂以下不詰\r
  17 ８四桂打    \r
  18 同　飛(83)  \r
  19 同　桂(96)  \r
  20 ９三玉(92)  \r
*８四同香以下不詰\r
  21 ７三飛打    \r
  22 ８三桂(91)  \r
  23 ９二金打    \r
  24 ８四玉(93)  \r
  25 ７五金(66)  \r
  26 同　桂(83)  \r
  27 同　飛成(73)\r
  28 ８三玉(84)  \r
  29 ７三龍(75)  \r
  30 ９二玉(83)  \r
  31 ８四桂打    \r
  32 ９一玉(92)  \r
  33 ９二歩打    \r
  34 同　馬(56)  \r
  35 同　桂成(84)\r
  36 同　玉(91)  \r
  37 ８三角打    \r
  38 ９一玉(92)  \r
  39 ８一成香(72)\r
  40 同　龍(51)  \r
  41 ９二香打    \r
  42 同　龍(81)  \r
  43 同　角成(83)\r
  44 同　玉(91)  \r
  45 ８二飛打    \r
  46 ９一玉(92)  \r
  47 ７一龍(73)  \r
  48 詰み        \r
まで47手詰\r
`,i3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0138\r
作者：三代伊藤宗看\r
発表誌：将棋無双 第72番\r
発表年月：享保19年8月\r
手数：41\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v香 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v飛|二\r
| ・ ・ ・v歩 ・v銀 ・ ・ 飛|三\r
| ・ ・ ・ 角v香v香 ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ 金 ・ ・|五\r
| ・ ・ ・ ・ 角 ・vと ・v金|六\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|七\r
| ・ ・ ・ 銀v歩 ・ ・ ・ ・|八\r
| ・ ・ ・ ・ 銀 ・ 桂 歩 ・|九\r
+---------------------------+\r
先手の持駒：桂三　香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 １八歩打    \r
   2 ２六玉(17)  \r
   3 １六飛成(13)\r
   4 同　飛(12)  \r
   5 ２八香打    \r
   6 ３五玉(26)  \r
   7 ４七桂打    \r
   8 同　と(36)  \r
   9 同　桂(39)  \r
  10 同　香(44)  \r
  11 ４五金打    \r
  12 ３六玉(35)  \r
  13 ４八桂打    \r
  14 同　香(47)  \r
  15 ４六金(45)  \r
  16 ３七玉(36)  \r
  17 ４九桂打    \r
  18 同　香成(48)\r
  19 ４八銀(59)  \r
  20 同　玉(37)  \r
  21 ７五角(64)  \r
  22 ３七玉(48)  \r
  23 ４七金(46)  \r
  24 ３八玉(37)  \r
  25 ４八金(47)  \r
  26 ３九玉(38)  \r
  27 ３八金(48)  \r
  28 ２九玉(39)  \r
  29 ３九金(38)  \r
  30 １八玉(29)  \r
  31 １九歩打    \r
  32 １七玉(18)  \r
  33 ５三角成(75)\r
  34 ２六歩打    \r
  35 １八歩(19)  \r
  36 同　玉(17)  \r
  37 ５四馬(53)  \r
  38 同　銀(43)  \r
  39 １九香打     +\r
  40 同　玉(18)  \r
  41 ２九金(39)  \r
  42 詰み        \r
まで41手詰\r
\r
変化：39手\r
  39 ２九金(39)  \r
  40 １七玉(18)  \r
  41 １九香打    \r
  42 詰み        \r
まで41手詰\r
`,e3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0357\r
作者：伊藤看寿    \r
発表誌：将棋図巧 第8番\r
発表年月：宝暦5年3月\r
手数：41\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀三　桂　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v馬v桂 ・v金 ・|一\r
| ・ ・ ・ ・ ・v玉v歩 歩v香|二\r
| ・ ・v香 ・v角 ・v銀 ・ ・|三\r
| ・ ・ ・v杏 ・ 桂 ・ 金 歩|四\r
| ・ ・ ・ ・ 金 ・ と ・ 桂|五\r
| ・ ・ ・ ・ ・ 香 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・v龍 ・ ・ ・ ・ ・ ・ ・|八\r
| 飛 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４三歩打    \r
   2 同　玉(42)  \r
   3 ３三金(24)  \r
   4 同　歩(32)  \r
   5 ５二銀打    \r
   6 同　馬(51)  \r
   7 ３二桂成(44)\r
   8 ４四桂打    \r
   9 同　金(55)  \r
  10 同　角(53)  \r
  11 同　と(35)  \r
  12 ３二玉(43)  \r
  13 ８七角打    \r
  14 同　龍(88)  \r
  15 ４三金打    \r
  16 同　馬(52)  \r
  17 同　と(44)  \r
  18 ２二玉(32)  \r
  19 ３四桂打    \r
  20 同　歩(33)  \r
  21 ７七角打    \r
  22 同　龍(87)  \r
  23 ９二飛成(99)\r
  24 ３二角打    \r
  25 同　と(43)  \r
  26 同　金(21)  \r
  27 同　龍(92)  \r
  28 同　玉(22)  \r
  29 ２三金打    \r
  30 ３一玉(32)  \r
  31 ２二角打    \r
  32 ２一玉(31)  \r
  33 １二金(23)  \r
  34 ３二玉(21)  \r
  35 ３三香打    \r
  36 同　桂(41)  \r
  37 ２三桂成(15)\r
  38 同　玉(32)  \r
  39 １三角成(22)\r
  40 ３二玉(23)  \r
  41 ２二馬(13)  \r
  42 詰み        \r
まで41手詰\r
`,v3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0141\r
作者：伊藤看寿    \r
発表誌：将棋図巧 第17番\r
発表年月：宝暦5年3月\r
手数：41\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　桂　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・ ・ 角 ・ ・v龍 ・ ・|一\r
|v銀 ・v銀 ・ ・ ・ 杏 ・ ・|二\r
|v玉 ・ ・v銀 ・v金 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ 角 ・ ・ ・|四\r
|v香vと ・v銀v杏 ・ ・ ・ ・|五\r
| ・ 桂 龍 ・ ・ 桂 ・ ・ ・|六\r
| ・ ・v歩 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７一角(44)  \r
   2 ８四玉(93)  \r
   3 ６二角(71)  \r
   4 ７三桂打    \r
   5 ９六桂打    \r
   6 同　香(95)  \r
   7 ７三角(62)  \r
   8 ９三玉(84)  \r
   9 ９四歩打    \r
  10 ８三玉(93)  \r
  11 ９五桂打    \r
  12 同　と(85)  \r
  13 ７二角成(61)\r
  14 同　玉(83)  \r
  15 ９五角成(73)\r
  16 ６一玉(72)  \r
  17 ７一龍(76)  \r
  18 同　玉(61)  \r
  19 ６二銀打    \r
  20 ８一玉(71)  \r
  21 ８二歩打    \r
  22 同　玉(81)  \r
  23 ７三馬(95)  \r
  24 ８一玉(82)  \r
  25 ６三馬(73)  \r
  26 ７二飛打    \r
  27 同　馬(63)  \r
  28 同　玉(81)  \r
  29 ７三銀打    \r
  30 ６三玉(72)  \r
  31 ６四飛打    \r
  32 ５二玉(63)  \r
  33 ６一銀(62)  \r
  34 同　龍(31)  \r
  35 同　飛成(64)\r
  36 同　玉(52)  \r
  37 ６三飛打    \r
  38 ７一玉(61)  \r
  39 ６二飛成(63)\r
  40 ８一玉(71)  \r
  41 ８二龍(62)  \r
  42 詰み        \r
まで41手詰\r
`,t3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0192\r
作者：久留島喜内  \r
発表誌：将棋妙案 第94番\r
発表年月：宝暦？\r
手数：43\r
備考：11件登録、『橘仙貼璧 第102番』と同じ\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v桂 ・ と ・ と|一\r
| ・ ・ ・ 歩 ・ ・v歩 ・ ・|二\r
| 角 ・v歩v銀 ・ ・ ・v金 香|三\r
| ・ 銀 と ・ ・ 馬 ・ ・ ・|四\r
| 香 ・ ・ ・ ・ ・ ・ 桂 歩|五\r
| 龍v金vと ・ 金 ・v玉 ・ ・|六\r
| ・vとv香 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ 銀 ・ 銀 香|八\r
| ・ 桂 ・ ・ 金 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４六金(56)  \r
   2 同　玉(36)  \r
   3 ３七銀(28)  \r
   4 ５六玉(46)  \r
   5 ６八桂打    \r
   6 ６五玉(56)  \r
   7 ７七桂(89)  \r
   8 同　と(87)  \r
   9 ６六香打    \r
  10 ７四玉(65)  \r
  11 ８三銀(84)  \r
  12 同　玉(74)  \r
  13 ８六龍(96)  \r
  14 同　と(76)  \r
  15 ８四金打    \r
  16 ７二玉(83)  \r
  17 ７一角成(93)\r
  18 同　玉(72)  \r
  19 ６一歩成(62)\r
  20 同　玉(71)  \r
  21 ６三香(66)  \r
  22 ５二玉(61)  \r
  23 ６二香成(63)\r
  24 ４二玉(52)  \r
  25 ３二と(31)  \r
  26 同　玉(42)  \r
  27 ３三銀打    \r
  28 ４一玉(32)  \r
  29 ４二歩打    \r
  30 ３一玉(41)  \r
  31 ２一と(11)  \r
  32 同　玉(31)  \r
  33 １二香成(13)\r
  34 同　玉(21)  \r
  35 １三桂成(25)\r
  36 同　玉(12)  \r
  37 １四歩(15)  \r
  38 同　金(23)  \r
  39 同　香(18)  \r
  40 同　玉(13)  \r
  41 ２四金打    \r
  42 １五玉(14)  \r
  43 ２六馬(44)  \r
  44 詰み        \r
まで43手詰\r
`,o3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0360\r
作者：九代大橋宗桂\r
発表誌：将棋舞玉 第8番\r
発表年月：天明6年4月\r
手数：41\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金二　銀三　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|一\r
| ・ ・ ・ ・ ・ ・ ・ 角 ・|二\r
| 飛 ・ ・ ・ ・ ・ ・ ・v龍|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・v歩v歩 ・v歩 ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・v金 ・ ・ ・ ・ ・|七\r
|v歩 ・ 銀 ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　桂四　\r
先手：\r
後手：\r
手数----指手--\r
   1 １一角成(22)\r
   2 ３一玉(21)  \r
   3 ２三桂打    \r
   4 同　龍(13)  \r
   5 ２一馬(11)  \r
   6 ４一玉(31)  \r
   7 ３三桂打    \r
   8 同　龍(23)  \r
   9 ３一馬(21)  \r
  10 ５一玉(41)  \r
  11 ４三桂打    \r
  12 同　龍(33)  \r
  13 ４一馬(31)  \r
  14 ６一玉(51)  \r
  15 ５三桂打    \r
  16 同　龍(43)  \r
  17 ５一馬(41)  \r
  18 ７一玉(61)  \r
  19 ９一飛成(93)\r
  20 ７二玉(71)  \r
  21 ７三金打    \r
  22 同　龍(53)  \r
  23 ６一龍(91)  \r
  24 ８三玉(72)  \r
  25 ７三馬(51)  \r
  26 同　玉(83)  \r
  27 ７二飛打    \r
  28 ８四玉(73)  \r
  29 ６四龍(61)  \r
  30 ９五玉(84)  \r
  31 ９二飛成(72)\r
  32 ８六玉(95)  \r
  33 ９七龍(92)  \r
  34 同　玉(86)  \r
  35 ６七龍(64)  \r
  36 ８六玉(97)  \r
  37 ９七龍(67)  \r
  38 ７六玉(86)  \r
  39 ６六金打    \r
  40 同　玉(76)  \r
  41 ６七龍(97)  \r
  42 詰み        \r
まで41手詰\r
`,s3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0356\r
作者：九代大橋宗桂\r
発表誌：将棋舞玉 第11番\r
発表年月：天明6年4月\r
手数：43\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金二　銀三　香二　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉 ・v桂 銀 ・ ・ ・ ・ ・|一\r
| 角 ・v香v歩 ・ ・ ・ ・ ・|二\r
| ・v金 ・ ・ ・ ・ ・ ・ ・|三\r
| ・ 歩 ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・v桂 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・v香 ・ ・ ・ ・ ・ ・ ・|七\r
| ・v金 ・ ・ ・ ・ ・ ・ ・|八\r
| 歩 飛 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一飛打    \r
   2 ９二玉(91)  \r
   3 ８三歩成(84)\r
   4 同　桂(71)  \r
   5 ８二金打    \r
   6 ９三玉(92)  \r
   7 ８三金(82)  \r
   8 ９四玉(93)  \r
   9 ８四金(83)  \r
  10 ９五玉(94)  \r
  11 ８五金(84)  \r
  12 ９六玉(95)  \r
  13 ８六金(85)  \r
  14 ９七玉(96)  \r
  15 ８七金(86)  \r
  16 同　桂成(75)\r
  17 ９八香打    \r
  18 同　成桂(87)\r
  19 同　歩(99)  \r
  20 ９六玉(97)  \r
  21 ９七歩(98)  \r
  22 ９五玉(96)  \r
  23 ８七桂打    \r
  24 同　金(88)  \r
  25 ９六歩(97)  \r
  26 ９四玉(95)  \r
  27 ８六桂打    \r
  28 同　金(87)  \r
  29 ９五歩(96)  \r
  30 ９三玉(94)  \r
  31 ８五桂打    \r
  32 同　金(86)  \r
  33 ９四歩(95)  \r
  34 ９二玉(93)  \r
  35 ８四桂打    \r
  36 同　金(85)  \r
  37 ９三歩成(94)\r
  38 ８一玉(92)  \r
  39 ８四飛(89)  \r
  40 ７一玉(81)  \r
  41 ８一飛成(84)\r
  42 同　玉(71)  \r
  43 ８二金打    \r
  44 詰み        \r
まで43手詰\r
`,a3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0224\r
作者：松本朋雅    \r
発表誌：東京二六新聞\r
発表年月：1904年12月4日\r
手数：43\r
完全性：余詰\r
備考：5件登録、「日露戦争記念詰将棋 第14番」\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀　桂　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| とv歩 ・v香 ・ ・ ・ ・ ・|一\r
| ・v玉v桂 ・v角 ・ ・ ・ ・|二\r
| ・ 桂 飛 ・ ・v銀 ・ ・ ・|三\r
| ・ ・ ・ 角 ・ ・ ・ ・ ・|四\r
| ・ ・ 桂 ・ ・v歩 ・ ・ ・|五\r
| 歩 ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・v龍 ・ 銀 ・ ・ ・ ・ ・|七\r
| ・vと 銀 ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ９二と(91)  \r
   2 同　玉(82)  \r
   3 ９一桂成(83)\r
   4 ８二玉(92)  \r
   5 ８三飛成(73)\r
   6 ７一玉(82)  \r
   7 ８一成桂(91)\r
   8 ６二玉(71)  \r
   9 ５三龍(83)  \r
  10 ５一玉(62)  \r
  11 ４二龍(53)  \r
  12 ６二玉(51)  \r
  13 ６三桂成(75)\r
  14 同　玉(62)  \r
  15 ５三龍(42)  \r
  16 ７四玉(63)  \r
  17 ７三龍(53)  \r
  18 ８五玉(74)  \r
  19 ７五龍(73)  \r
  20 ９四玉(85)  \r
  21 ９五龍(75)  \r
  22 ８三玉(94)  \r
  23 ８二成桂(81)\r
  24 ７四玉(83)  \r
  25 ７五龍(95)  \r
  26 ６三玉(74)  \r
  27 ７三龍(75)  \r
  28 ５四玉(63)  \r
  29 ５三龍(73)  \r
  30 ６五玉(54)  \r
  31 ６六歩打    \r
  32 ７四玉(65)  \r
  33 ７三龍(53)  \r
  34 ８五玉(74)  \r
  35 ７五龍(73)  \r
  36 ９六玉(85)  \r
  37 ８七銀(78)  \r
  38 同　玉(96)  \r
  39 ９七飛打     +\r
  40 同　玉(87)  \r
  41 ９五龍(75)  \r
  42 ８七玉(97)  \r
  43 ９七龍(95)  \r
  44 詰み        \r
まで43手詰\r
\r
変化：39手\r
  39 ７八銀(67)  \r
  40 ９八玉(87)  \r
  41 ９七飛打    \r
  42 同　玉(98)  \r
  43 ９五龍(75)  \r
  44 詰み        \r
まで43手詰\r
`,u3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0243\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1926年5月\r
手数：43\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂二　香　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v金v銀 ・ ・ ・ 銀 龍v金|一\r
| ・v歩 ・v香v歩 ・ ・ 馬v銀|二\r
| ・ ・ ・ ・v香 ・ ・ ・ ・|三\r
| ・ 歩v歩 ・ ・v歩vと ・v歩|四\r
| ・ 桂 ・ ・v香 ・ ・ ・ ・|五\r
| ・ ・ ・ 金 ・ ・ 歩v玉v金|六\r
| ・ ・ ・v龍 ・v銀 ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ 馬 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 歩|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二馬(22)  \r
   2 ３六玉(26)  \r
   3 ３七銀打    \r
   4 ４五玉(36)  \r
   5 ３四馬(12)  \r
   6 ５四玉(45)  \r
   7 ４三馬(34)  \r
   8 ６三玉(54)  \r
   9 ５二馬(43)  \r
  10 ７二玉(63)  \r
  11 ６一馬(52)  \r
  12 ６三玉(72)  \r
  13 ６四歩打    \r
  14 同　玉(63)  \r
  15 ６五歩打    \r
  16 ５四玉(64)  \r
  17 ４三馬(61)  \r
  18 ６三玉(54)  \r
  19 ５二馬(43)  \r
  20 ７二玉(63)  \r
  21 ６四桂打    \r
  22 同　香(62)  \r
  23 ６一馬(52)  \r
  24 ６三玉(72)  \r
  25 ６四歩(65)  \r
  26 同　玉(63)  \r
  27 ６五香打    \r
  28 ５四玉(64)  \r
  29 ４三馬(61)  \r
  30 同　玉(54)  \r
  31 １六馬(38)  \r
  32 ２五歩打    \r
  33 ２三龍(21)  \r
  34 ３三歩打    \r
  35 ２五馬(16)  \r
  36 ５四玉(43)  \r
  37 ６四金打    \r
  38 ４五玉(54)  \r
  39 ３四馬(25)  \r
  40 同　歩(33)  \r
  41 ４六歩打    \r
  42 ３五玉(45)  \r
  43 ２六龍(23)  \r
  44 詰み        \r
まで43手詰\r
`,_3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0245\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1926年7月\r
手数：45\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　桂　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ 角 ・ ・ ・ ・ ・v玉|一\r
| ・ ・ ・ ・ ・v金 銀 ・ ・|二\r
| ・ ・ 杏v桂 ・ ・v馬 ・ ・|三\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|四\r
| ・v金 ・v香 ・ ・ ・ ・v香|五\r
| ・ 龍 ・ ・v銀 ・ ・ ・ ・|六\r
| ・ ・ ・ 歩vとv歩 ・ ・vと|七\r
| ・ ・ ・ ・v歩 桂 ・vとv香|八\r
| ・ ・ ・ ・ ・ 金 ・ ・ 飛|九\r
+---------------------------+\r
先手の持駒：銀二　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二銀打    \r
   2 同　馬(33)  \r
   3 同　桂成(34)\r
   4 同　玉(11)  \r
   5 ２三銀打    \r
   6 ３三玉(22)  \r
   7 ３九飛(19)  \r
   8 同　と(28)  \r
   9 ６六角打    \r
  10 ２四玉(33)  \r
  11 ５七角(66)  \r
  12 ３三玉(24)  \r
  13 ６六角(57)  \r
  14 ２四玉(33)  \r
  15 ３三角成(66)\r
  16 同　玉(24)  \r
  17 ３四歩打    \r
  18 ２四玉(33)  \r
  19 ２五歩打    \r
  20 同　玉(24)  \r
  21 ２六角成(71)\r
  22 同　玉(25)  \r
  23 ５六龍(86)  \r
  24 ３五玉(26)  \r
  25 ３六龍(56)  \r
  26 ４四玉(35)  \r
  27 ５六桂(48)  \r
  28 ５四玉(44)  \r
  29 ４五銀打    \r
  30 ５三玉(54)  \r
  31 ４四銀(45)  \r
  32 ５二玉(53)  \r
  33 ６四桂(56)  \r
  34 ５一玉(52)  \r
  35 ５六龍(36)  \r
  36 ５三桂打    \r
  37 同　龍(56)  \r
  38 同　金(42)  \r
  39 ４三桂打    \r
  40 同　金(53)  \r
  41 ５二桂成(64)\r
  42 同　玉(51)  \r
  43 ４三銀成(44)\r
  44 ６一玉(52)  \r
  45 ６二金打    \r
  46 詰み        \r
まで45手詰\r
`,l3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0246\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1926年10月\r
手数：45\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀　香　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ と|一\r
| ・ ・ ・ ・ ・ ・ ・v香 ・|二\r
| ・ ・ ・ と ・v桂 ・ ・ ・|三\r
| 馬 銀v金 龍 ・ 歩 ・ ・ ・|四\r
| ・ ・ ・ ・ ・ 龍 ・ ・ ・|五\r
| ・v全 銀v桂v歩 ・ ・ ・ ・|六\r
| ・ 金 ・ ・v玉 ・ 金 ・ ・|七\r
| ・ ・v馬 ・ ・ ・ ・ ・ ・|八\r
| ・ 歩 ・ ・ ・ ・vと ・ ・|九\r
+---------------------------+\r
先手の持駒：桂二　香二　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六龍(64)  \r
   2 同　玉(57)  \r
   3 ６七銀(76)  \r
   4 同　馬(78)  \r
*手順前後あり\r
   5 ７八桂打     +\r
   6 同　馬(67)  \r
   7 ６九香打    \r
   8 同　馬(78)  \r
   9 ６八香打    \r
  10 同　馬(69)  \r
  11 ７五銀(84)  \r
  12 同　金(74)  \r
  13 ５八桂打    \r
  14 同　馬(68)  \r
  15 ７八桂打    \r
  16 ５七玉(66)  \r
  17 ５八馬(94)  \r
  18 同　玉(57)  \r
  19 ３六角打    \r
  20 ６七玉(58)  \r
  21 ６八歩打    \r
  22 同　玉(67)  \r
  23 ４八龍(45)  \r
  24 ７九玉(68)  \r
  25 ５九龍(48)  \r
  26 ７八玉(79)  \r
  27 ８八金(87)  \r
  28 ６七玉(78)  \r
  29 ５八角(36)  \r
  30 ６六玉(67)  \r
  31 ６八龍(59)  \r
  32 ５五玉(66)  \r
  33 ６四龍(68)  \r
  34 ４五玉(55)  \r
  35 ３六金(37)  \r
  36 ３四玉(45)  \r
  37 ４三歩成(44)\r
  38 ２三玉(34)  \r
  39 ２四龍(64)  \r
  40 同　玉(23)  \r
  41 ２五金(36)  \r
  42 ２三玉(24)  \r
  43 ３五桂打     +\r
  44 １三玉(23)  \r
  45 １四金(25)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：43手\r
  43 １五桂打    \r
  44 １三玉(23)  \r
  45 １四金(25)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：5手\r
   5 ７五銀(84)  \r
   6 同　金(74)  \r
   7 ７八桂打    \r
   8 同　馬(67)  \r
   9 ６九香打    \r
  10 同　馬(78)  \r
  11 ６八香打    \r
  12 同　馬(69)  \r
  13 ５八桂打    \r
  14 同　馬(68)  \r
  15 ７八桂打    \r
  16 ５七玉(66)  \r
  17 ５八馬(94)  \r
  18 同　玉(57)  \r
  19 ３六角打    \r
  20 ６七玉(58)  \r
  21 ６八歩打    \r
  22 同　玉(67)  \r
  23 ４八龍(45)  \r
  24 ７九玉(68)  \r
  25 ５九龍(48)  \r
  26 ７八玉(79)  \r
  27 ８八金(87)  \r
  28 ６七玉(78)  \r
  29 ５八角(36)  \r
  30 ６六玉(67)  \r
  31 ６八龍(59)  \r
  32 ５五玉(66)  \r
  33 ６四龍(68)  \r
  34 ４五玉(55)  \r
  35 ３六金(37)  \r
  36 ３四玉(45)  \r
  37 ４三歩成(44)\r
  38 ２三玉(34)  \r
  39 ２四龍(64)  \r
  40 同　玉(23)  \r
  41 ２五金(36)  \r
  42 ２三玉(24)  \r
  43 ３五桂打    \r
  44 １三玉(23)  \r
  45 １四金(25)  \r
  46 詰み        \r
まで45手詰\r
`,c3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0247\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1926年12月\r
手数：45\r
完全性：余詰\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀二　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v歩 ・ ・ ・ ・ ・ ・|一\r
|v馬v香 ・ ・ ・ ・v歩 と 飛|二\r
|v香 ・ 香 ・ ・ ・ ・ ・ ・|三\r
| ・ ・v香v歩v歩v歩 ・ 角v龍|四\r
| ・ と ・ ・ ・ ・ ・ ・v歩|五\r
| 銀 ・ ・ ・v玉v圭 ・ ・vと|六\r
| ・v歩 歩 ・ ・v銀 ・ ・ ・|七\r
| ・ ・ ・ ・ 金 ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　桂三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５七金打    \r
   2 同　成桂(46)\r
   3 同　金(58)  \r
   4 ４五玉(56)  \r
   5 ４六金(57)  \r
   6 ３四玉(45)  \r
   7 ３三角成(24)\r
   8 同　玉(34)  \r
   9 ４五桂打    \r
  10 同　歩(44)  \r
  11 ３二と(22)  \r
  12 ４三玉(33)  \r
  13 ５五桂打    \r
  14 同　歩(54)  \r
  15 ４二と(32)  \r
  16 ５三玉(43)  \r
  17 ６五桂打     +\r
  18 同　歩(64)  \r
  19 ５二と(42)  \r
  20 ６三玉(53)  \r
  21 ７五桂打    \r
  22 同　香(74)  \r
  23 ６二と(52)  \r
  24 ７三玉(63)  \r
  25 ６三金打    \r
  26 ８三玉(73)  \r
  27 ８四歩打    \r
  28 同　龍(14)  \r
  29 同　と(85)  \r
  30 同　玉(83)  \r
  31 １四飛成(12)\r
  32 ７四角打    \r
  33 ８五飛打    \r
  34 ９四玉(84)  \r
  35 ７四龍(14)  \r
  36 同　馬(92)  \r
  37 ６一角打    \r
  38 ８三馬(74)  \r
  39 同　角成(61)\r
  40 同　香(82)  \r
  41 ９五飛(85)  \r
  42 ８四玉(94)  \r
  43 ７三角打    \r
  44 ７四玉(84)  \r
  45 ６四金(63)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：17手\r
  17 ５二と(42)  \r
  18 ６三玉(53)  \r
  19 ６二と(52)  \r
  20 ７三玉(63)  \r
  21 ６五桂打    \r
  22 同　歩(64)  \r
  23 ６三金打    \r
  24 ８三玉(73)  \r
  25 ７五桂打    \r
  26 同　香(74)  \r
  27 ８四歩打    \r
  28 同　龍(14)  \r
  29 同　と(85)  \r
  30 同　玉(83)  \r
  31 １四飛成(12)\r
  32 ７四角打    \r
  33 ８五飛打    \r
  34 ９四玉(84)  \r
  35 ７四龍(14)  \r
  36 同　馬(92)  \r
  37 ６一角打    \r
  38 ８三馬(74)  \r
  39 同　角成(61)\r
  40 同　香(82)  \r
  41 ９五飛(85)  \r
  42 ８四玉(94)  \r
  43 ７三角打    \r
  44 ７四玉(84)  \r
  45 ６四金(63)  \r
  46 詰み        \r
まで45手詰\r
`,m3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0268\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1931年9月\r
手数：49\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　銀二　桂三　香三　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v玉 ・ ・ ・ ・|一\r
|v歩v金 ・ ・ ・ ・ ・v金v歩|二\r
| ・v全 ・ ・ 桂 ・ ・v金 ・|三\r
| ・ 歩 と ・ 歩 ・ と 歩 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　銀　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４一桂成(53)\r
   2 同　玉(51)  \r
   3 ４九香打    \r
   4 ５一玉(41)  \r
   5 ４二香成(49)\r
   6 ６一玉(51)  \r
   7 ５二成香(42)\r
   8 ７一玉(61)  \r
   9 ６二成香(52)\r
  10 ８一玉(71)  \r
  11 ７二銀打    \r
  12 ９一玉(81)  \r
  13 ８一金打    \r
  14 同　金(82)  \r
  15 同　銀成(72)\r
  16 同　玉(91)  \r
  17 ７二成香(62)\r
  18 同　玉(81)  \r
  19 ８三歩成(84)\r
  20 ６一玉(72)  \r
  21 ７二と(83)  \r
  22 ５一玉(61)  \r
  23 ６二と(72)  \r
  24 ４一玉(51)  \r
  25 ５二と(62)  \r
  26 ３一玉(41)  \r
  27 ４二と(52)  \r
  28 ２一玉(31)  \r
  29 ３二銀打    \r
  30 １一玉(21)  \r
  31 ２一金打    \r
  32 同　金(22)  \r
  33 同　銀成(32)\r
  34 同　玉(11)  \r
  35 ３二と(42)  \r
  36 同　玉(21)  \r
  37 ２三歩成(24)\r
  38 ４一玉(32)  \r
  39 ３二と(23)  \r
  40 ５一玉(41)  \r
  41 ４二と(32)  \r
  42 ６一玉(51)  \r
  43 ５二と(42)  \r
  44 ７一玉(61)  \r
  45 ６二と(52)  \r
  46 同　玉(71)  \r
  47 ６三金打    \r
  48 ５一玉(62)  \r
  49 ５二金打    \r
  50 詰み        \r
まで49手詰\r
`,d3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0275\r
作者：酒井桂史    \r
発表誌：将棋月報\r
発表年月：1932年6月\r
手数：43\r
完全性：余詰\r
備考：8件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀　桂　香三　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| と ・v玉 ・v金v歩v銀v歩 ・|一\r
| ・ ・ ・v桂 歩v銀 ・ ・ ・|二\r
| ・ 香v歩 ・ ・ ・v桂 ・ ・|三\r
| ・ ・ ・ ・ ・ と ・ ・ ・|四\r
| ・ ・ と ・ ・v龍v銀 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|六\r
| ・ ・ ・v金 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 角 馬 ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　歩三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一と(91)  \r
   2 ７二玉(71)  \r
   3 ８二香成(83)\r
   4 ６三玉(72)  \r
   5 ６四歩打    \r
   6 ５二玉(63)  \r
   7 ５七飛打    \r
   8 同　金(67)  \r
   9 ６三歩成(64)\r
  10 同　玉(52)  \r
  11 ４五角(89)  \r
  12 同　桂(33)  \r
  13 ６七飛打    \r
  14 同　金(57)  \r
  15 ６四歩打    \r
  16 ５二玉(63)  \r
  17 ５三歩打    \r
  18 同　銀(42)  \r
  19 同　と(44)  \r
  20 同　玉(52)  \r
  21 ３五馬(79)  \r
  22 ４二玉(53)  \r
  23 ４三銀打    \r
  24 同　玉(42)  \r
  25 ４四馬(35)  \r
  26 ３二玉(43)  \r
  27 ３三銀打    \r
  28 ２三玉(32)  \r
  29 ２四銀成(33)\r
  30 １二玉(23)  \r
  31 ４五馬(44)  \r
  32 １一玉(12)  \r
  33 ２三桂打    \r
  34 １二玉(11)  \r
  35 ３一桂成(23)\r
  36 ２二玉(12)  \r
  37 ２三馬(45)   +\r
  38 ３一玉(22)  \r
  39 ３二銀打    \r
  40 ４二玉(31)  \r
  41 ３三馬(23)  \r
  42 ５三玉(42)  \r
  43 ４三馬(33)  \r
  44 詰み        \r
まで43手詰\r
\r
変化：37手\r
  37 ３二成桂(31)\r
  38 同　玉(22)  \r
  39 ２三馬(45)  \r
  40 ４三玉(32)  \r
  41 ３四馬(23)  \r
  42 ５三玉(43)  \r
  43 ４四馬(34)  \r
  44 ４二玉(53)  \r
  45 ３三成銀(24)\r
  46 ３一玉(42)  \r
  47 ３二銀打    \r
  48 詰み        \r
まで47手詰\r
`,f3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0279\r
作者：小林豊      \r
発表誌：将棋月報\r
発表年月：1933年6月\r
手数：43\r
完全性：余詰\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：香　歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ と ・v玉v香v金v桂 ・|一\r
| ・ ・ ・ ・v桂 ・ 歩 ・ ・|二\r
| ・ ・ ・ ・v香 ・ ・ 馬 と|三\r
| ・ ・v歩 歩 歩v飛 ・vと ・|四\r
|v角 歩 金v金 桂 ・ ・ ・v飛|五\r
| ・ ・ ・ ・ ・ 歩 金 香 ・|六\r
| ・ ・ 歩 ・vと 桂vと ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６二銀打     +\r
   2 同　角(95)  \r
   3 ４二銀打    \r
   4 同　玉(51)  \r
   5 ３三銀打    \r
   6 同　桂(21)  \r
   7 ５一銀打    \r
   8 同　角(62)  \r
   9 ５三歩成(54)\r
  10 同　玉(42)  \r
  11 ６三歩成(64)\r
  12 ４二玉(53)  \r
  13 ４三香打    \r
  14 同　飛(44)  \r
  15 同　桂成(55)\r
  16 同　玉(42)  \r
  17 ５三飛打    \r
  18 ４四玉(43)  \r
  19 ３三飛成(53)\r
  20 同　角(51)  \r
  21 ４五金(36)  \r
  22 ４三玉(44)  \r
  23 ３五桂打    \r
  24 同　と(24)  \r
  25 ３三馬(23)  \r
  26 同　玉(43)  \r
  27 ２三と(13)  \r
  28 ４三玉(33)  \r
  29 ５五桂(47)  \r
  30 同　金(65)  \r
  31 ４四金(45)  \r
  32 同　玉(43)  \r
  33 ６二角打    \r
  34 ３四玉(44)  \r
  35 ２四と(23)  \r
  36 ４三玉(34)  \r
  37 ５三角成(62)\r
  38 ３二玉(43)  \r
  39 ２三と(24)  \r
  40 ２一玉(32)  \r
  41 ３一馬(53)  \r
  42 同　玉(21)  \r
  43 ３二金打    \r
  44 詰み        \r
まで43手詰\r
\r
変化：1手\r
   1 ２四馬(23)  \r
   2 同　飛(44)  \r
   3 ６二銀打    \r
   4 同　角(95)  \r
   5 ４二銀打    \r
   6 同　玉(51)  \r
   7 ４三銀打    \r
   8 ３三玉(42)  \r
   9 ３四銀打    \r
  10 同　飛(24)  \r
  11 同　銀成(43)\r
  12 同　玉(33)  \r
  13 ３五飛打    \r
  14 同　飛(15)  \r
  15 同　金(36)  \r
  16 ３三玉(34)  \r
  17 ２三香成(26)\r
  18 ４二玉(33)  \r
  19 ４三飛打    \r
  20 ５一玉(42)  \r
  21 ６三桂(55)  \r
  22 詰み        \r
まで21手詰\r
`,g3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0286\r
作者：田辺重信    \r
発表誌：将棋月報\r
発表年月：1934年9月\r
手数：43\r
完全性：余詰\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀三　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
|v玉 ・ ・ ・v馬 ・ ・v桂 ・|二\r
|v歩 ・v桂 ・v桂 ・v香 ・ ・|三\r
|v龍v歩 ・v香 ・v香v歩 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・vと ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角　金四　銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６二飛打     +\r
   2 同　馬(52)  \r
   3 ８二金打    \r
   4 同　玉(92)  \r
   5 ７四桂打    \r
   6 ８三玉(82)  \r
   7 ９二角打    \r
   8 ７二玉(83)  \r
   9 ８一角(92)   +\r
  10 ８三玉(72)  \r
  11 ９二角成(81)\r
  12 ７二玉(83)  \r
  13 ６二桂成(74)\r
  14 同　玉(72)  \r
  15 ６三金打    \r
  16 同　玉(62)  \r
  17 ７四角打    \r
  18 ５四玉(63)  \r
  19 ８一馬(92)  \r
  20 ４三玉(54)  \r
  21 ４二金打    \r
  22 同　玉(43)  \r
  23 ５一銀打    \r
  24 ３二玉(42)  \r
  25 ４一角成(74)\r
  26 ２一玉(32)  \r
  27 ５四馬(81)  \r
  28 １一玉(21)  \r
  29 ２一金打    \r
  30 １二玉(11)  \r
  31 ２二金(21)  \r
  32 同　玉(12)  \r
  33 ３二馬(54)  \r
  34 １二玉(22)  \r
  35 ２三馬(32)  \r
  36 １一玉(12)  \r
  37 ３三馬(23)  \r
  38 ２二歩打    \r
  39 １三香打    \r
  40 １二歩打    \r
  41 ２三桂打    \r
  42 ２一玉(11)  \r
  43 ３二馬(41)  \r
  44 詰み        \r
まで43手詰\r
\r
変化：9手\r
   9 ６二桂成(74)\r
  10 同　玉(72)  \r
  11 ６三金打    \r
  12 同　玉(62)  \r
  13 ７四角打    \r
  14 ５四玉(63)  \r
  15 ８一角成(92)\r
  16 ４三玉(54)  \r
  17 ４二金打    \r
  18 同　玉(43)  \r
  19 ５一銀打    \r
  20 ３二玉(42)  \r
  21 ４一角(74)  \r
  22 ２一玉(32)  \r
  23 ５四馬(81)  \r
  24 １一玉(21)  \r
  25 ２一金打    \r
  26 １二玉(11)  \r
  27 ２二金(21)  \r
  28 同　玉(12)  \r
  29 ３二馬(54)  \r
  30 １二玉(22)  \r
  31 ２三馬(32)  \r
  32 １一玉(12)  \r
  33 ３三馬(23)  \r
  34 ２二飛打    \r
  35 １三香打    \r
  36 １二歩打    \r
  37 ２三桂打    \r
  38 ２一玉(11)  \r
  39 ３二角成(41)\r
  40 同　飛(22)  \r
  41 １一馬(33)  \r
  42 詰み        \r
まで41手詰\r
\r
変化：1手\r
   1 ８一銀打     +\r
   2 同　玉(92)  \r
   3 ７二金打    \r
   4 同　玉(81)  \r
   5 ５四角打    \r
   6 ６三金打    \r
   7 ９二飛打    \r
   8 ８二香打    \r
   9 同　飛成(92)\r
  10 同　玉(72)  \r
  11 ７四桂打    \r
  12 ７二玉(82)  \r
  13 ８二金打    \r
  14 ６一玉(72)  \r
  15 ６二香打    \r
  16 ５一玉(61)  \r
  17 ６一金打    \r
  18 同　馬(52)  \r
  19 同　香成(62)\r
  20 同　玉(51)  \r
  21 ７二角打    \r
  22 ５一玉(61)  \r
  23 ５二金打    \r
  24 同　玉(51)  \r
  25 ６三角成(72)\r
  26 ４二玉(52)  \r
  27 ４一金打    \r
  28 詰み        \r
まで27手詰\r
\r
変化：1手\r
   1 ９一金打    \r
   2 同　玉(92)  \r
   3 ８一金打    \r
   4 同　玉(91)  \r
   5 ５一飛打    \r
   6 ６一歩打    \r
   7 ５四角打    \r
   8 ６三銀打    \r
   9 ９二銀打    \r
  10 同　玉(81)  \r
  11 ５二飛成(51)\r
  12 ６二香打    \r
  13 ８二金打    \r
  14 同　玉(92)  \r
  15 ７四桂打    \r
  16 同　銀(63)  \r
  17 ７一角打    \r
  18 同　玉(82)  \r
  19 ７二金打    \r
  20 詰み        \r
まで19手詰\r
`,h3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0306\r
作者：杉本兼秋    \r
発表誌：将棋月報\r
発表年月：1938年12月\r
手数：45\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　桂　香二　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v馬v銀 銀 ・|一\r
|v龍 飛 ・ ・v香v金 ・ 歩v桂|二\r
| ・ ・ ・ ・ ・ ・ 銀v玉 ・|三\r
| ・ ・ ・ ・v金 ・v角 ・v銀|四\r
| ・ ・ ・ ・ ・ ・v歩 桂 ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　香　歩五　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二銀(21)  \r
   2 同　玉(23)  \r
   3 １三歩打    \r
   4 １一玉(12)  \r
   5 １二香打    \r
   6 同　角(34)  \r
   7 同　歩成(13)\r
   8 同　玉(11)  \r
   9 ２四桂打    \r
  10 １一玉(12)  \r
  11 ２三桂打    \r
  12 同　馬(41)  \r
  13 １二歩打    \r
  14 同　馬(23)  \r
  15 同　桂成(24)\r
  16 同　玉(11)  \r
  17 ４五角打    \r
  18 同　金(54)  \r
  19 １三歩打    \r
  20 １一玉(12)  \r
  21 ２一歩成(22)\r
  22 同　玉(11)  \r
  23 ５四角打    \r
  24 同　香(52)  \r
  25 １二歩成(13)\r
  26 同　玉(21)  \r
  27 ４二飛成(82)\r
  28 同　龍(92)  \r
  29 １三歩打    \r
  30 ２一玉(12)  \r
  31 １二金打    \r
  32 同　龍(42)  \r
  33 同　歩成(13)\r
  34 同　玉(21)  \r
  35 １三飛打    \r
  36 ２一玉(12)  \r
  37 ２二歩打    \r
  38 同　銀(31)  \r
  39 同　銀成(33)\r
  40 同　玉(21)  \r
  41 ３三飛成(13)\r
  42 ２一玉(22)   +\r
  43 ２二銀打    \r
  44 １二玉(21)  \r
  45 １三龍(33)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：42手\r
  42 １二玉(22)  \r
  43 １三銀打    \r
  44 ２一玉(12)  \r
  45 ２二銀成(13)\r
  46 詰み        \r
まで45手詰\r
`,k3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0390\r
作者：杉本兼秋    \r
発表誌：将棋月報\r
発表年月：1939年1月\r
手数：41\r
完全性：余詰\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀三　桂三　香二　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉v桂 ・ 飛v馬 ・ ・ ・ ・|一\r
|v金 ・ ・ 金 ・ ・ ・ ・ ・|二\r
| と ・v歩 ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・v歩 歩 ・ ・ ・ ・|四\r
| ・ ・ 歩v馬 ・ ・ ・ ・ ・|五\r
|v歩v歩 ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　香二　歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一飛成(61)\r
   2 同　玉(91)  \r
   3 ７二銀打     +\r
   4 ９一玉(81)  \r
   5 ９二と(93)  \r
   6 同　馬(65)  \r
   7 ８一金打    \r
   8 同　馬(92)  \r
   9 ９五香打    \r
  10 ９四桂打    \r
  11 同　香(95)  \r
  12 ９三銀打    \r
  13 ８一銀成(72)\r
  14 ９二玉(91)  \r
  15 ８二成銀(81)\r
  16 同　玉(92)  \r
  17 ８五香打    \r
  18 ８三桂打    \r
  19 ７四桂打    \r
  20 同　歩(73)  \r
  21 ７一角打    \r
  22 ７三玉(82)  \r
  23 ６三金(62)  \r
  24 同　玉(73)  \r
  25 ５三歩成(54)\r
  26 ７二玉(63)  \r
  27 ８三香成(85)\r
  28 ７一玉(72)  \r
  29 ６三桂打    \r
  30 ６一玉(71)  \r
  31 ５一桂成(63)\r
  32 同　玉(61)  \r
  33 ３三角打    \r
  34 ６一玉(51)  \r
  35 ６二歩打    \r
  36 ７一玉(61)  \r
  37 ６三桂打    \r
  38 ８一玉(71)  \r
  39 ８二歩打    \r
  40 同　銀(93)  \r
  41 ９二香成(94)\r
  42 詰み        \r
まで41手詰\r
\r
変化：3手\r
   3 ８五香打    \r
   4 ８四桂打    \r
   5 ７二銀打    \r
   6 ９一玉(81)  \r
   7 ８三桂打    \r
   8 同　馬(65)  \r
   9 ９二と(93)  \r
  10 同　馬(83)  \r
  11 ８一金打    \r
  12 同　馬(92)  \r
  13 同　銀成(72)\r
  14 同　玉(91)  \r
  15 ７二角打    \r
  16 ９一玉(81)  \r
  17 ９二歩打    \r
  18 同　玉(91)  \r
  19 ９三歩打    \r
  20 ９一玉(92)  \r
  21 ９二香打    \r
  22 ８二玉(91)  \r
  23 ８四香(85)  \r
  24 ９三玉(82)  \r
  25 ８三角成(72)\r
  26 詰み        \r
まで25手詰\r
`,y3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0232\r
作者：天野宗歩    \r
発表誌：読売新聞\r
発表年月：1941年6月2日\r
手数：47\r
完全性：不詰\r
備考：14件登録、大小詰物\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　桂二　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v金|二\r
| ・ ・ ・ ・ ・ ・ ・ 銀v玉|三\r
| ・ ・ ・ ・ ・ ・v全v飛 ・|四\r
| ・ ・ ・ ・ ・ 馬 桂 ・ ・|五\r
| ・ ・ ・ ・ 龍v金 ・ ・ ・|六\r
| ・ ・ ・ 角v桂 ・ ・ ・ ・|七\r
| ・ ・ ・v全 ・ ・ ・ ・ ・|八\r
| ・ ・ 銀 ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １二銀成(23)\r
   2 １四玉(13)  \r
   3 １三成銀(12)\r
   4 同　玉(14)  \r
*１五玉以下不詰\r
   5 ２三金打    \r
   6 １四玉(13)  \r
   7 ２四金(23)  \r
   8 同　成銀(34)\r
   9 １二飛打    \r
  10 １三歩打    \r
  11 同　飛成(12)\r
  12 同　玉(14)  \r
  13 ５三龍(56)  \r
  14 １四玉(13)  \r
  15 １三龍(53)  \r
  16 ２五玉(14)  \r
  17 ２六歩打    \r
  18 同　玉(25)  \r
  19 ２四龍(13)  \r
  20 ３七玉(26)  \r
  21 ２七龍(24)  \r
  22 ４八玉(37)  \r
  23 ２八龍(27)  \r
  24 ３八歩打    \r
  25 ３九銀打    \r
  26 ５九玉(48)  \r
  27 ６八銀(79)  \r
  28 ６九玉(59)  \r
  29 ７八銀打    \r
  30 ６八玉(69)  \r
  31 ３八龍(28)  \r
  32 ７九玉(68)  \r
  33 ４九龍(38)  \r
  34 ６八玉(79)  \r
  35 ５八龍(49)  \r
  36 ７九玉(68)  \r
  37 ６九龍(58)  \r
  38 同　桂成(57)\r
  39 ４六馬(45)  \r
  40 ８八玉(79)  \r
  41 ８七金打    \r
  42 ９八玉(88)  \r
  43 ９九歩打    \r
  44 同　玉(98)  \r
  45 ５五馬(46)  \r
  46 ９八玉(99)  \r
  47 ８八馬(55)  \r
  48 詰み        \r
まで47手詰\r
`,b3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0322\r
作者：岡田秋葭    \r
発表誌：将棋月報\r
発表年月：1942年9月\r
手数：47\r
完全性：余詰\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v銀 ・ ・ ・ ・v玉|一\r
| ・ ・ ・ ・ ・ ・v桂 ・ ・|二\r
| ・ ・ 歩 ・ ・ 桂 香 ・ ・|三\r
| ・ ・ ・v歩v歩 ・ 銀 ・ ・|四\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|五\r
| ・ ・ ・ ・v角v角v桂 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ 飛 ・ ・ 龍 ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １八龍(29)  \r
   2 ２一玉(11)  \r
   3 ２七龍(18)   +\r
   4 １一玉(21)  \r
   5 １六龍(27)  \r
   6 ２一玉(11)  \r
   7 ２五龍(16)  \r
   8 １一玉(21)  \r
   9 １四龍(25)  \r
  10 ２一玉(11)  \r
  11 ２三龍(14)  \r
  12 １一玉(21)  \r
  13 １三龍(23)  \r
  14 ２一玉(11)  \r
  15 ３二香成(33) +\r
  16 同　玉(21)  \r
  17 ４四桂打    \r
  18 ２一玉(32)   +\r
  19 ２四龍(13)   +\r
  20 １一玉(21)  \r
  21 １五龍(24)   +\r
  22 ２一玉(11)  \r
  23 ２六龍(15)   +\r
  24 １一玉(21)  \r
  25 １七龍(26)  \r
  26 ２一玉(11)  \r
  27 ２七龍(17)  \r
  28 １一玉(21)  \r
  29 １八龍(27)  \r
  30 ２一玉(11)  \r
  31 ２九飛(59)  \r
  32 同　角成(56)\r
  33 同　龍(18)  \r
  34 ２八桂成(36)\r
  35 同　龍(29)  \r
  36 同　角成(46)\r
  37 ３三桂打    \r
  38 １一玉(21)  \r
  39 ２二角打    \r
  40 同　玉(11)  \r
  41 ２三桂成(35)\r
  42 １一玉(22)  \r
  43 ２一桂成(33)\r
  44 同　玉(11)  \r
  45 ３二桂成(44)\r
  46 １一玉(21)  \r
  47 ２二成桂(32)\r
  48 詰み        \r
まで47手詰\r
\r
変化：23手\r
  23 ２五龍(15)  \r
  24 １一玉(21)  \r
  25 １四龍(25)  \r
  26 ２一玉(11)  \r
  27 ２三龍(14)  \r
  28 １一玉(21)  \r
  29 １三龍(23)  \r
  30 ２一玉(11)  \r
  31 ３一桂成(43)\r
  32 同　玉(21)  \r
  33 ３三龍(13)  \r
  34 ４一玉(31)  \r
  35 ３二龍(33)  \r
  36 ５一玉(41)  \r
  37 ４三桂(35)  \r
  38 詰み        \r
まで37手詰\r
\r
変化：21手\r
  21 １四龍(24)   +\r
  22 ２一玉(11)  \r
  23 ２三龍(14)  \r
  24 １一玉(21)  \r
  25 １三龍(23)  \r
  26 ２一玉(11)  \r
  27 ３一桂成(43)\r
  28 同　玉(21)  \r
  29 ３三龍(13)  \r
  30 ４一玉(31)  \r
  31 ３二龍(33)  \r
  32 ５一玉(41)  \r
  33 ４三桂(35)  \r
  34 詰み        \r
まで33手詰\r
\r
変化：21手\r
  21 １九飛(59)  \r
  22 同　角成(46)\r
  23 １三龍(24)  \r
  24 ２一玉(11)  \r
  25 ３一桂成(43)\r
  26 同　玉(21)  \r
  27 ３三龍(13)  \r
  28 ４一玉(31)  \r
  29 ３二龍(33)  \r
  30 ５一玉(41)  \r
  31 ４三桂(35)  \r
  32 詰み        \r
まで31手詰\r
\r
変化：19手\r
  19 ３一桂成(43) +\r
  20 同　玉(21)  \r
  21 ３三龍(13)  \r
  22 ４一玉(31)  \r
  23 ３二龍(33)  \r
  24 ５一玉(41)  \r
  25 ４三桂(35)  \r
  26 詰み        \r
まで25手詰\r
\r
変化：19手\r
  19 ２三龍(13)   +\r
  20 １一玉(21)  \r
  21 １九飛(59)  \r
  22 同　角成(46)\r
  23 １三龍(23)  \r
  24 ２一玉(11)  \r
  25 ３一桂成(43)\r
  26 同　玉(21)  \r
  27 ３三龍(13)  \r
  28 ４一玉(31)  \r
  29 ３二龍(33)  \r
  30 ５一玉(41)  \r
  31 ４三桂(35)  \r
  32 詰み        \r
まで31手詰\r
\r
変化：19手\r
  19 ２九飛(59)  \r
  20 同　角成(56)\r
  21 ３一桂成(43)\r
  22 同　玉(21)  \r
  23 ３三龍(13)  \r
  24 ４一玉(31)  \r
  25 ３二龍(33)  \r
  26 ５一玉(41)  \r
  27 ４三桂(35)  \r
  28 詰み        \r
まで27手詰\r
\r
変化：18手\r
  18 ４二玉(32)  \r
  19 ３三龍(13)  \r
  20 ５三玉(42)  \r
  21 ５一桂成(43)\r
  22 ６二玉(53)  \r
  23 ６一成桂(51)\r
  24 同　玉(62)  \r
  25 ７二銀打    \r
  26 ５一玉(61)  \r
  27 ５三龍(33)  \r
  28 ４一玉(51)  \r
  29 ５二龍(53)  \r
  30 ３一玉(41)  \r
  31 ３二桂成(44)\r
  32 詰み        \r
まで31手詰\r
\r
変化：15手\r
  15 ２九飛(59)  \r
  16 同　角成(56)\r
  17 ３二香成(33)\r
  18 同　玉(21)  \r
  19 ４四桂打    \r
  20 ４二玉(32)  \r
  21 ３三龍(13)  \r
  22 ５三玉(42)  \r
  23 ５一桂成(43)\r
  24 ６二玉(53)  \r
  25 ６一成桂(51)\r
  26 同　玉(62)  \r
  27 ７二銀打    \r
  28 ５一玉(61)  \r
  29 ５三龍(33)  \r
  30 ４一玉(51)  \r
  31 ５二龍(53)  \r
  32 ３一玉(41)  \r
  33 ３二桂成(44)\r
  34 詰み        \r
まで33手詰\r
\r
変化：3手\r
   3 ２九飛(59)  \r
   4 同　角成(56)\r
   5 ２七龍(18)  \r
   6 １一玉(21)  \r
   7 １六龍(27)  \r
   8 ２一玉(11)  \r
   9 ２五龍(16)  \r
  10 １一玉(21)  \r
  11 １四龍(25)  \r
  12 ２一玉(11)  \r
  13 ２三龍(14)  \r
  14 １一玉(21)  \r
  15 １三龍(23)  \r
  16 ２一玉(11)  \r
  17 ３二香成(33)\r
  18 同　玉(21)  \r
  19 ４四桂打    \r
  20 ４二玉(32)  \r
  21 ３三龍(13)  \r
  22 ５三玉(42)  \r
  23 ５一桂成(43)\r
  24 ６二玉(53)  \r
  25 ６一成桂(51)\r
  26 同　玉(62)  \r
  27 ７二銀打    \r
  28 ５一玉(61)  \r
  29 ５三龍(33)  \r
  30 ４一玉(51)  \r
  31 ５二龍(53)  \r
  32 ３一玉(41)  \r
  33 ３二桂成(44)\r
  34 詰み        \r
まで33手詰\r
`,p3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0068\r
作者：奥薗幸雄    \r
発表誌：詰棋界\r
発表年月：1952年4月\r
手数：43\r
完全性：余詰\r
備考：9件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀二　桂　香　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・v飛v歩v歩v歩v歩 ・ ・|三\r
| ・ ・ ・ ・v桂 ・ ・ ・ ・|四\r
| ・ ・v香v香v玉v桂v桂 ・ ・|五\r
| ・ ・ ・ ・ 角 ・ ・ ・ ・|六\r
| ・ 香 歩 銀 歩 歩 歩 歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角　銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六銀(67)  \r
   2 同　香(65)  \r
   3 ６五飛打    \r
   4 ４四玉(55)  \r
   5 ４五飛(65)  \r
   6 ３四玉(44)  \r
   7 ４六飛(45)   +\r
   8 ４五桂打    \r
   9 同　角(56)  \r
  10 ４四玉(34)  \r
  11 ３六桂打    \r
  12 ５五玉(44)  \r
  13 ５六銀打    \r
  14 ６四玉(55)  \r
  15 ５五角打    \r
  16 ７四玉(64)  \r
  17 ６五銀(56)  \r
  18 同　玉(74)  \r
  19 ５六角(45)  \r
  20 ５五玉(65)  \r
  21 ４五飛(46)  \r
  22 ６四玉(55)  \r
  23 ６五飛(45)  \r
  24 ７四玉(64)  \r
  25 ３五飛(65)  \r
  26 ６四玉(74)  \r
  27 ６五飛(35)  \r
  28 ７四玉(64)  \r
  29 ６六飛(65)  \r
  30 ６五香打    \r
  31 同　角(56)  \r
  32 ６四玉(74)  \r
  33 ５六角(65)  \r
  34 ６六桂(54)  \r
  35 ７六桂打    \r
  36 同　香(75)  \r
  37 ６五歩打    \r
  38 ７四玉(64)  \r
  39 ７五香打    \r
  40 同　玉(74)  \r
  41 ６七桂打    \r
  42 ７四玉(75)  \r
  43 ７五香打    \r
  44 詰み        \r
まで43手詰\r
\r
変化：7手\r
   7 ７五飛(45)  \r
   8 ２四玉(34)  \r
   9 １五銀打    \r
  10 同　玉(24)  \r
  11 １七香打    \r
  12 １六金打    \r
  13 ３五飛(75)  \r
  14 ２五銀打    \r
  15 ２六角打    \r
  16 ２四玉(15)  \r
  17 ２五飛(35)  \r
  18 同　玉(24)  \r
  19 ３六銀打    \r
  20 ２四玉(25)  \r
  21 ３五角(26)  \r
  22 １五玉(24)  \r
  23 １六香(17)  \r
  24 同　玉(15)  \r
  25 ２八桂打    \r
  26 １五玉(16)  \r
  27 ２五金打    \r
  28 詰み        \r
まで27手詰\r
`,x3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0015\r
作者：奥薗幸雄    \r
発表誌：詰将棋パラダイス(旧)\r
発表年月：1953年6月\r
手数：41\r
完全性：余詰\r
備考：7件登録\r
解説：裸玉构型让防守资源极少，王的位置和持驹成为解题核心；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金四　銀四　桂二　香四　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　角二　桂二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四角打    \r
   2 ２二銀打    \r
   3 １三飛打    \r
   4 １二飛打    \r
   5 ２三桂打    \r
   6 ２一玉(11)  \r
   7 ４三角打    \r
   8 ３二桂打    \r
   9 １二飛成(13)\r
  10 同　玉(21)  \r
  11 ２四桂打    \r
  12 同　桂(32)  \r
  13 １一桂成(23)\r
  14 ２三玉(12)  \r
  15 ２二角成(44)\r
  16 同　玉(23)  \r
  17 ３二飛打    \r
  18 ２三玉(22)  \r
  19 ３四飛成(32)\r
  20 １三玉(23)  \r
  21 ２二銀打    \r
  22 １四玉(13)  \r
  23 ２五龍(34)  \r
  24 ２三玉(14)  \r
  25 ３四角成(43)\r
  26 ２二玉(23)  \r
  27 ２四龍(25)  \r
  28 ３一玉(22)  \r
  29 ２一成桂(11)\r
  30 ４一玉(31)  \r
  31 ５三桂打    \r
  32 ５一玉(41)  \r
  33 ６一馬(34)  \r
  34 ４二玉(51)  \r
  35 ４四龍(24)  \r
  36 ３二玉(42)  \r
  37 ４三馬(61)  \r
  38 ２三玉(32)  \r
  39 ３三馬(43)   +\r
  40 １三玉(23)  \r
  41 ２二馬(33)  \r
  42 詰み        \r
まで41手詰\r
\r
変化：39手\r
  39 ３四馬(43)   +\r
  40 １三玉(23)  \r
  41 ３三龍(44)  \r
  42 １四玉(13)  \r
  43 ２四馬(34)  \r
  44 詰み        \r
まで43手詰\r
\r
変化：39手\r
  39 ２二成桂(21)\r
  40 同　玉(23)  \r
  41 ３三馬(43)  \r
  42 １二玉(22)  \r
  43 ４二龍(44)  \r
  44 １三玉(12)  \r
  45 ２二龍(42)  \r
  46 １四玉(13)  \r
  47 ２四馬(33)  \r
  48 詰み        \r
まで47手詰\r
`,V3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0338\r
作品名：蒼猿      \r
作者：黒川一郎    \r
発表誌：王将(新)\r
発表年月：1954年5月\r
手数：43\r
受賞：塚田賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　桂二　香　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v桂 ・v桂 飛 ・ ・ ・|一\r
|v香 ・v金 ・ ・ ・ ・ ・ ・|二\r
|v玉 銀 ・ ・ ・v歩 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|五\r
| 銀 ・ ・vと ・ ・ ・ ・ ・|六\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|七\r
| 角v馬 香 金 ・ ・ ・ ・ ・|八\r
| ・ 香 ・ 龍 ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ９四銀(85)  \r
   2 ８四玉(93)  \r
   3 ８五銀(96)  \r
   4 ９五玉(84)  \r
   5 ９六銀(87)  \r
   6 ８六玉(95)  \r
   7 ８八香(89)  \r
   8 ９七玉(86)  \r
   9 ５三角打    \r
  10 ９八玉(97)  \r
  11 ８七銀(96)  \r
  12 ８八玉(98)  \r
  13 ９七角成(53)\r
  14 同　玉(88)  \r
  15 ９九龍(69)  \r
  16 ８七玉(97)  \r
  17 ９六銀(85)  \r
  18 ８六玉(87)  \r
  19 ８八龍(99)  \r
  20 ９六玉(86)  \r
  21 ８五銀(94)  \r
  22 ９五玉(96)  \r
  23 ９七龍(88)  \r
  24 ８五玉(95)  \r
  25 ７四銀(83)  \r
  26 ８四玉(85)  \r
  27 ８六龍(97)  \r
  28 ９三玉(84)  \r
  29 ４三飛成(41)\r
  30 同　桂(51)  \r
  31 ９四歩打    \r
  32 同　玉(93)  \r
  33 ８五銀(74)  \r
  34 ９三玉(94)  \r
  35 ８四銀(85)  \r
  36 ８二玉(93)  \r
  37 ７三銀(84)  \r
  38 ９一玉(82)  \r
  39 ８一龍(86)  \r
  40 同　玉(91)  \r
  41 ７二銀成(73)\r
  42 ９一玉(81)  \r
  43 ８一金打    \r
  44 詰み        \r
まで43手詰\r
`,j3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0092\r
作者：近藤孝      \r
発表誌：近代将棋\r
発表年月：1955年11月\r
手数：49\r
受賞：塚田賞\r
備考：5件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ と ・ ・ 銀v歩 ・ ・|一\r
|v香 ・ ・vと ・ ・ とv金 と|二\r
| ・v香 ・ ・vと 香 ・ ・ と|三\r
| ・ 桂 ・ とvと ・ 歩v歩 ・|四\r
| ・ ・v歩 桂 歩 角 銀 ・v歩|五\r
| 金v桂 ・ ・ 金 ・v角 ・v玉|六\r
| ・ ・ ・ ・v銀 ・ 銀 ・ ・|七\r
| ・ ・ 桂 ・ ・ ・vと 香 ・|八\r
| ・ ・ ・ ・ ・ 飛 飛 ・ 金|九\r
+---------------------------+\r
先手の持駒：歩三　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七歩打    \r
   2 同　玉(16)  \r
   3 １八金(19)  \r
   4 同　角(36)  \r
   5 ２六銀(35)  \r
   6 １六玉(17)  \r
   7 ２七角(45)  \r
   8 同　角(18)  \r
   9 １九飛(39)  \r
  10 １八角打    \r
  11 同　飛(19)  \r
  12 同　角(27)  \r
  13 ２七角打    \r
  14 同　角(18)  \r
  15 １九飛(49)  \r
  16 １八角打    \r
  17 同　飛(19)  \r
  18 同　角(27)  \r
  19 １七銀(26)  \r
  20 同　玉(16)  \r
  21 ２六角打    \r
  22 １六玉(17)  \r
  23 １七歩打    \r
  24 ２五玉(16)  \r
  25 ５三角(26)  \r
  26 ２八と(38)  \r
  27 ２六歩打    \r
  28 ３四玉(25)  \r
  29 ３五歩打    \r
  30 ４三玉(34)  \r
  31 ５四と(64)  \r
  32 同　角(18)  \r
  33 ５二銀(41)  \r
  34 同　玉(43)  \r
  35 ４二と(32)  \r
  36 ６三玉(52)  \r
  37 ６四歩打    \r
  38 ７四玉(63)  \r
  39 ８六桂(78)  \r
  40 ８四玉(74)  \r
  41 ６二角(53)  \r
  42 ７三桂打    \r
  43 同　角(62)  \r
  44 ９三玉(84)  \r
  45 ８五桂打    \r
  46 同　香(83)  \r
  47 ９四歩打    \r
  48 ８三玉(93)  \r
  49 ９五桂打    \r
  50 詰み        \r
まで49手詰\r
`,N3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0013\r
作者：駒場和男    \r
発表誌：詰将棋パラダイス\r
発表年月：1956年4月\r
手数：43\r
完全性：余詰\r
受賞：半期賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　銀三　桂　香四　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ 角 ・ ・ ・|一\r
| ・v玉 ・v歩 ・ ・ ・ ・ 飛|二\r
|v銀 ・v桂 ・ 桂 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ 馬 飛 ・ ・ ・ ・|五\r
| 桂 ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩五　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三歩打    \r
   2 ９一玉(82)  \r
   3 ９二歩打    \r
   4 ８一玉(91)  \r
   5 ６三角成(41)\r
   6 同　歩(62)  \r
   7 １一飛成(12)\r
   8 ９二玉(81)  \r
   9 ２二龍(11)  \r
  10 ９一玉(92)  \r
  11 ９二歩打    \r
  12 ８一玉(91)  \r
  13 ３一龍(22)  \r
  14 ９二玉(81)  \r
  15 ４二龍(31)  \r
  16 ９一玉(92)  \r
  17 ９二歩打    \r
  18 ８一玉(91)  \r
  19 ５一龍(42)  \r
  20 ９二玉(81)  \r
  21 ６二龍(51)  \r
  22 ８一玉(92)  \r
  23 ８二歩成(83)\r
  24 同　銀(93)  \r
  25 ７二龍(62)  \r
  26 同　玉(81)  \r
  27 ８四桂(96)  \r
  28 ８一玉(72)  \r
  29 ９二桂成(84)\r
  30 ７二玉(81)  \r
  31 ８二成桂(92)\r
  32 同　玉(72)  \r
  33 ８三銀打    \r
  34 ８一玉(82)  \r
  35 ８二歩打    \r
  36 ７一玉(81)  \r
  37 ６一桂成(53)\r
  38 同　玉(71)  \r
  39 ４三馬(65)  \r
  40 ６二玉(61)  \r
  41 ５三飛成(55)\r
  42 ７一玉(62)  \r
  43 ５一龍(53)  \r
  44 詰み        \r
まで43手詰\r
`,S3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0095\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1958年12月\r
手数：49\r
受賞：塚田賞\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　桂三　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v飛v香v角 ・v玉|一\r
| ・ ・ ・ 歩 ・ 歩 ・ ・v香|二\r
| ・ ・ ・ ・ 香v香 とv飛 ・|三\r
| ・ ・ ・ ・ 銀 ・v歩 ・v歩|四\r
| ・ ・ ・ ・v歩 ・ ・v歩 ・|五\r
| ・ ・ ・ ・ 歩 ・ 歩 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　金二　銀　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二銀打    \r
   2 同　飛(23)  \r
   3 同　と(33)  \r
   4 同　玉(11)  \r
   5 ２四飛打    \r
   6 ２三桂打    \r
   7 １一角打    \r
   8 １三玉(22)  \r
   9 ２三飛成(24)\r
  10 同　玉(13)  \r
  11 ３五桂打    \r
  12 同　歩(34)  \r
  13 ３四金打    \r
  14 同　玉(23)  \r
  15 ４三銀(54)  \r
  16 ２四玉(34)  \r
  17 ３三角成(11)\r
  18 同　玉(24)  \r
  19 ３四金打    \r
  20 ２二玉(33)  \r
  21 ２四香打    \r
  22 ２三桂打    \r
  23 同　金(34)  \r
  24 １一玉(22)  \r
  25 ２二金(23)  \r
  26 同　角(31)  \r
  27 ２三桂打    \r
  28 ２一玉(11)  \r
  29 ３三桂打    \r
  30 同　角(22)  \r
  31 ３一桂成(23)\r
  32 同　玉(21)  \r
  33 ４一歩成(42)\r
  34 同　玉(31)  \r
  35 ５一香成(53)\r
  36 同　角(33)  \r
  37 ２一飛打    \r
  38 ３一香打    \r
  39 同　飛成(21)\r
  40 同　玉(41)  \r
  41 ３四香打    \r
  42 ３三桂打    \r
  43 同　香(34)  \r
  44 同　角(51)  \r
  45 ３二香打    \r
  46 ４一玉(31)  \r
  47 ５三桂打    \r
  48 ５一玉(41)  \r
  49 ６一歩成(62)\r
  50 詰み        \r
まで49手詰\r
`,w3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0096\r
作者：小峯秀夫    \r
発表誌：近代将棋\r
発表年月：1959年5月\r
手数：49\r
受賞：塚田賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀三　桂　香二　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v歩 ・ ・v香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・v銀v桂 飛 ・|三\r
| ・ ・ ・ ・v馬 ・v玉 ・ ・|四\r
| ・ ・ ・ ・v歩 ・v金v桂 歩|五\r
| ・ ・ ・ ・vと ・ ・ ・v金|六\r
| ・ ・ ・ ・ ・ ・ 飛 ・ 角|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ 桂|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四飛成(23)\r
   2 同　玉(34)  \r
   3 １四金打    \r
   4 同　香(11)  \r
   5 ３五角(17)  \r
   6 ３四玉(24)  \r
   7 １三角成(35)\r
   8 ３六馬(54)  \r
   9 ３五金打    \r
  10 同　馬(36)  \r
  11 同　馬(13)  \r
  12 ２三玉(34)  \r
  13 １三馬(35)  \r
  14 ３二玉(23)  \r
  15 ３一馬(13)  \r
  16 ２三玉(32)  \r
  17 ２四香打    \r
  18 同　玉(23)  \r
  19 １三馬(31)  \r
  20 同　玉(24)  \r
  21 ３三飛成(37)\r
  22 ２三飛打    \r
  23 ２二角打    \r
  24 １二玉(13)  \r
  25 ２四桂打    \r
  26 同　飛(23)  \r
  27 １三龍(33)  \r
  28 ２一玉(12)  \r
  29 １一龍(13)  \r
  30 ３二玉(21)  \r
  31 ３一龍(11)  \r
  32 ２三玉(32)  \r
  33 ３三角成(22)\r
  34 １三玉(23)  \r
  35 １一龍(31)  \r
  36 １二金打    \r
  37 １四歩(15)  \r
  38 同　玉(13)  \r
  39 １二龍(11)  \r
  40 １三金打    \r
  41 同　龍(12)  \r
  42 同　玉(14)  \r
  43 ２三金打    \r
  44 同　飛(24)  \r
  45 １四金打    \r
  46 同　玉(13)  \r
  47 ２六桂(18)  \r
  48 同　金(16)  \r
  49 １五香打    \r
  50 詰み        \r
まで49手詰\r
`,C3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0103\r
作品名：飛燕\r
作者：山田修司    \r
発表誌：近代将棋\r
発表年月：1964年5月\r
手数：43\r
受賞：塚田賞\r
備考：7件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　桂三　香三　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 銀 ・ ・ と ・ ・ ・ ・ ・|一\r
| 飛 ・ ・ ・ ・ ・ ・ ・ ・|二\r
|v銀 ・ ・v香 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・v歩 ・ ・ ・ ・|四\r
| 角 歩 歩v歩 桂 ・ ・ ・ ・|五\r
|v玉 ・v飛 ・ ・ ・ ・ ・ ・|六\r
| ・v歩 ・ 馬 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８六金打    \r
   2 同　飛(76)  \r
   3 ９七金打    \r
   4 同　玉(96)  \r
   5 ８六角(95)  \r
   6 同　玉(97)  \r
   7 ７六飛打    \r
   8 ８五玉(86)  \r
   9 １六飛(76)  \r
  10 ７六歩打    \r
  11 同　馬(67)  \r
  12 ８四玉(85)  \r
  13 ９三飛成(92)\r
  14 同　玉(84)  \r
  15 ９四銀打    \r
  16 ９二玉(93)  \r
  17 １二飛(16)  \r
  18 ９一玉(92)  \r
  19 ９二歩打    \r
  20 ８一玉(91)  \r
  21 ７一と(61)  \r
  22 同　玉(81)  \r
  23 ６三桂(55)  \r
  24 ６一玉(71)  \r
  25 ７一桂成(63)\r
  26 同　玉(61)  \r
  27 ７三香打    \r
  28 ６一玉(71)  \r
  29 ７二香成(73)\r
  30 ５一玉(61)  \r
  31 ６二成香(72)\r
  32 ４一玉(51)  \r
  33 ５二成香(62)\r
  34 ３一玉(41)  \r
  35 ４二成香(52)\r
  36 ２一玉(31)  \r
  37 ３二飛成(12)\r
  38 １一玉(21)  \r
  39 ７七馬(76)  \r
  40 ６六桂打     +\r
  41 同　馬(77)  \r
  42 同　歩(65)  \r
  43 ２三桂打    \r
  44 詰み        \r
まで43手詰\r
\r
変化：40手\r
  40 ５五香打    \r
  41 同　馬(77)  \r
  42 同　歩(54)  \r
  43 １七香打    \r
  44 詰み        \r
まで43手詰\r
`,P3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0104\r
作者：岡田敏      \r
発表誌：近代将棋\r
発表年月：1964年6月\r
手数：43\r
備考：8件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀二　桂三　香　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ 歩v歩v歩|二\r
| ・ ・ ・ ・ 歩v飛v玉 ・ ・|三\r
| ・ ・ ・ ・v歩 桂 ・ ・ ・|四\r
| ・ ・ ・v歩v金 ・ 銀 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・v香 ・ 角 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|八\r
| ・ ・ ・ ・ ・v飛 ・v銀 ・|九\r
+---------------------------+\r
先手の持駒：角　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四香打    \r
   2 ２三玉(33)  \r
   3 １四角打    \r
   4 １三玉(23)  \r
   5 ４七角(14)  \r
   6 １八銀(29)  \r
   7 １五香打    \r
   8 ２三玉(13)  \r
   9 １四角(47)  \r
  10 １三玉(23)  \r
  11 ２五角(14)  \r
  12 ２三玉(13)  \r
  13 ３三香成(34)\r
  14 同　飛(43)  \r
  15 １四角(25)  \r
  16 １三玉(23)  \r
  17 ４七角(14)  \r
  18 ２三玉(13)  \r
  19 ４五角(27)  \r
  20 同　金(55)  \r
  21 １四角(47)  \r
  22 １三玉(23)  \r
  23 ３六角(14)  \r
  24 １四角打    \r
  25 同　香(15)  \r
  26 ２三玉(13)  \r
  27 ４五角(36)  \r
  28 １四玉(23)  \r
  29 ３六角打    \r
  30 ２五桂打    \r
  31 同　角(36)  \r
  32 同　玉(14)  \r
  33 ２六金打    \r
  34 １四玉(25)  \r
  35 ３六角(45)  \r
  36 ２三玉(14)  \r
  37 １五桂打    \r
  38 １三玉(23)  \r
  39 ２四銀(35)  \r
  40 同　玉(13)  \r
  41 ２五金(26)  \r
  42 １三玉(24)  \r
  43 １四金(25)  \r
  44 詰み        \r
まで43手詰\r
`,$3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0108\r
作者：柏川悦夫    \r
発表誌：近代将棋\r
発表年月：1966年10月\r
手数：49\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金二　銀四　桂二　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|一\r
| ・ ・ ・ ・v桂v馬 ・ 歩 ・|二\r
| ・ ・ ・ ・ ・ ・ 角v歩v玉|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ 歩 ・v歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　金二　香三　\r
先手：\r
後手：\r
手数----指手--\r
   1 １一飛打    \r
   2 １二香打    \r
   3 同　飛成(11)\r
   4 同　玉(13)  \r
   5 １四香打    \r
   6 １三銀打    \r
   7 １一金打    \r
   8 同　玉(12)  \r
   9 １三香(14)  \r
  10 １二金打    \r
  11 同　香成(13)\r
  12 同　玉(11)  \r
  13 １四香打    \r
  14 １三銀打    \r
  15 １一金打    \r
  16 同　玉(12)  \r
  17 １三香(14)  \r
  18 １二金打    \r
  19 同　香成(13)\r
  20 同　玉(11)  \r
  21 １四香打    \r
  22 １三銀打    \r
  23 １一金打    \r
  24 同　玉(12)  \r
  25 １三香(14)  \r
  26 １二金打    \r
  27 同　香成(13)\r
  28 同　玉(11)  \r
  29 １四香打    \r
  30 １三銀打    \r
  31 同　香成(14)\r
  32 同　玉(12)  \r
  33 ２四銀打    \r
  34 同　歩(23)  \r
  35 ２三金打    \r
  36 同　玉(13)  \r
  37 ３四銀打    \r
  38 ３二玉(23)  \r
  39 ４三銀打    \r
  40 同　馬(42)  \r
  41 ２三銀打    \r
  42 ４一玉(32)  \r
  43 ５一金打    \r
  44 ３一玉(41)  \r
  45 ２一歩成(22)\r
  46 同　馬(43)  \r
  47 ４三桂打    \r
  48 同　馬(21)  \r
  49 ２二銀成(23)\r
  50 詰み        \r
まで49手詰\r
`,B3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0109\r
作者：小林正美    \r
発表誌：近代将棋\r
発表年月：1967年2月\r
手数：49\r
受賞：塚田賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀四　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|一\r
| ・ ・v飛v飛v香 ・ ・ ・ ・|二\r
| ・ ・v桂 ・ ・v香v桂 ・ ・|三\r
|v金 ・ ・ ・v歩v歩 ・ ・v歩|四\r
| ・ ・ ・v香 ・ ・ ・ ・v桂|五\r
| ・ ・v香v歩 ・ ・ ・ ・ ・|六\r
|v金 ・ ・ ・ ・ ・v歩 ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・vと ・|九\r
+---------------------------+\r
先手の持駒：角二　金二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三桂打    \r
   2 １二玉(11)  \r
   3 ２二金打    \r
   4 同　玉(12)  \r
   5 ３一角打    \r
   6 ２三玉(22)  \r
   7 １二角打    \r
   8 ２四玉(23)  \r
   9 １三角成(31)\r
  10 ２五玉(24)  \r
  11 ３四角成(12)\r
  12 ３六玉(25)  \r
  13 ３五馬(13)  \r
  14 ４七玉(36)  \r
  15 ５六馬(34)  \r
  16 ５八玉(47)  \r
  17 ５七馬(35)  \r
  18 ６九玉(58)  \r
  19 ６八金打    \r
  20 ７九玉(69)  \r
  21 ７七金(68)  \r
  22 ８八玉(79)  \r
  23 ７九馬(57)  \r
  24 ７七玉(88)  \r
  25 ７八馬(56)  \r
  26 ８六玉(77)  \r
  27 ９七馬(79)  \r
  28 ９五玉(86)  \r
  29 ９六馬(78)  \r
  30 ８四玉(95)  \r
  31 ７五馬(97)  \r
  32 ８三玉(84)  \r
  33 ９三金打    \r
  34 同　金(94)  \r
  35 ７四馬(96)  \r
  36 ８二玉(83)  \r
  37 ９三馬(75)  \r
  38 ９一玉(82)  \r
  39 ９二金打    \r
  40 同　飛(72)  \r
  41 同　馬(93)  \r
  42 同　飛(62)  \r
  43 ７三馬(74)  \r
  44 ８一玉(91)  \r
  45 ９三桂打    \r
  46 同　飛(92)  \r
  47 ８二飛打    \r
  48 ９一玉(81)  \r
  49 ８三飛成(82)\r
  50 詰み        \r
まで49手詰\r
`,E3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0110\r
作者：山田修司    \r
発表誌：近代将棋\r
発表年月：1967年7月\r
手数：49\r
受賞：塚田賞\r
備考：6件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　銀四　桂　香三　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉v歩 ・ ・ ・ ・ ・ ・ ・|一\r
| ・ 歩 歩 ・ ・ ・ ・ ・ ・|二\r
| ・ ・v飛 ・ ・ ・ ・ ・ ・|三\r
| ・ 馬 と ・ ・ ・ ・ ・ ・|四\r
|v金 ・ ・ ・ ・ ・ ・ ・ ・|五\r
|v金 ・ ・ ・ ・ ・ ・ ・ ・|六\r
|v金 桂 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ 桂 香 ・ ・ ・ ・ ・ ・|八\r
|vと 桂 金 ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一歩成(82)\r
   2 同　玉(91)  \r
   3 ８二歩打    \r
   4 ９一玉(81)  \r
   5 ９二歩打    \r
   6 同　玉(91)  \r
   7 ９三歩打    \r
   8 ９一玉(92)  \r
   9 ８一歩成(82)\r
  10 同　玉(91)  \r
  11 ９二歩成(93)\r
  12 同　玉(81)  \r
  13 ８三と(74)  \r
  14 同　飛(73)  \r
  15 同　馬(84)  \r
  16 同　玉(92)  \r
  17 ９五桂(87)  \r
  18 ９四玉(83)  \r
  19 ８四金打    \r
  20 同　玉(94)  \r
  21 ９六桂(88)  \r
  22 ９五玉(84)  \r
  23 ８五金打    \r
  24 同　玉(95)  \r
  25 ９七桂(89)  \r
  26 ９六玉(85)  \r
  27 ８六金打    \r
  28 同　玉(96)  \r
  29 ８一飛打    \r
  30 ９七玉(86)  \r
  31 ８八金(79)  \r
  32 ９六玉(97)  \r
  33 ８七金(88)  \r
  34 ９五玉(96)  \r
  35 ８六金(87)  \r
  36 ９四玉(95)  \r
  37 ８五金(86)  \r
  38 ９三玉(94)  \r
  39 ８四金(85)  \r
  40 ９二玉(93)  \r
  41 ８三金(84)  \r
  42 ８一玉(92)  \r
  43 ７一歩成(72)\r
  44 ９一玉(81)  \r
  45 ８一と(71)  \r
  46 同　玉(91)  \r
  47 ７二香成(78)\r
  48 ９一玉(81)  \r
  49 ８二成香(72)\r
  50 詰み        \r
まで49手詰\r
`,A3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0058\r
作者：大村光良    \r
発表誌：詰将棋パラダイス\r
発表年月：1974年10月\r
手数：45\r
受賞：半期賞\r
備考：5件登録\r
解説：属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂二　香四　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・v桂 ・ ・ ・|四\r
| ・ ・ ・ ・ と ・ 龍 ・v銀|五\r
| ・ ・ ・ ・ と ・ ・ 銀 金|六\r
| ・ ・ ・ 銀 歩v玉 ・ ・v銀|七\r
| ・ ・ ・v馬v金v馬 桂 ・ 歩|八\r
| ・ ・ 龍 ・ ・v金 ・v金 ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ４六と(56)  \r
   2 ５七玉(47)  \r
   3 ５六と(55)  \r
   4 同　桂(44)  \r
   5 同　と(46)  \r
   6 ４七玉(57)  \r
   7 ４六と(56)  \r
   8 同　馬(68)  \r
   9 ５八銀(67)  \r
  10 同　玉(47)  \r
  11 ６九金打    \r
  12 ４七玉(58)  \r
  13 ５九桂打    \r
  14 同　馬(48)  \r
  15 ４六龍(35)  \r
  16 ３八玉(47)  \r
  17 ８三角打    \r
  18 ３九玉(38)  \r
  19 ４九龍(46)  \r
  20 同　馬(59)  \r
  21 ３八金打    \r
  22 同　馬(49)  \r
  23 ５八金(69)  \r
  24 ４九金打    \r
  25 ３八角成(83)\r
  26 同　玉(39)  \r
  27 ８三角打    \r
  28 ２八玉(38)  \r
  29 ２九角成(83)\r
  30 同　玉(28)  \r
  31 ４九龍(79)  \r
  32 ３九銀打    \r
  33 同　龍(49)  \r
  34 同　玉(29)  \r
  35 ４八銀打    \r
  36 ４九玉(39)  \r
  37 ５九金(58)  \r
  38 ３八玉(49)  \r
  39 ３九金打    \r
  40 ２七玉(38)  \r
  41 ３七金打    \r
  42 １八玉(27)  \r
  43 １七金(16)  \r
  44 １九玉(18)  \r
  45 ２八銀打    \r
  46 詰み        \r
まで45手詰\r
`,L3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0303\r
作者：不明      \r
発表誌：将棋月報\r
発表年月：1938年3月\r
手数：43\r
分類：大道棋\r
備考：13件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀三　桂三　香　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v桂 ・ ・v香 ・ ・ ・ ・|一\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|二\r
| ・v歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v歩 ・v歩 ・ ・ ・ ・ ・ ・|四\r
|v玉 ・ ・v歩 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| 馬v香 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９六金打    \r
   2 ８四玉(95)  \r
   3 ８七香(89)  \r
   4 ８六飛打    \r
   5 ８五金(96)  \r
   6 同　飛(86)  \r
   7 同　香(87)  \r
   8 同　玉(84)  \r
   9 ８六飛打    \r
  10 ７五玉(85)  \r
  11 ５六飛(86)  \r
  12 ８四玉(75)  \r
  13 ８九香打    \r
  14 ８五角打    \r
  15 同　香(89)  \r
  16 同　玉(84)  \r
  17 ８六飛(56)  \r
  18 ７五玉(85)  \r
  19 ４二角打    \r
  20 ５三飛打    \r
  21 ５六飛(86)  \r
  22 ８四玉(75)  \r
  23 ５一角成(42)\r
  24 同　飛(53)  \r
  25 ８九香打    \r
  26 ８五角打    \r
  27 同　香(89)  \r
  28 同　玉(84)  \r
  29 ８六飛(56)  \r
  30 ７五玉(85)  \r
  31 ４二角打    \r
  32 ５三歩打    \r
  33 ５六飛(86)  \r
  34 ８四玉(75)  \r
  35 ５一角成(42)\r
  36 ７三香打    \r
  37 ８九飛打    \r
  38 ８五香打    \r
  39 同　飛(89)  \r
  40 同　玉(84)  \r
  41 ８六馬(97)  \r
  42 ８四玉(85)  \r
  43 ８五香打    \r
  44 詰み        \r
まで43手詰\r
`,I3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0403\r
作者：不明      \r
発表誌：趣味の大道詰将棋 第76番\r
発表年月：1939年12月\r
手数：45\r
分類：大道棋\r
備考：5件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　金　銀三　桂　香二　歩十六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v桂 ・ ・ ・ ・ ・|一\r
| ・ ・ ・v金 ・ ・ ・ ・ ・|二\r
| ・ ・ 金 ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| 桂 ・ 香 桂 ・ ・ ・ ・ ・|五\r
|v歩v銀 ・ 金 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三桂(95)  \r
   2 ８一玉(71)  \r
   3 ８二歩打    \r
   4 ９二玉(81)  \r
   5 ９四香打    \r
   6 ９三角打    \r
   7 ９一桂成(83)\r
   8 同　玉(92)  \r
   9 ９三香(94)  \r
  10 ９二角打    \r
  11 ８一歩成(82)\r
  12 同　玉(91)  \r
  13 ９二香成(93)\r
  14 同　玉(81)  \r
  15 ８三角打    \r
  16 ９三玉(92)  \r
  17 ７一角打    \r
  18 ８四玉(93)  \r
  19 ７四金(73)  \r
  20 ８五玉(84)  \r
  21 ８四金(74)  \r
  22 同　玉(85)  \r
  23 ６二角成(71)\r
  24 ８三玉(84)  \r
  25 ６一馬(62)  \r
  26 ９三玉(83)  \r
  27 ９四金打    \r
  28 ９二玉(93)  \r
  29 ８三馬(61)  \r
  30 ９一玉(92)  \r
  31 ７三馬(83)  \r
  32 ８二歩打    \r
  33 ８三桂打     +\r
  34 ９二玉(91)  \r
  35 ８二馬(73)  \r
  36 同　玉(92)  \r
  37 ７三桂成(65)\r
  38 ８一玉(82)  \r
  39 ７一桂成(83)\r
  40 ９一玉(81)  \r
  41 ９二歩打    \r
  42 同　玉(91)  \r
  43 ８三金(94)  \r
  44 ９一玉(92)  \r
  45 ８二金(83)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：33手\r
  33 同　馬(73)  \r
  34 同　玉(91)  \r
  35 ７三桂成(65)\r
  36 ９一玉(82)  \r
  37 ９二歩打    \r
  38 ８一玉(91)  \r
  39 ９三桂打    \r
  40 ９二玉(81)  \r
  41 ８三金(94)  \r
  42 ９一玉(92)  \r
  43 ８二成桂(73)\r
  44 詰み        \r
まで43手詰\r
`,O3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0088\r
作者：不明      \r
発表誌：趣味の詰将棋 第27題\r
発表年月：1949年6月\r
手数：49\r
分類：大道棋\r
備考：6件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角二　金三　銀四　桂　香三　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v桂 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金v歩 ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・v圭 ・ ・ ・ ・|四\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|五\r
|v歩v歩v歩 ・ 飛 ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三桂(75)  \r
   2 ８一玉(71)  \r
   3 ８二歩打    \r
   4 ９二玉(81)  \r
   5 ９五香打    \r
   6 ９三角打    \r
   7 ９一桂成(83)\r
   8 同　玉(92)  \r
   9 ９三香(95)  \r
  10 ９二角打    \r
  11 同　香成(93)\r
  12 同　玉(91)  \r
  13 ７四角打    \r
  14 ９一玉(92)  \r
  15 ８一歩成(82)\r
  16 同　玉(91)  \r
  17 ７二角打    \r
  18 ７一玉(81)  \r
  19 ６二金(73)  \r
  20 同　玉(71)  \r
  21 ６三角成(74)\r
  22 ５一玉(62)  \r
  23 ６一角成(72)\r
  24 ４二玉(51)  \r
  25 ５一馬(61)  \r
  26 同　玉(42)  \r
  27 ５四飛(56)  \r
  28 ４二玉(51)  \r
  29 ５三飛成(54)\r
  30 ３一玉(42)  \r
  31 ３三龍(53)  \r
  32 ３二金打     +\r
  33 ４三桂打    \r
  34 ２一玉(31)  \r
  35 １三桂打    \r
  36 １一玉(21)  \r
  37 １二歩打    \r
  38 同　玉(11)  \r
  39 ３二龍(33)  \r
  40 １三玉(12)  \r
  41 ２三金打    \r
  42 １四玉(13)  \r
  43 ３六馬(63)  \r
  44 １五玉(14)  \r
  45 １二龍(32)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：32手\r
  32 ３二銀打    \r
  33 ５三馬(63)  \r
  34 ２一玉(31)  \r
  35 １三桂打    \r
  36 １一玉(21)  \r
  37 １二歩打    \r
  38 同　玉(11)  \r
  39 ３二龍(33)  \r
  40 １三玉(12)  \r
  41 ３五馬(53)  \r
  42 ２四銀打    \r
  43 ３三龍(32)  \r
  44 ２三歩打    \r
  45 ２四馬(35)  \r
  46 １二玉(13)  \r
  47 ２三馬(24)  \r
  48 １一玉(12)  \r
  49 ２二馬(23)  \r
  50 詰み        \r
まで49手詰\r
`,M3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0026\r
作者：不明      \r
発表誌：秘手五百番 第469番\r
発表年月：1950年4月\r
手数：43\r
分類：大道棋\r
備考：5件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀三　桂三　香二　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v桂 ・ ・ ・ ・ ・ ・ ・|一\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|二\r
| ・v歩 ・ ・v金 ・ ・ ・ ・|三\r
|v歩 ・v歩 ・ ・ ・ ・ ・ ・|四\r
|v玉 ・ ・v歩 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| 馬v香 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９六金打    \r
   2 ８四玉(95)  \r
   3 ８七香(89)  \r
   4 ８六飛打    \r
   5 ８五金(96)  \r
   6 同　飛(86)  \r
   7 同　香(87)  \r
   8 同　玉(84)  \r
   9 ８六飛打    \r
  10 ７五玉(85)  \r
  11 ５六飛(86)  \r
  12 ８四玉(75)  \r
  13 ８七香打    \r
  14 ８五角打    \r
  15 同　香(87)  \r
  16 同　玉(84)  \r
  17 ８六馬(97)  \r
  18 ８四玉(85)  \r
  19 ６二角打    \r
  20 ７三香打    \r
  21 同　銀(82)  \r
  22 同　桂(81)  \r
  23 同　角成(62)\r
  24 同　玉(84)  \r
  25 ５三飛成(56)\r
  26 ６三金打    \r
  27 ６四馬(86)  \r
  28 ８四玉(73)  \r
  29 ７六桂打    \r
  30 ９三玉(84)  \r
  31 ８四金打    \r
  32 同　歩(83)  \r
  33 ６三龍(53)  \r
  34 ８三角打    \r
  35 同　龍(63)  \r
  36 同　玉(93)  \r
  37 ７三金打    \r
  38 ９二玉(83)  \r
  39 ９三香打     +\r
  40 同　玉(92)  \r
  41 ７一角打    \r
  42 ９二玉(93)  \r
  43 ８二角成(71)\r
  44 詰み        \r
まで43手詰\r
\r
変化：39手\r
  39 ７四馬(64)  \r
  40 ８一玉(92)  \r
  41 ６三角打    \r
  42 ９一玉(81)  \r
  43 ９二香打    \r
  44 詰み        \r
まで43手詰\r
`,R3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0030\r
作者：不明      \r
発表誌：詰将棋パラダイス\r
発表年月：1961年8月\r
手数：41\r
完全性：駒余り\r
分類：大道棋\r
備考：5件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系；允许駒余り，詰上り并非单纯追求清空棋盘。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀四　桂四　香　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・ ・ ・ ・ ・ ・ ・ ・|一\r
|v玉 ・ ・ 歩 ・ ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| 馬v香 ・ ・ ・ ・ ・ ・ ・|四\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９三金打    \r
   2 ８一玉(92)  \r
   3 ８四香(85)  \r
   4 ８三飛打    \r
   5 ８二金(93)  \r
   6 同　飛(83)  \r
   7 同　香成(84)\r
   8 同　玉(81)  \r
   9 ８三飛打    \r
  10 ７二玉(82)  \r
  11 ９三飛成(83)\r
  12 ６二玉(72)  \r
  13 ８四馬(94)  \r
  14 ５二玉(62)  \r
  15 ７四馬(84)  \r
  16 ４二玉(52)  \r
  17 ６四馬(74)  \r
  18 ３二玉(42)  \r
  19 ５四馬(64)  \r
  20 ４一玉(32)  \r
  21 ４四香打     +\r
  22 ４二歩打     +\r
  23 同　香成(44)\r
  24 同　玉(41)  \r
  25 ５三龍(93)  \r
  26 ３一玉(42)  \r
  27 ３三龍(53)  \r
  28 ４一玉(31)  \r
  29 ６三馬(54)  \r
  30 ５二角打    \r
  31 ４二歩打    \r
  32 ５一玉(41)  \r
  33 ３一龍(33)  \r
  34 ４一歩打    \r
  35 同　龍(31)   +\r
  36 同　角(52)  \r
  37 同　歩成(42)\r
  38 ６一玉(51)  \r
  39 ８三角打     +\r
  40 ７一玉(61)  \r
  41 ７二角成(83) +\r
  42 詰み        \r
まで41手詰\r
\r
変化：41手\r
  41 ７二馬(63)  \r
  42 詰み        \r
まで41手詰\r
\r
変化：39手\r
  39 ７二角打    \r
  40 ７一玉(61)  \r
  41 ８一角成(72)\r
  42 ６一玉(71)  \r
  43 ７二馬(81)  \r
  44 詰み        \r
まで43手詰\r
\r
変化：35手\r
  35 同　歩成(42)\r
  36 ６一玉(51)  \r
  37 ４二と(41)  \r
  38 ４一歩打    \r
  39 ５二と(42)  \r
  40 ７一玉(61)  \r
  41 ９三角打    \r
  42 同　香(91)  \r
  43 ４一龍(31)  \r
  44 ８二玉(71)  \r
  45 ８一龍(41)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：22手\r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
\r
変化：21手\r
  21 ４五香打     +\r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
\r
変化：21手\r
  21 ４六香打     +\r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
\r
変化：21手\r
  21 ４八香打     +\r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
\r
変化：21手\r
  21 ４九香打     +\r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
\r
変化：21手\r
  21 ４七香打    \r
  22 ５一玉(41)  \r
  23 ９一龍(93)  \r
  24 ６一金打    \r
  25 ５三香打    \r
  26 ６二玉(51)  \r
  27 ６一龍(91)  \r
  28 ７三玉(62)  \r
  29 ６四龍(61)  \r
  30 ８二玉(73)  \r
  31 ８四龍(64)  \r
  32 ８三飛打    \r
  33 ８一馬(54)  \r
  34 同　玉(82)  \r
  35 ８三龍(84)  \r
  36 ８二歩打    \r
  37 ６一飛打    \r
  38 ７一歩打    \r
  39 ９二金打    \r
  40 詰み        \r
まで39手詰\r
`,K3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei4 0057\r
作者：田辺元昭\r
発表誌：詰将棋パラダイス\r
発表年月：1963年6月\r
手数：45\r
分類：大道棋\r
備考：6件登録\r
解説：双玉构型会引入逆王手等反直觉应对；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀三　桂三　香　歩十八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・ ・ ・v馬 ・ ・ ・ ・|一\r
|v玉 角 ・ 飛 ・ ・ ・ ・ ・|二\r
| ・ ・ ・v桂 ・ ・ ・ ・ ・|三\r
| ・ ・v金 ・ 香 ・ ・ ・ ・|四\r
| 玉 銀 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 香 ・ ・ ・ ・ ・ ・|六\r
| ・ ・v飛 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ９一角成(82)\r
   2 同　玉(92)  \r
   3 ９三香打    \r
   4 ８一玉(91)  \r
   5 ９二香成(93)\r
   6 ７一玉(81)  \r
   7 ７四香(76)  \r
   8 ７三角打    \r
   9 同　香(74)  \r
  10 同　飛成(77)\r
  11 ８二角打    \r
  12 ６二玉(71)  \r
  13 ７三角成(82)\r
  14 同　玉(62)  \r
  15 ７四飛打    \r
  16 ８三玉(73)  \r
  17 ８四飛(74)  \r
  18 同　馬(51)  \r
  19 同　銀(85)  \r
  20 ９二玉(83)  \r
  21 ７四角打    \r
  22 ８一玉(92)  \r
  23 ６三角成(74)\r
  24 ７二角打    \r
  25 同　馬(63)  \r
  26 同　玉(81)  \r
  27 ７三金打    \r
  28 ７一玉(72)  \r
*手順前後あり\r
  29 ８二角打     +\r
  30 ６一玉(71)  \r
  31 ６二金(73)  \r
  32 同　玉(61)  \r
  33 ７三角成(82)\r
  34 ７一玉(62)  \r
  35 ８三桂打    \r
  36 ８一玉(71)  \r
  37 ９一馬(73)  \r
  38 ７二玉(81)  \r
  39 ７三銀成(84)\r
  40 ６一玉(72)  \r
  41 ７一桂成(83)\r
  42 同　玉(61)  \r
  43 ８二馬(91)  \r
  44 ６一玉(71)  \r
  45 ７二馬(82)  \r
  46 詰み        \r
まで45手詰\r
\r
変化：29手\r
  29 ８三桂打    \r
  30 ８一玉(71)  \r
  31 ８二金(73)  \r
  32 同　玉(81)  \r
  33 ６四角打    \r
  34 ７二玉(82)  \r
  35 ７三角成(64)\r
  36 ８一玉(72)  \r
  37 ９一馬(73)  \r
  38 ７二玉(81)  \r
  39 ７三銀成(84)\r
  40 ６一玉(72)  \r
  41 ７一桂成(83)\r
  42 同　玉(61)  \r
  43 ８二馬(91)  \r
  44 ６一玉(71)  \r
  45 ７二馬(82)  \r
  46 詰み        \r
まで45手詰\r
`,T3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0337\r
作品名：魚鱗之作物\r
作者：三代大橋宗与\r
発表誌：象戯記大全 第10番\r
発表年月：元禄8年2月\r
手数：55\r
分類：龍追い\r
備考：7件登録、『将棋養真図式 第28番』と同じ\r
解説：以龙追玉为主轴，长距离控制线会连续变化；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　銀三　桂四　香二　歩二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 杏 ・ ・ ・v金 ・ 飛 ・ 杏|一\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|二\r
| ・v歩v金 ・v龍 ・v金v歩v玉|三\r
| ・ ・v歩 ・ 金 ・v歩 ・ ・|四\r
| 歩 ・ ・v歩 ・v歩 ・ ・ 歩|五\r
| ・ 歩 ・ ・v歩 ・ ・ 歩 ・|六\r
| ・ ・ 歩 ・ ・ ・ 歩 ・ ・|七\r
| ・ ・ ・ 歩 ・ 歩 ・ ・ ・|八\r
| ・ ・ ・ ・ 銀 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２二角打    \r
   2 同　玉(13)  \r
   3 ２一飛成(31)\r
   4 １三玉(22)  \r
   5 １二龍(21)  \r
   6 ２四玉(13)  \r
   7 １四龍(12)  \r
   8 ３五玉(24)  \r
   9 ２五龍(14)  \r
  10 ４六玉(35)  \r
  11 ３六龍(25)  \r
  12 ５七玉(46)  \r
  13 ４七龍(36)  \r
  14 ６六玉(57)  \r
  15 ６七龍(47)  \r
  16 ７五玉(66)  \r
  17 ７六龍(67)  \r
  18 ８四玉(75)  \r
  19 ８五龍(76)  \r
  20 ９三玉(84)  \r
  21 ９四龍(85)  \r
  22 ８二玉(93)  \r
  23 ９二龍(94)  \r
  24 ７一玉(82)  \r
  25 ８一龍(92)  \r
  26 ６二玉(71)  \r
  27 ５一龍(81)  \r
  28 ７二玉(62)  \r
  29 ６二金打    \r
  30 ８二玉(72)  \r
  31 ８一龍(51)  \r
  32 ９三玉(82)  \r
  33 ９二龍(81)  \r
  34 ８四玉(93)  \r
  35 ９四龍(92)  \r
  36 ７五玉(84)  \r
  37 ８五龍(94)  \r
  38 ６六玉(75)  \r
  39 ７六龍(85)  \r
  40 ５七玉(66)  \r
  41 ６七龍(76)  \r
  42 ４六玉(57)  \r
  43 ４七龍(67)  \r
  44 ３五玉(46)  \r
  45 ３六龍(47)  \r
  46 ２四玉(35)  \r
  47 ２五龍(36)  \r
  48 １三玉(24)  \r
  49 １四龍(25)  \r
  50 ２二玉(13)  \r
  51 １二龍(14)  \r
  52 ３一玉(22)  \r
  53 ２一成香(11)\r
  54 ４一玉(31)  \r
  55 ５一金(62)  \r
  56 詰み        \r
まで55手詰\r
`,F3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0364\r
作者：无住僊良\r
発表誌：象戯大矢数 巻頭番外\r
発表年月：元禄10年5月\r
手数：85\r
分類：馬鋸\r
備考：10件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　香　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v玉 ・ 馬 ・v龍 ・ ・ ・|一\r
| ・ ・v歩 ・ ・ ・ ・ 銀 ・|二\r
|v銀 銀 ・ ・ ・ 杏 ・ ・ ・|三\r
|v金 ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・v龍v金 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|六\r
| ・ ・ 香 ・v全 ・ ・v桂 ・|七\r
| ・ 桂 ・ ・ 金v圭 香 ・ ・|八\r
| ・ ・ ・ ・ ・ ・v馬 ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ７二馬(61)  \r
   2 ９一玉(81)  \r
   3 ７三馬(72)  \r
   4 ８一玉(91)  \r
   5 ６三馬(73)  \r
   6 ９一玉(81)  \r
   7 ６四馬(63)  \r
   8 ８一玉(91)  \r
   9 ５四馬(64)  \r
  10 ９一玉(81)  \r
  11 ５五馬(54)  \r
  12 ８一玉(91)  \r
  13 ４五馬(55)  \r
  14 ９一玉(81)  \r
  15 ４六馬(45)  \r
  16 ８一玉(91)  \r
  17 ３六馬(46)  \r
  18 ９一玉(81)   +\r
  19 ３七馬(36)  \r
  20 ８一玉(91)  \r
  21 ２七馬(37)  \r
  22 ９一玉(81)  \r
  23 ３七馬(27)  \r
  24 ８一玉(91)  \r
  25 ３六馬(37)  \r
  26 ９一玉(81)  \r
  27 ４六馬(36)  \r
  28 ８一玉(91)  \r
  29 ４五馬(46)  \r
  30 ９一玉(81)  \r
  31 ５五馬(45)  \r
  32 ８一玉(91)  \r
  33 ５四馬(55)  \r
  34 ９一玉(81)  \r
  35 ６四馬(54)  \r
  36 ８一玉(91)  \r
  37 ６三馬(64)  \r
  38 ９一玉(81)  \r
  39 ７三馬(63)  \r
  40 ８一玉(91)  \r
  41 ７二銀(83)  \r
  42 ９二玉(81)  \r
  43 ８四桂打    \r
  44 同　龍(85)  \r
  45 同　桂(76)  \r
  46 同　金(94)  \r
  47 ９一飛打    \r
  48 同　龍(41)  \r
  49 同　馬(73)  \r
  50 同　玉(92)  \r
  51 ７一飛打    \r
  52 ８二玉(91)  \r
  53 ８一飛成(71)\r
  54 ７三玉(82)  \r
  55 ７五香(77)  \r
  56 ６四玉(73)  \r
  57 ６一龍(81)  \r
  58 ５五玉(64)  \r
  59 ４六金打    \r
  60 同　玉(55)  \r
  61 ６六龍(61)  \r
  62 ４五玉(46)  \r
  63 ４六歩打    \r
  64 ５四玉(45)  \r
  65 ５七龍(66)  \r
  66 ５五角打    \r
  67 ５三成香(43)\r
  68 ６四玉(54)  \r
  69 ６三成香(53)\r
  70 ７五玉(64)  \r
  71 ５五龍(57)  \r
  72 ８六玉(75)  \r
  73 ６六龍(55)  \r
  74 ９七玉(86)  \r
  75 ９六龍(66)  \r
  76 ８八玉(97)  \r
  77 ７七銀打    \r
  78 同　玉(88)  \r
  79 ３三角打    \r
  80 ７八玉(77)  \r
  81 ９八龍(96)  \r
  82 ７九玉(78)  \r
  83 ８八龍(98)  \r
  84 ６九玉(79)  \r
  85 ６八龍(88)  \r
  86 詰み        \r
まで85手詰\r
\r
変化：18手\r
  18 ７二歩打    \r
  19 同　馬(36)  \r
  20 ９一玉(81)  \r
  21 ７三馬(72)  \r
  22 ８一玉(91)  \r
  23 ６三馬(73)  \r
  24 ９一玉(81)  \r
  25 ６四馬(63)  \r
  26 ８一玉(91)  \r
  27 ５四馬(64)  \r
  28 ９一玉(81)  \r
  29 ５五馬(54)  \r
  30 ８一玉(91)  \r
  31 ４五馬(55)  \r
  32 ９一玉(81)  \r
  33 ４六馬(45)  \r
  34 ８一玉(91)  \r
  35 ３六馬(46)  \r
  36 ７二歩打    \r
  37 同　馬(36)  \r
  38 ９一玉(81)  \r
  39 ７三馬(72)  \r
  40 ８一玉(91)  \r
  41 ６三馬(73)  \r
  42 ９一玉(81)  \r
  43 ６四馬(63)  \r
  44 ８一玉(91)  \r
  45 ５四馬(64)  \r
  46 ９一玉(81)  \r
  47 ５五馬(54)  \r
  48 ８一玉(91)  \r
  49 ４五馬(55)  \r
  50 ９一玉(81)  \r
  51 ４六馬(45)  \r
  52 ８一玉(91)  \r
  53 ３六馬(46)  \r
  54 ７二歩打    \r
  55 同　馬(36)  \r
  56 ９一玉(81)  \r
  57 ７三馬(72)  \r
  58 ８一玉(91)  \r
  59 ６三馬(73)  \r
  60 ９一玉(81)  \r
  61 ６四馬(63)  \r
  62 ８一玉(91)  \r
  63 ５四馬(64)  \r
  64 ９一玉(81)  \r
  65 ５五馬(54)  \r
  66 ８一玉(91)  \r
  67 ４五馬(55)  \r
  68 ９一玉(81)  \r
  69 ４六馬(45)  \r
  70 ８一玉(91)  \r
  71 ３六馬(46)  \r
  72 ７二歩打    \r
  73 同　馬(36)  \r
  74 ９一玉(81)  \r
  75 ７三馬(72)  \r
  76 ８一玉(91)  \r
  77 ６三馬(73)  \r
  78 ９一玉(81)  \r
  79 ６四馬(63)  \r
  80 ８一玉(91)  \r
  81 ５四馬(64)  \r
  82 ９一玉(81)  \r
  83 ５五馬(54)  \r
  84 ８一玉(91)  \r
  85 ４五馬(55)  \r
  86 ９一玉(81)  \r
  87 ４六馬(45)  \r
  88 ８一玉(91)  \r
  89 ３六馬(46)  \r
  90 ７二歩打    \r
  91 同　馬(36)  \r
  92 ９一玉(81)  \r
  93 ７三馬(72)  \r
  94 ８一玉(91)  \r
  95 ６三馬(73)  \r
  96 ９一玉(81)  \r
  97 ６四馬(63)  \r
  98 ８一玉(91)  \r
  99 ５四馬(64)  \r
 100 ９一玉(81)  \r
 101 ５五馬(54)  \r
 102 ８一玉(91)  \r
 103 ４五馬(55)  \r
 104 ９一玉(81)  \r
 105 ４六馬(45)  \r
 106 ８一玉(91)  \r
 107 ３六馬(46)  \r
 108 ７二歩打    \r
 109 同　馬(36)  \r
 110 ９一玉(81)  \r
 111 ７三馬(72)  \r
 112 ８一玉(91)  \r
 113 ６三馬(73)  \r
 114 ９一玉(81)  \r
 115 ６四馬(63)  \r
 116 ８一玉(91)  \r
 117 ５四馬(64)  \r
 118 ９一玉(81)  \r
 119 ５五馬(54)  \r
 120 ８一玉(91)  \r
 121 ４五馬(55)  \r
 122 ９一玉(81)  \r
 123 ４六馬(45)  \r
 124 ８一玉(91)  \r
 125 ３六馬(46)  \r
 126 ７二歩打    \r
 127 同　馬(36)  \r
 128 ９一玉(81)  \r
 129 ７三馬(72)  \r
 130 ８一玉(91)  \r
 131 ６三馬(73)  \r
 132 ９一玉(81)  \r
 133 ６四馬(63)  \r
 134 ８一玉(91)  \r
 135 ５四馬(64)  \r
 136 ９一玉(81)  \r
 137 ５五馬(54)  \r
 138 ８一玉(91)  \r
 139 ４五馬(55)  \r
 140 ９一玉(81)  \r
 141 ４六馬(45)  \r
 142 ８一玉(91)  \r
 143 ３六馬(46)  \r
 144 ７二歩打    \r
 145 同　馬(36)  \r
 146 ９一玉(81)  \r
 147 ７三馬(72)  \r
 148 ８一玉(91)  \r
 149 ６三馬(73)  \r
 150 ９一玉(81)  \r
 151 ６四馬(63)  \r
 152 ８一玉(91)  \r
 153 ５四馬(64)  \r
 154 ９一玉(81)  \r
 155 ５五馬(54)  \r
 156 ８一玉(91)  \r
 157 ４五馬(55)  \r
 158 ９一玉(81)  \r
 159 ４六馬(45)  \r
 160 ８一玉(91)  \r
 161 ３六馬(46)  \r
 162 ７二歩打    \r
 163 同　馬(36)  \r
 164 ９一玉(81)  \r
 165 ７三馬(72)  \r
 166 ８一玉(91)  \r
 167 ６三馬(73)  \r
 168 ９一玉(81)  \r
 169 ６四馬(63)  \r
 170 ８一玉(91)  \r
 171 ５四馬(64)  \r
 172 ９一玉(81)  \r
 173 ５五馬(54)  \r
 174 ８一玉(91)  \r
 175 ４五馬(55)  \r
 176 ９一玉(81)  \r
 177 ４六馬(45)  \r
 178 ８一玉(91)  \r
 179 ３六馬(46)  \r
 180 ７二歩打    \r
 181 同　馬(36)  \r
 182 ９一玉(81)  \r
 183 ７三馬(72)  \r
 184 ８一玉(91)  \r
 185 ６三馬(73)  \r
 186 ９一玉(81)  \r
 187 ６四馬(63)  \r
 188 ８一玉(91)  \r
 189 ５四馬(64)  \r
 190 ９一玉(81)  \r
 191 ５五馬(54)  \r
 192 ８一玉(91)  \r
 193 ４五馬(55)  \r
 194 ９一玉(81)  \r
 195 ４六馬(45)  \r
 196 ８一玉(91)  \r
 197 ３六馬(46)  \r
 198 ７二歩打    \r
 199 同　馬(36)  \r
 200 ９一玉(81)  \r
 201 ７三馬(72)  \r
 202 ８一玉(91)  \r
 203 ６三馬(73)  \r
 204 ９一玉(81)  \r
 205 ６四馬(63)  \r
 206 ８一玉(91)  \r
 207 ５四馬(64)  \r
 208 ９一玉(81)  \r
 209 ５五馬(54)  \r
 210 ８一玉(91)  \r
 211 ４五馬(55)  \r
 212 ９一玉(81)  \r
 213 ４六馬(45)  \r
 214 ８一玉(91)  \r
 215 ３六馬(46)  \r
 216 ７二歩打    \r
 217 同　馬(36)  \r
 218 ９一玉(81)  \r
 219 ７三馬(72)  \r
 220 ８一玉(91)  \r
 221 ６三馬(73)  \r
 222 ９一玉(81)  \r
 223 ６四馬(63)  \r
 224 ８一玉(91)  \r
 225 ５四馬(64)  \r
 226 ９一玉(81)  \r
 227 ５五馬(54)  \r
 228 ８一玉(91)  \r
 229 ４五馬(55)  \r
 230 ９一玉(81)  \r
 231 ４六馬(45)  \r
 232 ８一玉(91)  \r
 233 ３六馬(46)  \r
 234 ７二歩打    \r
 235 同　馬(36)  \r
 236 ９一玉(81)  \r
 237 ７三馬(72)  \r
 238 ８一玉(91)  \r
 239 ６三馬(73)  \r
 240 ９一玉(81)  \r
 241 ６四馬(63)  \r
 242 ８一玉(91)  \r
 243 ５四馬(64)  \r
 244 ９一玉(81)  \r
 245 ５五馬(54)  \r
 246 ８一玉(91)  \r
 247 ４五馬(55)  \r
 248 ９一玉(81)  \r
 249 ４六馬(45)  \r
 250 ８一玉(91)  \r
 251 ３六馬(46)  \r
 252 ７二歩打    \r
 253 同　馬(36)  \r
 254 ９一玉(81)  \r
 255 ７三馬(72)  \r
 256 ８一玉(91)  \r
 257 ６三馬(73)  \r
 258 ９一玉(81)  \r
 259 ６四馬(63)  \r
 260 ８一玉(91)  \r
 261 ５四馬(64)  \r
 262 ９一玉(81)  \r
 263 ５五馬(54)  \r
 264 ８一玉(91)  \r
 265 ４五馬(55)  \r
 266 ９一玉(81)  \r
 267 ４六馬(45)  \r
 268 ８一玉(91)  \r
 269 ３六馬(46)  \r
 270 ７二歩打    \r
 271 同　馬(36)  \r
 272 ９一玉(81)  \r
 273 ７三馬(72)  \r
 274 ８一玉(91)  \r
 275 ６三馬(73)  \r
 276 ９一玉(81)  \r
 277 ６四馬(63)  \r
 278 ８一玉(91)  \r
 279 ５四馬(64)  \r
 280 ９一玉(81)  \r
 281 ５五馬(54)  \r
 282 ８一玉(91)  \r
 283 ４五馬(55)  \r
 284 ９一玉(81)  \r
 285 ４六馬(45)  \r
 286 ８一玉(91)  \r
 287 ３六馬(46)  \r
 288 ７二歩打    \r
 289 同　馬(36)  \r
 290 ９一玉(81)  \r
 291 ７三馬(72)  \r
 292 ８一玉(91)  \r
 293 ６三馬(73)  \r
 294 ９一玉(81)  \r
 295 ６四馬(63)  \r
 296 ８一玉(91)  \r
 297 ５四馬(64)  \r
 298 ９一玉(81)  \r
 299 ５五馬(54)  \r
 300 ８一玉(91)  \r
 301 ４五馬(55)  \r
 302 ９一玉(81)  \r
 303 ４六馬(45)  \r
 304 ８一玉(91)  \r
 305 ３六馬(46)  \r
 306 ７二歩打    \r
 307 同　馬(36)  \r
 308 ９一玉(81)  \r
 309 ７三馬(72)  \r
 310 ８一玉(91)  \r
 311 ６三馬(73)  \r
 312 ９一玉(81)  \r
 313 ６四馬(63)  \r
 314 ８一玉(91)  \r
 315 ５四馬(64)  \r
 316 ９一玉(81)  \r
 317 ５五馬(54)  \r
 318 ８一玉(91)  \r
 319 ４五馬(55)  \r
 320 ９一玉(81)  \r
 321 ４六馬(45)  \r
 322 ８一玉(91)  \r
 323 ３六馬(46)  \r
 324 ９一玉(81)  \r
 325 ３七馬(36)  \r
 326 ８一玉(91)  \r
 327 ２七馬(37)  \r
 328 ９一玉(81)  \r
 329 ３七馬(27)  \r
 330 ８一玉(91)  \r
 331 ３六馬(37)  \r
 332 ９一玉(81)  \r
 333 ４六馬(36)  \r
 334 ８一玉(91)  \r
 335 ４五馬(46)  \r
 336 ９一玉(81)  \r
 337 ５五馬(45)  \r
 338 ８一玉(91)  \r
 339 ５四馬(55)  \r
 340 ９一玉(81)  \r
 341 ６四馬(54)  \r
 342 ８一玉(91)  \r
 343 ６三馬(64)  \r
 344 ９一玉(81)  \r
 345 ７三馬(63)  \r
 346 ８一玉(91)  \r
 347 ７二銀(83)  \r
 348 ９二玉(81)  \r
 349 ８四桂打    \r
 350 同　龍(85)  \r
 351 同　桂(76)  \r
 352 同　金(94)  \r
 353 ９一飛打    \r
 354 同　龍(41)  \r
 355 同　馬(73)  \r
 356 同　玉(92)  \r
 357 ７一飛打    \r
 358 ８二玉(91)  \r
 359 ８一飛成(71)\r
 360 ７三玉(82)  \r
 361 ７五香(77)  \r
 362 ６四玉(73)  \r
 363 ６一龍(81)  \r
 364 ５五玉(64)  \r
 365 ４六金打    \r
 366 同　玉(55)  \r
 367 ６六龍(61)  \r
 368 ４五玉(46)  \r
 369 ４六歩打    \r
 370 ５四玉(45)  \r
 371 ５七龍(66)  \r
 372 ５五角打    \r
 373 ５三成香(43)\r
 374 ６四玉(54)  \r
 375 ６三成香(53)\r
 376 ７五玉(64)  \r
 377 ５五龍(57)  \r
 378 ８六玉(75)  \r
 379 ６六龍(55)  \r
 380 ９七玉(86)  \r
 381 ９六龍(66)  \r
 382 ８八玉(97)  \r
 383 ７七銀打    \r
 384 同　玉(88)  \r
 385 ３三角打    \r
 386 ７八玉(77)  \r
 387 ９八龍(96)  \r
 388 ７九玉(78)  \r
 389 ８八龍(98)  \r
 390 ６九玉(79)  \r
 391 ６八龍(88)  \r
*歩17枚余る\r
 392 詰み        \r
まで391手詰\r
`,D3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0334\r
作者：二代伊藤宗印\r
発表誌：将棋勇略 第35番\r
発表年月：元禄13年7月\r
手数：57\r
分類：銀歩送り\r
備考：8件登録、『象戯洗濯作物集 第1番』と同じ\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀二　桂三　香二　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v馬 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ 歩 ・v香 ・ ・ ・|二\r
|v歩v銀 ・v銀 ・ ・ ・ ・ ・|三\r
| ・ ・v玉v金 ・ ・ ・ ・ ・|四\r
| 龍v金 ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ 馬 ・ ・ ・ ・ ・|六\r
| ・ 龍 ・ 桂 ・ ・ ・ ・ ・|七\r
|v金 ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩九　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８四龍(95)  \r
   2 同　金(85)  \r
   3 同　龍(87)  \r
   4 同　銀(83)  \r
   5 ７三金打    \r
   6 同　玉(74)  \r
   7 ８四馬(66)  \r
   8 ８二玉(73)  \r
   9 ７三銀打    \r
  10 ９一玉(82)  \r
  11 ９二歩打    \r
  12 同　玉(91)  \r
  13 ９三馬(84)  \r
  14 同　玉(92)  \r
  15 ９四歩打    \r
  16 同　馬(61)  \r
  17 ８二銀(73)  \r
  18 ９二玉(93)  \r
  19 ９三歩打    \r
  20 同　馬(94)  \r
  21 同　銀成(82)\r
  22 同　玉(92)  \r
  23 ８二角打    \r
  24 ９四玉(93)  \r
  25 ９五歩打    \r
  26 同　玉(94)  \r
  27 ７三角成(82)\r
  28 ９六玉(95)  \r
  29 ９七歩打    \r
  30 同　金(98)  \r
  31 ６三馬(73)  \r
  32 同　金(64)  \r
  33 ８五銀打    \r
  34 ９五玉(96)  \r
  35 ９六歩打    \r
  36 同　金(97)  \r
  37 ８四銀(85)  \r
  38 ９四玉(95)  \r
  39 ９五歩打    \r
  40 同　金(96)  \r
  41 ８三銀(84)  \r
  42 ９三玉(94)  \r
  43 ９四歩打    \r
  44 同　金(95)  \r
  45 ８二銀(83)  \r
  46 ９二玉(93)  \r
  47 ９三歩打    \r
  48 同　金(94)  \r
  49 ８一銀(82)  \r
  50 ９一玉(92)  \r
  51 ９二歩打    \r
  52 同　金(93)  \r
  53 同　銀成(81)\r
  54 同　玉(91)  \r
  55 ８三金打    \r
  56 ８一玉(92)  \r
  57 ８二金(83)  \r
  58 詰み        \r
まで57手詰\r
`,z3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0340\r
作者：三代伊藤宗看\r
発表誌：将棋無双 第30番\r
発表年月：享保19年8月\r
手数：119\r
分類：馬鋸\r
備考：13件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ 角 ・v桂 ・ 飛 ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ 金v歩|二\r
| ・ ・ ・ ・ 圭 ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・v飛v玉 ・|四\r
| ・ ・ ・ ・v銀 桂v香 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・vと ・ ・ 桂v銀 金 ・|七\r
| ・ ・ ・ ・ ・ 馬 ・ ・ ・|八\r
| ・v銀 ・ 歩 ・ ・ ・v銀 ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三金(22)  \r
   2 ２五玉(24)  \r
   3 ２四金(23)  \r
   4 同　玉(25)  \r
   5 ３四飛成(31)\r
   6 同　玉(24)  \r
   7 ３三飛打    \r
   8 ４五玉(34)  \r
   9 ３五飛成(33)\r
  10 ５六玉(45)  \r
  11 ５五龍(35)  \r
  12 ６七玉(56)  \r
  13 ６六龍(55)  \r
  14 ７八玉(67)  \r
  15 ７九香打    \r
  16 同　玉(78)  \r
  17 ６八銀打    \r
  18 ８八玉(79)  \r
  19 ７七龍(66)  \r
  20 ９八玉(88)  \r
  21 ９九歩打    \r
  22 同　玉(98)  \r
  23 ９七龍(77)  \r
  24 ９八銀成(89)\r
  25 ６六馬(48)  \r
  26 ８九玉(99)  \r
  27 ５六馬(66)  \r
  28 ９九玉(89)  \r
  29 ５五馬(56)  \r
  30 ８九玉(99)  \r
  31 ４五馬(55)  \r
  32 ９九玉(89)  \r
  33 ４四馬(45)  \r
  34 ８九玉(99)  \r
  35 ３四馬(44)  \r
  36 ９九玉(89)  \r
  37 ３三馬(34)  \r
  38 ８九玉(99)  \r
  39 ２三馬(33)  \r
  40 ９九玉(89)  \r
  41 ２二馬(23)  \r
  42 ８九玉(99)  \r
  43 １二馬(22)  \r
  44 ９九玉(89)  \r
  45 ２二馬(12)  \r
  46 ８九玉(99)  \r
  47 ２三馬(22)  \r
  48 ９九玉(89)  \r
  49 ３三馬(23)  \r
  50 ８九玉(99)  \r
  51 ３四馬(33)  \r
  52 ９九玉(89)  \r
  53 ４四馬(34)  \r
  54 ８九玉(99)  \r
  55 ４五馬(44)  \r
  56 ９九玉(89)  \r
  57 ５五馬(45)  \r
  58 ８九玉(99)  \r
  59 ５六馬(55)  \r
  60 ９九玉(89)  \r
  61 ６六馬(56)  \r
  62 ８九玉(99)  \r
  63 ６七馬(66)  \r
  64 ９九玉(89)  \r
  65 ７七馬(67)  \r
  66 ８九玉(99)  \r
  67 ７八馬(77)  \r
  68 同　玉(89)  \r
  69 ７七龍(97)  \r
  70 ６九玉(78)  \r
  71 ７九龍(77)  \r
  72 ５八玉(69)  \r
  73 ５九龍(79)  \r
  74 ４七玉(58)  \r
  75 ５七龍(59)  \r
  76 ３八玉(47)  \r
  77 ３七金(27)  \r
  78 ２八玉(38)  \r
  79 ２七金(37)  \r
  80 ３八玉(28)  \r
  81 ２八金(27)  \r
  82 ３九玉(38)  \r
  83 ４八銀打    \r
  84 ２八玉(39)  \r
  85 ３七龍(57)  \r
  86 １八玉(28)  \r
  87 １九歩打    \r
  88 同　玉(18)  \r
  89 １七龍(37)  \r
  90 １八銀成(29)\r
  91 ８二角成(71)\r
  92 ２九玉(19)  \r
  93 ８三馬(82)  \r
  94 １九玉(29)  \r
  95 ７三馬(83)  \r
  96 ２九玉(19)  \r
  97 ７四馬(73)  \r
  98 １九玉(29)  \r
  99 ６四馬(74)  \r
 100 ２九玉(19)  \r
 101 ６五馬(64)  \r
 102 １九玉(29)  \r
 103 ５五馬(65)  \r
 104 ２九玉(19)  \r
 105 ５六馬(55)  \r
 106 １九玉(29)  \r
 107 ４六馬(56)  \r
 108 ２九玉(19)  \r
 109 ４七馬(46)  \r
 110 １九玉(29)  \r
 111 ３七馬(47)  \r
 112 ２九玉(19)  \r
 113 ３八馬(37)  \r
 114 同　玉(29)  \r
 115 ３七龍(17)  \r
 116 ４九玉(38)  \r
 117 ３九龍(37)  \r
 118 ５八玉(49)  \r
 119 ５九龍(39)  \r
 120 詰み        \r
まで119手詰\r
`,G3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0341\r
作者：三代伊藤宗看\r
発表誌：将棋無双 第70番\r
発表年月：享保19年8月\r
手数：79\r
分類：馬鋸\r
備考：13件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　桂二　香二　歩五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v飛 ・ と 角 ・ ・ ・ ・v桂|一\r
| ・v歩 ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・v香 ・ 歩 ・ ・ ・ ・|三\r
| ・ ・ ・v歩 ・ 歩 馬 ・ ・|四\r
| ・ ・ ・vとv歩 ・ と ・ 銀|五\r
| 銀 銀 桂 ・ ・v歩 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・v香 ・ ・|七\r
|v歩v金 ・ 金 ・ ・ ・v玉v歩|八\r
| 金 ・ 歩 ・ 龍 ・ ・ ・vと|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 １七銀打    \r
   2 同　玉(28)  \r
   3 ２六銀(15)  \r
   4 同　玉(17)  \r
   5 ２九龍(59)  \r
   6 同　と(19)  \r
   7 １六馬(34)  \r
   8 ３五玉(26)  \r
   9 ２五馬(16)  \r
  10 ４四玉(35)  \r
  11 ３四馬(25)  \r
  12 ５三玉(44)  \r
  13 ４三馬(34)  \r
  14 ６二玉(53)  \r
  15 ５二角成(61)\r
  16 ７一玉(62)  \r
  17 ６一馬(52)  \r
  18 ８一玉(71)  \r
  19 ５四馬(43)  \r
  20 ９二玉(81)  \r
  21 ６五馬(54)  \r
  22 ９三玉(92)  \r
  23 ６六馬(65)  \r
  24 ９二玉(93)  \r
  25 ５六馬(66)  \r
  26 ９三玉(92)  \r
  27 ５七馬(56)  \r
  28 ９二玉(93)  \r
  29 ４七馬(57)  \r
  30 ９三玉(92)  \r
  31 ４八馬(47)  \r
  32 ９二玉(93)  \r
  33 ３八馬(48)  \r
  34 ９三玉(92)  \r
  35 ３九馬(38)  \r
  36 ９二玉(93)  \r
  37 ２九馬(39)  \r
  38 ９三玉(92)  \r
  39 ３九馬(29)  \r
  40 ９二玉(93)  \r
  41 ３八馬(39)  \r
  42 ９三玉(92)  \r
  43 ４八馬(38)  \r
  44 ９二玉(93)  \r
  45 ４七馬(48)  \r
  46 ９三玉(92)  \r
  47 ５七馬(47)  \r
  48 ９二玉(93)  \r
  49 ５六馬(57)  \r
  50 ９三玉(92)  \r
  51 ６六馬(56)  \r
  52 ９二玉(93)  \r
  53 ６五馬(66)  \r
  54 ９三玉(92)  \r
  55 ９四馬(61)  \r
  56 同　玉(93)  \r
  57 ８五銀(96)  \r
  58 ９三玉(94)  \r
  59 ８四銀(85)  \r
  60 ９四玉(93)  \r
  61 ９五銀(86)  \r
  62 ８五玉(94)  \r
  63 ８六歩打    \r
  64 ９六玉(85)  \r
  65 ９七歩打    \r
  66 同　玉(96)  \r
  67 ８八金(99)  \r
  68 同　玉(97)  \r
  69 ５五馬(65)  \r
  70 ９七玉(88)  \r
  71 ８七金打    \r
  72 同　玉(97)  \r
  73 ７八金(68)  \r
  74 ９六玉(87)  \r
  75 ９七歩打    \r
  76 同　玉(96)  \r
  77 ８八馬(55)  \r
  78 ９六玉(97)  \r
  79 ８七金(78)  \r
  80 詰み        \r
まで79手詰\r
`,H3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0349\r
作者：伊藤看寿\r
発表誌：将棋図巧 第1番\r
発表年月：宝暦5年3月\r
手数：69\r
備考：18件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　桂　香二　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v歩 金 ・ 角 ・ ・ ・ ・|一\r
| 金v銀 と ・ ・ ・ ・ ・ ・|二\r
|v歩 歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v桂 ・v香v銀 ・ ・ ・ ・ ・|四\r
| ・ ・ ・v玉 ・ ・ ・ ・ ・|五\r
|v桂 香 ・ ・ ・ ・v龍 ・v角|六\r
| ・vと ・v歩 龍 ・ ・ ・ ・|七\r
| ・ 銀 ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ 桂 ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５四銀打    \r
   2 ７五玉(65)  \r
   3 ８七桂(79)  \r
   4 ８六玉(75)  \r
   5 ６六龍(57)  \r
   6 同　龍(36)  \r
   7 ９五角成(51)\r
   8 ７六玉(86)  \r
   9 ７七歩打    \r
  10 同　龍(66)  \r
  11 同　馬(95)  \r
  12 ８五玉(76)  \r
  13 １五飛打    \r
  14 ２五飛打    \r
  15 同　飛(15)  \r
  16 同　角(16)  \r
  17 ９五馬(77)  \r
  18 ７六玉(85)  \r
  19 ２六飛打    \r
  20 ３六飛打    \r
  21 同　飛(26)  \r
  22 同　角(25)  \r
  23 ７七馬(95)  \r
  24 ８五玉(76)  \r
  25 ３五飛打    \r
  26 ４五飛打    \r
  27 同　飛(35)  \r
  28 同　角(36)  \r
  29 ９五馬(77)  \r
  30 ７六玉(85)  \r
  31 ４六飛打    \r
  32 ５六飛打    \r
  33 同　飛(46)  \r
  34 同　角(45)  \r
  35 ７七馬(95)  \r
  36 ８五玉(76)  \r
  37 ８四飛打    \r
  38 同　玉(85)  \r
  39 ９五馬(77)  \r
  40 ８三玉(84)  \r
  41 ８二金(92)  \r
  42 同　歩(81)  \r
  43 ７五桂(87)  \r
  44 同　香(74)  \r
  45 ８四歩打    \r
  46 ９二玉(83)  \r
  47 ８一銀打    \r
  48 ９一玉(92)  \r
  49 ８二と(72)  \r
  50 同　玉(91)  \r
  51 ７二金(71)  \r
  52 ９一玉(82)  \r
  53 ９二歩打    \r
  54 同　角(56)  \r
  55 同　銀成(81)\r
  56 同　玉(91)  \r
  57 ７四角打    \r
  58 ９一玉(92)  \r
  59 ８二金(72)  \r
  60 同　玉(91)  \r
  61 ８三歩成(84)\r
  62 ７一玉(82)  \r
  63 ６二馬(95)  \r
  64 同　玉(71)  \r
  65 ６三銀成(54)\r
  66 ６一玉(62)  \r
  67 ７二と(83)  \r
  68 ５一玉(61)  \r
  69 ５二成銀(63)\r
  70 詰み        \r
まで69手詰\r
`,U3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0492\r
作品名：朝霧\r
作者：伊藤看寿\r
発表誌：将棋図巧 第6番\r
発表年月：宝暦5年3月\r
手数：81\r
備考：8件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀三　香三　歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 龍v金 ・ ・ 馬v歩v玉 ・ ・|一\r
| ・ ・v歩 ・v金 ・ ・v歩v香|二\r
| ・v桂 ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ 歩 ・ 金 歩 ・v龍v歩|四\r
| ・ 桂 ・ ・v歩 ・vと ・ ・|五\r
| 桂 ・ ・ ・ ・ ・ 桂 ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀　歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二銀打    \r
   2 同　玉(31)  \r
   3 ４三角打    \r
   4 同　金(52)  \r
   5 同　歩成(44)\r
   6 ２一玉(32)  \r
   7 ３二と(43)  \r
   8 同　玉(21)  \r
   9 ２四桂(36)  \r
  10 ２三玉(32)  \r
  11 ３三飛打    \r
  12 ２四玉(23)  \r
  13 ２三飛成(33)\r
  14 同　玉(24)  \r
  15 ２四金打    \r
  16 ３二玉(23)  \r
  17 ４一馬(51)  \r
  18 ２一玉(32)  \r
  19 ３一馬(41)  \r
  20 １一玉(21)  \r
  21 ２二馬(31)  \r
  22 同　玉(11)  \r
  23 ２三歩打    \r
  24 ３二玉(22)  \r
  25 ３三歩打    \r
  26 ４二玉(32)  \r
  27 ４三歩打    \r
  28 ５二玉(42)  \r
  29 ５三歩打    \r
  30 ６二玉(52)  \r
  31 ７三歩成(74)\r
  32 同　歩(72)  \r
  33 ６三歩打    \r
  34 ７一玉(62)  \r
  35 ７二歩打    \r
  36 同　玉(71)  \r
  37 ８四桂(96)  \r
  38 ７一玉(72)  \r
  39 ８一龍(91)  \r
  40 同　玉(71)  \r
  41 ９三桂(85)  \r
  42 ８二玉(81)  \r
  43 ９二金打    \r
  44 ７一玉(82)  \r
  45 ８一桂成(93)\r
  46 ６一玉(71)  \r
  47 ７二桂成(84)\r
  48 同　玉(61)  \r
  49 ８二金(92)  \r
  50 ６一玉(72)  \r
  51 ７一成桂(81)\r
  52 ５一玉(61)  \r
  53 ６二歩成(63)\r
  54 同　玉(51)  \r
  55 ７二金(82)  \r
  56 ５一玉(62)  \r
  57 ６一成桂(71)\r
  58 ４一玉(51)  \r
  59 ５二歩成(53)\r
  60 同　玉(41)  \r
  61 ６二金(72)  \r
  62 ４一玉(52)  \r
  63 ５一成桂(61)\r
  64 ３一玉(41)  \r
  65 ４二歩成(43)\r
  66 同　玉(31)  \r
  67 ５二金(62)  \r
  68 ３一玉(42)  \r
  69 ４一成桂(51)\r
  70 ２一玉(31)  \r
  71 ３二歩成(33)\r
  72 同　玉(21)  \r
  73 ４二金(52)  \r
  74 ２一玉(32)  \r
  75 ３一成桂(41)\r
  76 １一玉(21)  \r
  77 ２二歩成(23)\r
  78 同　玉(11)  \r
  79 ３二金(42)  \r
  80 １一玉(22)  \r
  81 ２一成桂(31)\r
  82 詰み        \r
まで81手詰\r
`,J3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0494\r
作者：伊藤看寿\r
発表誌：将棋図巧 第97番\r
発表年月：宝暦5年3月\r
手数：77\r
分類：実戦初形\r
備考：12件登録\r
解説：实战初形很自然，趣味在于普通棋形下隐藏着唯一解；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香v桂v銀v金v玉v金v銀v桂v香|一\r
|v銀 ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ 飛 歩v歩 ・ 龍v歩v歩v歩|三\r
| 香 歩 ・ 桂v歩 ・ ・ ・ ・|四\r
| と 金 ・ ・ 歩 ・ 歩v銀 角|五\r
|v杏 ・ ・ 桂 ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ 金 ・ 歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５三龍(43)  \r
   2 ５二金(41)  \r
   3 同　桂成(64)\r
   4 同　金(61)  \r
   5 ６二金打    \r
   6 同　銀(71)  \r
   7 ８一飛成(83)\r
   8 同　銀(92)  \r
   9 ４三桂打    \r
  10 ４一玉(51)  \r
  11 ３一桂成(43)\r
  12 同　玉(41)  \r
  13 ３二銀打    \r
  14 ２二玉(31)  \r
  15 ３一角打    \r
  16 １二玉(22)  \r
  17 ２一銀(32)  \r
  18 同　玉(12)  \r
  19 ２二角成(31)\r
  20 同　玉(21)  \r
  21 ３三角成(15)\r
  22 ２一玉(22)  \r
  23 ３二馬(33)  \r
  24 同　玉(21)  \r
  25 ４四桂打    \r
  26 ２二玉(32)  \r
  27 ５二龍(53)  \r
  28 ３三玉(22)  \r
  29 ３四金打    \r
  30 同　銀(25)  \r
  31 ３二龍(52)  \r
  32 ４四玉(33)  \r
  33 ３四龍(32)  \r
  34 ５五玉(44)  \r
  35 ５四龍(34)  \r
  36 ６六玉(55)  \r
  37 ５七龍(54)  \r
  38 ７六玉(66)  \r
  39 ６五銀打    \r
  40 同　玉(76)  \r
  41 ５六龍(57)  \r
  42 ６四玉(65)  \r
  43 ６五歩打    \r
  44 ７三玉(64)  \r
  45 ７六龍(56)  \r
  46 ８二玉(73)  \r
  47 ８三歩成(84)\r
  48 同　玉(82)  \r
  49 ８四と(95)  \r
  50 ８二玉(83)  \r
  51 ９三香成(94)\r
  52 同　香(91)  \r
  53 同　と(84)  \r
  54 同　玉(82)  \r
  55 ９四香打    \r
  56 ８二玉(93)  \r
  57 ８三歩打    \r
  58 同　玉(82)  \r
  59 ７四龍(76)  \r
  60 ８二玉(83)  \r
  61 ９三香成(94)\r
  62 同　玉(82)  \r
  63 ８四金(85)  \r
  64 ９二玉(93)  \r
  65 ８三金(84)  \r
  66 ９一玉(92)  \r
  67 ９二歩打    \r
  68 同　銀(81)  \r
  69 同　金(83)  \r
  70 同　玉(91)  \r
  71 ８三銀打    \r
  72 ９一玉(92)  \r
  73 ９四龍(74)  \r
  74 ８一玉(91)  \r
  75 ９二龍(94)  \r
  76 ７一玉(81)  \r
  77 ７二龍(92)  \r
  78 詰み        \r
まで77手詰\r
`,W3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0496\r
作品名：煙詰\r
作者：伊藤看寿\r
発表誌：将棋図巧 第99番\r
発表年月：宝暦5年3月\r
手数：117\r
分類：煙詰\r
備考：24件登録\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉 ・ と ・ ・ ・ ・v桂 ・|一\r
| ・ ・ 香 と ・ ・v銀 香 ・|二\r
|v飛 ・ ・ ・ ・ と と ・ 歩|三\r
| 馬v歩 歩 とv香 ・ 龍v金 ・|四\r
| 桂 歩 ・ 銀 と 歩vと ・v金|五\r
| ・ ・ 香vと ・v金 と ・ と|六\r
| 歩v銀 ・ 金 ・ と ・ 桂 ・|七\r
| ・v銀 桂 ・ 歩 ・ ・ ・ ・|八\r
| 角 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８一と(71)  \r
   2 同　玉(91)  \r
   3 ７一香成(72)\r
   4 ９一玉(81)  \r
   5 ８一成香(71)\r
   6 同　玉(91)  \r
   7 ７二と(62)  \r
   8 ９一玉(81)  \r
   9 ８二と(72)  \r
  10 同　玉(91)  \r
  11 ７三歩成(74)\r
  12 ９一玉(82)  \r
  13 ８二と(73)  \r
  14 同　玉(91)  \r
  15 ７三と(64)  \r
  16 ９一玉(82)  \r
  17 ８二と(73)  \r
  18 同　玉(91)  \r
  19 ７二香成(76)\r
  20 ９一玉(82)  \r
  21 ８二成香(72)\r
  22 同　玉(91)  \r
  23 ９三馬(94)  \r
  24 同　玉(82)  \r
  25 ７三飛打    \r
  26 ９四玉(93)  \r
  27 ８三飛成(73)\r
  28 ８五玉(94)  \r
  29 ８四龍(83)  \r
  30 同　玉(85)  \r
  31 ５四龍(34)  \r
  32 ９五玉(84)  \r
  33 ９六香打    \r
  34 同　銀成(87)\r
  35 同　歩(97)  \r
  36 同　玉(95)  \r
  37 ８七銀打    \r
  38 ９七玉(96)  \r
  39 ９四龍(54)  \r
  40 ８七玉(97)  \r
  41 ８五龍(94)  \r
  42 ７八玉(87)  \r
  43 ８八龍(85)  \r
  44 ６七玉(78)  \r
  45 ６八銀打    \r
  46 ５八玉(67)  \r
  47 ５七銀(68)  \r
  48 ４七玉(58)  \r
  49 ４六と(36)  \r
  50 ５七玉(47)  \r
  51 ５六金打    \r
  52 同　と(66)  \r
  53 同　と(55)  \r
  54 ６七玉(57)  \r
  55 ７六銀(65)  \r
  56 同　玉(67)  \r
  57 ６六と(56)  \r
  58 同　玉(76)  \r
  59 ７七龍(88)  \r
  60 ６五玉(66)  \r
  61 ５五と(46)  \r
  62 同　玉(65)  \r
  63 ６六龍(77)  \r
  64 ４五玉(55)  \r
  65 ４四と(43)  \r
  66 同　玉(45)  \r
  67 ５六龍(66)  \r
  68 ５五歩打    \r
  69 同　龍(56)  \r
  70 ３三玉(44)  \r
  71 ５三龍(55)  \r
  72 ３四玉(33)  \r
  73 ４四龍(53)  \r
  74 ２三玉(34)  \r
  75 ２四龍(44)  \r
  76 同　玉(23)  \r
  77 １五と(16)  \r
  78 ３四玉(24)  \r
  79 ４四金打    \r
  80 ２三玉(34)  \r
  81 ２四歩打    \r
  82 １三玉(23)  \r
  83 ２三金打    \r
  84 同　銀(32)  \r
  85 同　歩成(24)\r
  86 同　玉(13)  \r
  87 ３五桂(27)  \r
  88 １二玉(23)  \r
  89 １三歩打    \r
  90 同　玉(12)  \r
  91 １四歩打    \r
  92 １二玉(13)  \r
  93 １三銀打    \r
  94 同　桂(21)  \r
  95 同　歩成(14)\r
  96 同　玉(12)  \r
  97 ２三桂成(35)\r
  98 同　玉(13)  \r
  99 ３三金(44)  \r
 100 １二玉(23)  \r
 101 １三歩打    \r
 102 同　玉(12)  \r
 103 ２五桂打    \r
 104 １二玉(13)  \r
 105 ２三金(33)  \r
 106 同　玉(12)  \r
 107 ３三角成(99)\r
 108 １二玉(23)  \r
 109 １三桂成(25)\r
 110 同　玉(12)  \r
 111 ２四と(15)  \r
 112 １二玉(13)  \r
 113 ２三と(24)  \r
 114 １一玉(12)  \r
 115 ２一香成(22)\r
 116 同　玉(11)  \r
 117 ２二馬(33)  \r
 118 詰み        \r
まで117手詰\r
`,q3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0355\r
作品名：寿\r
作者：伊藤看寿\r
発表誌：将棋図巧 第100番\r
発表年月：宝暦5年3月\r
手数：611\r
分類：龍追い、持駒変換\r
備考：21件登録\r
解説：通过取子和打入改变持驹组合，解答过程像是在逐步换装机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：桂三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v金 ・ ・ ・v歩 ・ ・ ・v龍|一\r
| ・ ・ ・v香 歩 金 ・ ・ ・|二\r
| ・v銀 ・ ・ ・ ・v歩v歩v歩|三\r
| ・v香 ・ 角 ・ ・ ・ ・ 歩|四\r
| 香 ・ ・v角 ・v玉 歩v香 ・|五\r
| ・ ・ ・vと ・ ・ ・ 龍vと|六\r
| ・ ・ ・vと ・ ・v全 ・ 銀|七\r
| 圭 歩vと ・v金 銀 ・ ・ ・|八\r
| ・v金vと ・ ・ 歩 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４六龍(26)  \r
   2 ５四玉(45)  \r
   3 ５五龍(46)  \r
   4 ６三玉(54)  \r
   5 ５三龍(55)  \r
   6 ７四玉(63)  \r
   7 ７三龍(53)  \r
   8 ８五玉(74)  \r
   9 ７五龍(73)  \r
  10 ９六玉(85)  \r
  11 ９七成桂(98)\r
  12 同　玉(96)  \r
  13 ７七龍(75)  \r
  14 ９六玉(97)  \r
  15 ９七龍(77)  \r
  16 ８五玉(96)  \r
  17 ８六龍(97)  \r
  18 ７四玉(85)  \r
  19 ７五龍(86)  \r
  20 ６三玉(74)  \r
  21 ７三龍(75)  \r
  22 ５四玉(63)  \r
  23 ５三龍(73)  \r
  24 ４五玉(54)  \r
  25 ５五龍(53)  \r
  26 ３六玉(45)  \r
  27 ４六龍(55)  \r
  28 ２七玉(36)  \r
  29 ３七龍(46)  \r
  30 １八玉(27)  \r
  31 １九銀打    \r
  32 同　玉(18)  \r
  33 ３九龍(37)  \r
  34 １八玉(19)  \r
  35 １九龍(39)  \r
  36 ２七玉(18)  \r
  37 ２八龍(19)  \r
  38 ３六玉(27)  \r
  39 ３七龍(28)  \r
  40 ４五玉(36)  \r
  41 ４六龍(37)  \r
  42 ５四玉(45)  \r
  43 ５五龍(46)  \r
  44 ６三玉(54)  \r
  45 ５三龍(55)  \r
  46 ７四玉(63)  \r
  47 ７三龍(53)  \r
  48 ８五玉(74)  \r
  49 ７五龍(73)  \r
  50 ９六玉(85)  \r
  51 ９七歩打    \r
  52 同　玉(96)  \r
  53 ７七龍(75)  \r
  54 ９六玉(97)  \r
  55 ９七龍(77)  \r
  56 ８五玉(96)  \r
  57 ８六龍(97)  \r
  58 ７四玉(85)  \r
  59 ７五龍(86)  \r
  60 ６三玉(74)  \r
  61 ７三龍(75)  \r
  62 ５四玉(63)  \r
  63 ５三龍(73)  \r
  64 ４五玉(54)  \r
  65 ５五龍(53)  \r
  66 ３六玉(45)  \r
  67 ４六龍(55)  \r
  68 ２七玉(36)  \r
  69 １六龍(46)  \r
  70 ３八玉(27)  \r
  71 ３六龍(16)  \r
  72 ３七桂打    \r
  73 同　龍(36)  \r
  74 ２九玉(38)  \r
  75 ３九龍(37)  \r
  76 １八玉(29)  \r
  77 １九龍(39)  \r
  78 ２七玉(18)  \r
  79 ２八龍(19)  \r
  80 ３六玉(27)  \r
  81 ３七龍(28)  \r
  82 ４五玉(36)  \r
  83 ４六龍(37)  \r
  84 ５四玉(45)  \r
  85 ５五龍(46)  \r
  86 ６三玉(54)  \r
  87 ５三龍(55)  \r
  88 ７四玉(63)  \r
  89 ７三龍(53)  \r
  90 ８五玉(74)  \r
  91 ７五龍(73)  \r
  92 ９六玉(85)  \r
  93 ９七歩打    \r
  94 同　玉(96)  \r
  95 ７七龍(75)  \r
  96 ９六玉(97)  \r
  97 ９七龍(77)  \r
  98 ８五玉(96)  \r
  99 ８六龍(97)  \r
 100 ７四玉(85)  \r
 101 ７五龍(86)  \r
 102 ６三玉(74)  \r
 103 ７三龍(75)  \r
 104 ５四玉(63)  \r
 105 ５三龍(73)  \r
 106 ４五玉(54)  \r
 107 ５五龍(53)  \r
 108 ３六玉(45)  \r
 109 ４六龍(55)  \r
 110 ２七玉(36)  \r
 111 １六龍(46)  \r
 112 ３八玉(27)  \r
 113 ３六龍(16)  \r
 114 ３七桂打    \r
 115 同　龍(36)  \r
 116 ２九玉(38)  \r
 117 ３九龍(37)  \r
 118 １八玉(29)  \r
 119 １九龍(39)  \r
 120 ２七玉(18)  \r
 121 ２八龍(19)  \r
 122 ３六玉(27)  \r
 123 ３七龍(28)  \r
 124 ４五玉(36)  \r
 125 ４六龍(37)  \r
 126 ５四玉(45)  \r
 127 ５五龍(46)  \r
 128 ６三玉(54)  \r
 129 ５三龍(55)  \r
 130 ７四玉(63)  \r
 131 ７三龍(53)  \r
 132 ８五玉(74)  \r
 133 ７五龍(73)  \r
 134 ９六玉(85)  \r
 135 ９七歩打    \r
 136 同　玉(96)  \r
 137 ７七龍(75)  \r
 138 ９六玉(97)  \r
 139 ９七龍(77)  \r
 140 ８五玉(96)  \r
 141 ８六龍(97)  \r
 142 ７四玉(85)  \r
 143 ７五龍(86)  \r
 144 ６三玉(74)  \r
 145 ７三龍(75)  \r
 146 ５四玉(63)  \r
 147 ５三龍(73)  \r
 148 ４五玉(54)  \r
 149 ５五龍(53)  \r
 150 ３六玉(45)  \r
 151 ４六龍(55)  \r
 152 ２七玉(36)  \r
 153 １六龍(46)  \r
 154 ３八玉(27)  \r
 155 ３六龍(16)  \r
 156 ３七桂打    \r
 157 同　龍(36)  \r
 158 ２九玉(38)  \r
 159 ３九龍(37)  \r
 160 １八玉(29)  \r
 161 １九龍(39)  \r
 162 ２七玉(18)  \r
 163 ２八龍(19)  \r
 164 ３六玉(27)  \r
 165 ３七龍(28)  \r
 166 ４五玉(36)  \r
 167 ４六龍(37)  \r
 168 ５四玉(45)  \r
 169 ５五龍(46)  \r
 170 ６三玉(54)  \r
 171 ５三龍(55)  \r
 172 ７四玉(63)  \r
 173 ７三龍(53)  \r
 174 ８五玉(74)  \r
 175 ７五龍(73)  \r
 176 ９六玉(85)  \r
 177 ９七歩打    \r
 178 同　玉(96)  \r
 179 ７七龍(75)  \r
 180 ９六玉(97)  \r
 181 ９七龍(77)  \r
 182 ８五玉(96)  \r
 183 ８六龍(97)  \r
 184 ７四玉(85)  \r
 185 ７五龍(86)  \r
 186 ６三玉(74)  \r
 187 ７三龍(75)  \r
 188 ５四玉(63)  \r
 189 ５三龍(73)  \r
 190 ４五玉(54)  \r
 191 ５五龍(53)  \r
 192 ３六玉(45)  \r
 193 ４六龍(55)  \r
 194 ２七玉(36)  \r
 195 １六龍(46)  \r
 196 ３八玉(27)  \r
 197 ３六龍(16)  \r
 198 ３七桂打    \r
 199 同　龍(36)  \r
 200 ２九玉(38)  \r
 201 ３九龍(37)  \r
 202 １八玉(29)  \r
 203 １九龍(39)  \r
 204 ２七玉(18)  \r
 205 ２八龍(19)  \r
 206 ３六玉(27)  \r
 207 ３七龍(28)  \r
 208 ４五玉(36)  \r
 209 ４六龍(37)  \r
 210 ５四玉(45)  \r
 211 ５五龍(46)  \r
 212 ６三玉(54)  \r
 213 ５三龍(55)  \r
 214 ７四玉(63)  \r
 215 ７三龍(53)  \r
 216 ８五玉(74)  \r
 217 ７五龍(73)  \r
 218 ９六玉(85)  \r
 219 ９七歩打    \r
 220 同　玉(96)  \r
 221 ７七龍(75)  \r
 222 ９六玉(97)  \r
 223 ９七龍(77)  \r
 224 ８五玉(96)  \r
 225 ８六龍(97)  \r
 226 ７四玉(85)  \r
 227 ７五龍(86)  \r
 228 ６三玉(74)  \r
 229 ７三龍(75)  \r
 230 ５四玉(63)  \r
 231 ５三龍(73)  \r
 232 ４五玉(54)  \r
 233 ５五龍(53)  \r
 234 ３六玉(45)  \r
 235 ４六龍(55)  \r
 236 ２七玉(36)  \r
 237 １六龍(46)  \r
 238 ３八玉(27)  \r
 239 ３六龍(16)  \r
 240 ３七銀打    \r
 241 同　龍(36)  \r
 242 ２九玉(38)  \r
 243 ３九龍(37)  \r
 244 １八玉(29)  \r
 245 １九龍(39)  \r
 246 ２七玉(18)  \r
 247 ２八龍(19)  \r
 248 ３六玉(27)  \r
 249 ３七龍(28)  \r
 250 ４五玉(36)  \r
 251 ４六龍(37)  \r
 252 ５四玉(45)  \r
 253 ５五龍(46)  \r
 254 ６三玉(54)  \r
 255 ５三龍(55)  \r
 256 ７四玉(63)  \r
 257 ７三龍(53)  \r
 258 ８五玉(74)  \r
 259 ７七桂打    \r
 260 同　と(66)  \r
 261 ７五龍(73)  \r
 262 ９六玉(85)  \r
 263 ９七銀打    \r
 264 同　玉(96)  \r
 265 ７七龍(75)  \r
 266 ９六玉(97)  \r
 267 ９七龍(77)  \r
 268 ８五玉(96)  \r
 269 ８六龍(97)  \r
 270 ７四玉(85)  \r
 271 ７五龍(86)  \r
 272 ６三玉(74)  \r
 273 ７三龍(75)  \r
 274 ５四玉(63)  \r
 275 ５三龍(73)  \r
 276 ４五玉(54)  \r
 277 ５五龍(53)  \r
 278 ３六玉(45)  \r
 279 ４六龍(55)  \r
 280 ２七玉(36)  \r
 281 １六龍(46)  \r
 282 ３八玉(27)  \r
 283 ３六龍(16)  \r
 284 ３七桂打    \r
 285 同　龍(36)  \r
 286 ２九玉(38)  \r
 287 ３九龍(37)  \r
 288 １八玉(29)  \r
 289 １九龍(39)  \r
 290 ２七玉(18)  \r
 291 ２八龍(19)  \r
 292 ３六玉(27)  \r
 293 ３七龍(28)  \r
 294 ４五玉(36)  \r
 295 ４六龍(37)  \r
 296 ５四玉(45)  \r
 297 ５五龍(46)  \r
 298 ６三玉(54)  \r
 299 ５三龍(55)  \r
 300 ７四玉(63)  \r
 301 ７三龍(53)  \r
 302 ８五玉(74)  \r
 303 ７五龍(73)  \r
 304 ９六玉(85)  \r
 305 ９七歩打    \r
 306 同　玉(96)  \r
 307 ７七龍(75)  \r
 308 ９六玉(97)  \r
 309 ９七龍(77)  \r
 310 ８五玉(96)  \r
 311 ８六龍(97)  \r
 312 ７四玉(85)  \r
 313 ７五龍(86)  \r
 314 ６三玉(74)  \r
 315 ７三龍(75)  \r
 316 ５四玉(63)  \r
 317 ５三龍(73)  \r
 318 ４五玉(54)  \r
 319 ５五龍(53)  \r
 320 ３六玉(45)  \r
 321 ４六龍(55)  \r
 322 ２七玉(36)  \r
 323 １六龍(46)  \r
 324 ３八玉(27)  \r
 325 ３六龍(16)  \r
 326 ３七銀打    \r
 327 同　龍(36)  \r
 328 ２九玉(38)  \r
 329 ３九龍(37)  \r
 330 １八玉(29)  \r
 331 １九龍(39)  \r
 332 ２七玉(18)  \r
 333 ２八龍(19)  \r
 334 ３六玉(27)  \r
 335 ３七龍(28)  \r
 336 ４五玉(36)  \r
 337 ４六龍(37)  \r
 338 ５四玉(45)  \r
 339 ５五龍(46)  \r
 340 ６三玉(54)  \r
 341 ５三龍(55)  \r
 342 ７四玉(63)  \r
 343 ７三龍(53)  \r
 344 ８五玉(74)  \r
 345 ７七桂打    \r
 346 同　と(67)  \r
 347 ７五龍(73)  \r
 348 ９六玉(85)  \r
 349 ９七銀打    \r
 350 同　玉(96)  \r
 351 ７七龍(75)  \r
 352 ９六玉(97)  \r
 353 ９七龍(77)  \r
 354 ８五玉(96)  \r
 355 ８六龍(97)  \r
 356 ７四玉(85)  \r
 357 ７五龍(86)  \r
 358 ６三玉(74)  \r
 359 ７三龍(75)  \r
 360 ５四玉(63)  \r
 361 ５三龍(73)  \r
 362 ４五玉(54)  \r
 363 ５五龍(53)  \r
 364 ３六玉(45)  \r
 365 ４六龍(55)  \r
 366 ２七玉(36)  \r
 367 １六龍(46)  \r
 368 ３八玉(27)  \r
 369 ３六龍(16)  \r
 370 ３七桂打    \r
 371 同　龍(36)  \r
 372 ２九玉(38)  \r
 373 ３九龍(37)  \r
 374 １八玉(29)  \r
 375 １九龍(39)  \r
 376 ２七玉(18)  \r
 377 ２八龍(19)  \r
 378 ３六玉(27)  \r
 379 ３七龍(28)  \r
 380 ４五玉(36)  \r
 381 ４六龍(37)  \r
 382 ５四玉(45)  \r
 383 ５五龍(46)  \r
 384 ６三玉(54)  \r
 385 ５三龍(55)  \r
 386 ７四玉(63)  \r
 387 ７三龍(53)  \r
 388 ８五玉(74)  \r
 389 ７五龍(73)  \r
 390 ９六玉(85)  \r
 391 ９七歩打    \r
 392 同　玉(96)  \r
 393 ７七龍(75)  \r
 394 ９六玉(97)  \r
 395 ９七龍(77)  \r
 396 ８五玉(96)  \r
 397 ８六龍(97)  \r
 398 ７四玉(85)  \r
 399 ７五龍(86)  \r
 400 ６三玉(74)  \r
 401 ７三龍(75)  \r
 402 ５四玉(63)  \r
 403 ５三龍(73)  \r
 404 ４五玉(54)  \r
 405 ５五龍(53)  \r
 406 ３六玉(45)  \r
 407 ４六龍(55)  \r
 408 ２七玉(36)  \r
 409 １六龍(46)  \r
 410 ３八玉(27)  \r
 411 ３六龍(16)  \r
 412 ３七銀打    \r
 413 同　龍(36)  \r
 414 ２九玉(38)  \r
 415 ３九龍(37)  \r
 416 １八玉(29)  \r
 417 １九龍(39)  \r
 418 ２七玉(18)  \r
 419 ２八龍(19)  \r
 420 ３六玉(27)  \r
 421 ３七龍(28)  \r
 422 ４五玉(36)  \r
 423 ４六龍(37)  \r
 424 ５四玉(45)  \r
 425 ５五龍(46)  \r
 426 ６三玉(54)  \r
 427 ５三龍(55)  \r
 428 ７四玉(63)  \r
 429 ７三龍(53)  \r
 430 ８五玉(74)  \r
 431 ７七桂打    \r
 432 同　と(78)  \r
 433 ７五龍(73)  \r
 434 ９六玉(85)  \r
 435 ９七銀打    \r
 436 同　玉(96)  \r
 437 ７七龍(75)  \r
 438 ９六玉(97)  \r
 439 ９七龍(77)  \r
 440 ８五玉(96)  \r
 441 ８六龍(97)  \r
 442 ７四玉(85)  \r
 443 ７五龍(86)  \r
 444 ６三玉(74)  \r
 445 ７三龍(75)  \r
 446 ５四玉(63)  \r
 447 ５三龍(73)  \r
 448 ４五玉(54)  \r
 449 ５五龍(53)  \r
 450 ３六玉(45)  \r
 451 ４六龍(55)  \r
 452 ２七玉(36)  \r
 453 １六龍(46)  \r
 454 ３八玉(27)  \r
 455 ３六龍(16)  \r
 456 ３七桂打    \r
 457 同　龍(36)  \r
 458 ２九玉(38)  \r
 459 ３九龍(37)  \r
 460 １八玉(29)  \r
 461 １九龍(39)  \r
 462 ２七玉(18)  \r
 463 ２八龍(19)  \r
 464 ３六玉(27)  \r
 465 ３七龍(28)  \r
 466 ４五玉(36)  \r
 467 ４六龍(37)  \r
 468 ５四玉(45)  \r
 469 ５五龍(46)  \r
 470 ６三玉(54)  \r
 471 ５三龍(55)  \r
 472 ７四玉(63)  \r
 473 ７三龍(53)  \r
 474 ８五玉(74)  \r
 475 ７五龍(73)  \r
 476 ９六玉(85)  \r
 477 ９七歩打    \r
 478 同　玉(96)  \r
 479 ７七龍(75)  \r
 480 ９六玉(97)  \r
 481 ９七龍(77)  \r
 482 ８五玉(96)  \r
 483 ８六龍(97)  \r
 484 ７四玉(85)  \r
 485 ７五龍(86)  \r
 486 ６三玉(74)  \r
 487 ７三龍(75)  \r
 488 ５四玉(63)  \r
 489 ５三龍(73)  \r
 490 ４五玉(54)  \r
 491 ５五龍(53)  \r
 492 ３六玉(45)  \r
 493 ４六龍(55)  \r
 494 ２七玉(36)  \r
 495 １六龍(46)  \r
 496 ３八玉(27)  \r
 497 ３六龍(16)  \r
 498 ３七銀打    \r
 499 同　龍(36)  \r
 500 ２九玉(38)  \r
 501 ３九龍(37)  \r
 502 １八玉(29)  \r
 503 １九龍(39)  \r
 504 ２七玉(18)  \r
 505 ２八龍(19)  \r
 506 ３六玉(27)  \r
 507 ３七龍(28)  \r
 508 ４五玉(36)  \r
 509 ４六龍(37)  \r
 510 ５四玉(45)  \r
 511 ５五龍(46)  \r
 512 ６三玉(54)  \r
 513 ５三龍(55)  \r
 514 ７四玉(63)  \r
 515 ７三龍(53)  \r
 516 ８五玉(74)  \r
 517 ７七桂打    \r
 518 ９六玉(85)  \r
 519 ９七銀打    \r
 520 ９五玉(96)  \r
 521 ７五龍(73)  \r
 522 ９四玉(95)  \r
 523 ８六桂打    \r
 524 同　香(84)  \r
 525 ８五龍(75)  \r
 526 ９三玉(94)  \r
 527 ９五龍(85)  \r
 528 ９四桂打    \r
 529 ８五桂(77)  \r
 530 ９二玉(93)  \r
 531 ９四龍(95)  \r
 532 同　銀(83)  \r
 533 ８四桂打    \r
 534 ８一玉(92)  \r
 535 ９三桂打    \r
 536 ７一玉(81)  \r
 537 ７二桂成(84)\r
 538 同　玉(71)  \r
 539 ７三桂成(85)\r
 540 ６一玉(72)  \r
 541 ５一歩成(52)\r
 542 同　龍(11)  \r
 543 同　金(42)  \r
 544 同　玉(61)  \r
 545 ５二歩打    \r
 546 ４一玉(51)  \r
 547 ５一飛打    \r
 548 ３二玉(41)  \r
 549 ３一飛成(51)\r
 550 ４三玉(32)  \r
 551 ４二龍(31)  \r
 552 ５四玉(43)  \r
 553 ５三龍(42)  \r
 554 ４五玉(54)  \r
 555 ５五龍(53)  \r
 556 ３六玉(45)  \r
 557 ４六龍(55)  \r
 558 ２七玉(36)  \r
 559 １六龍(46)  \r
 560 ３八玉(27)  \r
 561 ３六龍(16)  \r
 562 ３七桂打    \r
 563 同　龍(36)  \r
 564 ２九玉(38)  \r
 565 ３九龍(37)  \r
 566 １八玉(29)  \r
 567 １九龍(39)  \r
 568 ２七玉(18)  \r
 569 ２八龍(19)  \r
 570 ３六玉(27)  \r
 571 ３七龍(28)  \r
 572 ４五玉(36)  \r
 573 ４六龍(37)  \r
 574 ５四玉(45)  \r
 575 ５五龍(46)  \r
 576 ４三玉(54)  \r
 577 ５三龍(55)  \r
 578 ３二玉(43)  \r
 579 ４二龍(53)  \r
 580 ２一玉(32)  \r
 581 ３一龍(42)  \r
 582 １二玉(21)  \r
 583 ２四桂打    \r
 584 同　歩(23)  \r
 585 １三歩成(14)\r
 586 同　玉(12)  \r
 587 １一龍(31)  \r
 588 ２三玉(13)  \r
 589 １五桂打    \r
 590 ３二玉(23)  \r
 591 ３一龍(11)  \r
 592 ４三玉(32)  \r
 593 ４二龍(31)  \r
 594 ５四玉(43)  \r
 595 ５三龍(42)  \r
 596 ４五玉(54)  \r
 597 ５五龍(53)  \r
 598 ３六玉(45)  \r
 599 ４六龍(55)  \r
 600 ２七玉(36)  \r
 601 ３七龍(46)  \r
 602 １八玉(27)  \r
 603 １九歩打    \r
 604 同　玉(18)  \r
 605 ２八銀(17)  \r
 606 １八玉(19)  \r
 607 １七龍(37)  \r
 608 ２九玉(18)  \r
 609 １九龍(17)  \r
 610 ３八玉(29)  \r
 611 ３九龍(19)  \r
 612 詰み        \r
まで611手詰\r
`,Y3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0371\r
作品名：金智恵の輪\r
作者：久留島喜内\r
発表誌：将棋妙案 第69番\r
発表年月：宝暦？\r
手数：73\r
分類：知恵の輪\r
備考：11件登録、『橘仙貼璧 第59番』と同じ\r
解説：属于智力环式构思，局部限制会层层解除；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：歩四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v歩v桂v角 ・ ・v香 飛|一\r
| ・ 歩 ・ ・v銀 ・v歩 ・ ・|二\r
| 銀v桂 ・ と ・ とv銀 ・v歩|三\r
| ・ ・v香 ・ ・ ・ ・ ・ ・|四\r
|v香v歩 ・ 歩 ・v玉 ・ ・ ・|五\r
|v歩 桂 ・v歩vとvとv香 桂 金|六\r
| ・ ・ 歩v龍 ・ ・ ・ ・ ・|七\r
| ・ 金 ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・vと ・ ・v馬 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３四銀打    \r
   2 同　銀(33)  \r
   3 ４四金打    \r
   4 ５五玉(45)  \r
   5 ５四金打    \r
   6 ６五玉(55)  \r
   7 ６四と(63)  \r
   8 ７五玉(65)  \r
   9 ７四と(64)  \r
  10 ６五玉(75)  \r
  11 ６四金(54)  \r
  12 ５五玉(65)  \r
  13 ５四金(44)  \r
  14 ４五玉(55)  \r
  15 ４四と(43)  \r
  16 ３五玉(45)  \r
  17 ３四と(44)  \r
  18 ４五玉(35)  \r
  19 ４四金(54)  \r
  20 ５五玉(45)  \r
  21 ５四金(64)  \r
  22 ６五玉(55)  \r
  23 ６四と(74)  \r
  24 ７五玉(65)  \r
  25 ８四銀(93)  \r
  26 同　角(51)  \r
  27 ７四と(64)  \r
  28 ６五玉(75)  \r
  29 ６四金(54)  \r
  30 ５五玉(65)  \r
  31 ５四金(44)  \r
  32 ４五玉(55)  \r
  33 ４四と(34)  \r
  34 ３五玉(45)  \r
  35 ２四銀打    \r
  36 同　香(21)  \r
  37 ３四と(44)  \r
  38 ４五玉(35)  \r
  39 ４四金(54)  \r
  40 ５五玉(45)  \r
  41 ５四金(64)  \r
  42 ６五玉(55)  \r
  43 ６一飛成(11)\r
  44 同　銀(52)  \r
  45 ６四と(74)  \r
  46 ７五玉(65)  \r
  47 ７六香打    \r
  48 同　龍(67)  \r
  49 ７四と(64)  \r
  50 ６五玉(75)  \r
  51 ６四金(54)  \r
  52 ５五玉(65)  \r
  53 ５四金(44)  \r
  54 ４五玉(55)  \r
  55 ４四と(34)  \r
  56 ３五玉(45)  \r
  57 ２七桂打    \r
  58 同　馬(49)  \r
  59 ３四と(44)  \r
  60 ４五玉(35)  \r
  61 ４四金(54)  \r
  62 ５五玉(45)  \r
  63 ５四金(64)  \r
  64 ６五玉(55)  \r
  65 ６四と(74)  \r
  66 ７五玉(65)  \r
  67 ７六歩(77)  \r
  68 ８六玉(75)  \r
  69 ８七飛打    \r
  70 ７六玉(86)  \r
  71 ７七飛(87)  \r
  72 ８六玉(76)  \r
  73 ８七金(88)  \r
  74 詰み        \r
まで73手詰\r
`,Z3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0376\r
作者：久留島喜内\r
発表誌：橘仙貼璧 第2番\r
発表年月：宝暦？\r
手数：71\r
備考：7件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　金　桂　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v歩 ・v歩 金v歩v龍|一\r
|v香 ・ ・ ・ ・ 銀 ・ ・ ・|二\r
| ・ ・ ・v桂v桂 ・ 銀 ・ ・|三\r
| ・v歩v歩 ・ ・ ・v玉 ・v歩|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| 金 ・ ・ 香 ・ ・ 馬 ・ ・|六\r
|v歩 金 ・v桂 ・ 馬v歩vと ・|七\r
|v香 ・v香 ・vと ・ ・ ・ ・|八\r
| ・v銀 ・ 歩 ・ 銀 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六馬(47)  \r
   2 ４三玉(34)  \r
   3 ２五馬(36)  \r
   4 ５四玉(43)  \r
   5 ５三銀成(42)\r
   6 同　玉(54)  \r
   7 ３五馬(25)  \r
   8 ５二玉(53)  \r
   9 ６四桂打    \r
  10 ５一玉(52)  \r
  11 ４一金(31)  \r
  12 同　玉(51)  \r
  13 ２三馬(56)  \r
  14 ５一玉(41)  \r
  15 ４二銀成(33)\r
  16 同　玉(51)  \r
  17 ４三歩打    \r
  18 同　玉(42)  \r
  19 ３四馬(35)  \r
  20 ５四玉(43)  \r
  21 ３二馬(23)  \r
  22 ５五玉(54)  \r
  23 ６五馬(32)  \r
  24 ４六玉(55)  \r
  25 ５六馬(65)  \r
  26 ３六玉(46)  \r
  27 ４五馬(56)  \r
  28 ４七玉(36)  \r
  29 ２五馬(34)  \r
  30 ５七玉(47)  \r
  31 ５八馬(25)  \r
  32 ６六玉(57)  \r
  33 ６七馬(58)  \r
  34 ７五玉(66)  \r
  35 ７六馬(67)  \r
  36 ６四玉(75)  \r
  37 ５四馬(76)  \r
  38 ７三玉(64)  \r
  39 ６三馬(54)  \r
  40 ８二玉(73)  \r
  41 ７二馬(63)  \r
  42 ９三玉(82)  \r
  43 ８五桂打    \r
  44 同　歩(84)  \r
  45 ９四歩打    \r
  46 ８四玉(93)  \r
  47 ８五金(96)  \r
  48 同　玉(84)  \r
  49 ６七馬(45)  \r
  50 ７五玉(85)  \r
  51 ７六馬(67)  \r
  52 ６四玉(75)  \r
  53 ５四馬(76)  \r
  54 ７五玉(64)  \r
  55 ７六金(87)  \r
  56 ８四玉(75)  \r
  57 ８五歩打    \r
  58 ９五玉(84)  \r
  59 ７三馬(72)  \r
  60 ９六玉(95)  \r
  61 ８八桂打    \r
  62 ８七玉(96)  \r
  63 ８六金(76)  \r
  64 ８八玉(87)  \r
  65 ８七金(86)  \r
  66 ７九玉(88)  \r
  67 ４六馬(73)  \r
  68 ６九玉(79)  \r
  69 ３六馬(54)  \r
  70 ５九玉(69)  \r
  71 ５八馬(36)  \r
  72 詰み        \r
まで71手詰\r
`,X3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0392\r
作品名：銀智恵の輪\r
作者：久留島喜内\r
発表誌：将棋神局図式 第5番\r
発表年月：江戸時代末期\r
手数：59\r
分類：知恵の輪\r
備考：8件登録、『将棋妙案 第68番』『橘仙貼璧 第34番』に酷似\r
解説：属于智力环式构思，局部限制会层层解除；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ 銀 ・ ・ 馬 ・|一\r
|v歩 銀 ・v桂v歩 ・ ・v金 ・|二\r
| ・v玉 ・v歩 ・ ・ ・v香v歩|三\r
| ・ ・v歩 ・ ・v香 ・ ・ ・|四\r
| 金v歩 ・ ・vと ・v桂 ・ 桂|五\r
| ・ ・ ・v金 ・ ・ ・ 角 歩|六\r
| ・ ・vと ・ ・v飛 ・ ・ ・|七\r
| ・ ・ ・ ・vと ・ ・ ・ ・|八\r
| 香 桂 ・ ・ ・ 香 ・ 飛 ・|九\r
+---------------------------+\r
先手の持駒：銀二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８四金(95)  \r
   2 同　玉(83)  \r
   3 ７三銀打    \r
   4 ７五玉(84)  \r
   5 ８四銀打    \r
   6 ８六玉(75)  \r
   7 ９五銀(84)  \r
   8 ７五玉(86)  \r
   9 ８四銀(73)  \r
  10 ６四玉(75)  \r
  11 ７三銀(82)  \r
  12 ５三玉(64)  \r
  13 ６二銀(73)  \r
  14 ６四玉(53)  \r
  15 ７三銀(84)  \r
  16 ７五玉(64)  \r
  17 ８四銀(95)  \r
  18 ８六玉(75)  \r
  19 ７八桂打    \r
  20 同　と(77)  \r
  21 ５九角(26)  \r
  22 同　と(58)  \r
  23 ９五銀(84)  \r
  24 ７五玉(86)  \r
  25 ８四銀(73)  \r
  26 ６四玉(75)  \r
  27 ７三銀(62)  \r
  28 ５三玉(64)  \r
  29 ２三飛成(29)\r
  30 同　金(22)  \r
  31 ６二銀(73)  \r
  32 ６四玉(53)  \r
  33 ７三銀(84)  \r
  34 ７五玉(64)  \r
  35 ８四銀(95)  \r
  36 ８六玉(75)  \r
  37 ８七香打    \r
  38 同　飛成(47)\r
  39 ９五銀(84)  \r
  40 ７五玉(86)  \r
  41 ８四銀(73)  \r
  42 ６四玉(75)  \r
  43 ７三銀(62)  \r
  44 ５三玉(64)  \r
  45 ６二銀(51)  \r
  46 ４二玉(53)  \r
  47 ４四香(49)  \r
  48 ３三玉(42)  \r
  49 ４三馬(21)  \r
  50 ２二玉(33)  \r
  51 ２三桂成(15)\r
  52 同　玉(22)  \r
  53 ３三金打    \r
  54 １二玉(23)  \r
  55 ２一馬(43)  \r
  56 同　玉(12)  \r
  57 ２三香打    \r
  58 １二玉(21)  \r
  59 ２二香成(23)\r
  60 詰み        \r
まで59手詰\r
`,Q3=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0495\r
作者：不明\r
発表誌：詰將棋精選 第46番\r
発表年月：大正5年7月\r
手数：51\r
完全性：駒余り\r
分類：馬鋸\r
備考：8件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系；允许駒余り，詰上り并非单纯追求清空棋盘。
手合割：平手　　\r
後手の持駒：飛二　角　金四　銀二　桂三　香四　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v玉 ・ 角 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
|v銀v歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v歩 ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７二銀打    \r
   2 ９一玉(81)  \r
   3 ９二歩打    \r
   4 同　玉(91)  \r
   5 ８三銀成(72)\r
   6 ８一玉(92)  \r
   7 ７二角成(61)\r
   8 ９一玉(81)  \r
   9 ７三馬(72)  \r
  10 ８一玉(91)  \r
  11 ６三馬(73)  \r
  12 ９一玉(81)  \r
  13 ６四馬(63)  \r
  14 ８一玉(91)  \r
  15 ５四馬(64)  \r
  16 ９一玉(81)  \r
  17 ５五馬(54)  \r
  18 ８一玉(91)  \r
  19 ４五馬(55)  \r
  20 ９一玉(81)  \r
  21 ４六馬(45)  \r
  22 ８一玉(91)  \r
  23 ３六馬(46)  \r
  24 ９一玉(81)  \r
  25 ３七馬(36)  \r
  26 ８一玉(91)  \r
  27 ２七馬(37)  \r
  28 ９一玉(81)  \r
  29 ３七馬(27)  \r
  30 ８一玉(91)  \r
  31 ３六馬(37)  \r
  32 ９一玉(81)  \r
  33 ４六馬(36)  \r
  34 ８一玉(91)  \r
  35 ４五馬(46)  \r
  36 ９一玉(81)  \r
  37 ５五馬(45)  \r
  38 ８一玉(91)  \r
  39 ５四馬(55)  \r
  40 ９一玉(81)  \r
  41 ６四馬(54)  \r
  42 ８一玉(91)  \r
  43 ６三馬(64)  \r
  44 ９一玉(81)  \r
  45 ７三馬(63)  \r
  46 ８一玉(91)  \r
  47 ７二成銀(83)\r
  48 ９二玉(81)  \r
  49 ８四桂打    \r
  50 同　銀(93)  \r
  51 ８二馬(73)  \r
  52 詰み        \r
まで51手詰\r
`,n4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0436\r
作品名：天馬空行\r
作者：酒井桂史\r
発表誌：将棋月報\r
発表年月：1931年8月\r
手数：103\r
備考：9件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀　歩　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ 角 ・ ・v香 ・v歩 ・v金|一\r
| ・ ・ ・ ・v歩 ・ 歩vと と|二\r
| ・ ・ ・ ・ ・v桂 ・ 歩 ・|三\r
|v香 ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・v歩 龍v桂vと 角 ・vと|五\r
|v杏 歩 桂v歩 ・ ・ と ・ ・|六\r
| 金 ・ ・ 金v銀v玉 ・v銀 ・|七\r
| ・ ・ ・ 歩 ・ ・v飛 ・ ・|八\r
| ・vと 香 ・ 金 銀vとvと 歩|九\r
+---------------------------+\r
先手の持駒：桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５六龍(65)  \r
   2 同　と(45)  \r
   3 ５七金(67)  \r
   4 同　と(56)  \r
   5 ３八銀(49)  \r
   6 同　玉(47)  \r
   7 ３七と(36)  \r
   8 同　玉(38)  \r
   9 ４六銀打    \r
  10 ２八玉(37)  \r
  11 １八飛打    \r
  12 同　銀成(27)\r
  13 同　角成(81)\r
  14 ３八玉(28)  \r
  15 ２七銀打    \r
  16 ４七玉(38)  \r
  17 ３六銀(27)  \r
  18 ５六玉(47)  \r
  19 ４五銀(36)  \r
  20 ６五玉(56)  \r
  21 ５四銀(45)  \r
  22 ７四玉(65)  \r
  23 ６三銀(54)  \r
  24 ８三玉(74)  \r
  25 ７二銀(63)  \r
  26 ９二玉(83)  \r
  27 ８四桂(76)  \r
  28 ９三玉(92)  \r
  29 ８五桂打    \r
  30 ８四玉(93)  \r
  31 ６二角成(35)\r
  32 ７四玉(84)  \r
  33 ６三馬(62)  \r
  34 ６五玉(74)  \r
  35 ５四馬(18)  \r
  36 ５六玉(65)  \r
  37 ５七銀(46)  \r
  38 同　玉(56)  \r
  39 ５八歩打    \r
  40 ５六玉(57)  \r
  41 ４五馬(54)  \r
  42 ４七玉(56)  \r
  43 ３六馬(45)  \r
  44 ３八玉(47)  \r
  45 ２七馬(36)  \r
  46 ４七玉(38)  \r
  47 ３六馬(63)  \r
  48 ５六玉(47)  \r
  49 ５七歩(58)  \r
  50 同　玉(56)  \r
  51 ５八金(59)  \r
  52 ５六玉(57)  \r
  53 ４五馬(36)  \r
  54 ６五玉(56)  \r
  55 ５四馬(45)  \r
  56 ７四玉(65)  \r
  57 ６三馬(54)  \r
  58 ６五玉(74)  \r
  59 ５四馬(27)  \r
  60 ５六玉(65)  \r
  61 ４五馬(54)  \r
  62 ６五玉(56)  \r
  63 ５四馬(63)  \r
  64 ７四玉(65)  \r
  65 ５六馬(45)  \r
  66 ８四玉(74)  \r
  67 ８三銀成(72)\r
  68 ９五玉(84)  \r
  69 ９六金(97)  \r
  70 同　玉(95)  \r
  71 ７八馬(56)  \r
  72 ８六玉(96)  \r
  73 ８七馬(54)  \r
  74 ８五玉(86)  \r
  75 ８六香打    \r
  76 ７四玉(85)  \r
  77 ５六馬(78)  \r
  78 ６三玉(74)  \r
  79 ４五馬(56)  \r
  80 ６二玉(63)  \r
  81 ７二成銀(83)\r
  82 ５三玉(62)  \r
  83 ５四馬(45)  \r
  84 ４二玉(53)  \r
  85 ４三馬(54)  \r
  86 ４一玉(42)  \r
  87 ３一歩成(32)\r
  88 同　玉(41)  \r
  89 ２二歩成(23)\r
  90 同　金(11)  \r
  91 ２一馬(43)  \r
  92 ４一玉(31)  \r
  93 ４二歩打    \r
  94 同　玉(41)  \r
  95 ４三馬(87)  \r
  96 ４一玉(42)  \r
  97 ３二馬(21)  \r
  98 同　金(22)  \r
  99 ３三桂打    \r
 100 同　金(32)  \r
 101 ４二歩打    \r
 102 ３一玉(41)  \r
 103 ２一と(12)  \r
 104 詰み        \r
まで103手詰\r
`,r4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0456\r
作者：里見義舜\r
発表誌：将棋月報\r
発表年月：1935年8月\r
手数：105\r
分類：龍追い\r
備考：8件登録\r
解説：以龙追玉为主轴，长距离控制线会连续变化；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角二　金　桂三　歩三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 飛 ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ 銀 ・v歩 ・ 銀 ・ 銀|二\r
|v歩 ・ ・ ・v銀v歩 ・ ・v玉|三\r
|v金 ・ ・v歩v香v香 ・ ・ ・|四\r
| ・ ・ ・ 歩 ・ ・ 歩 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ 歩 ・ ・ 香 ・ ・ 歩 ・|七\r
| ・v飛 ・v杏 ・ ・ ・ ・ ・|八\r
| 歩vと 金 金 ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂　歩五　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２三銀成(12)\r
   2 １四玉(13)  \r
   3 ２四成銀(23)\r
   4 １五玉(14)  \r
   5 １一飛(91)  \r
   6 ２四玉(15)  \r
   7 ２一飛成(11)\r
   8 ３五玉(24)  \r
   9 ２六龍(21)  \r
  10 ３四玉(35)  \r
  11 ３五歩打    \r
  12 ３三玉(34)  \r
  13 ２三龍(26)  \r
  14 ４二玉(33)  \r
  15 ４三龍(23)  \r
  16 ５一玉(42)  \r
  17 ４一龍(43)  \r
  18 ６二玉(51)  \r
  19 ６一龍(41)  \r
  20 ７三玉(62)  \r
  21 ６三龍(61)  \r
  22 ８四玉(73)  \r
  23 ８三龍(63)  \r
  24 ７五玉(84)  \r
  25 ８六龍(83)  \r
  26 ７四玉(75)  \r
  27 ７五歩打    \r
  28 ７三玉(74)  \r
  29 ８三龍(86)  \r
  30 ６二玉(73)  \r
  31 ６三龍(83)  \r
  32 ５一玉(62)  \r
  33 ６一龍(63)  \r
  34 ４二玉(51)  \r
  35 ４一龍(61)  \r
  36 ３三玉(42)  \r
  37 ４三龍(41)  \r
  38 ２四玉(33)  \r
  39 ２三龍(43)  \r
  40 ３五玉(24)  \r
  41 ２六龍(23)  \r
  42 ４五玉(35)  \r
  43 ４六歩打    \r
  44 ３四玉(45)  \r
  45 ３五歩打    \r
  46 ３三玉(34)  \r
  47 ２三龍(26)  \r
  48 ４二玉(33)  \r
  49 ４三龍(23)  \r
  50 ５一玉(42)  \r
  51 ４一龍(43)  \r
  52 ６二玉(51)  \r
  53 ６一龍(41)  \r
  54 ７三玉(62)  \r
  55 ６三龍(61)  \r
  56 ８四玉(73)  \r
  57 ８三龍(63)  \r
  58 ７五玉(84)  \r
  59 ８六龍(83)  \r
  60 ６五玉(75)  \r
  61 ７七桂打    \r
  62 ７四玉(65)  \r
  63 ７五歩打    \r
  64 ７三玉(74)  \r
  65 ８三龍(86)  \r
  66 ６二玉(73)  \r
  67 ６三龍(83)  \r
  68 ５一玉(62)  \r
  69 ６一龍(63)  \r
  70 ４二玉(51)  \r
  71 ４一龍(61)  \r
  72 ３三玉(42)  \r
  73 ４三龍(41)  \r
  74 ２四玉(33)  \r
  75 ２三龍(43)  \r
  76 ３五玉(24)  \r
  77 ２六龍(23)  \r
  78 ３四玉(35)  \r
  79 ３五歩打    \r
  80 ３三玉(34)  \r
  81 ２三龍(26)  \r
  82 ４二玉(33)  \r
  83 ４三龍(23)  \r
  84 ５一玉(42)  \r
  85 ４一龍(43)  \r
  86 ６二玉(51)  \r
  87 ６一龍(41)  \r
  88 ７三玉(62)  \r
  89 ６三龍(61)  \r
  90 ８四玉(73)  \r
  91 ７四龍(63)  \r
  92 ９五玉(84)  \r
  93 ９四龍(74)  \r
  94 同　歩(93)  \r
  95 ８五金打    \r
  96 ９六玉(95)  \r
  97 ８六金(85)  \r
  98 ９七玉(96)  \r
  99 ８八金(79)  \r
 100 同　玉(97)  \r
 101 ９八飛打    \r
 102 ７七玉(88)  \r
 103 ６八金(69)  \r
 104 ６六玉(77)  \r
 105 ６七香打    \r
 106 詰み        \r
まで105手詰\r
`,i4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0477\r
作者：佐藤千万喜（山本浩）\r
発表誌：将棋月報\r
発表年月：1942年11月\r
手数：95\r
備考：7件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：歩五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v銀 ・ ・ ・ ・ 銀 ・ ・v玉|一\r
| 歩 ・ ・ ・ 歩v銀 ・v金v香|二\r
| ・v香v桂v香 ・v歩 ・v歩 ・|三\r
| ・ ・ 歩 ・ ・ 馬 歩 ・ ・|四\r
|v歩 ・ ・v桂v飛 ・ ・ ・ ・|五\r
| ・ ・v歩 歩v歩 ・ ・ ・v歩|六\r
| ・ ・ ・ 金v銀 ・ ・ 歩 桂|七\r
| ・ ・ ・ ・ ・ 角vと 龍 香|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金二　桂　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２一金打    \r
   2 同　玉(11)  \r
   3 ３二金打    \r
   4 同　金(22)  \r
   5 同　銀成(41)\r
   6 同　玉(21)  \r
   7 ３三金打    \r
   8 ４一玉(32)  \r
   9 ４二金(33)  \r
  10 同　玉(41)  \r
  11 ３三歩成(34)\r
  12 ４一玉(42)  \r
  13 ５三桂打    \r
  14 ５二玉(41)  \r
  15 ４三と(33)  \r
  16 ６二玉(52)  \r
  17 ６一桂成(53)\r
  18 同　玉(62)  \r
  19 ６二銀打    \r
  20 ７二玉(61)  \r
  21 ７三歩成(74)\r
  22 ８一玉(72)  \r
  23 ９一歩成(92)\r
  24 同　玉(81)  \r
  25 ８二と(73)  \r
  26 同　玉(91)  \r
  27 ５五馬(44)  \r
  28 ９三玉(82)  \r
  29 ８二馬(55)  \r
  30 同　玉(93)  \r
  31 ３七角(48)  \r
  32 ９三玉(82)  \r
  33 ８二角成(37)\r
  34 同　玉(93)  \r
  35 ７三銀打    \r
  36 ９三玉(82)  \r
  37 ８五桂打    \r
  38 ９四玉(93)  \r
  39 ９三飛打    \r
  40 ８五玉(94)  \r
  41 ８三飛成(93)\r
  42 ９六玉(85)  \r
  43 ９七歩打    \r
  44 同　玉(96)  \r
  45 ９九香打    \r
  46 ９八角打    \r
  47 同　香(99)  \r
  48 同　玉(97)  \r
  49 ３八龍(28)  \r
  50 ５八角打    \r
  51 同　龍(38)  \r
  52 同　銀成(57)\r
  53 ８九角打    \r
  54 ９九玉(98)  \r
  55 ８八角打    \r
  56 ８九玉(99)  \r
  57 ７七角(88)  \r
  58 ７九玉(89)  \r
  59 ８八龍(83)  \r
  60 ６九玉(79)  \r
  61 ６八金(67)  \r
  62 ５九玉(69)  \r
  63 ５八金(68)  \r
  64 ４九玉(59)  \r
  65 ５九金(58)  \r
  66 ３九玉(49)  \r
  67 ４八龍(88)  \r
  68 ２九玉(39)  \r
  69 ３八銀打    \r
  70 １九玉(29)  \r
  71 ３九龍(48)  \r
  72 １八玉(19)  \r
  73 ２九銀(38)  \r
  74 ２七玉(18)  \r
  75 ２八銀(29)  \r
  76 ２六玉(27)  \r
  77 ３七龍(39)  \r
  78 １五玉(26)  \r
  79 ３五龍(37)  \r
  80 １四玉(15)  \r
  81 １五歩打    \r
  82 １三玉(14)  \r
  83 ２五桂(17)  \r
  84 ２二玉(13)  \r
  85 ６五歩(66)  \r
  86 ７七歩成(76)\r
  87 １四桂打    \r
  88 同　香(12)  \r
  89 １三桂成(25)\r
  90 同　玉(22)  \r
  91 １四歩(15)  \r
  92 ２二玉(13)  \r
  93 ３二龍(35)  \r
  94 １一玉(22)  \r
  95 １二香打    \r
  96 詰み        \r
まで95手詰\r
`,e4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0480\r
作者：岡田秋葭\r
発表誌：将棋月報\r
発表年月：1943年4月\r
手数：57\r
分類：四桂詰\r
備考：8件登録\r
解説：四桂詰把桂马的跳跃控制集中起来，局面辨识度很高；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　桂　香　歩五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ 角 ・ ・v金 銀 ・ ・|一\r
|v歩 龍 ・ ・ ・ ・v歩 ・ 銀|二\r
| ・ ・ ・ ・ 飛 銀 ・v香 歩|三\r
| ・ ・ ・ ・ ・ ・v金 ・ 香|四\r
| 角 ・ ・ とv歩v歩 歩 とv歩|五\r
| ・ ・v歩 歩 ・ ・ ・ ・v香|六\r
|v玉 ・ ・ ・ ・ ・ ・v歩 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・vと ・ 銀 ・ ・ 金 ・ ・|九\r
+---------------------------+\r
先手の持駒：桂三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８六角(95)  \r
   2 ８八玉(97)  \r
   3 ９七角(86)  \r
   4 同　玉(88)  \r
   5 ９三飛成(53)\r
   6 同　歩(92)  \r
   7 ５三角成(71)\r
   8 ９八玉(97)  \r
   9 ９三龍(82)  \r
  10 ８八玉(98)  \r
  11 ９七馬(53)  \r
  12 ７七玉(88)  \r
  13 ７八歩打    \r
  14 ６七玉(77)  \r
  15 ５九桂打    \r
  16 ５七玉(67)  \r
  17 ７九馬(97)  \r
  18 同　と(89)  \r
  19 ９七龍(93)  \r
  20 ７七桂打    \r
  21 同　龍(97)  \r
  22 同　歩成(76)\r
  23 ４九桂打    \r
  24 ４六玉(57)  \r
  25 ３八桂打    \r
  26 ３六玉(46)  \r
  27 ４八桂打    \r
  28 ２五玉(36)  \r
  29 ３七桂(49)  \r
  30 ３五玉(25)  \r
  31 ４七桂(59)  \r
  32 ２四玉(35)  \r
  33 ３六桂(48)  \r
  34 １四玉(24)  \r
  35 ２三銀(12)  \r
  36 同　玉(14)  \r
  37 ３四銀成(43)\r
  38 同　玉(23)  \r
  39 ４四金打    \r
  40 ２三玉(34)  \r
  41 ３五桂(47)  \r
  42 １三玉(23)  \r
  43 １四香打    \r
  44 同　玉(13)  \r
  45 ２六桂(38)  \r
  46 １三玉(14)  \r
  47 ２五桂(37)  \r
  48 １二玉(13)  \r
  49 ２四桂(36)  \r
  50 ２一玉(12)  \r
  51 ２二銀成(31)\r
  52 同　玉(21)  \r
  53 ３四桂(26)  \r
  54 ２一玉(22)  \r
  55 １三桂(25)  \r
  56 ３一玉(21)  \r
  57 ２三桂(35)  \r
  58 詰み        \r
まで57手詰\r
`,v4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0484\r
作者：岡田秋葭\r
発表誌：将棋月報\r
発表年月：1943年7月\r
手数：105\r
分類：金鋸\r
備考：8件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　銀　桂　歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 角 ・ ・ ・ ・ 杏v飛 ・ ・|一\r
| 馬v歩 ・ ・ ・ ・ ・ ・ 銀|二\r
| ・ 金 ・ ・ ・v歩 ・ ・v金|三\r
| ・ ・ ・ ・ ・ ・v歩v歩 ・|四\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|五\r
| 香 ・ ・v歩 ・ ・ 銀 ・ ・|六\r
| ・ ・ ・ ・v桂 ・ ・ ・v香|七\r
| ・ ・ ・ ・ ・ 銀 金 金 ・|八\r
| 桂 ・v杏 ・ ・ ・ 歩 歩v玉|九\r
+---------------------------+\r
先手の持駒：歩五　\r
先手：\r
後手：\r
手数----指手--\r
   1 １八金(28)  \r
   2 同　玉(19)  \r
   3 １九歩打    \r
   4 ２九玉(18)  \r
   5 ２八金(38)  \r
   6 １九玉(29)  \r
   7 ２九金(28)  \r
   8 同　玉(19)  \r
   9 ８二金(83)  \r
  10 １八玉(29)  \r
  11 １九歩打    \r
  12 同　玉(18)  \r
  13 ８三金(82)  \r
  14 ２九玉(19)  \r
  15 ７三金(83)  \r
  16 １八玉(29)  \r
  17 １九歩打    \r
  18 同　玉(18)  \r
  19 ７四金(73)  \r
  20 ２九玉(19)  \r
  21 ６四金(74)  \r
  22 １八玉(29)  \r
  23 １九歩打    \r
  24 同　玉(18)  \r
  25 ６五金(64)  \r
  26 ２九玉(19)  \r
  27 ５五金(65)  \r
  28 １八玉(29)  \r
  29 １九歩打    \r
  30 同　玉(18)  \r
  31 ５六金(55)  \r
  32 ２九玉(19)  \r
  33 ５七金(56)  \r
  34 １八玉(29)  \r
  35 ２七銀(36)  \r
  36 同　玉(18)  \r
  37 ３七角成(91)\r
  38 １六玉(27)  \r
  39 ３八馬(92)  \r
  40 ２五玉(16)  \r
  41 ４七馬(38)  \r
  42 ３五玉(25)  \r
  43 ４六馬(47)  \r
  44 ４四玉(35)  \r
  45 ５五馬(46)  \r
  46 ５三玉(44)  \r
  47 ６四馬(55)  \r
  48 ５二玉(53)  \r
  49 ４二成香(41)\r
  50 ６一玉(52)  \r
  51 ５三桂打    \r
  52 ７一玉(61)  \r
  53 ８二馬(64)  \r
  54 ６二玉(71)  \r
  55 ７三馬(82)  \r
  56 ５三玉(62)  \r
  57 ６四馬(37)  \r
  58 ４四玉(53)  \r
  59 ６二馬(73)  \r
  60 ３三玉(44)  \r
  61 ４三成香(42)\r
  62 同　玉(33)  \r
  63 ５三馬(62)  \r
  64 ３三玉(43)  \r
  65 ５五馬(64)  \r
  66 ３二玉(33)  \r
  67 ５四馬(55)  \r
  68 ４一玉(32)  \r
  69 ３一馬(53)  \r
  70 同　玉(41)  \r
  71 ２一銀成(12)\r
  72 ４一玉(31)  \r
  73 ３一飛打    \r
  74 ５二玉(41)  \r
  75 ５三歩打    \r
  76 ６二玉(52)  \r
  77 ３二飛成(31)\r
  78 ７三玉(62)  \r
  79 ７二龍(32)  \r
  80 ８四玉(73)  \r
  81 ８五歩打    \r
  82 同　玉(84)  \r
  83 ６三馬(54)  \r
  84 ８六玉(85)  \r
  85 ８三龍(72)  \r
  86 ７六玉(86)  \r
  87 ８五龍(83)  \r
  88 ７七玉(76)  \r
  89 ８七龍(85)  \r
  90 ６八玉(77)  \r
  91 ５八金(57)  \r
  92 同　玉(68)  \r
  93 ５七龍(87)  \r
  94 ６九玉(58)  \r
  95 ３六馬(63)  \r
  96 ７八玉(69)  \r
  97 ８七龍(57)  \r
  98 ６八玉(78)  \r
  99 ５九銀(48)  \r
 100 同　玉(68)  \r
 101 ５七龍(87)  \r
 102 ４九玉(59)  \r
 103 ２七馬(36)  \r
 104 ３九玉(49)  \r
 105 ５九龍(57)  \r
 106 詰み        \r
まで105手詰\r
`,t4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0516\r
作者：宮越宗太郎\r
発表誌：将棋世界\r
発表年月：1950年3月\r
手数：79\r
分類：龍鋸、馬鋸\r
備考：8件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金二　銀二　香　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v金 ・v香 ・v玉 ・v歩|一\r
| ・v歩 ・ ・ 銀 ・ ・v歩 ・|二\r
| 飛v香 ・ ・ 歩 ・ ・ 歩v銀|三\r
| ・ ・ ・ ・ 香 ・ ・ 金 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ 桂 ・|五\r
| ・ ・ ・ 桂v歩 ・ ・v圭 ・|六\r
|v歩 ・ ・ 桂 龍 ・ ・ ・ 角|七\r
| ・ ・ ・ ・ ・ ・ ・vと ・|八\r
| ・ ・ ・ ・ ・vと ・ ・ 馬|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ４一銀成(52)\r
   2 同　玉(31)  \r
   3 ４六龍(57)  \r
   4 ３一玉(41)  \r
   5 ３五龍(46)  \r
   6 ４一玉(31)  \r
   7 ４四龍(35)  \r
   8 ３一玉(41)  \r
   9 ３三龍(44)  \r
  10 ４一玉(31)  \r
  11 ５二歩成(53)\r
  12 同　香(51)  \r
  13 同　香成(54)\r
  14 同　玉(41)  \r
  15 ５四香打    \r
  16 ４一玉(52)  \r
  17 ４三龍(33)  \r
  18 ３一玉(41)  \r
  19 ３四龍(43)  \r
  20 ４一玉(31)  \r
  21 ４五龍(34)  \r
  22 ３一玉(41)  \r
  23 ３六龍(45)  \r
  24 ４一玉(31)  \r
  25 ４七龍(36)  \r
  26 ３一玉(41)  \r
  27 ３八龍(47)  \r
  28 同　と(28)  \r
  29 ６四馬(19)  \r
  30 ４一玉(31)  \r
  31 ７四馬(64)  \r
  32 ３一玉(41)  \r
  33 ７五馬(74)  \r
  34 ４一玉(31)  \r
  35 ８五馬(75)  \r
  36 ３一玉(41)  \r
  37 ８六馬(85)  \r
  38 同　香(83)  \r
  39 ３三飛成(93)\r
  40 ４一玉(31)  \r
  41 ４三龍(33)  \r
  42 ３一玉(41)  \r
  43 ３四龍(43)  \r
  44 ４一玉(31)  \r
  45 ４五龍(34)  \r
  46 ３一玉(41)  \r
  47 ３六龍(45)  \r
  48 同　成桂(26)\r
  49 ５三角成(17)\r
  50 ４一玉(31)  \r
  51 ６三馬(53)  \r
  52 ３一玉(41)  \r
  53 ６四馬(63)  \r
  54 ４一玉(31)  \r
  55 ７四馬(64)  \r
  56 ３一玉(41)  \r
  57 ７五馬(74)  \r
  58 ４二歩打    \r
  59 同　馬(75)  \r
  60 同　玉(31)  \r
  61 ３三桂成(25)\r
  62 ４一玉(42)  \r
  63 ４二歩打    \r
  64 ３一玉(41)  \r
  65 ２二歩成(23)\r
  66 同　銀(13)  \r
  67 同　成桂(33)\r
  68 同　玉(31)  \r
  69 ２三歩打    \r
  70 ３一玉(22)  \r
  71 ２二銀打    \r
  72 ４二玉(31)  \r
  73 ３三金(24)  \r
  74 ４一玉(42)  \r
  75 ３一銀成(22)\r
  76 同　玉(41)  \r
  77 ２二歩成(23)\r
  78 ４一玉(31)  \r
  79 ３二と(22)  \r
  80 詰み        \r
まで79手詰\r
`,o4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0179\r
作品名：槍襖\r
作者：北村研一（牛追菩薩）\r
発表誌：詰将棋パラダイス(旧)\r
発表年月：1950年9月\r
手数：75\r
受賞：看寿賞\r
備考：15件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v桂 とv金 ・ ・ ・v馬|一\r
| と と ・ ・ ・ ・ とv歩v銀|二\r
| と ・ ・ ・ ・ ・ ・v金v歩|三\r
|v銀 ・v龍 ・ 角 ・ ・ ・ 龍|四\r
| ・v歩v玉 ・ 銀 ・ ・ ・ 桂|五\r
|v歩 ・ ・v金 ・ 銀 ・ ・ と|六\r
|v桂 ・ ・ ・v桂 ・v歩 ・ ・|七\r
| ・ ・ 歩 歩 歩 歩 ・vと ・|八\r
| 金vと 香 香 香 香 ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ６六銀(55)  \r
   2 ８六玉(75)  \r
   3 ８七金打    \r
   4 ９五玉(86)  \r
   5 ９四と(93)  \r
   6 同　龍(74)  \r
   7 ９六金(87)  \r
   8 同　玉(95)  \r
   9 ８七角(54)  \r
  10 同　玉(96)  \r
  11 ９八銀打    \r
  12 ７六玉(87)  \r
  13 ７七歩(78)  \r
  14 ６六玉(76)  \r
  15 ６七歩(68)  \r
  16 ５六玉(66)  \r
  17 ５七歩(58)  \r
  18 ４六玉(56)  \r
  19 ４七歩(48)  \r
  20 ３五玉(46)  \r
  21 ３六歩打    \r
  22 ４五玉(35)  \r
  23 ４六歩(47)  \r
  24 ５五玉(45)  \r
  25 ５六歩(57)  \r
  26 ６五玉(55)  \r
  27 ６六歩(67)  \r
  28 ７五玉(65)  \r
  29 ７六歩(77)  \r
  30 ８六玉(75)  \r
  31 ８七歩打    \r
  32 ９五玉(86)  \r
  33 ９四龍(14)  \r
  34 同　玉(95)  \r
  35 ９三飛打    \r
  36 ８四玉(94)  \r
  37 ９六桂打    \r
  38 ７四玉(84)  \r
  39 ７五歩(76)  \r
  40 ６四玉(74)  \r
  41 ６五歩(66)  \r
  42 ５四玉(64)  \r
  43 ５五歩(56)  \r
  44 ４四玉(54)  \r
  45 ４五歩(46)  \r
  46 ３四玉(44)  \r
  47 ２三飛成(93)\r
  48 同　歩(22)  \r
  49 ３五歩(36)  \r
  50 ４三玉(34)  \r
  51 ４四歩(45)  \r
  52 同　馬(11)  \r
  53 ３三金打    \r
  54 ５三玉(43)  \r
  55 ５四歩(55)  \r
  56 同　馬(44)  \r
  57 ４三金(33)  \r
  58 ６三玉(53)  \r
  59 ６四歩(65)  \r
  60 同　馬(54)  \r
  61 ５三金(43)  \r
  62 ７三玉(63)  \r
  63 ７四歩(75)  \r
  64 同　馬(64)  \r
  65 ６三金(53)  \r
  66 同　桂(71)  \r
  67 ７四香(79)  \r
  68 同　玉(73)  \r
  69 ８三角打    \r
  70 ７三玉(74)  \r
  71 ７二角成(83)\r
  72 ７四玉(73)  \r
  73 ８三馬(72)  \r
  74 ７五玉(74)  \r
  75 ６五馬(83)  \r
  76 詰み        \r
まで75手詰\r
`,s4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0183\r
作品名：死と乙女\r
作者：山田修司\r
発表誌：詰将棋パラダイス(旧)\r
発表年月：1951年10月\r
手数：71\r
備考：9件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　香二　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v金v金 と と ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・v金 ・|二\r
| ・ 銀v玉 ・ ・ ・ ・ ・v香|三\r
|v銀 ・ ・ ・ ・ とv歩v金 ・|四\r
| ・ ・ ・ ・ ・ ・v桂 ・ ・|五\r
| ・ 桂 ・ ・ ・ ・ ・ 銀 桂|六\r
| ・ ・ ・ ・ ・ ・ ・ 桂 ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７四銀成(83)\r
   2 ８二玉(73)  \r
   3 ８一と(71)  \r
   4 同　玉(82)  \r
   5 ７一と(61)  \r
   6 同　玉(81)  \r
   7 ７三香打    \r
   8 ６一玉(71)  \r
   9 ７二香成(73)\r
  10 ５一玉(61)  \r
  11 ６二成香(72)\r
  12 ４一玉(51)  \r
  13 ５二成香(62)\r
  14 ３一玉(41)  \r
  15 ４二成香(52)\r
  16 同　玉(31)  \r
  17 ４三銀打    \r
  18 ３一玉(42)  \r
  19 ３二金打    \r
  20 同　金(22)  \r
  21 同　銀成(43)\r
  22 同　玉(31)  \r
  23 ２四桂(16)  \r
  24 ４一玉(32)  \r
  25 ３二桂成(24)\r
  26 ５一玉(41)  \r
  27 ４二成桂(32)\r
  28 ６一玉(51)  \r
  29 ５二成桂(42)\r
  30 ７一玉(61)  \r
  31 ６二成桂(52)\r
  32 ８一玉(71)  \r
  33 ７二成桂(62)\r
  34 同　玉(81)  \r
  35 ７三金打    \r
  36 ８一玉(72)  \r
  37 ８二金打    \r
  38 同　金(91)  \r
  39 同　金(73)  \r
  40 同　玉(81)  \r
  41 ９四桂(86)  \r
  42 ７一玉(82)  \r
  43 ８二桂成(94)\r
  44 ６一玉(71)  \r
  45 ７二成桂(82)\r
  46 ５一玉(61)  \r
  47 ６二成桂(72)\r
  48 ４一玉(51)  \r
  49 ５二成桂(62)\r
  50 ３一玉(41)  \r
  51 ４二成桂(52)\r
  52 ２一玉(31)  \r
  53 ３二成桂(42)\r
  54 同　玉(21)  \r
  55 ３三銀打    \r
  56 ２三玉(32)  \r
  57 ３五桂(27)  \r
  58 同　歩(34)  \r
  59 ３四金打    \r
  60 １二玉(23)  \r
  61 ２四桂打    \r
  62 １一玉(12)  \r
  63 ２二銀成(33)\r
  64 同　玉(11)  \r
  65 ３三と(44)  \r
  66 １一玉(22)  \r
  67 １二桂成(24)\r
  68 同　玉(11)  \r
  69 ２三金(34)  \r
  70 １一玉(12)  \r
  71 ２二金(23)  \r
  72 詰み        \r
まで71手詰\r
`,a4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0489\r
作者：植田尚宏\r
発表誌：王将(新)\r
発表年月：1954年8月\r
手数：111\r
分類：煙詰\r
受賞：塚田賞\r
備考：10件登録\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v香 と 銀vと と|一\r
|v馬 ・ と 香 角 歩v銀 ・ ・|二\r
| ・ 歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v玉 ・ と ・ ・ ・ ・ ・ ・|四\r
|v金 桂 ・ と ・ ・v金 桂vと|五\r
| ・v香vと とv圭 ・ ・v銀 と|六\r
| と ・ ・ 飛 と 桂 ・ と と|七\r
| 金v金 ・vと ・ ・ ・v香 ・|八\r
| 龍vと ・ ・ 銀 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８四と(74)  \r
   2 同　玉(94)  \r
   3 ７五と(66)  \r
   4 同　と(76)  \r
   5 同　と(65)  \r
   6 同　玉(84)  \r
   7 ７六歩打    \r
   8 同　玉(75)  \r
   9 ８六と(97)  \r
  10 同　金(95)  \r
  11 ７七香打    \r
  12 同　金(86)  \r
  13 同　飛(67)  \r
  14 同　玉(76)  \r
  15 ８八金(98)  \r
  16 同　と(89)  \r
  17 ６八銀(59)  \r
  18 同　玉(77)  \r
  19 ８八龍(99)  \r
  20 ５七玉(68)  \r
  21 ４八金打    \r
  22 ４六玉(57)  \r
  23 ３六金打    \r
  24 同　金(35)  \r
  25 同　と(27)  \r
  26 同　玉(46)  \r
  27 ２六と(16)  \r
  28 同　と(15)  \r
  29 同　と(17)  \r
  30 同　玉(36)  \r
  31 ３七銀打    \r
  32 １五玉(26)  \r
  33 １六歩打    \r
  34 同　玉(15)  \r
  35 ２六金打    \r
  36 １七玉(16)  \r
  37 ２七金(26)  \r
  38 同　玉(17)  \r
  39 ３八金(48)  \r
  40 １六玉(27)  \r
  41 ２七金(38)  \r
  42 １五玉(16)  \r
  43 ２六銀(37)  \r
  44 １四玉(15)  \r
  45 １五歩打    \r
  46 ２三玉(14)  \r
  47 ２四歩打    \r
  48 同　玉(23)  \r
  49 ３五銀(26)  \r
  50 １五玉(24)  \r
  51 ２六金(27)  \r
  52 １四玉(15)  \r
  53 １三桂成(25)\r
  54 同　玉(14)  \r
  55 ２四銀(35)  \r
  56 同　玉(13)  \r
  57 ２五金(26)  \r
  58 １三玉(24)  \r
  59 ２四金(25)  \r
  60 同　玉(13)  \r
  61 ２八龍(88)  \r
  62 ３三玉(24)  \r
  63 ３七龍(28)  \r
  64 ４四玉(33)  \r
  65 ３四龍(37)  \r
  66 ５三玉(44)  \r
  67 ５五香打    \r
  68 同　成桂(56)\r
  69 ６三角成(52)\r
  70 同　玉(53)  \r
  71 ５五桂(47)  \r
  72 ７二玉(63)  \r
  73 ７四龍(34)  \r
  74 ８一玉(72)  \r
  75 ９三桂打    \r
  76 同　馬(92)  \r
  77 同　桂(85)  \r
  78 ９二玉(81)  \r
  79 ８二歩成(83)\r
  80 同　玉(92)  \r
  81 ７一角打    \r
  82 ９一玉(82)  \r
  83 ８一桂成(93)\r
  84 同　玉(91)  \r
  85 ８三龍(74)  \r
  86 ７一玉(81)  \r
  87 ６一香成(62)\r
  88 同　玉(71)  \r
  89 ５一と(41)  \r
  90 同　玉(61)  \r
  91 ５三香打    \r
  92 ６一玉(51)  \r
  93 ５二香成(53)\r
  94 同　玉(61)  \r
  95 ６三龍(83)  \r
  96 ５一玉(52)  \r
  97 ４三桂(55)  \r
  98 同　銀(32)  \r
  99 ４一歩成(42)\r
 100 同　玉(51)  \r
 101 ４三龍(63)  \r
 102 ３一玉(41)  \r
 103 ２一と(11)  \r
 104 同　玉(31)  \r
 105 ３二銀打    \r
 106 １一玉(21)  \r
 107 １二歩打    \r
 108 同　玉(11)  \r
 109 ２三龍(43)  \r
 110 １一玉(12)  \r
 111 ２一龍(23)  \r
 112 詰み        \r
まで111手詰\r
`,u4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0199\r
作品名：新扇詰\r
作者：奥薗幸雄\r
発表誌：近代将棋\r
発表年月：1955年1月\r
手数：873\r
分類：龍追い、持駒変換\r
備考：20件登録\r
解説：通过取子和打入改变持驹组合，解答过程像是在逐步换装机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v桂 ・ と ・ ・v歩 ・v歩v歩|一\r
| ・ 歩 ・ ・v桂 ・ ・ ・v香|二\r
| と ・ ・ ・v金vと ・ ・ 歩|三\r
|v歩 香v歩v桂 ・v飛v歩 ・ 角|四\r
| ・v歩vと ・v香 ・ ・ ・ ・|五\r
| ・ ・ 龍 金 ・ ・ ・ ・ 銀|六\r
| ・ ・ ・v香v玉 ・ ・v桂v全|七\r
| 銀v金 角vと ・v全 ・vと ・|八\r
| ・vと 金 ・ ・ 歩vと ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６七金(66)  \r
   2 同　と(68)  \r
   3 ５九香打    \r
   4 ５八と(67)  \r
   5 同　香(59)  \r
   6 同　成銀(48)\r
   7 ６七龍(76)  \r
   8 ４六玉(57)  \r
   9 ４七龍(67)  \r
  10 ３五玉(46)  \r
  11 ３六龍(47)  \r
  12 ２四玉(35)  \r
  13 ２五龍(36)  \r
  14 ３三玉(24)  \r
  15 ２三龍(25)  \r
  16 ４二玉(33)  \r
  17 ３二龍(23)  \r
  18 ５一玉(42)  \r
  19 ４一龍(32)  \r
  20 ６二玉(51)  \r
  21 ６一龍(41)  \r
  22 ７三玉(62)  \r
  23 ８三香成(84)\r
  24 同　桂(91)  \r
  25 ７二龍(61)  \r
  26 ８四玉(73)  \r
  27 ８三龍(72)  \r
  28 ９五玉(84)  \r
  29 ９四龍(83)  \r
  30 ８六玉(95)  \r
  31 ９七龍(94)  \r
  32 ７六玉(86)  \r
  33 ６七龍(97)  \r
  34 ８六玉(76)  \r
  35 ８七龍(67)  \r
  36 ９五玉(86)  \r
  37 ９六龍(87)  \r
  38 ８四玉(95)  \r
  39 ９四龍(96)  \r
  40 ７三玉(84)  \r
  41 ８三龍(94)  \r
  42 ６二玉(73)  \r
  43 ７二龍(83)  \r
  44 ５一玉(62)  \r
  45 ６一龍(72)  \r
  46 ４二玉(51)  \r
  47 ４一龍(61)  \r
  48 ３三玉(42)  \r
  49 ３二龍(41)  \r
  50 ２四玉(33)  \r
  51 ２三龍(32)  \r
  52 ３五玉(24)  \r
  53 ２五龍(23)  \r
  54 ４六玉(35)  \r
  55 ３六龍(25)  \r
  56 ５七玉(46)  \r
  57 ６九桂打    \r
  58 同　成銀(58)\r
  59 ５八歩打    \r
  60 同　玉(57)  \r
  61 ３八龍(36)  \r
  62 ５七玉(58)  \r
  63 ５八龍(38)  \r
  64 ４六玉(57)  \r
  65 ４七龍(58)  \r
  66 ３五玉(46)  \r
  67 ３六龍(47)  \r
  68 ２四玉(35)  \r
  69 ２五龍(36)  \r
  70 ３三玉(24)  \r
  71 ２三龍(25)  \r
  72 ４二玉(33)  \r
  73 ３二龍(23)  \r
  74 ５一玉(42)  \r
  75 ２一龍(32)  \r
  76 ６二玉(51)  \r
  77 ６一龍(21)  \r
  78 ７三玉(62)  \r
  79 ７二龍(61)  \r
  80 ８四玉(73)  \r
  81 ８三龍(72)  \r
  82 ９五玉(84)  \r
  83 ９四龍(83)  \r
  84 ８六玉(95)  \r
  85 ９七龍(94)  \r
  86 ７六玉(86)  \r
  87 ６七龍(97)  \r
  88 ８六玉(76)  \r
  89 ８七龍(67)  \r
  90 ９五玉(86)  \r
  91 ９六龍(87)  \r
  92 ８四玉(95)  \r
  93 ９四龍(96)  \r
  94 ７三玉(84)  \r
  95 ８三龍(94)  \r
  96 ６二玉(73)  \r
  97 ７二龍(83)  \r
  98 ５一玉(62)  \r
  99 ６一龍(72)  \r
 100 ４二玉(51)  \r
 101 ４一龍(61)  \r
 102 ３三玉(42)  \r
 103 ３二龍(41)  \r
 104 ２四玉(33)  \r
 105 ２三龍(32)  \r
 106 ３五玉(24)  \r
 107 ２五龍(23)  \r
 108 ４六玉(35)  \r
 109 ３六龍(25)  \r
 110 ５七玉(46)  \r
 111 ５八歩打    \r
 112 同　玉(57)  \r
 113 ３八龍(36)  \r
 114 ５七玉(58)  \r
 115 ５八龍(38)  \r
 116 ４六玉(57)  \r
 117 ４七龍(58)  \r
 118 ３五玉(46)  \r
 119 ３六龍(47)  \r
 120 ２四玉(35)  \r
 121 ２五龍(36)  \r
 122 ３三玉(24)  \r
 123 ２三龍(25)  \r
 124 ４二玉(33)  \r
 125 ２二龍(23)  \r
 126 ５一玉(42)  \r
 127 １一龍(22)  \r
 128 ６二玉(51)  \r
 129 ６一龍(11)  \r
 130 ７三玉(62)  \r
 131 ７二龍(61)  \r
 132 ８四玉(73)  \r
 133 ８三龍(72)  \r
 134 ９五玉(84)  \r
 135 ９四龍(83)  \r
 136 ８六玉(95)  \r
 137 ９七龍(94)  \r
 138 ７六玉(86)  \r
 139 ６七龍(97)  \r
 140 ８六玉(76)  \r
 141 ８七龍(67)  \r
 142 ９五玉(86)  \r
 143 ９六龍(87)  \r
 144 ８四玉(95)  \r
 145 ９四龍(96)  \r
 146 ７三玉(84)  \r
 147 ８三龍(94)  \r
 148 ６二玉(73)  \r
 149 ７二龍(83)  \r
 150 ５一玉(62)  \r
 151 ６一龍(72)  \r
 152 ４二玉(51)  \r
 153 ４一龍(61)  \r
 154 ３三玉(42)  \r
 155 ３二龍(41)  \r
 156 ２四玉(33)  \r
 157 ２三龍(32)  \r
 158 ３五玉(24)  \r
 159 ２五龍(23)  \r
 160 ４六玉(35)  \r
 161 ３六龍(25)  \r
 162 ５七玉(46)  \r
 163 ５八歩打    \r
 164 同　玉(57)  \r
 165 ３八龍(36)  \r
 166 ５七玉(58)  \r
 167 ５八龍(38)  \r
 168 ４六玉(57)  \r
 169 ４七龍(58)  \r
 170 ３五玉(46)  \r
 171 ３六龍(47)  \r
 172 ２四玉(35)  \r
 173 ２五龍(36)  \r
 174 ３三玉(24)  \r
 175 ２三龍(25)  \r
 176 ４二玉(33)  \r
 177 １二龍(23)  \r
 178 ５一玉(42)  \r
 179 ２一龍(12)  \r
 180 ６二玉(51)  \r
 181 ６一龍(21)  \r
 182 ７三玉(62)  \r
 183 ７二龍(61)  \r
 184 ８四玉(73)  \r
 185 ８三龍(72)  \r
 186 ９五玉(84)  \r
 187 ９四龍(83)  \r
 188 ８六玉(95)  \r
 189 ９七龍(94)  \r
 190 ７六玉(86)  \r
 191 ６七龍(97)  \r
 192 ８六玉(76)  \r
 193 ８七龍(67)  \r
 194 ９五玉(86)  \r
 195 ９六龍(87)  \r
 196 ８四玉(95)  \r
 197 ９四龍(96)  \r
 198 ７三玉(84)  \r
 199 ８三龍(94)  \r
 200 ６二玉(73)  \r
 201 ７二龍(83)  \r
 202 ５一玉(62)  \r
 203 ６一龍(72)  \r
 204 ４二玉(51)  \r
 205 ４一龍(61)  \r
 206 ３三玉(42)  \r
 207 ３二龍(41)  \r
 208 ２四玉(33)  \r
 209 ２三龍(32)  \r
 210 ３五玉(24)  \r
 211 ２五龍(23)  \r
 212 ４六玉(35)  \r
 213 ２六龍(25)  \r
 214 ３六香打    \r
 215 同　龍(26)  \r
 216 ５七玉(46)  \r
 217 ５八歩打    \r
 218 同　玉(57)  \r
 219 ３八龍(36)  \r
 220 ５七玉(58)  \r
 221 ５八龍(38)  \r
 222 ４六玉(57)  \r
 223 ４七龍(58)  \r
 224 ３五玉(46)  \r
 225 ３六龍(47)  \r
 226 ２四玉(35)  \r
 227 ２五龍(36)  \r
 228 ３三玉(24)  \r
 229 ２三龍(25)  \r
 230 ４二玉(33)  \r
 231 ３二龍(23)  \r
 232 ５一玉(42)  \r
 233 ４一龍(32)  \r
 234 ６二玉(51)  \r
 235 ６一龍(41)  \r
 236 ７三玉(62)  \r
 237 ７二龍(61)  \r
 238 ８四玉(73)  \r
 239 ８三龍(72)  \r
 240 ９五玉(84)  \r
 241 ９四龍(83)  \r
 242 ８六玉(95)  \r
 243 ９七龍(94)  \r
 244 ７六玉(86)  \r
 245 ６七龍(97)  \r
 246 ８六玉(76)  \r
 247 ８七龍(67)  \r
 248 ９五玉(86)  \r
 249 ９六龍(87)  \r
 250 ８四玉(95)  \r
 251 ９四龍(96)  \r
 252 ７三玉(84)  \r
 253 ８三龍(94)  \r
 254 ６二玉(73)  \r
 255 ７二龍(83)  \r
 256 ５一玉(62)  \r
 257 ６一龍(72)  \r
 258 ４二玉(51)  \r
 259 ４一龍(61)  \r
 260 ３三玉(42)  \r
 261 ３二龍(41)  \r
 262 ２四玉(33)  \r
 263 ２三龍(32)  \r
 264 ３五玉(24)  \r
 265 ２五龍(23)  \r
 266 ４六玉(35)  \r
 267 ２六龍(25)  \r
 268 ３六香打    \r
 269 同　龍(26)  \r
 270 ５七玉(46)  \r
 271 ５八歩打    \r
 272 同　玉(57)  \r
 273 ３八龍(36)  \r
 274 ５七玉(58)  \r
 275 ５八龍(38)  \r
 276 ４六玉(57)  \r
 277 ４七龍(58)  \r
 278 ３五玉(46)  \r
 279 ３六龍(47)  \r
 280 ２四玉(35)  \r
 281 ２五龍(36)  \r
 282 ３三玉(24)  \r
 283 ２三龍(25)  \r
 284 ４二玉(33)  \r
 285 ３二龍(23)  \r
 286 ５一玉(42)  \r
 287 ４一龍(32)  \r
 288 ６二玉(51)  \r
 289 ６一龍(41)  \r
 290 ７三玉(62)  \r
 291 ７二龍(61)  \r
 292 ８四玉(73)  \r
 293 ８三龍(72)  \r
 294 ９五玉(84)  \r
 295 ９四龍(83)  \r
 296 ８六玉(95)  \r
 297 ９七龍(94)  \r
 298 ７六玉(86)  \r
 299 ６七龍(97)  \r
 300 ８六玉(76)  \r
 301 ８七龍(67)  \r
 302 ９五玉(86)  \r
 303 ９六龍(87)  \r
 304 ８四玉(95)  \r
 305 ９四龍(96)  \r
 306 ７三玉(84)  \r
 307 ８三龍(94)  \r
 308 ６二玉(73)  \r
 309 ７二龍(83)  \r
 310 ５一玉(62)  \r
 311 ６一龍(72)  \r
 312 ４二玉(51)  \r
 313 ４一龍(61)  \r
 314 ３三玉(42)  \r
 315 ３二龍(41)  \r
 316 ２四玉(33)  \r
 317 ２三龍(32)  \r
 318 ３五玉(24)  \r
 319 ２五龍(23)  \r
 320 ４六玉(35)  \r
 321 ２六龍(25)  \r
 322 ３六桂打    \r
 323 同　龍(26)  \r
 324 ５七玉(46)  \r
 325 ５八香打    \r
 326 同　玉(57)  \r
 327 ３八龍(36)  \r
 328 ５七玉(58)  \r
 329 ５八龍(38)  \r
 330 ４六玉(57)  \r
 331 ４七龍(58)  \r
 332 ３五玉(46)  \r
 333 ３六龍(47)  \r
 334 ２四玉(35)  \r
 335 ２五龍(36)  \r
 336 ３三玉(24)  \r
 337 ２三龍(25)  \r
 338 ４二玉(33)  \r
 339 ３二龍(23)  \r
 340 ５一玉(42)  \r
 341 ４一龍(32)  \r
 342 ６二玉(51)  \r
 343 ６一龍(41)  \r
 344 ７三玉(62)  \r
 345 ７二龍(61)  \r
 346 ８四玉(73)  \r
 347 ８三龍(72)  \r
 348 ９五玉(84)  \r
 349 ９四龍(83)  \r
 350 ８六玉(95)  \r
 351 ９七龍(94)  \r
 352 ７六玉(86)  \r
 353 ６七龍(97)  \r
 354 ８六玉(76)  \r
 355 ８七龍(67)  \r
 356 ９五玉(86)  \r
 357 ９六龍(87)  \r
 358 ８四玉(95)  \r
 359 ９四龍(96)  \r
 360 ７三玉(84)  \r
 361 ８三龍(94)  \r
 362 ６二玉(73)  \r
 363 ７二龍(83)  \r
 364 ５一玉(62)  \r
 365 ６一龍(72)  \r
 366 ４二玉(51)  \r
 367 ４一龍(61)  \r
 368 ３三玉(42)  \r
 369 ３二龍(41)  \r
 370 ２四玉(33)  \r
 371 ２三龍(32)  \r
 372 ３五玉(24)  \r
 373 ２五龍(23)  \r
 374 ４六玉(35)  \r
 375 ３八桂打    \r
 376 同　と(39)  \r
 377 ２六龍(25)  \r
 378 ３六香打    \r
 379 同　龍(26)  \r
 380 ５七玉(46)  \r
 381 ５八香打    \r
 382 同　玉(57)  \r
 383 ３八龍(36)  \r
 384 ５七玉(58)  \r
 385 ５八龍(38)  \r
 386 ４六玉(57)  \r
 387 ４七龍(58)  \r
 388 ３五玉(46)  \r
 389 ３六龍(47)  \r
 390 ２四玉(35)  \r
 391 ２五龍(36)  \r
 392 ３三玉(24)  \r
 393 ２三龍(25)  \r
 394 ４二玉(33)  \r
 395 ３二龍(23)  \r
 396 ５一玉(42)  \r
 397 ４一龍(32)  \r
 398 ６二玉(51)  \r
 399 ６一龍(41)  \r
 400 ７三玉(62)  \r
 401 ７二龍(61)  \r
 402 ８四玉(73)  \r
 403 ８三龍(72)  \r
 404 ９五玉(84)  \r
 405 ９四龍(83)  \r
 406 ８六玉(95)  \r
 407 ９七龍(94)  \r
 408 ７六玉(86)  \r
 409 ６七龍(97)  \r
 410 ８六玉(76)  \r
 411 ８七龍(67)  \r
 412 ９五玉(86)  \r
 413 ９六龍(87)  \r
 414 ８四玉(95)  \r
 415 ９四龍(96)  \r
 416 ７三玉(84)  \r
 417 ８三龍(94)  \r
 418 ６二玉(73)  \r
 419 ７二龍(83)  \r
 420 ５一玉(62)  \r
 421 ６一龍(72)  \r
 422 ４二玉(51)  \r
 423 ４一龍(61)  \r
 424 ３三玉(42)  \r
 425 ３二龍(41)  \r
 426 ２四玉(33)  \r
 427 ２三龍(32)  \r
 428 ３五玉(24)  \r
 429 ２五龍(23)  \r
 430 ４六玉(35)  \r
 431 ２六龍(25)  \r
 432 ３六香打    \r
 433 同　龍(26)  \r
 434 ５七玉(46)  \r
 435 ５八歩打    \r
 436 同　玉(57)  \r
 437 ３八龍(36)  \r
 438 ５七玉(58)  \r
 439 ５八龍(38)  \r
 440 ４六玉(57)  \r
 441 ４七龍(58)  \r
 442 ３五玉(46)  \r
 443 ３六龍(47)  \r
 444 ２四玉(35)  \r
 445 ２五龍(36)  \r
 446 ３三玉(24)  \r
 447 ２三龍(25)  \r
 448 ４二玉(33)  \r
 449 ３二龍(23)  \r
 450 ５一玉(42)  \r
 451 ４一龍(32)  \r
 452 ６二玉(51)  \r
 453 ６一龍(41)  \r
 454 ７三玉(62)  \r
 455 ７二龍(61)  \r
 456 ８四玉(73)  \r
 457 ８三龍(72)  \r
 458 ９五玉(84)  \r
 459 ９四龍(83)  \r
 460 ８六玉(95)  \r
 461 ９七龍(94)  \r
 462 ７六玉(86)  \r
 463 ６七龍(97)  \r
 464 ８六玉(76)  \r
 465 ８七龍(67)  \r
 466 ９五玉(86)  \r
 467 ９六龍(87)  \r
 468 ８四玉(95)  \r
 469 ９四龍(96)  \r
 470 ７三玉(84)  \r
 471 ８三龍(94)  \r
 472 ６二玉(73)  \r
 473 ７二龍(83)  \r
 474 ５一玉(62)  \r
 475 ６一龍(72)  \r
 476 ４二玉(51)  \r
 477 ４一龍(61)  \r
 478 ３三玉(42)  \r
 479 ３二龍(41)  \r
 480 ２四玉(33)  \r
 481 ２三龍(32)  \r
 482 ３五玉(24)  \r
 483 ２五龍(23)  \r
 484 ４六玉(35)  \r
 485 ２六龍(25)  \r
 486 ３六桂打    \r
 487 同　龍(26)  \r
 488 ５七玉(46)  \r
 489 ５八香打    \r
 490 同　玉(57)  \r
 491 ３八龍(36)  \r
 492 ５七玉(58)  \r
 493 ５八龍(38)  \r
 494 ４六玉(57)  \r
 495 ４七龍(58)  \r
 496 ３五玉(46)  \r
 497 ３六龍(47)  \r
 498 ２四玉(35)  \r
 499 ２五龍(36)  \r
 500 ３三玉(24)  \r
 501 ２三龍(25)  \r
 502 ４二玉(33)  \r
 503 ３二龍(23)  \r
 504 ５一玉(42)  \r
 505 ４一龍(32)  \r
 506 ６二玉(51)  \r
 507 ６一龍(41)  \r
 508 ７三玉(62)  \r
 509 ７二龍(61)  \r
 510 ８四玉(73)  \r
 511 ８三龍(72)  \r
 512 ９五玉(84)  \r
 513 ９四龍(83)  \r
 514 ８六玉(95)  \r
 515 ９七龍(94)  \r
 516 ７六玉(86)  \r
 517 ６七龍(97)  \r
 518 ８六玉(76)  \r
 519 ８七龍(67)  \r
 520 ９五玉(86)  \r
 521 ９六龍(87)  \r
 522 ８四玉(95)  \r
 523 ９四龍(96)  \r
 524 ７三玉(84)  \r
 525 ８三龍(94)  \r
 526 ６二玉(73)  \r
 527 ７二龍(83)  \r
 528 ５一玉(62)  \r
 529 ６一龍(72)  \r
 530 ４二玉(51)  \r
 531 ４一龍(61)  \r
 532 ３三玉(42)  \r
 533 ３二龍(41)  \r
 534 ２四玉(33)  \r
 535 ２三龍(32)  \r
 536 ３五玉(24)  \r
 537 ２五龍(23)  \r
 538 ４六玉(35)  \r
 539 ３八桂打    \r
 540 同　と(28)  \r
 541 ２六龍(25)  \r
 542 ３六香打    \r
 543 同　龍(26)  \r
 544 ５七玉(46)  \r
 545 ５八香打    \r
 546 同　玉(57)  \r
 547 ３八龍(36)  \r
 548 ５七玉(58)  \r
 549 ５八龍(38)  \r
 550 ４六玉(57)  \r
 551 ４七龍(58)  \r
 552 ３五玉(46)  \r
 553 ３六龍(47)  \r
 554 ２四玉(35)  \r
 555 ２五龍(36)  \r
 556 ３三玉(24)  \r
 557 ２三龍(25)  \r
 558 ４二玉(33)  \r
 559 ３二龍(23)  \r
 560 ５一玉(42)  \r
 561 ４一龍(32)  \r
 562 ６二玉(51)  \r
 563 ６一龍(41)  \r
 564 ７三玉(62)  \r
 565 ７二龍(61)  \r
 566 ８四玉(73)  \r
 567 ８三龍(72)  \r
 568 ９五玉(84)  \r
 569 ９四龍(83)  \r
 570 ８六玉(95)  \r
 571 ９七龍(94)  \r
 572 ７六玉(86)  \r
 573 ６七龍(97)  \r
 574 ８六玉(76)  \r
 575 ８七龍(67)  \r
 576 ９五玉(86)  \r
 577 ９六龍(87)  \r
 578 ８四玉(95)  \r
 579 ９四龍(96)  \r
 580 ７三玉(84)  \r
 581 ８三龍(94)  \r
 582 ６二玉(73)  \r
 583 ７二龍(83)  \r
 584 ５一玉(62)  \r
 585 ６一龍(72)  \r
 586 ４二玉(51)  \r
 587 ４一龍(61)  \r
 588 ３三玉(42)  \r
 589 ３二龍(41)  \r
 590 ２四玉(33)  \r
 591 ２三龍(32)  \r
 592 ３五玉(24)  \r
 593 ２五龍(23)  \r
 594 ４六玉(35)  \r
 595 ２六龍(25)  \r
 596 ３六香打    \r
 597 同　龍(26)  \r
 598 ５七玉(46)  \r
 599 ５八歩打    \r
 600 同　玉(57)  \r
 601 ３八龍(36)  \r
 602 ５七玉(58)  \r
 603 ５八龍(38)  \r
 604 ４六玉(57)  \r
 605 ４七龍(58)  \r
 606 ３五玉(46)  \r
 607 ３六龍(47)  \r
 608 ２四玉(35)  \r
 609 ２五龍(36)  \r
 610 ３三玉(24)  \r
 611 ２三龍(25)  \r
 612 ４二玉(33)  \r
 613 ３二龍(23)  \r
 614 ５一玉(42)  \r
 615 ４一龍(32)  \r
 616 ６二玉(51)  \r
 617 ６一龍(41)  \r
 618 ７三玉(62)  \r
 619 ７二龍(61)  \r
 620 ８四玉(73)  \r
 621 ８三龍(72)  \r
 622 ９五玉(84)  \r
 623 ９四龍(83)  \r
 624 ８六玉(95)  \r
 625 ９七龍(94)  \r
 626 ７六玉(86)  \r
 627 ６七龍(97)  \r
 628 ８六玉(76)  \r
 629 ８七龍(67)  \r
 630 ９五玉(86)  \r
 631 ９六龍(87)  \r
 632 ８四玉(95)  \r
 633 ９四龍(96)  \r
 634 ７三玉(84)  \r
 635 ８三龍(94)  \r
 636 ６二玉(73)  \r
 637 ７二龍(83)  \r
 638 ５一玉(62)  \r
 639 ６一龍(72)  \r
 640 ４二玉(51)  \r
 641 ４一龍(61)  \r
 642 ３三玉(42)  \r
 643 ３二龍(41)  \r
 644 ２四玉(33)  \r
 645 ２三龍(32)  \r
 646 ３五玉(24)  \r
 647 ２五龍(23)  \r
 648 ４六玉(35)  \r
 649 ２六龍(25)  \r
 650 ３六桂打    \r
 651 同　龍(26)  \r
 652 ５七玉(46)  \r
 653 ５八香打    \r
 654 同　玉(57)  \r
 655 ３八龍(36)  \r
 656 ５七玉(58)  \r
 657 ５八龍(38)  \r
 658 ４六玉(57)  \r
 659 ４七龍(58)  \r
 660 ３五玉(46)  \r
 661 ３六龍(47)  \r
 662 ２四玉(35)  \r
 663 ２五龍(36)  \r
 664 ３三玉(24)  \r
 665 ２三龍(25)  \r
 666 ４二玉(33)  \r
 667 ３二龍(23)  \r
 668 ５一玉(42)  \r
 669 ４一龍(32)  \r
 670 ６二玉(51)  \r
 671 ６一龍(41)  \r
 672 ７三玉(62)  \r
 673 ７二龍(61)  \r
 674 ８四玉(73)  \r
 675 ８三龍(72)  \r
 676 ９五玉(84)  \r
 677 ９四龍(83)  \r
 678 ８六玉(95)  \r
 679 ９七龍(94)  \r
 680 ７六玉(86)  \r
 681 ６七龍(97)  \r
 682 ８六玉(76)  \r
 683 ８七龍(67)  \r
 684 ９五玉(86)  \r
 685 ９六龍(87)  \r
 686 ８四玉(95)  \r
 687 ９四龍(96)  \r
 688 ７三玉(84)  \r
 689 ８三龍(94)  \r
 690 ６二玉(73)  \r
 691 ７二龍(83)  \r
 692 ５一玉(62)  \r
 693 ６一龍(72)  \r
 694 ４二玉(51)  \r
 695 ４一龍(61)  \r
 696 ３三玉(42)  \r
 697 ３二龍(41)  \r
 698 ２四玉(33)  \r
 699 ２三龍(32)  \r
 700 ３五玉(24)  \r
 701 ３九香打    \r
 702 同　桂成(27)\r
 703 ２七桂打    \r
 704 同　成銀(17)\r
 705 ２五龍(23)  \r
 706 ４六玉(35)  \r
 707 ３六龍(25)  \r
 708 ５七玉(46)  \r
 709 ５八香打    \r
 710 同　玉(57)  \r
 711 ３八龍(36)  \r
 712 ５七玉(58)  \r
 713 ５八龍(38)  \r
 714 ４六玉(57)  \r
 715 ４七龍(58)  \r
 716 ３五玉(46)  \r
 717 ３六龍(47)  \r
 718 ２四玉(35)  \r
 719 ２七龍(36)  \r
 720 ３三玉(24)  \r
 721 ２三龍(27)  \r
 722 ４二玉(33)  \r
 723 ３二龍(23)  \r
 724 ５一玉(42)  \r
 725 ４一龍(32)  \r
 726 ６二玉(51)  \r
 727 ６一龍(41)  \r
 728 ７三玉(62)  \r
 729 ７二龍(61)  \r
 730 ８四玉(73)  \r
 731 ８三龍(72)  \r
 732 ９五玉(84)  \r
 733 ９四龍(83)  \r
 734 ８六玉(95)  \r
 735 ９七龍(94)  \r
 736 ７六玉(86)  \r
 737 ６七龍(97)  \r
 738 ８六玉(76)  \r
 739 ８七龍(67)  \r
 740 ９五玉(86)  \r
 741 ９六龍(87)  \r
 742 ８四玉(95)  \r
 743 ９四龍(96)  \r
 744 ７三玉(84)  \r
 745 ８三龍(94)  \r
 746 ６二玉(73)  \r
 747 ７二龍(83)  \r
 748 ５一玉(62)  \r
 749 ６一龍(72)  \r
 750 ４二玉(51)  \r
 751 ４一龍(61)  \r
 752 ３三玉(42)  \r
 753 ３二龍(41)  \r
 754 ２四玉(33)  \r
 755 ２三龍(32)  \r
 756 ３五玉(24)  \r
 757 ２五龍(23)  \r
 758 ４六玉(35)  \r
 759 ２六龍(25)  \r
 760 ３六桂打    \r
 761 同　龍(26)  \r
 762 ５七玉(46)  \r
 763 ５八銀打    \r
 764 同　玉(57)  \r
 765 ３八龍(36)  \r
 766 ５七玉(58)  \r
 767 ５八龍(38)  \r
 768 ４六玉(57)  \r
 769 ４八龍(58)  \r
 770 ４七歩打    \r
 771 同　龍(48)  \r
 772 ３五玉(46)  \r
 773 ３六龍(47)  \r
 774 ２四玉(35)  \r
 775 ２五龍(36)  \r
 776 ３三玉(24)  \r
 777 ２三龍(25)  \r
 778 ４二玉(33)  \r
 779 ３二龍(23)  \r
 780 ５一玉(42)  \r
 781 ４一龍(32)  \r
 782 ６二玉(51)  \r
 783 ６一龍(41)  \r
 784 ７三玉(62)  \r
 785 ７二龍(61)  \r
 786 ８四玉(73)  \r
 787 ８三龍(72)  \r
 788 ９五玉(84)  \r
 789 ９四龍(83)  \r
 790 ８六玉(95)  \r
 791 ９七龍(94)  \r
 792 ７六玉(86)  \r
 793 ６七龍(97)  \r
 794 ８六玉(76)  \r
 795 ８七龍(67)  \r
 796 ９五玉(86)  \r
 797 ９六龍(87)  \r
 798 ８四玉(95)  \r
 799 ９四龍(96)  \r
 800 ７三玉(84)  \r
 801 ８三龍(94)  \r
 802 ６二玉(73)  \r
 803 ７二龍(83)  \r
 804 ５一玉(62)  \r
 805 ６一龍(72)  \r
 806 ４二玉(51)  \r
 807 ４一龍(61)  \r
 808 ３三玉(42)  \r
 809 ３二龍(41)  \r
 810 ２四玉(33)  \r
 811 ２三龍(32)  \r
 812 ３五玉(24)  \r
 813 ２五龍(23)  \r
 814 ４六玉(35)  \r
 815 ３八桂打    \r
 816 同　成桂(39)\r
 817 ３六龍(25)  \r
 818 ５七玉(46)  \r
 819 ５八歩打    \r
 820 同　玉(57)  \r
 821 ３八龍(36)  \r
 822 ５七玉(58)  \r
 823 ５八龍(38)  \r
 824 ４六玉(57)  \r
 825 ４七龍(58)  \r
 826 ３五玉(46)  \r
 827 ３六龍(47)  \r
 828 ２四玉(35)  \r
 829 ２五龍(36)  \r
 830 ３三玉(24)  \r
 831 ２三龍(25)  \r
 832 ４二玉(33)  \r
 833 ３二龍(23)  \r
 834 ５一玉(42)  \r
 835 ４一龍(32)  \r
 836 ６二玉(51)  \r
 837 ６一龍(41)  \r
 838 ７三玉(62)  \r
 839 ７二龍(61)  \r
 840 ８四玉(73)  \r
 841 ８三龍(72)  \r
 842 ９五玉(84)  \r
 843 ９四龍(83)  \r
 844 ８六玉(95)  \r
 845 ９七龍(94)  \r
 846 ７六玉(86)  \r
 847 ６七龍(97)  \r
 848 ８六玉(76)  \r
 849 ８七龍(67)  \r
 850 ９五玉(86)  \r
 851 ９六龍(87)  \r
 852 ８四玉(95)  \r
 853 ９四龍(96)  \r
 854 ７三玉(84)  \r
 855 ８三龍(94)  \r
 856 ６二玉(73)  \r
 857 ７二龍(83)  \r
 858 ５一玉(62)  \r
 859 ６一龍(72)  \r
 860 ４二玉(51)  \r
 861 ４一龍(61)  \r
 862 ３三玉(42)  \r
 863 ３二龍(41)  \r
 864 ２四玉(33)  \r
 865 ２三龍(32)  \r
 866 ３五玉(24)  \r
 867 ２五龍(23)  \r
 868 ４六玉(35)  \r
 869 ３八桂打    \r
 870 ５七玉(46)  \r
 871 ５五龍(25)  \r
 872 ５六歩打    \r
 873 ５八香打    \r
 874 詰み        \r
まで873手詰\r
`,_4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0048\r
作者：門脇芳雄\r
発表誌：詰将棋パラダイス\r
発表年月：1956年1月\r
手数：53\r
備考：8件登録\r
解説：初形棋子密集，适合观察复杂防守资源如何被逐步清理；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ 銀v銀 とv香 ・|一\r
| ・ ・vと ・v歩 ・ ・v玉 ・|二\r
| ・ ・ とv金v桂v歩 ・ ・vと|三\r
| と 銀 香v香 歩 ・ 歩 と 角|四\r
|vと ・ ・ ・v金 と と ・vと|五\r
|v圭 ・ ・v金 ・vと 桂 歩 ・|六\r
| 金 歩v香 ・ 角 ・ ・ ・ ・|七\r
| ・ 飛 桂 ・ ・ 銀 ・ 龍 ・|八\r
| ・ ・ ・vと ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三歩成(34)\r
   2 １一玉(22)  \r
   3 ２一と(31)  \r
   4 同　玉(11)  \r
   5 ２二と(33)  \r
   6 同　玉(21)  \r
   7 １三と(24)  \r
   8 同　玉(22)  \r
   9 ２四と(35)  \r
  10 ２二玉(13)  \r
  11 ２三と(24)  \r
  12 ３一玉(22)  \r
  13 ２二と(23)  \r
  14 同　玉(31)  \r
  15 ２四香打    \r
  16 ３一玉(22)  \r
  17 ４一角成(14)\r
  18 同　玉(31)  \r
  19 ４二銀打    \r
  20 ３二玉(41)  \r
  21 ４四桂(36)  \r
  22 同　歩(43)  \r
  23 ３七龍(28)  \r
  24 同　と(46)  \r
  25 ３三歩打    \r
  26 ４三玉(32)  \r
  27 ５三歩成(54)\r
  28 同　歩(52)  \r
  29 ３五桂打    \r
  30 ５二玉(43)  \r
  31 ６三と(73)  \r
  32 同　玉(52)  \r
  33 ７三香成(74)\r
  34 同　と(72)  \r
  35 ６二金打    \r
  36 ７四玉(63)  \r
  37 ６六桂(78)  \r
  38 ８五玉(74)  \r
  39 ９六金(97)  \r
  40 同　と(95)  \r
  41 ８六歩(87)  \r
  42 同　と(96)  \r
  43 ９五と(94)  \r
  44 ７六玉(85)  \r
  45 ７五金打    \r
  46 ６七玉(76)  \r
  47 ５九桂打    \r
  48 同　と(69)  \r
  49 ６八飛(88)  \r
  50 ５六玉(67)  \r
  51 ５五と(45)  \r
  52 同　玉(56)  \r
  53 ４六金打    \r
  54 詰み        \r
まで53手詰\r
`,l4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0202\r
作品名：落花\r
作者：黒川一郎\r
発表誌：近代将棋\r
発表年月：1959年1月\r
手数：99\r
分類：煙詰\r
備考：11件登録、「風ぐるま」1954年3月の改良図\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・v全 ・|一\r
| ・ ・ ・vとv全v全v全 ・vと|二\r
| ・v歩 歩 ・ ・ ・ ・v歩vと|三\r
|v玉 歩vと ・ 歩 歩 歩 歩vと|四\r
| ・ 桂 と と 桂 ・ ・ とv杏|五\r
|v杏 と と ・ ・v馬 ・ 桂 ・|六\r
| 桂v金 ・ ・ ・ ・ ・ ・ ・|七\r
| 金v金 龍 ・ ・ ・ ・ 香 ・|八\r
| ・ ・ 香 ・ 馬 金 飛 ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ９五と(86)  \r
   2 同　成香(96)\r
   3 同　馬(59)  \r
   4 同　玉(94)  \r
   5 ９六香打    \r
   6 同　玉(95)  \r
   7 ８七金(98)  \r
   8 同　金(88)  \r
   9 ８六金打    \r
  10 同　金(87)  \r
  11 同　と(76)  \r
  12 同　玉(96)  \r
  13 ７六龍(78)  \r
  14 ９五玉(86)  \r
  15 ９四金打    \r
  16 同　玉(95)  \r
  17 ９三桂成(85)\r
  18 同　玉(94)  \r
  19 ８三歩成(84)\r
  20 同　玉(93)  \r
  21 ７四と(65)  \r
  22 ９二玉(83)  \r
  23 ８三と(74)  \r
  24 同　玉(92)  \r
  25 ８四と(75)  \r
  26 同　玉(83)  \r
  27 ７四龍(76)  \r
  28 ９三玉(84)  \r
  29 ８五桂(97)  \r
  30 ８二玉(93)  \r
  31 ８三歩打    \r
  32 ９一玉(82)  \r
  33 ９二歩打    \r
  34 同　玉(91)  \r
  35 ９四龍(74)  \r
  36 ８一玉(92)  \r
  37 ８二歩成(83)\r
  38 同　玉(81)  \r
  39 ９三龍(94)  \r
  40 ７一玉(82)  \r
  41 ７二歩成(73)\r
  42 同　と(62)  \r
  43 同　香成(79)\r
  44 同　玉(71)  \r
  45 ７三桂成(85)\r
  46 ６一玉(72)  \r
  47 ６二歩打    \r
  48 同　成銀(52)\r
  49 同　成桂(73)\r
  50 同　玉(61)  \r
  51 ６三桂成(55)\r
  52 ５一玉(62)  \r
  53 ５二銀打    \r
  54 同　成銀(42)\r
  55 同　成桂(63)\r
  56 同　玉(51)  \r
  57 ５三歩成(54)\r
  58 ４一玉(52)  \r
  59 ４二銀打    \r
  60 同　成銀(32)\r
  61 同　と(53)  \r
  62 同　玉(41)  \r
  63 ４三歩成(44)\r
  64 ３一玉(42)  \r
  65 ３二銀打    \r
  66 同　成銀(21)\r
  67 同　と(43)  \r
  68 同　玉(31)  \r
  69 ３三歩成(34)\r
  70 ２一玉(32)  \r
  71 ２二銀打    \r
  72 同　と(12)  \r
  73 同　と(33)  \r
  74 同　玉(21)  \r
  75 ２三歩成(24)\r
  76 同　と(13)  \r
  77 １四桂(26)  \r
  78 同　成香(15)\r
  79 ２三龍(93)  \r
  80 同　玉(22)  \r
  81 １四と(25)  \r
  82 同　玉(23)  \r
  83 １五歩打    \r
  84 同　玉(14)  \r
  85 １六歩打    \r
  86 同　玉(15)  \r
  87 １七歩打    \r
  88 同　玉(16)  \r
  89 １八歩打    \r
  90 ２八玉(17)  \r
  91 ３八金(49)  \r
  92 １八玉(28)  \r
  93 １九香打    \r
  94 同　馬(46)  \r
  95 同　飛(39)  \r
  96 同　玉(18)  \r
  97 ７三角打    \r
  98 １八玉(19)  \r
  99 ２八角成(73)\r
 100 詰み        \r
まで99手詰\r
`,c4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0208\r
作品名：アトラス\r
作者：田中輝和\r
発表誌：近代将棋\r
発表年月：1960年5月\r
手数：107\r
分類：煙詰\r
受賞：塚田賞\r
備考：7件登録\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 銀 ・ ・ と ・ 銀 ・ 銀 ・|一\r
| と ・v杏v圭 歩 ・ 歩 ・ ・|二\r
| ・ ・ ・v歩 ・vと ・ 歩 ・|三\r
| 銀 歩 歩 ・ ・ 飛v圭 ・ ・|四\r
| ・ とvと ・ 馬 ・v杏 ・ と|五\r
| ・ ・ ・ 龍 ・ 桂 とv杏 歩|六\r
| ・ ・ と ・ ・ ・ 桂 ・ ・|七\r
| ・ ・ ・v金v金 ・ ・ ・ ・|八\r
| ・v玉v金 と とv金 香 とv馬|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ７九と(69)  \r
   2 同　玉(89)  \r
   3 ７八金打    \r
   4 ８九玉(79)  \r
   5 ８八金(78)  \r
   6 同　玉(89)  \r
   7 ８七と(77)  \r
   8 同　玉(88)  \r
   9 ７七龍(66)  \r
  10 ９六玉(87)  \r
  11 ９五と(85)  \r
  12 同　玉(96)  \r
  13 ７五龍(77)  \r
  14 ９四玉(95)  \r
  15 ９三と(92)  \r
  16 同　玉(94)  \r
  17 ８二馬(55)  \r
  18 同　成香(72)\r
  19 同　銀(91)  \r
  20 同　玉(93)  \r
  21 ８三歩成(84)\r
  22 同　玉(82)  \r
  23 ７三歩成(74)\r
  24 同　成桂(62)\r
  25 ８九香打    \r
  26 ７二玉(83)  \r
  27 ７三龍(75)  \r
  28 同　玉(72)  \r
  29 ６五桂打    \r
  30 ７二玉(73)  \r
  31 ７四飛(44)  \r
  32 ６一玉(72)  \r
  33 ６二歩打    \r
  34 同　玉(61)  \r
  35 ７三飛成(74)\r
  36 ６一玉(62)  \r
  37 ６三龍(73)  \r
  38 ７一玉(61)  \r
  39 ７三龍(63)  \r
  40 ６一玉(71)  \r
  41 ５三桂(65)  \r
  42 同　と(43)  \r
  43 ５一歩成(52)\r
  44 同　玉(61)  \r
  45 ５三龍(73)  \r
  46 ４一玉(51)  \r
  47 ３一歩成(32)\r
  48 同　玉(41)  \r
  49 ２二歩成(23)\r
  50 同　玉(31)  \r
  51 ３四桂(46)  \r
  52 同　成香(35)\r
  53 ４二龍(53)  \r
  54 ２一玉(22)  \r
  55 １三桂打    \r
  56 １一玉(21)  \r
  57 ３一龍(42)  \r
  58 １二玉(11)  \r
  59 ２一龍(31)  \r
  60 １三玉(12)  \r
  61 ２五桂(37)  \r
  62 同　成香(26)\r
  63 １四と(15)  \r
  64 同　玉(13)  \r
  65 ２五と(36)  \r
  66 同　成香(34)\r
  67 １五香打    \r
  68 同　成香(25)\r
  69 同　歩(16)  \r
  70 同　玉(14)  \r
  71 １六歩打    \r
  72 同　玉(15)  \r
  73 １七歩打    \r
  74 同　玉(16)  \r
  75 １八香打    \r
  76 同　馬(19)  \r
  77 同　と(29)  \r
  78 同　玉(17)  \r
  79 ３六角打    \r
  80 １九玉(18)  \r
  81 １二龍(21)  \r
  82 ２九玉(19)  \r
  83 １八龍(12)  \r
  84 ３九玉(29)  \r
  85 ４九と(59)  \r
  86 同　玉(39)  \r
  87 ５八角(36)  \r
  88 同　金(68)  \r
  89 ３九金打    \r
  90 ５九玉(49)  \r
  91 ４九金打    \r
  92 同　金(58)  \r
  93 同　金(39)  \r
  94 同　玉(59)  \r
  95 ４八金打    \r
  96 ５九玉(49)  \r
  97 ５八金(48)  \r
  98 ６九玉(59)  \r
  99 ６八金(58)  \r
 100 ７九玉(69)  \r
 101 ７八金(68)  \r
 102 ８九玉(79)  \r
 103 ８八金(78)  \r
 104 ９九玉(89)  \r
 105 ９八金(88)  \r
 106 ８九玉(99)  \r
 107 ８八龍(18)  \r
 108 詰み        \r
まで107手詰\r
`,m4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0209\r
作者：北原義治\r
発表誌：近代将棋\r
発表年月：1960年11月\r
手数：85\r
分類：七種合\r
受賞：塚田賞\r
備考：7件登録\r
解説：七种合是核心趣向，需要观察防守方如何用不同棋种制造变化；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：銀　桂二　香　歩八　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v香 ・v桂v銀|一\r
| ・ ・ 歩 角 ・ ・ ・ ・v龍|二\r
|v香 ・ ・v金 ・v玉 ・ ・ ・|三\r
| と ・v歩v歩 桂 ・ ・ 金 ・|四\r
| ・v金 銀 ・ ・ ・vとv歩 ・|五\r
|v金 ・ ・ 馬 ・v歩 銀vと ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・v香vと ・ ・ ・ ・|八\r
| ・ ・ ・ ・ 歩 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　\r
先手：\r
後手：\r
手数----指手--\r
   1 ３三金(24)  \r
   2 同　桂(21)  \r
   3 ４四角成(62)\r
   4 ３二玉(43)  \r
   5 ３三馬(44)  \r
   6 ２一玉(32)  \r
   7 １一馬(33)  \r
   8 同　龍(12)  \r
   9 同　馬(66)  \r
  10 同　玉(21)  \r
  11 ３一飛打    \r
  12 ２一桂打    \r
  13 １二銀打    \r
  14 同　玉(11)  \r
  15 ３二飛成(31)\r
  16 ２二金打    \r
  17 １四飛打    \r
  18 １三角打    \r
  19 ２四桂打    \r
  20 １一玉(12)  \r
  21 １三飛成(14)\r
  22 同　桂(21)  \r
  23 ４一龍(32)  \r
  24 ２一銀打    \r
  25 １二香打    \r
  26 同　金(22)  \r
  27 ９九角打    \r
  28 ４四香打    \r
  29 同　角(99)  \r
  30 ２二飛打    \r
  31 ２一龍(41)  \r
  32 同　玉(11)  \r
  33 ３二銀打    \r
  34 同　飛(22)  \r
  35 同　桂成(24)\r
  36 同　玉(21)  \r
  37 ４二飛打    \r
  38 ２三玉(32)  \r
  39 １二飛成(42)\r
  40 ３四玉(23)  \r
  41 ３二龍(12)  \r
  42 ４四玉(34)  \r
  43 ３五龍(32)  \r
  44 ５三玉(44)  \r
  45 ４四金打    \r
  46 ５二玉(53)  \r
  47 ３二龍(35)  \r
  48 ６一玉(52)  \r
  49 ７一歩成(72)\r
  50 同　玉(61)  \r
  51 ７三香打    \r
  52 同　金(63)  \r
  53 ６二龍(32)  \r
  54 ８一玉(71)  \r
  55 ８二歩打    \r
  56 ９二玉(81)  \r
  57 ９三と(94)  \r
  58 同　玉(92)  \r
  59 ７三龍(62)  \r
  60 ８三歩打    \r
  61 ９五香打    \r
  62 同　金(96)  \r
  63 ８四金打    \r
  64 同　金(85)  \r
  65 同　銀(75)  \r
  66 ９四玉(93)  \r
  67 ８三龍(73)  \r
  68 ８五玉(94)  \r
  69 ９五銀(84)  \r
  70 ７六玉(85)  \r
  71 ８六龍(83)  \r
  72 ６七玉(76)  \r
  73 ７七金打    \r
  74 ５七玉(67)  \r
  75 ４六龍(86)  \r
  76 同　玉(57)  \r
  77 ４七金打    \r
  78 ５五玉(46)  \r
  79 ４五金(44)  \r
  80 ６五玉(55)  \r
  81 ６六歩打    \r
  82 ７五玉(65)  \r
  83 ７六歩打    \r
  84 ８五玉(75)  \r
  85 ８六金(77)  \r
  86 詰み        \r
まで85手詰\r
`,d4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0212\r
作品名：新四桂詰\r
作者：山田修司\r
発表誌：近代将棋\r
発表年月：1963年11月\r
手数：63\r
分類：連合、四桂詰\r
受賞：塚田賞\r
備考：7件登録\r
解説：四桂詰把桂马的跳跃控制集中起来，局面辨识度很高；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　桂四　香二　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v香 ・ と ・ ・ ・ ・|一\r
| ・ 銀v歩 ・ ・ ・ ・ ・ ・|二\r
| 香 ・ ・ ・ ・v金 ・ ・ ・|三\r
| 歩v金 ・ ・ ・v歩 ・ ・ ・|四\r
| ・ 歩 馬 ・vと 銀 ・ ・ 飛|五\r
| ・ 金 ・ 歩v歩 ・ ・ ・ ・|六\r
| ・ ・vと ・ ・ ・ ・ ・vと|七\r
|v玉 ・ 銀 金 ・ ・ ・ ・ ・|八\r
|vと ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８七銀打    \r
   2 同　と(77)  \r
   3 同　銀(78)  \r
   4 ８八玉(98)  \r
   5 ９七角打    \r
   6 同　玉(88)  \r
   7 ９六金(86)  \r
   8 ８七玉(97)  \r
   9 １七飛(15)  \r
  10 ２七桂打    \r
  11 同　飛(17)  \r
  12 ３七桂打    \r
  13 同　飛(27)  \r
  14 ４七桂打    \r
  15 同　飛(37)  \r
  16 ５七桂打    \r
  17 同　飛(47)  \r
  18 同　歩成(56)\r
  19 ９七馬(75)  \r
  20 ７六玉(87)  \r
  21 ８六金(96)  \r
  22 ６六玉(76)  \r
  23 ７八桂打    \r
  24 ６五玉(66)  \r
  25 ７五金(86)  \r
  26 同　金(84)  \r
  27 ７七桂打    \r
  28 ６四玉(65)  \r
  29 ７五馬(97)  \r
  30 同　玉(64)  \r
  31 ８七桂打    \r
  32 ６四玉(75)  \r
  33 ７六桂打    \r
  34 ５三玉(64)  \r
  35 ５二金打    \r
  36 ６三玉(53)  \r
  37 ６四歩打    \r
  38 ７四玉(63)  \r
  39 ８六桂(78)  \r
  40 ８三玉(74)  \r
  41 ８四歩(85)  \r
  42 ８二玉(83)  \r
  43 ８三歩成(84)\r
  44 同　玉(82)  \r
  45 ７五桂(87)  \r
  46 ８二玉(83)  \r
  47 ８三歩打    \r
  48 ８一玉(82)  \r
  49 ９二香成(93)\r
  50 同　玉(81)  \r
  51 ９三歩成(94)\r
  52 同　玉(92)  \r
  53 ８五桂(77)  \r
  54 ９二玉(93)  \r
  55 ８四桂(76)  \r
  56 ９一玉(92)  \r
  57 ８二歩成(83)\r
  58 同　玉(91)  \r
  59 ７四桂(86)  \r
  60 ８一玉(82)  \r
  61 ９三桂(85)  \r
  62 ９一玉(81)  \r
  63 ８三桂(75)  \r
  64 詰み        \r
まで63手詰\r
`,f4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0216\r
作品名：天にかかる橋\r
作者：山田修司\r
発表誌：近代将棋\r
発表年月：1964年11月\r
手数：75\r
分類：七種合\r
受賞：塚田賞\r
備考：7件登録\r
解説：七种合是核心趣向，需要观察防守方如何用不同棋种制造变化；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金二　銀二　桂　香　歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v銀 ・ ・ ・ ・v香 ・ ・ と|一\r
|v香 ・ ・ ・v歩 歩v歩 ・ ・|二\r
| 歩 ・ ・v銀 ・ ・ ・ ・v玉|三\r
| ・v歩 歩 ・ 角v歩 香 ・ ・|四\r
| ・ ・vと ・ ・ 桂 ・v歩v歩|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ 桂|七\r
|vと 金 ・ ・ ・ ・ 飛 ・ ・|八\r
| ・ 桂 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二と(11)  \r
   2 同　玉(13)  \r
   3 ２三金打    \r
   4 １一玉(12)  \r
   5 ２二金(23)  \r
   6 同　玉(11)  \r
   7 ３三香成(34)\r
   8 １三玉(22)  \r
   9 ２三成香(33)\r
  10 １四玉(13)  \r
  11 ３四飛(38)  \r
  12 ２三玉(14)  \r
  13 ３二飛成(34)\r
  14 １三玉(23)  \r
  15 １四歩打    \r
  16 同　玉(13)  \r
  17 ３四龍(32)  \r
  18 ２四飛打    \r
  19 ３二角成(54)\r
  20 １三玉(14)  \r
  21 ２五桂(17)  \r
  22 １二玉(13)  \r
  23 １三歩打    \r
  24 １一玉(12)  \r
  25 ３三馬(32)  \r
  26 ２二角打    \r
  27 同　馬(33)  \r
  28 同　飛(24)  \r
  29 ３一龍(34)  \r
  30 ２一金打    \r
  31 同　龍(31)  \r
  32 同　玉(11)  \r
  33 ４三角打    \r
  34 ３二銀打    \r
  35 １二金打    \r
  36 ３一玉(21)  \r
  37 ２二金(12)  \r
  38 ４二玉(31)  \r
  39 ３二角成(43)\r
  40 ５一玉(42)  \r
  41 ８一飛打    \r
  42 ６一桂打    \r
  43 ４一馬(32)  \r
  44 ６二玉(51)  \r
  45 ７三銀打    \r
  46 同　桂(61)  \r
  47 ５一馬(41)  \r
  48 ７二玉(62)  \r
  49 ７三歩成(74)\r
  50 ８一玉(72)  \r
  51 ８三香打    \r
  52 ８二香打    \r
  53 同　香成(83)\r
  54 同　銀(91)  \r
  55 同　と(73)  \r
  56 同　玉(81)  \r
  57 ７三銀打    \r
  58 ９三玉(82)  \r
  59 ９五香打    \r
  60 ９四歩打    \r
  61 同　香(95)  \r
  62 同　玉(93)  \r
  63 ８四銀成(73)\r
  64 ９五玉(94)  \r
  65 ９六歩打    \r
  66 ８六玉(95)  \r
  67 ７七金(88)  \r
  68 ９六玉(86)  \r
  69 ８八桂打    \r
  70 同　と(98)  \r
  71 ９七歩打    \r
  72 ９五玉(96)  \r
  73 ７四成銀(84)\r
  74 ８五玉(95)  \r
  75 ８四馬(51)  \r
  76 詰み        \r
まで75手詰\r
`,g4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0077\r
作品名：天馬\r
作者：黒川一郎\r
発表誌：詰将棋パラダイス\r
発表年月：1968年4月\r
手数：101\r
分類：馬鋸\r
受賞：半期賞、看寿賞\r
備考：10件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金　銀三　桂　香　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 角 ・v香v金 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ 銀 ・ ・ ・ ・v玉|二\r
| ・ ・ 香 ・ 金 ・ ・ ・v桂|三\r
| ・ ・ ・ ・ ・ ・ ・ 金 ・|四\r
| ・ 桂 ・ ・ ・ ・v香 ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ 桂|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| 馬 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩十八　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８九馬(99)  \r
   2 １一玉(12)  \r
   3 １二歩打    \r
   4 ２一玉(11)  \r
   5 ２二歩打    \r
   6 ３一玉(21)  \r
   7 ３二歩打    \r
   8 同　玉(31)  \r
   9 ９八馬(89)  \r
  10 ２二玉(32)  \r
  11 ８八馬(98)  \r
  12 １二玉(22)  \r
  13 ７八馬(88)  \r
  14 １一玉(12)  \r
  15 １二歩打    \r
  16 ２一玉(11)  \r
  17 ２二歩打    \r
  18 ３一玉(21)  \r
  19 ３二歩打    \r
  20 同　玉(31)  \r
  21 ８七馬(78)  \r
  22 ２二玉(32)  \r
  23 ７七馬(87)  \r
  24 １二玉(22)  \r
  25 ６七馬(77)  \r
  26 １一玉(12)  \r
  27 １二歩打    \r
  28 ２一玉(11)  \r
  29 ２二歩打    \r
  30 ３一玉(21)  \r
  31 ３二歩打    \r
  32 同　玉(31)  \r
  33 ７六馬(67)  \r
  34 ２二玉(32)  \r
  35 ６六馬(76)  \r
  36 １二玉(22)  \r
  37 ５六馬(66)  \r
  38 １一玉(12)  \r
  39 １二歩打    \r
  40 ２一玉(11)  \r
  41 ２二歩打    \r
  42 ３一玉(21)  \r
  43 ３二歩打    \r
  44 同　玉(31)  \r
  45 ６五馬(56)  \r
  46 ２二玉(32)  \r
  47 ５五馬(65)  \r
  48 １二玉(22)  \r
  49 ４五馬(55)  \r
  50 １一玉(12)  \r
  51 １二歩打    \r
  52 ２一玉(11)  \r
  53 ２二歩打    \r
  54 ３一玉(21)  \r
  55 ３二歩打    \r
  56 同　玉(31)  \r
  57 ５四馬(45)  \r
  58 ２二玉(32)  \r
  59 ４四馬(54)  \r
  60 １二玉(22)  \r
  61 ３四馬(44)  \r
  62 １一玉(12)  \r
  63 １二歩打    \r
  64 ２一玉(11)  \r
  65 ２二歩打    \r
  66 ３一玉(21)  \r
  67 ４二金(53)  \r
  68 同　玉(31)  \r
  69 ３三金(24)  \r
  70 ３一玉(42)  \r
  71 ２一歩成(22)\r
  72 ４一玉(31)  \r
  73 ５一銀成(62)\r
  74 同　玉(41)  \r
  75 ６一馬(34)  \r
  76 同　玉(51)  \r
  77 ７一香成(73)\r
  78 同　玉(61)  \r
  79 ７二金打    \r
  80 同　玉(71)  \r
  81 ７三角成(91)\r
  82 ７一玉(72)  \r
  83 ７二歩打    \r
  84 ６一玉(71)  \r
  85 ６三香打    \r
  86 ５二玉(61)  \r
  87 ６二馬(73)  \r
  88 ４一玉(52)  \r
  89 ３一と(21)  \r
  90 同　玉(41)  \r
  91 ５三馬(62)  \r
  92 ２一玉(31)  \r
  93 ４三馬(53)  \r
  94 １二玉(21)  \r
  95 ２四桂(16)  \r
  96 １一玉(12)  \r
  97 ２一馬(43)  \r
  98 同　玉(11)  \r
  99 ３二桂成(24)\r
 100 １二玉(21)  \r
 101 ２二金(33)  \r
 102 詰み        \r
まで101手詰\r
`,h4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0234\r
作品名：夢の浮橋\r
作者：若島正\r
発表誌：近代将棋\r
発表年月：1972年2月\r
手数：89\r
受賞：塚田賞\r
備考：7件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　金四　銀　桂三　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v角 ・ ・ ・ ・ 銀 ・ ・v歩|一\r
| 龍 ・ ・ 銀 ・ ・ ・v玉 ・|二\r
|v香 ・ ・ ・ ・ 銀 ・ ・ 桂|三\r
| ・ ・ ・ ・ ・ 龍 ・ ・ ・|四\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|五\r
| ・vと ・ ・ ・ ・ ・ ・ ・|六\r
|v歩 ・ ・ 歩 ・ ・ ・ ・ ・|七\r
| 香 ・ ・vと ・ ・ ・ ・ ・|八\r
| ・ ・ ・ 香vと ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ３二銀成(43)\r
   2 １二玉(22)  \r
   3 ２二成銀(32)\r
   4 同　玉(12)  \r
   5 ２四龍(44)  \r
   6 １二玉(22)  \r
   7 ６一銀(62)  \r
   8 ８二歩打    \r
   9 ２一龍(24)  \r
  10 １三玉(12)  \r
  11 ９三龍(92)  \r
  12 ８三歩(82)  \r
  13 同　龍(93)  \r
  14 ７三歩打    \r
  15 １四歩打    \r
  16 同　玉(13)  \r
  17 ８四龍(83)  \r
  18 ７四歩(73)  \r
  19 同　龍(84)  \r
  20 ６四歩打    \r
  21 １五歩打    \r
  22 同　玉(14)  \r
  23 ７五龍(74)  \r
  24 ６五歩(64)  \r
  25 同　龍(75)  \r
  26 ５五歩打    \r
  27 １六歩打    \r
  28 同　玉(15)  \r
  29 ６六龍(65)  \r
  30 ５六歩(55)  \r
  31 同　龍(66)  \r
  32 ４六歩打    \r
  33 １七歩打    \r
  34 同　玉(16)  \r
  35 １九香打    \r
  36 １八角打    \r
  37 ５七龍(56)  \r
  38 ４七歩成(46)\r
  39 同　龍(57)  \r
  40 ３七銀打    \r
  41 同　龍(47)  \r
  42 同　角成(91)\r
  43 １八香(19)  \r
  44 同　玉(17)  \r
  45 ２九銀打    \r
  46 １九玉(18)  \r
  47 ２八角打    \r
  48 ２九玉(19)  \r
  49 ３七角(28)  \r
  50 ３八玉(29)  \r
  51 ２八龍(21)  \r
  52 ４七玉(38)  \r
  53 ４八龍(28)  \r
  54 ５六玉(47)  \r
  55 ７四角打    \r
  56 ６五香打    \r
  57 ５七歩打    \r
  58 ６七玉(56)  \r
  59 ６八龍(48)  \r
  60 ７六玉(67)  \r
  61 ６五角(74)  \r
  62 ８五玉(76)  \r
  63 ７四角(65)  \r
  64 同　玉(85)  \r
  65 ６五龍(68)  \r
  66 ８四玉(74)  \r
  67 ７三角成(37)\r
  68 同　玉(84)  \r
  69 ６四龍(65)  \r
  70 ８三玉(73)  \r
  71 ７二銀(61)  \r
  72 同　玉(83)  \r
  73 ６三龍(64)  \r
  74 ８一玉(72)  \r
  75 ８二歩打    \r
  76 ９一玉(81)  \r
  77 ９七香(98)  \r
  78 同　と(86)  \r
  79 ９四香打    \r
  80 ９二歩打    \r
  81 ８一歩成(82)\r
  82 同　玉(91)  \r
  83 ８三龍(63)  \r
  84 ７一玉(81)  \r
  85 ７三龍(83)  \r
  86 ８一玉(71)  \r
  87 ８二歩打    \r
  88 ９一玉(81)  \r
  89 ７一龍(73)  \r
  90 詰み        \r
まで89手詰\r
`,k4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0235\r
作品名：禁じられた遊び\r
作者：山田修司\r
発表誌：近代将棋\r
発表年月：1972年3月\r
手数：53\r
受賞：塚田賞\r
備考：8件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　香三　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v歩 とv金 ・v香|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金 と ・v角 ・ 銀 ・|三\r
| ・ ・ ・ ・ ・v歩 ・ ・ と|四\r
| と 銀v玉 ・ ・ 銀 ・vと 銀|五\r
| ・ ・ ・v歩vと 歩 ・ ・ ・|六\r
| ・vと 金 ・v龍 ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| 飛 ・ ・ ・ 馬 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：桂四　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７六金(77)  \r
   2 同　角(43)  \r
   3 ７四金(73)  \r
   4 ６五玉(75)  \r
   5 ７六銀(85)  \r
   6 同　玉(65)  \r
   7 ８八桂打    \r
   8 同　と(87)  \r
   9 ７五金(74)  \r
  10 同　玉(76)  \r
  11 ５三角打    \r
  12 ６五玉(75)  \r
  13 ６四角成(53)\r
  14 ７六玉(65)  \r
  15 ８六馬(64)  \r
  16 ６五玉(76)  \r
  17 ７七桂打    \r
  18 同　龍(57)  \r
  19 ６四馬(86)  \r
  20 ７六玉(65)  \r
  21 ６八桂打    \r
  22 同　龍(77)  \r
  23 ８六馬(64)  \r
  24 ６五玉(76)  \r
  25 ５四銀(45)  \r
  26 同　玉(65)  \r
  27 ６四馬(86)  \r
  28 ４三玉(54)  \r
  29 ５三馬(64)  \r
  30 ３三玉(43)  \r
  31 ２四銀(15)  \r
  32 同　と(25)  \r
  33 ２五桂打    \r
  34 同　と(24)  \r
  35 １五馬(59)  \r
  36 同　と(25)  \r
  37 ３九飛(99)  \r
  38 ３八歩打    \r
  39 同　飛(39)  \r
  40 同　龍(68)  \r
  41 ３四歩打    \r
  42 同　龍(38)  \r
  43 ２二銀(23)  \r
  44 同　玉(33)  \r
  45 ３一馬(53)  \r
  46 同　龍(34)  \r
  47 ２三金打    \r
  48 ２一玉(22)  \r
  49 ３一と(41)  \r
  50 同　玉(21)  \r
  51 ３三飛打    \r
  52 ４一玉(31)  \r
  53 ３二飛成(33)\r
  54 詰み        \r
まで53手詰\r
`,y4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0084\r
作品名：五月晴\r
作者：上田吉一\r
発表誌：詰将棋パラダイス\r
発表年月：1972年5月\r
手数：113\r
分類：連取り\r
受賞：半期賞、看寿賞\r
備考：8件登録\r
解説：手数极长，重点在于全局节奏、资源循环和长期强制性；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金三　銀三　歩六　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v桂v銀 ・ ・ 馬v香|一\r
| ・ ・ ・ ・ ・ ・v歩 歩v香|二\r
| ・v歩v歩v歩v歩v歩v龍v歩 ・|三\r
| ・ ・ ・ ・ ・v玉 歩 ・v歩|四\r
| ・ ・ ・ 馬 ・ ・ ・ ・v桂|五\r
| ・ ・ ・ ・v飛 ・ ・ 金vと|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ 桂 ・ ・|八\r
| ・ ・ ・ ・ ・ ・ 香 桂 ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ４九香打    \r
   2 ４六飛(56)  \r
   3 同　香(49)  \r
   4 ３四玉(44)  \r
   5 ３五飛打    \r
   6 ２四玉(34)  \r
   7 ２五金(26)  \r
   8 １三玉(24)  \r
   9 １四金(25)  \r
  10 同　玉(13)  \r
  11 ４七馬(65)  \r
  12 ２四玉(14)  \r
  13 ３三飛成(35)\r
  14 同　歩(32)  \r
  15 ９四飛打    \r
  16 ８四飛打    \r
  17 同　飛(94)  \r
  18 同　歩(83)  \r
  19 ２五飛打    \r
  20 １三玉(24)  \r
  21 １四歩打    \r
  22 同　玉(13)  \r
  23 ８五飛(25)  \r
  24 ２四玉(14)  \r
  25 ８四飛(85)  \r
  26 ７四飛打    \r
  27 同　飛(84)  \r
  28 同　歩(73)  \r
  29 ２五飛打    \r
  30 １三玉(24)  \r
  31 １四歩打    \r
  32 同　玉(13)  \r
  33 ７五飛(25)  \r
  34 ２四玉(14)  \r
  35 ７四飛(75)  \r
  36 ６四飛打    \r
  37 同　飛(74)  \r
  38 同　歩(63)  \r
  39 ２五飛打    \r
  40 １三玉(24)  \r
  41 １四歩打    \r
  42 同　玉(13)  \r
  43 ６五飛(25)  \r
  44 ２四玉(14)  \r
  45 ６四飛(65)  \r
  46 ５四飛打    \r
  47 同　飛(64)  \r
  48 同　歩(53)  \r
  49 ２五飛打    \r
  50 １三玉(24)  \r
  51 １四歩打    \r
  52 同　玉(13)  \r
  53 ５五飛(25)  \r
  54 ２四玉(14)  \r
  55 ５四飛(55)  \r
  56 ４四飛打    \r
  57 同　飛(54)  \r
  58 同　歩(43)  \r
  59 ２五飛打    \r
  60 １三玉(24)  \r
  61 １四歩打    \r
  62 同　玉(13)  \r
  63 ４五飛(25)  \r
  64 ２四玉(14)  \r
  65 ４四飛(45)  \r
  66 ３四飛打    \r
  67 同　飛(44)  \r
  68 同　歩(33)  \r
  69 ２五飛打    \r
  70 １三玉(24)  \r
  71 １四歩打    \r
  72 同　玉(13)  \r
  73 ３五飛(25)  \r
  74 ２四玉(14)  \r
  75 ３四飛(35)  \r
  76 同　玉(24)  \r
  77 ４三馬(21)  \r
  78 ２四玉(34)  \r
  79 ２五馬(47)  \r
  80 １三玉(24)  \r
  81 １四歩打    \r
  82 ２二玉(13)  \r
  83 ４四馬(43)  \r
  84 ３三歩打    \r
  85 同　馬(44)  \r
  86 ３一玉(22)  \r
  87 ３二馬(33)  \r
  88 同　玉(31)  \r
  89 ２六桂(38)  \r
  90 ３四歩打    \r
  91 同　香(39)  \r
  92 ２一玉(32)  \r
  93 ３二香成(34)\r
  94 同　玉(21)  \r
  95 ４三馬(25)  \r
  96 ３一玉(32)  \r
  97 ３二歩打    \r
  98 ２一玉(31)  \r
  99 ２二歩打    \r
 100 同　玉(21)  \r
 101 ３四桂(26)  \r
 102 ２一玉(22)  \r
 103 ３一歩成(32)\r
 104 同　玉(21)  \r
 105 ４二桂成(34)\r
 106 同　銀(51)  \r
 107 同　馬(43)  \r
 108 ２一玉(31)  \r
 109 ２二歩打    \r
 110 同　玉(21)  \r
 111 ３三銀打    \r
 112 ２一玉(22)  \r
 113 ３二馬(42)  \r
 114 詰み        \r
まで113手詰\r
`,b4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0236\r
作者：上田吉一（詰吉）\r
発表誌：近代将棋\r
発表年月：1972年12月\r
手数：63\r
分類：持駒変換\r
受賞：塚田賞\r
備考：9件登録\r
解説：通过取子和打入改变持驹组合，解答过程像是在逐步换装机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　金四　銀三　桂三　香　歩十一　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v歩v香v歩 ・ ・ ・|一\r
| ・ ・ ・ ・v歩 ・ ・ ・ ・|二\r
| ・ ・ ・ 歩v玉v香 銀 歩 ・|三\r
| ・ と ・v桂 ・ ・ 香 ・ ・|四\r
| ・ ・ ・ ・ ・ 角 ・ ・ ・|五\r
| ・ ・ ・ ・ ・vと ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：角　\r
先手：\r
後手：\r
手数----指手--\r
   1 ７一角打    \r
   2 ６二飛打    \r
   3 同　角成(71)\r
   4 同　歩(61)  \r
   5 ５五飛打    \r
   6 ５四香打    \r
   7 同　飛(55)  \r
   8 ６三玉(53)  \r
   9 ５三飛成(54)\r
  10 同　玉(63)  \r
  11 ５五香打    \r
  12 ５四角打    \r
  13 同　香(55)  \r
  14 ６三玉(53)  \r
  15 ５三香成(54)\r
  16 同　玉(63)  \r
  17 ３一角打    \r
  18 ４二飛打    \r
  19 同　角成(31)\r
  20 同　歩(41)  \r
  21 ５五飛打    \r
  22 ５四香打    \r
  23 同　飛(55)  \r
  24 ６三玉(53)  \r
  25 ５三飛成(54)\r
  26 同　玉(63)  \r
  27 ５五香打    \r
  28 ５四角打    \r
  29 同　香(55)  \r
  30 ６三玉(53)  \r
  31 ５三香成(54)\r
  32 同　玉(63)  \r
  33 ３五角打    \r
  34 ４四飛打    \r
  35 同　角(35)  \r
  36 同　香(43)  \r
  37 ５五飛打    \r
  38 ５四香打    \r
  39 同　飛(55)  \r
  40 ６三玉(53)  \r
  41 ５三飛成(54)\r
  42 同　玉(63)  \r
  43 ５五香打    \r
  44 ５四角打    \r
  45 同　香(55)  \r
  46 ６三玉(53)  \r
  47 ５三香成(54)\r
  48 同　玉(63)  \r
  49 ４二銀(33)  \r
  50 同　玉(53)  \r
  51 ４三歩打    \r
  52 ４一玉(42)  \r
  53 ３二角打    \r
  54 ３一玉(41)  \r
  55 ２二歩成(23)\r
  56 同　玉(31)  \r
  57 ３三香成(34)\r
  58 １一玉(22)  \r
  59 １二角成(45)\r
  60 同　玉(11)  \r
  61 ２三角成(32)\r
  62 １一玉(12)  \r
  63 ２二馬(23)  \r
  64 詰み        \r
まで63手詰\r
`,p4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0237\r
作品名：オーロラ\r
作者：上田吉一（詰吉）\r
発表誌：近代将棋\r
発表年月：1973年5月\r
手数：67\r
分類：連合\r
受賞：塚田賞\r
備考：11件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金四　香四　歩九　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・v桂v桂 ・v歩 と|一\r
| ・ ・ ・ ・ ・ 歩v銀v桂 ・|二\r
| ・ ・ ・ ・ 銀v歩v玉 歩 と|三\r
| ・ ・ ・ ・ ・ ・ ・ ・v歩|四\r
| ・ ・ ・ ・ ・ ・v角 ・ ・|五\r
| ・ ・ ・ ・ ・v銀 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ 龍 桂|七\r
| ・v角 ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　銀　歩二　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２四銀打    \r
   2 同　角(35)  \r
   3 ３四歩打    \r
   4 同　玉(33)  \r
   5 ２五龍(27)  \r
   6 ３三玉(34)  \r
   7 ３四歩打    \r
   8 同　桂(22)  \r
   9 ２四龍(25)  \r
  10 同　玉(33)  \r
  11 ２五飛打    \r
  12 １三玉(24)  \r
  13 ２四角打    \r
  14 ２三玉(13)  \r
  15 ４六角(24)  \r
  16 ３三玉(23)  \r
  17 ２二銀打    \r
  18 同　歩(21)  \r
  19 ２四角(46)  \r
  20 ２三玉(33)  \r
  21 ７九角(24)  \r
  22 ３三玉(23)  \r
  23 ８八角(79)  \r
  24 ７七香打    \r
  25 同　角(88)  \r
  26 ６六香打    \r
  27 同　角(77)  \r
  28 ５五香打    \r
  29 同　角(66)  \r
  30 ４四香打    \r
  31 ２四角打    \r
  32 ２三玉(33)  \r
  33 １五角(24)  \r
  34 １三玉(23)  \r
  35 ４六角(55)  \r
  36 同　香(44)  \r
  37 ２四角(15)  \r
  38 ２三玉(13)  \r
  39 ４六角(24)  \r
  40 ３三玉(23)  \r
  41 ２三飛成(25)\r
  42 同　歩(22)  \r
  43 ２五桂(17)  \r
  44 ２二玉(33)  \r
  45 １三角成(46)\r
  46 １一玉(22)  \r
  47 １二香打    \r
  48 ２一玉(11)  \r
  49 ２二香打    \r
  50 ３一玉(21)  \r
  51 ４一歩成(42)\r
  52 同　銀(32)  \r
  53 ２一香成(22)\r
  54 同　玉(31)  \r
  55 ３三桂打    \r
  56 ３二玉(21)  \r
  57 ３一馬(13)  \r
  58 同　玉(32)  \r
  59 ４一桂成(33)\r
  60 同　玉(31)  \r
  61 ４二銀打    \r
  62 ３二玉(41)  \r
  63 ３三銀成(42)\r
  64 ２一玉(32)  \r
  65 ２二香打    \r
  66 １二玉(21)  \r
  67 １三香打    \r
  68 詰み        \r
まで67手詰\r
`,x4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0243\r
作者：七条兼三（墨江酔人）\r
発表誌：近代将棋\r
発表年月：1975年5月\r
手数：77\r
分類：馬鋸\r
備考：9件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金三　銀四　桂四　香三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・v玉|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ 香 ・ ・ 金 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| 馬 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：歩十八　\r
先手：\r
後手：\r
手数----指手--\r
   1 １三歩打    \r
   2 ２一玉(12)  \r
   3 ２二歩打    \r
   4 １一玉(21)  \r
   5 １二歩成(13)\r
   6 同　玉(11)  \r
   7 ８九馬(99)  \r
   8 １一玉(12)  \r
   9 １二歩打    \r
  10 ２二玉(11)  \r
  11 ８八馬(89)  \r
  12 １二玉(22)  \r
  13 １三歩打    \r
  14 ２一玉(12)  \r
  15 ２二歩打    \r
  16 １一玉(21)  \r
  17 １二歩成(13)\r
  18 同　玉(11)  \r
  19 ７八馬(88)  \r
  20 １一玉(12)  \r
  21 １二歩打    \r
  22 ２二玉(11)  \r
  23 ７七馬(78)  \r
  24 １二玉(22)  \r
  25 １三歩打    \r
  26 ２一玉(12)  \r
  27 ２二歩打    \r
  28 １一玉(21)  \r
  29 １二歩成(13)\r
  30 同　玉(11)  \r
  31 ６七馬(77)  \r
  32 １一玉(12)  \r
  33 １二歩打    \r
  34 ２二玉(11)  \r
  35 ６六馬(67)  \r
  36 １二玉(22)  \r
  37 １三歩打    \r
  38 ２一玉(12)  \r
  39 ２二歩打    \r
  40 １一玉(21)  \r
  41 １二歩成(13)\r
  42 同　玉(11)  \r
  43 ５六馬(66)  \r
  44 １一玉(12)  \r
  45 １二歩打    \r
  46 ２二玉(11)  \r
  47 ５五馬(56)  \r
  48 １二玉(22)  \r
  49 １三歩打    \r
  50 ２一玉(12)  \r
  51 ２二歩打    \r
  52 １一玉(21)  \r
  53 １二歩成(13)\r
  54 同　玉(11)  \r
  55 ４五馬(55)  \r
  56 １一玉(12)  \r
  57 １二歩打    \r
  58 ２二玉(11)  \r
  59 ４四馬(45)  \r
  60 １二玉(22)  \r
  61 ３四馬(44)  \r
  62 １一玉(12)  \r
  63 １二歩打    \r
  64 ２一玉(11)  \r
  65 ２二歩打    \r
  66 ３一玉(21)  \r
  67 ３二歩打    \r
  68 同　玉(31)  \r
  69 ２三金(24)  \r
  70 ４一玉(32)  \r
  71 ５二香成(54)\r
  72 ３一玉(41)  \r
  73 ２一歩成(22)\r
  74 同　玉(31)  \r
  75 ４三馬(34)  \r
  76 ３一玉(21)  \r
  77 ３二馬(43)  \r
  78 詰み        \r
まで77手詰\r
`,V4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0251\r
作者：七条兼三\r
発表誌：近代将棋\r
発表年月：1977年6月\r
手数：67\r
分類：連合\r
受賞：塚田賞\r
備考：7件登録、「近代将棋」1977年4月の修正図\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：角　銀　桂二　香　歩十七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・v香v銀 銀v香v玉v龍|一\r
| ・ ・ ・ ・ 飛 ・ ・ ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ ・v銀 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・v桂 ・ ・ ・ ・ ・|六\r
| 桂 ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・vと ・ ・ ・|八\r
| 角 ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金四　香　\r
先手：\r
後手：\r
手数----指手--\r
   1 ２九香打    \r
   2 ２八歩打    \r
   3 同　香(29)  \r
   4 ２七歩打    \r
   5 同　香(28)  \r
   6 ２六歩打    \r
   7 同　香(27)  \r
   8 ２五歩打    \r
   9 同　香(26)  \r
  10 ２四歩打    \r
  11 同　香(25)  \r
  12 ２三歩打    \r
  13 同　香(24)  \r
  14 ２二歩打    \r
  15 同　香成(23)\r
  16 同　龍(11)  \r
  17 同　飛成(52)\r
  18 同　玉(21)  \r
  19 ２四飛打    \r
  20 ２三銀打    \r
  21 ６六角(99)  \r
  22 同　銀(75)  \r
  23 ３二金打    \r
  24 同　香(31)  \r
  25 同　銀成(41)\r
  26 同　玉(22)  \r
  27 ４三金打    \r
  28 同　玉(32)  \r
  29 ３五桂打    \r
  30 ５三玉(43)  \r
  31 ４三金打    \r
  32 ６二玉(53)  \r
  33 ６三歩打    \r
  34 同　玉(62)  \r
  35 ６五香打    \r
  36 ７二玉(63)  \r
  37 ７三歩打    \r
  38 ８二玉(72)  \r
  39 ８三歩打    \r
  40 同　玉(82)  \r
  41 ８四歩打    \r
  42 ９三玉(83)  \r
  43 ９四歩打    \r
  44 同　玉(93)  \r
  45 ８五金打    \r
  46 ９三玉(94)  \r
  47 ９四歩打    \r
  48 ９二玉(93)  \r
  49 ８三歩成(84)\r
  50 ９一玉(92)  \r
  51 ９二と(83)  \r
  52 同　玉(91)  \r
  53 ９三歩成(94)\r
  54 同　玉(92)  \r
  55 ９四飛(24)  \r
  56 ８二玉(93)  \r
  57 ８三歩打    \r
  58 同　玉(82)  \r
  59 ８四金(85)  \r
  60 ８二玉(83)  \r
  61 ９三飛成(94)\r
  62 ８一玉(82)  \r
  63 ７二歩成(73)\r
  64 同　玉(81)  \r
  65 ７三金(84)  \r
  66 ８一玉(72)  \r
  67 ８二龍(93)  \r
  68 詰み        \r
まで67手詰\r
`,j4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0518\r
作者：内藤国雄\r
発表誌：神戸新聞・東京新聞\r
発表年月：1981年3月8日\r
手数：71\r
分類：実戦初形\r
備考：10件登録\r
解説：实战初形很自然，趣味在于普通棋形下隐藏着唯一解；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：金　銀　歩三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香v桂v銀v金v玉v金v銀v桂v香|一\r
| とv飛 ・ ・ ・ ・ ・v角 ・|二\r
|v歩v歩v歩v歩v歩v歩v歩v歩v歩|三\r
| ・ ・ ・ 龍 ・ ・ ・v銀 ・|四\r
| ・ 歩 ・ ・ 桂 ・v香 歩 ・|五\r
| ・ ・ ・ ・ ・ 歩 ・ ・ ・|六\r
| ・ 角 ・ 歩 ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・v金|八\r
| ・ ・ ・ ・ ・ ・ ・ 香 ・|九\r
+---------------------------+\r
先手の持駒：桂　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ５三龍(64)  \r
   2 ５二金(61)  \r
   3 ６三桂(55)  \r
   4 ６一玉(51)  \r
   5 ７一桂成(63)\r
   6 同　玉(61)  \r
   7 ８二と(92)  \r
   8 同　玉(71)  \r
   9 ６二飛打    \r
  10 ７二桂打    \r
  11 同　飛成(62)\r
  12 同　玉(82)  \r
  13 ６四桂打    \r
  14 ７一玉(72)  \r
  15 ７二銀打    \r
  16 ８二玉(71)  \r
  17 ７四桂打    \r
  18 ９二玉(82)  \r
  19 ８一銀(72)  \r
  20 同　玉(92)  \r
  21 ５四角(87)  \r
  22 ６三銀打    \r
  23 ７二桂成(64)\r
  24 同　玉(81)  \r
  25 ５二龍(53)  \r
  26 同　金(41)  \r
  27 ６四桂打    \r
  28 ６一玉(72)  \r
  29 ５二桂成(64)\r
  30 同　玉(61)  \r
  31 ６二金打    \r
  32 ４二玉(52)  \r
  33 ５三金打    \r
  34 同　玉(42)  \r
  35 ６三角成(54)\r
  36 ４四玉(53)  \r
  37 ４五馬(63)  \r
  38 ５三玉(44)  \r
  39 ６三金(62)  \r
  40 ４二玉(53)  \r
  41 ５三銀打    \r
  42 ３二玉(42)  \r
  43 ２三馬(45)  \r
  44 同　玉(32)  \r
  45 ２四歩(25)  \r
  46 １四玉(23)  \r
  47 １五歩打    \r
  48 同　玉(14)  \r
  49 １六歩打    \r
  50 同　玉(15)  \r
  51 １七歩打    \r
  52 同　玉(16)  \r
  53 ２六銀打    \r
  54 １六玉(17)  \r
  55 １七歩打    \r
  56 同　金(18)  \r
  57 同　銀(26)  \r
  58 同　玉(16)  \r
  59 ２八金打    \r
  60 ２六玉(17)  \r
  61 ２七金(28)  \r
  62 ２五玉(26)  \r
  63 ２六金(27)  \r
  64 ２四玉(25)  \r
  65 ２五金(26)  \r
  66 ２三玉(24)  \r
  67 ２四金(25)  \r
  68 ３二玉(23)  \r
  69 ２三金(24)  \r
  70 ４一玉(32)  \r
  71 ５二銀成(53)\r
  72 詰み        \r
まで71手詰\r
`,N4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0268\r
作品名：月蝕\r
作者：伊藤正\r
発表誌：近代将棋\r
発表年月：1981年9月\r
手数：109\r
分類：煙詰\r
受賞：塚田賞、看寿賞\r
備考：11件登録\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ ・v圭vと と 金|一\r
| ・ ・ ・ ・ ・ 銀 香vと 金|二\r
| ・ ・ ・ ・ ・v圭 香 と 金|三\r
| ・ ・ ・ ・ ・ と と 桂 金|四\r
| ・ ・ ・ ・ ・vと とvと 銀|五\r
| ・ ・ ・ ・ ・ と とv桂v玉|六\r
| ・ ・ ・ ・ ・vとvとv歩vと|七\r
| ・ ・ ・ ・ ・ 銀 銀 とv歩|八\r
| ・ ・ ・ ・ ・ ・ 香 杏 歩|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １七と(28)  \r
   2 同　玉(16)  \r
   3 ２六銀(15)  \r
   4 同　と(25)  \r
   5 １八歩(19)  \r
   6 １六玉(17)  \r
   7 ２六と(36)  \r
   8 同　玉(16)  \r
   9 ３七銀(48)  \r
  10 同　と(47)  \r
  11 同　銀(38)  \r
  12 １六玉(26)  \r
  13 ２八桂打    \r
  14 同　歩成(27)\r
  15 １七歩(18)  \r
  16 同　玉(16)  \r
  17 ２八成香(29)\r
  18 １六玉(17)  \r
  19 １五金(14)  \r
  20 同　玉(16)  \r
  21 ２五と(35)  \r
  22 同　玉(15)  \r
  23 ３六と(46)  \r
  24 同　と(45)  \r
  25 同　銀(37)  \r
  26 １五玉(25)  \r
  27 １六歩打    \r
  28 同　玉(15)  \r
  29 ２七成香(28)\r
  30 １五玉(16)  \r
  31 １四金(13)  \r
  32 同　玉(15)  \r
  33 １五歩打    \r
  34 同　玉(14)  \r
  35 １六歩打    \r
  36 １四玉(15)  \r
  37 １三と(23)  \r
  38 同　と(22)  \r
  39 同　金(12)  \r
  40 同　玉(14)  \r
  41 １二桂成(24)\r
  42 １四玉(13)  \r
  43 ２四と(34)  \r
  44 同　玉(14)  \r
  45 ３五銀(36)  \r
  46 ２三玉(24)  \r
  47 ２四歩打    \r
  48 １四玉(23)  \r
  49 １五歩(16)  \r
  50 同　玉(14)  \r
  51 ２六成香(27)\r
  52 １四玉(15)  \r
  53 １三成桂(12)\r
  54 同　玉(14)  \r
  55 ２三歩成(24)\r
  56 同　玉(13)  \r
  57 ３四と(44)  \r
  58 同　成桂(43)\r
  59 同　銀(35)  \r
  60 １三玉(23)  \r
  61 １四歩打    \r
  62 同　玉(13)  \r
  63 ２五成香(26)\r
  64 １三玉(14)  \r
  65 １二金(11)  \r
  66 同　玉(13)  \r
  67 １三歩打    \r
  68 同　玉(12)  \r
  69 １四歩打    \r
  70 １二玉(13)  \r
  71 ２四桂打    \r
  72 ２一玉(12)  \r
  73 ３一香成(32)\r
  74 １一玉(21)  \r
  75 ２一成香(31)\r
  76 同　玉(11)  \r
  77 ３二香成(33)\r
  78 同　成桂(41)\r
  79 同　桂成(24)\r
  80 同　玉(21)  \r
  81 ３三銀成(34)\r
  82 ２一玉(32)  \r
  83 ２二成銀(33)\r
  84 同　玉(21)  \r
  85 ３三銀(42)  \r
  86 ２一玉(22)  \r
  87 ２二歩打    \r
  88 １一玉(21)  \r
  89 ２三桂打    \r
  90 １二玉(11)  \r
  91 １三歩成(14)\r
  92 同　玉(12)  \r
  93 ２四成香(25)\r
  94 １二玉(13)  \r
  95 １一桂成(23)\r
  96 同　玉(12)  \r
  97 ２一歩成(22)\r
  98 同　玉(11)  \r
  99 ３二銀(33)  \r
 100 １一玉(21)  \r
 101 １二歩打    \r
 102 同　玉(11)  \r
 103 ２三成香(24)\r
 104 １一玉(12)  \r
 105 ２一銀成(32)\r
 106 同　玉(11)  \r
 107 ３二香成(39)\r
 108 １一玉(21)  \r
 109 ２二成香(23)\r
 110 詰み        \r
まで109手詰\r
`,S4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0116\r
作品名：メタ新世界\r
作者：山本昭一\r
発表誌：詰将棋パラダイス\r
発表年月：1982年7月\r
手数：941\r
分類：持駒変換、連取り\r
受賞：看寿賞\r
備考：8件登録\r
解説：通过取子和打入改变持驹组合，解答过程像是在逐步换装机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v金v飛 ・ ・ ・ ・ 飛 ・|一\r
| ・ 銀vと ・ ・ 銀vと ・ ・|二\r
| 桂 ・ 桂vとv歩 ・ 角 ・ ・|三\r
| ・ ・v歩 杏v香 ・v玉v桂 ・|四\r
| ・v金 杏v歩 ・ ・vとv金 ・|五\r
| ・ ・v銀 銀 香vとvとvと ・|六\r
| ・ ・ ・ ・ ・vとvとvとvと|七\r
| 桂 ・v金 ・ ・vとvとvと ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・vと|九\r
+---------------------------+\r
先手の持駒：角　\r
先手：\r
後手：\r
手数----指手--\r
   1 １二角打    \r
   2 ４三玉(34)  \r
   3 ５四成香(64)\r
   4 同　と(63)  \r
   5 ４四香打    \r
   6 ５二玉(43)  \r
   7 ４一飛成(21)\r
   8 同　飛(71)  \r
   9 同　銀(42)  \r
  10 ６三玉(52)  \r
  11 ６一飛打    \r
  12 ６二香打    \r
  13 ５二銀(41)  \r
  14 同　玉(63)  \r
  15 ５一角成(33)\r
  16 ６三玉(52)  \r
  17 ６二馬(51)  \r
  18 同　と(72)  \r
  19 ６四香打    \r
  20 同　と(54)  \r
  21 同　成香(75)\r
  22 同　玉(63)  \r
  23 ６二飛成(61)\r
  24 ６三飛打    \r
  25 同　龍(62)  \r
  26 同　玉(64)  \r
  27 ６一飛打    \r
  28 ６二飛打    \r
  29 同　飛成(61)\r
  30 同　玉(63)  \r
  31 ６一飛打    \r
  32 ５二玉(62)  \r
  33 ４一飛成(61)\r
  34 ６三玉(52)  \r
  35 ６一龍(41)  \r
  36 ６二香打    \r
  37 ６四歩打    \r
  38 同　玉(63)  \r
  39 ６二龍(61)  \r
  40 ６三飛打    \r
  41 同　龍(62)  \r
  42 同　玉(64)  \r
  43 ６一飛打    \r
  44 ６二飛打    \r
  45 同　飛成(61)\r
  46 同　玉(63)  \r
  47 ６一飛打    \r
  48 ５二玉(62)  \r
  49 ４一飛成(61)\r
  50 ６三玉(52)  \r
  51 ６一龍(41)  \r
  52 ６二香打    \r
  53 ６四歩打    \r
  54 同　玉(63)  \r
  55 ６二龍(61)  \r
  56 ６三飛打    \r
  57 同　龍(62)  \r
  58 同　玉(64)  \r
  59 ６一飛打    \r
  60 ６二飛打    \r
  61 同　飛成(61)\r
  62 同　玉(63)  \r
  63 ６一飛打    \r
  64 ５二玉(62)  \r
  65 ４一飛成(61)\r
  66 ６三玉(52)  \r
  67 ６一龍(41)  \r
  68 ６二角打    \r
  69 ６四香打    \r
  70 同　玉(63)  \r
  71 ６二龍(61)  \r
  72 ６三飛打    \r
  73 ５五角打    \r
  74 ５四玉(64)  \r
  75 ４六角(55)  \r
  76 ４四玉(54)  \r
  77 ５五角(46)  \r
  78 ４三玉(44)  \r
  79 ４五香打    \r
  80 ４四歩打    \r
  81 同　香(45)  \r
  82 ５四玉(43)  \r
  83 ６四角(55)  \r
  84 同　玉(54)  \r
  85 ６三龍(62)  \r
  86 同　玉(64)  \r
  87 ６一飛打    \r
  88 ６二飛打    \r
  89 同　飛成(61)\r
  90 同　玉(63)  \r
  91 ６一飛打    \r
  92 ５二玉(62)  \r
  93 ４一飛成(61)\r
  94 ６三玉(52)  \r
  95 ６一龍(41)  \r
  96 ６二香打    \r
  97 ６四歩打    \r
  98 同　玉(63)  \r
  99 ６二龍(61)  \r
 100 ６三飛打    \r
 101 同　龍(62)  \r
 102 同　玉(64)  \r
 103 ６一飛打    \r
 104 ６二飛打    \r
 105 同　飛成(61)\r
 106 同　玉(63)  \r
 107 ６一飛打    \r
 108 ５二玉(62)  \r
 109 ４一飛成(61)\r
 110 ６三玉(52)  \r
 111 ６一龍(41)  \r
 112 ６二香打    \r
 113 ６四歩打    \r
 114 同　玉(63)  \r
 115 ６二龍(61)  \r
 116 ６三飛打    \r
 117 同　龍(62)  \r
 118 同　玉(64)  \r
 119 ６一飛打    \r
 120 ６二飛打    \r
 121 同　飛成(61)\r
 122 同　玉(63)  \r
 123 ６一飛打    \r
 124 ５二玉(62)  \r
 125 ４一飛成(61)\r
 126 ６三玉(52)  \r
 127 ６一龍(41)  \r
 128 ６二角打    \r
 129 ６四香打    \r
 130 同　玉(63)  \r
 131 ６二龍(61)  \r
 132 ６三飛打    \r
 133 ５五角打    \r
 134 ５四玉(64)  \r
 135 ３七角(55)  \r
 136 ４四玉(54)  \r
 137 ５五角(37)  \r
 138 ４三玉(44)  \r
 139 ４五香打    \r
 140 ４四歩打    \r
 141 同　香(45)  \r
 142 ５四玉(43)  \r
 143 ６四角(55)  \r
 144 同　玉(54)  \r
 145 ６三龍(62)  \r
 146 同　玉(64)  \r
 147 ６一飛打    \r
 148 ６二飛打    \r
 149 同　飛成(61)\r
 150 同　玉(63)  \r
 151 ６一飛打    \r
 152 ５二玉(62)  \r
 153 ４一飛成(61)\r
 154 ６三玉(52)  \r
 155 ６一龍(41)  \r
 156 ６二香打    \r
 157 ６四歩打    \r
 158 同　玉(63)  \r
 159 ６二龍(61)  \r
 160 ６三飛打    \r
 161 同　龍(62)  \r
 162 同　玉(64)  \r
 163 ６一飛打    \r
 164 ６二飛打    \r
 165 同　飛成(61)\r
 166 同　玉(63)  \r
 167 ６一飛打    \r
 168 ５二玉(62)  \r
 169 ４一飛成(61)\r
 170 ６三玉(52)  \r
 171 ６一龍(41)  \r
 172 ６二香打    \r
 173 ６四歩打    \r
 174 同　玉(63)  \r
 175 ６二龍(61)  \r
 176 ６三飛打    \r
 177 同　龍(62)  \r
 178 同　玉(64)  \r
 179 ６一飛打    \r
 180 ６二飛打    \r
 181 同　飛成(61)\r
 182 同　玉(63)  \r
 183 ６一飛打    \r
 184 ５二玉(62)  \r
 185 ４一飛成(61)\r
 186 ６三玉(52)  \r
 187 ６一龍(41)  \r
 188 ６二角打    \r
 189 ６四香打    \r
 190 同　玉(63)  \r
 191 ６二龍(61)  \r
 192 ６三飛打    \r
 193 ５五角打    \r
 194 ５四玉(64)  \r
 195 ２八角(55)  \r
 196 ４四玉(54)  \r
 197 ５五角(28)  \r
 198 ４三玉(44)  \r
 199 ４五香打    \r
 200 ４四歩打    \r
 201 同　香(45)  \r
 202 ５四玉(43)  \r
 203 ６四角(55)  \r
 204 同　玉(54)  \r
 205 ６三龍(62)  \r
 206 同　玉(64)  \r
 207 ６一飛打    \r
 208 ６二飛打    \r
 209 同　飛成(61)\r
 210 同　玉(63)  \r
 211 ６一飛打    \r
 212 ５二玉(62)  \r
 213 ４一飛成(61)\r
 214 ６三玉(52)  \r
 215 ６一龍(41)  \r
 216 ６二香打    \r
 217 ６四歩打    \r
 218 同　玉(63)  \r
 219 ６二龍(61)  \r
 220 ６三飛打    \r
 221 同　龍(62)  \r
 222 同　玉(64)  \r
 223 ６一飛打    \r
 224 ６二飛打    \r
 225 同　飛成(61)\r
 226 同　玉(63)  \r
 227 ６一飛打    \r
 228 ５二玉(62)  \r
 229 ４一飛成(61)\r
 230 ６三玉(52)  \r
 231 ６一龍(41)  \r
 232 ６二香打    \r
 233 ６四歩打    \r
 234 同　玉(63)  \r
 235 ６二龍(61)  \r
 236 ６三飛打    \r
 237 同　龍(62)  \r
 238 同　玉(64)  \r
 239 ６一飛打    \r
 240 ６二飛打    \r
 241 同　飛成(61)\r
 242 同　玉(63)  \r
 243 ６一飛打    \r
 244 ５二玉(62)  \r
 245 ４一飛成(61)\r
 246 ６三玉(52)  \r
 247 ６一龍(41)  \r
 248 ６二角打    \r
 249 ６四香打    \r
 250 同　玉(63)  \r
 251 ６二龍(61)  \r
 252 ６三飛打    \r
 253 ５五角打    \r
 254 ５四玉(64)  \r
 255 １九角(55)  \r
 256 ４四玉(54)  \r
 257 ５五角(19)  \r
 258 ４三玉(44)  \r
 259 ４五香打    \r
 260 ４四歩打    \r
 261 同　香(45)  \r
 262 ５四玉(43)  \r
 263 ６四角(55)  \r
 264 同　玉(54)  \r
 265 ６三龍(62)  \r
 266 同　玉(64)  \r
 267 ６一飛打    \r
 268 ６二飛打    \r
 269 同　飛成(61)\r
 270 同　玉(63)  \r
 271 ６一飛打    \r
 272 ５二玉(62)  \r
 273 ４一飛成(61)\r
 274 ６三玉(52)  \r
 275 ６一龍(41)  \r
 276 ６二香打    \r
 277 ６四歩打    \r
 278 同　玉(63)  \r
 279 ６二龍(61)  \r
 280 ６三飛打    \r
 281 同　龍(62)  \r
 282 同　玉(64)  \r
 283 ６一飛打    \r
 284 ６二飛打    \r
 285 同　飛成(61)\r
 286 同　玉(63)  \r
 287 ６一飛打    \r
 288 ５二玉(62)  \r
 289 ４一飛成(61)\r
 290 ６三玉(52)  \r
 291 ６一龍(41)  \r
 292 ６二香打    \r
 293 ６四歩打    \r
 294 同　玉(63)  \r
 295 ６二龍(61)  \r
 296 ６三飛打    \r
 297 同　龍(62)  \r
 298 同　玉(64)  \r
 299 ６一飛打    \r
 300 ６二飛打    \r
 301 同　飛成(61)\r
 302 同　玉(63)  \r
 303 ６一飛打    \r
 304 ５二玉(62)  \r
 305 ４一飛成(61)\r
 306 ６三玉(52)  \r
 307 ６一龍(41)  \r
 308 ６二角打    \r
 309 ６四香打    \r
 310 同　玉(63)  \r
 311 ６二龍(61)  \r
 312 ６三飛打    \r
 313 １九角打    \r
 314 ２八歩打    \r
 315 同　角(19)  \r
 316 同　と(17)  \r
 317 ６三龍(62)  \r
 318 同　玉(64)  \r
 319 ６一飛打    \r
 320 ６二飛打    \r
 321 同　飛成(61)\r
 322 同　玉(63)  \r
 323 ６一飛打    \r
 324 ５二玉(62)  \r
 325 ４一飛成(61)\r
 326 ６三玉(52)  \r
 327 ６一龍(41)  \r
 328 ６二香打    \r
 329 ６四歩打    \r
 330 同　玉(63)  \r
 331 ６二龍(61)  \r
 332 ６三飛打    \r
 333 同　龍(62)  \r
 334 同　玉(64)  \r
 335 ６一飛打    \r
 336 ６二飛打    \r
 337 同　飛成(61)\r
 338 同　玉(63)  \r
 339 ６一飛打    \r
 340 ５二玉(62)  \r
 341 ４一飛成(61)\r
 342 ６三玉(52)  \r
 343 ６一龍(41)  \r
 344 ６二角打    \r
 345 ６四香打    \r
 346 同　玉(63)  \r
 347 ６二龍(61)  \r
 348 ６三飛打    \r
 349 ５五角打    \r
 350 ５四玉(64)  \r
 351 ２八角(55)  \r
 352 ４四玉(54)  \r
 353 ５五角(28)  \r
 354 ４三玉(44)  \r
 355 ４五香打    \r
 356 ４四歩打    \r
 357 同　香(45)  \r
 358 ５四玉(43)  \r
 359 ６四角(55)  \r
 360 同　玉(54)  \r
 361 ６三龍(62)  \r
 362 同　玉(64)  \r
 363 ６一飛打    \r
 364 ６二飛打    \r
 365 同　飛成(61)\r
 366 同　玉(63)  \r
 367 ６一飛打    \r
 368 ５二玉(62)  \r
 369 ４一飛成(61)\r
 370 ６三玉(52)  \r
 371 ６一龍(41)  \r
 372 ６二香打    \r
 373 ６四歩打    \r
 374 同　玉(63)  \r
 375 ６二龍(61)  \r
 376 ６三飛打    \r
 377 同　龍(62)  \r
 378 同　玉(64)  \r
 379 ６一飛打    \r
 380 ６二飛打    \r
 381 同　飛成(61)\r
 382 同　玉(63)  \r
 383 ６一飛打    \r
 384 ５二玉(62)  \r
 385 ４一飛成(61)\r
 386 ６三玉(52)  \r
 387 ６一龍(41)  \r
 388 ６二香打    \r
 389 ６四歩打    \r
 390 同　玉(63)  \r
 391 ６二龍(61)  \r
 392 ６三飛打    \r
 393 同　龍(62)  \r
 394 同　玉(64)  \r
 395 ６一飛打    \r
 396 ６二飛打    \r
 397 同　飛成(61)\r
 398 同　玉(63)  \r
 399 ６一飛打    \r
 400 ５二玉(62)  \r
 401 ４一飛成(61)\r
 402 ６三玉(52)  \r
 403 ６一龍(41)  \r
 404 ６二角打    \r
 405 ６四香打    \r
 406 同　玉(63)  \r
 407 ６二龍(61)  \r
 408 ６三飛打    \r
 409 １九角打    \r
 410 ２八歩打    \r
 411 同　角(19)  \r
 412 同　と(27)  \r
 413 ６三龍(62)  \r
 414 同　玉(64)  \r
 415 ６一飛打    \r
 416 ６二飛打    \r
 417 同　飛成(61)\r
 418 同　玉(63)  \r
 419 ６一飛打    \r
 420 ５二玉(62)  \r
 421 ４一飛成(61)\r
 422 ６三玉(52)  \r
 423 ６一龍(41)  \r
 424 ６二香打    \r
 425 ６四歩打    \r
 426 同　玉(63)  \r
 427 ６二龍(61)  \r
 428 ６三飛打    \r
 429 同　龍(62)  \r
 430 同　玉(64)  \r
 431 ６一飛打    \r
 432 ６二飛打    \r
 433 同　飛成(61)\r
 434 同　玉(63)  \r
 435 ６一飛打    \r
 436 ５二玉(62)  \r
 437 ４一飛成(61)\r
 438 ６三玉(52)  \r
 439 ６一龍(41)  \r
 440 ６二角打    \r
 441 ６四香打    \r
 442 同　玉(63)  \r
 443 ６二龍(61)  \r
 444 ６三飛打    \r
 445 ５五角打    \r
 446 ５四玉(64)  \r
 447 ２八角(55)  \r
 448 ４四玉(54)  \r
 449 ５五角(28)  \r
 450 ４三玉(44)  \r
 451 ４五香打    \r
 452 ４四歩打    \r
 453 同　香(45)  \r
 454 ５四玉(43)  \r
 455 ６四角(55)  \r
 456 同　玉(54)  \r
 457 ６三龍(62)  \r
 458 同　玉(64)  \r
 459 ６一飛打    \r
 460 ６二飛打    \r
 461 同　飛成(61)\r
 462 同　玉(63)  \r
 463 ６一飛打    \r
 464 ５二玉(62)  \r
 465 ４一飛成(61)\r
 466 ６三玉(52)  \r
 467 ６一龍(41)  \r
 468 ６二香打    \r
 469 ６四歩打    \r
 470 同　玉(63)  \r
 471 ６二龍(61)  \r
 472 ６三飛打    \r
 473 同　龍(62)  \r
 474 同　玉(64)  \r
 475 ６一飛打    \r
 476 ６二飛打    \r
 477 同　飛成(61)\r
 478 同　玉(63)  \r
 479 ６一飛打    \r
 480 ５二玉(62)  \r
 481 ４一飛成(61)\r
 482 ６三玉(52)  \r
 483 ６一龍(41)  \r
 484 ６二香打    \r
 485 ６四歩打    \r
 486 同　玉(63)  \r
 487 ６二龍(61)  \r
 488 ６三飛打    \r
 489 同　龍(62)  \r
 490 同　玉(64)  \r
 491 ６一飛打    \r
 492 ６二飛打    \r
 493 同　飛成(61)\r
 494 同　玉(63)  \r
 495 ６一飛打    \r
 496 ５二玉(62)  \r
 497 ４一飛成(61)\r
 498 ６三玉(52)  \r
 499 ６一龍(41)  \r
 500 ６二角打    \r
 501 ６四香打    \r
 502 同　玉(63)  \r
 503 ６二龍(61)  \r
 504 ６三飛打    \r
 505 １九角打    \r
 506 ２八歩打    \r
 507 同　角(19)  \r
 508 同　と(38)  \r
 509 ６三龍(62)  \r
 510 同　玉(64)  \r
 511 ６一飛打    \r
 512 ６二飛打    \r
 513 同　飛成(61)\r
 514 同　玉(63)  \r
 515 ６一飛打    \r
 516 ５二玉(62)  \r
 517 ４一飛成(61)\r
 518 ６三玉(52)  \r
 519 ６一龍(41)  \r
 520 ６二香打    \r
 521 ６四歩打    \r
 522 同　玉(63)  \r
 523 ６二龍(61)  \r
 524 ６三飛打    \r
 525 同　龍(62)  \r
 526 同　玉(64)  \r
 527 ６一飛打    \r
 528 ６二飛打    \r
 529 同　飛成(61)\r
 530 同　玉(63)  \r
 531 ６一飛打    \r
 532 ５二玉(62)  \r
 533 ４一飛成(61)\r
 534 ６三玉(52)  \r
 535 ６一龍(41)  \r
 536 ６二角打    \r
 537 ６四香打    \r
 538 同　玉(63)  \r
 539 ６二龍(61)  \r
 540 ６三飛打    \r
 541 ５五角打    \r
 542 ５四玉(64)  \r
 543 ２八角(55)  \r
 544 ４四玉(54)  \r
 545 ５五角(28)  \r
 546 ４三玉(44)  \r
 547 ４五香打    \r
 548 ４四歩打    \r
 549 同　香(45)  \r
 550 ５四玉(43)  \r
 551 ６四角(55)  \r
 552 同　玉(54)  \r
 553 ６三龍(62)  \r
 554 同　玉(64)  \r
 555 ６一飛打    \r
 556 ６二飛打    \r
 557 同　飛成(61)\r
 558 同　玉(63)  \r
 559 ６一飛打    \r
 560 ５二玉(62)  \r
 561 ４一飛成(61)\r
 562 ６三玉(52)  \r
 563 ６一龍(41)  \r
 564 ６二香打    \r
 565 ６四歩打    \r
 566 同　玉(63)  \r
 567 ６二龍(61)  \r
 568 ６三飛打    \r
 569 同　龍(62)  \r
 570 同　玉(64)  \r
 571 ６一飛打    \r
 572 ６二飛打    \r
 573 同　飛成(61)\r
 574 同　玉(63)  \r
 575 ６一飛打    \r
 576 ５二玉(62)  \r
 577 ４一飛成(61)\r
 578 ６三玉(52)  \r
 579 ６一龍(41)  \r
 580 ６二香打    \r
 581 ６四歩打    \r
 582 同　玉(63)  \r
 583 ６二龍(61)  \r
 584 ６三飛打    \r
 585 同　龍(62)  \r
 586 同　玉(64)  \r
 587 ６一飛打    \r
 588 ６二飛打    \r
 589 同　飛成(61)\r
 590 同　玉(63)  \r
 591 ６一飛打    \r
 592 ５二玉(62)  \r
 593 ４一飛成(61)\r
 594 ６三玉(52)  \r
 595 ６一龍(41)  \r
 596 ６二角打    \r
 597 ６四香打    \r
 598 同　玉(63)  \r
 599 ６二龍(61)  \r
 600 ６三飛打    \r
 601 ２八角打    \r
 602 ３七歩打    \r
 603 同　角(28)  \r
 604 同　と(26)  \r
 605 ６三龍(62)  \r
 606 同　玉(64)  \r
 607 ６一飛打    \r
 608 ６二飛打    \r
 609 同　飛成(61)\r
 610 同　玉(63)  \r
 611 ６一飛打    \r
 612 ５二玉(62)  \r
 613 ４一飛成(61)\r
 614 ６三玉(52)  \r
 615 ６一龍(41)  \r
 616 ６二香打    \r
 617 ６四歩打    \r
 618 同　玉(63)  \r
 619 ６二龍(61)  \r
 620 ６三飛打    \r
 621 同　龍(62)  \r
 622 同　玉(64)  \r
 623 ６一飛打    \r
 624 ６二飛打    \r
 625 同　飛成(61)\r
 626 同　玉(63)  \r
 627 ６一飛打    \r
 628 ５二玉(62)  \r
 629 ４一飛成(61)\r
 630 ６三玉(52)  \r
 631 ６一龍(41)  \r
 632 ６二角打    \r
 633 ６四香打    \r
 634 同　玉(63)  \r
 635 ６二龍(61)  \r
 636 ６三飛打    \r
 637 ５五角打    \r
 638 ５四玉(64)  \r
 639 ３七角(55)  \r
 640 ４四玉(54)  \r
 641 ５五角(37)  \r
 642 ４三玉(44)  \r
 643 ４五香打    \r
 644 ４四歩打    \r
 645 同　香(45)  \r
 646 ５四玉(43)  \r
 647 ６四角(55)  \r
 648 同　玉(54)  \r
 649 ６三龍(62)  \r
 650 同　玉(64)  \r
 651 ６一飛打    \r
 652 ６二飛打    \r
 653 同　飛成(61)\r
 654 同　玉(63)  \r
 655 ６一飛打    \r
 656 ５二玉(62)  \r
 657 ４一飛成(61)\r
 658 ６三玉(52)  \r
 659 ６一龍(41)  \r
 660 ６二香打    \r
 661 ６四歩打    \r
 662 同　玉(63)  \r
 663 ６二龍(61)  \r
 664 ６三飛打    \r
 665 同　龍(62)  \r
 666 同　玉(64)  \r
 667 ６一飛打    \r
 668 ６二飛打    \r
 669 同　飛成(61)\r
 670 同　玉(63)  \r
 671 ６一飛打    \r
 672 ５二玉(62)  \r
 673 ４一飛成(61)\r
 674 ６三玉(52)  \r
 675 ６一龍(41)  \r
 676 ６二香打    \r
 677 ６四歩打    \r
 678 同　玉(63)  \r
 679 ６二龍(61)  \r
 680 ６三飛打    \r
 681 同　龍(62)  \r
 682 同　玉(64)  \r
 683 ６一飛打    \r
 684 ６二飛打    \r
 685 同　飛成(61)\r
 686 同　玉(63)  \r
 687 ６一飛打    \r
 688 ５二玉(62)  \r
 689 ４一飛成(61)\r
 690 ６三玉(52)  \r
 691 ６一龍(41)  \r
 692 ６二角打    \r
 693 ６四香打    \r
 694 同　玉(63)  \r
 695 ６二龍(61)  \r
 696 ６三飛打    \r
 697 ２八角打    \r
 698 ３七歩打    \r
 699 同　角(28)  \r
 700 同　と(36)  \r
 701 ６三龍(62)  \r
 702 同　玉(64)  \r
 703 ６一飛打    \r
 704 ６二飛打    \r
 705 同　飛成(61)\r
 706 同　玉(63)  \r
 707 ６一飛打    \r
 708 ５二玉(62)  \r
 709 ４一飛成(61)\r
 710 ６三玉(52)  \r
 711 ６一龍(41)  \r
 712 ６二香打    \r
 713 ６四歩打    \r
 714 同　玉(63)  \r
 715 ６二龍(61)  \r
 716 ６三飛打    \r
 717 同　龍(62)  \r
 718 同　玉(64)  \r
 719 ６一飛打    \r
 720 ６二飛打    \r
 721 同　飛成(61)\r
 722 同　玉(63)  \r
 723 ６一飛打    \r
 724 ５二玉(62)  \r
 725 ４一飛成(61)\r
 726 ６三玉(52)  \r
 727 ６一龍(41)  \r
 728 ６二角打    \r
 729 ６四香打    \r
 730 同　玉(63)  \r
 731 ６二龍(61)  \r
 732 ６三飛打    \r
 733 ５五角打    \r
 734 ５四玉(64)  \r
 735 ３七角(55)  \r
 736 ４四玉(54)  \r
 737 ５五角(37)  \r
 738 ４三玉(44)  \r
 739 ４五香打    \r
 740 ４四歩打    \r
 741 同　香(45)  \r
 742 ５四玉(43)  \r
 743 ６四角(55)  \r
 744 同　玉(54)  \r
 745 ６三龍(62)  \r
 746 同　玉(64)  \r
 747 ６一飛打    \r
 748 ６二飛打    \r
 749 同　飛成(61)\r
 750 同　玉(63)  \r
 751 ６一飛打    \r
 752 ５二玉(62)  \r
 753 ４一飛成(61)\r
 754 ６三玉(52)  \r
 755 ６一龍(41)  \r
 756 ６二香打    \r
 757 ６四歩打    \r
 758 同　玉(63)  \r
 759 ６二龍(61)  \r
 760 ６三飛打    \r
 761 同　龍(62)  \r
 762 同　玉(64)  \r
 763 ６一飛打    \r
 764 ６二飛打    \r
 765 同　飛成(61)\r
 766 同　玉(63)  \r
 767 ６一飛打    \r
 768 ５二玉(62)  \r
 769 ４一飛成(61)\r
 770 ６三玉(52)  \r
 771 ６一龍(41)  \r
 772 ６二香打    \r
 773 ６四歩打    \r
 774 同　玉(63)  \r
 775 ６二龍(61)  \r
 776 ６三飛打    \r
 777 同　龍(62)  \r
 778 同　玉(64)  \r
 779 ６一飛打    \r
 780 ６二飛打    \r
 781 同　飛成(61)\r
 782 同　玉(63)  \r
 783 ６一飛打    \r
 784 ５二玉(62)  \r
 785 ４一飛成(61)\r
 786 ６三玉(52)  \r
 787 ６一龍(41)  \r
 788 ６二角打    \r
 789 ６四香打    \r
 790 同　玉(63)  \r
 791 ６二龍(61)  \r
 792 ６三飛打    \r
 793 ２八角打    \r
 794 ３七歩打    \r
 795 同　角(28)  \r
 796 同　と(47)  \r
 797 ６三龍(62)  \r
 798 同　玉(64)  \r
 799 ６一飛打    \r
 800 ６二飛打    \r
 801 同　飛成(61)\r
 802 同　玉(63)  \r
 803 ６一飛打    \r
 804 ５二玉(62)  \r
 805 ４一飛成(61)\r
 806 ６三玉(52)  \r
 807 ６一龍(41)  \r
 808 ６二香打    \r
 809 ６四歩打    \r
 810 同　玉(63)  \r
 811 ６二龍(61)  \r
 812 ６三飛打    \r
 813 同　龍(62)  \r
 814 同　玉(64)  \r
 815 ６一飛打    \r
 816 ６二飛打    \r
 817 同　飛成(61)\r
 818 同　玉(63)  \r
 819 ６一飛打    \r
 820 ５二玉(62)  \r
 821 ４一飛成(61)\r
 822 ６三玉(52)  \r
 823 ６一龍(41)  \r
 824 ６二角打    \r
 825 ６四香打    \r
 826 同　玉(63)  \r
 827 ６二龍(61)  \r
 828 ６三飛打    \r
 829 ５五角打    \r
 830 ５四玉(64)  \r
 831 ３七角(55)  \r
 832 ４四玉(54)  \r
 833 ５五角(37)  \r
 834 ４三玉(44)  \r
 835 ４五香打    \r
 836 ４四歩打    \r
 837 同　香(45)  \r
 838 ５四玉(43)  \r
 839 ６四角(55)  \r
 840 同　玉(54)  \r
 841 ６三龍(62)  \r
 842 同　玉(64)  \r
 843 ６一飛打    \r
 844 ６二飛打    \r
 845 同　飛成(61)\r
 846 同　玉(63)  \r
 847 ６一飛打    \r
 848 ５二玉(62)  \r
 849 ４一飛成(61)\r
 850 ６三玉(52)  \r
 851 ６一龍(41)  \r
 852 ６二香打    \r
 853 ６四歩打    \r
 854 同　玉(63)  \r
 855 ６二龍(61)  \r
 856 ６三飛打    \r
 857 同　龍(62)  \r
 858 同　玉(64)  \r
 859 ６一飛打    \r
 860 ６二飛打    \r
 861 同　飛成(61)\r
 862 同　玉(63)  \r
 863 ６一飛打    \r
 864 ５二玉(62)  \r
 865 ４一飛成(61)\r
 866 ６三玉(52)  \r
 867 ６一龍(41)  \r
 868 ６二香打    \r
 869 ６四歩打    \r
 870 同　玉(63)  \r
 871 ６二龍(61)  \r
 872 ６三飛打    \r
 873 同　龍(62)  \r
 874 同　玉(64)  \r
 875 ６一飛打    \r
 876 ６二飛打    \r
 877 同　飛成(61)\r
 878 同　玉(63)  \r
 879 ６一飛打    \r
 880 ５二玉(62)  \r
 881 ４一飛成(61)\r
 882 ６三玉(52)  \r
 883 ６一龍(41)  \r
 884 ６二角打    \r
 885 ６四香打    \r
 886 同　玉(63)  \r
 887 ６二龍(61)  \r
 888 ６三飛打    \r
 889 ３七角打    \r
 890 ４六歩打    \r
 891 同　角(37)  \r
 892 同　と(35)  \r
 893 ６三龍(62)  \r
 894 同　玉(64)  \r
 895 ６一飛打    \r
 896 ６二飛打    \r
 897 同　飛成(61)\r
 898 同　玉(63)  \r
 899 ６一飛打    \r
 900 ５二玉(62)  \r
 901 ４一飛成(61)\r
 902 ６三玉(52)  \r
 903 ６一龍(41)  \r
 904 ６二香打    \r
 905 ６四歩打    \r
 906 同　玉(63)  \r
 907 ６二龍(61)  \r
 908 ６三飛打    \r
 909 同　龍(62)  \r
 910 同　玉(64)  \r
 911 ６一飛打    \r
 912 ６二角打    \r
 913 ６四香打    \r
 914 ７二玉(63)  \r
 915 ８一飛成(61)\r
 916 ８三玉(72)  \r
 917 ７一銀(82)  \r
 918 ９四玉(83)  \r
 919 ９五香打    \r
 920 同　玉(94)  \r
 921 ８六金打    \r
 922 ９四玉(95)  \r
 923 ８五金(86)  \r
 924 同　銀(76)  \r
 925 ８四金打    \r
 926 ９五玉(94)  \r
 927 ８五金(84)  \r
 928 ９六玉(95)  \r
 929 ９五金(85)  \r
 930 ９七玉(96)  \r
 931 ８六龍(81)  \r
 932 ９八玉(97)  \r
 933 ８七銀打    \r
 934 ８九玉(98)  \r
 935 ７八銀(87)  \r
 936 同　玉(89)  \r
 937 ７七龍(86)  \r
 938 ６九玉(78)  \r
 939 ６八金打    \r
 940 ５九玉(69)  \r
 941 ７九龍(77)  \r
 942 詰み        \r
まで941手詰\r
`,w4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0122\r
作品名：変奏曲\r
作者：柳田明\r
発表誌：詰将棋パラダイス\r
発表年月：1984年4月\r
手数：189\r
分類：馬鋸\r
備考：9件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 馬 ・ ・ ・v銀v歩 ・ 圭 ・|一\r
| ・ 銀 ・ ・v歩v馬 香 歩 ・|二\r
| ・ 桂 ・ ・ 桂 ・ 銀 ・v金|三\r
| ・ ・ ・ ・ ・v香 ・ ・ 銀|四\r
| ・ ・ と 香 ・vと 歩v香v玉|五\r
| ・ ・ ・ 桂 飛 ・vとvとvと|六\r
| ・ ・ ・ ・ ・ ・ 金 金 ・|七\r
| ・ ・ ・ ・ ・ ・v歩 飛 歩|八\r
| ・ ・ ・ ・ ・ ・ ・vと ・|九\r
+---------------------------+\r
先手の持駒：金　歩六　\r
先手：\r
後手：\r
手数----指手--\r
   1 １六金(27)  \r
   2 １四玉(15)  \r
   3 ２五金(16)  \r
   4 同　と(26)  \r
   5 １六香打    \r
   6 １五金打    \r
   7 同　香(16)  \r
   8 同　玉(14)  \r
   9 １六金打    \r
  10 同　玉(15)  \r
  11 ２六金打    \r
  12 同　と(25)  \r
  13 同　金(37)  \r
  14 同　と(36)  \r
  15 同　飛(56)  \r
  16 １五玉(16)  \r
  17 ２五飛(26)  \r
  18 １四玉(15)  \r
  19 ２四飛(25)  \r
  20 １五玉(14)  \r
  21 ２五飛(28)  \r
  22 １六玉(15)  \r
  23 １七歩(18)  \r
  24 同　玉(16)  \r
  25 ２七飛(25)  \r
  26 １八玉(17)  \r
  27 １九歩打    \r
  28 同　玉(18)  \r
  29 ２九飛(27)  \r
  30 １八玉(19)  \r
  31 ２八飛(24)  \r
  32 １七玉(18)  \r
  33 １八歩打    \r
  34 １六玉(17)  \r
  35 ２六飛(28)  \r
  36 １五玉(16)  \r
  37 ２五飛(26)  \r
  38 １四玉(15)  \r
  39 ２四飛(25)  \r
  40 １五玉(14)  \r
  41 ２五飛(29)  \r
  42 １六玉(15)  \r
  43 １七歩(18)  \r
  44 同　玉(16)  \r
  45 ２七飛(25)  \r
  46 １八玉(17)  \r
  47 １九歩打    \r
  48 同　玉(18)  \r
  49 ７一銀(82)  \r
  50 ４六と(45)  \r
  51 ２九飛(27)  \r
  52 １八玉(19)  \r
  53 ８一馬(91)  \r
  54 ４五と(46)  \r
  55 ２八飛(24)  \r
  56 １七玉(18)  \r
  57 １八歩打    \r
  58 １六玉(17)  \r
  59 ２六飛(28)  \r
  60 １五玉(16)  \r
  61 ２五飛(26)  \r
  62 １四玉(15)  \r
  63 ２四飛(25)  \r
  64 １五玉(14)  \r
  65 ２五飛(29)  \r
  66 １六玉(15)  \r
  67 １七歩(18)  \r
  68 同　玉(16)  \r
  69 ２七飛(25)  \r
  70 １八玉(17)  \r
  71 １九歩打    \r
  72 同　玉(18)  \r
  73 ８二馬(81)  \r
  74 ４六と(45)  \r
  75 ２九飛(27)  \r
  76 １八玉(19)  \r
  77 ７二馬(82)  \r
  78 ４五と(46)  \r
  79 ２八飛(24)  \r
  80 １七玉(18)  \r
  81 １八歩打    \r
  82 １六玉(17)  \r
  83 ２六飛(28)  \r
  84 １五玉(16)  \r
  85 ２五飛(26)  \r
  86 １四玉(15)  \r
  87 ２四飛(25)  \r
  88 １五玉(14)  \r
  89 ２五飛(29)  \r
  90 １六玉(15)  \r
  91 １七歩(18)  \r
  92 同　玉(16)  \r
  93 ２七飛(25)  \r
  94 １八玉(17)  \r
  95 １九歩打    \r
  96 同　玉(18)  \r
  97 ７三馬(72)  \r
  98 ４六と(45)  \r
  99 ２九飛(27)  \r
 100 １八玉(19)  \r
 101 ６三馬(73)  \r
 102 ４五と(46)  \r
 103 ２八飛(24)  \r
 104 １七玉(18)  \r
 105 １八歩打    \r
 106 １六玉(17)  \r
 107 ２六飛(28)  \r
 108 １五玉(16)  \r
 109 ２五飛(26)  \r
 110 １四玉(15)  \r
 111 ２四飛(25)  \r
 112 １五玉(14)  \r
 113 ２五飛(29)  \r
 114 １六玉(15)  \r
 115 １七歩(18)  \r
 116 同　玉(16)  \r
 117 ２七飛(25)  \r
 118 １八玉(17)  \r
 119 １九歩打    \r
 120 同　玉(18)  \r
 121 ６四馬(63)  \r
 122 ４六と(45)  \r
 123 ２九飛(27)  \r
 124 １八玉(19)  \r
 125 ５四馬(64)  \r
 126 ４五と(46)  \r
 127 ２八飛(24)  \r
 128 １七玉(18)  \r
 129 １八歩打    \r
 130 １六玉(17)  \r
 131 ２六飛(28)  \r
 132 １五玉(16)  \r
 133 ２五飛(26)  \r
 134 １四玉(15)  \r
 135 ２三飛成(25)\r
 136 同　金(13)  \r
 137 同　飛成(29)\r
 138 同　玉(14)  \r
 139 ２四金打    \r
 140 １二玉(23)  \r
 141 １一成桂(21)\r
 142 同　玉(12)  \r
 143 ２一歩成(22)\r
 144 同　玉(11)  \r
 145 ３一香成(32)\r
 146 同　玉(21)  \r
 147 ４二銀成(33)\r
 148 同　歩(41)  \r
 149 ４一桂成(53)\r
 150 ２二玉(31)  \r
 151 ３一角打    \r
 152 １一玉(22)  \r
 153 ４四馬(54)  \r
 154 同　と(45)  \r
 155 １三香打    \r
 156 ２一玉(11)  \r
 157 １二香成(13)\r
 158 ３二玉(21)  \r
 159 ４二成桂(41)\r
 160 同　銀(51)  \r
 161 ２二成香(12)\r
 162 ４一玉(32)  \r
 163 ４二角成(31)\r
 164 同　玉(41)  \r
 165 ３三銀打    \r
 166 ４三玉(42)  \r
 167 ３二銀(33)  \r
 168 ４二玉(43)  \r
 169 ４三歩打    \r
 170 同　と(44)  \r
 171 同　銀成(32)\r
 172 同　玉(42)  \r
 173 ３四金(24)  \r
 174 ４二玉(43)  \r
 175 ５四桂(66)  \r
 176 ５一玉(42)  \r
 177 ６二銀成(71)\r
 178 ４一玉(51)  \r
 179 ５二成銀(62)\r
 180 同　玉(41)  \r
 181 ５三歩打    \r
 182 同　玉(52)  \r
 183 ６四と(75)  \r
 184 ５二玉(53)  \r
 185 ６三と(64)  \r
 186 ４一玉(52)  \r
 187 ４二歩打    \r
 188 ５一玉(41)  \r
 189 ６二と(63)  \r
 190 詰み        \r
まで189手詰\r
`,C4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0126\r
作者：橋本孝治\r
発表誌：詰将棋パラダイス\r
発表年月：1985年5月\r
手数：163\r
分類：煙詰\r
受賞：半期賞\r
備考：7件登録\r
解説：属于烟詰方向，盘面棋子会在强制手顺中逐步减少；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v龍 銀 銀 ・ ・ ・ と ・|一\r
| と と ・ ・v桂 とv歩v香 ・|二\r
| と と ・ ・ ・v全 ・ ・ ・|三\r
| と と ・ ・ ・ ・v馬 香 ・|四\r
| と と ・ ・ ・ と ・ 金 ・|五\r
| と ・ ・ ・ 龍 と 金 金 ・|六\r
| ・ 圭 ・ ・ ・ と ・ 金v全|七\r
| ・ ・ ・ ・ 圭 と ・ 歩 歩|八\r
| ・v玉 ・ 圭 香 ・ 香 ・v馬|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８八成桂(87)\r
   2 ９九玉(89)  \r
   3 ８九成桂(88)\r
   4 同　玉(99)  \r
   5 ８六龍(56)  \r
   6 ９九玉(89)  \r
   7 ９七龍(86)  \r
   8 ８九玉(99)  \r
   9 ７九成桂(69)\r
  10 同　玉(89)  \r
  11 ９九龍(97)  \r
  12 ７八玉(79)  \r
  13 ６八成桂(58)\r
  14 同　玉(78)  \r
  15 ８八龍(99)  \r
  16 ６九玉(68)  \r
  17 ８九龍(88)  \r
  18 ６八玉(69)  \r
  19 ５八と(48)  \r
  20 ７七玉(68)  \r
  21 ７九龍(89)  \r
  22 ８七玉(77)  \r
  23 ８六と(85)  \r
  24 ９八玉(87)  \r
  25 ９七と(96)  \r
  26 同　玉(98)  \r
  27 ９九龍(79)  \r
  28 ８六玉(97)  \r
  29 ８八龍(99)  \r
  30 ７六玉(86)  \r
  31 ６七と(58)  \r
  32 同　玉(76)  \r
  33 ５七と(47)  \r
  34 ７六玉(67)  \r
  35 ７八龍(88)  \r
  36 ８六玉(76)  \r
  37 ８五と(84)  \r
  38 ９七玉(86)  \r
  39 ９六と(95)  \r
  40 同　玉(97)  \r
  41 ９八龍(78)  \r
  42 ８五玉(96)  \r
  43 ８七龍(98)  \r
  44 ７五玉(85)  \r
  45 ６六と(57)  \r
  46 同　玉(75)  \r
  47 ５六と(46)  \r
  48 ７五玉(66)  \r
  49 ７七龍(87)  \r
  50 ８五玉(75)  \r
  51 ８四と(83)  \r
  52 ９六玉(85)  \r
  53 ９五と(94)  \r
  54 同　玉(96)  \r
  55 ９七龍(77)  \r
  56 ８四玉(95)  \r
  57 ８六龍(97)  \r
  58 ７四玉(84)  \r
  59 ６五と(56)  \r
  60 同　玉(74)  \r
  61 ５五と(45)  \r
  62 ７四玉(65)  \r
  63 ７六龍(86)  \r
  64 ８四玉(74)  \r
  65 ８三と(82)  \r
  66 ９五玉(84)  \r
  67 ９四と(93)  \r
  68 同　玉(95)  \r
  69 ９六龍(76)  \r
  70 ８三玉(94)  \r
  71 ８五龍(96)  \r
  72 ９二玉(83)  \r
  73 ８一龍(85)  \r
  74 同　玉(92)  \r
  75 ８三飛打    \r
  76 ７一玉(81)  \r
  77 ７三飛成(83)\r
  78 ６一玉(71)  \r
  79 ５二と(42)  \r
  80 同　玉(61)  \r
  81 ４四と(55)  \r
  82 ６一玉(52)  \r
  83 ５二香成(59)\r
  84 同　玉(61)  \r
  85 ４三と(44)  \r
  86 同　馬(34)  \r
  87 ６四桂打    \r
  88 ５一玉(52)  \r
  89 ５二銀打    \r
  90 同　馬(43)  \r
  91 同　桂成(64)\r
  92 同　玉(51)  \r
  93 ３四角打    \r
  94 ４一玉(52)  \r
  95 ４三龍(73)  \r
  96 ４二飛打    \r
  97 同　龍(43)  \r
  98 同　玉(41)  \r
  99 ５二飛打    \r
 100 ４一玉(42)  \r
 101 ３一と(21)  \r
 102 同　玉(41)  \r
 103 ２二香成(24)\r
 104 同　玉(31)  \r
 105 ２三角成(34)\r
 106 同　玉(22)  \r
 107 ２四香打    \r
 108 １三玉(23)  \r
 109 １四金(25)  \r
 110 同　玉(13)  \r
 111 ２五金(36)  \r
 112 １三玉(14)  \r
 113 ２三香成(24)\r
 114 同　玉(13)  \r
 115 ３二飛成(52)\r
 116 １三玉(23)  \r
 117 ２四金(25)  \r
 118 同　玉(13)  \r
 119 ３三龍(32)  \r
 120 １四玉(24)  \r
 121 ２五金(26)  \r
 122 同　玉(14)  \r
 123 ３四龍(33)  \r
 124 １五玉(25)  \r
 125 ２六金(27)  \r
 126 同　玉(15)  \r
 127 ３五龍(34)  \r
 128 １六玉(26)  \r
 129 １七歩(18)  \r
 130 同　玉(16)  \r
 131 ３七龍(35)  \r
 132 １八玉(17)  \r
 133 ２七銀打    \r
 134 １七玉(18)  \r
 135 ２六龍(37)  \r
 136 ２八玉(17)  \r
 137 ３七龍(26)  \r
 138 １七玉(28)  \r
 139 １八歩打    \r
 140 同　馬(19)  \r
 141 同　銀(27)  \r
 142 同　玉(17)  \r
 143 ６三角打    \r
 144 １九玉(18)  \r
 145 １七龍(37)  \r
 146 ２九玉(19)  \r
 147 １八角成(63)\r
 148 ３九玉(29)  \r
 149 ２八龍(17)  \r
 150 ４九玉(39)  \r
 151 ２七馬(18)  \r
 152 ５九玉(49)  \r
 153 ３七馬(27)  \r
 154 ６九玉(59)  \r
 155 ４七馬(37)  \r
 156 ７九玉(69)  \r
 157 ５七馬(47)  \r
 158 ８九玉(79)  \r
 159 ６七馬(57)  \r
 160 ９九玉(89)  \r
 161 ７七馬(67)  \r
 162 ８九玉(99)  \r
 163 ８八龍(28)  \r
 164 詰み        \r
まで163手詰\r
`,P4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0129\r
作品名：ミクロコスモス\r
作者：橋本孝治\r
発表誌：詰将棋パラダイス\r
発表年月：1986年6月\r
手数：1519\r
分類：知恵の輪、持駒変換、馬鋸\r
受賞：看寿賞\r
備考：8件登録、改良図（1525手詰）あり\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v金 ・ ・ ・ と と と と 杏|一\r
| ・v歩 ・ ・ ・ ・ ・ ・ ・|二\r
| 龍vと ・v玉v歩v歩 ・v歩v香|三\r
| ・ 桂 桂v銀v金vと ・ ・ 龍|四\r
|v馬v圭 香 と ・vと ・ ・ ・|五\r
| ・ 歩 ・ ・ ・v銀v銀 歩 ・|六\r
| ・ ・ 歩 ・ とv銀 ・ ・ 桂|七\r
| ・ ・ ・ ・ と ・ 歩 ・ 香|八\r
| 馬 ・ ・ ・ ・ ・ 金 ・v金|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ６二桂成(74)\r
   2 同　玉(63)  \r
   3 ７二桂成(84)\r
   4 ６三玉(62)  \r
   5 ７四と(65)  \r
   6 ７二玉(63)  \r
   7 ８三と(74)  \r
   8 ６三玉(72)  \r
   9 ８四と(83)  \r
  10 ８三桂打    \r
  11 ７四と(84)  \r
  12 ６二玉(63)  \r
  13 ６三歩打    \r
  14 ７二玉(62)  \r
  15 ８三と(74)  \r
  16 ６三玉(72)  \r
  17 ８四と(83)  \r
  18 ８三桂打    \r
  19 ７四と(84)  \r
  20 ６二玉(63)  \r
  21 ６一と(51)  \r
  22 ５二玉(62)  \r
  23 ５一と(41)  \r
  24 ４二玉(52)  \r
  25 ４一と(31)  \r
  26 ３二玉(42)  \r
  27 ３一と(21)  \r
  28 ２二玉(32)  \r
  29 ２一成香(11)\r
  30 １二玉(22)  \r
  31 ２四桂打    \r
  32 同　歩(23)  \r
  33 １一成香(21)\r
  34 ２二玉(12)  \r
  35 ２四龍(14)  \r
  36 ２三歩打    \r
  37 ２一と(31)  \r
  38 ３二玉(22)  \r
  39 ３一と(41)  \r
  40 ４二玉(32)  \r
  41 ４一と(51)  \r
  42 ５二玉(42)  \r
  43 ５一と(61)  \r
  44 ６二玉(52)  \r
  45 ６三歩打    \r
  46 ７二玉(62)  \r
  47 ８三と(74)  \r
  48 ６三玉(72)  \r
  49 ８四と(83)  \r
  50 ８三桂打    \r
  51 ７四と(84)  \r
  52 ６二玉(63)  \r
  53 ６一と(51)  \r
  54 ５二玉(62)  \r
  55 ５一と(41)  \r
  56 ４二玉(52)  \r
  57 ３四桂打    \r
  58 同　と(44)  \r
  59 ４一と(31)  \r
  60 ３二玉(42)  \r
  61 ３四龍(24)  \r
  62 ３三歩打    \r
  63 ３一と(41)  \r
  64 ４二玉(32)  \r
  65 ４一と(51)  \r
  66 ５二玉(42)  \r
  67 ５一と(61)  \r
  68 ６二玉(52)  \r
  69 ６三歩打    \r
  70 ７二玉(62)  \r
  71 ８三と(74)  \r
  72 ６三玉(72)  \r
  73 ８四と(83)  \r
  74 ８三桂打    \r
  75 ７四と(84)  \r
  76 ６二玉(63)  \r
  77 ６一と(51)  \r
  78 ５二玉(62)  \r
  79 ５一と(41)  \r
  80 ４二玉(52)  \r
  81 ４一と(31)  \r
  82 ３二玉(42)  \r
  83 ２四桂打    \r
  84 同　歩(23)  \r
  85 ３一と(21)  \r
  86 ２二玉(32)  \r
  87 ２四龍(34)  \r
  88 ２三歩打    \r
  89 ２一と(31)  \r
  90 ３二玉(22)  \r
  91 ３一と(41)  \r
  92 ４二玉(32)  \r
  93 ４一と(51)  \r
  94 ５二玉(42)  \r
  95 ５一と(61)  \r
  96 ６二玉(52)  \r
  97 ６三歩打    \r
  98 ７二玉(62)  \r
  99 ８三と(74)  \r
 100 ６三玉(72)  \r
 101 ８四と(83)  \r
 102 ８三桂打    \r
 103 ７四と(84)  \r
 104 ６二玉(63)  \r
 105 ６一と(51)  \r
 106 ５二玉(62)  \r
 107 ５一と(41)  \r
 108 ４二玉(52)  \r
 109 ４一と(31)  \r
 110 ３二玉(42)  \r
 111 ３一と(21)  \r
 112 ２二玉(32)  \r
 113 １四桂打    \r
 114 同　香(13)  \r
 115 ２一成香(11)\r
 116 １二玉(22)  \r
 117 １四龍(24)  \r
 118 １三歩打    \r
 119 １一成香(21)\r
 120 ２二玉(12)  \r
 121 ２一と(31)  \r
 122 ３二玉(22)  \r
 123 ３一と(41)  \r
 124 ４二玉(32)  \r
 125 ４一と(51)  \r
 126 ５二玉(42)  \r
 127 ５一と(61)  \r
 128 ６二玉(52)  \r
 129 ６三香打    \r
 130 ７二玉(62)  \r
 131 ８三と(74)  \r
 132 ６三玉(72)  \r
 133 ８四と(83)  \r
 134 ８三桂打    \r
 135 ７四と(84)  \r
 136 ６二玉(63)  \r
 137 ６一と(51)  \r
 138 ５二玉(62)  \r
 139 ５一と(41)  \r
 140 ４二玉(52)  \r
 141 ４一と(31)  \r
 142 ３二玉(42)  \r
 143 ２四桂打    \r
 144 同　歩(23)  \r
 145 ３一と(21)  \r
 146 ２二玉(32)  \r
 147 ２四龍(14)  \r
 148 ２三香打    \r
 149 ２一と(31)  \r
 150 ３二玉(22)  \r
 151 ３一と(41)  \r
 152 ４二玉(32)  \r
 153 ４一と(51)  \r
 154 ５二玉(42)  \r
 155 ５一と(61)  \r
 156 ６二玉(52)  \r
 157 ６三歩打    \r
 158 ７二玉(62)  \r
 159 ８三と(74)  \r
 160 ６三玉(72)  \r
 161 ８四と(83)  \r
 162 ８三桂打    \r
 163 ７四と(84)  \r
 164 ６二玉(63)  \r
 165 ６一と(51)  \r
 166 ５二玉(62)  \r
 167 ５一と(41)  \r
 168 ４二玉(52)  \r
 169 ３四桂打    \r
 170 同　歩(33)  \r
 171 ４一と(31)  \r
 172 ３二玉(42)  \r
 173 ３四龍(24)  \r
 174 ３三歩打    \r
 175 ３一と(41)  \r
 176 ４二玉(32)  \r
 177 ４一と(51)  \r
 178 ５二玉(42)  \r
 179 ５一と(61)  \r
 180 ６二玉(52)  \r
 181 ６三歩打    \r
 182 ７二玉(62)  \r
 183 ８三と(74)  \r
 184 ６三玉(72)  \r
 185 ８四と(83)  \r
 186 ８三桂打    \r
 187 ７四と(84)  \r
 188 ６二玉(63)  \r
 189 ６一と(51)  \r
 190 ５二玉(62)  \r
 191 ５一と(41)  \r
 192 ４二玉(52)  \r
 193 ４一と(31)  \r
 194 ３二玉(42)  \r
 195 ２四桂打    \r
 196 同　香(23)  \r
 197 ３一と(21)  \r
 198 ２二玉(32)  \r
 199 ２四龍(34)  \r
 200 ２三歩打    \r
 201 ２一と(31)  \r
 202 ３二玉(22)  \r
 203 ３一と(41)  \r
 204 ４二玉(32)  \r
 205 ４一と(51)  \r
 206 ５二玉(42)  \r
 207 ５一と(61)  \r
 208 ６二玉(52)  \r
 209 ６三香打    \r
 210 ７二玉(62)  \r
 211 ８三と(74)  \r
 212 ６三玉(72)  \r
 213 ８四と(83)  \r
 214 ８三桂打    \r
 215 ７四と(84)  \r
 216 ６二玉(63)  \r
 217 ６一と(51)  \r
 218 ５二玉(62)  \r
 219 ５一と(41)  \r
 220 ４二玉(52)  \r
 221 ３四桂打    \r
 222 同　歩(33)  \r
 223 ４一と(31)  \r
 224 ３二玉(42)  \r
 225 ３四龍(24)  \r
 226 ３三香打    \r
 227 ３一と(41)  \r
 228 ４二玉(32)  \r
 229 ４一と(51)  \r
 230 ５二玉(42)  \r
 231 ５一と(61)  \r
 232 ６二玉(52)  \r
 233 ６三歩打    \r
 234 ７二玉(62)  \r
 235 ８三と(74)  \r
 236 ６三玉(72)  \r
 237 ８四と(83)  \r
 238 ８三桂打    \r
 239 ７四と(84)  \r
 240 ６二玉(63)  \r
 241 ６一と(51)  \r
 242 ５二玉(62)  \r
 243 ５一と(41)  \r
 244 ４二玉(52)  \r
 245 ４一と(31)  \r
 246 ３二玉(42)  \r
 247 ２四桂打    \r
 248 同　歩(23)  \r
 249 ３一と(21)  \r
 250 ２二玉(32)  \r
 251 ２四龍(34)  \r
 252 ２三歩打    \r
 253 ２一と(31)  \r
 254 ３二玉(22)  \r
 255 ３一と(41)  \r
 256 ４二玉(32)  \r
 257 ４一と(51)  \r
 258 ５二玉(42)  \r
 259 ５一と(61)  \r
 260 ６二玉(52)  \r
 261 ６三歩打    \r
 262 ７二玉(62)  \r
 263 ８三と(74)  \r
 264 ６三玉(72)  \r
 265 ８四と(83)  \r
 266 ８三桂打    \r
 267 ７四と(84)  \r
 268 ６二玉(63)  \r
 269 ６一と(51)  \r
 270 ５二玉(62)  \r
 271 ５一と(41)  \r
 272 ４二玉(52)  \r
 273 ４一と(31)  \r
 274 ３二玉(42)  \r
 275 ３一と(21)  \r
 276 ２二玉(32)  \r
 277 ３四桂打    \r
 278 同　香(33)  \r
 279 ７六歩(77)  \r
 280 ４四と(45)  \r
 281 ２一と(31)  \r
 282 ３二玉(22)  \r
 283 ３四龍(24)  \r
 284 ３三歩打    \r
 285 ３一と(41)  \r
 286 ４二玉(32)  \r
 287 ４一と(51)  \r
 288 ５二玉(42)  \r
 289 ５一と(61)  \r
 290 ６二玉(52)  \r
 291 ６三香打    \r
 292 ７二玉(62)  \r
 293 ８三と(74)  \r
 294 ６三玉(72)  \r
 295 ８四と(83)  \r
 296 ８三桂打    \r
 297 ７四と(84)  \r
 298 ６二玉(63)  \r
 299 ６一と(51)  \r
 300 ５二玉(62)  \r
 301 ５一と(41)  \r
 302 ４二玉(52)  \r
 303 ４一と(31)  \r
 304 ３二玉(42)  \r
 305 ２四桂打    \r
 306 同　歩(23)  \r
 307 ３一と(21)  \r
 308 ２二玉(32)  \r
 309 ２四龍(34)  \r
 310 ２三香打    \r
 311 ２一と(31)  \r
 312 ３二玉(22)  \r
 313 ３一と(41)  \r
 314 ４二玉(32)  \r
 315 ４一と(51)  \r
 316 ５二玉(42)  \r
 317 ５一と(61)  \r
 318 ６二玉(52)  \r
 319 ６三歩打    \r
 320 ７二玉(62)  \r
 321 ８三と(74)  \r
 322 ６三玉(72)  \r
 323 ８四と(83)  \r
 324 ８三桂打    \r
 325 ７四と(84)  \r
 326 ６二玉(63)  \r
 327 ６一と(51)  \r
 328 ５二玉(62)  \r
 329 ５一と(41)  \r
 330 ４二玉(52)  \r
 331 ３四桂打    \r
 332 同　歩(33)  \r
 333 ４一と(31)  \r
 334 ３二玉(42)  \r
 335 ３四龍(24)  \r
 336 ３三歩打    \r
 337 ３一と(41)  \r
 338 ４二玉(32)  \r
 339 ４一と(51)  \r
 340 ５二玉(42)  \r
 341 ５一と(61)  \r
 342 ６二玉(52)  \r
 343 ６三歩打    \r
 344 ７二玉(62)  \r
 345 ８三と(74)  \r
 346 ６三玉(72)  \r
 347 ８四と(83)  \r
 348 ８三桂打    \r
 349 ７四と(84)  \r
 350 ６二玉(63)  \r
 351 ６一と(51)  \r
 352 ５二玉(62)  \r
 353 ５一と(41)  \r
 354 ４二玉(52)  \r
 355 ４一と(31)  \r
 356 ３二玉(42)  \r
 357 ２四桂打    \r
 358 同　香(23)  \r
 359 ３一と(21)  \r
 360 ２二玉(32)  \r
 361 ２四龍(34)  \r
 362 ２三歩打    \r
 363 ２一と(31)  \r
 364 ３二玉(22)  \r
 365 ３一と(41)  \r
 366 ４二玉(32)  \r
 367 ４一と(51)  \r
 368 ５二玉(42)  \r
 369 ５一と(61)  \r
 370 ６二玉(52)  \r
 371 ６三香打    \r
 372 ７二玉(62)  \r
 373 ８三と(74)  \r
 374 ６三玉(72)  \r
 375 ８四と(83)  \r
 376 ８三桂打    \r
 377 ７四と(84)  \r
 378 ６二玉(63)  \r
 379 ６一と(51)  \r
 380 ５二玉(62)  \r
 381 ５一と(41)  \r
 382 ４二玉(52)  \r
 383 ４一と(31)  \r
 384 ３二玉(42)  \r
 385 ３一と(21)  \r
 386 ２二玉(32)  \r
 387 １四桂打    \r
 388 同　歩(13)  \r
 389 ２一成香(11)\r
 390 １二玉(22)  \r
 391 １四龍(24)  \r
 392 １三香打    \r
 393 １一成香(21)\r
 394 ２二玉(12)  \r
 395 ２一と(31)  \r
 396 ３二玉(22)  \r
 397 ３一と(41)  \r
 398 ４二玉(32)  \r
 399 ４一と(51)  \r
 400 ５二玉(42)  \r
 401 ５一と(61)  \r
 402 ６二玉(52)  \r
 403 ６三歩打    \r
 404 ７二玉(62)  \r
 405 ８三と(74)  \r
 406 ６三玉(72)  \r
 407 ８四と(83)  \r
 408 ８三桂打    \r
 409 ７四と(84)  \r
 410 ６二玉(63)  \r
 411 ６一と(51)  \r
 412 ５二玉(62)  \r
 413 ５一と(41)  \r
 414 ４二玉(52)  \r
 415 ４一と(31)  \r
 416 ３二玉(42)  \r
 417 ３一と(21)  \r
 418 ２二玉(32)  \r
 419 ２一成香(11)\r
 420 １二玉(22)  \r
 421 ２四桂打    \r
 422 同　歩(23)  \r
 423 ８九馬(99)  \r
 424 ４五と(44)  \r
 425 １一成香(21)\r
 426 ２二玉(12)  \r
 427 ２四龍(14)  \r
 428 ２三歩打    \r
 429 ２一と(31)  \r
 430 ３二玉(22)  \r
 431 ３一と(41)  \r
 432 ４二玉(32)  \r
 433 ４一と(51)  \r
 434 ５二玉(42)  \r
 435 ５一と(61)  \r
 436 ６二玉(52)  \r
 437 ６三歩打    \r
 438 ７二玉(62)  \r
 439 ８三と(74)  \r
 440 ６三玉(72)  \r
 441 ８四と(83)  \r
 442 ８三桂打    \r
 443 ７四と(84)  \r
 444 ６二玉(63)  \r
 445 ６一と(51)  \r
 446 ５二玉(62)  \r
 447 ５一と(41)  \r
 448 ４二玉(52)  \r
 449 ４一と(31)  \r
 450 ３二玉(42)  \r
 451 ３一と(21)  \r
 452 ２二玉(32)  \r
 453 １四桂打    \r
 454 同　香(13)  \r
 455 ２一成香(11)\r
 456 １二玉(22)  \r
 457 １四龍(24)  \r
 458 １三歩打    \r
 459 １一成香(21)\r
 460 ２二玉(12)  \r
 461 ２一と(31)  \r
 462 ３二玉(22)  \r
 463 ３一と(41)  \r
 464 ４二玉(32)  \r
 465 ４一と(51)  \r
 466 ５二玉(42)  \r
 467 ５一と(61)  \r
 468 ６二玉(52)  \r
 469 ６三香打    \r
 470 ７二玉(62)  \r
 471 ８三と(74)  \r
 472 ６三玉(72)  \r
 473 ８四と(83)  \r
 474 ８三桂打    \r
 475 ７四と(84)  \r
 476 ６二玉(63)  \r
 477 ６一と(51)  \r
 478 ５二玉(62)  \r
 479 ５一と(41)  \r
 480 ４二玉(52)  \r
 481 ４一と(31)  \r
 482 ３二玉(42)  \r
 483 ２四桂打    \r
 484 同　歩(23)  \r
 485 ３一と(21)  \r
 486 ２二玉(32)  \r
 487 ２四龍(14)  \r
 488 ２三香打    \r
 489 ２一と(31)  \r
 490 ３二玉(22)  \r
 491 ３一と(41)  \r
 492 ４二玉(32)  \r
 493 ４一と(51)  \r
 494 ５二玉(42)  \r
 495 ５一と(61)  \r
 496 ６二玉(52)  \r
 497 ６三歩打    \r
 498 ７二玉(62)  \r
 499 ８三と(74)  \r
 500 ６三玉(72)  \r
 501 ８四と(83)  \r
 502 ８三桂打    \r
 503 ７四と(84)  \r
 504 ６二玉(63)  \r
 505 ６一と(51)  \r
 506 ５二玉(62)  \r
 507 ５一と(41)  \r
 508 ４二玉(52)  \r
 509 ３四桂打    \r
 510 同　歩(33)  \r
 511 ４一と(31)  \r
 512 ３二玉(42)  \r
 513 ３四龍(24)  \r
 514 ３三歩打    \r
 515 ３一と(41)  \r
 516 ４二玉(32)  \r
 517 ４一と(51)  \r
 518 ５二玉(42)  \r
 519 ５一と(61)  \r
 520 ６二玉(52)  \r
 521 ６三歩打    \r
 522 ７二玉(62)  \r
 523 ８三と(74)  \r
 524 ６三玉(72)  \r
 525 ８四と(83)  \r
 526 ８三桂打    \r
 527 ７四と(84)  \r
 528 ６二玉(63)  \r
 529 ６一と(51)  \r
 530 ５二玉(62)  \r
 531 ５一と(41)  \r
 532 ４二玉(52)  \r
 533 ４一と(31)  \r
 534 ３二玉(42)  \r
 535 ２四桂打    \r
 536 同　香(23)  \r
 537 ３一と(21)  \r
 538 ２二玉(32)  \r
 539 ２四龍(34)  \r
 540 ２三歩打    \r
 541 ２一と(31)  \r
 542 ３二玉(22)  \r
 543 ３一と(41)  \r
 544 ４二玉(32)  \r
 545 ４一と(51)  \r
 546 ５二玉(42)  \r
 547 ５一と(61)  \r
 548 ６二玉(52)  \r
 549 ６三香打    \r
 550 ７二玉(62)  \r
 551 ８三と(74)  \r
 552 ６三玉(72)  \r
 553 ８四と(83)  \r
 554 ８三桂打    \r
 555 ７四と(84)  \r
 556 ６二玉(63)  \r
 557 ６一と(51)  \r
 558 ５二玉(62)  \r
 559 ５一と(41)  \r
 560 ４二玉(52)  \r
 561 ３四桂打    \r
 562 同　歩(33)  \r
 563 ４一と(31)  \r
 564 ３二玉(42)  \r
 565 ３四龍(24)  \r
 566 ３三香打    \r
 567 ３一と(41)  \r
 568 ４二玉(32)  \r
 569 ４一と(51)  \r
 570 ５二玉(42)  \r
 571 ５一と(61)  \r
 572 ６二玉(52)  \r
 573 ６三歩打    \r
 574 ７二玉(62)  \r
 575 ８三と(74)  \r
 576 ６三玉(72)  \r
 577 ８四と(83)  \r
 578 ８三桂打    \r
 579 ７四と(84)  \r
 580 ６二玉(63)  \r
 581 ６一と(51)  \r
 582 ５二玉(62)  \r
 583 ５一と(41)  \r
 584 ４二玉(52)  \r
 585 ４一と(31)  \r
 586 ３二玉(42)  \r
 587 ２四桂打    \r
 588 同　歩(23)  \r
 589 ３一と(21)  \r
 590 ２二玉(32)  \r
 591 ２四龍(34)  \r
 592 ２三歩打    \r
 593 ２一と(31)  \r
 594 ３二玉(22)  \r
 595 ３一と(41)  \r
 596 ４二玉(32)  \r
 597 ４一と(51)  \r
 598 ５二玉(42)  \r
 599 ５一と(61)  \r
 600 ６二玉(52)  \r
 601 ６三歩打    \r
 602 ７二玉(62)  \r
 603 ８三と(74)  \r
 604 ６三玉(72)  \r
 605 ８四と(83)  \r
 606 ８三桂打    \r
 607 ７四と(84)  \r
 608 ６二玉(63)  \r
 609 ６一と(51)  \r
 610 ５二玉(62)  \r
 611 ５一と(41)  \r
 612 ４二玉(52)  \r
 613 ４一と(31)  \r
 614 ３二玉(42)  \r
 615 ３一と(21)  \r
 616 ２二玉(32)  \r
 617 ３四桂打    \r
 618 同　香(33)  \r
 619 ８八馬(89)  \r
 620 ４四と(45)  \r
 621 ２一と(31)  \r
 622 ３二玉(22)  \r
 623 ３四龍(24)  \r
 624 ３三歩打    \r
 625 ３一と(41)  \r
 626 ４二玉(32)  \r
 627 ４一と(51)  \r
 628 ５二玉(42)  \r
 629 ５一と(61)  \r
 630 ６二玉(52)  \r
 631 ６三香打    \r
 632 ７二玉(62)  \r
 633 ８三と(74)  \r
 634 ６三玉(72)  \r
 635 ８四と(83)  \r
 636 ８三桂打    \r
 637 ７四と(84)  \r
 638 ６二玉(63)  \r
 639 ６一と(51)  \r
 640 ５二玉(62)  \r
 641 ５一と(41)  \r
 642 ４二玉(52)  \r
 643 ４一と(31)  \r
 644 ３二玉(42)  \r
 645 ２四桂打    \r
 646 同　歩(23)  \r
 647 ３一と(21)  \r
 648 ２二玉(32)  \r
 649 ２四龍(34)  \r
 650 ２三香打    \r
 651 ２一と(31)  \r
 652 ３二玉(22)  \r
 653 ３一と(41)  \r
 654 ４二玉(32)  \r
 655 ４一と(51)  \r
 656 ５二玉(42)  \r
 657 ５一と(61)  \r
 658 ６二玉(52)  \r
 659 ６三歩打    \r
 660 ７二玉(62)  \r
 661 ８三と(74)  \r
 662 ６三玉(72)  \r
 663 ８四と(83)  \r
 664 ８三桂打    \r
 665 ７四と(84)  \r
 666 ６二玉(63)  \r
 667 ６一と(51)  \r
 668 ５二玉(62)  \r
 669 ５一と(41)  \r
 670 ４二玉(52)  \r
 671 ３四桂打    \r
 672 同　歩(33)  \r
 673 ４一と(31)  \r
 674 ３二玉(42)  \r
 675 ３四龍(24)  \r
 676 ３三歩打    \r
 677 ３一と(41)  \r
 678 ４二玉(32)  \r
 679 ４一と(51)  \r
 680 ５二玉(42)  \r
 681 ５一と(61)  \r
 682 ６二玉(52)  \r
 683 ６三歩打    \r
 684 ７二玉(62)  \r
 685 ８三と(74)  \r
 686 ６三玉(72)  \r
 687 ８四と(83)  \r
 688 ８三桂打    \r
 689 ７四と(84)  \r
 690 ６二玉(63)  \r
 691 ６一と(51)  \r
 692 ５二玉(62)  \r
 693 ５一と(41)  \r
 694 ４二玉(52)  \r
 695 ４一と(31)  \r
 696 ３二玉(42)  \r
 697 ２四桂打    \r
 698 同　香(23)  \r
 699 ３一と(21)  \r
 700 ２二玉(32)  \r
 701 ２四龍(34)  \r
 702 ２三歩打    \r
 703 ２一と(31)  \r
 704 ３二玉(22)  \r
 705 ３一と(41)  \r
 706 ４二玉(32)  \r
 707 ４一と(51)  \r
 708 ５二玉(42)  \r
 709 ５一と(61)  \r
 710 ６二玉(52)  \r
 711 ６三香打    \r
 712 ７二玉(62)  \r
 713 ８三と(74)  \r
 714 ６三玉(72)  \r
 715 ８四と(83)  \r
 716 ８三桂打    \r
 717 ７四と(84)  \r
 718 ６二玉(63)  \r
 719 ６一と(51)  \r
 720 ５二玉(62)  \r
 721 ５一と(41)  \r
 722 ４二玉(52)  \r
 723 ４一と(31)  \r
 724 ３二玉(42)  \r
 725 ３一と(21)  \r
 726 ２二玉(32)  \r
 727 １四桂打    \r
 728 同　歩(13)  \r
 729 ２一成香(11)\r
 730 １二玉(22)  \r
 731 １四龍(24)  \r
 732 １三香打    \r
 733 １一成香(21)\r
 734 ２二玉(12)  \r
 735 ２一と(31)  \r
 736 ３二玉(22)  \r
 737 ３一と(41)  \r
 738 ４二玉(32)  \r
 739 ４一と(51)  \r
 740 ５二玉(42)  \r
 741 ５一と(61)  \r
 742 ６二玉(52)  \r
 743 ６三歩打    \r
 744 ７二玉(62)  \r
 745 ８三と(74)  \r
 746 ６三玉(72)  \r
 747 ８四と(83)  \r
 748 ８三桂打    \r
 749 ７四と(84)  \r
 750 ６二玉(63)  \r
 751 ６一と(51)  \r
 752 ５二玉(62)  \r
 753 ５一と(41)  \r
 754 ４二玉(52)  \r
 755 ４一と(31)  \r
 756 ３二玉(42)  \r
 757 ３一と(21)  \r
 758 ２二玉(32)  \r
 759 ２一成香(11)\r
 760 １二玉(22)  \r
 761 ２四桂打    \r
 762 同　歩(23)  \r
 763 ７八馬(88)  \r
 764 ４五と(44)  \r
 765 １一成香(21)\r
 766 ２二玉(12)  \r
 767 ２四龍(14)  \r
 768 ２三歩打    \r
 769 ２一と(31)  \r
 770 ３二玉(22)  \r
 771 ３一と(41)  \r
 772 ４二玉(32)  \r
 773 ４一と(51)  \r
 774 ５二玉(42)  \r
 775 ５一と(61)  \r
 776 ６二玉(52)  \r
 777 ６三歩打    \r
 778 ７二玉(62)  \r
 779 ８三と(74)  \r
 780 ６三玉(72)  \r
 781 ８四と(83)  \r
 782 ８三桂打    \r
 783 ７四と(84)  \r
 784 ６二玉(63)  \r
 785 ６一と(51)  \r
 786 ５二玉(62)  \r
 787 ５一と(41)  \r
 788 ４二玉(52)  \r
 789 ４一と(31)  \r
 790 ３二玉(42)  \r
 791 ３一と(21)  \r
 792 ２二玉(32)  \r
 793 １四桂打    \r
 794 同　香(13)  \r
 795 ２一成香(11)\r
 796 １二玉(22)  \r
 797 １四龍(24)  \r
 798 １三歩打    \r
 799 １一成香(21)\r
 800 ２二玉(12)  \r
 801 ２一と(31)  \r
 802 ３二玉(22)  \r
 803 ３一と(41)  \r
 804 ４二玉(32)  \r
 805 ４一と(51)  \r
 806 ５二玉(42)  \r
 807 ５一と(61)  \r
 808 ６二玉(52)  \r
 809 ６三香打    \r
 810 ７二玉(62)  \r
 811 ８三と(74)  \r
 812 ６三玉(72)  \r
 813 ８四と(83)  \r
 814 ８三桂打    \r
 815 ７四と(84)  \r
 816 ６二玉(63)  \r
 817 ６一と(51)  \r
 818 ５二玉(62)  \r
 819 ５一と(41)  \r
 820 ４二玉(52)  \r
 821 ４一と(31)  \r
 822 ３二玉(42)  \r
 823 ２四桂打    \r
 824 同　歩(23)  \r
 825 ３一と(21)  \r
 826 ２二玉(32)  \r
 827 ２四龍(14)  \r
 828 ２三香打    \r
 829 ２一と(31)  \r
 830 ３二玉(22)  \r
 831 ３一と(41)  \r
 832 ４二玉(32)  \r
 833 ４一と(51)  \r
 834 ５二玉(42)  \r
 835 ５一と(61)  \r
 836 ６二玉(52)  \r
 837 ６三歩打    \r
 838 ７二玉(62)  \r
 839 ８三と(74)  \r
 840 ６三玉(72)  \r
 841 ８四と(83)  \r
 842 ８三桂打    \r
 843 ７四と(84)  \r
 844 ６二玉(63)  \r
 845 ６一と(51)  \r
 846 ５二玉(62)  \r
 847 ５一と(41)  \r
 848 ４二玉(52)  \r
 849 ３四桂打    \r
 850 同　歩(33)  \r
 851 ４一と(31)  \r
 852 ３二玉(42)  \r
 853 ３四龍(24)  \r
 854 ３三歩打    \r
 855 ３一と(41)  \r
 856 ４二玉(32)  \r
 857 ４一と(51)  \r
 858 ５二玉(42)  \r
 859 ５一と(61)  \r
 860 ６二玉(52)  \r
 861 ６三歩打    \r
 862 ７二玉(62)  \r
 863 ８三と(74)  \r
 864 ６三玉(72)  \r
 865 ８四と(83)  \r
 866 ８三桂打    \r
 867 ７四と(84)  \r
 868 ６二玉(63)  \r
 869 ６一と(51)  \r
 870 ５二玉(62)  \r
 871 ５一と(41)  \r
 872 ４二玉(52)  \r
 873 ４一と(31)  \r
 874 ３二玉(42)  \r
 875 ２四桂打    \r
 876 同　香(23)  \r
 877 ３一と(21)  \r
 878 ２二玉(32)  \r
 879 ２四龍(34)  \r
 880 ２三歩打    \r
 881 ２一と(31)  \r
 882 ３二玉(22)  \r
 883 ３一と(41)  \r
 884 ４二玉(32)  \r
 885 ４一と(51)  \r
 886 ５二玉(42)  \r
 887 ５一と(61)  \r
 888 ６二玉(52)  \r
 889 ６三香打    \r
 890 ７二玉(62)  \r
 891 ８三と(74)  \r
 892 ６三玉(72)  \r
 893 ８四と(83)  \r
 894 ８三桂打    \r
 895 ７四と(84)  \r
 896 ６二玉(63)  \r
 897 ６一と(51)  \r
 898 ５二玉(62)  \r
 899 ５一と(41)  \r
 900 ４二玉(52)  \r
 901 ３四桂打    \r
 902 同　歩(33)  \r
 903 ４一と(31)  \r
 904 ３二玉(42)  \r
 905 ３四龍(24)  \r
 906 ３三香打    \r
 907 ３一と(41)  \r
 908 ４二玉(32)  \r
 909 ４一と(51)  \r
 910 ５二玉(42)  \r
 911 ５一と(61)  \r
 912 ６二玉(52)  \r
 913 ６三歩打    \r
 914 ７二玉(62)  \r
 915 ８三と(74)  \r
 916 ６三玉(72)  \r
 917 ８四と(83)  \r
 918 ８三桂打    \r
 919 ７四と(84)  \r
 920 ６二玉(63)  \r
 921 ６一と(51)  \r
 922 ５二玉(62)  \r
 923 ５一と(41)  \r
 924 ４二玉(52)  \r
 925 ４一と(31)  \r
 926 ３二玉(42)  \r
 927 ２四桂打    \r
 928 同　歩(23)  \r
 929 ３一と(21)  \r
 930 ２二玉(32)  \r
 931 ２四龍(34)  \r
 932 ２三歩打    \r
 933 ２一と(31)  \r
 934 ３二玉(22)  \r
 935 ３一と(41)  \r
 936 ４二玉(32)  \r
 937 ４一と(51)  \r
 938 ５二玉(42)  \r
 939 ５一と(61)  \r
 940 ６二玉(52)  \r
 941 ６三歩打    \r
 942 ７二玉(62)  \r
 943 ８三と(74)  \r
 944 ６三玉(72)  \r
 945 ８四と(83)  \r
 946 ８三桂打    \r
 947 ７四と(84)  \r
 948 ６二玉(63)  \r
 949 ６一と(51)  \r
 950 ５二玉(62)  \r
 951 ５一と(41)  \r
 952 ４二玉(52)  \r
 953 ４一と(31)  \r
 954 ３二玉(42)  \r
 955 ３一と(21)  \r
 956 ２二玉(32)  \r
 957 ３四桂打    \r
 958 同　香(33)  \r
 959 ７七馬(78)  \r
 960 ４四と(45)  \r
 961 ２一と(31)  \r
 962 ３二玉(22)  \r
 963 ３四龍(24)  \r
 964 ３三歩打    \r
 965 ３一と(41)  \r
 966 ４二玉(32)  \r
 967 ４一と(51)  \r
 968 ５二玉(42)  \r
 969 ５一と(61)  \r
 970 ６二玉(52)  \r
 971 ６三香打    \r
 972 ７二玉(62)  \r
 973 ８三と(74)  \r
 974 ６三玉(72)  \r
 975 ８四と(83)  \r
 976 ８三桂打    \r
 977 ７四と(84)  \r
 978 ６二玉(63)  \r
 979 ６一と(51)  \r
 980 ５二玉(62)  \r
 981 ５一と(41)  \r
 982 ４二玉(52)  \r
 983 ４一と(31)  \r
 984 ３二玉(42)  \r
 985 ２四桂打    \r
 986 同　歩(23)  \r
 987 ３一と(21)  \r
 988 ２二玉(32)  \r
 989 ２四龍(34)  \r
 990 ２三香打    \r
 991 ２一と(31)  \r
 992 ３二玉(22)  \r
 993 ３一と(41)  \r
 994 ４二玉(32)  \r
 995 ４一と(51)  \r
 996 ５二玉(42)  \r
 997 ５一と(61)  \r
 998 ６二玉(52)  \r
 999 ６三歩打    \r
1000 ７二玉(62)  \r
1001 ８三と(74)  \r
1002 ６三玉(72)  \r
1003 ８四と(83)  \r
1004 ８三桂打    \r
1005 ７四と(84)  \r
1006 ６二玉(63)  \r
1007 ６一と(51)  \r
1008 ５二玉(62)  \r
1009 ５一と(41)  \r
1010 ４二玉(52)  \r
1011 ３四桂打    \r
1012 同　歩(33)  \r
1013 ４一と(31)  \r
1014 ３二玉(42)  \r
1015 ３四龍(24)  \r
1016 ３三歩打    \r
1017 ３一と(41)  \r
1018 ４二玉(32)  \r
1019 ４一と(51)  \r
1020 ５二玉(42)  \r
1021 ５一と(61)  \r
1022 ６二玉(52)  \r
1023 ６三歩打    \r
1024 ７二玉(62)  \r
1025 ８三と(74)  \r
1026 ６三玉(72)  \r
1027 ８四と(83)  \r
1028 ８三桂打    \r
1029 ７四と(84)  \r
1030 ６二玉(63)  \r
1031 ６一と(51)  \r
1032 ５二玉(62)  \r
1033 ５一と(41)  \r
1034 ４二玉(52)  \r
1035 ４一と(31)  \r
1036 ３二玉(42)  \r
1037 ２四桂打    \r
1038 同　香(23)  \r
1039 ３一と(21)  \r
1040 ２二玉(32)  \r
1041 ２四龍(34)  \r
1042 ２三歩打    \r
1043 ２一と(31)  \r
1044 ３二玉(22)  \r
1045 ３一と(41)  \r
1046 ４二玉(32)  \r
1047 ４一と(51)  \r
1048 ５二玉(42)  \r
1049 ５一と(61)  \r
1050 ６二玉(52)  \r
1051 ６三香打    \r
1052 ７二玉(62)  \r
1053 ８三と(74)  \r
1054 ６三玉(72)  \r
1055 ８四と(83)  \r
1056 ８三桂打    \r
1057 ７四と(84)  \r
1058 ６二玉(63)  \r
1059 ６一と(51)  \r
1060 ５二玉(62)  \r
1061 ５一と(41)  \r
1062 ４二玉(52)  \r
1063 ４一と(31)  \r
1064 ３二玉(42)  \r
1065 ３一と(21)  \r
1066 ２二玉(32)  \r
1067 １四桂打    \r
1068 同　歩(13)  \r
1069 ２一成香(11)\r
1070 １二玉(22)  \r
1071 １四龍(24)  \r
1072 １三香打    \r
1073 １一成香(21)\r
1074 ２二玉(12)  \r
1075 ２一と(31)  \r
1076 ３二玉(22)  \r
1077 ３一と(41)  \r
1078 ４二玉(32)  \r
1079 ４一と(51)  \r
1080 ５二玉(42)  \r
1081 ５一と(61)  \r
1082 ６二玉(52)  \r
1083 ６三歩打    \r
1084 ７二玉(62)  \r
1085 ８三と(74)  \r
1086 ６三玉(72)  \r
1087 ８四と(83)  \r
1088 ８三桂打    \r
1089 ７四と(84)  \r
1090 ６二玉(63)  \r
1091 ６一と(51)  \r
1092 ５二玉(62)  \r
1093 ５一と(41)  \r
1094 ４二玉(52)  \r
1095 ４一と(31)  \r
1096 ３二玉(42)  \r
1097 ３一と(21)  \r
1098 ２二玉(32)  \r
1099 ２一成香(11)\r
1100 １二玉(22)  \r
1101 ２四桂打    \r
1102 同　歩(23)  \r
1103 ６七馬(77)  \r
1104 ４五と(44)  \r
1105 １一成香(21)\r
1106 ２二玉(12)  \r
1107 ２四龍(14)  \r
1108 ２三歩打    \r
1109 ２一と(31)  \r
1110 ３二玉(22)  \r
1111 ３一と(41)  \r
1112 ４二玉(32)  \r
1113 ４一と(51)  \r
1114 ５二玉(42)  \r
1115 ５一と(61)  \r
1116 ６二玉(52)  \r
1117 ６三歩打    \r
1118 ７二玉(62)  \r
1119 ８三と(74)  \r
1120 ６三玉(72)  \r
1121 ８四と(83)  \r
1122 ８三桂打    \r
1123 ７四と(84)  \r
1124 ６二玉(63)  \r
1125 ６一と(51)  \r
1126 ５二玉(62)  \r
1127 ５一と(41)  \r
1128 ４二玉(52)  \r
1129 ４一と(31)  \r
1130 ３二玉(42)  \r
1131 ３一と(21)  \r
1132 ２二玉(32)  \r
1133 １四桂打    \r
1134 同　香(13)  \r
1135 ２一成香(11)\r
1136 １二玉(22)  \r
1137 １四龍(24)  \r
1138 １三歩打    \r
1139 １一成香(21)\r
1140 ２二玉(12)  \r
1141 ２一と(31)  \r
1142 ３二玉(22)  \r
1143 ３一と(41)  \r
1144 ４二玉(32)  \r
1145 ４一と(51)  \r
1146 ５二玉(42)  \r
1147 ５一と(61)  \r
1148 ６二玉(52)  \r
1149 ６三香打    \r
1150 ７二玉(62)  \r
1151 ８三と(74)  \r
1152 ６三玉(72)  \r
1153 ８四と(83)  \r
1154 ８三桂打    \r
1155 ７四と(84)  \r
1156 ６二玉(63)  \r
1157 ６一と(51)  \r
1158 ５二玉(62)  \r
1159 ５一と(41)  \r
1160 ４二玉(52)  \r
1161 ４一と(31)  \r
1162 ３二玉(42)  \r
1163 ２四桂打    \r
1164 同　歩(23)  \r
1165 ３一と(21)  \r
1166 ２二玉(32)  \r
1167 ２四龍(14)  \r
1168 ２三香打    \r
1169 ２一と(31)  \r
1170 ３二玉(22)  \r
1171 ３一と(41)  \r
1172 ４二玉(32)  \r
1173 ４一と(51)  \r
1174 ５二玉(42)  \r
1175 ５一と(61)  \r
1176 ６二玉(52)  \r
1177 ６三歩打    \r
1178 ７二玉(62)  \r
1179 ８三と(74)  \r
1180 ６三玉(72)  \r
1181 ８四と(83)  \r
1182 ８三桂打    \r
1183 ７四と(84)  \r
1184 ６二玉(63)  \r
1185 ６一と(51)  \r
1186 ５二玉(62)  \r
1187 ５一と(41)  \r
1188 ４二玉(52)  \r
1189 ３四桂打    \r
1190 同　歩(33)  \r
1191 ４一と(31)  \r
1192 ３二玉(42)  \r
1193 ３四龍(24)  \r
1194 ３三歩打    \r
1195 ３一と(41)  \r
1196 ４二玉(32)  \r
1197 ４一と(51)  \r
1198 ５二玉(42)  \r
1199 ５一と(61)  \r
1200 ６二玉(52)  \r
1201 ６三歩打    \r
1202 ７二玉(62)  \r
1203 ８三と(74)  \r
1204 ６三玉(72)  \r
1205 ８四と(83)  \r
1206 ８三桂打    \r
1207 ７四と(84)  \r
1208 ６二玉(63)  \r
1209 ６一と(51)  \r
1210 ５二玉(62)  \r
1211 ５一と(41)  \r
1212 ４二玉(52)  \r
1213 ４一と(31)  \r
1214 ３二玉(42)  \r
1215 ２四桂打    \r
1216 同　香(23)  \r
1217 ３一と(21)  \r
1218 ２二玉(32)  \r
1219 ２四龍(34)  \r
1220 ２三歩打    \r
1221 ２一と(31)  \r
1222 ３二玉(22)  \r
1223 ３一と(41)  \r
1224 ４二玉(32)  \r
1225 ４一と(51)  \r
1226 ５二玉(42)  \r
1227 ５一と(61)  \r
1228 ６二玉(52)  \r
1229 ６三香打    \r
1230 ７二玉(62)  \r
1231 ８三と(74)  \r
1232 ６三玉(72)  \r
1233 ８四と(83)  \r
1234 ８三桂打    \r
1235 ７四と(84)  \r
1236 ６二玉(63)  \r
1237 ６一と(51)  \r
1238 ５二玉(62)  \r
1239 ５一と(41)  \r
1240 ４二玉(52)  \r
1241 ３四桂打    \r
1242 同　歩(33)  \r
1243 ４一と(31)  \r
1244 ３二玉(42)  \r
1245 ３四龍(24)  \r
1246 ３三香打    \r
1247 ３一と(41)  \r
1248 ４二玉(32)  \r
1249 ４一と(51)  \r
1250 ５二玉(42)  \r
1251 ５一と(61)  \r
1252 ６二玉(52)  \r
1253 ６三歩打    \r
1254 ７二玉(62)  \r
1255 ８三と(74)  \r
1256 ６三玉(72)  \r
1257 ８四と(83)  \r
1258 ８三桂打    \r
1259 ７四と(84)  \r
1260 ６二玉(63)  \r
1261 ６一と(51)  \r
1262 ５二玉(62)  \r
1263 ５一と(41)  \r
1264 ４二玉(52)  \r
1265 ４一と(31)  \r
1266 ３二玉(42)  \r
1267 ２四桂打    \r
1268 同　歩(23)  \r
1269 ３一と(21)  \r
1270 ２二玉(32)  \r
1271 ２四龍(34)  \r
1272 ２三歩打    \r
1273 ２一と(31)  \r
1274 ３二玉(22)  \r
1275 ３一と(41)  \r
1276 ４二玉(32)  \r
1277 ４一と(51)  \r
1278 ５二玉(42)  \r
1279 ５一と(61)  \r
1280 ６二玉(52)  \r
1281 ６三歩打    \r
1282 ７二玉(62)  \r
1283 ８三と(74)  \r
1284 ６三玉(72)  \r
1285 ８四と(83)  \r
1286 ８三桂打    \r
1287 ７四と(84)  \r
1288 ６二玉(63)  \r
1289 ６一と(51)  \r
1290 ５二玉(62)  \r
1291 ５一と(41)  \r
1292 ４二玉(52)  \r
1293 ４一と(31)  \r
1294 ３二玉(42)  \r
1295 ３一と(21)  \r
1296 ２二玉(32)  \r
1297 ３四桂打    \r
1298 同　香(33)  \r
1299 ６六馬(67)  \r
1300 ４四と(45)  \r
1301 ２一と(31)  \r
1302 ３二玉(22)  \r
1303 ３四龍(24)  \r
1304 ３三歩打    \r
1305 ３一と(41)  \r
1306 ４二玉(32)  \r
1307 ４一と(51)  \r
1308 ５二玉(42)  \r
1309 ５一と(61)  \r
1310 ６二玉(52)  \r
1311 ６三香打    \r
1312 ７二玉(62)  \r
1313 ８三と(74)  \r
1314 ６三玉(72)  \r
1315 ８四と(83)  \r
1316 ８三桂打    \r
1317 ７四と(84)  \r
1318 ６二玉(63)  \r
1319 ６一と(51)  \r
1320 ５二玉(62)  \r
1321 ５一と(41)  \r
1322 ４二玉(52)  \r
1323 ４一と(31)  \r
1324 ３二玉(42)  \r
1325 ２四桂打    \r
1326 同　歩(23)  \r
1327 ３一と(21)  \r
1328 ２二玉(32)  \r
1329 ２四龍(34)  \r
1330 ２三香打    \r
1331 ２一と(31)  \r
1332 ３二玉(22)  \r
1333 ３一と(41)  \r
1334 ４二玉(32)  \r
1335 ４一と(51)  \r
1336 ５二玉(42)  \r
1337 ５一と(61)  \r
1338 ６二玉(52)  \r
1339 ６三歩打    \r
1340 ７二玉(62)  \r
1341 ８三と(74)  \r
1342 ６三玉(72)  \r
1343 ８四と(83)  \r
1344 ８三桂打    \r
1345 ７四と(84)  \r
1346 ６二玉(63)  \r
1347 ６一と(51)  \r
1348 ５二玉(62)  \r
1349 ５一と(41)  \r
1350 ４二玉(52)  \r
1351 ３四桂打    \r
1352 同　歩(33)  \r
1353 ４一と(31)  \r
1354 ３二玉(42)  \r
1355 ３四龍(24)  \r
1356 ３三歩打    \r
1357 ３一と(41)  \r
1358 ４二玉(32)  \r
1359 ４一と(51)  \r
1360 ５二玉(42)  \r
1361 ５一と(61)  \r
1362 ６二玉(52)  \r
1363 ６三歩打    \r
1364 ７二玉(62)  \r
1365 ８三と(74)  \r
1366 ６三玉(72)  \r
1367 ８四と(83)  \r
1368 ８三桂打    \r
1369 ７四と(84)  \r
1370 ６二玉(63)  \r
1371 ６一と(51)  \r
1372 ５二玉(62)  \r
1373 ５一と(41)  \r
1374 ４二玉(52)  \r
1375 ４一と(31)  \r
1376 ３二玉(42)  \r
1377 ２四桂打    \r
1378 同　香(23)  \r
1379 ３一と(21)  \r
1380 ２二玉(32)  \r
1381 ２四龍(34)  \r
1382 ２三歩打    \r
1383 ２一と(31)  \r
1384 ３二玉(22)  \r
1385 ３一と(41)  \r
1386 ４二玉(32)  \r
1387 ４一と(51)  \r
1388 ５二玉(42)  \r
1389 ５一と(61)  \r
1390 ６二玉(52)  \r
1391 ６三香打    \r
1392 ７二玉(62)  \r
1393 ８三と(74)  \r
1394 ６三玉(72)  \r
1395 ８四と(83)  \r
1396 ８三桂打    \r
1397 ７四と(84)  \r
1398 ６二玉(63)  \r
1399 ６一と(51)  \r
1400 ５二玉(62)  \r
1401 ５一と(41)  \r
1402 ４二玉(52)  \r
1403 ４一と(31)  \r
1404 ３二玉(42)  \r
1405 ３一と(21)  \r
1406 ２二玉(32)  \r
1407 １四桂打    \r
1408 同　歩(13)  \r
1409 ２一成香(11)\r
1410 １二玉(22)  \r
1411 １四龍(24)  \r
1412 １三香打    \r
1413 １一成香(21)\r
1414 ２二玉(12)  \r
1415 ２一と(31)  \r
1416 ３二玉(22)  \r
1417 ３一と(41)  \r
1418 ４二玉(32)  \r
1419 ４一と(51)  \r
1420 ５二玉(42)  \r
1421 ５一と(61)  \r
1422 ６二玉(52)  \r
1423 ６三歩打    \r
1424 ７二玉(62)  \r
1425 ８三と(74)  \r
1426 ６三玉(72)  \r
1427 ８四と(83)  \r
1428 ８三桂打    \r
1429 ７四と(84)  \r
1430 ６二玉(63)  \r
1431 ６一と(51)  \r
1432 ５二玉(62)  \r
1433 ５一と(41)  \r
1434 ４二玉(52)  \r
1435 ４一と(31)  \r
1436 ３二玉(42)  \r
1437 ２四桂打    \r
1438 同　歩(23)  \r
1439 ３一と(21)  \r
1440 ２二玉(32)  \r
1441 ２四龍(14)  \r
1442 ２三歩打    \r
1443 ２一と(31)  \r
1444 ３二玉(22)  \r
1445 ３一と(41)  \r
1446 ４二玉(32)  \r
1447 ４一と(51)  \r
1448 ５二玉(42)  \r
1449 ５一と(61)  \r
1450 ６二玉(52)  \r
1451 ６三歩打    \r
1452 ７二玉(62)  \r
1453 ８三と(74)  \r
1454 ６三玉(72)  \r
1455 ８四と(83)  \r
1456 ８三桂打    \r
1457 ７四と(84)  \r
1458 ６二玉(63)  \r
1459 ６一と(51)  \r
1460 ５二玉(62)  \r
1461 ５一と(41)  \r
1462 ４二玉(52)  \r
1463 ３四桂打    \r
1464 同　歩(33)  \r
1465 ４一と(31)  \r
1466 ３二玉(42)  \r
1467 ３四龍(24)  \r
1468 ３三歩打    \r
1469 ３一と(41)  \r
1470 ４二玉(32)  \r
1471 ４一と(51)  \r
1472 ５二玉(42)  \r
1473 ５一と(61)  \r
1474 ６二玉(52)  \r
1475 ６三歩打    \r
1476 ７二玉(62)  \r
1477 ８三と(74)  \r
1478 ６三玉(72)  \r
1479 ８四と(83)  \r
1480 ８三桂打    \r
1481 ７四と(84)  \r
1482 ６二玉(63)  \r
1483 ６一と(51)  \r
1484 ５二玉(62)  \r
1485 ５一と(41)  \r
1486 ４二玉(52)  \r
1487 ４一と(31)  \r
1488 ３二玉(42)  \r
1489 ３一と(21)  \r
1490 ２二玉(32)  \r
1491 １四桂打    \r
1492 同　香(13)  \r
1493 ８二龍(93)  \r
1494 同　金(91)  \r
1495 ２一成香(11)\r
1496 １二玉(22)  \r
1497 １三歩打    \r
1498 同　玉(12)  \r
1499 ２五桂(17)  \r
1500 同　銀(36)  \r
1501 １四香(18)  \r
1502 同　銀(25)  \r
1503 同　龍(34)  \r
1504 同　玉(13)  \r
1505 １六香打    \r
1506 ２四玉(14)  \r
1507 ２五銀打    \r
1508 ３五玉(24)  \r
1509 ４六と(57)  \r
1510 ２六玉(35)  \r
1511 ４八馬(66)  \r
1512 同　銀(47)  \r
1513 ３六と(46)  \r
1514 １七玉(26)  \r
1515 ２八銀打    \r
1516 １八玉(17)  \r
1517 １九銀(28)  \r
1518 同　玉(18)  \r
1519 ２九金打    \r
1520 詰み        \r
まで1519手詰\r
`,$4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0324\r
作品名：天月舞\r
作者：今村修\r
発表誌：近代将棋\r
発表年月：1995年12月\r
手数：335\r
分類：連取り\r
受賞：塚田賞\r
備考：9件登録\r
解説：双玉构型会引入逆王手等反直觉应对；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　歩七　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| 金v歩 ・ ・v銀v銀v角v角 ・|一\r
| 香 金 ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 香 香 銀 銀 ・ ・ ・|三\r
| ・ ・ ・ ・ ・ ・ ・ ・ 玉|四\r
| ・ ・v歩v歩v歩v歩v歩v歩 ・|五\r
| ・ ・ ・ ・ ・ ・ ・v桂 ・|六\r
|v玉 香 ・ ・ ・ ・ ・ ・ ・|七\r
|v歩 ・ 桂 桂 桂 ・ ・ ・ ・|八\r
| 金 ・ ・ ・ 金 ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：飛　歩三　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９五飛打    \r
   2 ９六飛打    \r
   3 同　飛(95)  \r
   4 同　玉(97)  \r
   5 ９四飛打    \r
   6 ９五飛打    \r
   7 同　飛(94)  \r
   8 同　玉(96)  \r
   9 ９三飛打    \r
  10 ９四飛打    \r
  11 同　飛成(93)\r
  12 同　玉(95)  \r
  13 ７四飛打    \r
  14 ９五玉(94)  \r
  15 ７五飛(74)  \r
  16 ９六玉(95)  \r
  17 ９七歩打    \r
  18 同　玉(96)  \r
  19 ９五飛(75)  \r
  20 ９六飛打    \r
  21 同　飛(95)  \r
  22 同　玉(97)  \r
  23 ９四飛打    \r
  24 ９五飛打    \r
  25 同　飛(94)  \r
  26 同　玉(96)  \r
  27 ９三飛打    \r
  28 ９四飛打    \r
  29 同　飛成(93)\r
  30 同　玉(95)  \r
  31 ６四飛打    \r
  32 ７四歩打    \r
  33 ９五歩打    \r
  34 同　玉(94)  \r
  35 ６五飛(64)  \r
  36 ７五飛打    \r
  37 同　飛(65)  \r
  38 同　歩(74)  \r
  39 ９三飛打    \r
  40 ９四飛打    \r
  41 同　飛成(93)\r
  42 同　玉(95)  \r
  43 ７四飛打    \r
  44 ９五玉(94)  \r
  45 ７五飛(74)  \r
  46 ９六玉(95)  \r
  47 ９七歩打    \r
  48 同　玉(96)  \r
  49 ９五飛(75)  \r
  50 ９六飛打    \r
  51 同　飛(95)  \r
  52 同　玉(97)  \r
  53 ９四飛打    \r
  54 ９五飛打    \r
  55 同　飛(94)  \r
  56 同　玉(96)  \r
  57 ９三飛打    \r
  58 ９四飛打    \r
  59 同　飛成(93)\r
  60 同　玉(95)  \r
  61 ５四飛打    \r
  62 ６四歩打    \r
  63 ９五歩打    \r
  64 同　玉(94)  \r
  65 ５五飛(54)  \r
  66 ６五飛打    \r
  67 同　飛(55)  \r
  68 同　歩(64)  \r
  69 ９三飛打    \r
  70 ９四飛打    \r
  71 同　飛成(93)\r
  72 同　玉(95)  \r
  73 ６四飛打    \r
  74 ７四歩打    \r
  75 ９五歩打    \r
  76 同　玉(94)  \r
  77 ６五飛(64)  \r
  78 ７五飛打    \r
  79 同　飛(65)  \r
  80 同　歩(74)  \r
  81 ９三飛打    \r
  82 ９四飛打    \r
  83 同　飛成(93)\r
  84 同　玉(95)  \r
  85 ７四飛打    \r
  86 ９五玉(94)  \r
  87 ７五飛(74)  \r
  88 ９六玉(95)  \r
  89 ９七歩打    \r
  90 同　玉(96)  \r
  91 ９五飛(75)  \r
  92 ９六飛打    \r
  93 同　飛(95)  \r
  94 同　玉(97)  \r
  95 ９四飛打    \r
  96 ９五飛打    \r
  97 同　飛(94)  \r
  98 同　玉(96)  \r
  99 ９三飛打    \r
 100 ９四飛打    \r
 101 同　飛成(93)\r
 102 同　玉(95)  \r
 103 ４四飛打    \r
 104 ５四歩打    \r
 105 ９五歩打    \r
 106 同　玉(94)  \r
 107 ４五飛(44)  \r
 108 ５五飛打    \r
 109 同　飛(45)  \r
 110 同　歩(54)  \r
 111 ９三飛打    \r
 112 ９四飛打    \r
 113 同　飛成(93)\r
 114 同　玉(95)  \r
 115 ５四飛打    \r
 116 ６四歩打    \r
 117 ９五歩打    \r
 118 同　玉(94)  \r
 119 ５五飛(54)  \r
 120 ６五飛打    \r
 121 同　飛(55)  \r
 122 同　歩(64)  \r
 123 ９三飛打    \r
 124 ９四飛打    \r
 125 同　飛成(93)\r
 126 同　玉(95)  \r
 127 ６四飛打    \r
 128 ７四歩打    \r
 129 ９五歩打    \r
 130 同　玉(94)  \r
 131 ６五飛(64)  \r
 132 ７五飛打    \r
 133 同　飛(65)  \r
 134 同　歩(74)  \r
 135 ９三飛打    \r
 136 ９四飛打    \r
 137 同　飛成(93)\r
 138 同　玉(95)  \r
 139 ７四飛打    \r
 140 ９五玉(94)  \r
 141 ７五飛(74)  \r
 142 ９六玉(95)  \r
 143 ９七歩打    \r
 144 同　玉(96)  \r
 145 ９五飛(75)  \r
 146 ９六飛打    \r
 147 同　飛(95)  \r
 148 同　玉(97)  \r
 149 ９四飛打    \r
 150 ９五飛打    \r
 151 同　飛(94)  \r
 152 同　玉(96)  \r
 153 ９三飛打    \r
 154 ９四飛打    \r
 155 同　飛成(93)\r
 156 同　玉(95)  \r
 157 ３四飛打    \r
 158 ４四歩打    \r
 159 ９五歩打    \r
 160 同　玉(94)  \r
 161 ３五飛(34)  \r
 162 ４五飛打    \r
 163 同　飛(35)  \r
 164 同　歩(44)  \r
 165 ９三飛打    \r
 166 ９四飛打    \r
 167 同　飛成(93)\r
 168 同　玉(95)  \r
 169 ４四飛打    \r
 170 ５四歩打    \r
 171 ９五歩打    \r
 172 同　玉(94)  \r
 173 ４五飛(44)  \r
 174 ５五飛打    \r
 175 同　飛(45)  \r
 176 同　歩(54)  \r
 177 ９三飛打    \r
 178 ９四飛打    \r
 179 同　飛成(93)\r
 180 同　玉(95)  \r
 181 ５四飛打    \r
 182 ６四歩打    \r
 183 ９五歩打    \r
 184 同　玉(94)  \r
 185 ５五飛(54)  \r
 186 ６五飛打    \r
 187 同　飛(55)  \r
 188 同　歩(64)  \r
 189 ９三飛打    \r
 190 ９四飛打    \r
 191 同　飛成(93)\r
 192 同　玉(95)  \r
 193 ６四飛打    \r
 194 ７四歩打    \r
 195 ９五歩打    \r
 196 同　玉(94)  \r
 197 ６五飛(64)  \r
 198 ７五飛打    \r
 199 同　飛(65)  \r
 200 同　歩(74)  \r
 201 ９三飛打    \r
 202 ９四飛打    \r
 203 同　飛成(93)\r
 204 同　玉(95)  \r
 205 ７四飛打    \r
 206 ９五玉(94)  \r
 207 ７五飛(74)  \r
 208 ９六玉(95)  \r
 209 ９七歩打    \r
 210 同　玉(96)  \r
 211 ９五飛(75)  \r
 212 ９六飛打    \r
 213 同　飛(95)  \r
 214 同　玉(97)  \r
 215 ９四飛打    \r
 216 ９五飛打    \r
 217 同　飛(94)  \r
 218 同　玉(96)  \r
 219 ９三飛打    \r
 220 ９四飛打    \r
 221 同　飛成(93)\r
 222 同　玉(95)  \r
 223 ２四飛打    \r
 224 ３四歩打    \r
 225 ９五歩打    \r
 226 同　玉(94)  \r
 227 ２五飛(24)  \r
 228 ３五飛打    \r
 229 同　飛(25)  \r
 230 同　歩(34)  \r
 231 ９三飛打    \r
 232 ９四飛打    \r
 233 同　飛成(93)\r
 234 同　玉(95)  \r
 235 ３四飛打    \r
 236 ４四歩打    \r
 237 ９五歩打    \r
 238 同　玉(94)  \r
 239 ３五飛(34)  \r
 240 ４五飛打    \r
 241 同　飛(35)  \r
 242 同　歩(44)  \r
 243 ９三飛打    \r
 244 ９四飛打    \r
 245 同　飛成(93)\r
 246 同　玉(95)  \r
 247 ４四飛打    \r
 248 ５四歩打    \r
 249 ９五歩打    \r
 250 同　玉(94)  \r
 251 ４五飛(44)  \r
 252 ５五飛打    \r
 253 同　飛(45)  \r
 254 同　歩(54)  \r
 255 ９三飛打    \r
 256 ９四飛打    \r
 257 同　飛成(93)\r
 258 同　玉(95)  \r
 259 ５四飛打    \r
 260 ６四歩打    \r
 261 ９五歩打    \r
 262 同　玉(94)  \r
 263 ５五飛(54)  \r
 264 ６五飛打    \r
 265 同　飛(55)  \r
 266 同　歩(64)  \r
 267 ９三飛打    \r
 268 ９四飛打    \r
 269 同　飛成(93)\r
 270 同　玉(95)  \r
 271 ６四飛打    \r
 272 ７四歩打    \r
 273 ９五歩打    \r
 274 同　玉(94)  \r
 275 ６五飛(64)  \r
 276 ７五飛打    \r
 277 同　飛(65)  \r
 278 同　歩(74)  \r
 279 ９三飛打    \r
 280 ９四飛打    \r
 281 同　飛成(93)\r
 282 同　玉(95)  \r
 283 ７四飛打    \r
 284 ９五玉(94)  \r
 285 ７五飛(74)  \r
 286 ９六玉(95)  \r
 287 ９七歩打    \r
 288 同　玉(96)  \r
 289 ９五飛(75)  \r
 290 ９六飛打    \r
 291 同　飛(95)  \r
 292 同　玉(97)  \r
 293 ９四飛打    \r
 294 ９五飛打    \r
 295 同　飛(94)  \r
 296 同　玉(96)  \r
 297 ９三飛打    \r
 298 ９四飛打    \r
 299 同　飛成(93)\r
 300 同　玉(95)  \r
 301 ２四飛打    \r
 302 ３四歩打    \r
 303 ９五歩打    \r
 304 同　玉(94)  \r
 305 ９六歩打    \r
 306 同　玉(95)  \r
 307 ２六飛(24)  \r
 308 ９五玉(96)  \r
 309 ２五飛(26)  \r
 310 ９六玉(95)  \r
 311 ９七歩打    \r
 312 同　玉(96)  \r
 313 ９五飛(25)  \r
 314 ９六飛打    \r
 315 同　飛(95)  \r
 316 同　玉(97)  \r
 317 ９四飛打    \r
 318 ９五飛打    \r
 319 同　飛(94)  \r
 320 同　玉(96)  \r
 321 ９三飛打    \r
 322 ９四飛打    \r
 323 同　飛成(93)\r
 324 同　玉(95)  \r
 325 ９三飛打    \r
 326 同　玉(94)  \r
 327 ８三金(82)  \r
 328 ９四玉(93)  \r
 329 ８四金(83)  \r
 330 ９五玉(94)  \r
 331 ８五金(84)  \r
 332 ９六玉(95)  \r
 333 ８六金(85)  \r
 334 ９七玉(96)  \r
 335 ８九桂打    \r
 336 詰み        \r
まで335手詰\r
`,B4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0519\r
作者：内藤国雄\r
発表誌：日本経済新聞\r
発表年月：1998年12月2日\r
手数：73\r
分類：実戦初形\r
受賞：看寿賞\r
備考：9件登録\r
解説：双玉构型会引入逆王手等反直觉应对；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ 金v歩 ・v桂 ・ ・ ・|一\r
| ・ ・v飛 ・ ・ ・ 金 ・ ・|二\r
|v歩 ・ 杏 ・ 銀 ・ 銀 ・ ・|三\r
| ・v歩v歩 馬v歩 ・v歩v歩v歩|四\r
| ・v玉 ・ ・v香 ・ ・ ・v桂|五\r
| ・ ・ ・ ・ ・v歩 ・ ・ ・|六\r
| 歩 歩 歩 歩 歩 歩 歩 歩 歩|七\r
| ・ 角 ・ ・ ・ ・ ・ 飛 ・|八\r
| 香 桂 銀 金 玉 金 銀 桂 香|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８六馬(64)  \r
   2 ９四玉(85)  \r
   3 ９五馬(86)  \r
   4 同　玉(94)  \r
   5 ９六歩(97)  \r
   6 ８五玉(95)  \r
   7 ８六歩(87)  \r
   8 ７五玉(85)  \r
   9 ７六歩(77)  \r
  10 ６五玉(75)  \r
  11 ６六歩(67)  \r
  12 ７六玉(65)  \r
  13 ７八飛(28)  \r
  14 ８七玉(76)  \r
  15 ７七飛(78)  \r
  16 ８六玉(87)  \r
  17 ９七角(88)  \r
  18 ８五玉(86)  \r
  19 ８七飛(77)  \r
  20 ７六玉(85)  \r
  21 ８六飛(87)  \r
  22 ７五玉(76)  \r
  23 ６四銀(53)  \r
  24 同　玉(75)  \r
  25 ８四飛(86)  \r
  26 ７三玉(64)  \r
  27 ７二金(71)  \r
  28 ８四玉(73)  \r
  29 ８五歩打    \r
  30 同　玉(84)  \r
  31 ７七桂(89)  \r
  32 ７六玉(85)  \r
  33 ８六飛打    \r
  34 ７五玉(76)  \r
  35 ８三飛成(86)\r
  36 ６六玉(75)  \r
  37 ６三龍(83)  \r
  38 ５七玉(66)  \r
  39 ６八銀(79)  \r
  40 ５六玉(57)  \r
  41 ５七銀(68)  \r
  42 同　玉(56)  \r
  43 ５八金(69)  \r
  44 ５六玉(57)  \r
  45 ６七龍(63)  \r
  46 ４五玉(56)  \r
  47 ４六歩(47)  \r
  48 ３五玉(45)  \r
  49 ３六歩(37)  \r
  50 ２五玉(35)  \r
  51 ３七桂(29)  \r
  52 ３六玉(25)  \r
  53 ４七龍(67)  \r
  54 ２七玉(36)  \r
  55 ３八銀(39)  \r
  56 ２六玉(27)  \r
  57 ２七歩打    \r
  58 同　桂成(15)\r
  59 同　銀(38)  \r
  60 同　玉(26)  \r
  61 ３八金(49)  \r
  62 ２六玉(27)  \r
  63 １八桂打    \r
  64 ３五玉(26)  \r
  65 ４四銀(33)  \r
  66 同　玉(35)  \r
  67 ４五歩(46)  \r
  68 ３五玉(44)  \r
  69 ７九角(97)  \r
  70 ５七香打    \r
  71 同　角(79)  \r
  72 同　香成(55)\r
  73 ３六香打    \r
  74 詰み        \r
まで73手詰\r
`,E4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0191\r
作品名：明日香\r
作者：添川公司\r
発表誌：近代将棋\r
発表年月：2002年12月\r
手数：703\r
分類：馬鋸\r
受賞：塚田賞、看寿賞\r
備考：7件登録\r
解説：带有锯类趣向，关键棋子会往返移动并反复改变控制线；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v銀 ・ と ・ ・vとvとv香 金|一\r
| ・ 歩 馬vと ・ と 歩 ・ ・|二\r
|v金 ・vとv桂 ・ ・ ・ ・ 杏|三\r
| と ・v銀v飛vと ・ ・ ・ 金|四\r
| ・vと ・ と ・vと ・ ・v香|五\r
| ・ ・ ・ ・ ・v歩v桂 ・v玉|六\r
| ・ ・v歩 ・ 馬 ・ ・ ・ ・|七\r
| とv歩 龍 桂v金v銀 ・ 香 ・|八\r
| ・ と ・ ・ 桂 ・ 銀 ・ ・|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 １五金(14)  \r
   2 同　玉(16)  \r
   3 １七香打    \r
   4 １六金打    \r
   5 １四成香(13)\r
   6 同　玉(15)  \r
   7 １六香(17)  \r
   8 １五香打    \r
   9 １三金打    \r
  10 同　玉(14)  \r
  11 １五香(16)  \r
  12 １四金打    \r
  13 １二金(11)  \r
  14 同　玉(13)  \r
  15 １四香(15)  \r
  16 １三金打    \r
  17 同　香(14)  \r
  18 同　玉(12)  \r
  19 １五香打    \r
  20 １四香打    \r
  21 同　香(15)  \r
  22 同　玉(13)  \r
  23 １六香打    \r
  24 １五香打    \r
  25 同　香(16)  \r
  26 同　玉(14)  \r
  27 １七香打    \r
  28 １六香打    \r
  29 同　香(17)  \r
  30 同　玉(15)  \r
  31 １八香打    \r
  32 １七香打    \r
  33 同　香(18)  \r
  34 同　玉(16)  \r
  35 １九香打    \r
  36 １八香打    \r
  37 ６二馬(72)  \r
  38 ４四と(54)  \r
  39 １六金打    \r
  40 同　玉(17)  \r
  41 １八香(19)  \r
  42 １七金打    \r
  43 ６一馬(62)  \r
  44 ３四と(44)  \r
  45 １五金打    \r
  46 同　玉(16)  \r
  47 １七香(18)  \r
  48 １六金打    \r
  49 １四金打    \r
  50 同　玉(15)  \r
  51 １六香(17)  \r
  52 １五金打    \r
  53 １三金打    \r
  54 同　玉(14)  \r
  55 １五香(16)  \r
  56 １四金打    \r
  57 １二金打    \r
  58 同　玉(13)  \r
  59 １四香(15)  \r
  60 １三金打    \r
  61 １一金打    \r
  62 同　玉(12)  \r
  63 １三香(14)  \r
  64 １二金打    \r
  65 ６六馬(57)  \r
  66 ５五と(45)  \r
  67 １二香成(13)\r
  68 同　玉(11)  \r
  69 １四香打    \r
  70 １三香打    \r
  71 同　香(14)  \r
  72 同　玉(12)  \r
  73 １五香打    \r
  74 １四香打    \r
  75 同　香(15)  \r
  76 同　玉(13)  \r
  77 １六香打    \r
  78 １五香打    \r
  79 同　香(16)  \r
  80 同　玉(14)  \r
  81 １七香打    \r
  82 １六香打    \r
  83 同　香(17)  \r
  84 同　玉(15)  \r
  85 １八香打    \r
  86 １七香打    \r
  87 同　香(18)  \r
  88 同　玉(16)  \r
  89 １九香打    \r
  90 １八香打    \r
  91 ６二馬(61)  \r
  92 ４四と(34)  \r
  93 １六金打    \r
  94 同　玉(17)  \r
  95 １八香(19)  \r
  96 １七金打    \r
  97 １五金打    \r
  98 同　玉(16)  \r
  99 １七香(18)  \r
 100 １六金打    \r
 101 １四金打    \r
 102 同　玉(15)  \r
 103 １六香(17)  \r
 104 １五金打    \r
 105 １三金打    \r
 106 同　玉(14)  \r
 107 １五香(16)  \r
 108 １四金打    \r
 109 １二金打    \r
 110 同　玉(13)  \r
 111 １四香(15)  \r
 112 １三金打    \r
 113 ６七馬(66)  \r
 114 ４五と(55)  \r
 115 １三香(14)  \r
 116 同　玉(12)  \r
 117 １五香打    \r
 118 １四香打    \r
 119 同　香(15)  \r
 120 同　玉(13)  \r
 121 １六香打    \r
 122 １五香打    \r
 123 同　香(16)  \r
 124 同　玉(14)  \r
 125 １七香打    \r
 126 １六香打    \r
 127 同　香(17)  \r
 128 同　玉(15)  \r
 129 １八香打    \r
 130 １七香打    \r
 131 ６一馬(62)  \r
 132 ３四と(44)  \r
 133 １五金打    \r
 134 同　玉(16)  \r
 135 １七香(18)  \r
 136 １六金打    \r
 137 １四金打    \r
 138 同　玉(15)  \r
 139 １六香(17)  \r
 140 １五金打    \r
 141 １三金打    \r
 142 同　玉(14)  \r
 143 １五香(16)  \r
 144 １四金打    \r
 145 １二金打    \r
 146 同　玉(13)  \r
 147 １四香(15)  \r
 148 １三金打    \r
 149 １一金打    \r
 150 同　玉(12)  \r
 151 １三香(14)  \r
 152 １二金打    \r
 153 ７七馬(67)  \r
 154 ５五と(45)  \r
 155 １二香成(13)\r
 156 同　玉(11)  \r
 157 １四香打    \r
 158 １三香打    \r
 159 同　香(14)  \r
 160 同　玉(12)  \r
 161 １五香打    \r
 162 １四香打    \r
 163 同　香(15)  \r
 164 同　玉(13)  \r
 165 １六香打    \r
 166 １五香打    \r
 167 同　香(16)  \r
 168 同　玉(14)  \r
 169 １七香打    \r
 170 １六香打    \r
 171 同　香(17)  \r
 172 同　玉(15)  \r
 173 １八香打    \r
 174 １七香打    \r
 175 同　香(18)  \r
 176 同　玉(16)  \r
 177 １九香打    \r
 178 １八香打    \r
 179 ６二馬(61)  \r
 180 ４四と(34)  \r
 181 １六金打    \r
 182 同　玉(17)  \r
 183 １八香(19)  \r
 184 １七金打    \r
 185 １五金打    \r
 186 同　玉(16)  \r
 187 １七香(18)  \r
 188 １六金打    \r
 189 １四金打    \r
 190 同　玉(15)  \r
 191 １六香(17)  \r
 192 １五金打    \r
 193 １三金打    \r
 194 同　玉(14)  \r
 195 １五香(16)  \r
 196 １四金打    \r
 197 １二金打    \r
 198 同　玉(13)  \r
 199 １四香(15)  \r
 200 １三金打    \r
 201 ６七馬(77)  \r
 202 ４五と(55)  \r
 203 １三香(14)  \r
 204 同　玉(12)  \r
 205 １五香打    \r
 206 １四香打    \r
 207 同　香(15)  \r
 208 同　玉(13)  \r
 209 １六香打    \r
 210 １五香打    \r
 211 同　香(16)  \r
 212 同　玉(14)  \r
 213 １七香打    \r
 214 １六香打    \r
 215 同　香(17)  \r
 216 同　玉(15)  \r
 217 １八香打    \r
 218 １七香打    \r
 219 ６一馬(62)  \r
 220 ３四と(44)  \r
 221 １五金打    \r
 222 同　玉(16)  \r
 223 １七香(18)  \r
 224 １六金打    \r
 225 １四金打    \r
 226 同　玉(15)  \r
 227 １六香(17)  \r
 228 １五金打    \r
 229 １三金打    \r
 230 同　玉(14)  \r
 231 １五香(16)  \r
 232 １四金打    \r
 233 １二金打    \r
 234 同　玉(13)  \r
 235 １四香(15)  \r
 236 １三金打    \r
 237 １一金打    \r
 238 同　玉(12)  \r
 239 １三香(14)  \r
 240 １二金打    \r
 241 ６六馬(67)  \r
 242 ５五と(45)  \r
 243 １二香成(13)\r
 244 同　玉(11)  \r
 245 １四香打    \r
 246 １三香打    \r
 247 同　香(14)  \r
 248 同　玉(12)  \r
 249 １五香打    \r
 250 １四香打    \r
 251 同　香(15)  \r
 252 同　玉(13)  \r
 253 １六香打    \r
 254 １五香打    \r
 255 同　香(16)  \r
 256 同　玉(14)  \r
 257 １七香打    \r
 258 １六香打    \r
 259 同　香(17)  \r
 260 同　玉(15)  \r
 261 １八香打    \r
 262 １七香打    \r
 263 同　香(18)  \r
 264 同　玉(16)  \r
 265 １九香打    \r
 266 １八香打    \r
 267 ６二馬(61)  \r
 268 ４四と(34)  \r
 269 ８七龍(78)  \r
 270 ５七銀成(48)\r
 271 １六金打    \r
 272 同　玉(17)  \r
 273 １八香(19)  \r
 274 １七金打    \r
 275 １五金打    \r
 276 同　玉(16)  \r
 277 １七香(18)  \r
 278 １六金打    \r
 279 １四金打    \r
 280 同　玉(15)  \r
 281 １六香(17)  \r
 282 １五金打    \r
 283 １三金打    \r
 284 同　玉(14)  \r
 285 １五香(16)  \r
 286 １四金打    \r
 287 １二金打    \r
 288 同　玉(13)  \r
 289 １四香(15)  \r
 290 １三金打    \r
 291 ６七馬(66)  \r
 292 ４五と(55)  \r
 293 １三香(14)  \r
 294 同　玉(12)  \r
 295 １五香打    \r
 296 １四香打    \r
 297 同　香(15)  \r
 298 同　玉(13)  \r
 299 １六香打    \r
 300 １五香打    \r
 301 同　香(16)  \r
 302 同　玉(14)  \r
 303 １七香打    \r
 304 １六香打    \r
 305 同　香(17)  \r
 306 同　玉(15)  \r
 307 １八香打    \r
 308 １七香打    \r
 309 ６一馬(62)  \r
 310 ３四と(44)  \r
 311 １五金打    \r
 312 同　玉(16)  \r
 313 １七香(18)  \r
 314 １六金打    \r
 315 １四金打    \r
 316 同　玉(15)  \r
 317 １六香(17)  \r
 318 １五金打    \r
 319 １三金打    \r
 320 同　玉(14)  \r
 321 １五香(16)  \r
 322 １四金打    \r
 323 １二金打    \r
 324 同　玉(13)  \r
 325 １四香(15)  \r
 326 １三金打    \r
 327 １一金打    \r
 328 同　玉(12)  \r
 329 １三香(14)  \r
 330 １二金打    \r
 331 ７七馬(67)  \r
 332 ５五と(45)  \r
 333 １二香成(13)\r
 334 同　玉(11)  \r
 335 １四香打    \r
 336 １三香打    \r
 337 同　香(14)  \r
 338 同　玉(12)  \r
 339 １五香打    \r
 340 １四香打    \r
 341 同　香(15)  \r
 342 同　玉(13)  \r
 343 １六香打    \r
 344 １五香打    \r
 345 同　香(16)  \r
 346 同　玉(14)  \r
 347 １七香打    \r
 348 １六香打    \r
 349 同　香(17)  \r
 350 同　玉(15)  \r
 351 １八香打    \r
 352 １七香打    \r
 353 同　香(18)  \r
 354 同　玉(16)  \r
 355 １九香打    \r
 356 １八香打    \r
 357 ６二馬(61)  \r
 358 ４四と(34)  \r
 359 １六金打    \r
 360 同　玉(17)  \r
 361 １八香(19)  \r
 362 １七金打    \r
 363 １五金打    \r
 364 同　玉(16)  \r
 365 １七香(18)  \r
 366 １六金打    \r
 367 １四金打    \r
 368 同　玉(15)  \r
 369 １六香(17)  \r
 370 １五金打    \r
 371 １三金打    \r
 372 同　玉(14)  \r
 373 １五香(16)  \r
 374 １四金打    \r
 375 １二金打    \r
 376 同　玉(13)  \r
 377 １四香(15)  \r
 378 １三金打    \r
 379 ７八馬(77)  \r
 380 ４五と(55)  \r
 381 １三香(14)  \r
 382 同　玉(12)  \r
 383 １五香打    \r
 384 １四香打    \r
 385 同　香(15)  \r
 386 同　玉(13)  \r
 387 １六香打    \r
 388 １五香打    \r
 389 同　香(16)  \r
 390 同　玉(14)  \r
 391 １七香打    \r
 392 １六香打    \r
 393 同　香(17)  \r
 394 同　玉(15)  \r
 395 １八香打    \r
 396 １七香打    \r
 397 ６一馬(62)  \r
 398 ３四と(44)  \r
 399 １五金打    \r
 400 同　玉(16)  \r
 401 １七香(18)  \r
 402 １六金打    \r
 403 １四金打    \r
 404 同　玉(15)  \r
 405 １六香(17)  \r
 406 １五金打    \r
 407 １三金打    \r
 408 同　玉(14)  \r
 409 １五香(16)  \r
 410 １四金打    \r
 411 １二金打    \r
 412 同　玉(13)  \r
 413 １四香(15)  \r
 414 １三金打    \r
 415 １一金打    \r
 416 同　玉(12)  \r
 417 １三香(14)  \r
 418 １二金打    \r
 419 ８八馬(78)  \r
 420 ５五と(45)  \r
 421 １二香成(13)\r
 422 同　玉(11)  \r
 423 １四香打    \r
 424 １三香打    \r
 425 同　香(14)  \r
 426 同　玉(12)  \r
 427 １五香打    \r
 428 １四香打    \r
 429 同　香(15)  \r
 430 同　玉(13)  \r
 431 １六香打    \r
 432 １五香打    \r
 433 同　香(16)  \r
 434 同　玉(14)  \r
 435 １七香打    \r
 436 １六香打    \r
 437 同　香(17)  \r
 438 同　玉(15)  \r
 439 １八香打    \r
 440 １七香打    \r
 441 同　香(18)  \r
 442 同　玉(16)  \r
 443 １九香打    \r
 444 １八香打    \r
 445 ６二馬(61)  \r
 446 ４四と(34)  \r
 447 １六金打    \r
 448 同　玉(17)  \r
 449 １八香(19)  \r
 450 １七金打    \r
 451 １五金打    \r
 452 同　玉(16)  \r
 453 １七香(18)  \r
 454 １六金打    \r
 455 １四金打    \r
 456 同　玉(15)  \r
 457 １六香(17)  \r
 458 １五金打    \r
 459 １三金打    \r
 460 同　玉(14)  \r
 461 １五香(16)  \r
 462 １四金打    \r
 463 １二金打    \r
 464 同　玉(13)  \r
 465 １四香(15)  \r
 466 １三金打    \r
 467 ７八馬(88)  \r
 468 ４五と(55)  \r
 469 １三香(14)  \r
 470 同　玉(12)  \r
 471 １五香打    \r
 472 １四香打    \r
 473 同　香(15)  \r
 474 同　玉(13)  \r
 475 １六香打    \r
 476 １五香打    \r
 477 同　香(16)  \r
 478 同　玉(14)  \r
 479 １七香打    \r
 480 １六香打    \r
 481 同　香(17)  \r
 482 同　玉(15)  \r
 483 １八香打    \r
 484 １七香打    \r
 485 ６一馬(62)  \r
 486 ３四と(44)  \r
 487 １五金打    \r
 488 同　玉(16)  \r
 489 １七香(18)  \r
 490 １六金打    \r
 491 １四金打    \r
 492 同　玉(15)  \r
 493 １六香(17)  \r
 494 １五金打    \r
 495 １三金打    \r
 496 同　玉(14)  \r
 497 １五香(16)  \r
 498 １四金打    \r
 499 １二金打    \r
 500 同　玉(13)  \r
 501 １四香(15)  \r
 502 １三金打    \r
 503 １一金打    \r
 504 同　玉(12)  \r
 505 １三香(14)  \r
 506 １二金打    \r
 507 ７七馬(78)  \r
 508 ５五と(45)  \r
 509 １二香成(13)\r
 510 同　玉(11)  \r
 511 １四香打    \r
 512 １三香打    \r
 513 同　香(14)  \r
 514 同　玉(12)  \r
 515 １五香打    \r
 516 １四香打    \r
 517 同　香(15)  \r
 518 同　玉(13)  \r
 519 １六香打    \r
 520 １五香打    \r
 521 同　香(16)  \r
 522 同　玉(14)  \r
 523 １七香打    \r
 524 １六香打    \r
 525 同　香(17)  \r
 526 同　玉(15)  \r
 527 １八香打    \r
 528 １七香打    \r
 529 同　香(18)  \r
 530 同　玉(16)  \r
 531 １九香打    \r
 532 １八香打    \r
 533 ６二馬(61)  \r
 534 ４四と(34)  \r
 535 １六金打    \r
 536 同　玉(17)  \r
 537 １八香(19)  \r
 538 １七金打    \r
 539 １五金打    \r
 540 同　玉(16)  \r
 541 １七香(18)  \r
 542 １六金打    \r
 543 １四金打    \r
 544 同　玉(15)  \r
 545 １六香(17)  \r
 546 １五金打    \r
 547 １三金打    \r
 548 同　玉(14)  \r
 549 １五香(16)  \r
 550 １四金打    \r
 551 １二金打    \r
 552 同　玉(13)  \r
 553 １四香(15)  \r
 554 １三金打    \r
 555 ６七馬(77)  \r
 556 ４五と(55)  \r
 557 １三香(14)  \r
 558 同　玉(12)  \r
 559 １五香打    \r
 560 １四香打    \r
 561 同　香(15)  \r
 562 同　玉(13)  \r
 563 １六香打    \r
 564 １五香打    \r
 565 同　香(16)  \r
 566 同　玉(14)  \r
 567 １七香打    \r
 568 １六香打    \r
 569 同　香(17)  \r
 570 同　玉(15)  \r
 571 １八香打    \r
 572 １七香打    \r
 573 ６一馬(62)  \r
 574 ３四と(44)  \r
 575 １五金打    \r
 576 同　玉(16)  \r
 577 １七香(18)  \r
 578 １六金打    \r
 579 １四金打    \r
 580 同　玉(15)  \r
 581 １六香(17)  \r
 582 １五金打    \r
 583 １三金打    \r
 584 同　玉(14)  \r
 585 １五香(16)  \r
 586 １四金打    \r
 587 １二金打    \r
 588 同　玉(13)  \r
 589 １四香(15)  \r
 590 １三金打    \r
 591 １一金打    \r
 592 同　玉(12)  \r
 593 １三香(14)  \r
 594 １二金打    \r
 595 ６六馬(67)  \r
 596 ５五と(45)  \r
 597 １二香成(13)\r
 598 同　玉(11)  \r
 599 １四香打    \r
 600 １三香打    \r
 601 同　香(14)  \r
 602 同　玉(12)  \r
 603 １五香打    \r
 604 １四香打    \r
 605 同　香(15)  \r
 606 同　玉(13)  \r
 607 １六香打    \r
 608 １五香打    \r
 609 同　香(16)  \r
 610 同　玉(14)  \r
 611 １七香打    \r
 612 １六香打    \r
 613 同　香(17)  \r
 614 同　玉(15)  \r
 615 １八香打    \r
 616 １七香打    \r
 617 同　香(18)  \r
 618 同　玉(16)  \r
 619 １九香打    \r
 620 １八香打    \r
 621 ５七龍(87)  \r
 622 同　金(58)  \r
 623 １八香(19)  \r
 624 同　玉(17)  \r
 625 ２九金打    \r
 626 同　玉(18)  \r
 627 ３八銀打    \r
 628 ３九玉(29)  \r
 629 ５七馬(66)  \r
 630 ２八玉(39)  \r
 631 ２九金打    \r
 632 １七玉(28)  \r
 633 １八香打    \r
 634 ２六玉(17)  \r
 635 １六金打    \r
 636 ３五玉(26)  \r
 637 ４七桂(59)  \r
 638 ４五玉(35)  \r
 639 ６七馬(57)  \r
 640 ５六香打    \r
 641 ５五と(65)  \r
 642 同　桂(63)  \r
 643 ５六馬(67)  \r
 644 ５四玉(45)  \r
 645 ４三馬(61)  \r
 646 ６三玉(54)  \r
 647 ５五桂(47)  \r
 648 ６二玉(63)  \r
 649 ６一馬(43)  \r
 650 ５三玉(62)  \r
 651 ５四歩打    \r
 652 同　飛(64)  \r
 653 ４三馬(61)  \r
 654 ６四玉(53)  \r
 655 ５四馬(43)  \r
 656 同　玉(64)  \r
 657 ６六桂打    \r
 658 ６四玉(54)  \r
 659 ５四飛打    \r
 660 ７五玉(64)  \r
 661 ７四飛(54)  \r
 662 同　と(73)  \r
 663 同　馬(56)  \r
 664 ６六玉(75)  \r
 665 ５六馬(74)  \r
 666 ７五玉(66)  \r
 667 ６六銀打    \r
 668 ６四玉(75)  \r
 669 ６五銀(66)  \r
 670 ５三玉(64)  \r
 671 ４三と(42)  \r
 672 ６二玉(53)  \r
 673 ６三桂成(55)\r
 674 同　玉(62)  \r
 675 ６四香打    \r
 676 ７三玉(63)  \r
 677 ７四銀(65)  \r
 678 ８二玉(73)  \r
 679 ８三銀成(74)\r
 680 ７一玉(82)  \r
 681 ７二歩打    \r
 682 ８一玉(71)  \r
 683 ８二歩打    \r
 684 同　銀(91)  \r
 685 同　成銀(83)\r
 686 同　玉(81)  \r
 687 ８三銀打    \r
 688 ９一玉(82)  \r
 689 ９二銀成(83)\r
 690 同　金(93)  \r
 691 同　馬(56)  \r
 692 同　玉(91)  \r
 693 ９三歩打    \r
 694 ８一玉(92)  \r
 695 ８二歩打    \r
 696 ７二玉(81)  \r
 697 ８三金打    \r
 698 ７一玉(72)  \r
 699 ８一歩成(82)\r
 700 同　玉(71)  \r
 701 ９二歩成(93)\r
 702 ７一玉(81)  \r
 703 ８二と(92)  \r
 704 詰み        \r
まで703手詰\r
`,A4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0021\r
作者：中筋俊裕\r
発表誌：詰将棋パラダイス\r
発表年月：2009年9月\r
手数：81\r
受賞：半期賞\r
備考：7件登録\r
解説：属于长篇，局部妙手会嵌在较长的强制路线中；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛　角　金四　銀四　桂四　香三　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・ ・ ・ と 馬 ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ 龍 ・ ・|二\r
| ・ ・ ・ ・ ・ ・ ・v歩 ・|三\r
| ・ ・ ・ ・ ・ ・ ・v玉 ・|四\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|五\r
| ・ ・ ・vと ・ ・ ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ 香|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ４二馬(41)  \r
   2 ３三桂打    \r
   3 同　龍(32)  \r
   4 ２五玉(24)  \r
   5 ４三馬(42)  \r
   6 ３四桂打    \r
   7 同　龍(33)  \r
   8 ２六玉(25)  \r
   9 ４四馬(43)  \r
  10 ３五桂打    \r
  11 同　龍(34)  \r
  12 ２七玉(26)  \r
  13 ４五馬(44)  \r
  14 ３六桂打    \r
  15 同　龍(35)  \r
  16 ２八玉(27)  \r
  17 ４六馬(45)  \r
  18 ２九玉(28)  \r
  19 ４七馬(46)  \r
  20 １九玉(29)  \r
  21 ３九龍(36)  \r
  22 １八玉(19)  \r
  23 ２九馬(47)  \r
  24 ２七玉(18)  \r
  25 ２八馬(29)  \r
  26 ２六玉(27)  \r
  27 １八桂打    \r
  28 ２五玉(26)  \r
  29 １七桂打    \r
  30 １五玉(25)  \r
  31 ３五龍(39)  \r
  32 １四玉(15)  \r
  33 ２六桂(18)  \r
  34 １三玉(14)  \r
  35 １五龍(35)  \r
  36 ２二玉(13)  \r
  37 ５五馬(28)  \r
  38 ３三銀打    \r
  39 ３四桂(26)  \r
  40 ３一玉(22)  \r
  41 ４三桂打    \r
  42 ３二玉(31)  \r
  43 １二龍(15)  \r
  44 ２二香打    \r
  45 同　龍(12)  \r
  46 同　銀(33)  \r
  47 同　桂成(34)\r
  48 ４三玉(32)  \r
  49 ４七香打    \r
  50 ４五歩打    \r
  51 同　香(47)  \r
  52 ３四玉(43)  \r
  53 ４四馬(55)  \r
  54 ２四玉(34)  \r
  55 ２五銀打    \r
  56 １三玉(24)  \r
  57 ２三成桂(22)\r
  58 同　玉(13)  \r
  59 ２四歩打    \r
  60 ３二玉(23)  \r
  61 ４三馬(44)  \r
  62 ２二玉(32)  \r
  63 １四桂打    \r
  64 １三玉(22)  \r
  65 ２三歩成(24)\r
  66 同　玉(13)  \r
  67 ３四馬(43)  \r
  68 ３二玉(23)  \r
  69 ４三香成(45)\r
  70 ２一玉(32)  \r
  71 ２二桂成(14)\r
  72 同　玉(21)  \r
  73 ３三馬(34)  \r
  74 １二玉(22)  \r
  75 １三歩打    \r
  76 同　玉(12)  \r
  77 ２四銀(25)  \r
  78 １二玉(13)  \r
  79 ２三銀成(24)\r
  80 ２一玉(12)  \r
  81 ３二成香(43)\r
  82 詰み        \r
まで81手詰\r
`,L4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0022\r
作品名：槍の帝王\r
作者：馬屋原剛\r
発表誌：詰将棋パラダイス\r
発表年月：2010年1月\r
手数：239\r
分類：玉鋸、馬鋸\r
受賞：半期賞\r
備考：8件登録\r
解説：双玉构型会引入逆王手等反直觉应对；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v歩 ・v玉vと ・ ・ ・ ・v金|一\r
| ・ ・vと ・v角 銀v歩 金 ・|二\r
| ・ ・ ・ ・ ・ ・ 角v飛 飛|三\r
| ・ ・ ・v桂v歩 ・ 桂v歩 ・|四\r
| ・ ・ ・ 歩v桂 ・ ・ ・ 歩|五\r
| ・ ・ ・v銀 金v歩 ・ ・ ・|六\r
| ・ ・ ・ 銀vとvと ・ ・ ・|七\r
| 香 香 玉 香vとvと 金 桂v歩|八\r
| 歩 歩 香 ・vとvと ・ ・ 銀|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ４四角成(33)\r
   2 ６二と(72)  \r
   3 ８七玉(78)  \r
   4 ８二玉(71)  \r
   5 ９七玉(87)  \r
   6 ９二玉(82)  \r
   7 ８六玉(97)  \r
   8 ８二玉(92)  \r
   9 ９五玉(86)  \r
  10 ９二玉(82)  \r
  11 ８四玉(95)  \r
  12 ８一玉(92)  \r
  13 ５四馬(44)  \r
  14 ７二と(62)  \r
  15 ９五玉(84)  \r
  16 ９二玉(81)  \r
  17 ８六玉(95)  \r
  18 ８二玉(92)  \r
  19 ９七玉(86)  \r
  20 ９二玉(82)  \r
  21 ８七玉(97)  \r
  22 ８二玉(92)  \r
  23 ７八玉(87)  \r
  24 ７一玉(82)  \r
  25 ４四馬(54)  \r
  26 ６二と(72)  \r
  27 ８七玉(78)  \r
  28 ８二玉(71)  \r
  29 ９七玉(87)  \r
  30 ９二玉(82)  \r
  31 ８六玉(97)  \r
  32 ８二玉(92)  \r
  33 ９五玉(86)  \r
  34 ９二玉(82)  \r
  35 ８四玉(95)  \r
  36 ８一玉(92)  \r
  37 ４五馬(44)  \r
  38 ７二と(62)  \r
  39 ９五玉(84)  \r
  40 ９二玉(81)  \r
  41 ８六玉(95)  \r
  42 ８二玉(92)  \r
  43 ９七玉(86)  \r
  44 ９二玉(82)  \r
  45 ８七玉(97)  \r
  46 ８二玉(92)  \r
  47 ７八玉(87)  \r
  48 ７一玉(82)  \r
  49 ３五馬(45)  \r
  50 ６二と(72)  \r
  51 ８七玉(78)  \r
  52 ８二玉(71)  \r
  53 ９七玉(87)  \r
  54 ９二玉(82)  \r
  55 ８六玉(97)  \r
  56 ８二玉(92)  \r
  57 ９五玉(86)  \r
  58 ９二玉(82)  \r
  59 ８四玉(95)  \r
  60 ８一玉(92)  \r
  61 ３六馬(35)  \r
  62 ７二と(62)  \r
  63 ９五玉(84)  \r
  64 ９二玉(81)  \r
  65 ８六玉(95)  \r
  66 ８二玉(92)  \r
  67 ９七玉(86)  \r
  68 ９二玉(82)  \r
  69 ８七玉(97)  \r
  70 ８二玉(92)  \r
  71 ７八玉(87)  \r
  72 ７一玉(82)  \r
  73 ２六馬(36)  \r
  74 ６二と(72)  \r
  75 ８七玉(78)  \r
  76 ８二玉(71)  \r
  77 ９七玉(87)  \r
  78 ９二玉(82)  \r
  79 ８六玉(97)  \r
  80 ８二玉(92)  \r
  81 ９五玉(86)  \r
  82 ９二玉(82)  \r
  83 ８四玉(95)  \r
  84 ８一玉(92)  \r
  85 ２七馬(26)  \r
  86 ７二と(62)  \r
  87 ９五玉(84)  \r
  88 ９二玉(81)  \r
  89 ８六玉(95)  \r
  90 ８二玉(92)  \r
  91 ９七玉(86)  \r
  92 ９二玉(82)  \r
  93 ８七玉(97)  \r
  94 ８二玉(92)  \r
  95 ７八玉(87)  \r
  96 ７一玉(82)  \r
  97 １七馬(27)  \r
  98 ６二と(72)  \r
  99 ８七玉(78)  \r
 100 ８二玉(71)  \r
 101 ９七玉(87)  \r
 102 ９二玉(82)  \r
 103 ８六玉(97)  \r
 104 ８二玉(92)  \r
 105 ９五玉(86)  \r
 106 ９二玉(82)  \r
 107 ８四玉(95)  \r
 108 ８一玉(92)  \r
 109 １八馬(17)  \r
 110 ７二と(62)  \r
 111 ９五玉(84)  \r
 112 ９二玉(81)  \r
 113 ８六玉(95)  \r
 114 ８二玉(92)  \r
 115 ９七玉(86)  \r
 116 ９二玉(82)  \r
 117 ８七玉(97)  \r
 118 ８二玉(92)  \r
 119 ７八玉(87)  \r
 120 ７一玉(82)  \r
 121 １七馬(18)  \r
 122 ６二と(72)  \r
 123 ８七玉(78)  \r
 124 ８二玉(71)  \r
 125 ９七玉(87)  \r
 126 ９二玉(82)  \r
 127 ８六玉(97)  \r
 128 ８二玉(92)  \r
 129 ９五玉(86)  \r
 130 ９二玉(82)  \r
 131 ８四玉(95)  \r
 132 ８一玉(92)  \r
 133 ２七馬(17)  \r
 134 ７二と(62)  \r
 135 ９五玉(84)  \r
 136 ９二玉(81)  \r
 137 ８六玉(95)  \r
 138 ８二玉(92)  \r
 139 ９七玉(86)  \r
 140 ９二玉(82)  \r
 141 ８七玉(97)  \r
 142 ８二玉(92)  \r
 143 ７八玉(87)  \r
 144 ７一玉(82)  \r
 145 ２六馬(27)  \r
 146 ６二と(72)  \r
 147 ８七玉(78)  \r
 148 ８二玉(71)  \r
 149 ９七玉(87)  \r
 150 ９二玉(82)  \r
 151 ８六玉(97)  \r
 152 ８二玉(92)  \r
 153 ９五玉(86)  \r
 154 ９二玉(82)  \r
 155 ８四玉(95)  \r
 156 ８一玉(92)  \r
 157 ３六馬(26)  \r
 158 ７二と(62)  \r
 159 ９五玉(84)  \r
 160 ９二玉(81)  \r
 161 ８六玉(95)  \r
 162 ８二玉(92)  \r
 163 ９七玉(86)  \r
 164 ９二玉(82)  \r
 165 ８七玉(97)  \r
 166 ８二玉(92)  \r
 167 ７八玉(87)  \r
 168 ７一玉(82)  \r
 169 ３五馬(36)  \r
 170 ６二と(72)  \r
 171 ８七玉(78)  \r
 172 ８二玉(71)  \r
 173 ９七玉(87)  \r
 174 ９二玉(82)  \r
 175 ８六玉(97)  \r
 176 ８二玉(92)  \r
 177 ９五玉(86)  \r
 178 ９二玉(82)  \r
 179 ８四玉(95)  \r
 180 ８一玉(92)  \r
 181 ４五馬(35)  \r
 182 ７二と(62)  \r
 183 ９五玉(84)  \r
 184 ９二玉(81)  \r
 185 ８六玉(95)  \r
 186 ８二玉(92)  \r
 187 ９七玉(86)  \r
 188 ９二玉(82)  \r
 189 ８七玉(97)  \r
 190 ８二玉(92)  \r
 191 ７八玉(87)  \r
 192 ７一玉(82)  \r
 193 ４四馬(45)  \r
 194 ６二と(72)  \r
 195 ８七玉(78)  \r
 196 ８二玉(71)  \r
 197 ９七玉(87)  \r
 198 ９二玉(82)  \r
 199 ８六玉(97)  \r
 200 ８二玉(92)  \r
 201 ９五玉(86)  \r
 202 ９二玉(82)  \r
 203 ８四玉(95)  \r
 204 ８一玉(92)  \r
 205 ９四玉(84)  \r
 206 ９二玉(81)  \r
 207 ８三香成(88)\r
 208 ８一玉(92)  \r
 209 ５四馬(44)  \r
 210 ６三角(52)  \r
 211 同　馬(54)  \r
 212 同　飛(23)  \r
 213 ７二角打    \r
 214 同　と(62)  \r
 215 同　香成(79)\r
 216 同　と(61)  \r
 217 同　成香(83)\r
 218 同　玉(81)  \r
 219 ６三飛成(13)\r
 220 同　玉(72)  \r
 221 ６四歩(65)  \r
 222 ５四玉(63)  \r
 223 ５一飛打    \r
 224 ４四玉(54)  \r
 225 ５三飛成(51)\r
 226 ３五玉(44)  \r
 227 ３六歩打    \r
 228 ２五玉(35)  \r
 229 ２六歩打    \r
 230 同　玉(25)  \r
 231 ２七歩打    \r
 232 １五玉(26)  \r
 233 １六歩打    \r
 234 ２五玉(15)  \r
 235 １七桂打    \r
 236 ３四玉(25)  \r
 237 ５四龍(53)  \r
 238 ４四香打    \r
 239 ４五金(56)  \r
 240 詰み        \r
まで239手詰\r
`,I4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0026\r
作品名：奇兵隊\r
作者：添川公司\r
発表誌：詰将棋パラダイス\r
発表年月：2010年11月\r
手数：123\r
分類：四桂詰\r
受賞：半期賞、看寿賞\r
備考：8件登録\r
解説：四桂詰把桂马的跳跃控制集中起来，局面辨识度很高；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：なし\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v玉 ・ とv金 ・v桂 ・ 銀 ・|一\r
|v杏v金 歩 と ・ ・ ・ 歩 ・|二\r
| ・ ・ と 歩 ・v角 ・vと 歩|三\r
| 歩v金 と ・ ・ 銀 ・ ・ ・|四\r
| と ・v圭v桂 ・v圭 と ・ ・|五\r
| 馬 ・ ・ と ・ ・ 香v金 と|六\r
| ・ ・ ・ ・v歩 ・v銀 ・ 香|七\r
| と ・ ・ ・ ・ 銀 ・v歩 ・|八\r
| ・v杏 ・ ・ 歩 ・ ・ 飛 龍|九\r
+---------------------------+\r
先手の持駒：なし\r
先手：\r
後手：\r
手数----指手--\r
   1 ８二と(73)  \r
   2 同　成香(92)\r
   3 ８一金打    \r
   4 同　成香(82)\r
   5 同　と(71)  \r
   6 同　玉(91)  \r
   7 ７一歩成(72)\r
   8 ９一玉(81)  \r
   9 ９三香打    \r
  10 ９二歩打    \r
  11 同　香成(93)\r
  12 同　玉(91)  \r
  13 ９三歩成(94)\r
  14 ９一玉(92)  \r
  15 ８二と(93)  \r
  16 同　玉(91)  \r
  17 ７二と(62)  \r
  18 同　金(61)  \r
  19 同　と(71)  \r
  20 同　玉(82)  \r
  21 ６二歩成(63)\r
  22 ８一玉(72)  \r
  23 ７二と(62)  \r
  24 同　玉(81)  \r
  25 ７三と(74)  \r
  26 同　玉(72)  \r
  27 ８四と(95)  \r
  28 同　玉(73)  \r
  29 ７五と(66)  \r
  30 同　玉(84)  \r
  31 ７六歩打    \r
  32 同　玉(75)  \r
  33 ８七と(98)  \r
  34 ６六玉(76)  \r
  35 ７八桂打    \r
  36 ６七玉(66)  \r
  37 ６六金打    \r
  38 ６八玉(67)  \r
  39 ６九金打    \r
  40 同　玉(68)  \r
  41 ５八歩(59)  \r
  42 ２九歩成(28)\r
  43 同　龍(19)  \r
  44 ６八玉(69)  \r
  45 ５九龍(29)  \r
  46 ７八玉(68)  \r
  47 ７九歩打    \r
  48 同　成香(89)\r
  49 ７七と(87)  \r
  50 同　玉(78)  \r
  51 ７九龍(59)  \r
  52 ６六玉(77)  \r
  53 ６八香打    \r
  54 ６七桂打    \r
  55 同　香(68)  \r
  56 同　玉(66)  \r
  57 ８五馬(96)  \r
  58 ５六玉(67)  \r
  59 ５七歩(58)  \r
  60 同　桂成(65)\r
  61 同　銀(48)  \r
  62 同　玉(56)  \r
  63 ５九龍(79)  \r
  64 ４六玉(57)  \r
  65 ４七歩打    \r
  66 同　玉(46)  \r
  67 ５八龍(59)  \r
  68 ４六玉(47)  \r
  69 ４五と(35)  \r
  70 同　玉(46)  \r
  71 ６七馬(85)  \r
  72 ３六玉(45)  \r
  73 ２六と(16)  \r
  74 同　玉(36)  \r
  75 １八桂打    \r
  76 １七玉(26)  \r
  77 ２九桂打    \r
  78 １六玉(17)  \r
  79 ２八桂打    \r
  80 １五玉(16)  \r
  81 ５五龍(58)  \r
  82 ２五歩打    \r
  83 １六金打    \r
  84 ２四玉(15)  \r
  85 ２五龍(55)  \r
  86 同　角(43)  \r
  87 同　金(16)  \r
  88 同　玉(24)  \r
  89 ３七桂(29)  \r
  90 １四玉(25)  \r
  91 ２五角打    \r
  92 １三玉(14)  \r
  93 １四歩打    \r
  94 ２二玉(13)  \r
  95 ２三馬(67)  \r
  96 同　玉(22)  \r
  97 ２四歩打    \r
  98 同　玉(23)  \r
  99 ３六桂(28)  \r
 100 ２三玉(24)  \r
 101 ３四角(25)  \r
 102 同　玉(23)  \r
 103 ２六桂(18)  \r
 104 ２三玉(34)  \r
 105 ３二銀打    \r
 106 ２二玉(23)  \r
 107 １三歩成(14)\r
 108 同　玉(22)  \r
 109 ２五桂(37)  \r
 110 ２二玉(13)  \r
 111 ３三銀成(44)\r
 112 同　桂(41)  \r
 113 ３四桂(26)  \r
 114 １一玉(22)  \r
 115 １二銀成(21)\r
 116 同　玉(11)  \r
 117 ２四桂(36)  \r
 118 １一玉(12)  \r
 119 ２一銀成(32)\r
 120 同　玉(11)  \r
 121 ３三桂(25)  \r
 122 １一玉(21)  \r
 123 ２三桂打    \r
 124 詰み        \r
まで123手詰\r
`,O4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0450\r
作者：不明\r
発表誌：将棋月報\r
発表年月：1934年2月\r
手数：53\r
完全性：駒余り\r
分類：大道棋\r
備考：8件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系；允许駒余り，詰上り并非单纯追求清空棋盘。
手合割：平手　　\r
後手の持駒：飛　角二　金三　桂三　香　歩十二　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
|v香 ・ ・v銀 ・ ・ ・ ・ ・|一\r
| ・ ・ 飛 香 ・v歩 ・ ・ ・|二\r
|v玉v歩 ・v香 ・ ・ ・ ・ ・|三\r
|v歩 ・ ・ ・ ・ ・ ・ ・ ・|四\r
| ・ 金v歩 ・ ・ ・ ・ ・ ・|五\r
| ・ ・ 歩 銀 ・ ・ ・ ・ ・|六\r
|v銀 歩 桂 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：銀　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８四金(85)  \r
   2 同　玉(93)  \r
   3 ７五飛成(72)\r
   4 ９三玉(84)  \r
   5 ８五桂(77)  \r
   6 ９二玉(93)  \r
   7 ９三歩打    \r
   8 ８一玉(92)  \r
   9 ８二銀打    \r
  10 同　玉(81)  \r
  11 ７三龍(75)  \r
  12 ８一玉(82)  \r
  13 ８三龍(73)  \r
  14 ７一玉(81)  \r
  15 ６一香成(62)\r
  16 同　玉(71)  \r
  17 ６三龍(83)  \r
  18 ６二金打    \r
  19 ７三桂(85)  \r
  20 ７一玉(61)  \r
  21 ８一桂成(73)\r
  22 同　玉(71)  \r
  23 ８五香打    \r
  24 ７一玉(81)  \r
  25 ８二香成(85)\r
  26 同　玉(71)  \r
  27 ６二龍(63)  \r
  28 ８三玉(82)  \r
  29 ６三龍(62)  \r
  30 ８四玉(83)  \r
  31 ７五銀(66)  \r
  32 ８五玉(84)  \r
  33 ８六金打    \r
  34 同　銀成(97)\r
  35 同　銀(75)  \r
  36 ７六玉(85)  \r
  37 ８五銀打    \r
  38 ８七玉(76)  \r
  39 ６七龍(63)  \r
  40 ８六玉(87)  \r
  41 ７六龍(67)  \r
  42 ９七玉(86)  \r
  43 ７七龍(76)  \r
  44 ８七歩打    \r
  45 ８八銀打    \r
  46 ９八玉(97)  \r
  47 ８七龍(77)  \r
  48 ８九玉(98)  \r
  49 ７七銀(88)  \r
  50 ７九玉(89)  \r
  51 ８八龍(87)  \r
  52 ６九玉(79)  \r
  53 ６八龍(88)  \r
  54 詰み        \r
まで53手詰\r
`,M4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0451\r
作者：岩木錦太郎\r
発表誌：将棋月報\r
発表年月：1934年7月\r
手数：63\r
分類：大道棋\r
備考：19件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角二　金三　銀四　桂　歩十五　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・ ・v玉v歩 ・ ・ ・ ・ ・|一\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|二\r
| ・ ・ 金 ・ 香 ・ ・ ・ ・|三\r
| ・ ・v桂 ・ ・ ・ ・ ・ ・|四\r
| 桂 ・ 香 ・ ・ ・ ・ ・ ・|五\r
|v歩 ・v香 ・ ・ 桂 ・ ・ ・|六\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：香　歩　\r
先手：\r
後手：\r
手数----指手--\r
   1 ８三桂(95)  \r
   2 ８一玉(71)  \r
   3 ８二歩打    \r
   4 ９二玉(81)  \r
   5 ９五香打    \r
   6 ９三角打    \r
   7 ９一桂成(83)\r
   8 同　玉(92)  \r
   9 ９三香(95)  \r
  10 ９二桂打    \r
  11 ８一歩成(82)\r
  12 同　玉(91)  \r
  13 ６三角打    \r
  14 ９一玉(81)  \r
  15 ９二香成(93)\r
  16 同　玉(91)  \r
  17 ７四角成(63)\r
  18 ９一玉(92)  \r
  19 ８三桂打    \r
  20 ９二玉(91)  \r
  21 ７一桂成(83)\r
  22 ９一玉(92)  \r
  23 ８一成桂(71)\r
  24 同　玉(91)  \r
  25 ７二金(73)  \r
  26 同　玉(81)  \r
  27 ８四桂打    \r
  28 ７一玉(72)  \r
  29 ６四馬(74)  \r
  30 ７三飛打    \r
  31 ７二桂成(84)\r
  32 同　飛(73)  \r
  33 同　香成(75)\r
  34 同　玉(71)  \r
  35 ７三飛打    \r
  36 ８二玉(72)  \r
  37 ７六飛成(73)\r
  38 ９三玉(82)  \r
  39 ９五香打    \r
  40 ９四桂打    \r
  41 ７三龍(76)  \r
  42 ８三金打    \r
  43 ７五馬(64)  \r
  44 ９二玉(93)  \r
  45 ９四香(95)  \r
  46 同　金(83)  \r
  47 ７四馬(75)  \r
  48 ８一玉(92)  \r
  49 ８三龍(73)  \r
  50 ８二金打    \r
  51 ７三桂打    \r
  52 ７一玉(81)  \r
  53 ８二龍(83)  \r
  54 同　玉(71)  \r
  55 ８三金打    \r
  56 ７一玉(82)  \r
  57 ８一桂成(73)\r
  58 同　玉(71)  \r
  59 ６三馬(74)  \r
  60 ９一玉(81)  \r
  61 ７三馬(63)  \r
  62 ８一玉(91)  \r
  63 ８二馬(73)  \r
  64 詰み        \r
まで63手詰\r
`,R4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0087\r
作者：形幅清\r
発表誌：詰将棋パラダイス\r
発表年月：1974年8月\r
手数：81\r
分類：大道棋\r
備考：9件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀三　桂三　歩十四　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v桂 ・ ・v香 ・ ・ ・ ・|一\r
| 歩 銀 ・ ・ ・ ・ ・ ・ ・|二\r
| ・v歩 ・v金 ・ ・ ・ ・ ・|三\r
|v歩 ・v歩 ・ ・ ・ ・ ・ ・|四\r
|v玉 ・ ・v香 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| 馬v香 ・ ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９六金打    \r
   2 ８四玉(95)  \r
   3 ８七香(89)  \r
   4 ８六飛打    \r
   5 ８五金(96)  \r
   6 同　飛(86)  \r
   7 同　香(87)  \r
   8 同　玉(84)  \r
   9 ８六飛打    \r
  10 ７五玉(85)  \r
  11 ５六飛(86)  \r
  12 ８四玉(75)  \r
  13 ８九香打    \r
  14 ８五角打    \r
  15 同　香(89)  \r
  16 同　玉(84)  \r
  17 ８六飛(56)  \r
  18 ７五玉(85)  \r
  19 ４二角打    \r
  20 ５三飛打    \r
  21 ５六飛(86)  \r
  22 ８四玉(75)  \r
  23 ５一角成(42)\r
  24 同　飛(53)  \r
  25 ８九香打    \r
  26 ８五角打    \r
  27 同　香(89)  \r
  28 同　玉(84)  \r
  29 ８六飛(56)  \r
  30 ７五玉(85)  \r
  31 ４二角打    \r
  32 ５三飛(51)  \r
  33 同　角成(42)\r
  34 同　金(63)  \r
  35 ５六飛(86)  \r
  36 ８四玉(75)  \r
  37 ８九飛打    \r
  38 ８五角打    \r
  39 同　飛(89)  \r
  40 同　玉(84)  \r
  41 ８六馬(97)  \r
  42 ８四玉(85)  \r
  43 ６二角打    \r
  44 ７三香打    \r
  45 同　銀(82)  \r
  46 同　桂(81)  \r
  47 同　角成(62)\r
  48 同　玉(84)  \r
  49 ５三飛成(56)\r
  50 ６三歩打    \r
  51 ６四金打    \r
  52 ８二玉(73)  \r
  53 ６二龍(53)  \r
  54 ７二飛打    \r
  55 ７三金(64)  \r
  56 ９三玉(82)  \r
  57 ８五桂打    \r
  58 ８四玉(93)  \r
  59 ８三金(73)  \r
  60 同　玉(84)  \r
  61 ６三龍(62)  \r
  62 ７三桂打    \r
  63 ８四歩打    \r
  64 同　玉(83)  \r
  65 ７三龍(63)  \r
  66 同　飛(72)  \r
  67 ７六桂打    \r
  68 ８三玉(84)  \r
  69 ７三桂成(85)\r
  70 同　玉(83)  \r
  71 ６四馬(86)  \r
  72 ６二玉(73)  \r
  73 ６三香打    \r
  74 ５一玉(62)  \r
  75 ５二歩打    \r
  76 ４一玉(51)  \r
  77 ４二飛打    \r
  78 ３一玉(41)  \r
  79 １二飛成(42)\r
  80 ４一玉(31)  \r
  81 ４二馬(64)  \r
  82 詰み        \r
まで81手詰\r
`,K4=`# --- 柿木将棋Ⅸ V9.80 棋譜ファイル ---\r
作品番号：yumei5 0241\r
作者：不明\r
発表誌：近代将棋\r
発表年月：1974年11月\r
手数：61\r
分類：大道棋\r
備考：7件登録\r
解説：属于大道棋，初形通常朴素，却隐藏着连续的强制机关；同棋和连续取子会不断重置局面关系。
手合割：平手　　\r
後手の持駒：飛二　角　金二　銀二　桂三　香　歩十三　\r
  ９ ８ ７ ６ ５ ４ ３ ２ １\r
+---------------------------+\r
| ・v桂 ・ ・ ・ ・ ・ ・ ・|一\r
| ・ 銀 銀 ・v歩 ・ ・ ・ ・|二\r
| ・v歩 ・ ・ ・ ・ ・ ・ ・|三\r
|v歩 ・v香 ・ 歩 ・ ・ ・ ・|四\r
|v玉 ・ ・v金 ・ ・ ・ ・ ・|五\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|六\r
| 馬v香v歩 ・ ・ ・ ・ ・ ・|七\r
| ・ ・ ・ ・ ・ ・ ・ ・ ・|八\r
| ・ 香 ・ ・ ・ ・ ・ ・ ・|九\r
+---------------------------+\r
先手の持駒：金　\r
先手：\r
後手：\r
手数----指手--\r
   1 ９六金打    \r
   2 ８四玉(95)  \r
   3 ８七香(89)  \r
   4 ８六飛打    \r
   5 ８五金(96)  \r
   6 同　飛(86)  \r
   7 同　香(87)  \r
   8 同　玉(84)  \r
   9 ８六飛打    \r
  10 ７五玉(85)  \r
  11 ４六飛(86)  \r
  12 ８四玉(75)  \r
  13 ８七香打    \r
  14 ８五角打    \r
  15 同　香(87)  \r
  16 同　玉(84)  \r
  17 ９六馬(97)  \r
  18 ８四玉(85)  \r
  19 ６二角打    \r
  20 ７三桂打    \r
  21 同　銀(82)  \r
  22 同　桂(81)  \r
  23 ８六飛(46)  \r
  24 ７五玉(84)  \r
  25 ６七桂打    \r
  26 ６四玉(75)  \r
  27 ７四馬(96)  \r
  28 ５四玉(64)  \r
  29 ６五馬(74)  \r
  30 同　桂(73)  \r
  31 ４四金打    \r
  32 ６四玉(54)  \r
  33 ７三角成(62)\r
  34 同　玉(64)  \r
  35 ８三飛成(86)\r
  36 ６二玉(73)  \r
  37 ６三銀成(72)\r
  38 ５一玉(62)  \r
  39 ５二成銀(63)\r
  40 同　玉(51)  \r
  41 ４三金(44)  \r
  42 ４一玉(52)  \r
  43 ４二歩打    \r
  44 ３一玉(41)  \r
  45 ３六香打    \r
  46 ３四歩打    \r
  47 同　香(36)  \r
  48 ３三金打    \r
  49 ３二金(43)  \r
  50 同　金(33)  \r
  51 同　香成(34)\r
  52 同　玉(31)  \r
  53 ３三金打    \r
  54 ２一玉(32)  \r
  55 ２二歩打    \r
  56 １一玉(21)  \r
  57 １二歩打    \r
  58 同　玉(11)  \r
  59 ２三金(33)  \r
  60 １一玉(12)  \r
  61 ８一龍(83)  \r
  62 詰み        \r
まで61手詰\r
`,T4=Object.assign({"../../data/shogi-kifu/aigakari.kif":ar,"../../data/shogi-kifu/tsume-fukaku-eureka.kif":ur,"../../data/shogi-kifu/tsume-kemuri-kitarubekimono.kif":_r,"../../data/shogi-kifu/tsume-kemuri-yousei2.kif":lr,"../../data/shogi-kifu/yumei/1/101.kif":cr,"../../data/shogi-kifu/yumei/1/102a.kif":mr,"../../data/shogi-kifu/yumei/1/102b.kif":dr,"../../data/shogi-kifu/yumei/1/104.kif":fr,"../../data/shogi-kifu/yumei/1/105.kif":gr,"../../data/shogi-kifu/yumei/1/106.kif":hr,"../../data/shogi-kifu/yumei/1/107.kif":kr,"../../data/shogi-kifu/yumei/1/108a.kif":yr,"../../data/shogi-kifu/yumei/1/108b.kif":br,"../../data/shogi-kifu/yumei/1/108c.kif":pr,"../../data/shogi-kifu/yumei/1/108d.kif":xr,"../../data/shogi-kifu/yumei/1/108e.kif":Vr,"../../data/shogi-kifu/yumei/1/108f.kif":jr,"../../data/shogi-kifu/yumei/1/108g.kif":Nr,"../../data/shogi-kifu/yumei/1/115a.kif":Sr,"../../data/shogi-kifu/yumei/1/115b.kif":wr,"../../data/shogi-kifu/yumei/1/115c.kif":Cr,"../../data/shogi-kifu/yumei/1/115d.kif":Pr,"../../data/shogi-kifu/yumei/1/119a.kif":$r,"../../data/shogi-kifu/yumei/1/119b.kif":Br,"../../data/shogi-kifu/yumei/1/119c.kif":Er,"../../data/shogi-kifu/yumei/2/201.kif":Ar,"../../data/shogi-kifu/yumei/2/202.kif":Lr,"../../data/shogi-kifu/yumei/2/203.kif":Ir,"../../data/shogi-kifu/yumei/2/204.kif":Or,"../../data/shogi-kifu/yumei/2/205.kif":Mr,"../../data/shogi-kifu/yumei/2/206.kif":Rr,"../../data/shogi-kifu/yumei/2/207.kif":Kr,"../../data/shogi-kifu/yumei/2/208.kif":Tr,"../../data/shogi-kifu/yumei/2/209.kif":Fr,"../../data/shogi-kifu/yumei/2/210.kif":Dr,"../../data/shogi-kifu/yumei/2/211.kif":zr,"../../data/shogi-kifu/yumei/2/212.kif":Gr,"../../data/shogi-kifu/yumei/2/213.kif":Hr,"../../data/shogi-kifu/yumei/2/214.kif":Ur,"../../data/shogi-kifu/yumei/2/215.kif":Jr,"../../data/shogi-kifu/yumei/2/216.kif":Wr,"../../data/shogi-kifu/yumei/2/217.kif":qr,"../../data/shogi-kifu/yumei/2/218.kif":Yr,"../../data/shogi-kifu/yumei/2/219.kif":Zr,"../../data/shogi-kifu/yumei/2/220.kif":Xr,"../../data/shogi-kifu/yumei/2/221.kif":Qr,"../../data/shogi-kifu/yumei/2/222.kif":n1,"../../data/shogi-kifu/yumei/2/223.kif":r1,"../../data/shogi-kifu/yumei/2/224.kif":i1,"../../data/shogi-kifu/yumei/2/225.kif":e1,"../../data/shogi-kifu/yumei/2/226.kif":v1,"../../data/shogi-kifu/yumei/2/227.kif":t1,"../../data/shogi-kifu/yumei/2/228.kif":o1,"../../data/shogi-kifu/yumei/2/229.kif":s1,"../../data/shogi-kifu/yumei/2/230.kif":a1,"../../data/shogi-kifu/yumei/2/231.kif":u1,"../../data/shogi-kifu/yumei/2/232.kif":_1,"../../data/shogi-kifu/yumei/2/233.kif":l1,"../../data/shogi-kifu/yumei/2/234.kif":c1,"../../data/shogi-kifu/yumei/2/235.kif":m1,"../../data/shogi-kifu/yumei/2/236.kif":d1,"../../data/shogi-kifu/yumei/2/237.kif":f1,"../../data/shogi-kifu/yumei/2/238.kif":g1,"../../data/shogi-kifu/yumei/2/239.kif":h1,"../../data/shogi-kifu/yumei/2/240.kif":k1,"../../data/shogi-kifu/yumei/2/241.kif":y1,"../../data/shogi-kifu/yumei/2/242.kif":b1,"../../data/shogi-kifu/yumei/2/243.kif":p1,"../../data/shogi-kifu/yumei/2/244.kif":x1,"../../data/shogi-kifu/yumei/2/245.kif":V1,"../../data/shogi-kifu/yumei/2/246.kif":j1,"../../data/shogi-kifu/yumei/2/247.kif":N1,"../../data/shogi-kifu/yumei/2/248.kif":S1,"../../data/shogi-kifu/yumei/2/249.kif":w1,"../../data/shogi-kifu/yumei/2/250.kif":C1,"../../data/shogi-kifu/yumei/2/251.kif":P1,"../../data/shogi-kifu/yumei/3/3101.kif":$1,"../../data/shogi-kifu/yumei/3/3102.kif":B1,"../../data/shogi-kifu/yumei/3/3103.kif":E1,"../../data/shogi-kifu/yumei/3/3104.kif":A1,"../../data/shogi-kifu/yumei/3/3105.kif":L1,"../../data/shogi-kifu/yumei/3/3106.kif":I1,"../../data/shogi-kifu/yumei/3/3107.kif":O1,"../../data/shogi-kifu/yumei/3/3108.kif":M1,"../../data/shogi-kifu/yumei/3/3109.kif":R1,"../../data/shogi-kifu/yumei/3/3110.kif":K1,"../../data/shogi-kifu/yumei/3/3111.kif":T1,"../../data/shogi-kifu/yumei/3/3112.kif":F1,"../../data/shogi-kifu/yumei/3/3113.kif":D1,"../../data/shogi-kifu/yumei/3/3114.kif":z1,"../../data/shogi-kifu/yumei/3/3201.kif":G1,"../../data/shogi-kifu/yumei/3/3202.kif":H1,"../../data/shogi-kifu/yumei/3/3203.kif":U1,"../../data/shogi-kifu/yumei/3/3204.kif":J1,"../../data/shogi-kifu/yumei/3/3205.kif":W1,"../../data/shogi-kifu/yumei/3/3206.kif":q1,"../../data/shogi-kifu/yumei/3/3207.kif":Y1,"../../data/shogi-kifu/yumei/3/3208.kif":Z1,"../../data/shogi-kifu/yumei/3/3209.kif":X1,"../../data/shogi-kifu/yumei/3/3210.kif":Q1,"../../data/shogi-kifu/yumei/3/3211.kif":n2,"../../data/shogi-kifu/yumei/3/3212.kif":r2,"../../data/shogi-kifu/yumei/3/3213.kif":i2,"../../data/shogi-kifu/yumei/3/3214.kif":e2,"../../data/shogi-kifu/yumei/3/3215.kif":v2,"../../data/shogi-kifu/yumei/3/3216.kif":t2,"../../data/shogi-kifu/yumei/3/3301.kif":o2,"../../data/shogi-kifu/yumei/3/3302.kif":s2,"../../data/shogi-kifu/yumei/3/3303.kif":a2,"../../data/shogi-kifu/yumei/3/3304.kif":u2,"../../data/shogi-kifu/yumei/3/3305.kif":_2,"../../data/shogi-kifu/yumei/3/3306.kif":l2,"../../data/shogi-kifu/yumei/3/3307.kif":c2,"../../data/shogi-kifu/yumei/3/3308.kif":m2,"../../data/shogi-kifu/yumei/3/3309.kif":d2,"../../data/shogi-kifu/yumei/3/3310.kif":f2,"../../data/shogi-kifu/yumei/3/3311.kif":g2,"../../data/shogi-kifu/yumei/3/3312.kif":h2,"../../data/shogi-kifu/yumei/3/3313.kif":k2,"../../data/shogi-kifu/yumei/3/3314.kif":y2,"../../data/shogi-kifu/yumei/3/3401.kif":b2,"../../data/shogi-kifu/yumei/3/3402.kif":p2,"../../data/shogi-kifu/yumei/3/3403.kif":x2,"../../data/shogi-kifu/yumei/3/3404.kif":V2,"../../data/shogi-kifu/yumei/3/3405.kif":j2,"../../data/shogi-kifu/yumei/3/3406.kif":N2,"../../data/shogi-kifu/yumei/3/3407.kif":S2,"../../data/shogi-kifu/yumei/3/3408.kif":w2,"../../data/shogi-kifu/yumei/3/3409.kif":C2,"../../data/shogi-kifu/yumei/3/3410.kif":P2,"../../data/shogi-kifu/yumei/3/3411.kif":$2,"../../data/shogi-kifu/yumei/3/3412.kif":B2,"../../data/shogi-kifu/yumei/3/3413.kif":E2,"../../data/shogi-kifu/yumei/3/3501.kif":A2,"../../data/shogi-kifu/yumei/3/3502.kif":L2,"../../data/shogi-kifu/yumei/3/3503.kif":I2,"../../data/shogi-kifu/yumei/3/3504.kif":O2,"../../data/shogi-kifu/yumei/3/3505.kif":M2,"../../data/shogi-kifu/yumei/3/3506.kif":R2,"../../data/shogi-kifu/yumei/3/3507.kif":K2,"../../data/shogi-kifu/yumei/3/3508.kif":T2,"../../data/shogi-kifu/yumei/3/3509.kif":F2,"../../data/shogi-kifu/yumei/3/3510.kif":D2,"../../data/shogi-kifu/yumei/3/3511.kif":z2,"../../data/shogi-kifu/yumei/3/3512.kif":G2,"../../data/shogi-kifu/yumei/3/3513.kif":H2,"../../data/shogi-kifu/yumei/3/3601.kif":U2,"../../data/shogi-kifu/yumei/3/3602.kif":J2,"../../data/shogi-kifu/yumei/3/3603.kif":W2,"../../data/shogi-kifu/yumei/3/3604.kif":q2,"../../data/shogi-kifu/yumei/3/3605.kif":Y2,"../../data/shogi-kifu/yumei/3/3606.kif":Z2,"../../data/shogi-kifu/yumei/3/3607.kif":X2,"../../data/shogi-kifu/yumei/4/4101.kif":Q2,"../../data/shogi-kifu/yumei/4/4102.kif":n3,"../../data/shogi-kifu/yumei/4/4103.kif":r3,"../../data/shogi-kifu/yumei/4/4104.kif":i3,"../../data/shogi-kifu/yumei/4/4105.kif":e3,"../../data/shogi-kifu/yumei/4/4106.kif":v3,"../../data/shogi-kifu/yumei/4/4107.kif":t3,"../../data/shogi-kifu/yumei/4/4108.kif":o3,"../../data/shogi-kifu/yumei/4/4109.kif":s3,"../../data/shogi-kifu/yumei/4/4201.kif":a3,"../../data/shogi-kifu/yumei/4/4202.kif":u3,"../../data/shogi-kifu/yumei/4/4203.kif":_3,"../../data/shogi-kifu/yumei/4/4204.kif":l3,"../../data/shogi-kifu/yumei/4/4205.kif":c3,"../../data/shogi-kifu/yumei/4/4206.kif":m3,"../../data/shogi-kifu/yumei/4/4207.kif":d3,"../../data/shogi-kifu/yumei/4/4208.kif":f3,"../../data/shogi-kifu/yumei/4/4209.kif":g3,"../../data/shogi-kifu/yumei/4/4210.kif":h3,"../../data/shogi-kifu/yumei/4/4211.kif":k3,"../../data/shogi-kifu/yumei/4/4212.kif":y3,"../../data/shogi-kifu/yumei/4/4213.kif":b3,"../../data/shogi-kifu/yumei/4/4301.kif":p3,"../../data/shogi-kifu/yumei/4/4302.kif":x3,"../../data/shogi-kifu/yumei/4/4303.kif":V3,"../../data/shogi-kifu/yumei/4/4304.kif":j3,"../../data/shogi-kifu/yumei/4/4305.kif":N3,"../../data/shogi-kifu/yumei/4/4306.kif":S3,"../../data/shogi-kifu/yumei/4/4307.kif":w3,"../../data/shogi-kifu/yumei/4/4308.kif":C3,"../../data/shogi-kifu/yumei/4/4309.kif":P3,"../../data/shogi-kifu/yumei/4/4310.kif":$3,"../../data/shogi-kifu/yumei/4/4311.kif":B3,"../../data/shogi-kifu/yumei/4/4312.kif":E3,"../../data/shogi-kifu/yumei/4/4313.kif":A3,"../../data/shogi-kifu/yumei/4/4401.kif":L3,"../../data/shogi-kifu/yumei/4/4402.kif":I3,"../../data/shogi-kifu/yumei/4/4403.kif":O3,"../../data/shogi-kifu/yumei/4/4404.kif":M3,"../../data/shogi-kifu/yumei/4/4405.kif":R3,"../../data/shogi-kifu/yumei/4/4406.kif":K3,"../../data/shogi-kifu/yumei/5/5101.kif":T3,"../../data/shogi-kifu/yumei/5/5102.kif":F3,"../../data/shogi-kifu/yumei/5/5103.kif":D3,"../../data/shogi-kifu/yumei/5/5104.kif":z3,"../../data/shogi-kifu/yumei/5/5105.kif":G3,"../../data/shogi-kifu/yumei/5/5106.kif":H3,"../../data/shogi-kifu/yumei/5/5107.kif":U3,"../../data/shogi-kifu/yumei/5/5108.kif":J3,"../../data/shogi-kifu/yumei/5/5109.kif":W3,"../../data/shogi-kifu/yumei/5/5110.kif":q3,"../../data/shogi-kifu/yumei/5/5111.kif":Y3,"../../data/shogi-kifu/yumei/5/5112.kif":Z3,"../../data/shogi-kifu/yumei/5/5113.kif":X3,"../../data/shogi-kifu/yumei/5/5201.kif":Q3,"../../data/shogi-kifu/yumei/5/5202.kif":n4,"../../data/shogi-kifu/yumei/5/5203.kif":r4,"../../data/shogi-kifu/yumei/5/5204.kif":i4,"../../data/shogi-kifu/yumei/5/5205.kif":e4,"../../data/shogi-kifu/yumei/5/5206.kif":v4,"../../data/shogi-kifu/yumei/5/5301.kif":t4,"../../data/shogi-kifu/yumei/5/5302.kif":o4,"../../data/shogi-kifu/yumei/5/5303.kif":s4,"../../data/shogi-kifu/yumei/5/5304.kif":a4,"../../data/shogi-kifu/yumei/5/5305.kif":u4,"../../data/shogi-kifu/yumei/5/5306.kif":_4,"../../data/shogi-kifu/yumei/5/5307.kif":l4,"../../data/shogi-kifu/yumei/5/5308.kif":c4,"../../data/shogi-kifu/yumei/5/5309.kif":m4,"../../data/shogi-kifu/yumei/5/5310.kif":d4,"../../data/shogi-kifu/yumei/5/5311.kif":f4,"../../data/shogi-kifu/yumei/5/5312.kif":g4,"../../data/shogi-kifu/yumei/5/5401.kif":h4,"../../data/shogi-kifu/yumei/5/5402.kif":k4,"../../data/shogi-kifu/yumei/5/5403.kif":y4,"../../data/shogi-kifu/yumei/5/5404.kif":b4,"../../data/shogi-kifu/yumei/5/5405.kif":p4,"../../data/shogi-kifu/yumei/5/5406.kif":x4,"../../data/shogi-kifu/yumei/5/5407.kif":V4,"../../data/shogi-kifu/yumei/5/5408.kif":j4,"../../data/shogi-kifu/yumei/5/5409.kif":N4,"../../data/shogi-kifu/yumei/5/5410.kif":S4,"../../data/shogi-kifu/yumei/5/5411.kif":w4,"../../data/shogi-kifu/yumei/5/5412.kif":C4,"../../data/shogi-kifu/yumei/5/5413.kif":P4,"../../data/shogi-kifu/yumei/5/5501.kif":$4,"../../data/shogi-kifu/yumei/5/5502.kif":B4,"../../data/shogi-kifu/yumei/5/5503.kif":E4,"../../data/shogi-kifu/yumei/5/5504.kif":A4,"../../data/shogi-kifu/yumei/5/5505.kif":L4,"../../data/shogi-kifu/yumei/5/5506.kif":I4,"../../data/shogi-kifu/yumei/5/5601.kif":O4,"../../data/shogi-kifu/yumei/5/5602.kif":M4,"../../data/shogi-kifu/yumei/5/5603.kif":R4,"../../data/shogi-kifu/yumei/5/5604.kif":K4}),hn=n=>(n.split("shogi-kifu/").pop()??n).replace(/\.(kif|json)$/i,"").split("/").map(e=>e.replace(/[-_]/g," ")).join(" / "),O=(n,i)=>{var e,v;return(v=(e=n.match(new RegExp(`^${i}：(.+)$`,"m")))==null?void 0:e[1])==null?void 0:v.trim()},F4=Object.entries(T4).map(([n,i])=>{var s;const e=n.toLowerCase().endsWith(".kif"),v=e?O(i,"作品名")??O(i,"作品番号")??hn(n):hn(n),o=Number(O(i,"手数"));return{path:n,title:v,extension:e?"kif":"json",content:i,category:O(i,"分类")||O(i,"分類")||((s=O(i,"備考"))==null?void 0:s.split("★")[0].trim())||(e?"棋谱":"项目"),author:O(i,"作者"),moveCount:Number.isFinite(o)&&o>0?o:void 0,description:O(i,"発表誌")??O(i,"出典"),interest:O(i,"解説")}}).sort((n,i)=>n.title.localeCompare(i.title,"zh-Hans")),D4=n=>{const i=C[n.owner].mark,e=Yn(n.piece,n.promotedBefore),v=n.drop?"打":n.from!==void 0?`(${Zn(n.from)})`:"",o=n.promotedAfter&&!n.promotedBefore?"成":"";return`${i}${_n(n.to)}${e}${v}${o}`},kn=(n,i,e)=>{const v=new Blob([i],{type:e}),o=URL.createObjectURL(v),s=document.createElement("a");s.href=o,s.download=n,s.click(),URL.revokeObjectURL(o)},yn=()=>{const n=new Date,i=e=>e.toString().padStart(2,"0");return`${n.getFullYear()}${i(n.getMonth()+1)}${i(n.getDate())}-${i(n.getHours())}${i(n.getMinutes())}`},wn=(n,i)=>{const e=n[i];return e?e.children.flatMap(v=>[v,...wn(n,v)]):[]},z4=n=>{const i=["#KIF version=2.0 encoding=UTF-8","# Generated by LUNA_PROTOCOL SHOGI_NODE",`開始日時：${new Date().toLocaleString("ja-JP")}`,"手合割：平手","先手：SENTE","後手：GOTE","手数----指手---------消費時間--"],e=s=>{s.move&&(i.push(`${s.moveNumber} ${s.move.notation}`),s.comment.trim()&&s.comment.split(/\r?\n/).forEach(_=>i.push(`*${_}`)))},v=s=>{let _=s;for(;_;){const t=n[_];if(!t)break;e(t),t.children.slice(1).forEach(m=>{const h=n[m];h&&(i.push(""),i.push(`変化：${h.moveNumber}手`),v(m))}),_=t.children[0]}},o=n[P];return o!=null&&o.children[0]&&v(o.children[0]),o==null||o.children.slice(1).forEach(s=>{i.push(""),i.push("変化：1手"),v(s)}),`${i.join(`
`)}
`},G4=["９","８","７","６","５","４","３","２","１"],q={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10},H4=n=>{if(/^\d+$/.test(n))return Number(n);if(n==="十")return 10;if(n.startsWith("十"))return 10+(q[n.slice(1)]??0);if(n.endsWith("十"))return(q[n.slice(0,-1)]??0)*10;if(n.includes("十")){const[i,e]=n.split("十");return(q[i]??0)*10+(q[e]??0)}return q[n]??0},U4=n=>{const i=n.trim().replace(/^Ｖ/,"v"),e=i.startsWith("v")?"gote":"sente",v=i.replace(/^v/,""),o=jn.find(([s])=>s===v);return o?{kind:o[1],promoted:o[2],owner:e}:null},J4=n=>{const i=n.map(o=>o.trim()).map(o=>o.match(/^\|(.+)\|[一二三四五六七八九]$/)).filter(o=>!!o);if(i.length!==9)return null;const e=Array.from({length:81},()=>null),v=/[vＶ]?(?:成銀|成桂|成香|龍|竜|馬|と|玉|王|飛|角|金|銀|桂|香|歩|步|・)/g;return i.forEach((o,s)=>{const _=o[1].replace(/\s+/g,"").match(v)??[];_.length===9&&_.forEach((t,m)=>{if(t==="・"||t===".")return;const h=U4(t);h&&(e[s*9+m]=I(h.kind,h.owner,h.promoted,`kif-${s}-${m}`))})}),e},W4=n=>{const i={sente:{R:0,B:0,G:0,S:0,N:0,L:0,P:0},gote:{R:0,B:0,G:0,S:0,N:0,L:0,P:0}},e=[["飛","R"],["角","B"],["金","G"],["銀","S"],["桂","N"],["香","L"],["歩","P"]];return n.forEach(v=>{const o=v.trim().match(/^(先手|後手)の持駒：(.+)$/);if(!o||o[2]==="なし")return;const s=o[1]==="先手"?"sente":"gote";e.forEach(([_,t])=>{const m=o[2].match(new RegExp(`${_}([一二三四五六七八九十\\d]+)`));m&&(i[s][t]=H4(m[1]))})}),i},Q=(n,i=P)=>{var v;let e=i;for(;(v=n[e])!=null&&v.children[0];)e=n[e].children[0];return e},q4=n=>{var e;const i=JSON.parse(n);if(!((e=i.nodes)!=null&&e[P]))throw new Error("JSON 中没有 root 节点。");return{nodes:i.nodes,currentId:i.currentId&&i.nodes[i.currentId]?i.currentId:Q(i.nodes)}},Y4=(n,i)=>{if(!(n<1||n>9||i<1||i>9))return(i-1)*9+(9-n)},Z4=(n,i)=>{const e=G4.indexOf(n),v=ln.indexOf(i);if(!(e<0||v<0))return v*9+e},X4=(n,i)=>{const e=n.match(/^\s*(\d+)\s+(.+)$/);if(!e)return null;const v=Number(e[1]);if(!Number.isFinite(v))return null;const o=e[2].trim().replace(/\s+\(.+$/,""),_=(o.startsWith("△")?"gote":o.startsWith("▲")?"sente":void 0)??(v%2===1?"sente":"gote");let t=o.replace(/^[▲△]/,"").replace(/\u3000/g," ").trim(),m;if(t.startsWith("同")?(m=i,t=t.replace(/^同\s*/,"")):(m=Z4(t.slice(0,1),t.slice(1,2)),t=t.slice(2).trim()),m===void 0)return null;const h=jn.find(([d])=>t.startsWith(d));if(!h)return null;const[l,g,c]=h,b=t.slice(l.length),p=b.match(/\(([1-9])([1-9])\)/),a=p?Y4(Number(p[1]),Number(p[2])):void 0;return{moveNumber:v,owner:_,piece:g,promotedBefore:c,promotedAfter:c||!c&&b.includes("成")&&!b.includes("不成"),from:a,to:m,drop:b.includes("打"),notation:o}},Q4=(n,i)=>{const e=n.findIndex(v=>!!v&&(v==null?void 0:v.owner)===i.owner&&v.kind===i.piece&&v.promoted===i.promotedBefore);return e>=0?e:void 0},n5=(n,i,e)=>{const v=M(n),o=X(i),s=e.drop?void 0:e.from??Q4(n,e),_=s!==void 0&&v[s]?v[s]:I(e.piece,e.owner,e.promotedBefore,`import-${e.moveNumber}`),t=v[e.to];return s!==void 0&&(v[s]=null),e.drop&&e.piece!=="K"&&o[e.owner][e.piece]>0&&(o[e.owner][e.piece]-=1),t&&t.kind!=="K"&&(o[e.owner][t.kind]+=1),v[e.to]={..._,owner:e.owner,kind:e.piece,promoted:e.promotedAfter},{board:v,hands:o,record:{owner:e.owner,piece:e.piece,promotedBefore:e.promotedBefore,promotedAfter:e.promotedAfter,from:s,to:e.to,drop:e.drop,captured:t?{kind:t.kind,promoted:t.promoted,owner:t.owner}:void 0,notation:e.notation}}},r5=(n,i)=>!!n&&n.owner===i.owner&&n.piece===i.piece&&n.promotedBefore===i.promotedBefore&&n.promotedAfter===i.promotedAfter&&n.from===i.from&&n.to===i.to&&!!n.drop===i.drop,i5=n=>{const i=n.split(/\r?\n/),e=an(J4(i)??void 0,W4(i)),v={[P]:e};let o=P,s=null,_=0;const t=Date.now(),m=new Set,h={0:P},l=(g,c,b)=>{const p=v[g];if(p){if(b||m.has(g)){p.children=[...p.children,c];return}p.children=[c,...p.children],m.add(g)}};return n.split(/\r?\n/).forEach(g=>{var R;const c=g.trim();if(!c)return;const b=c.match(/^変化：\s*(\d+)手/);if(b){s=Number(b[1]);return}if(c.startsWith("*")){const $=v[o]??v[P];$.comment=[$.comment,c.slice(1).trim()].filter(Boolean).join(`
`);return}if(c.startsWith("#")||c.includes("手数----"))return;const p=c.match(/^\s*(\d+)\s+/),a=p?Number(p[1]):NaN;if(!Number.isFinite(a))return;const d=h[a-1],j=d?v[d]:void 0;if(!j)return;const S=X4(c,(R=j.move)==null?void 0:R.to);if(!S)return;const w=j.children.find($=>{var z;return r5((z=v[$])==null?void 0:z.move,S)});if(w){o=w,h[S.moveNumber]=w,Object.keys(h).forEach($=>{Number($)>S.moveNumber&&delete h[Number($)]}),s=null;return}const L=n5(j.board,j.hands,S);_+=1;const V=`import-${S.moveNumber}-${_}`,K=s===S.moveNumber;l(d,V,K),v[V]={id:V,parentId:d,children:[],move:L.record,board:L.board,hands:L.hands,comment:"",moveNumber:S.moveNumber,createdAt:t+_},o=V,h[S.moveNumber]=V,Object.keys(h).forEach($=>{Number($)>S.moveNumber&&delete h[Number($)]}),s=null}),{nodes:v,currentId:Q(v)}},cn=n=>n==="sente"?-1:1,bn=(n,i)=>{const{row:e}=D(i);return n==="sente"?e<=2:e>=6},e5=(n,i,e)=>!n.promoted&&F.includes(n.kind)&&(bn(n.owner,i)||bn(n.owner,e)),v5=(n,i)=>{if(n.promoted)return!1;const{row:e}=D(i);return n.kind==="P"||n.kind==="L"?n.owner==="sente"?e===0:e===8:n.kind==="N"?n.owner==="sente"?e<=1:e>=7:!1},Z=(n,i,e,v,o)=>{const s=D(i),_=D(e);let t=s.row+v,m=s.col+o;for(;t!==_.row||m!==_.col;){if(n[t*9+m])return!1;t+=v,m+=o}return!0},pn=(n,i,e)=>{const v=cn(n);return i===v&&Math.abs(e)<=1||i===0&&Math.abs(e)===1||i===-v&&e===0},t5=(n,i,e)=>{const v=cn(n);return i===v&&Math.abs(e)<=1||i===-v&&Math.abs(e)===1},Cn=(n,i,e,v)=>{const o=D(e),s=D(v),_=s.row-o.row,t=s.col-o.col,m=Math.abs(_),h=Math.abs(t),l=cn(i.owner);if(_===0&&t===0)return!1;if(i.promoted&&["S","N","L","P"].includes(i.kind))return pn(i.owner,_,t);switch(i.kind){case"K":return Math.max(m,h)===1;case"G":return pn(i.owner,_,t);case"S":return t5(i.owner,_,t);case"N":return _===l*2&&h===1;case"L":return t===0&&_*l>0&&Z(n,e,v,l,0);case"P":return t===0&&_===l;case"R":return _===0&&t!==0?Z(n,e,v,0,Math.sign(t)):t===0&&_!==0?Z(n,e,v,Math.sign(_),0):i.promoted&&m===1&&h===1;case"B":return m===h?Z(n,e,v,Math.sign(_),Math.sign(t)):i.promoted&&(m===1&&t===0||_===0&&h===1);default:return!1}},o5=(n,i,e)=>{const{col:v}=D(e);return n.some((o,s)=>s%9===v&&(o==null?void 0:o.owner)===i&&o.kind==="P"&&!o.promoted)},Pn=(n,i)=>{const e=n.findIndex(v=>(v==null?void 0:v.owner)===i&&v.kind==="K");return e<0?!1:n.some((v,o)=>!!v&&(v==null?void 0:v.owner)!==i&&Cn(n,v,o,e))},s5=(n,i,e,v)=>{const o=M(n),s=o[e];return s?(o[e]=null,o[v]=s,Pn(o,i)):!1},a5=(n,i,e,v)=>{const o=M(n);return o[v]={id:"validation-drop",kind:e,owner:i,promoted:!1},Pn(o,i)},u5=(n,i,e,v)=>{const o=n[e],s=n[v];return o?o.owner!==i?{legal:!1,reason:`现在轮到${C[i].label}。`}:(s==null?void 0:s.owner)===o.owner?{legal:!1,reason:"不能吃自己的棋子。"}:(s==null?void 0:s.kind)==="K"?{legal:!1,reason:"不能直接吃王。"}:Cn(n,o,e,v)?s5(n,o.owner,e,v)?{legal:!1,reason:"这手会让己方王处于被攻击状态。"}:{legal:!0,canPromote:e5(o,e,v),mustPromote:v5(o,v)}:{legal:!1,reason:"该棋子的走法不能到达目标格。"}:{legal:!1,reason:"没有可移动的棋子。"}},_5=(n,i,e,v,o,s)=>{if(v!==e)return{legal:!1,reason:`现在轮到${C[e].label}。`};if(n[s])return{legal:!1,reason:"目标格已有棋子。"};if(i[v][o]<=0)return{legal:!1,reason:"没有这枚持驹。"};const{row:_}=D(s);return(o==="P"||o==="L")&&(v==="sente"?_===0:_===8)?{legal:!1,reason:"步兵和香车不能打在最后一段。"}:o==="N"&&(v==="sente"?_<=1:_>=7)?{legal:!1,reason:"桂马不能打在无法前进的段。"}:o==="P"&&o5(n,v,s)?{legal:!1,reason:"同一筋不能有两枚未升变的步。"}:a5(n,v,o,s)?{legal:!1,reason:"这手不能解除己方王被攻击。"}:{legal:!0}},l5=(n,i)=>!!n&&n.owner===i.owner&&n.piece===i.piece&&n.promotedBefore===i.promotedBefore&&n.promotedAfter===i.promotedAfter&&n.from===i.from&&n.to===i.to&&!!n.drop==!!i.drop,c5=({board:n,currentId:i,hands:e,mode:v,nextPlayer:o,nodes:s,pendingPromotion:_,selection:t,serialRef:m,setupOwner:h,setupPromoted:l,pushNotice:g,setCurrentId:c,setMode:b,setNodes:p,setPendingPromotion:a,setSelection:d,setSetupOwner:j,setSetupPromoted:S})=>{const w=()=>{d(null),a(null)},L=(u,f,x=!1)=>(m.current+=1,I(u,f,x,`runtime-${m.current}`)),V=(u,f)=>{p(x=>({...x,[i]:{...x[i],board:u,hands:f}}))},K=(u,f,x)=>{const y=s[i];if(!y)return;const B=y.children.find(N=>{var H;return l5((H=s[N])==null?void 0:H.move,u)});if(B){c(B),w();return}m.current+=1;const A=`node-${Date.now().toString(36)}-${m.current}`,k={...u,notation:D4(u)};p(N=>({...N,[i]:{...N[i],children:[...N[i].children,A]},[A]:{id:A,parentId:i,children:[],move:k,board:f,hands:x,comment:"",moveNumber:y.moveNumber+1,createdAt:Date.now()}})),c(A),w()},R=(u,f,x=!1)=>{const y=n[u],B=n[f];if(!y)return;const A=M(n),k=X(e),N=y.promoted||x;A[u]=null,A[f]={...y,promoted:N},B&&B.kind!=="K"&&(k[y.owner][B.kind]+=1),K({owner:y.owner,piece:y.kind,promotedBefore:y.promoted,promotedAfter:N,from:u,to:f,captured:B?{kind:B.kind,promoted:B.promoted,owner:B.owner}:void 0},A,k)},$=(u,f,x)=>{const y=_5(n,e,o,u,f,x);if(!y.legal)return g(y.reason??"不能在这里打入。");const B=M(n),A=X(e);B[x]=L(f,u,!1),A[u][f]-=1,K({owner:u,piece:f,promotedBefore:!1,promotedAfter:!1,to:x,drop:!0},B,A)},z=(u,f)=>{if((t==null?void 0:t.source)==="palette"){const x=M(n);return x[u]=L(t.kind,t.owner,t.promoted),V(x,e),void a(null)}if((t==null?void 0:t.source)==="board"){if(t.index===u)return w();const x=M(n),y=x[t.index];return y?(x[t.index]=null,x[u]=y,V(x,e),d({source:"board",index:u}),void a(null)):w()}d(f?{source:"board",index:u}:null),a(null)},nn=(u,f)=>{if((t==null?void 0:t.source)!=="board")return;if(t.index===u)return w();const x=n[t.index];if((f==null?void 0:f.owner)===(x==null?void 0:x.owner))return f.owner===o?(d({source:"board",index:u}),void a(null)):g(`现在轮到${C[o].label}。`);const y=u5(n,o,t.index,u);if(!y.legal)return g(y.reason??"这手不合法。");if(y.mustPromote)return R(t.index,u,!0);if(y.canPromote)return void a({from:t.index,to:u});R(t.index,u,!1)},U=u=>{const f=n[u];if(v==="setup")return z(u,f);if((t==null?void 0:t.source)==="hand")return $(t.owner,t.kind,u);if((t==null?void 0:t.source)==="board")return nn(u,f);if(f&&f.owner!==o)return g(`现在轮到${C[o].label}。`);d(f?{source:"board",index:u}:null),a(null)},G=u=>{b("setup"),d({source:"palette",kind:u,owner:h,promoted:l&&F.includes(u)})},rn=(u,f)=>{if(!(v==="setup"||e[u][f]<=0)){if(u!==o)return g(`现在轮到${C[o].label}。`);d({source:"hand",owner:u,kind:f}),a(null)}},en=(u,f,x)=>{const y=X(e);y[u][f]=Math.max(0,y[u][f]+x),V(n,y)},vn=()=>{if((t==null?void 0:t.source)!=="board")return;const u=M(n);u[t.index]=null,V(u,e),w()},tn=()=>{if((t==null?void 0:t.source)!=="board")return;const u=M(n),f=u[t.index];f&&(f.owner=f.owner==="sente"?"gote":"sente",V(u,e))},J=()=>{if((t==null?void 0:t.source)!=="board")return;const u=M(n),f=u[t.index];!f||!F.includes(f.kind)||(f.promoted=!f.promoted,V(u,e))};return{changeHandCount:en,changeSetupOwner:u=>{j(u),(t==null?void 0:t.source)==="palette"&&d({...t,owner:u})},changeSetupPromoted:u=>{S(u),(t==null?void 0:t.source)==="palette"&&d({...t,promoted:u&&F.includes(t.kind)})},clearPosition:()=>{V(Nn(),Sn()),w()},clearTransient:w,flipSelectedOwner:tn,handleBoardClick:U,recordPendingPromotion:u=>_&&R(_.from,_.to,u),removeSelectedPiece:vn,selectHandPiece:rn,selectPalettePiece:G,selectedBoardPiece:(t==null?void 0:t.source)==="board"?n[t.index]:null,setModeAndClear:u=>{b(u),w()},toggleSelectedPromotion:J}},m5=()=>{const[n,i]=E.useState(()=>({[P]:an()})),[e,v]=E.useState(P),[o,s]=E.useState("record"),[_,t]=E.useState("sente"),[m,h]=E.useState(!1),[l,g]=E.useState(null),[c,b]=E.useState(null),[p,a]=E.useState("idle"),[d,j]=E.useState(""),[S,w]=E.useState(""),L=E.useRef(0),V=n[e]??n[P],K=V.board,R=V.hands,$=V.moveNumber%2===0?"sente":"gote",z=E.useMemo(()=>{var H;const k=[];let N=e;for(;N;)k.push(N),N=(H=n[N])==null?void 0:H.parentId;return k.reverse()},[e,n]),nn=E.useMemo(()=>z.map(k=>n[k]).filter(k=>!!(k!=null&&k.move)),[z,n]),U=k=>{j(k),window.setTimeout(()=>j(N=>N===k?"":N),1800)},G=c5({board:K,currentId:e,hands:R,mode:o,nextPlayer:$,nodes:n,pendingPromotion:l,selection:c,serialRef:L,setupOwner:_,setupPromoted:m,pushNotice:U,setCurrentId:v,setMode:s,setNodes:i,setPendingPromotion:g,setSelection:b,setSetupOwner:t,setSetupPromoted:h}),rn=()=>{i({[P]:an()}),v(P),G.clearTransient(),w(""),j("")},en=()=>{if(e===P||!V.parentId)return;const k=V.parentId,N=[e,...wn(n,e)];i(H=>{const W={...H};return N.forEach(on=>delete W[on]),W[k]={...W[k],children:W[k].children.filter(on=>on!==e)},W}),v(k),G.clearTransient()},vn=k=>{i(N=>({...N,[e]:{...N[e],comment:k}}))},tn=k=>{try{const N=k.extension==="json"?q4(k.content):i5(k.content);i(N.nodes),v(P),s("record"),G.clearTransient(),w(k.path),U(`已载入 ${k.title}`)}catch(N){U(N instanceof Error?N.message:"棋谱读取失败。")}},J=z4(n),u=()=>kn(`luna-shogi-${yn()}.kif`,J,"text/plain;charset=utf-8"),f=()=>{const k={version:"luna-shogi-kifu-v1",exportedAt:new Date().toISOString(),currentId:e,nodes:n};kn(`luna-shogi-${yn()}.json`,JSON.stringify(k,null,2),"application/json;charset=utf-8")},x=()=>{navigator.clipboard.writeText(J).then(()=>{a("copied"),window.setTimeout(()=>a("idle"),1200)})},y=k=>{v(k),G.clearTransient()},B=()=>y(P),A=()=>y(Q(n,e));return{activeStoredPath:S,board:K,copyKif:x,copyState:p,currentId:e,currentNode:V,deleteCurrentNode:en,exportJson:f,exportKif:u,hands:R,kifPreview:J,loadStoredKifu:tn,mode:o,moveLine:nn,nextPlayer:$,nodes:n,notice:d,pendingPromotion:l,pendingPromotionPiece:l?K[l.from]:null,resetToInitial:rn,selectNode:y,selection:c,setupOwner:_,setupPromoted:m,stepBack:()=>V.parentId&&y(V.parentId),stepForward:()=>V.children[0]&&y(V.children[0]),goToStart:B,goToEnd:A,updateComment:vn,...G}},d5=n=>n instanceof HTMLElement?n.isContentEditable||n.closest("input, textarea, select, [contenteditable='true']")!==null:!1,f5=({currentId:n,currentNode:i,mode:e,nodes:v,pendingPromotion:o,selectedBoardPiece:s,cancelTransient:_,deleteCurrentNode:t,recordPendingPromotion:m,removeSelectedPiece:h,selectNode:l,setModeAndClear:g,stepBack:c,stepForward:b})=>{E.useEffect(()=>{const p=a=>{if(a.defaultPrevented||d5(a.target)||a.altKey||a.ctrlKey||a.metaKey)return;const d=a.key.toLowerCase(),j=i.parentId?v[i.parentId]:void 0,S=(j==null?void 0:j.children)??[],w=S.indexOf(n),L=/^[1-9]$/.test(a.key)?Number(a.key)-1:-1;if(o){if(d==="enter"||d==="y"){a.preventDefault(),m(!0);return}if(d==="n"){a.preventDefault(),m(!1);return}d==="escape"&&(a.preventDefault(),_());return}if(L>=0&&i.children[L]){a.preventDefault(),l(i.children[L]);return}switch(d){case"arrowleft":i.parentId&&(a.preventDefault(),c());break;case"arrowright":i.children[0]&&(a.preventDefault(),b());break;case"arrowup":w>0&&(a.preventDefault(),l(S[w-1]));break;case"arrowdown":w>=0&&w<S.length-1&&(a.preventDefault(),l(S[w+1]));break;case"home":n!==P&&(a.preventDefault(),l(P));break;case"end":{const V=Q(v,n);V!==n&&(a.preventDefault(),l(V));break}case"r":a.preventDefault(),g("record");break;case"s":a.preventDefault(),g("setup");break;case"escape":a.preventDefault(),_();break;case"delete":e==="setup"&&s?(a.preventDefault(),h()):n!==P&&(a.preventDefault(),t());break}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[_,n,i,t,e,v,o,m,h,s,l,g,c,b])},y5=()=>{var i,e;const n=m5();return f5(n),r.jsxs("section",{className:"shogi-page relative min-h-dvh overflow-hidden px-2 pb-24 pt-5 text-slate-100 sm:px-4 md:px-8 md:pb-20 md:pt-40",children:[r.jsx("div",{className:"shogi-scanline","aria-hidden":"true"}),r.jsx("div",{className:"shogi-grid-glow","aria-hidden":"true"}),r.jsxs("div",{className:"relative z-10 mx-auto flex w-full max-w-[1540px] flex-col gap-4",children:[r.jsx(Qn,{nextPlayer:n.nextPlayer,moveNumber:n.currentNode.moveNumber,nodeCount:Object.keys(n.nodes).length}),r.jsxs("div",{className:"shogi-workspace",children:[r.jsxs("div",{className:"shogi-main-column",children:[r.jsx(Xn,{board:n.board,hands:n.hands,mode:n.mode,nextPlayer:n.nextPlayer,notice:n.notice,selection:n.selection,pendingPromotion:n.pendingPromotion,pendingPromotionPiece:n.pendingPromotionPiece,lastFrom:(i=n.currentNode.move)==null?void 0:i.from,lastTo:(e=n.currentNode.move)==null?void 0:e.to,onSetMode:n.setModeAndClear,onBoardClick:n.handleBoardClick,onHandSelect:n.selectHandPiece,onHandCountChange:n.changeHandCount,onPromotionChoice:n.recordPendingPromotion}),r.jsx(rr,{currentId:n.currentId,currentNode:n.currentNode,nodes:n.nodes,lineLength:n.moveLine.length,onSelectNode:n.selectNode,onGoToStart:n.goToStart,onStepBack:n.stepBack,onStepForward:n.stepForward,onGoToEnd:n.goToEnd,onDeleteCurrent:n.deleteCurrentNode})]}),r.jsxs("div",{className:"shogi-rail",children:[r.jsx(sr,{nodes:n.nodes,currentId:n.currentId,currentNode:n.currentNode,onSelectNode:n.selectNode,onCommentChange:n.updateComment}),r.jsx(or,{moveLine:n.moveLine,currentId:n.currentId,setupOwner:n.setupOwner,setupPromoted:n.setupPromoted,selection:n.selection,selectedBoardPiece:n.selectedBoardPiece,storedFiles:F4,activeStoredPath:n.activeStoredPath,copyState:n.copyState,kifPreview:n.kifPreview,onSetupOwnerChange:n.changeSetupOwner,onSetupPromotedChange:n.changeSetupPromoted,onPaletteSelect:n.selectPalettePiece,onClearPosition:n.clearPosition,onReset:n.resetToInitial,onFlipSelectedOwner:n.flipSelectedOwner,onToggleSelectedPromotion:n.toggleSelectedPromotion,onRemoveSelectedPiece:n.removeSelectedPiece,onStoredLoad:n.loadStoredKifu,onExportKif:n.exportKif,onExportJson:n.exportJson,onCopyKif:n.copyKif,onSelectLineNode:n.selectNode})]})]})]})]})};export{y5 as default};
