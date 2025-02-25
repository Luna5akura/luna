# Crowdsourcing Exploration 

Suppose in market:

$A, B$: Two providers

$S = \{A,B\}$

$p_i,i\in S$: provider's service quality 

$$
\begin{cases}
1, &w.p.\quad p_i \\ 
0, &w.p.\quad 1-p_i 
\end{cases}
$$: consumer receive reward

$p_i$ is known to designer and consumers
- a common prior belief
- $\text{Beta}\{s_1^i,f_1^i\}, s_1^i,f_1^i\in \mathbb Z_+$

--- 

Progress:

1. at beginning of $t\in T, T= \{ 1, 2, \dots\}$: consumer visit the platform, observe information pretaining to experience of past consumers, choose provider 

2. Complete service, before the end of $t$, report positive or negative 

$x_t = \{x_t^A,x_t^B\}$: information state
- $ x_{t}^{i}=\left\{s_{t}^{i}, f_{t}^{i}\right\} $
- $s_t^i$: accumulated number of successful service outcomes for provider $i$ up to period $t$ 

$Beta(s_t^i,f_t^i)$:Bayesian posterior belief when system state is $x_t$

$ r\left(x_{t}, i\right)=\frac{s_{t}^{i}}{s_{t}^{i}+f_{t}^{i}} $ :  the expected reward of the next customer to use provider $i$

---

History: not observable
- "message policy"

Designer's objective:
- maximize the expected sum of consumers’ discounted rewards over an infinite horizon
- applying a discount factor of $\delta\in [0,1)$

# 4. Analysis Preliminaries

## Equilibrium and Model Dynamics

Two main feature
- messaging policy
- choice strategy

$X\in\mathbb Z_+^4$: possible states of platform 
- s.t. $x_t\in X, \forall t\in T$

$M$: feasible message in period $t$

$g(\cdot)$: messaging policy, $X\to M$

$\mathcal G$: possible polices 

$c_t(\cdot)$: period-$t$ consumer's choice strategy 
- $M\to S$

$S$: service 

$\mathcal C_t$: possible strategies for period-$t$ consumer 

$c(\cdot) :=[c_1(\cdot),c_2(\cdot),\dots]$

--- 

Controlled Markov chain: $g, c$
- $\{(x_t,y_t);t\in T\}$: state-action pair 

$y_t = c_t(g(x_t))$

$r(x_t,i) = \dfrac{s_t^i}{s_t^i+f_t^i}$: reward 

The state in period $t+1$:

$ x_{t+1}^{i}=x_{t}^{i} $ for $ i \neq y_{t}, \quad x_{t+1}^{i}=\left\{\begin{array}{l}\left\{s_{t}^{i}+1, f_{t}^{i}\right\} \text { w.p. } r\left(x_{t}, i\right) \\ \left\{s_{t}^{i}, f_{t}^{i}+1\right\} \text { w.p. } 1-r\left(x_{t}, i\right)\end{array} \quad\right. $ for $ i=y_{t} $.

--- 

Sequence:

2. Consumer observe policy, choose strategy $c_t$ to maximize reward 

period-$t$ to message $m$, $c_t^*(m)$ maximize:

$ E_{x_{t}}\left[r\left(x_{t}, c_{t}\right) \mid g\left(x_{t}\right)=m\right] $
 

1. At beginning, designer commit policy that maximize dscounted rewards. $g^(x_t)$ maximizes:

$ E\left[\sum_{t \in T} \delta^{t-1} r\left(x_{t}, y_{t}\right)\right] $, for $ y_{t}=c_{t}^{*}\left(g\left(x_{t}\right)\right) $

## Incentive-Compatible Recommendation Policies

### Definition 1 (ICRP: Incentive-Compatible Recommendation Policy) 

> A recommendation policy:
>
> #### (1)
>
> $ g\left(x_{t}\right)=\left\{\begin{array}{ll}A & \text { w.p. } \quad q_{x_{t}} \\ B & \text { w.p. } 1-q_{x_{t}}\end{array}\right. $
>
> - $q_{x_t}\in[0,1],\forall x_t\in X$
> - It's incentive-compatible, if:
>   - $c_t^*(g(x_t))=g(x_t),\forall x_t\in X, t\in T$


### Lemma 1

> For any arbitrary messaging policy $g$, there exists an $ICRP$ $g'$ which induces a $DOE$ equilibrium in the game between the designer and the consumers.

---

Examples:

## First Best 

The Gittins index for service $ i $ when in state $ z^{i} $ is denoted by $ G_{i}\left(z^{i}\right) $ and given by

#### (2)

$
G_{i}\left(z^{i}\right)=\sup _{\tau>0} \frac{E\left[\sum_{t=0}^{\tau-1} \delta^{t} r\left(x_{t}^{i}, i\right) \mid x_{0}^{i}=z^{i}\right]}{E\left[\sum_{t=0}^{\tau-1} \delta^{t} \mid x_{0}^{i}=z^{i}\right]},
$

- $\tau$: past-measurable stopping time 
- $r(x_t^i,i)$: instantaneous expected reward of provider $i$ in state $x_t^i$

# 5 Simple Case: Incumbent Provider $B$

Setting:

$A$ quality is ex ante unknown 

$B$ is known 

$Beta(s_1^A,f_1^A)$: $A$'s service 

$r(x_t,A)=\dfrac{s_t^A}{s_t^A+f_t^A}$: reward on sercive $A$ in period $t$

$r_B = r(x_t,B) = p_B$

## 5.1 First Best 

$B$ has constant Gittins index:

$G_B := G_B(x_t) = r_B$

For $A$:

### Lemma 2

> System-optimal provider choices are characterized as follows:
>
> (i) If $ G_{A}\left(x_{1}\right) \leq G_{B} $, then any experimentation with service $ A $ is suboptimal; 
> that is, it is systemoptimal to use service $ B $ in all periods $ t \in T $.
>  
> (ii) If $ G_{A}\left(x_{1}\right)>G_{B} $, then it is system-optimal to experiment with service $ A $ at least once in period $ t=1 $. In any period $ t>1 $, there exists an integer $ s^{*}(t) $ such that if $ s_{t}^{A} \geq s^{*}(t) $ it is system-optimal to continue experimentation with service $ A $ in period $ t $, while if $ s_{t}^{A}<s^{*}(t) $ it is system-optimal to choose service $ B $ in period $ t $ and forever after. The period-t threshold $ s^{*}(t) $ is uniquely defined by:
>
> $ s^{*}(t)=\left\{\min s_{t}^{A}: s_{t}^{A}, f_{t}^{A} \in \mathbb{Z}_{+}^{2},\left(s_{t}^{A}-s_{1}^{A}\right)+\left(f_{t}^{A}-f_{1}^{A}\right)=t-1, G_{A}\left(x_{t}\right)>G_{B}\right\} $

## 5.2 The Two Extreme Modes of Information Provision 

- NI: No information 
- FI: Full information 

### Lemma 3

> Consumers' choice under FI:
>
> (i) If $ r\left(x_{1}, A\right) \leq r_{B} $, then consumers choose service $ B $ in all periods $ t \in T $.
> 
> (ii) If $ r\left(x_{1}, A\right)>r_{B} $, then the period-1 consumer chooses service $ A $. In any period $ t>1 $, there exists an integer $ \bar{s}(t) $ such that if $ s_{t}^{A} \geq \bar{s}(t) $ the period- $ t $ consumer chooses service $ A $, while if $ s_{t}^{A}<\bar{s}(t) $ service $ B $ is chosen in period $ t $ and forever after. The period-t threshold $ \bar{s}(t) $ is uniquely defined by
> 
> $\bar{s}(t)=\left\{\min s_{t}^{A}: s_{t}^{A}, f_{t}^{A} \in \mathbb{Z}_{+}^{2},\left(s_{t}^{A}-s_{1}^{A}\right)+\left(f_{t}^{A}-f_{1}^{A}\right)=t-1, r\left(x_{t}, A\right)>r_{B}\right\}$

### Lemma 4

> The thresholds $ s^{*}(t) $ and $ \bar{s}(t) $ satisfy $ s^{*}(t) \leq \bar{s}(t) $

### Example 1

> Assume $A$ is $Beta(1,1)$
> $B$ is $0.27$
> $\delta = 0.9$
> After $2$ negative in $A$, everyone choose $B$

---

### Proposition 1

> Denote by $ \pi^{N I} $ and $ \pi^{F I} $ the platform's expected payoff under policies belonging to the NI and FI regimes, respectively. Then
>
> $\pi^{N I} \leq \pi^{F I} \leq \pi^{*}$
>
> where $ \pi^{*} $ denotes the platform's first-best expected payoff.

## 5.3 Strategic Information Provision

### Proposition 2

> For initial system state $ x_{1} $, let $ g^{*} $ be an optimal messaging policy and denote by $ \pi\left(g^{*}\right) $ the platform's expected payoff under policy $ g^{*} $. Then $ \pi\left(g^{*}\right)=\pi^{*} $, unless both $ r\left(x_{1}, A\right) \leq r_{B} $ and $ G_{A}\left(x_{1}\right)>G_{B} $ hold.

Table 1
$
\begin{array}{cccc}
x_{4}^{A}=\left(s_{4}^{A}, f_{4}^{A}\right) & P\left(x_{4}^{A}\right) & \text{consumer prefers} & \text{designer prefers} \\
\hline \hline
(4,1) & 0.25 & \mathrm{A}\left(r_{A}=0.8\right) & \mathrm{A}\left(G_{A}=0.87\right) \\
(3,2) & 0.25 & \mathrm{A}\left(r_{A}=0.6\right) & \mathrm{A}\left(G_{A}=0.71\right) \\
(2,3) & 0.25 & \mathrm{A}\left(r_{A}=0.4\right) & \mathrm{A}\left(G_{A}=0.52\right) \\
(1,4) & 0.25 & \mathrm{B}\left(r_{A}=0.2\right) & \mathrm{A}\left(G_{A}=0.30\right)
\end{array}
$

How to make $(1,4)$ customer choose $A$?

$
(4,1)\} m_{1} \\ (3,2)\} m_{2}
$

