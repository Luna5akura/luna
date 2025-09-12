---
title: Stochastic Progress - Assignment - Week 6
category: Assignments
date: 2025-9-10 
---

# 2

## Problem 

> Assume that the interarrival time distribution of a renewal process is Poisson with mean $ \mu $. That is, assume
$$
\mathrm{P}\left\{X_{n}=k\right\}=\mathrm{e}^{-\mu} \frac{\mu^{k}}{k!}, \quad k=0,1, \cdots
$$
(a) Find the distribution of $ S_{n} $.
(b) Compute $ \mathrm{P}\{N(t)=n\} $.

## Solution (a)

Since $ S_{n}=X_{1}+X_{2}+\cdots+X_{n} $ is the sum of $ n $ i.i.d. Poisson random variables, each with parameter $ \mu, S_{n} $ follows a Poisson distribution with parameter $ n \mu $. Therefore, the probability mass function (PMF) of $ S_{n} $ is:

$ \mathrm{P}\left\{S_{n}=k\right\}=e^{-n \mu} \frac{(n \mu)^{k}}{k!}, \quad k=0,1,2, \ldots $

## Solution (b)

The event $ \{N(t)=n\} $ occurs if and only if the $ n $-th renewal happens by time $ t $ and the $ (n+1) $-th renewal happens after time $ t $, i.e., $ S_{n} \leq t $ and $ S_{n+1}>t $. This can be expressed as:
$$
\mathrm{P}\{N(t)=n\}=\mathrm{P}\left\{S_{n} \leq t\right\}-\mathrm{P}\left\{S_{n+1} \leq t\right\}
$$
because $ \left\{S_{n+1} \leq t\right\} \subseteq\left\{S_{n} \leq t\right\} $ (since $ S_{n+1}=S_{n}+X_{n+1} \geq S_{n} $ ), and the difference gives the probability that $ S_{n} \leq t $ but $ S_{n+1}>t $.
- $ S_{n} \sim \operatorname{Poisson}(n \mu) $, so $ \mathrm{P}\left\{S_{n} \leq t\right\}=\sum_{k=0}^{t} e^{-n \mu} \frac{(n \mu)^{k}}{k!} $.
- $ S_{n+1} \sim \operatorname{Poisson}((n+1) \mu) $, so $ \mathrm{P}\left\{S_{n+1} \leq t\right\}=\sum_{k=0}^{t} e^{-(n+1) \mu} \frac{((n+1) \mu)^{k}}{k!} $.
$ \mathrm{P}\{N(t)=n\}=\sum_{k=0}^{t} e^{-n \mu} \frac{(n \mu)^{k}}{k!}-\sum_{k=0}^{t} e^{-(n+1) \mu} \frac{((n+1) \mu)^{k}}{k!} $

# 4

## Problem 

> Let $ \left\{N_{1}(t), t \geq 0\right\} $ and $ \left\{N_{2}(t), t \geq 0\right\} $ be independent renewal processes. Let $ N(t)= $ $ N_{1}(t)+N_{2}(t) $.
(a) Are the interarrival times of $ \{N(t), t \geq 0\} $ independent?
(b) Are they identically distributed?
(c) Is $ \{N(t), t \geq 0\} $ a renewal process?

## Solution (a)

No.

## Solution (b)

No.

## Solution (c)

No.

# 5

## Problem 

> Let $ U_{1}, U_{2}, \cdots $ be independent uniform random variables on $ (0,1) $. Define $ N $ as
$$
N=\min \left\{n: U_{1}+U_{2}+\cdots+U_{n}>1\right\}
$$

> What is $ \mathrm{E}[N] $ ?

## Solution 


$ P\left(S_{n} \leq x\right)=\frac{1}{n!} \sum_{k=0}^{\lfloor x\rfloor}(-1)^{k}\binom{n}{k}(x-k)^{n}, \quad 0 \leq x \leq n $

$ \mathrm{E}[N]=\sum_{k=0}^{\infty} \mathrm{P}(N>k)=\sum_{k=0}^{\infty} \frac{1}{k!}  = e$.

，6， 8，10，12， 14，17，
18，19，22，26，27

# 6

## Problem 

> Consider a renewal process $ \{N(t), t \geqslant 0\} $ with interarrival times following a $ \Gamma(r, \lambda) $ distribution. That is, the interarrival density is
$$
f(x)=\frac{\lambda \mathrm{e}^{-\lambda x}(\lambda x)^{r-1}}{(r-1)!}, \quad x>0
$$
(a) Prove that
$$
\mathrm{P}\{N(t) \geqslant n\}=\sum_{i=n r}^{\infty} \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{i}}{i!}
$$
(b) Prove that
$$
m(t)=\sum_{i=r}^{\infty}\left\lfloor\frac{i}{r}\right\rfloor \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{i}}{i!}
$$
where $ \lfloor i / r\rfloor $ is the greatest integer less than or equal to $ i / r $.

## Solution (a)

Recall that $ N(t) \geqslant n $ if and only if the $ n $-th arrival occurs by time $ t $, i.e., $ S_{n} \leqslant t $. Since $ S_{n} $ is the time of the $ n r $-th event in the Poisson process $ \{M(t)\} $, we have:
$$
\mathrm{P}\{N(t) \geqslant n\}=\mathrm{P}\left\{S_{n} \leqslant t\right\}=\mathrm{P}\{M(t) \geqslant n r\}
$$

This is because the $ n r $-th event occurs by time $ t $ if and only if there are at least $ n r $ events in the Poisson process by time $ t $.

The probability $ \mathrm{P}\{M(t) \geqslant n r\} $ for a Poisson process with rate $ \lambda $ is given by the tail of the Poisson distribution:
$$
\mathrm{P}\{M(t) \geqslant n r\}=\sum_{i=n r}^{\infty} \mathrm{P}\{M(t)=i\}=\sum_{i=n r}^{\infty} \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{i}}{i!}
$$

Therefore,
$$
\mathrm{P}\{N(t) \geqslant n\}=\sum_{i=n r}^{\infty} \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{i}}{i!}
$$

## Solution (b)

The renewal function $ m(t) $ is defined as the expected number of renewals by time $ t $, i.e., $ m(t)= $ $ \mathrm{E}[N(t)] $. From the relationship with the Poisson process, we have $ N(t)=\left\lfloor\frac{M(t)}{r}\right\rfloor $. Thus,
$$
m(t)=\mathrm{E}\left[\left\lfloor\frac{M(t)}{r}\right\rfloor\right] .
$$

