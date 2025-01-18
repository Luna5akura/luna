# Preliminaries

## Problem setup

### Data generation

#### (1)

$\mathbf{F O}(\boldsymbol{\theta}, \mathbf{u}): \min_{\mathbf x\in\mathcal X(\mathbb u)} f(\boldsymbol{\theta}, \mathbf{x})$

- $\mathbb x\in\mathbb R^n$
- $\mathcal X(\mathbf u)$ : feasible region
- $\mathbf u\in\mathbb R^m $ : exogenous parameters
- $f : \mathbb R^{n\times d }\to\mathbb R $ : objective function
- $\mathbf u $ distributed according to $\mathbb P_{\mathbf  u }$ supported on $\mathcal  U $

**There exists:**

$\boldsymbol \theta ^*$ unknown to the DM(Decision maker)

**DM obtains:**

$\hat{\mathbb  x}$ : decision
- by solving: $\mathbf{F O}(\hat {\boldsymbol{\theta}}, \mathbf{u})$
- $\hat{\boldsymbol \theta }$: noisy perception of $\boldsymbol \theta ^*$
  - $\mathbb P_{\boldsymbol \theta }$ : the distribution of of $\hat{\boldsymbol \theta }$ : unknown
  - $\boldsymbol \Theta \subset \mathbb R^d$: support set of $\mathbb P_{\boldsymbol \theta }$, bounded
    - $\boldsymbol \theta ^*\in\boldsymbol \Theta $
  - $\mathbb P_{(\boldsymbol \theta ,\mathbf u)}$: joint distribution of $\hat{\boldsymbol \theta} ,\mathbf u $ 
- $\tilde {\mathbf x} : \boldsymbol \Theta \times\mathcal U \to\mathbb R^n $
: oracle, returns an optimal solution to $\mathbf  {FO}$
  - $\mathcal X^{\text{OPT}}(\boldsymbol \theta ,\mathbf u):=\argmin \{f(\boldsymbol \theta ,\mathbf x)\mid \mathbf x\in\mathcal X(\mathbb u)\}$ : solutions drawn uniformly from

### Objective function

$f$ is linear in $\boldsymbol \theta  $ and convec in $\mathbf x $

$f(\boldsymbol \theta ,\mathbf x) = \sum_{i\in[d]}\theta _i f_i (\mathbb x)$
- $f_i : \mathbb R^n \to\mathbb R$ for all $i\in[d]$ : convex basis functions
  - i.e.: $f(\boldsymbol{\theta}, \mathbf{x})=\boldsymbol{\theta}^{\top} \mathbf{x}$
- $\mathbf {FO}$ with it -> multi-objective optimization model

### Learning task

$\mathcal  D = \{\hat{\mathbf x_k},\mathbf u_k\}^N_{k=1}$ : decision-exogenous parameter pairs
- $N$: number

Aim: find

$\bar{\mathbf x}: \mathcal U\to\mathbb R^n$: decision policy, to suggest future $\mathbf u$
- $\bar{\mathbf x}(\mathbb u) \in\mathcal X(\mathbf u)$ for any $\mathbf u\in\mathcal U$: require

### Assumptions

#### Assumption 1 (I.I.D. Samples)

> The dataset $\mathcal  D$ is generated using : 
> $\hat{\mathbf x_k} := \tilde {\mathbf x}(\hat{\boldsymbol \theta _k},\mathbf u_k)$ 
> - $(\hat{\boldsymbol \theta _k}, \mathbf u_k)$ : i.i.d. samples from $\mathbb P _{(\boldsymbol \theta , \mathbf u)}$ for all $k\in[N]$ 




#### Assumption 2 (Bounded Inverse Feasible Set)

#### (2)
> There exists a constant $ \eta \in \mathbb{R}_{+} $ such that, for any $ \boldsymbol{\theta}, \boldsymbol{\theta}^{\prime} \in \boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) $, for some $ \hat{\mathbf{x}} \in \mathcal{X}(\mathbf{u}) $ and $ \mathbf{u} \in \mathcal{U} $: 
>  $ \left\|\boldsymbol{\theta}-\boldsymbol{\theta}^{\prime}\right\|_{2} \leq \eta $,
> -  $\Theta^{\mathrm{OPT}}(\mathbf{x}, \mathbf{u}):=\left\{\boldsymbol{\theta} \in \mathbb{R}^{d} \mid \mathbf{x} \in \mathcal{X}^{\mathrm{OPT}}(\boldsymbol{\theta}, \mathbf{u}),\|\boldsymbol{\theta}\|_{2}=1\right\}$

#### Assumption 3 (Bounded Divergence)

