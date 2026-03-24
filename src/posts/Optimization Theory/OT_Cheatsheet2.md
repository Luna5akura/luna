---
category: Notes
date: '2025-12-31'
title: Optimization Theory - Cheatsheet
---

# Part III: Linear Programming Duality & Simplex Geometry

## 1. Lagrangian Duality for LP (Review)
*(Slides 3-6)*

### 1.1 Primal and Dual Formulation
对于标准形式的线性规划，利用拉格朗日函数导出对偶问题。

*   **Primal Problem (P):**
    $$ \text{minimize } z = \mathbf{c}^T \mathbf{x} $$
    $$ \text{subject to } \mathbf{Ax} \ge \mathbf{b}, \quad \mathbf{x} \ge 0 $$

*   **Lagrangian Function:**
    $$ L(\mathbf{x}, \mathbf{y}, \boldsymbol{\lambda}) = \mathbf{c}^T\mathbf{x} + \mathbf{y}^T(\mathbf{b} - \mathbf{Ax}) + \boldsymbol{\lambda}^T(-\mathbf{x}) = (\mathbf{c} - \mathbf{A}^T\mathbf{y} - \boldsymbol{\lambda})^T\mathbf{x} + \mathbf{y}^T\mathbf{b} $$

*   **Dual Problem (D):**
    $$ \text{maximize } Z = \mathbf{b}^T \mathbf{y} $$
    $$ \text{subject to } \mathbf{A}^T\mathbf{y} + \boldsymbol{\lambda} = \mathbf{c}, \quad \mathbf{y}, \boldsymbol{\lambda} \ge 0 $$
    *(注：约束 $\mathbf{A}^T\mathbf{y} + \boldsymbol{\lambda} = \mathbf{c}$ 且 $\boldsymbol{\lambda} \ge 0$ 等价于 $\mathbf{A}^T\mathbf{y} \le \mathbf{c}$)*

### 1.2 Duality Theorems (核心考点)
1.  **Weak Duality (弱对偶):** 对任意可行解 $\mathbf{x} \in X, \mathbf{y} \in Y$，有 $\langle \mathbf{b}, \mathbf{y} \rangle \le \langle \mathbf{c}, \mathbf{x} \rangle$。
    *   *推论：*如果你找到一个 primal 的可行解和一个 dual 的可行解，且它们的目标函数值相等，那么它们分别是各自的最优解。
2.  **Strong Duality (强对偶):** 如果原问题有最优解 $\mathbf{x}^*$，则对偶问题也有最优解 $\mathbf{y}^*$，且 $\mathbf{c}^T\mathbf{x}^* = \mathbf{b}^T\mathbf{y}^*$。
3.  **Infeasible/Unbounded Relationships (关系表):**
    *   P 可行且有界 $\iff$ D 可行且有界。
    *   P 无界 $\implies$ D 不可行。
    *   D 无界 $\implies$ P 不可行。
    *   **注意：** P 和 D 可能同时不可行（Slide 6 给出了反例）。

---

### 💡 如何使用 / 典型例题 (Duality)

**考题类型：** 给出原问题，写出对偶问题；或利用对偶理论判断解的性质。

**例题 1：写出对偶问题**
给定 $P: \min 3x_1 + 2x_2$ s.t. $x_1 + x_2 \ge 4, 2x_1 - x_2 \ge 2, x \ge 0$。
*   **解题步骤：**
    1.  对应 $\mathbf{c} = [3, 2]^T, \mathbf{b} = [4, 2]^T$。
    2.  $\mathbf{A} = \begin{pmatrix} 1 & 1 \\ 2 & -1 \end{pmatrix}$。
    3.  对偶变量 $\mathbf{y} = [y_1, y_2]^T$。
    4.  目标函数变 Maximize $\mathbf{b}^T \mathbf{y} = 4y_1 + 2y_2$。
    5.  约束变 $\mathbf{A}^T \mathbf{y} \le \mathbf{c} \implies \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} \le \begin{pmatrix} 3 \\ 2 \end{pmatrix}$。
    6.  加上 $y \ge 0$。

---

## 2. Geometry of Polyhedra: Extreme Points (极点)
*(Slides 8-10)*

这是单纯形法的几何定义。单纯形法本质上是在多面体的“极点”之间移动。

### 2.1 Definition & Properties
*   **几何定义：** 点 $\mathbf{x} \in D$ 是极点，如果它不能被写成 $D$ 中另外两个不同点的**严格凸组合**。
    *   即：若 $\mathbf{x} = \lambda \mathbf{x}_1 + (1-\lambda)\mathbf{x}_2$ 且 $\lambda \in (0,1)$，则必须有 $\mathbf{x} = \mathbf{x}_1 = \mathbf{x}_2$。
*   **代数定义 (Rank Condition - 重要判据):**
    对于集合 $S = \{\mathbf{x} : \mathbf{Ax} \le \mathbf{b}, \mathbf{x} \ge 0\}$，定义 $\tilde{\mathbf{A}} = (\mathbf{A}^T, -\mathbf{I})^T$。
    点 $\mathbf{x}$ 是极点 $\iff$ 在 $\mathbf{x}$ 处**起作用的约束 (Binding Constraints)** 对应的法向量线性无关，且秩为 $n$（变量个数）。
    *   公式：$\text{rank}(\tilde{\mathbf{A}}_E) = n$，其中 $E$ 是起作用约束的下标集合。

### 2.2 Existence
*   如果 $S \neq \emptyset$ 且包含直线不包含直线（通常 $x \ge 0$ 保证了这点），则极点集 $E_p$ 非空且有限。

---

### 💡 如何使用 / 典型例题 (Extreme Points)

**考题类型：** 给定一个多面体，找出所有的极点；或证明某点是极点。

**例题 2：寻找极点**
考虑集合 $S = \{ (x_1, x_2) \mid x_1 + x_2 \le 2, x_1 \ge 0, x_2 \ge 0 \}$。
*   **解题步骤：**
    1.  **列出所有约束：**
        (1) $x_1 + x_2 \le 2$
        (2) $x_1 \ge 0 \implies -x_1 \le 0$
        (3) $x_2 \ge 0 \implies -x_2 \le 0$
    2.  **寻找 $n=2$ 个线性无关约束的交点（Basic Solutions）：**
        *   **Case A (约束 2 & 3 binding):** $x_1=0, x_2=0$。
            *   代入点 $(0,0)$。
            *   检查可行性：$0+0 \le 2$ (满足)。
            *   秩检查：法向量 $(-1, 0)$ 和 $(0, -1)$ 线性无关，Rank=2。
            *   $\implies$ **极点 1: (0,0)**。
        *   **Case B (约束 1 & 2 binding):** $x_1+x_2=2, x_1=0 \implies x_2=2$。
            *   代入点 $(0,2)$。
            *   检查可行性：$x_2 \ge 0$ (满足)。
            *   Rank=2。
            *   $\implies$ **极点 2: (0,2)**。
        *   **Case C (约束 1 & 3 binding):** $x_1+x_2=2, x_2=0 \implies x_1=2$。
            *   代入点 $(2,0)$。
            *   检查可行性：$x_1 \ge 0$ (满足)。
            *   $\implies$ **极点 3: (2,0)**。

---

## 3. Directions & Extreme Directions (方向与极方向)
*(Slides 11-13)*

当可行域无界时，我们需要考虑“方向”。

### 3.1 Definition
*   **Direction (方向):** 非零向量 $\mathbf{d}$ 是方向，如果对于任意 $\mathbf{x} \in S$ 和 $\lambda \ge 0$，都有 $\mathbf{x} + \lambda \mathbf{d} \in S$。
*   **Algebraic Condition:** 对于 $S = \{\mathbf{x} : \mathbf{Ax} \le \mathbf{b}, \mathbf{x} \ge 0\}$，$\mathbf{d}$ 是方向 $\iff \mathbf{Ad} \le 0, \mathbf{d} \ge 0, \mathbf{d} \neq 0$。
*   **Extreme Direction (极方向):** 不能被写成该集合另外两个不同方向的严格凸组合。
    *   实际上是齐次系统 $\{\mathbf{d} : \mathbf{Ad} \le 0, \mathbf{d} \ge 0, \mathbf{e}^T\mathbf{d}=1\}$ 的极点。

### 3.2 Existence
*   $S$ 无界 $\iff$ $S$ 的极方向集合 $E_d$ 非空。

---

## 4. Representation Theorem (表示定理 - 核心理论)
*(Slides 15-19)*

**定理 5.9：** 凸多面体 $S$ 中的任意一点 $\mathbf{x}$ 都可以表示为：
$$ \mathbf{x} = \sum_{i=1}^u \alpha_i \mathbf{x}_i + \sum_{j=1}^v \lambda_j \mathbf{d}_j $$
*   **第一部分（凸组合）：** $\sum \alpha_i \mathbf{x}_i$，其中 $\mathbf{x}_i$ 是极点，$\sum \alpha_i = 1, \alpha_i \ge 0$。
*   **第二部分（非负组合）：** $\sum \lambda_j \mathbf{d}_j$，其中 $\mathbf{d}_j$ 是极方向，$\lambda_j \ge 0$。

**直观理解：**
*   如果有界多面体（多胞形）：$\mathbf{x}$ 只是极点的凸组合。
*   如果无界：$\mathbf{x}$ 是极点的凸组合加上往无穷远处延伸的方向。

---

## 5. Optimality Conditions (最优性条件)
*(Slides 21-22)*

这是单纯形法只在顶点搜索的理论依据。

### 5.1 Theorem 5.10 (General Case)
考虑 LP: $\min \mathbf{c}^T \mathbf{x}$ subject to $\mathbf{x} \in S$。
1.  **Finite Optimum Check:** 最优值有限（不会是 $-\infty$）$\iff$ 对于所有的极方向 $\mathbf{d}_j \in E_d$，都有 $\mathbf{c}^T \mathbf{d}_j \ge 0$。（即：沿任何无界方向走，目标函数都不会无限减小）。
2.  **Existence:** 如果存在有限最优解，则一定存在一个**极点最优解 (Extreme-point optimal solution)**。

### 5.2 Corollary 5.11 (Bounded Case)
如果 $S$ 是有界的（没有极方向），且 $S \neq \emptyset$，则最优解一定存在，且必可在某个极点处取到。

---

### 💡 综合考题预测 (Exam Application)

**场景：** 考试中可能会问“为什么我们只需要检查极点就能找到最优解？”或者让你用定理证明某件事。

**解题逻辑：**
1.  根据**表示定理**，任意可行解 $x$ 都是极点 $x_i$ 的凸组合加上极方向 $d_j$ 的非负组合：
    $$ x = \sum \alpha_i x_i + \sum \beta_j d_j $$
2.  代入目标函数 $c^T x$：
    $$ c^T x = \sum \alpha_i (c^T x_i) + \sum \beta_j (c^T d_j) $$
3.  如果存在某个 $d_j$ 使得 $c^T d_j < 0$，我们可以让对应的 $\beta_j \to \infty$，目标函数值趋向 $-\infty$（无界解）。
4.  如果所有 $c^T d_j \ge 0$，为了最小化 $z$，我们应设所有 $\beta_j = 0$。
5.  剩下 $c^T x = \sum \alpha_i (c^T x_i)$。因为 $\sum \alpha_i = 1$，这本质上是 $c^T x_i$ 的加权平均。
6.  加权平均的最小值一定小于等于其中的最小值。即 $c^T x \ge \min_k (c^T x_k)$。
7.  因此，最优解一定在某个极点 $x_k$ 处取得。

---

# Part IV: Algorithm Theory & Line Search

## 1. Concept of Algorithm & Convergence Theory
*(Slides 4-13)*

### 1.1 Algorithmic Map (算法映射)
算法被视为一个迭代过程：$\mathbf{x}_{k+1} \in \mathbf{A}(\mathbf{x}_k)$。
*   **Point-to-Set Map:** 一个点 $\mathbf{x}$ 可能映射到一个集合（例如，有多个下降方向可选）。
*   **Solution Set ($\Omega$):** 算法停止的目标集合（例如 $\nabla f(\mathbf{x}) = 0$ 的点集）。

### 1.2 Closed Map (闭映射 - 核心概念)
这是证明算法收敛的关键性质。
*   **定义 (Slide 9):** 如果 $\mathbf{x}_k \to \mathbf{x}$ 且 $\mathbf{y}_k \in \mathbf{A}(\mathbf{x}_k)$ 且 $\mathbf{y}_k \to \mathbf{y}$，能推出 $\mathbf{y} \in \mathbf{A}(\mathbf{x})$，则 $\mathbf{A}$ 是闭的。
*   **直观理解:** 类似于函数的“连续性”，但在点对集映射中称为“闭性”。
*   **关键性质:**
    *   连续函数 $\implies$ 闭映射。
    *   闭映射 $\nRightarrow$ 连续函数 (见 Slide 9 的 $1/x$ 例子)。
    *   **复合映射定理 (Slide 10):** 如果 $\mathbf{B}$ 在 $\mathbf{x}$ 处闭，$\mathbf{C}$ 在 $\mathbf{B}(\mathbf{x})$ 处闭，则 $\mathbf{A} = \mathbf{CB}$ 也是闭的。

### 1.3 Zangwill's Global Convergence Theorem (收敛定理 - 必背条件)
*(Theorem 1.2, Slide 11)*
如果一个算法满足以下三个条件，则它产生的序列收敛到解集 $\Omega$：
1.  **Compactness:** 序列 $\{\mathbf{x}_k\}$ 位于紧致集（有界闭集）内。
2.  **Descent Function:** 存在连续下降函数 $\alpha$（通常是目标函数 $f$），使得若 $\mathbf{x} \notin \Omega$，则 $\alpha(\mathbf{y}) < \alpha(\mathbf{x})$ 对所有 $\mathbf{y} \in \mathbf{A}(\mathbf{x})$ 成立。
3.  **Closed Map:** 算法映射 $\mathbf{A}$ 在解集 $\Omega$ 的补集上是闭的。

---

### 💡 典型例题 (Theory)

**考题类型：** 给定一个算法映射，判断它是否收敛，或者判断映射是否是闭的。

**例题 1：判断闭映射**
设 $X = [0, \infty)$，考虑映射 $\mathbf{A}(x)$：
$$ \mathbf{A}(x) = \begin{cases} \frac{1}{2}x + 1 & x > 0 \\ \{0\} & x = 0 \end{cases} $$
判断 $\mathbf{A}$ 在 $x=0$ 处是否是闭的？

*   **解答：**
    1.  取一个序列 $x_k \to 0$（例如 $x_k = 1/k$）。
    2.  计算 $y_k \in \mathbf{A}(x_k)$。当 $x_k > 0$ 时，$y_k = \frac{1}{2}(1/k) + 1$。
    3.  计算序列 $y_k$ 的极限：$y_k \to 1$。即 $y = 1$。
    4.  检查极限点 $y$ 是否在 $\mathbf{A}(0)$ 中。
        *   $\mathbf{A}(0) = \{0\}$。
        *   显然 $1 \notin \{0\}$。
    5.  **结论：** 该映射在 $x=0$ 处**不是**闭的。这意味着如果最优解在 $0$，该算法可能无法收敛到那里。

---

## 2. Order of Convergence (收敛阶)
*(Slide 16)*

衡量算法收敛快慢的标准。对于收敛序列 $r_k \to \bar{r}$：
$$ \lim_{k \to \infty} \frac{|r_{k+1} - \bar{r}|}{|r_k - \bar{r}|^p} = \beta $$

*   **Linear Convergence (线性收敛):** $p=1, 0 < \beta < 1$。 (如：二分法，梯度下降法)
*   **Superlinear Convergence (超线性收敛):** $p > 1$ 或 $p=1, \beta=0$。 (如：牛顿法 $p=2$，拟牛顿法)
    *   $p=2$ 称为 **Quadratic Convergence (二阶收敛)**，速度极快。

---

## 3. Line Search Methods (一维搜索)
*(Slides 20-25)*

**问题：** 给定当前点 $\mathbf{x}_k$ 和方向 $\mathbf{d}_k$，寻找步长 $\lambda$ 以最小化 $\theta(\lambda) = f(\mathbf{x}_k + \lambda \mathbf{d}_k)$。

### 3.1 Interval of Uncertainty (不确定区间)
*   **原理：** 假设 $\theta(\lambda)$ 是单峰（Unimodal）/ 凸的。如果 $\lambda_1 < \lambda_2$ 且 $\theta(\lambda_1) < \theta(\lambda_2)$，则最小值一定在 $\lambda_2$ 左侧，区间变为 $[a, \lambda_2]$。

### 3.2 Golden Section Method (0.618法 - 重点计算)
不需要导数，通过不断缩小区间 $[a, b]$ 来逼近最小值。
*   **比例因子:** $\alpha \approx 0.618$ (准确值 $\frac{\sqrt{5}-1}{2}$)。
*   **试探点:**
    *   $\lambda_1 = a + (1-\alpha)(b-a)$
    *   $\mu_1 = a + \alpha(b-a)$
*   **迭代逻辑:**
    *   若 $\theta(\lambda_1) < \theta(\mu_1)$: 新区间 $[a, \mu_1]$。
    *   若 $\theta(\lambda_1) > \theta(\mu_1)$: 新区间 $[\lambda_1, b]$。
*   **收敛速度:** 线性收敛，每次区间缩小为原来的 $0.618$。

### 3.3 Newton's Method (牛顿法)
需要一阶和二阶导数 ($\theta', \theta''$)。
*   **公式:** 利用二次泰勒展开近似。
    $$ \lambda_{new} = \lambda_{old} - \frac{\theta'(\lambda_{old})}{\theta''(\lambda_{old})} $$
*   **收敛速度:** 二阶收敛 (Quadratic)，但要求初始点离最优解足够近且 $\theta'' > 0$。

---

### 💡 典型例题 (Calculation)

**例题 2：Golden Section Method (0.618法)**
最小化 $\theta(\lambda) = \lambda^2 - 2\lambda$ 在初始区间 $[0, 2]$ 上。进行一步迭代。
(已知 $\alpha \approx 0.618, 1-\alpha \approx 0.382$)

*   **解题步骤：**
    1.  **初始区间:** $a_0 = 0, b_0 = 2$, 长度 $L = 2$。
    2.  **计算试探点:**
        *   $\lambda_1 = a_0 + 0.382(L) = 0 + 0.764 = 0.764$
        *   $\mu_1 = a_0 + 0.618(L) = 0 + 1.236 = 1.236$
    3.  **计算函数值:**
        *   $\theta(0.764) = 0.764^2 - 2(0.764) \approx 0.583 - 1.528 = -0.945$
        *   $\theta(1.236) = 1.236^2 - 2(1.236) \approx 1.527 - 2.472 = -0.945$
        *(注：因为是对称的抛物线，理论上这两个点函数值应相等，实际计算看精度)*
        *   假设我们要找更小值，若 $\theta(\lambda_1) \approx \theta(\mu_1)$，通常取任一侧。假设 $\theta(\lambda_1) < \theta(\mu_1)$ 稍微一点点（或直接逻辑判断），我们通常保留包含最小值的区间。对于 $\lambda^2 - 2\lambda$，最小值在 $\lambda=1$。
    4.  **区间更新:**
        *   如果 $\theta(\lambda_1)$ 更小（或想保留左侧），新区间为 $[0, 1.236]$。
        *   如果 $\theta(\mu_1)$ 更小，新区间为 $[0.764, 2]$。
        *   在这个特定例子中，最小值 $\lambda=1$ 在中间。根据算法逻辑 (Slide 23)，若 $\theta(\lambda_1) < \theta(\mu_1)$ (实际上这里是对称的，假设 $\lambda$ 偏左一点更小)，我们令 $b_{new} = \mu_1$。
        *   新区间：$[0, 1.236]$。

**例题 3：Newton's Method (一维)**
设 $\theta(\lambda) = \lambda^4 - 2\lambda^2$。初始点 $\lambda_0 = 0.5$。求 $\lambda_1$。

*   **解题步骤：**
    1.  **求导:**
        *   $\theta'(\lambda) = 4\lambda^3 - 4\lambda$
        *   $\theta''(\lambda) = 12\lambda^2 - 4$
    2.  **代入 $\lambda_0 = 0.5$:**
        *   $\theta'(0.5) = 4(0.125) - 4(0.5) = 0.5 - 2 = -1.5$
        *   $\theta''(0.5) = 12(0.25) - 4 = 3 - 4 = -1$
    3.  **更新:**
        $$ \lambda_1 = 0.5 - \frac{-1.5}{-1} = 0.5 - 1.5 = -1 $$
    4.  **注意:** 牛顿法在 $\theta'' < 0$ (非凸) 区域可能表现不好（飞到远处），如本例所示。这展示了牛顿法对初值的敏感性。

---

### 📝 考试速查清单 (Cheat Sheet Summary)

1.  **判定闭映射：** 检查序列极限是否仍在映射的像集里。连续函数一定是闭映射。
2.  **收敛定理条件：** 紧致性 (Compact) + 下降函数 (Descent) + 闭映射 (Closed)。
3.  **收敛阶：**
    *   $\beta \in (0,1)$ : 线性 (Linear)。
    *   $\beta = 0$ : 超线性 (Superlinear)。
    *   $p=2$ : 二阶 (Quadratic)。
4.  **一维搜索公式：**
    *   **Fibonacci/Golden:** 区间缩减率。Golden Section 每次保留 0.618。
    *   **Newton:** $\lambda - \theta'/\theta''$。

 这份讲义（Lecture 7）涵盖了无约束优化问题的主要算法，从**不使用导数的直接搜索法**到**利用导数的梯度法**，再到更高级的**共轭方向法（Conjugate Direction Methods）**。

以下是为您整理的复习笔记、核心考点及例题。

---

# Part V: Unconstrained Optimization Algorithms

## 1. Zero-Order Methods (No Derivatives)
*(Slides 4-7)*
适用于目标函数不可导或导数难以计算的情况。

### 1.1 Cyclic Coordinate Method (轮换坐标法)
*   **原理：** 每次只沿着一个坐标轴方向 ($e_1, e_2, ..., e_n$) 进行一维搜索，循环进行。
*   **特点：** 简单，但在变量强耦合（如狭长山谷）时收敛极慢（Zig-zagging）。
*   **收敛性：** 如果函数严格凸且沿直线的最小值唯一，则收敛。

### 1.2 Hooke and Jeeves Method (模式搜索)
*   **改进：** 在轮换坐标搜索之后，加入一步 **"Pattern Search"（加速步）**。
*   **方向：** $\mathbf{d} = \mathbf{x}_{k+1} - \mathbf{x}_k$。
*   **直观理解：** 如果上一步沿着某个方向有效，大概率继续沿这个方向走也是有效的。

---

## 2. Gradient-Based Methods (First & Second Order)
*(Slides 9-15)*

### 2.1 Method of Steepest Descent (最速下降法)
*   **方向：** $\mathbf{d}_k = -\nabla f(\mathbf{x}_k)$ (梯度的反方向)。
*   **原理：** 局部下降最快的方向。
*   **性质：**
    *   相邻两次搜索方向正交（$\nabla f(\mathbf{x}_{k+1})^T \mathbf{d}_k = 0$）。
    *   **收敛速度：** 线性收敛 (Linear)，且受海森矩阵条件数影响大。若等高线是扁椭圆，会出现严重的锯齿现象（Zig-zagging）。

### 2.2 Newton's Method (牛顿法)
*   **原理：** 利用二阶泰勒展开 $f(\mathbf{x}) \approx f(\mathbf{x}_k) + \nabla f^T \Delta \mathbf{x} + \frac{1}{2} \Delta \mathbf{x}^T \mathbf{H} \Delta \mathbf{x}$，求极小值点。
*   **迭代公式：**
    $$ \mathbf{x}_{k+1} = \mathbf{x}_k - [\mathbf{H}(\mathbf{x}_k)]^{-1} \nabla f(\mathbf{x}_k) $$
*   **优缺点：**
    *   **优点：** 二阶收敛 (Quadratic Convergence)，速度极快。
    *   **缺点：** 需要计算海森矩阵及其逆；若 $\mathbf{H}$ 不是正定的，可能不收敛或飞向鞍点/极大值。
*   **修正 (Modified Newton):** 用 $\mathbf{B} = (\epsilon \mathbf{I} + \mathbf{H})^{-1}$ 代替逆，强制正定。

---

## 3. Conjugate Direction Methods (The Core Topic)
*(Slides 17-26)*
这是本章的重点，介于最速下降（一阶）和牛顿法（二阶）之间的方法。**不需要计算海森矩阵的逆，却具有二次终结性（Quadratic Termination）。**

### 3.1 Definition: Conjugate Directions (共轭方向)
*(Slide 17)*
给定对称矩阵 $\mathbf{H}$，非零向量 $\mathbf{d}_1, \mathbf{d}_2$ 是 $\mathbf{H}$-共轭的，如果：
$$ \mathbf{d}_1^T \mathbf{H} \mathbf{d}_2 = 0 $$
*   **直观意义：** 在度量 $\mathbf{H}$ 下正交。
*   **重要定理 (Theorem 1.3):** 对于 $n$ 维二次函数，沿着 $n$ 个共轭方向依次进行精确一维搜索，**一定能在 $n$ 步内到达最优解**。

### 3.2 Conjugate Gradient Method (CG, 共轭梯度法)
*(Slide 20-22)*
如何构造共轭方向？利用梯度构造。
*   **初始：** $\mathbf{d}_1 = -\nabla f(\mathbf{x}_1)$。
*   **迭代方向：** $\mathbf{d}_{j+1} = -\nabla f(\mathbf{x}_{j+1}) + \beta_j \mathbf{d}_j$。
*   **系数 $\beta_j$ (Fletcher-Reeves Formula):**
    $$ \beta_j = \frac{\|\nabla f(\mathbf{x}_{j+1})\|^2}{\|\nabla f(\mathbf{x}_j)\|^2} $$

### 3.3 Quasi-Newton Method: DFP (拟牛顿法)
*(Slides 23-26)*
*   **思想：** 不直接计算 $\mathbf{H}^{-1}$，而是构造一系列矩阵 $\mathbf{D}_k$ 逐步逼近 $\mathbf{H}^{-1}$。
*   **性质：** 产生的方向也是共轭方向。对于二次函数，$\mathbf{D}_{n+1} = \mathbf{H}^{-1}$。

---

### 💡 如何使用 / 典型例题 (Exam Preparation)

**考题类型 1：验证共轭方向**
*(参考 Slide 17 Example 1)*

**题目：**
给定 $f(x_1, x_2) = 4x_1^2 + 4x_2^2 - 4x_1 x_2 - 12x_2$。
1.  写出海森矩阵 $\mathbf{H}$。
2.  给定 $\mathbf{d}_1 = (1, 0)^T$，求一个与 $\mathbf{d}_1$ 共轭的方向 $\mathbf{d}_2$。

**解题过程：**
1.  **求 $\mathbf{H}$：**
    二次项为 $4x_1^2 + 4x_2^2 - 4x_1x_2$。
    $$ f(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T \mathbf{H} \mathbf{x} + \mathbf{c}^T \mathbf{x} $$
    $$ \frac{\partial^2 f}{\partial x_1^2} = 8, \quad \frac{\partial^2 f}{\partial x_2^2} = 8, \quad \frac{\partial^2 f}{\partial x_1 \partial x_2} = -4 $$
    $$ \mathbf{H} = \begin{pmatrix} 8 & -4 \\ -4 & 8 \end{pmatrix} $$
2.  **求 $\mathbf{d}_2 = (u, v)^T$：**
    由共轭定义：$\mathbf{d}_1^T \mathbf{H} \mathbf{d}_2 = 0$。
    $$ \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} 8 & -4 \\ -4 & 8 \end{pmatrix} \begin{pmatrix} u \\ v \end{pmatrix} = 0 $$
    $$ \begin{pmatrix} 8 & -4 \end{pmatrix} \begin{pmatrix} u \\ v \end{pmatrix} = 8u - 4v = 0 $$
    $$ \implies v = 2u $$
    取 $u=1$，则 $v=2$。
    **答案：** $\mathbf{d}_2 = (1, 2)^T$ 是一个共轭方向。

---

**考题类型 2：最速下降法的一步迭代**
*(参考 Slide 10)*

**题目：**
最小化 $f(\mathbf{x}) = x_1^2 + 2x_2^2$。初始点 $\mathbf{x}_1 = (2, 2)^T$。求第一次迭代后的点 $\mathbf{x}_2$。

**解题过程：**
1.  **计算梯度：** $\nabla f(\mathbf{x}) = (2x_1, 4x_2)^T$。
2.  **当前梯度：** $\nabla f(2, 2) = (4, 8)^T$。
3.  **搜索方向：** $\mathbf{d}_1 = -\nabla f = (-4, -8)^T$。
4.  **一维搜索 (Line Search)：**
    设步长为 $\lambda$，新点为 $\mathbf{x}(\lambda) = \mathbf{x}_1 + \lambda \mathbf{d}_1 = (2-4\lambda, 2-8\lambda)^T$。
    代入目标函数：
    $$ g(\lambda) = f(\mathbf{x}(\lambda)) = (2-4\lambda)^2 + 2(2-8\lambda)^2 $$
    $$ g(\lambda) = 4(1-2\lambda)^2 + 2 \cdot 4(1-4\lambda)^2 = 4(1 - 4\lambda + 4\lambda^2) + 8(1 - 8\lambda + 16\lambda^2) $$
    $$ g(\lambda) = 12 - 80\lambda + 144\lambda^2 $$
5.  **求最优步长：** $g'(\lambda) = -80 + 288\lambda = 0 \implies \lambda = \frac{80}{288} = \frac{5}{18}$。
6.  **更新点：**
    $$ \mathbf{x}_2 = \begin{pmatrix} 2 \\ 2 \end{pmatrix} + \frac{5}{18} \begin{pmatrix} -4 \\ -8 \end{pmatrix} = \begin{pmatrix} 2 - 20/18 \\ 2 - 40/18 \end{pmatrix} = \begin{pmatrix} 8/9 \\ -2/9 \end{pmatrix} $$

---

**考题类型 3：牛顿法的一步迭代**
*(参考 Slide 13)*

**题目：** 同上 $f(\mathbf{x}) = x_1^2 + 2x_2^2$，初始点 $\mathbf{x}_1 = (2, 2)^T$。

**解题过程：**
1.  **梯度：** $\nabla f = (4, 8)^T$。
2.  **海森矩阵：** $\mathbf{H} = \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}$。
3.  **海森矩阵的逆：** $\mathbf{H}^{-1} = \begin{pmatrix} 1/2 & 0 \\ 0 & 1/4 \end{pmatrix}$。
4.  **更新公式：**
    $$ \mathbf{x}_2 = \mathbf{x}_1 - \mathbf{H}^{-1} \nabla f = \begin{pmatrix} 2 \\ 2 \end{pmatrix} - \begin{pmatrix} 1/2 & 0 \\ 0 & 1/4 \end{pmatrix} \begin{pmatrix} 4 \\ 8 \end{pmatrix} $$
    $$ \mathbf{x}_2 = \begin{pmatrix} 2 \\ 2 \end{pmatrix} - \begin{pmatrix} 2 \\ 2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
5.  **结论：** 牛顿法对于二次函数，一步收敛到最优解 $(0,0)$。

---

### 📝 算法对比表 (Cheat Sheet)

| 算法 | 需要导数? | 搜索方向 | 收敛速度 | 备注 |
| :--- | :---: | :--- | :--- | :--- |
| **Cyclic Coordinate** | No | 坐标轴 $e_i$ | 很慢 | 容易Zigzag |
| **Steepest Descent** | Yes | $-\nabla f$ | 线性 (Linear) | 垂直前进，Zigzag严重 |
| **Newton** | Yes (2阶) | $-\mathbf{H}^{-1} \nabla f$ | 二阶 (Quadratic) | 计算量大，需 $\mathbf{H}$ 正定 |
| **Conjugate Gradient**| Yes | $-\nabla f + \beta \mathbf{d}_{old}$ | 超线性 / n步二阶 | 存储小，效果好 |
| **DFP (Quasi-Newton)**| Yes | $-\mathbf{D}_k \nabla f$ | 超线性 | 迭代逼近 $\mathbf{H}^{-1}$ |

这份讲义（Lecture 8）重点讲解了**约束优化**的两种经典方法：**罚函数法（Penalty Function）**和**障碍函数法（Barrier Function）**，以及现代优化中非常重要的**内点法（Interior Point Method）**。


---

# Part VI: Constrained Optimization Methods

## 1. Penalty Function Methods (罚函数法)
*(Slides 4-13)*

**核心思想：** 将约束优化问题转化为一系列**无约束**优化问题。通过在目标函数中添加一个“惩罚项”，当点违反约束时，目标函数值会变大。

### 1.1 Formulation (公式)
原问题：
$$ \min f(\mathbf{x}) \quad \text{s.t. } g_i(\mathbf{x}) \le 0, \quad h_j(\mathbf{x}) = 0 $$

转化为无约束的**罚问题 (Penalty Problem)**：
$$ \min P(\mathbf{x}, \mu) = f(\mathbf{x}) + \mu \alpha(\mathbf{x}) $$
*   $\mu > 0$: 罚参数（Penalty Parameter），迭代过程中 $\mu_k \to \infty$。
*   $\alpha(\mathbf{x})$: 罚项。只对不可行点惩罚。

**常用罚项形式 (Slide 7):**
通常使用**二次罚函数 (Quadratic Penalty)**：
$$ \alpha(\mathbf{x}) = \sum [\max\{0, g_i(\mathbf{x})\}]^2 + \sum |h_j(\mathbf{x})|^2 $$
*   如果点可行，$\alpha(\mathbf{x}) = 0$。
*   如果点不可行，$\alpha(\mathbf{x}) > 0$。

### 1.2 Convergence (收敛性)
*   **逼近方向：** 罚函数法通常产生一系列**不可行点**（Infeasible points），随着 $\mu \to \infty$，这些点逐渐逼近可行域边界上的最优解。
*   **外部逼近：** 因此也常被称为“外点法”。

---

### 💡 典型例题 1：罚函数法计算
*(参考 Slide 8 Example 1)*

**题目：**
$$ \min f(x) = x \quad \text{s.t. } x \ge 2 \implies -x+2 \le 0 $$
使用二次罚函数求解最优解的逼近过程。

**解题过程：**
1.  **构造罚问题：**
    约束为 $g(x) = -x+2 \le 0$。
    目标函数：$P(x, \mu) = x + \mu [\max\{0, -x+2\}]^2$。
2.  **求解无约束极小值：**
    显然最优解会在 $x < 2$ 的区域（因为原函数想让 $x$ 越小越好，但受罚项牵制）。
    在 $x < 2$ 时，函数为 $F(x) = x + \mu(-x+2)^2$。
    求导：
    $$ F'(x) = 1 + 2\mu(-x+2)(-1) = 1 - 2\mu(2-x) = 0 $$
    $$ 1 = 2\mu(2-x) \implies 2-x = \frac{1}{2\mu} \implies x(\mu) = 2 - \frac{1}{2\mu} $$
3.  **取极限：**
    当 $\mu \to \infty$ 时：
    $$ x^* = \lim_{\mu \to \infty} (2 - \frac{1}{2\mu}) = 2 $$
    **结论：** 随着罚参数增大，解从左侧（不可行区域）逼近最优解 $x=2$。

---

## 2. Barrier Function Methods (障碍函数法)
*(Slides 15-21)*

**核心思想：** 在可行域边界设置“障碍”（值趋于无穷大），阻止迭代点跑出可行域。

### 2.1 Formulation (公式)
原问题（通常处理不等式约束）：
$$ \min f(\mathbf{x}) \quad \text{s.t. } g_i(\mathbf{x}) \le 0 $$

转化为**障碍问题 (Barrier Problem)**：
$$ \min B(\mathbf{x}, \mu) = f(\mathbf{x}) + \mu B(\mathbf{x}) $$
*   $\mu > 0$: 障碍参数，迭代过程中 $\mu_k \to 0^+$（注意这里是趋向于0，与罚函数相反）。
*   **初始点要求：** 必须从**严格可行点**（Strictly Feasible Point, $g(\mathbf{x}) < 0$）开始。

**常用障碍函数形式 (Slide 16):**
1.  **反比例障碍 (Inverse Barrier):** $B(\mathbf{x}) = \sum \frac{-1}{g_i(\mathbf{x})}$
2.  **对数障碍 (Log Barrier):** $B(\mathbf{x}) = -\sum \ln(-g_i(\mathbf{x}))$ (这是内点法的基础)。

### 2.2 Convergence (收敛性)
*   **逼近方向：** 始终在可行域**内部**移动，随着 $\mu \to 0$，解从内部逼近边界上的最优解。
*   **内部逼近：** 因此也称为“内点法”（广义）。

---

### 💡 典型例题 2：障碍函数法计算
*(参考 Slide 17 Example 2)*

**题目：**
$$ \min f(x) = x \quad \text{s.t. } x \ge 2 \implies -x+2 \le 0 $$
使用反比例障碍函数求解。

**解题过程：**
1.  **构造障碍问题：**
    障碍项 $B(x) = \frac{-1}{g(x)} = \frac{-1}{-x+2} = \frac{1}{x-2}$。
    目标函数：$P(x, \mu) = x + \mu \frac{1}{x-2}$。
2.  **求解无约束极小值：**
    求导：
    $$ P'(x) = 1 - \frac{\mu}{(x-2)^2} = 0 $$
    $$ (x-2)^2 = \mu \implies x - 2 = \sqrt{\mu} \quad (\text{取正根因为必须 } x>2) $$
    $$ x(\mu) = 2 + \sqrt{\mu} $$
3.  **取极限：**
    当 $\mu \to 0^+$ 时：
    $$ x^* = \lim_{\mu \to 0} (2 + \sqrt{\mu}) = 2 $$
    **结论：** 随着 $\mu$ 减小，解从右侧（可行区域内部）逼近最优解 $x=2$。

---

## 3. Primal-Dual Interior Point Method (原始-对偶内点法)
*(Slides 23-29)*

这是线性规划（LP）中单纯形法的强力竞争对手，尤其在超大规模问题上。它是障碍函数法在 LP 上的具体应用和推广。

### 3.1 Primal and Dual Standard Form
*(Slide 24)*
*   **Primal (P):** $\min \mathbf{c}^T\mathbf{x}$ s.t. $\mathbf{Ax}=\mathbf{b}, \mathbf{x} \ge 0$.
*   **Dual (D):** $\max \mathbf{b}^T\mathbf{y}$ s.t. $\mathbf{A}^T\mathbf{y} + \boldsymbol{\lambda} = \mathbf{c}, \boldsymbol{\lambda} \ge 0$.
    *(注：PPT里用的符号是 $\lambda$ 作为对偶松弛变量，有时教材用 $s$)*

### 3.2 KKT Conditions & Central Path
*(Slide 25-27)*
最优解必须满足 KKT 条件。内点法的核心是**松弛互补松弛条件 (Perturbed Complementarity Slackness)**。

方程组变为：
1.  $\mathbf{Ax} = \mathbf{b}$ (Primal Feasibility)
2.  $\mathbf{A}^T\mathbf{y} + \boldsymbol{\lambda} = \mathbf{c}$ (Dual Feasibility)
3.  **$\mathbf{X}\mathbf{U}\mathbf{e} = \mu \mathbf{e}$** (即 $x_i \lambda_i = \mu$)
    *   这里 $\mathbf{X} = \text{diag}(x), \mathbf{U} = \text{diag}(\lambda)$。
    *   当 $\mu = 0$ 时，就是原始的 KKT 条件。
    *   当 $\mu > 0$ 时，这一组解构成的轨迹称为**中心路径 (Central Path)**。

### 3.3 Algorithm Steps (牛顿迭代)
*(Slide 28-29)*
由于方程组包含非线性项 $x_i \lambda_i = \mu$，使用**牛顿法**求解。

**线性化方程 (Newton System):**
$$
\begin{cases}
\mathbf{A}\mathbf{d}_x = 0 \\
\mathbf{A}^T\mathbf{d}_y + \mathbf{d}_{\lambda} = 0 \\
\mathbf{U}\mathbf{d}_x + \mathbf{X}\mathbf{d}_{\lambda} = \mu \mathbf{e} - \mathbf{X}\mathbf{U}\mathbf{e}
\end{cases}
$$
解出方向 $\mathbf{d} = (\mathbf{d}_x, \mathbf{d}_{\lambda}, \mathbf{d}_y)$ 后，更新：
$$ \mathbf{x}_{k+1} = \mathbf{x}_k + \alpha \mathbf{d}_x, \quad \boldsymbol{\lambda}_{k+1} = \boldsymbol{\lambda}_k + \alpha \mathbf{d}_{\lambda}, \quad \mu_{k+1} = \beta \mu_k $$

---

### 📝 考试对比表 (Cheat Sheet)

| 特性 | 罚函数法 (Penalty) | 障碍函数法 (Barrier) |
| :--- | :--- | :--- |
| **逼近路径** | **不可行点** $\to$ 可行边界 | **严格可行点** $\to$ 可行边界 |
| **参数 $\mu$ 变化** | $\mu \to \infty$ | $\mu \to 0$ |
| **适用约束** | 等式 & 不等式 | 仅不等式 (通常) |
| **初始点** | 任意点 | 必须是严格内点 |
| **常见形式** | $f + \mu [\max(0, g)]^2$ | $f - \mu \sum \ln(-g)$ |

### 💡 考点总结
1.  **概念区分：** 给定一个构造好的函数，能识别它是罚函数形式还是障碍函数形式。
2.  **计算题：** 像例题 1 和 2 那样，给定简单的 1 维问题，写出辅助函数 $P(x,\mu)$，求导解出 $x(\mu)$，并验证极限。
3.  **内点法原理：** 理解 $x_i \lambda_i = \mu$ 是如何将互补松弛条件“平滑化”的。知道内点法本质上是在对数障碍函数下应用牛顿法。

---

# 综合复习题集 (L5 - L8)

## 第一部分：Lecture 5 - 单纯形法与对偶理论

### 题目 1：对偶问题与互补松弛 (中等)
考虑以下线性规划原问题 (P)：
$$
\begin{aligned}
\text{minimize } \quad & z = 3x_1 + 2x_2 \\
\text{subject to } \quad & x_1 + x_2 \ge 4 \\
& 2x_1 + x_2 \ge 5 \\
& x_1, x_2 \ge 0
\end{aligned}
$$
1. 写出其对偶问题 (D)。
2. 给定原问题的一个可行解 $\mathbf{x} = (1, 3)^T$。利用互补松弛条件（Complementary Slackness）判断该解是否为最优解？

**【考点解析】**：考察对偶变换规则、强对偶定理及互补松弛条件的应用。

**【参考解答】**
1.  **写出对偶问题**：
    *   原问题是 Min，$Ax \ge b$。对偶问题应为 Max，$y \ge 0$，约束符号变为 $\le$。
    *   $\mathbf{c} = (3, 2)^T, \mathbf{b} = (4, 5)^T$。
    *   对偶变量 $y_1, y_2$ 对应两个约束。
    *   **对偶问题 (D)：**
        $$
        \begin{aligned}
        \text{maximize } \quad & w = 4y_1 + 5y_2 \\
        \text{subject to } \quad & y_1 + 2y_2 \le 3 \\
        & y_1 + y_2 \le 2 \\
        & y_1, y_2 \ge 0
        \end{aligned}
        $$

2.  **判断最优性**：
    *   检查 $\mathbf{x} = (1, 3)^T$ 的原问题可行性：
        *   $1+3 = 4 \ge 4$ (约束1紧，Binding)
        *   $2(1)+3 = 5 \ge 5$ (约束2紧，Binding)
        *   $x \ge 0$ 满足。
    *   根据**互补松弛条件**：如果原问题的某个变量 $x_j > 0$，则对偶问题对应的约束必须是等式（Binding）。
        *   这里 $x_1 = 1 > 0 \implies$ 对偶约束1应为等式：$y_1 + 2y_2 = 3$。
        *   这里 $x_2 = 3 > 0 \implies$ 对偶约束2应为等式：$y_1 + y_2 = 2$。
    *   解这个线性方程组：
        $$ \begin{cases} y_1 + 2y_2 = 3 \\ y_1 + y_2 = 2 \end{cases} \implies y_2 = 1, y_1 = 1 $$
    *   检查得到的 $\mathbf{y} = (1, 1)^T$ 是否满足对偶问题的非负约束：
        *   $y_1 = 1 \ge 0, y_2 = 1 \ge 0$。满足。
    *   **结论**：存在满足互补松弛条件的对偶可行解 $\mathbf{y}$，因此 $\mathbf{x}=(1,3)^T$ 是原问题的**最优解**。

---

### 题目 2：极点 (Extreme Points) (基础)
给定集合 $S = \{ \mathbf{x} \in \mathbb{R}^2 \mid x_1 + x_2 \le 2, x_1 \ge 0, x_2 \ge 0 \}$。请找出该集合所有的极点。

**【考点解析】**：考察极点的代数定义（秩条件）。

**【参考解答】**
集合由 3 个约束定义：
(1) $x_1 + x_2 \le 2$
(2) $x_1 \ge 0$
(3) $x_2 \ge 0$
极点由 $n=2$ 个线性无关的起作用约束（Binding Constraints）决定：
1.  **约束 (2) 和 (3) 起作用**：$x_1=0, x_2=0$。点 $(0,0)$。满足约束(1)，是极点。
2.  **约束 (1) 和 (2) 起作用**：$x_1+x_2=2, x_1=0 \implies x_2=2$。点 $(0,2)$。满足约束(3)，是极点。
3.  **约束 (1) 和 (3) 起作用**：$x_1+x_2=2, x_2=0 \implies x_1=2$。点 $(2,0)$。满足约束(2)，是极点。
**答案**：极点为 $(0,0), (0,2), (2,0)$。

---

## 第二部分：Lecture 6 - 算法概念与一维搜索

### 题目 3：算法收敛性与闭映射 (理论)
设 $X = [0, \infty)$，算法映射 $\mathbf{A}: X \to X$ 定义为：
$$ \mathbf{A}(x) = \begin{cases} \frac{1}{2}x + 1 & x > 0 \\ 0 & x = 0 \end{cases} $$
1. 判断映射 $\mathbf{A}$ 在 $x=0$ 处是否是闭的（Closed）？
2. 该算法能否保证收敛到最优解？（结合收敛定理简述）

**【考点解析】**：考察闭映射的定义及其在收敛定理中的作用。

**【参考解答】**
1.  **判断闭性**：
    *   取序列 $x_k = \frac{1}{k}$，显然 $x_k \to 0$。
    *   计算映射值 $y_k = \mathbf{A}(x_k) = \frac{1}{2}(\frac{1}{k}) + 1$。
    *   序列 $y_k \to 1$。
    *   检查极限值 $1$ 是否属于 $\mathbf{A}(0)$。因为 $\mathbf{A}(0) = \{0\}$，而 $1 \notin \{0\}$。
    *   **结论**：映射 $\mathbf{A}$ 在 $x=0$ 处**不是闭的**。
2.  **收敛性**：
    *   由于映射在关键点不闭，不满足 Global Convergence Theorem 的条件 3。
    *   实际情况：若从 $x_0 > 0$ 开始，序列会收敛到 $x^* = 2$（这是不动点 $x = 0.5x+1$ 的解）。但如果最优解是 $0$，算法无法收敛到那里。

### 题目 4：牛顿法一维搜索 (计算)
我们要最小化函数 $\theta(\lambda) = \lambda^4 - 4\lambda^3 + 2$。
1. 写出牛顿法一维搜索的迭代公式。
2. 设初始点 $\lambda_0 = 0$，计算下一次迭代点 $\lambda_1$。这说明了什么问题？

**【考点解析】**：考察牛顿法的计算及其陷阱（驻点/初值敏感性）。

**【参考解答】**
1.  **公式**：$\lambda_{k+1} = \lambda_k - \frac{\theta'(\lambda_k)}{\theta''(\lambda_k)}$。
    *   $\theta'(\lambda) = 4\lambda^3 - 12\lambda^2$
    *   $\theta''(\lambda) = 12\lambda^2 - 24\lambda$
2.  **计算 $\lambda_1$**：
    *   在 $\lambda_0 = 0$ 处：
        *   $\theta'(0) = 0$
        *   $\theta''(0) = 0$
    *   **问题**：分母为 0，牛顿法无法进行。
    *   **说明**：$\lambda=0$ 是一个拐点（也是二阶导数为0的驻点）。牛顿法要求二阶导数非零（最好是正定）才能有效迭代。如果 $\theta'(0)=0$，说明当前已经是驻点（可能是极小、极大或拐点）。

---

## 第三部分：Lecture 7 - 无约束优化

### 题目 5：最速下降法 vs 牛顿法 (经典对比)
考虑目标函数 $f(x_1, x_2) = x_1^2 + 10x_2^2$。初始点 $\mathbf{x}_0 = (10, 1)^T$。
1. **最速下降法**：求出 $\mathbf{x}_0$ 处的搜索方向 $\mathbf{d}_0$，并计算最优步长 $\lambda$，求出 $\mathbf{x}_1$。
2. **牛顿法**：求出 $\mathbf{x}_0$ 处的牛顿方向，并求出 $\mathbf{x}_1$。
3. 比较两种方法的结果，哪种收敛更快？为什么？

**【考点解析】**：考察梯度法和牛顿法在二次函数上的表现差异。

**【参考解答】**
1.  **最速下降法**：
    *   $\nabla f(\mathbf{x}) = (2x_1, 20x_2)^T$。
    *   $\nabla f(10, 1) = (20, 20)^T$。
    *   方向 $\mathbf{d}_0 = -\nabla f = (-20, -20)^T$。
    *   线搜索：$\mathbf{x}(\lambda) = (10-20\lambda, 1-20\lambda)$。
    *   代入 $f(\lambda) = (10-20\lambda)^2 + 10(1-20\lambda)^2$。
    *   令 $f'(\lambda) = 0$ 解得 $\lambda \approx 0.05$ (具体计算略复杂，关键在下一步比较)。
    *   $\mathbf{x}_1$ 不会直接到达原点 $(0,0)$，而是走“之”字形。

2.  **牛顿法**：
    *   海森矩阵 $\mathbf{H} = \begin{pmatrix} 2 & 0 \\ 0 & 20 \end{pmatrix}$。
    *   逆矩阵 $\mathbf{H}^{-1} = \begin{pmatrix} 0.5 & 0 \\ 0 & 0.05 \end{pmatrix}$。
    *   方向 $\mathbf{d}_{Newton} = -\mathbf{H}^{-1} \nabla f = -\begin{pmatrix} 0.5 & 0 \\ 0 & 0.05 \end{pmatrix} \begin{pmatrix} 20 \\ 20 \end{pmatrix} = \begin{pmatrix} -10 \\ -1 \end{pmatrix}$。
    *   更新：$\mathbf{x}_1 = \mathbf{x}_0 + \mathbf{d}_{Newton} = (10, 1) + (-10, -1) = (0, 0)$。

3.  **比较**：
    *   牛顿法**一步收敛**到最优解 $(0,0)$。
    *   最速下降法需要多步迭代。
    *   **原因**：目标函数是二次函数。牛顿法利用二阶信息，对于二次型函数具有二次终结性（Quadratic Termination），即一步到位。而最速下降法受条件数（这里是 10/1 = 10）影响，等高线是椭圆，导致震荡。

### 题目 6：共轭方向 (概念)
给定对称正定矩阵 $\mathbf{H} = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}$。
已知方向 $\mathbf{d}_1 = (1, 1)^T$。
请构造一个非零向量 $\mathbf{d}_2 = (u, v)^T$，使得 $\mathbf{d}_1$ 和 $\mathbf{d}_2$ 关于 $\mathbf{H}$ 共轭。

**【考点解析】**：考察共轭方向的定义 $\mathbf{d}_1^T \mathbf{H} \mathbf{d}_2 = 0$。

**【参考解答】**
*   计算 $\mathbf{H} \mathbf{d}_1 = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$。
*   共轭条件：$\mathbf{d}_2^T (\mathbf{H} \mathbf{d}_1) = 0$。
*   即 $(u, v) \begin{pmatrix} 4 \\ 2 \end{pmatrix} = 4u + 2v = 0$。
*   简化得 $2u + v = 0$。
*   取 $u=1$，则 $v=-2$。
*   **答案**：$\mathbf{d}_2 = (1, -2)^T$ （答案不唯一，满足 $v=-2u$ 即可）。

---

## 第四部分：Lecture 8 - 约束优化

### 题目 7：罚函数法 (解析解求解)
考虑约束优化问题：
$$ \text{minimize } f(x) = \frac{1}{2}x^2 \quad \text{subject to } x \ge 1 $$
1. 构造二次罚函数问题 $P(x, \mu)$（使用 $\mu [\max(0, 1-x)]^2$）。
2. 求解无约束罚问题的最优解 $x(\mu)$。
3. 验证当 $\mu \to \infty$ 时，$x(\mu)$ 是否收敛到原问题的最优解。

**【考点解析】**：考察罚函数法的计算流程及逼近原理（从不可行域逼近）。

**【参考解答】**
1.  **构造**：
    *   约束 $x \ge 1 \implies 1-x \le 0$。
    *   $P(x, \mu) = \frac{1}{2}x^2 + \mu [\max(0, 1-x)]^2$。

2.  **求解 $x(\mu)$**：
    *   显然原函数希望 $x$ 越小越好（趋向0），但约束要求 $x \ge 1$。
    *   罚函数会平衡两者，解一定在 $x < 1$ 的区域（违反约束才有惩罚）。
    *   当 $x < 1$ 时，$\max(0, 1-x) = 1-x$。
    *   $P(x, \mu) = \frac{1}{2}x^2 + \mu (1-x)^2$。
    *   求导：$P'(x) = x + 2\mu(1-x)(-1) = x - 2\mu(1-x) = 0$。
    *   $x - 2\mu + 2\mu x = 0 \implies x(1+2\mu) = 2\mu$。
    *   **解**：$x(\mu) = \frac{2\mu}{1+2\mu}$。

3.  **极限验证**：
    *   $\lim_{\mu \to \infty} x(\mu) = \lim_{\mu \to \infty} \frac{2\mu}{1+2\mu} = 1$。
    *   原问题 $\min \frac{1}{2}x^2$ s.t. $x \ge 1$ 的最优解显然是 $x^*=1$。
    *   **结论**：收敛，且是从左侧（$x < 1$，不可行区域）逼近。

### 题目 8：内点法与中心路径 (概念)
对于标准线性规划问题 $\min \mathbf{c}^T\mathbf{x}$ s.t. $\mathbf{Ax}=\mathbf{b}, \mathbf{x} \ge 0$。
内点法通过求解一组扰动的 KKT 方程组（中心路径）来逼近最优解。请写出包含扰动参数 $\mu > 0$ 的方程组（Newton System 求解的对象）。

**【考点解析】**：考察 Primal-Dual Interior Point Method 的核心方程。

**【参考解答】**
方程组包含三个部分（原始可行性、对偶可行性、扰动互补松弛）：
1.  $\mathbf{Ax} = \mathbf{b}$  (Primal Feasibility)
2.  $\mathbf{A}^T\mathbf{y} + \boldsymbol{\lambda} = \mathbf{c}$  (Dual Feasibility)
3.  $\mathbf{X}\boldsymbol{\Lambda}\mathbf{e} = \mu \mathbf{e}$  (Perturbed Complementarity)
    *   其中 $\mathbf{X} = \text{diag}(x_1, ..., x_n)$
    *   $\boldsymbol{\Lambda} = \text{diag}(\lambda_1, ..., \lambda_n)$
    *   $\mathbf{e} = (1, 1, ..., 1)^T$
    *   即 $x_i \lambda_i = \mu, \forall i$。

---


这是一个非常好的策略。为了确保无死角复习，我重新审视了讲义，发现还有几个**具有挑战性**或**理论性较强**的盲点没有覆盖到，特别是：

1.  **L5 的表示定理 (Representation Theorem)**：这是单纯形法几何理论的核心，上次只考了找极点，没考如何用极点和极方向表示一个点。
2.  **L6 的收敛阶 (Order of Convergence)**：这是评估算法效率的关键指标，考试常出选择或简答。
3.  **L7 的共轭梯度法 (CG) 系数计算**：$\beta$ 的计算公式是计算题高频点。
4.  **L7 的拟牛顿法 (DFP) 性质**：虽然公式复杂不常考手算，但其核心性质（拟牛顿方程）是理论考点。
5.  **L8 的对数障碍函数 (Log-Barrier)**：上次考了反比例障碍，但对数障碍是内点法的基础，更重要。

以下是**补充的高阶/盲点习题集**：

---

# 补充习题集 (进阶与盲点查漏)

## 第一部分：Lecture 5 - 几何理论与表示定理

### 题目 9：表示定理 (Representation Theorem) (难)
考虑无界多面体 $S = \{ \mathbf{x} \in \mathbb{R}^2 \mid -x_1 + x_2 \le 1, x_1 \ge 0, x_2 \ge 0 \}$。
1.  找出 $S$ 的所有**极点 (Extreme Points)**。
2.  找出 $S$ 的所有**极方向 (Extreme Directions)**。
3.  对于点 $\mathbf{x} = (2, 2)^T \in S$，请根据表示定理，将其写成极点的凸组合加上极方向的非负线性组合的形式。

**【考点解析】**：这是 Lecture 5 中 Theorem 5.9 的直接应用，考察对无界集结构的理解。

**【参考解答】**
1.  **极点**：
    *   约束：① $-x_1 + x_2 \le 1$, ② $x_1 \ge 0$, ③ $x_2 \ge 0$。
    *   交点检查：
        *   ②&③ ($x_1=0, x_2=0$): 满足①，是极点 $\mathbf{v}_1 = (0,0)$。
        *   ①&② ($x_1=0, x_2=1$): 满足③，是极点 $\mathbf{v}_2 = (0,1)$。
        *   ①&③ ($-x_1=1 \to x_1=-1$): 违反②，不是可行点。
    *   **极点集** $E_p = \{ (0,0), (0,1) \}$。

2.  **极方向**：
    *   极方向对应齐次方程组 $\mathbf{A}\mathbf{d} \le 0, \mathbf{d} \ge 0, \mathbf{d} \neq 0$。
    *   即：$-d_1 + d_2 \le 0 \implies d_2 \le d_1$，且 $d_1, d_2 \ge 0$。
    *   边界情况（极方向）：
        *   $d_2 = 0, d_1 > 0$（对应 $x_2=0$ 边界延伸）：取 $\mathbf{d}_1 = (1, 0)$。
        *   $d_2 = d_1 > 0$（对应 $-x_1+x_2=1$ 边界延伸）：取 $\mathbf{d}_2 = (1, 1)$。
    *   **极方向集** $E_d = \{ (1, 0), (1, 1) \}$。

3.  **表示 $\mathbf{x} = (2, 2)$**：
    *   我们需要找到 $\alpha_1, \alpha_2 \ge 0, \sum \alpha_i = 1$ 和 $\beta_1, \beta_2 \ge 0$ 使得：
        $$ \begin{pmatrix} 2 \\ 2 \end{pmatrix} = \alpha_1 \begin{pmatrix} 0 \\ 0 \end{pmatrix} + \alpha_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} + \beta_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \beta_2 \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$
    *   观察点 $(2,2)$：它在 $(0,1)$ 的右上方。
    *   一种简单的构造：从原点 $(0,0)$ 出发，沿 $(1,1)$ 方向走 2 单位。即 $\alpha_1=1, \alpha_2=0, \beta_1=0, \beta_2=2$。
        $$ (2,2) = 1(0,0) + 2(1,1) $$
    *   另一种构造：从 $(0,1)$ 出发，沿 $(1,0)$ 走 1 单位，沿 $(1,1)$ 走 1 单位...
        $$ (2,2) = 1(0,1) + 1(1,0) + 1(1,1) = (2,2) $$
    *   (答案不唯一，写出一种即可)。

