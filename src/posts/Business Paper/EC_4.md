---
title: Business Paper - Week 4
date: 2025-9-10 
---

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

- $\mathbf x\in\mathbb R^n$ : weight for $n$ portfolio
- $\mathbf u \in\mathbb R^m$: market condition (inflation, interest, etc.)
- $\boldsymbol{\theta}^*$: true assets return 
- $\hat{\boldsymbol{\theta}}$: estimated assets return 
- $f(\boldsymbol{\theta}, \mathbf{x})$ the return with the given weight and return (e.g.$\boldsymbol \theta ^T \mathbb x$)
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
>  $ \mathbb{P}\left(\overline{\boldsymbol{\theta}}_{N}=\boldsymbol{\theta}_{u}\right) \rightarrow $ $ as $ N \rightarrow \infty $
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

##### ($5)

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


##### ($9)

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

$\mathrm{AOG} (\bar{\mathbf x}_{\mathrm{IO}}) > v1, for any 1u > \bar{u}_{\mathrm{AOG}}$


###### End proof for lemma 4

##### Lemma 5

> In Example 1, let:  
> $ \overline{\mathbf{x}}_{\mathrm{IO}}(u)=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}_{u}, u\right) $. 
> for any $ v \in \mathbb{R}_{+} $there exists some $ \bar{u}_{P O G}>1 $ such that :
> $ \mathrm{POG}\left(\overline{\mathrm{x}}_{\mathrm{IO}}\right)>v $ for any $ u>\bar{u}_{\text {POG }} $.

[Skip the proof](#end-proof-for-lemma-5)

###### Proof for lemma 5

According to the definition of $\tilde {\mathbf x}$, $\bar{\mathbf x}_{\mathrm{IO}(u)}$ is uniformly drawn from:

###### (23)

$\mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{u}, u\right)=\left\{\left.\left(\frac{u t}{\sqrt{u^{2}+1}}, 1-\frac{t}{\sqrt{u^{2}+1}}\right) \right \rvert\, t \in\left[0, \sqrt{u^{2}+1}\right]\right\} $

Similarly, we have:

When $\hat{\boldsymbol{\theta}} \in \boldsymbol{\Theta}_{1}:=\left\{(\cos \delta, \sin \delta) \mid \delta \in\left(0, \delta_{u}\right]\right\}$, we have: 

$\hat{\mathbf{x}}_{k}=\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, u)=(0,1)$,  with $\tilde{f}(\hat{\boldsymbol{\theta}}, u)=\hat{\theta}_{2}$ almost surely; 

When $\hat{\boldsymbol{\theta}} \in \Theta_{2}:=\left\{(\cos \delta, \sin \delta) \mid \delta \in\left(\delta_{u}, \pi / 2\right\}\right.$, we have : 

$\hat{\mathbf{x}}_{k}=\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, u)=(u, 0)$ with $\tilde{f}(\hat{\boldsymbol{\theta}}, u)=u \hat{\theta}_{1}$ almost surely. 

Since the optimal solution drawn from $\mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{u}, u\right)$ is independent of the DM's perception $\hat{\boldsymbol{\theta}}$, we have:

$$
\begin{aligned}
&\operatorname{POG}(\overline{\mathbf{x}}_{\mathrm{IO}})\\ 
&=\mathbb{E}[f(\hat{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{IO}}(\mathbf{u}))-f(\hat{\boldsymbol{\theta}}, \tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}))]\\ 
&= \int_{0}^{\delta_{u}} \int_{0}^{\sqrt{u^{2}+1}} \frac{1}{\sqrt{u^{2}+1}}\left[\frac{u t}{\sqrt{u^{2}+1}} \cos \delta+\left(1-\frac{t}{\sqrt{u^{2}+1}}\right) \sin \delta-\sin \delta\right] d t d \delta \\ 
& +\int_{\delta_{u}}^{\pi / 2} \int_{0}^{\sqrt{u^{2}+1}} \frac{1}{\sqrt{u^{2}+1}}\left[\frac{u t}{\sqrt{u^{2}+1}} \cos \delta+\left(1-\frac{t}{\sqrt{u^{2}+1}}\right) \sin \delta-u \cos \delta\right] d t d \delta \\ 
&= \frac{1}{2} \int_{0}^{\delta_{u}}(u \cos \delta-\sin \delta) d \delta+\frac{1}{2} \int_{\delta_{u}}^{\pi / 2}(-u \cos \delta+\sin \delta) d \delta \\ 
&= \sqrt{1+u^{2}}-\frac{u+1}{2} . \\ 
&> \frac{u-1}{2} \text{ (notice: } \sqrt{1+u^2}>u\text{)}
\end{aligned}
$$

Therefore, for any $\in\mathbb R_+$, exists:

$\bar{u}_{\mathrm{POG}}=2 v+1$, such that : 

$\operatorname{POG}\left(\overline{\mathbf{x}}_{\mathrm{IO}}\right)>v$ , for any $u>\bar{u}_{\mathrm{POG}}$.

