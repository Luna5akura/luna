# 1

## Problem 

> Consider a Markov chain with a state space consisting of integers $ 0, \pm 1, \pm 2, \ldots $, and transition probabilities:
> 
> $\mathrm{P}_{\mathrm{i}, \mathrm{i}+1}=p=1-P_{i, i-1}, \quad i=0, \pm 1, \pm 2, \ldots$
> 
> where $ p \in(0,1) $. We can directly establish recurrence in the symmetric case and determine the probability of eventually returning to state 0 in the asymmetric case.
> 
> (1) Let $ \alpha $ denote the probability that the Markov chain eventually returns to state 0 given it is currently in state 1 . Show that $ \alpha=1-p+p \alpha^{2} $. (Hint: Condition on the next state.)
> 
> (2) Let $ \beta=\mathrm{P}\{ $ eventually return to 0$ \} $. Show that:
> 
> $ \beta=\mathrm{P}\left\{\right. $ eventually return to $ \left.0 \mid X_{1}=1\right\} p+\mathrm{P}\left\{\right. $ eventually return to $ \left.0 \mid X_{1}=-1\right\}(1-p) $.
> 
> (3) Using the previous parts, show that if $ p=0.5 $ (symmetric random walk), all states are recurrent.
> 
> (4) Solve Problem 17 in Chapter 4 of the textbook.
> 
> (5) Referring to part (4), show that when $ p>0.5, \mathrm{P}\left\{\right. $ eventually return to $ \left.0 \mid X_{1}=-1\right\}=1 $.
> 
> (6) Combine part (5) with the transience of all states to show that when $ p>0.5, \beta=2(1-p) $.
> 
> (7) Referring to part (4), show that when $ p<0.5, \alpha=1 $.
> 
> (8) Combine part (7) with the transience of all states to show that when $ p<0.5, \beta=2 p $.
> 
> (9) Combine parts (6) and (8) to derive the general form of $ \beta $.

## Solution (1)

When moves to 2, we need $\alpha^2$ to return to 0, therefore:

We have:

$\alpha = (1-p) + p\alpha^2$

## Solution (2)

Notice after first move, we can only be $1$ or $-1$, then the question is well explainerd 

## Solution (3)

After calculation, we have:

$\alpha = 1$

Then:

$\beta = p + 1-p = 1$

Also, it applies for every place.

## Solution (4)

Denote $X_n$ as the place at time $n$, $Z_n$ as the $n$-th move, then:

$E[Z_n] = p + (1-p)(-1) = 2p-1$

Then:

$\dfrac{X_n}{n} = \dfrac{1}{n}\sum_{i=1}^nZ_n = 2p-1$

Therefore:

$X_n = n(2p-1)$

When $n\to\infty$, we have $X_n\to\infty$, which means any place can be only visited finite times.

## Solution (5)

$X_n\to+\infty$, then for any place less than $0$, $0$ is must visited 

## Solution (6)

We have:

$\alpha = \dfrac{1-p}{p}$

Then:

$\beta =\alpha p+(1-p) = 2(1-p)$

## Solution (7)

Same as [Solution 5](#solution-5)

## Solution (8)

Same as [Solution 6](#solution-6)

## Solution (9)

$\beta = 2 \min(p, 1-p)$

# Chapter 4

## Problem 14

> For each of the specified Markov chains below, classify the states and determine whether they are transient or recurrent. $ \begin{array}{c} \boldsymbol{P}_{1}=\left[\begin{array}{ccc} 0 & \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{2} & 0 \end{array}\right], \quad \boldsymbol{P}_{2}=\left[\begin{array}{cccc} 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 \\ \frac{1}{2} & \frac{1}{2} & 0 & 0 \\ 0 & 0 & 1 & 0 \end{array}\right] \\ \boldsymbol{P}_{3}=\left[\begin{array}{ccccc} \frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 \\ \frac{1}{4} & \frac{1}{2} & \frac{1}{4} & 0 & 0 \\ \frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 \\ 0 & 0 & 0 & \frac{1}{2} & \frac{1}{2} \\ 0 & 0 & 0 & \frac{1}{2} & \frac{1}{2} \end{array}\right], \quad \boldsymbol{P}_{4}=\left[\begin{array}{ccccc} \frac{1}{4} & \frac{3}{4} & 0 & 0 & 0 \\ \frac{1}{2} & \frac{1}{2} & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & \frac{1}{3} & \frac{2}{3} & 0 \\ 1 & 0 & 0 & 0 & 0 \end{array}\right] \end{array} $

## Solution 

$P_1$: all states communicates with each other.

All states are **recurrent**

---

$P_2$: $4\to 3 \to 1\text{ or } 2\to 4$

All staes are **recurrent**

---

$P_3$: no other path goes to $2$

Recurrent classes:

$\{1,3\}, \{4,5\}$

Transient classes:

$\{2\}$

---

$P_4$: no path goes to $5$, no other path goes to $4$


Recurrent classes:

$\{1,2\}, \{3\}$

Transient classes:

$\{4\},\{5\}$

## Problem 15

> Prove that if a Markov chain has $ M $ states and state $ j $ is reachable from state $ i $, then it can be reached in at most $ M $ steps.

## Solution 

If there are more than $M$ steps, we consider the index of the start and end, there must be a duplicated start index $m$ 

Then, $m$ is revisited, therefore, any path in between can be eliminated, until the path is not longer than $M$

## Problem 16 

## Solution 

If $P_{ij}\ne 0$,$i\to j, j \nrightarrow i, $ then $i$ can't be recurrent, because there's a positive probability that $i\to j$ and never comes back, resulting contradiction.

## Problem 20

> A transition probability matrix $ \boldsymbol{P} $ is called doubly stochastic if the sum of each column is 1 , i.e., for all $ j $, 
> 
> $ \sum_{i} P_{i j}=1 . $ 
> 
> If such a chain is irreducible and aperiodic with $ M+1 $ states $ 0,1, \ldots, M $, prove that the long-run proportion is 
> 
> $ \pi_{j}=\frac{1}{M+1}, \quad j=0,1, \ldots, M $

## Solution 

