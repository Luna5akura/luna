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

## Solution (c)

Probability transition matrix:

$P = \left(\begin{array}{ll}
\dfrac{1}{2} & \dfrac{1}{2}\\ 
\dfrac{1}{3} & \dfrac{2}{3}
\end{array}\right)$

Then solve the $\pi $:

$\pi = (\dfrac{2}{5}, \dfrac{3}{5})^T$

Then:

$\dfrac{2}{5}\cdot 1 +\dfrac{3}{5}\cdot 3 = \dfrac{11}{5}$

## Problem 26

> Prove: repeatedly moving a randomly selected card to the top eventually results in a uniform distribution over all $ n $ ! permutations.


## Solution 

Notice if we do it reversely, that is `remove the top card and insert into position $i$`, every move has possibility  $\dfrac{1}{n}$ to tansit to another state, so it is double stochastic.

## Problem 27

> Any individual in a population of $ N $ may be active or inactive in each time period. If an individual is active in a given time period, then independently of all other individuals, the probability that they are also active in the next time period is $ \alpha $. Similarly, if an individual is inactive in a given time period, then independently of all other individuals, the probability that they remain inactive in the next time period is $ \beta $. Let $ X_{n} $ denote the number of active individuals in time period $ n $.
> 
> (a) Prove that $ \left\{X_{n}, n \geqslant 0\right\} $ is a Markov chain.
> 
> (b) Find $ \mathrm{E}\left[X_{n} \mid X_{0}=i\right] $.
> 
> (c) Derive an expression for the transition probabilities.
> 
> (d) Find the long-run proportion of time that exactly $ j $ individuals are active.

## Solution (a)

Notice state $n+1$ only depends on state $n$

## Solution (b)

$E[X_{n+1}|X_n] = \alpha X_n + (N-X_n)(1-\beta )$

With induction:

$ E\left[X_{n} \mid X_{0}=i\right]=\left(i-\dfrac{N(1-\beta)}{2-\alpha-\beta}\right)(\alpha+\beta-1)^{n}+\dfrac{N(1-\beta)}{2-\alpha-\beta} $

## Solution (c)

$P(X_{n+1}=j|X_n=k) = \sum_{m=\max (0, j-(N-k))}^{\min (k, j)}\binom{k}{m} \alpha^{m}(1-\alpha)^{k-m} \cdot\binom{N-k}{j-m}(1-\beta)^{j-m} \beta^{N-k-(j-m)}$

## Solution (d)

For $ N=1 $, the stationary distribution $ \pi $ satisfies:
$
\pi_{1}=\dfrac{1-\beta}{2-\alpha-\beta}, \quad \pi_{0}=\frac{1-\alpha}{2-\alpha-\beta}
$

For general $ N $, individuals act independently. The stationary distribution is binomial with parameters $ N $ and $ p=\dfrac{1-\beta}{2-\alpha-\beta} $ :
$
\pi_{j}=\binom{N}{j}\left(\dfrac{1-\beta}{2-\alpha-\beta}\right)^{j}\left(\frac{1-\alpha}{2-\alpha-\beta}\right)^{N-j}
$

## Problem 36

> A process changes its state daily according to a two-state Markov chain. If the process is in state $ i $ on one day, then the next day it is in state $ j $ with probability $ P_{i, j} $, where
$
P_{0,0}=0.4, \quad P_{0,1}=0.6, \quad P_{1,0}=0.2, \quad P_{1,1}=0.8
$

Each day, a message is sent. If the Markov chain is in state $ i $ on that day, the probability that the message sent is a good message is $ p_{i} $, and the probability that it is a bad message is $ q_{i}=1-p_{i,} $ for $ i=0,1 $.
> 
> (a) If the process is in state 0 on Monday, what is the probability that a good message is sent on Tuesday?
> 
> (b) If the process is in state 0 on Monday, what is the probability that a good message is sent on Friday?
> 
> (c) In the long run, what is the proportion of messages that are good?
> 
> (d) If a good message is sent on day $ n $, let $ Y_{n}=1 $; otherwise, let $ Y_{n}=2 $. Is $ \left\{Y_{n}, n \geqslant 1\right\} $ a Markov chain? If yes, provide its transition probability matrix. If no, briefly explain why not.

## Solution (a)

$0.4p_0+0.6p_1$

## Solution (b)

We have:

$ P^{4}=\left[\begin{array}{ll}0.2512 & 0.7488 \\ 0.2496 & 0.7504\end{array}\right] $

Then it's:

$0.2512p_0 + 0.7488p_1$

## Solution (c)

Solve $\pi^T = \pi^T P$ we get:

$\pi = (\dfrac{1}{4}, \dfrac{3}{4})^T$

Then:

$0.25p_0+0.75p_1$

## Solution (d)

No.

$Y_{n+1}$ is determined by $X_n$, instead of $Y_n$

## Problem 37

