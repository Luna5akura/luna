---
title: Business Paper - Week 5
date: 2025-9-10 
---

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

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|}
\hline
\text{Reference} & \text{rcso} & \text{wSAA} & \text{EVB} & \text{Reg. CSO} & \text{DRO} & \text{General} & \text{Linear} & \text{Kernel} & \text{kNN} & \text{DT} & \text{RF} \\
\hline
\text{Hannah et al. (2010)} & \times & \checkmark & \times & \times & \times & \times & \times & \checkmark & \times & \times & \times \\
\hline
\text{Ferreira et al. (2016)} & \times & \times & \checkmark & \times & \times & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Ban et al. (2019)} & \checkmark & \times & \times & \times & \times & \times & \checkmark & \times & \times & \times & \times \\
\hline
\text{Chen and Paschalidis (2019)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \times & \checkmark & \times & \times \\
\hline
\text{Bertsimas and Kallus (2020)} & \times & \checkmark & \times & \times & \times & \times & \checkmark & \times & \checkmark & \checkmark & \checkmark \\
\hline
\text{Kannan et al. (2020)} & \checkmark & \times & \times & \times & \times & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
\hline
\text{Kannan et al. (2021)} & \checkmark & \times & \times & \times & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
\hline
\text{Liu et al. (2021)} & \times & \times & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Srivastava et al. (2021)} & \times & \checkmark & \times & \checkmark & \times & \times & \times & \checkmark & \times & \times & \times \\
\hline
\text{Wang et al. (2021)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \checkmark & \times & \times & \times \\
\hline
\text{Bertsimas and Van Parys (2022)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \checkmark & \checkmark & \times & \times \\
\hline
\text{Deng and Sen (2022)} & \checkmark & \times & \times & \times & \times & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
\hline
\text{Esteban-Pérez and Morales (2022)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \checkmark & \checkmark & \times & \times \\
\hline
\text{Kannan et al. (2022)} & \checkmark & \times & \times & \times & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
\hline
\text{Lin et al. (2022)} & \times & \checkmark & \times & \checkmark & \times & \times & \times & \times & \checkmark & \checkmark & \checkmark \\
\hline
\text{Nguyen et al. (2021)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \times & \checkmark & \times & \times \\
\hline
\text{Notz and Pibernik (2022)} & \times & \checkmark & \times & \times & \times & \times & \times & \checkmark & \times & \checkmark & \times \\
\hline
\text{Zhu et al. (2022)} & \times & \times & \checkmark & \times & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
\hline
\text{Perakis et al. (2023)} & \checkmark & \times & \times & \times & \checkmark & \times & \checkmark & \times & \times & \times & \times \\
\hline
\end{array}
$$


$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}
\hline 
& \text{LP} & \text{QP} & \text{Convex} & \text{Non convex} & \text{Integer} & \text{Uncertain} & \text{Implicit diff.} & \substack{\text{Surr.} \\ \text{loss}} & \text{Surr. optim.} \\
\hline
\text{Amos and Kolter (2017)} & \times & \checkmark & \times & \times & \times & \checkmark & \checkmark & \times & \checkmark \\
\hline
\text{Donti et al. (2017)} & \times & \checkmark & \checkmark & \times & \times & \checkmark & \checkmark & \times & \times \\
\hline
\text{Agrawal et al. (2019)} & \times & \checkmark & \checkmark & \times & \times & \checkmark & \checkmark & \times & \checkmark \\
\hline
\text{Vlastelica et al. (2019)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Wilder et al. (2019a)} & \checkmark & \times & \times & \times & \checkmark & \times & \checkmark & \times & \times \\
\hline
\text{Wilder et al. (2019b)} & \times & \checkmark & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Berthet et al. (2020)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Elmachtoub et al. (2020)} & \checkmark & \times & \times & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Ferber et al. (2020)} & \checkmark & \times & \times & \times & \checkmark & \times & \checkmark & \times & \times \\
\hline
\text{Mandi and Guns (2020)} & \checkmark & \times & \times & \times & \checkmark & \times & \checkmark & \times & \times \\
\hline
\text{Mandi et al. (2020)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Grigas et al. (2021)} & \times & \times & \checkmark & \times & \times & \times & \times & \times & \checkmark \\
\hline
\text{Mulamba et al. (2021)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Chung et al. (2022)} & \times & \times & \checkmark & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Cristian et al. (2022)} & \times & \times & \checkmark & \times & \times & \times & \times & \times & \checkmark \\
\hline
\text{Dalle et al. (2022)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Elmachtoub and Grigas (2022)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Jeong et al. (2022)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Kallus and Mao (2022)} & \times & \times & \checkmark & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Kong et al. (2022)} & \times & \checkmark & \checkmark & \checkmark & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Lawless and Zhou (2022)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \checkmark & \times \\
\hline
\text{Loke et al. (2022)} & \checkmark & \times & \times & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Mandi et al. (2022)} & \checkmark & \times & \times & \times & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Muñoz et al. (2022)} & \checkmark & \times & \times & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Shah et al. (2022)} & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \times & \times & \times & \checkmark \\
\hline
\text{Butler and Kwon (2023a)} & \times & \checkmark & \times & \times & \times & \times & \checkmark & \times & \times \\
\hline
\text{Costa and Iyengar (2023)} & \times & \checkmark & \checkmark & \times & \times & \checkmark & \checkmark & \checkmark & \times \\
\hline
\text{Estes and Richard (2023)} & \checkmark & \times & \checkmark & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Kotary et al. (2023)} & \checkmark & \checkmark & \checkmark & \checkmark & \times & \times & \checkmark & \times & \times \\
\hline
\text{McKenzie et al. (2023)} & \checkmark & \times & \times & \times & \times & \times & \checkmark & \times & \times \\
\hline
\text{Sun et al. (2023a)} & \checkmark & \times & \times & \times & \times & \times & \times & \checkmark & \times \\
\hline
\text{Sun et al. (2023b)} & \times & \checkmark & \times & \checkmark & \times & \times & \checkmark & \times & \times \\
\hline
\end{array}
$$

$$
\begin{array}{|l|l|}
\hline
\text{Abbreviation} & \text{Description} \\
\hline
\text{ADMM} & \text{alternating direction method of multipliers} \\
\text{CSO} & \text{contextual stochastic optimization} \\
\text{CVaR} & \text{conditional value at risk} \\
\text{DRO} & \text{distributionally robust optimization} \\
\text{DNN} & \text{deep neural network} \\
\text{ERM} & \text{empirical risk minimization} \\
\text{FP} & \text{fixed point} \\
\text{ILO} & \text{integrated learning and optimization} \\
\text{IFT} & \text{implicit function theorem} \\
\text{kNN} & k\text{-nearest neighbor} \\
\text{KKT} & \text{Karush-Kuhn-Tucker} \\
\text{KL} & \text{Kullback-Leibler} \\
\text{LDR} & \text{linear decision rule} \\
\text{LP} & \text{linear program} \\
\text{MDP} & \text{Markov decision process} \\
\text{ML} & \text{machine learning} \\
\text{MLE} & \text{maximum likelihood estimation} \\
\text{MILP} & \text{mixed-integer linear program} \\
\text{NW} & \text{Nadaraya-Watson} \\
\text{RKHS} & \text{reproducing kernel Hilbert space} \\
\text{SAA} & \text{sample average approximation} \\
\text{SLO} & \text{sequential learning and optimization} \\
\text{QP} & \text{quadratic program} \\
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

3: in non-contextual setting

4: use LDRs to solve dynamic optimization problems with side information

5: pertubed distributions in Wasserstein ambiguity set:
- have a different conditional information structure 
  - than estimated conditional distribution 
- DRO(distributionally robust optimization) with causal transport metric 
  - place an additional causality constraint on transport plan
  - compare to Wasserstein metric 

6: Bayesian interpretation of decision rule optimization 
- using SGD 
- provide an unbaised estimate of worst-case objective function of a DRO problem 
  - as long as a uniqueness condition is satisfied 
- Wasserstein ambiguity set violates this condition 
- use KL(Kullback-Leibler) divergence to train models 

# 4 SLO(Sequential learning and optimization )

- a more traditional setting 
  - sconditional distribution is learned from data 
  - used directlly in optimization model 
- attempt to produce disicions:
  - robust to model misspecification 

## 4.1 Learning conditional distribution 

employed discrete models for $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $

- motivatied from computational perspective
  - CSO problem [(5)](#5) is easier to solve 

CSO under continuous distribution:
- needs to be first replaced by SAA to be solved

Difficult: assess probability of outcomes:
- that not present in the dataset 
- justifying fixing the support of $\boldsymbol y $ to its observed values

### 4.1.1 Residual-based distribution 

1: use the errors of a trained regression model 
- construct conditional distributions 

Let: 

- $ g_{\hat{\theta}} $ be a regression model trained to predict
  - the response $ \boldsymbol{y} $ 
  - from the covariate $ \boldsymbol{x} $

minimizing an estimation error $ \rho $ as in [(7)](#7)

$ \boldsymbol{\epsilon}_{i}=\boldsymbol{y}_{i}-g_{\hat{\boldsymbol{\theta}}}\left(\boldsymbol{x}_{i}\right) $: residual error of sample $i $

$ \left\{\boldsymbol{\epsilon}_{i}\right\}_{i=1}^{N} $: set of residuals measured on the historical data 

- used to form the conditional distribution 

$ f_{\boldsymbol{\theta}}(\boldsymbol{x})=\mathbb{P}^{\mathrm{ER}}(\boldsymbol{x}):=\frac{1}{N} \sum_{i=1}^{N} \delta_{\operatorname{proj}_{\mathcal{Y}}\left(\mathrm{g}_{\hat{\boldsymbol{\theta}}}(\boldsymbol{x})+\boldsymbol{\epsilon}_{\mathrm{i}}\right)} $: the conditional distribution 
- $ \operatorname{proj}_{y} $ the projection on the support $ \mathcal{Y} $

the rCSO(residual-based CSO):

#### 10

$ (\mathbf{r C S O}) \min _{\boldsymbol{z} \in \mathcal{Z}} h\left(\boldsymbol{z}, \mathbb{P}^{\mathrm{ER}}(\boldsymbol{x})\right) $


Advantage:

- can be applied in conjunction with any trained regression model 

2: conditional distribution for two-stage and multi-stage CSO 
- use the residual obtained from parametric regression on historical data

Notice: historical data is used twice 

- train the regression model $g_{\boldsymbol \theta } $
- measure the residuals $\boldsymbol \varepsilon _i $

Lead to: underestimation of distribution of the residual error

To remove bias:

3: a leave-one-out model (jackknife)

- measure the residuals as: $ \tilde{\boldsymbol{\epsilon}}_{i}=\boldsymbol{y}_{i}-g_{\hat{\boldsymbol{\theta}}_{-i}}\left(\boldsymbol{x}_{i}\right) $ 
  -  $ \hat{\boldsymbol{\theta}}_{-i} $ is trained using all except the $i $-th sample $ \left(\boldsymbol{x}_{i}, \boldsymbol{y}_{i}\right) $
- can be applied to heteroskedastic case in 3 
  - obtain this conditional distribution :
  - $ f_{\boldsymbol{\theta}}(\boldsymbol{x}):=\frac{1}{N} \sum_{i=1}^{N} \delta_{\operatorname{proj}}^{\mathcal{Y}}\left(\mathrm{g}_{\hat{\boldsymbol{\theta}}}(\boldsymbol{x})+\hat{\mathrm{Q}}(\boldsymbol{x}) \hat{\boldsymbol{\epsilon}}_{\mathrm{i}}\right) $
    - by first estimating the conditional covariance matrix $ \hat{Q}(\boldsymbol{x}) $
    - form the residuals:  $ \hat{\boldsymbol{\epsilon}}_{i}=\left[\hat{Q}\left(\boldsymbol{x}_{i}\right)\right]^{-1}\left(\boldsymbol{y}_{i}-g_{\hat{\boldsymbol{\theta}}}\left(\boldsymbol{x}_{i}\right)\right) $

### 4.1.2 Weight-based distribution 

A typical approach for formulating the CSO problem:

assign weights to observations of the uncertain parameters in the historical data 
- solve wSAA(weighted SAA problem) given by:

#### (11)

$ (\mathbf{w S A A}) \min _{z \in \mathcal{Z}} h\left(\boldsymbol{z}, \sum_{i=1}^{N} w_{i}(\boldsymbol{x}) \delta_{\boldsymbol{y}_{i}}\right) $

- $ f_{\boldsymbol{\theta}}(\boldsymbol{x})=\sum_{i=1}^{N} w_{i}(\boldsymbol{x}) \delta_{\boldsymbol{y}_{i}} $: conditional distribution 

  - fully determined by the function used to assign a weight to historical samples 


Different approaches be proposed 
- to determine the sample weights with ML method 

**Weights based on proximity**

Sample weights can be assigned based on the distance between:

- covariate $\boldsymbol x $
- each historical sample $\boldsymbol x_i$ 

Instance: (kNN)$k$-nearest neighbor estimation 

- gives equal weight to $k $ closest samples 
- 0 weight for all other samples 
- $ w_{i}^{\mathrm{kNN}}(\boldsymbol{x}):=(1 / k) \mathbb{1}\left[\boldsymbol{x}_{i} \in \mathcal{N}_{k}(\boldsymbol{x})\right] $
  - $ \mathcal{N}_{k}(\boldsymbol{x}) $ the set of $ k $ nearest neighbors of $\boldsymbol  x$
  - $ \mathbb{1}[\cdot] $ : the indicator function.

Though: simple

Benefit: asymptotic consistency
- guarantee prescriptive performance 

Another way: kernel density estimators 

NW(Nadaraya-Watson) kernel estimator employ a weight function:

$ w_{i}^{\mathrm{KDE}}(\boldsymbol{x}):=\frac{K\left(\left(\boldsymbol{x}-\boldsymbol{x}_{i}\right) / \boldsymbol{\theta}\right)}{\sum_{j=1}^{N} K\left(\left(\boldsymbol{x}-\boldsymbol{x}_{j}\right) / \boldsymbol{\theta}\right)} $

- $ K $ : kernel function 
- $ \boldsymbol{\theta} $ : its bandwidth parameter
- Can use different kernel function 
  - e.g. Gaussian kernel: $ K(\boldsymbol{\Delta}) \propto \exp \left(-\|\boldsymbol{\Delta}\|^{2}\right) $

Also: bayesian approach that :
- exploits the Dirichlet process mixture 
  - to assign sample weights

  **Weights based on random forest**

  Weights can be designed 
  - based on random forest regressors

  Simplest setting:
  - weight function of a decision tree regressor is given by:

  $ w_{i}^{t}(\boldsymbol{x}):=\frac{\mathbb{1}\left[\mathcal{R}_{t}(\boldsymbol{x})=\mathcal{R}_{t}\left(\boldsymbol{x}_{i}\right)\right]}{\sum_{j=1}^{N} \mathbb{1}\left[\mathcal{R}_{t}(\boldsymbol{x})=\mathcal{R}_{t}\left(\boldsymbol{x}_{j}\right)\right]} $

  - $ \mathcal{R}_{t}(\boldsymbol{x}) $ : the terminal node of tree $ t $ 
    -  contains covariate $ \boldsymbol{x} $

  A decision tree:
  - assign equal weights to all historical sample 
    - that end in the same leaf node as $\boldsymbol  x $

  Random forest weight function:
  - generalize this idea 
  - over many random decision trees 

  Weight function is defined as:

  $ w_{i}^{\mathrm{RF}}(\boldsymbol{x}):=\frac{1}{T} \sum_{t=1}^{T} w_{i}^{t}(\boldsymbol{x}) $

  - $ w_{i}^{t} $ the weight function of tree $ t $

  Random forests are trained for:

  - perform an inference task
    - e.g. regression, classification
  - also used and interpreted as:
  - nonparametric conditional density estimators

  1: conditions for the asymptotic optimality and consistency of prescriptions 
  - obtained by solving problem [(11)](#11)
  - with weights functions given by kNN, NW kernel estimator, local linear regression 

### 4.1.3 Expected value-based models 

When cost function is linear:

training pipeline of SLO:

reduces to conditional mean estimation 

1: train regression trees 
- forecast daily expected sales 
  - for different product categories
- inventory and pricing peoblem

May attempt to approximate the doncitional density $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $ using a point prediction $ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $

2: a last-mile delivery problem 
- customer orders are assigned to drivers 
- replace conditional distribution of stochastic travel time 
  - with point predictor 
  - accounts for the number of stops, total distance of the trip 

## 4.2 Regularization and distributionally robust optimization 

Non-parametric conditional density estimation method benefit from asymptotic consistency, but:

- produce overly optimistic policies 
  - when size of covariate vector is large 

To circumvent this issue:

- regularize the CSO problem
- cast it as a DRO problem 
  - attempts to minimize the worst-case expected cost 
  - over the set of distributions $ \mathcal{B}_{r}\left(f_{\boldsymbol{\theta}}(\boldsymbol{x})\right) $
    - lie at a distance $r$
    - from the estimated distribution 
- $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $

1: generate bootstrap data 
- from training set 
- use as prxy for "out-of-sample disappointment"
  - of action $\boldsymbol z $
  - resulting from out-of-sample cost
    - exceeding the budget 
    - given by $ \sup _{\mathbb{Q}_{y} \in \mathcal{B}_{r}\left(f_{\theta}(\boldsymbol{x})\right)} h\left(\boldsymbol{z}, \mathbb{Q}_{y}\right) $
- for NW kernel estimator and KNN estimator:
  - DRO under a range of ambiguity set 
  - can be reformulated as convex optimization problem 
- Use KL divergence
  - measure distance between :
    - probability distributions 
  - obtain:
    - guarantees with respect to estimate-then-optimize model 
    - taking bootstrap data as proxy 
    - for out-of-sample data 

2: Taking center of Wasserstein ambiguity set:
- be NW kernel estimator 

Show that: 

- distributionally robust newsvendor and CVaR(conditional value at risk) portfolio optimization problems 
  - can be reformulated as convex program
- provide conditions to obtain:
  - asymptotic convergence 
  - out-of-sample guarantees on the solutions of DRO model 

3: study distributionally robust kNN regression problem 
- by combining point estimation of outcome
  - with DRO model over Wasserstein ambiguity set 
- use kNN predict the outcome 
  - based on weighted distance metric 
    - constructed from the estimate 

4: study a distributionally robust contextual portfolio allocation problem 
- worst-case conditional return-risk tradeoff is computed
  - over an optimal transport ambiguity set 
    - consisting of pertubations of joint distributions of covariates and returns 

- generalize the mean-variance and mean-CVaR model 
  - distributionally robust models are equivalent to 
    - semi-definite 
    - second-order cone representable program 

5: solve a DRO problem with novel ambiguity set 
- based on trimming the empirical conditional distribution 
  - i.e. reducing the weights over the support points 
- show thelink between trimming a distribution and partial mass transportation problem 
- 6: application in the optimal power flow problem 

7: Distributionally robust extension of rCSO model 
- hedges against all distributions 
  - lie in $r$ radius of (Wasserstein) ambiguity ball 
    - centered at the estimated distribution $\mathbb  P ^{ER }(\boldsymbol  x )$

8: a DRO model to solve two-stage multi-item joint production and pricing problem 
- with a partitioned-moment-based ambiguity set 
- constructed by clustering the residual 
  - estimated from an additive demand model 

9: an expected value-based model 
- suggest an ambiguity set that is informed by the estimation metric 
  - used to train $ g_{\hat{\theta}} $.
- that is:

$ \min _{\boldsymbol{z} \in \mathcal{Z}} \sup _{\boldsymbol{\theta} \in \mathcal{U}(\hat{\boldsymbol{\theta}}, r)} c\left(\boldsymbol{z}, g_{\boldsymbol{\theta}}(\boldsymbol{x})\right) $

- $ \mathcal{U}(\hat{\boldsymbol{\theta}}, r):=\left\{\boldsymbol{\theta} \in \boldsymbol{\theta} \mid \rho\left(g_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right) \leq \rho\left(g_{\hat{\boldsymbol{\theta}}}, \hat{\mathbb{P}}_{N}\right)+r\right\} $
- finite-dimensional convex reformulations can be obtained 
  - when $ g_{\boldsymbol{\theta}}(\boldsymbol{x}):=\boldsymbol{\theta}^{T} \boldsymbol{x} $
- promote the use of "robustness optimization" form 

# 5 Integrated learning and optimization 


ILO is an end-to-end framework that :

includes three components in the training pipeline: 

- (i) a prediction model that:
  -  maps the covariate to a predicted distribution (or possibly a point prediction), 
- (ii) an optimization model that:
  -  takes as input a prediction and returns a decision,
- (iii) a task-based loss function that :
  -  captures the downstream optimization problem.

The parameters of the prediction model are trained to : 

- maximize the prescriptive performance of the policy,
  -  i.e., it is trained on the task loss incurred by this induced policy 
  -  rather than the estimation loss.

Next:

we discuss several methods for implementing the ILO approach

- describing the different models that are used in ILO([Section 5.1]()) 
- present the algorithms used
to perform the training
- divide the algorithms into four categories :
  - unrolling([Section 5.2]())
  - implicit differentiation([Section 5.3]())
  - a surrogate differentiable loss function([Section 5.4]())
  - a differentiable optimizer([Section 5.5]())


## 5.1 Models

1: Train a prediction model 

- using a loss that:
  - influenced by performance of an action 
    - prescribed by conditional expected value-based decision rule
- in a protfolio management context 

More recent 
- integrate full optimization model into pipeline 

We next:
- summarize how ILO is applied to 2 contextual optimization model 
- introduce 2 additional popular task models 

### Expected value-based model 

Most literature:
- perform ILO on expected value-based optimization model 

Following the notation in [Definition 1](#definition-1-expected-value-based-model) :

$ \mathcal{L}(\boldsymbol{\theta}):=H\left(z^{*}\left(\cdot, g_{\boldsymbol{\theta}}\right), \hat{\mathbb{P}}_{N}\right)= $ $ \mathbb{E}_{\mathfrak{P}_{N}}\left[c\left(z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}\right)\right] $
- loss, training pipeline interested in.

$ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $ 
- a point predictor for $ \boldsymbol{y} $, 
-  we interpret as a prediction of $ \mathbb{E}[\boldsymbol{y} \mid \boldsymbol{x}] $.

This already raises challenges related to:
- the non-convexity of the integrated loss function $ \mathcal{L}(\boldsymbol{\theta}) $ 
-  its differentiation with respect to $ \boldsymbol{\theta} $ :

$ \begin{aligned} \nabla_{\boldsymbol{\theta}} \mathcal{L}(\boldsymbol{\theta}) & =\frac{1}{N} \sum_{i=1}^{N} \nabla_{\boldsymbol{\theta}} c\left(z^{*}\left(\boldsymbol{x}_{i}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}_{i}\right) \\ & =\left.\frac{1}{N} \sum_{i=1}^{N} \sum_{j=1}^{d_{z}} \sum_{k=1}^{d_{\boldsymbol{y}}} \frac{\partial c\left(z^{*}\left(\boldsymbol{x}_{i}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}_{i}\right)}{\partial z_{j}} \frac{\partial z_{j}^{*}\left(\boldsymbol{x}_{i}, \hat{\boldsymbol{y}}\right)}{\partial \hat{y}_{k}}\right|_{\hat{\boldsymbol{y}}=g_{\theta}\left(\boldsymbol{x}_{i}\right)} \nabla_{\boldsymbol{\theta}}\left[g_{\boldsymbol{\theta}}\left(\boldsymbol{x}_{i}\right)\right]_{k}\end{aligned} $

- $ \frac{\partial z_{j}^{*}\left(\boldsymbol{x}_{i}, \hat{\boldsymbol{y}}\right)}{\partial \hat{y}_{k}} $ : the most problematic evaluation
  - e.g.:  when $ z^{*}\left(\boldsymbol{x}_{i}, g_{\boldsymbol{\theta}}\right) $ is the solution of a LP(Linear program) 
    - its gradient is either null or non-existent

### Conditional distribution-based model 

In the context of :

learning a conditional distribution model : $ f_{\theta}(\boldsymbol{x}) $

1: First study ILO problem 

- model distribution of uncertain parameter 
  - using parametric distribution 
- for newsvendor problem:
  - ILO outperform :
    - DRO with neural networks
    - SLO with MLE(maximum likelihood estimation)
  - when there is model misspecification 

Since then:

- formulate CSO problem as weighted SAA model (refer to [Section 4.1.2](#412-weight-based-distribution))

- prediction model amounts to identify vector of weights to assign to each historical sample 

Taken by 2:
- train random forest regressor in integrated fashion to assign weights 

by 3:
- how to train general differentiable models 
  - to predict probabilities of uncertain parameter $\boldsymbol y$ with finite support 

### Regret minimization task

tackle ILO problem from regret 

1: contextual point predictor $ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $ is learned by:

- minimizing regret associated with implementing the prescribed action 
  - based on mean estimator $ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $ 
  - instead of based on the realized parameters $ \boldsymbol{y} $
  - a.k.a: optimal hindsight or wait-and-see decision 

Value of an expected value-based policy  $ \pi_{\boldsymbol{\theta}}(\boldsymbol{x}):=  z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ is measured as the expected regret defined as:

#### (13)

$ H_{\text {Regret }}\left(\pi_{\boldsymbol{\theta}}, \mathbb{P}\right):=\mathbb{E}_{\mathbb{P}}\left[c\left(\pi_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)-c\left(z^{*}(\boldsymbol{x}, \boldsymbol{y}), \boldsymbol{y}\right)\right] $

Minimizing the expected regret: 
- returns the same optimal parameter vector $ \boldsymbol{\theta} $ as the [ILO problem (9)](#9). 

Because:

$ H_{\text {Regret }}\left(\pi, \hat{\mathbb{P}}_{N}\right)=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[c(\pi(\boldsymbol{x}), \boldsymbol{y})-c\left(z^{*}(\boldsymbol{x}, \boldsymbol{y}), \boldsymbol{y}\right)\right]=H\left(\pi, \hat{\mathbb{P}}_{N}\right)-\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[c\left(z^{*}(\boldsymbol{x}, \boldsymbol{y}), \boldsymbol{y}\right)\right] $

- both $ H_{\text {Regret }}\left(\pi, \hat{\mathbb{P}}_{N}\right) $ and $ H\left(\pi, \hat{\mathbb{P}}_{N}\right) $ have the same set of minimizers

### Optimal action imitation task 

ILO has some connections to inverse optimization :

- learning the parameters of an optimization model 
  - given data about its optimal solution

one can :

replace the original objective of ILO 
- with an objective that seeks 
- to produce a $ z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ 
  - that is as close as possible to the optimal hindsight action 
  - and, therefore, closer to the regret objective. 

Specifically, to learn a policy that "imitates" the optimal hindsight action: 

one can first augment the data set 
- with $ \boldsymbol{z}_{i}^{*}:=z^{*}\left(\boldsymbol{x}_{i}, \boldsymbol{y}_{i}\right) $ to get $ \left\{\left(\boldsymbol{x}_{i}, \boldsymbol{y}_{i}, \boldsymbol{z}_{i}^{*}\right)\right\}_{i=1}^{N} $. 

Thereafter:

a prediction model $ f_{\boldsymbol{\theta}}(\boldsymbol{x}) $ is learned in a way : 
- that the action $ z^{*}\left(\boldsymbol{x}_{i}, f_{\boldsymbol{\theta}}\right) $ is as close as possible to $ \boldsymbol{z}_{i}^{*} $
  -  for all samples in the training set:

#### (14)

$ H_{\text {Imitation }}\left(\pi, \hat{\mathbb{P}}_{N}^{\prime}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}^{\prime}}\left[d\left(\pi(\boldsymbol{x}), \boldsymbol{z}^{*}\right)\right]=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[d\left(\pi(\boldsymbol{x}), z^{*}(\boldsymbol{x}, \boldsymbol{y})\right)\right] $


- $ \hat{\mathbb{P}}_{N}^{\prime} $ : the empirical distribution 
  - on the lifted tuple $ \left(\boldsymbol{x}, \boldsymbol{y}, z^{*}(\boldsymbol{x}, \boldsymbol{y})\right) $ 
  - based on the augmented data set 
  - and a distance function $ d\left(\boldsymbol{z}, \boldsymbol{z}^{*}\right) $. 

Note that:

there is no reason to believe that: 

the best imitator under a general distance function, 
- e.g., $ \left\|\boldsymbol{z}-\boldsymbol{z}^{*}\right\|_{2} $, 

performs well under our original metric $ H\left(\pi, \hat{\mathbb{P}}_{N}\right) $.

One exception:

For $ d\left(\boldsymbol{z}, \boldsymbol{z}^{*}\right):=c(\boldsymbol{z}, \boldsymbol{y})-c\left(\boldsymbol{z}^{*}, \boldsymbol{y}\right) $, 
- where we allow the distance to also depend on $ \boldsymbol{y} $, 
- for which we recover the regret minimization approach
- therefore the same solution as with $ H\left(\pi, \hat{\mathbb{P}}_{N}\right) $. 

## 5.2 Training by unrolling 

An approach to obtain Jacobian matrix $ \boldsymbol{\kappa} \frac{\partial z^{*}(\boldsymbol{x}, \hat{\boldsymbol{y}})}{\partial \hat{\boldsymbol{y}}} $ : unrolling 

it involves:

- approximating the optimization problem with an iterative solver
  - e.g.:  first-order gradient-based method 

Each operation is stored on the computational graph, 
- then allows, in principle, for computing gradients through classical back-propagation methods. 

Unfortunately: this approach requires extensive amounts of memory. 

Besides this: 

the large size of the computational graph 
- exacerbates the vanishing and exploding gradient problems 
  - typically associated with training neural networks

## Training using implicit differentiation 

Implicit differentiation allows:
- a memory-efficient backpropagation 
- as opposed to unrolling 
  - (we refer to Bai et al. 2019, for discussion on training constant memory implicit models using a fixed-point - FP - equation and feedforward networks of infinite depths).

1: appear to be the first to have employed implicit differentiation methods to train an ILO model
- which they refer to as OptNet. 

They consider expected value-based optimization models 
- take the form of constrained quadratic programs (QP) with equality and inequality constraints. 

They show how the implicit function theorem (IFT - Halkin 1974) can be used to differentiate $ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ with respect to $ \boldsymbol{\theta} $
- using the Karush-Kuhn-Tucker (KKT) conditions 
  -  are satisfied at optimality. 

Further:

they provide a custom solver based on a primal-dual interior method

- to simultaneously solve multiple QPs on GPUs in batch form, 
- permitting 100-times speedups compared to Gurobi and CPLEX. 

This approach is extended to conditional stochastic and strongly convex optimization models in Donti et al. (2017): 

They use sequential quadratic programming (SQP) to obtain quadratic approximations of the objective functions of the convex program at each iteration 

- until convergence to the solution and then differentiate the last iteration of SQP to obtain the Jacobian. 

For a broader view of implicit differentiation: we refer to the surveys by Duvenaud et al. (2020) and Blondel et al. (2022).

To solve large-scale QPs with linear equality and box inequality constraints:

2 Butler and Kwon (2023a) use the ADMM algorithm to decouple the differentiation procedure for primal and dual variables

thereby:
- decomposing the large problem into smaller subproblems. 

Their procedure relies on: 
- implicit differentiation of the FP equations of the alternating direction method of multipliers (ADMM) algorithm (ADMM-FP). 

They show that: 
- unrolling the iterations of the ADMM algorithm on the computational graph (Sun et al. 2016, Xie et al. 2019) results in higher computation time than ADMM-FP. 

Their empirical results on a portfolio optimization problem with 254 assets suggest that : 

computational time can be reduced by a factor of almost five 
- by using ADMM-FP compared to OptNet, 

mostly due to the use of the ADMM algorithm in the forward pass. 

Note that the experiments in Butler and Kwon (2023a) were conducted on a
CPU.

To extend OptNet to a broader class of problems:

3 introduce cvxpylayers that 
- relies on converting disciplined convex programs in the domain-specific language 
  - used by CVXPY into conic programs. 

They implicitly differentiate the residual map of the homogeneous self-dual embedding associated with the conic program.

4: note that using KKT conditions for constrained optimization problems with DNN-based policies"
- is computationally costly 
  - as "cvxpylayers struggles with solving problems containing more than 100 variables" (see also Butler and Kwon 2023a).
-  An alternative is to use projected gradient descent (PGD) 
   - where DNN-based policies are updated using an iterative solver 
   - and projected onto the constraint set $ \mathcal{Z} $ at each iteration 
   - and the associated FP system (Donti et al. 2021, Chen et al. 2021, Blondel et al. 2022) is used to obtain the Jacobian.
 - Since a closed-form solution for the projection onto $ \mathcal{Z} $ is unavailable in many cases, 
   - the projection step may be costly, 
   - and in some cases, PGD may not even converge to a feasible point (Rychener et al. 2023). 

To avoid computing the projection in the forward pass, 5 solve the expected value-based CSO problem using: 
- Davis-Yin operator splitting (Davis and Yin 2017) 
- while the backward pass uses the Jacobian-free backpropagation (Fung et al. 2022) 
  - in which the Jacobian matrix is replaced with an identity matrix (see also Sahoo et al. 2023, where a similar approach is used for expected value-based models).

To mitigate the issues with unrolling: 6 propose FP folding (fold-opt) that:
- allows analytically differentiating the FP system of general iterative solvers, 
  - e.g., ADMM, SQP, and PGD. 

By unfolding (i.e., partial unrolling), some of the steps of unrolling are grouped in analytically differentiable update function $ \mathcal{T}: \mathbb{R}^{d_{y}} \rightarrow \mathbb{R}^{d_{y}} $ :

$ z_{k+1}(\boldsymbol{x}, \hat{\boldsymbol{y}})=\mathcal{T}\left(z_{k}(\boldsymbol{x}, \hat{\boldsymbol{y}}), \hat{\boldsymbol{y}}\right) $

Realizing that $ z^{*}(\boldsymbol{x}, \hat{\boldsymbol{y}}) $ is the FP of the above system:
- they use the IFT to obtain a linear system (a differential FP condition) 
  - that can be solved to obtain the Jacobian. 

This effectively decouples the forward and backward pass enabling 
- the use of black box solvers like Gurobi for the forward pass 
- while cvxpylayers is restricted to operator splitting solvers like ADMM. 


An added benefit of using fold-opt is that: 

it can solve non-convex problems. 

In the case of portfolio optimization, the authors note that :

- the superior performance of their model with respect to cvxpylayers can be explained by the precise calculations made in the forward pass by Gurobi.



While speedups can be obtained for sparse problems, Sun et al. (2023b) remark that:
- the complexity associated with differentiating the KKT conditions is cubic in the total number of decision variables and constraints in general. 

They propose an alternating differentiation framework (called Alt-Diff) to:
- solve parameterized convex optimization problems 
- with polyhedral constraints using ADMM 
  - that decouples the objective and constraints. 

This procedure results in:

a smaller Jacobian matrix 
- when there are many constraints 
- since the gradient computations for primal, dual, and slack variables are done alternatingly. 

The gradients are shown to converge to those obtained by differentiating the KKT conditions. 

The authors employ truncation of iterations to compensate for the slow convergence of ADMM when compared to interior-point methods 

and provide theoretical upper bounds on the error in the resulting gradients. 

Alt-Diff is shown to achieve the same accuracy with truncation and lower computational time when compared to cvxpylayers:
- for an energy generation scheduling problem.

Motivated by OptNet, several extensions have been proposed to solve linear and combinatorial problems. 

7 solve LP-representable combinatorial optimization problems and LP relaxations of combinatorial problems during the training phase. 

Their model, referred to as QPTL (Quadratic Programming Task Loss):

- adds a quadratic penalty term to the objective function of the linear problem. 

This has two advantages: 
- it recovers a differentiable linear-quadratic program, and the added term acts as a regularizer, 
- which might avoid overfitting. 

To solve a general mixed-integer LP (MILP), 8 develop a cutting plane method MIPaal,
- which adds a given number of cutting planes in the form of constraints $ S \boldsymbol{z} \leq \boldsymbol{s} $ to the LP relaxation of the MILP.

Instead of adding a quadratic term, 9 propose Intopt based on the interior point method to solve LPs
- that adds a log barrier term to the objective function and differentiates the homogeneous self-dual formulation of the LP. 

Their experimental analyses show that: 
- this approach performs better on energy cost-aware scheduling problems than QPTL using the data from Ifrim et al. (2012).

10 introduce an ILO framework with the weighted average of Sharpe ratio and MSE loss as a task loss and replace the optimization problem with a surrogate DRO problem. 

By using convex duality:

they reformulate the minimax problem as a minimization problem and learn the parameters (e.g., size of ambiguity set) using implicit differentiation instead of cross-validation (CV). 

More specifically, the DRO model uses a deviation risk measure (e.g., variance) to control variability in the portfolio returns associated with the prediction errors $ \boldsymbol{\epsilon}_{i}= $ $ \boldsymbol{y}_{i}-g_{\theta}\left(\boldsymbol{x}_{i}\right): $

$ \underset{\boldsymbol{z}}{\operatorname{argmin}} \max _{\mathbb{Q} \in \mathcal{B}_{r}^{\phi}\left(\hat{\mathbb{P}}_{N}\right)} \mathbb{E}_{\mathbb{Q}}\left[\left(\boldsymbol{\epsilon}^{\top} \boldsymbol{z}-\mathbb{E}_{\mathbb{Q}}\left[\boldsymbol{\epsilon}^{\top} \boldsymbol{z}\right]\right)^{2}\right] $

- the distribution of errors lies in $ \phi $-divergence (e.g., Hellinger distance) based ambiguity set $ \mathcal{B}_{r}^{\phi}\left(\hat{\mathbb{P}}_{N}\right)=\left\{\mathbb{Q}: \mathbb{E}_{\hat{\mathbb{P}}}[\phi(\mathbb{Q} / \hat{\mathbb{P}})] \leq r\right\} $ centered at $ \hat{\mathbb{P}}_{N}=\frac{1}{N} \sum_{i=1}^{N} \delta_{\epsilon_{i}} $.

For convex problems, the optimality conditions are given by KKT conditions, 

can be represented as $ F(\boldsymbol{\theta}, \boldsymbol{z})=0 $ 
- $ F: \mathbb{R}^{d_{\boldsymbol{x}}} \times \mathbb{R}^{d_{\boldsymbol{z}}} \rightarrow \mathbb{R}^{m} $, 
  - $ m $ is proportional to the number of constraints that define $ \mathcal{Z} $. 

From the classical IFT (Dontchev et al. 2009), we know that: 

if $ F $ is continuously differentiable and the Jacobian matrix with respect to $ \boldsymbol{z} $, 
- denoted by $ \nabla_{\boldsymbol{z}} F(\boldsymbol{\theta}, \boldsymbol{z}(\boldsymbol{\theta})) $, 

is non-singular at the point $ (\overline{\boldsymbol{\theta}}, \overline{\boldsymbol{z}}) $, 

then:

there exists a neighborhood around $ \overline{\boldsymbol{\theta}} $ 
- for which the gradient of the optimal solution with respect to the parameters is given by:

$ \frac{\partial \boldsymbol{z}^{*}(\boldsymbol{\theta})}{\partial \boldsymbol{\theta}}=-\left(\nabla_{\boldsymbol{z}} F(\boldsymbol{\theta}, \boldsymbol{z}(\boldsymbol{\theta}))\right)^{-1} \nabla_{\boldsymbol{\theta}} F(\boldsymbol{\theta}, \boldsymbol{z}(\boldsymbol{\theta})) $

When the Jacobian matrix $ \nabla_{\boldsymbol{z}} F(\boldsymbol{\theta}, \boldsymbol{z}(\boldsymbol{\theta})) $ is singular, classical IFT cannot be applied. 

This occurs in linear programs and can also arise in smooth QPs as shown in 11

11 obtain a generalization of IFT to non-smooth functions:
- using conservative Jacobians that generalize Clarke Jacobians (Clarke 1990) for locally Lipschitz function $ F $. 

They also derive conservative Jacobians for conic optimization layers (Agrawal et al. 2019).

Further, 12 illustrate using cvxpylayers that in a bilevel program 

- which is a composition of a quadratic function 
  - with the solution map of a linear program, 

gradient descent does not converge but gets stuck in a "limit cycle of non-critical points" even though invertibility condition does not hold only on a set of measure 0 (defined by a line) 
- where the solution map moves from extreme point to another. 

As this example illustrates, the convergence of gradient methods based on IFT can be impacted by the non-invertibility of the Jacobian matrix and nonsmoothness 
- which is difficult to verify a priori. 

As a result, research efforts have been directed toward designing surrogate loss functions and perturbation-based models for CSO problems that could circumvent the need to use the IFT.

## 5.4  Training using a surrogate differentiable loss function

As discussed in Section 5.1, 

minimizing directly the task loss in [(9)](#9) or the regret in [(13)](#13) is computationally difficult in most cases. 

For instance: 

the loss may be piecewise-constant as a function of the parameters of a prediction model and, 
- thus, may have no informative gradient. 

To address this issue, several surrogate loss functions with good properties, 
- e.g., differentiability and convexity,

have been proposed to train ILO models.

### 5.4.1 SPO+

In CSO problems, 1 first tackle the potential nonuniqueness of $ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ by introducing a Smart "Predict, then Optimize" (SPO) model 
- where the decision-maker chooses to minimize the empirical average of the regret 
  - under the worst-case optimal solution as defined below:

#### (15)

$ \begin{aligned} \text { (SPO) } \quad \min _{\boldsymbol{\theta}} \max _{\pi} & H_{\text {Regret }}\left(\pi, \hat{\mathbb{P}}_{N}\right), \\ & \text { s.t. } \pi(\boldsymbol{x}) \in \underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} c\left(\boldsymbol{z}, g_{\boldsymbol{\theta}}(\boldsymbol{x})\right), \forall \boldsymbol{x} .\end{aligned} $

In the expected value-based model, they show that the SPO objective reduces to training the prediction model according to the ERM problem:

$ \boldsymbol{\theta}^{\star} \in \underset{\boldsymbol{\theta}}{\operatorname{argmin}} \rho_{\text {SPO }}\left(g_{\boldsymbol{\theta}}, \hat{\mathbb{P}}_{N}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\ell_{\text {SPO }}\left(g_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)\right] $

- $ \ell_{\mathrm{SPO}}(\hat{\boldsymbol{y}}, \boldsymbol{y}):=\sup _{\overline{\boldsymbol{z}} \in \operatorname{argmin}_{\boldsymbol{z} \in \mathcal{Z}} c(\boldsymbol{z}, \hat{\boldsymbol{y}})} c(\overline{\boldsymbol{z}}, \boldsymbol{y})-c\left(z^{*}(\boldsymbol{x}, \boldsymbol{y}), \boldsymbol{y}\right) $

Since the SPO loss function is nonconvex and discontinuous in $ \hat{\boldsymbol{y}} $ (Ho-Nguyen and Kılıç-Karzan 2022, Lemma 1), Elmachtoub and Grigas (2022) focus on the linear objective $ c(\boldsymbol{z}, \boldsymbol{y}):=\boldsymbol{y}^{T} \boldsymbol{z} $ and replace the SPO loss with a convex upper bound called SPO+:

$ \ell_{\text {SPO }+}(\hat{\boldsymbol{y}}, \boldsymbol{y}):=\sup _{\boldsymbol{z} \in \mathcal{Z}}(\boldsymbol{y}-2 \hat{\boldsymbol{y}})^{T} \boldsymbol{z}+2 \hat{\boldsymbol{y}}^{T} z^{*}(\boldsymbol{x}, \boldsymbol{y})-\boldsymbol{y}^{T} z^{*}(\boldsymbol{x}, \boldsymbol{y}) $

 has a closed-form expression for its subgradient:

#### (16)

$ 2\left(z^{*}(\boldsymbol{x}, \boldsymbol{y})-z^{*}(\boldsymbol{x}, 2 \hat{\boldsymbol{y}}-\boldsymbol{y})\right) \in \nabla_{\hat{\boldsymbol{y}}} \ell_{\mathbf{s P O}+}(\hat{\boldsymbol{y}}, \boldsymbol{y}) $

Loke et al. (2022) propose a decision-driven regularization model (DDR) 
- that combines prediction accuracy - and decision quality 
in a single optimization problem with loss function as follows:

$ \ell_{\mathrm{DDR}}(\hat{\boldsymbol{y}}, \boldsymbol{y})=d(\hat{\boldsymbol{y}}, \boldsymbol{y})-\lambda \min _{\boldsymbol{z} \in \mathcal{Z}}\left\{\mu \boldsymbol{y}^{\top} \boldsymbol{z}+(1-\mu) \hat{\boldsymbol{y}}^{\top} \boldsymbol{z}\right\} $

and SPO+ being a special case with $ \mu=-1, \lambda=1 $, and $ d(\hat{\boldsymbol{y}}, \boldsymbol{y})=2 \hat{\boldsymbol{y}}^{\top} z^{*}(\boldsymbol{x}, \boldsymbol{y})-\boldsymbol{y}^{T} z^{*}(\boldsymbol{x}, \boldsymbol{y}) $.

#### SPO+ for combinatorial problems

Evaluating the gradient of $ S P O+l o s s $ in [(16)](#16) requires solving the optimization problem [(8)](#8) to obtain $ z^{*}(\boldsymbol{x}, 2 \hat{\boldsymbol{y}}-\boldsymbol{y}) $ for each data point. 

This can be computationally demanding when the optimization model in [(8)](#8) is an NP-hard problem. 

1 propose a SPO-relax approach that : 

- computes the gradient of SPO+ loss by solving instead a continuous relaxation when [(8)](#8) is a MILP. 

They also suggest: 
- speeding up the resolution using a warm-start for learning with a pre-trained model that:
  -  uses MSE as the loss function. 
- Another way proposed to speed up the computation is: warm-starting the solver. 
  - For example, $ z^{*}(\boldsymbol{x}, \boldsymbol{y}) $ can be used as a starting point for MILP solvers or to cut away a large part of the feasible space.

Mandi et al. (2020) show that:
- for weighted and unweighted knapsack problems as well as energycost aware scheduling problems (CSPLib, Problem 059, Simonis et al. 2014), SPO-relax results in:
- faster convergence and similar performance compared to SPO+ loss. 

Also, SPO-relax provides low regret solutions and faster convergence compared to QPTL 
- in the aforementioned three problems, 
- except in the weighted knapsack problem with low capacity.

With a focus on exact solution approaches, Jeong et al. (2022) study the problem of:

minimizing the regret in [(13)](#13) assuming a linear prediction model $ g_{\boldsymbol{\theta}}(\boldsymbol{x})=\boldsymbol{\theta} \boldsymbol{x} $ with $ \boldsymbol{\theta} \in \mathbb{R}^{d_{\boldsymbol{z}} \times d_{\boldsymbol{x}}} $. 

Under the assumption that : 

$ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ is unique for all $ \boldsymbol{\theta} $ and $ \boldsymbol{x} $, 

the authors reformulate the bilevel SPO problem as a single-level MILP using symbolic variable elimination. 

They show that:
- their model can achieve up to two orders of magnitude improvement in expected regret compared to SPO+ on the training set.

Muñoz et al. (2022) applies a similar idea of representing the set of optimal solutions with a MILP. 

They rely on the KKT conditions of the problem defining $ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $
- to transform the bilevel integrated problem into a single-level MILP. 

Finally, Estes and Richard (2023) use the SPO loss function
- to solve a two-stage LP with right-hand side uncertainty. 

They propose a lexicographical ordering rule to select the minimal solution 
- when there are multiple optima and approximate the resulting piecewise-linear loss function, lex-SPO, by a convex surrogate to find the point predictor.

#### SPO Trees. 

Elmachtoub et al. (2020) propose a model (SPOT) to construct decision trees that:

- segment the covariates based on the SPO loss function
-  while retaining the interpretability in the end-to-end learning framework.

Their model outperforms classification and regression trees (CART) in the numerical experiments 

on a news recommendation problem using a real-world dataset 

and on the shortest path problem with synthetic data (also used in Elmachtoub and Grigas (2022)).

Guarantees. Elmachtoub and Grigas (2022) show that: 

under certain conditions, the minimizers of the SPO loss, SPO+ loss and MSE loss are almost always equal to $ \mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[\boldsymbol{y}] $
- given that $ \mathbb{E}_{\mathbb{P}(\boldsymbol{y} \mid \boldsymbol{x})}[\boldsymbol{y}] \in \mathcal{H} $. 

Thus, $ \mathbf{S P O}+ $ is Fisher consistent (see Definition 4 in Appendix A) with respect to the SPO loss. 

This means that: 
- minimizing the surrogate loss also minimizes the true loss function. 

Ho-Nguyen and Kılınç-Karzan (2022) show that: 

for some examples of a multiclass classification problem, SPO+ is Fisher inconsistent, 
- while MSE loss is consistent. 

However, complete knowledge of the distribution is a limitation in practice
- where the decision-maker has access to only the samples from the distribution.

As a result, Ho-Nguyen and Kılınç-Karzan (2022) and Liu and Grigas (2021) provide calibration bounds:
- that hold for a class of distributions $ \mathcal{D} $ on $ \mathcal{X} \times \mathcal{Y} $ and ensure that:
- a lower excess risk of predictor for MSE and SPO+, respectively, translates to lower excess SPO risk (see Definition 5 in Appendix A).

In many ML applications, one seeks to derive finite-sample guarantees, 
- which are given in the form of a generalization bound,
  - i.e., an upper bound on the difference between the true risk of a loss function and its empirical risk estimate for a given sample size $ N $. 
A generalization bound for the SPO loss function is given in El Balghiti et al. (2022) (extension of El Balghiti et al. 2019) based on Rademacher complexity (see Definition 6 in Appendix A) of the SPO loss composed with the prediction functions $ g_{\boldsymbol{\theta}} \in \mathcal{H} $. 

More specifically, the bound achieved in El Balghiti et al. (2019) is $ \mathrm{O}\left(\sqrt{\frac{\log (N)}{N}}\right) $, and tighter bounds with respect to action and feature dimension are obtained using SPO function's structure 

and if $ \mathcal{Z} $ satisfies a "strength" property. 


Hu et al. (2022) show that for linear CSO problems, the generalization bound for MSE loss and SPO loss is $ \mathrm{O}\left(\sqrt{\frac{1}{N}}\right) $ 

while faster convergence rates for the SLO model compared to ILO model are obtained under certain low-noise assumptions. 

Elmachtoub et al. (2023) show that :

for non-linear optimization problems, SLO models stochastically dominate ILO in terms of their asymptotic optimality gaps
- when the hypothesis class covers the true distribution.

When the model is misspecified, they show that:

ILO outperforms SLO asymptotically in a general nonlinear setting.

### 5.4.2 Surrogate loss for a stochastic forest.

Kallus and Mao (2022) propose an algorithm called StochOptForest, 
- which generalizes the random-forest based local parameter estimation procedure in Athey et al. (2019). 

A second-order perturbation analysis of stochastic optimization problems allows them to scale to larger CSO problems 

since they can avoid solving an optimization problem at each candidate split. 

The policies obtained using their model are shown to be asymptotically consistent, 

and the benefit of ILO is illustrated by comparing their approach to the random forests of Bertsimas and Kallus (2020)
- on a set of problems with synthetic and real-world data.

### 5.4.3. Other surrogates. 

Wilder et al. (2019b) introduce ClusterNet to solve hard combinatorial graph optimization problems:
- by learning incomplete graphs. The model combines graph convolution networks
- to embed the graphs in a continuous space
- and uses a soft version of k-means clustering to obtain a differential proxy for the combinatorial problems,
  - e.g., community detection and facility location.

Numerical experiments on a synthetic data set show that:
- ClusterNet outperforms the two-stage SLO approach of first learning the graph and then optimizing, 
- as well as other baselines used in community detection and facility location.

Focusing on combinatorial problems, Vlastelica et al. (2019) propose a differentiable black-box (DBB) approach to tackle the issue that : 

the Jacobian of $ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ is zero almost everywhere 

by approximating the true loss function 
- using an interpolation controlled in a way that
  -  balances between "informativeness of the gradient" and "faithfulness to the original function".

Algorithmically, this is done by perturbing the prediction $ g_{\boldsymbol{\theta}}(\boldsymbol{x}) $ in the direction $ \nabla_{\boldsymbol{z}} c\left(z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}\right) $ and obtaining a gradient of the surrogate loss based on the effect of this perturbation on the resulting perturbed action.

Chung et al. (2022) introduce a computationally tractable ILO model : 

to solve non-linear CSO problems. 

Using the first-order Taylor expansion of the task loss around the prediction, 

they introduce a reweighted MSE loss function 

- where weights are determined by taking the gradient of task loss with respect to the prediction. 

To solve a large-scale multi-facility inventory allocation problem 
- with few samples for each facility, 

they use a single random forest that:

can predict the demand across facilities and products.

Assuming that each tree in the random forest provides an independent and identically distributed realization of the uncertain parameter, 

they obtain the conditional distribution of uncertain parameter, $ f_{\theta_{0}}=\frac{1}{T} \sum_{t=1}^{T} \delta_{\hat{\boldsymbol{y}}^{t}} $, 
- where $ \hat{\boldsymbol{y}}^{t} $ is the prediction of tree $ t $.

For each feature $ \boldsymbol{x}_{i} $ and conditional distribution $ f_{\boldsymbol{\theta}_{0}} $, 

they obtain an optimal allocation, $ z_{i}^{j}= $ $ z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}_{0}}\right) $ for facility $ j $ 
- that minimizes the average unmet demand. In the last step, they retrain the random forest to minimize the reweighted MSE loss function:

#### (17)

$ \underset{\boldsymbol{\theta}}{\operatorname{argmin}} \sum_{i=1}^{N} \sum_{j=1}^{M} \sum_{t=1}^{T} \mathbb{1}\left[\hat{y}_{i}^{t, j} \geq s_{i}^{j}+z_{i}^{j}\right]\left|f_{\boldsymbol{\theta}}\left(\boldsymbol{x}_{i}\right)-\hat{y}_{i}^{t, j}\right| $

- $ M $ is the number of facilities, 
- $ \hat{y}_{i}^{t, j} $ and $ s_{i}^{j} $ denote the demand and inventory levels, respectively, at facility $ j $. 

The above model [(17)](#17) solves the optimization problem once during training, 

and is shown to be scalable for a medical allocation problem in Sierra Leone when compared to Kallus and Mao (2022)
- where splitting of the feature space is done based on the task loss.

Lawless and Zhou (2022) introduce a loss function similar to Chung et al. (2022) that:

weighs the prediction error with a regret term as follows:

#### (18)

$ d\left(g_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)=\left[c\left(z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}\right)-c\left(z^{*}(\boldsymbol{x}, \boldsymbol{y}), \boldsymbol{y}\right)\right]\left(\boldsymbol{y}-g_{\boldsymbol{\theta}}(\boldsymbol{x})\right)^{2} $

Learning optimal $ \boldsymbol{\theta} $ from the above formulation involves an $ \operatorname{argmin} $ differentiation. 

So, the authors provide a two-step polynomial time algorithm to approximately solve the above problem:

It first computes a pilot estimator $ g_{\boldsymbol{\theta}_{0}} $
- by solving [(7)](#7) with $ d\left(g_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)=\left(g_{\boldsymbol{\theta}}(\boldsymbol{x})-\boldsymbol{y}\right)^{2} $ 

and then solving [(7)](#7) with the distance function in [(18)](#18) where:
-  $ c\left(z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right), \boldsymbol{y}\right) $ is substituted with $ c\left(z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}_{0}}\right), \boldsymbol{y}\right) $. 

The authors show that their simple algorithm performs comparably to SPO+.

We conclude this subsection on surrogate loss functions by : mentioning the efforts in Sun et al. (2023a) to learn a cost point estimator (in an expected value-based model)
- to imitate the hindsight optimal solution.

This is done by designing a surrogate loss function that:
- penalizes how much the optimal basis optimality conditions are violated. 

They derive generalization error bounds for this new loss function and employ them to provide a bound on the sub-optimality of the minimal $ \theta $.

## 5.5  Training using a surrogate differentiable optimizer

### 5.5.1  Differentiable perturbed optimizer

One way of obtaining a differentiable optimizer is:
- to apply a stochastic perturbation to the parameters predicted by the ML model. 

Taking the case of expected value-based models as an example:

the key idea is that:
- although the gradient of the solution of the contextual problem with respect to the predicted parameters $ \hat{\boldsymbol{y}}:=g_{\boldsymbol{\theta}}(\boldsymbol{x}) $ is zero almost everywhere
- if we perturb the predictor using a noise with differentiable density
- then the expectation of the solution of the perturbed contextual problem:

$ \bar{z}^{\varepsilon}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right)=\mathbb{E}_{\Psi}\left[\tilde{z}^{\varepsilon}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}, \Psi\right)\right] $ with $ \tilde{z}^{\varepsilon}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}, \Psi\right):=\underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} c\left(\boldsymbol{z}, g_{\boldsymbol{\theta}}(\boldsymbol{x})+\varepsilon \Psi\right) $

