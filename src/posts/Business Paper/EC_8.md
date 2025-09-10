---
title: Business Paper - Week 8
---

# 3 Predicting Delivery Time 

#### (1)

$DeliveryTime  _{i}=  Distance  _{i}+\epsilon_{i}$


#### (2)

$DeliveryTime  _{i}=  Workload  _{i}+  Workload  _{i}^{1 / 2}+  Distance  _{i}+\epsilon_{i}$

#### (3)

$DeliveryTime  _{i k}=\eta_{k}+  Workload  _{i k}+  Workload  _{i}^{1 / 2}+  Distance  _{i k}+\epsilon_{i k} $

# 4 Courier Assigned Location Mismatch (CALM) Metric

$M$: territories 

$d_{ij}$: distance 

$\boldsymbol \zeta\in\mathbb R_+^M$: current assigned location vector

$\zeta_i$: number of customers in $i$

$\boldsymbol \xi\in\Delta^M$: prior assigned location vector 
- $\Delta^M:=\{\boldsymbol \xi\in\mathbb R_+^M:\boldsymbol 1^\top\boldsymbol \xi = 1\}$

$\xi_j$: proportion of past assignments to zone $j$

- $\boldsymbol  \xi=\boldsymbol{\zeta} / \mathbf{1}^{\top} \boldsymbol{\zeta} $: assigned location = past assignments

### Definition 1 (Creterion of Courier Assigned Location Mismatch Metric)

> $ \rho(\boldsymbol{\zeta}, \boldsymbol{\xi}): \mathbb{R}_{+}^{M} \times \Delta^{M} \rightarrow \mathbf R_+$
>
> It satisfies:
>
> (a) **Matched Assignment**
>
> For any $ \boldsymbol{\zeta} \in \mathbb{R}_{+}^{M}, \boldsymbol{\xi} \in \Delta^{M} $ : 
> 
> $ \rho(\boldsymbol{\zeta}, \boldsymbol{\xi})=\mathbf{0} $ if and only if $ \boldsymbol{\zeta}=\boldsymbol{\xi} \cdot \mathbf{1}^{\top} \boldsymbol{\zeta} $
>
> (b) **Basic Location Mismatch**
>
> For any $ i, j \in[M] $ : 
>
> $\rho\left(\boldsymbol{e}_{i}, \boldsymbol{e}_{j}\right)=d_{i j}$
>
> (c) **Positive Homogeneous**
>
> For any $ \boldsymbol{\zeta} \in \mathbb{R}_{+}^{M}, \boldsymbol{\xi} \in \Delta^{M}, \alpha>0 $ :
>
> $\rho(\alpha \boldsymbol{\zeta}, \boldsymbol{\xi})=\alpha \rho(\boldsymbol{\zeta}, \boldsymbol{\xi}) .$
>
> (d) **Sub-additive**
>
> For any $ \boldsymbol{\zeta}_{1}, \boldsymbol{\zeta}_{2} \in \mathbb{R}_{+}^{M}, \boldsymbol{\xi} \in \Delta^{M} $ : 
>
> $\rho\left(\boldsymbol{\zeta}_{1}+\boldsymbol{\zeta}_{2}, \boldsymbol{\xi}\right) \leq \rho\left(\boldsymbol{\zeta}_{1}, \boldsymbol{\xi}\right)+\rho\left(\boldsymbol{\zeta}_{2}, \boldsymbol{\xi}\right) $

### Definition 2(The $\ell_p$-Based CALM Metric)

> For given $ p \in[1, \infty) $, we define the $ \ell_{p} $-based CALM metric as the following function $ \rho(\boldsymbol{\zeta}, \boldsymbol{\xi}): \mathbb{R}_{+}^{M} \times \Delta^{M} \rightarrow \mathbb{R}_{+} $,
>
> #### (4)
>
> $\begin{array}{rlr} \rho(\boldsymbol{\zeta}, \boldsymbol{\xi})=\min & \left(\sum_{i \in[M] j} \sum_{j \in[M]}\left(d_{i j} s_{i j}\right)^{p}\right)^{1 / p} & \\ \text { s.t. } & \sum_{i \in[M]} s_{i j}=\xi_{j} \mathbf{1}^{\top} \boldsymbol{\zeta} & \forall j \in[M] \\ & \sum_{j \in[M]} s_{i j}=\zeta_{i} & \forall i \in[M] \\ & \boldsymbol{s} \geq \mathbf{0} . & \end{array}$

### Theorem 1

> The $ \ell_{p} $-based CALM metric satisfies the properties of the assigned location mismatch metric for all $ p \in[1, \infty] $

