# 4.4

## Problem 



## Solution 

In pooling equilibria, both sender types play the same message.
1. Pooling on $ L $ :
- Sender strategy: Both $ t_{1} $ and $ t_{2} $ choose $ L $.
o Receiver strategy:
- Upon observing $ L $, play $ d $.
- Upon observing $ R $ (off-equilibrium), play $ d $.
o Beliefs:
- At $ L $ information set: $ P\left(t_{1}\right)=0.5, P\left(t_{2}\right)=0.5 $ (consistent with pooling).
- At $ R $ information set: $ P\left(t_{1}\right) \leq 1 / 3 $ (off-equilibrium, arbitrary but must justify playing $ d $ ).
o Equilibrium justification:
- On-path $ (L) $ : Receiver's expected payoff from $ u $ is $ 0.5 \times 1+0.5 \times 0=0.5 $; from $ d $ is $ 0.5 \times 0+0.5 \times 1=0.5 $. Receiver is indifferent, so playing $ d $ is optimal.
- Off-path $ (R) $ : With belief $ P\left(t_{1}\right) \leq 1 / 3 $, receiver's expected payoff from $ u $ is $ 2 \times P\left(t_{1}\right) \leq $ $ 2 / 3 $, and from $ d $ is $ 1-P\left(t_{1}\right) \geq 2 / 3 $. Thus, playing $ d $ is optimal (strictly if $ P\left(t_{1}\right)<1 / 3 $, weakly if $ P\left(t_{1}\right)=1 / 3 $ ).
- Sender incentives:
- $ t_{1} $ : Gets 2 from $ L $ (receiver plays $ d $ ). Deviating to $ R $ : Receiver plays $ d $, so payoff is 0 (worse than 2). No incentive to deviate.
- $ t_{2} $ : Gets 1 from $ L $ (receiver plays $ d $ ). Deviating to $ R $ : Receiver plays $ d $, so payoff is 1 (same as equilibrium). Indifferent, so no strict incentive to deviate.

2. Pooling on $ R $ :
- Sender strategy: Both $ t_{1} $ and $ t_{2} $ choose $ R $.
o Receiver strategy:
- Upon observing $ R $, play $ u $.
- Upon observing $ L $ (off-equilibrium), play any action (e.g., $ u $ or $ d $ ) depending on belief.
o Beliefs:
- At $ R $ information set: $ P\left(t_{1}\right)=0.5, P\left(t_{2}\right)=0.5 $ (consistent with pooling).
- At $ L $ information set: Any belief $ P\left(t_{1}\right)=q $ for $ q \in[0,1] $, and receiver plays a best response to this belief.
- Equilibrium justification:
- On-path $ (R) $ : Receiver's expected payoff from $ u $ is $ 0.5 \times 2+0.5 \times 0=1 $; from $ d $ is $ 0.5 \times 0+0.5 \times 1=0.5 $. Playing $ u $ is strictly optimal ( $ 1>0.5 $ ).
- Off-path $ (L) $ : Receiver plays a best response to belief $ q $. For example:
- If $ q>0.5 $, play $ u $ (since $ q>1-q $ ).
- If $ q<0.5 $, play $ d $ (since $ q<1-q $ ).
- If $ q=0.5 $, indifferent, can play either.
- Sender incentives:
- $ t_{1} $ : Gets 2 from $ R $ (receiver plays $ u $ ). Deviating to $ L $ : If receiver plays $ u $, payoff is $ 1<2 $; if receiver plays $ d $, payoff is 2 (same as equilibrium). Thus, deviation not profitable.
- $ t_{2} $ : Gets 1 from $ R $ (receiver plays $ u $ ). Deviating to $ L $ : If receiver plays $ u $, payoff is $ 0<1 $; if receiver plays $ d $, payoff is 1 (same as equilibrium). Thus, deviation not profitable.