- where $ \varepsilon>0 $ controls the amount of perturbation

and more generally of the expected cost of the associated random policy $ \mathbb{E}_{\Psi}\left[H\left(\tilde{z}^{\varepsilon}\left(\cdot, g_{\boldsymbol{\theta}}, \Psi\right), \hat{\mathbb{P}}_{N}\right)\right] $ can be shown to be smooth and differentiable. 

This idea is proposed and exploited in Berthet et al. (2020), which:
- focus on a bi-linear cost $ c(\boldsymbol{z}, \boldsymbol{y}):=\boldsymbol{y}^{T} \boldsymbol{z} $ thus simplifying $ \mathbb{E}_{\Psi}\left[H\left(\tilde{z}^{\varepsilon}\left(\cdot, g_{\boldsymbol{\theta}}, \Psi\right), \hat{\mathbb{P}}_{N}\right)\right]=H\left(\bar{z}^{\varepsilon}\left(\cdot, g_{\boldsymbol{\theta}}\right), \hat{\mathbb{P}}_{N}\right) $. 

Further, they show that:

when an imitation ILO model is used 
- with a special form of Bregman divergence 

to capture the difference between $ z^{*}(\boldsymbol{x}, \boldsymbol{y}) $ and $ \tilde{z}^{\varepsilon}(\boldsymbol{x}, \hat{\boldsymbol{y}}, \Psi) $, 

