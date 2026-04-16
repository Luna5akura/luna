const n=`---
category: Assignments
date: '2026-01-05'
title: Econometrics Assignment - Week 4
---

# Chapter 7 Problem 6

## Problem

考虑一个关于睡眠时间（sleep）和工作时间（totwrk）、教育（educ）、年龄（age）等变量的模型：
$$ sleep = \\beta_0 + \\beta_1 totwrk + \\beta_2 educ + \\beta_3 age + \\beta_4 age^2 + \\beta_5 male + u $$
(i) 写出一个模型，允许男性和女性有不同的截距。
(ii) 如何检验男性和女性的截距是否相等？
(iii) 如何修改模型，使得男性和女性关于 \`totwrk\` 的斜率可以不同？
(iv) 如何检验男性和女性关于 \`totwrk\` 的斜率是否相等？

## Solution

(i)
原模型中已经包含了一个虚拟变量 $male$。当 $male=0$（女性）时，截距为 $\\beta_0$；当 $male=1$（男性）时，截距为 $\\beta_0 + \\beta_5$。
因此，该模型已经允许男性和女性拥有不同的截距，且差异为 $\\beta_5$。
方程为：
$$ sleep = \\beta_0 + \\beta_1 totwrk + \\beta_2 educ + \\beta_3 age + \\beta_4 age^2 + \\beta_5 male + u $$

(ii)
检验男性和女性截距是否相等，即检验零假设 $H_0: \\beta_5 = 0$。
可以使用标准的 $t$ 检验（或 $F$ 检验）来检验 $male$ 的系数 $\\beta_5$ 是否显著不为零。

(iii)
为了允许男性和女性关于 \`totwrk\` 的斜率不同，我们需要加入交互项 $male \\cdot totwrk$。
模型变为：
$$ sleep = \\beta_0 + \\beta_1 totwrk + \\beta_2 educ + \\beta_3 age + \\beta_4 age^2 + \\beta_5 male + \\beta_6 (male \\cdot totwrk) + u $$
此时，女性（$male=0$）的 \`totwrk\` 斜率为 $\\beta_1$，男性的斜率为 $\\beta_1 + \\beta_6$。

(iv)
检验斜率是否相等，即检验零假设 $H_0: \\beta_6 = 0$。
使用 $t$ 检验查看交互项 $male \\cdot totwrk$ 的系数是否显著即可。

---

# Chapter 7 Computer Exercise C11

## Problem

使用数据 \`BEAUTY\` (或 \`beauty.dta\`)。该数据包含了收入和对外貌评价的调查。
(i) 分别对男性和女性样本估计方程：
$$ \\log(wage) = \\beta_0 + \\beta_1 belavg + \\beta_2 abvavg + \\dots + u $$
其中 $belavg$ 是“低于平均外貌”的虚拟变量，$abvavg$ 是“高于平均外貌”的虚拟变量（基组为“平均外貌”）。模型中还应包含教育、经验等控制变量。
(ii) 对于男性和女性，检验“长相低于平均”是否有工资惩罚（即 $\\beta_{belavg} < 0$）。
(iii) 对于男性和女性，检验“长相高于平均”是否有工资溢价（即 $\\beta_{abvavg} > 0$）。
(iv) 比较男性和女性的结果。

## Solution

(i)
需要分别对 \`female == 0\` 和 \`female == 1\` 的子样本运行回归。
典型的回归命令（以 Stata 为例）：
\`reg lwage belavg abvavg educ exper expersq union goodhlth south bigcity if female == 0\` (男性)
\`reg lwage belavg abvavg educ exper expersq union goodhlth south bigcity if female == 1\` (女性)

(ii)
查看 $belavg$ 的系数及其 $t$ 统计量。
通常的发现是：对于男性，$belavg$ 的系数通常为负（例如 -0.15 左右），且在统计上显著。这意味着长相低于平均的男性比长相平均的男性工资低。
对于女性，结果可能不显著或系数较小，具体取决于样本，但通常也为负。

(iii)
查看 $abvavg$ 的系数及其 $t$ 统计量。
通常的发现是：对于女性，$abvavg$ 的系数通常为正且显著（例如 0.08 左右），意味着长相漂亮的女性有工资溢价。
对于男性，这个效应通常较小或不显著。

(iv)
这表明劳动力市场对男性和女性的外貌评价机制可能不同：男性主要因“长得丑”受罚，而女性主要因“长得美”获益（或者说“丑”对男性的惩罚大于女性，“美”对女性的奖励大于男性）。

---

# Chapter 8 Problem 1

## Problem

下列哪一项是异方差性（Heteroskedasticity）造成的后果？
(i) OLS 估计量是有偏的。
(ii) OLS 估计量是不一致的。
(iii) 通常的 $F$ 统计量不再服从 $F$ 分布。
(iv) OLS 估计量不再是最佳线性无偏估计量（BLUE）。

## Solution

异方差性违反了高斯-马尔可夫假设中的同方差假设（MLR.5），但**不**违反零条件均值假设（MLR.4）。因此：

(i) **否。** OLS 估计量仍然是无偏的（Unbiased）。
(ii) **否。** OLS 估计量仍然是一致的（Consistent）。
(iii) **是。** 由于方差公式不再正确，标准误计算错误，导致 $t$ 统计量和 $F$ 统计量在零假设下不再服从标准的 $t$ 分布或 $F$ 分布，统计推断失效。
(iv) **是。** 根据高斯-马尔可夫定理，只有在同方差假设满足时 OLS 才是 BLUE。存在异方差时，OLS 不再是有效（Efficient）估计量，加权最小二乘法（WLS）通常更有效。

---

# Chapter 8 Problem 2

## Problem

考虑线性模型 $y = \\beta_0 + \\beta_1 x + u$。假设 $Var(u|x) = \\sigma^2 h(x)$，其中 $h(x) > 0$ 是 $x$ 的某种函数（例如 $h(x) = x^2$）。
(i) 说明变换后的误差项 $u / \\sqrt{h(x)}$ 具有常数方差 $\\sigma^2$。
(ii) 写出变换后的回归方程，使得新误差项满足同方差假设。

## Solution

(i)
我们需要计算 $u^* = \\frac{u}{\\sqrt{h(x)}}$ 的方差：
$$ Var\\left(\\frac{u}{\\sqrt{h(x)}} \\mid x\\right) = \\frac{1}{(\\sqrt{h(x)})^2} Var(u \\mid x) $$
$$ = \\frac{1}{h(x)} \\cdot \\sigma^2 h(x) = \\sigma^2 $$
因此，变换后的误差项具有常数方差 $\\sigma^2$，满足同方差假设。

(ii)
为了使用该性质，我们需要将原方程两边同时除以 $\\sqrt{h(x)}$：
$$ \\frac{y}{\\sqrt{h(x)}} = \\frac{\\beta_0}{\\sqrt{h(x)}} + \\beta_1 \\frac{x}{\\sqrt{h(x)}} + \\frac{u}{\\sqrt{h(x)}} $$
令 $y^* = y/\\sqrt{h(x)}$，$x_0^* = 1/\\sqrt{h(x)}$，$x_1^* = x/\\sqrt{h(x)}$，$u^* = u/\\sqrt{h(x)}$。
则变换后的回归方程为：
$$ y^* = \\beta_0 x_0^* + \\beta_1 x_1^* + u^* $$
对该方程使用 OLS 估计即为加权最小二乘法（WLS）。

---

# Chapter 8 Computer Exercise C2

## Problem

使用数据 \`HPRICE1\`。
(i) 估计模型 $\\log(price) = \\beta_0 + \\beta_1 \\log(lotsize) + \\beta_2 \\log(sqrft) + \\beta_3 bdrms + u$。
(ii) 使用 Breusch-Pagan 检验或 White 检验来检验异方差性。
(iii) 如果存在异方差性，应该如何处理？

## Solution

(i)
使用 OLS 估计方程。通常得到的结果显示 \`log(sqrft)\` 和 \`bdrms\` 等显著。
$$ \\widehat{\\log(price)} = -1.30 + 0.168 \\log(lotsize) + 0.700 \\log(sqrft) + 0.037 bdrms $$

(ii)
**Breusch-Pagan 检验：**
1. 获得残差 $\\hat{u}$。
2. 运行辅助回归：$\\hat{u}^2$ 对所有自变量 ($\\log(lotsize), \\log(sqrft), bdrms$) 进行回归。
3. 计算 $LM = n \\cdot R^2_{\\hat{u}^2}$ 或 $F$ 统计量。
通常在该数据集中，BP 检验的 $p$ 值较小（例如小于 0.05），拒绝同方差原假设，表明**存在异方差性**。

**White 检验：**
使用 $\\hat{y}$ 和 $\\hat{y}^2$ 解释 $\\hat{u}^2$。通常也会拒绝同方差假设。

(iii)
由于存在异方差性，通常的标准误是无效的。应该：
1. 报告**异方差稳健标准误**（Heteroskedasticity-robust standard errors）。
2. 或者，如果知道异方差的形式，可以使用**加权最小二乘法 (WLS)** 来获得更有效的估计。

---

# Chapter 15 Problem 1

## Problem

考虑简单回归模型 $y = \\beta_0 + \\beta_1 x + u$。令 $z$ 为 $x$ 的工具变量（IV）。
(i) 写出 $\\beta_1$ 的 IV 估计量的表达式。
(ii) 证明如果 $Cov(z, u) = 0$ 且 $Cov(z, x) \\neq 0$，则 IV 估计量是一致的。

## Solution

(i)
IV 估计量 $\\hat{\\beta}_1^{IV}$ 的公式为：
$$ \\hat{\\beta}_1^{IV} = \\frac{\\sum_{i=1}^n (z_i - \\bar{z})(y_i - \\bar{y})}{\\sum_{i=1}^n (z_i - \\bar{z})(x_i - \\bar{x})} $$
或者写成样本协方差的形式：
$$ \\hat{\\beta}_1^{IV} = \\frac{\\widehat{Cov}(z, y)}{\\widehat{Cov}(z, x)} $$

(ii)
将 $y = \\beta_0 + \\beta_1 x + u$ 代入估计量公式的分子：
$$ \\widehat{Cov}(z, y) = \\widehat{Cov}(z, \\beta_0 + \\beta_1 x + u) = \\beta_1 \\widehat{Cov}(z, x) + \\widehat{Cov}(z, u) $$
因此：
$$ \\hat{\\beta}_1^{IV} = \\frac{\\beta_1 \\widehat{Cov}(z, x) + \\widehat{Cov}(z, u)}{\\widehat{Cov}(z, x)} = \\beta_1 + \\frac{\\widehat{Cov}(z, u)}{\\widehat{Cov}(z, x)} $$
根据大数定律，当 $n \\to \\infty$ 时，样本协方差收敛于总体协方差：
$$ \\text{plim } \\hat{\\beta}_1^{IV} = \\beta_1 + \\frac{Cov(z, u)}{Cov(z, x)} $$
因为假设 $Cov(z, u) = 0$（外生性）且 $Cov(z, x) \\neq 0$（相关性），后一项为 0。
所以 $\\text{plim } \\hat{\\beta}_1^{IV} = \\beta_1$，即 IV 估计量是一致的。

---

# Chapter 15 Problem 3

## Problem

假设我们要估计 $y = \\beta_0 + \\beta_1 x + u$，其中 $z$ 是 $x$ 的一个**二值**（binary, 取值 0 或 1）工具变量。
证明 IV 估计量 $\\hat{\\beta}_1^{IV}$ 可以写成 Wald 估计量的形式：
$$ \\hat{\\beta}_1^{IV} = \\frac{\\bar{y}_1 - \\bar{y}_0}{\\bar{x}_1 - \\bar{x}_0} $$
其中 $\\bar{y}_1$ 是 $z=1$ 组样本的 $y$ 均值，$\\bar{y}_0$ 是 $z=0$ 组的 $y$ 均值（$x$ 同理）。

## Solution

根据 IV 估计量的公式：
$$ \\hat{\\beta}_1^{IV} = \\frac{\\sum (z_i - \\bar{z})y_i}{\\sum (z_i - \\bar{z})x_i} $$
对于二值变量 $z$，我们可以证明 $\\sum (z_i - \\bar{z})y_i$ 等比例于两组均值之差。
注意到 OLS 回归 $y$ 关于 $z$ 的斜率系数为 $\\hat{\\rho}_1 = (\\bar{y}_1 - \\bar{y}_0)$（这是虚拟变量回归的性质）。而斜率系数的公式为 $\\frac{\\sum(z_i-\\bar{z})y_i}{\\sum(z_i-\\bar{z})^2}$。
因此，$\\sum(z_i-\\bar{z})y_i = (\\bar{y}_1 - \\bar{y}_0) \\cdot \\sum(z_i-\\bar{z})^2$。

同理，对于分母 $x$，有 $\\sum(z_i-\\bar{z})x_i = (\\bar{x}_1 - \\bar{x}_0) \\cdot \\sum(z_i-\\bar{z})^2$。

将两者代入 IV 公式：
$$ \\hat{\\beta}_1^{IV} = \\frac{(\\bar{y}_1 - \\bar{y}_0) \\cdot \\text{SST}_z}{(\\bar{x}_1 - \\bar{x}_0) \\cdot \\text{SST}_z} = \\frac{\\bar{y}_1 - \\bar{y}_0}{\\bar{x}_1 - \\bar{x}_0} $$
这正是 Wald 估计量（或分组均值法）。

---

# Chapter 15 Computer Exercise C2

## Problem

使用数据 \`FERTIL2\`。这些数据包含博茨瓦纳妇女的生育情况。
(i) 使用 OLS 估计模型：
$$ children = \\beta_0 + \\beta_1 educ + \\beta_2 age + \\beta_3 age^2 + u $$
解释 $\\beta_1$ 的含义。
(ii) 假如我们认为 \`educ\` 是内生的。使用变量 \`frsthalf\`（如果出生在这一年的前六个月则为 1，否则为 0）作为 \`educ\` 的工具变量。首先，运行第一阶段回归（\`educ\` 对 \`frsthalf\` 及其他外生变量），检验 \`frsthalf\` 是否与 \`educ\` 显著相关。
(iii) 使用 \`frsthalf\` 作为 IV 估计上述方程。比较 \`educ\` 的系数与 OLS 结果。

## Solution

(i)
OLS 估计结果通常显示 \`educ\` 的系数为负且显著（例如 -0.09 左右）。
这意味着，在保持年龄不变的情况下，每多受一年教育，预计生育的孩子数量减少约 0.09 个。这反映了教育对生育率的负向影响。

(ii)
**第一阶段回归**：
$$ educ = \\pi_0 + \\pi_1 frsthalf + \\pi_2 age + \\pi_3 age^2 + v $$
检查 \`frsthalf\` 的 $t$ 统计量。
通常在该数据集中，\`frsthalf\` 的系数为负且显著（例如 $t$ 绝对值大于 2）。这意味着出生在上半年的女性受教育年限较少（可能与入学年龄政策有关）。由于关联显著，满足工具变量的相关性条件（Instrument Relevance）。

(iii)
**IV (2SLS) 估计**：
使用 \`ivregress\` (Stata) 或类似命令。
IV 估计出的 \`educ\` 系数通常也为负，但绝对值往往比 OLS 更大（例如 -0.17 左右），尽管标准误也会变大。
这表明 OLS 可能低估了教育对生育率的负面影响（即 OLS 结果偏向于 0），或者 IV 估计的是特定人群（LATE）的效应。这也可能暗示了遗漏变量（如能力或家庭背景）导致 OLS 存在正向偏差（Ability bias usually implies upward bias in wage, here maybe different dynamics, but the point is the estimates differ）。`;export{n as default};
