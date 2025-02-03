# 1. Examples & Glossary

$$
\begin{array}{|c|c|l|}
\hline
\text{Domain} & \text{Description} \\
\hline
\mathbb{P} & \mathcal{M}(\mathcal{X} \times \mathcal{Y}) & \text{True (unknown) joint distribution of } (\boldsymbol{x}, \boldsymbol{y}) \\
\hat{\mathbb{P}}_{N} & \mathcal{M}(\mathcal{X} \times \mathcal{Y}) & \text{Joint empirical distribution of } (\boldsymbol{x}, \boldsymbol{y}) \\
\delta_{y} & \mathcal{M}(\mathcal{Y}) & \text{Dirac distribution that puts all of its weight on } \boldsymbol{y} \\
\boldsymbol{x} & \mathcal{X} \subseteq \mathbb{R}^{d_{\boldsymbol{x}}} & \text{Contextual information} \\
\boldsymbol{y} & Y \subseteq \mathbb{R}^{d_{\boldsymbol{y}}} & \text{Uncertain parameters} \\
\boldsymbol{z} & \mathcal{Z} \subseteq \mathbb{R}^{d_{\boldsymbol{z}}} & \text{A feasible action} \\
\boldsymbol{\theta} & \Theta & \text{Parameters of a prediction model} \\
\hat{\boldsymbol{\theta}} & \Theta & \text{Optimal parameter value that minimizes the estimation error} \\
c(\boldsymbol{z}, \boldsymbol{y}) & \mathbb{R} & \text{Cost of an action } \boldsymbol{z} \text{ under } \boldsymbol{y} \\
h\left(\boldsymbol{z}, \mathbb{Q}_{\xi}\right) & \mathbb{R} & \text{Expected cost of an action } \boldsymbol{z} \text{ under } \mathbb{Q}_{\xi} \text{ (a distribution over } \boldsymbol{y}) \\
H(\pi, \mathbb{Q}) & \mathbb{R} & \text{Expected cost of a policy } \pi \text{ under } \mathbb{Q} \text{ (a distribution over } (\boldsymbol{x}, \boldsymbol{y})) \\
f_{\boldsymbol{\theta}}(\boldsymbol{x}) & \mathcal{M}(\mathcal{Y}) & \text{Estimate of the conditional distribution of } \boldsymbol{y} \text{ given } \boldsymbol{x} \\
g_{\boldsymbol{\theta}}(\boldsymbol{x}) & \mathbb{R} \boldsymbol{R}_{\boldsymbol{y}} & \text{Estimate of the conditional expectation of } \boldsymbol{y} \text{ given } \boldsymbol{x} \\
\pi^{*}(\boldsymbol{x}) & \mathcal{Z} & \text{Optimal solution of CSO under true conditional distribution } \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) \\
\pi_{\boldsymbol{\theta}}(\boldsymbol{x}) & \mathcal{Z} & \text{Action prescribed by a policy parameterized by } \boldsymbol{\theta} \text{ for context } \boldsymbol{x} \\
z^{*}(\boldsymbol{x}) & \mathcal{Z} & \text{Optimal solution to the CSO problem under the true conditional distribution } \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) \\
z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) & \mathcal{Z} & \text{Optimal solution to the CSO problem under the conditional distribution } f_{\boldsymbol{\theta}}(\boldsymbol{x}) \\
z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) & \mathcal{Z} & \text{Optimal solution to the CSO problem under the Dirac distribution } \delta_{g \boldsymbol{\theta}}(\boldsymbol{x}) \\
\rho\left(\boldsymbol{f}_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right) & \mathbb{R} & \text{Expected prediction error for distribution model } f_{\boldsymbol{\theta}} \text{ based on empirical distribution } \hat{\mathbb{P}}_{N} \\
\rho\left(g_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right) & \mathbb{R} & \text{Expected prediction error for point prediction model } g_{\boldsymbol{\theta}} \text{ based on empirical distribution } \hat{\mathbb{P}}_{N} \\
\hline
\end{array}
$$

2. Contextual Optimization

$\boldsymbol  z$ : decision: The order for today inventory

$\mathcal Z\subseteq \mathbb R^{d_{\boldsymbol  z}}$ : feasible set for orders

- e.g. $ \mathcal{Z}=\{z \in \mathbb{R} \mid z \geq 0\} $

$ c(\boldsymbol{z}, \boldsymbol{y}) $ : cost function

- e.g. $ c(z, y)=h(z-y)^{+}+b(y-z)^{+} $ (h for over inventory, b for not enough inventory)

$ \boldsymbol{y} \in \mathcal{Y} \subseteq \mathbb{R}^{d_{y}} $ : uncertain parameters : the everyday real need 

$ \boldsymbol{x} \in \mathcal{X} \subseteq \mathbb{R}^{d_{x}} $ : a vector of relevant covariates : the history data 



$\mathbb  P $: the joint distribution of :
- the covariates in $\mathcal  X$
- the uncertain parameters in $\mathcal  Y $
- e.g.: the distribution of data and real need 






# 2. Contextual Optimization : An overview

$\boldsymbol  z$ : decision

$\mathcal Z\subseteq \mathbb R^{d_{\boldsymbol  z}}$ : feasible set 

$ c(\boldsymbol{z}, \boldsymbol{y}) $ : cost function

$ \boldsymbol{y} \in \mathcal{Y} \subseteq \mathbb{R}^{d_{y}} $ : uncertain parameters

The uncertain parameters are unknown when making the decision.

$ \boldsymbol{x} \in \mathcal{X} \subseteq \mathbb{R}^{d_{x}} $ : a vector of relevant covariates :
- correlated with the uncertain parameters $\mathbb  y $
- we know it before choosing $\mathbb  z $

$\mathbb  P $: the joint distribution of :
- the covariates in $\mathcal  X$
- the uncertain parameters in $\mathcal  Y $

## 2.1 Contexual problem and policy

### CSO problem

Given:

- $\boldsymbol  x$ : a vector of covariates
- $\mathbb  P $ : joint distribution

Target:

- Find $z^*(\boldsymbol  x)\in\mathcal Z $ : an optimal action
- minimize the expected costs on the covariate $\boldsymbol x $

Formally:

#### (1)

$ z^{*}(\boldsymbol{x}) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} \mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[c(\boldsymbol{z}, \boldsymbol{y})] $
- $ \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) $ : the conditional distribution of $\boldsymbol  y $ given the covariate $\boldsymbol  x $
- A minimizer exists
  - e.g.: $\mathcal Z $ is compact, $ \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) $ has bounded support, $ c(\boldsymbol{z}, \boldsymbol{y}) $ is continuous in $ \boldsymbol{z} $ almost surely.

[(1)](#1) can be written using the expected cost operator $h(\cdot,\cdot)$ : 
- first argument: an action
- second argument: distribution

#### (2)

$ z^{*}(\boldsymbol{x}) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} h(\boldsymbol{z}, \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})):=\mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[c(\boldsymbol{z}, \boldsymbol{y})] $

### Optimal policy

Target: find the policy, provides the lowest long-term expected cost 

$ z^{*}(\boldsymbol{x}) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} h(\boldsymbol{z}, \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})):=\mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[c(\boldsymbol{z}, \boldsymbol{y})] $

- $ \Pi:=\{\pi: \mathcal{X} \rightarrow \mathcal{Z}\} $

Solving [(1)](#1) naturally gives an optimal policy:

$ \bar{\pi}(\boldsymbol{x}) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} h(\boldsymbol{z}, \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})) $ a.s. $ \Leftrightarrow \mathbb{E}_{\mathbb{P}}[h(\bar{\pi}(\boldsymbol{x}), \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}))]=\min _{\pi \in \Pi} \mathbb{E}_{\mathbb{P}}[h(\pi(\boldsymbol{x}), \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}))] $

- If a minimizer of $ h(\boldsymbol{z}, \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})) $ exists almost surely

We can see $\pi^*, z^*(\cdot)$ coincide

