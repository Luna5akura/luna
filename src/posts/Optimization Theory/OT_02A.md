---
title: Optimization Theory - Assignment - Week 2
category: Assignments
---

# 1

## Problem 

Let $ C $ be convex 

Let $ \operatorname{int}(C) \neq \phi $. 

Then prove: 

(i) $ \overline{\operatorname{int}(C)}=\bar{C} $  

(ii) $ \operatorname{int}(C)= \operatorname{int}(\bar{C}) $ and then $ \partial C=\partial \bar{C} $. 

Hint: $ \operatorname{int}(C) \cup \partial C=\bar{C}=\overline{\bar{C}}=\operatorname{int}(\bar{C}) \cup \partial \bar{C} $ and $ \operatorname{int}(C) \cap \partial C=\phi $.

## Solution (i)

First we show $\overline{int(C)} \subseteq  \bar C$

by definition, $int(C)\subseteq C $, then $\overline{int(C)} \subseteq  \bar C$

Then, we show $\bar C \subseteq  \overline{int(C)}$

For $\vec x \in \bar C$, let $z\in int(C)$ by Lemma 1.21, we have:

$w_n = \dfrac{1}{n}z + (1 - \dfrac{1}{n})x \in int(C)$

Notice that: $w_n - x\to 0$

Then, $x$ is a limit point of $int(C)$, by definition, $x\in \bar C$

$\square$

## Solution (ii)

- $int(C) = int(\bar C)$

First, we prove $int(C)\subseteq  int(\bar C)$

by definition, $C\subseteq \bar C $, then we can get $int(C) \subseteq int(\bar C)$

Then, we prove $int(\bar C) \subseteq  int(C)$

Let $\vec x \in int(\bar C)$

By definition, there exists $r>0 $ s.t. $B(\vec x, r) \subseteq \bar C$

Fix $\vec z \in int(C)$, consider $\vec v = \vec x - \vec z$

There exists some $\epsilon \in (0, 1)$ small enough s.t. $\vec x + \epsilon \vec v \in B(\vec x, r)$ (e.g. $\epsilon $ proportional to $r$)

Therefore, $\vec x + \epsilon \vec v \in \bar C$

Apply Lemma 1.21, we can get:

$\dfrac{1}{1+\epsilon}(\vec x + \epsilon \vec v) + \dfrac{\epsilon}{1+\epsilon}\vec z = \vec x \in int(C)$

$\square$

# 2

## Problem

Show that the following functions are convex:
1. $ e^{x_{1}+x_{2}}+\left(x_{1}-x_{2}\right)^{2}+x_{1}^{4} $;
2. $ e^{x_{1}}+e^{x_{2}}+\left(x_{1}-4 x_{2}\right)^{4}-5 $.

## Solution 1

$ H=\left(\begin{array}{cc}e^{x_{1}+x_{2}}+2+12 x_{1}^{2} & e^{x_{1}+x_{2}}-2 \\ e^{x_{1}+x_{2}}-2 & e^{x_{1}+x_{2}}+2\end{array}\right) $

The trace is $ 2 e^{x_{1}+x_{2}}+4+12 x_{1}^{2}>0 $.

The determinant is $ e^{x_{1}+x_{2}}\left(8+12 x_{1}^{2}\right)+24 x_{1}^{2} \geq 0 $.

Thus, $ H $ is positive semi-definite everywhere, so $ f $ is convex.

## Solution 2

Let $ u=x_{1}-4 x_{2} $. The Hessian matrix is

$
H=\left(\begin{array}{cc}
e^{x_{1}}+12 u^{2} & -48 u^{2} \\
-48 u^{2} & e^{x_{2}}+192 u^{2}
\end{array}\right) .
$

The trace is $ e^{x_{1}}+e^{x_{2}}+204 u^{2}>0 $.

The determinant is $ e^{x_{1}} e^{x_{2}}+192 e^{x_{1}} u^{2}+12 e^{x_{2}} u^{2} \geq 0 $.

Thus, $ H $ is positive semi-definite everywhere, so $ g $ is convex.

# 3

## Problem

Consider the minimal-objective function of $ \mathbf{b} $ for fixed $ A $ and $ \mathbf{c} $ :

$
\begin{aligned}
z(\mathbf{b})=\min \mathbf{c}^{t} \mathbf{x} & \\
\text { s.t. } A \mathbf{x} & =\mathbf{b}, \\
\mathbf{x} & \geq \mathbf{0} .
\end{aligned}
$