###### End proof for lemma 5

#### End proof for proposition 1

## Robustify the Inverse Optimization Pipeline 

- not solve $\mathbf{FO}$ with some estimated parameters $\bar{\boldsymbol \theta}$ 

- solve **robust forward optimization problem** with an uncertainty set around $\bar{\boldsymbol \theta }$ :

#### (8)

$\boldsymbol{\mathbf  { R F O }}(\mathcal{C}(\overline{\boldsymbol{\theta}}, \boldsymbol{\alpha}), \mathbf{u}): \underset{\mathbf{x} \in \mathcal{X}(\mathbf{u})}{\operatorname{min}} \underset{\boldsymbol{\theta} \in \mathcal{C}(\overline{\boldsymbol{\theta}}, \boldsymbol{\alpha})}{\operatorname{max}} f(\boldsymbol{\theta}, \mathbf{x})$
- $\mathcal C $: uncertainty set
  - $\bar{\boldsymbol \theta }$: center
  - $\boldsymbol \alpha $ : parameters that control the shape / size
- Since $f$ is linear in $\boldsymbol \theta $, then:

#### (9)
- $\mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha):=\left\{\boldsymbol{\theta} \in \mathbb{R}^{d} \mid\|\boldsymbol{\theta}\|_{2}=1, \boldsymbol{\theta}^{\top} \overline{\boldsymbol{\theta}} \geq \cos \alpha\right\}$
  - $\alpha\in(0,\pi)$

### Remark 1

TODO

### Lemma 2

> In Example 1, let:  
> $\overline{\mathbf{x}}_{\mathrm{CIO}}(u)$ be an optimal solution to $\mathbf{R F O}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}_{N}, \alpha\right)\right. , u)$
> - $\overline{\boldsymbol{\theta}}_{N}$ is an optimal solution to $\mathbf{I O}(\mathcal{D})$ with the sub-optimality loss [(6)](#6).
> 
> When $\alpha \in(0, \pi / 2)$, we have :
> $\mathbb{P}\left[\mathrm{AOG}\left(\mathbf{x}_{\mathrm{CIO}}\right)=0\right] \rightarrow 1$ and $\mathbb{P}\left[\mathrm{POG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right)<\pi / 2 \sqrt{2}\right] \rightarrow 1$ as $N \rightarrow \infty$.

#### Proof of lemma 2

TODO

# Conformal Inverse Optimization

## Learning an Uncertainty Set

### Data split

Split $\mathcal D$ into:

$\mathcal D_{\text{train}}, \mathcal D _{\text{val}}$, 

Let :

$\mathcal{K}_{\text {train }}$ and $\mathcal{K}_{\text {val }}$ index $\mathcal{D}_{\text {train }}$ and $\mathcal{D}_{\text {val }}$,

 $N_{\text {train }}=\left|\mathcal{D}_{\text {train }}\right|$ and $N_{\text {val }}=\left|\mathcal{D}_{\text {val }}\right|$.

### Point estimation 

Given training set $\mathcal D_{\text{train}}$, we obtain a **point estimation** $\bar{\boldsymbol \theta } $ of the unknown parameters

### Uncertainty set calibration

Given a point estimation $\bar{\boldsymbol \theta } $, we solve the following **calibration problem **

#### (10)

$\begin{aligned} \mathbf{C P}\left(\overline{\boldsymbol{\theta}}, \mathcal{D}_{\text {val }}, \gamma\right): \underset{\alpha,\left\{\boldsymbol{\theta}_{k}\right\}_{k \in \mathcal{K}_{\text {val }}}}{\operatorname{min}} & \alpha \\ \text { s.t. } & \hat{\mathbf{x}}_{k} \in \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{k}, \mathbf{u}_{k}\right), \forall k \in \mathcal{K}_{\text {val }} \\ & \sum_{k \in \mathcal{K}_{\text {val }}} \mathbb{1}\left[\boldsymbol{\theta}_{k} \in \mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha)\right] \geq \gamma\left(N_{\text {val }}+1\right) \\ & \left\|\boldsymbol{\theta}_{k}\right\|_{2}=1, \forall k \in \mathcal{K}_{\text {val }} \\ & 0 \leq \alpha \leq \pi,\end{aligned}$

- $\alpha$ controls the size of the uncertainty set 
- $\boldsymbol \theta _k $ represent a possible parameter vecto
r associated with $k\in\mathcal K_\text{val}$
- $\gamma \in[0,1]$ is a DM-specefied confidence level

How to decompose:

### Theorem 1

>Let: 
> $\mathcal{D}_{\mathrm{val}}$ be a dataset, $\gamma \in[0,1], \overline{\boldsymbol{\theta}} \in \mathbb{R}^{d}, \tau=\left\lceil\gamma\left(N_{\mathrm{val}}+1\right)\right\rceil$ , $\Gamma_{\tau}$ be an operator that returns the $\tau^{\text {th }}$ largest value in a set. 
> The optimal solution to $\mathbf{C P}\left(\overline{\boldsymbol{\theta}}, \mathcal{D}_{\text {val }}, \gamma\right)$ is: 
> $\alpha_{\gamma}:=\arccos \left(\Gamma_{\tau}\left(\left\{c_{k}\right\}_{k \in \mathcal{K}_{\text {vel }}}\right)\right)$ 
> - $c_{k}:=\max _{\boldsymbol{\theta}_{k}}\left\{\boldsymbol{\theta}_{k}^{\top} \overline{\boldsymbol{\theta}} \mid \hat{\mathbf{x}}_{k} \in \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{k}, \mathbf{u}_{k}\right),\left\|\boldsymbol{\theta}_{k}\right\|_{2} \leq 1\right\}$.

[Skip the proof](#end-proof-of-theorem-1)

#### Proof of Theorem 1

Define:

$\hat{\boldsymbol{\Theta}}_{k}:=\boldsymbol{\Theta}^{\mathrm{OPT}}\left(\mathbf{u}_{k}, \hat{\mathbf{x}}_{k}\right)$ for any $k \in[N]$

we can optimize:

$c:=\cos \alpha $, with $-1\le c \le 1$

Introduce:

$y_k\in\{0,1\}$ that :
- $\hat{\boldsymbol{\Theta}}_{k}$intersect learned uncertainty set ( $=1$)
- not intersect : ($=0$)
  - for any $k\in\mathcal K_{\text{val}}$

We rewrite [(10)](#10):

##### (39)

$\begin{aligned} \max_{c,\{\boldsymbol \theta _k\}_{k\in\mathcal K_{\text{val}}},\{y_k\}_{k\in\mathcal K_{\text{val}}}}& c \\ \text { s.t. } & \hat{\mathbf{x}}_{k} \in \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{k}, \mathbf{u}_{k}\right), \quad \forall k \in \mathcal{K}_{\text {val }} \\ & \boldsymbol{\theta}_{k}^{\top} \overline{\boldsymbol{\theta}} \geq c+2\left(y_{k}-1\right), \quad \forall k \in \mathcal{K}_{\text {val }} \\ & \sum_{k \in \mathcal{K}_{\text {val }}} y_{k} \geq\left\lceil\gamma\left(N_{\text {val }}+1\right)\right\rceil \\ & \left\|\boldsymbol{\theta}_{k}\right\|_{2}=1, \quad \forall k \in \mathcal{K}_{\text {val }} \\ & -1 \leq c \leq 1 \\ & y_{k} \in\{0,1\}, \quad \forall k \in \mathcal{K}_{\text {val }} .\end{aligned}$

Notice decision variables $\boldsymbol \theta _k$ only interact in secont constraint, we can rewrite:

##### (40)

$\begin{array}{ll}\operatorname{max} & c \\ \text { s.t. } & c \leq c_{k}-2\left(y_{k}-1\right), \quad \forall k \in \mathcal{K}_{\text {val }} \\ & \sum_{k \in \mathcal{K}_{\text {val }}} y_{k} \geq\left\lceil\gamma\left(N_{\text {val }}+1\right)\right\rceil \\ & -1 \leq c \leq 1 \\ & y_{k} \in\{0,1\}, \quad \forall k \in \mathcal{K}_{\text {val }},\end{array}$

where:


##### (41)

$\begin{aligned} c_{k}:=\underset{\boldsymbol{\theta}_{k}}{\max } & \boldsymbol{\theta}_{k}^{\top} \overline{\boldsymbol{\theta}} \\ \text { s.t. } & \hat{\mathbf{x}}_{k} \in \mathcal{X}^{\mathrm{OPT}}\left(\boldsymbol{\theta}_{k}, \mathbf{u}_{k}\right) \\ & \left\|\boldsymbol{\theta}_{k}\right\|_{2} \leq 1\end{aligned}$

Notice: optimal solution for [(40)](#40) is:

- $y_k = 1$, for all $k$ s.t. $c_{k} \geq \Gamma_{\tau}\left(\left\{c_{k}\right\}_{k \in \mathcal{K}_{\text {val }}}\right)$
- $y_k = 0$, otherwise
  - $\tau = \dfrac{\gamma (N_{\text{val}}+1)}{N_{\text{val}}}$
  - $\gamma _{\tau}(\{c_k\})$: quantile function

Therefore : 

Optimal objective value of [(40)](#40) is :

$c=\Gamma_{\tau}\left(\left\{c_{k}\right\}_{k \in \mathcal{K}_{\mathrm{val}}}\right)$

That is :

$\alpha_{\gamma}=\arccos \Gamma_{\tau}\left(\left\{c_{k}\right\}_{k \in \mathcal{K}_{\mathrm{val}}}\right)$

#### End proof of theorem 1

## Properties of Conformal IO

### Theorem 2 (Uncertainty Set Validity)

> Let: 
> $\mathcal{D}_{\text {val }}$ : a dataset that satisfies Assumption 1, 
> $(\hat{\boldsymbol{\theta}}, \mathbf{u})$ : a new i.i.d. sample from $\mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})}$,
> $\hat{\mathbf{x}}=\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u})$, 
> $\hat{\boldsymbol{\Theta}}:=\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u})$, 
>  $\alpha_{\gamma}$ be an optimal solution to : 
> $\mathbf{C P}\left(\overline{\boldsymbol{\theta}}, \mathcal{D}_{\text {val }}, \gamma\right)$ 
> - $\overline{\boldsymbol{\theta}} \in \mathbb{R}^{d}$
> We have:
> #### (11)
> $\mathbb{P}\left(\hat{\boldsymbol{\Theta}} \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{\gamma}\right) \neq \varnothing\right) \geq \gamma$
> - for any $\gamma \in\left[0, N_{\text {val }} /\left(N_{\text {val }}+1\right)\right]$
> #### (12)
> $\left|\mathbb{P}\left(\hat{\boldsymbol{\Theta}} \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{\gamma}\right) \neq \varnothing\right)-\gamma\right| \leq \sqrt{\frac{8 \log \left(N_{v a l}+1\right)+2 \log N_{v a l}}{N_{v a l}}}+\frac{2}{N_{v a l}}$
> - with probability at least $1-\dfrac 1 N_{\text {val }}$
> for any $\gamma \in[0,1 ]$

