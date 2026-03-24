---
category: Assignments
date: '2026-01-05'
title: Econometrics - Assignment - Week 5
---

# Chapter 13 Problem 2

## Problem

使用 `KIELMC` 数据中的 1978 年和 1981 年数据。标准 DID 模型（方程 13.9）为：
$$ \log(price) = \beta_0 + \delta_0 y81 + \beta_1 nearinc + \delta_1 (y81 \cdot nearinc) + u $$
其中 $\hat{\delta}_1$ 是我们关心的因果效应（焚化炉对房价的影响）。
(i) 如果我们在估计时遗漏了 $y81$（时间虚拟变量），得到的 $\hat{\delta}_1$ 会发生什么变化？它还能被解释为焚化炉的效应吗？
(ii) 如果我们在估计时遗漏了 $nearinc$（位置虚拟变量），得到的 $\hat{\delta}_1$ 会发生什么变化？
(iii) 解释为什么在 Difference-in-Differences (DID) 估计中，必须同时包含时间主效应和组别主效应。

## Solution

(i)
如果遗漏了 $y81$，模型变为：
$$ \log(price) = \beta_0 + \beta_1 nearinc + \delta_1 (y81 \cdot nearinc) + u $$
在这种情况下，交互项 $y81 \cdot nearinc$ 的系数将同时捕捉“焚化炉效应”和“1978 年到 1981 年的一般时间趋势（通货膨胀或房价普遍上涨）”。由于 1978 到 1981 年间房价普遍上涨，估计出的 $\hat{\delta}_1$ 将会严重向上偏倚（变得更正），甚至可能由负变正，从而掩盖焚化炉的负面影响。它不再是单纯的因果效应。

(ii)
如果遗漏了 $nearinc$，模型变为：
$$ \log(price) = \beta_0 + \delta_0 y81 + \delta_1 (y81 \cdot nearinc) + u $$
在这种情况下，交互项 $y81 \cdot nearinc$ 的系数将试图捕捉“靠近焚化炉的房子”和“远离焚化炉的房子”在基期（1978 年）的**固有价格差异**。如果靠近焚化炉的地区原本房价就低（这通常是真的），那么遗漏 $nearinc$ 会导致 $\hat{\delta}_1$ 吸收这个负的截距差，从而使估计值变得非常负，夸大了焚化炉的负面影响。

(iii)
DID 估计的核心思想是剔除两个混淆因素：
1.  **时间趋势**：所有组别随时间发生的自然变化（由 $y81$ 捕捉）。
2.  **组别差异**：处理组和控制组之间固有的、非随时间变化的差异（由 $nearinc$ 捕捉）。
只有同时控制了这两个主效应，交互项的系数才能准确衡量“相对于控制组，处理组在干预后发生的**额外**变化”，即因果效应。

---

# Chapter 13 Computer Exercise C1

## Problem

使用数据 `FERTIL1`。这是一个包含 1972 到 1984 年偶数年份数据的横截面数据集。
(i) 回归模型：$kids = \beta_0 + \beta_1 educ + \beta_2 age + \beta_3 age^2 + \beta_4 black + \beta_5 east + \beta_6 northcen + \beta_7 west + \beta_8 farm + \beta_9 othrural + \beta_{10} town + \beta_{11} smcity + \beta_{12} y74 + \dots + \beta_{17} y84 + u$。
检验假设：一旦控制了其他因素，生活环境（farm, othrural, town, smcity）对生育率没有影响。
(ii) 检验假设：一旦控制了其他因素，居住区域（east, northcen, west）对生育率没有影响。
(iii) 令 $u$ 为模型中的误差项。通过将 $u^2$ 回归到年份虚拟变量上，来检验误差方差是否随时间发生变化。
(iv) 在模型中加入 $educ$ 与年份虚拟变量的交互项（$y74 \cdot educ, \dots, y84 \cdot educ$）。检验教育的回报（对生育率的影响）是否随时间发生了显著变化。

## Solution

(i)
我们需要检验 $H_0: \beta_{farm}=0, \beta_{othrural}=0, \beta_{town}=0, \beta_{smcity}=0$。
使用 F 检验。通常结果显示 F 统计量较小，p 值大于 0.05（例如 p $\approx$ 0.33）。
**结论**：无法拒绝零假设。这意味着在控制了教育、年龄等变量后，目前的居住环境类型（农村、城镇等）对孩子数量没有显著影响。

(ii)
检验 $H_0: \beta_{east}=0, \beta_{northcen}=0, \beta_{west}=0$。
使用 F 检验。结果通常显示 F 统计量在 3 左右，p 值小于 0.05（例如 p $\approx$ 0.029）。
**结论**：拒绝零假设。居住的宏观区域（东部、中北部等）对生育率有显著影响。

(iii)
这是一个检验异方差性的步骤（类似于 Breusch-Pagan 检验的变体）。
1.  估计原模型，获得残差 $\hat{u}$。
2.  生成平方残差 $\hat{u}^2$。
3.  运行回归：$\hat{u}^2 = \delta_0 + \delta_1 y74 + \dots + \delta_6 y84 + error$。
4.  检验联合显著性 $H_0: \delta_1 = \dots = \delta_6 = 0$。
通常结果显示 F 统计量约为 2.90，p 值约为 0.008。
**结论**：拒绝零假设。误差项的方差随时间发生了显著变化（存在异方差性）。

