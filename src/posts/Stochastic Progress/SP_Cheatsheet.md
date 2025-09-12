---
title: Stochastic Progress - Cheatsheet
category: Cheatsheets
date: 2025-9-10 
---

指数分布

$f(x) = \lambda e^{-\lambda x}, F(x) = 1 - e^{-\lambda x}$

$P(X>x) = e^{-\lambda x }$

$E(X) = \dfrac{1}{\lambda}, Var(X) = \dfrac{1}{\lambda^2}$

$r(t)=\dfrac{f(t)}{1-F(t)}$: 失败率函数

指数分布： $r(t) = \lambda$

超指数随机变量： $P(T=j) =P_j, \sum_{j=1}^n P_j = 1,X_i\sim Exp(\lambda_i)$

- $f(t) = \sum_{i=1}^n\lambda_iP_ie^{-\lambda_i t}$
- $F(t) = 1-\sum_{i=1}^n P_i e^{-\lambda_i t}$
- $r(t) = \sum_{j=1}^n \lambda_j P(T=j|X>t)$
- $\lim_{t\to\infty}r(t) = \min \lambda_i$

---

- $X\sim Exp(\lambda), \sum_n X\sim Ga(n,\lambda)$
- $\min(X_1,X_2,\cdots,X_n) \sim Exp(\sum_{i=1}^n \lambda_i)$
- $X_1\sim Exp(\lambda_1), X_2\sim Exp(\lambda_2), P(X_1<X_2)=\dfrac{\lambda_1}{\lambda_1+\lambda_2}$
- $P(X_i = \min (X_1,X_2,\cdots,X_n)) = \dfrac{\lambda_i}{\sum_{j=1}^n \lambda_j}$
- "$\min_i X_i>t$"条件不会影响 $X_i$的次序
- $\min(X_1,\dots,X_n)\sim Exp(\sum_{i=1}^n \lambda_i)$

亚指数随机变量：

$S=\sum_{i=1}^n X_i, $ where $ X_i\sim Exp(\lambda_i)$: 亚指数随机变量

$f_S(t) = \sum_{i=1}^n C_{i,n} \lambda_i e^{-\lambda_i t}$, where $C_{i, n} = \prod_{j\ne i}\dfrac{\lambda_j}{\lambda_j-\lambda_i}$

- $P(S>t) = \sum_{i=1}^n C_{i,n}e^{-\lambda_i t}$

- $r_S(t) = \dfrac{\sum_{i=1}^n C_{i,n}\lambda_i e^{-\lambda_i t}}{\sum_{i=1}^n C_{i,n} e^{-\lambda_i t}}$

---

考克斯随机变量

$Y = \sum_{i=1}^N X_i$, where $\sum_{n=1}^m P_{N=n} = 1, X_i\sim Exp(\lambda_i)$

$f_Y(t) = \sum_{n=1}^m P_n\sum_{i=1}^n C_{i,n}\lambda_i e^{-\lambda_i t}$

---

计数过程

$N(t)$ 时间 $t$ 前发生事件次数

定义：

1. $N(t)\ge 0$
2. $N(t)$整数
3. $N(s)\le N(t)$ if $s<t$
4. $N(t)-N(S)$ 表示 $(s, t]$事件个数

---

泊松过程：首先是计数过程

1. $N(0) = 0$
2. $\{N(t)\}$平稳增量，独立增量
3. $P(N(t+h) - N(t) = 1) = \lambda h + o(h)$
4. $P(N(t+h) - N(t) \ge 2)=o(h)$


- 平稳增量：时间段长度决定事件个数
- 独立增量：发生的事件独立

---

若$\{N(t)\}$是速率为$\lambda$的泊松过程，则：

- $N(s+t)-N(s)\sim Poi(\lambda t)$

---

定义2

- $N(0)=0$
- 独立增量
- $N(s, s+t]\sim Poisson(\lambda t)$

---

$\{T_n\}$到达时间间隔列，$n-1$到 $n$的耗时

$T_n\sim Exp(\lambda)$