[Skip the proof](#proof-of-theorem-2)

#### Proof of Theorem 2

We define:

##### (42)
 
$ \begin{aligned} A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u}):=\underset{\boldsymbol{\theta}}{\operatorname{max }} & \boldsymbol{\theta}^{\mathrm{\top}} \overline{\boldsymbol{\theta}} \\ \text { s.t.  } & \boldsymbol{\theta} \in \boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \\ & \|\boldsymbol{\theta}\|_{2} \leq 1 .\end{aligned} $

Notice:

$ c_{k}=A_{\overline{\boldsymbol{\theta}}}\left(\hat{\mathbf{x}}_{k}, \mathbf{u}_{k}\right) $ for any $ k \in \mathcal{K}_{\text {val }} $
- $c_k$ is defined in [Theorem 1](#theorem-1)

Let:


$\tau = [\gamma (N_{\text{val }}+1)]$

$ \mathcal{A}:=\left\{A_{\overline{\boldsymbol{\theta}}}\left(\hat{\mathbf{x}}_{k}, \mathbf{u}_{k}\right)\right\}_{k \in \mathcal{K}_{\mathrm{val}}} $

Then: 

##### (43)

$ \mathbb{P}\left(\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha) \neq \varnothing\right)=\mathbb{P}\left(A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u}) \geq \Gamma^{\tau}(\mathcal{A})\right) $

Let : 

$ \mathcal{D}^{\prime}=\mathcal{D}_{\text {val }} \cup\{(\hat{\mathbf{x}}, \mathbf{u})\} $

$ \mathcal{A}^{\prime}=\mathcal{A} \cup\left\{A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u})\right\} $

Then : 

$ \begin{aligned} \gamma & \leq \mathbb{P}\left\{A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u}) \geq \Gamma^{\tau}\left(\mathcal{A}^{\prime}\right)\right\} \\ & =1-\mathbb{P}\left\{A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u})<\Gamma^{\tau}\left(\mathcal{A}^{\prime}\right)\right\} \\ & =1-\mathbb{P}\left\{A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u})<\Gamma^{\tau}(\mathcal{A})\right\} \\ & =\mathbb{P}\left\{A_{\overline{\boldsymbol{\theta}}}(\hat{\mathbf{x}}, \mathbf{u}) \geq \Gamma^{\tau}(\mathcal{A})\right\} \\ & =\mathbb{P}\left\{\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha) \neq \varnothing\right\}\end{aligned} $


Next, Let:

$ z_{k}:=\left(\mathbf{u}_{k}, \hat{\mathbf{x}}_{k}\right), \mathcal{Z}:= $ $ \left\{z_{k}\right\}_{k \in \mathcal{K}_{\text {val }}} $

Define:

##### (44)

$ \mathcal{H}=\left\{h(z, \alpha)=\mathbb{1}\left[\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha)\right] \mid \alpha \in(0, \pi)\right\} $

##### (36)

$ \Pi_{\mathcal{H}}(N):=\max _{\left(Z_{1}, Z_{2}, \ldots, Z_{N}\right) \in \mathcal{Z}^{N}}\left|\left\{\left(h\left(Z_{1}\right), h\left(Z_{2}\right), \ldots, h\left(Z_{N}\right)\right) \mid h \in \mathcal{H}\right\}\right| $

We can see:

##### (45)

$ \Pi_{\mathcal{H}}\left(N_{\mathrm{val}}\right)=N_{\mathrm{val}}+1 $

##### Lemma 9

> Let $ \mathcal{H} $ be a class of functions taking values in $ \{1,-1\} $, 
> Then, for any integer $ N \geq 1 $, the following holds
> $
\Re_{N}(\mathcal{H}) \leq \sqrt{\frac{2 \log \Pi_{\mathcal{H}}(N)}{N}} .
$
##### (35)

