# 1

## Problem

> A population of organisms consists of male and female members. In a small population, a specific male may mate with a specific female with probability $ \lambda h+o(h) $ in any time interval of length $ h $. Each mating immediately produces an offspring that is equally likely to be male or female. Let $ N_{1}(t) $ and $ N_{2}(t) $ denote the number of males and females in the population at time $ t $, respectively. Derive the parameters for the continuous-time Markov chain $ \left\{N_{1}(t), N_{2}(t)\right\} $, namely the parameters $ v_{i} $ and $ P_{i j} $ from Section 6.2.

## Solution 

$ v_{i}=\lambda m f \quad $ if $ m \geq 1, f \geq 1 ; \quad $ otherwise $ v_{i}=0 $.


if $ m, j \ge 1: $

$ P_{i \rightarrow(m+1, f)}=\dfrac{1}{2}, \quad P_{i \rightarrow(m, f+1)}=\dfrac{1}{2}, \quad P_{i \rightarrow j}=0 $ for all other $ j $.

else: 

$ P_{i \rightarrow j}=0 \quad $ for all $ j \neq i \quad $  ,$P_{i \rightarrow j}=1 $ else.

# 4

## Problem 

> Potential customers arrive at a single-server service station according to a Poisson process with rate $ \lambda $. However, if an arrival finds that there are already $ n $ people in the system, they will enter the system with probability $ \alpha_{n} $. Assuming exponential service times with rate $ \mu $, model this as a birth-and-death process and determine the birth rates and death rates.

## Solution 

Birth rates: $ \lambda_{n}=\lambda \alpha_{n} $ for $ n=0,1,2, \ldots $
Death rates: $ \mu_{n}=\left\{\begin{array}{ll}\mu & \text { if } n \geq 1 \\ 0 & \text { if } n=0\end{array}\right. $

# 5

## Problem 

> There is a population of $ N $ individuals, some of whom are infected with a certain disease. The spread occurs as follows: contacts between two individuals in the population occur according to a Poisson process with rate $ \lambda $. Each contact is equally likely to involve any pair of individuals from the $ \binom{N}{2} $ possible pairs in the population. If a contact involves an infected individual and a susceptible (uninfected) individual, the susceptible individual becomes infected with probability $ p $. Once infected, an individual remains infected forever. Let $ X(t) $ denote the number of infected individuals in the population at time $ t $.
(a) Is $ \{X(t), t \geqslant 0\} $ a continuous-time Markov chain?
(b) Determine its type.
(c) Starting with one infected individual, what is the expected time until all members are infected

## Solution (a)

Yes. 

Index set: $t$, continuous 

State space: $X(t)$ in $ \{0,1,2, \ldots, N\} $, discrete.

It only depend on present state.

$ \lambda_{k}=\lambda p \dfrac{2 k(N-k)}{N(N-1)} $

## Solution (b)

pure birth process

## Solution (c)


$$
\begin{array}{l}
E[T]\\ 
=\sum_{k=1}^{N-1} E\left[T_{k}\right]\\ 
=\sum_{k=1}^{N-1} \dfrac{1}{\lambda_{k}} \\ 
=\sum_{k=1}^{N-1} \dfrac{1}{\lambda p \dfrac{2 k(N-k)}{N(N-1)}}\\ 
=\dfrac{N(N-1)}{2 \lambda p} \sum_{k=1}^{N-1} \dfrac{1}{k(N-k)}
\end{array}
$$.

Where:

$ \sum_{k=1}^{N-1} \dfrac{1}{k(N-k)}=\dfrac{1}{N} \sum_{k=1}^{N-1}\left(\dfrac{1}{k}+\dfrac{1}{N-k}\right)=\dfrac{1}{N}\left(\sum_{k=1}^{N-1} \dfrac{1}{k}+\sum_{k=1}^{N-1} \dfrac{1}{N-k}\right) $.

Then:

$ E[T]=\dfrac{N(N-1)}{2 \lambda p} \cdot \dfrac{2}{N}\sum_{m=1}^{N-1} \dfrac{1}{m} = \dfrac{N-1}{\lambda p}\sum_{m=1}^{N-1} \dfrac{1}{m}   $

# 7 

## Problem 

> Individuals join a club according to a Poisson process with rate $ \lambda $. Each new member must pass through $ k $ consecutive stages to become a full member. The time to pass through each stage is an exponential random variable with rate $ \mu $, and these times are independent. Let $ N_{i}(t) $ denote the number of club members who have exactly passed $ i $ stages at time $ t $, for $ i=1, \ldots, k-1 $. Furthermore, let $ \boldsymbol{N}(t)=\left(N_{1}(t), N_{2}(t), \ldots, N_{k-1}(t)\right) $.
(a) Is $ \{\boldsymbol{N}(t), t \geqslant 0\} $ a continuous-time Markov chain?
(b) If yes, give the infinitesimal transition rates. That is, for any state $ \boldsymbol{n}=\left(n_{1}, \ldots, n_{k-1}\right) $, specify the possible next states and their infinitesimal rates.

## Solution (a)

Yes 

Index set: $t$, continuous 

State space: $ \boldsymbol{n}=\left(n_{1}, n_{2}, \ldots, n_{k-1}\right) $, discrete.

It only depend on present state.

## Solution (b)

1. Arrival of a new member (starts at stage 1):
- Next state: $ \left(n_{1}+1, n_{2}, n_{3}, \ldots, n_{k-1}\right) $
- Rate: $ \lambda $
1. Completion of stage $ i $ by a member (for $ i=1,2, \ldots, k-2 $ ):
- Next state: $ \left(n_{1}, \ldots, n_{i}-1, n_{i+1}+1, \ldots, n_{k-1}\right) $
- Rate: $ \mu \cdot n_{i} $ (provided $ n_{i}>0 $ )
1. Completion of stage $ k-1 $ by a member (leaves the system):
- Next state: $ \left(n_{1}, n_{2}, \ldots, n_{k-2}, n_{k-1}-1\right) $
- Rate: $ \mu \cdot n_{k-1}\left(\right. $ provided $ \left.n_{k-1}>0\right) $

# 8

## Problem 

Consider two machines, each having an exponential lifetime with mean $ 1 / \lambda $. There is a repairman who can service a machine at an exponential rate $ \mu $. Set up the Kolmogorov backward equations; no need to solve them.

## Solution 

$ Q=\left(\begin{array}{ccc}-\mu & \mu & 0 \\ \lambda & -(\lambda+\mu) & \mu \\ 0 & 2 \lambda & -2 \lambda\end{array}\right) $

1. For $ i=0 $ :
$$
\dfrac{d}{d t} P_{0 j}(t)=Q_{00} P_{0 j}(t)+Q_{01} P_{1 j}(t)+Q_{02} P_{2 j}(t)=-\mu P_{0 j}(t)+\mu P_{1 j}(t)
$$
2. For $ i=1 $ :
$$
\dfrac{d}{d t} P_{1 j}(t)=Q_{10} P_{0 j}(t)+Q_{11} P_{1 j}(t)+Q_{12} P_{2 j}(t)=\lambda P_{0 j}(t)-(\lambda+\mu) P_{1 j}(t)+\mu P_{2 j}(t)
$$
3. For $ i=2 $ :
$$
\dfrac{d}{d t} P_{2 j}(t)=Q_{20} P_{0 j}(t)+Q_{21} P_{1 j}(t)+Q_{22} P_{2 j}(t)=2 \lambda P_{1 j}(t)-2 \lambda P_{2 j}(t)
$$

# 11

## Problem 

Consider a Yule process starting with one individual, i.e., assume $ X(0)=1 $. Let $ T_{i} $ denote the time for the process to go from a population size of $ i $ to size $ i+1 $.
(a) Argue that $ T_{i}(i=1, \ldots, j) $ are independent exponential random variables with rates $ i \lambda $, respectively.
(b) Let $ X_{1}, \ldots, X_{j} $ be independent exponential random variables, each with rate $ \lambda $, and interpret $ X_{i} $ as the lifetime of component $ i $. Argue that $ \max \left(X_{1}, \ldots, X_{j}\right) $ can be expressed as
$$
\max \left(X_{1}, \ldots, X_{j}\right)=\varepsilon_{1}+\varepsilon_{2}+\cdots+\varepsilon_{j}
$$
where $ \varepsilon_{1}, \varepsilon_{2}, \ldots, \varepsilon_{j} $ are independent exponential random variables with rates $ j \lambda,(j-1) \lambda, \ldots, \lambda $, respectively.
Hint: Interpret $ \varepsilon_{i} $ as the time between the $ (i-1) $-th and $ i $-th failure.
(c) Using (a) and (b), argue that
$$
P\left\{T_{1}+\cdots+T_{j} \leq t\right\}=\left(1-e^{-\lambda t}\right)^{j}
$$
(d) Using (c), derive
$$
P_{1 j}(t)=\left(1-e^{-\lambda t}\right)^{j-1}-\left(1-e^{-\lambda t}\right)^{j}=e^{-\lambda t}\left(1-e^{-\lambda t}\right)^{j-1}
$$

Hence, given $ X(0)=1, X(t) $ has a geometric distribution with parameter $ p=e^{-\lambda t} $.
(e) Now show that
$$
P_{i j}(t)=\binom{j-1}{i-1} e^{-\lambda t i}\left(1-e^{-\lambda t}\right)^{j-i}
$$

## Solution (a)

In a Yule process, each individual gives birth independently at rate $ \lambda $. When the population size is $ i $, the total birth rate is $ i \lambda $ (sum of rates from $ i $ independent individuals). Thus, the time $ T_{i} $ to go from size $ i $ to $ i+1 $ is exponentially distributed with rate $ i \lambda $.
The times $ T_{i} $ are independent because the birth events are memoryless and depend only on the current population size. Given the Markov property, the future evolution is independent of the past, and the inter-event times are independent.
Therefore, $ T_{i} \sim \operatorname{Exponential}(i \lambda) $ for $ i=1, \ldots, j $, and they are independent.

## Solution (b)

The time to the first failure, $ \varepsilon_{1} $, is the minimum of $ j $ exponential lifetimes, so $ \varepsilon_{1} \sim $ Exponential $ (j \lambda) $.
After the first failure, $ j-1 $ components remain. The time to the next failure, $ \varepsilon_{2} $, is exponential with rate $ (j-1) \lambda $.
Continuing, the time between the $ (k-1) $-th and $ k $-th failure is $ \varepsilon_{k} \sim \operatorname{Exponential}((j-k+ $ 1) $ \lambda $ ) for $ k=1, \ldots, j $.

The total time until the last failure is $ M=\sum_{k=1}^{j} \varepsilon_{k} $. Due to the memoryless property of the exponential distribution, the inter-failure times $ \varepsilon_{k} $ are independent.
Thus, $ M=\varepsilon_{1}+\varepsilon_{2}+\cdots+\varepsilon_{j} $, where $ \varepsilon_{k} $ are independent with rates $ j \lambda,(j-1) \lambda, \ldots, \lambda $.

## Solution (c)

From (a), $ \sum_{i=1}^{j} T_{i} $ is the sum of independent exponential random variables with rates $ \lambda, 2 \lambda, \ldots, j \lambda $

From (b), $ \max \left(X_{1}, \ldots, X_{j}\right) $ has the same distribution as $ \sum_{k=1}^{j} \varepsilon_{k} $ with rates $ j \lambda,(j-1) \lambda, \ldots, \lambda $, which is identical to the set of rates $ \lambda, 2 \lambda, \ldots, j \lambda $ (order does not affect the distribution of the sum).
The CDF of $ \max \left(X_{1}, \ldots, X_{j}\right) $ is:
$$
P\left(\max \left(X_{1}, \ldots, X_{j}\right) \leq t\right)=\prod_{i=1}^{j} P\left(X_{i} \leq t\right)=\left(1-e^{-\lambda t}\right)^{j}, \quad \text { since } X_{i} \sim \text { Exponential }(\lambda) .
$$

Therefore,
$$
P\left\{\sum_{i=1}^{j} T_{i} \leq t\right\}=\left(1-e^{-\lambda t}\right)^{j}
$$

## Solution (d)

$ P_{1 j}(t)=P(X(t)=j \mid X(0)=1) $. In a Yule process, the population size increases monotonically.
- The event $ \{X(t) \geq j\} $ occurs if the time to reach size $ j $ from size 1 is at most $ t $, i.e., $ \sum_{k=1}^{j-1} T_{k} \leq t $. From (c),
$$
P(X(t) \geq j)=P\left(\sum_{k=1}^{j-1} T_{k} \leq t\right)=\left(1-e^{-\lambda t}\right)^{j-1}
$$
- Similarly,
$$
P(X(t) \geq j+1)=P\left(\sum_{k=1}^{j} T_{k} \leq t\right)=\left(1-e^{-\lambda t}\right)^{j}
$$

Thus,
$$
P(X(t)=j)=P(X(t) \geq j)-P(X(t) \geq j+1)=\left(1-e^{-\lambda t}\right)^{j-1}-\left(1-e^{-\lambda t}\right)^{j} .
$$

Simplifying,
$$
P_{1 j}(t)=\left(1-e^{-\lambda t}\right)^{j-1}\left(1-\left(1-e^{-\lambda t}\right)\right)=e^{-\lambda t}\left(1-e^{-\lambda t}\right)^{j-1}
$$

This is the probability mass function of a geometric distribution with parameter $ p=e^{-\lambda t} $, where $ X(t) $ takes values in $ \{1,2,3, \ldots\} $ and
$$
P(X(t)=j)=(1-p)^{j-1} p, \quad p=e^{-\lambda t}
$$

## Solution (e)

For initial size $ X(0)=i $, each of the $ i $ initial individuals spawns an independent Yule process. Th size of each subprocess at time $ t $ is geometrically distributed with parameter $ p=e^{-\lambda t} $, as in (d). $ Y_{k} $ be the size of the $ k $-th subprocess, so:
$$
P\left(Y_{k}=m\right)=e^{-\lambda t}\left(1-e^{-\lambda t}\right)^{m-1}, \quad m=1,2, \ldots
$$

The total population size is $ X(t)=\sum_{k=1}^{i} Y_{k} $. Define $ Z_{k}=Y_{k}-1 $ (number of offspring beyond the initial individual), so $ Z_{k} \geq 0 $ and:
$$
P\left(Z_{k}=n\right)=e^{-\lambda t}\left(1-e^{-\lambda t}\right)^{n}, \quad n=0,1,2, \ldots .
$$

Then $ X(t)=\sum_{k=1}^{i}\left(Z_{k}+1\right)=\sum_{k=1}^{i} Z_{k}+i $, and $ P(X(t)=j)=P\left(\sum_{k=1}^{i} Z_{k}=j-i\right) $.
The sum of $ i $ i.i.d. geometric random variables (starting at 0 ) follows a negative binomial distribution:
$$
P\left(\sum_{k=1}^{i} Z_{k}=m\right)=\binom{m+i-1}{i-1} p^{i}(1-p)^{m}, \quad m=0,1,2, \ldots
$$

Substitute $ m=j-i $ and $ p=e^{-\lambda t} $ :
$$
P_{i j}(t)=\binom{(j-i)+i-1}{i-1} e^{-\lambda t i}\left(1-e^{-\lambda t}\right)^{j-i}=\binom{j-1}{i-1} e^{-\lambda t i}\left(1-e^{-\lambda t}\right)^{j-i}
$$

This holds for $ j \geq i $ (0 otherwise), and matches (d) when $ i=1 $.

# 13

## Problem 

A barber shop operated by a single barber can accommodate at most two customers. Potential customers arrive according to a Poisson process at a rate of 3 per hour. The service times are independent exponential random variables with a mean of $ 1 / 4 $ hour. Solve the following:
(a) The average number of customers in the shop.
(b) The proportion of potential customers who enter the shop.
(c) If the barber works twice as fast, how much more business will he do?

## Solution (a)

$ \begin{array}{l}P_{0}=\dfrac{1-\rho}{1-\rho^{3}}, \quad \rho=\dfrac{\lambda}{\mu}=\dfrac{3}{4} \\ P_{0}=\dfrac{1-3 / 4}{1-(3 / 4)^{3}}=\dfrac{1 / 4}{1-27 / 64}=\dfrac{1 / 4}{37 / 64}=\dfrac{16}{37} \\ P_{1}=\rho P_{0}=\dfrac{3}{4} \cdot \dfrac{16}{37}=\dfrac{12}{37} \\ P_{2}=\rho^{2} P_{0}=\left(\dfrac{3}{4}\right)^{2} \cdot \dfrac{16}{37}=\dfrac{9}{16} \cdot \dfrac{16}{37}=\dfrac{9}{37}\end{array} $

$ L=0 \cdot P_{0}+1 \cdot P_{1}+2 \cdot P_{2}=0+\dfrac{12}{37}+2 \cdot \dfrac{y}{37}=\dfrac{12}{37}+\dfrac{18}{37}=\dfrac{30}{37} $

## Solution (b)

$ P_{\text {accept }}=P_{0}+P_{1}=\dfrac{16}{37}+\dfrac{12}{37}=\dfrac{28}{37} $

## Solution (c)

$ \begin{array}{l}P_{0}^{\prime}=\dfrac{1-\rho^{\prime}}{1-\left(\rho^{\prime}\right)^{3}}=\dfrac{1-3 / 8}{1-(3 / 8)^{3}}=\dfrac{5 / 8}{1-27 / 512}=\dfrac{5 / 8}{485 / 512}=\dfrac{5}{8} \cdot \dfrac{512}{485}=\dfrac{320}{485}=\dfrac{64}{97} \\ P_{1}^{\prime}=\rho^{\prime} P_{0}^{\prime}=\dfrac{3}{8} \cdot \dfrac{64}{97}=\dfrac{24}{97} \\ P_{2}^{\prime}=\left(\rho^{\prime}\right)^{2} P_{0}^{\prime}=\left(\dfrac{3}{8}\right)^{2} \cdot \dfrac{64}{97}=\dfrac{9}{64} \cdot \dfrac{64}{97}=\dfrac{9}{97}\end{array} $

$ P_{\text {accept }}^{\prime}=P_{0}^{\prime}+P_{1}^{\prime}=\dfrac{64}{97}+\dfrac{24}{97}=\dfrac{8 \gamma}{97} $

- Original: $ \lambda_{\text {eff }}^{\text {old }}=\lambda\left(1-P_{2}\right)=3 \cdot\left(1-\dfrac{9}{37}\right)=3 \cdot \dfrac{28}{37}=\dfrac{84}{37} $
- New: $ \lambda_{\text {eff }}^{\text {new }}=\lambda\left(1-P_{2}^{\prime}\right)=3 \cdot\left(1-\dfrac{9}{97}\right)=3 \cdot \dfrac{88}{97}=\dfrac{264}{97} $

$ \lambda_{\text {eff }}^{\text {new }}-\lambda_{\text {eff }}^{\text {old }}=\dfrac{264}{97}-\dfrac{264}{37}=\dfrac{264 \times 37-84 \times 97}{97 \times 37}=\dfrac{9 76 8-8 148}{3589}=\dfrac{1620}{3589} $

# 15

## Problem 

A service center consists of two service lines. Each line serves customers at an exponential rate averaging 2 services per hour. Customers arrive according to a Poisson process with a rate of 3 per hour, and the system capacity is at most 3 customers.
(a) What proportion of potential customers enter the system?
(b) If there is only a single service line, and it is twice as fast (i.e., $ \mu=4 $ ), what is the value in (a)?

## Solution (a)


$ P_{0}=\left[\dfrac{(3 / 2)^{0}}{0!}+\dfrac{(3 / 2)^{1}}{1!}+\dfrac{(3 / 2)^{2}}{2!}+\dfrac{(3 / 2)^{2}}{2!}\left(\dfrac{3 / 2}{2}\right)^{3-2}\right]^{-1} =\dfrac{32}{143} $

$ \begin{array}{l}P_{1}=\dfrac{3}{2} \times \dfrac{32}{143}=\dfrac{48}{143} \\ P_{2}=\dfrac{(3 / 2)^{2}}{2} \times \dfrac{32}{143}=\dfrac{9 / 4}{2} \times \dfrac{32}{143}=\dfrac{9}{8} \times \dfrac{32}{143}=\dfrac{36}{143} \\ P_{3}=\dfrac{9}{8} \times \dfrac{3}{4} \times \dfrac{32}{143}=\dfrac{27}{32} \times \dfrac{32}{143}=\dfrac{27}{143}\end{array} $

## Solution (b)

$ P_{0}= $$ \left[1+\dfrac{3}{4}+\left(\dfrac{3}{4}\right)^{2}+\left(\dfrac{3}{4}\right)^{3}\right]^{-1}= $$ =\dfrac{64}{175} $

$ P_{3}=\left(\dfrac{3}{4}\right)^{3} \times \dfrac{64}{175}=\dfrac{27}{64} \times \dfrac{64}{175}=\dfrac{27}{175} $

$ 1-P_{3}=1-27 / 175=148 / 175 $

# 17

## Problem 

Each time a machine is repaired, it remains operational for an exponentially distributed time with rate $ \lambda $. It then fails, and there are two types of failure. If it is a type I failure, the repair time is exponentially distributed with rate $ \mu_{1} $. If it is a type II failure, the repair time is exponentially distributed with rate $ \mu_{2} $. Each failure is independent of the time until failure of the machine. The probability of a type I failure is $ p $, and the probability of a type II failure is $ 1-p $. What is the proportion of time the machine is down due to a type I failure? What is the proportion of time the machine is down due to a type II failure? What is the proportion of time the machine is operational?

## Solution 
$$
Q=\left[\begin{array}{ccc}-\lambda & \lambda p & \lambda(1-p) \\ \mu_{1} & -\mu_{1} & 0 \\ \mu_{2} & 0 & -\mu_{2}\end{array}\right]
$$
The balance equations are:
1. For state $ 0:-\lambda \pi_{0}+\mu_{1} \pi_{1}+\mu_{2} \pi_{2}=0 $
2. For state 1: $ \lambda p \pi_{0}-\mu_{1} \pi_{1}=0 $
3. For state 2 : $ \lambda(1-p) \pi_{0}-\mu_{2} \pi_{2}=0 $

Solving these equations:
- From equation 2: $ \pi_{1}=\dfrac{\lambda p}{\mu_{1}} \pi_{0} $
- From equation 3: $ \pi_{2}=\dfrac{\lambda(1-p)}{\mu_{2}} \pi_{0} $
- Substituting into $ \pi_{0}+\pi_{1}+\pi_{2}=1 $ :
$$
\begin{array}{l}
\pi_{0}+\dfrac{\lambda p}{\mu_{1}} \pi_{0}+\dfrac{\lambda(1-p)}{\mu_{2}} \pi_{0}=1 \\
\pi_{0}\left(1+\dfrac{\lambda p}{\mu_{1}}+\dfrac{\lambda(1-p)}{\mu_{2}}\right)=1
\end{array}
$$

Let $ D=\mu_{1} \mu_{2}+\lambda p \mu_{2}+\lambda(1-p) \mu_{1} $. Then:
$$
\begin{array}{l}
\pi_{0}=\dfrac{\mu_{1} \mu_{2}}{D} \\
\pi_{1}=\dfrac{\lambda p}{\mu_{1}} \cdot \dfrac{\mu_{1} \mu_{2}}{D}=\dfrac{\lambda p \mu_{2}}{D} \\
\pi_{2}=\dfrac{\lambda(1-p)}{\mu_{2}} \cdot \dfrac{\mu_{1} \mu_{2}}{D}=\dfrac{\lambda(1-p) \mu_{1}}{D}
\end{array}
$$

# 18

## Problem 

After being repaired, a machine operates for an exponentially distributed time with rate $ \lambda $, then fails. Upon failure, the repair process begins. The repair process proceeds sequentially through $ k $ distinct stages. Stage 1 must be completed first, followed by stage 2, and so on. The times to complete these repairs are independent, with stage $ i $ requiring an exponentially distributed time with rate $ \mu_{i}(i=1, \cdots, k) $.
(a) What is the proportion of time the machine is undergoing repair at stage $ i $ ?
(b) What is the proportion of time the machine is operational?

## Solution (a) (b)

$ \begin{aligned} \pi_{0} & =\dfrac{1}{1+\lambda \sum_{j=1}^{k} \dfrac{1}{\mu_{j}}} \\ \pi_{i} & =\dfrac{\lambda / \mu_{i}}{1+\lambda \sum_{j=1}^{k} \dfrac{1}{\mu_{j}}} \text { for } i=1, \ldots, k\end{aligned} $

# 20

## Problem 

We have two machines: one is working, and the other is a backup. The working machine operates for an exponentially distributed time with rate $ \lambda $ (mean $ 1 / \lambda $ ) before failing. When it fails:
- If the backup is in a workable state, it immediately takes over as the working machine.
- The failed machine is sent to the repair shop, where a single repairman fixes it in an exponentially distributed time with rate $ \mu $ (mean $ 1 / \mu $ ).
- If the repairman is idle, he starts repairing the failed machine right away.
- If the repairman is busy (repairing another machine), the failed machine waits. Once the repairman finishes, the newly repaired machine starts working, and he begins repairing the waiting machine.

Initially, both machines are in working condition, meaning one is working, and the other is a workable backup. We need to find:
- (a) The expected time until both machines are in the repair shop (i.e., neither is working).
- (b) The variance of that time.
- (c) The long-run proportion of time there is one working machine.

## Solution (a)

1. $ m_{2}=\dfrac{1}{\lambda}+m_{1} $
2. $ m_{1}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda+\mu} m_{2} $

