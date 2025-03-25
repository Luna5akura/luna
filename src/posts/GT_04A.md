# 1

## Problem 

> 1. Consider the following game.
> $\begin{array}{|l|l|l|l|l|}\hline & w & x & y & z \\ \hline a & 4,4 & 1,1 & 0,2 & 0,1 \\ \hline b & 1,1 & 1,2 & 1,0 & 1,6 \\ \hline c & 0,0 & 2,0 & 3,2 & 0,1 \\ \hline d & 0,0 & 0,5 & 0,2 & 6,1 \\ \hline\end{array}$
> (a) Find a mixed strategy for the row player to strictly dominate strategy b.
> (b) Compute the set of all Nash equilibria (including mixed strategies). Hint: In any mixed strategy Nash equilibrium, we put zero probability on strictly dominated strategies.

## Solution (a)

Notice:

$\dfrac{7}{18}a+\dfrac{7}{18}c+\dfrac{4}{18}d = (\dfrac{14}{9}, \dfrac{7}{6},\dfrac{7}{6}, \dfrac{4}{3}) > (1, 1, 1, 1)$

## Solution (b)

After eliminate b:


$\begin{array}{|l|l|l|l|l|}\hline & w & x & y & z \\ \hline a & 4,4 & 1,1 & 0,2 & 0,1 \\ \hline c & 0,0 & 2,0 & 3,2 & 0,1 \\ \hline d & 0,0 & 0,5 & 0,2 & 6,1 \\ \hline\end{array}$

z is strictly dominated by y:

$\begin{array}{|l|l|l|l|}\hline & w & x & y \\ \hline a & 4,4 & 1,1 & 0,2  \\ \hline c & 0,0 & 2,0 & 3,2  \\ \hline d & 0,0 & 0,5 & 0,2 \\ \hline\end{array}$

d is strictly dominated by a and c:

$\begin{array}{|l|l|l|l|}\hline & w & x & y \\ \hline a & 4,4 & 1,1 & 0,2  \\ \hline c & 0,0 & 2,0 & 3,2  \\ \hline\end{array}$

x is strictly dominated by y:


$\begin{array}{|l|l|l|l|}\hline & w  & y \\ \hline a & 4,4  & 0,2  \\ \hline c & 0,0 & 3,2  \\ \hline\end{array}$

Therefore the mixed nash equilibrium:

$\left(\left(\dfrac{1}{2}, 0, \dfrac{1}{2}, 0\right),\left(\dfrac{3}{7}, 0, \dfrac{4}{7}, 0\right)\right)$

# 1.12

## Problem 

> Find the mixed-strategy Nash equilibrium of the following normal-form game.
> $\begin{array}{|c|c|c|}\hline  & L & R \\ \hline T & 2,1 & 0,2 \\ \hline B & 1,2 & 3,0 \\ \hline\end{array}$


## Solution 

We need:

$l+2r = 2l$

$2t+b = 3b$

Then the nash equilibrium:

$((\dfrac{1}{2},\dfrac{1}{2}),(\dfrac{2}{3},\dfrac{1}{3}))$

# 1.13 

## Problem 

> Each of two firms has one job opening. Suppose that (for reasons not discussed here but relating to the value of filling each opening) the firms offer different wages: firm $ i $ offers the wage $ w_{i} $, where $ (1 / 2) w_{1}<w_{2}<2 w_{1} $. Imagine that there are two workers, each of whom can apply to only one firm. The workers simultaneously decide whether to apply to firm 1 or to firm 2 . If only one worker applies to a given firm, that worker gets the job; if both workers apply to one firm, the firm hires one worker at random and the other worker is unemployed (which has a payoff of zero). Solve for the Nash equilibria of the workers' normal-form game. (For more on the wages the firms will choose, see Montgomery [1991].)

## Solution 

Pure strategy equilibrium:

$(T, R), (B, L)$

Mixed strategy equilibrium:

we have:

$\dfrac{1}{2}w_1l + w_1r = w_2l + \dfrac{1}{2}w_2r$

$\dfrac{1}{2}w_1u+w_1d = w_2u + \dfrac{1}{2}w_2d$

Then we get:

$\left(\left(\frac{2 w_{1}-w_{2}}{w_{1}+w_{2}}, \frac{2 w_{2}-w_{1}}{w_{1}+w_{2}}\right),\left(\frac{2 w_{1}-w_{2}}{w_{1}+w_{2}}, \frac{2 w_{2}-w_{1}}{w_{1}+w_{2}}\right)\right)$

