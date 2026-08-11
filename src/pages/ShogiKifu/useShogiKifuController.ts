import { useMemo, useRef, useState } from "react";
import { ROOT_ID } from "./constants";
import { buildKif, downloadTextFile, findMainlineEnd, formatTimestamp, getDescendantIds, readJsonProject, readKifProject } from "./kifu";
import { createRootNode } from "./model";
import { useBoardCommands } from "./useBoardCommands";
import type { KifuNode, PendingPromotion, Player, Selection, StoredKifuFile, ToolMode } from "./types";

export const useShogiKifuController = () => {
  const [nodes, setNodes] = useState<Record<string, KifuNode>>(() => ({ [ROOT_ID]: createRootNode() }));
  const [currentId, setCurrentId] = useState(ROOT_ID);
  const [mode, setMode] = useState<ToolMode>("record");
  const [setupOwner, setSetupOwner] = useState<Player>("sente");
  const [setupPromoted, setSetupPromoted] = useState(false);
  const [pendingPromotion, setPendingPromotion] = useState<PendingPromotion | null>(null);
  const [selection, setSelection] = useState<Selection>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [notice, setNotice] = useState("");
  const [activeStoredPath, setActiveStoredPath] = useState("");
  const serialRef = useRef(0);

  const currentNode = nodes[currentId] ?? nodes[ROOT_ID];
  const board = currentNode.board;
  const hands = currentNode.hands;
  const nextPlayer: Player = currentNode.moveNumber % 2 === 0 ? "sente" : "gote";

  const activePath = useMemo(() => {
    const path: string[] = [];
    let nextId: string | undefined = currentId;
    while (nextId) {
      path.push(nextId);
      nextId = nodes[nextId]?.parentId;
    }
    return path.reverse();
  }, [currentId, nodes]);

  const moveLine = useMemo(
    () => activePath.map((nodeId) => nodes[nodeId]).filter((node): node is KifuNode => Boolean(node?.move)),
    [activePath, nodes],
  );

  const pushNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice((current) => (current === message ? "" : current)), 1800);
  };

  const boardCommands = useBoardCommands({
    board,
    currentId,
    hands,
    mode,
    nextPlayer,
    nodes,
    pendingPromotion,
    selection,
    serialRef,
    setupOwner,
    setupPromoted,
    pushNotice,
    setCurrentId,
    setMode,
    setNodes,
    setPendingPromotion,
    setSelection,
    setSetupOwner,
    setSetupPromoted,
  });

  const resetToInitial = () => {
    setNodes({ [ROOT_ID]: createRootNode() });
    setCurrentId(ROOT_ID);
    boardCommands.clearTransient();
    setActiveStoredPath("");
    setNotice("");
  };

  const deleteCurrentNode = () => {
    if (currentId === ROOT_ID || !currentNode.parentId) return;
    const parentId = currentNode.parentId;
    const idsToDelete = [currentId, ...getDescendantIds(nodes, currentId)];
    setNodes((previous) => {
      const next = { ...previous };
      idsToDelete.forEach((nodeId) => delete next[nodeId]);
      next[parentId] = { ...next[parentId], children: next[parentId].children.filter((childId) => childId !== currentId) };
      return next;
    });
    setCurrentId(parentId);
    boardCommands.clearTransient();
  };

  const updateComment = (value: string) => {
    setNodes((previous) => ({ ...previous, [currentId]: { ...previous[currentId], comment: value } }));
  };

  const loadStoredKifu = (file: StoredKifuFile) => {
    try {
      const imported = file.extension === "json" ? readJsonProject(file.content) : readKifProject(file.content);
      setNodes(imported.nodes);
      setCurrentId(ROOT_ID);
      setMode("record");
      boardCommands.clearTransient();
      setActiveStoredPath(file.path);
      pushNotice(`已载入 ${file.title}`);
    } catch (error) {
      pushNotice(error instanceof Error ? error.message : "棋谱读取失败。");
    }
  };

  const kifPreview = buildKif(nodes);

  const exportKif = () => downloadTextFile(`luna-shogi-${formatTimestamp()}.kif`, kifPreview, "text/plain;charset=utf-8");

  const exportJson = () => {
    const payload = { version: "luna-shogi-kifu-v1", exportedAt: new Date().toISOString(), currentId, nodes };
    downloadTextFile(`luna-shogi-${formatTimestamp()}.json`, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
  };

  const copyKif = () => {
    void navigator.clipboard.writeText(kifPreview).then(() => {
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1200);
    });
  };

  const selectNode = (nodeId: string) => {
    setCurrentId(nodeId);
    boardCommands.clearTransient();
  };

  const goToStart = () => selectNode(ROOT_ID);
  const goToEnd = () => selectNode(findMainlineEnd(nodes, currentId));

  return {
    activeStoredPath,
    board,
    copyKif,
    copyState,
    currentId,
    currentNode,
    deleteCurrentNode,
    exportJson,
    exportKif,
    hands,
    kifPreview,
    loadStoredKifu,
    mode,
    moveLine,
    nextPlayer,
    nodes,
    notice,
    pendingPromotion,
    pendingPromotionPiece: pendingPromotion ? board[pendingPromotion.from] : null,
    resetToInitial,
    selectNode,
    selection,
    setupOwner,
    setupPromoted,
    stepBack: () => currentNode.parentId && selectNode(currentNode.parentId),
    stepForward: () => currentNode.children[0] && selectNode(currentNode.children[0]),
    goToStart,
    goToEnd,
    updateComment,
    ...boardCommands,
  };
};