Substitute $ m_{2}=\dfrac{1}{\lambda}+m_{1} $ into the second equation:
$$
\begin{array}{l}
m_{1}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda+\mu}\left(\dfrac{1}{\lambda}+m_{1}\right) \\
m_{1}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda+\mu} \cdot \dfrac{1}{\lambda}+\dfrac{\mu}{\lambda+\mu} m_{1} \\
m_{1}-\dfrac{\mu}{\lambda+\mu} m_{1}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda(\lambda+\mu)} \\
m_{1}\left(1-\dfrac{\mu}{\lambda+\mu}\right)=\dfrac{\lambda+\mu+\mu}{\lambda(\lambda+\mu)} \\
m_{1} \cdot \dfrac{\lambda}{\lambda+\mu}=\dfrac{\lambda+2 \mu}{\lambda(\lambda+\mu)} \\
m_{1}=\dfrac{\lambda+2 \mu}{\lambda(\lambda+\mu)} \cdot \dfrac{\lambda+\mu}{\lambda}=\dfrac{\lambda+2 \mu}{\lambda^{2}}
\end{array}
$$

Wait, let's correct that:
$$
m_{1}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda+\mu} m_{2}
$$

Substitute $ m_{1}=m_{2}-\dfrac{1}{\lambda} $ into the second equation:
$$
\begin{array}{l}
m_{2}-\dfrac{1}{\lambda}=\dfrac{1}{\lambda+\mu}+\dfrac{\mu}{\lambda+\mu} m_{2} \\
m_{2}-\dfrac{\mu}{\lambda+\mu} m_{2}=\dfrac{1}{\lambda}+\dfrac{1}{\lambda+\mu} \\
m_{2}\left(1-\dfrac{\mu}{\lambda+\mu}\right)=\dfrac{\lambda+\mu+\lambda}{\lambda(\lambda+\mu)} \\
m_{2} \cdot \dfrac{\lambda}{\lambda+\mu}=\dfrac{2 \lambda+\mu}{\lambda(\lambda+\mu)} \\
m_{2}=\dfrac{2 \lambda+\mu}{\lambda(\lambda+\mu)} \cdot \dfrac{\lambda+\mu}{\lambda}=\dfrac{2 \lambda+\mu}{\lambda^{2}}
\end{array}
$$

Then, $ m_{1}=m_{2}-\dfrac{1}{\lambda}=\dfrac{2 \lambda+\mu}{\lambda^{2}}-\dfrac{1}{\lambda}=\dfrac{2 \lambda+\mu-\lambda}{\lambda^{2}}=\dfrac{\lambda+\mu}{\lambda^{2}} $.

## Solution (b)

Define $ v_{i}=\operatorname{Var}\left(T_{i}\right) $ and $ w_{i}=E\left[T_{i}^{2}\right] $, so $ v_{i}=w_{i}-m_{i}^{2} $. We need $ v_{2} $.
- State 2: $ T_{2}=\operatorname{Exp}(\lambda)+T_{1} $, independent.
$$
w_{2}=E\left[\operatorname{Exp}(\lambda)^{2}\right]+2 E[\operatorname{Exp}(\lambda)] m_{1}+w_{1}=\dfrac{2}{\lambda^{2}}+\dfrac{2}{\lambda} m_{1}+w_{1} .
$$
- State 1: Sojourn time is $ \operatorname{Exp}(\lambda+\mu) $, then:
- To State O (probability $ \dfrac{\lambda}{\lambda+\mu} $ ): extra time 0 .
- To State 2 (probability $ \dfrac{\mu}{\lambda+\mu} $ ): extra time $ T_{2} $.
$$
\begin{array}{l}
w_{1}=E\left[\operatorname{Exp}(\lambda+\mu)^{2}\right]+2 E[\operatorname{Exp}(\lambda+\mu)] \cdot \dfrac{\mu}{\lambda+\mu} m_{2}+\dfrac{\mu}{\lambda+\mu} w_{2} \\
=\dfrac{2}{(\lambda+\mu)^{2}}+2 \cdot \dfrac{1}{\lambda+\mu} \cdot \dfrac{\mu}{\lambda+\mu} m_{2}+\dfrac{\mu}{\lambda+\mu} w_{2} \\
=\dfrac{2}{(\lambda+\mu)^{2}}+\dfrac{2 \mu}{(\lambda+\mu)^{2}} m_{2}+\dfrac{\mu}{\lambda+\mu} w_{2} .
\end{array}
$$

