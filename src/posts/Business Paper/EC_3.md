---
title: Business Paper - Week 3
date: 2025-9-10 
---

# Model Evaluation Framework

## OT-based stability evaluation criterion

### Definition 1 (OT discrepancy with moment constraints)

If:

$\mathcal Z \subseteq \mathbb R^d, \mathcal  W\subseteq  \mathbb R_+$: convex, closed sets, 

$c: (\mathcal Z \times \mathcal  W )^2 \rightarrow  \mathbb R_+$: lower semicontinuous function,

$\mathbb Q, \mathbb  P \in \mathcal  P (\mathcal Z\times \mathcal W) $


Then:

$\mathrm M_c: \mathcal P(\mathcal  Z \times \mathcal  W )^2 \rightarrow  \mathbb R_+$ is a function, defined through

$$
\mathrm{M}_{c}(\mathbb{Q}, \mathbb{P})=\left\{\begin{array}{ll}
\inf & \mathbb{E}_{\pi}[c((Z, W),(\hat{Z}, \hat{W}))] \\
\text { s.t. } & \pi \in \mathcal{P}\left((\mathcal{Z} \times \mathcal{W})^{2}\right) \\
& \pi_{(Z, W)}=\mathbb{Q}, \pi_{(\hat{Z}, \hat{W})}=\mathbb{P} \\
& \mathbb{E}_{\pi}[W]=1 \quad \pi \text {-a.s }
\end{array}\right.
$$

is called OT discrepancy wth moment constraints induced by $c, \mathbb  Q, \mathbb P$

$f_\beta$ : given learning model, trained on the distribution:

$\mathbb P_0 \in \mathcal P (\mathcal  Z)$, we have:

#### Problem P
$$
\mathfrak{R}(\beta, r)=\left\{\begin{array}{cl}
\inf _{\mathbb{Q} \in \mathcal{P}(\mathcal{Z} \times \mathcal{W})} & \mathrm{M}_{c}(\mathbb{Q}, \hat{\mathbb{P}}) \\
\text { s.t. } & \mathbb{E}_{\mathbb{Q}}[W \cdot \ell(\beta, Z)] \geq r
\end{array}\right.
$$

- $\hat {\mathbb  P}$ is selected as $\mathbb  P_ 0 \otimes \delta _1$
  - $\delta _1 $ : Dirac delta function
  - $\mathrm M_c (\mathbb Q, \hat {\mathbb P} )$: OT discrepancy with moment constraints between the projected distribution $\mathbb Q$ and the reference distribution $\hat{\mathbb P}$
  - $l(\beta ,z)$ : prediction risk of model $f_\beta $ on sample $z$
  - $r > 0$ : pre-defined risk threshold

example c:

##### formula 1

$c((z,w), (\hat z, \hat w )) = \theta _1 \cdot w \cdot d(z, \hat z) +\theta _2 \cdot (\phi  (w) - \phi (\hat{w}))_+$

- $d(z,\hat z) = \| x - \hat x \|^2_2 + \infty \cdot | y - \hat y|$: cost with different $z, \hat z$

- $(\phi(w) - \phi (\hat w))_+$ : cost related to differences in probability mass.

  - $\phi : \mathbb  R_+ \rightarrow  \mathbb  R_+$ : convex function, where:
  - $\phi(1) = 0$
- $\theta _1, \theta _2 \ge 0$ : hyperparameters, where:
  - $\dfrac{1}{\theta _1} + \dfrac{1}{\theta _2}=C $ for some constant $C$

--- 

## Dual reformulation and its interpretation

### Theorem 1 (Strong duality for problem for problem [(P)](#problem-p))

Suppose:

- $\mathcal Z \times \mathcal  W$ is compact.

- $l(\beta ,\cdot )$ is upper semicontinuous for all $\beta $ 

- $c:(\mathcal Z\times\mathcal W)^2\rightarrow \mathbb R_+$ is continuous
- $r<\bar r := \max_{z\in\mathcal Z}l(\beta ,z)$

Then:


#### Function D
$\mathfrak{R}(\beta, r)=\sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} h r+\alpha+\mathbb{E}_{\hat{\mathbb{P}}}\left[\tilde{\ell}_{c}^{\alpha, h}(\beta,(\hat{Z}, \hat{W}))\right]$

- $\tilde{\ell}_{c}^{\alpha, h}(\beta,(\hat{Z}, \hat{W}))$ : surrogate function
  - it equals to : $\min_{(z,w)\in\mathcal Z\times\mathcal W}c((z,w),(\hat z,\hat w)) + \alpha w - h\cdot w \cdot l(\beta ,z)$, for all $\hat z \in \mathcal Z, \hat w \in \mathcal W$.

( is it $+aw$ ? in the proof it's $-aw$)

[Skip the proof](#end-proof-for-function-d)

##### Proof for Function D

Reformulate Problem [(P)](#problem-p) into a infinite-dimension linear program:

###### Formula Primal
$$
\begin{array}{cl}
\inf _{\pi} & \mathbb{E}_{\pi}[c((Z, W),(\hat{Z}, \hat{W}))] \\
\text { s.t. } & \pi \in \mathcal{P}\left((\mathcal{Z} \times \mathcal{W})^{2}\right) \\
& r-\mathbb{E}_{\pi}[W \cdot \ell(\beta, Z)] \leq 0 \\
& \mathbb{E}_{\pi}[W]=1 \\
& \pi_{(\hat{Z}, \hat{W})}=\hat{\mathbb{P}} .
\end{array}
$$

We get the Lagrangian function

$L(\pi ; h, \alpha)=h r+\alpha+\mathbb{E}_{\pi}[c((Z, W),(\hat{Z}, \hat{W}))-h \cdot W \cdot \ell(\beta, Z)-\alpha \cdot W]$,

where $h\in\mathbb R_+,\alpha \in\mathbb R,\pi$ belongs to :
- $\Pi_{\hat {\mathbb P}} = \left\{  \pi\in\mathcal P((\mathcal Z\times\mathcal W)^2) : \pi_{(\hat{Z},\hat W)} = \hat{\mathbb P}\right\}$

$\mathcal Z\times W$ is compact 

$\Rightarrow \mathcal P(\mathcal  Z\times\mathcal W) $ is tight.

$\Rightarrow \Pi_{\hat{\mathbb P }}$ is tight

$\Rightarrow  \Pi_{\hat{\mathbb P }}$ has a compact closure (Prokhorov's theorem)

$\Pi_{\hat{\mathbb P }}$ is weakly closed

$\Rightarrow \Pi_{\hat{\mathbb P }} is compact$ (tight + close)

$\Pi_{\hat{\mathbb P }}$ is convex

###### Prove $L(\pi; h ,\alpha)$ is lower semicontinuous in $\pi $ under the weak topology

Suppose:

$\pi_n$ converges weakly to $\pi $

$\Rightarrow \liminf_{n\rightarrow +\infty}\int g\mathrm d \pi_n \ge \int g\mathrm d  \pi$, for any lower semicontinuous function $g$ that is bounded below (Portmanteau theorem)

$l(\beta,\cdot)$ is upper semicontinuous for all $\beta $, 

and $w,h\ge 0 $,

$\Rightarrow  h\cdot w \cdot l(\beta ,z)$ is upper semicontinuous, w.r.t $(z,w)$

$c((z,w),(\hat z, \hat w))$ is lower semicontinuous

$\Rightarrow c((z,w),(\hat z, \hat w)) - h\cdot w \cdot l (\beta,z) - \alpha\cdot w $ is lower semicontinuous w.r.t $(z,w)$ for any $(\hat z,\hat w) \in \mathcal  Z\times \mathcal W$

$\mathcal  Z\times\mathcal W$ is compact

$\Rightarrow $ the function is bounded below

$\Rightarrow \liminf_{n\rightarrow +\infty}L(\pi_n;h,\alpha )\ge L(\pi;h,\alpha )$

$\Rightarrow L(\pi;h,\alpha )$ is lower semicontinuous in $\pi$ under the weak topology

###### Prove continuous in $(h,\alpha)$ under the uniform topology in $\mathbb{R}_+ \times \mathbb R$

Suppose:

$\lim_{n\to+\infty}h_n = h$ in Euclidean topology, $\lim_{n\to\infty}|\alpha _n|<\bar\alpha $ in Euclidean topology

Exists:

$\bar h\in\mathbb R_+, \bar\alpha \in\mathbb R $, with $\sum_{n\to\infty}|h_n|\le\bar h, \sup_{n\to\infty }|\alpha _n|<\bar\alpha $, for all $n\ge 1$

$\Rightarrow  \lim_{n\to+\infty}L(\pi;h_n,\alpha _n) = L(\pi;h,\alpha )$ ( dominated convergence theorem)

$\Rightarrow  L(\pi;h,\alpha )$ is continuous in  $(h,\alpha )$ under the Ecludiean topology in  $\mathbb R_+ \times \mathbb  R$

###### Formula 5

$\Rightarrow \inf_{\pi\in\Pi_{\hat{\mathbb P }}}\sup_{h\in\mathbb R_+,\alpha \in\mathbb R }L(\pi;h,\alpha ) = \sup_{h\in\mathbb R_+,\alpha \in\mathbb R }\inf_{\pi\in\Pi_{\hat{\mathbb P }}}L(\pi;h,\alpha )$ (Sion's minmax theorem)

Rewrite:

$L(\pi ; h, \alpha)=\mathbb{E}_{\pi}\left[c((Z, W),(\hat{Z}, \hat{W}))\right]+h\left(r-\mathbb{E}_{\pi}[W \cdot \ell(\beta, Z)]\right)+\alpha\left(1-\mathbb{E}_{\pi}[W]\right)$ (The original paper lost a close bracket)

$\Rightarrow \inf_{\pi\in\Pi_{\hat{\mathbb P }}}\sup_{h\in\mathbb R_+,\alpha \in\mathbb R }L(\pi;h,\alpha ) $ is bounded above

We construct:

$\mathbb Q_0 = \delta _{(z^*,1)}$

- $z^* = \argmax_{z\in\mathcal Z }l(\beta ,z)$

Then:

$$
\begin{aligned}
&\inf _{\pi \in \Pi_{\mathbb{P}}} \sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} L(\pi ; h, \alpha) \\
& \leq \sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} L\left(\mathbb{Q}_{0} \otimes \hat{\mathbb{P}} ; h, \alpha\right) \\
& =\mathbb{E}_{\mathbb{Q}_{0} \otimes \hat{\mathbb{P}}}[c((Z, W),(\hat{Z}, \hat{W}))]+\sup _{h \in \mathbb{R}_{+}} h(r-\bar{r}) \quad (E_\pi[W] = 1)\\
& <+\infty
\end{aligned}
$$

- $\bar r = \mathbb E_{\mathbb  Q_0 }[l(\beta ,Z)]$ (Notice $W$ is independent with it) $ = \max_{z\in Z }l(\beta ,Z)$
- combined $c$ is continuous, it's bounded on a compact domain $Z\times W$ (The suppose)
$$
\begin{aligned}
\Rightarrow & r - \mathbb E_\pi [W\cdot l(\beta ,Z)] \le 0 \\ 
& \mathbb E_\pi [W] = 1
\end{aligned}
$$

Then: for [(5)](#formula-5) right hand side:

$$
\begin{aligned}
& \sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} \inf _{\pi \in \Pi_{\mathrm{P}}} L(\pi ; h, \alpha) . \\
= & \sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} h r+\alpha+\inf _{\pi \in \Pi_{\mathbb{®}}} \mathbb{E}_{\pi}[c((Z, W),(\hat{Z}, \hat{W}))-h \cdot W \cdot \ell(\beta, Z)-\alpha \cdot W] .
\end{aligned}
$$

Notice:

$$
\begin{aligned}
& \inf _{\pi \in \Pi_{\mathfrak{R}}} \mathbb{E}_{\pi}[c((Z, W),(\hat{Z}, \hat{W}))-h \cdot W \cdot \ell(\beta, Z)-\alpha \cdot W] \\
= & \mathbb{E}_{\hat{\mathbb{P}}}\left[\min _{(z, w) \in \mathcal{Z} \times \mathcal{W}} c((z, w),(\hat{Z}, \hat{W}))-h \cdot w \cdot \ell(\beta, z)-\alpha \cdot w\right],
\end{aligned}
$$

##### End Proof for Function D

We explore [(1)](#formula-1) with:

- $\phi (t) = t\log t - t + 1$, Kullback-Leibler divergence

- $\phi (t) = (t-1)^2$ , $\chi^2$-divergence

---

### Proposition 1 (Dual reformulations)

Suppose:

$\mathcal  W = \mathbb  R_+$

(i) If:

$\phi (t) = t\log t - t + 1$, [(D)](#function-d) admits:

#### function 2

$\sup_{h\ge0 }hr - \theta _2\log \mathbb E_{\mathbb P_0 }\left[\exp\left(\dfrac{l_{h,\theta _1 }(\hat Z)}{\theta _2 }\right)\right]$

(ii) If:

$\phi(t) = (t-1)^2 $, [(D)](#function-d) admits:

#### function 3

$\sup _{h \geq 0, \alpha \in \mathbb{R}} h r+\alpha+\theta_{2}-\theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}\right]$


- $l_{h,\theta _1 }(\hat z ):=\max_{z\in\mathcal Z }h\cdot l(\beta ,z)-\theta _1 \cdot d(z,\hat z)$ : the d-trasform of $h\cdot l(\beta, \cdot)$ with the step size $\theta_1$

[Skip the Proof](#end-proof-for-proposition-1)

#### Proof for proposition 1

$$
\begin{aligned}
&\tilde{\ell}_{c}^{\alpha, h}(\beta,(\hat{z}, \hat{w})) \\ 
& =\min _{(z, w) \in \mathcal{Z} \times \mathcal{W}} \theta_{1} \cdot w \cdot d(z, \hat{z})+\theta_{2}(\phi(w)-\phi(\hat{w}))_{+}-\alpha w-h \cdot w \cdot \ell(\beta, z) \\
& =\min _{z \in \mathcal{Z}} \theta_{2} \cdot \min _{w \in \mathbb{R}}-w \frac{h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{\theta_{2}}+\phi(w)+\mathbb{I}_{\mathcal{W}}(w) \text{ // Notice } \hat W = 1 \text{ almost surely, and } \phi(1) = 0\\
& =\min _{z \in \mathcal{Z}}-\theta_{2} \cdot\left(\phi+\mathbb{I}_{\mathcal{W}}\right)^{*}\left(\frac{h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{\theta_{2}}\right) . \text{ Convex conjugate}
\end{aligned}
$$

- $\mathbb I_{\mathcal W }(w) = \begin{cases}
0& \text{if } w\in \mathcal W\\
+\infty &\text{if }w\notin \mathcal W
\end{cases}
$

- Convex conjugate: $\min_x\{-(x,y) + f(x)\} = -f^* (y)$

(i) When $\mathcal W = \mathbb R_+, \phi (t) = t\log t -t + 1$:

$(\phi + \mathbb I_{\mathbb R_+})^*(\cdot) = \exp(\cdot) - 1$

- 
$$
\begin{cases}
&(\phi + \mathbb I_{\mathbb R_+})^*(y) \\
&= \sup_{x\ge0}\{xy - (x\log x-x+1)\}\\
&(Derive) = y - \log x - 1 + 1 = 0\\
&\Rightarrow x = e^y\\
&\Rightarrow (\phi + \mathbb I_{\mathbb R_+})^*(y)  = ye^y - ye^y + e^y - 1 = e^y - 1
\end{cases}
$$

Continue:

$$
\begin{aligned} 
&\tilde{\ell}_{c}^{\alpha, h}(\beta,(\hat{z}, \hat{w})) \\ 
& =\min _{z \in \mathcal{Z}}-\theta_{2} \cdot \exp \left(\frac{h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{\theta_{2}}\right)+\theta_{2} \\ & =-\theta_{2} \cdot \exp \left(\frac{\max _{z \in \mathcal{Z}} h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{\theta_{2}}\right)+\theta_{2} \\ & =-\theta_{2} \cdot \exp \left(\frac{\ell_{h, \theta_{1}}(\hat{z})+\alpha}{\theta_{2}}\right)+\theta_{2} \end{aligned} 
$$

Then we reformulate the [(D)](#function-d) :

$\mathfrak{R}(\beta, r)=\sup _{h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}} h r+\alpha-\theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{\theta_{2}}\right)\right]+\theta_{2} $

Derive the $\alpha  $:

$1-\exp \left(\frac{\alpha}{\theta_{2}}\right) \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})}{\theta_{2}}\right)\right]=0$

Solve this and get the $\alpha  $:

$\alpha^{\star}=-\theta_{2} \log \left(\mathbb{E}_{\mathbb{P}_{0}}\left[\frac{\ell_{h, \theta_{1}}(\hat{z})}{\theta_{2}}\right]\right) $

Put it back:

$\mathfrak R(\beta, r)=\sup _{h \in \mathbb{R}_{+}} h r-\theta_{2} \log \left(\mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})}{\theta_{2}}\right)\right]\right)$

