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

Prove that every local solution of the following problem is a global solution as well: $ \begin{aligned} \min _{x_{1}, x_{2}, x_{3} \in \mathbb{R}} & e^{x_{1}-2 x_{2}+x_{3}}+\left(x_{1}-5 x_{2}+6 x_{3}\right)^{2}+\left(-x_{1}+2 x_{2}+3 x_{3}\right)^{6} \\ \text { s.t. } & x_{1}+x_{2}-7 x_{3}=1 \\ & x_{1}^{2}+x_{2}^{2}+e^{x_{1}-2 x_{2}-x_{3}} \leq 2 \\ & x_{1} \geq 0 \\ & x_{3} \geq 0 \end{aligned} $

## Solution

First, we show that the function is convex

$e^{x_1-2x_2+x_3}$:
- $x_1-2x_2+x_3$ is linear, $e^x $ is convex, so it's convex (Lemma 1.41)

$(x_1-5x_2+6x_3)^2$:
- $x_1-5x_2+6x_3$ is linear, $x^2$ is convex, so it's convex (Lemma 1.41)

Similarly, $(-x_1+2x_2+3x_3)^6$ is convex 

Then the whole function is convex (Lemma 1.40)

Then, we show that the feasible set is convex:

$x_1+x_2-7x_3=1$: This is a linear function, defines a convex set. (Lemma 1.38)

$x_1^2+x_2^2 +  e ^{x_1-2x_2-x3 } \le 2$: Similarly, this function is convex, so this inequality is defines a convex set. (Lemma 1.38)

$x_1\ge 0, x_3 \ge 0 $: These are linear inequality, defines a convex set. (Lemma 1.38)

Therefore, the intersection of convex sets is also convex (Lemma 1.39)

$\square$

# 6

## Problem

Consider the optimization problem 

$ \begin{array}{rl} \min _{x \in \mathbb{R}} & 2 x^{2}-x^{3} \\ \text { s.t. } & x \in\{-2,-1,0,1,2\} \end{array} $

1. Convert the above problem to an optimization problem with a linear objective. 2. Draw the feasible set of the reformulated problem. 3. Convexify the reformulated problem and draw the feasible set of the resulting convex problem.

## Solution (1)

Let $ y=\left(y_{-2}, y_{-1}, y_{0}, y_{1}, y_{2}\right) $ be binary variables such that:

$
y_{i}=\left\{\begin{array}{ll}
1 & \text { if } x=i \\
0 & \text { otherwise }
\end{array}\right.
$

Then:

$ \begin{array}{rl}\min _{y} & 16 y_{-2}+3 y_{-1}+0 \cdot y_{0}+1 \cdot y_{1}+0 \cdot y_{2} \\ \mathrm{s.t.} & y_{-2}+y_{-1}+y_{0}+y_{1}+y_{2}=1 \\ & y_{i} \in\{0,1\}, \quad i \in\{-2,-1,0,1,2\}\end{array} $

## Solution (2)

$ \{(1,0,0,0,0),(0,1,0,0,0),(0,0,1,0,0),(0,0,0,1,0),(0,0,0,0,1)\} $

## Solution (3)

Relax the variables:

$ \begin{array}{rl}\min _{y} & 16 y_{-2}+3 y_{-1}+0 \cdot y_{0}+1 \cdot y_{1}+0 \cdot y_{2} \\ \mathrm{s.t.} & y_{-2}+y_{-1}+y_{0}+y_{1}+y_{2}=1 \\ & y_{i} \geq 0\end{array} $

Then the answer:

$ \left\{y \in \mathbb{R}^{5}: y_{i} \geq 0, \sum y_{i}=1\right\} $




## The Alternatives: A Proof of the Theorem for Convex Systems

This document provides a detailed proof for a fundamental theorem of the alternative in convex analysis. This theorem establishes a crucial relationship between the feasibility of a system of convex inequalities and the existence of a solution to a related dual system. Specifically, it states that for a nonempty convex set $X \subseteq \mathbb{R}^n$, convex functions $\alpha: \mathbb{R}^n \rightarrow \mathbb{R}$ and $\mathbf{g}: \mathbb{R}^n \rightarrow \mathbb{R}^m$, and an affine function $\mathbf{h}(\mathbf{x}) = \mathbf{Ax} - \mathbf{b}$, exactly one of two systems has a solution.

### The Two Systems

**System 1:** There exists an $\mathbf{x} \in X$ such that:
$$
\alpha(\mathbf{x}) < 0, \quad \mathbf{g}(\mathbf{x}) \leq \mathbf{0}, \quad \mathbf{h}(\mathbf{x}) = \mathbf{0}
$$

**System 2:** There exist $\lambda_0 \in \mathbb{R}$, $\boldsymbol{\lambda} \in \mathbb{R}^m$, and $\boldsymbol{\mu} \in \mathbb{R}^k$ such that:
$$
\lambda_0 \alpha(\mathbf{x}) + \boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}) + \boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}) \geq 0 \quad \text{for all } \mathbf{x} \in X
$$
with the conditions:
$$
(\lambda_0, \boldsymbol{\lambda}) \geq \mathbf{0}, \quad (\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu}) \neq \mathbf{0}
$$

The theorem states that if System 1 has no solution, then System 2 must have a solution. The converse holds if we add the condition that $\lambda_0 > 0$. This result is a generalization of Farkas' Lemma to the realm of convex functions and is a cornerstone of optimization theory, particularly in the development of duality.

### The Proof

The proof hinges on a geometric argument that employs the separating hyperplane theorem. We follow the hint provided and define a specific set in $\mathbb{R}^{1+m+k}$.

**1. Defining the Set C**

Let's define the set $C$ as suggested:
$C = \{ (z_1, \mathbf{z}_2, \mathbf{z}_3) \in \mathbb{R} \times \mathbb{R}^m \times \mathbb{R}^k \mid \exists \mathbf{x} \in X \text{ s.t. } \alpha(\mathbf{x}) < z_1, \mathbf{g}(\mathbf{x}) \leq \mathbf{z}_2, \mathbf{h}(\mathbf{x}) = \mathbf{z}_3 \}$

**2. Convexity of C**

We first establish that the set $C$ is convex. Let $(z_1, \mathbf{z}_2, \mathbf{z}_3)$ and $(z'_1, \mathbf{z}'_2, \mathbf{z}'_3)$ be two points in $C$. By the definition of $C$, there exist $\mathbf{x}, \mathbf{x}' \in X$ such that:
- $\alpha(\mathbf{x}) < z_1$, $\mathbf{g}(\mathbf{x}) \leq \mathbf{z}_2$, $\mathbf{h}(\mathbf{x}) = \mathbf{z}_3$
- $\alpha(\mathbf{x}') < z'_1$, $\mathbf{g}(\mathbf{x}') \leq \mathbf{z}'_2$, $\mathbf{h}(\mathbf{x}') = \mathbf{z}'_3$

Now, consider a convex combination of these two points for any $\theta \in$:
$(\theta z_1 + (1-\theta)z'_1, \theta\mathbf{z}_2 + (1-\theta)\mathbf{z}'_2, \theta\mathbf{z}_3 + (1-\theta)\mathbf{z}'_3)$

Since $X$ is a convex set, $\mathbf{x}_{\theta} = \theta\mathbf{x} + (1-\theta)\mathbf{x}' \in X$.

By the convexity of $\alpha$ and $\mathbf{g}$, and the affinity of $\mathbf{h}$:
- $\alpha(\mathbf{x}_{\theta}) \leq \theta\alpha(\mathbf{x}) + (1-\theta)\alpha(\mathbf{x}') < \theta z_1 + (1-\theta)z'_1$
- $\mathbf{g}(\mathbf{x}_{\theta}) \leq \theta\mathbf{g}(\mathbf{x}) + (1-\theta)\mathbf{g}(\mathbf{x}') \leq \theta\mathbf{z}_2 + (1-\theta)\mathbf{z}'_2$
- $\mathbf{h}(\mathbf{x}_{\theta}) = \mathbf{A}(\theta\mathbf{x} + (1-\theta)\mathbf{x}') - \mathbf{b} = \theta(\mathbf{Ax}-\mathbf{b}) + (1-\theta)(\mathbf{A'x}'-\mathbf{b}) = \theta\mathbf{z}_3 + (1-\theta)\mathbf{z}'_3$

These inequalities show that the convex combination of the two points is also in $C$, thus proving that **C is a convex set**.

**3. System 1 Has No Solution Implies (0, 0, 0) is Not in the Closure of C**

The statement that System 1 has no solution means there is no $\mathbf{x} \in X$ for which $\alpha(\mathbf{x}) < 0$, $\mathbf{g}(\mathbf{x}) \leq \mathbf{0}$, and $\mathbf{h}(\mathbf{x}) = \mathbf{0}$. This is equivalent to saying that the point **(0, 0, 0) is not in the set C**.

More formally, let's define a related set:
$C_0 = \{ (z_1, \mathbf{z}_2, \mathbf{z}_3) \in \mathbb{R} \times \mathbb{R}^m \times \mathbb{R}^k \mid \exists \mathbf{x} \in X \text{ s.t. } \alpha(\mathbf{x}) \leq z_1, \mathbf{g}(\mathbf{x}) \leq \mathbf{z}_2, \mathbf{h}(\mathbf{x}) = \mathbf{z}_3 \}$
The set $C_0$ is also convex. The condition that System 1 has no solution implies that the point $(0, \mathbf{0}, \mathbf{0})$ is not in the set $\{ (z_1, \mathbf{z}_2, \mathbf{z}_3) \in C \mid z_1 \leq 0, \mathbf{z}_2 \leq \mathbf{0}, \mathbf{z}_3 = \mathbf{0} \}$. This implies that $(0, \mathbf{0}, \mathbf{0})$ is not in the closure of $C$, denoted $\text{cl}(C)$.

**4. Applying the Separating Hyperplane Theorem**

Since $C$ is a nonempty convex set and $(0, \mathbf{0}, \mathbf{0}) \notin \text{cl}(C)$, by the Separating Hyperplane Theorem, there exists a nonzero vector $(\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu}) \in \mathbb{R} \times \mathbb{R}^m \times \mathbb{R}^k$ and a scalar $\beta$ such that:
$$
\lambda_0 z_1 + \boldsymbol{\lambda}^t \mathbf{z}_2 + \boldsymbol{\mu}^t \mathbf{z}_3 \geq \beta
$$
for all $(z_1, \mathbf{z}_2, \mathbf{z}_3) \in C$, and
$$
\lambda_0 \cdot 0 + \boldsymbol{\lambda}^t \mathbf{0} + \boldsymbol{\mu}^t \mathbf{0} < \beta
$$
The second inequality implies that $\beta > 0$. Combining these, we get:
$$
\lambda_0 z_1 + \boldsymbol{\lambda}^t \mathbf{z}_2 + \boldsymbol{\mu}^t \mathbf{z}_3 > 0
$$
for all $(z_1, \mathbf{z}_2, \mathbf{z}_3) \in C$.

**5. Deriving the Conditions of System 2**

Let's analyze the properties of the multipliers $(\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu})$.

- **Non-negativity of $\lambda_0$ and $\boldsymbol{\lambda}$**:
  For any $\mathbf{x} \in X$, we can choose $z_1 > \alpha(\mathbf{x})$, $\mathbf{z}_2 \geq \mathbf{g}(\mathbf{x})$, and $\mathbf{z}_3 = \mathbf{h}(\mathbf{x})$.  We can make $z_1$ and the components of $\mathbf{z}_2$ arbitrarily large. If any component of $(\lambda_0, \boldsymbol{\lambda})$ were negative, we could make the expression $\lambda_0 z_1 + \boldsymbol{\lambda}^t \mathbf{z}_2 + \boldsymbol{\mu}^t \mathbf{z}_3$ arbitrarily negative, which would contradict the separation inequality. Therefore, we must have $(\lambda_0, \boldsymbol{\lambda}) \geq \mathbf{0}$.

- **The Main Inequality**:
  Now, for any $\mathbf{x} \in X$, we can choose a sequence of points $(z_{1,k}, \mathbf{z}_{2,k}, \mathbf{z}_{3,k}) \in C$ such that $z_{1,k} \to \alpha(\mathbf{x})$, $\mathbf{z}_{2,k} \to \mathbf{g}(\mathbf{x})$, and $\mathbf{z}_{3,k} = \mathbf{h}(\mathbf{x})$. From the separation inequality, we have:
  $$
  \lambda_0 z_{1,k} + \boldsymbol{\lambda}^t \mathbf{z}_{2,k} + \boldsymbol{\mu}^t \mathbf{z}_{3,k} \geq 0
  $$
  Taking the limit as $k \to \infty$, we get:
  $$
  \lambda_0 \alpha(\mathbf{x}) + \boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}) + \boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}) \geq 0
  $$
  This inequality holds for all $\mathbf{x} \in X$.

- **Non-zero Multipliers**:
  The Separating Hyperplane Theorem guarantees that the separating vector is non-zero, so $(\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu}) \neq \mathbf{0}$.

Thus, we have established all the conditions of System 2.

### The Converse

Now, let's prove the converse: if System 2 has a solution with $\lambda_0 > 0$, then System 1 has no solution.

Assume there exists a solution $(\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu})$ to System 2 with $\lambda_0 > 0$. This means:
$$
\lambda_0 \alpha(\mathbf{x}) + \boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}) + \boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}) \geq 0
$$
for all $\mathbf{x} \in X$, with $(\lambda_0, \boldsymbol{\lambda}) \geq \mathbf{0}$ and $(\lambda_0, \boldsymbol{\lambda}, \boldsymbol{\mu}) \neq \mathbf{0}$.