> - $
\mathfrak{R}_{N}(\mathcal{F}):=\mathbb{E}_{\mathcal{D} \sim \mathbb{P}^{N}}\left[\hat{\mathfrak{R}}_{\mathcal{D}}(\mathcal{F})\right]
$

Then : 

$ \gamma \leq \frac{1}{N_{\text {val }}} \sum_{k \in \mathcal{K}_{\text {val }}} h\left(z_{k}, \alpha\right) \leq \gamma+\frac{2}{N_{\text {val }}} $.

##### (46)

$ \Re_{N_{\mathrm{val}}}(\mathcal{H}) \leq \sqrt{\dfrac{2 \log \left(N_{\mathrm{val}}+1\right)}{N_{\mathrm{val}}}} $

Notice, $\alpha$ is the smallest value that:

##### (47)

$ \dfrac{1}{N_{\text {val }}} \sum_{k \in \mathcal{K}_{\text {val }}} h\left(z_{k}, \alpha\right)=\dfrac{1}{N_{\text {val }}} \sum_{k \in \mathcal{K}_{\text {val }}} \mathbb{1}\left[\boldsymbol{\Theta}^{\mathrm{OPT}}\left(\hat{\mathbf{x}}_{k}, \mathbf{u}_{k}\right) \cap \mathcal{C}(\overline{\boldsymbol{\theta}}, \alpha)\right]=\dfrac{\left\lceil\gamma\left(N_{\text {val }}+1\right)\right\rceil}{N_{\text {val }}} $

So:

$ \gamma \leq \dfrac{1}{N_{\text {val }}} \sum_{k \in \mathcal{K}_{\text {val }}} h\left(z_{k}, \alpha\right) \leq \gamma+\dfrac{2}{N_{\text {val }}} $.

##### Lemma 10

> For any b-uniformly bounded class of functions $ \mathcal{F} $, any positive integer $ N \geq 1 $, and any scalar $ \delta \geq 0 $, 
> with probability at least:  
> $ 1-\exp \left(-N \delta^{2} /\left(2 b^{2}\right)\right) $, 
> we have : 
> $\sup _{f \in \mathcal{F}}\left|\frac{1}{N} \sum_{i \in[N]} f\left(X_{i}\right)-\mathbb{E}\left[f\left(X_{i}\right)\right]\right| \leq 2 \mathfrak{R}_{N}(\mathcal{F})+\delta$  
> - $ \mathfrak{R}(\mathcal{F}) $ denotes the Rademacher complexity of the function class $ \mathcal{F} $.

Then with probability at least $\delta = 1 - \dfrac{1}{N_\text{val}}$ :

##### (50)

$ \left|\dfrac{1}{N_{\text {val }}} \sum_{k \in \mathcal{K}_{\text {val }}} h\left(z_{k}, \alpha\right)-\mathbb{E}[h(z, \alpha)]\right| \leq 2 \mathfrak{R}_{N_{\text {val }}}(\mathcal{H})+\sqrt{\dfrac{2 \log N_{\text {val }}}{N_{\text {val }}}} $

Combine [(46)](#46) - [(50)](#50) is all

#### End proof of Theorem 2

### Lemma 3

> For any : 
> $ \hat{\mathbf{x}} \in \tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}) $ and $ (\hat{\boldsymbol{\theta}}, \mathbf{u}) \in \boldsymbol{\Theta} \times \mathcal{U} $, 
> there exists a constant : 
> $ \nu(\hat{\mathbf{x}}) \in \mathbb{R}_{+} $ 
> such that, for any : 
> $ \boldsymbol{\theta}, \boldsymbol{\theta}^{\prime} \in \boldsymbol{\Theta} $, 
> we have : 
> $ f(\boldsymbol{\theta}, \hat{\mathbf{x}})-f\left(\boldsymbol{\theta}^{\prime}, \hat{\mathbf{x}}\right) \leq \nu(\hat{\mathbf{x}})\left\|\boldsymbol{\theta}-\boldsymbol{\theta}^{\prime}\right\|_{2} $