---

## 第二部分：Lecture 6 - 收敛阶与定理条件

### 题目 10：收敛阶 (Order of Convergence) (概念)
假设三个算法产生的误差序列 $\{e_k\}$ 分别满足以下关系（当 $k \to \infty$）：
1.  $e_{k+1} = 0.5 e_k$
2.  $e_{k+1} = 0.5 e_k^2$
3.  $e_{k+1} = \frac{1}{k} e_k$

请分别指出这三种情况属于哪种收敛速度（Linear, Superlinear, Quadratic）？

**【考点解析】**：考察 Slide 16 中 $\beta$ 和 $p$ 的定义。

**【参考解答】**
1.  **Linear (线性收敛)**：满足 $\lim \frac{e_{k+1}}{e_k} = \beta \in (0,1)$。这里 $\beta = 0.5$。
2.  **Quadratic (二阶收敛/二次收敛)**：满足 $\lim \frac{e_{k+1}}{e_k^2} = \beta < \infty$。这里 $p=2$。这是牛顿法的典型特征。
3.  **Superlinear (超线性收敛)**：满足 $\lim \frac{e_{k+1}}{e_k} = 0$。这里 $\lim_{k \to \infty} \frac{1}{k} = 0$。这是拟牛顿法（如 DFP/BFGS）或共轭梯度法的特征。

---

## 第三部分：Lecture 7 - 共轭梯度与拟牛顿法

### 题目 11：共轭梯度法 (Conjugate Gradient) 参数计算 (必考计算)
在使用 Fletcher-Reeves 共轭梯度法求解 $\min f(\mathbf{x})$ 时：
已知第 $k$ 步的梯度为 $\mathbf{g}_k = (1, 1)^T$，第 $k+1$ 步的梯度为 $\mathbf{g}_{k+1} = (0.5, 0.5)^T$。
1. 计算参数 $\beta_k^{FR}$。
2. 若第 $k$ 步的搜索方向 $\mathbf{d}_k = (-2, -1)^T$，写出第 $k+1$ 步的搜索方向 $\mathbf{d}_{k+1}$。

**【考点解析】**：考察 Slide 20 的公式 (2) 和 (1)。

**【参考解答】**
1.  **计算 $\beta_k$**：
    根据 Fletcher-Reeves 公式：
    $$ \beta_k = \frac{\|\mathbf{g}_{k+1}\|^2}{\|\mathbf{g}_k\|^2} $$
    *   $\|\mathbf{g}_k\|^2 = 1^2 + 1^2 = 2$
    *   $\|\mathbf{g}_{k+1}\|^2 = 0.5^2 + 0.5^2 = 0.25 + 0.25 = 0.5$
    *   $\beta_k = \frac{0.5}{2} = 0.25$

2.  **计算 $\mathbf{d}_{k+1}$**：
    $$ \mathbf{d}_{k+1} = -\mathbf{g}_{k+1} + \beta_k \mathbf{d}_k $$
    $$ \mathbf{d}_{k+1} = -\begin{pmatrix} 0.5 \\ 0.5 \end{pmatrix} + 0.25 \begin{pmatrix} -2 \\ -1 \end{pmatrix} $$
    $$ \mathbf{d}_{k+1} = \begin{pmatrix} -0.5 \\ -0.5 \end{pmatrix} + \begin{pmatrix} -0.5 \\ -0.25 \end{pmatrix} = \begin{pmatrix} -1 \\ -0.75 \end{pmatrix} $$

### 题目 12：拟牛顿法与 DFP (理论)
在 DFP 方法中，我们不计算海森矩阵 $\mathbf{H}$，而是维护一个矩阵 $\mathbf{D}_k$ 近似 $\mathbf{H}^{-1}$。
已知拟牛顿方程（Quasi-Newton Equation）是构造 $\mathbf{D}_{k+1}$ 的基础。令 $\mathbf{p}_k = \mathbf{x}_{k+1} - \mathbf{x}_k$，$\mathbf{q}_k = \nabla f(\mathbf{x}_{k+1}) - \nabla f(\mathbf{x}_k)$。
请问 $\mathbf{D}_{k+1}$ 必须满足什么方程？（写出表达式）

