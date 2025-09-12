---
title: Stochastic Progress - Assignment - Week 4
category: Assignments
date: 2025-9-10 
---

# 6

## Problem

> In Example 5.3, if clerk % i % serves at an exponential rate % \lambda_{i}, i=1,2 %, prove that
$$
\mathrm{P}\{\text { Smith is not the last one }\}=\left(\dfrac{\lambda_{1}}{\lambda_{1}+\lambda_{2}}\right)^{2}+\left(\dfrac{\lambda_{2}}{\lambda_{1}+\lambda_{2}}\right)^{2}
$$

## Proof 

Given the independent increment, The probability is:

$P(X_1<X_2)\cdot P(X_1<X_2) + P(X_1>X_2)\cdot P(X_1>X_2)$

$ = \left(\dfrac{\lambda_{1}}{\lambda_{1}+\lambda_{2}}\right)^{2}+\left(\dfrac{\lambda_{2}}{\lambda_{1}+\lambda_{2}}\right)^{2}$

---

# 9

## Problem 

> Machine 1 is currently working, and Machine 2 will start working % t % time units from now. If the lifetime of machine % i % follows an exponential distribution with rate % \lambda_{i}(i=1,2) %, what is the probability that Machine 1 fails before Machine 2?

## Solution

The probability is:

$1 - P(X_1>t)P(X_1>X_2)$

$= 1 - e^{-\lambda_1t} \dfrac{\lambda_2}{\lambda_1+\lambda_2}$

--- 

# 16

## Problem 

> There are three jobs to be processed. The processing time of job % i(i=1,2,3) % is an exponential random variable with rate % \mu_{i} %. There are two available processors, so two jobs can be processed immediately, and the third job starts when one of the initial two finishes.
(a) Let % T_{i} % denote the completion time of job % i %. If the goal is to minimize % \mathrm{E}\left[T_{1}+T_{2}+T_{3}\right] %, which two jobs should be processed first when % \mu_{1}<\mu_{2}<\mu_{3} % ?
(b) Let % M % (called the makespan) be the total time until all three jobs are completed. Let % S % be the time when only one processor is working. Prove that:
$$
2 \mathrm{E}[M]=\mathrm{E}[S]+\sum_{i=1}^{3} \dfrac{1}{\mu_{i}}
$$
For the following parts, assume % \mu_{1}=\mu_{2}=\mu, \mu_{3}=\lambda %. Let % P(\mu) % denote the probability that the last job to finish is either job 1 or job 2, and let % P(\lambda)=1-P(\mu) % denote the probability that the last job to finish is job 3.
(c) Express % \mathrm{E}[S] % in terms of % P(\mu) % and % P(\lambda) %.
Let % P_{i, j}(\mu) % be the value of % P(\mu) % when jobs % i % and % j % are processed first.
(d) Prove that % P_{1,2}(\mu) \leq P_{1,3}(\mu) %.
(e) If % \mu>\lambda %, show that % \mathrm{E}[M] % is minimized when job 3 is one of the first two jobs to be processed.
(f) If % \mu<\lambda %, show that % \mathrm{E}[M] % is minimized when jobs 1 and 2 are processed first.

## Solution (a)

$$
\begin{array}{l}
E[T_1+T_2+T_3]\\ 
= E[\min(X,Y) + \max(X,Y) + (\min(X,Y) + E[Z])] \\ 
= E[X+Y+Z] + E[\min(X, Y)]
\end{array}
$$

Therefore choose the job $2, 3$

## Solution (b)

Denote the time where each job finish as $T_{(1)}, T_{(2)}, T_{(3)}$, then, the total working time gives us:

$X+Y+Z = M + T_{(2)} = 2M - S$

Then apply the expectation:

$2E[M] = E[S] + \sum_{i=1}^3\dfrac{1}{\mu_i}$

## Solution (c)

$ E[S]=P\left(M=T_{1}\right) \dfrac{1}{\mu}+P\left(M=T_{2}\right) \dfrac{1}{\mu}+P\left(M=T_{3}\right) \dfrac{1}{\lambda}=\dfrac{P\left(M=T_{1}\right)+P\left(M=T_{2}\right)}{\mu}+\dfrac{P\left(M=T_{3}\right)}{\lambda}=\dfrac{P(\mu)}{\mu}+\dfrac{P(\lambda)}{\lambda} $.