Using $ m_{1}=\dfrac{\lambda+\mu}{\lambda^{2}}, m_{2}=\dfrac{2 \lambda+\mu}{\lambda^{2}} $ :
1. $ w_{2}=\dfrac{2}{\lambda^{2}}+\dfrac{2}{\lambda} \cdot \dfrac{\lambda+\mu}{\lambda^{2}}+w_{1}=\dfrac{2}{\lambda^{2}}+\dfrac{2(\lambda+\mu)}{\lambda^{3}}+w_{1}=\dfrac{4 \lambda+2 \mu}{\lambda^{3}}+w_{1} $
2. $ w_{1}=\dfrac{2}{(\lambda+\mu)^{2}}+\dfrac{2 \mu}{(\lambda+\mu)^{2}} \cdot \dfrac{2 \lambda+\mu}{\lambda^{2}}+\dfrac{\mu}{\lambda+\mu} w_{2}=\dfrac{2}{(\lambda+\mu)^{2}}+\dfrac{2 \mu(2 \lambda+\mu)}{\lambda^{2}(\lambda+\mu)^{2}}+\dfrac{\mu}{\lambda+\mu} w_{2} $

Let $ a=\dfrac{2}{(\lambda+\mu)^{2}}+\dfrac{2 \mu(2 \lambda+\mu)}{\lambda^{2}(\lambda+\mu)^{2}}=\dfrac{2 \lambda^{2}+2 \mu(2 \lambda+\mu)}{\lambda^{2}(\lambda+\mu)^{2}}=\dfrac{2(\lambda+\mu)^{2}}{\lambda^{2}(\lambda+\mu)^{2}}=\dfrac{2}{\lambda^{2}} $,
$$
\begin{array}{l}
b=\dfrac{\mu}{\lambda+\mu} \\
c=\dfrac{4 \lambda+2 \mu}{\lambda^{3}}
\end{array}
$$