# 5 The Service Oriented Routing (SOR) Model 


$ \mathcal{G}=(\{0\} \cup[N], \mathcal{A}) $: a completed directed graph 
- node 0 represents the depot 
- $ \mathcal{A}=\{(i, j) \mid i, j \in\{0\} \cup[N], i \neq j\} $ is the arc set. 

$ n $: Each customer node 

$ q_{n} $: demand  

$ c_{a} $: travel distance. each arc $ a \in A $ has a travel distance . 

$ Q $: Capacity. Each courier has a capacity. 

For a subset $ \mathcal{S} \subseteq[N] $, 

$ \mathcal{A}^{+}(\mathcal{S})=\{(i, j) \in \mathcal{A} \mid i \in \mathcal{S}, j \notin \mathcal{S}\} $ 

$ \mathcal{A}^{-}(\mathcal{S})=\{(i, j) \in \mathcal{A} \mid i \notin \mathcal{S}, j \in \mathcal{S}\} $. 

$ \boldsymbol{x}_{k}=\left(x_{k 1}, \cdots, x_{k N}\right) \in\{0,1\}^{N} $: the assignment of customer nodes to courier $ k $, 

- $ x_{k n}=1 $ if node $ n $ is served by courier $ k $ 
- $ x_{k n}=0 $ otherwise. 

For each $ k \in[K] $: 

$ \boldsymbol{y}_{k}=\left(y_{k a}\right)_{a \in \mathcal{A}} \in\{0,1\}^{|\mathcal{A}|} $, 
- $ y_{k a}=1 $ if courier $ k $ travels from along arc $a$
- $y_{ka} = 0$ otherwise 

The constraint for the routing problem is defined by:

$ \mathcal{X}=\left\{\begin{array}{l|ll}\left(\boldsymbol{x}_{k}, \boldsymbol{y}_{k}\right)_{k \in[K]} & \begin{array}{ll}\sum_{k \in[K]} x_{k n}=1 & \forall n \in[N] \\ \sum_{\left.a \in \mathcal{A}^{+}+\{0\}\right)} y_{k a}=\sum_{a \in \mathcal{A}^{-}(\{0\})} y_{k a}=1 & \forall k \in[K] \\ \sum_{a \in \mathcal{A}^{+}(\{n\})} y_{k a}=\sum_{a \in \mathcal{A}^{-}(\{n\})} y_{k a}=x_{k n} & \forall n \in[N], k \in[K] \\ \sum_{a \in \mathcal{A}^{+}(\mathcal{S})} y_{k a} \geq x_{k n} & \forall n \in \mathcal{S}, \mathcal{S} \subseteq[N], k \in[K] \\ \sum_{n \in[N]} q_{n} x_{k n} \leq Q & \forall k \in[K] \\ \boldsymbol{x}_{k} \in\{0,1\}^{N}, \boldsymbol{y}_{k} \in\{0,1\}^{|\mathcal{A}|} & \forall k \in[K]\end{array}\end{array}\right\} $

- all the nodes are served
- every courier is used 
- whether a node is served by a particular courier
- subtour elimination
-  capacity constraints of the couriers

$ \mu\left(\boldsymbol{y}_{k}\right) $ to denote the routing distance for courier $k$

$ \mu\left(\boldsymbol{y}_{k}\right)=\sum_{a \in \mathcal{A}} c_{a} y_{k a} $

- $ c_{a} $ is the travel distance along arc $ a \in \mathcal{A} $.

---

$N$: customers

$\boldsymbol x\in\{0,1\}^N$: decision variable

- $n$ is selected if $x_n = 1$

$ \mathbf{1}^{\top} \boldsymbol{x} \in\{0,1, \cdots, L-1\} $,: Total workload 
- $L-1$: maximum workload 

$ g\left(\boldsymbol{w}_{L}, \boldsymbol{x}\right):=\sum_{\ell \in[L]} w_{\ell} \delta_{\ell}(\boldsymbol{x}) $: generic workload dependency function 

