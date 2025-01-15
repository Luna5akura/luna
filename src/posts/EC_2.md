# Model

$1$: consumers totalling mass

$E, NE$: Experts, Non-Experts

$\psi\in(0,1)$: the share of Experts

$1 - \psi$: thetshare of Non-Experts

$q\in [0, 1]$ product quality

$0$ prices normalized to 0

$F_E(q)$: Experts choose, a continuous, smooth cumulative distribution

$f_E(q)$ density

$F_{NE}(q), f_{NE}(q)$: Non-Experts

## Assumption 1 (Expertise and Choice)

$F_E(q)\le F_{NE}(q), \forall q\in [0, 1]$: On average, Experts identify and purchase better products.

$\dfrac{\partial \left(\frac{f_E(q)}{f_{NE}(q)}\right)}{\partial q} > 0$: MLRP property

MLRP: Monotone Likelihood Ratio Property, the better will be better.

**Assumption 1** gives us:
- Experts experience higher quality on average
- the higher the product’s quality, the higher the share of its buyers that are Experts.

$r_E := \int_{0}^{1}q\mathrm d F_E(q), \quad r_{NE}:= \int_{0}^{1}q\mathrm d F_{NE}(q)$: Choice Procedure (Also means Expectation)

$r_E > r_{NE}$

