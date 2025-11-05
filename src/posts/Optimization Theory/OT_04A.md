---
title: Optimization Theory - Assignment - Week 4
category: Assignments
---

# 1

## Problem

Consider the following problem.
$
\begin{array}{lc}
\text { Minimize } & x_{1}+x_{2} \\
\text { subject to } & x_{1}^{2}+x_{2}^{2}=4 \\
& -2 x_{1}-x_{2} \leq 4
\end{array}
$

Formulate the Lagrangian dual problem by incorporating both constraints into the objective function via the Lagrangian multipliers $ u_{1} $ and $ u_{2} $.

## Solution



The Lagrangian is:
$ L(x_1, x_2, u_1, u_2) = (x_1 + x_2) + u_1(x_1^2 + x_2^2 - 4) + u_2(-2x_1 - x_2 - 4) $
$ L(x_1, x_2, u_1, u_2) = x_1 + x_2 + u_1x_1^2 + u_1x_2^2 - 4u_1 - 2u_2x_1 - u_2x_2 - 4u_2 $

the multiplier $ u_2 $ must be non-negative, i.e., $ u_2 \geq 0 $. The multiplier $ u_1 $ for the equality constraint is unrestricted in sign.

$ g(u_1, u_2) = \inf_{x_1, x_2} L(x_1, x_2, u_1, u_2)
= \frac{-5u_2^2 + 6u_2 - 2}{4u_1} - 4u_1 - 4u_2 $

The dual problem is therefore:
$
\begin{array}{ll}
\text{Maximize} & g(u_1, u_2) = -\frac{5u_2^2 - 6u_2 + 2}{4u_1} - 4u_1 - 4u_2 \\
\text{s.t.} & u_2 \geq 0
\end{array}
$

# 2

## Problem 

Using weak duality, prove that the set $ \left\{x=\left(x_{1}, x_{2}, x_{3}\right)^{T} \in \mathbb{R}^{3} \mid x_{1}^{2}+x_{2}^{2}+x_{3}^{2}=\right. $ 1, $ \left.x_{1}+2 x_{2}+3 x_{3} \geq 5\right\} $ is empty.

## Solution

We can write the primal problem as:
$
\begin{array}{ll}
\text{Minimize} & 0 \\
\text{subject to} & x_{1}^{2}+x_{2}^{2}+x_{3}^{2} - 1 = 0 \\
& 5 - x_{1} - 2x_{2} - 3x_{3} \leq 0
\end{array}
$

Let $p^*$ be the optimal value of this problem. If the feasible set is non-empty, a solution exists, and the optimal value will be $p^* = 0$. If the feasible set is empty, the problem is infeasible, and by convention, the optimal value is $p^* = +\infty$.

The Lagrangian $L(x, \lambda, \mu)$ is:
$ L(x, \lambda, \mu) = 0 + \mu(x_{1}^{2}+x_{2}^{2}+x_{3}^{2} - 1) + \lambda(5 - x_{1} - 2x_{2} - 3x_{3}) $
$ L(x, \lambda, \mu) = \mu x_{1}^{2} - \lambda x_{1} + \mu x_{2}^{2} - 2\lambda x_{2} + \mu x_{3}^{2} - 3\lambda x_{3} - \mu + 5\lambda $

The dual function $g(\lambda, \mu)$ is the infimum (greatest lower bound) of the Lagrangian with respect to $x = (x_1, x_2, x_3)^T$:
$ g(\lambda, \mu) = \inf_{x \in \mathbb{R}^3} L(x, \lambda, \mu) $


With $\mu > 0$, we find the minimum by setting the partial derivatives with respect to each $x_i$ to zero:
$ \frac{\partial L}{\partial x_1} = 2\mu x_1 - \lambda = 0 \implies x_1 = \frac{\lambda}{2\mu} $
$ \frac{\partial L}{\partial x_2} = 2\mu x_2 - 2\lambda = 0 \implies x_2 = \frac{2\lambda}{2\mu} = \frac{\lambda}{\mu} $
$ \frac{\partial L}{\partial x_3} = 2\mu x_3 - 3\lambda = 0 \implies x_3 = \frac{3\lambda}{2\mu} $