## Solution (d)

$P_{1,2}(\mu) = P(Y>Z) = \dfrac{\lambda}{\lambda+\mu}$

$P_{1,3}(\mu) = 1 - \left(\dfrac{\mu}{\mu+\lambda}\right)^2$

Then:

$P_{1,3}(\mu)-P_{1,2}(\mu) = \dfrac{\lambda\mu}{(\lambda+\mu)^2}\ge 0$

## Solution (e)

We need minimize $E[S]$, notice $\mu>\lambda$, then we need maximize $P(\mu)$ (from (c)), then $P_{1,3}(\mu)$ is larger.

## Solution (f)

Similarly, we need minimize $P(\mu)$, then $P_{1, 2}(\mu)$ is smaller

# 31

## Problem

> A doctor has two scheduled appointments, one at 1:00 PM and another at 1:30 PM. The appointment durations are independent exponential random variables with a mean of 30 minutes. Assuming both patients arrive on time, find the expected time that the patient with the 1:30 PM appointment spends in the doctor's office.

## Solution 

$E[T] = P(X>30)(E[X]+E[Y]) +P(X<30)E[Y] = 60e^{-1} + 30(1-e^{-1}) = 30 + 30e^{-1}$

# 36

## Problem

> Let $ S(t) $ denote the price of a security at time $ t $. A popular model for the process $ \{S(t), t \geq 0\} $ assumes that the price remains constant until a "shock" occurs, at which point the price is multiplied by a random factor. If we let $ N(t) $ denote the number of shocks up to time $ t $, and $ X_{i} $ denote the multiplicative factor of the $ i $-th shock, then this model assumes:
$$
S(t)=S(0) \prod_{i=1}^{N(t)} X_{i}
$$
where $ \prod_{i=1}^{N(t)} X_{i}=1 $ when $ N(t)=0 $. Assume that:
> - The $ X_{i} $ are independent exponential random variables with rate $ \mu $.
> - $ \{N(t), t \geq 0\} $ is a Poisson process with rate $ \lambda $.
> - $ \{N(t), t \geq 0\} $ is independent of the $ X_{i} $.
> - $ S(0)=s $.
(a) Find $ \mathrm{E}[S(t)] $.
(b) Find $ \mathrm{E}\left[S^{2}(t)\right] $.

## Solution (a)

$$
\begin{array}{l}
E[S(t)] \\ 
= S(0)E[\prod_{i=1}^{N(t)}X_i] \\ 
= S(0)E[E[\prod_{i=1}^{N(t)}X_i]|N(t)] \\ 
= S(0)E[\dfrac{1}{\mu^{N(t)}}|N(t)] \\
= =s \exp \left(-\lambda t\left(1-\dfrac{1}{\mu}\right)\right) \\
\end{array}
$$

## Solution (b)

Similarly:

$$
\begin{array}{l}
E[S^2(t)] = s^2  \exp \left(-\lambda t\left(1-\dfrac{2}{\mu^2}\right)\right) 
\end{array}
$$

# 38

## Problem

> Let $ \left\{M_{i}(t), t \geq 0\right\}(i=1,2,3) $ be independent Poisson processes with rates $ \lambda_{i}(i=1,2,3) $, and define:
$$
N_{1}(t)=M_{1}(t)+M_{2}(t), \quad N_{2}(t)=M_{2}(t)+M_{3}(t)
$$

The stochastic process $ \left\{\left(N_{1}(t), N_{2}(t)\right), t \geq 0\right\} $ is called a bivariate Poisson process.
(a) Find $ \mathrm{P}\left\{N_{1}(t)=n, N_{2}(t)=m\right\} $.
(b) Find $ \operatorname{Cov}\left(N_{1}(t), N_{2}(t)\right) $.

## Solution (a)