Now, suppose for the sake of contradiction that System 1 has a solution, i.e., there exists an $\mathbf{x}_0 \in X$ such that:
$$
\alpha(\mathbf{x}_0) < 0, \quad \mathbf{g}(\mathbf{x}_0) \leq \mathbf{0}, \quad \mathbf{h}(\mathbf{x}_0) = \mathbf{0}
$$

Let's evaluate the expression from System 2 at this point $\mathbf{x}_0$:
$$
\lambda_0 \alpha(\mathbf{x}_0) + \boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}_0) + \boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}_0)
$$

- Since $\lambda_0 > 0$ and $\alpha(\mathbf{x}_0) < 0$, we have $\lambda_0 \alpha(\mathbf{x}_0) < 0$.
- Since $\boldsymbol{\lambda} \geq \mathbf{0}$ and $\mathbf{g}(\mathbf{x}_0) \leq \mathbf{0}$, we have $\boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}_0) \leq 0$.
- Since $\mathbf{h}(\mathbf{x}_0) = \mathbf{0}$, we have $\boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}_0) = 0$.

Combining these, we get:
$$
\lambda_0 \alpha(\mathbf{x}_0) + \boldsymbol{\lambda}^t \mathbf{g}(\mathbf{x}_0) + \boldsymbol{\mu}^t \mathbf{h}(\mathbf{x}_0) < 0
$$

This contradicts the inequality from System 2, which states that the expression must be greater than or equal to zero for all $\mathbf{x} \in X$. Therefore, our assumption that System 1 has a solution must be false.

This completes the proof of the theorem. This powerful result connects the primal feasibility of a convex system with the existence of a separating hyperplane in a higher-dimensional space, which in turn gives rise to the dual system of inequalities.

Here is a solution to the problem, using the suggested hint.

### **Problem Statement**

Let $ E=\left\{i: g_{i}\left(\mathbf{x}^{*}\right)=0\right\}=\{1, \ldots, r\} $. Assume the vectors
\[
\nabla g_{1}\left(\mathbf{x}^{*}\right), \ldots, \nabla g_{r}\left(\mathbf{x}^{*}\right), \nabla h_{1}\left(\mathbf{x}^{*}\right), \ldots, \nabla h_{k}\left(\mathbf{x}^{*}\right)
\]
are linearly independent. We want to show that the system
\[
\nabla \mathbf{g}_{E}\left(\mathbf{x}^{*}\right) \mathbf{z}<\mathbf{0}, \quad \nabla \mathbf{h}\left(\mathbf{x}^{*}\right) \mathbf{z}=\mathbf{0},
\]
has a solution $ \mathbf{z} \in \mathbb{R}^{n} $.

### **Proof**

We will use a proof by contradiction, employing a separation theorem for convex sets as hinted.

**1. Assume the System has No Solution**

Let's assume the opposite of what we want to prove: there is no vector $ \mathbf{z} \in \mathbb{R}^{n} $ that satisfies the system. This means there is no $ \mathbf{z} $ such that:
1.  $ \nabla g_{i}\left(\mathbf{x}^{*}\right)^{t} \mathbf{z} < 0 $ for all $ i \in E = \{1, \ldots, r\} $
2.  $ \nabla h_{j}\left(\mathbf{x}^{*}\right)^{t} \mathbf{z} = 0 $ for all $ j = \{1, \ldots, k\} $

**2. Define a Convex Set**

Let's define a set $ C $ in the space $ \mathbb{R}^{r+k} $ that represents all possible outcomes of the linear transformations on $ \mathbf{z} $:
\[
C=\left\{(\mathbf{u}, \mathbf{v}) \in \mathbb{R}^{r} \times \mathbb{R}^{k}: \mathbf{u}=\nabla \mathbf{g}_{E}\left(\mathbf{x}^{*}\right) \mathbf{z}, \mathbf{v}=\nabla \mathbf{h}\left(\mathbf{x}^{*}\right) \mathbf{z} \text { for some } \mathbf{z} \in \mathbb{R}^{n}\right\}
\]
The set $ C $ is the range of a linear transformation from $ \mathbb{R}^{n} $ to $ \mathbb{R}^{r+k} $. Therefore, $ C $ is a subspace of $ \mathbb{R}^{r+k} $, which means it is a closed and convex set.

**3. Relate the Assumption to the Set**

Our assumption that the system has no solution means there is no point $ (\mathbf{u}, \mathbf{v}) \in C $ such that $ \mathbf{u} < \mathbf{0} $ and $ \mathbf{v} = \mathbf{0} $.

Let's define another set, $ D $, representing the outcomes we are looking for:
\[
D=\left\{(\mathbf{u}, \mathbf{v}) \in \mathbb{R}^{r} \times \mathbb{R}^{k}: \mathbf{u}<\mathbf{0}, \mathbf{v}=\mathbf{0}\right\}
\]
The set $ D $ is a convex set (it is the product of the negative orthant, which is convex, and a point). Our assumption is precisely that the sets $ C $ and $ D $ are disjoint, i.e., $ C \cap D = \emptyset $.

**4. Apply the Separating Hyperplane Theorem**

Since $ C $ is a closed convex set and $ D $ is a convex set, and they are disjoint, we can apply a separating hyperplane theorem. This theorem guarantees the existence of a non-zero vector $ (\boldsymbol{\lambda}, \boldsymbol{\mu}) \in \mathbb{R}^{r} \times \mathbb{R}^{k} $ and a scalar $ \alpha $ such that:
1.  $ \boldsymbol{\lambda}^{t} \mathbf{u}+\boldsymbol{\mu}^{t} \mathbf{v} \geq \alpha $ for all $ (\mathbf{u}, \mathbf{v}) \in C $
2.  $ \boldsymbol{\lambda}^{t} \mathbf{u}+\boldsymbol{\mu}^{t} \mathbf{v} \leq \alpha $ for all $ (\mathbf{u}, \mathbf{v}) \in \bar{D} $ (the closure of D)

**5. Analyze the Separation Inequalities**

