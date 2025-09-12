---
title: Stochastic Progress - Special 8
category: Notes
date: 2025-9-10 
---

# 8.1.2

## Problem

> $\int_{0}^{\infty} e^{-\alpha x} E[R(x)] d x=E\left[\int_{0}^{T} R(x) d x\right]$, where $T\sim Exp(\alpha)$ 

## Solution 

$$
\begin{array}{l }
RHS \\ 
= E[E[\int_0^T R(x) dx]|T] \\ 
= \int_0^\infty E[\int_0^t R(x) dx] \alpha e^{-\alpha t }dt \\ 
= \int_0^\infty (\int_0^t E[R(x)] dx) \alpha e^{-\alpha t }dt \\ 
= \int_0^\infty (\int_x^\infty \alpha e^{-\alpha t}dt) E[R(x)] dx \\ 
= \int_0^\infty e^{-\alpha x} E[R(x)] dx \\ 
\end{array}
$$

## Advantage

- No Indicator function is required.


# Ex 5.4

## Problem

> $\lambda =  1/10$ Solve $E[(X-4)^+], Var[(X-4)^+]$

## Solution 

$$
\begin{array}{l }
E[(X-4)^+] \\ 
= E[(X-4)^+|X>4]P(X>4) \\  
= E[X-4|X>4] P(X>4) \\ 
= P(X>4) E[X] \\ 
= 10e^{-4/10}
\end{array}
$$

$$
\begin{array}{l }
Var[(X-4)^+] \\ 
= E[(X-4)^{+2}] - E^2[(X-4)^+]\\ 
= E[(X-4)^{+2}|X>4]P(X>4) - E^2[(X-4)^+|X>4]P^2(X>4) \\ 
= E[X^2]P(X>4) - E^2[X]P^2(X>4) \\ 
= (Var[X] + E^2[X])P(X>4)- E^2[X]P^2(X>4) \\
= 200e^{-4/10} - 100e^{-8/10}
\end{array}
$$

## Advantage

No indicator function is required.

# Ex 5.15

## Problem 

> You, as a business owner, want to sell a bubble tea machine. Offers arrive according to a Poisson process with rate $ \lambda $. Each offer is a random value with density function $ f(x) $. Once an offer is received, you must either accept it or reject it and wait for the next offer.
- While the machine remains unsold, you incur a holding cost of $ c $ per unit time. Your goal is to maximize the expected total return, defined as the selling price minus the total holding cost.
- Assume your strategy is to accept the first offer exceeding a threshold $ y $ (called a $ y $-strategy). What is the optimal value of $ y $ ?

## Solution 

Step 1: Model Setup
- Offer Arrival: Offers follow a Poisson process with rate $ \lambda $.
- Offer Distribution: Each offer $ X $ has density $ f(x) $.
- Strategy: Accept the first offer $ X \geq y $.
- Holding Cost: $ c $ per unit time until sale.

Step 2: Key Quantities
1. Probability of Accepting an Offer:
$
p=P(X \geq y)=\int_{y}^{\infty} f(x) d x
$
2. Time to Sale: The first valid offer (i.e., $ X \geq y $ ) occurs at time $ T $, which follows an exponential distribution with rate $ \lambda p $. Thus:
$
E[T]=\frac{1}{\lambda p}
$
3. Expected Holding Cost:
$
E[\text { Holding Cost }]=c \cdot E[T]=\frac{c}{\lambda p}
$
4. Conditional Expected Selling Price:
$
E[X \mid X \geq y]=\frac{1}{p} \int_{y}^{\infty} x f(x) d x
$

Step 3: Expected Total Return
The expected total return $ V(y) $ is:
$
V(y)=E[\text { Selling Price }]-E[\text { Holding Cost }]=\frac{1}{p} \int_{y}^{\infty} x f(x) d x-\frac{c}{\lambda p}
$

Simplify:
$
V(y)=\frac{\int_{y}^{\infty} x f(x) d x-\frac{c}{\lambda}}{p} .
$

Step 4: Optimization
To maximize $ V(y) $, take the derivative $ V^{\prime}(y) $ and set it to zero:
$
V^{\prime}(y)=\frac{d}{d y}\left[\frac{\int_{y}^{\infty} x f(x) d x-\frac{c}{\lambda}}{\int_{y}^{\infty} f(x) d x}\right]=0
$

Derivative Calculation:
Let $ A(y)=\int_{y}^{\infty} x f(x) d x-\frac{c}{\lambda}, B(y)=\int_{y}^{\infty} f(x) d x $.
Using the quotient rule:
$
V^{\prime}(y)=\frac{A^{\prime}(y) B(y)-A(y) B^{\prime}(y)}{B(y)^{2}} .
$
- $ A^{\prime}(y)=-y f(y) $,
- $ B^{\prime}(y)=-f(y) $.

Substitute:
$
V^{\prime}(y)=\frac{(-y f(y)) B(y)-\left(\int_{y}^{\infty} x f(x) d x-\frac{c}{\lambda}\right)(-f(y))}{B(y)^{2}}
$

Simplify the numerator:
$
-f(y)\left[y B(y)-\int_{y}^{\infty} x f(x) d x+\frac{c}{\lambda}\right]=0
$

This implies:
$
y B(y)-\int_{y}^{\infty} x f(x) d x+\frac{c}{\lambda}=0
$

Step 5: Optimality Condition
Rearranging:
$
\int_{y}^{\infty}(x-y) f(x) d x=\frac{c}{\lambda}
$

Equivalently:
$
E\left[(X-y)^{+}\right]=\frac{c}{\lambda},
$
where $ (X-y)^{+}=\max (X-y, 0) $.

## Advantage

- Understanbale




