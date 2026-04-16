const t=`---
category: Notes
date: '2025-12-22'
title: Optimization Theory - Week 8
---

# 1 Multidimensional Search without Using Derivatives

## 1.1 Cyclic Coordinate Method

**Algorithm Steps:**
1.  **Initialization:** Choose a scalar $\\epsilon > 0$ for termination and let $\\mathbf{d}_1, \\ldots, \\mathbf{d}_n$ be coordinate directions. Choose initial point $\\mathbf{x}_1$, let $\\mathbf{y}_1 = \\mathbf{x}_1$, let $k=j=1$.
2.  **Main Step:**
    *   Let $\\lambda_j$ be an optimal solution to minimize $f(\\mathbf{y}_j + \\lambda \\mathbf{d}_j)$ subject to $\\lambda \\in \\mathbb{R}$.
    *   Update $\\mathbf{y}_{j+1} = \\mathbf{y}_j + \\lambda_j \\mathbf{d}_j$.
    *   If $j < n$, increment $j$ and repeat. If $j=n$, proceed to convergence check.
3.  **Convergence Check:** Let $\\mathbf{x}_{k+1} = \\mathbf{y}_{n+1}$. If $\\|\\mathbf{x}_{k+1} - \\mathbf{x}_k\\| < \\epsilon$, stop. Otherwise, set $\\mathbf{y}_1 = \\mathbf{x}_{k+1}$, reset $j=1$, increment $k$, and repeat.

**Convergence:**
Assume the level set $\\Lambda = \\{\\mathbf{x} : f(\\mathbf{x}) \\leq f(\\mathbf{x}_1)\\}$ is compact and the minimum of $f$ along any line is unique. If $\\Omega = \\{\\mathbf{x} : \\nabla f(\\mathbf{x}) = \\mathbf{0}\\}$, then the algorithm converges based on the Convergence Theorem.

## 1.2 The Method of Hooke and Jeeves

**Algorithm Steps:**
1.  **Cyclic Search:** Perform coordinate searches to move from $\\mathbf{y}_1$ (which is $\\mathbf{x}_k$) to $\\mathbf{y}_{n+1}$ (which becomes $\\mathbf{x}_{k+1}$).
2.  **Pattern Search Step:** Let $\\mathbf{d} = \\mathbf{x}_{k+1} - \\mathbf{x}_k$. Let $\\hat{\\lambda}$ be the optimal solution to minimize $f(\\mathbf{x}_{k+1} + \\lambda \\mathbf{d})$.
3.  **Update:** Set $\\mathbf{y}_1 = \\mathbf{x}_{k+1} + \\hat{\\lambda}\\mathbf{d}$, reset $j=1$, increment $k$, and repeat.

# 2 Multidimensional Search Using Derivatives

## 2.1 The Method of Steepest Descent

**Definition 1 (Direction of Descent):**
A vector $\\mathbf{d}$ is a direction of descent of $f$ at $\\mathbf{x}$ if there exists $\\delta > 0$ such that $f(\\mathbf{x} + \\lambda \\mathbf{d}) < f(\\mathbf{x})$ for all $\\lambda \\in (0, \\delta)$. If $\\nabla f(\\mathbf{x})^t \\mathbf{d} < 0$, then $\\mathbf{d}$ is a direction of descent.

**Lemma 1.1:**
Suppose $f$ is differentiable at $\\mathbf{x}$ and $\\nabla f(\\mathbf{x}) \\neq \\mathbf{0}$. The direction of steepest descent is given by:
$
\\bar{\\mathbf{d}} = -\\frac{\\nabla f(\\mathbf{x})}{\\|\\nabla f(\\mathbf{x})\\|}
$

**Algorithm Summary:**
Given $\\mathbf{x}_k$, perform a line search along $\\mathbf{d}_k = -\\nabla f(\\mathbf{x}_k)$.
$
\\mathbf{x}_{k+1} = \\mathbf{x}_k + \\lambda_k \\mathbf{d}_k
$
where $\\lambda_k$ minimizes $f(\\mathbf{x}_k + \\lambda \\mathbf{d}_k)$ for $\\lambda \\geq 0$.

## 2.2 Convergence Theorem (Theorem 1.1)

Let $X$ be a closed set and $\\Omega \\subset X$ be the solution set. Let $\\mathbf{A}: X \\to X$ be a point-to-set map. If the sequence $\\{\\mathbf{x}_k\\}$ is contained in a compact subset, and there exists a continuous descent function $\\alpha$ such that $\\alpha(\\mathbf{y}) < \\alpha(\\mathbf{x})$ if $\\mathbf{x} \\notin \\Omega$ and $\\mathbf{y} \\in \\mathbf{A}(\\mathbf{x})$, and map $\\mathbf{A}$ is closed over the complement of $\\Omega$, then:
*   Every convergent subsequence of $\\{\\mathbf{x}_k\\}$ has a limit in $\\Omega$.
*   $\\alpha(\\mathbf{x}_k) \\to \\alpha(\\mathbf{x})$ for some $\\mathbf{x} \\in \\Omega$.

## 2.3 The Method of Newton

**Second Order Approximation:**
$
f(\\mathbf{x}) \\approx q(\\mathbf{x}) = f(\\mathbf{x}_k) + \\nabla f(\\mathbf{x}_k)^t (\\mathbf{x} - \\mathbf{x}_k) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{x}_k)^t \\mathbf{H}(\\mathbf{x}_k)(\\mathbf{x} - \\mathbf{x}_k)
$
where $\\mathbf{H}(\\mathbf{x}_k)$ is the Hessian matrix.

**Algorithm:**
$
\\mathbf{x}_{k+1} = \\mathbf{x}_k - \\mathbf{H}(\\mathbf{x}_k)^{-1}\\nabla f(\\mathbf{x}_k)
$

**Theorem 1.2 (Convergence):**
Let $f$ be twice continuously differentiable. If the starting point $\\mathbf{x}_1$ is sufficiently close to a local minimum $\\bar{\\mathbf{x}}$ where $\\mathbf{H}(\\bar{\\mathbf{x}})$ is positive definite, the algorithm converges to $\\bar{\\mathbf{x}}$.

**Modification:**
To ensure global convergence when away from the solution, use direction $\\mathbf{d} = -(\\epsilon \\mathbf{I} + \\mathbf{H})^{-1}\\nabla f(\\mathbf{x})$ where $\\epsilon$ is chosen to make the matrix positive definite.

# 3 Methods Using Conjugate Directions

## 3.1 Definition and Basic Properties

**Definition 3 (Conjugate Directions):**
Let $\\mathbf{H}$ be an $n \\times n$ symmetric matrix. The vectors $\\mathbf{d}_1, \\ldots, \\mathbf{d}_k$ are called $\\mathbf{H}$-conjugate if they are linearly independent and:
$
\\mathbf{d}_i^t \\mathbf{H} \\mathbf{d}_j = 0 \\quad \\text{for } i \\neq j
$

**Theorem 1.3 (Finite Convergence):**
Let $f(\\mathbf{x}) = \\mathbf{c}^t \\mathbf{x} + \\frac{1}{2}\\mathbf{x}^t \\mathbf{H} \\mathbf{x}$. If $\\mathbf{d}_1, \\ldots, \\mathbf{d}_n$ are $\\mathbf{H}$-conjugate, minimizing sequentially along these directions leads to the optimal solution $\\mathbf{x}_{n+1}$ in at most $n$ steps. Specifically:
1.  $\\nabla f(\\mathbf{x}_{k+1})^t \\mathbf{d}_j = 0$ for $j=1, \\ldots, k$.
2.  $\\mathbf{x}_{k+1}$ is optimal over the subspace spanned by $\\mathbf{d}_1, \\ldots, \\mathbf{d}_k$.

## 3.2 Conjugate Gradient Method

**Direction Construction:**
$
\\mathbf{d}_{j+1} = -\\nabla f(\\mathbf{y}_{j+1}) + \\beta_j \\mathbf{d}_j
$
where
$
\\beta_j = \\frac{\\|\\nabla f(\\mathbf{y}_{j+1})\\|^2}{\\|\\nabla f(\\mathbf{y}_j)\\|^2}
$

**Theorem 1.4:**
If applied to a quadratic function with positive definite $\\mathbf{H}$:
1.  $\\mathbf{d}_1, \\ldots, \\mathbf{d}_n$ are $\\mathbf{H}$-conjugate.
2.  $\\mathbf{d}_1, \\ldots, \\mathbf{d}_n$ are descent directions ($\\nabla f(\\mathbf{y}_j)^t \\mathbf{d}_j < 0$).
3.  Gradients are orthogonal: $\\nabla f(\\mathbf{y}_j)^t \\nabla f(\\mathbf{y}_i) = 0$ for $i < j$.

## 3.3 Davidon-Fletcher-Powell (DFP) Method

**Algorithm:**
A quasi-Newton method that updates an approximate inverse Hessian matrix $\\mathbf{D}$.
1.  **Direction:** $\\mathbf{d}_j = -\\mathbf{D}_j \\nabla f(\\mathbf{y}_j)$.
2.  **Update Formula:**
$
\\mathbf{D}_{j+1} = \\mathbf{D}_j + \\frac{\\mathbf{p}_j \\mathbf{p}_j^t}{\\mathbf{p}_j^t \\mathbf{q}_j} - \\frac{\\mathbf{D}_j \\mathbf{q}_j \\mathbf{q}_j^t \\mathbf{D}_j}{\\mathbf{q}_j^t \\mathbf{D}_j \\mathbf{q}_j}
$
where $\\mathbf{p}_j = \\lambda_j \\mathbf{d}_j$ and $\\mathbf{q}_j = \\nabla f(\\mathbf{y}_{j+1}) - \\nabla f(\\mathbf{y}_j)$.

**Lemma 1.2:**
If $\\mathbf{D}_1$ is symmetric positive definite, then all generated matrices $\\mathbf{D}_j$ are symmetric positive definite, ensuring descent directions.

**Theorem 1.5:**
For a quadratic function with positive definite $\\mathbf{H}$, the DFP method generates $\\mathbf{H}$-conjugate directions and $\\mathbf{D}_{n+1} = \\mathbf{H}^{-1}$.

## 3.4 Convergence of Algorithms with Composite Maps

**Theorem 1.6:**
Consider an algorithm defined by composite map $\\mathbf{A} = \\mathbf{CB}$. It converges to the solution set $\\Omega$ if:
1.  $\\mathbf{B}$ is closed at points not in $\\Omega$.
2.  If $\\mathbf{y} \\in \\mathbf{B}(\\mathbf{x})$, then $f(\\mathbf{y}) < f(\\mathbf{x})$ for $\\mathbf{x} \\notin \\Omega$.
3.  If $\\mathbf{z} \\in \\mathbf{C}(\\mathbf{y})$, then $f(\\mathbf{z}) \\leq f(\\mathbf{y})$.
4.  The level set $\\Lambda = \\{\\mathbf{x} : f(\\mathbf{x}) \\leq f(\\mathbf{x}_1)\\}$ is compact.`;export{t as default};