*   **For the set C:**
    Since $ C $ is a subspace, if there is any point $ (\mathbf{u}_0, \mathbf{v}_0) \in C $ for which $ \boldsymbol{\lambda}^{t} \mathbf{u}_{0}+\boldsymbol{\mu}^{t} \mathbf{v}_{0} \neq 0 $, then we can scale this point by any positive or negative scalar. This would make the expression $ \boldsymbol{\lambda}^{t} \mathbf{u}+\boldsymbol{\mu}^{t} \mathbf{v} $ unbounded above and below, which contradicts the inequality $ \boldsymbol{\lambda}^{t} \mathbf{u}+\boldsymbol{\mu}^{t} \mathbf{v} \geq \alpha $. Therefore, the expression must be constant on $ C $. Since $ (\mathbf{0}, \mathbf{0}) \in C $ (by choosing $ \mathbf{z}=\mathbf{0} $), this constant value must be 0. Thus, we must have $ \alpha = 0 $ and:
    \[
    \boldsymbol{\lambda}^{t} \nabla \mathbf{g}_{E}\left(\mathbf{x}^{*}\right) \mathbf{z}+\boldsymbol{\mu}^{t} \nabla \mathbf{h}\left(\mathbf{x}^{*}\right) \mathbf{z}=0 \quad \text { for all } \mathbf{z} \in \mathbb{R}^{n}
    \]
    This can be rewritten as:
    \[
    \left(\sum_{i=1}^{r} \lambda_{i} \nabla g_{i}\left(\mathbf{x}^{*}\right)+\sum_{j=1}^{k} \mu_{j} \nabla h_{j}\left(\mathbf{x}^{*}\right)\right)^{t} \mathbf{z}=0 \quad \text { for all } \mathbf{z} \in \mathbb{R}^{n}
    \]
    This implies that the vector itself must be zero:
    \[
    \sum_{i=1}^{r} \lambda_{i} \nabla g_{i}\left(\mathbf{x}^{*}\right)+\sum_{j=1}^{k} \mu_{j} \nabla h_{j}\left(\mathbf{x}^{*}\right)=\mathbf{0}
    \]

*   **For the set D:**
    The closure of $ D $ is $ \bar{D}=\left\{(\mathbf{u}, \mathbf{v}) \in \mathbb{R}^{r} \times \mathbb{R}^{k}: \mathbf{u} \leq \mathbf{0}, \mathbf{v}=\mathbf{0}\right\} $. The separation inequality becomes:
    \[
    \boldsymbol{\lambda}^{t} \mathbf{u} \leq 0 \quad \text { for all } \mathbf{u} \leq \mathbf{0}
    \]
    To satisfy this, every component of $ \boldsymbol{\lambda} $ must be non-negative. If some $ \lambda_i < 0 $, we could choose a vector $ \mathbf{u} $ with $ u_i $ being a large negative number and other components zero, which would make $ \boldsymbol{\lambda}^{t} \mathbf{u} > 0 $, a contradiction. Thus, $ \boldsymbol{\lambda} \geq \mathbf{0} $.

**6. Derive the Contradiction**

From our assumption that the system has no solution, we have concluded that there exist multipliers $ \boldsymbol{\lambda} \in \mathbb{R}^{r} $ and $ \boldsymbol{\mu} \in \mathbb{R}^{k} $ such that:
1.  $ (\boldsymbol{\lambda}, \boldsymbol{\mu}) \neq (\mathbf{0}, \mathbf{0}) $ (from the separation theorem)
2.  $ \boldsymbol{\lambda} \geq \mathbf{0} $
3.  $ \sum_{i=1}^{r} \lambda_{i} \nabla g_{i}\left(\mathbf{x}^{*}\right)+\sum_{j=1}^{k} \mu_{j} \nabla h_{j}\left(\mathbf{x}^{*}\right)=\mathbf{0} $

Now, could $ \boldsymbol{\lambda} $ be the zero vector, $ \boldsymbol{\lambda} = \mathbf{0} $? If so, the equation becomes $ \sum_{j=1}^{k} \mu_{j} \nabla h_{j}\left(\mathbf{x}^{*}\right)=\mathbf{0} $. By the problem's premise, the set of all gradients (including the $ \nabla h_j $'s) is linearly independent. This implies that all $ \mu_j $ must be zero. This would mean $ (\boldsymbol{\lambda}, \boldsymbol{\mu}) = (\mathbf{0}, \mathbf{0}) $, which contradicts the fact that the separating vector is non-zero.

Therefore, $ \boldsymbol{\lambda} \neq \mathbf{0} $. Since we also have $ \boldsymbol{\lambda} \geq \mathbf{0} $, this means at least one $ \lambda_i > 0 $.

The equation $ \sum \lambda_{i} \nabla g_{i}\left(\mathbf{x}^{*}\right)+\sum \mu_{j} \nabla h_{j}\left(\mathbf{x}^{*}\right)=\mathbf{0} $ is a linear combination of the gradient vectors. Because $ (\boldsymbol{\lambda}, \boldsymbol{\mu}) \neq (\mathbf{0}, \mathbf{0}) $, we have found a non-trivial linear combination of these vectors that equals the zero vector. This is the definition of linear dependence.

This **contradicts** the given condition that the vectors $ \nabla g_{1}\left(\mathbf{x}^{*}\right), \ldots, \nabla g_{r}\left(\mathbf{x}^{*}\right), \nabla h_{1}\left(\mathbf{x}^{*}\right), \ldots, \nabla h_{k}\left(\mathbf{x}^{*}\right) $ are linearly independent.

### **Conclusion**

Our initial assumption—that the system has no solution—has led to a contradiction. Therefore, the assumption must be false. The system must have a solution $ \mathbf{z} \in \mathbb{R}^{n} $.

Of course. Here is a detailed proof for Problem 3, often referred to as a theorem of the alternative for linear systems.

### **Problem Statement**

Let $\mathbf{A}$ be an $m \times n$ matrix and $\mathbf{b}$ be an $m$-vector. We want to prove that exactly one of the following two systems has a solution:

**System 1:** $\mathbf{A}\mathbf{x} = \mathbf{b}$ for some $\mathbf{x} \in \mathbb{R}^n$.

**System 2:** $\mathbf{A}^t\mathbf{y} = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} = 1$ for some $\mathbf{y} \in \mathbb{R}^m$.

This is a statement of mutual exclusion (they cannot both be true) and exhaustion (one of them must be true).

### **Proof**

The proof is divided into two parts.

#### **Part 1: At Most One System Has a Solution**

We will first show that it is impossible for both systems to have a solution simultaneously. Let's assume, for the sake of contradiction, that both systems have a solution.

Let $\mathbf{x}_0$ be a solution to System 1, so $\mathbf{A}\mathbf{x}_0 = \mathbf{b}$.
Let $\mathbf{y}_0$ be a solution to System 2, so $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y}_0 = 1$.

Now, let's manipulate the expression $\mathbf{b}^t\mathbf{y}_0$:

1.  Start with the known condition from System 2:
    $1 = \mathbf{b}^t\mathbf{y}_0$

2.  Substitute the expression for $\mathbf{b}$ from System 1:
    $1 = (\mathbf{A}\mathbf{x}_0)^t\mathbf{y}_0$

3.  Apply the transpose rule $(CD)^t = D^tC^t$:
    $1 = \mathbf{x}_0^t\mathbf{A}^t\mathbf{y}_0$

4.  Group the terms $(\mathbf{A}^t\mathbf{y}_0)$:
    $1 = \mathbf{x}_0^t(\mathbf{A}^t\mathbf{y}_0)$

5.  Now, use the condition from System 2 that $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$:
    $1 = \mathbf{x}_0^t(\mathbf{0})$

6.  This leads to the final result:
    $1 = 0$

This is a clear contradiction. Therefore, our initial assumption that both systems can have a solution must be false. We conclude that **at most one** of the systems has a solution.

#### **Part 2: At Least One System Has a Solution**

Now we must show that it is not possible for *neither* system to have a solution. We will do this by assuming System 1 has no solution and showing that this logically implies that System 2 *must* have a solution.

1.  **Assume System 1 has no solution.**
    This means that the vector $\mathbf{b}$ cannot be expressed as a linear combination of the columns of $\mathbf{A}$. In other words, $\mathbf{b}$ is not in the column space of $\mathbf{A}$.

2.  **Define a closed convex set as hinted.**
    Let $S$ be the column space (or range) of the matrix $\mathbf{A}$.
    $S = \{ \mathbf{z} \in \mathbb{R}^m : \mathbf{z} = \mathbf{A}\mathbf{x} \text{ for some } \mathbf{x} \in \mathbb{R}^n \}$
    Since the column space of a matrix is a subspace of $\mathbb{R}^m$, it is a non-empty (it contains the zero vector), closed, and convex set.

3.  **Apply the Separating Hyperplane Theorem.**
    Our assumption that System 1 has no solution means that $\mathbf{b} \notin S$. Since $S$ is a non-empty closed convex set and $\mathbf{b}$ is a point not in $S$, there exists a **separating hyperplane** between the point $\mathbf{b}$ and the set $S$.

    Specifically, the separating hyperplane theorem guarantees the existence of a non-zero vector $\mathbf{y} \in \mathbb{R}^m$ and a scalar $\alpha \in \mathbb{R}$ such that:
    *   $\mathbf{y}^t\mathbf{b} > \alpha$
    *   $\mathbf{y}^t\mathbf{z} \leq \alpha$ for all $\mathbf{z} \in S$

