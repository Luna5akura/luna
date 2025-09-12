---
title: Game Theory - Assignment - Week 3
category: Assignments 
date: 2025-9-10 
---


# Problem 1.4

## Problem 

> 1.4. Suppose there are $ n $ firms in the Cournot oligopoly model. Let $ q_{i} $ denote the quantity produced by firm $ i $, and let $ Q=q_{1}+\cdots+ $ $ q_{n} $ denote the aggregate quantity on the market. Let $ P $ denote the market-clearing price and assume that inverse demand is given by $ P(Q)=a-Q $ (assuming $ Q<a $, else $ P=0 $ ). Assume that the total cost of firm $ i $ from producing quantity $ q_{i} $ is $ C_{i}\left(q_{i}\right)=c q_{i} $. That is, there are no fixed costs and the marginal cost is constant at $ c $, where we assume $ c<a $. Following Cournot, suppose that the firms choose their quantities simultaneously. What is the Nash equilibrium? What happens as $ n $ approaches infinity?

## Solution 

Denote $\pi_i$ as $i$-th firm's payoff, then:

$\pi_i = (P-c)q_i = q_i(a-Q - c)$

To maximize the payoff, we have:

$a-Q-c-q_i = 0$

That is:

$q_i = a - Q - c$

Then we sum the $n$ firms up:

$\sum_{i=1}^n q_i = Q = n(a-Q-c)$

Then we get:

$Q = \dfrac{n(a-c)}{n+1}$

Then:

$q_i = \dfrac{a-c}{n+1}$

Therefore, the Nash Equilibruim is :

$(\dfrac{a-c}{n+1},\dots,\dfrac{a-c}{n+1})$

When $n$ goes to infinity:


$\lim_{n\to\infty}\dfrac{a-c}{n+1} = 0$

# Problem 1.5

## Problem 

> 1.5. Consider the following two finite versions of the Cournot duopoly model. First, suppose each firm must choose either half the monopoly quantity, $ q_{m} / 2=(a-c) / 4 $, or the Cournot equilibrium quantity, $ q_{c}=(a-c) / 3 $. No other quantities are feasible. Show that this two-action game is equivalent to the Prisoners' Dilemma: each firm has a strictly dominated strategy, and both are worse off in equilibrium than they would be if they cooperated. Second, suppose each firm can choose either $ q_{m} / 2 $, or $ q_{c} $, or a third quantity, $ q^{\prime} $. Find a value for $ q^{\prime} $ such that the game is equivalent to the Cournot model in Section 1.2.A, in the sense that ( $ q_{c}, q_{c} $ ) is a unique Nash equilibrium and both firms are worse off in equilibrium than they could be if they cooperated, but neither firm has a strictly dominated strategy.

## Solution (a)

The payoff matrix is:

$$
\begin{array}{l|l|l|}
& q_m/2 & q_c \\ 
\hline q_m/2& (\dfrac{(a-c)^2}{8},\dfrac{(a-c)^2}{8})&(\dfrac{5(a-c)^2}{48}, \dfrac{5(a-c)^2}{36})\\
\hline q_c&(\dfrac{5(a-c)^2}{36}, \dfrac{5(a-c)^2}{48})&(\dfrac{(a-c)^2}{9}, \dfrac{(a-c)^2}{9})\\
\hline
\end{array}
$$

Then: $q_m/2$ is strictly dominated by $q_c$, however,

$(q_m/2, q_m/2) $ is worse than $(q_c, q_c)$

It correspond with Prisoners' Dilemma.

## Solution (b)

Assume $q' = \dfrac{a-c}{k}$, then:

$$
\begin{array}{l|l|l|l|}
& q_m/2 & q_c &q'\\ 
\hline q_m/2& (\dfrac{(a-c)^2}{8},\dfrac{(a-c)^2}{8})&(\dfrac{5(a-c)^2}{48}, \dfrac{5(a-c)^2}{36})&(\dfrac{(3k-4)(a-c)^2}{16k}, \dfrac{(3k-4)(a-c)^2}{4k^2})\\
\hline q_c&(\dfrac{5(a-c)^2}{36}, \dfrac{5(a-c)^2}{48})&(\dfrac{(a-c)^2}{9}, \dfrac{(a-c)^2}{9})&(\dfrac{(2k-3)(a-c)^2}{9k}, \dfrac{(2k-3)(a-c)^2}{3k^2})\\
\hline q'&(\dfrac{(3k-4)(a-c)^2}{4k^2},\dfrac{(3k-4)(a-c)^2}{16k})&( \dfrac{(2k-3)(a-c)^2}{3k^2},\dfrac{(2k-3)(a-c)^2}{9k})&(\dfrac{(k-2)(a-c)^2}{k^2},\dfrac{(k-2)(a-c)^2}{k^2})\\ 
\hline
\end{array}
$$

To make $(q_c, q_c)$ a Nash Equilibruim, we need:

$\dfrac{1}{9} > \dfrac{2k-3}{3k^2}$

To make $q_m/2$ not be dominated by $q_c$, we need:

$\dfrac{3k-4}{16k}\ge\dfrac{2k-3}{9k  }$

To make $q'$ not be dominated, we need:

$\max(\dfrac{3k-4}{4k^2}-\dfrac{5}{36},\dfrac{2k-3}{3k^2}-\dfrac{1}{9},\dfrac{k-2}{k^2}-\dfrac{2k-3}{9k}) \ge 0$

combined them together, we get:

$k = \dfrac{12}{5}$

that is:

$$
\begin{array}{l|l|l|l|}
& q_m/2 & q_c &q'\\ 
\hline q_m/2& (\dfrac{(a-c)^2}{8},\dfrac{(a-c)^2}{8})&(\dfrac{5(a-c)^2}{48}, \dfrac{5(a-c)^2}{36})&(\dfrac{(a-c)^2}{12}, \dfrac{5(a-c)^2}{36})\\
\hline q_c&(\dfrac{5(a-c)^2}{36}, \dfrac{5(a-c)^2}{48})&(\dfrac{(a-c)^2}{9}, \dfrac{(a-c)^2}{9})&(\dfrac{(a-c)^2}{12}, \dfrac{5(a-c)^2}{48})\\
\hline q'&(\dfrac{5(a-c)^2}{36},\dfrac{(a-c)^2}{12})&( \dfrac{5(a-c)^2}{48},\dfrac{(a-c)^2}{12})&(\dfrac{5(a-c)^2}{72},\dfrac{5(a-c)^2}{72})\\ 
\hline
\end{array}
$$