The dual problem is to maximize the dual function subject to the constraints on the multipliers:
$
\begin{array}{ll}
\text{Maximize} & g(\lambda, \mu) = -\frac{7\lambda^2}{2\mu} - \mu + 5\lambda \\
\text{subject to} & \lambda \geq 0, \quad \mu > 0
\end{array}
$

Let $d^*$ be the optimal value of the dual problem. To find $d^*$, we can first maximize $g(\lambda, \mu)$ with respect to $\mu$ for any fixed $\lambda > 0$. Let $h(\mu) = -\frac{7\lambda^2}{2\mu} - \mu$.
$ \frac{d h}{d \mu} = \frac{7\lambda^2}{2\mu^2} - 1 = 0 \implies \mu^2 = \frac{7\lambda^2}{2} \implies \mu = \lambda \sqrt{\frac{7}{2}} $
(We take the positive root since $\mu > 0$).

Substitute this expression for $\mu$ back into $g(\lambda, \mu)$:
$ g(\lambda) = -\frac{7\lambda^2}{2(\lambda\sqrt{7/2})} - \lambda\sqrt{7/2} + 5\lambda $
$ g(\lambda) = -\frac{\sqrt{7}\lambda}{\sqrt{2}} - \frac{\sqrt{7}\lambda}{\sqrt{2}} + 5\lambda = -2\frac{\sqrt{7}}{\sqrt{2}}\lambda + 5\lambda = (5 - \sqrt{14})\lambda $

Now the dual problem reduces to maximizing $g(\lambda)$ over $\lambda \geq 0$:
$ \text{Maximize} \quad (5 - \sqrt{14})\lambda \quad \text{subject to} \quad \lambda \geq 0 $

Since $5 = \sqrt{25}$ and $\sqrt{14} < \sqrt{25}$, the coefficient $(5 - \sqrt{14})$ is positive. To maximize this expression, $\lambda$ must be as large as possible. As $\lambda \to \infty$, the objective function also approaches infinity.
Therefore, the optimal value of the dual problem is $d^* = +\infty$.

Therefore, the set $ \left\{x=\left(x_{1}, x_{2}, x_{3}\right)^{T} \in \mathbb{R}^{3} \mid x_{1}^{2}+x_{2}^{2}+x_{3}^{2}=1, x_{1}+2 x_{2}+3 x_{3} \geq 5\right\} $ is empty.

# 3

## Problem

Consider the problem to minimize $ x_{1}^{2}+x_{2}^{2} $ subject to $ x_{1}+x_{2}-4 \geq 0 $, and $ x_{1}, x_{2} \geq 0 $.
1. Verify that the optimal solution is $ \bar{x}=(2,2)^{t} $ with $ f(\bar{x})=8 $.
2. Letting $ X=\left\{\left(x_{1}, x_{2}\right): x_{1} \geq 0, x_{2} \geq 0\right\} $, write the Lagrangian dual problem. Show that the dual function is $ \theta(u)=-\frac{u^{2}}{2}+4 u $. Verify that there is no duality gap for this problem.

## Solution 1

The Lagrangian is $ L(x, u) = x_1^2 + x_2^2 + u_1(4 - x_1 - x_2) + u_2(-x_1) + u_3(-x_2) $.

The KKT conditions are:
*   **Stationarity:** The gradient of the Lagrangian with respect to $ x $ is zero.
    *   $ \frac{\partial L}{\partial x_1} = 2x_1 - u_1 - u_2 = 0 $
    *   $ \frac{\partial L}{\partial x_2} = 2x_2 - u_1 - u_3 = 0 $
*   **Primal Feasibility:** $ \bar{x}=(2,2) $ must be feasible
*   **Dual Feasibility:** All multipliers for inequality constraints must be non-negative: $ u_1, u_2, u_3 \geq 0 $.
*   **Complementary Slackness:**
    *   $ u_1(4 - x_1 - x_2) = 0 $
    *   $ u_2(-x_1) = 0 $
    *   $ u_3(-x_2) = 0 $

Let's evaluate these conditions at $ \bar{x} = (2, 2) $:
*   From complementary slackness:
    *   Since $ -x_1 = -2 \neq 0 $, we must have $ u_2 = 0 $.
    *   Since $ -x_2 = -2 \neq 0 $, we must have $ u_3 = 0 $.
    *   The first condition $ u_1(4 - 2 - 2) = u_1(0) = 0 $ is always satisfied.
*   Now, substitute $ u_2=0 $ and $ u_3=0 $ into the stationarity conditions:
    *   $ 2(2) - u_1 - 0 = 0 \implies 4 - u_1 = 0 \implies u_1 = 4 $.
    *   $ 2(2) - u_1 - 0 = 0 \implies 4 - u_1 = 0 \implies u_1 = 4 $.
*   We have found the multipliers $ \bar{u} = (4, 0, 0) $. Check dual feasibility: $ u_1 = 4 \geq 0 $, $ u_2 = 0 \geq 0 $, $ u_3 = 0 \geq 0 $. The condition is satisfied.

Since the point $ \bar{x}=(2,2) $ and multipliers $ \bar{u}=(4,0,0) $ satisfy all KKT conditions for a convex problem, $ \bar{x}=(2,2) $ is the optimal solution.

The value of the objective function at the optimal solution is:
$ f(\bar{x}) = f(2, 2) = 2^2 + 2^2 = 4 + 4 = 8 $.
This verifies the first part of the problem.

## Solution 2

The Lagrangian is:
$ L(x, u) = x_1^2 + x_2^2 + u(4 - x_1 - x_2) $
where $ u \geq 0 $ is the Lagrange multiplier.

The dual function $ \theta(u) $ is the infimum (minimum) of the Lagrangian over the set $ X $:
$ \theta(u) = \inf_{x \in X} L(x, u) = \inf_{x_1 \geq 0, x_2 \geq 0} \{ x_1^2 + x_2^2 - ux_1 - ux_2 + 4u \} $

The dual function is $ \theta(u) = -\frac{u^2}{2} + 4u $.

The Lagrangian dual problem is to maximize the dual function subject to the constraint on the multiplier:
$
\begin{array}{ll}
\text{Maximize} & \theta(u) = -\frac{u^2}{2} + 4u \\
\text{subject to} & u \geq 0
\end{array}
$

*   **Primal Optimal Value:** From part 1, we know $ p^* = 8 $.
*   **Dual Optimal Value:** We need to solve the dual problem. We maximize the concave function $ \theta(u) = -\frac{u^2}{2} + 4u $ for $ u \geq 0 $.
    $ d^* = \theta(4) = -\frac{4^2}{2} + 4(4) = -\frac{16}{2} + 16 = -8 + 16 = 8 $

Since $ p^* = d^* $, there is no duality gap for this problem.

# 4

## Problem

Minimize $ f(\mathbf{x})=e^{-\left(x_{1}+x_{2}\right)} $ subject to $ x_{1}+2 x_{2} \leq 20, x_{1} \geq 0, x_{2} \geq 0 $.

## Solution

The Lagrangian function $L(x_1, x_2, u_1, u_2, u_3)$ is:
$ L(x_1, x_2, u_1, u_2, u_3) = e^{-(x_1 + x_2)} + u_1(x_1 + 2x_2 - 20) + u_2(-x_1) + u_3(-x_2) $

From the stationarity conditions, we can write:
$ e^{-(\bar{x}_1 + \bar{x}_2)} = \bar{u}_1 - \bar{u}_2 $
$ e^{-(\bar{x}_1 + \bar{x}_2)} = 2\bar{u}_1 - \bar{u}_3 $
This implies $ \bar{u}_1 - \bar{u}_2 = 2\bar{u}_1 - \bar{u}_3 $, which simplifies to $ \bar{u}_3 = \bar{u}_1 + \bar{u}_2 $.

Now, we analyze cases based on the complementary slackness conditions.

**Case 1: The main constraint is inactive, $ \bar{x}_1 + 2\bar{x}_2 - 20 < 0 $.**
*   By complementary slackness, $ \bar{u}_1 = 0 $.
*   This implies $ \bar{u}_3 = \bar{u}_2 $.
*   The stationarity condition becomes $ -e^{-(\bar{x}_1 + \bar{x}_2)} - \bar{u}_2 = 0 $, which can be written as $ \bar{u}_2 = -e^{-(\bar{x}_1 + \bar{x}_2)} $.
*   Since $ e^{-(\bar{x}_1 + \bar{x}_2)} $ is always positive, $ \bar{u}_2 $ must be negative. This contradicts the dual feasibility condition $ \bar{u}_2 \geq 0 $. Therefore, this case is not possible.

**Case 2: The main constraint is active, $ \bar{x}_1 + 2\bar{x}_2 - 20 = 0 $.**
*   This implies $ \bar{u}_1 \geq 0 $.
*   We need to consider the constraints $ \bar{x}_1 \geq 0 $ and $ \bar{x}_2 \geq 0 $.

    *   **Subcase 2a: $ \bar{x}_1 > 0 $ and $ \bar{x}_2 > 0 $.**
        *   From complementary slackness, $ \bar{u}_2 = 0 $ and $ \bar{u}_3 = 0 $.
        *   From $ \bar{u}_3 = \bar{u}_1 + \bar{u}_2 $, we get $ 0 = \bar{u}_1 + 0 $, which means $ \bar{u}_1 = 0 $.
        *   The stationarity equation becomes $ -e^{-(\bar{x}_1 + \bar{x}_2)} = 0 $, which is impossible. So this subcase is not feasible.

    *   **Subcase 2b: $ \bar{x}_1 = 0 $ and $ \bar{x}_2 > 0 $.**
        *   From complementary slackness, $ \bar{u}_3 = 0 $.
        *   The active constraint $ \bar{x}_1 + 2\bar{x}_2 - 20 = 0 $ gives $ 0 + 2\bar{x}_2 = 20 $, so $ \bar{x}_2 = 10 $.
        *   The solution is $ (\bar{x}_1, \bar{x}_2) = (0, 10) $. This is primally feasible.
        *   Now find the multipliers. With $ \bar{u}_3 = 0 $, the relation $ \bar{u}_3 = \bar{u}_1 + \bar{u}_2 $ gives $ 0 = \bar{u}_1 + \bar{u}_2 $. Since $ \bar{u}_1 \geq 0 $ and $ \bar{u}_2 \geq 0 $, this implies $ \bar{u}_1 = 0 $ and $ \bar{u}_2 = 0 $.
        *   The first stationarity condition becomes $ -e^{-(0+10)} + 0 - 0 = 0 $, or $ -e^{-10} = 0 $, which is impossible. So this subcase is not feasible.

    *   **Subcase 2c: $ \bar{x}_1 > 0 $ and $ \bar{x}_2 = 0 $.**
        *   From complementary slackness, $ \bar{u}_2 = 0 $.
        *   The active constraint $ \bar{x}_1 + 2\bar{x}_2 - 20 = 0 $ gives $ \bar{x}_1 + 0 = 20 $, so $ \bar{x}_1 = 20 $.
        *   The solution is $ (\bar{x}_1, \bar{x}_2) = (20, 0) $. This is primally feasible.
        *   Let's check the KKT conditions. With $ \bar{u}_2 = 0 $, the stationarity conditions are:
            *   $ -e^{-(20+0)} + \bar{u}_1 = 0 \implies \bar{u}_1 = e^{-20} $
            *   $ -e^{-(20+0)} + 2\bar{u}_1 - \bar{u}_3 = 0 $
        *   Substitute $ \bar{u}_1 = e^{-20} $ into the second equation:
            *   $ -e^{-20} + 2e^{-20} - \bar{u}_3 = 0 \implies \bar{u}_3 = e^{-20} $
        *   Check dual feasibility: $ \bar{u}_1 = e^{-20} \geq 0 $, $ \bar{u}_2 = 0 \geq 0 $, $ \bar{u}_3 = e^{-20} \geq 0 $. This holds.
        *   All KKT conditions are satisfied for the point $ (\bar{x}_1, \bar{x}_2) = (20, 0) $ with multipliers $ \bar{u}_1 = e^{-20}, \bar{u}_2 = 0, \bar{u}_3 = e^{-20} $.

    *   **Subcase 2d: $ \bar{x}_1 = 0 $ and $ \bar{x}_2 = 0 $.**
        *   This point $ (0, 0) $ must satisfy $ \bar{x}_1 + 2\bar{x}_2 - 20 = 0 $, but $ 0 + 2(0) - 20 = -20 \neq 0 $. So this subcase is not possible.

The only point that satisfies all the KKT conditions is $ \bar{x} = (20, 0) $. Since the problem is convex, this point is the unique global minimum.

The optimal solution is:
$ \mathbf{x}^* = (x_1, x_2) = (20, 0) $

The minimum value of the objective function is:
$ f(\mathbf{x}^*) = e^{-(20 + 0)} = e^{-20} $

# 5

## Problem

Let $ A $ be a positive-definite $ n \times n $ symmetric matrix and let $ \mathbf{y} $ be a fixed vector in $ \mathbb{R}^{n} $. Show that the maximum value of $ f(\mathbf{x})=\langle\mathbf{y}, \mathbf{x}\rangle $ subject to the constraint $ \langle\mathbf{x}, A \mathbf{x}\rangle \leq 1 $ is $ \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} $. Use this result to establish the generalization of the Cauchy-Schwarz inequality
$
|\langle\mathbf{x}, \mathbf{y}\rangle|^{2} \leq\langle\mathbf{x}, A \mathbf{x}\rangle\left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle
$

## Solution

First, we rewrite the problem as a minimization problem:
$
\begin{array}{ll}
\text{Minimize} & -\mathbf{y}^T \mathbf{x} \\
\text{subject to} & \mathbf{x}^T A \mathbf{x} - 1 \leq 0
\end{array}
$

The Lagrangian function is:
$ L(\mathbf{x}, u) = -\mathbf{y}^T \mathbf{x} + u(\mathbf{x}^T A \mathbf{x} - 1) $
where $ u \geq 0 $ is the Lagrange multiplier.

The Karush-Kuhn-Tucker (KKT) conditions for an optimal solution $ \mathbf{x}^* $ are:
*   **Stationarity:** The gradient of the Lagrangian with respect to $ \mathbf{x} $ is zero.
    $ \nabla_{\mathbf{x}} L(\mathbf{x}^*, u) = -\mathbf{y} + 2uA\mathbf{x}^* = 0 \implies 2uA\mathbf{x}^* = \mathbf{y} $
*   **Primal Feasibility:** $ (\mathbf{x}^*)^T A \mathbf{x}^* - 1 \leq 0 $
*   **Dual Feasibility:** $ u \geq 0 $
*   **Complementary Slackness:** $ u((\mathbf{x}^*)^T A \mathbf{x}^* - 1) = 0 $

From the stationarity condition, $ 2uA\mathbf{x}^* = \mathbf{y} $.
*   If $ \mathbf{y} = \mathbf{0} $, the objective function is always zero, so the maximum value is 0. The formula gives $ \langle\mathbf{0}, A^{-1} \mathbf{0}\rangle^{1/2} = 0 $, which holds.
*   Assume $ \mathbf{y} \neq \mathbf{0} $. This implies that we cannot have $ u=0 $, because if $ u=0 $, the stationarity condition would give $ \mathbf{y} = \mathbf{0} $. Therefore, we must have $ u > 0 $.
*   Since $ u > 0 $, the complementary slackness condition implies that the constraint must be active:
    $ (\mathbf{x}^*)^T A \mathbf{x}^* = 1 $
*   Since $ A $ is positive-definite, it is invertible. We can solve the stationarity equation for $ \mathbf{x}^* $:
    $ \mathbf{x}^* = \frac{1}{2u} A^{-1}\mathbf{y} $
*   Now, substitute this expression for $ \mathbf{x}^* $ into the active constraint:
    $ \left(\frac{1}{2u} A^{-1}\mathbf{y}\right)^T A \left(\frac{1}{2u} A^{-1}\mathbf{y}\right) = 1 $
    $ \frac{1}{4u^2} \mathbf{y}^T (A^{-1})^T A A^{-1} \mathbf{y} = 1 $
    Since $ A $ is symmetric, $ A^{-1} $ is also symmetric, so $ (A^{-1})^T = A^{-1} $.
    $ \frac{1}{4u^2} \mathbf{y}^T A^{-1} A A^{-1} \mathbf{y} = 1 $
    $ \frac{1}{4u^2} \mathbf{y}^T A^{-1} \mathbf{y} = 1 $