[Skip the proof](#end-proof-for-lemma-3)

#### Proof of Lemma 3

For any fixed $\mathbb x$, we have:

$ \begin{aligned} f(\boldsymbol{\theta}, \hat{\mathbf{x}})-f\left(\boldsymbol{\theta}^{\prime}, \hat{\mathbf{x}}\right) & =\sum_{i \in[d]}\left(\theta_{i}-\theta_{i}^{\prime}\right) f_{i}(\hat{\mathbf{x}}) \\ & \leq \sqrt{\sum_{i \in[d]} f_{i}^{2}(\hat{\mathbf{x}})} \sqrt{\sum_{i \in[d]}\left(\theta_{i}-\theta_{i}^{\prime}\right)^{2}} \\ & =\nu(\hat{\mathbf{x}})\left\|\boldsymbol{\theta}-\boldsymbol{\theta}^{\prime}\right\|_{2}\end{aligned} $
- $ \nu(\hat{\mathbf{x}}):=\sqrt{\sum_{i \in[d]} f_{i}^{2}(\hat{\mathbf{x}})} $

#### End proof of lemma 3

### Theorem 3 (POG Bound)

> Let $ \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}) $ be an optimal solution to $ \mathbf{R F O}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ for any $ \mathbf{u} \in \mathcal{U} $ 
> - $ \overline{\boldsymbol{\theta}} \in \mathbb{R}^{d} $ and $ \alpha_{1} $ are chosen such that : 
>   - for a new sample : $ \left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right) $ from $ \mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})} $ and $ \mathbf{x}^{\prime}=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right) $, $ \mathbb{P}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) \cap \Theta^{\mathrm{OPT}}\left(\mathbf{u}^{\prime}, \mathbf{x}^{\prime}\right) \neq \varnothing\right)=1 $. 
> 
> If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then :
> $\operatorname{POG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) \leq\left(\eta-2 \cos 2 \alpha_{1}+2\right) \mu+\eta \mu_{\mathrm{CIO}}$ 
> and 
> $\mathrm{AOG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) \leq\left(2-2 \cos 2 \alpha_{1}+\eta+\sigma\right) \mu^{*}+(\eta+\sigma) \mu_{\mathrm{CIO}}$
> - $ \mu:=\mathbb{E}[\nu(\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}))]$
> - $ \mu_{\mathrm{CIO}}:=\mathbb{E}\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right) $ 
> - $ \mu^{*}:=\mathbb{E}\left(\nu\left[\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{*}, \mathbf{u}\right)\right]\right) $.


#### Proof of Theorem 3

#### Proposition 2 (Conformal IO Achieves Bounded POG). 

> Let : 
> $ \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}) $ be an optimal solution to $ \operatorname{RFO}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ for any $ \mathbf{u} \in \mathcal{U} $ 
> - $ \overline{\boldsymbol{\theta}} \in \mathbb{R}^{d} $ and $ \alpha_{1} $ are chosen such that : 
>   - for a new sample $ \left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right) $ from $ \mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})} $ and $ \mathbf{x}^{\prime}=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right), \mathbb{P}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) \cap \boldsymbol{\Theta}^{\mathrm{OPT}}\left(\mathbf{u}^{\prime}, \mathbf{x}^{\prime}\right) \neq \varnothing\right)=1 $. 
> 
> If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then: 
> $\operatorname{POG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) \leq\left(\eta-2 \cos 2 \alpha_{1}+2\right) \mu+\eta \mu_{\mathrm{CIO}}$
> - $ \mu:=\mathbb{E}[\nu(\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}))] $ 
> - $ \mu_{\mathrm{CIO}}:=\mathbb{E}\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right) $.

[Skip the proof](#end-proof-of-proposition-2)

##### Proof of Proposition 2

Let :  

$ (\hat{\boldsymbol{\theta}}, \mathbf{u}) $ be a sample from : 

$ \mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})}, \hat{\mathbf{x}}=\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}), $ 

$\hat{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}) $ be the optimal solution to the inner maximization problem in $ \mathbf{R F O}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ 
- the outer decision variable is set to $ \hat{\mathbf{x}}_{\mathrm{CIO}}(\mathbb u)$

If : 

$ \Theta^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) \neq \varnothing $, 

let : 

$ \tilde{\boldsymbol{\theta}} $ be an element of $ \boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) $

We have:

$ \begin{aligned} & f\left(\hat{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f(\hat{\boldsymbol{\theta}}, \hat{\mathbf{x}}) \\ \leq & f\left(\tilde{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f(\tilde{\boldsymbol{\theta}}, \hat{\mathbf{x}})+\left[\nu(\hat{\mathbf{x}})+\nu\left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)\right]\|\hat{\boldsymbol{\theta}}-\tilde{\boldsymbol{\theta}}\|_{2} \\ \leq & f\left(\tilde{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f(\tilde{\boldsymbol{\theta}}, \hat{\mathbf{x}})+\eta\left[\nu(\hat{\mathbf{x}})+\nu\left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)\right] \\ \leq & f\left(\overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}), \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f(\tilde{\boldsymbol{\theta}}, \hat{\mathbf{x}})+\eta\left[\nu(\hat{\mathbf{x}})+\nu\left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)\right] \\ \leq & f\left(\hat{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}), \hat{\mathbf{x}}\right)-f(\tilde{\boldsymbol{\theta}}, \hat{\mathbf{x}})+\eta\left[\nu(\hat{\mathbf{x}})+\nu\left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)\right] \\ \leq & \nu(\hat{\mathbf{x}})\left\|\hat{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u})-\tilde{\boldsymbol{\theta}}\right\|_{2}+\eta\left[\nu(\hat{\mathbf{x}})+\nu\left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)\right] \\ \leq & 2 \nu(\hat{\mathbf{x}})\left(1-\cos 2 \alpha_{1}\right)+\eta\left(\nu(\hat{\mathbf{x}})+\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right) \\ = & \nu(\hat{\mathbf{x}})\left(\eta-2 \cos 2 \alpha_{1}+2\right)+\eta \nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right] .\end{aligned} $