4.  **Analyze the separation inequalities.**
    Since $S$ is a subspace, for any $\mathbf{z} \in S$, the vector $c\mathbf{z}$ is also in $S$ for any scalar $c \in \mathbb{R}$. The inequality $\mathbf{y}^t(c\mathbf{z}) \leq \alpha$ must hold for all $c$.
    If we had $\mathbf{y}^t\mathbf{z} \neq 0$, we could choose a large positive or negative value for $c$ that would violate the inequality. For example, if $\mathbf{y}^t\mathbf{z} > 0$, letting $c \to \infty$ would make the left side infinite. This cannot be less than or equal to $\alpha$. The only way for the inequality to hold for all scalars $c$ is if $\mathbf{y}^t\mathbf{z} = 0$.

    This must be true for *every* $\mathbf{z} \in S$. Since $\mathbf{z}$ is of the form $\mathbf{A}\mathbf{x}$, this means:
    $\mathbf{y}^t(\mathbf{A}\mathbf{x}) = 0$ for all $\mathbf{x} \in \mathbb{R}^n$.

    Rewriting this gives:
    $(\mathbf{A}^t\mathbf{y})^t\mathbf{x} = 0$ for all $\mathbf{x} \in \mathbb{R}^n$.

    This can only be true if the vector $\mathbf{A}^t\mathbf{y}$ is the zero vector. Thus, we have found our first condition for System 2:
    $\mathbf{A}^t\mathbf{y} = \mathbf{0}$.

5.  **Derive the second condition.**
    From the analysis above, since $\mathbf{y}^t\mathbf{z} = 0$ for all $\mathbf{z} \in S$, the scalar $\alpha$ must satisfy $0 \leq \alpha$.
    At the same time, we have the other separating inequality, $\mathbf{y}^t\mathbf{b} > \alpha$.
    Combining these gives $\mathbf{y}^t\mathbf{b} > \alpha \geq 0$, which means $\mathbf{y}^t\mathbf{b}$ is strictly positive. Let's call this positive value $\beta$:
    $\mathbf{y}^t\mathbf{b} = \beta > 0$.

6.  **Normalize the vector y.**
    We have found a vector $\mathbf{y}$ that satisfies $\mathbf{A}^t\mathbf{y} = \mathbf{0}$ and $\mathbf{y}^t\mathbf{b} = \beta > 0$. We are looking for a solution to System 2, which requires the second condition to be exactly 1.

    Let's define a new vector $\mathbf{y}' = \frac{1}{\beta}\mathbf{y}$. Now let's check if $\mathbf{y}'$ satisfies the conditions of System 2:
    *   $\mathbf{A}^t\mathbf{y}' = \mathbf{A}^t\left(\frac{1}{\beta}\mathbf{y}\right) = \frac{1}{\beta}(\mathbf{A}^t\mathbf{y}) = \frac{1}{\beta}(\mathbf{0}) = \mathbf{0}$.
    *   $\mathbf{b}^t\mathbf{y}' = \mathbf{b}^t\left(\frac{1}{\beta}\mathbf{y}\right) = \frac{1}{\beta}(\mathbf{b}^t\mathbf{y}) = \frac{1}{\beta}(\beta) = 1$.

    We have successfully constructed a vector $\mathbf{y}'$ that satisfies both conditions of System 2.

Therefore, if System 1 has no solution, System 2 must have a solution.

### **Conclusion**

We have shown that:
1.  Both systems cannot have a solution at the same time.
2.  If one system does not have a solution, the other one must.

These two conditions together prove that **exactly one** of the two systems has a solution.

Excellent question. Proving this theorem of the alternative using Farkas's Lemma is a classic and insightful exercise. It shows how these fundamental "lemmas" are powerful tools for proving other results in linear algebra and optimization.

### Refresher: Farkas's Lemma

First, let's recall a standard form of Farkas's Lemma.

**Farkas's Lemma:** Let $\mathbf{C}$ be a $p \times q$ matrix and $\mathbf{d}$ be a $p$-vector. Exactly one of the following two systems has a solution:

*   **System I:** $\mathbf{C}\mathbf{z} = \mathbf{d}$ for some $\mathbf{z} \geq \mathbf{0}$.
*   **System II:** $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ and $\mathbf{d}^t\mathbf{y} < 0$ for some $\mathbf{y}$.

There are many equivalent forms, but we will use this one. The key is to transform your problem to fit this structure.

---

### Proof using Farkas's Lemma

The main challenge is to rewrite the system $\mathbf{A}\mathbf{x} = \mathbf{b}$ (where $\mathbf{x}$ is a free variable) into the form $\mathbf{C}\mathbf{z} = \mathbf{d}$ where the variable $\mathbf{z}$ must be non-negative.

**Step 1: Reformulate System 1**

Any vector $\mathbf{x} \in \mathbb{R}^n$ can be written as the difference of two non-negative vectors. Let $\mathbf{x} = \mathbf{x}^+ - \mathbf{x}^-$, where $\mathbf{x}^+ \geq \mathbf{0}$ and $\mathbf{x}^- \geq \mathbf{0}$.

*   Here, $\mathbf{x}^+_i = \max(x_i, 0)$ and $\mathbf{x}^-_i = \max(-x_i, 0)$.

Substituting this into System 1 gives:
$\mathbf{A}(\mathbf{x}^+ - \mathbf{x}^-) = \mathbf{b}$

We can write this in matrix form by creating a new, larger matrix and a new variable vector. Let:
*   $\mathbf{C} = [\mathbf{A} | -\mathbf{A}]$ (an $m \times 2n$ matrix)
*   $\mathbf{z} = \begin{bmatrix} \mathbf{x}^+ \\ \mathbf{x}^- \end{bmatrix}$ (a $2n$-vector)

Now, the equation $\mathbf{A}\mathbf{x} = \mathbf{b}$ is equivalent to the system:
$\mathbf{C}\mathbf{z} = \mathbf{b}$ for some $\mathbf{z} \geq \mathbf{0}$.

This is exactly the form of **System I** in Farkas's Lemma (with $\mathbf{d} = \mathbf{b}$).

**Step 2: Apply Farkas's Lemma**

According to Farkas's Lemma, exactly one of the following is true:
1.  There exists $\mathbf{z} \geq \mathbf{0}$ such that $\mathbf{C}\mathbf{z} = \mathbf{b}$. (This is our reformulated System 1).
2.  There exists a vector $\mathbf{y} \in \mathbb{R}^m$ such that $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} < 0$.

Let's analyze this second possibility.

**Step 3: Analyze the Alternative System**

We need to unpack what $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ means.
$\mathbf{C}^t = \begin{bmatrix} \mathbf{A}^t \\ -\mathbf{A}^t \end{bmatrix}$

So, the condition $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ becomes:
$\begin{bmatrix} \mathbf{A}^t \\ -\mathbf{A}^t \end{bmatrix} \mathbf{y} \geq \mathbf{0}$

This single matrix inequality is actually a set of two inequalities:
1.  $\mathbf{A}^t\mathbf{y} \geq \mathbf{0}$
2.  $-\mathbf{A}^t\mathbf{y} \geq \mathbf{0} \implies \mathbf{A}^t\mathbf{y} \leq \mathbf{0}$

The only way for a vector to be both non-negative and non-positive is for it to be the zero vector. Therefore, the condition $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ is equivalent to:
$\mathbf{A}^t\mathbf{y} = \mathbf{0}$

So, the alternative system from Farkas's Lemma is:
There exists $\mathbf{y}$ such that $\mathbf{A}^t\mathbf{y} = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} < 0$.

**Step 4: Connect to the Original Problem's System 2**

We have now shown that exactly one of these two systems has a solution:
*   **System 1:** $\mathbf{A}\mathbf{x} = \mathbf{b}$
*   **Farkas's Alternative:** $\mathbf{A}^t\mathbf{y} = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} < 0$.

This is very close to the original System 2, but not identical. The original System 2 was:
*   **Original System 2:** $\mathbf{A}^t\mathbf{y} = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} = 1$.

Let's show that "Farkas's Alternative" is equivalent to the "Original System 2".

*   **If the Original System 2 has a solution $\mathbf{y}_0$**:
    Then $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y}_0 = 1$. Let's define $\mathbf{y}' = -\mathbf{y}_0$.
    Then $\mathbf{A}^t\mathbf{y}' = -\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$, and $\mathbf{b}^t\mathbf{y}' = -\mathbf{b}^t\mathbf{y}_0 = -1$.
    Since $\mathbf{b}^t\mathbf{y}' = -1 < 0$, the vector $\mathbf{y}'$ is a solution to Farkas's Alternative.

*   **If Farkas's Alternative has a solution $\mathbf{y}_0$**:
    Then $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$ and $\mathbf{b}^t\mathbf{y}_0 = c$ for some constant $c < 0$.
    Let's define a new vector $\mathbf{y}' = (1/c)\mathbf{y}_0$.
    Then $\mathbf{A}^t\mathbf{y}' = (1/c)\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$.
    And $\mathbf{b}^t\mathbf{y}' = (1/c)\mathbf{b}^t\mathbf{y}_0 = (1/c)c = 1$.
    The vector $\mathbf{y}'$ is a solution to the Original System 2.

Because the two alternative systems are equivalent (the existence of a solution to one implies the existence of a solution to the other), we have completed the proof. We have shown that exactly one of the original two systems has a solution.

---

### Regarding Gordan's Lemma

Gordan's Lemma is also a theorem of the alternative, but it deals with strict inequalities.

**Gordan's Lemma:** Let $\mathbf{M}$ be a $p \times q$ matrix. Exactly one of the following has a solution:

*   **System I:** $\mathbf{M}\mathbf{x} < \mathbf{0}$ for some $\mathbf{x}$.
*   **System II:** $\mathbf{M}^t\mathbf{y} = \mathbf{0}$ for some non-zero $\mathbf{y} \geq \mathbf{0}$.

Gordan's Lemma is not the most direct tool for this specific problem because the problem involves an equality ($\mathbf{A}\mathbf{x} = \mathbf{b}$), not a system of strict inequalities. While you could likely construct a proof by embedding the equality constraint into a more complex system of inequalities, it's not a natural fit. Farkas's Lemma is the more appropriate tool as it directly handles equality constraints.

Of course. This is another classic theorem of the alternative, often known as the **Inequality Form of Farkas's Lemma** or **Gale's Theorem**. We will prove it first by a straightforward contradiction argument and then by using the standard form of Farkas's Lemma.

### **Proof 1: Direct Proof**

This proof is divided into two parts: showing mutual exclusion and then showing that one must hold.

#### **Part 1: At Most One System Has a Solution**

Let's assume, for the sake of contradiction, that both systems have a solution.
*   Let $\mathbf{x}_0$ be a solution to System 1, so $\mathbf{A}\mathbf{x}_0 \leq \mathbf{b}$.
*   Let $\mathbf{y}_0$ be a solution to System 2, so $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$, $\mathbf{y}_0 \geq \mathbf{0}$, and $\mathbf{b}^t\mathbf{y}_0 < 0$.

Let's start with the third condition from System 2:
$\mathbf{b}^t\mathbf{y}_0 < 0$

Since $\mathbf{y}_0 \geq \mathbf{0}$ (meaning each component $y_i \geq 0$) and $\mathbf{A}\mathbf{x}_0 \leq \mathbf{b}$, we can pre-multiply the inequality by $\mathbf{y}_0^t$ without changing the direction of the inequality:
$\mathbf{y}_0^t(\mathbf{A}\mathbf{x}_0) \leq \mathbf{y}_0^t\mathbf{b}$

Let's rewrite this as:
$(\mathbf{A}^t\mathbf{y}_0)^t\mathbf{x}_0 \leq \mathbf{b}^t\mathbf{y}_0$

Now, we use the first condition from System 2, which is $\mathbf{A}^t\mathbf{y}_0 = \mathbf{0}$:
$(\mathbf{0})^t\mathbf{x}_0 \leq \mathbf{b}^t\mathbf{y}_0$
$0 \leq \mathbf{b}^t\mathbf{y}_0$

This result, $0 \leq \mathbf{b}^t\mathbf{y}_0$, directly **contradicts** the condition from System 2 that $\mathbf{b}^t\mathbf{y}_0 < 0$.

Therefore, our initial assumption that both systems can have a solution is false. **At most one** system can have a solution.

#### **Part 2: At Least One System Has a Solution (Proof via Farkas's Lemma)**

Now we show that if System 1 has no solution, then System 2 must have one. We will do this by converting System 1 into the standard form required by Farkas's Lemma.

**Recall Farkas's Lemma (Equality Form):** Exactly one of the following has a solution:
*   (I) $\mathbf{C}\mathbf{z} = \mathbf{d}$ for some $\mathbf{z} \geq \mathbf{0}$.
*   (II) $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ and $\mathbf{d}^t\mathbf{y} < 0$ for some $\mathbf{y}$.

**1. Reformulate System 1:**
System 1 is $\mathbf{A}\mathbf{x} \leq \mathbf{b}$. To turn the inequality into an equality, we introduce a non-negative slack vector $\mathbf{s} \in \mathbb{R}^m$:
$\mathbf{A}\mathbf{x} + \mathbf{s} = \mathbf{b}$, where $\mathbf{s} \geq \mathbf{0}$.

The variable $\mathbf{x} \in \mathbb{R}^n$ is unrestricted in sign. As suggested by the hint, we can represent it as the difference of two non-negative vectors:
$\mathbf{x} = \mathbf{u} - \mathbf{v}$, where $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ and $\mathbf{u}, \mathbf{v} \geq \mathbf{0}$.

Substituting this into the equation gives:
$\mathbf{A}(\mathbf{u} - \mathbf{v}) + \mathbf{s} = \mathbf{b}$
$\mathbf{A}\mathbf{u} - \mathbf{A}\mathbf{v} + \mathbf{I}\mathbf{s} = \mathbf{b}$

We can now write this in the standard form $\mathbf{C}\mathbf{z} = \mathbf{b}$ with $\mathbf{z} \geq \mathbf{0}$ by defining:
*   $\mathbf{C} = [\mathbf{A} | -\mathbf{A} | \mathbf{I}]$ (an $m \times (2n+m)$ matrix)
*   $\mathbf{z} = \begin{bmatrix} \mathbf{u} \\ \mathbf{v} \\ \mathbf{s} \end{bmatrix}$ (a $(2n+m)$-vector)

So, System 1 has a solution if and only if there exists a $\mathbf{z} \geq \mathbf{0}$ such that $\mathbf{C}\mathbf{z} = \mathbf{b}$.

**2. Apply Farkas's Lemma:**
We assume System 1 has **no solution**. This means there is no $\mathbf{z} \geq \mathbf{0}$ satisfying $\mathbf{C}\mathbf{z} = \mathbf{b}$.

By Farkas's Lemma, the alternative system must have a solution. That is, there must exist a vector $\mathbf{y} \in \mathbb{R}^m$ such that:
$\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$ and $\mathbf{b}^t\mathbf{y} < 0$.

**3. Analyze the Alternative System:**
Let's analyze the condition $\mathbf{C}^t\mathbf{y} \geq \mathbf{0}$:
$\mathbf{C}^t\mathbf{y} = \begin{bmatrix} \mathbf{A}^t \\ -\mathbf{A}^t \\ \mathbf{I}^t \end{bmatrix} \mathbf{y} = \begin{bmatrix} \mathbf{A}^t\mathbf{y} \\ -\mathbf{A}^t\mathbf{y} \\ \mathbf{y} \end{bmatrix} \geq \mathbf{0}$

This single matrix inequality represents three conditions:
i.  $\mathbf{A}^t\mathbf{y} \geq \mathbf{0}$
ii. $-\mathbf{A}^t\mathbf{y} \geq \mathbf{0} \implies \mathbf{A}^t\mathbf{y} \leq \mathbf{0}$
iii. $\mathbf{y} \geq \mathbf{0}$

Conditions (i) and (ii) together imply that $\mathbf{A}^t\mathbf{y}$ must be the zero vector: $\mathbf{A}^t\mathbf{y} = \mathbf{0}$.

So, the alternative system from Farkas's Lemma requires a vector $\mathbf{y}$ that satisfies:
*   $\mathbf{A}^t\mathbf{y} = \mathbf{0}$
*   $\mathbf{y} \geq \mathbf{0}$
*   $\mathbf{b}^t\mathbf{y} < 0$

This is precisely **System 2**.

Therefore, if System 1 has no solution, System 2 must have a solution.

### **Conclusion**

We have shown that:
1.  Both systems cannot have a solution simultaneously.
2.  If System 1 does not have a solution, System 2 must have a solution.

These two facts together prove that **exactly one** of the two systems has a solution.

To formulate the Lagrangian dual problem, we first construct the Lagrangian function by incorporating both the equality and inequality constraints into the objective function.

### 1. The Primal Problem

The given optimization problem, referred to as the primal problem, is:
\[
\begin{array}{ll}
\text{Minimize} & f(x_1, x_2) = x_1 + x_2 \\
\text{subject to} & h(x_1, x_2) = x_1^2 + x_2^2 - 4 = 0 \\
& g(x_1, x_2) = -2x_1 - x_2 - 4 \leq 0
\end{array}
\]

### 2. Formulating the Lagrangian Function

The Lagrangian function, denoted as \( L(x_1, x_2, u_1, u_2) \), is formed by adding the constraints to the objective function, each multiplied by a Lagrange multiplier. We associate the multiplier \( u_1 \) with the equality constraint and \( u_2 \) with the inequality constraint.

The Lagrangian is:
\[ L(x_1, x_2, u_1, u_2) = (x_1 + x_2) + u_1(x_1^2 + x_2^2 - 4) + u_2(-2x_1 - x_2 - 4) \]
\[ L(x_1, x_2, u_1, u_2) = x_1 + x_2 + u_1x_1^2 + u_1x_2^2 - 4u_1 - 2u_2x_1 - u_2x_2 - 4u_2 \]

For the inequality constraint, the multiplier \( u_2 \) must be non-negative, i.e., \( u_2 \geq 0 \). The multiplier \( u_1 \) for the equality constraint is unrestricted in sign.

### 3. Defining the Dual Function

The Lagrangian dual function, \( g(u_1, u_2) \), is defined as the minimum of the Lagrangian function with respect to the primal variables \( x_1 \) and \( x_2 \):
\[ g(u_1, u_2) = \inf_{x_1, x_2} L(x_1, x_2, u_1, u_2) \]

To find this minimum, we take the partial derivatives of the Lagrangian with respect to \( x_1 \) and \( x_2 \) and set them to zero, assuming \( u_1 \neq 0 \).

Partial derivative with respect to \( x_1 \):
\[ \frac{\partial L}{\partial x_1} = 1 + 2u_1x_1 - 2u_2 = 0 \]
Solving for \( x_1 \):
\[ 2u_1x_1 = 2u_2 - 1 \]
\[ x_1 = \frac{2u_2 - 1}{2u_1} \]

Partial derivative with respect to \( x_2 \):
\[ \frac{\partial L}{\partial x_2} = 1 + 2u_1x_2 - u_2 = 0 \]
Solving for \( x_2 \):
\[ 2u_1x_2 = u_2 - 1 \]
\[ x_2 = \frac{u_2 - 1}{2u_1} \]

Now, we substitute these expressions for \( x_1 \) and \( x_2 \) back into the Lagrangian function to obtain the dual function \( g(u_1, u_2) \).

\[ g(u_1, u_2) = \left(\frac{2u_2 - 1}{2u_1}\right) + \left(\frac{u_2 - 1}{2u_1}\right) + u_1\left(\frac{2u_2 - 1}{2u_1}\right)^2 + u_1\left(\frac{u_2 - 1}{2u_1}\right)^2 - 4u_1 - 2u_2\left(\frac{2u_2 - 1}{2u_1}\right) - u_2\left(\frac{u_2 - 1}{2u_1}\right) - 4u_2 \]