the gradient of $ H_{\text {Imitation }}\left(\tilde{z}^{\varepsilon}\left(\cdot, g_{\boldsymbol{\theta}}, \Psi\right), \hat{\mathbb{P}}_{N}^{\prime}\right) $ can be computed directly without needing to determine the Jacobian of $ \bar{z}^{\varepsilon}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ (Blondel et al. 2020):

$ H_{\text {Imitation }}\left(\tilde{z}^{\varepsilon}\left(\cdot, g_{\boldsymbol{\theta}}, \Psi\right), \hat{\mathbb{P}}_{N}^{\prime}\right):=\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\ell_{\mathrm{PFYL}}\left(g_{\boldsymbol{\theta}}(\boldsymbol{x}), \boldsymbol{y}\right)\right] $

- $ \ell_{\text {PFYI }} $ is a perturbed Fenchel-Young loss (PFYL) given by:

- $ \ell_{\mathrm{PFYL}}(\hat{\boldsymbol{y}}, \boldsymbol{y}):=\hat{\boldsymbol{y}}^{T} z^{*}(\boldsymbol{x}, \boldsymbol{y})-\mathbb{E}_{\Psi}\left[(\hat{\boldsymbol{y}}+\varepsilon \Psi)^{T} \tilde{\boldsymbol{z}}^{\varepsilon}(\boldsymbol{x}, \hat{\boldsymbol{y}}, \Psi)\right]+\varepsilon \Omega_{\mathrm{PFYL}}\left(z^{*}(\boldsymbol{x}, \boldsymbol{y})\right) $

- $ \Omega_{\mathrm{PFYL}}(\boldsymbol{z}) $ is the Fenchel dual of $ F(\boldsymbol{y}):=-\mathbb{E}_{\Psi}\left[(\boldsymbol{y}+\Psi)^{T} \tilde{z}^{\varepsilon}(\boldsymbol{x}, \boldsymbol{y}, \Psi)\right] $. 
- The gradient of the FenchelYoung loss with respect to the model prediction is given by:
  - $ \nabla_{\hat{\boldsymbol{y}}} \ell_{\mathrm{PFYL}}(\hat{\boldsymbol{y}}, \boldsymbol{y})=z^{*}(\boldsymbol{x}, \boldsymbol{y})-\overline{\boldsymbol{z}}^{\varepsilon}(\boldsymbol{x}, \hat{\boldsymbol{y}}) $


Evaluating this gradient can be done through:

Monte Carlo evaluations by sampling perturbations and solving the corresponding perturbed problems.

Dalle et al. (2022) introduce a multiplicative perturbation: 

with the advantage that:

it preserves the sign of $ g_{\theta}(\boldsymbol{x}) $ without adding any bias:

$ \tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}, \Psi\right):=\underset{\boldsymbol{z} \in \mathcal{Z}}{\operatorname{argmin}} c\left(\boldsymbol{z}, g_{\boldsymbol{\theta}}(\boldsymbol{x}) \odot \exp \left(\varepsilon \Psi-\varepsilon^{2} / 2\right)\right) $

