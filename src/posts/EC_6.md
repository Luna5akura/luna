# Crowdsourcing Exploration 

Suppose in market:

$A, B$: Two providers

$S = \{A,B\}$

$p_i,i\in S$: provider's service quality 

$$
\begin{cases}
1, &w.p.\quad p_i \\ 
0, &w.p.\quad 1-p_i 
\end{cases}
$$: consumer receive reward

$p_i$ is known to designer and consumers
- a common prior belief
- $\text{Beta}\{s_1^i,f_1^i\}, s_1^i,f_1^i\in \mathbb Z_+$

--- 

Progress:

1. at beginning of $t\in T, T= \{ 1, 2, \dots\}$: consumer visit the platform, observe information pretaining to experience of past consumers, choose provider 

2. Complete service, before the end of $t$, report positive or negative 

$x_t = \{x_t^A,x_t^B\}$: information state
- $ x_{t}^{i}=\left\{s_{t}^{i}, f_{t}^{i}\right\} $
- $s_t^i$: accumulated number of successful service outcomes for provider $i$ up to period $t$ 

$Beta(s_t^i,f_t^i)$:Bayesian posterior belief when system state is $x_t$

$ r\left(x_{t}, i\right)=\frac{s_{t}^{i}}{s_{t}^{i}+f_{t}^{i}} $ :  the expected reward of the next customer to use provider $i$