(ii)

When $ \mathcal{W}=\mathbb{R}+ $ and $ \phi(t)=(t-1)^{2} $

$\left(\phi+\mathbb{I}_{\mathbb{R}_{+}}\right)^{*}(\cdot)=\left(\frac{\cdot}{2}+1\right)_{+}^{2}-1 $

- 
$$
\begin{cases}
\left(\phi+\mathbb{I}_{\mathbb{R}_{+}}\right)^{*}(y) \\
=\sup_{x\ge0}xy - (x-1)^2\\ 
(Derive) y - 2x + 2 = 0 \\ 
x = \dfrac{y}{2} + 1\\
\left(\phi+\mathbb{I}_{\mathbb{R}_{+}}\right)^{*}(y) =\dfrac{y^2}{2} + y - \dfrac{y^2}{4} \\
= (\dfrac{y}{2} + 1)^2 - 1 
\end{cases}
$$

Then:

$$
\begin{aligned} 
&\tilde{\ell}_{c}^{\alpha, h}(\beta,(\hat{z}, \hat{w}))\\ 
& =\min _{z \in \mathbb{Z}}-\theta_{2} \cdot\left(\phi+\mathbb{I}_{\mathcal{W}}\right)^{*}\left(\frac{h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{\theta_{2}}\right) \\ 
& =\min _{z \in \mathcal{Z}}-\theta_{2} \cdot\left(\frac{h \cdot \ell(\beta, z)-\theta_{1} \cdot d(z, \hat{z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}+\theta_{2} \\
& =-\theta_{2} \cdot\left(\frac{\ell_{h, \theta_{1}}(\hat{z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}+\theta_{2}
\end{aligned}
$$

Then we reformulate the [(D)](#function-d) :

$\sup _{h \geq 0, \alpha \in \mathbb{R}} h r+\alpha+\theta_{2}-\theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}\right]$

We can't continue, because it's a piecewise linear equation.

#### End proof for proposition 1

---

### Remark 4 (Structure of the most sensitive distribution)

$\mathbb  Q^* = \dfrac{1}{n}\sum_{n}^{i=1 }\delta _{(z^*_i,w^*_i)}, (z^*_i, w^*_8)\in \mathcal Z \times \mathbb R_+$

- $z_{i}^{\star}=\underset{z \in \mathcal{Z}}{\arg \max } h^{\star} \ell(\beta ; z)-\theta_{1} \cdot d\left(z, \hat{z}_{i}\right), \quad \forall i \in[n]$

---

## Computation

Address [(2)](#function-2), [(3)](#function-3) with different loss functions.

### Convex piecewise linear loss functions

[(2)](#function-2) admits a tractable finite convex program

### Theorem 2 (KL divergence)

Suppose:

$\mathcal Z = \mathbb R^d \times \{+1, -1\},$

$ l(\{(a_k,b_k)\}_{k\in[K]},z)=\max_{k\in[K]}y\cdot a_k^T + b_k$

The negative optimal value of problem [(2)](#function-2) is equivalent to :

$$
\begin{array}{ll}
\min & -h r+t \\ 
\text { s.t. } & \lambda \in \mathbb{R}_{+}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n}, p \in \mathbb{R}^{n} \\ 
& \left(\eta_{i}, \theta_{2}, p_{i}-t\right) \in \mathcal{K}_{\exp } \\ 
& \frac{\left\|a_{k}\right\|_{2}^{2}}{4\theta _1} h^{2}+\hat{y}_{i} \cdot a_{k}^{T} \hat{x}_{i} \cdot h+b_{k} \leq p_{i} \\ 
& \frac{1}{n} \sum_{i=1}^{n} \eta_{i} \leq \theta_{2},\end{array}
$$

- $\mathcal K_{\exp}$ is exponential cone 

- $\mathcal K_{\exp }=\left\{(z, y, x) \in \mathbb{R}^{3}: y>0, y e^{x / y} \leq z\right\} \cup\{(z, 0, x): x \leq 0, z \geq 0\}$

[Skip the proof](#end-proof-for-theorem-2)

#### Proof for Theorem 2

Start from [(2)](#function-2):

$$
\begin{array}{l}
\sup_{h\ge0 }hr - \theta _2\log \mathbb E_{\mathbb P_0 }\left[\exp\left(\dfrac{l_{h,\theta _1 }(\hat Z)}{\theta _2 }\right)\right]\\ 
=\min _{h \geq 0}-h r+\theta_{2} \log \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\dfrac{\ell_{h, \theta_{1}}(\hat{Z})}{\theta_{2}}\right)\right] \\
=\left\{\begin{array}{ll}
\min & -h r+t \\
\text { s.t. } & h \in \mathbb{R}_{+}, t \in \mathbb{R} \\
& \theta_{2} \log \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})}{\theta_{2}}\right)\right] \leq t
\end{array}\right. \\
=\left\{\begin{array}{ll}
\min & -h r+t \\
\text { s.t. } & \lambda \in \mathbb{R}_{+}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n} \\
& \left(\eta_{i}, \theta_{2}, \ell_{h, \theta_{1}}\left(\hat{z}_{i}\right)-t\right) \in \mathcal{K}_{\exp } \quad \forall i \in[n] \\
& \frac{1}{n} \sum_{i=1}^{n} \eta_{i} \leq \theta_{2}
\end{array}\right. \\
=\left\{\begin{array}{lll}
\min & -h r+t & \\
\text { s.t. } & \lambda \in \mathbb{R}_{+}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n}, p \in \mathbb{R}_{n} & \\
& \left(\eta_{i}, \theta_{2}, p_{i}-t\right) \in \mathcal{K}_{\exp } & \forall i \in[n] \\
& \ell_{h, \theta_{1}}\left(\hat{z}_{i}\right) \leq p_{i} & \forall i \in[n] \\
& \frac{1}{n} \sum_{i=1}^{n} \eta_{i} \leq \theta_{2} . &
\end{array}\right.
\end{array}
$$

- To get second euqality, notice :
$$
\begin{aligned}
& \theta_{2} \log \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})}{\theta_{2}}\right)\right] \leq t \\ 
& \Leftrightarrow \mathbb{E}_{\mathbb{P}_{0}}\left[\exp \left(\frac{\ell_{h, \theta_{1}}(\hat{Z})-t}{\theta_{2}}\right)\right] \leq 1 \\ 
&\lrArr  \frac{1}{n} \sum_{i=1}^{n} \exp \left(\frac{\ell_{h, \theta_{1}}\left(\hat{z}_{i}\right)-t}{\theta_{2}}\right) \leq 1
\end{aligned}
$$