(iv)
加入交互项后，进行联合显著性检验 $H_0: \beta_{y74 \cdot educ} = \dots = \beta_{y84 \cdot educ} = 0$。
F 统计量通常较小（约 1.15），p 值较大（约 0.33）。
**结论**：无法拒绝零假设。没有证据表明教育对生育率的影响在 1972 到 1984 年间发生了显著改变。

---

# Chapter 14 Problem 2

## Problem

考虑一个简单的固定效应模型：$y_{it} = \beta_0 + \beta_1 x_{it} + a_i + u_{it}$。
假设我们忽略了固定效应 $a_i$，使用**组间估计量（Between Estimator）**，即对每个个体求时间均值后进行横截面回归：
$$ \bar{y}_i = \beta_0 + \beta_1 \bar{x}_i + a_i + \bar{u}_i $$
假设 $E(a_i) = 0$，且 $Cov(\bar{x}_i, \bar{u}_i) = 0$（严格外生性）。
但是，假设 $Cov(\bar{x}_i, a_i) = \sigma_{xa} \neq 0$。
(i) 证明组间估计量 $\hat{\beta}_1^{BE}$ 的概率极限（plim）。
(ii) 它的偏差是什么？

## Solution

(i)
组间估计量 $\hat{\beta}_1^{BE}$ 是 $\bar{y}_i$ 对 $\bar{x}_i$ 的 OLS 估计量：
$$ \hat{\beta}_1^{BE} = \beta_1 + \frac{\sum (\bar{x}_i - \bar{\bar{x}})(a_i + \bar{u}_i)}{\sum (\bar{x}_i - \bar{\bar{x}})^2} $$
根据大数定律，当 $N \to \infty$ 时：
$$ \text{plim } \hat{\beta}_1^{BE} = \beta_1 + \frac{Cov(\bar{x}_i, a_i + \bar{u}_i)}{Var(\bar{x}_i)} $$
由于假设 $Cov(\bar{x}_i, \bar{u}_i) = 0$，因此：
$$ \text{plim } \hat{\beta}_1^{BE} = \beta_1 + \frac{Cov(\bar{x}_i, a_i)}{Var(\bar{x}_i)} $$

(ii)
由上式可知，偏差（Bias）为：
$$ \text{Bias} = \frac{Cov(\bar{x}_i, a_i)}{Var(\bar{x}_i)} $$
这说明，如果我们使用组间估计量（简单地对数据取平均然后回归），而个体的不可观测特征 $a_i$ 与自变量 $x_{it}$ 相关，那么估计结果是不一致的。这也是为什么我们需要固定效应模型（FE）或一阶差分模型（FD）来消除 $a_i$ 的原因。

---

# Chapter 14 Computer Exercise C1

## Problem

使用数据 `RENTAL`。该数据包含 1980 年和 1990 年的租金数据。
(i) 估计混合 OLS 模型：
$$ \log(rent) = \beta_0 + \delta_0 y90 + \beta_1 \log(pop) + \beta_2 \log(avginc) + \beta_3 pctstu + u $$
解释 $pctstu$（学生比例）的系数。
(ii) 上述方程的标准误是否有效？
(iii) 估计一阶差分（First Difference）方程。解释 $pctstu$ 的系数。
(iv) 估计固定效应（Fixed Effects）模型，并与 (iii) 的结果比较。

## Solution

(i)
**Pooled OLS 估计**：
$pctstu$ 的系数通常估计为正值（例如 0.005 左右），且非常显著。
**解释**：这意味着在控制人口和平均收入后，学生比例每增加 1 个百分点，租金大约增加 0.5%。这似乎表明学生多的大学城房租更贵。

(ii)
**无效。**
由于是面板数据（同一个城市在两个时间点的观测），误差项中包含了非观测的城市固定效应 $a_i$。对于同一个城市，1980 和 1990 年的误差项是序列相关的（Serial Correlation）。普通 OLS 标准误假设观测值独立，忽略了这种聚类相关性，导致标准误被低估，t 统计量被夸大。

(iii)
**一阶差分估计**：
$$ \Delta \log(rent) = \delta_0 + \beta_1 \Delta \log(pop) + \beta_2 \Delta \log(avginc) + \beta_3 \Delta pctstu + \Delta u $$
估计结果通常显示 $pctstu$ 的系数变得更大了（例如 0.011 左右），且仍然显著。
**解释**：学生比例每增加 1 个百分点，租金增长率增加 1.1%。控制了城市固定效应后，学生对房租的正向影响实际上比混合 OLS 估计的要大（翻倍）。这表明混合 OLS 受到未观测异质性的向下偏倚影响。

(iv)
**固定效应估计**：
对于只有两个时期（$T=2$）的面板数据，固定效应估计量（FE）和一阶差分估计量（FD）在数学上是**完全相同**的（除了截距项的解释可能略有不同，但斜率系数完全一致）。
因此，$pctstu$ 的系数和标准误将与 (iii) 中的结果完全一致。