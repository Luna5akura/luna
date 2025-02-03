# 1. Examples

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







placeholder

placeholder

placeholder

placeholder

placeholder