---

$\{S_n\} = \sum_{i=1}^n T_i$: 等待时间列

$f_{S_n}(t) = \lambda e^{-\lambda t} \dfrac{(\lambda t)^{n-1}}{(n-1)!}$

---

$S_n $是速率 $\lambda$ 的泊松过程

---

分流成独立的 $N_1(t)$速率 $\lambda p$, $N_2(t)$ 速率 $\lambda(1-p)$

---

$P\{ S_n ^1<S_m^2\} = \sum_{k=n}^{n+m-1} \binom{n+m-1}{k}(\dfrac{\lambda_1}{\lambda_1+\lambda_2})^k (\dfrac{\lambda_2}{\lambda_1+\lambda_2})^{n+m-k-1}$

---

$P\{T_1<s|N(t)=1\} =\dfrac{s}{t}$

---

次序统计量：

$ f_{Y_{(1)}, \ldots, Y_{(n)}}\left(y_{1}, \ldots, y_{n}\right)=n!\prod_{i=1}^{n} f\left(y_{i}\right) $

若均匀分布：

$ f\left(y_{1}, y_{2}, \ldots, y_{n}\right)=\dfrac{n!}{t^{n}} $

$E[D(t)|N(t)=n]=E[\sum_{i=1}^n e^{-\alpha U_{(i)}}C_i]$

$ f_{S_{1}, \ldots S_{n-1}}\left(s_{1}, \ldots, s_{n-1} \mid S_{n}=t\right)=\frac{(n-1)!}{t^{n-1}}, 0<s_{1}<\cdots<s_{n-1}<t $

---

$ E\left[N_{i}(t)\right]=\lambda \int_{0}^{t} P_{i}(s) d s $

- $N_i(t)$：到时刻 t，类型 i 事件发生的个数

# 非时间对齐

不平稳，4.: $\lambda (t)$

$m(t) = \int_0^t \lambda(y)dy$: 均值函数

$N(t+s)-N(s)$均值为 $m(t+s)-m(s)$


分流：以 $P_1(s)$抽样， $\lambda_i(t) = \lambda P_i (t)$

---

# 复合 

$X(t) = \sum_{i=1}^{N(t)} Y_i$, $N(t)$是复合泊松过程

- $E[X(t)] = \lambda t E[Y_1]$
- $Var[X(t)] = \lambda t E[Y_1^2]$

有限时：

$X(t) = \sum_j \alpha _j N_j (t)$

$X_1(t)+X_2(t)$是复合泊松随机过程

参数： $\lambda_1+\lambda_2$ 分布函数： 
$F(x) = \dfrac{\lambda_1}{\lambda_1+\lambda_2} F_1(x) + \dfrac{\lambda_2}{\lambda_1+\lambda_2} F_2(x)$

--- 

条件泊松过程：

$L=\lambda$: $N(t)$是泊松过程

$ \begin{array}{l}P\{N(t+s)-N(s)=n\} \\ =\int_{0}^{\infty} P\{N(t+s)-N(s)=n \mid L=\lambda\} g(\lambda) d \lambda \\ =\int_{0}^{\infty} \frac{e^{-\lambda t}(\lambda t)^{n}}{n!} g(\lambda) d \lambda\end{array} $

- $E[N(t)] = tE[L]$
- $Var[N(t)] = tE[L] + t^2Var[L]$

$ f_{L \mid N(t)}(\lambda \mid n)=\frac{e^{-\lambda}(\lambda)^{n} g(\lambda)}{\int_{0}^{\infty} e^{-\lambda t}(\lambda)^{n} g(\lambda) d \lambda} $

---

# 连续时间马氏链

定义

1. 指标集: $\{t\ge 0\}$ 的连续值
2. 状态空间： 离散值
3. 初始状态 $X(0)$和各时刻随机变量 $X(t)$: 离散随机变量
4. 相依关系/转移概率： $P_{ij}(t) = P(X(s+t)= j | X(s) = i, X(u) = x(u), 0\le u < s)$: 现在处于状态 $i$的过程，时间 $t$ 后处于状态 $j$ 的概率

