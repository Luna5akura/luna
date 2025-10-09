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

# 7

## Problem 

Employ AI to evaluate the benefits of studying convex programming and to provide a concrete example illustrating how convex programming can be applied to solve practical problems.

## Solution 

Studying convex programming is highly beneficial because it provides a powerful framework for solving a wide range of optimization problems reliably and efficiently. Its value is evident in both theoretical research and practical applications across various industries.

### 💡 The Key Benefits of Convex Programming
The primary advantages of convex programming stem from the mathematical properties of convex functions and convex sets.

*   **Guaranteed Global Optimality**: Perhaps the most significant benefit is that for a convex problem, any local solution you find is guaranteed to be a global solution. This eliminates the uncertainty of whether a better solution exists, which is a major challenge in non-convex optimization.
*   **Efficient and Reliable Algorithms**: Because of their well-behaved structure, convex problems can be solved using highly efficient algorithms. There are well-established methods for various types of convex problems, such as Quadratic Programming (QP) and Second-Order Cone Programming (SOCP), which are both reliable and can handle large-scale problems.
*   **The Foundation for Complex Problems**: Convex optimization serves as a cornerstone for tackling more complex, non-convex problems. Techniques like **Sequential Convex Programming (SCP)** approximate a non-convex problem as a sequence of convex sub-problems, solving them iteratively. Similarly, **convex relaxations** (e.g., using Second-Order Cones) can transform intractable non-convex constraints into solvable convex ones, providing useful bounds and approximations.

### 🚰 A Concrete Example: Pollution Control in Wastewater Networks
A great example of convex programming in action is the management of sewer networks and wastewater treatment plants, a problem tackled by researchers using a Model-Predictive Control (MPC) framework.

*   **The Practical Problem**: The goal is to control actuators (like gates and pumps) in a sewer system to minimize flooding and the release of untreated pollutants, especially during heavy rain. At its core, this involves balancing the flow of wastewater to treatment plants over time.
*   **The Optimization Challenge**: The natural mathematical model of this system is **non-convex**, primarily due to two factors:
    1.  **Microbial growth kinetics** in treatment plants, which follow complex, non-linear rules.
    2.  **Bilinear terms** arising from the product of flow rates and pollutant concentrations.
    Solving non-convex optimization problems in real-time for a dynamic system like this is computationally very difficult.
*   **The Convex Programming Solution**: To make the problem tractable for real-time control, the researchers applied convexification techniques:
    - They used a **second-order cone (SOC) relaxation** to convexify the complex microbial growth kinetics.
    - They introduced a novel approximation that separated the modeling of flow rates in the pipes from concentrations in the plants, effectively **eliminating the bilinearities**.
*   **The Outcome**: After these transformations, the complex, non-convex trajectory optimization problem in each control step becomes a **Second-Order Cone Program (SOCP)**. This convex formulation can be solved quickly and reliably. In simulations, this convex optimization-based controller achieved a **15% reduction in released pollutant mass** compared to conventional methods while treating nearly the same volume of wastewater.

### 🔍 How to Deepen Your Understanding
To further your study of convex programming, you can explore its intersections with other cutting-edge fields:

*   **Integration with Machine Learning**: Concepts from convex optimization are being deeply integrated into machine learning, leading to approaches like **Decision-Focused Learning**, where ML models are tailored to improve the outcomes of downstream convex optimization solvers.
*   **Convex Optimization in Autonomous Systems**: Beyond wastewater management, convex programming is crucial in safety verification for autonomous vehicles, helping to ensure that a car's steering decisions are safe and reliable.

I hope this overview provides you with a clear picture of the value and application of convex programming. If you are interested in a specific industry or type of problem, feel free to ask for more detailed examples.




placeholder

placeholder

placeholder

placeholder

placeholder

placeholder