## 2.2 Mapping covariate to actions in a data-driven environment

Challenge: the joint distribution $\mathbb P $ is generally unknown

Reality: we have historical data:

$ \mathcal{D}_{N}=\left\{\left(\boldsymbol{x}_{i}, \boldsymbol{y}_{i}\right)\right\}_{i=1}^{N} $

assumed to be made of independent and identically distributed realizations of $ (\boldsymbol{x}, \boldsymbol{y}) \in \mathcal{X} \times \mathcal{Y} $

Aim: find a policy
that approximates well the optimal policy given by [(3)](#3)

Three main frameworks:

- decision rule optimization
- sequential learning and optimization
- integrated learning and optimization

### 2.2.1 Decision rule optimization 

There's a hypothesis class:

$ \Pi^{\theta}:=\left\{\pi_{\boldsymbol{\theta}}\right\}_{\boldsymbol{\theta} \in \Theta} \subseteq \Pi $

- $ \Pi^{\theta}:=\left\{\pi_{\boldsymbol{\theta}}\right\}_{\boldsymbol{\theta} \in \Theta} \subseteq \Pi $

$ \hat{\mathbb{P}}_{N} $ : the empirical distribution of $ (\boldsymbol{x}, \boldsymbol{y}) $ given historical data $ \mathcal{D}_{N} $

Get the "best" parameter in $ \Pi^{\theta} $ by solving ERM (empirical risk minimization) :

#### (4)

$ \quad \boldsymbol{\theta}^{*} \in \underset{\boldsymbol{\theta}}{\operatorname{argmin}} H\left(\pi_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[c\left(\pi_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)\right] $

Then:

Find the policy $  \pi_{\theta^{*}} \in \Pi^{\theta} $ that minimizes the expected costs over the training data.

Approximations:

- The hypothesis class $\Pi^{\theta} $ may not contain the true optimal policy 
- The long-term expected costs are calculated over the $ \hat{\mathbb{P}}_{N} $ (empirical distribution) instead of the $\mathbb P$, the true distribution

Disadvantage:

- Focus overall performance (the expectation), not robust
  - e.g. perform better on some sample, worse on some other sample

### 2.2.2 Learning and optimization 

**Predictive & Optimization**

**Predictive:**

$f_{\boldsymbol \theta }$ : general model 
- parameterized by $\boldsymbol \theta $
- provide the input of the optimization component 

$ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $ : predicted distribution 
- for any covariate $\boldsymbol{x} $ 
- a predicted distribution
  - approximate the true conditional distribution $ \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) $ 
- learned from historical data

Decision:

Solve the CSO problem under $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $ :

#### (5)

$ z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} h\left(\boldsymbol{z}, f_{\boldsymbol{\theta}}(\boldsymbol{x})\right) $

The only approximation:

- $ f_{\boldsymbol{\theta}} $ is an approximation of $ \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) $

**SLO(Sequential learning and optimization) :**

$\rho$ : estimation error
- minimize it to obtain the contextual predictor
- between conditional distribution given by $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $ and the true conditional distribution of $ \boldsymbol{y} $ given $ \boldsymbol{x} $ 

Solve:

#### (6)

$ \min _{\boldsymbol{\theta}} \rho\left(f_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right)+\Omega(\boldsymbol{\theta}) $ 

- $ \rho\left(f_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\mathfrak{D}\left(f_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)\right] $

- $ \mathfrak{D} $ is a divergence function
  - negative log-likelihood & regularization term $ \Omega(\boldsymbol{\theta}) $ controls the complexity of $ f_{\theta} $

#### Definition 1 (Expected value-based model)

cost function $ c(\boldsymbol{x}, \boldsymbol{y}) $ of the decision model is linear in $ \boldsymbol{y} $ 

Now: 

estimating a conditional distribution $\to$ find the expected value of the uncertain parameter given the covariates

- Because : $ h(\boldsymbol{z}, \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}))= $ $ \mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[c(\boldsymbol{z}, \boldsymbol{y})]=c\left(\boldsymbol{z}, \mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[\boldsymbol{y}]\right) $ 