Then:
- $ w_{1}=a+b w_{2} $
- $ w_{2}=c+w_{1} $

Then:
- $ w_{1}=a+b w_{2} $
- $ w_{2}=c+w_{1} $

Substitute: $ w_{1}=a+b\left(c+w_{1}\right) $
$$
\begin{array}{l}
w_{1}(1-b)=a+b c \\
w_{1}=\dfrac{a+b c}{1-b} \\
w_{2}=c+\dfrac{a+b c}{1-b}
\end{array}
$$

Compute:
- $ a+b c=\dfrac{2}{\lambda^{2}}+\dfrac{\mu}{\lambda+\mu} \cdot \dfrac{4 \lambda+2 \mu}{\lambda^{3}}=\dfrac{2}{\lambda^{2}}+\dfrac{2 \mu(2 \lambda+\mu)}{\lambda^{3}(\lambda+\mu)} $
- Denominator: $ (\lambda+\mu) \lambda^{3} $
$$
=\dfrac{2 \lambda(\lambda+\mu)+2 \mu(2 \lambda+\mu)}{\lambda^{3}(\lambda+\mu)}=\dfrac{2 \lambda^{2}+6 \lambda \mu+2 \mu^{2}}{\lambda^{3}(\lambda+\mu)}
$$
- $ 1-b=\dfrac{\lambda}{\lambda+\mu} $
$$
w_{1}=\dfrac{2 \lambda^{2}+6 \lambda \mu+2 \mu^{2}}{\lambda^{3}(\lambda+\mu)} \cdot \dfrac{\lambda+\mu}{\lambda}=\dfrac{2\left(\lambda^{2}+3 \lambda \mu+\mu^{2}\right)}{\lambda^{4}}
$$
- $ w_{2}=\dfrac{4 \lambda+2 \mu}{\lambda^{3}}+\dfrac{2\left(\lambda^{2}+3 \lambda \mu+\mu^{2}\right)}{\lambda^{4}}=\dfrac{(4 \lambda+2 \mu) \lambda+2\left(\lambda^{2}+3 \lambda \mu+\mu^{2}\right)}{\lambda^{4}}=\dfrac{6 \lambda^{2}+8 \lambda \mu+2 \mu^{2}}{\lambda^{4}} $

