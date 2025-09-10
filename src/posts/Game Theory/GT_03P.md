---
title: Game Theory - Paper - Week 3
category: Game Theory Paper
---

# Channel Structures of Online Retail Platforms

# Modeling Framework: The Base Case 

$M$: Manufacturer

$I$: Online intermediary 

Options:

- Model R: reselling channel 
- Model A: agency channel 
- Model D: dual channel 

Model R:
- unit wholesale price 
- intermediary determine quantity 

Model A:
- determine quantity 
- pay unit commission rate $r$
  - exogenous 

Inverse demand function:

$p = a - q_M- q_I + e$

- $a$: potential market size
- $q_M$: manufacturer quantity (agency)
- $q_I$: intermediary quantity (reselling)
- $e$: service effort by intermediary

$\dfrac{ke^2}{2}$: cost of service effort 

Model A:

1. Manufacturer decide $q_M$ and intermediary decide $e$
2. $p$ realised 

Model R:

1. Manufacturer decide $w$
2. intermediary decide $q_I$ and $e$
3. $p$ realised 

Model D:

1. Manufacturer decide $w$
2. intermediary decide $q_I$
3. Manufacturer decide $q_M$ and intermediary decide $e$
4. $p$ realised 


### Assumption 1

> $ k>\underline{k} \equiv \max \left[\frac{1}{2}, \frac{r}{2}, \frac{1}{3-r}, \frac{r(4-r)}{4(3-r)}+\frac{1}{4} \sqrt{\frac{(2-r)^{2}\left(r^{2}-4 r+12\right)}{(r-3)^{2}}}\right]= $ $ \frac{r(4-r)}{4(3-r)}+\frac{1}{4} \sqrt{\frac{(2-r)^{2}\left(r^{2}-4 r+12\right)}{(r-3)^{2}}} $.

- profit functions are concave 
- service effort is not low 

# 4 Equilibruim Price and Effort Decisions 

## 4.1 Centralized Model 

system profit:

$pQ - \dfrac{ke^2}{2}$

optimal solution:

$ \begin{array}{l}Q^{*}=\frac{a k}{2 k-1}, \\ e^{*}=\frac{a}{2 k-1} .\end{array} $

## 4.2 Model A 

For Manufacturer:

$ \max _{q_{M}}\left(a-q_{M}+e\right) q_{M}(1-r) $

For intermediary:

$ \max _{e}\left(a-q_{M}+e\right) q_{M} r-\frac{1}{2} k e^{2} $.

The equilibrium:

$ \begin{array}{l}q_{M}^{A}=\frac{a k}{2 k-r}, \\ e^{A}=\frac{a r}{2 k-r} .\end{array} $

Then we get:

$ \begin{array}{l}\pi_{M}^{A}=\frac{a^{2} k^{2}(1-r)}{(r-2 k)^{2}}, \\ \pi_{I}^{A}=\frac{a^{2} k r}{4 k-2 r} .\end{array} $

## 4.3 Model R 

Given $w$, intermediary have:

$ \max _{e, q_{I}}\left(a-q_{I}+e-w\right) q_{I}-\frac{1}{2} k e^{2} $

Then we get:

$ \begin{array}{l}\hat{q}_{I}(w)=\frac{k(a-w)}{2 k-1}, \\ \hat{e}(w)=\frac{a-w}{2 k-1} .\end{array} $

Then for manufacturer:

$ \max _{w} w \hat{q}_{I}(w) $

Then:

$ \begin{aligned} w^{R} & =\frac{a}{2} \\ q_{I}^{R} & =\frac{a k}{2(2 k-1)} \\ e^{R} & =\frac{a}{2(2 k-1)}\end{aligned} $

Finally:

$ \begin{array}{l}\pi_{M}^{R}=\frac{a^{2} k}{4(2 k-1)}, \\ \pi_{I}^{R}=\frac{a^{2} k}{8(2 k-1)} .\end{array} $

## 4.4 Model D 

Given $w, q_I$, for manufacturer:

$ \max _{q_{M}} w q_{I}+\left(a-q_{M}-q_{I}+e\right) q_{M}(1-r) $.

For intermediary:

$ \begin{array}{l}\max _{e}\left(a-q_{M}-q_{I}+e-w\right) q_{I}+\left(a-q_{M}-q_{I}+e\right) q_{M} r \\ \quad-\frac{1}{2} k e^{2}\end{array} $

Then we get:

$ \begin{array}{l}\hat{q}_{M}\left(q_{I}\right)=\frac{a k+(1-k) q_{I}}{2 k-r}, \\ \hat{e}\left(q_{I}\right)=\frac{a r+(2-r) q_{I}}{2 k-r} .\end{array} $

For intermediary:

$ \begin{array}{l}\max _{q_{I}}\left(a-\hat{q}_{M}\left(q_{I}\right)-q_{I}+\hat{e}\left(q_{I}\right)-w\right) q_{I} \\ \quad+\left(a-\hat{q}_{M}\left(q_{I}\right)-q_{I}+\hat{e}\left(q_{I}\right)\right) \hat{q}_{M}\left(q_{I}\right) r-\frac{1}{2} k\left(\hat{e}\left(q_{I}\right)\right)^{2}\end{array} $

Then we get:

$ \hat{q}_{I}(w)=\frac{a k(1-r)-w(2 k-r)}{k(2-r)} $.

For manufacturer:

$ \begin{array}{r}\max _{w} w \hat{q}_{I}(w)+\left(a-\hat{q}_{I}(w)-\hat{q}_{M}\left(\hat{q}_{I}(w)\right)\right. \\ \left.+\hat{e}\left(\hat{q}_{I}(w)\right)\right) \hat{q}_{M}\left(\hat{q}_{I}(w)\right)(1-r) .\end{array} $

Finally:

$ \begin{aligned} w^{D} & =\frac{a k(1-r)\left(2 k^{2}(3-r)-k r(4-r)-2(1-r)\right)}{2(k(3-r)-1)(k-r+1)(2 k-r)}, \\ q_{I}^{D} & =\frac{a k(2-r)(1-r)}{2(k(3-r)-1)(k-r+1)}, \\ q_{M}^{D} & =\frac{a k(k(3-r)-r+1)}{2(k(3-r)-1)(k-r+1)}, \\ e^{D} & =\frac{a((3-r) r k+2(1-r))}{2(k(3-r)-1)(k-r+1)} .\end{aligned} $

# 5 Equilibrium Profits and Channel Structure

### Proposition 1

> (a) Wholesale price effect: $ w^{D}<w^{R} $ and $ \partial w^{D} / \partial r<0 $. 
> 
> (b) Channel flexibility effect: $ \partial q_{M}^{D} / \partial r> $ $ 0, \partial q_{I}^{D} / \partial r<0, \partial\left(q_{M}^{D}+q_{I}^{D}\right) / \partial r>0 $ and $ \partial e^{D} / \partial r>0 $.


### Proposition 2

> (a) $ \pi_{I}^{D} \geq \pi_{I}^{A}, \pi_{M}^{D} \geq \pi_{M}^{A} $, and $ \pi_{I}^{D}+ $ $ \pi_{M}^{D} \geq \pi_{I}^{A}+\pi_{M}^{A} $. 
> 
> (b) There exists $ \tilde{r}_{S C} $ such that $ \pi_{I}^{D}+\pi_{M}^{D} \geq $ $ \pi_{I}^{R}+\pi_{M}^{R} $ if $ r \geq \tilde{r}_{S C} $ and $ \pi_{I}^{D}+\pi_{M}^{D}<\pi_{I}^{R}+\pi_{M}^{R} $ otherwise. 
> 
> (c) There exists $ \tilde{r}_{I} \in(0,1 / 2) $ such that $ \pi_{I}^{D} \geq \pi_{I}^{R} $ if $ r \geq \tilde{r}_{I} $ and $ \pi_{I}^{D}<\pi_{I}^{R} $ otherwise. 
> 
> (d) There exist $ \tilde{r}_{M} $ and $ \tilde{k}_{M} $ such that $ \pi_{M}^{D} \geq \pi_{M}^{R} $ if 
> (i) $ k \geq \tilde{k}_{M} $ and $ r \leq 1 / 2 $ or 
> (ii) $ k>1 $ and $ 1 / 2<r \leq \tilde{r}_{M} $, and $ \pi_{M}^{D}<\pi_{M}^{R} $ otherwise.

---

$
\begin{array}{|c|c|c|c|}
\hline
\text{Regions} & \text{Profit Comparison} & \text{Regions} & \text{Profit Comparison} \\
\hline
A & \pi_{I}^{D} \geq \pi_{I}^{R}, \pi_{M}^{D}<\pi_{M}^{R} & C & \pi_{I}^{D}<\pi_{I}^{R}, \pi_{M}^{D}<\pi_{M}^{R} \\
\hline
B & \pi_{I}^{D} \geq \pi_{I}^{R}, \pi_{M}^{D} \geq \pi_{M}^{R} & D & \pi_{I}^{D}<\pi_{I}^{R}, \pi_{M}^{D} \geq \pi_{M}^{R} \\
\hline
\end{array}
$

![Figure 1](image-15.png)

### Corollary 1