> There exists a constant $ \sigma \in \mathbb{R}_{+} $such that :
> $ \left\|\mathbb{E}(\hat{\boldsymbol{\theta}})-\boldsymbol{\theta}^{*}\right\|_{2} \leq \sigma $.

### Evaluation Metrics

#### Definition 1

#### (3)

>  $$ \operatorname{AOG}(\overline{\mathbf{x}}):=\mathbb{E}\left[f\left(\boldsymbol{\theta}^{*}, \overline{\mathbf{x}}(\mathbf{u})\right)-f\left(\boldsymbol{\theta}^{*}, \tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{*}, \mathbf{u}\right)\right)\right] $$ : The actual optimality gap $ (A O G) $ of a decision policy $ \overline{\mathbf{x}} $
> - $\mathbf u, \bar{\mathbf x}$ is random
>
> 

#### Definition 2

#### (4)

> $$\operatorname{POG}(\overline{\mathbf{x}}):=\mathbb{E}[f(\hat{\boldsymbol{\theta}}, \overline{\mathbf{x}}(\mathbf{u}))-f(\hat{\boldsymbol{\theta}}, \tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}))]$$ : The perceived optimality gap $ (P O G) $ of a decision policy $ \overline{\mathbf{x}} $
> - $\hat{\boldsymbol \theta }, \mathbf u, \bar{\mathbf x}$ is random

## Note 1

**An Example for Model, Assumption, Defninition:**

> A investment is needed, allocate money between $n$ assets.

- $\mathbf x$ : weight for every portfolio
- $\mathbf u $: market condition (inflation, interest, etc.)
- $\boldsymbol{\theta}^*$: true assets return 
- $\hat{\boldsymbol{\theta}}$: estimated assets return 
- $f(\boldsymbol{\theta}, \mathbf{x})$ the return with the given weight and return
- $\mathcal{X}(\mathbf{u})$ the feasible weight under the given market condition

> To get the data, every month:

- $\mathbf{u}_k$: observe the market
- $\hat{\boldsymbol{\theta}}_k$: estimate the return 
- $\hat{\mathbf{x}}_k$: make the decision

> Assumptions

- 1: Every month is i.i.d.
- 2: If $\mathbf x$(weight) is observed, the difference between the $\boldsymbol \theta $(return) is not big 
- 3: the average $\hat{\boldsymbol \theta }$ (estimated return) is not far from $\boldsymbol \theta ^*$(real return)

> Definitions

- 1: AOG: Real return under current decision - real return under best decision
- 2: POG: Estimated return under current decision - estimated return under best decision

## An Inverse Optimization Pipeline

Finding $\bar{\mathbf x}$ is challenging because:

- $\bar{\mathbf x}(\mathbf u)$ to be feasible to $\mathbf {FO}$, involve more constraints, we can't use supervised learning that predict $\hat{\mathbf x}$ on $\mathbf u $
- We do not observe $\boldsymbol \theta ^*$ or $\hat {\boldsymbol \theta }$, we cant use classic ML technique.
- AOG and POG may not connected.

Classic IO pipeline:

Obtain:

$\bar{\boldsymbol \theta }$: point decision 

Employ:

$\bar{\mathbf x_{IO}} (\mathbf u):= \tilde {\mathbf x}(\bar{\boldsymbol \theta },\mathbb u)$ 

We can solve:

#### (5)

$ \mathbf{I O}(\mathcal{D}): \underset{\boldsymbol{\theta} \in \boldsymbol{\Theta}}{\operatorname{min}} \dfrac{1}{N} \sum_{k \in[N]} \ell\left(\hat{\mathbf{x}}_{k}, \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}, \mathbf{u}_{k}\right)\right) $
- $\ell $: non-negative loss function
  - return $0$ when $\hat{\mathbf x_k} \in\mathcal X^{OPT }(\boldsymbol \theta ,\mathbf u_k ) $

### Definition 3

#### (6)

> The sub-optimality loss of $ \boldsymbol{\theta} $ is given by
$$
\ell_{S}\left(\hat{\mathbf{x}}, \mathcal{X}^{O P T}(\boldsymbol{\theta}, \mathbf{u})\right):=\max _{\mathbf{x} \in \mathcal{X}^{OPT}(\boldsymbol \theta, \mathbf{u})} f(\boldsymbol{\theta}, \hat{\mathbf{x}})-f(\boldsymbol{\theta}, \mathbf{x})
$$

**However, it can't be used here, because it will cause arbitrarily large AOG and POG**

### Example 1

Let : 

$\mathbf {FO}(\theta, u)$ be: 

#### (7)

$$
\begin{aligned} 
\text{min } & \theta_{1} x_{1}+\theta_{2} x_{2} \\ 
\text { s.t. } & x_{1}+u x_{2} \geq u \\ 
& 0 \leq x_{1} \leq u \\ 
& 0 \leq x_{2} \leq 2
\end{aligned}
$$

