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

#### (P)
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

- $d(z,\hat z) = \| x - \hat x \|^2_2 + \infty \cdot | y - \hat y|$: cost with $z, \hat z$
placeholder

placeholder

placeholder

placeholder

placeholder

placeholder