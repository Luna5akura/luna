import { PLAYER_META } from "./constants";
import type { Player } from "./types";

type HeaderProps = {
  nextPlayer: Player;
  moveNumber: number;
  nodeCount: number;
  branchArmed: boolean;
};

export const Header = ({ nextPlayer, moveNumber, nodeCount, branchArmed }: HeaderProps) => (
  <header className="shogi-header">
    <div>
      <p className="shogi-kicker">TACTICAL KIFU EDITOR // SHOGI</p>
      <h1>将棋打谱节点</h1>
    </div>
    <div className="shogi-status-strip" aria-label="current shogi status">
      <span className={PLAYER_META[nextPlayer].tone}>
        {PLAYER_META[nextPlayer].mark} {PLAYER_META[nextPlayer].label}
      </span>
      <span>{moveNumber.toString().padStart(3, "0")} TURNS</span>
      <span>{nodeCount.toString().padStart(3, "0")} NODES</span>
      <span className={branchArmed ? "text-amber-200" : "text-slate-500"}>
        {branchArmed ? "BRANCH ARMED" : "MAINLINE"}
      </span>
    </div>
  </header>
);