$$
\begin{array}{l }
P(N_1(t)=n,N_2(t)=m)\\ 
= \sum_{i=0}^{\min(m,n)}P(M_1(t)=n-i,M_2(t)=i,M_3(t)=m-i)\\ 
=\sum_{i=0}^{\min(m,n)}\dfrac{(\lambda_1t)^{n-i}e^{-\lambda_1 t}}{(n-i)!}\dfrac{(\lambda_2t)^{i}e^{-\lambda_2 t}}{i!}\dfrac{(\lambda_3t)^{m-i}e^{-\lambda_3 t}}{(m-i)!}\\ 
=\sum_{i=0}^{\min(m,n)}\dfrac{\lambda_1^n\lambda_3^nt^{m+n}e^{-(\lambda_1+\lambda_2+\lambda_3)t}}{n!m!}\dfrac{i!(m\cdots(m-i+1))(n\cdots(n-i+1))\lambda_2^i}{(\lambda_1\lambda_3 t)^i}
\end{array}
$$

## Solution (b)

$$
\begin{array}{l }
Cov(N_1(t),N_2(t))\\ 
= Cov(M_1(t)+M_2(t),M_2(t)+M_3(t))\\ 
= E[M_2^2(t)]- (E[M_2(t)])^2\\ 
= Var[M_2^2(t)]\\ 
=\lambda_2 t
\end{array}
$$

# 40

## Problem

> Prove that if $ \left\{N_{1}(t), t \geq 0\right\} $ and $ \left\{N_{2}(t), t \geq 0\right\} $ are independent Poisson processes with rates $ \lambda_{1} $ and $ \lambda_{2} $, respectively, then $ \{N(t), t \geq 0\} $ is a Poisson process with rate $ \lambda_{1}+\lambda_{2} $, where $ N(t)= $ $ N_{1}(t)+N_{2}(t) $.

## Solution 

$N(0) = 0$


$ N\left(t_{i}\right)-N\left(t_{i-1}\right)=\left[N_{1}\left(t_{i}\right)-N_{1}\left(t_{i-1}\right)\right]+\left[N_{2}\left(t_{i}\right)-N_{2}\left(t_{i-1}\right)\right] $ is independent 

$ N(t+s)-N(s)=\left[N_{1}(t+s)-N_{1}(s)\right]+\left[N_{2}(t+s)-N_{2}(s)\right] $ is poission distributed.

Therefore, $ N(t+s)-N(s) \sim $ Poisson $ \left(\left(\lambda_{1}+\lambda_{2}\right) t\right) $.

# 42

## Problem

> Let $ \{N(t), t \geq 0\} $ be a Poisson process with rate $ \lambda $. Let $ S_{n} $ denote the time of the $ n $-th event. Find:
(a) $ \mathrm{E}\left[S_{4}\right] $,
(b) $ \mathrm{E}\left[S_{4} \mid N(1)=2\right] $,
(c) $ \mathrm{E}[N(4)-N(2) \mid N(1)=3] $.

## Solution (a)

$E[S_4] = \dfrac{4}{\lambda}$

## Solution (b)

$1+\dfrac{2}{\lambda}$

## Solution (c)

$2\lambda$

# 49

## Problem 

> Events occur according to a Poisson process with rate $ \lambda $. At each event occurrence time, we must decide whether to continue or stop, with the goal of stopping at the last event time before a fixed time $ T $, where $ T>1 / \lambda $. Specifically:
> - If an event occurs at time $ t(0 \leq t \leq T) $ and we decide to stop, we win if no additional events occur in $ (t, T] $, otherwise we lose.
> - If we choose not to stop at an event and no additional events occur before $ T $, we lose.
> - If no events occur before T, we lose.

> Consider the strategy of stopping at the first event that occurs after a fixed time $ s(0 \leq s \leq T) $.
(a) What is the probability of winning when using this strategy?
(b) What value of $ s $ maximizes the winning probability?
(c) Show that when using the optimal $ s $ from (b), the winning probability is $ 1 / e $.

## Solution (a)

Only one event occurs in $ (s, T] $, so the probability of winning is:

$\lambda(T-s)e^{-\lambda(T-S)}$

## Solution (b)

$ \lambda(T-s)=1 \Longrightarrow s=T-\dfrac{1}{\lambda} $.

## Solution (c)

