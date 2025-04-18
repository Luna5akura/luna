# Cheat sheet

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{分布} & \text{概率密度函数 (PDF)} & \text{均值} & \text{方差} & \text{矩母函数 (MGF)} \\
\hline
\text{伯努利分布 } (p) & 
f(x) = p^x (1-p)^{1-x}, \quad x \in \{0,1\} & 
p & 
p(1-p) & 
1 - p + pe^t \\
\hline
\text{二项分布 } (n, p) & 
f(x) = \binom{n}{x} p^x (1-p)^{n-x}, \quad x \in \{0,1,\dots,n\} & 
np & 
np(1-p) & 
(1 - p + pe^t)^n \\
\hline
\text{泊松分布 } (\lambda) & 
f(x) = \frac{e^{-\lambda} \lambda^x}{x!}, \quad x \in \{0,1,2,\dots\} & 
\lambda & 
\lambda & 
e^{\lambda(e^t - 1)} \\
\hline
\text{几何分布 } (p) & 
f(x) = p(1-p)^{x-1}, \quad x \in \{1,2,\dots\} & 
\frac{1}{p} & 
\frac{1-p}{p^2} & 
\frac{pe^t}{1 - (1 - p)e^t} \\
\hline
\text{均匀分布 } (a, b) & 
f(x) = \frac{1}{b-a}, \quad x \in [a,b] & 
\frac{a + b}{2} & 
\frac{(b - a)^2}{12} & 
\frac{e^{tb} - e^{ta}}{t(b - a)} \\
\hline
\text{正态分布 } (\mu, \sigma^2) & 
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad x \in \mathbb{R} & 
\mu & 
\sigma^2 & 
e^{\mu t + \frac{1}{2}\sigma^2 t^2} \\
\hline
\text{指数分布 } (\lambda) & 
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0 & 
\frac{1}{\lambda} & 
\frac{1}{\lambda^2} & 
\frac{\lambda}{\lambda - t} \\
\hline
\text{伽马分布 } (\alpha, \beta) & 
f(x) = \frac{\beta^\alpha x^{\alpha-1} e^{-\beta x}}{\Gamma(\alpha)}, \quad x \geq 0 & 
\frac{\alpha}{\beta} & 
\frac{\alpha}{\beta^2} & 
\left(\frac{\beta}{\beta - t}\right)^\alpha \\
\hline
\text{卡方分布 } (k) & 
f(x) = \frac{x^{k/2-1} e^{-x/2}}{2^{k/2} \Gamma(k/2)}, \quad x \geq 0 & 
k & 
2k & 
(1 - 2t)^{-k/2} \\
\hline
\end{array}
$$


# Probability

## Sample Space & Event

- Sample Space: $S$

- Event: $E$, a subset of $S$
  - Union: $E\cup F$
    - $\cup_{n=1}^\infty E_n$
  - Intersection: $E\cap F $ or $EF$
    - $\cap_{n=1}^\infty E_n$
  - Mutually Exclusive: $EF = \oslash$
  - Complement: $E^c$


## Inclusion-Exclusion Principle

> $P(E\cup F) = P(E) + P(F) - P(EF)$


## Conditional Probability

> $P(E|F) = \dfrac{P(EF)}{P(F)}, P(F)>0$

## Independent Event

Events Independent if:

> $P(EF) = P(E)P(F)$
> - Or: $P(E|F) = P(E)$

For multiple events:

> $P(E_1\dots E_r) = P(E_1)\dots P(E_r), \forall r\le n$

## Bayes' Rule 

> $ P\left(F_{j} \mid E\right)=\dfrac{P\left(F_{j} E\right)}{P(E)}=\dfrac{P\left(E \mid F_{j}\right) P\left(F_{j}\right)}{\sum_{i=1}^{n} P\left(E \mid F_{i}\right) P\left(F_{i}\right)} $
> - $F_1,\dots,F_n$ mutually exclusive 
> - Notice: $ \cup_{i=1}^{n} F_{i}=S $
>
> Some corollaries:
>
> $ E=E \cap S=E \cap\left(F \cup F^{c}\right)=E F \cup E F^{c} $
>
> $ P(E)=P(E \mid F) P(F)+P\left(E \mid F^{c}\right) P\left(F^{c}\right) $
>
> $ P(D \mid E)=\dfrac{P(D E)}{P(E)}=\dfrac{P(E \mid D) P(D)}{P(E \mid D) P(D)+P\left(E \mid D^{c}\right) P\left(D^{c}\right)} $