Simplifying the expression:
\[ g(u_1, u_2) = \frac{3u_2 - 2}{2u_1} + \frac{1}{4u_1}((2u_2 - 1)^2 + (u_2 - 1)^2) - 4u_1 - \frac{1}{2u_1}(2u_2(2u_2 - 1) + u_2(u_2 - 1)) - 4u_2 \]
\[ g(u_1, u_2) = \frac{3u_2 - 2}{2u_1} + \frac{1}{4u_1}(4u_2^2 - 4u_2 + 1 + u_2^2 - 2u_2 + 1) - 4u_1 - \frac{1}{2u_1}(4u_2^2 - 2u_2 + u_2^2 - u_2) - 4u_2 \]
\[ g(u_1, u_2) = \frac{6u_2 - 4}{4u_1} + \frac{5u_2^2 - 6u_2 + 2}{4u_1} - 4u_1 - \frac{2(5u_2^2 - 3u_2)}{4u_1} - \frac{16u_1u_2}{4u_1} \]
\[ g(u_1, u_2) = \frac{1}{4u_1} (6u_2 - 4 + 5u_2^2 - 6u_2 + 2 - 10u_2^2 + 6u_2) - 4u_1 - 4u_2 \]
\[ g(u_1, u_2) = \frac{-5u_2^2 + 6u_2 - 2}{4u_1} - 4u_1 - 4u_2 \]

### 4. The Lagrangian Dual Problem

The Lagrangian dual problem is to maximize the dual function \( g(u_1, u_2) \) subject to the constraints on the dual variables.

The dual problem is therefore:
\[
\begin{array}{ll}
\text{Maximize} & g(u_1, u_2) = -\frac{5u_2^2 - 6u_2 + 2}{4u_1} - 4u_1 - 4u_2 \\
\text{subject to} & u_2 \geq 0
\end{array}
\]

Here is a step-by-step solution to the problem.

### 1. Verification of the Optimal Solution

The problem is to minimize \( f(x_1, x_2) = x_1^2 + x_2^2 \) subject to the constraints:
1.  \( g_1(x) = x_1 + x_2 - 4 \geq 0 \)
2.  \( g_2(x) = x_1 \geq 0 \)
3.  \( g_3(x) = x_2 \geq 0 \)

We are asked to verify that \( \bar{x} = (2, 2)^T \) is the optimal solution.

**Step 1: Check Feasibility**
We plug \( \bar{x} = (2, 2) \) into the constraints:
1.  \( 2 + 2 - 4 = 0 \geq 0 \). (Constraint is satisfied and active)
2.  \( 2 \geq 0 \). (Constraint is satisfied)
3.  \( 2 \geq 0 \). (Constraint is satisfied)
Since all constraints are satisfied, the point \( \bar{x} = (2, 2) \) is a feasible solution.

**Step 2: Check Karush-Kuhn-Tucker (KKT) Conditions**
This is a convex optimization problem because the objective function is convex and the feasible region is defined by linear inequalities (which is a convex set). For convex problems, the KKT conditions are both necessary and sufficient for optimality.

Let's rewrite the constraints in the form \( g_i(x) \leq 0 \):
1.  \( 4 - x_1 - x_2 \leq 0 \) (with multiplier \( u_1 \))
2.  \( -x_1 \leq 0 \) (with multiplier \( u_2 \))
3.  \( -x_2 \leq 0 \) (with multiplier \( u_3 \))

The Lagrangian is \( L(x, u) = x_1^2 + x_2^2 + u_1(4 - x_1 - x_2) + u_2(-x_1) + u_3(-x_2) \).

The KKT conditions are:
*   **Stationarity:** The gradient of the Lagrangian with respect to \( x \) is zero.
    *   \( \frac{\partial L}{\partial x_1} = 2x_1 - u_1 - u_2 = 0 \)
    *   \( \frac{\partial L}{\partial x_2} = 2x_2 - u_1 - u_3 = 0 \)
*   **Primal Feasibility:** \( \bar{x}=(2,2) \) must be feasible (already checked).
*   **Dual Feasibility:** All multipliers for inequality constraints must be non-negative: \( u_1, u_2, u_3 \geq 0 \).
*   **Complementary Slackness:**
    *   \( u_1(4 - x_1 - x_2) = 0 \)
    *   \( u_2(-x_1) = 0 \)
    *   \( u_3(-x_2) = 0 \)

Let's evaluate these conditions at \( \bar{x} = (2, 2) \):
*   From complementary slackness:
    *   Since \( -x_1 = -2 \neq 0 \), we must have \( u_2 = 0 \).
    *   Since \( -x_2 = -2 \neq 0 \), we must have \( u_3 = 0 \).
    *   The first condition \( u_1(4 - 2 - 2) = u_1(0) = 0 \) is always satisfied.
*   Now, substitute \( u_2=0 \) and \( u_3=0 \) into the stationarity conditions:
    *   \( 2(2) - u_1 - 0 = 0 \implies 4 - u_1 = 0 \implies u_1 = 4 \).
    *   \( 2(2) - u_1 - 0 = 0 \implies 4 - u_1 = 0 \implies u_1 = 4 \).
*   We have found the multipliers \( \bar{u} = (4, 0, 0) \). Check dual feasibility: \( u_1 = 4 \geq 0 \), \( u_2 = 0 \geq 0 \), \( u_3 = 0 \geq 0 \). The condition is satisfied.

Since the point \( \bar{x}=(2,2) \) and multipliers \( \bar{u}=(4,0,0) \) satisfy all KKT conditions for a convex problem, \( \bar{x}=(2,2) \) is the optimal solution.

**Step 3: Calculate the Objective Function Value**
The value of the objective function at the optimal solution is:
\( f(\bar{x}) = f(2, 2) = 2^2 + 2^2 = 4 + 4 = 8 \).
This verifies the first part of the problem.

---

### 2. Lagrangian Dual Problem and Duality Gap

**Step 1: Formulate the Lagrangian Dual Problem**
We are asked to let \( X = \{(x_1, x_2) : x_1 \geq 0, x_2 \geq 0\} \) and incorporate only the constraint \( x_1+x_2-4 \geq 0 \) (or \( 4 - x_1 - x_2 \leq 0 \)) into the Lagrangian.

The Lagrangian is:
\[ L(x, u) = x_1^2 + x_2^2 + u(4 - x_1 - x_2) \]
where \( u \geq 0 \) is the Lagrange multiplier.

The dual function \( \theta(u) \) is the infimum (minimum) of the Lagrangian over the set \( X \):
\[ \theta(u) = \inf_{x \in X} L(x, u) = \inf_{x_1 \geq 0, x_2 \geq 0} \{ x_1^2 + x_2^2 - ux_1 - ux_2 + 4u \} \]

We can separate the terms involving \(x_1\) and \(x_2\):
\[ \theta(u) = \left( \inf_{x_1 \geq 0} \{x_1^2 - ux_1\} \right) + \left( \inf_{x_2 \geq 0} \{x_2^2 - ux_2\} \right) + 4u \]

