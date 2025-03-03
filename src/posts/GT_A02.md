# 1.2 

## Problem 

> In the following normal-form game, what strategies survive iterated elimination of strictly dominated strategies? What are the pure-strategy Nash equilibria?
>
> $\begin{array}{c|c|c|c|} & L & C & R \\ \hline T & 2,0 & 1,1 & 4,2 \\\hline M & 3,4 & 1,2 & 2,3 \\ \hline B & 1,3 & 0,2 & 3,0 \\ \hline \end{array}$

## Solution （1）

$B$ is dominated by $T$:


$\begin{array}{c|c|c|c|} & L & C & R \\ \hline T & 2,0 & 1,1 & 4,2 \\\hline M & 3,4 & 1,2 & 2,3 \\\hline \end{array}$

$C$ is dominated by $R$:

$\begin{array}{c|c|c|} & L & R \\ \hline T & 2,0 & 4,2 \\\hline M & 3,4 & 2,3 \\\hline \end{array}$

Then we can't eliminate any other strategies

## Solution (2)

$(T,R)$ is a pure-strategy Nash equilibrium:
- Player 1 can't be better off ($M,B$ is $2, 3$ seperatly)
- Player 2 can't be better off ($L,C$ is $0, 1$ seperatly)

$(M,L)$ is a pure-strategy Nash equilibrium:
- Player 1 can't be better off ($M,B$ is $1, 2$ seperatly)
- Player 2 can't be better off ($L,C$ is $2, 3$ seperatly)

# 1.3

> Players 1 and 2 are bargaining over how to split one dollar. Both players simultaneously name shares they would like to have, $ s_{1} $ and $ s_{2} $, where $ 0 \leq s_{1}, s_{2} \leq 1 $. If $ s_{1}+s_{2} \leq 1 $, then the players receive the shares they named; if $ s_{1}+s_{2}>1 $, then both players receive zero. What are the pure-strategy Nash equilibria of this game?

## Solution

For player 1, given $s_2$, he will choose:

$s_1 = 1 - s_2$

to maximize his payoff

Similarly, player 2 will choose:

$s_2 = 1 - s_1$

Both direct us to:

$s_1 + s_2 = 1$

Therefore, any $(s_1, s_2)$ that satisfies this formula is a pure-strategy Nash equilibrium.

Moreover, there's a special case:

$(s_1, s_2) = (1,1)$

In this case:
- when a player want to change to any $s>0$, the sum is over 1 and he receive zero, 
- if he changes to $s=0$, it satisfies $s_1 + s_2 \le 1$ but he chooses 0 so the payoff is 0, 

Therefore, he can't be better off.



