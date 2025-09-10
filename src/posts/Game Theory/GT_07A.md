---
title: Game Theory - Assignment - Week 7
category: Assignments
---

# Problem

> 2.6. Three oligopolists operate in a market with inverse demand given by $ P(Q)=a-Q $, where $ Q=q_{1}+q_{2}+q_{3} $ and $ q_{i} $ is the quantity produced by firm $ i $. Each firm has a constant marginal cost of production, $ c $, and no fixed cost. The firms choose their quantities as follows: (1) firm 1 chooses $ q_{1} \geq 0 $; (2) firms 2 and 3 observe $ q_{1} $ and then simultaneously choose $ q_{2} $ and $ q_{3} $, respectively. What is the subgame-perfect outcome?

# Solution 

For firm 2:

$ \pi_{2}=(P-c) q_{2}=\left(a-\left(q_{1}+q_{2}+q_{3}\right)-c\right) q_{2} $

By maximizing the profit, we can get:

$ q_{2}=\frac{a-c-q_{1}-q_{3}}{2} $

Similarly:

$ q_{3}=\frac{a-c-q_{1}-q_{2}}{2} $

With $q_2 = q_3$, we get:

$ q_{2}+q_{3}=\frac{2\left(a-c-q_{1}\right)}{3} $

Then, for firm 1:

$ Q=q_{1}+q_{2}+q_{3}=q_{1}+\frac{2\left(a-c-q_{1}\right)}{3} $

Then firm 1's profit is:

$ \begin{array}{l}\pi_{1}=(P-c) q_{1}=\left(\frac{a-q_{1}+2 c}{3}-c\right) q_{1} \\ =\left(\frac{a-q_{1}+2 c-3 c}{3}\right) q_{1}=\frac{a-q_{1}-c}{3} q_{1}\end{array} $

By maximizing the profit, we can get:

$ q_{1}=\frac{a-c}{2} $

Also we can get:

$ q_2 = q_3 = \frac{a-c}{6}$

Then:

$Q = \dfrac{5(a-c)}{6}$

$P = \dfrac{a + 5c}{6}$
