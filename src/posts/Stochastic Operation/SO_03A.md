---
title: Stochastic Optimization - Assignment - Week 3
category: Assignments
---

作业Ch.2-6,11
(补充题)：M/M/K排队系统中，顾客的离去过程是否是一个Poisson过程？离去率是多少？

# 6

## 问题

设有自动机若干台，各台的质量完全相同，连续运转时间为指数分布，平均运转时间为 2 小时。看管自动机的工人的技术水平也差不多，他们每人平均每小时能排除故障的自动机 5 台。现假定共有 18 台自动机，由 3 个工人看管。试求平均有多少台自动机处于故障或修理状态，并分析工人工作的紧张程度。

## 解答

系统的稳态概率 $ p_{n} $（系统中有 $ n $ 台故障机器的概率，$ n=0,1, \ldots, N $ ）满足：

令 $ \alpha=\lambda / \mu=0.5 / 5=0.1 $ 。

对于 $ n=1 $ 到 $ N $ ：

$
\dfrac{\pi_{n}}{\pi_{n-1}}=\dfrac{(N-n+1) \alpha}{\min (n, s)}
$
- 当 $ 1 \leq n \leq s $ 时， $ \min (n, s)=n_{\text {。 }} $
- 当 $ n>s $ 时， $ \min (n, s)=s $ 。

计算 $ \pi_{n} $ ：
$
\pi_{n}=\pi_{n-1} \times \frac{(N-n+1) \alpha}{\min (n, s)}
$

于是有：$ \sum_{n=0}^{N} \pi_{n} = 1$ 。

$ p_{n}=\pi_{n} / \sum_{n=0}^{N} \pi_{n} $ 。

下面使用 python 计算：

```python 
N = 18
s = 3
lambda_ = 0.5
mu = 5
alpha = lambda_ / mu

pis = [1.0]
for n in range(1, N+1):
    min_ns = min(n, s)
    factor = (N - n + 1) * alpha / min_ns
    pis.append(pis[-1] * factor)

total = sum(pis)
p = [pi / total for pi in pis]

L = sum(n * p[n] for n in range(N+1))
E_busy = sum(min(n, s) * p[n] for n in range(N+1))
rho = E_busy / s

print(f"平均故障或修理状态的机器数 L: {L:.2f}")
print(f"工人利用率 rho: {rho:.2f}")
```

得到结果：

```
平均故障或修理状态的机器数 L: 1.83
工人利用率 rho: 0.54
```

# 11

## 问题

在上面的题 6 （工人看管自动机）中，考虑到 3 人共同看管 18 台自动机的职责不够清楚，现在考虑承包到个人，每个工人独立看管 6 台自动机。试问这个方案好不好？

## 解答

三个修理工相互独立，使用类似思路，能够得到：

```
平均故障或修理状态的机器数 L: 0.85
工人利用率 rho: 0.52
```
---

结论： 这个方案不好。承包到个人虽然空闲时间增加，但是会增加平均故障机器数，降低机器可用性和生产效率。

# 补充题

## 问题

M/M/K排队系统中，顾客的离去过程是否是一个Poisson过程？离去率是多少？

## 解答

注意到最终到达率等于离去率，则一定有：

离去过程是速率为 $\lambda $ 的 Poisson 过程

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder
