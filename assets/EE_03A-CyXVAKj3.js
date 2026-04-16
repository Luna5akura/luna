const n=`---
category: Assignments
date: '2026-01-05'
title: Econometrics Assignment - Week 3
---

# Chapter 4 Problem 1

## Problem

以下哪项会导致通常的 OLS $t$ 统计量失效（即在 $H_0$ 下不服从 $t$ 分布）？
(i) 异方差性。
(ii) 模型中包含的两个自变量之间的样本相关系数为 0.95。
(iii) 遗漏了一个重要的解释变量。

## Solution

(i) **是。** 异方差性违反了经典线性模型（CLM）假设中的同方差假设（SLR.5 或 MLR.5）。如果存在异方差性，OLS 估计量的方差公式（以及随后的标准误）是不正确的，因此通常的 $t$ 统计量在零假设下不再服从 $t$ 分布（即使样本量很大，通常的 $t$ 统计量也不会渐近服从标准正态分布，除非使用稳健标准误）。

(ii) **否。** 虽然两个自变量之间 0.95 的高相关性（多重共线性）会导致标准误变大，从而降低 $t$ 统计量的绝对值（降低检验的功效），但只要满足 CLM 的假设 1 到 6，OLS 估计量仍然是无偏的，且 $t$ 统计量在零假设下仍然严格服从 $t$ 分布。

(iii) **是。** 遗漏一个重要的解释变量通常会导致遗漏变量偏差（Omitted Variable Bias），这违反了零条件均值假设（MLR.4）。这意味着误差项 $u$ 与模型中的自变量相关。在这种情况下，OLS 估计量是有偏且不一致的，通常的推断过程（包括 $t$ 统计量）将失效。

---

# Chapter 4 Computer Exercise C2

## Problem

使用数据 \`LAWSCH85\` 完成此练习。
(i) 使用与 Chapter 3 Problem 4 中相同的模型，说明并检验零假设：法律学院的排名（rank）对起薪中位数（median starting salary）没有 ceteris paribus（其他条件不变）的影响。
(ii) 检验 LSAT 和 GPA 对起薪没有影响的零假设。
(iii) 检验这一假设：一旦控制了 rank、LSAT 和 GPA，入学人数（clsize）和教职工人数（faculty）对起薪没有影响。

## Solution

(i)
模型为：
$$ \\log(salary) = \\beta_0 + \\beta_1 LSAT + \\beta_2 GPA + \\beta_3 \\log(libvol) + \\beta_4 \\log(cost) + \\beta_5 rank + u $$
我们要检验的零假设是 $H_0: \\beta_{rank} = 0$。
使用 OLS 估计该方程，通常会发现 $rank$ 的系数为负且在统计上非常显著（$t$ 统计量的绝对值通常很大，例如大于 9）。因此，我们强烈拒绝零假设。这意味着在控制了 LSAT、GPA 等变量后，学校排名越差（数字越大），起薪越低。

(ii)
我们要检验的零假设是 $H_0: \\beta_{LSAT} = 0, \\beta_{GPA} = 0$。
这是一个联合显著性检验。我们需要比较受限模型（不包含 LSAT 和 GPA）和非受限模型的 $R^2$ 或 SSR 来构建 $F$ 统计量。
$$ F = \\frac{(R_{ur}^2 - R_{r}^2)/2}{(1 - R_{ur}^2)/(n - k - 1)} $$
计算出的 $F$ 统计量通常在 9 左右（具体取决于样本量和精确估计值），对应的 p 值非常小（远小于 0.05）。因此，我们拒绝零假设，认为 LSAT 和 GPA 联合起来对起薪有显著影响。

(iii)
我们要检验的零假设是 $H_0: \\beta_{\\log(clsize)} = 0, \\beta_{\\log(faculty)} = 0$。
我们需要将 $\\log(clsize)$ 和 $\\log(faculty)$ 加入到模型中，构成非受限模型，而原模型为受限模型。
构建 $F$ 统计量进行检验。通常情况下，这两个变量的联合检验的 p 值较大（例如大于 0.5），这意味着我们无法拒绝零假设。也就是说，一旦控制了生源质量（LSAT, GPA）、学校资源（libvol, cost）和排名（rank），学校规模和教职工数量对起薪没有显著的额外影响。

---

# Chapter 5 Problem 3

## Problem

在简单回归模型 $y = \\beta_0 + \\beta_1 x + u$ 中，假设 $E(u) \\neq 0$。令 $\\alpha_0 = E(u)$，则 $E(u) = \\alpha_0$。
(i) 证明我们可以将模型写成 $y = \\gamma_0 + \\beta_1 x + e$，其中 $E(e) = 0$。
(ii) 考虑吸烟案例。令 $cigs$ 为每人每天抽烟的数量。这个变量是否服从正态分布？
(iii) 如果 $cigs$ 不服从正态分布，OLS 估计量是否仍然满足无偏性？在大样本下是否可以进行 $t$ 检验？

## Solution

(i)
原模型为 $y = \\beta_0 + \\beta_1 x + u$。
定义 $e = u - \\alpha_0$。由于 $E(u) = \\alpha_0$，则 $E(e) = E(u - \\alpha_0) = E(u) - \\alpha_0 = 0$。
将 $u = e + \\alpha_0$ 代入原方程：
$$ y = \\beta_0 + \\beta_1 x + (e + \\alpha_0) = (\\beta_0 + \\alpha_0) + \\beta_1 x + e $$
定义新的截距项 $\\gamma_0 = \\beta_0 + \\alpha_0$，则模型变为：
$$ y = \\gamma_0 + \\beta_1 x + e $$
其中新的误差项 $e$ 的期望为 0。这表明只要截距项可以自由变化，误差项均值不为零并不会影响斜率 $\\beta_1$ 的估计。

(ii)
**不服从。** 对于普通人群来说，大部分人不吸烟，因此 $cigs$ 在 0 处有一个巨大的“堆积”（mass point）。对于吸烟者，数量是正的且连续（或离散整数）。这种分布显然不是对称的，更不是正态分布。

(iii)
OLS 估计量的**无偏性**不依赖于误差项的正态性假设，只依赖于高斯-马尔可夫假设（主要是零条件均值假设）。因此，只要其他假设满足，OLS 仍然是无偏的。
关于推断，虽然误差项不是正态分布，导致小样本下 $t$ 统计量不服从 $t$ 分布，但根据**大数定律和中心极限定理**，当样本容量 $n$ 足够大时，OLS 估计量是渐近正态分布的。因此，在大样本下，我们仍然可以使用通常的 $t$ 统计量和置信区间进行有效的统计推断。

---

# Chapter 5 Problem 4

## Problem

假设总体模型为 $y = \\beta_0 + \\beta_1 x + u$，其中 $E(u|x) = 0$ 且 $Var(u|x) = \\sigma^2$。推导 $\\hat{\\beta}_1$ 的渐近方差。

## Solution

简单线性回归中斜率估计量 $\\hat{\\beta}_1$ 可以写为：
$$ \\hat{\\beta}_1 = \\beta_1 + \\frac{\\sum_{i=1}^n (x_i - \\bar{x})u_i}{\\sum_{i=1}^n (x_i - \\bar{x})^2} $$
两边减去 $\\beta_1$ 并乘以 $\\sqrt{n}$：
$$ \\sqrt{n}(\\hat{\\beta}_1 - \\beta_1) = \\frac{\\frac{1}{\\sqrt{n}} \\sum_{i=1}^n (x_i - \\bar{x})u_i}{\\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^2} $$
根据大数定律，分母依概率收敛于 $x$ 的方差，即 $\\text{plim}(\\frac{1}{n} \\text{SST}_x) = \\text{Var}(x) = \\sigma_x^2$。
根据中心极限定理，分子 $\\frac{1}{\\sqrt{n}} \\sum (x_i - \\bar{x})u_i$ 依分布收敛于正态分布 $N(0, \\sigma^2 \\sigma_x^2)$。

因此，$\\sqrt{n}(\\hat{\\beta}_1 - \\beta_1)$ 依分布收敛于 $N(0, \\frac{\\sigma^2 \\sigma_x^2}{(\\sigma_x^2)^2}) = N(0, \\frac{\\sigma^2}{\\sigma_x^2})$。
所以，$\\hat{\\beta}_1$ 的渐近方差（Asymptotic Variance）为：
$$ \\text{Avar}(\\hat{\\beta}_1) = \\frac{\\sigma^2}{n \\sigma_x^2} = \\frac{\\sigma^2}{\\text{SST}_x} $$
这与有限样本下的方差公式形式一致。

---

# Chapter 5 Computer Exercise C2

## Problem

使用数据 \`GPA2\`。
(i) 使用 OLS 估计模型：$colgpa = \\beta_0 + \\beta_1 hsperc + \\beta_2 sat + u$，报告结果。
(ii) 假设 \`hsperc\` = 20，\`sat\` = 1050，求预测的 \`colgpa\`。
(iii) 假设误差项 $u$ 不服从正态分布，这在多大程度上会影响你在 (i) 中的标准误估计？

## Solution

(i)
估计结果通常如下（取决于具体样本数据，以下为标准参考值）：
$$ \\widehat{colgpa} = 1.392 - 0.0135 hsperc + 0.00148 sat $$
$$ n = 4137, R^2 = 0.273 $$
（注意：$hsperc$ 为高中排名百分比，系数通常为负，表示排名前百分比数值越小成绩越好；$sat$ 系数通常为正。）

(ii)
将 $hsperc = 20$ 和 $sat = 1050$ 代入方程：
$$ \\widehat{colgpa} = 1.392 - 0.0135(20) + 0.00148(1050) $$
$$ \\widehat{colgpa} = 1.392 - 0.27 + 1.554 = 2.676 $$
预测的大学平均绩点约为 2.68。

(iii)
影响很小。
虽然经典的小样本推断（如 $t$ 分布 critical values）依赖于误差项的正态性，但该数据集的样本量 $n=4137$ 非常大。根据渐近理论（Asymptotic Theory），即使误差项不服从正态分布，OLS 估计量的抽样分布也非常接近正态分布。因此，报告的标准误和 $t$ 统计量在大样本下是渐近有效的，我们不需要过分担心误差项的非正态性。

---

# Chapter 6 Problem 6

## Problem

使用 \`WAGE1\` 数据估计了以下方程：
$$ \\widehat{\\log(wage)} = 5.95 + 0.0440 educ - 0.0215 exper + 0.00320 educ \\cdot exper $$
(i) 说明回报率（return to experience）不仅取决于 $exper$，还取决于 $educ$。
(ii) 计算当 $educ = 10$ 时，exper 的回报率（即 exper 增加 1 年，工资变化的百分比）。
(iii) 计算当 $educ = 10$ 时，exper = 10 年这一点的回报率。

## Solution

(i)
对模型关于 $exper$ 求偏导：
$$ \\frac{\\partial \\log(wage)}{\\partial exper} = -0.0215 + 0.00320 educ $$
可以看到，工作经验的边际回报率直接取决于受教育年限 $educ$。$educ$ 越高，经验的回报率越高（交互项系数为正）。

(ii)
当 $educ = 10$ 时，将值代入偏导数公式：
$$ \\Delta \\log(wage) / \\Delta exper \\approx -0.0215 + 0.00320(10) = -0.0215 + 0.0320 = 0.0105 $$
这意味这当受教育年限为 10 年时，多一年工作经验，工资大约增加 1.05%。

(iii)
这个问题可能存在理解歧义，通常是询问特定点及其显著性，或者计算特定 $educ$ 下的回报。在上述公式中，回报率是恒定的线性函数（对于给定的 $educ$），不随 $exper$ 本身变化（因为模型中没有 $exper^2$）。
如果在 $educ=10$ 的条件下，无论 $exper$ 是多少，边际回报都是 1.05%。
(注：如果题目是指 $educ \\cdot exper$ 对工资的边际影响，或者是询问 $educ$ 的回报，请参考：$\\frac{\\partial \\log(wage)}{\\partial educ} = 0.0440 + 0.00320 exper$。当 $exper=10$ 时，教育的回报率为 $0.0440 + 0.0032(10) = 0.076$，即 7.6%。)

---

# Chapter 6 Problem 8

## Problem

使用年度销售数据（Annual Sales Data）估计了以下模型：
$$ \\widehat{sales} = -115.2 + 8.12 price + 0.0215 ads - 0.00018 ads^2 $$
(i) $price$ 的系数符号是否符合经济学直觉？
(ii) $ads$（广告支出）的系数符号是否合理？是否存在边际收益递减？
(iii) 计算使销售额最大化的最优广告支出水平。

## Solution

(i)
**不符合。** 根据需求定律，价格 $price$ 上升通常会导致需求量（以及通常的销售额，取决于弹性）下降。这里系数为正（8.12），意味着价格越高销售额越高，这在通常的供需模型中是不直观的（除非是奢侈品或供给方程，但这显然是销售方程）。这可能暗示了遗漏变量偏差（例如高质量产品价格高且销量好）。

(ii)
**合理。** $ads$ 的一次项系数为正（0.0215），二次项系数为负（-0.00018）。这意味着广告支出对销售额有正向影响，但随着广告支出的增加，这种影响是递减的（倒 U 型关系），这符合边际收益递减规律。

(iii)
为了找到最优广告支出，我们将方程对 $ads$ 求导并令其为 0：
$$ \\frac{\\partial sales}{\\partial ads} = 0.0215 - 2(0.00018) ads = 0 $$
$$ 0.0215 - 0.00036 ads = 0 $$
$$ ads^* = \\frac{0.0215}{0.00036} \\approx 59.72 $$
因此，使销售额最大化的最优广告支出水平约为 59.72（单位通常为千美元或百万美元，取决于数据定义）。

---

# Chapter 6 Computer Exercise C1

## Problem

使用数据 \`KIELMC\`。
(i) 估计模型：$\\log(price) = \\beta_0 + \\beta_1 \\log(dist) + \\beta_2 [\\log(dist)]^2 + \\beta_3 \\log(area) + \\dots + u$（仅使用 1981 年的数据）。
(ii) 二次项 $\\log(dist)^2$ 显著吗？
(iii) 解释距离对房价的边际效应。

## Solution

(i)
使用 1981 年的子样本运行回归。模型通常包含房屋特征（如 \`rooms\`, \`baths\`, \`age\` 等）。
回归结果中，关注 $\\log(dist)$ 和 $[\\log(dist)]^2$ 的系数。

(ii)
查看 $[\\log(dist)]^2$ 的 $t$ 统计量。通常在该数据集中，二次项是**显著的**（p 值很小）。这意味着距离和房价之间存在非线性关系。

(iii)
由于存在二次项，距离对房价的弹性不是常数，而是取决于距离本身：
$$ \\frac{\\partial \\log(price)}{\\partial \\log(dist)} = \\beta_1 + 2\\beta_2 \\log(dist) $$
我们需要结合 $\\beta_1$ 和 $\\beta_2$ 的符号来解释。通常发现关系可能是 U 型或倒 U 型，但在相关样本区间内，距离越远房价通常越高（远离焚化炉），但边际效应会发生变化。

---

# Chapter 6 Computer Exercise C3

## Problem

使用数据 \`WAGE1\`。
(i) 估计模型：$\\log(wage) = \\beta_0 + \\beta_1 educ + \\beta_2 exper + \\beta_3 exper^2 + u$。
(ii) $exper^2$ 是否显著？
(iii) 计算经验回报率为正的最大工作年限（turning point）。在该样本中大约有多少人的经验超过了这个值？

## Solution

(i)
估计结果通常如下：
$$ \\widehat{\\log(wage)} \\approx \\text{const} + 0.091 educ + 0.041 exper - 0.0007 exper^2 $$
（注：系数为近似值）。

(ii)
检验 $H_0: \\beta_{exper^2} = 0$。
$t$ 统计量通常绝对值很大（例如 > 4），p 值接近 0。因此，**显著**。这证实了工资与工作经验之间存在倒 U 型关系（经验带来的工资增长是边际递减的）。

(iii)
转折点（Turning Point）计算：
$$ exper^* = \\frac{-\\hat{\\beta}_{exper}}{2\\hat{\\beta}_{exper^2}} \\approx \\frac{-0.041}{2(-0.0007)} \\approx \\frac{0.041}{0.0014} \\approx 29.3 \\text{ 年} $$
在大约 29 到 30 年后，工作经验对工资的边际贡献变为负值。
查看数据描述性统计，可以发现样本中有一部分人的工作经验超过了 29 年（通常比例不小），这表明对于非常资深的员工，工资可能会随着年龄/经验的进一步增加而停滞甚至略微下降（虽然这可能也包含年龄歧视等其他因素）。`;export{n as default};