To find \(\inf_{t \geq 0} \{t^2 - ut\}\), we can find the minimum of the quadratic function \( h(t) = t^2 - ut \). The unconstrained minimum is found by setting the derivative to zero: \( h'(t) = 2t - u = 0 \), which gives \( t = u/2 \). Since our multiplier \( u \) must be non-negative, \( t=u/2 \) is in the feasible region \( t \geq 0 \).
The minimum value is \( h(u/2) = (u/2)^2 - u(u/2) = u^2/4 - u^2/2 = -u^2/4 \).

Applying this result for both \( x_1 \) and \( x_2 \):
\[ \theta(u) = \left(-\frac{u^2}{4}\right) + \left(-\frac{u^2}{4}\right) + 4u = -\frac{u^2}{2} + 4u \]
This shows that the dual function is indeed \( \theta(u) = -\frac{u^2}{2} + 4u \).

The Lagrangian dual problem is to maximize the dual function subject to the constraint on the multiplier:
\[
\begin{array}{ll}
\text{Maximize} & \theta(u) = -\frac{u^2}{2} + 4u \\
\text{subject to} & u \geq 0
\end{array}
\]

**Step 2: Verify No Duality Gap**
The duality gap is the difference between the optimal value of the primal problem (\(p^*\)) and the optimal value of the dual problem (\(d^*\)). If \( p^* = d^* \), there is no duality gap.

*   **Primal Optimal Value:** From part 1, we know \( p^* = 8 \).
*   **Dual Optimal Value:** We need to solve the dual problem. We maximize the concave function \( \theta(u) = -\frac{u^2}{2} + 4u \) for \( u \geq 0 \).
    Set the derivative to zero:
    \[ \frac{d\theta}{du} = -u + 4 = 0 \implies u = 4 \]
    Since \( u=4 \) is feasible (\(4 \geq 0\)), this is the optimal solution for the dual problem.
    The optimal value of the dual problem is:
    \[ d^* = \theta(4) = -\frac{4^2}{2} + 4(4) = -\frac{16}{2} + 16 = -8 + 16 = 8 \]

Comparing the optimal values:
\[ p^* = 8 \quad \text{and} \quad d^* = 8 \]
Since \( p^* = d^* \), there is no duality gap for this problem.

Here is a step-by-step solution to the optimization problem.

### 1. Define the Problem

The problem is to find the values of \(x_1\) and \(x_2\) that:
\[
\begin{array}{ll}
\text{Minimize} & f(x_1, x_2) = e^{-(x_1 + x_2)} \\
\text{subject to} & g_1(x_1, x_2) = x_1 + 2x_2 - 20 \leq 0 \\
& g_2(x_1, x_2) = -x_1 \leq 0 \\
& g_3(x_1, x_2) = -x_2 \leq 0
\end{array}
\]

This is a convex optimization problem because:
*   The objective function \(f(x_1, x_2)\) is convex. The Hessian matrix is positive semidefinite.
*   The feasible region defined by the linear inequality constraints is a convex set.

For a convex problem, the Karush-Kuhn-Tucker (KKT) conditions are necessary and sufficient for optimality.

### 2. Formulate the Lagrangian

We introduce non-negative Lagrange multipliers \(u_1, u_2, u_3\) for the three inequality constraints. The Lagrangian function \(L(x_1, x_2, u_1, u_2, u_3)\) is:
\[ L(x_1, x_2, u_1, u_2, u_3) = e^{-(x_1 + x_2)} + u_1(x_1 + 2x_2 - 20) + u_2(-x_1) + u_3(-x_2) \]

### 3. Write the KKT Conditions

The KKT conditions for an optimal solution \((\bar{x}_1, \bar{x}_2)\) and corresponding multipliers \((\bar{u}_1, \bar{u}_2, \bar{u}_3)\) are:

1.  **Stationarity:** The gradient of the Lagrangian with respect to \(x_1\) and \(x_2\) is zero.
    *   \( \frac{\partial L}{\partial x_1} = -e^{-(\bar{x}_1 + \bar{x}_2)} + \bar{u}_1 - \bar{u}_2 = 0 \)
    *   \( \frac{\partial L}{\partial x_2} = -e^{-(\bar{x}_1 + \bar{x}_2)} + 2\bar{u}_1 - \bar{u}_3 = 0 \)

2.  **Primal Feasibility:** The solution must satisfy the original constraints.
    *   \( \bar{x}_1 + 2\bar{x}_2 - 20 \leq 0 \)
    *   \( \bar{x}_1 \geq 0 \)
    *   \( \bar{x}_2 \geq 0 \)

3.  **Dual Feasibility:** The Lagrange multipliers must be non-negative.
    *   \( \bar{u}_1, \bar{u}_2, \bar{u}_3 \geq 0 \)

4.  **Complementary Slackness:** The product of each multiplier and its corresponding constraint must be zero.
    *   \( \bar{u}_1(\bar{x}_1 + 2\bar{x}_2 - 20) = 0 \)
    *   \( \bar{u}_2(-\bar{x}_1) = 0 \implies \bar{u}_2\bar{x}_1 = 0 \)
    *   \( \bar{u}_3(-\bar{x}_2) = 0 \implies \bar{u}_3\bar{x}_2 = 0 \)

### 4. Solve the KKT System

From the stationarity conditions, we can write:
\[ e^{-(\bar{x}_1 + \bar{x}_2)} = \bar{u}_1 - \bar{u}_2 \]
\[ e^{-(\bar{x}_1 + \bar{x}_2)} = 2\bar{u}_1 - \bar{u}_3 \]
This implies \( \bar{u}_1 - \bar{u}_2 = 2\bar{u}_1 - \bar{u}_3 \), which simplifies to \( \bar{u}_3 = \bar{u}_1 + \bar{u}_2 \).

Now, we analyze cases based on the complementary slackness conditions.

**Case 1: The main constraint is inactive, \( \bar{x}_1 + 2\bar{x}_2 - 20 < 0 \).**
*   By complementary slackness, \( \bar{u}_1 = 0 \).
*   This implies \( \bar{u}_3 = \bar{u}_2 \).
*   The stationarity condition becomes \( -e^{-(\bar{x}_1 + \bar{x}_2)} - \bar{u}_2 = 0 \), which can be written as \( \bar{u}_2 = -e^{-(\bar{x}_1 + \bar{x}_2)} \).
*   Since \( e^{-(\bar{x}_1 + \bar{x}_2)} \) is always positive, \( \bar{u}_2 \) must be negative. This contradicts the dual feasibility condition \( \bar{u}_2 \geq 0 \). Therefore, this case is not possible.

**Case 2: The main constraint is active, \( \bar{x}_1 + 2\bar{x}_2 - 20 = 0 \).**
*   This implies \( \bar{u}_1 \geq 0 \).
*   We need to consider the constraints \( \bar{x}_1 \geq 0 \) and \( \bar{x}_2 \geq 0 \).

    *   **Subcase 2a: \( \bar{x}_1 > 0 \) and \( \bar{x}_2 > 0 \).**
        *   From complementary slackness, \( \bar{u}_2 = 0 \) and \( \bar{u}_3 = 0 \).
        *   From \( \bar{u}_3 = \bar{u}_1 + \bar{u}_2 \), we get \( 0 = \bar{u}_1 + 0 \), which means \( \bar{u}_1 = 0 \).
        *   The stationarity equation becomes \( -e^{-(\bar{x}_1 + \bar{x}_2)} = 0 \), which is impossible. So this subcase is not feasible.

    *   **Subcase 2b: \( \bar{x}_1 = 0 \) and \( \bar{x}_2 > 0 \).**
        *   From complementary slackness, \( \bar{u}_3 = 0 \).
        *   The active constraint \( \bar{x}_1 + 2\bar{x}_2 - 20 = 0 \) gives \( 0 + 2\bar{x}_2 = 20 \), so \( \bar{x}_2 = 10 \).
        *   The solution is \( (\bar{x}_1, \bar{x}_2) = (0, 10) \). This is primally feasible.
        *   Now find the multipliers. With \( \bar{u}_3 = 0 \), the relation \( \bar{u}_3 = \bar{u}_1 + \bar{u}_2 \) gives \( 0 = \bar{u}_1 + \bar{u}_2 \). Since \( \bar{u}_1 \geq 0 \) and \( \bar{u}_2 \geq 0 \), this implies \( \bar{u}_1 = 0 \) and \( \bar{u}_2 = 0 \).
        *   The first stationarity condition becomes \( -e^{-(0+10)} + 0 - 0 = 0 \), or \( -e^{-10} = 0 \), which is impossible. So this subcase is not feasible.

    *   **Subcase 2c: \( \bar{x}_1 > 0 \) and \( \bar{x}_2 = 0 \).**
        *   From complementary slackness, \( \bar{u}_2 = 0 \).
        *   The active constraint \( \bar{x}_1 + 2\bar{x}_2 - 20 = 0 \) gives \( \bar{x}_1 + 0 = 20 \), so \( \bar{x}_1 = 20 \).
        *   The solution is \( (\bar{x}_1, \bar{x}_2) = (20, 0) \). This is primally feasible.
        *   Let's check the KKT conditions. With \( \bar{u}_2 = 0 \), the stationarity conditions are:
            *   \( -e^{-(20+0)} + \bar{u}_1 = 0 \implies \bar{u}_1 = e^{-20} \)
            *   \( -e^{-(20+0)} + 2\bar{u}_1 - \bar{u}_3 = 0 \)
        *   Substitute \( \bar{u}_1 = e^{-20} \) into the second equation:
            *   \( -e^{-20} + 2e^{-20} - \bar{u}_3 = 0 \implies \bar{u}_3 = e^{-20} \)
        *   Check dual feasibility: \( \bar{u}_1 = e^{-20} \geq 0 \), \( \bar{u}_2 = 0 \geq 0 \), \( \bar{u}_3 = e^{-20} \geq 0 \). This holds.
        *   All KKT conditions are satisfied for the point \( (\bar{x}_1, \bar{x}_2) = (20, 0) \) with multipliers \( \bar{u}_1 = e^{-20}, \bar{u}_2 = 0, \bar{u}_3 = e^{-20} \).

    *   **Subcase 2d: \( \bar{x}_1 = 0 \) and \( \bar{x}_2 = 0 \).**
        *   This point \( (0, 0) \) must satisfy \( \bar{x}_1 + 2\bar{x}_2 - 20 = 0 \), but \( 0 + 2(0) - 20 = -20 \neq 0 \). So this subcase is not possible.

### 5. Conclusion

The only point that satisfies all the KKT conditions is \( \bar{x} = (20, 0) \). Since the problem is convex, this point is the unique global minimum.

The optimal solution is:
\[ \mathbf{x}^* = (x_1, x_2) = (20, 0) \]

The minimum value of the objective function is:
\[ f(\mathbf{x}^*) = e^{-(20 + 0)} = e^{-20} \]

This problem is divided into two parts. First, we solve a constrained optimization problem, and second, we use the result to prove a generalized form of the Cauchy-Schwarz inequality.

### Part 1: The Maximization Problem

We want to find the maximum value of the function \( f(\mathbf{x})=\langle\mathbf{y}, \mathbf{x}\rangle = \mathbf{y}^T\mathbf{x} \) subject to the constraint \( \langle\mathbf{x}, A \mathbf{x}\rangle = \mathbf{x}^T A \mathbf{x} \leq 1 \).

This is a convex optimization problem, as we are maximizing a linear (and thus concave) function over a convex set. The set \( \{\mathbf{x} \mid \mathbf{x}^T A \mathbf{x} \leq 1\} \) is convex because the matrix \( A \) is positive-definite. We can solve this using the method of Lagrange multipliers (KKT conditions).

First, we rewrite the problem as a minimization problem:
\[
\begin{array}{ll}
\text{Minimize} & -\mathbf{y}^T \mathbf{x} \\
\text{subject to} & \mathbf{x}^T A \mathbf{x} - 1 \leq 0
\end{array}
\]

**1. Formulate the Lagrangian:**
The Lagrangian function is:
\[ L(\mathbf{x}, u) = -\mathbf{y}^T \mathbf{x} + u(\mathbf{x}^T A \mathbf{x} - 1) \]
where \( u \geq 0 \) is the Lagrange multiplier.

**2. Apply the KKT Conditions:**
The Karush-Kuhn-Tucker (KKT) conditions for an optimal solution \( \mathbf{x}^* \) are:
*   **Stationarity:** The gradient of the Lagrangian with respect to \( \mathbf{x} \) is zero.
    \[ \nabla_{\mathbf{x}} L(\mathbf{x}^*, u) = -\mathbf{y} + 2uA\mathbf{x}^* = 0 \implies 2uA\mathbf{x}^* = \mathbf{y} \]
*   **Primal Feasibility:** \( (\mathbf{x}^*)^T A \mathbf{x}^* - 1 \leq 0 \)
*   **Dual Feasibility:** \( u \geq 0 \)
*   **Complementary Slackness:** \( u((\mathbf{x}^*)^T A \mathbf{x}^* - 1) = 0 \)

**3. Solve for the Optimal Solution:**
From the stationarity condition, \( 2uA\mathbf{x}^* = \mathbf{y} \).
*   If \( \mathbf{y} = \mathbf{0} \), the objective function is always zero, so the maximum value is 0. The formula gives \( \langle\mathbf{0}, A^{-1} \mathbf{0}\rangle^{1/2} = 0 \), which holds.
*   Assume \( \mathbf{y} \neq \mathbf{0} \). This implies that we cannot have \( u=0 \), because if \( u=0 \), the stationarity condition would give \( \mathbf{y} = \mathbf{0} \). Therefore, we must have \( u > 0 \).
*   Since \( u > 0 \), the complementary slackness condition implies that the constraint must be active:
    \[ (\mathbf{x}^*)^T A \mathbf{x}^* = 1 \]
*   Since \( A \) is positive-definite, it is invertible. We can solve the stationarity equation for \( \mathbf{x}^* \):
    \[ \mathbf{x}^* = \frac{1}{2u} A^{-1}\mathbf{y} \]
*   Now, substitute this expression for \( \mathbf{x}^* \) into the active constraint:
    \[ \left(\frac{1}{2u} A^{-1}\mathbf{y}\right)^T A \left(\frac{1}{2u} A^{-1}\mathbf{y}\right) = 1 \]
    \[ \frac{1}{4u^2} \mathbf{y}^T (A^{-1})^T A A^{-1} \mathbf{y} = 1 \]
    Since \( A \) is symmetric, \( A^{-1} \) is also symmetric, so \( (A^{-1})^T = A^{-1} \).
    \[ \frac{1}{4u^2} \mathbf{y}^T A^{-1} A A^{-1} \mathbf{y} = 1 \]
    \[ \frac{1}{4u^2} \mathbf{y}^T A^{-1} \mathbf{y} = 1 \]
*   Solving for \( u \), we get \( 4u^2 = \mathbf{y}^T A^{-1} \mathbf{y} \). Since \( u > 0 \), we have:
    \[ 2u = \sqrt{\mathbf{y}^T A^{-1} \mathbf{y}} = \langle\mathbf{y}, A^{-1}\mathbf{y}\rangle^{1/2} \]

**4. Calculate the Maximum Value:**
The maximum value of the objective function is \( \mathbf{y}^T\mathbf{x}^* \).
\[ f(\mathbf{x}^*) = \mathbf{y}^T \mathbf{x}^* = \mathbf{y}^T \left(\frac{1}{2u} A^{-1}\mathbf{y}\right) = \frac{1}{2u} (\mathbf{y}^T A^{-1}\mathbf{y}) \]
Substituting the expression we found for \( 2u \):
\[ f(\mathbf{x}^*) = \frac{\mathbf{y}^T A^{-1}\mathbf{y}}{\sqrt{\mathbf{y}^T A^{-1}\mathbf{y}}} = \sqrt{\mathbf{y}^T A^{-1}\mathbf{y}} \]
Thus, the maximum value of \( f(\mathbf{x})=\langle\mathbf{y}, \mathbf{x}\rangle \) subject to the constraint is \( \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} \).

