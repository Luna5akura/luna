# 1

## Problem 

Consider the following game involving $ N $ matchsticks positioned on a table. Two players participate in this game, with Player 1 making the initial move, followed by Player 2. The players then continue to take turns until the game concludes. The game is governed by two rules:
(i) A player in his or her turn can pick either 1 or 2 matchsticks.
(ii) The player who picks the last matchstick wins the game.

Answer the following questions:
(a) For $ N=3 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(b) For $ N=4 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(c) For $ N=5 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(d) If $ N=9,999 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.
(e) If $ N=10,000 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.
(f) If $ N=10,001 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.

## Solution (a)

Game tree:

- Player 1 picks 2 (A)
  - Player 2 picks 1 (M)
- Player 1 picks 1 (B)
  - Player 2 picks 2 (P)
  - Player 2 picks 1 (Q)
    - Player 1 picks 1 (C)

Backward induction:

Player 2 will pick 2 when Player 1 picks 1, then Player 2 always win.

Subgame perfect Nash equilibrium:

$(AC, MP), (BC, MP)$

## Solution (b)

We denote the strategy in [Solution a](#solution-a) for player 1 as $\alpha$, for player 2 as $\beta$

Game tree:

- Player 1 picks 2 (A)
  - Player 2 picks 2 (M)
  - Player 2 picks 1 (N)
    - Player 1 picks 1 (C)
- Player 1 picks 1 (B)
  - Player 2 act as $\alpha$, player 1 as $\beta$

Backward induction:

If Player picks 2, Player 2 will picks 2.
Because $\beta$ makes player 1 win, player 1 will pick 1

Player 1 always win 

Subgame perfect Nash equilibrium:

$(BC\beta, M\alpha )$

## Solution (c)

We denote the strategy in [Solution b](#solution-b) for player 1 as $\gamma$, for player 2 as $\delta$

Game tree:

- Player 1 picks 2 (A)
  - Player 2 act as $\alpha $, player 1 as $\beta $
- Player 1 picks 1 (B)
  - Player 2 act as $\gamma$, player 1 as $\delta$

Backward induction:

$\beta$ always win, so player 1 will choose $A$

subgame perfect Nash equilibrium:

$(A\beta\delta, \alpha\gamma)$

## Solution (d)

Player 2 wins

He will pick the number that makes $N$ proportional to $3$

## Solution (e)

Player 1 wins 

He will pick 1, then pick the number that makes $N$ proportional to $3$

## Solution (f)

Player 1 wins 

He will pick 2, then pick the number that makes $N$ proportional to $3$

# 2

## Problem 

Consider the following game involving $ N $ matchsticks positioned on a table. Two players participate in this game, with Player 1 making the initial move, followed by Player 2. The players then continue to take turns until the game concludes. The game is governed by two rules:
(i) A player in his or her turn can pick either 1 or 3 matchsticks.
(ii) The player who picks the last matchstick loses the game.

Answer the following questions:
(a) For $ N=3 $, construct the game tree and determine the subgame perfect Nash equilibrium.

(b) For $ N=4 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(c) For $ N=5 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(d) For $ N=6 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(e) For $ N=7 $, construct the game tree and determine the subgame perfect Nash equilibrium.
(f) If $ N=100 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.
(g) If $ N=101 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.
(h) If $ N=102 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.
(i) If $ N=103 $, would you prefer to be Player 1 or Player 2? Specify the strategy that could guarantee a victory in this scenario.

## Solution (a)

Game tree:

- Player 1 picks 3 (A)
- Player 1 picks 2 (B)
  - Player 2 picks 1 (L)
- Player 1 picks 1 (C)
  - Player 2 picks 2 (O)
  - Player 2 picks 1 (P)
    - Player 1 picks 1 (D)

Backward induction:

in $O,P$, player 2 picks $O$

in $A,B,C$, plauer 1 picks $A$

subgame perfect Nash equilibrium:

$(AD,LO)$

## Solution (b)

Denote player 1, 2's strategy in [Solution (a)](#solution-a-1) as $\alpha , \beta $

game tree:

- Player 1 picks 3 (A)
  - Player 2 picks 1 (L)
- Player 1 picks 2 (B)
  - Player 2 picks 2 (O)
  - Player 2 picks 1 (P)
    - Player 1 picks 1 (D)
- Player 1 picks 1 (C)
  - Player 2 use $\alpha $, player 1 use $\beta $

Backward induction:

in $O,P$, player 2 choose $O$

Player 1 always lose 

subgame perfect Nash equilibrium

$(AD\beta, LO\alpha),(BD\beta, LO\alpha), (CD\beta, LO\alpha) $

## Solution (c)

Denote player 1, 2's strategy in [Solution (b)](#solution-b-1) as $\gamma , \delta $

game tree:

- Player 1 picks 3 (A)
  - Player 2 picks 2 (L)
  - Player 2 picks 1 (M)
    - Player 1 picks 1 (D)
- Player 1 picks 2 (B)
  - Player 2 use $\alpha   $, player 1 use $\beta $
- Player 1 picks 1 (C)
  - Player 2 use $\gamma $, player 1 use $\delta $

Backward induction:

in $L,M$, player 2 chooses $L$

because $\delta$ always win, player 1 chooses $C$

subgame perfect Nash equilibrium:

$(CD\beta\delta, L\alpha \gamma )$

## Solution (d)

Denote player 1, 2's strategy in [Solution (c)](#solution-c-1) as $\epsilon , \zeta $

game tree:


- Player 1 picks 3 (A)
  - Player 2 use $\alpha  $, player 1 use $\beta  $
- Player 1 picks 2 (B)
  - Player 2 use $\gamma $, player 1 use $\delta $
- Player 1 picks 1 (C)
  - Player 2 use $\epsilon $, player 1 use $\zeta $

Backward induction:

$\delta$ always win, so Player 1 chooses $B$

subgame perfect Nash equilibrium :

$(B\beta \delta \zeta, \alpha \gamma \epsilon)$

## Solution (e)

Denote player 1, 2's strategy in [Solution (d)](#solution-d-1) as $\eta , \theta  $

game tree:

- Player 1 picks 3 (A)$
  - Player 2 use $\gamma  $, player 1 use $\delta  $
- Player 1 picks 2 (B)
  - Player 2 use $\epsilon $, player 1 use $\zeta $
- Player 1 picks 1 (C)
  - Player 2 use $\eta $, player 1 use $\theta $


Backward induction:

$\delta$ always win, so Player 1 chooses $A$

subgame perfect Nash equilibrium :

$(A\delta \zeta\theta,  \gamma \epsilon\eta)$

## Solution (f)

Player 2 wins.

He will pick the number that makes $N$ proportional to $4$

## Solution (g)

Player 1 wins.

He will first pick 1, then pick the number that makes $N$ proportional to $4$


## Solution (h)

Player 1 wins.

He will first pick 2, then pick the number that makes $N$ proportional to $4$


## Solution (h)

Player 1 wins.

He will first pick 3, then pick the number that makes $N$ proportional to $4$