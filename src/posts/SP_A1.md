# 2

## (1)

### Problem

> Are $ \cup_{n=1}^{\infty} E_{n} $ and $ \cap_{n=1}^{\infty} E_{n} $ events? If so, what do they represent?

### Solution

Yes, they are events.

$\cup_{n=1}^\infty E_n$ is the event that one of them happens

$\cap_{n=1}^\infty E_n$ is the event that all of them happen

## (2)

### Problem 

> Example: Three pairwise independent events that are not mutually independent.

### Solution 

Consider following setting:

$\Omega = \{\omega_1,\omega_2,\omega_3,\omega_4\}, E_1 = \{\omega_1,\omega_2\}, E_2 = \{\omega_1,\omega_3\}, E_3 = \{\omega_1,\omega_4\}$

Then:

$P(E_1E_2) =\dfrac{1}{4}, P(E_1)P(E_2) = \dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{4}$

same goes for $E_1E_3, E_2E_3$

However:

$P(E_1E_2E_3) = \dfrac{1}{4}, P(E_1)P(E_2)P(E_3) = \dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{8}$

## (3)

### Problem

> Statement: If $ F_{1}, \ldots, F_{n} $ are mutually exclusive and exhaustive $ \left(\cup_{i=1}^{n} F_{i}=S\right) $, then: $ P(E)=\sum_{i=1}^{n} P\left(E \mid F_{i}\right) P\left(F_{i}\right) . $

### Proof

Notice:

$P(E|F_i)P(F_i) = P(EF_i)$

Since $F_i\cap F_j = \oslash,\forall i\ne j$

We can get:

$EF_i\cap EF_j = E(F_i\cap F_j) = \oslash$

Then:

$P(E) = P(ES) = P(E(\cup_{i=1}^n F_i)) = \sum_{i=1}^n P(EF_i) = \sum_{i=1^n} P(E|F_i)P(F_i)$

## (4)

### Problem 

> Write Binomial Theorem

### Solution 

For any integers $ n \geq 0 $ and real numbers $ a, b $ :
$
(a+b)^{n}=\sum_{k=0}^{n}\binom{n}{k} a^{n-k} b^{k} .
$

## (5)

### Problem 

> Expectation of $ X $ if $ Y=X+1 $ is Geometric

### Solution 

Since: $E[Y] = \dfrac{1}{p}$

Then: $E[X] = E[Y-1] = E[Y]-1 = \dfrac{1}{p} - 1$

## (6)

### Problem 

> Distribution of $ X+Y $ for Independent Poisson Variables

### Solution 

Assuming: $p(x) = e^{-\lambda_1}\dfrac{\lambda_1^x}{x!},p(y) = e^{-\lambda_2}\dfrac{\lambda_2^y}{y!},$

Then for $X+Y$

$\begin{aligned}
&P(X+Y= z)\\ 
 &= \sum_{i=0}^{z}e^{-\lambda_1}\dfrac{\lambda_1^i}{i!}e^{-\lambda_2}\dfrac{\lambda_2^{z-i}}{(z-i)!} \\
&=e^{-(\lambda_1+\lambda_2)}\sum_{i=0}^{z}\dfrac{\lambda^i_1\lambda_2^{z-i}}{i!(z-i)!} 
 \end{aligned}$

Notice:

$(\lambda_1+\lambda_2)^z = z! \sum_{i=0}^{z}\dfrac{\lambda^i_1\lambda_2^{z-i}}{i!(z-i)!} $

Then:

$P(X+Y = z) =e^{-(\lambda_1+\lambda_2)}\dfrac{(\lambda_1+\lambda_2)^z}{z!} $

Therefore:

$X+Y\sim \text{Poi}(\lambda_1+\lambda_2)$

## (7)

### Problem 

> Expected Number of Tosses Until First Head

### Solution 

Denote $E$ as "First toss is Head",then:

$\begin{aligned}
&E(X)\\
& = E(X|E)P(E) + E(X|E^c)P(E^c) \\
&= 1\cdot p + (\dfrac{1}{p}+1)\cdot (1-p)\\ 
&= \dfrac{1}{p}
\end{aligned}$

## (8)

### Problem 

> Consider $ n $ independent trials, where each trial results in one of $ 1, \ldots, r $ with probabilities $ p_{1}, \ldots, p_{r} $, respectively, such that $ p_{1}+\cdots+p_{r}=1 $. Let $ N_{i} $ denote the number of trials resulting in outcome $ i $. The vector $ \left(N_{1}, \ldots, N_{r}\right) $ follows a multinomial distribution. Using the conditional expectation formula, compute $ \operatorname{Cov}\left(N_{i}, N_{j}\right) $

### Solution 

We have:

$E[N_i] = np_i$

Notice: $(N_i | N_j=y) \sim \text{B}(n-y, \dfrac{p_i}{1-p_j})$

Then:

$E[N_iN_j|N_j=y] =y(n-y)\dfrac{p_i}{1-p_j} $

$\begin{aligned}
&E[N_iN_j]\\ 
&=E[E[N_iN_j|N_j]]\\ 
&=\sum_{y=0}^n y(n-y)\dfrac{p_i}{1-p_j}\cdot \binom{n}{y}p_j^y (1-p_j)^{n-y}
\end{aligned}
$

Notice:

$\sum_{y=0}^n y\binom{n}{y}p_j^y (1-p_j)^{n-y} = E[N_j] = np_j$

$\sum_{y=0}^n y^2\binom{n}{y}p_j^y (1-p_j)^{n-y} = E[N_j^2] =(E[N_j])^2 + Var[N_j]= n^2p_j^2 + np_j(1-p_j)$

Then:

$$
\begin{aligned}
&E[N_iN_j]\\ 
&=\dfrac{p_i}{1-p_j}(n^2p_j- n^2p_j^2 - np_j(1-p_j))\\
&= p_i (n^2p_j - np_j)\\
&= n(n-1)p_ip_j
\end{aligned}
$$

Then:

$\begin{aligned} 
&Cov(N_j,N_j)\\ 
& = E[N_iN_j] - E[N_i]E[N_j] \\ 
&= n(n-1)p_ip_j - np_i\cdot np_j\\ 
&=-np_ip_j 
\end{aligned}
$

## (9)

### Problem 

> 9. Let $ X_{1}, X_{2}, \ldots $ be i.i.d. random variables, and $ N $ be a non-negative integer-valued random variable independent of the $ X $-sequence. Define $ S_{0}=0 $ and $ S_{N}=\sum_{i=1}^{N} X_{i} $ (a compound random variable). Assume $ N $ follows a Poisson distribution with mean $ \lambda $.Assume $X_i$ is interger random variable, $P\{X_1 = j\} = a_j, j>0$. Moreover, $\mathrm{P}\{M=n\}=\frac{n \mathrm{P}\{N=n\}}{\mathrm{E}[N]}$. Find an expression for $ P_{n}= $ $ P\left\{S_{N}=n\right\}, n=0,1, \ldots $

### Solution 

We have:

$
\begin{aligned}
&P_n \\ 
&= \sum_{k=0}^\infty P(S_k=n)\cdot P(N=k)\\ 
&=\sum_{k=0}^n P(S_k=n)\cdot P(N=k)\\ 
&=\sum_{k=0}^n P(S_k=n)\cdot e^{-\lambda}\dfrac{\lambda^k}{k!}\\ 
\end{aligned}
$

With MGF:

$\phi(t) = E[e^{tS_N}]= \sum_{n=0}^\infty P_n e^{tn}$

$\phi'(t) = \sum_{n=0}^\infty nP_ne^{tn}$

On the other hand:

$
\begin{aligned}
&E[e^{tS_N}]\\ 
&= E[E[e^{tS_N}|N]]\\ 
&=E[(E[e^{tX_1}])^N]\\ 
&=e^{\lambda(E[e^{tX_1}]-1)}\\ 
&=e^{\lambda(\sum_{j=1}^\infty (a_j e^{tj})-1)}
\end{aligned}
$