---

### Part 2: Generalized Cauchy-Schwarz Inequality

We now use the result from Part 1 to establish the inequality:
\[ |\langle\mathbf{x}, \mathbf{y}\rangle|^{2} \leq\langle\mathbf{x}, A \mathbf{x}\rangle\left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle \]

**1. Handle Trivial Cases:**
*   If \( \mathbf{x} = \mathbf{0} \), both sides of the inequality are zero, so it holds.
*   If \( \mathbf{y} = \mathbf{0} \), both sides are also zero, and the inequality holds.

**2. Main Proof (for \( \mathbf{x} \neq \mathbf{0} \) and \( \mathbf{y} \neq \mathbf{0} \)):**
Let \( \mathbf{x} \) and \( \mathbf{y} \) be any non-zero vectors in \( \mathbb{R}^n \). Since \( A \) is positive-definite, \( \langle\mathbf{x}, A \mathbf{x}\rangle > 0 \).

Define a new vector \( \mathbf{z} \) by scaling \( \mathbf{x} \):
\[ \mathbf{z} = \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} \]
Let's check if this vector \( \mathbf{z} \) satisfies the constraint from Part 1:
\[ \langle\mathbf{z}, A\mathbf{z}\rangle = \left\langle \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}}, A \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} \right\rangle = \frac{1}{\langle\mathbf{x}, A \mathbf{x}\rangle} \langle\mathbf{x}, A\mathbf{x}\rangle = 1 \]
So, \( \langle\mathbf{z}, A\mathbf{z}\rangle = 1 \), which satisfies the condition \( \langle\mathbf{z}, A\mathbf{z}\rangle \leq 1 \).

From Part 1, we know that for any vector satisfying the constraint, the value of \( \langle\mathbf{y}, \mathbf{z}\rangle \) cannot be greater than the maximum value we found. Therefore:
\[ \langle\mathbf{y}, \mathbf{z}\rangle \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} \]
Substitute the definition of \( \mathbf{z} \):
\[ \left\langle\mathbf{y}, \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}}\right\rangle \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} \]
\[ \frac{\langle\mathbf{y}, \mathbf{x}\rangle}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} \]
This gives \( \langle\mathbf{x}, \mathbf{y}\rangle \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} \).

To handle the absolute value, we can apply the same argument to the vector \( -\mathbf{x} \). The term \( \langle-\mathbf{x}, A(-\mathbf{x})\rangle \) is equal to \( \langle\mathbf{x}, A \mathbf{x}\rangle \). The left side becomes \( \langle\mathbf{y}, -\mathbf{x}\rangle = -\langle\mathbf{y}, \mathbf{x}\rangle \). This leads to:
\[ -\langle\mathbf{x}, \mathbf{y}\rangle \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} \]
Combining these two inequalities, we get:
\[ |\langle\mathbf{x}, \mathbf{y}\rangle| \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} \]
Squaring both sides (which is permissible as both are non-negative) yields the desired result:
\[ |\langle\mathbf{x}, \mathbf{y}\rangle|^{2} \leq\langle\mathbf{x}, A \mathbf{x}\rangle\left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle \]
This inequality is a generalization of the Cauchy-Schwarz inequality, which can be recovered by setting \( A \) to be the identity matrix \( I \).

# 1

## Problem

Minimize $ f(\mathbf{x})=\sum_{\mathbf{i}=\mathbf{1}}^{\mathbf{n}} \mathbf{c}_{\mathbf{i}} / \mathbf{x}_{\mathbf{i}} $ subject to
$
\sum_{i=1}^{n} a_{i} x_{i}=b, \quad x_{i}>0, \quad i=1, \ldots, n,
$
where $ c_{i}, a_{i}, i=1, \ldots, n $, and $ b $ are positive constants.

## Solution

$ \mathcal{L}(\mathbf{x}, \lambda) = \sum_{i=1}^{n} \frac{c_i}{x_i} + \lambda \left( \sum_{i=1}^{n} a_i x_i - b \right) $

$ \frac{\partial \mathcal{L}}{\partial x_i} = -\frac{c_i}{x_i^2} + \lambda a_i = 0 \quad \text{for } i = 1, \ldots, n $

$\lambda a_i = \frac{c_i}{x_i^2} \implies x_i^2 = \frac{c_i}{\lambda a_i} \implies x_i = \sqrt{\frac{c_i}{\lambda a_i}} = \frac{1}{\sqrt{\lambda}} \sqrt{\frac{c_i}{a_i}} $

$ \frac{1}{\sqrt{\lambda}} \sum_{i=1}^{n} \sqrt{a_i c_i} = b$

$\sqrt{\lambda} = \frac{\sum_{j=1}^{n} \sqrt{a_j c_j}}{b} $

Then:

$x_i = \frac{b}{\sum_{j=1}^{n} \sqrt{a_j c_j}} \sqrt{\frac{c_i}{a_i}}$

# 2

## Problem

Consider the following quadratic programming problem:
$
\begin{aligned}
\operatorname{minimize} & \frac{1}{2}\langle\mathbf{x}, \mathbf{Q x}\rangle-\langle\mathbf{b}, \mathbf{x}\rangle \\
\text { s.t. } \mathbf{A x} & \leq \mathbf{c}
\end{aligned}
$

Show that if $ Q $ is positive definite, then the quadratic programming problem has a unique solution.

## Solution

Assume: $ f(\mathbf{x}_1) = f(\mathbf{x}_2) = f^*$

$ f\left(\frac{1}{2}\mathbf{x}_1 + \frac{1}{2}\mathbf{x}_2\right) < \frac{1}{2}f(\mathbf{x}_1) + \frac{1}{2}f(\mathbf{x}_2)$

Which contradict the assumption.

# 3


## Problem


PROBLEM 3: Prove the following result. If the feasible set of a linear program
$
\begin{array}{l}
\min \mathbf{c}^{\mathbf{t}} \mathbf{x} \\
\text { s.t. } \mathbf{A} \mathbf{x} \leq \mathbf{b}
\end{array}
$
is nonempty and bounded, then the feasible set of the corresponding dual problem
$
\begin{array}{l}
\max -\mathbf{b}^{t} \mathbf{y} \\
\text { s.t. } \mathbf{A}^{t} \mathbf{y}+\mathbf{c}=\mathbf{0} \\
\quad \mathbf{y} \geq \mathbf{0}
\end{array}
$
is nonempty and unbounded.
Hint: The feasible set is bounded means that there exists an $ M>0 $ such that $ -M \mathbf{e} \leq \mathbf{x} \leq \mathbf{M e} $ when $ \mathbf{x} $ is feasible. Show that there exists a $ \mathbf{d} $ such that $ \mathbf{A}^{t} \mathbf{d}=\mathbf{0}, \mathbf{d} \geq \mathbf{0} $ but $ \mathbf{d} \neq \mathbf{0} $, i.e. $ \mathbf{e}^{t} \mathbf{d}>\mathbf{0} $.

## Solution

There exists no $x$ s.t. $Ax < 0$ (or it's unbounded)

Therefore, by Farkas' lemma:

$A^ty=0 , y\ge0$

has solution, let's say it's $y_0$

let's say $A^ty^* + c = 0$

Then:

$y = y^* + \lambda y_0$ also satisfies the constraints

therefore it's unbounded

