# Discrete Martingale

## 1

### Problem

> If $ \left\{Z_{n}, n \geq 1\right\} $ is a martingale, prove that for $ 1 \leq k<n $, 
> 
> $ \mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right]=Z_{k} $ .
> 
> Similarly, if $ \left\{Z_{n}, n \geq 1\right\} $ is a submartingale, prove that 
> 
> $\mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right] \geq Z_{k} $

### Proof (a)

Notice:

$$
\begin{array}{l}
\mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right]\\ 
=E[E[Z_n|Z_{n-1},\dots,Z_1]|Z_k,\dots,Z_1]\\ 
= E[Z_{n-1}|Z_k,\dots,Z_1]
\end{array}
$$

By induction, we can get:

$\mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right]=Z_{k}$

### Proof (b)

Similarly, we have:

$$
\begin{array}{l}
\mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right]\\ 
=E[E[Z_n|Z_{n-1},\dots,Z_1]|Z_k,\dots,Z_1]\\ 
\ge E[Z_{n-1}|Z_k,\dots,Z_1]
\end{array}
$$


By induction, we can get:

$\mathbb{E}\left[Z_{n} \mid Z_{k}, \ldots, Z_{1}\right]\ge Z_{k}$


## 2

### Problem 

> Let $ S_{0}=0, S_{n}=\epsilon_{1}+\cdots+\epsilon_{n} $ for $ n \geq 1 $, where $ \left\{\epsilon_{i}\right\} $ are i.i.d. exponential random variables with $ \lambda=1 $. Show that 
> 
> $X_{n}=2^{n} \exp \left(-S_{n}\right), \quad n \geq 1$
> 
> is a martingale.

### Solution

First:

$$
\begin{array}{l}
E[|X_n|]\\
=E[2^ne^{-n}]\\ 
< \infty 
\end{array}
$$

Then:

$$
\begin{array}{l}
E[X_{n+1} | X_1,\dots, X_n]\\ 
=E[2^{n+1}e^{-S_n}e^{-\epsilon_{n+1}}]\\ 
= 2^{n+1}e^{-S_n}E[e^{-\epsilon_{n+1}}]\\ 
= 2^{n+1}e^{-S_n}\int_0^\infty e^{-x} e^{-x} dx \\ 
= 2^ne^{-S_n} \\ 
=X_n
\end{array}
$$

## 3

### Problem

> If $ X_{i}(i \geq 1) $ are i.i.d. with $ \mathbb{E}[|X|]<\infty $, and $ N $ is a stopping time for $ \left\{X_{i}\right\} $ with $ \mathbb{P}(N<\infty)=1 $ and $ \mathbb{E}[N]<\infty $, show that 
> 
> $\mathbb{E}\left[\sum_{i=1}^{N} X_{i}\right]=\mathbb{E}[N] \mathbb{E}[X] . $

### Solution 

$$
\begin{array}{l} 
E[\sum_{i=1}^NX_i] \\ 
= E[\sum_{i=1}^\infty X_i I_{i\le N}]\\ 
= \sum_{i=1}^\infty E[X] P(N\ge i)\\ 
= \sum_{i=1}^\infty E[X]\sum_{j=i}^\infty P(N=j)\\ 
= \sum_{j=1}^\infty E[X] \sum_{i=1}^j P(N=j) \\ 
=\sum_{j=1}^\infty E[X] jP(N=j) \\ 
= E[N]E[X]
\end{array}
$$

## 4

### Problem 

