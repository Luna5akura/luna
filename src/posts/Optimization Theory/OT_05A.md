---
title: Optimization Theory - Assignment - Week 5
category: Assignments
---



# 1

## Problem

Minimize $ f(\mathbf{x})=\sum_{\mathbf{i}=\mathbf{1}}^{\mathbf{n}} \mathbf{c}_{\mathbf{i}} / \mathbf{x}_{\mathbf{i}} $ subject to
$
\sum_{i=1}^{n} a_{i} x_{i}=b, \quad x_{i}>0, \quad i=1, \ldots, n,
$
where $ c_{i}, a_{i}, i=1, \ldots, n $, and $ b $ are positive constants.

## Solution

$ \mathcal{L}(\mathbf{x}, \lambda) = \sum_{i=1}^{n} \frac{c_i}{x_i} + \lambda \left( \sum_{i=1}^{n} a_i x_i - b \right) $

$ \frac{\partial \mathcal{L}}{\partial x_i} = -\frac{c_i}{x_i^2} + \lambda a_i = 0 \quad \text{for } i = 1, \ldots, n $

$\lambda a_i = \frac{c_i}{x_i^2} \implies x_i^2 = \frac{c_i}{\lambda a_i} \implies x_i = \sqrt{\frac{c_i}{\lambda a_i}} = \frac{1}{\sqrt{\lambda}} \sqrt{\frac{c_i}{a_i}} $

$ \frac{1}{\sqrt{\lambda}} \sum_{i=1}^{n} \sqrt{a_i c_i} = b$

$\sqrt{\lambda} = \frac{\sum_{j=1}^{n} \sqrt{a_j c_j}}{b} $

Then:

$x_i = \frac{b}{\sum_{j=1}^{n} \sqrt{a_j c_j}} \sqrt{\frac{c_i}{a_i}}$

# 2

## Problem

Consider the following quadratic programming problem:
$
\begin{aligned}
\operatorname{minimize} & \frac{1}{2}\langle\mathbf{x}, \mathbf{Q x}\rangle-\langle\mathbf{b}, \mathbf{x}\rangle \\
\text { s.t. } \mathbf{A x} & \leq \mathbf{c}
\end{aligned}
$

Show that if $ Q $ is positive definite, then the quadratic programming problem has a unique solution.

## Solution

Assume: $ f(\mathbf{x}_1) = f(\mathbf{x}_2) = f^*$

$ f\left(\frac{1}{2}\mathbf{x}_1 + \frac{1}{2}\mathbf{x}_2\right) < \frac{1}{2}f(\mathbf{x}_1) + \frac{1}{2}f(\mathbf{x}_2)$

Which contradict the assumption.

# 3


## Problem


PROBLEM 3: Prove the following result. If the feasible set of a linear program
$
\begin{array}{l}
\min \mathbf{c}^{\mathbf{t}} \mathbf{x} \\
\text { s.t. } \mathbf{A} \mathbf{x} \leq \mathbf{b}
\end{array}
$
is nonempty and bounded, then the feasible set of the corresponding dual problem
$
\begin{array}{l}
\max -\mathbf{b}^{t} \mathbf{y} \\
\text { s.t. } \mathbf{A}^{t} \mathbf{y}+\mathbf{c}=\mathbf{0} \\
\quad \mathbf{y} \geq \mathbf{0}
\end{array}
$
is nonempty and unbounded.
Hint: The feasible set is bounded means that there exists an $ M>0 $ such that $ -M \mathbf{e} \leq \mathbf{x} \leq \mathbf{M e} $ when $ \mathbf{x} $ is feasible. Show that there exists a $ \mathbf{d} $ such that $ \mathbf{A}^{t} \mathbf{d}=\mathbf{0}, \mathbf{d} \geq \mathbf{0} $ but $ \mathbf{d} \neq \mathbf{0} $, i.e. $ \mathbf{e}^{t} \mathbf{d}>\mathbf{0} $.

## Solution

There exists no $x$ s.t. $Ax < 0$ (or it's unbounded)

Therefore, by Farkas' lemma:

$A^ty=0 , y\ge0$

has solution, let's say it's $y_0$

let's say $A^ty^* + c = 0$

Then:

$y = y^* + \lambda y_0$ also satisfies the constraints

therefore it's unbounded