$ P(\operatorname{win})=\lambda\left(T-\left(T-\dfrac{1}{\lambda}\right)\right) e^{-\lambda\left(T-\left(T-\dfrac{1}{\lambda}\right)\right)}=\lambda\left(\dfrac{1}{\lambda}\right) e^{-\lambda\left(\dfrac{1}{\lambda}\right)}=1 \cdot e^{-1}=\dfrac{1}{e} $.

# 50    

## Problem 

> The time between consecutive train arrivals is uniformly distributed over $ (0,1) $ hours. Passengers arrive according to a Poisson process with a rate of 7 per hour. Suppose a train has just departed.
Let $ X $ be the number of passengers who board the next train. Find:
(a) $ \mathrm{E}[X] $,
(b) $ \operatorname{Var}(X) $.

## Solution (a)

$$
\begin{array}{l }
E[X] \\ 
= E[E[X|T]]\\ 
= E[\lambda T]
= \dfrac{\lambda}{2}\\ 
= 3.5
\end{array}
$$

## Solution (b)

$$
\begin{array}{l }
Var(X) \\ 
= Var(E(X|T)) + E(Var(X|T))\\ 
= Var(\lambda T) + E(\lambda T)\\ 
= \dfrac{\lambda^2}{12} +\dfrac{7}{2}\\ 
= \dfrac{91}{12} 
\end{array}
$$

# 52

## Problem 

> Team 1 and Team 2 are playing a match. The teams score according to independent Poisson processes with rates $ \lambda_{1} $ and $ \lambda_{2} $, respectively. The match stops when one team leads by $ k $ points. Find the probability that Team 1 wins.

## Solution 

$ P_{0}=\dfrac{\left(\dfrac{\lambda_{1}}{\lambda_{2}}\right)^{k}}{1+\left(\dfrac{\lambda_{1}}{\lambda_{2}}\right)^{k}}=\dfrac{\dfrac{\lambda_{1}^{k}}{\lambda_{2}^{k}}}{1+\dfrac{\lambda_{1}^{k}}{\lambda_{2}^{k}}}=\dfrac{\lambda_{1}^{k}}{\lambda_{1}^{k}+\lambda_{2}^{k}} $

# 59

## Problem 

> An insurance company has two types of claims. Let $ N_{i}(t) $ denote the number of type $ i $ claims up to time $ t $, and assume that $ \left\{N_{1}(t), t \geq 0\right\} $ and $ \left\{N_{2}(t), t \geq 0\right\} $ are independent Poisson processes with rates $ \lambda_{1}=10 $ and $ \lambda_{2}=1 $. The successive claim amounts for type 1 are independent exponential random variables with a mean of \$1000, while those for type 2 are independent exponential random variables with a mean of $ \$ 5000 $. Given that a claim of $ \$ 4000 $ has just arrived, what is the probability that it is a type 1 claim?

## Solution 

$ P( $ Type $ 1 \mid X=4000)=\dfrac{P(\text { Type } 1) \cdot f_{X_{1}}(4000)}{P(\text { Type } 1) \cdot f_{X_{1}}(4000)+P(\text { Type } 2) \cdot f_{X_{2}}(4000)} $

$=\dfrac{\dfrac{10}{11000} e^{-4}}{\dfrac{10}{11000} e^{-4}+\dfrac{1}{55000} e^{-0.8}}=\dfrac{e^{-4}}{e^{-4}+\dfrac{1}{5} e^{-0.8}}$

# 60

## Problem

> Customers enter a bank according to a Poisson process with rate $ \lambda $. Suppose two customers arrive in the first hour. What are the probabilities of the following events?
(a) Both customers arrive in the first 20 minutes.
(b) At least one customer arrives in the first 20 minutes.

## Solution (a)

$ P\left(T_{1} \leq \dfrac{1}{3}, T_{2} \leq \dfrac{1}{3}\right)=P\left(T_{1} \leq \dfrac{1}{3}\right) \cdot P\left(T_{2} \leq \dfrac{1}{3}\right)=\left(\dfrac{1}{3}\right)^{2}=\dfrac{1}{9} $.

## Solution (b)

$ P( $ At least one $ )=1-\left(\dfrac{2}{3}\right)^{2}=1-\dfrac{4}{9}=\dfrac{5}{9} $.

# 64

## Problem 