*   Solving for $ u $, we get $ 4u^2 = \mathbf{y}^T A^{-1} \mathbf{y} $. Since $ u > 0 $, we have:
    $ 2u = \sqrt{\mathbf{y}^T A^{-1} \mathbf{y}} = \langle\mathbf{y}, A^{-1}\mathbf{y}\rangle^{1/2} $

The maximum value of the objective function is $ \mathbf{y}^T\mathbf{x}^* $.
$ f(\mathbf{x}^*) = \mathbf{y}^T \mathbf{x}^* = \mathbf{y}^T \left(\frac{1}{2u} A^{-1}\mathbf{y}\right) = \frac{1}{2u} (\mathbf{y}^T A^{-1}\mathbf{y}) $
Substituting the expression we found for $ 2u $:
$ f(\mathbf{x}^*) = \frac{\mathbf{y}^T A^{-1}\mathbf{y}}{\sqrt{\mathbf{y}^T A^{-1}\mathbf{y}}} = \sqrt{\mathbf{y}^T A^{-1}\mathbf{y}} $
Thus, the maximum value of $ f(\mathbf{x})=\langle\mathbf{y}, \mathbf{x}\rangle $ subject to the constraint is $ \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} $.

We now use the result from Part 1 to establish the inequality:
$ |\langle\mathbf{x}, \mathbf{y}\rangle|^{2} \leq\langle\mathbf{x}, A \mathbf{x}\rangle\left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle $

*   If $ \mathbf{x} = \mathbf{0} $, both sides of the inequality are zero, so it holds.
*   If $ \mathbf{y} = \mathbf{0} $, both sides are also zero, and the inequality holds.

Let $ \mathbf{x} $ and $ \mathbf{y} $ be any non-zero vectors in $ \mathbb{R}^n $. Since $ A $ is positive-definite, $ \langle\mathbf{x}, A \mathbf{x}\rangle > 0 $.

Define a new vector $ \mathbf{z} $ by scaling $ \mathbf{x} $:
$ \mathbf{z} = \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} $
Let's check if this vector $ \mathbf{z} $ satisfies the constraint from Part 1:
$ \langle\mathbf{z}, A\mathbf{z}\rangle = \left\langle \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}}, A \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} \right\rangle = \frac{1}{\langle\mathbf{x}, A \mathbf{x}\rangle} \langle\mathbf{x}, A\mathbf{x}\rangle = 1 $
So, $ \langle\mathbf{z}, A\mathbf{z}\rangle = 1 $, which satisfies the condition $ \langle\mathbf{z}, A\mathbf{z}\rangle \leq 1 $.

From Part 1, we know that for any vector satisfying the constraint, the value of $ \langle\mathbf{y}, \mathbf{z}\rangle $ cannot be greater than the maximum value we found. Therefore:
$ \langle\mathbf{y}, \mathbf{z}\rangle \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} $
Substitute the definition of $ \mathbf{z} $:
$ \left\langle\mathbf{y}, \frac{\mathbf{x}}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}}\right\rangle \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} $
$ \frac{\langle\mathbf{y}, \mathbf{x}\rangle}{\sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle}} \leq \left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle^{1 / 2} $
This gives $ \langle\mathbf{x}, \mathbf{y}\rangle \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} $.

