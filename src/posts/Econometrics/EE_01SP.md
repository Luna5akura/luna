# 1.1.1 推论证明

## $E[Y|X] = \argmin E[(Y-f(X))^2]$

证明：

 $\begin{aligned} \mathcal{L}(f) & =E\left[(Y-f(X))^{2}\right] \\ & =E\left[(E[Y \mid X]+\varepsilon-f(X))^{2}\right] \\ & =E\left[((E[Y \mid X]-f(X))+\varepsilon)^{2}\right] \\ & =E\left[(E[Y \mid X]-f(X))^{2}+2(E[Y \mid X]-f(X)) \varepsilon+\varepsilon^{2}\right] \\ & =E\left[(E[Y \mid X]-f(X))^{2}\right]+2 E[(E[Y \mid X]-f(X)) \varepsilon]+E\left[\varepsilon^{2}\right]\end{aligned} $

- $\varepsilon = Y - E[Y\mid X]$

注意到 $ E[\varepsilon \mid X]=0 \Rightarrow E[(E[Y \mid X]-f(X)) \varepsilon]=0 $

- $ E[g(X) \cdot \varepsilon]=E[E[g(X) \cdot \varepsilon \mid X]] = E[g(X)\cdot E[\varepsilon \mid X]] $

可得： $\mathcal {L}(f) = E\left[(E[Y \mid X]-f(X))^{2}\right] + E[\varepsilon^2]$

# 1.3.1

$u$: 残差，预测值和实际值的差距

# 矩估计

通过构造 $E[g_i (X,\theta )] = 0 $ 来通过样本估计参数

## 1.4.1 矩估计 证明

$
\left\{\begin{array}{l}
\frac{1}{n} \sum_{i=1}^{n}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right)=0 \\
\frac{1}{n} \sum_{i=1}^{n} X_{i}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right)=0
\end{array}\right.
$

化简得到：

$
\begin{array}{l}
\bar{Y}-\beta_{0}-\beta_{1} \bar{X}=0 \\
\overline{X Y}-\beta_{0} \bar{X}-\beta_{1} \overline{X^{2}}=0
\end{array}
$

代入：

$
\beta_{0}=\bar{Y}-\beta_{1} \bar{X}
$

得到：

$
\begin{array}{l}
\overline{X Y}-\left(\bar{Y}-\beta_{1} \bar{X}\right) \bar{X}-\beta_{1} \overline{X^{2}}=0 \\
\overline{X Y}-\bar{Y} \bar{X}+\beta_{1} \bar{X}^{2}-\beta_{1} \overline{X^{2}}=0 \\
\overline{X Y}-\bar{Y} \bar{X}=\beta_{1}\left(\overline{X^{2}}-\bar{X}^{2}\right)
\end{array}
$

可得：

$
\hat{\beta}_{1}=\frac{\overline{X Y}-\bar{X} \bar{Y}}{\overline{X^{2}}-\bar{X}^{2}}
$



$
\hat{\beta}_{0}=\bar{Y}-\hat{\beta}_{1} \bar{X}
$

最终结果：

$
\begin{array}{l}
\hat{\beta}_{1}=\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)\left(Y_{i}-\bar{Y}\right)}{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}} \\
\hat{\beta}_{0}=\bar{Y}-\hat{\beta}_{1} \bar{X}
\end{array}
$

## 1.4.2 最小二乘法 证明

求偏导有：

$
\begin{array}{c}
\frac{\partial S}{\partial \beta_{0}}=-2 \sum_{i=1}^{n}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right)=0 \\
\frac{\partial S}{\partial \beta_{1}}=-2 \sum_{i=1}^{n} X_{i}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right)=0
\end{array}
$

可得：

$
\begin{aligned}
\sum_{i=1}^{n}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right) & =0 \\
\sum_{i=1}^{n} X_{i}\left(Y_{i}-\beta_{0}-\beta_{1} X_{i}\right) & =0
\end{aligned}
$

下同

## 1.5 无偏估计

对于样本方差：