Show that $ z(\mathbf{b}) $ as a function of $ \mathbf{b} $ is a convex function in $ \mathbf{b} $ for all feasible $ \mathbf{b} $.

## Solution

First, we show that the domain is convex

Let $\vec b_1, \vec b_2 $ with corresponding $\vec x_1, \vec x_2 $ s.t. $A\vec x_1 = \vec b_1, A\vec x_2 = \vec b_2$.

Then let $\vec b_\lambda $ = $\lambda \vec b_1 + (1-\lambda )\vec b_2$, we have:

$\vec x_\lambda  = \lambda \vec x_1 + (1-\lambda )\vec x_2\ge 0$, then $\vec b_\lambda$ is feasible

Therefore, the domain is convex.

Then, we show that $z(\vec b) $ is convex 

Let $\vec c'\vec x_1^* =z(\vec b_1), \vec c'\vec x_1^* =z(\vec b_2)$, then:

$\vec b_\lambda $ is feasible for $\vec x_\lambda$

Therefore: $ z(\vec b_\lambda) \le \lambda z(\vec b_1) + (1-\lambda )z(\vec b_2)$

# 4

## Problem

Let $ X $ be a nonempty compact set and let $ f: \mathbb{R}^{n} \rightarrow \mathbb{R} $, and $ \mathbf{g}: \mathbb{R}^{n} \rightarrow \mathbb{R}^{m} $. Denote $ \theta(\boldsymbol{\lambda})=\inf \{f(\mathbf{x})+\langle\boldsymbol{\lambda}, \mathbf{g}(\mathbf{x})\}: \mathbf{x} \in X\} $. Prove that $ \theta(\boldsymbol{\lambda}) $ is concave over $ \mathbb{R}^{m} $.

## Solution

Let $ \boldsymbol{\lambda}_{1}, \boldsymbol{\lambda}_{2} \in \mathbb{R}^{m} $ and $ t \in[0,1] $. 

Define $ \boldsymbol{\mu}=t \boldsymbol{\lambda}_{1}+(1-t) \boldsymbol{\lambda}_{2} $.

Then,

$
\theta(\boldsymbol{\mu})=\inf _{\mathbf{x} \in X}\{f(\mathbf{x})+\langle\boldsymbol{\mu}, \mathbf{g}(\mathbf{x})\rangle\}=\inf _{\mathbf{x} \in X}\left\{f(\mathbf{x})+t\left\langle\boldsymbol{\lambda}_{1}, \mathbf{g}(\mathbf{x})\right\rangle+(1-t)\left\langle\boldsymbol{\lambda}_{2}, \mathbf{g}(\mathbf{x})\right\rangle\right\} .
$

Denote $ A(\mathbf{x})=f(\mathbf{x})+\left\langle\boldsymbol{\lambda}_{1}, \mathbf{g}(\mathbf{x})\right\rangle $ and $ B(\mathbf{x})=f(\mathbf{x})+\left\langle\boldsymbol{\lambda}_{2}, \mathbf{g}(\mathbf{x})\right\rangle $. 

The expression becomes:

$
\theta(\boldsymbol{\mu})=\inf _{\mathbf{x} \in X}\{t A(\mathbf{x})+(1-t) B(\mathbf{x})\}
$

In general, for any functions $ u $ and $ v$, we have:

$ \inf (u+v) \geq \inf u+\inf v $. 

Applying this to $ u(\mathbf{x})=t A(\mathbf{x}) $ and $ v(\mathbf{x})=(1-t) B(\mathbf{x}) $, 

and notice that $ \inf (t A)=t \inf A $ and $ \inf ((1-t) B)=(1-t) \inf B $ (since $ t, 1-t \geq 0 $ ), we have:

$
\theta(\mu) \geq t \inf _{\mathbf{x} \in X} A(\mathbf{x})+(1-t) \inf _{\mathbf{x} \in X} B(\mathbf{x})=t \theta\left(\boldsymbol{\lambda}_{1}\right)+(1-t) \theta\left(\boldsymbol{\lambda}_{2}\right) .
$

Thus, $ \theta(\boldsymbol{\lambda}) $ is concave.

# 5

## Problem



placeholder

placeholder

placeholder

placeholder

placeholder

placeholder
