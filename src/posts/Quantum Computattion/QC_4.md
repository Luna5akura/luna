---
title: Quantum Computation - Week 4
---

# More density operator

$tr(\rho) = 1$

$\rho$ is a positive operator

# Postulates


## 1

$\sum_i p_i \rho_i$

## 2

$\rho' = U\rho U^\dagger$

## 3

$p(m) = tr(M^\dagger_mM_m\rho)$

$\dfrac{M_m\rho M^\dagger_m}{tr((M^\dagger_mM_m\rho)}$

$\sum_mM^\dagger_mM_m = I$

## 4

$\rho_1\otimes \rho_2\otimes\cdots\otimes\rho_n$

## Pure state:

$\rho = |\psi\rangle\langle\psi|$

---

# Exercise 2.71

(Criterion to decide if a state is mixed or pure) 

Let  $\rho  $ be a density operator. 

Show that  $\operatorname{tr}\left(\rho^{2}\right) \leq 1$ ,

with equality if and only if  $\rho  $ is a pure state.

---

# Proof

$\Rightarrow:$

$tr(\rho^2) = 1 \Rightarrow \sum_i\lambda_i^2 = 1\Rightarrow $ one $\lambda $ is 1

$\Leftarrow:$

$\rho = |\psi\rangle\langle\psi| \Rightarrow \rho^2 = \rho \Rightarrow tr(\rho^2) = tr(\rho) = 1$

---

# Same density matrices:

$|\tilde \psi_i\rangle = \sum_j u_{ij}|\tilde \phi_j\rangle$

---

# Exercise 2.72

(Bloch sphere for mixed states) 

The Bloch sphere picture for pure states of a single qubit was introduced in Section 1.2. 

This description has an important generalization to mixed states as follows.

(1) Show that an arbitrary density matrix for a mixed state qubit may be written as

$\rho=\frac{I+\vec{r} \cdot \vec{\sigma}}{2}$

where  $\vec{r}$  is a real three-dimensional vector such that  $\|\vec{r}\| \leq 1 $. 

This vector is known as the Bloch vector for the state  $\rho $.


(2) What is the Bloch vector representation for the state  $\rho=I / 2 $ ?

(3) Show that a state  $\rho$  is pure if and only if  $\|\vec{r}\|=1 $.

(4) Show that for pure states the description of the Bloch vector we have given coincides with that in Section 1.2.

---

## (1)

Exercise 2.60

## (2)

$\vec r = (0, 0, 0)$

## (3)

)