$ \left.\begin{array}{l} (2,3) \\ (1,4)\end{array}\right\} m_{3} 
$

Then for $m_3$, $r = \dfrac{1}{2}\cdot 0.4 + \dfrac{1}{2}\cdot 0.2 =0.3 > 0.27$ 

## 5.4 Comments 

### Commitment vs. Cheap Talk 

When talk with period-$t$ customer:

- if recommend $B$:
  - $G_B>G_A$
  - $r_B>r_A$

### Information vs. Payments

Sometimes only information can't achieve **First Best **

# 6 General Case 

Both is ex ante unknown 

$r(x_1, A)\ge r(x_1, B)$

### Proposition 3

> For initial system state $ x_{1} $, let $ g^{*} $ be an optimal messaging policy. Then $ \pi\left(g^{*}\right)= $ $ \pi^{*} $ if and only if there exists an ICRP which recommends service $ B $ whenever $ G_{B}\left(x_{t}\right)>G_{A}\left(x_{t}\right) $.

### Example 2

> $A$: $Beta(10,2)$
> $B$: $Beta(2,2)$
> $\delta = 0.99$
>
> Notice: if $A$ fails in $t = 1 $ to $t=4$, consumer will still choose $A$, even if $B$ may be better

## 6.1 Optimal ICRPs

We need to choose best $q_{x_t}$ such that:


$ g\left(x_{t}\right)=\left\{\begin{array}{ll}A & \text { w.p. } \quad q_{x_{t}} \\ B & \text { w.p. } 1-q_{x_{t}}\end{array}\right. $

Then we need:

#### (4)

$ \begin{array}{r}\qquad \max _{g\left(x_{t}\right)} E\left[\sum_{t \in T} \delta^{t-1} r\left(x_{t}, g\left(x_{t}\right)\right)\right] \\ \text { s.t. } E_{x_{t}}\left[r\left(x_{t}, A\right) \mid g\left(x_{t}\right)=A\right] \geq E_{x_{t}}\left[r\left(x_{t}, B\right) \mid g\left(x_{t}\right)=A\right], \quad \forall t \in T, \\ E_{x_{t}}\left[r\left(x_{t}, B\right) \mid g\left(x_{t}\right)=B\right] \geq E_{x_{t}}\left[r\left(x_{t}, A\right) \mid g\left(x_{t}\right)=B\right], \quad \forall t \in T,\end{array} $

- every $t$ is IC 

We introduce some notation to deal with it:

$X_t$:  the set of states that are reachable from the initial state $x_1$ in period $t$

$ X=\bigcup_{t \in T} X_{t} $: total state space 

$\mathcal P_{kiz}$: transition probability from $k$ through $i$ to $z$

$\Delta_a$: Dirac delta function concentrated at $a$

### Proposition 4

> The optimal ICRP is given by:
>
> $ q_{k}^{*}=\frac{\rho(k, A)}{\sum_{i \in S} \rho(k, i)} $
>
> where $\rho(k,i)$ solves:
>
> $ \begin{array}{rlr}\max _{\rho} & \sum_{k \in X} \sum_{i \in S} \rho(k, i) r(k, i) & \\ \text { s.t. } & \sum_{k \in X_{t}} \rho(k, B)[r(k, B)-r(k, A)] \geq 0, & \forall t \in T, \\ & \sum_{k \in X} \sum_{i \in S} \rho(k, i)\left(\Delta_{z}(k)-\delta \mathcal{P}_{k i z}\right)=\Delta_{x_{1}}(z), & \forall z \in X, \\ & \rho(k, i) \geq 0, & \forall k \in X, i \in S .\end{array} $

Note:

- $\rho$: the flow weight
  - constrain 1: make sure when recommend $B$, it's better 
  - constrain 2: make sure the flow is balance 
  - constrain 3: the flow is non-negative 

## 6.2 The Value of Information Obfuscation

$p_{x_t}$: the probability that state in period $t$ is $x_t$

First, we solve period-$t$ LP:

#### (6)

$ \begin{array}{rlr}\max _{\rho} & \sum_{k \in X} \sum_{i \in S} \rho(k, i) r(k, i) & \\ \text { s.t. } & \sum_{k \in X_{t}} \rho(k, B)[r(k, B)-r(k, A)] \geq 0, & \forall t \in T, \\ & \sum_{k \in X} \sum_{i \in S} \rho(k, i)\left(\Delta_{z}(k)-\delta \mathcal{P}_{k i z}\right)=\Delta_{x_{1}}(z), & \forall z \in X, \\ & \rho(k, i) \geq 0, & \forall k \in X, i \in S .\end{array} $

Then, store $q_{x_t}$
- designer’s recommendation policy for period $t$

Then, use $p_{x_t}$ to calculate $p_{x_{t+1}}$

Until: $t=K$ is reached 

# 7 Extensions 

## 7.1 Imperfect Knowledge of Consumers' Arrival Times 

### Proposition 5

> Let $g\ g(^*)$  denote an ICRP (the optimal ICRP) when consumers have perfect knowledge of their arrival times. Then:
>
> (i) $ g $ remains an ICRP under any arbitrary belief held by consumers over their arrival times.
> 
> (ii) If $ v^{*} $ is an optimal ICRP under a specific set of consumer beliefs, we have $ \pi\left(v^{*}\right) \geq \pi\left(g^{*}\right) $.

## 7.2 Combining Information with Monetary Subsidies

The designer can choose for each message $ m \in M $ used in period $ t $ an accompanying subsidy plan $ \left\{\kappa_{t}^{i}(m)\right\}_{i \in S} $, where the subsidy $ \kappa_{t}^{i}(m) \geq 0 $ can be claimed by the consumer if she chooses to use provider $ i $.

### Definition 2 (ICRSP: Incentive-Compatible Recommendation-with-Subsidies Policy)

> A recommendation-with-subsidies policy is a messaging-with-subsidies policy defined as:
> 
> #### (7)
> 
> $ v\left(x_{t}\right)=\left\{\begin{array}{ll}A,\left\{\kappa_{t}^{i}(A)\right\}_{i \in S} & \text { w.p. } \quad q_{x_{t}} \\ B,\left\{\kappa_{t}^{i}(B)\right\}_{i \in S} & \text { w.p. } 1-q_{x_{t}}\end{array}\right. $
>
> where $ q_{x_{t}} \in[0,1] $ for all $ x_{t} \in X $, and $ \kappa_{t}^{i}(j)=0 $ for all $ i, j \in S, i \neq j $. A recommendation-withsubsidies policy is said to be incentive-compatible if for all $ x_{t} \in X $, each period- $ t $ consumer follows the recommendation she receives.

#### Proposition 6

> For any arbitrary messaging-with-subsidies policy $ v $, there exists an ICRSP $ v^{\prime} $ which achieves a (weakly) higher expected platform payoff.

### Example 3

> $ A $ is $ \operatorname{Beta}(5,5) $
> $ B $ has a known quality of $ r_{B}=0.53 $ 
> 
> the ex ante preferable provider for the consumers is $ B $. 
> 
> Consider the minimum total subsidies required to induce exploration of provider $ A $ in the first two periods under a FI policy versus under an ICRSP. 
> 
> In the first period, for the customer to choose provider $ A $, both policies must offer a minimum subsidy of $ \kappa_{1}^{A}=p_{B}-r\left(x_{1}, A\right)=0.53-0.5=0.03 $ (i.e., assuming $ \kappa_{1}^{B}=0 $ ). 
> 
> However, in the second-period: 
> 
> (i) Under FI, the state $ x_{2} $ is disclosed to the period- 2 consumer and a minimum subsidy $ \kappa_{2}^{A}\left(x_{2}\right)= $ $ \max \left\{p_{B}-r\left(x_{2}, A\right), 0\right\} $ must be offered in order for the consumer to choose provider $ A $. 
> 
> If the period- 1 trial was successful (occurs w.p. 0.5 ), then $ \kappa_{2}^{A}=\max \{0.53-0.55,0\}=0 $. If the period-1 trial was unsuccessful (occurs w.p. 0.5), then $ \kappa_{2}^{A}=\max \{0.53-0.45,0\}=0.08 $. 
> 
> Thus, the ex ante expected period- 2 subsidy is $ E\left[\kappa_{2}^{A}\left(x_{2}\right)\right]=0.5 \times 0.08=0.04 $. 
> 
> (ii) Under an ICRSP, the designer in period 2 recommends provider $ A $ irrespective of the period-1 outcome. 
> 
> For this recommendation to be incentive-compatible, it must be accompanied by a subsidy of $ \kappa_{2}^{A}(A)=\max \left\{p_{B}-E\left[r\left(x_{2}, A\right)\right], 0\right\}=\max \{0.53-(0.5 \times 0.55+0.5 \times 0.45), 0\}=0.03 $. 
> 
> Thus, in the above example, the ICRSP achieves the same consumer actions in the first and second periods as a FI-with-subsidies policy, but at a $ 25 \% $ lower subsidy cost.