- $\boldsymbol \theta ^* = (\cos\dfrac{\pi}{4},\sin\dfrac{\pi}{4})$
- $\mathcal U = \{u\}$
  - $u > 1$, real constant
- $\mathcal D = \{\hat{\mathbf x_k}, u\}^N_{k=1} $
  - $\hat{\mathbf x_k} = \tilde {\mathbf x}(\hat{\boldsymbol \theta _k},u)$
    - $\hat{\boldsymbol \theta _k}$ uniformly, independently drawn from $\boldsymbol \Theta = \{(\cos\delta ,\sin\delta )\mid \delta \in(0,\dfrac{\pi}{2})\}$ for all $k\in[N]$

### Lemma 1
> $ \overline{\boldsymbol{\theta}}_{N} $ : an optimal solution to $ \mathbf{I O}(\mathcal{D}) $ with the sub-optimality loss [(6)](#6), we have:
>  $ \mathbb{P}\left(\overline{\boldsymbol{\theta}}_{N}=\boldsymbol{\theta}_{u}\right) \rightarrow 1 $ as $ N \rightarrow \infty $
> - $ \boldsymbol{\theta}_{u}:=\left(1 / \sqrt{1+u^{2}}, u / \sqrt{1+u^{2}}\right) $.

[Skip the proof](#end-proof-of-lemma-1)

#### Proof of Lemma 1

Let : $\delta_u := \arccos(\dfrac{1}{\sqrt{1+u^2}})$
- $\cos\delta_u = \dfrac{1}{\sqrt{1+u^2}}, \sin\delta_u = \dfrac{u}{\sqrt{1+u^2}}$ 
  - when $ \hat{\boldsymbol{\theta}}_{k} \in \boldsymbol{\Theta}_{1}:= $ $ \left\{(\cos \delta, \sin \delta) \mid \delta \in\left(0, \delta_{u}\right]\right\} $, $ \hat{\mathbf{x}}_{k}=\tilde{\mathbf{x}}\left(\hat{\boldsymbol{\theta}}_{k}, u\right)=(0,1) $ almost surely. (Notice the slope)
  - When $ \hat{\boldsymbol{\theta}}_{k} \in \boldsymbol{\Theta}_{2}:= $ $ \left\{(\cos \delta, \sin \delta) \mid \delta \in\left(\delta_{u}, \pi / 2\right)\right\} $, $ \hat{\mathbf{x}}_{k}=\tilde{\mathbf{x}}\left(\hat{\boldsymbol{\theta}}_{k}, u\right)=(u, 0) $ almost surely. (Notice the slope)

Notice:

$\hat{\boldsymbol{\theta}} \in \boldsymbol{\Theta}=\boldsymbol{\Theta}_{1} \cup \boldsymbol{\Theta}_{2}$

Then:

##### (15)

$ \hat{\mathbf{x}}_{k}=\left\{\begin{array}{l}(0,1), \text { w.p. } 2 \delta_{u} / \pi \\ (u, 0), \text { w.p. }\left(\pi-2 \delta_{u}\right) / \pi\end{array}\right. $

$N_1$ : the numbers of $(0,1)$ in $\mathcal D$

$N_1$ : the numbers of $(u,0)$ in $\mathcal D$
- $\mathcal D = \{\mathbf u_k,\hat{\mathbb x_k}\}_{k\in[N]}$

For $\mathbf {IO}(\mathcal D)$ :

##### (16)

$ \overline{\boldsymbol{\theta}}_{N}:=\underset{\boldsymbol{\theta} \in \boldsymbol{\Theta}}{\operatorname{argmin}} \frac{N_{1}}{N} l_{1}(\boldsymbol{\theta})+\frac{N_{2}}{N} l_{2}(\boldsymbol{\theta}) $


##### (17)
- $ l_{1}(\boldsymbol{\theta})=\left\{\begin{array}{ll}0, & \text { if } \boldsymbol{\theta} \in \boldsymbol{\Theta}_{1} \\ \theta_{2}-u \theta_{1}, & \text { if } \boldsymbol{\theta} \in \boldsymbol{\Theta}_{2}\end{array}\right. $

##### (18)
- $ l_{2}(\boldsymbol{\theta})=\left\{\begin{array}{ll}u \theta_{1}-\theta_{2}, & \text { if } \boldsymbol{\theta} \in \boldsymbol{\Theta}_{1}, \\ 0, & \text { if } \boldsymbol{\theta} \in \boldsymbol{\Theta}_{2} .\end{array}\right. $

Now discuss:

- When $N_1 > 0, N_2 > 0$ The minimum is $0$, occurs at $\boldsymbol \theta = (\cos\theta_u,\sin\delta_u)$
- $N_2 = 0$ : The minimum is $0$, occurs at $\boldsymbol \theta\in\boldsymbol \Theta _1$
- $N_1 = 0$ : The minimum is $0$, occurs at $\boldsymbol \theta \in\boldsymbol \Theta _2$

Then :


##### (19)

$ \mathbb{P}\left(N_{1} N_{2}>0\right) \leq \mathbb{P}\left(\overline{\boldsymbol{\theta}}_{N}=\left(\cos \delta_{u}, \sin \delta_{u}\right)\right) \leq 1 $

With the probability distribution in [(15)](#15), and $\mathcal D$ is generated i.i.d. from $\mathbb P_\theta $:

##### (20)

$ \mathbb{P}\left(N_{1} N_{2}>0\right)=1-\left(\dfrac{2 \delta_{u}}{\pi}\right)^{N}-\left(1-\dfrac{2 \delta_{u}}{\pi}\right)^{N} $

it converges to $1$ as $N$ goes to infinity

So $ \mathbb{P}\left(\overline{\boldsymbol{\theta}}_{N}=\left(\cos \delta_{u}, \sin \delta_{u}\right)\right) $ converges to 1 as $N $ goes to infinity (Squeeze Theorem)

#### End Proof of Lemma 1

Notice $\boldsymbol \theta ^* \ne \boldsymbol \theta _u$, then AOG and PGO can be arbitrarily large

### Proposition 1

> In Example 1, Let: 
> $ \overline{\mathbf{x}}_{\mathrm{IO}}(u)=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}_{u}, u\right) $. 
> Then:
> For any $ v \in \mathbb{R}_{+} $there exists some $ \bar{u}>1 $ such that: 
> $ \mathrm{AOG}\left(\overline{\mathrm{x}}_{\mathrm{IO}}\right)>v $ and $ \mathrm{POG}\left(\overline{\mathrm{x}}_{\mathrm{IO}}\right)>v $ for any $ u>\bar{u} $

[Skip the proof](#end-proof-for-proposition-1)



#### Proof for Proposition 1

##### Lemma 4

> In Example 1, Let: 
> $ \overline{\mathbf{x}}_{\mathrm{IO}}(u)=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}_{u}, u\right) $. 
> For any $ v \in \mathbb{R}_{+} $there exists some $ \bar{u}>1 $, such that: 
> $ \operatorname{AOG}\left(\overline{\mathrm{x}}_{\mathrm{IO}}\right)>v $ for any $ u>\bar{u}_{A O G} $.

###### Proof for lemma 4

According to the definition of $\bar{\mathbf  x}$, we know that:

$\bar{\mathbf x_{IO}}(u)$ is uniformly drawn from:

###### (21)

$ \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{u}, u\right)=\left\{\left.\left(\frac{u t}{\sqrt{u^{2}+1}}, 1-\frac{t}{\sqrt{u^{2}+1}}\right) \right\rvert\, t \in\left[0, \sqrt{u^{2}+1}\right]\right\} $

Since:

$\boldsymbol \theta ^* = (\cos\dfrac{\pi}{4},\sin\dfrac{\pi}{4})$ : ground-truth
$\mathbf x^* = (0,1)$: true optimal solution

$\tilde f(\boldsymbol \theta ^*,u) = \dfrac{\sqrt 2}{2}$

Then :

###### (22)

$$
\begin{aligned}
&\operatorname{AOG}\left(\overline{\mathrm{x}}_{\mathrm{IO}}\right)\\ 
&=  \mathbb{E}\left[f\left(\boldsymbol{\theta}^{*}, \overline{\mathbf{x}}_{\mathrm{IO}}(\mathbf{u})\right)-f\left(\boldsymbol{\theta}^{*}, \tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{*}, \mathbf{u}\right)\right)\right]  \\
&=\int_{0}^{\sqrt{u^{2}+1}} \frac{\sqrt{2}}{2 \sqrt{u^{2}+1}}\left(\frac{u t}{\sqrt{u^{2}+1}} + 1-\frac{t}{\sqrt{u^{2}+1}}\right) d t-\frac{\sqrt{2}}{2}\\ 
&=\frac{\sqrt{2}(u-1)}{4}
\end{aligned}
$$

Therefore:

For any $v\in\mathbb R_+$, exists:

$\bar{u}_{\mathrm{AOG}} = 2\sqrt 2v + 1$, s.t.:

$\mathrm{AOG} (\bar{\mathbf x}_{\mathrm{IO}}) > v$, for any $u > \bar{u}_{\mathrm{AOG}}$





###### End proof for lemma 4


#### End proof for proposition 1

placeholder

placeholder

placeholder

placeholder

placeholder




