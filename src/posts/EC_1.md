# Environment

Product: unknown to both side

Rating system:

- Collect from previous customers
- provide a rating
- new customers observe it
- purchase with ex ante type
- ex post preference

## Customers' Problem, Rating System

$Q\in\{0, 1\}$: True quality of the product

$t\in\mathbb{N}$: new customerm arrive time

$u_t = \theta_t + \zeta_t + Q - p\quad (1)$: **material utility** of customer $t$

- $\theta_t$: ex ante type of the customer
  - independently continuous $F_\theta$
- $\zeta_t$: ex post idiosyncratic preference term
  - independently continuous $F_\zeta$
  - sometimes combined $F_{\theta, \zeta}$
- $p$: price of the product
- $\theta_t, \zeta_t$: customer private info

Procedure:

- $t$ observe rating and $\theta_t$
- whether to by
- if buy: experience **material utility**
- $r_t$: review
  - $-\underline{K},\dots,\overline{K}$: reviews
  - $\mathcal{R} = \{-\underline{K},\dots,\overline K \}$
  - $\overline K$: like, $-\underline K $ : dislike
- $b_t$: purchase decision
- $r_t$: review decision
- $a_t\in \mathcal{R}\cup \{ N \}$: action
  - $a_t = N$: no purchase ($b_t$ = 0)
- $\mathcal A = \mathcal R \cup \{ N \}$: set of actions
- $h_t = \{ a_1,\dots,a_{t-1}\}$: history ($h_1 = \oslash$)
- $\mathbf\Omega$: rating system
  - $\Omega_t$: rating avaliable to $t$

---

### Purchase decision

- $t$ observe $\Omega_t$
- $B_t :\Omega_t\times\mathbb R^3\rightarrow\{0, 1\}$: purchase decision
  - rating system & ex ante type $\theta_t$ & ex post idiosyncratic preference $\zeta_t$ & price $p$