# Random Variable (RV)

- $X$: Bounded Real Function definitioned on Sample Space 

- $F(\cdot)$: Cumulative Distribution Function (CDF)
- $F(b) = P\{X\le b\}, \forall b $
  - $F(b)$ non-decreasing 
  - $ \lim _{b \rightarrow \infty} F(b)=F(\infty)=1 $
  - $ \lim _{b \rightarrow-\infty} F(b)=F(-\infty)=0 $
  - $ P(X<b)=\lim _{h \rightarrow 0^{+}} F(b-h) $

## Discrete Random Variable

- Probability Distribution Function (PDF)

$ p(a)=P\{X=a\} $

- Bernoulli 
- Binom 
- Geometry 
- Possion 

A special case:

When a Binom Distribution with small $p$ and large $n$

$$
\begin{aligned}
&p(i)\\ 
=& \binom{n}{i}p^i(1-p)^{n-i}\\ 
=& \dfrac{n!}{i!(n-i)!}p^i(1-p)^{n-i}\\
\overset{\lambda=np}{=}&
\dfrac{n(n-1)\dots(n-i+1)}{i!}\cdot\dfrac{\lambda^i}{n^i}\cdot\dfrac{(1-\frac{\lambda}{n})^n}{(1-\frac{\lambda}{n})^i}\\ 
=&1\cdot \dfrac{\lambda^i}{n^i}\cdot\dfrac{e^{-\lambda}}{1}\\
=&e^{-\lambda}\dfrac{\lambda^i}{i!}
\end{aligned}
$$

## Continuous Random Variable

pdf:

$P\{X\in B\} = \int_B f(x)dx, \forall B$

An important approximation:
- $\int_{a - \epsilon/2}^{a +\epsilon/2} f(x)dx \approx \epsilon f(a)$

cdf:

$F(a) = P\{X\in(-\infty, a]\} = \int_{-\infty}^a f(x)dx$

- Uniform
- Exponential
- Gamma
- Normal

## Expectation

Discrete:

- $E(X) = \sum_{x:p(x)>0}xp(x)$

Continuous:

- $E(x) = \int_{-\infty}^{\infty}xf(x)dx$

$$
\begin{array}{|l|l|}
\hline Bernoulli & p\\ 
\hline Binom & np\\ 
\hline Geometry & 1/p \\ 
\hline Possion & \lambda \\ 
\hline Uniform & (\alpha + \beta) / 2 \\ 
\hline Exponential & \alpha / \lambda \\ 
\hline Normal & \mu \\ 
\hline
\end{array}
$$

Corollaries:

- For Discrete RV:
  - $E[g(x)] = \sum_{x:p(x)>0} g(x)p(x) $
- For Continuous RV:
  - $E[g(x)] = \int_{-\infty}^\infty g(x)f(x)dx$

---

Moment:

- $E(X^n)$

Variation:

- $Var(X) = E[(X-E[X])^2] = E(X^2)-(EX)^2$

## Joint Distributino 

CDF:

$F(a,b) = P\{X\le a, Y\le b\}, -\infty < a,b < \infty $

PDF:

$p(x,y) = P\{X=x, Y=y\}$

Expectation:

- $E[g(X,Y)] = \sum_x\sum_y g(x,y)p(x,y)$
- $E[g(X,Y)] = \int_{-\infty}^\infty\int_{-\infty}^\infty g(x,y)f(x,y)dxdy$

### Independent

They are Independent if: $F(a,b) = F_X(a)F_Y(b),\forall a,b$

- Discrete: $p(x,y) = p_X(x)p_Y(y)$
- Continuous: $f(x,y) = f_X(x)f_Y(y)$

If Independent:
- $E[g(X)h(Y)] - E[g(X)]E[h(Y)]$

### Covariation

$Cov(X,Y) = E[(X-E[X])(Y-E[Y])] = E[XY] - E[X]E[Y]$

- $Cov(X,X) = Var(X)$
- $Cov(X,Y) = Cov(Y,X)$
- $Cov(cX,Y) = cCov(X,Y)$
- $Cov(\sum_{i=1}^n X_i,\sum_{j=1}^m Y_j) = \sum_{i=1}^n\sum_{j=1}^m Cov(X_i, Y_j)$
- $Var(\sum_{i=1}^n X_i) = \sum_{i=1}^n Var(X_i) + 2\sum_{i=1}^n \sum_{j<i} Cov(X_i, X_j)$
- If $X,Y$ Independent, $Cov(X,Y) = =0$

---

Sample Average:

for i.i.d. RV:

$\bar{X} = \sum_{i=1}^n X_i / n$

- $E[\bar{X}]= \mu$
- $Var(\bar{X}) = \sigma^2/n$
- $Cov(\bar{X},X_i-\bar{X})=0$

---

Convolution:

Discrete:

- $P_{X+Y }(a) = \sum_{y=-\infty }^{+\infty }P_X(a-y)P_Y(y)$

Continuous
- $F_{X+Y }(a) = \int_{-\infty }^\infty F_X(a-y) g(y)dy $

---

Multivariate Transformation

Given $ n $ random variables $ X_{1}, \ldots, X_{n} $ with a known joint density function, we aim to compute the joint density function of the transformed variables $ Y_{1}, \ldots, Y_{n} $, where:
- $ Y_{1}=g_{1}\left(X_{1}, \ldots, X_{n}\right), \ldots, Y_{n}=g_{n}\left(X_{1}, \ldots, X_{n}\right) $,
- Each $ g_{i} $ has continuous partial derivatives,
- The Jacobian determinant $ J\left(x_{1}, \ldots, x_{n}\right) $ is non-zero at all points $ \left(x_{1}, \ldots, x_{n}\right) $,
- The system of equations $ y_{1}=g_{1}\left(x_{1}, \ldots, x_{n}\right), \ldots, y_{n}=g_{n}\left(x_{1}, \ldots, x_{n}\right) $ has a unique solution $ x_{i}=h_{i}\left(y_{1}, \ldots, y_{n}\right) $.

Jacobian Determinant:
$
J\left(x_{1}, \ldots, x_{n}\right)=\left|\begin{array}{ccc}
\frac{\partial g_{1}}{\partial x_{1}} & \cdots & \frac{\partial g_{1}}{\partial x_{n}} \\
\vdots & \ddots & \vdots \\
\frac{\partial g_{n}}{\partial x_{1}} & \cdots & \frac{\partial g_{n}}{\partial x_{n}}
\end{array}\right|
$

Joint Density Function of $ Y_{1}, \ldots, Y_{n} $
$
f_{Y_{1}, \ldots, Y_{n}}\left(y_{1}, \ldots, y_{n}\right)=f_{X_{1}, \ldots, X_{n}}\left(h_{1}\left(y_{1}, \ldots, y_{n}\right), \ldots, h_{n}\left(y_{1}, \ldots, y_{n}\right)\right) \cdot\left|J\left(h_{1}, \ldots, h_{n}\right)\right|^{-1}
$
where $ |J|^{-1} $ is the absolute value of the reciprocal of the Jacobian determinant evaluated at $ x_{i}= $ $ h_{i}\left(y_{1}, \ldots, y_{n}\right) $.

#### Example for Jacobian Matrix 

(1):

> Assume $X_1,X_2\sim N(0,1$ i.i.d. and $Y_1 = X_1+X_2,Y_2 = X_1-X_2$

We have:

$ X_{1}=\frac{Y_{1}+Y_{2}}{2}, \quad X_{2}=\frac{Y_{1}-Y_{2}}{2} $

The Jacobian Matrix:

$ J=\left|\begin{array}{ll}\frac{\partial Y_{1}}{\partial X_{1}} & \frac{\partial Y_{1}}{\partial X_{2}} \\ \frac{\partial Y_{2}}{\partial X_{1}} & \frac{\partial Y_{2}}{\partial X_{2}}\end{array}\right|=\left|\begin{array}{cc}1 & 1 \\ 1 & -1\end{array}\right|=-2 \Longrightarrow|J|^{-1}=\frac{1}{2} $

Therefore:

$ f_{Y_{1}, Y_{2}}\left(y_{1}, y_{2}\right)=f_{X_{1}, X_{2}}\left(\frac{y_{1}+y_{2}}{2}, \frac{y_{1}-y_{2}}{2}\right) \cdot \frac{1}{2} $

We have:

$ f_{X_{1}, X_{2}}\left(x_{1}, x_{2}\right)=\frac{1}{2 \pi} e^{-\frac{x_{1}^{2}+x_{2}^{2}}{2}} $

Then we get:

$ f_{Y_{1}, Y_{2}}\left(y_{1}, y_{2}\right)=\frac{1}{4 \pi} e^{-\frac{y_{1}^{2}+y_{2}^{2}}{4}} $

Therefore, $Y_1, Y_2\sim N(0,2)$

---

(2)

> Assume $ U_{1}, U_{2} \sim \operatorname{Uniform}(0,1) $, and $ Y_{1}=\sqrt{-2 \ln U_{1}} \cos \left(2 \pi U_{2}\right), \quad Y_{2}=\sqrt{-2 \ln U_{1}} \sin \left(2 \pi U_{2}\right) $

We have:

$ U_{1}=e^{-\frac{Y_{1}^{2}+Y_{2}^{2}}{2}}, \quad U_{2}=\frac{1}{2 \pi} \arctan \left(\frac{Y_{2}}{Y_{1}}\right) $

Then Jacobian Matrix:

$ |J|=\frac{1}{2 \pi} e^{-\frac{Y_{1}^{2}+Y_{2}^{2}}{2}} $, therefore $ |J|^{-1}=2 \pi e^{\frac{Y_{1}^{2}+Y_{2}^{2}}{2}} $

$ f_{Y_{1}, Y_{2}}\left(y_{1}, y_{2}\right)=f_{U_{1}, U_{2}}\left(u_{1}, u_{2}\right) \cdot|J|^{-1}=1 \cdot 2 \pi e^{\frac{v_{1}^{2}+v_{2}^{2}}{2}} \cdot \frac{1}{2 \pi} e^{-\frac{v_{1}^{2}+v_{2}^{2}}{2}}=\frac{1}{2 \pi} e^{-\frac{-v_{1}^{2}+v_{2}^{2}}{2}} $

Therefore, $Y_1, Y_2\sim N(0,1)$

---

(3)

> Assume $ X_{1}, X_{2} \sim \operatorname{Exp}(\lambda) $ and $ Y_{1}=\frac{X_{1}}{X_{2}}, \quad Y_{2}=X_{2} $

We have:

$ X_{1}=Y_{1} Y_{2}, \quad X_{2}=Y_{2} $

For Jacobian Matrix:

$ J=\left|\begin{array}{cc}\frac{\partial X_{1}}{\partial Y_{1}} & \frac{\partial X_{1}}{\partial Y_{2}} \\ \frac{\partial X_{2}}{\partial Y_{1}} & \frac{\partial X_{2}}{\partial Y_{2}}\end{array}\right|=\left|\begin{array}{cc}Y_{2} & Y_{1} \\ 0 & 1\end{array}\right|=Y_{2} \Longrightarrow|J|^{-1}=\frac{1}{\left|Y_{2}\right|} $

Then:

$ f_{Y_{1}, Y_{2}}\left(y_{1}, y_{2}\right)=f_{X_{1}, X_{2}}\left(y_{1} y_{2}, y_{2}\right) \cdot \frac{1}{\left|y_{2}\right|}=\lambda^{2} e^{-\lambda\left(y_{1} y_{2}+y_{2}\right)} \cdot y_{2} $



---

## Moment Generating Function

Moment Generating Function (MGF) of a Random Variable $ X $ :
$
\phi(t)=E\left(e^{t X}\right)=\left\{\begin{array}{ll}
\sum_{x} e^{t x} p(x) & \text { (for discrete random variables) } \\
\int_{-\infty}^{\infty} e^{t x} f(x) d x & \text { (for continuous random variables) }
\end{array}\right.
$

1. Calculating Moments:

$
E\left[X^{n}\right]=\phi^{(n)}(0)
$

- $ \phi^{(n)}(t) $ is the $ n $-th derivative of $ \phi(t) $.

2. Sum of Independent Random Variables:

> The MGF of the sum of independent random variables is the product of their individual MGFs. 

That is, if $ X_{1}, X_{2}, \ldots, X_{n} $ are independent, then:

$
\phi_{X_{1}+X_{2}+\cdots+X_{n}}(t)=\phi_{X_{1}}(t) \cdot \phi_{X_{2}}(t) \cdots \phi_{X_{n}}(t)
$
3. Uniqueness of Distribution:

The moment generating function uniquely determines the probability distribution of a random variable (if it exists).

4. Connection to Laplace Transform:

For $ t \geq 0 $ and a non-negative random variable $ X $, the function $ g(t)=\phi(-t)\in [0,1] $. This is related to the Laplace transform of the distribution of $ X $.

5. Joint MGF:
- $\phi (t_1,\dots, t_n) = E[e^{(t_1X_1+\cdots+t_nX_n)}]$

--- 

**Binomial MGF**

$ M_{X}(t)=\sum_{k=0}^{n} e^{t k}\binom{n}{k} p^{k}(1-p)^{n-k}=\sum_{k=0}^{n}\binom{n}{k}\left(p e^{t}\right)^{k}(1-p)^{n-k} $

We get:

$ M_{X}(t)=\left(p e^{t}+(1-p)\right)^{n} $

**Poisson MGF**

$ M_{X}(t)=\sum_{k=0}^{\infty} e^{t k} \frac{\lambda^{k} e^{-\lambda}}{k!}=e^{-\lambda} \sum_{k=0}^{\infty} \frac{\left(\lambda e^{t}\right)^{k}}{k!} $

Then: 

$ M_{X}(t)=e^{-\lambda} \cdot e^{\lambda e^{t}}=e^{\lambda\left(e^{t}-1\right)} $

**Normal MGF**

$ M_{X}(t)=\int_{-\infty}^{\infty} e^{t x} \cdot \frac{1}{\sqrt{2 \pi \sigma^{2}}} e^{-\frac{(x-\mu)^{2}}{2 \sigma^{2}}} d x $

Look at the power:

$ t x-\frac{(x-\mu)^{2}}{2 \sigma^{2}}=-\frac{x^{2}-2\left(\mu+\sigma^{2} t\right) x+\mu^{2}}{2 \sigma^{2}} $

Then: 

$ M_{X}(t)=e^{\mu t+\frac{\sigma^{2} t^{2}}{2}} $

**Exponential MGF**

$ M_{X}(t)=\int_{0}^{\infty} e^{t x} \cdot \lambda e^{-\lambda x} d x=\lambda \int_{0}^{\infty} e^{-(\lambda-t) x} d x $

Then: 

$ M_{X}(t)=\lambda \cdot \frac{1}{\lambda-t}=\frac{\lambda}{\lambda-t} \quad(t<\lambda) $

**Gamma MGF**

$ M_{X}(t)=\int_{0}^{\infty} e^{t x} \cdot \frac{\lambda^{\alpha}}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x} d x=\frac{\lambda^{\alpha}}{(\lambda-t)^{\alpha}} \cdot \frac{\Gamma(\alpha)}{\Gamma(\alpha)} $

Then:

$ M_{X}(t)=\left(\frac{\lambda}{\lambda-t}\right)^{\alpha} $


## Theorem

### 1. Markov's Inequality (Proposition 2.6)

Statement:
Let $ X $ be a non-negative random variable. For any $ a>0 $ :
$
P\{X \geq a\} \leq \frac{E\lfloor X]}{a}
$