>   Consider a process $ \left\{X_{n}, n \geq 0\right\} $ where $ X_{0} $ is a positive integer. If $ X_{n}=0 $, then $ X_{n+1}=0 $. If $ X_{n}>0 $,
> 
> $X_{n+1}=\left\{\begin{array}{ll}X_{n}+1, & \text { with probability } 0.5 \\X_{n}-1, & \text { with probability } 0.5\end{array}\right.$
>
> 
> (a) Show that $ X_{n} $ is a non-negative martingale.
> 
> (b) For $ X_{0}=i>0 $, use Kolmogorov's inequality for submartingales to bound$\mathbb{P}\left(\exists n \geq 0, X_{n} \geq N \mid X_{0}=i\right)$

### Solution (a)

Notice $X_n \ge 0$, and:

$$
\begin{array}{l}
E[X_{n+1} | X_1,\dots, X_n]\\ 
= E[X_{n+1}|X_n]\\ 
= \begin{cases}
0.5(X_n+1)+0.5(X_n-1)& X_n >0 \\ 
X_n & X_n = 0
\end{cases}\\ 
= X_n
\end{array}
$$

Then:

$$
\begin{array}{l}
E[|X_n|] \\ 
= E[X_n] \\ 
= E[X_0] \\ 
= X_0 < \infty
\end{array}
$$

### Solution (b)

$$
\begin{array}{l}
P(\max(X_0,\dots,X_n)>N|X_0 = i)\\ 
\le \dfrac{E[X_n| X_0 = i]}{N} \\ 
= \dfrac{i}{N}
\end{array}
$$

which is the upper bound.



## 5

### Problem

> Prove Kolmogorov's Inequality: Let $ X_{1}, X_{2}, \ldots $ be independent random variables with mean 0 . Define $ S_{k}=X_{1}+\cdots+X_{k} $. For any $ a>0 $, show that: 
> 
> $ P\left\{\max _{1 \leq k \leq n}\left|S_{k}\right| \geq a\right\} \leq \frac{\operatorname{Var}\left(S_{n}\right)}{a^{2}} $

### Proof (1)

> (1) Show that $ \left\{S_{k}, k=1,2, \ldots\right\} $ is a martingale with mean 0 .

We have:

$E[|S_n|] \le \sqrt{E[S_n^2]} = Var[S_n] < \infty$

Also:

$$
\begin{array}{l}
E[S_{n+1}|S_1,\dots,S_n]\\ 
=E[\sum_{i=1}^{n+1}X_i|X_1,\dots,X_n]\\ 
=E[X_1+\dots+X_n|X_1,\dots,X_n] + E[X_{n+1}]\\ 
= S_n
\end{array}
$$

### Proof (2)

> (2) Define $ \left\{Z_{k}\right\} $ :
> 
> $Z_{k+1}=\left\{\begin{array}{ll}S_{k+1}, & \text { if } \max _{1 \leq i \leq k}\left|S_{i}\right|<a \\Z_{k}, & \text { if } \max _{1 \leq i \leq k}\left|S_{i}\right| \geq a\end{array}\right.$
> 
> with $ Z_{0}=0 $. Show $ \left\{Z_{k}\right\} $ is a martingale.

Notice $E[|Z_{n+1}|] < \infty $, and:

$$
\begin{array}{l}
E[Z_{n+1}|Z_1,\dots,Z_n]\\ 
= E[S_{n+1}|Z_1,\dots,Z_n]P(\max_{1\le i \le n}|S_i| < a) + E[Z_n|Z_1,\dots,Z_n]P(\max_{1\le i \le n}|S_i| \ge a) \\ 
= E[S_{n+1}|S_1,\dots,S_n]P(\max_{1\le i \le n}|S_i| < a) + Z_nP(\max_{1\le i \le n}|S_i| \ge a) \\ 
= S_nP(\max_{1\le i \le n}|S_i| < a) + Z_nP(\max_{1\le i \le n}|S_i| \ge a) \\ 
= Z_nP(\max_{1\le i \le n}|S_i| < a) + Z_nP(\max_{1\le i \le n}|S_i| \ge a) \\ 
= Z_n
\end{array}
$$

### Proof (3)

> (3) For a martingale $ \left\{M_{k}\right\} $ with $ M_{0}=0 $, show:
> 
> $\sum_{i=1}^{n} E\left[\left(M_{i}-M_{i-1}\right)^{2}\right]=E\left[M_{n}^{2}\right] .$

We have:

$$
\begin{array}{l}
\sum_{i=1}^nE[(M_i - M_{i-1})^2]\\ 
= \sum_{i=1}^n E[E[M_i^2 - 2M_iM_{i-1}+M_{i-1}^2]|M_{i-1}] \\ 
= \sum_{i=1}^n E[E[M_i^2] - M_{i-1}^2]\\ 
= \sum_{i=1}^n E[M_i^2] - E[M_{i-1}^2] \\ 
= E[M_n^2] - E[M_0^2] \\ 
= E[M_n^2]
\end{array}
$$

### Proof (4)

> (4) Use Chebyshev's inequality to show:
> 
> $P\left\{\max _{1 \leq k \leq n}\left|S_{k}\right| \geq a\right\} \leq \frac{E\left[S_{n}^{2}\right]}{a^{2}}=\frac{\operatorname{Var}\left(S_{n}\right)}{a^{2}} .$

We have:

$$
\begin{array}{l}
P\left\{\max _{1 \leq k \leq n}\left|S_{k}\right| \geq a\right\}\\ 
= P\{|Z_n|\ge a\} \\ 
\le \dfrac{E[Z_n^2]}{a^2}\\ 
\le \dfrac{E[S_n^2]}{a^2} \\ 
= \dfrac{Var(S_n)}{a^2}
\end{array}
$$

### Answer (5)

> (5) Does this proof apply to all $ \left\{S_{k}\right\} $ that are mean-0 martingales?

Answer: No 

The proof relies on the independent increments of $ \left\{S_{k}\right\} $. 

Specifically: 

- Step (3) assumes $ \left\{M_{k}\right\} $ has orthogonal increments (true for martingales). 

- Step (4) uses the fact that $ Z_{n}=S_{n} $ if no stopping occurs, which implicitly requires $ S_{n} $ to be a sum of independent variables. 

For general martingales, Kolmogorov's inequality does not hold; instead, Doob's inequality is used, which requires different techniques. Thus, independence is essential here.

# Chapter 4

## 2

### Problem 

> Suppose whether it rains today depends on the weather conditions of the previous three days. Explain how to analyze this system using a Markov chain. How many states must there be?

### Solution 

8, each day has 2 states, and there are:

$2^3 = 8$ 

states. 

## 3 

### Problem 

> In Exercise 2, suppose that if it has rained for the past three days, then it will rain today with probability 0.8; if there was no rain in the past three days, then it will rain today with probability 0.2; and in other cases, today's weather will be the same as yesterday's with probability 0.6. Determine the transition probability matrix $P$


### Solution 

We denote $R$ as rain and $N$ as no rain, then:

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline
 & \text{R R R} & \text{R R N} & \text{R N R} & \text{R N N} & \text{N R R} & \text{N N R} & \text{N N R} \\ \hline
\text{R R R} & 0.8 & 0.2 & 0 & 0 & 0 & 0 & 0 \\ \hline
\text{R R N} & 0 & 0 & 0.4 & 0.6 & 0 & 0 & 0 \\ \hline
\text{R N R} & 0 & 0 & 0 & 0 & 0.6 & 0 & 0 \\ \hline
\text{R N N} & 0 & 0 & 0 & 0 & 0 & 0.4 & 0.6 \\ \hline
\text{N R R} & 0.6 & 0.4 & 0 & 0 & 0 & 0 & 0 \\ \hline
\text{N R N} & 0 & 0 & 0.4 & 0.6 & 0 & 0 & 0 \\ \hline
\text{N N R} & 0 & 0 & 0 & 0 & 0.6 & 0.2 & 0.8 \\ \hline
\text{N N N} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ \hline
\end{array}
$$

## 4

### Problem 

> Consider a process $ \left\{X_{n}, n \geq 0\right\} $ taking values 0,1 , or 2 . Suppose 
> 
> $\mathrm{P}\left\{X_{n+1}=j \mid X_{n}=i, X_{n-1}=i_{n-1}, \cdots, X_{0}=i_{0}\right\}=\left\{\begin{array}{ll} P_{i j}^{\mathrm{I}}, & \text { if } n \text { is even } \\ P_{i j}^{\mathrm{II}}, & \text { if } n \text { is odd. } \end{array}\right. $
> 
>  Is $ \left\{X_{n}, n \geq 0\right\} $ a Markov chain? If not, explain how to enlarge the state space to make it a Markov chain.

### Solution 

No, it depends on if $n$ is odd.

We can extend to $(i, k)$, where $k = \begin{cases}0 &\text {if } n \text{ is odd}\\ 1 &\text {if } n \text{ is even}\end{cases}$

## 5

### Problem 

> A Markov chain $ \left\{X_{n}, n \geq 0\right\} $ with states $ 0,1,2 $ has the transition probability matrix: 
> 
> $ \left[\begin{array}{lll} \frac{1}{2} & \frac{1}{3} & \frac{1}{6} \\ 0 & \frac{1}{3} & \frac{2}{3} \\ \frac{1}{2} & 0 & \frac{1}{2} \end{array}\right] . $
> 
>  Given $ \mathrm{P}\left(X_{0}=0\right)=\mathrm{P}\left(X_{0}=1\right)=\frac{1}{4} $, find $ \mathrm{E}\left[X_{3}\right] $.

### Solution 

Notice:

$$
\begin{array}{l}
 \left[\begin{array}{lll} \frac{1}{2} & \frac{1}{3} & \frac{1}{6} \\ 0 & \frac{1}{3} & \frac{2}{3} \\ \frac{1}{2} & 0 & \frac{1}{2} \end{array}\right]^3
=  \left[\begin{array}{lll} \frac{13}{36} & \frac{11}{54} & \frac{47}{108} \\ \frac{4}{9} & \frac{4}{27} & \frac{11}{27} \\ \frac{5}{12} & \dfrac{2}{9} & \frac{13}{36} \end{array}\right]
\end{array}
$$

Then:

$$
\begin{array}{l}
[\frac{1}{4},\frac{1}{4},\frac{1}{2}]\left[\begin{array}{lll} \frac{13}{36} & \frac{11}{54} & \frac{47}{108} \\ \frac{4}{9} & \frac{4}{27} & \frac{11}{27} \\ \frac{5}{12} & \dfrac{2}{9} & \frac{13}{36} \end{array}\right]
\\
= \left[\frac{59}{144}, \frac{43}{216}, \frac{169}{432}\right] 
\end{array}
$$

Therefore:

$ \mathrm{E}\left[X_{3}\right]=0 \cdot \frac{59}{144}+1 \cdot \frac{43}{216}+2 \cdot \frac{169}{432}=\frac{43}{216}+\frac{338}{432}=\frac{53}{54} $

## 8

### Problem 

>  Suppose Coin 1 lands heads with probability 0.7, and Coin 2 lands heads with probability 0.6. If the coin tossed today lands heads, we choose Coin 1 to toss tomorrow; if it lands tails, we choose Coin 2 to toss tomorrow. Initially, we toss either Coin 1 or Coin 2 with equal probability.
> 
> (a) What is the probability that Coin 1 is tossed on the third day after starting?
> 
> (b) If the coin tossed on Monday lands heads, what is the probability that the coin tossed on Friday of the same week also lands heads?

### Solution (a)

The probability transition matrix:

$$
\begin{array}{l|l|l|}
\hline & 1 & 2 \\ 
\hline 1 & 0.7 & 0.3 \\ 
\hline 2 & 0.6 & 0.4 \\ 
\hline 
\end{array}
$$

Then for the third day:

$[0.5, 0.5]\left[\begin{array}{ll}0.7&0.3\\ 0.6&0.4\end{array} \right]^2 = [0.665, 0.335]$

So the probability is $0.665$

### Solution (b)

For Thursday:

$[1, 0]\left[\begin{array}{ll}0.7&0.3\\ 0.6&0.4\end{array} \right]^3 = [0.6667, 0.3333]$

Then for Friday:

$P(H) = 0.6667 * 0.7 + 0.3333 * 0.6 = 0.6667$

## 11 

### Problem 

> In Example 4.3, Gary was in glum 4 days ago. Given that he has not felt cheerful for a week, what is the probability that he is in glum today?
>
>  The transition probability matrix of $(C, S, G)$ (cheerful, so-so, glum) is: $\boldsymbol{P}=\left[\begin{array}{lll} 0.5 & 0.4 & 0.1 \\ 0.3 & 0.4 & 0.3 \\ 0.2 & 0.3 & 0.5 \end{array}\right]$

### Solution

Notice:

$[\dfrac{7}{15}, \dfrac{8}{15}]\left[\begin{array}{ll}\dfrac{4}{7}&\dfrac{3}{7}\\ \dfrac{3}{8}&\dfrac{5}{8}\end{array}\right] = [\dfrac{7}{15}, \dfrac{8}{15}]$

Therefore, we can approximate that:

$[0, 1]\left[\begin{array}{ll}\dfrac{4}{7}&\dfrac{3}{7}\\ \dfrac{3}{8}&\dfrac{5}{8}\end{array}\right]^4 \approx \dfrac{8}{15}$

## 12

### Problem 

> For a Markov chain $ \left\{X_{n}, n \geq 0\right\} $ with transition probabilities $ P_{i, j} $, consider the conditional probability $ \mathrm{P}\left(X_{n}=m \mid X_{0}=i, X_{k} \neq r\right. $ for $ \left.k=1, \ldots, n\right) $. Is this equal to the $ n $-step transition probability $ Q_{i, m}^{n} $ of a chain with state space excluding $ r $ and adjusted transitions $ Q_{i, j}=\frac{P_{i, j}}{1-P_{i, r}} $ ? Prove or provide a counterexample.

### Solution

Consider a Markov chain with states $ \{0,1,2\} $ where $ r=2 $.

Transition probabilities from state 0: $ P_{0,0}=1 / 3, P_{0,1}=1 / 3, P_{0,2}=1 / 3 $.

Transition probabilities from state $ 1: P_{1,0}=1 / 2, P_{1,1}=1 / 4, P_{1,2}=1 / 4 $.

Then:

$Q_{0,0}^{2}=(1 / 2)(1 / 2)+(1 / 2)(2 / 3)=1 / 4+1 / 3=7 / 12$

$$
\begin{array}{l }
\mathrm{P}\left(X_{2}=0 \mid X_{0}=0, X_{1} \neq 2, X_{2} \neq 2\right)\\ 
= \dfrac{1 / 9+1 / 6}{1 / 9+1 / 9+1 / 6+1 / 12}\\ 
= 10 / 17 
\end{array}
$$

Answer is No.

## 13 

### Problem

> Prove that if $ \boldsymbol{P}^{r} $ has all positive entries for some $ r $, then $ \boldsymbol{P}^{n} $ has all positive entries for $ n \geq r $

### Solution 

We have:

$ P^{n}(i, j)=\sum_{k} P^{r}(i, k) P^{n-r}(k, j)>0 $
