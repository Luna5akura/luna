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






placeholder


placeholder


placeholder


placeholder