Since $ M(t) $ is a discrete random variable (Poisson with mean $ \lambda t $ ), the expectation can be computed as:
$$
\mathrm{E}\left[\left\lfloor\frac{M(t)}{r}\right\rfloor\right]=\sum_{k=0}^{\infty}\left\lfloor\frac{k}{r}\right\rfloor \mathrm{P}\{M(t)=k\}=\sum_{k=0}^{\infty}\left\lfloor\frac{k}{r}\right\rfloor \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{k}}{k!} .
$$

Note that for $ k<r,\left\lfloor\frac{k}{r}\right\rfloor=0 $ because $ 0 \leq k / r<1 $. Therefore, the sum can start from $ k=r $ :
$$
\mathrm{E}\left[\left\lfloor\frac{M(t)}{r}\right\rfloor\right]=\sum_{k=r}^{\infty}\left\lfloor\frac{k}{r}\right\rfloor \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{k}}{k!}
$$

Changing the index to $ i $ for consistency with the given expression, we have:
$$
m(t)=\sum_{i=r}^{\infty}\left\lfloor\frac{i}{r}\right\rfloor \frac{\mathrm{e}^{-\lambda t}(\lambda t)^{i}}{i!} .
$$

# 8

## Problem 

> Replace a machine when it fails or has been in use for $ T $ years. If the successive lifetimes of the machines are independent, with a common distribution $ F $ having density function $ f $, prove that
(a) The long-run rate at which machines are replaced is
$$
\left[\int_{0}^{T} x f(x) d x+T(1-F(T))\right]^{-1}
$$
(b) The long-run rate at which machines fail is
$$
\frac{F(T)}{\int_{0}^{T} x f(x) d x+T[1-F(T)]}
$$

## Solution (a)

We compute $ E[Y]=E[\min (X, T)] $. For a non-negative random variable, the expectation can be expressed as:
$$
E[Y]=\int_{0}^{\infty} P(Y>y) d y
$$

The survival function $ P(Y>y) $ is:
- $ P(Y>y)=P(\min (X, T)>y)=P(X>y) $ for $ 0 \leq y<T $, since $ \min (X, T)>y $ iff $ X>y $ when $ y<T $.
- $ P(Y>y)=0 $ for $ y \geq T $, because $ Y \leq T $.

Thus,
$$
P(Y>y)=\left\{\begin{array}{ll}
1-F(y) & \text { if } 0 \leq y<T \\
0 & \text { if } y \geq T
\end{array}\right.
$$
and
$$
E[Y]=\int_{0}^{T}(1-F(y)) d y
$$

We now show that this equals the expression inside the inverse in part (a). Consider:
$$
\int_{0}^{T} x f(x) d x+T(1-F(T))
$$

Using integration by parts on $ \int_{0}^{T} x f(x) d x $, let $ u=x $ and $ d v=f(x) d x $. Then $ d u=d x $ and $ v= $ $ F(x) $ (since $ F^{\prime}(x)=f(x) $ ). Assuming $ F(0)=0 $ (as lifetime is positive), we have:
$$
\int_{0}^{T} x f(x) d x=[x F(x)]_{0}^{T}-\int_{0}^{T} F(x) d x=T F(T)-\int_{0}^{T} F(x) d x
$$

Substitute this into the expression:
$$
=T F(T)-\int_{0}^{T} F(x) d x+T-T F(T)=T-\int_{0}^{T} F(x) d x=\int_{0}^{T}(1-F(x)) d x
$$

Thus,
$$
E[Y]=\int_{0}^{T}(1-F(y)) d y=\int_{0}^{T} x f(x) d x+T(1-F(T))
$$

Therefore, the long-run replacement rate is:
$$
\frac{1}{E[Y]}=\left[\int_{0}^{T} x f(x) d x+T(1-F(T))\right]^{-1}
$$

## Solution (b)

- $ R=1 $ if the replacement is due to failure (i.e., $ X<T $ ).
- $ R=0 $ if the replacement is due to reaching age $ T $ (i.e., $ X \geq T $ ).

The expected reward per cycle is:
$$
E[R]=P(\text { failure })=P(X<T)=F(T)
$$

The expected cycle length is $ E[Y] $, as computed in part (a). By the renewal reward theorem, the long-run failure rate (reward per unit time) is:
$$
\frac{E[R]}{E[Y]}=\frac{F(T)}{E[Y]}=\frac{F(T)}{\int_{0}^{T} x f(x) d x+T[1-F(T)]}
$$

# 10

## Problem 

> Consider a renewal process with mean interarrival time $ \mu $. Suppose each event of this process is counted with probability $ p $. Let $ N_{C}(t) $ denote the number of counted events up to time $ t(t>0) $.
(a) Is $ \left\{N_{C}(t), t \geqslant 0\right\} $ a renewal process?
(b) What is $ \lim _{t \rightarrow \infty} \frac{N_{G}(t)}{t} $ ?

## Solution (a)

Yes.

- Let $ M_{k} $ be the number of original events between the $ (k-1) $-th and $ k $-th counted event (including the $ k $-th counted event). Since each event is counted independently with probability $ p $, $ M_{k} $ follows a geometric distribution with success probability $ p $, i.e., $ \mathbb{P}\left(M_{k}=m\right)=(1- $ $ p)^{m-1} p $ for $ m=1,2,3, \ldots $.
- Then $ S_{k}=\sum_{i=1}^{M_{k}} T_{i}^{(k)} $, where $ \left\{T_{i}^{(k)}\right\} $ are i.i.d. copies of $ T_{i} $.

Since:
- The sequence $ \left\{M_{k}\right\}_{k=1}^{\infty} $ is i.i.d. (geometric with parameter $ p $ ),
- The interarrival times $ \left\{T_{i}^{(k)}\right\} $ are i.i.d. for each $ k $ and independent of $ \left\{M_{k}\right\} $,
- And for each $ k, S_{k} $ depends only on $ M_{k} $ and the corresponding $ T_{i}^{(k)} $,

## Solution (b)

From part (a), $ N_{C}(t) $ is a renewal process with i.i.d. interarrival times $ S_{k} $, where $ S_{k}=\sum_{i=1}^{M_{k}} T_{i} $ and $ M_{k} \sim \operatorname{Geometric}(p) $. The expected interarrival time is:
$$
\mathbb{E}\left[S_{k}\right]=\mathbb{E}\left[\sum_{i=1}^{M_{k}} T_{i}\right] .
$$

Using the law of total expectation and the independence of $ M_{k} $ and $ \left\{T_{i}\right\} $ :
$$
\mathbb{E}\left[S_{k}\right]=\mathbb{E}\left[\mathbb{E}\left[\sum_{i=1}^{M_{k}} T_{i} \mid M_{k}\right]\right]=\mathbb{E}\left[\sum_{i=1}^{M_{k}} \mathbb{E}\left[T_{i}\right]\right]=\mathbb{E}\left[M_{k} \cdot \mu\right]=\mu \cdot \mathbb{E}\left[M_{k}\right] .
$$

Since $ M_{k} $ is geometric with success probability $ p, \mathbb{E}\left[M_{k}\right]=\frac{1}{p} $. Thus,
$$
\mathbb{E}\left[S_{k}\right]=\mu \cdot \frac{1}{p}=\frac{\mu}{p}
$$

By the elementary renewal theorem, for a renewal process with finite mean interarrival time $ \mathbb{E}\left[S_{k}\right] $, the long-run rate is:
$$
\lim _{t \rightarrow \infty} \frac{N_{C}(t)}{t}=\frac{1}{\mathbb{E}\left[S_{k}\right]}=\frac{1}{\mu / p}=\frac{p}{\mu} .
$$

# 12

## Problem 

> Events occur according to a Poisson process with rate $ \lambda $. An event that occurs within time $ d $ after the event immediately preceding it is called a " $ d $-event". For example, if $ d=1 $, and events occur at times $ 2,2.8,4,6,6.6, \ldots $, then the events at times 2.8 and 6.6 are $ d $-events.
(a) What is the rate at which $ d $-events occur?
(b) What is the proportion of $ d $-events among all events?

## Solution (a)

The overall event occurrence rate is $ \lambda $. Since each event (after the first) is a $ d $-event with probability $ p=1-e^{-\lambda d} $ independently, the long-run rate of $ d $-events is:
$$
\lambda \times p=\lambda\left(1-e^{-\lambda d}\right)
$$

This can also be derived by noting that the process of $ d $-events forms a renewal process where the interarrival times between consecutive $ d $-events have a specific distribution. Specifically, the time between consecutive $ d $-events is the sum of a geometric number of exponential interarrival times:
- Let $ N $ be the number of events until the next $ d $-event, including the $ d $-event itself. Then $ N $ follows a geometric distribution with success probability $ p=1-e^{-\lambda d} $, so $ P(N=k)=(1- $ $ p)^{k-1} p $ for $ k=1,2,3, \ldots $, and $ E[N]=1 / p $.
- The interarrival time between consecutive $ d $-events is $ W=\sum_{i=1}^{N} S_{i} $, where $ S_{i} \sim \operatorname{Exp}(\lambda) $. By independence, $ E[W]=E[N] \cdot E\left[S_{i}\right]=(1 / p) \cdot(1 / \lambda)=1 /(\lambda p) $.
- The long-run rate of $ d $-events is $ 1 / E[W]=\lambda p=\lambda\left(1-e^{-\lambda d}\right) $.

Thus, the rate at which $ d $-events occur is $ \lambda\left(1-e^{-\lambda d}\right) $.

## Solution (b)

Let $ N(t) $ be the total number of events up to time $ t $, and $ N_{d}(t) $ be the number of $ d $-events up to time $ t $. The proportion of $ d $-events is $ \lim _{t \rightarrow \infty} \frac{N_{d}(t)}{N(t)} $.

Excluding the first event (which cannot be a $ d $-event and becomes negligible as $ t \rightarrow \infty $ ), we have:
$$
N_{d}(t)=\sum_{i=2}^{N(t)} I_{i}, \quad \text { where } \quad I_{i}=\mathbf{1}_{\left\{S_{i} \leq d\right\}} .
$$

The indicators $ I_{i} $ are i.i.d. Bernoulli random variables with success probability $ p=1-e^{-\lambda d} $. As $ t \rightarrow \infty, N(t) \rightarrow \infty $ almost surely. By the strong law of large numbers:
$$
\frac{1}{N(t)-1} \sum_{i=2}^{N(t)} I_{i} \rightarrow p \quad \text { almost surely. }
$$

Since $ \frac{N(t)-1}{N(t)} \rightarrow 1 $ as $ t \rightarrow \infty $, it follows that:
$$
\frac{N_{d}(t)}{N(t)}=\frac{\sum_{i=2}^{N(t)} I_{i}}{N(t)}=\frac{\sum_{i=2}^{N(t)} I_{i}}{N(t)-1} \cdot \frac{N(t)-1}{N(t)} \rightarrow p \cdot 1=1-e^{-\lambda d} .
$$

Thus, the long-run proportion of $ d $-events among all events is $ 1-e^{-\lambda d} $.

# 14

## Problem

Consider the gambler's ruin problem where in each game, the gambler wins 1 yuan with probability $ p $ and loses 1 yuan with probability $ 1-p $. The gambler continues playing until their fortune reaches either $ N-i $ yuan or $ -i $ yuan. (That is, the gambler starts with $ i $ yuan and stops when their fortune reaches 0 or $ N $.) Let $ T $ be the number of games played before the gambler stops. Using Wald's equation and the known probability that the gambler ends up with a fortune of $ N $ (i.e., a net gain of $ N-i) $, find $ \mathrm{E}[T] $.

## Solution 

$$
\mathrm{E}\left[X_{j}\right]=p \cdot 1+(1-p) \cdot(-1)=2 p-1
$$

The gambler starts with an initial fortune of $ i $ yuan. The process stops when the fortune reaches 0 or $ N $, so $ T $ is a stopping time. The total winnings up to time $ T $ is $ \sum_{j=1}^{T} X_{j}=S_{T}-S_{0} $, where $ S_{0}=i $ is the initial fortune, and $ S_{T} $ is the fortune at stopping time $ T $. Therefore:
$$
\sum_{j=1}^{T} X_{j}=S_{T}-i
$$

The possible values of $ S_{T} $ are 0 or $ N $, so the possible values of $ \sum_{j=1}^{T} X_{j} $ are:
- $ 0-i=-i $ (if ruin occurs, fortune reaches 0 ),
- $ N-i $ (if success occurs, fortune reaches $ N $ ).

The expected value of the sum is:
$$
\mathrm{E}\left[\sum_{j=1}^{T} X_{j}\right]=\mathrm{E}\left[S_{T}-i\right]=\mathrm{E}\left[S_{T}\right]-i
$$

Let $ P_{i} $ be the probability that the gambler reaches fortune $ N $ (i.e., ends with a net gain of $ N-i $ ). Then:
$$
\mathrm{E}\left[S_{T}\right]=P_{i} \cdot N+\left(1-P_{i}\right) \cdot 0=P_{i} N
$$
so:
$$
\mathrm{E}\left[\sum^{T} X_{j}\right]=P_{i} N-i
$$

Solving for $ \mathrm{E}[T] $ :
$$
\mathrm{E}[T]=\frac{P_{i} N-i}{2 p-1}
$$

This expression is valid for $ p \neq \frac{1}{2} $. When $ p=\frac{1}{2}, \mathrm{E}\left[X_{j}\right]=2 \cdot \frac{1}{2}-1=0 $, and Wald's equation gives:
$$
\mathrm{E}\left[\sum_{j=1}^{T} X_{j}\right]=0 \cdot \mathrm{E}[T]=0
$$
which is consistent since $ P_{i}=\frac{i}{N} $ (as derived below) and $ P_{i} N-i=\frac{i}{N} \cdot N-i=0 $. However, the expression $ \frac{P_{i} N-i}{2 p-1} $ is undefined when $ p=\frac{1}{2} $. In this case, the expected time is known to be $ \mathrm{E}[T]= $ $ i(N-i) $.
Solving for $ \mathrm{E}[T] $ :
$$
\mathrm{E}[T]=\frac{P_{i} N-i}{2 p-1}
$$

This expression is valid for $ p \neq \frac{1}{2} $. When $ p=\frac{1}{2}, \mathrm{E}\left[X_{j}\right]=2 \cdot \frac{1}{2}-1=0 $, and Wald's equation gives:
$$
\mathrm{E}\left[\sum_{j=1}^{T} X_{j}\right]=0 \cdot \mathrm{E}[T]=0
$$

The probability $ P_{i} $ that the gambler reaches $ N $ before 0 , starting from $ i $, is a standard result in gambler's ruin:
- If $ p \neq \frac{1}{2} $, let $ q=1-p $. Then:
$$
P_{i}=\frac{1-\left(\frac{q}{p}\right)^{i}}{1-\left(\frac{q}{p}\right)^{N}}
$$
- If $ p=\frac{1}{2} $, then:
$$
P_{i}=\frac{i}{N}
$$

Final Expression for $ \mathrm{E}[T] $
- For $ p \neq \frac{1}{2} $ :
$$
\mathrm{E}[T]=\frac{P_{i} N-i}{2 p-1}=\frac{\left(\frac{1-\binom{p}{p}^{i}}{1-\binom{p}{p}^{N}}\right) N-i}{2 p-1}
$$
- For $ p=\frac{1}{2} $ :
$$
\mathrm{E}[T]=i(N-i)
$$

# 17

## Problem 

In Example 7.6, assume that potential customers arrive according to a renewal process with interarrival distribution $ F $. Does the number of events up to time $ t $ form a renewal process (possibly delayed) if an event corresponds to a customer who:
(a) enters the bank?
(b) leaves the bank?

What if $ F $ is exponential?

## Solution (a)

Yes. Yes.

## Solution (b)

No. Yes.

# 18

## Problem 

> Calculate the renewal function when the interarrival distribution $ F $ satisfies $ 1-F(t)=p e^{-\mu_{1} t}+ $ $ (1-p) e^{-\mu_{2} t} $.

## Solution

The survival function is given by:
$$
1-F(t)=p e^{-\mu_{1} t}+(1-p) e^{-\mu_{2} t}, \quad t \geq 0
$$

The cumulative distribution function (CDF) is:
$$
F(t)=1-p e^{-\mu_{1} t}-(1-p) e^{-\mu_{2} t}
$$

The probability density function (PDF) is the derivative of the CDF:
$$
f(t)=\frac{d}{d t} F(t)=p \mu_{1} e^{-\mu_{1} t}+(1-p) \mu_{2} e^{-\mu_{2} t}
$$

This is a mixture of two exponential distributions.
The renewal function $ M(t) $ is defined as the expected number of renewals (events) up to time $ t $. To find $ M(t) $, we use the Laplace transform approach. The Laplace-Stieltjes transform of the renewal function satisfies:
$$
\mathcal{L}_{d M}(s)=\int_{0}^{\infty} e^{-s t} d M(t)=\frac{\mathcal{L}_{f}(s)}{1-\mathcal{L}_{f}(s)}
$$
where $ \mathcal{L}_{f}(s) $ is the Laplace transform of the interarrival density $ f(t) $.

First, compute $ \mathcal{L}_{f}(s) $ :
$$
\mathcal{L}_{f}(s)=\int_{0}^{\infty} e^{-s t} f(t) d t=\int_{0}^{\infty} e^{-s t}\left[p \mu_{1} e^{-\mu_{1} t}+(1-p) \mu_{2} e^{-\mu_{2} t}\right] d t
$$

This splits into two integrals:
$$
\mathcal{L}_{f}(s)=p \mu_{1} \int_{0}^{\infty} e^{-\left(s+\mu_{1}\right) t} d t+(1-p) \mu_{2} \int_{0}^{\infty} e^{-\left(s+\mu_{2}\right) t} d t=p \mu_{1} \frac{1}{s+\mu_{1}}+(1-p) \mu_{2} \frac{1}{s+\mu_{2}}
$$

Next, compute $ 1-\mathcal{L}_{f}(s) $ :
$$
1-\mathcal{L}_{f}(s)=1-\left(\frac{p \mu_{1}}{s+\mu_{1}}+\frac{(1-p) \mu_{2}}{s+\mu_{2}}\right)
$$

Combining over a common denominator $ \left(s+\mu_{1}\right)\left(s+\mu_{2}\right) $ :
$$
\mathcal{L}_{f}(s)=\frac{p \mu_{1}\left(s+\mu_{2}\right)+(1-p) \mu_{2}\left(s+\mu_{1}\right)}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)}=\frac{s\left(p \mu_{1}+(1-p) \mu_{2}\right)+\mu_{1} \mu_{2}}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)} .
$$

Thus,
$$
1-\mathcal{L}_{f}(s)=\frac{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)-\left[s\left(p \mu_{1}+(1-p) \mu_{2}\right)+\mu_{1} \mu_{2}\right]}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)}=\frac{s^{2}+s\left(p \mu_{2}+(1-p) \mu_{1}\right)}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)} .
$$

Now,
$$
\mathcal{L}_{d M}(s)=\frac{\mathcal{L}_{f}(s)}{1-\mathcal{L}_{f}(s)}=\frac{\frac{s\left(p \mu_{1}+(1-p) \mu_{2}\right)+\mu_{1} \mu_{2}}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)}}{\frac{s^{2}+s\left(p \mu_{2}+(1-p) \mu_{1}\right)}{\left(s+\mu_{1}\right)\left(s+\mu_{2}\right)}}=\frac{s\left(p \mu_{1}+(1-p) \mu_{2}\right)+\mu_{1} \mu_{2}}{s^{2}+s\left(p \mu_{2}+(1-p) \mu_{1}\right)}
$$

Let $ a=p \mu_{1}+(1-p) \mu_{2} $ and $ b=p \mu_{2}+(1-p) \mu_{1} $, so:
$$
\mathcal{L}_{d M}(s)=\frac{a s+\mu_{1} \mu_{2}}{s(s+b)}
$$

