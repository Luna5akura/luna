# Exercise 2.67

Suppose  $V$  is a Hilbert space with a subspace  $W$ .

Suppose $U: W \rightarrow V$  is a linear operator which preserves inner products,

that is, for any $ \left|w_{1}\right\rangle$  and  $\left|w_{2}\right\rangle$  in  $W$ ,

$\left\langle w_{1}\right| U^{\dagger} U\left|w_{2}\right\rangle=\left\langle w_{1} \mid w_{2}\right\rangle$ .


Prove that there exists a unitary operator  $U^{\prime}: V \rightarrow V $ which extends $U$ .

That is, $ U^{\prime}|w\rangle=U|w\rangle$  for all $ |w\rangle $ in  $W $, but $ U^{\prime}$  is defined on the entire space  $V$ . 

Usually we omit the prime symbol $'$ and just write $ U  $to denote the extension.

---

## Proof

### U is an isometry from W into V

$\forall |w_1\rangle, |w_2\rangle \in W, \langle U w_1 | U w_2 \rangle = \langle w_1 | U^\dagger U | w_2\rangle = \langle w_1 | w_2 \rangle$

Therefore, $U$ is an isometry.

### Extend U to unitary operator U' on V

Let $W^\perp$ denote the orthogonal complement of $W$ in $V$, so $V = W \oplus W^\perp$

Notice that $V = U(W) \oplus U(W)^\perp$

$U$ is isometry $\Rightarrow$ $\dim W = \dim U(W) \Rightarrow \dim W^\perp = \dim U(W)^\perp$

$\Rightarrow \exists T: W^\perp \rightarrow U(W)^\perp$, $T$ is isometry

Define $U': V\rightarrow V $ by: $U'|v\rangle = U|w\rangle + T|w^\perp\rangle$

where $|v\rangle = |w\rangle + |w^\perp\rangle, |w\rangle \in W, |w^\perp\rangle\in W^\perp$

### Show that U' is unitary

$\forall |v_1\rangle, |v_2\rangle \in V, |v_i \rangle =|w_i\rangle + |w_i^\perp\rangle,$ we have:

$$
\begin{aligned}
\langle U'v_1|U'v_2\rangle & = \langle Uw_1 + Tw_1^\perp | U w_2 + T w_2^\perp\rangle \\
&=\langle Uw_1|Uw_2\rangle + \langle Tw_1^\perp | Tw_2^\perp\rangle\\
&=\langle w_1 | w_2\rangle + \langle w_1^\perp|w_2^\perp\rangle\\
&=\langle v_1|v_2\rangle
\end{aligned}
$$

$\Box$

---

# Thoughts on 2.127 - 2.131, the POVM universal measurement

There's a **quantum system** with **state space** $Q$

We want to perform a $\sum_{i}M_i$, a **POVM** on $|\psi\rangle$, but it's not a projector

We introduce a **ancilla system** with **state space** $M$,  with orthonormal basis $|m\rangle$,

We construct a composed system $Q\otimes M$, and $|\Psi\rangle = |\psi\rangle\otimes|0\rangle$ (here $|0\rangle$ can be any state)

We denote $U$ on $Q\otimes M$ by $U|\Psi\rangle = \sum_i M_i|\psi\rangle|m\rangle$,

we can see $U$ is unitary and preserves inner products, therefore:

$$
\begin{aligned}
\langle\Psi_1|U^\dagger U|\Psi_2\rangle &= \sum_{i, j}\langle\psi_1|M_i^\dagger \langle m_i|M_j|\psi_2\rangle| m_j\rangle\\
&=\sum_{i,j}\langle\psi_1|M_i^\dagger M_j|\psi_2\rangle\langle m_i|m_j\rangle\\
&=\sum_i \langle\psi_1|M_i^\dagger M_i|\psi_2\rangle \text{ (notice only when i = j it's not zero)}\\ 
&=\langle\psi_1|\psi_2\rangle
\end{aligned}
$$

then we can perform measurement on $M$ instead, we have $P_m = I_Q \otimes |m\rangle\langle m |$

then the probability:

$$
\begin{aligned}
p(m) &= \langle\Psi|U^\dagger P_mU|\Psi\rangle\\
&= \sum_{i, j}\langle\psi|M_i^\dagger \langle m_i|P_m M_j|\psi\rangle| m_j\rangle\\
&=\sum_{i,j}\langle\psi|M_i^\dagger M_j|\psi\rangle \langle m_i|m\rangle\langle m|m_j\rangle \\
&=\langle\psi |M^\dagger_m M_m|\psi\rangle \text{ ((notice only mi = m and mj = m it's not zero))}
\end{aligned}
$$

the state:

$$
\begin{aligned}
\dfrac{P_m U |\Psi\rangle}{\sqrt{p(m)} } &= \frac{\sum_i M_i|\psi\rangle|m_i\rangle\langle m_i|m\rangle}{\sqrt{p(m)}}\\
&=\dfrac{M_m|\psi\rangle|m\rangle}{\sqrt{\langle\psi|M^\dagger _m M_m|\psi\rangle}} \text{ (notice only mi = m it's not zero)}\\
\end{aligned}
$$

(the book made a mistake here)

therefore the state of system $M$ is $|m\rangle$,

the state of system $Q$ is $\dfrac{M_m|\psi\rangle|m\rangle}{\sqrt{\langle\psi|M^\dagger _m M_m|\psi\rangle}}$

which correspond with **Postulate 3**  $\square$

---

# Exercise 2.68

Prove that $\dfrac{|00\rangle + |11\rangle}{\sqrt{2}} \ne |a\rangle|b\rangle$ for all single qubit states $|a\rangle, |b\rangle$

---

## Proof

let $|a\rangle = \alpha |0\rangle + \beta|1\rangle, |b\rangle = \gamma|0\rangle + \delta|1\rangle$,

$|a\rangle|b\rangle = \dfrac{1}{2}\alpha\gamma|00\rangle + \dfrac{1}{2}\alpha\delta|01\rangle + \dfrac{1}{2}\beta\gamma|10\rangle + \dfrac{1}{2}\beta\delta|11\rangle$

then $\alpha\delta = 0$ and $\beta\gamma = 0$, contradiction.

---

# Superdense coding

# Exercise 2.70

Suppose  $E$  is any positive operator acting on Alice's qubit.

Show that  $\langle\psi| E \otimes I|\psi\rangle  $takes the same value 

when  $|\psi\rangle  $is any of the four Bell states. 

Suppose some malevolent third party ('Eve') intercepts Alice's qubit 

on the way to Bob in the superdense coding protocol. 

Can Eve infer anything about which of the four possible bit strings  

$00,01,10,11  $Alice is trying to send? 

If so, how, or if not, why not?

---

## Solution

1. notice that $\langle \psi | E \otimes I | \psi \rangle = tr((E\otimes I )|\psi\rangle\langle\psi|)$

2. No, she can only access to one bit and there's no useful information.

---

# Density operator

density operator, density matrix:

$\rho \equiv \sum_i p_i|\psi_i\rangle\langle\psi_i|$

$\rho \rightarrow U\rho U^\dagger$

$\rho_m = \dfrac{M_m\rho M_m^\dagger}{tr(M^\dagger_m M_m \rho)}$

$\rho = \sum_i p_i \rho_i =\sum_m M_m \rho M_m ^\dagger$