training the contextual predictor $\to $ mean regression problem over a parameterized function $ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $

$ \min _{\boldsymbol{\theta}} \rho\left(g_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right)+\Omega(\boldsymbol{\theta}) $ 

- $ \rho\left(g_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[d\left(g_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)\right] $

- for some distance metric $ d $, usually the mean squared errors

MSE (mean squared error):

$ g_{\hat{\boldsymbol{\theta}}}(\boldsymbol{x})=\mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[\boldsymbol{y}] $ 

 - as $ N \rightarrow \infty $



Obtain an action: 

$ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} h\left(\boldsymbol{z}, \delta_{g_{\boldsymbol{\theta}(\boldsymbol{x})}}\right)=\underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} c\left(\boldsymbol{z}, g_{\boldsymbol{\theta}}(\boldsymbol{x})\right) $,

- For any new covariate $\boldsymbol x$
- $z^*$ : an estimator of the mean of the conditional distribution
- $ \delta_{y} $ : Dirac distribution (all mass at $\boldsymbol y$)

These models: expected value-based models 

More general: conditional distribution-based models

Disadvantage:

-  ignore the mismatch between the
prediction divergence $ \mathfrak{D} $ and the cost function $ c(\boldsymbol{x}, \boldsymbol{y}) $

- a small prediction error about $ \mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x}) $ may have a large impact on the prescription

**Integrated learning and optimization**

Goal:

maximize the prescriptive performance of the induced policy
- train the predictive component to minimize the task loss (as in [(3)](#3))
- higher MSE but nearly-optimal 

We have:

#### (9)

$ \min _{\boldsymbol{\theta}} H\left(z^{*}\left(\cdot, f_{\boldsymbol{\theta}}\right), \hat{\mathbb{P}}_{N}\right)=\min _{\boldsymbol{\theta}} \mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[c\left(z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right), \boldsymbol{y}\right)\right] $
- Finding the best parameterization of a contextual predictor
  - minimizes the downstream
expected costs of the CSO solution


- minimizes the expected cost of the policy over the empirical distribution

## Summary

Design choices:

- type of loss function during training
  - e.g. decision rule/sequential/integrated paradigm
- class of predictive model
  - e.g. linear/neural network/random forest

# 3 Dicision rule optimization 

Decision rules:
- obtained by solving ERM in Problem [(4)](#4)
- minimize the cost of a policy on the task
  - that is, downstream optimization problem 

Advantage:
- once trained, no optimization problem needs

Define decision rule approach as:

employing a parameterized mapping $ \pi_{\boldsymbol{\theta}}(\boldsymbol{x}) $

- e.g.: linear/neural network


## 3.1 Linear decision rules

1: SAA(sample-average approximation)

for a newsvendor problem:

Use LDRs(linear decision rules)

Two variants with and without regularization:

$ \min _{\pi: \exists \boldsymbol{\theta} \in \mathbb{R}^{d} \boldsymbol{x}, \pi(\boldsymbol{x})=\boldsymbol{\theta}^{\top} \boldsymbol{x}, \forall \boldsymbol{x}} H\left(\pi, \hat{\mathbb{P}}_{N}\right)+\Omega(\pi)=\min _{\boldsymbol{\theta}} \frac{1}{N} \sum_{i=1}^{N} u\left(y_{i}-\boldsymbol{\theta}^{\top} \boldsymbol{x}_{i}\right)^{+}+o\left(\boldsymbol{\theta}^{\top} \boldsymbol{x}_{i}-y_{i}\right)^{+}+\lambda\|\boldsymbol{\theta}\|_{k}^{2} $

- $u$: per unit backordering (underage) cost 
- $o$: per unit holding (overage) cost 

2: For linear demand model:

Generalization error for ERM model scales as :

- $ \mathrm{O}\left(d_{x} / \sqrt{N}\right) $ , when there is no regularization
- $ \mathrm{O}\left(d_{\boldsymbol{x}} /(\sqrt{N} \lambda)\right) $, with regularization

Need balance (to get optimal performance):

- generalization error
- regularization bias

Consider unconstrained problems because:
- difficult to ensure the feasibility of policies 
- maintain computational tractability

3. General theory for generalization

- Based on Rademacher complexity
- beyond LDR

LDRs may not be asymptotically optimal in general 

To generalize LDRs:

- decision rules that linear in transformations of the covariate vector 
- lift covariate vector to RKHS(reproducing kernel Hilbert space)

## 3.2 RKHS-based decision rules

To:

Obtain decision rules: more flexible than linear ones with respect to $\boldsymbol x$:

lift the covariate vector to RKHS

- LDRs might achieve better performance 

Let:

$ K: \mathcal{X} \times \mathcal{X} \rightarrow \mathbb{R} $: symmetric positive definite kernel 
- associated with the chosen RKHS 
  - e.g.: $ K\left(\boldsymbol{x}_{1}, \boldsymbol{x}_{2}\right):=\exp \left(-\left\|\boldsymbol{x}_{1}-\boldsymbol{x}_{2}\right\|^{2} /\left(2 \sigma^{2}\right)\right) $

$ \left\{\varphi: \mathcal{X} \rightarrow \mathbb{R} \mid \exists L \in \mathbb{N}, \boldsymbol{v}_{1}, \boldsymbol{v}_{2}, \cdots, \boldsymbol{v}_{L} \in \mathcal{X}, \varphi(\boldsymbol{x})=\sum_{l=1}^{L} a_{l} K\left(\boldsymbol{v}_{l}, \boldsymbol{x}\right), \forall \boldsymbol{x} \in \mathcal{X}\right\} $

- the RKHS $\mathcal H_K$
- Given $K$
- the closure of a set functions
- $ \varphi_{1}(\boldsymbol{x})=\sum_{i=1}^{L_{1}} a_{1}^{i} K\left(\boldsymbol{v}_{1}^{i}, \boldsymbol{x}\right) $
- $ \varphi_{2}(\boldsymbol{x})=\sum_{j=1}^{L_{2}} a_{2}^{j} K\left(\boldsymbol{v}_{2}^{j}, \boldsymbol{x}\right) $
- $ \left\langle\varphi_{1}, \varphi_{2}\right\rangle=\sum_{i=1}^{L_{1}} \sum_{j=1}^{L_{2}} a_{1}^{i} a_{2}^{j} K\left(\boldsymbol{v}_{1}^{i}, \boldsymbol{v}_{2}^{j}\right) $: inner product

1: approximate the optimal policy:
- with a linear policy in the RKHS
  - $ \pi_{\varphi}(\boldsymbol{x}):=\langle\varphi, K(\boldsymbol{x}, \cdot)\rangle $ when $ d_{\boldsymbol{z}}=1 $

using the representer theorem, the solution of :

$ \min _{\varphi \in \mathcal{H}_{K}} H\left(\pi_{\varphi}, \hat{\mathbb{P}}_{N}\right)+\lambda\|\varphi\|_{2}^{2} $

- regularized problem 

takes the form $ \pi^{*}(\boldsymbol{x})=\sum_{i=1}^{N} K\left(\boldsymbol{x}_{i}, \boldsymbol{x}\right) a_{i}^{*} $

reduce the decision rule problem to:

$ \min _{\boldsymbol{a} \in \mathbb{R}^{N}} H\left(\sum_{i=1}^{N} K\left(\boldsymbol{x}_{i}, \cdot\right) a_{i}, \hat{\mathbb{P}}_{N}\right)+\lambda \sum_{i=1}^{N} \sum_{j=1}^{N} K\left(\boldsymbol{x}_{i}, \boldsymbol{x}_{j}\right) a_{i} a_{j} $

can be extended to $ d_{z}>1 $ by employing one RKHS for each $ z_{i} $

Some applications:

- Data-driven single item newsvendor
- single risky asset portfolio problems 
  - establish bounds on the out-of-sample performance 
- asymptotic optimality of RKHS-based policies 
- two-stage capacity planning problem 
  - multivariate demand 
  - vector-valued capacity decisions 
    - the underlying demand distribution is difficult to estimate in practice
- optimize over policies that are linear in the RKHS 
  - associatied with Gaussain kernerl
  - identify generalization error bounds 
  - for large dimension problems:
    - slow convergence rate 
    - propose instead using a data-dependent random forest kerenl

## 3.3 Non-linear decision rules

1: value of training a DNN

- learn the ordering policy of a newsvendor problem 

**neural networks**

- universal approximation property
  - approximate any continuous function arbitrarily well 
- For constrained problem:
  - softmax as final layer to ensure decisions lies in a simplex
    - 2: portfolio optimization problem 
- in general, not land in feasible space. to circumvent:
  - 3: application-specific differentiable repair layer
    - project the solution back to feasibility 
  - 4: obtained by SGD(stochastic gradient descent) approximately minimize the Bayesian posterior loss

Optimal solution of a newsvendor problem is a quantile of demand distribution:

- 5: train an additive ensemble of decision trees using quantile regression
  - produce thr ordering decision  
  - Test the algorithms on a real-world dataset from a large German bakery chain 
- 6: optimize decision tree-based decision rules 
  - address the multi-item newsvendor, treatment planning, optimal stopping problems 
- 7: tutorial on DNN-based decision rule optimization 

8: piecewise-affine decision rules 

- provice non-asymptotic and asymptotic consistency results
  - for unconstrained and constrained problems 
- learn policy through: stochastic majorization-minimization algorithm
- experiment on constrained newsvendor problem 
  - piecewise-affine decision rules outperform RKHS-based policies 

## 3.4 Distributionally robust decision rules 

Assume parammetric form $ \Pi^{\theta} $ for the policy, but:

1: distributionally robust contextual newsvendor problem 

- under type-1 Wasserstein ambiguity set
- without assuming an explicit structure on the policy class 

$ W_{p}\left(\mathbb{P}_{1}, \mathbb{P}_{2}\right)=\inf _{\gamma \in \mathcal{M}\left(\mathcal{Y}^{2}\right)}\left(\int_{\mathcal{Y} \times \mathcal{Y}}\left\|y_{1}-y_{2}\right\|^{p} \gamma\left(d y_{1}, d y_{2}\right)\right)^{\frac{1}{p}} $

- type-$p$ Wasserstein distance between $ \mathbb{P}_{1} $ and $ \mathbb{P}_{2} $
- $ \gamma $ is a joint distribution of $ y_{1} $ and $ y_{2} $ 
  - with marginals $ \mathbb{P}_{1} $ and $ \mathbb{P}_{2} $

2: avoids the degeneracies of ERM
- for generic $\Pi  $
- by define an optimal "Shapley" extension 
  - to the scenario-based optimal policy

That is:

$ \min _{\pi \in \Pi} \sup _{\mathbb{Q} \in \mathcal{M}(\mathcal{X} \times \mathcal{Y})}\left\{H(\pi, \mathbb{Q}): \mathcal{W}\left(\mathbb{Q}, \hat{\mathbb{P}}_{N}\right) \leq r\right\} \equiv \min _{\pi: \hat{\mathcal{X}} \rightarrow \mathcal{Z} }\sup _{\mathbb  Q\in \mathcal M ({\mathcal { \hat X }} \times \mathcal{Y})}\left\{H(\pi, \mathbb{Q}): \mathcal{W}\left(\mathbb{Q}, \hat{\mathbb{P}}_{N}\right) \leq r\right\} $

- $ \hat{\mathcal{X}}:=\cup_{i=1}^{N}\left\{\boldsymbol{x}_{i}\right\} $ 
- $ \mathcal{M}(\hat{\mathcal{X}} \times \mathcal{Y}) $ is the set of all distribution supported on $ \hat{\mathcal{X}} \times \mathcal{Y} $.







placeholder

placeholder

placeholder

placeholder

placeholder

