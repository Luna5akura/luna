---
title: Game Theory - Assignment - Week 10
category: Assignments
date: 2025-9-10 
---

# 7

Mictel corporation has a world monopoly on the production of personal computers. It can make two kinds of computers: low-end and high-end. The total population of prospective buyers is $ P $. There are two types of prospective buyers: casual users and intensive users. The casual ones comprise a fraction $ c $ of the population, and the rest (fraction $ 1-c $ ) are intensive users.

The costs of production of the two kinds of machines, as well as the benefits gained from the two by the two types of prospective buyers, are given in the following table. All figures are in thousands of dollars.

$$
\begin{array}{|c|c|c|c|}
\hline
 & \text{COST} & \text{BENEFIT FOR USER TYPE} & \\
\hline
 & & \text{Casual} & \text{Intensive} \\
\hline
\text{PC TYPE} & \text{Low-end} & 1 & 4 \\
\hline
\text{PC TYPE} & \text{High-end} & 3 & 5 \\
\hline
\end{array}
$$

Each type of buyer calculates the net payoff (benefit minus price) that he would get from each type of machine and buys the type that would give the higher net payoff, provided that this payoff is nonnegative. If both types give equal nonnegative net payoffs for a buyer, he goes for the high end; if both types have negative net payoff for a buyer, he does not purchase. Mictel wants to maximize its expected profit.
(a) If Mictel were omniscient, then, when a prospective customer came along, knowing his type, the company could offer to sell him just one type of machine at a stated price, on a take-it-or-leave-it basis. What kind of machine would Mictel offer, and at what price, to what kind of buyer?
In fact, Mictel does not know the type of any particular buyer. It just makes its "catalog" available for all buyers to choose from.
(b) First suppose the company produces just the low-end machines and sells them for price $ x $. What value of $ x $ will maximize its profit? How does the answer depend on $ c $, the proportion of casual users in the population?
(c) Next suppose Mictel produces just the high-end machines and sells them for price $ y $. What value of $ y $ will maximize its profit, and how does the answer depend on $ c $ ?
(d) Finally, suppose the company produces both types of machines, selling the low-end ones for price $ x $ and the high-end ones for price $ y $. What "incentive compatibility" constraints on $ x $ and $ y $ must the company satisfy if it wants the casual users to buy the low-end machines and the intensive users to buy the high-end machines? What is the company's expected profit from this policy? What values of $ x $ and $ y $ will maximize the expected profit? How does the answer depend on $ c $ ?
(e) Putting it all together, what production and pricing policy should the company pursue? How does the answer depend on $ c $ ?

## Solution (a)

Casual Users

Low-end: Benefit = 4 , Cost = 1
- Max price: $ 4-\mathrm{x} \geq 0 \rightarrow \mathrm{x} \leq 4 $
- Profit: $ \mathrm{x}-1 $
- Set $ \mathrm{x}=4 \rightarrow $ Profit $ =4-1=3 $

High-end: Benefit $ =5 $, Cost $ =3 $
- Max price: $ 5-\mathrm{y} \geq 0 \rightarrow \mathrm{y} \leq 5 $
- Profit: y - 3
- Set $ \mathrm{y}=5 \rightarrow $ Profit $ =5-3=2 $

Since $ 3>2 $, offer low-end at $ x=4 $, profit $ =3 $.


Intensive Users

Low-end: Benefit = 3, Cost = 1
- Max price: $ 3-\mathrm{x} \geq 0 \rightarrow \mathrm{x} \leq 3 $
- Profit: $ \mathrm{x}-1 $
- Set $ x=3 \rightarrow $ Profit $ =3-1=2 $
  
High-end: Benefit $ =6 $, Cost $ =3 $
- Max price: $ 6-\mathrm{y} \geq 0 \rightarrow \mathrm{y} \leq 6 $
- Profit: $ y-3 $
- Set $ \mathrm{y}=6 \rightarrow $ Profit $ =6-3=3 $

Since $ 3>2 $, offer high-end at $ y=6 $, profit $ =3 $.

## Solution (b)

Casual: $ 4-\mathrm{x} \geq 0 \rightarrow \mathrm{x} \leq 4 $
Intensive: $ 3-\mathrm{x} \geq 0 \rightarrow \mathrm{x} \leq 3 $
$ x>4 $ : Both net payoffs negative, no buyers, profit $ =0 $.
$ 3<x \leq 4 $ : Casual buy ( $ 4-x \geq 0 $ ), intensive don't ( $ 3-x<0 $ )
- Buyers = cP
- Profit $ =\mathrm{cP}(\mathrm{x}-1) $
- Maximize: $ x=4 \rightarrow $ Profit $ =c P(4-1)=3 c P $
$ x \leq 3 $ : Both buy
- Buyers = P
- Profit $ =P(x-1) $
- Maximize: $ x=3 \rightarrow $ Profit $ =P(3-1)=2 P $

$3 cP vs. 2P$

$
3 \mathrm{cP}>2 \mathrm{P} \rightarrow \mathrm{c}>2 / 3
$

If $ \mathrm{c}>2 / 3: \mathrm{x}=4 $, profit $ =3 \mathrm{cP} $
If $ \mathrm{c}<2 / 3 $ : $ \mathrm{x}=3 $, profit $ =2 \mathrm{P} $
If $ \mathrm{c}=2 / 3: 3(2 / 3) \mathrm{P}=2 \mathrm{P} $, either works

## Solution (c)

Casual: $ 5-\mathrm{y} \geq 0 \rightarrow \mathrm{y} \leq 5 $
Intensive: $ 6-\mathrm{y} \geq 0 \rightarrow \mathrm{y} \leq 6 $
$ \mathrm{y}>6 $ : No buyers, profit $ =0 $.
$ 5<\mathrm{y} \leq 6 $ : Intensive buy ( $ 6-\mathrm{y} \geq 0 $ ), casual don't ( $ 5-\mathrm{y}<0 $ )
- Buyers $ =(1-\mathrm{c}) \mathrm{P} $
- Profit $ =(1-c) P(y-3) $
- Maximize: $ y=6 \rightarrow $ Profit $ =3(1-c) P $
$ y \leq 5 $ : Both buy
- Buyers = P
- Profit $ =P(y-3) $
- Maximize: $ y=5 \rightarrow $ Profit $ =2 \mathrm{P} $


$3 (1-c)P vs. 2P$

$
3 (1-c)P>2 \rightarrow 1-c>2 / 3
$

If $ 1-c<1 / 3: \mathrm{y}=6 $, profit $ =3 (1-c) P $
If $ 1-c>1 / 3 $ : $ \mathrm{y}=5 $, profit $ =2 P $
If $ 1-c=1 / 3: 3(2 / 3) P=2 P $, either works.

## Solution (d)

Constraints:

$$
\begin{array}{l}
y-x \ge 1 \\
y\le x+3 \\ 
x\le 4\\ 
y\le 6
\end{array}
$$

Solution:

$x=3, y=6$

Profit: $3P$

## Solution (e)

Low-end only: $\max\{3cP, 2P\}$

High-end only: $\max\{3(1-c)P, 2P\}$

Both: $3P$

Then: 

produce both, $x=4, y=6$, profit $3P$