The Laplace transform of $ M(t) $, denoted $ \tilde{M}(s)=\int_{0}^{\infty} e^{-s t} M(t) d t $, satisfies $ \mathcal{L}_{d M}(s)=s \tilde{M}(s) $ since $ M(0)=0 $. Thus:
$$
s \tilde{M}(s)=\frac{a s+\mu_{1} \mu_{2}}{s(s+b)} \Longrightarrow \tilde{M}(s)=\frac{a s+\mu_{1} \mu_{2}}{s^{2}(s+b)}
$$

To find $ M(t) $, we invert this Laplace transform. Perform partial fraction decomposition:
$$
\frac{a s+\mu_{1} \mu_{2}}{s^{2}(s+b)}=\frac{A}{s}+\frac{B}{s^{2}}+\frac{C}{s+b}
$$

Solving for the constants:
$$
a s+\mu_{1} \mu_{2}=A s(s+b)+B(s+b)+C s^{2} .
$$

Equate coefficients:
- $ s^{2}: A+C=0 $
- $ s^{1}: A b+B=a $
- $ s^{0}: B b=\mu_{1} \mu_{2} $

From $ B b=\mu_{1} \mu_{2} $, we have $ B=\frac{\mu_{1} \mu_{2}}{b} $.
From $ A+C=0 $, we have $ C=-A $.
Substitute into the $ s^{1} $ equation:
$$
A b+\frac{\mu_{1} \mu_{2}}{b}=a \Longrightarrow A=\frac{a}{b}-\frac{\mu_{1} \mu_{2}}{b^{2}} .
$$

Thus,
$$
C=-\left(\frac{a}{b}-\frac{\mu_{1} \mu_{2}}{b^{2}}\right)
$$

The mean interarrival time $ \mu $ is:
$$
\mu=\int_{0}^{\infty}(1-F(t)) d t=\int_{0}^{\infty}\left(p e^{-\mu_{1} t}+(1-p) e^{-\mu_{2} t}\right) d t=\frac{p}{\mu_{1}}+\frac{1-p}{\mu_{2}}
$$

Note that $ \frac{1}{\mu}=\frac{\mu_{1} \mu_{2}}{b} $, so $ B=\frac{1}{\mu} $.

Compute $ a b-\mu_{1} \mu_{2} $ :
$$
\begin{array}{c}
a b=\left(p \mu_{1}+(1-p) \mu_{2}\right)\left(p \mu_{2}+(1-p) \mu_{1}\right)=p(1-p)\left(\mu_{1}^{2}+\mu_{2}^{2}\right)+p^{2} \mu_{1} \mu_{2}+(1-p)^{2} \mu_{1} \mu_{2} \\
a b-\mu_{1} \mu_{2}=p(1-p)\left(\mu_{1}^{2}-2 \mu_{1} \mu_{2}+\mu_{2}^{2}\right)=p(1-p)\left(\mu_{1}-\mu_{2}\right)^{2}
\end{array}
$$

Thus,
$$
A=\frac{p(1-p)\left(\mu_{1}-\mu_{2}\right)^{2}}{b^{2}}
$$

The inverse Laplace transform gives:
$$
M(t)=\mathcal{L}^{-1}\left\{\frac{A}{s}+\frac{B}{s^{2}}+\frac{C}{s+b}\right\}=A+B t+C e^{-b t}
$$

Substituting $ C=-A $ :
$$
M(t)=A+B t-A e^{-b t}=B t+A\left(1-e^{-b t}\right)
$$

Substitute the expressions for $ A $ and $ B $ :
$$
M(t)=\frac{t}{\mu}+\frac{p(1-p)\left(\mu_{1}-\mu_{2}\right)^{2}}{b^{2}}\left(1-e^{-b t}\right)
$$
where $ b=p \mu_{2}+(1-p) \mu_{1} $ and $ \mu=\frac{p}{\mu_{1}}+\frac{1-p}{\mu_{2}} $.

$ M(t)=\frac{t}{\mu}+\frac{p(1-p)\left(\mu_{1}-\mu_{2}\right)^{2}}{\left[p \mu_{2}+(1-p) \mu_{1}\right]^{2}}\left(1-e^{-\left[p \mu_{2}+(1-p) \mu_{1}\right] t}\right) $,

# 19

## Problem 

> Consider a renewal process with interarrival times uniformly distributed on (0,1). Determine the expected time from $ t=1 $ until the next renewal.

## Solution 

Let $ U $ be the time of the last renewal before or at time $ t=1 $. The next renewal occurs at time $ U+ $ $ Y $, where $ Y $ is the interarrival time following $ U $, and $ Y \sim \operatorname{Uniform}(0,1) $, independent of $ U $. The time from $ t=1 $ to the next renewal is $ B(1)=(U+Y)-1 $. Since there are no renewals in $ (U, 1] $, it follows that $ U+Y>1 $ almost surely.

The cumulative distribution function (CDF) of $ U $ is derived as follows. For $ u \in[0,1], P(U \leq u)= $ $ P $ (no renewals in $ (u, 1]) $. This probability is given by:
$$
P(U \leq u)=1+e^{u}(u-1) .
$$

The probability density function (PDF) of $ U $ is:
$$
f_{U}(u)=\frac{d}{d u}\left[1+e^{u}(u-1)\right]=u e^{u}, \quad u \in[0,1] .
$$

The expected value of $ U $ is:
$$
E[U]=\int_{0}^{1} u \cdot u e^{u} d u=\int_{0}^{1} u^{2} e^{u} d u
$$

Using integration by parts:
- Let $ v=u^{2}, d w=e^{u} d u $, so $ d v=2 u d u, w=e^{u} $.
- Then:
$$
\int u^{2} e^{u} d u=u^{2} e^{u}-\int 2 u e^{u} d u
$$
- Now, $ \int u e^{u} d u=u e^{u}-\int e^{u} d u=u e^{u}-e^{u} $.
- Substituting back:
$$
\int u^{2} e^{u} d u=u^{2} e^{u}-2\left(u e^{u}-e^{u}\right)=u^{2} e^{u}-2 u e^{u}+2 e^{u}
$$
- Evaluating from 0 to 1 :
$$
\left[u^{2} e^{u}-2 u e^{u}+2 e^{u}\right]_{0}^{1}=(1 \cdot e-2 \cdot e+2 e)-(0-0+2)=e-2 .
$$

Thus, $ E[U]=e-2 $.

Thus, $ E[U]=e-2 $.
Given $ U $, the conditional distribution of $ Y $ is uniform on ( $ 1-U, 1 $ ), because $ Y>1-U $ must hold. The conditional expectation of $ Y $ given $ U $ is:
$$
E[Y \mid U]=E[Y \mid Y>1-U]=\frac{(1-U)+1}{2}=1-\frac{U}{2} .
$$