- $\mathbf B = \{ B_t\} ^ \infty_{t = 1}$: collection of purchase decision strategies
  - $B_t(\Omega_t, \theta_t) = 1\quad$if and only if$\quad \theta_t + \mathbb E \left[\zeta_t\right] + q_t - p \ge 0$: Bayes-Nash equilibrium
  - $q_t = \mathbb P _{\{(\theta_S, \zeta_S\}_{S=1}^{t-1}}\left[Q=1\mid\Omega_t\right] \quad$ <p id = "2">(2)</p>: the belief of $t$

### Review decision

$\lambda_{-\underline K }\le \dots\le \lambda_{-1}\le \lambda_1\le\dots\le\lambda_{\overline K} \in \mathbb R$: threshold

$$
r_{t}=\left\{\begin{array}{ll}
-\underline{K} & \text { if } u_{t}<\lambda_{-\underline{K}}, \\
i & \text { if } \lambda_{i-1} \leq u_{t}<\lambda_{i}, -\underline{K} < i < 0, \\
0 & \text { if } \lambda_{-1} \leq u_{t}<\lambda_{1}, \\
i & \text { if } \lambda_{i} \leq u_{t}<\lambda_{i+1}, 0 < i < \overline{K}, \\
\bar{K} & \text { if } u_{t} \geq \lambda_{\bar{K}} .
\end{array}\right.\quad (3)
$$

---

### Assumption 1 - Richness

$\theta, \zeta$, random variable, drawn from $\left[\underline \theta, \overline\theta\right], \left[\underline \zeta, \overline\zeta\right]$, so that

- $\overline\zeta + \overline\theta - p > \lambda\_{\overline K}, $
- $\underline\zeta+\overline\theta - p + 1 < \lambda_{-\underline K}$

why $\overline\theta$ ?

- lower may not purchase
- $Q = 0$ for most favorable review, $Q = 1$ for least favorable review , these are not fully revealing ablout the quality

### Remark 1

---

# Full history

- $\Omega_t = h_t$

## Learning Dynamics

[(2)](#2) becomes:

$q_t = \mathbb P _{\{(\theta_S, \zeta_S\}_{S=1}^{t-1}}\left[Q=1\mid h_t\right]$

$l_t = \dfrac{q_t}{1-q_t} = \dfrac{\mathbb P_{\{(\theta_S,\zeta_S)\}_{S=1}^{t-1}}[Q=1\mid h_t]}{\mathbb P_{\{(\theta_S,\zeta_S)\}^{t-1}_{S=1}}[Q=0\mid h_t]}$ <p id = "4">(4)</p> : associated likelihood ratio

$\pi(a;F_{\theta,\zeta},Q,q)$: probability of action $a\in \mathcal A$,

- given joint distribution of $\theta, \zeta$
- price $p$
- thesholds when true quality is $Q$, belief is $q$

$$
\begin{array}{l}
\pi\left(a ; F_{\theta, \zeta}, Q, q\right) \\
\quad=\left\{\begin{array}{ll}
\mathbb{P}_{\theta, \zeta}[q+\theta+\mathbb{E}[\zeta]-p<0], & \text { for } a=N, \\
\mathbb{P}_{\theta, \zeta}\left[q+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta+Q-p<\lambda_{-\underline{K}}\right], & \text { for } a=-\underline{K}, \\
\mathbb{P}_{\theta, \zeta}\left[q+\theta+\mathbb{E}[\zeta]-p \geq 0, \lambda_{a-1} \leq \theta+\zeta+Q-p<\lambda_{a}\right], & \text { for }-\underline{K} < a < 0, \\
\mathbb{P}_{\theta, \zeta}\left[q+\theta+\mathbb{E}[\zeta]-p \geq 0, \lambda_{-1} \leq \theta+\zeta+Q-p<\lambda_{1}\right], & \text { for } a=0, \\
\mathbb{P}_{\theta, \zeta}\left[q+\theta+\mathbb{E}[\zeta]-p \geq 0, \lambda_{a} \leq \theta+\zeta+Q-p<\lambda_{a+1}\right], & \text { for } 0 < a < \bar{K}, \\
\mathbb{P}_{\theta, \zeta}\left[q+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta+Q-p \geq \lambda_{\bar{K}}\right], & \text { for } a=\bar{K} .
\end{array}\right.
\end{array}
$$

$\mathbf \pi (F_{\theta,\zeta},Q,q) = (\pi(a;F_{\theta,\zeta},Q,q): a\in\mathcal A)$: vector of probabilities

$$
\begin{aligned}
l_{t} & =\frac{q_{t}}{1-q_{t}}=\frac{\mathbb{P}_{\left\{\left(\theta_{s}, \zeta_{s}\right)\right\}_{s=1}^{t-1}}\left[Q=1 \mid h_{t}\right]}{\mathbb{P}_{\left\{\left(\theta_{s}, \zeta_{s}\right)\right\}_{s=1}^{t-1}}^{t-1}\left[Q=0 \mid h_{t}\right]}=\frac{\mathbb{P}_{\left\{\left(\theta_{s}, \zeta_{s}\right) \zeta_{s=1}^{t-1}\right.}\left[h_{t} \mid Q=1\right]}{\mathbb{P}_{\left\{\left(\theta_{s}, \zeta_{s}\right)\right\}_{s=1}^{t-1}}^{t h}\left[h_{t} \mid Q=0\right]} \\
& =\prod_{s=1}^{t-1} \frac{\pi\left(a_{s} ; F_{\theta, \zeta}, Q=1, q_{s}\right)}{\pi\left(a_{s} ; F_{\theta, \zeta}, Q=0, q_{s}\right)}
\end{aligned}
$$

<p id = "5">(5)</p>

#### More detailed on (5)

$\dfrac{\mathbb P [Q=1\mid h_t]}{\mathbb P [Q=0 \mid h_t]} = \dfrac{\mathbb P [h_t \mid Q = 1]\mathbb P [Q=1]}{\mathbb P [h_t \mid Q = 0]\mathbb P [Q = 0]}$

using that $\mathbb P [Q=  1] = \mathbb P [Q = 0]$ we get the third equation

$\mathbb P[h_t \mid Q ] = \prod_{s = 1}^{t -1} \mathbb P [a_s \mid Q ] $, notice that $h_t$ is composed from $a_s$,

$\mathbb P [a_s \mid Q ] = \pi (a_s; F_{\theta,\zeta}, Q, q_s)$ with this we get the fourth equation.

---

$l_{t+1} = l_t \times \dfrac{\pi(a_t; F_{\theta, \zeta}, Q = 1, q_t)}{\pi (a_t; F_{\theta, \zeta}, Q = 0, q_t )}$

$l_{t+1} = l_t \times \dfrac{\pi(a_t; F_{\theta, \zeta}, Q = 1, q_t)}{\pi (a_t; F_{\theta, \zeta}, Q = 0, q_t )}, \quad \text{w.p. } \pi(a_t; F_{\theta,\zeta}, Q, q_t), a\in \mathcal A \text { for } t \ge 1$

## Complete learning

### Theorem 1:

If $\overline\theta + \mathbb E [\zeta] - p \ge 0, q_1 \in(0, 1)$, then $q_t\rightarrow Q$ almost surely

Proof

$Z(a_t | l_t ) = \dfrac{\pi (a_t ; F_{\theta, \zeta}, Q = 1, q = q_t ) }{ \pi ( a*t ; F*{\theta, \zeta}, Q = 0, q = q_t)}, \forall a_t \in \mathcal A, $<p id = "A-1">(A-1)</p>
: likelihood ratio

#### Part 1 : when $\overline \theta + \mathbb E [\zeta] - p > 0$

$$
\begin{aligned}
& \mathbb{E}_{a \sim \pi\left(F_{\theta, \zeta}, Q=0, q=q_{t}\right)}\left[Z\left(a \mid l_{t}\right) \mid h_{t}\right] \\
& =\mathbb{E}_{a \sim \pi\left(F_{\theta, \zeta}, Q=0, q=q_{t}\right)}\left[\frac{\pi\left(a ; F_{\theta, \zeta}, Q=1, q=q_{t}\right)}{\pi\left(a ; F_{\theta, \zeta}, Q=0, q=q_{t}\right)}\right] \\
& =\sum_{a \in \mathcal A }\pi(F_{\theta,\zeta}, Q = 0, q = q_t)\left[\frac{\pi\left(a ; F_{\theta, \zeta}, Q=1, q=q_{t}\right)}{\pi\left(a ; F_{\theta, \zeta}, Q=0, q=q_{t}\right)}\right] \\
& =\sum_{a \in \mathcal{A}} \pi\left(a ; F_{\theta, \zeta}, Q=1, q=q_{t}\right)\\
& =1 .
\end{aligned}
$$

$$
\begin{aligned}
&\mathbb E [l_{t + 1} \mid\mathcal F_t]\\
&= \mathbb E [l_t \times Z(a_t\mid l_t)\mid \mathcal F_t]\\
&=\mathbb E[l_t \mid \mathcal F_t ] = l_t\\
&\Rightarrow l_t\text{ forms a martingale}
\end{aligned}
$$

$l_t = \dfrac{q_t}{1-q_t} < \infty, l_t \ge 0$

---

#### Martingale convergence theorem

**Statement:**

$\{X_n\}_{n=1}^\infty$ is a submartingale (or martingale, or supermartingale) with respect to a filtration $\{\mathcal{F}_n\}$.

Suppose one of the following conditions holds:

1. $\{X_n\}$ is bounded in $L^1$, i.e., $\sup_n \mathbb{E}[|X_n|] < \infty$.

2. $\{X_n\}$ is bounded almost surely, i.e., there exists a constant $K$ such that $|X_n| \leq K$ almost surely for all $n$.

3. $\{X_n\}$ is a non-negative supermartingale, i.e., $X_n \geq 0$ almost surely for all $n$.

Then, $\{X_n\}$ converges almost surely (a.s.) to a limit $X_\infty$ as $n \to \infty$.

If, in addition, $\{X_n\}$ is uniformly integrable, then $X_\infty$ is integrable, and
$
\lim_{n \to \infty} \mathbb{E}[|X_n - X_\infty|] = 0.
$

---

$l_t \rightarrow l_\infty$ almost surely

$$
\begin{aligned}
& Z\left(a=\bar{K} \mid l_{t}\right) \\
& =\frac{\pi\left(a=\bar{K} ; F_{\theta, \zeta}, Q=1, q=q_{t}\right)}{\pi\left(a=\bar{K} ; F_{\theta, \zeta}, Q=0, q=q_{t}\right)} \\
& =\frac{\mathbb{P}_{\theta, \zeta}\left[q_{t}+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta+1-p \geq \lambda_{\bar{K}}\right]}{\mathbb{P}_{\theta, \zeta}\left[q_{t}+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p \geq \lambda_{\bar{K}}\right]} \\
& \text{notice the over part is >= -1 and the below part is >= 0} \\
& =1+\frac{\mathbb{P}_{\theta, \zeta}\left[q_{t}+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p-\lambda_{\bar{K}} \in[-1,0)\right]}{\mathbb{P}_{\theta, \zeta}\left[q_{t}+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p-\lambda_{\bar{K}} \geq 0\right]} \\
& \text{let over part q is 0, below part q is 1}\\
& \geq 1+\frac{\mathbb{P}_{\theta, \zeta}\left[\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p-\lambda_{\bar{K}} \in[-1,0)\right]}{\mathbb{P}_{\theta, \zeta}\left[1+\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p-\lambda_{\bar{K}} \geq 0\right]},
\end{aligned}
$$

Prove the upper part > 0 :

Let $\Delta_1 = \min \{ 1, \overline \theta + \mathbb E [\zeta] - p\} > 0$

$$
\begin{array}{l}
\mathbb{P}_{\theta, \zeta}\left[\theta+\mathbb{E}[\zeta]-p \geq 0, \theta+\zeta-p-\lambda_{\bar{K}} \in[-1,0)\right] \\
\quad \stackrel{(a)}{\geq} \mathbb{P}_{\theta, \zeta}\left[\theta \geq \bar{\theta}-\Delta_{1}, p+\lambda_{\bar{K}}-\theta-1 \leq \zeta \leq p+\lambda_{\bar{K}}-\theta\right] \\
\quad \stackrel{(\text { b) }}{>} 0,
\end{array}
$$

<p id = "(A-2)">(A-2)</p>

for detailed (b), we have:

$$
\begin{aligned}
&p+\lambda_{\overline K} - \theta - 1 \\
&\le p + \lambda_{\overline K} - \overline \theta + \Delta_1 - 1\\
&\le p + \lambda_{\overline K} - \overline \theta < \overline \zeta\\
\\
&p+\lambda_{\overline K} - \theta - 1 \\
&\ge p + \lambda _{-\underline K} - \overline \theta - 1 \\
&> \underline \zeta
\end{aligned}
$$

(refer to [Assumption 1](#assumption-1---richness))

$\min_l Z(a = \overline K \mid l) - 1 \ge \epsilon > 0$

$$
\begin{aligned}
&\mathbb P _{a\sim \mathbf \pi (F_{\theta,\zeta}, Q = 0, q = q_t)}[|Z(a\mid l_t )- 1 | \ge \epsilon \mid l_t]\\
&\ge \pi ( a = \overline K; F_{\theta, \zeta}, Q = 0, q = q_t)\\
&\ge \mathbb P_{\theta, \zeta}[q_t + \theta + \mathbb E[\zeta] - p \ge 0, \theta + \zeta - p \ge \lambda_{\underline K }]\\
&\ge \mathbb P_{\theta, \zeta } [\theta + \mathbb [\zeta] - p \ge 0 , \theta + \zeta - p \ge \lambda_{\overline K }]\\
&\ge \mathbb P_{\theta, \zeta } \left[\theta\ge\overline\theta - \dfrac{\Delta _2}{2}, \zeta\ge \overline\zeta - \dfrac{\Delta_2}{2}\right]\\
&> 0
\end{aligned}
$$

where $\Delta_2 = \min\{\overline\theta + \mathbb E [\zeta] - p,\overline\theta + \overline\zeta - p - \lambda_{\overline K }\} > 0$

<p id = "(A-3)">(A-3)</p>

with [(A-2)](#(A-2)), [(A-3)](#(A-3)):
$$
\begin{aligned}
&\mathbb P_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[|l_{t+1} - l_t|\ge\delta\epsilon]\\
&\text{with } l_{t+1} = l_t\cdot Z(\cdot \mid l_t)\\
& = \mathbb E_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[\mathbf 1\{|l_t(Z(\cdot\mid l_t ) - 1)|\ge \delta\epsilon\}] \\
&\ge  \mathbb E_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[\mathbf 1\{l_t\ge\delta\}\mathbf 1 \{|(Z(\cdot\mid l_t ) - 1)|\ge \epsilon\}] \\
&=  \mathbb E_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[\mathbf 1\{l_t\ge\delta\}\mathbb P_{\theta, \zeta } [\mathbf |(Z(\cdot\mid l_t ) - 1)|\ge \epsilon \mid l_t ]] \\
&\ge\eta\mathbb E_{\{(\theta_s,\zeta_s)\}^t_{s = 1}} [ \mathbf 1 \{ l_t\ge\delta\}] \\
&= \eta\mathbb E_{\{(\theta_s,\zeta_s)\}^t_{s = 1}} [l_t> \delta]\\
\end{aligned}
$$

$l_t\rightarrow l_\infty$ almost surely ( martingale convergence theorem ) $\Rightarrow P_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[|l_{t+1} - l_t|\ge\delta\epsilon]\rightarrow 0 $

$\Rightarrow P_{\{(\theta_s,\zeta_s)\}^t_{s = 1}}[|l_{t} > \delta ]\rightarrow 0$

$\Rightarrow  l_t\rightarrow 0 $ in probability

with $l_t\rightarrow l_\infty$ almost surely

$\Rightarrow \mathbb P[l_\infty = 0] = 1$

notice $l_t = \dfrac{q_t}{1 - q_t} \Rightarrow q_t \rightarrow 0$ almost surely $\square$

this ends the part 1 proof

[return to part 1](#part-1--when-overline-theta--mathbb-e-zeta---p--0)

#### Part 2: when $\overline\theta + \mathbb E[\zeta] - p < 0$

Let $\Delta = -(\overline\theta + \mathbb E [\zeta] - p) > 0$

notice $\Delta > 1 \Leftrightarrow \overline + \mathbb E[\zeta] - p + q \le -\Delta + 1 < 0$, no purchase happen

$\forall q \ge \Delta$, with [Assumption 1](#assumption-1---richness) and similar to [(A-2)](#(A-2))

$\theta\ge\overline\theta - ( 1 - \Delta)$

$\Rightarrow \underline\zeta < \lambda_{-\underline K} + p - \overline\theta - 1 \le \lambda_{-\underline K } + p - \theta - 1 \le \lambda_{\overline K } + p - (\overline\theta - (1 - \Delta)) - 1 < \overline \zeta$

$\Rightarrow \max _{q \in[\Delta, 1]} \frac{\mathbb{P}_{\theta, \zeta}\left[\theta+\mathbb{E}[\zeta]+q-p \geq 0, \theta+\zeta+1-p \leq \lambda_{-\underline{K}}\right]}{\mathbb{P}_{\theta, \zeta}\left[\theta+\mathbb{E}[\zeta]+q-p \geq 0, \theta+\zeta-p \leq \lambda_{-\underline{K}}\right]}<1$

the over part and below part difference is bounded by:

$$


placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder
