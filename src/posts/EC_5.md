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

**Weights based on random forest **

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

Implicit differentiation allows for a memory-efficient backpropagation as opposed to unrolling (we refer to Bai et al. 2019, for discussion on training constant memory implicit models using a fixed-point - FP - equation and feedforward networks of infinite depths). Amos and Kolter (2017) appear to be the first to have employed implicit differentiation methods to train an ILO model, which they refer to as OptNet. They consider expected value-based optimization models that take the form of constrained quadratic programs (QP) with equality and inequality constraints. They show how the implicit function theorem (IFT - Halkin 1974) can be used to differentiate $ z^{*}\left(\boldsymbol{x}, g_{\boldsymbol{\theta}}\right) $ with respect to $ \boldsymbol{\theta} $ using the Karush-Kuhn-Tucker (KKT) conditions that are satisfied at optimality. Further, they provide a custom solver based on a primal-dual interior method to simultaneously solve multiple QPs on GPUs in batch form, permitting 100-times speedups compared to Gurobi and CPLEX. This approach is extended to conditional stochastic and strongly convex optimization models in Donti et al. (2017). They use sequential quadratic programming (SQP) to obtain quadratic approximations of the objective functions of the convex program at each iteration until convergence to the solution and then differentiate the last iteration of SQP to obtain the Jacobian. For a broader view of implicit differentiation, we refer to the surveys by Duvenaud et al. (2020) and Blondel et al. (2022).







placeholder

placeholder

placeholder

placeholder

placeholder