> Prove that the stationary probabilities of a Markov chain with transition probabilities $ P_{i, j} $ are also the stationary probabilities of the Markov chain defined by the transition probabilities
$
Q_{i, j}=P_{i, j}^{k}
$
for a specific positive integer $ k $.

## Solution 

we have:

$\pi^T = \pi^T P$

Therefore:

$\pi^T = \pi^T P = \pi^T = \pi^T P^2 = \pi^T = \pi^T P^k = \pi^T = \pi^T Q$

## Problem 42

> Let $ A $ be a set of states, and $ A^{\mathrm{c}} $ be the set of remaining states.
(a) What does $ \sum_{i \in A} \sum_{j \in A^{c}} \pi_{i} P_{i j} $ represent?
(b) What does $ \sum_{i \in A^{c}} \sum_{j \in A} \pi_{i} P_{i j} $ represent?
(c) Explain the identity
$
\sum_{i \in A} \sum_{j \in A^{c}} \pi_{i} P_{i j}=\sum_{i \in A^{c}} \sum_{j \in A} \pi_{i} P_{i j}
$

## Solution (a)

Probability of $A$ flows to $A^C$


## Solution (b)

Probability of $A^C$ flows to $A$

## Solution (c)

Two flows must be equal

## Problem 45

> Consider an irreducible finite Markov chain with states $ 0,1, \cdots, N $.
> 
> (a) Starting from state $ i $, what is the probability that the process eventually visits state $ j $ ? Provide an explanation.
> 
> (b) Let $ x_{i}=\mathrm{P}\{ $ visiting state $ N $ before visiting state $ 0 \mid $ starting at $ i\} $. Compute the system of linear equations satisfied by $ x_{i} $, for $ i=0,1, \cdots, N $.
> 
> (c) If for $ i=1, \cdots, N-1 $, it holds that $ \sum_{j} j P_{i j}=i $, prove that $ x_{i}=i / N $ is a solution to the equations in (b).

## Solution (a)

1

finite and irreducible, therefore every state is **recurrent**

## Solution (b)

We have:

$ \left\{\begin{array}{l}x_{i}=\sum_{j=0}^{N} P_{i j} x_{j} \quad \text { for } i=1,2, \ldots, N-1 \\ x_{0}=0 \\ x_{N}=1\end{array}\right. $

## Solution (c)

$\begin{array}{l} 
\sum_{j=0}^{N} P_{i j} x_{j} \\ 
=\sum_{j=0}^{N} P_{i j} \cdot \frac{j}{N} \\ 
=\frac{1}{N} \sum_{j=0}^{N} j P_{i j} 
\\ = \frac{i}{N} 
\\ = x_i
\end{array}$

## Problem 47

> Consider an ergodic Markov chain $ \left\{X_{n}, n \geqslant 0\right\} $ with limiting probabilities $ \pi_{i} $. Define the process $ \left\{Y_{n}, n \geqslant 1\right\} $ by $ Y_{n}=\left(X_{n-1}, X_{n}\right) $. That is, $ Y_{n} $ tracks the last two states of the original chain. Is $ \left\{Y_{n}, n \geqslant 1\right\} $ a Markov chain? If so, determine its transition probabilities and find
> $\lim _{n \rightarrow \infty} \mathrm{P}\left\{Y_{n}=(i, j)\right\}$

## Solution 

$ P\left(Y_{n+1}=(j, l) \mid Y_{n}=(i, j)\right)=P\left(X_{n+1}=l \mid X_{n}=j, X_{n-1}=i\right) = P_{jl}$.

Therefore, $Y_n$ is a Markov chain 

$ P\left(Y_{n+1}=(k, l) \mid Y_{n}=(i, j)\right)=\left\{\begin{array}{ll}P_{j l} & \text { if } k=j, \\ 0 & \text { if } k \neq j .\end{array}\right. $

$ \lim _{n \rightarrow \infty} \mathrm{P}\left\{Y_{n}=(i, j)\right\}=\pi_{i} P_{i j} $.

## Problem 57

> A particle moves between $ n+1 $ vertices located on a circle in the following manner: at each step, it moves one step clockwise with probability $ p $, or one step counterclockwise with probability $ q= $ $ 1-p $. Starting from a special state 0 , let $ T $ be the first time it returns to state 0 . Find the probability that all states have been visited before $ T $.

## Solution 

if first move is $p$ and goes to 1, and we want to visit $n+1$ before $0$, we have:


We have:

$ \left\{\begin{array}{l}x_{i}=px_{i-1} + (1-p)x_{i+1} \quad \text { for } i=1,2, \ldots, N \\ x_{0}=0 \\ x_{N+1}=1\end{array}\right. $

When $p\ne \dfrac{1}{2}$ We can get:

$x_1 = \dfrac{1-\frac{p}{q}}{1-\frac{p^n}{q^n}}$

Similarly we can get the answer:

$P = px_1 + qy_1 = p\dfrac{1-\frac{p}{q}}{1-\frac{p^n}{q^n}} + q\dfrac{1-\frac{q}{p}}{1-\frac{q^n}{p^n}}$

When $p = \dfrac{1}{2}$:

$x_1 = \dfrac{1}{2}$

$P = px_1+qy_1 = \dfrac{1}{2}$

## Problem 59

> For the gambler's ruin model in Section 4.5.1, it is known that a gambler starts with wealth $ i $ (where $ i=0,1, \ldots, N) $, and $ M_{i} $ denotes the average number of bets required until the gambler either goes bankrupt (wealth reaches 0 ) or achieves wealth $ N $. Prove that $ M_{i} $ satisfies the following system of equations:
$
M_{0}=M_{N}=0 ; \quad M_{i}=1+p M_{i+1}+q M_{i-1}, \quad \text { for } i=1, \ldots, N-1
$

> Solve the above system of equations to obtain:
$
M_{i}=\left\{\begin{array}{ll}
i(N-i), & \text { if } p=\frac{1}{2} \\
\frac{i}{q-p}-\frac{N}{q-p} \frac{1-(q / p)^{i}}{1-(q / p)^{N}}, & \text { if } p \neq \frac{1}{2}
\end{array}\right.
$

## Solution 

It is trivial that:$ M_{0}=M_{N}=0 ; \quad M_{i}=1+p M_{i+1}+q M_{i-1}, \quad i=1, \cdots, N-1 $

When $p = \dfrac{1}{2}$:

$p(M_{i+1}-M_i) - q(M_i - M_{i-1}) = -1 $

Then:

$M_N - M_{N-1} = -\dfrac{1}{p} -\dfrac{q}{p^2}-\cdots-\dfrac{q^{
N-2}}{p^{N-1}} +\dfrac{q^{N-1}}{p^{N-1}}M_1= -\dfrac{1-\frac{q^{N-1}}{p^{N-1}}}{p-q}+\dfrac{q^{N-1}}{p^{N-1}}M_1$

Then:

$M_N = \dfrac{N}{p-q}-\dfrac{1-\frac{q^N}{p^N}}{(p-q)(1-\frac{q}{p})}+\dfrac{1-\frac{q^N}{p^N}}{1-\frac{q}{p}}M_1 = 0 $

Then:

$M_1 = \dfrac{1}{p-q}-\dfrac{N}{p(1-\frac{q^N}{p^N})}$

Therefore:

$M_i =  \frac{i}{q-P}-\frac{N}{q-P} \frac{1-(q / p)^{i}}{1-(q / p)^{N}}$

When $p=\dfrac{1}{2}$:

$M_N - M_{N-1} = -2(N-1)+M_1$

Then:

$M_N = -N(N-1)+(N-1)M_1 = 0$

Then:

$M_1 = \dfrac{1}{N}$

Then:

$M_i = i(N-i)$

Therefore:

$ M_{i}=\left\{\begin{array}{ll}i(N-i), & \text { if } P=\frac{1}{2} \\ \frac{i}{q-P}-\frac{N}{q-P} \frac{1-(q / p)^{i}}{1-(q / p)^{N}}, & \text { if } P \neq \frac{1}{2}\end{array}\right. $


## Problem 61

> Suppose in the gambler's ruin problem, the probability of winning a round depends on the gambler's current wealth. Specifically, let $ \alpha_{i} $ be the probability that the gambler wins a round when his wealth is $ i $. Given that the gambler's initial wealth is $ i $, let $ P(i) $ denote the probability that the gambler's wealth reaches $ N $ before reaching 0 .
> 
> (a) Derive a formula relating $ P(i) $ to $ P(i-1) $ and $ P(i+1) $.
> 
> (b) Using the same method as in the gambler's ruin problem, solve the equation for $ P(i) $ from part (a).
> 
> (c) Suppose there are initially $ i $ balls in jar 1 and $ N-i $ balls in jar 2, and each time a ball is randomly selected from the $ N $ balls and moved to the other jar. Find the probability that jar 1 becomes empty before jar 2.

## Solution (a)

$ P(i)=\alpha_{i} P(i+1)+\left(1-\alpha_{i}\right) P(i-1) $

## Solution (b)

We omit the steps:

$ P(i)=\frac{\sum_{j=1}^{i}(-1)^{j-1} \prod_{k=1}^{j-1} \frac{1-\alpha_{k}}{\alpha_{k}}}{\sum_{j=1}^{N}(-1)^{j-1} \prod_{k=1}^{j-1} \frac{1-\alpha_{k}}{\alpha_{k}}} $

## Solution (c)

$\alpha _i = \dfrac{i}{N}$, then:

$ \frac{\sum_{j=i+1}^{N}(j-1)!(N-j)!}{\sum_{j=1}^{N}(j-1)!(N-j)!} $

placeholder



placeholder

placeholder

placeholder