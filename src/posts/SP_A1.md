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

> 9. Let $ X_{1}, X_{2}, \ldots $ be i.i.d. random variables, and $ N $ be a non-negative integer-valued random variable independent of the $ X $-sequence. Define $ S_{0}=0 $ and $ S_{N}=\sum_{i=1}^{N} X_{i} $ (a compound random variable). Assume $ N $ follows a Poisson distribution with mean $ \lambda $. Find an expression for $ P_{n}= $ $ P\left\{S_{N}=n\right\}, n=0,1, \ldots $

## (10)

### Problem 

> 10. If $ N $ follows a binomial distribution with parameters $ r $ and $ p $, find $ P_{n}=P\left\{S_{N}=n\right\}, n= $ $ 0,1, \ldots $.


placeholder



placeholder



placeholder



placeholder



placeholder


