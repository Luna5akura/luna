const t=`---
category: Notes
date: '2025-12-23'
title: Optimization Theory - Week 9
---

# 1 Penalty Function Methods

## 1.1 Concept and Definition
**Basic Idea:** Transform a constrained optimization problem into an unconstrained one by adding a penalty term to the objective function that penalizes infeasible points.

**General Forms:**
For a problem minimizing $f(\\mathbf{x})$ subject to $g_i(\\mathbf{x}) \\le 0$ and $h_j(\\mathbf{x}) = 0$:
$$
\\text{Minimize } f(\\mathbf{x}) + \\mu\\alpha(\\mathbf{x})
$$
where $\\mu > 0$ is a penalty parameter and $\\alpha(\\mathbf{x})$ is a continuous function satisfying:
*   $\\alpha(\\mathbf{x}) = 0$ if $\\mathbf{x}$ is feasible.
*   $\\alpha(\\mathbf{x}) > 0$ if $\\mathbf{x}$ is infeasible.

**Typical Penalty Functions:**
$$
\\alpha(\\mathbf{x}) = \\sum_{i=1}^m [\\max\\{0, g_i(\\mathbf{x})\\}]^p + \\sum_{j=1}^l |h_j(\\mathbf{x})|^p
$$
where $p$ is a positive integer (typically $p=2$).

## 1.2 Convergence Theory (Theorem 1.1)
Consider the penalty problem maximizing $\\theta(\\mu)$ where $\\theta(\\mu) = \\inf \\{ f(\\mathbf{x}) + \\mu\\alpha(\\mathbf{x}) : \\mathbf{x} \\in X \\}$.

If the sequence $\\{\\mathbf{x}_\\mu\\}$ (solutions to the penalty problem) is contained in a compact subset of $X$, then:
$$
\\inf \\{ f(\\mathbf{x}) : \\mathbf{x} \\in X, \\mathbf{g}(\\mathbf{x}) \\le \\mathbf{0}, \\mathbf{h}(\\mathbf{x}) = \\mathbf{0} \\} = \\lim_{\\mu \\to \\infty} \\theta(\\mu)
$$
*   The limit $\\bar{\\mathbf{x}}$ of any convergent subsequence of $\\{\\mathbf{x}_\\mu\\}$ is an optimal solution to the original constrained problem.
*   $\\mu\\alpha(\\mathbf{x}_\\mu) \\to 0$ as $\\mu \\to \\infty$.

**Corollary 1.1:** If $\\alpha(\\mathbf{x}_\\mu) = 0$ for some $\\mu$, then $\\mathbf{x}_\\mu$ is an optimal solution to the primal problem.

## 1.3 Algorithm (Sequential Unconstrained Minimization)
1.  **Initialization:** Choose $\\epsilon > 0$, starting point $\\mathbf{x}_1$, $\\mu_1 > 0$, and $\\beta > 1$. Set $k=1$.
2.  **Main Step:**
    *   Minimize $f(\\mathbf{x}) + \\mu_k\\alpha(\\mathbf{x})$ to find $\\mathbf{x}_{k+1}$.
    *   If $\\mu_k\\alpha(\\mathbf{x}_{k+1}) < \\epsilon$, stop.
    *   Otherwise, let $\\mu_{k+1} = \\beta\\mu_k$, increment $k$, and repeat.

# 2 Barrier Function Methods

## 2.1 Concept and Definition
**Basic Idea:** Prevent the algorithm from leaving the feasible region by setting a "barrier" that approaches $\\infty$ as the point approaches the boundary from the interior. Applies primarily to inequality constraints.

**Barrier Function:**
$$
B(\\mathbf{x}) = \\sum_{i=1}^m \\phi[g_i(\\mathbf{x})]
$$
where $\\phi(y)$ is continuous, non-negative for $y < 0$, and $\\lim_{y \\to 0^-} \\phi(y) = \\infty$.

**Typical Barrier Forms:**
*   **Inverse Barrier:** $\\phi(y) = -1/y$
*   **Logarithmic Barrier:** $\\phi(y) = -\\ln[\\min\\{1, -y\\}]$ or simply $-\\ln(-y)$.

## 2.2 Convergence Theory (Theorem 1.2)
Let $\\theta(\\mu) = \\inf \\{ f(\\mathbf{x}) + \\mu B(\\mathbf{x}) : \\mathbf{g}(\\mathbf{x}) < \\mathbf{0} \\}$. Unlike penalty methods, here $\\mu \\to 0$.

If the primal problem has a solution $\\bar{\\mathbf{x}}$ accessible from the interior:
$$
\\text{minimum } \\{ f(\\mathbf{x}) : \\mathbf{g}(\\mathbf{x}) \\le \\mathbf{0} \\} = \\lim_{\\mu \\to 0^+} \\theta(\\mu)
$$
*   The limit of any convergent subsequence of $\\{\\mathbf{x}_\\mu\\}$ is an optimal solution.
*   $\\mu B(\\mathbf{x}_\\mu) \\to 0$ as $\\mu \\to 0^+$.

## 2.3 Algorithm
1.  **Initialization:** Choose $\\epsilon > 0$, strictly feasible point $\\mathbf{x}_1$ (where $\\mathbf{g}(\\mathbf{x}_1) < \\mathbf{0}$), $\\mu_1 > 0$, and $\\beta \\in (0, 1)$.
2.  **Main Step:**
    *   Minimize $f(\\mathbf{x}) + \\mu_k B(\\mathbf{x})$ subject to strict feasibility to find $\\mathbf{x}_{k+1}$.
    *   If $\\mu_k B(\\mathbf{x}_{k+1}) < \\epsilon$, stop.
    *   Otherwise, let $\\mu_{k+1} = \\beta\\mu_k$, increment $k$, and repeat.

# 3 Primal-Dual Interior Point Method

## 3.1 Standard Form and KKT Conditions
**Primal Problem (P):** Minimize $\\mathbf{c}^t\\mathbf{x}$ subject to $\\mathbf{Ax} = \\mathbf{b}, \\mathbf{x} \\ge \\mathbf{0}$.
**Dual Problem (D):** Maximize $\\mathbf{b}^t\\mathbf{y}$ subject to $\\mathbf{A}^t\\mathbf{y} + \\boldsymbol{\\lambda} = \\mathbf{c}, \\boldsymbol{\\lambda} \\ge \\mathbf{0}$.

**Optimality Conditions (KKT):**
1.  $\\mathbf{Ax} = \\mathbf{b}, \\mathbf{x} \\ge \\mathbf{0}$ (Primal Feasibility)
2.  $\\mathbf{A}^t\\mathbf{y} + \\boldsymbol{\\lambda} = \\mathbf{c}, \\boldsymbol{\\lambda} \\ge \\mathbf{0}$ (Dual Feasibility)
3.  $\\boldsymbol{\\lambda}^t\\mathbf{x} = 0$ (Complementary Slackness)

## 3.2 Barrier Problem and Central Path
Solving the primal problem with a logarithmic barrier minimizes $\\mathbf{c}^t\\mathbf{x} - \\mu \\sum \\ln(x_j)$. The optimality conditions for this perturbed problem are:
$$
\\begin{aligned}
\\mathbf{Ax} &= \\mathbf{b} \\\\
\\mathbf{A}^t\\mathbf{y} + \\boldsymbol{\\lambda} &= \\mathbf{c} \\\\
\\mathbf{XUe} &= \\mu\\mathbf{e} \\quad (\\text{equivalent to } \\boldsymbol{\\lambda}^t\\mathbf{x} = n\\mu)
\\end{aligned}
$$
where $\\mathbf{X} = \\text{diag}\\{x_1, \\dots, x_n\\}$ and $\\mathbf{U} = \\text{diag}\\{\\lambda_1, \\dots, \\lambda_n\\}$.
As $\\mu \\to 0$, the solution $(\\mathbf{x}, \\mathbf{y}, \\boldsymbol{\\lambda})$ approaches the optimal solution of the original problem.

## 3.3 Newton Iteration Step
To find the search direction $\\mathbf{d} = (\\mathbf{d_x}, \\mathbf{d_\\lambda}, \\mathbf{d_y})$, the method applies Newton's method to the system above:

$$
\\begin{aligned}
\\mathbf{A}\\mathbf{d_x} &= \\mathbf{0} \\\\
\\mathbf{A}^t\\mathbf{d_y} + \\mathbf{d_\\lambda} &= \\mathbf{0} \\\\
\\mathbf{U}\\mathbf{d_x} + \\mathbf{X}\\mathbf{d_\\lambda} &= \\hat{\\mu}\\mathbf{e} - \\mathbf{XUe}
\\end{aligned}
$$
where $\\hat{\\mu} = \\beta\\mu$ is the target parameter for the next step.

## 3.4 Algorithm Summary
1.  **Initialization:** Select starting strictly positive solution $\\bar{\\mathbf{w}} = (\\bar{\\mathbf{x}}, \\bar{\\boldsymbol{\\lambda}}, \\bar{\\mathbf{y}})$. Set parameters $\\theta, \\delta$, and $\\beta = 1 - \\delta/\\sqrt{n}$.
2.  **Termination:** Check duality gap $\\mathbf{c}^t\\bar{\\mathbf{x}} - \\mathbf{b}^t\\bar{\\mathbf{y}} = n\\bar{\\mu} < \\epsilon$.
3.  **Update:**
    *   Set target $\\hat{\\mu} = \\beta\\bar{\\mu}$.
    *   Compute directions $\\mathbf{d}$ using the system in 3.3.
    *   Update $\\hat{\\mathbf{w}} = \\bar{\\mathbf{w}} + \\mathbf{d}$.
    *   Repeat.`;export{t as default};