性质：

- 马氏性质： 重启，平稳 

$X(t)$ 的分布：

$P(X(t) = j) = \sum_{i=0}^{\infty }P_{ij} (t) P(X(0) = i)$

---

定义2: 

- 状态 $i$停留时间 $\sim Exp(v_i)$
- 状态间转移概率 $P_{ii} = 0, \sum_j P_{ij} - 1$

---

生灭过程定义：

- 连续时间随机过程

当状态为 $n$:

- 进入间隔时间 $\sim Exp(\lambda_n)$
- 离开间隔时间 $\sim Exp(\mu_n)$

---

尤尔过程

成员之间独立，以速率 $\lambda$ 产生新成员, $\lambda_n = n\lambda$

---

生灭过程 $E(T_{i, i+1})$:

$E(T_{i, i+1}) = \dfrac{1}{\lambda_i} + \dfrac{\mu_i}{\lambda_i} E(T_{i-1, i})$

$E(T_{ij}) = E(T_{i, i+1}) + E(T_{i+1, i+2}) + \cdots + E(T_{j-1, j})$

- 当 $\lambda \ne \mu$, $E(T_{i, i+1}) = \dfrac{1- (\dfrac{\mu}{\lambda})^{i+1}}{\lambda-\mu}$
- 当 $\lambda = \mu$, $E(T_{i, i+1}) = \dfrac{i+1}{\lambda}$

---

纯生过程

- $P_{ij}(t) = \sum_{k=i}^j e^{-\lambda_k t} \prod_{r\ne k , r = i} ^ j \dfrac{\lambda _r}{\lambda_r - \lambda_k} - \sum_{k = i}^{j-1}e^{-\lambda_k t}\prod_{r\ne k , r=i }^{j -1 } \dfrac{\lambda_r}{\lambda_r - \lambda_k}$
- $P_{ii}(t) = e^{-\lambda_i t}$

---

尤尔过程的转移概率：

- $P_{1j}(t) = e^{-\lambda t}(1-e^{-\lambda t})^{j- 1}$

- $P_{ij}(t) = \binom{j-1}{i-1}(e^{-\lambda t})^i(1-e^{-\lambda t})^{j-i}$

--- 

# $P_{ij}(t), P_{ij}, v_i$

- $\lim_{h\to 0}\dfrac{1- P_{ii}(h)}{h} = v_i$
- $\lim_{h\to 0} \dfrac{P_{ij}(h)}{h} = v_i P_{ij} = q_{ij}$

---

$q_{ij} = v_iP_{ij}$ 瞬时转移概率

- $v_i = \sum_j q_{ij}$
- $P_{ij} = \dfrac{q_ij}{v_i} = \dfrac{q_{ij}}{\sum_j q_{ij}}$

---

# CK 方程

$P_{ij} (t+s) = \sum_{k=0}^\infty P_{ik}(t) P_{kj}(s)$

---

# 柯尔莫哥洛夫向后方程

- $P_{ij}'(t) = \sum_{k\ne i} q_{ik} P_{kj} (t) - v_i P_{ij}(t)$

纯生过程的向后方程：

- $P_{ij}'(t) = \lambda_i P_{i+1,j}(t) - \lambda_i P_{ij}(t)$

一般生灭过程:

- $P_{0j}'(t) = \lambda_0P_{1j}(t) - \lambda_0 P_{0j}(t) = \lambda_0 (P_{1j}(t) - P_{0j}(t))$
- $P_{ij}'(t) = (\lambda_i+\mu_i)(\dfrac{\lambda_i}{\lambda_i + \mu_i} P_{i + 1, j}(t) + \dfrac{\mu_i}{\lambda_i+\mu_i}P_{i-1, k}(t)) - (\lambda_i + \mu_i)P_{ij}(t)$

# 柯尔莫哥洛夫向前方程

$P'_{ij}(t) = \sum_{k\ne j} P_ik(t) q_{kj} - P_{ij} (t) v_j$

