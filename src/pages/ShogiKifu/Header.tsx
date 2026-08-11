import { PLAYER_META } from "./constants";
import type { Player } from "./types";

type HeaderProps = {
  nextPlayer: Player;
  moveNumber: number;
  nodeCount: number;
};

export const Header = ({ nextPlayer, moveNumber, nodeCount }: HeaderProps) => (
  <header className="shogi-header">
    <div>
      <p className="shogi-kicker">SHOGI WORKSPACE / KIFU</p>
      <h1>诘将棋棋谱室</h1>
    </div>
    <div className="shogi-status-strip" aria-label="current shogi status">
      <span className={PLAYER_META[nextPlayer].tone}>
        {PLAYER_META[nextPlayer].mark} {PLAYER_META[nextPlayer].label}
      </span>
      <span>第 {moveNumber} 手</span>
      <span>{nodeCount} 个节点</span>
      <span className="text-slate-500">主线</span>
    </div>
  </header>
);