## Solution (c)

- State 2: $ \lambda \pi_{2}=\mu \pi_{1} \rightarrow \pi_{2}=\dfrac{\mu}{\lambda} \pi_{1} $
- State 0: $ \mu \pi_{0}=\lambda \pi_{1} \rightarrow \pi_{0}=\dfrac{\lambda}{\mu} \pi_{1} $
- State 1: $ (\lambda+\mu) \pi_{1}=\lambda \pi_{2}+\mu \pi_{0} $ (checks out when substituted)
- $ \pi_{2}+\pi_{1}+\pi_{0}=1 $
$$
\begin{array}{l}
\dfrac{\mu}{\lambda} \pi_{1}+\pi_{1}+\dfrac{\lambda}{\mu} \pi_{1}=\pi_{1}\left(\dfrac{\mu}{\lambda}+1+\dfrac{\lambda}{\mu}\right)=1 \\
\dfrac{\mu^{2}+\lambda \mu+\lambda^{2}}{\lambda \mu} \pi_{1}=1 \\
\pi_{1}=\dfrac{\lambda \mu}{\lambda^{2}+\lambda \mu+\mu^{2}} \\
\pi_{2}=\dfrac{\mu^{2}}{\lambda^{2}+\lambda \mu+\mu^{2}} \\
\pi_{0}=\dfrac{\lambda^{2}}{\lambda^{2}+\lambda \mu+\mu^{2}}
\end{array}
$$

