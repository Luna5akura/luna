const $=`---
title: Econometrics - Review Summary
category: Notes
date: 2025-12-24
---

# 1 变量关系与因果识别

## 1.1 变量关系的层次
1. **精确函数关系**：$y = f(x)$（如质能方程 $E=mc^2$）。
2. **因果关系**：$x$ 的变化导致 $y$ 的变化（如施肥量与作物收成）。
3. **相关关系**：变量间存在统计相关性，但不一定有因果逻辑（如游泳溺水人数与冰淇淋销量）。

## 1.2 因果识别与 Ceteris Paribus
* **Ceteris Paribus（其他条件不变）**：因果关系通常在一个封闭系统中考量。假设 $y$ 的变化完全由 $x$ 和一组可控变量 $z_1, \\dots, z_K$ 决定。
* **识别难题**：
    1. 难以找到完整的 $z$ 变量集构成封闭系统。
    2. 难以确定在 $z$ 不变时，$x$ 变动对 $y$ 的精确影响量。
* **数据性质**：社会科学研究多基于**观测性数据 (observational data)**，而非随机试验，因此识别因果关系极具挑战。


# 2 线性回归模型 (OLS)

## 2.1 模型框架
总体模型：$Y_i = \\beta_0 + \\beta_1 X_{i1} + \\dots + \\beta_k X_{ik} + u_i \\quad (1)$
基本假设：
* $E[u_i | X] = 0$
* $Var(u_i | X) = \\sigma^2$

## 2.2 最小二乘法 (OLS)
目标是最小化**残差平方和 (SSR)**：
$S(\\beta) = \\sum_{i=1}^{n} (Y_i - \\beta_0 - \\beta_1 X_{i1} - \\dots - \\beta_k X_{ik})^2$
**矩阵形式解**：$\\hat{\\beta} = (X'X)^{-1}X'Y$
$\\hat Y = X \\hat \\beta$
**残差算子 (M矩阵)**：$M = I - P = I - X(X'X)^{-1}X'$，使得残差向量 $\\mathbf{\\hat{u}} = MY$。

## 2.3 Frisch-Waugh-Lovell (FWL) 定理
用于理解单个系数 $\\hat{\\beta}_j$ 的估计：
1.  将 $X_j$ 对其他所有解释变量回归，得到残差 $\\tilde{x}_j$。
2.  将 $Y$ 对其他所有解释变量回归，得到残差 $\\tilde{y}$。
3.  $\\hat{\\beta}_j$ 等于 $\\tilde{y}$ 对 $\\tilde{x}_j$ 做简单线性回归的系数：
    $\\hat{\\beta}_j = \\frac{\\sum \\tilde{x}_{ij} \\tilde{y}_i}{\\sum \\tilde{x}_{ij}^2} = (\\tilde{x}_j' \\tilde{x}_j)^{-1} \\tilde{x}_j' \\tilde{y}$。

## 2.4 OLS 统计性质
残差向量：$\\mathbf{\\hat{u}} = Y - \\hat{Y}$
*   **残差性质**：$\\sum \\hat{u}_i = 0$（含截距项时）；$X'\\mathbf{\\hat{u}} = 0$；$\\hat{Y}'\\mathbf{\\hat{u}} = 0$。
*   **波动恒等式**：$SST = SSE + SSR$。
    其中 $SSR = \\sum \\hat{u}_i^2 = \\mathbf{\\hat{u}}'\\mathbf{\\hat{u}}$。
*   **拟合优度**：$R^2 = \\frac{SSE}{SST} = 1 - \\frac{SSR}{SST}$。

# 3 Gauss-Markov 假设与性质

## 3.1 MLR.1 - MLR.6 假设
1. **线性模型**：总体满足线性参数关系。
2. **随机抽样**。
3. **无完全共线性**：特征矩阵 $X$ 满列秩。
4. **条件均值为零**：$E[u|X] = 0$（保证无偏性）。
5. **同方差与无自相关**：$Var(u|X) = \\sigma^2$，$Cov(u_i, u_j) = 0$（保证有效性）。
6. **正态性假设**：$u \\sim N(0, \\sigma^2)$（保证小样本下 $t, F$ 统计量分布）。

## 3.2 统计性质
* **无偏性**：在 MLR.1-MLR.4 下，$E[\\hat{\\beta}|X] = \\beta$。
* **有效性 (BLUE)**：在 MLR.1-MLR.5 下，OLS 是最佳线性无偏估计量。
* **一致性**：当样本量 $n \\to \\infty$ 时，$\\hat{\\beta} \\xrightarrow{p} \\beta$。

## 3.3 遗漏变量偏差 (OVB)
若真实模型含 $X_k$ 但回归时忽略了它，则 $\\hat{\\beta}_j$ 的偏误为：
$E[\\tilde{\\beta}_j] = \\beta_j + \\beta_k \\tilde{\\delta}_j$
其中 $\\tilde{\\delta}_j$ 是 $X_k$ 对 $X_j$ 回归的系数。


# 4 假设检验与区间估计

## 4.1 $t$ 检验
*   **统计量**：$t = \\frac{\\hat{\\beta}_j - \\beta_j}{se(\\hat{\\beta}_j)} \\sim t_{n-k-1}$
*   **标准误**：$se(\\hat{\\beta}_j) = \\hat{\\sigma} \\sqrt{C_{jj}}$，其中 $\\hat{\\sigma}^2 = \\frac{SSR}{n-k-1}$。
    （注：$C_{jj}$ 是 $(X'X)^{-1}$ 的第 $j$ 个对角元素）

## 4.2 $F$ 检验
*   **线性约束检验**：$F = \\frac{(SSR_r - SSR_{ur})/q}{SSR_{ur}/(n-k-1)}$
    （$r$ 代表受限模型，$ur$ 代表无限制模型，两者残差平方和之差即为约束带来的解释力下降）

# 5 异方差性 (Heteroskedasticity)

## 5.1 后果
*   **方差失效**：在异方差下，$\\widehat{Var}(\\hat{\\beta}) = \\hat{\\sigma}^2 (X'X)^{-1}$ 是有偏的。
    真实方差形式为：$Var(\\hat{\\beta}_1) = \\frac{\\sum (x_i - \\bar{x})^2 \\sigma_i^2}{(\\sum (x_i - \\bar{x})^2)^2}$。

## 5.2 应对方案

### 5.2.1 稳健标准误 (Robust Standard Error)
使用 **White (1980)** 稳健协方差阵（HC0）：
$\\widehat{Var}_{robust}(\\hat{\\beta}) = (X'X)^{-1} \\left( \\sum_{i=1}^n \\hat{u}_i^2 x_i x_i' \\right) (X'X)^{-1}$
其中 $\\hat{u}_i$ 为 OLS 估计后的残差。

### 5.2.2 异方差检验
核心思想是检验残差平方 $\\hat{u}_i^2$ 是否可被解释变量预测。

1.  **BP 检验 (Breusch-Pagan Test)**
    *   **辅助回归**：$\\hat{u}_i^2 = \\delta_0 + \\delta_1 X_{i1} + \\dots + \\delta_k X_{ik} + \\varepsilon_i$
    *   **统计量**：$LM = n \\cdot R_{\\hat{u}^2}^2 \\sim \\chi^2(k)$
2.  **White 检验 (White Test)**
    *   **辅助回归**（以双变量为例）：
        $\\hat{u}_i^2 = \\delta_0 + \\delta_1 X_1 + \\delta_2 X_2 + \\delta_3 X_1^2 + \\delta_4 X_2^2 + \\delta_5 (X_1 X_2) + \\varepsilon_i$

### 5.2.3 加权最小二乘法 (WLS)
若 $Var(u_i|X) = \\sigma^2 h_i$，则通过 $\\sqrt{h_i}$ 进行加权变换：
$\\frac{Y_i}{\\sqrt{h_i}} = \\beta_0 \\frac{1}{\\sqrt{h_i}} + \\dots + \\frac{u_i}{\\sqrt{h_i}}$
变换后的扰动项 $u_i^* = u_i/\\sqrt{h_i}$ 满足同方差性。

# 6 模型设定与特殊变量

## 6.1 虚拟变量 (Dummy Variables)
* **基准组 (Base Group)**：为避免“虚拟变量陷阱”，必须剔除一个类别作为基准。
* **系数含义**：表示该组相对于基准组的平均差异。
* **交互项**：用于检验斜率的变化（如：$wage = \\beta_0 + \\delta_0 female + \\beta_1 educ + \\gamma_1 female \\times educ + u$）。

## 6.2 变量选择原则
* **$R^2$ 与 调整 $R^2$**：增加解释变量必然提高 $R^2$，调整 $R^2$ 则会对变量数进行惩罚。
* **控制变量选择**：
    * **必须控制**：混杂因子 (Confounder)——同时影响 $X$ 和 $Y$ 的变量。
    * **不能控制**：
        1. **中介变量 (Mediator)**：$X \\to Z \\to Y$。
        2. **对撞因子 (Collider)**：$X \\to Z \\leftarrow Y$。

# 7 内生性与工具变量法 (IV)

## 7.1 内生性来源
1. 遗漏变量。
2. 测量误差。
3. 双向因果（自发性）。

## 7.2 工具变量 (Instrumental Variables, $Z$)
必须满足两个条件：
1. **相关性**：$Cov(Z, X) \\neq 0$。
2. **外生性/排他性约束**：$Cov(Z, u) = 0$。

## 7.3 二阶段最小二乘法 (2SLS)
1. **第一阶段**：$X$ 对 $Z$ 回归，得到拟合值 $\\hat{X}$。
2. **第二阶段**：$Y$ 对 $\\hat{X}$ 回归，得到 $\\hat{\\beta}_{2SLS}$。
* **弱工具变量问题**：若 $Z$ 与 $X$ 相关性极弱，2SLS 的渐近方差会变得极大。

# 8 面板数据模型 (Panel Data)

## 8.1 固定效应模型 (Fixed Effects, FE)
模型：$y_{it} = x'_{it}\\beta + \\alpha_i + u_{it}$
* **个体固定效应 ($\\alpha_i$)**：捕捉不随时间变化的个体特性。
* **估计方法**：
    1. **Within 变换（离差变换）**：减去组内平均值。
    2. **LSDV 法**：加入 $N-1$ 个个体虚拟变量。

## 8.2 双重差分法 (DiD)
用于政策评估的标准工具：
$Y_{it} = \\beta_0 + \\beta_1 Trt_i + \\beta_2 Time_t + \\beta_3 (Trt_i \\times Time_t) + u_{it}$
* **$\\beta_3$ (DID 估计量)**：刻画了政策处理效应。
* **平行趋势假设 (Parallel Trends)**：核心前提，即如果没有政策干预，处理组和对照组的时间趋势应是一致的。`;export{$ as default};