- $ \odot $ is the Hadamard dot-product and the exponential is taken elementwise. 

Dalle et al. (2022) and Sun et al. (2023c) also show that: 

there is a one-to-one equivalence between the:
- perturbed optimizer approach
- and using a regularized randomized version of the CSO problem for combinatorial problems with linear objective functions. 


Finally, Dalle et al. (2022) show an intimate connection between:
- the perturbed minimizer approach proposed by Berthet et al. (2020) 
- and surrogate loss functions approaches

such as SPO+ by casting them as special cases of a more general surrogate loss formulation.

Mulamba et al. (2021) and Kong et al. (2022) consider an "energy-based" perturbed optimizer defined by its density of the form:

#### (19)

$ \tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) \sim \frac{\exp \left(-h\left(\boldsymbol{z}, f_{\boldsymbol{\theta}}(\boldsymbol{x})\right) / \varepsilon\right)}{\int \exp \left(-h\left(\boldsymbol{z}^{\prime}, f_{\boldsymbol{\theta}}(\boldsymbol{x})\right) / \varepsilon\right) d \boldsymbol{z}^{\prime}} $,

- $\varepsilon  = 1$

This general form of perturbed optimizer:
- captures a varying amount of perturbation 
  - through $ \varepsilon $, 
  - with $ \tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ converging in distribution to $ z^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ as $ \varepsilon $ goes to zero. 