$ \begin{array}{l}s_{X}^{2}=\frac{1}{n-1} \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2} \\ \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=\sum_{i=1}^{n} X_{i}^{2}-n \bar{X}^{2} \\ s_{X}^{2}=\frac{1}{n-1}\left(\sum_{i=1}^{n} X_{i}^{2}-n \bar{X}^{2}\right) \\ \mathbb{E}\left[s_{X}^{2}\right]=\frac{1}{n-1}\left(\mathbb{E}\left[\sum_{i=1}^{n} X_{i}^{2}\right]-n \mathbb{E}\left[\bar{X}^{2}\right]\right) \\ \mathbb{E}\left[X_{i}^{2}\right]=\sigma^{2}+\mu^{2} \\ \mathbb{E}\left[\sum_{i=1}^{n} X_{i}^{2}\right]=n\left(\sigma^{2}+\mu^{2}\right) \\ \mathbb{E}\left[\bar{X}^{2}\right]=\frac{\sigma^{2}}{n}+\mu^{2} \\ n \mathbb{E}\left[\bar{X}^{2}\right]=\sigma^{2}+n \mu^{2} \\ \mathbb{E}\left[s_{X}^{2}\right]=\frac{1}{n-1}\left(n\left(\sigma^{2}+\mu^{2}\right)-\left(\sigma^{2}+n \mu^{2}\right)\right) \\ =\frac{1}{n-1}\left(n \sigma^{2}+n \mu^{2}-\sigma^{2}-n \mu^{2}\right) \\ =\frac{1}{n-1}(n-1) \sigma^{2} \\ \mathbb{E}\left[s_{X}^{2}\right]=\sigma^{2}\end{array} $

对于样本协方差：

$ \begin{array}{l}s_{X Y}=\frac{1}{n-1} \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)\left(Y_{i}-\bar{Y}\right) \\ \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)\left(Y_{i}-\bar{Y}\right)=\sum_{i=1}^{n} X_{i} Y_{i}-n \bar{X} \bar{Y} \\ s_{X Y}=\frac{1}{n-1}\left(\sum_{i=1}^{n} X_{i} Y_{i}-n \bar{X} \bar{Y}\right) \\ \mathbb{E}\left[s_{X Y}\right]=\frac{1}{n-1}\left(\mathbb{E}\left[\sum_{i=1}^{n} X_{i} Y_{i}\right]-n \mathbb{E}[\bar{X} \bar{Y}]\right) \\ \mathbb{E}\left[X_{i} Y_{i}\right]=\operatorname{Cov}\left(X_{i}, Y_{i}\right)+\mu_{X} \mu_{Y}=\sigma_{X Y}+\mu_{X} \mu_{Y} \\ \mathbb{E}\left[\sum_{i=1}^{n} X_{i} Y_{i}\right]=n\left(\sigma_{X Y}+\mu_{X} \mu_{Y}\right) \\ \mathbb{E}[\bar{X} \bar{Y}]=\operatorname{Cov}(\bar{X}, \bar{Y})+\mu_{X} \mu_{Y}=\frac{\sigma_{X Y}}{n}+\mu_{X} \mu_{Y} \\ n \mathbb{E}[\bar{X} \bar{Y}]=\sigma_{X Y}+n \mu_{X} \mu_{Y} \\ \mathbb{E}\left[s_{X Y}\right]=\frac{1}{n-1}\left(n\left(\sigma_{X Y}+\mu_{X} \mu_{Y}\right)-\left(\sigma_{X Y}+n \mu_{X} \mu_{Y}\right)\right) \\ =\frac{1}{n-1}\left(n \sigma_{X Y}+n \mu_{X} \mu_{Y}-\sigma_{X Y}-n \mu_{X} \mu_{Y}\right) \\ =\frac{1}{n-1}(n-1) \sigma_{X Y} \\ \mathbb{E}\left[s_{X Y}\right]=\sigma_{X Y}\end{array} $




placeholder

placeholder

placeholder

placeholder

placeholder

placeholder