First line : [Lemma 3](#lemma-3)

Second line : [Assumption 2](#assumption-2-bounded-inverse-feasible-set)

Third line : Definition

Fourth line : $ \left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}), \overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u})\right) $ is an optimal solution to $ \boldsymbol{\operatorname { R F O }}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $

Fifth line : [Lemma 3](#lemma-3)

Sixth line : both $ \hat{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}) $ and $ \tilde{\boldsymbol{\theta}} $ are in $ \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) $ so the angle between them is no larger than $ 2 \alpha_{1} $. the $ L_{2} $ distance between them are bounded by $ 2\left(1-\cos 2 \alpha_{1}\right) $

Since $ \alpha_{1} $ is chosen such that $ \mathbb{P}\left(\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right)\right)=1 $, we have ： 

$ \begin{aligned} \operatorname{POG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) & =\mathbb{E}\left[f\left(\hat{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f(\hat{\boldsymbol{\theta}}, \hat{\mathbf{x}})\right] \\ & \leq \mathbb{E}\left\{\nu(\hat{\mathbf{x}})\left(\eta-2 \cos 2 \alpha_{1}+2\right)+\eta \nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right\} \\ & =\mu\left(\eta-2 \cos 2 \alpha_{1}+2\right)+\eta \mu_{\mathrm{CIO}}\end{aligned} $

- $ \mu:=\mathbb{E}[\nu(\hat{\mathbf{x}})] $ 
- $ \mu_{\mathrm{CIO}}:=\mathbb{E}\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right) $

##### End Proof of Proposition 2

#### Proposition 3 (Conformal IO Achieves Bounded AOG). 

Let :

$ \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}) $ 

be an optimal solution to : 

$ \operatorname{RFO}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ for any $ \mathbf{u} \in \mathcal{U} $ 

- $ \overline{\boldsymbol{\theta}} \in \mathbb{R}^{d} $ and $ \alpha_{1} $ are chosen such that : 
  - for a new sample $ \left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right) $ from $ \mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})} $ and $ \mathbf{x}^{\prime}=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{\prime}, \mathbf{u}^{\prime}\right), \mathbb{P}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) \cap \boldsymbol{\Theta}^{\mathrm{OPT}}\left(\mathbf{u}^{\prime}, \mathbf{x}^{\prime}\right) \neq \varnothing\right)=1 $. 
  
If Assumptions [2](#assumption-2-bounded-inverse-feasible-set)-[3](#assumption-3-bounded-divergence) hold, then

$
\operatorname{AOG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) \leq\left(2-2 \cos 2 \alpha_{1}+\eta+\sigma\right) \mu^{*}+(\eta+\sigma) \mu_{\mathrm{CIO}}
$
-  $ \mu^{*}:=\mathbb{E}\left(\nu\left[\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{*}, \mathbf{u}\right)\right]\right) $.

[Skip the proof](#end-proof-of-proposition-3)

##### Proof of Proposition 3


Let : 

$ (\hat{\boldsymbol{\theta}}, \mathbf{u}) $ be a sample from $ \mathbb{P}_{(\boldsymbol{\theta}, \mathbf{u})}, \hat{\mathbf{x}}=\tilde{\mathbf{x}}(\hat{\boldsymbol{\theta}}, \mathbf{u}) $, 

$ \tilde{\boldsymbol{\theta}} $ be an element of $ \boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right) $ 

-  is non-empty almost surely because $ \alpha_{1} $ is chosen such that : 
  -  $ \mathbb{P}\left(\boldsymbol{\Theta}^{\mathrm{OPT}}(\hat{\mathbf{x}}, \mathbf{u}) \cap \mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right)\right)=1 $. 
  
Let : 

$ \overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}) $ denote the optimal solution to the inner maximization problem in : 

$ \operatorname{RFO}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ 

- when the outer decision variable is set to $ \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}) $. 

For any $ \mathbf{u} \in \mathcal{U} $, let : 

$ \mathbf{x}^{*}(\mathbf{u}):=\tilde{\mathbf{x}}\left(\boldsymbol{\theta}^{*}, \mathbf{u}\right) $ 

$ \boldsymbol{\theta}_{\mathrm{CIO}}^{*}(\mathbf{u}) $ denote the optimal solution to the inner maximization problem in : 

$ \operatorname{RFO}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $ 

- when the outer decision variable is set to $ \mathbf{x}^{*}(\mathbf{u}) $


Now, we have : 