- We introduce $\eta \in \mathbb R_+^n$, then decomposed to :

$$
\left\{\begin{array}{l}
\frac{1}{n} \sum_{i=1}^{n} \eta_{i} \leq \theta_{2} \\ 
\theta_{2} \exp \left(\frac{\ell_{h, \theta_{1}}\left(\hat{z}_{i}\right)-t}{\theta_{2}}\right) \leq \eta_{i}, \quad \forall i \in[n]\end{array}\right.
$$

- The second ineuqality is decomposed by definition of exponential cone
- We introduce $p_i$ to get the last equality

Then: 

##### Formlua 10

$$
\begin{aligned} 
& \ell_{h, \theta_{1}}\left(\hat{z}_{i}\right) \leq p_{i} \\ \Longleftrightarrow & \sup _{z \in \mathcal{Z}}\left\{h \cdot \max _{k \in[K]} y \cdot a_{k}^{\top} x+b_{k}-\theta_{1} d\left(z, \hat{z}_{i}\right)\right\} \leq p_{i} \\ \Longleftrightarrow & \sup _{z \in \mathcal{Z}}\left\{h \cdot y \cdot a_{k}^{\top} x+b_{k}-\theta_{1} d\left(z, \hat{z}_{i}\right)\right\} \leq p_{i} \forall k \in[K] \\ \Longleftrightarrow & \sup _{x \in \mathbb{R}^{d}}\left\{h \cdot \hat{y}_{i} \cdot a_{k}^{\top} x+b_{k}-\theta_{1}\left\|x-\hat{x}_{i}\right\|_{2}^{2}\right\} \leq p_{i} \forall k \in[K] \\ \Longleftrightarrow & \frac{\left\|a_{k}\right\|_{2}^{2}}{4 \theta_{1}} \cdot h^{2}+\hat{y}_{i} \cdot a_{k}^{T} \hat{x}_{i} \cdot h+b_{k} \leq p_{i}, \forall k \in[K]
\end{aligned}
$$

- Refer to [(2)](#function-2) for first equivalent
- Refer to [(1)](#formula-1) for $d(z,\hat z_i)$ for third equivalent
- Simple derivation for fourth equivalent

Put everything together:

$$
\begin{array}{lll}\min & -h r+t & \\ \text { s.t. } & \lambda \in \mathbb{R}_{+}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n}, p \in \mathbb{R}^{n} & \\ & \left(\eta_{i}, \theta_{2}, p_{i}-t\right) \in \mathcal{K}_{\exp } & \forall i \in[n] \\ & \frac{\left\|a_{k}\right\|_{2}^{2}}{4 \theta_{1}} \cdot h^{2}+\hat{y}_{i} \cdot a_{k}^{T} \hat{x}_{i} \cdot h+b_{k} \leq p_{i}, & \forall k \in[K], \forall i \in[n] \\ & \frac{1}{n} \sum_{i=1}^{n} \eta_{i} \leq \theta_{2} . & \end{array}
$$

#### End proof for Theorem 2

--- 

### Theorem 3 ($\chi^2$ Divergence)

Suppose:

$\mathcal Z = \mathbb R^d\times {+1,-1}$


$ l(\{(a_k,b_k)\}_{k\in[K]},z)=\max_{k\in[K]}y\cdot a_k^T + b_k$


The negative optimal value of problem [(2)](#function-2) is equivalent to :

$$
\begin{array}{ll}
\min & -h r+t \\ 
\text { s.t. } & h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n} \\ 
& \frac{\left\|a_{k}\right\|_{2}^{2}}{4 \theta_{1} \cdot} \cdot h^{2}+\hat{y}_{i} \cdot a_{k}^{T} \hat{x}_{i} \cdot h+b_{k}+ \alpha+2 \theta_{2} \leq 2 \theta_{2} \eta_{i} \\ 
& \frac{\theta_{2}}{n} \sum_{i=1}^{n} \eta_{i}^{2} \leq t
\end{array}
$$

#### Note for theorem 3

It should be $\alpha$ instead of $2\theta_1 \alpha$, the paper made a mistake here.

[Skip the proof](#end-proof-for-theorem-3)

#### Proof for Theorem 3

Start from [(3)](#function-3) :

$$
\begin{array}{l}
\sup _{h \geq 0, \alpha \in \mathbb{R}} h r+\alpha+\theta_{2}-\theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}\right]\\ 
=\min _{h \geq 0, \alpha \in \mathbb{R}}-h r-\alpha+\theta_{2}+\theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}\right] \\
=\left\{\begin{array}{ll}
\min & -h r-\alpha+t \\
\text { s.t. } & h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}, t \in \mathbb{R} \\
& \theta_{2} \mathbb{E}_{\mathbb{P}_{0}}\left[\left(\frac{\ell_{h, \theta_{1}}(\hat{Z})+\alpha}{2 \theta_{2}}+1\right)_{+}^{2}\right] \leq t
\end{array}\right. \\
=\left\{\begin{array}{ll}
\min & -h r+t \\
\text { s.t. } & h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n} \\
& \ell_{h, \theta_{1}}(\hat{z})+\alpha+2 \theta_{2} \leq 2 \theta_{2} \eta_{i} \quad \forall i \in[n] \\
& \frac{\theta_{2}}{n} \sum_{i=1}^{n} \eta_{i}^{2} \leq t
\end{array}\right. \\
=\left\{\begin{array}{ll}
\min & -h r+t \\
\text { s.t. } & h \in \mathbb{R}_{+}, \alpha \in \mathbb{R}, t \in \mathbb{R}, \eta \in \mathbb{R}_{+}^{n} \\
& \frac{\left\|a_{k}\right\|_{2}^{2}}{4 \theta_{1}} \cdot h^{2}+\hat{y}_{i} \cdot a_{k}^{T} \hat{x}_{i} \cdot h+b_{k}+\alpha+2 \theta_{2} \leq 2 \theta_{2} \eta_{i} \quad \forall k \in[K], \forall i \in[n] \\
& \frac{\theta_{2}}{n} \sum_{i=1}^{n} \eta_{i}^{2} \leq t
\end{array}\right.
\end{array}
$$

- Reformulate the first equivalent into:
$$
\left\{\begin{array}{l}\frac{\theta_{2}}{n} \sum_{i=1}^{n} \eta_{i}^{2} \leq t \\ \ell_{h, \theta_{1}}(\hat{z})+2 \theta_{2} \alpha+2 \theta_{2} \leq 2 \theta_{2} \eta_{i}, \eta_{i} \in \mathbb{R}_{+}\end{array}\right.
$$
to get the second equivalent 
- Refer to [(10)](#formlua-10) for the last equivalent

#### End proof for Theorem 3

--- 

### 0/1 loss function

$r$: risk level, error rate

$\ell(\beta,(x, y))=\mathbb{I}_{y \neq f_{\beta}(x)}$ : loss function 

- $\beta $ : trained model
- $(x,y) $ : sample
- $\mathbb{I}_{y \neq f_{\beta}(x)} = 1 $ if $y \ne f_\beta  (x)$, $0$ otherwise

### Nonlinear loss function

Gradient ascent

---

## Feature stability analysis

For machine learning: 

Modify function $d $:

$d(z, \hat{z})=\left\|z_{(i)}-\hat{z}_{(i)}\right\|_{2}^{2}+\infty \cdot\left\|z_{(,-i)}-\hat{z}_{(,-i)}\right\|_{2}^{2}$

- $z_{(i)}$ : $i$-th feature of $z$
- $z_{(,-i)} = z\backslash z_{(i)}$ : all variables in $z $ except for $i$-th

Then the $\mathfrak R_i(\beta ,r)$ indicates the stability

---

# Visualizations on stylized / toy examples

Visualize the most sensitive distribution $\mathbb  Q^*$ based on
[Remark 4](#remark-4-structure-of-the-most-sensitive-distribution)

2d binary classifaction:

$$
\begin{cases}
100 \text{ samples} \\ 
Y = 0\\ 
\mathcal  N([2,2]^T, I_2)
\end{cases}
$$


$$
\begin{cases}
100 \text{ samples} \\ 
Y = 1\\ 
\mathcal  N([-1,-1]^T, I_2)
\end{cases}
$$

$f_\beta (\cdot)$ : Logistic regression

$\dfrac{1}{\theta_1} + \dfrac{1}{\theta_2} = 5$

risk : $0.5$

then solve $(2)$


placeholder

placeholder

placeholder

placeholder

placeholder

placeholder