- $ \boldsymbol{w}_{L}:=\left(w_{1}, \ldots, w_{L}\right) $
- #### (7)
- $ \delta_{\ell}(\boldsymbol{x}):=\left\{\begin{array}{l}1 \text { if } \mathbf{1}^{\top} \boldsymbol{x}=\ell-1 \\ 0 \text { otherwise }\end{array}, \quad \forall \ell \in[L]\right. $

$ \hat{\beta}_{1}+\hat{\beta}_{2}\left(\mathbf{1}^{\top} \boldsymbol{x}\right)+\hat{\beta}_{3}\left(\mathbf{1}^{\top} \boldsymbol{x}\right)^{1 / 2} $: Workload function 

Then: 

$ \hat{w}_{\ell}=\hat{\beta}_{1}+\hat{\beta}_{2}(\ell-1)+\hat{\beta}_{3}(\ell-1)^{1 / 2} \quad \forall \ell \in[L] $.

$\boldsymbol h_m \in\{0,1\}^N,\forall m\in[M]$:
- $h_{mn}=1$ if customer $n$ is in zone $m$

- $\boldsymbol  h_m^\top\boldsymbol  x_k$: number of customer nodes 

Then SOR model:

#### (8)

$ \begin{array}{rlr}\hat{Z}=\min & \sum_{k \in[K]} \mu\left(\boldsymbol{y}_{k}\right) & \\ \text { s.t. } & g\left(\hat{\boldsymbol{w}}_{L}, \boldsymbol{x}_{k}\right)+\hat{w}_{L+1} \mu\left(\boldsymbol{y}_{k}\right)+\hat{w}_{L+2} \lambda_{k} \leq T_{k} & \forall k \in[K] \\ & \rho\left(\boldsymbol{H} \boldsymbol{x}_{k}, \hat{\boldsymbol{\xi}}_{k}\right) \leq \lambda_{k} & \forall k \in[K] \\ & \left(\boldsymbol{x}_{k}, \boldsymbol{y}_{k}\right)_{k \in[K]} \in \mathcal{X}, \boldsymbol{\lambda} \in \mathbb{R}^{K}, & \end{array} $

- $ T_{k} $ :the predetermined delivery time deadline for courier $ k$,
- $ \hat{w}_{L+1}, \hat{w}_{L+2} $: the corresponding estimated weights for travel distance and the CALM metric 
- $ \hat{\boldsymbol{\xi}}_{k} $  the prior assigned location vector of courier $ k $ determined from historical data.

### Theorem 2

> The SOR model as presented in Problem (8) is equivalent to the following mixed integer linear optimization problem:
>
> #### (9)
>
> $ \begin{array}{rlr}\hat{Z}=\min & \sum_{k \in[K]} \sum_{a \in \mathcal{A}} c_{a} y_{k a} & \\ \text { s.t. } & \sum_{\ell \in[L]} \hat{w}_{\ell} z_{k \ell}+\hat{w}_{L+1} \sum_{a \in \mathcal{A}} c_{a} y_{k a}+\hat{w}_{L+2} \lambda_{k} \leq T_{k} & \forall k \in[K] \\ & \rho_{k}\left(\boldsymbol{x}_{k}\right) \leq \lambda_{k} & \forall k \in[K] \\ & \mathbf{1}^{\top} \boldsymbol{x}_{k}=\sum_{\ell \in[L]}(\ell-1) z_{k \ell} & \forall k \in[K] \\ & \mathbf{1}^{\top} \boldsymbol{z}_{k}=1 & \forall k \in[K] \\ & \boldsymbol{z}_{k} \in\{0,1\}^{L} & \forall k \in[K] \\ & \left(\boldsymbol{x}_{k}, \boldsymbol{y}_{k}\right)_{k \in[K]} \in \mathcal{X}, \boldsymbol{\lambda} \in \mathbb{R}^{K}, & \end{array} $
>
> Where:
>
> #### (10)
>
> $ \rho_{k}\left(\boldsymbol{x}_{k}\right)=\left\{\begin{array}{ll}\min & \sum_{i, j \in[M]} d_{i j} s_{i j} \\ \text { s.t. } & \sum_{i \in[M]} s_{i j}=\hat{\xi}_{k j} \mathbf{1}^{\top} \boldsymbol{x}_{k} \forall j \in[M] \\ \sum_{j \in[M]} s_{i j}=\boldsymbol{h}_{i}^{\top} \boldsymbol{x}_{k} \quad \forall i \in[M] \\ \boldsymbol{s} \geq \mathbf{0} \\ & =\left\{\begin{array}{ll}\max & \sum_{i \in[M]} u_{i} \boldsymbol{h}_{i}^{\top} \boldsymbol{x}_{k}+\sum_{j \in[M]} v_{j} \hat{\xi}_{k j} \mathbf{1}^{\top} \boldsymbol{x}_{k} \\ \text { s.t. } & u_{i}+v_{j} \leq d_{i j} \\ \boldsymbol{u}, \boldsymbol{v} \in \mathbb{R}^{M} .\end{array} \quad \forall i, j \in[M]\right.\end{array}\right. $







placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder





Idea 

- residual with z 