> Assume people arrive at a bus stop according to a Poisson process with rate $ \lambda $. The bus departs at time $ t $. Let $ X $ denote the total waiting time of all people boarding the bus by time $ t $. We want to determine $ \operatorname{Var}(X) $. Let $ N(t) $ be the number of people who arrived by time $ t $.
(a) What is $ \mathrm{E}[X \mid N(t)] $ ?
(b) Argue that $ \operatorname{Var}(X \mid N(t))=N(t) t^{2} / 12 $.
(c) What is $ \operatorname{Var}(X) $ ?

## Solution (a)

$ \mathrm{E}[X \mid N(t)=n]=\sum_{i=1}^{n} \mathrm{E}\left[t-T_{i}\right]=n\left(t-\mathrm{E}\left[T_{i}\right]\right)=n\left(t-\dfrac{t}{2}\right)=\dfrac{n t}{2} $.

## Solution (b)

$ \operatorname{Var}(X \mid N(t)=n)=\sum_{i=1}^{n} \operatorname{Var}\left(t-T_{i}\right)=n \cdot \operatorname{Var}\left(T_{i}\right)=n \cdot \dfrac{t^{2}}{12}=\dfrac{n t^{2}}{12} $.

## Solution (c)

$ \operatorname{Var}(X)=\mathrm{E}[\operatorname{Var}(X \mid N(t))]+\operatorname{Var}(\mathrm{E}[X \mid N(t)]) $

Then:

$ \begin{array}{c}\mathrm{E}[\operatorname{Var}(X \mid N(t))]=\mathrm{E}\left[\dfrac{N(t) t^{2}}{12}\right]=\dfrac{t^{2}}{12} \mathrm{E}[N(t)]=\dfrac{t^{2}}{12} \lambda t=\dfrac{\lambda t^{3}}{12} . \\ \operatorname{Var}(\mathrm{E}[X \mid N(t)])=\operatorname{Var}\left(\dfrac{N(t) t}{2}\right)=\dfrac{t^{2}}{4} \operatorname{Var}(N(t))=\dfrac{t^{2}}{4} \lambda t=\dfrac{\lambda t^{3}}{4} .\end{array} $

Then:

$ \operatorname{Var}(X)=\dfrac{\lambda t^{3}}{12}+\dfrac{\lambda t^{3}}{4}=\dfrac{\lambda t^{3}}{3} $.

# 67

## Problem 

> Satellites are launched into space according to a Poisson process with rate $ \lambda $. Each satellite remains in space for a random time (with distribution $ G $ ) before landing. Find the probability that at time $ t $, there are no satellites in space that were launched before time $ s $, where $ s<t $.

## Solution 

$ P(L>t-u)=1-G(t-u) $.

$ \lambda \int_{0}^{s} P(L>t-u) d u=\lambda \int_{0}^{s}(1-G(t-u)) d u $

$ P( $ None survive $ )=\exp \left(-\lambda \int_{t-s}^{t}(1-G(v)) d v\right) $

# 78

## Problem 

> A store opens at 8:00 AM. Customers arrive according to the following Poisson process rates:
> - From 8:00 AM to 10:00 AM: 4 customers per hour.
> - From 10:00 AM to 12:00 PM: 8 customers per hour.
> - From 12:00 PM to 2:00 PM: The arrival rate increases linearly from 8 to 10 customers per hour.
> - From 2:00 PM to 5:00 PM: The arrival rate decreases linearly from 10 to 4 customers per hour.
> Determine the distribution of the total number of customers entering the store on a given day.

## Solution

$ N \sim $ Poisson $ (8+16+18+21=63) $.

# 79

## Problem 

> Suppose events occur according to a nonhomogeneous Poisson process with intensity function $ \lambda(t) $ , $ t>0 $. Further assume that an event occurring at time $ s $ is a type 1 event with probability $ p(s) $, $ s>0 $. If $ N_{1}(t) $ is the number of type 1 events that occur by time $ t $, what type of process is $ \left\{N_{1}(t), t \geq 0\right\} ? $

## Solution 

Independent Increments

$ N_{1}(t)-N_{1}(s) $ is poission with mean: $ \int_{s}^{t} p(u) \lambda(u) d u $