**【考点解析】**：考察拟牛顿法的核心性质（Secant Equation）。

**【参考解答】**
拟牛顿方程（也称割线方程 Secant Equation）为：
$$ \mathbf{D}_{k+1} \mathbf{q}_k = \mathbf{p}_k $$
或者写作 $\mathbf{H}_{k+1} \mathbf{p}_k = \mathbf{q}_k$ (如果 $\mathbf{H}$ 近似原海森矩阵)。
DFP 是对 $\mathbf{H}^{-1}$ 的近似，所以需满足 $\mathbf{D}_{k+1} \mathbf{q}_k = \mathbf{p}_k$。

---

## 第四部分：Lecture 8 - 障碍函数与病态性

### 题目 13：对数障碍函数 (Log Barrier) (计算)
考虑问题 $\min x$ s.t. $x \ge 0$。
1. 写出对数障碍函数形式的目标函数 $B(x, \mu)$。
2. 求解最优解 $x(\mu)$。
3. 当 $\mu \to 0$ 时，验证解的收敛性。

**【考点解析】**：对比反比例障碍函数，对数形式在内点法中更常用。

**【参考解答】**
1.  **构造**：
    *   约束 $x \ge 0 \implies -x \le 0$ (标准形式 $g(x) \le 0$)，或者直接针对 $x \ge 0$ 使用 $-\ln(x)$。
    *   对数障碍项通常为 $-\mu \sum \ln(\text{constraint})$。
    *   $B(x, \mu) = x - \mu \ln(x)$。

2.  **求解**：
    *   求导：$B'(x) = 1 - \frac{\mu}{x} = 0$。
    *   解得：$x(\mu) = \mu$。

3.  **收敛性**：
    *   当 $\mu \to 0^+$ 时，$x(\mu) = \mu \to 0$。
    *   原问题 $\min x$ s.t. $x \ge 0$ 的最优解正是 $x=0$。收敛正确。

---

### 总结：目前的覆盖情况

到现在为止，我们已经完成了两轮出题，覆盖情况如下：

| 知识模块 | 基础题 | 进阶/计算题 | 理论/证明题 |
| :--- | :--- | :--- | :--- |
| **L5 单纯形法/对偶** | 极点查找 | 对偶变换、互补松弛验证 | **表示定理应用 (题9)** |
| **L6 算法理论** | 闭映射判断 | 1D 搜索失效计算 | **收敛阶分类 (题10)** |
| **L7 无约束优化** | 最速下降 vs 牛顿 | 共轭方向构造 | **CG $\beta$ 计算 (题11)**, 拟牛顿方程 (题12) |
| **L8 约束优化** | 罚函数解析解 | 内点法 KKT 方程 | **对数障碍函数 (题13)** |