They employ the negative log-likelihood to measure the divergence between:
- $ \tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $
-  and the hindsight optimal solution $ z^{*}(\boldsymbol{x}, \boldsymbol{y}) $. 

Given the difficulties associated with calculating the partition function in the denominator of [(19)](#19), Mulamba et al. (2021) devise a surrogate loss function:
- based on noise-contrastive estimation,
-  which replaces likelihood with relative likelihood
-   when compared to a set of sampled suboptimal solutions.

This scheme is shown to improve the performance over SPO+ and DBB
- in terms of expected regret performance for linear combinatorial CSO.
- 
Based on the noise contrastive estimation approach of Mulamba et al. (2021), Mandi et al. (2022) note that:
- ILO for combinatorial problems can be viewed as a learning-to-rank problem. 

They propose surrogate loss functions,
- with closed-form expressions for gradients,
  -  that are used to train to rank feasible points in terms of performance on the downstream optimization problem. 

Unlike Mulamba et al. (2021), Kong et al. (2022) tackles the partition function challenge
- by employing a self-normalized importance sampler
  - that provides a discrete approximation. 

To avoid overfitting, the authors also introduce a regularization that :

penalizes the KL divergence between 
- the perturbed optimizer distribution 
- and a subjective posterior distribution over perturbed optimal hindsight actions $ \mathbb{P}\left(\tilde{\boldsymbol{z}}^{\varepsilon}(\boldsymbol{x}, \boldsymbol{y}) \mid \boldsymbol{y}\right) $ :

$ \begin{array}{l}H_{\text {Imitation }}\left(\tilde{\boldsymbol{z}}^{\varepsilon}\left(\cdot, f_{\boldsymbol{\theta}}\right), \hat{\mathbb{P}}_{N}^{\prime}\right):= \\ \\ \quad-\mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\log \left(\mathbb{P}\left(\tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right)=z^{*}(\boldsymbol{x}, \boldsymbol{y})\right) \mid \boldsymbol{x}, \boldsymbol{y}\right)\right]+\lambda \mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\operatorname{KL}\left(\mathbb{P}\left(\tilde{\boldsymbol{z}}^{\varepsilon}(\boldsymbol{x}, \boldsymbol{y}) \mid \boldsymbol{y}\right) \| \tilde{\boldsymbol{z}}^{\varepsilon}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) \mid \boldsymbol{x}, \boldsymbol{y}\right)\right]\end{array} $

The authors show that: 

their model outperforms ILO trained using SQP and cvxpylayers
- in terms of computational time

and gives lower task loss than sequential models trained using MLE and policy learning with neural networks.

### 5.5.2 Supervised learning 

Grigas et al. (2021) solve a CSO problem with a convex and nonnegative decision regularizer $ \Omega(\boldsymbol{z}) $ assuming that:

the uncertain parameter $ \boldsymbol{y} $ has discrete support. 

Their model, called ICEO- $ \lambda $, is thus trained by solving:

#### (20)

$ \begin{array}{rll}\text { (ICEO- } \lambda) & \min _{\boldsymbol{\theta}} & H\left(z_{\lambda}^{*}\left(\cdot, f_{\boldsymbol{\theta}}\right), \hat{\mathbb{P}}_{N}\right)+\lambda \mathbb{E}_{\hat{\mathbb{P}}_{N}}\left[\Omega\left(z_{\lambda}^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right)\right)\right] \\ & \text { s.t. } & z_{\lambda}^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right)=\underset{\boldsymbol{z}}{\operatorname{argmin}} c\left(\boldsymbol{z}, f_{\boldsymbol{\theta}}(\boldsymbol{x})\right)+\lambda \Omega(\boldsymbol{z}), \forall \boldsymbol{x} .\end{array} $

The regularization:
- ensures uniqueness and Lipschitz property of $ z_{\lambda}^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ with respect to $ f_{\theta} $ 
- leads to finite-sample guarantees. 

To circumvent the challenge associated with nondifferentiability of $ z_{\lambda}^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ with respect to $ \boldsymbol{\theta} $:
- they replace $ z_{\lambda}^{*}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $ with a smooth approximation $ \tilde{z}_{\lambda}\left(\boldsymbol{x}, f_{\boldsymbol{\theta}}\right) $
  - that is learned using a random data set $ \left(\boldsymbol{p}_{i}, \boldsymbol{z}_{i}\right) $ generated by sampling $ \boldsymbol{p}_{i} $ from the probability simplex over the discrete support 
- and then finding the optimal solution $ \boldsymbol{z}_{i} $. 

They show asymptotic optimality and consistency of their solutions:

- when the hypothesis class is wellspecified. 

They compare their approach to other ILO pipelines and to the SLO approach that estimates the conditional distribution using cross-entropy.

Cristian et al. (2022) introduce the ProjectNet model:
- to solve uncertain constrained linear programs in an end-to-end framework
- by training an optimal policy network,
- which employs a differentiable approximation of the step of projection to feasibility.



Another approach, related to Berthet et al. (2020), that generalizes beyond LPs is given in Shah et al. (2022) that:
- constructs locally optimized decision losses (LODL)
- with supervised learning 
- to directly evaluate the performance of the predictors on the downstream optimization task. 

To learn a convex LODL for each data point:

this approach first generates labels in the neighborhood of label $ \boldsymbol{y}_{i} $ in the training set, 
- e.g., by adding Gaussian noise, 
  
and then chooses the parameter that:
- minimizes the MSE between LODL and the downstream task loss. 

The LODL is used in place of the task-specific surrogate optimization layers 

and outperforms SLO on three resource allocation problems (linear top-1 item selection problem, web advertising, and portfolio optimization). 

The numerical experiments indicate that:
- handcrafted surrogate functions only perform better for the web advertising problem.

## 5.6 Applications 

Tian et al. (2023a) and Tian et al. (2023b) use SPOT and noise-contrastive estimation method (Mulamba et al. 2021), respectively, 

to solve the maritime transportation problem. 

A comprehensive tutorial on prescriptive analytics methods for logistics is given in Tian et al. (2023c). 

SPO has been used in solving last-mile delivery (Chu et al. 2023) and ship inspection problems (Yan et al. 2020, 2021, 2023). 

Demirović et al. (2019) and Demirović et al. (2020) minimize the same expected regret as SPO for specific applications related to ranking optimization and dynamic programming problems, respectively.


Perrault et al. (2020) solve a Stackelberg security game with the ILO framework by:
- learning the attack probability distribution over a discrete set of targets
- to maximize a surrogate for the defender's expected utility. 

They show that: their model results in higher expected utility for the defender on synthetic and human subjects data than the sequential models that learn the attack probability by minimizing the cross entropy loss. 

Wang et al. (2020) replace the large-scale optimization problem with a low dimensional surrogate by reparameterizing the feasible space of decisions. 

They observe significant performance improvements for non-convex problems compared to the strongly convex case.

Stratigakos et al. (2022) solve an integrated forecasting and optimization model
- for trading in renewable energy 

that: trains an ensemble of prescriptive trees
- by randomly splitting the feature space $ \mathcal{X} $ based on the task-specific cost function. 

Sang et al. (2022) introduce an ILO framework for electricity price prediction for energy storage system arbitrage. 

They present a hybrid loss function 

- to measure prediction and decision errors 

and a hybrid stochastic gradient descent learning method. 

Sang et al. (2023) solve a voltage regulation problem using:
- a similar hybrid loss function, 

and backpropagation is done by 
- implicitly differentiating the optimality conditions of a secondorder cone program.

Liu et al. (2023b) use a DNN to : 
- model the routing behavior of users in a transportation network 
- and learn the parameters by minimizing the mismatch between:
  - the flow prescribed by the variational inequality
  - and the observed flow. 

The backward pass is obtained by:
- applying the IFT to the variational inequality. 

Wahdany et al. (2023) propose an integrated model for wind-power forecasting that:
- learns the parameters of a neural network to optimize the energy system costs under the system constraints.

Vohra et al. (2023) apply similar ideas to:
- develop end-to-end renewable energy generation forecasts, 

using multiple contextual sources such as satellite images and meteorological time series.

Butler and Kwon (2023b) solves the contextual mean-variance portfolio (MVP) optimization problem by:
- learning the parameters of the linear prediction model using the ILO framework. 

The covariance matrix is estimated using:
- the exponentially weighted moving average model.

They provide analytical solutions to :
- unconstrained and equality-constrained MVP optimization problems

and show that:
- they outperform SLO models based on ordinary least squares regression. 

These analytical solutions lead to lower variance when:

compared with the exact solutions of the corresponding inequality-constrained MVP optimization problem.

# 6 Active research directions

## Uncertainty in constraints. 

Most studies on contextual optimization assume that:

- there is no uncertainty in the constraints. 

If constraints are also uncertain, the SAA solutions that ignore the covariates information might not be feasible (Rahimian and Pagnoncelli 2022). 

Bertsimas and Kallus (2020) have highlighted the challenges in using ERM in a constrained CSO problem. 

Rahimian and Pagnoncelli (2022) solve a conditional chance-constrained program that :
- ensures with a high probability that the solution remains feasible under the conditional distribution 
- given the realized covariates. 

Although they do not focus on contextual optimization, interesting links can be found with the literature on constraint learning (Fajemisin et al. 2023) and inverse optimization (Chan et al. 2021).


## Risk aversion. 

There has been a growing interest in studying contextual optimization in the risk-averse setting.

