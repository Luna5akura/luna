---
title: Game Theory - Assignment - Week 9
category: Assignments
date: 2025-9-10 
---

# 2.15

## Problem

> Suppose there are $ n $ firms in a Cournot oligopoly. Inverse demand is given by $ P(Q)=a-Q $, where $ Q=q_{1}+\cdots+q_{n} $. Consider the infinitely repeated game based on this stage game. What is the lowest value of $ \delta $ such that the firms can use trigger strategies to sustain the monopoly output level in a subgame-perfect Nash equilibrium? How does the answer vary with $ n $, and why? If $ \delta $ is too small for the firms to use trigger strategies to sustain the monopoly output, what is the most-profitable symmetric subgame-perfect Nash equilibrium that can be sustained using trigger strategies?

## Solution 

Monopoly:

$ \pi=P(Q) \cdot Q=(a-Q) \cdot Q=a Q-Q^{2} $

Then:

$ \dfrac{d \pi}{d Q}=a-2 Q=0 \Longrightarrow Q^{m}=\dfrac{a}{2} $

Then:

$ \pi_{i}^{m}=\dfrac{\pi^{m}}{n}=\dfrac{a^{2}}{4 n} $

Cournot Nash equilibrium:

$ \dfrac{\partial \pi_{i}}{\partial q_{i}}=a-2 q_{i}-Q_{-i}=0 \Longrightarrow q_{i}=\dfrac{a-Q_{-i}}{2} $

$ q_{i}^{N}=\dfrac{a}{n+1} $

Then:

$ \pi_{i}^{N}=q_{i}^{N} \cdot P\left(Q^{N}\right)=\dfrac{a}{n+1} \cdot \dfrac{a}{n+1}=\dfrac{a^{2}}{(n+1)^{2}} $

Diviation Data:

$ \pi_{i}=q_{i}\left(a-q_{i}-\dfrac{(n-1) a}{2 n}\right)=q_{i}\left(\dfrac{a}{2}+\dfrac{a}{2 n}-q_{i}\right)=q_{i}\left(\dfrac{a(n+1)}{2 n}-q_{i}\right) $

$ \pi_{i}=q_{i}\left(a-q_{i}-\dfrac{(n-1) a}{2 n}\right)=q_{i}\left(\dfrac{a}{2}+\dfrac{a}{2 n}-q_{i}\right)=q_{i}\left(\dfrac{a(n+1)}{2 n}-q_{i}\right) $

Then:

$ \pi_{i}^{d}=q_{i}^{d} \cdot P=\dfrac{a(n+1)}{4 n} \cdot \dfrac{a(n+1)}{4 n}=\dfrac{a^{2}(n+1)^{2}}{16 n^{2}} $

Trigger strategy:

$ \dfrac{\pi_{i}^{m}}{1-\delta} \geq \pi_{i}^{d}+\dfrac{\delta}{1-\delta} \pi_{i}^{N} $

Then:

$ \delta \geq \dfrac{(n-1)^{2}}{\dfrac{n^{4}+4 n^{3}-10 n^{2}+4 n+1}{(n+1)^{2}}}=\dfrac{(n-1)^{2}(n+1)^{2}}{n^{4}+4 n^{3}-10 n^{2}+4 n+1} $

# 2.17

## Problem

> 2.17. Consider the following infinite-horizon game between a single firm and a sequence of workers, each of whom lives for one period. In each period the worker chooses either to expend effort and so produce output $ y $ at effort cost $ c $ or to expend no effort, produce no output, and incur no cost. If output is produced, the firm owns it but can share it with the worker by paying a wage, as described next. Assume that at the beginning of the period the worker has an alternative opportunity worth zero (net of effort cost) and that the worker cannot be forced to accept a wage less than zero. Assume also that $ y>c $ so that expending effort is efficient.

> Within each period, the timing of events is as follows: first the worker chooses an effort level, then output is observed by both the firm and the worker, and finally the firm chooses a wage to pay the worker. Assume that no wage contracts can be enforced: the firm's choice of a wage is completely unconstrained. In a oneperiod game, therefore, subgame-perfection implies that the firm will offer a wage of zero independent of the worker's output, so the worker will not expend any effort.

> Now consider the infinite-horizon problem. Recall that each worker lives for only one period. Assume, however, that at the beginning of period $ t $, the history of the game through period $ t-1 $ is observed by the worker who will work in period $ t $. (Think of this knowledge as being passed down through the generations of workers.) Suppose the firm discounts the future according to the discount factor $ \delta $ per period. Describe strategies for the firm and each worker in a subgame-perfect equilibrium in the infinitehorizon game in which in equilibrium each worker expends effort and so produces output $ y $, provided the discount factor is high enough. Give a necessary and sufficient condition for your equilibrium to exist.

## Solution 

 Firm's Strategy
- In period $ t $ :
- If the history shows the firm has always paid at least $ w^{*} \geq c $ whenever output $ y $ was produced in all past periods (or if $ t=1 $, the initial period), then:
- Pay $ w_{t}=w^{*} $ if the worker produces output $ y $.
- Pay $ w_{t}=0 $ if the worker produces output 0 .
- If the history shows the firm ever paid $ w<w^{*} $ when output $ y $ was produced, then:
- Pay $ w_{t}=0 $ regardless of the worker's output.
- Choose $ w^{*} \geq c $ to ensure the worker's participation constraint is satisfied.

Worker's Strategy (for worker in period $ t $ )**
- If the history shows the firm has always paid at least $ w^{*} \geq c $ when output $ y $ was produced (or if $ t=1 $ ):
- Choose effort (produce $ y $ ) if $ w^{*} \geq c $.
- Choose no effort (produce 0) if $ w^{*}<c $.
- If the history shows the firm ever paid $ w<w^{*} $ when output $ y $ was produced:
- Choose no effort (produce 0).

Then:

- Firm's Strategy: Pay $ w_{t}=c $ if the worker produces $ y $ and the firm has always paid $ w_{t} \geq c $ when $ y $ was produced in the past (or $ t=1 $ ); otherwise, pay $ w_{t}=0 $.
- Worker's Strategy: In period $ t $, produce $ y $ if the firm has always paid $ w_{t} \geq c $ when $ y $ was produced in the past (or $ t=1 $ ); otherwise, produce 0 .
- Condition: The equilibrium exists if and only if $ \delta \geq \dfrac{c}{y} $.