Then:

$\phi'(t) = \lambda \sum_{j=1}^\infty (ja_j e^{tj})\phi(t)$

Replace $\phi(t) $ and $\phi'(t)$, we get:

$\sum_{n=0}^{\infty}nP_ne^{tn}= \lambda \sum_{j=1}^\infty (ja_j e^{tj})\sum_{n=0}^\infty P_n e^{tn}$

To match the power of $e$, we get:

$nP_n = \lambda \sum_{j=1}^n ja_j P_{n-j}$

That is:

$ P_{n}=\left\{\begin{array}{ll}e^{-\lambda} & \text { if } n=0, \\ \frac{\lambda}{n} \sum_{j=1}^{n} j a_{j} P_{n-j} & \text { if } n \geq 1 .\end{array}\right. $


## (10)

### Problem 

> 10. If $ N $ follows a binomial distribution with parameters $ r $ and $ p $, find $ P_{n}=P\left\{S_{N}=n\right\}, n= $ $ 0,1, \ldots $.

### Solution 

Notice:

$(M-1)\sim \text{B}(r-1,p)$

With the corollary:

$ \mathrm{P}\left\{S_{N}=k\right\}=\frac{\mathrm{E}[N]}{k} \cdot \sum_{j=1}^{k} j \alpha_{j} \cdot \mathrm{P}\left\{S_{M-1}=k-j\right\}, k>0 $

We denote $P_r(k) = P(S_{N_{(r)}}=k)$, where $N(r)\sim \text{B}(r,p)$, then:

$P_r(0) = (1-p)^r$

$P_r(k) = \dfrac{rp}{k}\sum_{j=1}^k ja_j P_{r-1}(k-j), k>0$

---

# Chapter 1

## 10

### Problem 

> Prove Bool's Inequality: $ \mathrm{P}\left(\bigcup_{i=1}^{n} E_{i}\right) \leqslant \sum_{i=1}^{n} \mathrm{P}\left(E_{i}\right) $

### Solution 

We prove by induction:

When $n=1$, it is obvious that:

$P(E_1)\le P(E_1)$

For $n-1$, assume that:

$ \mathrm{P}\left(\bigcup_{i=1}^{n-1} E_{i}\right) \leqslant \sum_{i=1}^{n-1} \mathrm{P}\left(E_{i}\right) $

Then:

$$
\begin{aligned}
&\mathrm{P}\left(\bigcup_{i=1}^{n} E_{i}\right)\\ 
&=\mathrm{P}\left(\bigcup_{i=1}^{n-1} E_{i}\right)+\mathrm{P}\left(E_{n}\right)-\mathrm{P}\left(\bigcup_{i=1}^{n-1} E_{i} \cap E_{n}\right)
 \\ 
 &\le\mathrm{P}\left(\bigcup_{i=1}^{n-1} E_{i}\right)+\mathrm{P}\left(E_{n}\right)\\ 
& \le \sum_{i=1}^{n-1} \mathrm{P}\left(E_{i}\right)+\mathrm{P}\left(E_{n}\right)\\ 
&=\sum_{i=1}^{n} \mathrm{P}\left(E_{i}\right)  
\end{aligned}
$$

## 12

### Problem 

> Let $ E $ and $ F $ be mutually exclusive events in the sample space of a certain experiment. Suppose the experiment is repeated until either $ E $ or $ F $ occurs. What is the sample space of this super experiment? Prove that the probability of event $ E $ occurring before event $ F $ is
$
\frac{\mathrm{P}(E)}{\mathrm{P}(E)+\mathrm{P}(F)}
$

### Solution 

For the sample space:

$\Omega = \cup_{k=0}^\infty \{(E\cup F)^c\}^k\times \{E,F\}$

Denote $G_E$ as "$E$ happens at first experiment",$G_F$ as "$F$ happens at first experiment", $H$ as the needed event. Notice that:

$
\begin{aligned}
&P(H|(G_E\cup G_F)^c) = P(H)\\ 
&P(H) \\ 
&= P(H|G_E)P(G_E)+ P(H|G_F)P(G_F) + P(H|(G_E\cup G_F)^c)P((G_E\cup G_F)^c)\\ 
&= 1\cdot P(E) + 0 + P(H)\cdot (1-P(E)- P(H))\\ 
\end{aligned}
$

Then we get:

$P(H) = \dfrac{P(E)}{P(E)+P(F)}$

## 23

### Problem 

> For events $ E_{1}, E_{2}, \cdots, E_{n} $ Prove:
> 
> $\mathrm{P}\left(E_{1} E_{2} \cdots E_{n}\right)=\mathrm{P}\left(E_{1}\right) \mathrm{P}\left(E_{2} \mid E_{1}\right) \mathrm{P}\left(E_{3} \mid E_{1} E_{2}\right) \cdots \mathrm{P}\left(E_{n} \mid E_{1} \cdots E_{n-1}\right)$

### Solution 

We prove by induction: 

For $n-1$, it's obvious that:

$P(E_1) = P(E_1)$

Then, assume case $n-1$ holds, that is: 

$P(E_1E_2\cdots E_{n-1})
=P(E_1)P(E_2|E_1)P(E_3|E_1E_2)\cdots P(E_{n-1}|E_1\cdots E_{n-2})$

Notice:

$P(E_1E_2\cdots E_n) = P(E_n|E_1\cdots E_{n-1})P(E_1\cdots E_{n-1})$

Then:

$
\begin{aligned}
&P(E_1E_2\cdots E_n)\\ 
& = P(E_n|E_1\cdots E_{n-1})P(E_1\cdots E_{n-1})\\ 
&=P(E_1)P(E_2|E_1)P(E_3|E_1E_2)\cdots P(E_{n}|E_1\cdots E_{n-1})
\end{aligned}
$

## 28

### Problem 

> If the occurrence of $ B $ makes $ A $ more likely to occur, does the occurrence of $ A $ make $ B $ more likely to occur?

### Solution 

Yes.

We translate the problem into:

Given: $P(A|B)>P(A)$,

Prove or not: $P(B|A)>P(B)$

Notice:

$P(A|B)P(B) = P(AB) = P(B|A)P(A)$

Rearrange it:

$\dfrac{P(A|B)}{P(A)}=\dfrac{P(B|A)}{P(B)}$

Given $P(A|B)> P(A)$

We get:

$P(B|A)>P(B)$

## 39

### Problem 

> Assume that stores A, B, and C have 50, 75, and 100 employees, respectively. Among them, 50\%, $ 60 \% $, and $ 70 \% $ are female. The probability of resignation is the same for all employees, regardless of gender. Now, an employee has resigned, and she is female. What is the probability that she worked at store C?

### Solution 

Denote $E$ as "Employee is female", $F$ as "Employee works in C, then:

$
\begin{aligned}
&P(F|E) \\ 
&= \dfrac{P(EF)}{P(E)}\\ 
&= \dfrac{100 \times 70\%}{50\times 50\% + 75 \times 60\% +100 \times 70\%}\\ 
&= \dfrac{1}{2}
\end{aligned}
$

# Chapter 2

## 7

### Problem 

> Suppose a coin with a probability of 0.7 for landing heads is tossed 3 times. Let $ X $ denote the number of heads that appear in these 3 tosses. Determine the probability mass function of $ X $.

### Solution 

Notice:

$X\sim \text{B}(3,0.7)$

Then:

$ P(X=k)=\left\{\begin{array}{ll}0.027, & \text { if } k=0, \\ 0.189, & \text { if } k=1, \\ 0.441, & \text { if } k=2, \\ 0.343, & \text { if } k=3\end{array}\right. $

## 23 

### Problem 

> Negative binomial distribution: Continuously toss a coin with probability $ p $ of landing heads until $ r $ heads appear. Derive the probability that the number of tosses required, $ X $, is $ n $ (where $ n \geqslant r $ ):
> 
> $\mathrm{P}\{X=n\}=\binom{n-1}{r-1} p^{r}(1-p)^{n-r}, \quad n \geqslant r$


### Solution 

Notice that we need $r-1$ heads in $n-1$ times, then:

$P\{X=n\} = \binom{n-1}{r-1}p^{r}(1-p)^{n-r}$

## 46

### Problem (a)

> If $ X $ is a non-negative integer-valued random variable, prove that:
> $\mathrm{E}[X]=\sum_{n=1}^{\infty} \mathrm{P}\{X \geqslant n\}=\sum_{n=0}^{\infty} \mathrm{P}\{X>n\} .$

### Solution (a)

Notice:

$$
\begin{aligned}
&\sum_{n=1}^{\infty} \mathrm{P}\{X \geqslant n\}\\ 
&=  \sum_{n=1}^{\infty} \sum_{k=n}^{\infty} \mathrm{P}\{X=k\}  \\ 
&= \sum_{k=1}^{\infty}  \sum_{n=1}^{k}\mathrm{P}\{X=k\}  \\ 
&= \sum_{k=1}^\infty k P\{X=k\} \\ 
&= E[X]
\end{aligned}
$$

Also:

$$
\begin{aligned}
&\sum_{n=1}^{\infty} \mathrm{P}\{X \geqslant n\}\\ 
&=\sum_{n=1}^{\infty} \mathrm{P}\{X > n-1\}\\ 
&=\sum_{n=0}^{\infty} \mathrm{P}\{X > n\}\\ 
\end{aligned}
$$

### Problem (b)

> If $ X $ and $ Y $ are both non-negative integer-valued random variables, prove that:
> 
> $\mathrm{E}[X Y]=\sum_{n=1}^{\infty} \sum_{m=1}^{\infty} \mathrm{P}(X \geqslant n, Y \geqslant m) .$

### Solution 

Similarly:

$$
\begin{aligned}
&\sum_{n=1}^{\infty} \sum_{m=1}^{\infty} \mathrm{P}(X \geqslant n, Y \geqslant m) \\ 
&= \sum_{n=1}^{\infty} \sum_{m=1}^{\infty}\sum_{x=n}^\infty \sum_{y=m}^\infty  \mathrm{P}(X =x, Y =y)\\ 
&=\sum_{x=1}^{\infty} \sum_{y=1}^{\infty}\sum_{n=1}^x \sum_{m=1}^y  \mathrm{P}(X =x, Y =y)\\ 
&=\sum_{x=1}^{\infty} \sum_{y=1}^{\infty}xy\mathrm{P}(X =x, Y =y)\\ 
&=E[XY]
\end{aligned}
$$

## 48 

### Problem 

> If $ X $ is a non-negative random variable and $ g $ is a differentiable function with $ g(0)=0 $, then:
> 
> $\mathrm{E}[g(X)]=\int_{0}^{\infty} \mathrm{P}(X>t) g^{\prime}(t) \mathrm{d} t$
> 
> Prove the above result when $ X $ is a continuous random variable.

### Solution 

We have:

$$
\begin{aligned}
&\int_{0}^{\infty} \mathrm{P}(X>t) g^{\prime}(t) \mathrm{d} t \\ 
&=\int_{0}^{\infty} \int_t^\infty P(X=x) g^{\prime}(t) \mathrm d x \mathrm{d} t \\ 
&=\int_{0}^{\infty} \int_0^x P(X=x) g^{\prime}(t) \mathrm d t\mathrm{d} x \\ 
&=\int_0^\infty g(x)P(X=x)\mathrm d x \\ 
&= E[g(x)]
\end{aligned}
$$

## 71 

### Problem 

> Prove that the sum of independent and identically distributed (i.i.d.) exponential random variables has a gamma distribution.

### Solution 

Notice for exponential distribution: 


$ M_{X}(t)=\int_{0}^{\infty} e^{t x} \cdot \lambda e^{-\lambda x} d x=\lambda \int_{0}^{\infty} e^{-(\lambda-t) x} d x $

Then: 

$ M_{X}(t)=\lambda \cdot \frac{1}{\lambda-t}=\frac{\lambda}{\lambda-t} \quad(t<\lambda) $

Also, for Gamma distribution:

$ M_{X}(t)=\int_{0}^{\infty} e^{t x} \cdot \frac{\lambda^{\alpha}}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x} d x=\frac{\lambda^{\alpha}}{(\lambda-t)^{\alpha}} \cdot \frac{\Gamma(\alpha)}{\Gamma(\alpha)} $

Then:

$ M_{X}(t)=\left(\frac{\lambda}{\lambda-t}\right)^{\alpha} $

Therefore, for i.i.d. exponential distributions:

$M_{\sum_{i=1}^{\alpha} X_i}(t) = (\dfrac{\lambda}{\lambda-t})^\alpha $

Therefore:

$\sum_{i=1}^{\alpha} X_i\sim \text{Gamma}(\alpha)$

# Chapter 3

## 7

### Problem 

> Suppose the joint probability mass function $ p(x, y, z) $ of $ X, Y $, and $ Z $ is given by:
> 
> $\begin{array}{llll}p(1,1,1)=\frac{1}{8}, & p(2,1,1)=\frac{1}{4}, & p(1,1,2)=\frac{1}{8}, & p(2,1,2)=\frac{3}{16} \\p(1,2,1)=\frac{1}{16}, & p(2,2,1)=0, & p(1,2,2)=0, & p(2,2,2)=\frac{1}{4}\end{array}$
> 
> What is $ \mathrm{E}[X \mid Y=2] $ ? What is $ \mathrm{E}[X \mid Y=2, Z=1] $ ?

### Solution 

We have:

$P(Y=2) = \sum_{x,z}p(x,2,z) = \dfrac{5}{16}$

With conditional probability:

$P(X=1|Y=2) = \dfrac{P(X=1,Y=2)}{P(Y=2)} = \dfrac{1}{5}$

$P(X=2|Y=2) = \dfrac{P(X=2,Y=2)}{P(Y=2)} = \dfrac{4}{5}$

Then:

$$
\begin{aligned}
&E[X|Y=2]\\ 
&= \sum_{x}x\cdot P(X=x|Y=2) \\ 
&= \dfrac{9}{5}
\end{aligned}
$$

Similarly:


$$
\begin{aligned}
&E[X|Y=2, Z=1]\\ 
&= \sum_{x}x\cdot P(X=x|Y=2, Z=1) \\ 
&= 1
\end{aligned}
$$

## 14

### Problem 

> Let $ X $ be a uniform random variable on $ (0,1) $. Find $ \mathrm{E}[X \mid X<1 / 2] $

### Solution 

We have:

$p(x) = 1, x\in (0, 1)$

Then:

$$
\begin{aligned}
&E[X|X<\dfrac{1}{2}]\\ 
&= \int_0^1 xP(X=x|X<\dfrac{1}{2}) dx \\ 
&=\int_0^\frac{1}{2}x\dfrac{P(X=x)}{\dfrac{1}{2}}dx \\ 
&= \dfrac{1}{4}
\end{aligned}
$$

## 27 

### Problem

> Continuously toss a coin with probability $ p $ of landing heads until the pattern $ \mathrm{T}, \mathrm{T}, \mathrm{H} $ appears. (That is, you stop tossing when the most recent toss is heads, and the two tosses immediately before it are tails.) Let $ X $ be the number of tosses. Find $ \mathrm{E}[X] $.

### Solution 

We give the solution by states:

We denote:

$S_0 $: the most recent toss is H or nothing

$S_1$: the most recent toss is T 

$S_2$: the most recent tosses are T, T

We denote:

$E_i$ as the tosses needed for T, T, H in state $i$

Then:

$E_0 = (1-p)E_1 + pE_0 + 1$

$E_1 = (1-p)E_2 + pE_0 + 1$

$E_2 = p\cdot 0 + (1-p)E_2 + 1$

By solving this, we get:

$E_2 = \dfrac{1}{p}$

$E_0 = \dfrac{1/p}{1-2p+p^2}$

Therefore:

$E[X] = \dfrac{1}{p(1-p)^2}$

## 57

### Problem 

> The number of storms in the next rainy season follows a Poisson distribution, but its parameter is uniformly distributed over $ (0,5) $. That is, $ \Lambda $ is uniformly distributed over $ (0,5) $, and given $ \Lambda=\lambda $, the number of storms is a Poisson random variable with mean $ \lambda $. Find the probability that there are at least three storms in this rainy season.

### Solution 

Denote $X$ as the number of storms in this rainy season.

Notice:

$p(\lambda) = \dfrac{1}{5}$

$P(X=x|\Lambda = \lambda) = \dfrac{\lambda^x}{x!}e^{-\lambda}$

Then:

$$
\begin{aligned}
&P(X\ge 3)\\ 
&= \int_0^5 P(X\ge 3|\Lambda = \lambda) P(\Lambda =\lambda) d \lambda \\ 
&= \dfrac{1}{5}\int_0^5(1-e^{-\lambda} - \lambda e^{-\lambda} - \dfrac{\lambda^2}{2}e^{-\lambda})d\lambda \\ 
&=\dfrac{1}{5}[\lambda+e^{-\lambda}+ (\lambda + 1)e^{-\lambda} + (\dfrac{\lambda^2}{2}+\lambda+1)e^{-\lambda}]^5_0\\ 
&=\dfrac{1}{5}[\lambda + (\dfrac{\lambda^2}{2}+2\lambda+3)e^{-\lambda}]^5_0\\
&=\dfrac{2}{5} + \dfrac{51}{10}e^{-5}\\
\end{aligned}
$$

## 59

### Problem

> Assume that each new coupon collected is independent of the past, and the probability of collecting a coupon of type $ i $ is $ p_{i} $. A total of $ n $ coupons are collected. Let $ A_{i} $ denote the event "at least one of the $ n $ coupons is of type $ i $." For $ i \neq j $, compute $ P\left(A_{i} A_{j}\right) $ using the following methods:
(a) Condition on the number of type $ i $ coupons $ N_{i} $ among the $ n $ coupons;
(b) Condition on the time $ F_{i} $ when the first type $ i $ coupon is collected;
(c) Use the identity $ \mathrm{P}\left(A_{i} \cup A_{j}\right)=\mathrm{P}\left(A_{i}\right)+\mathrm{P}\left(A_{j}\right)-\mathrm{P}\left(A_{i} A_{j}\right) $.

### Solution (a)

We have:

$$
\begin{aligned}
&P(A_iA_j)\\ 
&=\sum_{k=1}^n P(A_j|N_i=k)P(N_i=k) \\ 
&= \sum_{k=1}^n(1-(1-\dfrac{p_j}{1-p_i})^{n-k})\binom{n}{k}p_i^k(1-p_i)^{n-k}
\end{aligned}
$$

### Solution (b)

Similarly, we have:

$$
\begin{aligned}
&P(A_iA_j)\\ 
&=\sum_{k=1}^n P(A_j|F_i=k)P(F_i=k) \\ 
&= \sum_{m=1}^{n}\left[1-\left(1-\frac{p_{j}}{1-p_{i}}\right)^{m-1}\left(1-p_{j}\right)^{n-m}\right]\left(1-p_{i}\right)^{m-1} p_{i}
\end{aligned}
$$

### Solution (c)

We have:

$
\begin{aligned}
&P(A_iA_j) \\ 
&= P(A_i) + P(A_j) - P(A_i \cup A_j) \\ 
&= (1-(1-p_i)^n) + (1-(1-p_j)^n) - (1-(1-p_i-p_j)^n)\\ 
&= 1 - (1-p_i)^n - (1-p_j)^n + (1-p_i- p_j )^n
\end{aligned}$