Specifically, one can consider replacing the risk-neutral expectation from [(1)](#1) with a risk measure such as value-at-risk.

By doing so, one would expect, with a high probability, that:
- a decision-maker's loss is lower than a particular threshold. 

One can easily represent such a risk measure using an uncertainty set which represents the set of all possible outcomes that may occur in the future. 

The resulting uncertainty set should be carefully chosen:
- It should capture the most relevant scenarios to balance the trade-off between avoiding risks and obtaining returns. 

The recently proposed Conditional Robust Optimization (CRO) paradigm by Chenreddy et al. (2022) (see also Ohmori 2021, Sun et al. 2023b, Peršak and Anjos 2023) consists in learning a conditional set $ \mathcal{U}(\boldsymbol{x}) $ to solve the following problem:

### (21)

(CRO) $ \min _{\boldsymbol{z} \in \mathcal{Z}} \max _{\boldsymbol{y} \in \mathcal{U}(\boldsymbol{x})} c(\boldsymbol{z}, \boldsymbol{y}) $

- where $ \mathcal{U}(\boldsymbol{x}) $ is an uncertainty set designed to contain with high probability the realization of $ \boldsymbol{y} $ conditionally on observing $ x $.

Their approach solves the CRO problem sequentially where:
- $ \mathcal{U}(\boldsymbol{x}) $ is learned first
-  and is subsequently used to solve the downstream RO problem. 

A challenging problem is to learn the uncertainty set to minimize the downstream cost function.

## Toolboxes and benchmarking. 

Several toolboxes and packages have been proposed recently to train decision pipelines. 

Agrawal et al. (2019) provide the cvxpylayers library, which includes a subclass of convex optimization problems as differentiable layers in auto-differentiation libraries in PyTorch, TensorFlow, and JAX. 

Other libraries for differentiating non-linear optimization problems for end-to-end learning include:

higher (Grefenstette et al. 2019), JAXopt (Blondel et al. 2022), TorchOpt (Ren et al. 2022), and Theseus (Pineda et al. 2022). 

Tang and Khalil (2022) introduce an open-source software package called PyEPO (Pytorch-based End-to-End Predict-then-Optimize) implemented in Python for ILO of problems that are linear in uncertain parameters. They implement various existing methods, such as SPO+, DBB, and PFYL. 

They also include new benchmarks and comprehensive experiments highlighting the advantages of integrated learning. 

Dalle et al. (2022) provide similar tools for combinatorial problems in Julia.

Comparisons of existing approaches in fixed simulation settings are scarce, especially with realworld data. 

Buttler et al. (2022) provide a meta-analysis of selected methods on an unconstrained newsvendor problem on four data sets from the retail and food sectors. 

They highlight that there is no single method that clearly outperforms all the others on the four data sets. Mandi et al. (2023) carried out a comprehensive benchmarking of ILO frameworks tailored for expected value-based models on seven distinct problems using public datasets.

## Endogenous uncertainty. 

While there has been some progress in studying problems where the decision affects the uncertain parameters (Basciftci et al. 2021, Liu et al. 2022), the literature on decision-dependent uncertainty with covariates is sparse (Bertsimas and Kallus 2020, Bertsimas and Koduri 2022). 

An example could be:
- a facility location problem where demand changes once a facility is located in a region
- or a price-setting newsvendor problem whose demand depends on the price (Liu and Zhang 2023). 

In these problems, the causal relationship between demand and prices is unknown. 

These examples offer interesting parallels with the research on heterogeneous treatment effects
- such as Wager and Athey (2018), 
  - which introduce causal forests for estimating treatment effects and provide asymptotic consistency results. 
- Alley et al. (2023) study a price-setting problem and provide a new loss function to isolate the causal effects of price on demand from the conditional effects due to other covariates.

## Data privacy. 

Another issue is that:

- the data might come from multiple sources and contain sensitive private information, so it cannot be directly provided in its original form to the system operator. 

Differential privacy techniques (see, e.g., Abadi et al. 2016) can be used to obfuscate data but may impact predictive and prescriptive performance. 

Mieth et al. (2023) determine the data quality after obfuscation in an optimal power flow problem with a Wasserstein ambiguity set and use a DRO model to determine the data value for decision-making.

## Interpretability & explainability. 

Decision pipelines must be trusted to be implemented. 

This is evident from the European Union legislation "General Data Protection Regulation" that requires entities using automated systems to provide "meaningful information about the logic involved" in making decisions, known popularly as the "right to explanation" (Doshi-Velez and Kim 2017, Kaminski 2019). 

For instance, a citizen has the right to ask a bank for an explanation in the case of loan denial. 

While interpretability has received much attention in predictive ML applications (Rudin 2019), it remains largely unexplored in a contextual optimization, 
- i.e., prescriptive context. 

Interpretability requires transparent decision pipelines that are intelligible to users,
- e.g., built over simple models such as decision trees or rule lists. 

In contrast, explainability may be achieved with an additional algorithm on top of a black box or complex model. 

Feature importance has been analyzed in a prescriptive context by Serrano et al. (2022): 

They introduce an integrated approach that solves a bilevel program with an integer master problem optimizing (cross-)validation accuracy. 

To achieve explainability, Forel et al. (2023) adapt the concept of counterfactual explanations to explain a given data-driven decision through differences of context that make this decision optimal, or better suited than a given expert decision. 

Having identified these differences, it becomes possible to correct or complete the contextual information, if necessary, or otherwise to give explanative elements supporting different decisions. 

Another research direction could be to train tree-based models (such as optimal classification trees) to approximate the policy of a complex learning-and-optimization pipeline. 

This has interesting connections with model distillation,
- i.e., the idea in the ML community of approximating a large model by a smaller one,

and the work of Bertsimas and Stellato (2021), which learns the mapping from the problem parameters to optimal decisions through interpretable models.

## Fairness. Applying decisions based on contextual information can raise fairness issues when the context is made of protected attributes. 

This has been studied especially in pricing problems, to ensure that:
- different customers or groups of customers are proposed prices that don't differ significantly(Cohen et al. 2021, 2022).

## Finite sample guarantees for ILO. 

In Grigas et al. (2021), the authors derive finite-sample guarantees for ILO under the assumption of discrete support for the uncertain parameter. 

An open problem is to derive generalization bounds on the performance of ILO models for non-linear problems where the uncertain parameters have continuous support.

## Correcting for in-sample bias of data-driven optimization. 

When devising an optimal policy based on a finite number of samples, it is desired that low in-sample risk translates to low out-of-sample risk. 

However, decision rule optimization in [(4)](#4) or learning and optimization model in [(5)](#5) are known to produce optimistically biased estimates of the true expected cost of the prescribed policy (Ban and Rudin 2019, Costa and Iyengar 2023, Gupta et al. 2022). 

While one can replace this estimation with an unbiased one
- if data was reserved for this purpose,

this is usually considered a wasteful use of data
- given that it could instead have been used to obtain a better-performing policy. 

Recent research has identified ways of circumventing this issue by estimating and correcting for the in-sample bias in contextual (Gupta et al. 2022) and non-contextual (Ito et al. 2018, Gupta and Rusmevichientong 2021, Iyengar et al. 2023) stochastic optimization problems
- under the assumption that errors in the estimation of uncertain parameters are normally distributed. 

In addition to correcting the bias using Stein's lemma, Gupta and Rusmevichientong (2021) show that :

- certain "Bayes-inspired" and regularized policies achieve the same performance as optimal in-sample policy in small-data large-scale regimes.

A promising future research direction could be:

to build a general framework to learn the insample policies that :

- directly minimize the debiased objective functions. 

In this regard, one might find inspiration from the work of Gupta and Rusmevichientong (2021) addressing a similar issue in the non-contextual setting.

## Multi-agent decision-making. 

A multi-agent perspective becomes necessary in transportation and operations management problems, - where different agents have access to different sources of information (i.e. covariates). 

In this regard, some recent work by Heaton et al. (2022) identifies the Nash equilibrium of contextual games using implicit differentiation of variational inequalities and jacobian-free backpropagation.

## Costly label acquisition. 

In many applications, it is costly to gather observations of uncertain vectors and covariate pairs. 

For instance, in personalized pricing, surveys can be sent to customers to obtain information on the sensitivity of purchasing an item with respect to its price. 

However, creating, sending, and collecting the surveys may have a cost. 

Liu et al. (2023a) develop an active learning approach to obtain labels to solve the SPO problem, 
- while the more general case of developing active learning methods for non-linear contextual optimization is an interesting future direction. 

Besbes et al. (2023) provide theoretical results on the trade-off between the quality and quantity of data in a newsvendor problem, thus guiding decision-makers on how to invest in data acquisition strategies.

## Multi-stage contextual optimization. 

Most works on contextual optimization focus on single and two-stage problems. 

Ban et al. (2019) and Rios et al. (2015) use the residuals of the regression model to build multi-stage scenario trees and solve multi-stage CSO problems. 

Bertsimas et al. (2023) generalize the weighted SAA model for multi-stage problems. 

Qi et al. (2023) propose an end-to-end learning framework to solve a real-world multistage inventory replenishment problem.

## sequential decision-making with uncertainty. 

Inverse reinforcement learning (Ng et al. 2000) focuses on learning rewards that are consistent with observed trajectories. 

In the econometrics literature on dynamic discrete choice modeling the focus lies more broadly on estimating structural parameters of Markov decision processes (MDPs) (Rust 1988, Aguirregabiria and Mira 2010) including rewards, transition functions and discount factors. 

On both topics, estimates are typically obtained through MLE employing a soft version of the Bellman operator (e.g., Rust 1987, Ziebart et al. 2008).

In the context of model-based reinforcement learning, so-called decision awareness 
- (i.e. explicitly training components of a reinforcement learning system to help the agent improve the total amount of collected reward, Nikishin et al. 2022b) 
is receiving increasing attention (e.g., Joseph et al. 2013, Farahmand et al. 2017, Farahmand 2018, Grimm et al. 2020). 

For example, Nikishin et al. (2022a) introduce an approach that combines learning and planning to optimize expected returns for both tabular and non-tabular MDPs. 

They employ the soft version of the Bellman operator for efficient parameter learning using the IFT and show that:
- their state-action value function has a lower approximation error than that of MLE in tabular MDPs.

---

Another interesting research direction is to challenge the assumption that: 

the joint distribution of the covariate and uncertain parameters is stationary. 

Neghab et al. (2022) study a newsvendor model with a hidden Markov model underlying the distribution of the covariates and demand.

---

Finally, an area that requires attention is the deployment of models for real-world applications 

- by tackling computational hurdles associated with decision-aware learning in MDPs, 

- such as large state-action pairs and high-dimensional policy spaces (Wang et al. 2023). 

An example is a service call scheduling problem 
- that is formulated as a restless multi-armed bandit (RMAB) problem in Mate et al. (2022) 
- to improve maternal and child health in a non-profit organization. 

They model each beneficiary as an arm, apply a clustering method to learn the dynamics, 

and then use the Whittle Index policy to solve the RMAB. 

Wang et al. (2023) use decision-focused learning to solve RMAB,
- where the computational difficulty in differentiating the Whittle index policy of selecting the top-k arms, 
- is mitigated by making a soft-top-k selection of arms which is an optimal transport problem (Xie et al. 2020).



placeholder

placeholder

placeholder

placeholder

placeholder

