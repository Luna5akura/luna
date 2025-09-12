---
title: Quantum Computation - Week 1
date: 2025-9-10 
---

# Exercise 2.58

Suppose we prepare a quantum system in an eigenstate$|\psi\rangle$
of some observable $M$, with corresponding eigenvalue $m$.

What is the average observed value of $M$, and the standard deviation?

---

## Solution:

$\langle M \rangle = \langle \psi | M | \psi \rangle = m$ ($M|\psi \rangle = m|\psi\rangle$)

$\langle M^2 \rangle = \langle \psi | M^2 | \psi \rangle = m^2$

$\Delta(M) = \sqrt{\langle M^2 \rangle - \langle M \rangle ^2} = \sqrt{m^2 - m^2 } = 0$

--- 

# 2.107->2.108:

$$
\begin{aligned}[l]
&\left[A,B\right] \\ 
=&AB - BA\\
=&(C-\langle C\rangle)(D-\langle D\rangle) - (D-\langle D\rangle)(C-\langle C\rangle) \\
=& CD - DC\\
 = &\left[C,D\right]
\end{aligned}
$$

--- 

# Exercise 2.59

Suppose we have qubit in the state  $|0\rangle $,
and we measure the observable  $X$ .
What is the average value of  $X$  ?
What is the standard deviation of  $X$  ?

 --- 

## Solution


$$
\begin{aligned}[l]
& \langle X \rangle \\
 = & \langle 0 | X |0 \rangle \\
 = &0\\
\\
&\langle X^2\rangle \\
 = &\langle I \rangle \\
= &1\\
\\
&\Delta(X)\\
 = &\sqrt{\langle X ^2\rangle - \langle X \rangle ^ 2}\\
= & 1
\end{aligned}
$$

--- 

# Exercise 2.60

Show that  $\vec{v} \cdot \vec{\sigma} $ has eigenvalues  $\pm $1 ,
and that the projectors onto the corresponding eigenspaces are given by
$P_{ \pm}=(I \pm \vec{v} \cdot \vec{\sigma}) / 2 .$

--- 

## Solution

$\vec v \cdot \vec \sigma = v_x \sigma_x + v_y\sigma_y + v_z\sigma_z$

$\Rightarrow (\vec v \cdot \vec \sigma)^2 = v_x ^ 2 + v_y ^ 2 + v_z ^ 2 = |\vec v|^2 = I$

$\Rightarrow P = \dfrac{I \pm \vec v \cdot \vec \sigma}{2}$

---

# Exercise 2.61

Calculate the probability of obtaining the result $+1$
for a measurement of  $\vec{v} \cdot \vec{\sigma} $,
given that the state prior to measurement is  $|0\rangle $.
What is the state of the system after the measurement if $+1$ is obtained?

---

## Solution

$p = \langle 0 | P_+ | 0\rangle = \dfrac{1}{2}(\langle 0| I | 0\rangle + \langle 0 | \vec v \cdot \vec \sigma | 0 \rangle)$

$ = \dfrac{1}{2}(1 + v_z)$

$|\psi' \rangle = \dfrac{1}{2}(I +\vec v \cdot \vec \sigma)|0\rangle = (1 + v_z)|0\rangle + (v_x + iv_y)|1\rangle$

$\dfrac{|\psi'\rangle}{\sqrt{\langle \psi'|\psi'\rangle}} = \dfrac{(1 + v_z)|0\rangle + (v_x + iv_y)|1\rangle}{\sqrt{2(1+v_z)}}$