Proof:
Define the indicator function:
$
I_{\{X \geq a\}}=\left\{\begin{array}{ll}
1 & \text { if } X \geq a \\
0 & \text { otherwise }
\end{array}\right.
$

Since $ X \geq a \cdot I_{\{X \geq a\}} $, taking expectations on both sides:
$
E[X] \geq E\left[a \cdot I_{\{X \geq a\}}\right]=a \cdot P\{X \geq a\}
$

Rearranging gives:
$
P\{X \geq a\} \leq \frac{E[X]}{a}
$

### 2. Chebyshev's Inequality (Proposition 2.7)

Statement:
Let $ X $ be a random variable with mean $ \mu $ and variance $ \sigma^{2} $. For any $ k>0 $ :
$
P\{|X-\mu| \geq k\} \leq \frac{\sigma^{2}}{k^{2}}
$

Proof:
Apply Markov's Inequality to the non-negative random variable $ (X-\mu)^{2} $ :
$
P\{|X-\mu| \geq k\}=P\left\{(X-\mu)^{2} \geq k^{2}\right\} \leq \frac{E\left[(X-\mu)^{2}\right]}{k^{2}}=\frac{\sigma^{2}}{k^{2}}
$

### 3. Strong Law of Large Numbers (Theorem 2.1)

Statement:
Let $ X_{1}, X_{2}, \ldots $ be independent and identically distributed (i.i.d.) random variables with mean $ \mu $. Then, as $ n \rightarrow \infty $ :
$
\frac{X_{1}+X_{2}+\cdots+X_{n}}{n} \rightarrow \mu \quad \text { with probability } 1 .
$

Proof Sketch (Simplified):
The full proof requires advanced tools (e.g., Borel-Cantelli lemma or martingale convergence). A key idea is to show that the sample mean converges almost surely by bounding the variance of partial sums. For i.i.d. variables:
1. Convergence in $ L^{2} $ :
$
\operatorname{Var}\left(\frac{X_{1}+\cdots+X_{n}}{n}\right)=\frac{\sigma^{2}}{n} \rightarrow 0 \quad \text { as } n \rightarrow \infty .
$
2. Borel-Cantelli Lemma:

For $ \epsilon>0 $, use Chebyshev's inequality to show:
$
\sum_{n=1}^{\infty} P\left(\left|\frac{S_{n}}{n}-\mu\right| \geq \epsilon\right)<\infty
$
implying almost sure convergence.

### 4. Central Limit Theorem (Theorem 2.2)

Statement:
Let $ X_{1}, X_{2}, \ldots $ be i.i.d. random variables with mean $ \mu $ and variance $ \sigma^{2} $. As $ n \rightarrow \infty $, the distribution of the standardized sum converges to the standard normal distribution:
$
\frac{X_{1}+\cdots+X_{n}-n \mu}{\sqrt{n} \sigma} \xrightarrow{d} N(0,1) .
$

Equivalently:
$
P\left\{\frac{X_{1}+\cdots+X_{n}-n \mu}{\sqrt{n} \sigma} \leq a\right\} \rightarrow \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{a} e^{-x^{2} / 2} d x
$

Proof Sketch (Using Moment Generating Functions):
1. Standardization:

Let $ Y_{i}=\frac{X_{i}-\mu}{\sigma} $, so $ E\left[Y_{i}\right]=0, \operatorname{Var}\left(Y_{i}\right)=1 $.

2. MGF of the Sum:

The MGF of $ S_{n}=\frac{Y_{1}+\cdots+Y_{n}}{\sqrt{n}} $ is:
$
M_{S_{n}}(t)=\left(M_{Y}\left(\frac{t}{\sqrt{n}}\right)\right)^{n}
$

3. Taylor Expansion:

Expand $ M_{Y}\left(\frac{t}{\sqrt{n}}\right) $ around $ t=0 $ :
$
M_{Y}\left(\frac{t}{\sqrt{n}}\right)=1+\frac{t^{2}}{2 n}+o\left(\frac{1}{n}\right)
$

4. Limit as $ n \rightarrow \infty $ :
$
\lim _{n \rightarrow \infty} M_{S_{n}}(t)=e^{t^{2} / 2}
$
which is the MGF of $ N(0,1) $. By uniqueness of MGFs, the result follows.

### 5. Composed Random Variable Equality

For all $h$:

$ 
\mathrm{E}\left[S_{N} h\left(S_{N}\right)\right]=\mathrm{E}[N] \mathrm{E}\left[X_{1} h\left(S_{M}\right)\right]
$

Where:

$P\{M=n\} = \dfrac{nP\{N=n\}}{E[N]}$

Proof:

$$
\begin{aligned}
&\mathrm{E}\left[S_{N} h\left(S_{N}\right)\right]\\ 
&=\mathrm{E}\left[\sum_{i=1}^{N} X_{i} h\left(S_{N}\right)\right] \\ 
& =\sum_{n=0}^{\infty} \mathrm{E}\left[\sum_{i=1}^{n} X_{i} h\left(S_{N}\right) \mid N=n\right] \cdot \mathrm{P}\{N=n\} \\ 
& = \sum_{n=0}^{\infty} n \cdot \mathrm{E}\left[X_{1} h\left(S_{n}\right)\right] \cdot \mathrm{P}\{N=n\} \\ 
&= \mathrm{E}[N] \cdot \sum_{n=0}^{\infty} \mathrm{E}\left[X_{1} h\left(S_{n}\right)\right] \cdot \frac{n \mathrm{P}\{N=n\}}{\mathrm{E}[N]}\\ 
&=\mathrm{E}[N] \mathrm{E}\left[X_{1} h\left(S_{M}\right)\right]
\end{aligned}
$$

### 6. A corollary

$
\begin{array}{l}
\mathrm{P}\left\{S_{N}=0\right\}=\mathrm{P}\{N=0\} \\
\mathrm{P}\left\{S_{N}=k\right\}=\frac{1}{k} \mathrm{E}[N] \sum_{j=1}^{k} j \alpha_{j} \mathrm{P}\left\{S_{M-1}=k-j\right\}, \quad k>0
\end{array}
$

Proof:

Choose $h$ as indicator function, we get:

$ \mathrm{P}\left\{S_{N}=k\right\}=\frac{\mathrm{E}[N]}{k} \cdot \mathrm{E}\left[X_{1} \mathbf{1}_{\left\{S_{M}=k\right\}}\right] $

Then for RHS:

$$
\begin{aligned}
& \mathrm{E}\left[X_{1} \mathbf{1}_{\left\{S_{M}=k\right\}}\right] \\ 
&=\sum_{n=1}^{\infty} \mathrm{P}\{M=n\} \cdot \mathrm{E}\left[X_{1} \mathbf{1}_{\left\{S_{M}=k\right\}} \mid M=n\right] \\
& =\sum_{n=1}^{\infty} \mathrm{P}\{M=n\}  \cdot \mathrm{E}\left[X_{1} \mathbf{1}_{\left\{S_{n}=k\right\}}\right]\\
&=\sum_{n=1}^{\infty} \mathrm{P}\{M=n\}  \cdot \sum_{j=1}^{k} j \alpha_{j} \cdot \mathrm{P}\left\{S_{n-1}=k-j\right\} \\ 
& =\sum_{j=1}^{k} j \alpha_{j} \cdot \sum_{n=1}^{\infty} \mathrm{P}\{M=n\} \cdot \mathrm{P}\left\{S_{n-1}=k-j\right\} \\
&=\sum_{j=1}^{k} j \alpha_{j} \cdot \mathrm{P}\left\{S_{M-1}=k-j\right\}\\  
\end{aligned}
$$

Finally:

$ \mathrm{P}\left\{S_{N}=k\right\}=\frac{\mathrm{E}[N]}{k} \cdot \sum_{j=1}^{k} j \alpha_{j} \cdot \mathrm{P}\left\{S_{M-1}=k-j\right\} $





placeholder


placeholder

placeholder

placeholder

placeholder

placeholder

