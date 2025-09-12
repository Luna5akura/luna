---
title: Business Paper - Week 7
date: 2025-9-10 
---

$x$: Covariates 

$y$: Walk-in 

$z$: time period opened 

---

The helper function:

$D\left( (x,z), (x^i,z^i) \right) = \alpha_1 \cdot d_{\text{time}}(x,x^i) + \alpha_2 \cdot \frac{|z - z^i|}{z_{\text{max}}}$
- $(x,z)$: the "covariate, decision" pair 
- $(x^i, z^i)$: the $i$-th data 
- $d_{\text{time}}: $ the distance between $x$

To simulate the distribution of $y$:

$\hat{Y}(z|x) = \sum_{i=1}^N w_i(x,z) \cdot y^i$

Where:

$w_i(x,z) = \frac{1}{D\left( (x,z), (x^i,z^i) \right) + \epsilon} \cdot \mathbb{I}\left[ (x^i,z^i) \in \text{TopK}(D) \right]$

- $\epsilon$: in case the denominator is $0$


---

Service speed:

$v(Y) = v_0 + \gamma Y$

Wait cost:

$W(Y) = \dfrac{Y}{v(Y)} = \dfrac{Y}{v_0+\gamma Y}$

Cost function:

$c(z,Y(z)) = C_1\cdot W(\hat{Y}(z|x) ) + C_2 z $
$c(z,Y(z)) = C_1\cdot W(\hat{Y}(z|x) ) + C_2 z $



Get distribution:

$\argmin_{w_i}c(z,Y(z))$

Get decision:

$z^*(x) = \argmin_{z\in\mathcal Z}\mathbb E[c(z;Y(z))\mid X=x]$