The conditional expectation of $ B(1) $ given $ U $ is:
$$
E[B(1) \mid U]=E[(U+Y-1) \mid U]=U+E[Y \mid U]-1=U+\left(1-\frac{U}{2}\right)-1=\frac{U}{2} .
$$

The unconditional expectation is:
$$
E[B(1)]=E[E[B(1) \mid U]]=E\left[\frac{U}{2}\right]=\frac{1}{2} E[U]=\frac{1}{2}(e-2) .
$$

Alternatively, using the age $ A(1)=1-U $, the distribution of $ A(1) $ has PDF:
$$
f_{A}(a)=f_{U}(1-a)\left|\frac{d u}{d a}\right|=(1-a) e^{1-a}, \quad a \in[0,1] .
$$

Given $ A(1)=a $, the remaining life $ B(1) $ is uniformly distributed on $ (0,1-a) $, so:
$$
E[B(1) \mid A(1)=a]=\frac{1-a}{2} .
$$

Then:
$$
E[B(1)]=E[E[B(1) \mid A(1)]]=E\left[\frac{1-A(1)}{2}\right]=\frac{1}{2} E[1-A(1)]=\frac{1}{2} E[U]=\frac{1}{2}(e-2),
$$

# 22 

## Problem 

> J's strategy for buying cars is as follows: For the first $ T $ units of time after acquiring a new car, all failures are repaired. After the car reaches an age of $ T $, upon the first failure, it is sent to the junkyard and a new car is purchased. Assume that the time to first failure for a new car is an exponential random variable with rate $ \lambda $, and the time to next failure for a repaired car is an exponential random variable with rate $ \mu $.
(a) What is the rate at which J buys new cars?
(b) Suppose a new car costs $ C $, and each repair costs $ r $. What is J's long-run average cost per unit time?

## Solution(a)

To find $ \mathbb{E}[L] $, define the failure times in a cycle. Let $ Z_{1} $ be the time to the first failure, $ Z_{1} \sim \operatorname{Exp}(\lambda) $. For $ k \geq 2 $, let $ Z_{k} $ be the time to the next failure after a repair, $ Z_{k} \sim \operatorname{Exp}(\mu) $, and all $ Z_{k} $ are independent. The cumulative time to the $ k $-th failure is $ S_{k}=\sum_{i=1}^{k} Z_{i} $. The cycle ends at the smallest $ N $ such that $ S_{N}>T $, so $ L=S_{N} $.

By Wald's equation and the properties of stopping times,
$$
\mathbb{E}[L]=\mathbb{E}\left[S_{N}\right]=\sum_{i=1}^{\infty} \mathbb{E}\left[Z_{i}\right] \mathbb{P}(N \geq i)
$$

Here, $ \mathbb{E}\left[Z_{1}\right]=\frac{1}{\lambda}, \mathbb{E}\left[Z_{i}\right]=\frac{1}{\mu} $ for $ i \geq 2 $, and $ \mathbb{P}(N \geq i)=\mathbb{P}\left(S_{i-1} \leq T\right) $ for $ i \geq 2 $ (with $ S_{0}=0 $, so $ \mathbb{P}(N \geq 1)=1 $ ). Thus,
$$
\mathbb{E}[L]=\frac{1}{\lambda} \cdot 1+\sum_{i=2}^{\infty} \frac{1}{\mu} \mathbb{P}\left(S_{i-1} \leq T\right)=\frac{1}{\lambda}+\frac{1}{\mu} \sum_{k=1}^{\infty} \mathbb{P}\left(S_{k} \leq T\right),
$$
where $ k=i-1 $.

The sum $ \sum_{k=1}^{\infty} \mathbb{P}\left(S_{k} \leq T\right)=\mathbb{E}[N(T)] $, where $ N(T) $ is the number of failures up to time $ T $ in a delayed renewal process. The first interarrival time is $ \operatorname{Exp}(\lambda) $, and subsequent interarrival times are $ \operatorname{Exp}(\mu) $. The renewal function $ m(t)=\mathbb{E}[N(t)] $ satisfies
$$
m(t)=F_{1}(t)+\int_{0}^{t} m_{2}(t-s) f_{1}(s) d s
$$
where $ F_{1}(t)=1-e^{-\lambda t} $ is the $ \operatorname{CDF} $ of $ \operatorname{Exp}(\lambda), f_{1}(t)=\lambda e^{-\lambda t} $ is the $ \operatorname{PDF} $, and $ m_{2}(t)=\mu t $ is the renewal function for the ordinary renewal process with interarrival $ \operatorname{Exp}(\mu) $. Thus,
$$
m(t)=\left(1-e^{-\lambda t}\right)+\int_{0}^{t}(\mu(t-s)) \lambda e^{-\lambda s} d s
$$

The integral is
$$
\int_{0}^{t} \mu(t-s) \lambda e^{-\lambda s} d s=\mu \lambda\left[\frac{t}{\lambda}+\frac{1}{\lambda^{2}} e^{-\lambda t}-\frac{1}{\lambda^{2}}\right]=\mu t+\frac{\mu}{\lambda} e^{-\lambda t}-\frac{\mu}{\lambda}
$$
so
$$
m(t)=1-e^{-\lambda t}+\mu t+\frac{\mu}{\lambda} e^{-\lambda t}-\frac{\mu}{\lambda}=\mu t+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda t}\right)
$$

Therefore, $ \mathbb{E}[N(T)]=m(T)=\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right) $, and
$$
\mathbb{E}[L]=\frac{1}{\lambda}+\frac{1}{\mu}\left[\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right)\right]=T+\frac{1}{\mu}+\left(\frac{1}{\lambda}-\frac{1}{\mu}\right) e^{-\lambda T} .
$$

The rate of buying new cars is
$$
\frac{1}{\mathbb{E}[L]}=\left[T+\frac{1}{\mu}+\left(\frac{1}{\lambda}-\frac{1}{\mu}\right) e^{-\lambda T}\right]^{-1} .
$$

## Solution (b)

The total cost per cycle is $ C+r(N-1) $. The expected cost per cycle is
$$
\mathbb{E}[C+r(N-1)]=C+r(\mathbb{E}[N]-1)
$$

From part (a), $ \mathbb{E}[N]=1+\mathbb{E}[N(T)]=1+m(T)=1+\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right) $, so
$$
\mathbb{E}[N]-1=\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right) .
$$

Thus, the expected cost per cycle is
$$
C+r\left[\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right)\right]
$$

The long-run average cost per unit time is the expected cost per cycle divided by the expected cycle length:
$$
\frac{C+r\left[\mu T+\left(1-\frac{\mu}{\lambda}\right)\left(1-e^{-\lambda T}\right)\right]}{T+\frac{1}{\mu}+\left(\frac{1}{\lambda}-\frac{1}{\mu}\right) e^{-\lambda T}} .
$$