In separating equilibria, sender types choose different messages.
3. Separating: $ t_{1} $ plays $ L, t_{2} $ plays $ R $ :
- Sender strategy: $ t_{1} $ chooses $ L, t_{2} $ chooses $ R $.
o Receiver strategy:
- Upon observing $ L $, play $ u $.
- Upon observing $ R $, play $ d $.
- Beliefs:
- At $ L $ information set: $ P\left(t_{1}\right)=1, P\left(t_{2}\right)=0 $ (consistent: only $ t_{1} $ plays $ L $ ).
- At $ R $ information set: $ P\left(t_{1}\right)=0, P\left(t_{2}\right)=1 $ (consistent: only $ t_{2} $ plays $ R $ ).
o Equilibrium justification:
- Receiver best response:
- At $ L $ (Node_A1): $ u $ gives receiver $ 1, d $ gives 0 ; play $ u $.
- At $ R $ (Node_B2): $ u $ gives receiver $ 0, d $ gives 1 ; play $ d $.
- Sender incentives:
- $ t_{1} $ : Plays $ L $, receiver plays $ u $, payoff is 1 . Deviating to $ R $ : Receiver plays $ d $, payoff is $ 0< $ 1. No incentive.
- $ t_{2} $ : Plays $ R $, receiver plays $ d $, payoff is 1 . Deviating to $ L $ : Receiver plays $ u $, payoff is $ 0< $ 1. No incentive.

4. Separating: $ t_{1} $ plays $ R, t_{2} $ plays $ L $ :
- Sender strategy: $ t_{1} $ chooses $ R, t_{2} $ chooses $ L $.
o Receiver strategy:
- Upon observing $ R $, play $ u $.
- Upon observing $ L $, play $ d $.
o Beliefs:
- At $ R $ information set: $ P\left(t_{1}\right)=1, P\left(t_{2}\right)=0 $ (consistent: only $ t_{1} $ plays $ R $ ).
- At $ L $ information set: $ P\left(t_{1}\right)=0, P\left(t_{2}\right)=1 $ (consistent: only $ t_{2} $ plays $ L $ ).
o Equilibrium justification:
- Receiver best response:
- At $ R $ (Node_A2): $ u $ gives receiver $ 2, d $ gives 0; play $ u $.
- At $ L $ (Node_B1): $ u $ gives receiver 0, $ d $ gives 1; play $ d $.
- Sender incentives:
- $ t_{1} $ : Plays $ R $, receiver plays $ u $, payoff is 2 . Deviating to $ L $ : Receiver plays $ d $, payoff is 2 (same). Indifferent, but no strict incentive to deviate.
- $ t_{2} $ : Plays $ L $, receiver plays $ d $, payoff is 1 . Deviating to $ R $ : Receiver plays $ u $, payoff is 1 (same). Indifferent, but no strict incentive to deviate.

Summary of all pure-strategy PBEs:
- Pooling on $ L $ : Both types play $ L $; receiver plays $ d $ on $ L $ and $ d $ on $ R $ with belief $ P\left(t_{1}\right) \leq 1 / 3 $ at $ R $
- Pooling on $ R $ : Both types play $ R $; receiver plays $ u $ on $ R $ and any action on $ L $ with any belief.
- Separating ( $ t_{1}: L, t_{2}: R $ ): Receiver plays $ u $ on $ L, d $ on $ R $.
- Separating ( $ t_{1}: R, t_{2}: L $ ): Receiver plays $ u $ on $ R, d $ on $ L $.

--- 

1. Pooling on $ L $ :
- Sender strategy: Both $ t_{1} $ and $ t_{2} $ send $ L $.
- Receiver beliefs:
- After $ L: P\left(t_{1}\right)=0.5, P\left(t_{2}\right)=0.5 $ (consistent with pooling).
- After $ R $ (off-equilibrium): $ P\left(t_{1}\right) \leq \frac{2}{3} $ (arbitrary but must support equilibrium).
- Receiver strategy:
- After $ L $ : Plays $ u $ (expected payoff $ 0.5 \times 0+0.5 \times 3=1.5>0.5 \times 1+0.5 \times 1=1 $ ).
- After $ R $ : Plays $ u $ (optimal if $ P\left(t_{1}\right) \leq \frac{2}{3} $ since $ 2\left(1-P\left(t_{1}\right)\right) \geq P\left(t_{1}\right) $ ).
- Incentive compatibility:
- $ t_{1} $ : Gets 3 (plays $ L $, receiver plays $ u $ ). Deviating to $ R $ : Receiver plays $ u $, payoff 0 (worse).
- $ t_{2} $ : Gets 3 (plays $ L $, receiver plays $ u $ ). Deviating to $ R $ : Receiver plays $ u $, payoff 1 (worse).
- Conclusion: This is a PBE if off-equilibrium belief satisfies $ P\left(t_{1} \mid R\right) \leq \frac{2}{3} $.

