# 1

## Problem

Let $ D $ be an arbitrary set in $ \mathbb{R}^{n} $. Define $ \bar{D}=\left\{\mathbf{x} \in \mathbb{R}^{n} \mid \forall \epsilon>0, B(\mathbf{x}, \epsilon) \cap D \neq \emptyset\right\} $. Show that $ \bar{D}=\operatorname{int}(D) \cup \partial D=D \cup D^{\prime} $.

## Solution

### Part 1: $\bar D = D \cup D'$

First, show $ D \cup D^{\prime} \subseteq \bar{D} $

Clearly, $D\subseteq \bar D $, because for any $\vec x \in D$,  $B(\vec x, \epsilon) \cap D$ contains $\vec x$, and satisfies the definition of $\bar D$

Then, by definition, for any $\vec x \in D'$, $B(\vec x, \epsilon) \cup D \ne \emptyset$

---

Then, show $\bar D \subseteq D \cup D'$

for $\vec x \in \bar D$, if $\vec x \in D$, done. If not, since $B(\vec x, \epsilon) \cup D \ne \emptyset$, then $\vec x \in D'$

### Part 2: $\bar D = int(D) \cup \partial D$

First, show $int(D)\cup \partial D \subseteq \bar D$

By definition, $int(D) \subseteq  \bar D$. By definition, for all $\vec x \in \partial D, B(\vec x , \epsilon) \cup D \ne \emptyset $, which satisfies the definition of $\bar D$, therefore $\partial D \subseteq \bar D$

Then, show $\bar D \subseteq  int(D) \cup \partial D$

For all $\vec x \in \bar D$, if exists $\epsilon > 0$, such that $B(\vec x, \epsilon) \subseteq D$, then by definition, $\vec x \in int(D)$.

Otherwise, that means for all $\epsilon > 0$, $B(\vec x, \epsilon) \nsubseteq D$, which means $B(\vec x, \epsilon)\cup \mathbb R ^n \backslash D \ne \emptyset$ , by definition, $\vec x \in \partial D \quad$

$\square$ 

# 2

## Problem

$ D $ is called closed if $ D=\bar{D} $. Show that (1) $ D $ is closed if and only if $ \mathbb{R}^{n} \backslash D $ is open;
(2) $ D $ is closed if and only if for any sequence $ \mathbf{x}_{n} \rightarrow \overline{\mathbf{x}},\left\{\mathbf{x}_{n}\right\}_{n=1}^{\infty} \subseteq D $, then $ \overline{\mathbf{x}} \in D $.

## Solution

### Part (1)

$ \Rightarrow $ : 

Assume $ D $ is closed, so $ D=\bar{D} $. 

Let $ \mathbf{x} \in \mathbb{R}^{n} \backslash D $. Then $ \mathbf{x} \notin \bar{D} $. By definition, there exists $ \epsilon>0 $ such that $ B(\mathbf{x}, \epsilon) \cap D=\emptyset $.

Therefore, $ B(\mathbf{x}, \epsilon) \subseteq \mathbb{R}^{n} \backslash D $. Thus, $ \mathbb{R}^{n} \backslash D $ is open.


$ \Leftarrow $ : 

Assume $ \mathbb{R}^{n} \backslash D $ is open. 

Let $ \mathbf{x} \in \bar{D} $. Suppose $ \mathbf{x} \notin D $, so $ \mathbf{x} \in \mathbb{R}^{n} \backslash D $. 

Since $ \mathbb{R}^{n} \backslash D $ is open, by definition, there exists $ \epsilon>0 $, such that $ B(\mathbf{x}, \epsilon) \subseteq \mathbb{R}^{n} \backslash D $, so $ B(\mathbf{x}, \epsilon) \cap D=\emptyset $, contradicting $ \mathbf{x} \in \bar{D} $. 

Thus, $ \mathbf{x} \in D $, so $ \bar{D} \subseteq D $

Since $ D \subseteq \bar{D} $ always, $ D=\bar{D} $.

$\square$

### Part (2)

$ \Rightarrow $:

Assume $ D $ is closed. 

Let $ \left\{\mathbf{x}_{n}\right\} \subseteq D $ with $ \mathbf{x}_{n} \rightarrow \overline{\mathbf{x}} $.

Then $ \forall \epsilon>0, \exists N \in \mathbb{N} $, such that $ \forall n \geq N, \mathbf{x}_{n} \in B(\overline{\mathbf{x}}, \epsilon) $

That is, $ B(\overline{\mathbf{x}}, \epsilon) \cap D \neq \emptyset $.

Therefore, $ \overline{\mathrm{x}} \in \bar{D}=D \Rightarrow \overline{\mathrm{x}} \in D $.

$ \Leftarrow $:

Assume every convergent sequence in $ D $ has its limit in $ D $.

Let $ \mathbf{x} \in \bar{D} $. Then for each $ n \in \mathbb{N}, \exists \mathbf{x}_{n} \in B\left(\mathbf{x}, \frac{1}{n}\right) \cap D $.

Then $ \mathbf{x}_{n} \rightarrow \mathbf{x} $, and by assumption, $ \mathbf{x} \in D $.

So $ \bar{D} \subseteq D $.

Since $ D \subseteq \bar{D} $, we have $ D=\bar{D} \Rightarrow D $ is closed.

$\square$

# 3

## Problem

Let $ \mathbf{A} $ be an $ m \times n $ matrix and $ \mathbf{b} $ be an $ m $ vector. Show that $ \{\mathbf{x} \mid \mathbf{A} \mathbf{x} \leq \mathbf{b}, \mathbf{x} \geq \mathbf{0}\} $ is convex.

## Solution 

