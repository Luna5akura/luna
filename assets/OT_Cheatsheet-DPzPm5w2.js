const t=`---
category: Notes
date: '2025-12-31'
title: Optimization Theory - Cheatsheet
---

# Table of Contents
1.  **Part I: Modeling & Basics**
2.  **Part II: Mathematical Foundations & Convex Analysis**
3.  **Part III: Optimality Conditions**
4.  **Part IV: Duality Theory & Geometry**
5.  **Part V: Algorithm Theory & Unconstrained Optimization**
6.  **Part VI: Constrained Optimization Algorithms**

---

# Part I: Modeling & Basics

## 1. Four-Step Rule for Modeling
1.  **Sort out data and parameters** from the verbal description.
2.  **Define the set of decision variables**.
3.  **Formulate the objective function** using data and decision variables.
4.  **Set up equality and/or inequality constraints**.

## 2. Standard Forms & Classical Problems
### 2.1 Linear Programming Standard Form
$$
\\begin{aligned}
\\max & \\sum_{j=1}^{m} c_{j} x_{j} \\\\
\\text { s.t. } & \\sum_{j=1}^{m} a_{i j} x_{j} \\leq b_{i}, \\quad i=1, \\ldots, n \\\\
& x_{j} \\geq 0
\\end{aligned}
$$

### 2.2 Classical Model Examples
*   **Transportation Problem:** Minimize shipping costs from $M$ distribution centers to $N$ customers subject to supply and demand.
*   **Minimum-cost Network Flow:** Conservation of flow (Flow Out - Flow In = Net Supply) with arc costs.
*   **Facility Location Problem:** Decide locations $(x_i, y_i)$ and allocation $x_{ij}$. Objective typically involves non-linear Euclidean distance.
*   **Travelling Salesman Problem (TSP):** Integer variable $x_{ij} \\in \\{0,1\\}$. Key constraint: **Subtour Elimination** (e.g., $t_i - t_j + n x_{ij} \\leq n-1$).
*   **Support Vector Machine (SVM):** Maximize margin separation. Primal form minimizes $\\|\\omega\\|^2 + C \\sum \\xi_i$ (penalty for misclassification).

## 3. Stochastic Resource Allocation
Handling randomness in parameters (e.g., random profit $c$ with mean $\\bar{c}$ and covariance $V$):
*   **Mean-Variance Model:** $\\min \\mathbf{x}^t \\mathbf{V} \\mathbf{x}$ subject to expected return $\\bar{\\mathbf{c}}^t \\mathbf{x} \\geq \\bar{z}$.
*   **Maximize Probability:** $\\max P(z \\geq \\bar{z})$.
*   **Maximize Expected Utility:** If utility $u(z) = 1 - e^{-kz}$, this is equivalent to $\\max k \\bar{\\mathbf{c}}^t \\mathbf{x} - \\frac{1}{2} k^2 \\mathbf{x}^t \\mathbf{V} \\mathbf{x}$.

---

# part ii: mathematical foundations & convex analysis

## 1. topology & calculus background
### 1.1 set properties
*   **open set:** every point is an interior point.
*   **closed set:** contains all its limit points ($d = \\bar{d}$).
*   **compact set:** closed and bounded (heine-borel theorem). a continuous function on a compact set attains its minimum/maximum.

### 1.2 taylor's theorem
for a function $f \\in c^{(2)}$ (twice continuously differentiable):
$$ f(\\mathbf{x}_0 + \\mathbf{h}) = f(\\mathbf{x}_0) + \\langle \\nabla f(\\mathbf{x}_0), \\mathbf{h} \\rangle + \\frac{1}{2} \\langle \\mathbf{h}, h(\\mathbf{x}_0 + \\bar{t}\\mathbf{h}) \\mathbf{h} \\rangle $$

## 2. Convex Sets
### 2.1 Definitions
A set $C$ is convex if for any $\\mathbf{x}_1, \\mathbf{x}_2 \\in C$, the line segment $[\\mathbf{x}_1, \\mathbf{x}_2] \\subseteq C$.
*   **Convex Hull ($\\operatorname{co}(A)$):** The intersection of all convex sets containing $A$ (set of all convex combinations).
*   **Caratheodory's Theorem:** Any point in $\\operatorname{co}(A) \\subset \\mathbb{R}^n$ can be expressed as a convex combination of at most $n+1$ points from $A$.

Here is the **detailed and expanded version** of the "Separation Theorems" section. You can replace the original Section 2.2 in **Part II** with this content.

I have expanded it to specifically detail the separation between a **point and a set**, the **projection theorem**, and **supporting hyperplanes**.

***

### 2.2 Separation Theorems (Detailed)

This section deals with the geometric relationship between convex sets and points outside them. These theorems are the geometric foundation for Duality Theory and Optimality Conditions (KKT).

#### A. Projection Theorem (The Foundation)
Before separating points, we must define the "closest point."
*   **Theorem:** Let $C$ be a nonempty **closed convex** set in $\\mathbb{R}^n$ and $\\mathbf{y} \\notin C$. There exists a **unique** point $\\bar{\\mathbf{x}} \\in C$ that is closest to $\\mathbf{y}$, i.e.,
    $$ \\|\\mathbf{y} - \\bar{\\mathbf{x}}\\| \\leq \\|\\mathbf{y} - \\mathbf{x}\\|, \\quad \\forall \\mathbf{x} \\in C $$
*   **Geometric Property:** The point $\\bar{\\mathbf{x}}$ is the projection if and only if the angle between vector $(\\mathbf{y} - \\bar{\\mathbf{x}})$ and any vector inside the set starting from $\\bar{\\mathbf{x}}$ is obtuse ($\\ge 90^\\circ$):
    $$ \\langle \\mathbf{y} - \\bar{\\mathbf{x}}, \\mathbf{x} - \\bar{\\mathbf{x}} \\rangle \\leq 0, \\quad \\forall \\mathbf{x} \\in C $$

#### B. Strict Separation Theorem (Point vs. Closed Convex Set)
This is the most critical theorem for establishing strong duality.
*   **Scenario:** Let $C$ be a nonempty **closed convex** set and $\\mathbf{y} \\notin C$ (a point outside).
*   **Statement:** There exists a nonzero vector $\\mathbf{p}$ (normal vector) and a scalar $\\alpha$ such that the hyperplane $H = \\{ \\mathbf{x} : \\mathbf{p}^t \\mathbf{x} = \\alpha \\}$ strictly separates $\\mathbf{y}$ from $C$.
*   **Mathematical Form:**
    $$ \\mathbf{p}^t \\mathbf{y} > \\alpha \\quad \\text{and} \\quad \\mathbf{p}^t \\mathbf{x} < \\alpha, \\quad \\forall \\mathbf{x} \\in C $$
    *(Usually, we choose $\\mathbf{p} = \\mathbf{y} - \\bar{\\mathbf{x}}$, where $\\bar{\\mathbf{x}}$ is the projection).*

#### C. Supporting Hyperplane Theorem (Boundary Point)
*   **Scenario:** Let $C$ be a nonempty convex set and $\\bar{\\mathbf{x}} \\in \\partial C$ (a point on the **boundary**).
*   **Statement:** There exists a nonzero vector $\\mathbf{p}$ such that the hyperplane passing through $\\bar{\\mathbf{x}}$ contains all of $C$ on one side.
*   **Mathematical Form:**
    $$ \\mathbf{p}^t (\\mathbf{x} - \\bar{\\mathbf{x}}) \\leq 0, \\quad \\forall \\mathbf{x} \\in \\bar{C} $$
    *(The plane "touches" the set at $\\bar{\\mathbf{x}}$ but does not cut through the interior).*

#### D. Separation of Two Convex Sets
*   **Scenario:** Let $C_1$ and $C_2$ be nonempty convex sets such that $C_1 \\cap C_2 = \\phi$.
*   **Statement:** There exists a hyperplane that separates them.
    $$ \\mathbf{p}^t \\mathbf{x}_1 \\leq \\mathbf{p}^t \\mathbf{x}_2, \\quad \\forall \\mathbf{x}_1 \\in C_1, \\forall \\mathbf{x}_2 \\in C_2 $$
*   **Strict Separation:** If $C_1$ is **closed** and $C_2$ is **compact** (closed and bounded), they can be *strictly* separated.

#### E. Theorems of the Alternative (Algebraic Separation)
These are algebraic applications of the geometric separation theorems, used to prove conditions like KKT.

1.  **Farkas' Lemma:**
    Let $\\mathbf{A}$ be an $m \\times n$ matrix and $\\mathbf{c} \\in \\mathbb{R}^n$. Exactly **one** of the following systems has a solution:
    *   **System 1:** $\\mathbf{A} \\mathbf{x} \\leq \\mathbf{0}$ and $\\mathbf{c}^t \\mathbf{x} > 0$.
    *   **System 2:** $\\mathbf{A}^t \\mathbf{y} = \\mathbf{c}$ and $\\mathbf{y} \\geq \\mathbf{0}$.

2.  **Gordan's Lemma:**
    Exactly **one** of the following systems has a solution:
    *   **System 1:** $\\mathbf{A} \\mathbf{x} < \\mathbf{0}$.
    *   **System 2:** $\\mathbf{A}^t \\mathbf{y} = \\mathbf{0}, \\mathbf{y} \\geq \\mathbf{0}, \\mathbf{y} \\neq \\mathbf{0}$.

## 3. Convex Functions
### 3.1 Definitions & Properties
*   **Definition:** $f(\\alpha \\mathbf{x}_1 + (1-\\alpha)\\mathbf{x}_2) \\leq \\alpha f(\\mathbf{x}_1) + (1-\\alpha)f(\\mathbf{x}_2)$.
*   **Epigraph:** $\\operatorname{epi}(f)$ is a convex set if and only if $f$ is a convex function.
*   **Jensen's Inequality:** $f(\\sum \\lambda_i \\mathbf{x}_i) \\leq \\sum \\lambda_i f(\\mathbf{x}_i)$.

### 3.2 Discriminant Theorems
*   **First Order:** $f(\\mathbf{x}) \\geq f(\\mathbf{x}_0) + \\langle \\nabla f(\\mathbf{x}_0), \\mathbf{x} - \\mathbf{x}_0 \\rangle$.
*   **Second Order:** $f$ is convex if and only if the Hessian matrix $H(\\mathbf{x})$ is **Positive Semidefinite (PSD)** everywhere. If $H(\\mathbf{x})$ is Positive Definite, $f$ is strictly convex.

---

# Part III: Optimality Conditions

## 1. Unconstrained Optimization
### 1.1 Necessary Conditions
*   **First Order:** If $\\mathbf{x}^*$ is a local minimizer, $\\nabla f(\\mathbf{x}^*) = \\mathbf{0}$ (Critical Point).
*   **Second Order:** $H(\\mathbf{x}^*)$ must be Positive Semidefinite.

### 1.2 Sufficient Conditions
If $\\nabla f(\\mathbf{x}^*) = \\mathbf{0}$ AND $H(\\mathbf{x}^*)$ is **Positive Definite**, then $\\mathbf{x}^*$ is a strict local minimizer.

## 2. Constrained Optimization
Problem: $\\min f(\\mathbf{x})$ s.t. $\\mathbf{g}(\\mathbf{x}) \\leq \\mathbf{0}, \\mathbf{h}(\\mathbf{x}) = \\mathbf{0}$.

### 2.1 Fritz John Conditions (FJ)
Necessary condition where the multiplier for the objective function ($\\lambda_0$) can be 0 (degenerate case).
$\\lambda_0 \\nabla f + \\boldsymbol{\\lambda}^t \\nabla \\mathbf{g} + \\boldsymbol{\\mu}^t \\nabla \\mathbf{h} = \\mathbf{0}$.

### 2.2 Karush-Kuhn-Tucker Conditions (KKT)
Requires a **Constraint Qualification (CQ)** (e.g., Linear Independence CQ - LICQ) to ensure $\\lambda_0 > 0$.
*   **Stationarity:** $\\nabla f(\\mathbf{x}^*) + \\boldsymbol{\\lambda}^t \\nabla \\mathbf{g}(\\mathbf{x}^*) + \\boldsymbol{\\mu}^t \\nabla \\mathbf{h}(\\mathbf{x}^*) = \\mathbf{0}$.
*   **Complementary Slackness:** $\\lambda_i g_i(\\mathbf{x}^*) = 0, \\forall i$.
*   **Feasibility:** $\\mathbf{g}(\\mathbf{x}^*) \\leq \\mathbf{0}, \\mathbf{h}(\\mathbf{x}^*) = \\mathbf{0}, \\boldsymbol{\\lambda} \\geq \\mathbf{0}$.

### 2.3 Convex Programming
*   For convex problems, any local minimizer is a **global minimizer**.
*   If the objective is strictly convex, the global minimizer is unique.
*   KKT conditions are **sufficient** for optimality in convex problems (with affine equality constraints).

---

# Part IV: Duality Theory & Geometry

## 1. Linear Programming Duality
*   **Primal (P):** $\\min \\mathbf{c}^t \\mathbf{x}$ s.t. $\\mathbf{Ax} \\geq \\mathbf{b}, \\mathbf{x} \\geq \\mathbf{0}$.
*   **Dual (D):** $\\max \\mathbf{b}^t \\mathbf{y}$ s.t. $\\mathbf{A}^t \\mathbf{y} \\leq \\mathbf{c}, \\mathbf{y} \\geq \\mathbf{0}$.
*   **Strong Duality Theorem:** If the Primal has an optimal solution, the Dual has an optimal solution, and their objective values are equal.

## 2. Lagrangian Duality (General)
*   **Dual Function:** $\\theta(\\boldsymbol{\\lambda}, \\boldsymbol{\\mu}) = \\inf_{\\mathbf{x}} L(\\mathbf{x}, \\boldsymbol{\\lambda}, \\boldsymbol{\\mu})$.
*   **Weak Duality:** $\\max \\theta \\leq \\min f$ (Always holds).
*   **Strong Duality:** For convex problems, if **Slater's Condition** holds (existence of a strictly feasible point), the duality gap is zero ($\\max \\theta = \\min f$).

## 3. Geometry of LP
*   **Extreme Point:** A point in a set that cannot be written as a strict convex combination of two distinct points in the set.
*   **Extreme Direction:** A direction of an unbounded set that cannot be written as a strict positive combination of two distinct directions.
*   **Representation Theorem:** Any point in a polyhedral set is a convex combination of extreme points plus a non-negative combination of extreme directions.
*   **Optimality Theorem:** If an LP has a finite optimal solution, it has an optimal solution at an **extreme point**.

---

# Part V: Algorithm Theory & Unconstrained Optimization

## 1. Algorithm Theory
*   **Algorithmic Map:** $\\mathbf{x}_{k+1} \\in \\mathbf{A}(\\mathbf{x}_k)$.
*   **Closed Map:** Preserves limits ($\\mathbf{x}_k \\to \\mathbf{x}, \\mathbf{y}_k \\to \\mathbf{y}, \\mathbf{y}_k \\in \\mathbf{A}(\\mathbf{x}_k) \\implies \\mathbf{y} \\in \\mathbf{A}(\\mathbf{x})$).
*   **Global Convergence Theorem:** An algorithm converges to the solution set $\\Omega$ if:
    1.  The sequence lies in a compact set.
    2.  There exists a continuous **descent function**.
    3.  The map is **closed** outside $\\Omega$.

## 2. Line Search Methods
Goal: Find $\\lambda$ to minimize $f(\\mathbf{x}_k + \\lambda \\mathbf{d}_k)$.
*   **Derivative-Free:** Golden Section Search (reduction ratio $\\approx 0.618$), Fibonacci Search.
*   **Derivative-Based:** Bisection Method, Newton’s Method (uses $\\theta'(\\lambda)$ and $\\theta''(\\lambda)$).

## 3. Multidimensional Search
### 3.1 Derivative-Free
*   **Cyclic Coordinate Method:** Search along axes $\\mathbf{d}_1, \\dots, \\mathbf{d}_n$ cyclically.
*   **Hooke and Jeeves:** Incorporates a "Pattern Search" step (acceleration along $\\mathbf{x}_{k+1} - \\mathbf{x}_k$).

### 3.2 Gradient Methods (First Order)
*   **Steepest Descent:** Direction $\\mathbf{d}_k = -\\nabla f(\\mathbf{x}_k)$. Converges linearly; susceptible to zig-zagging in narrow valleys.

### 3.3 Newton Methods (Second Order)
*   **Newton's Method:** $\\mathbf{x}_{k+1} = \\mathbf{x}_k - [H(\\mathbf{x}_k)]^{-1} \\nabla f(\\mathbf{x}_k)$.
    *   Uses 2nd-order Taylor approximation.
    *   **Quadratic Convergence** near the solution.
    *   Requires positive definite Hessian.

### 3.4 Conjugate Direction Methods
*   **Concept:** Directions $\\mathbf{d}_i$ are $\\mathbf{H}$-conjugate if $\\mathbf{d}_i^t \\mathbf{H} \\mathbf{d}_j = 0$. Minimizing a quadratic function along $n$ conjugate directions finds the minimum in $n$ steps.
*   **Conjugate Gradient (CG):** Generates conjugate directions using gradients without storing the Hessian.
*   **Quasi-Newton (DFP/BFGS):** Updates an approximation of the inverse Hessian ($\\mathbf{D}_k$) iteratively. $\\mathbf{d}_k = -\\mathbf{D}_k \\nabla f_k$.

---

# Part VI: Constrained Optimization Algorithms

## 1. Penalty Function Methods
*   **Exterior Point Method:** Adds a penalty term for violating constraints.
*   Form: $\\min f(\\mathbf{x}) + \\mu \\alpha(\\mathbf{x})$.
    *   $\\alpha(\\mathbf{x}) = 0$ if feasible, $>0$ if infeasible.
*   As $\\mu \\to \\infty$, the sequence of solutions approaches the optimum from the **infeasible** region.

## 2. Barrier Function Methods
*   **Interior Point Method:** Adds a barrier term to prevent leaving the feasible region.
*   Form: $\\min f(\\mathbf{x}) + \\mu B(\\mathbf{x})$.
    *   Logarithmic Barrier: $B(\\mathbf{x}) = -\\sum \\ln(-g_i(\\mathbf{x}))$.
*   As $\\mu \\to 0$, the sequence approaches the optimum from the **feasible** interior.

## 3. Primal-Dual Interior Point Method
*   **Concept:** Solves for primal variables $\\mathbf{x}$ and dual multipliers $\\boldsymbol{\\lambda}, \\mathbf{y}$ simultaneously.
*   **Central Path:** The trajectory of solutions satisfying the perturbed KKT conditions ($\\mathbf{X}\\boldsymbol{\\lambda} = \\mu \\mathbf{e}$).
*   **Newton Step:** Applies Newton's method to the system of non-linear equations derived from KKT conditions.
*   **Performance:** Highly efficient; the standard for modern large-scale convex and linear programming.`;export{t as default};