To handle the absolute value, we can apply the same argument to the vector $ -\mathbf{x} $. The term $ \langle-\mathbf{x}, A(-\mathbf{x})\rangle $ is equal to $ \langle\mathbf{x}, A \mathbf{x}\rangle $. The left side becomes $ \langle\mathbf{y}, -\mathbf{x}\rangle = -\langle\mathbf{y}, \mathbf{x}\rangle $. This leads to:
$ -\langle\mathbf{x}, \mathbf{y}\rangle \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} $
Combining these two inequalities, we get:
$ |\langle\mathbf{x}, \mathbf{y}\rangle| \leq \sqrt{\langle\mathbf{x}, A \mathbf{x}\rangle \langle\mathbf{y}, A^{-1} \mathbf{y}\rangle} $
Squaring both sides (which is permissible as both are non-negative) yields the desired result:
$ |\langle\mathbf{x}, \mathbf{y}\rangle|^{2} \leq\langle\mathbf{x}, A \mathbf{x}\rangle\left\langle\mathbf{y}, A^{-1} \mathbf{y}\right\rangle $
This inequality is a generalization of the Cauchy-Schwarz inequality, which can be recovered by setting $ A $ to be the identity matrix $ I $.

# 6

## Problem

Employ AI to evaluate the benefits of studying Lagrangian Dual problems.

## Solution

Studying Lagrangian Dual problems offers a wealth of benefits in the field of optimization and its applications, ranging from deep theoretical insights to powerful computational advantages. By transforming a constrained optimization problem (the primal problem) into a different, often simpler, form (the dual problem), Lagrangian duality provides a versatile and potent tool for both analysis and solution. 

 ### Theoretical Insights and Problem Simplification 

 One of the most significant advantages of Lagrangian duality is its ability to simplify complex optimization problems. By incorporating constraints into the objective function, it can transform a difficult constrained problem into an unconstrained or nearly unconstrained one. This is particularly valuable for non-convex problems, which are notoriously hard to solve. The dual problem is always a convex optimization problem, regardless of whether the original primal problem is convex. This means a challenging non-convex problem can often be converted into a more manageable convex one. 

 The relationship between the primal and dual problems is defined by the concepts of weak and strong duality. Weak duality, which always holds, states that the optimal value of the dual problem provides a lower bound on the optimal value of the primal minimization problem. This is incredibly useful for establishing bounds on the solution to difficult problems, such as the Traveling Salesman Problem. Strong duality, where the optimal values of the primal and dual problems are equal, holds for convex problems that satisfy certain conditions. When strong duality holds, solving the often simpler dual problem can yield the exact solution to the primal problem. 

 ### Computational Advantages and Algorithmic Development 

 From a computational perspective, solving the dual problem can be significantly more efficient. The structure of the dual problem is often more amenable to optimization algorithms. For instance, in some cases, the dual problem can be decomposed into smaller, independent subproblems, which can be solved in parallel, leading to substantial computational savings. 

 Lagrangian duality also forms the theoretical basis for many powerful optimization algorithms. The Karush-Kuhn-Tucker (KKT) conditions, which are necessary (and for convex problems, sufficient) for a solution to be optimal, are deeply connected to Lagrangian duality. These conditions provide a set of equations and inequalities that characterize the optimal primal and dual solutions and are fundamental to the design and analysis of numerous algorithms. Furthermore, primal-dual algorithms, which iteratively update both the primal and dual variables, often exhibit excellent convergence properties and are widely used in practice. 

 ### Broad Applications 

 The practical importance of Lagrangian duality is evident in its wide range of applications across various fields: 

 *   **Machine Learning**: Lagrangian duality is a cornerstone of many machine learning algorithms. In Support Vector Machines (SVMs), the dual formulation is crucial for enabling the "kernel trick," which allows for the efficient learning of non-linear classifiers. It is also instrumental in handling regularization techniques like Lasso Regression. 
 *   **Economics**: In economic models, dual variables often have a natural interpretation as prices, known as "shadow prices." These prices represent the marginal value of a resource, providing valuable economic insights. 
 *   **Engineering**: In fields like structural design and electrical networks, duality provides alternative perspectives on the problem. For instance, in electrical networks, primal variables might represent current flows, while dual variables correspond to voltage differences. 
 *   **Combinatorial Optimization**: For many discrete optimization problems that are NP-hard, the Lagrangian dual can provide tight bounds that are essential for the performance of exact algorithms and for evaluating the quality of approximate solutions. 

 In conclusion, the study of Lagrangian Dual problems provides a rich theoretical framework with profound practical implications. It offers a powerful lens through which to view and solve optimization problems, leading to deeper understanding, more efficient algorithms, and the ability to tackle a wide array of real-world challenges.