For any $\vec x_1, \vec x_2 $ in the set, for any $\vec z = \lambda x_1 + (1-\lambda) x_2, \lambda \ge 0$, we have:

$A \vec z = A (\lambda \vec x_1 + (1-\lambda \vec x_2)) = \lambda A\vec x_1 + (1-\lambda) A \vec x_2 \ge \lambda\vec b + (1-\lambda)\vec b = \vec b$

By definition, $\vec z $ is in the set.

$\square$

# 4

## Problem 

A company must distribute its product from two warehouse locations to two retail outlets. 

Warehouse A has a total of **48 units**, and Warehouse B has a total of **60 units**. 

Forecasting estimates a demand of **at most 36 units** for Retail Outlet 1 and **72 units** for Retail Outlet 2. 

The unit shipping costs between each warehouse and retail outlet are given in Table 1. 

The problem is **to determine the minimum-cost shipping schedule.** Formulate a linear programming model. 

$$
\begin{array}{ccc}
& \text{Table 1}\\ 
\hline \text{Warehouse} & \text{Retail Outlet 1} & \text{Retail Outlet 2} \\
\hline A &  \$ 6  &  \$ 8  \\
B &  \$ 4  &  \$ 3  \\
\hline
\end{array}
$$

## Solution 

We define the decision variables as follows:
- $ x_{A 1} $ : units shipped from Warehouse A to Retail Outlet 1
- $ x_{A 2} $ : units shipped from Warehouse A to Retail Outlet 2
- $ x_{B 1} $ : units shipped from Warehouse B to Retail Outlet 1
- $ x_{B 2} $ : units shipped from Warehouse B to Retail Outlet 2

The model is as follows:

$ \begin{array}{cl}\min & 6 x_{A 1}+8 x_{A 2}+4 x_{B 1}+3 x_{B 2} \\ \text { s.t. } & x_{A 1}+x_{A 2}=48 \\ & x_{B 1}+x_{B 2}=60 \\ & x_{A 1}+x_{B 1} \leq 36 \\ & x_{A 2}+x_{B 2} \leq 72 \\ & x_{A 1}, x_{A 2}, x_{B 1}, x_{B 2} \geq 0\end{array} $

# 5

## Problem

(Scheduling Problem) A post office requires different number of employees on different days of the week. The minimum number of employees required on each day is listed in Table 2.

Each employee works for 5 consecutive days and then takes 2 days off. Formulate a model to find the minimum number employees that need to be hired.

$$
\begin{array}{lc}
\text{Table 2} \\ \\
\hline \text{Day} & \text{\# of employees} \\
\hline \text{{1-Monday}} & 17 \\
\text{2-Tuesday} & 13 \\
\text{3-Wednesday} & 15 \\
\text{4-Thursday} & 19 \\
\text{5-Friday} & 14 \\
\text{6-Saturday} & 16 \\
\text{7-Sunday} & 11 \\
\hline
\end{array}
$$

## Solution

$ \begin{array}{cl}\min & x_{1}+x_{2}+x_{3}+x_{4}+x_{5}+x_{6}+x_{7} \\ \text { s.t. } & x_{1}+x_{4}+x_{5}+x_{6}+x_{7} \geq 17 \\ & x_{1}+x_{2}+x_{5}+x_{6}+x_{7} \geq 13 \\ & x_{1}+x_{2}+x_{3}+x_{6}+x_{7} \geq 15 \\ & x_{1}+x_{2}+x_{3}+x_{4}+x_{7} \geq 19 \\ & x_{1}+x_{2}+x_{3}+x_{4}+x_{5} \geq 14 \\ & x_{2}+x_{3}+x_{4}+x_{5}+x_{6} \geq 16 \\ & x_{3}+x_{4}+x_{5}+x_{6}+x_{7} \geq 11 \\ & x_{1}, x_{2}, x_{3}, x_{4}, x_{5}, x_{6}, x_{7} \geq 0\end{array} $

# 6

## Problem

Use AI to assist in formulating the Travelling Salesman Problem (TSP) in an alternative way to that presented in class, and explain why the constraints eliminate subtours that do not include the designated origin node.

## Solution 


Additional Variables:
- $ y_{i j} \geq 0 $ for $ i \neq j $ : Represents the "flow" amount carried along arc $ (i, j) $, interpreted as the number of nodes visited after $ j $ in the path from the origin.

Additional Constraints:
- Flow conservation (origin sends $ n-1 $ units of flow):
$
\sum_{j=2}^{n} y_{1 j}=n-1, \quad \sum_{i \neq k} y_{i k}-\sum_{j \neq k} y_{k j}=1 \quad \forall k=2, \ldots, n .
$
- Linking flow to arcs:
$
y_{i j} \leq(n-1) x_{i j} \quad \forall i \neq j .
$
- Binary and non-negativity: $ x_{i j} \in\{0,1\}, y_{i j} \geq 0 $.

Why It Eliminates Subtours (Especially Those Not Containing the Origin):
The degree constraints allow disjoint cycles, but the flow constraints impose a tree-like structure rooted at node 1: flow starts at 1 and "drains" 1 unit at each other node, ensuring all nodes are reachable from 1 without cycles in the flow graph. If a subtour exists on a subset $ S \subseteq\{2, \ldots, n\} $ (excluding 1), the flow into $ S $ would be 0 (no path from 1), but the required outflow (draining $ |S| $ units) couldn't balance, violating conservation. Subtours including 1 are prevented because the flow forces a single cycle (no branching). The linking constraints ensure flow only travels on selected arcs, and the $ n-1 $ bound prevents excessive flow. This formulation has $ O\left(n^{2}\right) $ variables and constraints.

placeholder

placeholder

placeholder

placeholder

placeholder

placeholder