import fs from "node:fs";
import path from "node:path";

const targetRoot = process.argv[2] ?? "src/data/shogi-kifu/yumei";

const specialNotes = {
  "1/101.kif": "初形容易记忆，手顺中包含关键妙手；也是公开同一作检索中收录次数最多的作品。",
  "1/102a.kif": "实战型的好作，棋形自然，适合观察如何从看似普通的局面提炼唯一手顺。",
  "1/102b.kif": "立体曲詰：初形构成“二”，詰上り构成“上”，是为庆祝二上达也升为六段而作。",
  "1/104.kif": "裸玉名作：初形只有玉，所有防守资源都藏在持驹和王的活动范围里。",
  "1/105.kif": "烟詰的代表性起点之一：初形 39 枚，詰上り只剩 3 枚，逐步清场的过程非常壮观。",
  "1/106.kif": "大道棋香步问题，与 108f 是姊妹作；只差一枚步的位置，詰手顺就会完全改变。",
  "1/107.kif": "裸玉的早期代表作，几乎没有盘上掩体，却能用极少的线索构成完整机关。",
  "1/108a.kif": "常被当作例题的短篇，适合练习第一手的辨识与后续强制应答。",
  "1/108b.kif": "从飞角图式走向途中裸玉，盘面信息会逐渐被剥离，构思转换很有意思。",
  "1/108c.kif": "《寿》是 611 手超长篇，重点不在短促杀法，而在漫长强制过程中的节奏与资源管理。",
  "1/108d.kif": "《待宵》第 31 番，常用作打步詰回避的例题；看似只差一步，合法詰形却完全不同。",
  "1/108e.kif": "《新扇詰》是 873 手超长篇，适合体验大型长篇詰将棋的耐心与全局控制。",
  "1/108f.kif": "另一道大道棋香步问题，与 106 是姊妹作；比较两题最能看出一格差异如何改变全局。",
  "1/108g.kif": "岩木锦太郎的香步问题，达到 63 手，变化深且难解，属于大道棋中的长线作品。",
  "1/115a.kif": "初代大桥宗桂的实战型好作，古典棋形和实战感结合得很自然。",
  "1/115b.kif": "实战型小驹图式，重心落在细小棋子的配合与逐步收紧，而不是大子暴力压制。",
  "1/115c.kif": "《待宵》第 19 番，以连续飞车捨为看点；每次捨飞都改变下一阶段的控制线。",
  "1/115d.kif": "大道棋双玉问题，解答中会出现逆王手，双方王同时参与让常规直觉失效。",
  "1/119a.kif": "《将棋图巧》第 1 番，属于“角送り詰”趣向作；角的连续转移是全题的骨架。",
  "1/119b.kif": "《待宵》第 5 番，初形很像实战局面，趣味在于自然棋形下隐藏着唯一的精确手顺。",
  "1/119c.kif": "连续飞车不成是主要看点；不升变反而保留控制线，体现詰将棋对不成的精细利用。",
};

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const filePath = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(filePath) : filePath.endsWith(".kif") ? [filePath] : [];
});

const getHeader = (content, key) => content.match(new RegExp(`^${key}：(.+)$`, "m"))?.[1].trim() ?? "";

const getBoardPieces = (content) => {
  const board = content
    .split(/\r?\n/)
    .filter((line) => /^\|.*\|[一二三四五六七八九]$/.test(line.trim()))
    .join("\n");
  return board.match(/[v]?[玉王飛角金銀桂香歩と龍馬全圭杏]/g) ?? [];
};

const getFeatures = (content) => {
  const moves = Number(getHeader(content, "手数").match(/\d+/)?.[0] ?? 0);
  const classification = getHeader(content, "分類");
  const pieceCount = getBoardPieces(content).length;
  const kingCount = getBoardPieces(content).filter((piece) => /玉|王/.test(piece)).length;
  const hasNonPromotion = /不成/.test(content);
  const hasCapture = /同\s*[玉王飛角金銀桂香歩]/.test(content);

  return { moves, classification, pieceCount, kingCount, hasNonPromotion, hasCapture };
};

const buildInterest = (relativePath, content) => {
  const special = specialNotes[relativePath];
  if (special) return special;

  const { moves, classification, pieceCount, kingCount, hasNonPromotion, hasCapture } = getFeatures(content);
  const reasons = [];

  if (classification.includes("煙詰") || getHeader(content, "作品名").includes("煙詰")) {
    reasons.push("属于烟詰方向，盘面棋子会在强制手顺中逐步减少");
  } else if (classification.includes("裸玉") || pieceCount === 1) {
    reasons.push("裸玉构型让防守资源极少，王的位置和持驹成为解题核心");
  } else if (kingCount >= 2 || classification.includes("双玉")) {
    reasons.push("双玉构型会引入逆王手等反直觉应对");
  } else if (classification.includes("大道")) {
    reasons.push("属于大道棋，初形通常朴素，却隐藏着连续的强制机关");
  } else if (classification.includes("七種合")) {
    reasons.push("七种合是核心趣向，需要观察防守方如何用不同棋种制造变化");
  } else if (classification.includes("四桂")) {
    reasons.push("四桂詰把桂马的跳跃控制集中起来，局面辨识度很高");
  } else if (classification.includes("鋸")) {
    reasons.push("带有锯类趣向，关键棋子会往返移动并反复改变控制线");
  } else if (classification.includes("持駒変換")) {
    reasons.push("通过取子和打入改变持驹组合，解答过程像是在逐步换装机关");
  } else if (classification.includes("龍追い")) {
    reasons.push("以龙追玉为主轴，长距离控制线会连续变化");
  } else if (classification.includes("知恵の輪")) {
    reasons.push("属于智力环式构思，局部限制会层层解除");
  } else if (classification.includes("実戦初形")) {
    reasons.push("实战初形很自然，趣味在于普通棋形下隐藏着唯一解");
  } else if (pieceCount <= 3) {
    reasons.push("盘面棋子极少，几乎每一枚棋子都承担明确的功能");
  } else if (pieceCount >= 30) {
    reasons.push("初形棋子密集，适合观察复杂防守资源如何被逐步清理");
  } else if (moves <= 7) {
    reasons.push("属于短篇，适合练习第一手和强制应答的精度");
  } else if (moves >= 100) {
    reasons.push("手数极长，重点在于全局节奏、资源循环和长期强制性");
  } else if (moves >= 50) {
    reasons.push("属于长篇，局部妙手会嵌在较长的强制路线中");
  } else if (moves >= 17) {
    reasons.push("属于中篇，既有短篇的清晰主题，也需要持续维护攻防关系");
  } else {
    reasons.push("手数适中，适合从局部战术入手观察完整的詰手顺");
  }

  if (hasNonPromotion) reasons.push("解答中包含不成选择，升变反而可能破坏关键控制");
  if (hasCapture) reasons.push("同棋和连续取子会不断重置局面关系");
  if (getHeader(content, "完全性").includes("駒余り")) reasons.push("允许駒余り，詰上り并非单纯追求清空棋盘");

  return reasons.join("；") + "。";
};

for (const filePath of walk(targetRoot)) {
  const relativePath = path.relative(targetRoot, filePath).split(path.sep).join("/");
  let content = fs.readFileSync(filePath, "utf8").replace(/^解説：.+\r?\n/m, "");
  const explanation = buildInterest(relativePath, content);
  const marker = content.match(/^手合割：.*$/m)?.[0];
  if (!marker) continue;
  content = content.replace(marker, `解説：${explanation}\n${marker}`);
  fs.writeFileSync(filePath, content);
}