> As $ k \rightarrow \infty, e_{I}^{D} \rightarrow 0, q_{I}^{D} \rightarrow 0, q_{M}^{D} \rightarrow q_{M}^{A}= $ $ Q^{*} $, and $ \pi_{I}^{D}+\pi_{M}^{D} \rightarrow \pi_{I}^{A}+\pi_{M}^{A}=a^{2} / 4 $.

### Proposition 3

> (a) When the intermediary chooses the channel structure, the equilibrium is dual channel if $ r \geq \tilde{r}_{I} $ (Regions A and B) and reselling channel otherwise (Regions $ C $ and $ D $ ). 
> 
> (b) When the manufacturer chooses the channel structure, the equilibrium is dual channel if 
> (i) $ k \geq $ $ \tilde{k}_{M} $ and $ r \leq 1 / 2 $ or 
> (ii) $ k>1 $ and $ 1 / 2<r \leq \tilde{r}_{M} $ (Regions $ B $ and $ D) $ and reselling channel otherwise (Regions $ A $ and $ C) $.
> 
> (c) Both firms prefer dual channel if (i) $ k \geq \tilde{k}_{M} $ and $ \tilde{r}_{I} \leq r \leq $ $ 1 / 2 $ or (ii) $ k>1 $ and $ 1 / 2<r \leq \tilde{r}_{M} $ (Region B). (d) Both firms prefer reselling channel if $ k<\tilde{k}_{M} $ and $ r<\tilde{r}_{I} $ (Region C).

# Extensions

$$
\begin{array}{|c|c|c|c|}
\hline
\text{Regions} & \text{Profit Comparison} & \text{Regions} & \text{Profit Comparison} \\
\hline
A & \pi_{I}^{D} \geq \pi_{I}^{R},\; \pi_{M}^{D} < \pi_{M}^{R} & C & \pi_{I}^{D} < \pi_{I}^{R},\; \pi_{M}^{D} < \pi_{M}^{R} \\
\hline
B & \pi_{I}^{D} \geq \pi_{I}^{R},\; \pi_{M}^{D} \geq \pi_{M}^{R} & D & \pi_{I}^{D} < \pi_{I}^{R},\; \pi_{M}^{D} \geq \pi_{M}^{R} \\
\hline
\end{array}
$$

![Figure 2 (a)](image-16.png)

![Figure 2 (b)](image-17.png)

## 6.1 Observable Service Effort 

![Figure 3 (a)](image-18.png)

![Figure 3 (b)](image-19.png)

## 6.2 Simultaneous Quantity Decisions

## 6.3 Manufacturer Service Effort 

### Proposition 4 


> (a) There exists $ \tilde{r}_{I} \in(0,1 / 4) $ such that $ \pi_{I}^{A} \geq $ $ \pi_{I}^{R} $ if $ r \geq \tilde{r}_{I} $ and $ \pi_{I}^{A}<\pi_{I}^{R} $ otherwise. 
> 
> (b) There exist $ \tilde{r}_{M} \in $ $ (1 / 2,1) $ such that $ \pi_{M}^{A} \geq \pi_{M}^{R} $ if $ r \leq \tilde{r}_{M} $ and $ \pi_{M}^{A}<\pi_{M}^{R} $ otherwise.

$$
\begin{array}{|c|c|c|c|}
\hline
\text{Regions} & \text{Profit Comparison} & \text{Regions} & \text{Profit Comparison} \\
\hline
A & \pi_{I}^{A} \geq \pi_{I}^{R},\; \pi_{M}^{A} < \pi_{M}^{R} & C & \pi_{I}^{A} < \pi_{I}^{R},\; \pi_{M}^{A} < \pi_{M}^{R} \\
\hline
B & \pi_{I}^{A} \geq \pi_{I}^{R},\; \pi_{M}^{A} \geq \pi_{M}^{R} & D & \pi_{I}^{A} < \pi_{I}^{R},\; \pi_{M}^{A} \geq \pi_{M}^{R} \\
\hline
\end{array}
$$

![Figure 4 (a)](image-20.png)

![Figure 4 (b)](image-21.png)

### Proposition 5

> (a) There exist $ \tilde{r}_{I 1} \in(1 / 2,1) $ and $ \tilde{r}_{12} \in $ $ (0,1 / 4) $ such that $ \pi_{I}^{A} \geq \pi_{I}^{R} $ if 
> (i) $ k \leq 1 / 2 $ and $ r \leq \tilde{r}_{11} $ or 
> (ii) $ k>1 / 2 $ and $ r \geq \tilde{r}_{12} $ and $ \pi_{I}^{A}<\pi_{I}^{R} $ otherwise. 
> 
> (b) $ \pi_{M}^{A} \geq \pi_{M}^{R} $ if $ r \leq \tilde{r}_{M} \equiv 1 / 2 $ and $ \pi_{M}^{A}<\pi_{M}^{R} $ otherwise.