$ \begin{aligned} & f\left(\boldsymbol{\theta}^{*}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\boldsymbol{\theta}^{*}, \mathbf{x}^{*}(\mathbf{u})\right) \\ \leq & f\left(\mathbb{E}(\hat{\boldsymbol{\theta}}), \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\mathbb{E}(\hat{\boldsymbol{\theta}}), \mathbf{x}^{*}(\mathbf{u})\right)+\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left[\mathbf{x}^{*}(\mathbf{u})\right]\right)\left\|\boldsymbol{\theta}^{*}-\mathbb{E}(\hat{\boldsymbol{\theta}})\right\|_{2} \\ \leq & f\left(\mathbb{E}(\hat{\boldsymbol{\theta}}), \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\mathbb{E}(\hat{\boldsymbol{\theta}}), \mathbf{x}^{*}(\mathbf{u})\right)+\sigma\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left[\mathbf{x}^{*}(\mathbf{u})\right]\right) \\ = & \mathbb{E}\left[f\left(\hat{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\hat{\boldsymbol{\theta}}, \mathbf{x}^{*}(\mathbf{u})\right)\right]+\sigma\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \mathbb{E}\left[f\left(\tilde{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\tilde{\boldsymbol{\theta}}, \mathbf{x}^{*}(\mathbf{u})\right)+\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu[\hat{\mathbf{x}}]\right)\|\hat{\boldsymbol{\theta}}-\tilde{\boldsymbol{\theta}}\|_{2}\right] \\ & +\sigma\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \mathbb{E}\left[f\left(\tilde{\boldsymbol{\theta}}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\tilde{\boldsymbol{\theta}}, \mathbf{x}^{*}(\mathbf{u})\right)+\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu[\hat{\mathbf{x}}]\right) \eta\right] \\ & +\sigma\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \mathbb{E}\left[f\left(\overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}), \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\tilde{\boldsymbol{\theta}}, \mathbf{x}^{*}(\mathbf{u})\right)\right]+(\eta+\sigma)\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \mathbb{E}\left[f\left(\boldsymbol{\theta}_{\mathrm{CIO}}^{*}(\mathbf{u}), \mathbf{x}^{*}(\mathbf{u})\right)-f\left(\tilde{\boldsymbol{\theta}}, \mathbf{x}^{*}(\mathbf{u})\right)\right]+(\eta+\sigma)\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \mathbb{E}\left[\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\left\|\boldsymbol{\theta}_{\mathrm{CIO}}^{*}(\mathbf{u})-\tilde{\boldsymbol{\theta}}\right\|_{2}\right]+(\eta+\sigma)\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & 2 \nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\left(1-\cos 2 \alpha_{1}\right)+(\eta+\sigma)\left(\nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]+\nu\left(\mathbf{x}^{*}(\mathbf{u})\right)\right) \\ \leq & \left(2-2 \cos 2 \alpha_{1}+\eta+\sigma\right) \nu\left(\mathbf{x}^{*}(\mathbf{u})\right)+(\eta+\sigma) \nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\end{aligned} $

Line 1: [Lemma 3](#lemma-3)

Line 2: [Assumption 3](#assumption-3-bounded-divergence)

Line 3: $f $ is linear in $\boldsymbol \theta $

Line 4: [Lemma 3](#lemma-3)

Line 5: [Assumption 2](#assumption-2-bounded-inverse-feasible-set)

Line 6: the definition of $ \overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u}) $

Line 7: $ \left(\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u}), \overline{\boldsymbol{\theta}}_{\mathrm{CIO}}(\mathbf{u})\right) $ is an optimal solution to $ \mathbf{R F O}\left(\mathcal{C}\left(\overline{\boldsymbol{\theta}}, \alpha_{1}\right), \mathbf{u}\right) $.

Line 8: [Lemma 3](#lemma-3)

Line 9: both $ \boldsymbol{\theta}_{\mathrm{CIO}}^{*}(\mathbf{u}) $ and $ \tilde{\boldsymbol{\theta}} $ are on the unit sphere and the angle between them is no greater than $ 2 \alpha_{1} $, then the $ L_{2} $ distance between them is upper bounded by $ 2\left(1-\cos 2 \alpha_{1}\right) $.

Then : 

$ \begin{aligned} \operatorname{AOG}\left(\overline{\mathbf{x}}_{\mathrm{CIO}}\right) & =\mathbb{E}\left[f\left(\boldsymbol{\theta}^{*}, \overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right)-f\left(\boldsymbol{\theta}^{*}, \mathbf{x}^{*}(\mathbf{u})\right)\right] \\ & \leq \mathbb{E}\left[\left(2-2 \cos 2 \alpha_{1}+\eta+\sigma\right) \nu\left(\mathbf{x}^{*}(\mathbf{u})\right)+(\eta+\sigma) \nu\left[\overline{\mathbf{x}}_{\mathrm{CIO}}(\mathbf{u})\right]\right] \\ & =\left(2-2 \cos 2 \alpha_{1}+\eta+\sigma\right) \mu^{*}+(\eta+\sigma) \mu_{\mathrm{CIO}}\end{aligned} $

- $ \mu^{*}:=\mathbb{E}\left(\nu\left[\mathbf{x}^{*}(\mathbf{u})\right]\right) $.

##### End Proof of Proposition 3

#### End Proof of Theorem 3