Proportion: $ \pi_{2}+\pi_{1}=\dfrac{\mu^{2}+\lambda \mu}{\lambda^{2}+\lambda \mu+\mu^{2}}=\dfrac{\mu(\mu+\lambda)}{\lambda^{2}+\lambda \mu+\mu^{2}} $.
For (c), the proportion is:
$$
\dfrac{\mu(\mu+\lambda)}{\lambda^{2}+\lambda \mu+\mu^{2}}
$$

# 23

## Problem 

We have a workshop with 3 machines and 2 repairmen. Each machine works for an exponentially distributed time with a mean of 10 before failing, and the repair time for a machine by a repairman is exponentially distributed with a mean of 8 . We need to determine:
(a) The average number of machines not in use.
(b) The proportion of time both repairmen are busy.

## Solution (a)

$ \begin{array}{l}\pi_{1}=\pi_{0} \dfrac{\lambda_{0}}{\mu_{1}}=\pi_{0} \dfrac{3 \lambda}{\mu}=\pi_{0} \cdot 3 \rho=\pi_{0} \cdot 3 \cdot 0.8=\pi_{0} \cdot \dfrac{12}{5} \\ \pi_{2}=\pi_{1} \dfrac{\lambda_{1}}{\mu_{2}}=\pi_{1} \dfrac{2 \lambda}{2 \mu}=\pi_{1} \cdot \rho=\pi_{0} \cdot \dfrac{12}{5} \cdot 0.8=\pi_{0} \cdot \dfrac{12}{5} \cdot \dfrac{4}{5}=\pi_{0} \cdot \dfrac{48}{25} \\ \pi_{3}=\pi_{2} \dfrac{\lambda_{2}}{\mu_{3}}=\pi_{2} \dfrac{\lambda}{2 \mu}=\pi_{2} \cdot \dfrac{\rho}{2}=\pi_{0} \cdot \dfrac{48}{25} \cdot \dfrac{0.8}{2}=\pi_{0} \cdot \dfrac{48}{25} \cdot 0.4=\pi_{0} \cdot \dfrac{48}{25} \cdot \dfrac{2}{5}=\pi_{0} \cdot \dfrac{96}{125}\end{array} $

$ \begin{array}{l}E[n]=0 \cdot \pi_{0}+1 \cdot \pi_{1}+2 \cdot \pi_{2}+3 \cdot \pi_{3}=\pi_{1}+2 \pi_{2}+3 \pi_{3} \\ E[n]=\dfrac{300}{761}+2 \cdot \dfrac{240}{761}+3 \cdot \dfrac{96}{761}=\dfrac{300}{761}+\dfrac{480}{761}+\dfrac{288}{761}=\dfrac{300+480+288}{761}=\dfrac{1068}{761}\end{array} $

## Solution (b)

$ \pi_{2}+\pi_{3}=\dfrac{240}{761}+\dfrac{96}{761}=\dfrac{240+96}{761}=\dfrac{336}{761} $

# 24

## Problem 



We're dealing with a scenario where taxis and customers arrive at a station following Poisson processes, with rates of 1 taxi per minute and 2 customers per minute, respectively. Taxis are patient-they'll wait no matter how many pile up-but customers are not; if they arrive and find no taxi, they leave immediately. Our mission is to find:
(a) The average number of taxis waiting.
(b) The proportion of customers who get a taxi.



## Solution (a)

- $ \pi_{1}=\dfrac{1}{2} \pi_{0} $
- $ \pi_{2}=\dfrac{1}{2} \pi_{1}=\left(\dfrac{1}{2}\right)^{2} \pi_{0} $
- $ \pi_{3}=\dfrac{1}{2} \pi_{2}=\left(\dfrac{1}{2}\right)^{3} \pi_{0} $

The average number of taxis waiting is the expected value:
$$
E[n]=\sum_{n=0}^{\infty} n \pi_{n}=\sum_{n=1}^{\infty} n \cdot \dfrac{1}{2^{n+1}}
$$
(Note: when $ n=0 $, the term is 0 , so we start at $ n=1 $.)
Rewrite the sum:
$$
E[n]=\sum_{n=1}^{\infty} n \cdot \dfrac{1}{2} \cdot\left(\dfrac{1}{2}\right)^{n}=\dfrac{1}{2} \sum_{n=1}^{\infty} n\left(\dfrac{1}{2}\right)^{n}
$$

For a series $ \sum_{n=1}^{\infty} n x^{n} $, where $ |x|<1 $ :
$$
\sum_{n=1}^{\infty} n x^{n}=\dfrac{x}{(1-x)^{2}}
$$

With $ x=\dfrac{1}{2} $ :
$$
\sum_{n=1}^{\infty} n\left(\dfrac{1}{2}\right)^{n}=\dfrac{\dfrac{1}{2}}{\left(1-\dfrac{1}{2}\right)^{2}}=\dfrac{\dfrac{1}{2}}{\left(\dfrac{1}{2}\right)^{2}}=\dfrac{\dfrac{1}{2}}{\dfrac{1}{4}}=2
$$

So:
$$
E[n]=\dfrac{1}{2} \cdot 2=1
$$

## Solution (b)

$ P( $ customer gets a taxi $ )=P(n \geq 1)=1-P(n=0)=1-\pi_{0}=1-\dfrac{1}{2}=\dfrac{1}{2} $