纯生过程的向前方程

$P_{ii}'(t) = -\lambda_i P_{ii}(t)$

$P_{ij}' (t) = \lambda_{j-1} P_{i, j-1}(t) - \lambda_j P_{ij} (t)$

一般生灭过程的向前方程

$P_{i0}'(t) = \sum_{k\ne 0} q_{k0} P_{ik}(t) - \lambda_0 P_{i 0} (t) = \mu_1 P_{i1}(t) - \lambda_0 P_{i0} (t)$

$P_{ij}'(t) = \sum_{k\ne j}q_{kj} P_{ik}(t) - (\lambda_j + \mu _j)P_{ij}(t) = \lambda_{j-1}P_{i, j-1}(t) + \mu_{j+1}P_{i, j+1} (t) - (\lambda_j + \mu_j)P_{ij} (t)$

---

极限概率

$P_j \equiv \lim_{t\to\infty} P_{ij}(t)$: 极限概率，长程比例
- $\sum_j P_j = 1$

---

条件：

- 不可约
- 正常返

求解：

- $v_jP_j = \sum_{k\ne j} q_{kj}P_k$
- $\sum_j P_j = 1$

---

生灭过程的极限概率

- $P_n = \dfrac{\lambda_{n-1}\lambda_{n-2}\dots\lambda_1\lambda_0}{\mu_n\mu_{n-1}\dots\mu_2\mu_1}P_0$
- $P_0 = \dfrac{1}{1+\sum_{n=1}^\infty \dfrac{\lambda_{n-1}\lambda_{n-2}\dots \lambda_1\lambda_0}{\mu_n\mu_{n-1}\dots\mu_2\mu_1}}$

---

更新过程

$X_n$: 第 $n-1$ 个和第 $n$ 个事件之间的间隔时间

$X_n$ 独立同分布， $N(t)$ 是更新过程

- $\mu = E[X_n]$

$S_0 = 0, S_n = \sum_{i=1}^n X_i$ 更新过程

- $N(t)\ge n \Lrarr S_n \le t $
- $N(t) = \max(n:S_n \le t)$
- $S_{N(t)}\le t , S_{N(t) + 1} > t$

---

$X$ 的分布为 $F$

$P(N(t)=n) = F_n(t) - F_{n+1}(t)$, $F_n$ 是 $n$个 $F$的卷积

- $S_n = \sum_{i=1}^n X_i $

---

$m(t) = E(N(t))$: 更新过程的均值函数： 更新函数

$m(t) = \sum_{n=1}^\infty F_n(t)$

更新函数 $m(t)$ 唯一确定更新过程： $m(t) = \lambda t$

$m(t) = \int_0^t (1+m(t-x)) f(x)fx = F(t) + \int_0^t m(t-x) f(x) dx$

---

# 更新过程速率：

$\dfrac{N(t)}{t}\to \dfrac{1}{\mu}$

---

# 更新报酬过程：

$R(t) = \sum_{n=1}^{N(t)} R_n$: 更新报酬过程
- $N(t)$: 更新过程， 到达时间间隔 $X_n$

---

若 $E[R] < \infty, E[X] < \infty$

- $\lim_{t\to\infty} \dfrac{R(t)}{t} = \dfrac{E(R)}{E(X)}$
- $\lim_{t\to\infty} \dfrac{E(R(t))}{t} = \dfrac{E(R)}{E(X)}$

---

基本更新定理：

$t\to\infty , \dfrac{m(t)}{t}\to\dfrac{1}{\mu}$

---

停时：

$N$ 为随机变量，对 $X_i$ 观察 $N$ 个后停止，则 $N$是停时

---

瓦尔德方程

$E[\sum_{n=1}^N X_n] = E[N]E[X]$
- $N$ 是停时

$N (t) = \argmax_n (S_n \le t)$: 是停时

- $E[X_1+\dots + X_{N(t)+1}]=E[X]E[N(t)+1]$



placeholder

placeholder

placeholder

placeholder
