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

We have:

$\pi_j = \sum_{i}\pi_iP_{ij} = (\vec\pi, \vec P_j)$

Therefore:

$\vec\pi^T = \vec\pi^T P$

Then we get:

$\lambda = 1$

With corresponding vector:

$\vec v = (\dfrac{1}{M+1},\dots,\dfrac{1}{M+1})^T$

Then we get the answer:

$\pi_j = \dfrac{1}{M+1}$

## Problem 21

> A standard model for mutations at a specific DNA nucleotide site is a Markov chain where a nucleotide remains unchanged with probability $ 1-3 \alpha\left(0<\alpha<\frac{1}{3}\right) $ or changes to one of the other three nucleotides with equal probability $ \alpha $. 
> 
> (a) Show that $ P_{1,1}^{n}=\frac{1}{4}+\frac{3}{4}(1-4 \alpha)^{n} $. 
> 
> (b) What is the long-run proportion of time the chain spends in each state?

## Solution (a)

The matrix P is:

$$
\left[\begin{array}{cccc}
1-3\alpha&\alpha &\alpha &\alpha \\ 
\alpha&1-3\alpha &\alpha &\alpha \\ 
\alpha&\alpha &1-3\alpha &\alpha \\ 
\alpha&\alpha &\alpha &1-3\alpha \\ 
\end{array}\right]
$$

When $n=1$, $P^n_{1,1} = 1 - 3\alpha$ holds.

Assume it holds for $n-1$, then:

$\begin{array}{l}P^n_{1,1}\\ 
 = (1-3\alpha )P^{n-1}_{1,1}+\alpha(1-P^{n-1}_{1,1}) 
 \\ = (1-3 \alpha )(\dfrac{1}{4} +\dfrac{3}{4}(1-4\alpha )^{n-1}) + \alpha (1-\dfrac{1}{4}-\dfrac{3}{4}(1-4\alpha )^{n-1}) \\ 
 = \dfrac{1}{4} + \dfrac{3}{4}(1-4\alpha )^n\end{array} $

## Solution (b)

By symmetric, we can easily get:

$\pi_j = \dfrac{1}{4}, j = 1, 2, 3, 4$

## Problem 22

> Let $ Y_{n} $ be the sum of $ n $ independent rolls of a fair six-sided die. Find $ \lim _{n \rightarrow \infty} \mathrm{P}\left\{Y_{n}\right. $ is a multiple of 13$ \} $.

## Solution 

Notice the chain is irreducible  and aperiodic, then:

$ \lim _{n \rightarrow \infty} \mathrm{P}\left\{Y_{n}\right. $ is a multiple of 13$ \}= \dfrac{1}{13} $

## Problem 23

> In good weather years, the number of storms follows a Poisson distribution with mean 1 ; in bad weather years, the number of storms follows a Poisson distribution with mean 3 . The weather condition of any year depends only on the previous year's weather. After a good weather year, the next year is equally likely to be good or bad; after a bad weather year, the next year is twice as likely to be bad as good. Assume year 0 (last year) was a good weather year. 
> 
> (a) Find the expected total number of storms in the next two years (year 1 and year 2). 
> 
> (b) Find the probability that year 3 has no storms. 
> 
> (c) Find the long-run average number of storms per year.

## Solution (a)

Year 1:

$E[X_1] = \dfrac{1}{2} + \dfrac{1}{2}\cdot 3 = 2$

Year 2:

$E[X_2] = \dfrac{5}{12} + \dfrac{7}{12}\cdot 3 = \dfrac{13}{6}$

## Solution (b)

$P(G_3) = \dfrac{29}{72}, P(B_3) = \dfrac{43}{72}$


placeholder



placeholder

placeholder

placeholder