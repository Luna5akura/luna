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

$c((z,w), (\hat z, \hat w )) = \theta _1 \cdot w \cdot d(z, \hat z) +\theta _2 \cdot (\phi  (w) - \phi (\hat{w}))_+$

- $d(z,\hat z) = \| x - \hat x \|^2_2 + \infty \cdot | y - \hat y|$: cost with different $z, \hat z$

- $(\phi(w) - \phi (\hat w))_+$ : cost related to differences in probability mass.

  - $\phi : \mathbb  R_+ \rightarrow  \mathbb  R_+$ : convex function, where:
  - $\phi(1) = 0$
- $\theta _1, \theta _2 \ge 0$ : hyperparameters, where:
  - $\dfrac{1}{\theta _1} + \dfrac{1}{\theta _2}=C $ for some constant $C$

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

[Skip the proof](#end-proof-for-functino-d)

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
& =\mathbb{E}_{\mathbb{Q}_{0} \otimes \hat{\mathbb{P}}}[c((Z, W),(\hat{Z}, \hat{W}))]+\sup _{h \in \mathbb{R}_{+}} h(r-\bar{r}) \\
& <+\infty
\end{aligned}
$$


##### End Proof for Functino D


placeholder

placeholder

placeholder

placeholder

placeholder

placeholder