# 26 

## Problem

> Consider a train station where passengers arrive according to a Poisson process with rate $ \lambda $. Whenever there are $ N $ passengers waiting at the station, a train is dispatched. However, it takes $ K $ units of time for the train to arrive at the station, and it carries all waiting passengers upon arrival. Assume that the station incurs a cost at a rate of $ n \cdot c $ per unit time when there are $ n $ passengers waiting, where $ c $ is the cost rate per passenger per unit time. Find the long-run average cost.

## Solution 

Since passenger arrivals follow a Poisson process with rate $ \lambda, T_{1} $ is the time of the $ N $-th arrival, which follows an Erlang distribution with shape parameter $ N $ and rate $ \lambda $. Thus,
$$
\mathbb{E}\left[T_{1}\right]=\frac{N}{\lambda}
$$

The expected cycle length is
$$
\mathbb{E}[T]=\mathbb{E}\left[T_{1}+K\right]=\frac{N}{\lambda}+K .
$$

The cost per cycle is $ C_{\text {cycle }}=c \int_{0}^{T} n(s) d s $, where $ n(s) $ is the number of waiting passengers at time s. We split the integral into two intervals: $ \left[0, T_{1}\right] $ and $ \left[T_{1}, T_{1}+K\right] $ (since $ T=T_{1}+K $ ).
- Interval $ \left[0, T_{1}\right] $ : Passengers arrive, and $ n(s) $ is the number of arrivals by time $ s $. At $ s=T_{1} $, $ n(s)=N $. The integral $ \int_{0}^{T_{1}} n(s) d s $ can be expressed using the arrival times. Let $ T_{i} $ be the arrival time of the $ i $-th passenger $ (i=1,2, \ldots, N) $. Then,
$$
\int_{0}^{T_{1}} n(s) d s=\sum_{i=1}^{N}\left(T_{1}-T_{i}\right)
$$
since passenger $ i $ contributes waiting time from $ T_{i} $ to $ T_{1} $. The expectation is
$$
\mathbb{E}\left[\sum_{i=1}^{N}\left(T_{1}-T_{i}\right)\right]=\mathbb{E}\left[N T_{1}-\sum_{i=1}^{N} T_{i}\right]
$$

For a Poisson process, $ \mathbb{E}\left[T_{i}\right]=\frac{i}{\lambda} $ and $ \mathbb{E}\left[T_{1}\right]=\mathbb{E}\left[T_{N}\right]=\frac{N}{\lambda} $. Thus,
$$
\begin{array}{c}
\mathbb{E}\left[\sum_{i=1}^{N} T_{i}\right]=\sum_{i=1}^{N} \mathbb{E}\left[T_{i}\right]=\sum_{i=1}^{N} \frac{i}{\lambda}=\frac{1}{\lambda} \cdot \frac{N(N+1)}{2}, \\
\mathbb{E}\left[N T_{1}\right]=N \cdot \frac{N}{\lambda}=\frac{N^{2}}{\lambda},
\end{array}
$$

SO
$$
\mathbb{E}\left[\sum_{i=1}^{N}\left(T_{1}-T_{i}\right)\right]=\frac{N^{2}}{\lambda}-\frac{1}{\lambda} \cdot \frac{N(N+1)}{2}=\frac{N(N-1)}{2 \lambda} .
$$

- Interval $ \left[T_{1}, T_{1}+K\right] $ : At $ s=T_{1} $, there are $ N $ passengers. During $ \left[T_{1}, T_{1}+K\right] $, additional passengers arrive according to a Poisson process with rate $ \lambda $, independent of the past. Let $ N^{\prime}(u) $ be the number of arrivals by time $ u $ in this interval, where $ u=s-T_{1} $. Then $ n(s)= $ $ N+N^{\prime}\left(s-T_{1}\right) $, and
$$
\int_{T_{1}}^{T_{1}+K} n(s) d s=\int_{0}^{K}\left[N+N^{\prime}(u)\right] d u
$$


Combining both intervals, the expected value of the integral is
$$
\mathbb{E}\left[\int_{0}^{T} n(s) d s\right]=\frac{N(N-1)}{2 \lambda}+N K+\frac{\lambda K^{2}}{2} .
$$

Thus, the expected cost per cycle is
$$
\mathbb{E}\left[C_{\text {cycle }}\right]=c\left(\frac{N(N-1)}{2 \lambda}+N K+\frac{\lambda K^{2}}{2}\right) .
$$

By the renewal reward theorem,
$$
\text { Long-run average cost }=\frac{\mathbb{E}\left[C_{\text {cycle }}\right]}{\mathbb{E}[T]}=\frac{c\left(\frac{N(N-1)}{2 \lambda}+N K+\frac{\lambda K^{2}}{2}\right)}{\frac{N}{\lambda}+K} .
$$

Simplifying the expression:
$$
=c \cdot \frac{\frac{N(N-1)}{2 \lambda}+N K+\frac{\lambda K^{2}}{2}}{\frac{N}{\lambda}+K}=c \cdot \frac{\frac{N(N-1)+2 N K \lambda+\lambda^{2} K^{2}}{2 \lambda}}{\frac{N+K \lambda}{\lambda}}=c \cdot \frac{N(N-1)+2 N K \lambda+\lambda^{2} K^{2}}{2(N+\lambda K)} .
$$

Let $ Q=\lambda K $. Then the numerator is $ N(N-1)+2 N Q+Q^{2} $, and
$$
N(N-1)+2 N Q+Q^{2}=\left(N^{2}+2 N Q+Q^{2}\right)-N=(N+Q)^{2}-N .
$$

Thus,

The long-run average cost is
$$
\frac{c}{2}\left(N+\lambda K-\frac{N}{N+\lambda K}\right)
$$


#  27

## Problem 

> Consider a machine consisting of two independent components, where the $ i $-th component operates for an exponential time with rate $ \lambda_{i} $. The machine functions as long as at least one component is working (i.e., it fails only when both components fail). When a machine fails, a new machine with both components working is immediately put into use. Each machine failure incurs a cost $ K $, and while the machine is in use, it incurs an operating cost at a rate of $ c_{i} $ per unit time when there are $ i $ working components $ (i=1,2) $. Find the long-run average cost per unit time.

## Solution 

The system can be modeled as a renewal process, where each renewal cycle begins when a new machine (both components working) is put into use and ends when the machine fails (both components failed). The long-run average cost per unit time is given by the renewal reward theorem:
$$
\text { Long-run average cost }=\frac{\mathbb{E}[\text { Cost per cycle }]}{\mathbb{E}[\text { Cycle length }]} \text {. }
$$