Then: it's a nonhomogeneous poission process 

# 83

## Problem 

> Suppose $ \left\{N_{0}(t), t \geq 0\right\} $ is a Poisson process with rate $ \lambda=1 $. Let $ \lambda(t) $ be a nonnegative function of $ t $, and define:
$$
m(t)=\int_{0}^{t} \lambda(s) d s
$$
Define $ N(t)=N_{0}(m(t)) $. Show that $ \{N(t), t \geq 0\} $ is a nonhomogeneous Poisson process with intensity function $ \lambda(t)(t \geq 0) $.

## Solution

$ N(0)=N_{0}(m(0))=N_{0}(0)=0 $.

$ N\left(t_{i}\right)-N\left(t_{i-1}\right)=N_{0}\left(m\left(t_{i}\right)\right)-N_{0}\left(m\left(t_{i-1}\right)\right) $ are independent.

$ N_{0}(m(t))-N_{0}(m(s)) \sim $ Poisson $ (m(t)-m(s)) = $Poisson$  \left(\int_{s}^{t} \lambda(u) d u\right) $

# 86

> In good years, storms occur according to a Poisson process with rate 3 per unit time, while in other years, they occur at rate 5 per unit time. Suppose the probability that next year is a good year is 0.3 . Let $ N(t) $ denote the number of storms in the first $ t $ units of time next year.
(a) Find $ \mathrm{P}\{N(t)=n\} $.
(b) Is $ \{N(t), t \geq 0\} $ a Poisson process?
(c) Does $ \{N(t), t \geq 0\} $ have stationary increments? Why?
(d) Does it have independent increments? Why?
(e) If there are 3 storms by $ t=1 $, what is the conditional probability that it is a good year?

## Solution (a)

$ \mathrm{P}\{N(t)=n\}=0.3 \cdot \dfrac{(3 t)^{n} e^{-3 t}}{n!}+0.7 \cdot \dfrac{(5 t)^{n} e^{-5 t}}{n!} $

## Solution (b)

No, there's no stationary increment.

## Solution (c)

No, depends on year type 

## Solution (d)

No, it depends on the year type.

## Solution (e)

$ \mathrm{P}(\operatorname{Good} \mid N(1)=3)=\dfrac{\mathrm{P}(N(1)=3 \mid \text { Good }) \cdot \mathrm{P}(\text { Good })}{\mathrm{P}(N(1)=3)} =\dfrac{0.3 \cdot \dfrac{27 e^{-3}}{6}}{0.3 \cdot \dfrac{27 e^{-3}}{6}+0.7 \cdot \dfrac{125 e^{-5}}{6}}=\dfrac{8.1 e^{-3}}{8.1 e^{-3}+87.5 e^{-5}} $.

# 87

## Problem 

> When $ \{X(t), t \geq 0\} $ is a compound Poisson process, determine:
$$
\operatorname{Cov}(X(t), X(t+s))
$$

## Solution 

$ \operatorname{Cov}(X(t), X(t+s))=\operatorname{Cov}(X(t), X(t)+\Delta X)=\operatorname{Var}(X(t))+\operatorname{Cov}(X(t), \Delta X) =\operatorname{Var}(X(t))=\lambda t \mathrm{E}\left[Y^{2}\right] $

# 88


## Problem

> Customers arrive at an ATM according to a Poisson process with a rate of 12 per hour. The amount withdrawn per transaction is a random variable with a mean of \$30 and a standard deviation of \$50 (negative withdrawals represent deposits). The ATM operates for 15 hours each day. Find the approximate probability that the total daily withdrawals are less than $ \$ 6000 $.

## Solution 

$ \mathrm{E}[X(t)]=\lambda t \mathrm{E}[Y]=12 \times 15 \times 30=5400 $

$ \operatorname{Var}(X(t))=\lambda t \mathrm{E}\left[Y^{2}\right]=\lambda t\left(\sigma_{Y}^{2}+(\mathrm{E}[Y])^{2}\right)=12 \times 15 \times\left(50^{2}+30^{2}\right)=612,000 $

$ P(X(15)<6000)=P\left(Z<\dfrac{6000-5400}{782.30}\right)=P(Z<0.767)\approx 0.778 $

