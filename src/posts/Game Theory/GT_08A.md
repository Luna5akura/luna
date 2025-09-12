---
title: Game Theory - Assignment - Week 8
category: Assignments
date: 2025-9-10 
---

# 1

## Problem

> 1. Consider the following simultaneous moving game.

$$
\begin{array}{ll|l|l|l|} 
&&&Player 2\\
 &  & L_{2} & M_{2} & R_{2} \\
\hline
 & L_{1} & 1,1 & 6,0 & 0,0 \\
\hline
  Player 1 & M_{1} & 0,6 & 4,4 & 0,0 \\
\hline
 & R_{1} & 0,0 & 0,0 & 2,2 \\
\hline
\end{array}
$$

(a) Identify a mixed strategy for Player 1 that strictly dominates the strategy $ M_{1} $.
(b) Compute the set of all Nash equilibria, including those associated with mixed strategies. It is important to note that in any mixed strategy Nash equilibrium, strictly dominated strategies receive a probability of zero.
(c) Now consider a two-stage game where the stage game is the simultaneous move game and the discount factor is set to $ \delta=1 $. Is it possible to identify a subgame perfect Nash equilibrium in which strategies $ M_{1} $ and $ M_{2} $ are employed in some stage? If so, please specify the subgame perfect Nash equilibrium; if not, please provide an explanation for why this is the case.
(d) Referring to the two-stage game discussed in part (c), what is the maximum payoff achievable for each of the two players when they engage in rational play?
(e) Consider the infinitely repeated game, using the simultaneous move game as the stage game, and let the discount factor be $ \delta $. What is the minimum value of $ \delta $ under which the two players implement grim trigger strategies and $ M_{1} $ and $ M_{2} $ are employed in every stage? Additionally, please outline the grim trigger strategy for each player.

## Solution (a)

$(\dfrac{3}{4}, 0 , \dfrac{1}{4})$

## Solution (b)

Pure: $ \left(L_{1}, L_{2}\right),\left(R_{1}, R_{2}\right) $
Mixed: $((\dfrac{2}{3},0,{1}{3}),(\dfrac{2}{3},0,{1}{3}))$

## Solution (c)

- Stage 2: Must be an NE- $ \left(L_{1}, L_{2}\right),\left(R_{1}, R_{2}\right) $, or mixed-none include $ M_{1} $ or $ M_{2} $.
- Stage 1: Playing $ \left(M_{1}, M_{2}\right) $ (payoff 4,4 ) deviates to $ L_{1} $ (6 against $ M_{2} $ ), breaking NE unless enforced, but stage 2 constraints prevent it.

No subgame-perfect NE includes $ M_{1} $ or $ M_{2} $ due to domination and NE requirements.
Answer for (c): Not possible, as $ M_{1} $ is strictly dominated and excluded from NE, including stage 2 .

## Solution (d)

$2+2=4$

## Solution (e)

Grim trigger: Play $ \left(M_{1}, M_{2}\right)(4,4) $ until deviation, then revert to NE (e.g., $ \left(L_{1}, L_{2}\right) $, payoff 1,1) forever.
- Cooperation: $ 4+4 \delta+4 \delta^{2}+\cdots=\frac{4}{1-\delta} $
- Deviate: Player 1 plays $ L_{1} $ vs. $ M_{2}: 6 $, then 1 forever: $ 6+\frac{\delta}{1-\delta} $
- Incentive: $ \frac{4}{1-\delta} \geq 6+\frac{\delta}{1-\delta} $
- Solve: $ 4 \geq 6(1-\delta)+\delta \rightarrow 4 \geq 6-6 \delta+\delta \rightarrow 4 \geq 6-5 \delta \rightarrow 5 \delta \geq 2 \rightarrow \delta \geq \frac{2}{5} $

Answer for (e): Minimum $ \delta=\frac{2}{5} $. Grim trigger: Play $ M_{1}, M_{2} $ unless deviation, then $ L_{1}, L_{2} $ forever.

# 2.10

## Problem 

> 2.10. The accompanying simultaneous-move game is played twice, with the outcome of the first stage observed before the second stage begins. There is no discounting. The variable $ x $ is greater than 4 , so that $ (4,4) $ is not an equilibrium payoff in the one-shot game. For what values of $ x $ is the following strategy (played by both players) a subgame-perfect Nash equilibrium?

Play $ Q_{i} $ in the first stage. If the first-stage outcome is $ \left(Q_{1}, Q_{2}\right) $, play $ P_{i} $ in the second stage. If the first-stage outcome is $ \left(y, Q_{2}\right) $ where $ y \neq Q_{1} $, play $ R_{i} $ in the second stage. If the first-stage outcome is $ \left(Q_{1}, z\right) $ where $ z \neq Q_{2} $, play $ S_{i} $ in the second stage. If the first-stage outcome is $ (y, z) $ where $ y \neq Q_{1} $ and $ z \neq Q_{2} $, play $ P_{i} $ in the second stage.

$$
\begin{array}{|l|l|l|l|l|}
\hline 
 & P_{2} & Q_{2} & R_{2} & S_{2} \\
\hline 
 {P_{1}}& 2, 2 & x, 0 & -1, 0 & 0,0 \\
\hline 
Q_{1} & 0, x & 4, 4 & -1, 0 & 0,0 \\
\hline 
R_{1} & 0, 0 & 0, 0 & 0, 2 & 0,0 \\
\hline 
S_{1} & 0,-1 & 0, -1 & -1, -1 & 2,0 \\
\hline
\end{array}
$$


## Solution

- Both follow the strategy: Play $ \left(Q_{1}, Q_{2}\right) $.
  - First stage: $ \left(Q_{1}, Q_{2}\right) $ gives $ (4,4) $.
  - Second stage: $ \left(P_{1}, P_{2}\right) $ gives $ (2,2) $.
  - Total payoff: $ (4+2,4+2)=(6,6) $.
- Player 1 deviates to $ P_{1} $, Player 2 plays $ Q_{2} $ :
  - First stage: $ \left(P_{1}, Q_{2}\right) $ gives $ (\mathrm{x}, 0) $.
  - Second stage: Since $ y=P_{1} \neq Q_{1} $, play $\left(\mathrm{R}_1, \mathrm{R}_2\right) $ gives $ (0,2) $.
  - Total for Player 1: $ \mathrm{x}+0=\mathrm{x} $.
  - Total for Player 2: $ 0+2=2 $.
- Player 1's incentive: Compare total payoffs:
  - Sticking to $ Q_{1}: 6 $.
  - Deviating to $ P_{1}: x $.
  - No deviation if $ 6 \geq x $ or $ x \leq 6 $.
- Player 2 deviates to $ P_{2} $, Player 1 plays $ Q_{1} $ :
  - First stage: $ \left(Q_{1}, P_{2}\right) $ gives $ (0, \mathrm{x}) $.
  - Second stage: Since $ z=P_{2} \neq Q_{2} $, play $ \left(S_{1}, S_{2}\right) $ gives $ (2,0) $.
  - Total for Player 2: $ x+0=x $.
  - Total for Player 1: $ 0+2=2 $.
  - Player 2's incentive: 6 (sticking) vs. $ x $ (deviating).
  - No deviation if $ x \leq 6 $.

Therefore if $x<6$ it's subgame-perfect NE

# 2.11

## Problem 

2.11. The simultaneous-move game (below) is played twice, with the outcome of the first stage observed before the second stage begins. There is no discounting. Can the payoff $ (4,4) $ be achieved in the first stage in a pure-strategy subgame-perfect Nash equilibrium? If so, give strategies that do so. If not, prove why not.
$$
\begin{array}{c|c|c|c|} 
&L&C&R\\
 \hline
 T & 3,1 & 0,0 & 5,0 \\
 \hline
M & 2,1 & 1,2 & 3,1 \\
 \hline
 B & 1,2 & 0,1 & 4,4 \\
 \hline
\end{array}
$$

## Solution

- Both play (B, R): First stage (4,4), second stage (T, L) with $ (3,1) $, total $ (7,5) $.
- Player 1 deviates to T, Player 2 plays R:
  - First stage: $ (T, \mathrm{R}) $ with $ (5,0) $.
  - Second stage: Since $ (T, R) \neq(B, R) $, play $ (M, C) $ with $ (1,2) $.
  - Total: Player 1: $ 5+1=6<7 $, Player 2: $ 0+2=2<5 $.
- Player 1 deviates to M, Player 2 plays R:
  - First stage: (M, R) with $ (3,1) $.
  - Second stage: (M, C) with $ (1,2) $.
  - Total: Player 1: $ 3+1=4<7 $, Player 2: $ 1+2=3<5 $.
- Player 2 deviates to $ L $, Player 1 plays B:
  - First stage: (B, L) with $ (1,2) $.
  - Second stage: (M, C) with $ (1,2) $.
  - Total: Player 1: $ 1+1=2<7 $, Player 2: $ 2+2=4<5 $.
- Player 2 deviates to C, Player 1 plays B:
  - First stage: $ (B, C) $ with $ (0,1) $.
  - Second stage: (M, C) with $ (1,2) $.
  - Total: Player 1: $ 0+1=1<7 $, Player 2: $ 1+2=3<5 $.

No unilateral deviation improves either player's total payoff:
- Player 1: Sticking with B gives 7, deviating gives 6 (T), 4 (M).
- Player 2: Sticking with R gives 5, deviating gives 4 (L), 3 (C).

Thus, (B,R) is a NE in the first stage given the second-stage strategies.