We define the states of the machine within a cycle:
- State 2: Both components working.
- State 1A: Component 1 working, component 2 failed.
- State 1B: Component 2 working, component 1 failed.
- State 0: Both components failed (machine failure).

The transition rates are:
- From state 2 , the machine transitions to state 1 B at rate $ \lambda_{1} $ (if component 1 fails) or to state 1 A at rate $ \lambda_{2} $ (if component 2 fails). The total transition rate out of state 2 is $ \lambda_{1}+\lambda_{2} $.
- From state 1 A , the machine transitions to state 0 at rate $ \lambda_{1} $ (component 1 fails).
- From state 1 B , the machine transitions to state 0 at rate $ \lambda_{2} $ (component 2 fails).

Step 1: Expected Cycle Length
Let $ T $ be the cycle length (time from state 2 to state 0 ). Define:
- $ E_{2} $ : Expected time to state 0 starting from state 2.
- $ E_{1 A} $ : Expected time to state 0 starting from state 1A.
- $ E_{1 B} $ : Expected time to state 0 starting from state 1 B .

From state 1A or 1B, the time to failure is exponential:
$$
E_{1 A}=\frac{1}{\lambda_{1}}, \quad E_{1 B}=\frac{1}{\lambda_{2}} .
$$

From state 2, the probability of transitioning to state 1A is $ P( $ to 1 A$ )=\frac{\lambda_{2}}{\lambda_{1}+\lambda_{2}} $ (if component 2 fails), and to state 1 B is $ P( $ to 1 B$ )=\frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}} $ (if component 1 fails). The expected time spent in state 2 is $ \frac{1}{\lambda_{1}+\lambda_{2}} $. Thus:

$$
E_{2}=\frac{1}{\lambda_{1}+\lambda_{2}}+\frac{1}{\lambda_{1}+\lambda_{2}}\left(\frac{\lambda_{2}}{\lambda_{1}}+\frac{\lambda_{1}}{\lambda_{2}}\right)=\frac{1}{\lambda_{1}+\lambda_{2}}\left(1+\frac{\lambda_{1}^{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}}\right) .
$$

Further simplification:
$$
1+\frac{\lambda_{1}^{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}}=\frac{\lambda_{1} \lambda_{2}+\lambda_{1}^{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}}
$$
so:
$$
E_{2}=\frac{\lambda_{1} \lambda_{2}+\lambda_{1}^{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)}=\frac{\lambda_{1}^{2}+\lambda_{1} \lambda_{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)}
$$

Alternatively, using algebraic manipulation:
$$
E_{2}=\frac{1}{\lambda_{1}}+\frac{1}{\lambda_{2}}-\frac{1}{\lambda_{1}+\lambda_{2}} .
$$

Thus, the expected cycle length is:
$$
\mathbb{E}[T]=E_{2}=\frac{1}{\lambda_{1}}+\frac{1}{\lambda_{2}}-\frac{1}{\lambda_{1}+\lambda_{2}} .
$$

The cost per cycle consists of:
- A fixed cost $ K $ incurred when the machine fails (upon entering state 0 ).
- Operating costs: At rate $ c_{2} $ per unit time in state 2 , and $ c_{1} $ per unit time in state 1 (either 1A or 1B).

Let $ T_{2} $ be the time spent in state 2 per cycle, and $ T_{1} $ be the total time spent in state 1 per cycle. The expected cost per cycle is:
$$
\mathbb{E}[\text { Cost per cycle }]=K+c_{2} \mathbb{E}\left[T_{2}\right]+c_{1} \mathbb{E}\left[T_{1}\right] .
$$
- Expected time in state 2 : The time in state 2 is exponential with rate $ \lambda_{1}+\lambda_{2} $, so:
$$
\mathbb{E}\left[T_{2}\right]=\frac{1}{\lambda_{1}+\lambda_{2}} .
$$
- Expected time in state 1: The time in state 1 depends on which substate is entered:
- If entered state 1A (probability $ \frac{\lambda_{2}}{\lambda_{1}+\lambda_{2}} $ ), the time is exponential with rate $ \lambda_{1} $, so expected time is $ \frac{1}{\lambda_{1}} $.
- If entered state 1 B (probability $ \frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}} $ ), the time is exponential with rate $ \lambda_{2} $, so expected time is $ \frac{1}{\lambda_{2}} $.
Thus:

$ \mathbb{E}\left[T_{1}\right]=\mathbb{E}[T]-\mathbb{E}\left[T_{2}\right]=\left(\frac{1}{\lambda_{1}}+\frac{1}{\lambda_{2}}-\frac{1}{\lambda_{1}+\lambda_{2}}\right)-\frac{1}{\lambda_{1}+\lambda_{2}}=\frac{1}{\lambda_{1}}+\frac{1}{\lambda_{2}}-\frac{2}{\lambda_{1}+\lambda_{2}}= $

By the renewal reward theorem:
$$
\text { Long-run average cost }=\frac{\mathbb{E}[\text { Cost per cycle }]}{\mathbb{E}[T]}=\frac{K+c_{2} \cdot \frac{1}{\lambda_{1}+\lambda_{2}}+c_{1} \cdot \frac{\lambda_{1}^{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)}}{\frac{1}{\lambda_{1}}+\frac{1}{\lambda_{2}}-\frac{1}{\lambda_{1}+\lambda_{2}}} .
$$

Substitute $ \mathbb{E}[T]=\frac{\lambda_{1}^{2}+\lambda_{1} \lambda_{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)} $ and write the numerator with a common denominator:
$$
\mathbb{E}[\text { Cost per cycle }]=K+\frac{c_{2} \lambda_{1} \lambda_{2}+c_{1}\left(\lambda_{1}^{2}+\lambda_{2}^{2}\right)}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)} .
$$

Thus:
$$
\text { Long-run average cost }=\frac{K+\frac{c_{2} \lambda_{1} \lambda_{2}+c_{1}\left(\lambda_{1}^{2}+\lambda_{2}^{2}\right)}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)}}{\frac{\lambda_{1}^{2}+\lambda_{1} \lambda_{2}+\lambda_{2}^{2}}{\lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)}}=\frac{K \lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)+c_{2} \lambda_{1} \lambda_{2}+c_{1}\left(\lambda_{1}^{2}+\lambda_{2}^{2}\right)}{\lambda_{1}^{2}+\lambda_{1} \lambda_{2}+\lambda_{2}^{2}} \text {. }
$$

The denominator is $ \lambda_{1}^{2}+\lambda_{1} \lambda_{2}+\lambda_{2}^{2} $, and the numerator is $ K \lambda_{1} \lambda_{2}\left(\lambda_{1}+\lambda_{2}\right)+c_{1}\left(\lambda_{1}^{2}+\lambda_{2}^{2}\right)+ $ $ c_{2} \lambda_{1} \lambda_{2} $