2. Pooling on $ R $ :
- Sender strategy: Both $ t_{1} $ and $ t_{2} $ send $ R $.
- Receiver beliefs:

。After $ R: P\left(t_{1}\right)=0.5, P\left(t_{2}\right)=0.5 $ (consistent).
- After $ L $ (off-equilibrium): Any $ P\left(t_{1}\right)=q \in[0,1] $.
- Receiver strategy:
- After $ R $ : Plays $ u $ (expected payoff $ 0.5 \times 0+0.5 \times 2=1>0.5 \times 1+0.5 \times 0=0.5 $ ).
- After $ L $ : Plays best response to $ q $ :
- If $ q<\frac{2}{3} $, plays $ u $ (since $ 3(1-q)>1 $ ).
- If $ q>\frac{2}{3} $, plays $ d $ (since $ 3(1-q)<1 $ ).
- If $ q=\frac{2}{3} $, indifferent.
- Incentive compatibility fails:
- $ t_{1} $ : In equilibrium, gets 0 (plays $ R $, receiver plays $ u $ ). Deviating to $ L $ :
- If receiver plays $ u $, gets $ 3>0 $.
- If receiver plays $ d $, gets $ 1>0 $.
- Always profitable to deviate.
- Conclusion: No pooling equilibrium on $ R $.

1. Separating: $ t_{1} $ sends $ L, t_{2} $ sends $ R $
- Sender strategy: $ t_{1} \rightarrow L, t_{2} \rightarrow R $.
- Receiver beliefs:
- After $ L: P\left(t_{1}\right)=1, P\left(t_{2}\right)=0 $ (consistent).

。After $ R: P\left(t_{1}\right)=0, P\left(t_{2}\right)=1 $ (consistent).
- Receiver strategy:
o After $ L $ : Plays $ d $ (payoff $ 1>0 $ for $ u $ at $ A_{1} $ ).
- After $ R $ : Plays $ u $ (payoff $ 2>0 $ for $ d $ at $ B_{2} $ ).
- Incentive compatibility:
- $ t_{1} $ : Gets 1 (plays $ L $, receiver plays $ d $ ). Deviating to $ R $ : Receiver plays $ u $, payoff 0 (worse).
- $ t_{2} $ : Gets 1 (plays $ R $, receiver plays $ u $ ). Deviating to $ L $ : Receiver plays $ d $, payoff 0 (worse).
- Conclusion: This is a PBE.

2. Separating: $ t_{1} $ sends $ R, t_{2} $ sends $ L $
- Sender strategy: $ t_{1} \rightarrow R, t_{2} \rightarrow L $.
- Receiver beliefs:
o After $ L: P\left(t_{1}\right)=0, P\left(t_{2}\right)=1 $ (consistent).
- After $ R: P\left(t_{1}\right)=1, P\left(t_{2}\right)=0 $ (consistent).
- Receiver strategy:
- After $ L $ : Plays $ u $ (payoff $ 3>1 $ for $ d $ at $ B_{1} $ ).
- After $ R $ : Plays $ d $ (payoff $ 1>0 $ for $ u $ at $ A_{2} $ ).
- Incentive compatibility:
- $ t_{1} $ : Gets 4 (plays $ R $, receiver plays $ d $ ). Deviating to $ L $ : Receiver plays $ u $, payoff 3 (worse).
- $ t_{2} $ : Gets 3 (plays $ L $, receiver plays $ u $ ). Deviating to $ R $ : Receiver plays $ d $, payoff 2 (worse).
- Conclusion: This is a PBE.

Summary of All Pure-Strategy PBEs
1. Pooling on $ L $ :
- Both types send $ L $.
- Receiver plays $ u $ after $ L $ and $ u $ after $ R $.
- Belief after $ R: P\left(t_{1} \mid R\right) \leq \frac{2}{3} $.
2. Separating Equilibrium 1:
- $ t_{1} $ sends $ L, t_{2} $ sends $ R $.
- Receiver plays $ d $ after $ L, u $ after $ R $.
- Beliefs: Certainty at each information set.
3. Separating Equilibrium 2:
- $ t_{1} $ sends $ R, t_{2} $ sends $ L $.
- Receiver plays $ u $ after $ L, d $ after $ R $.
- Beliefs: Certainty at each information set.