---
title: Game Theory - Assignment - Week 6
category: Assignments
---

# 2.4

## Problem 

> Two partners would like to complete a project. Each partner receives the payoff $ V $ when the project is completed but neither receives any payoff before completion. The cost remaining before the project can be completed is $ R $. Neither partner can commit to making a future contribution towards completing the project, so they decide to play the following two-period game: In period one partner 1 chooses to contribute $ c_{1} $ towards completion. If this contribution is sufficient to complete the project then the game ends and each partner receives $ V $. If this contribution is not sufficient to complete the project (i.e., $ c_{1}<R $ ) then in period two partner 2 chooses to contribute $ c_{2} $ towards completion. If the (undiscounted) sum of the two contributions is sufficient to complete the project then the game ends and each partner receives $ V $. If this sum is not sufficient to complete the project then the game ends and both partners receive zero.

> Each partner must generate the funds for a contribution by taking money away from other profitable activities. The optimal way to do this is to take money away from the least profitable alternatives first. The resulting (opportunity) cost of a contribution is thus convex in the size of the contribution. Suppose that the cost of a contribution $ c $ is $ c^{2} $ for each partner. Assume that partner 1 discounts second-period benefits by the discount factor $ \delta $. Compute the unique backwards-induction outcome of this twoperiod contribution game for each triple of parameters $ \{V, R, \delta\} $; see Admati and Perry (1991) for the infinite-horizon case.

## Solution 

Partner 2's optimal $ c_{2} $ is:
- If contributing $ R-c_{1} $ gives non-negative payoff: $ V-\left(R-c_{1}\right)^{2} \geq 0 $.
  - Then $ c_{2}=R-c_{1} $.
- Else, $ c_{2}=0 $ (no contribution, project not completed).

Partner 1 will choose $ c_{1} $ to maximize their payoff among these options.
Option 1: $ c_{1} \geq R $
- Best is to set $ c_{1}=R $ (since higher $ c_{1} $ increases cost without benefit).
- Payoff: $ V-R^{2} $.

Option 2: $ R-\sqrt{V} \leq c_{1}<R $
- To maximize $ \delta V-c_{1}^{2} $, set $ c_{1} $ as small as possible within this range, i.e., $ c_{1}=R-\sqrt{V} $.
- Payoff: $ \delta V-(R-\sqrt{V})^{2}=\delta V-\left(R^{2}-2 R \sqrt{V}+V\right) $.

Option 3: $ c_{1}<R-\sqrt{V} $
- Best is $ c_{1}=0 $ (no cost, no payoff).
- Payoff: 0 .

Case 1: $ R \leq \sqrt{V} $
- Then $ R-\sqrt{V} \leq 0 $, so minimal $ c_{1} $ in Option 2 is 0 .
- Option 2 becomes contributing $ 0 \leq c_{1}<R $.
- Best in Option 2 is $ c_{1}=0 $, payoff $ \delta V-0=\delta V $.
- Option 1: $ c_{1}=R $, payoff $ V-R^{2} $.
- Compare $ \delta V $ and $ V-R^{2} $.
- $ \delta V \geq V-R^{2} $ if $ R^{2} \geq(1-\delta) V $.
- Otherwise, $ V-R^{2}>\delta V $.

Case 2: $ R>\sqrt{V} $
- Then $ R-\sqrt{V}>0 $.
- Option 2: $ c_{1}=R-\sqrt{V} $, payoff $ \delta V-(R-\sqrt{V})^{2} $.
- Option 1: $ c_{1}=R $, payoff $ V-R^{2} $.
- Compare as earlier.

Then:

1. Partner 1 contributes enough to complete the project in Period $ 1\left(c_{1} \geq R\right) $ :
- Optimal is $ c_{1}=R $.
- Payoff: $ V-R^{2} $.
- This is better than other options if $ V-R^{2} \geq \delta V-(R-\sqrt{V})^{2} $ and $ V-R^{2} \geq 0 $.
- The first inequality simplifies to $ (2-\delta) \sqrt{V} \geq 2 R $.
2. Partner 1 contributes $ c_{1}=R-\sqrt{V} $ (leading to completion in Period 2):
- This is optimal if $ (2-\delta) \sqrt{V}<2 R $ and $ \delta V-(R-\sqrt{V})^{2} \geq 0 $.
- The second inequality is $ (R-\sqrt{V})^{2} \leq \delta V $.
3. Partner 1 contributes $ c_{1}=0 $ (project not completed):
o If $ \delta V-(R-\sqrt{V})^{2}<0 $ and $ V-R^{2}<0 $.

---

Final answer:

1. If $ V \geq R^{2} $ and $ (2-\delta) \sqrt{V} \geq 2 R $ :
- Partner 1 contributes $ c_{1}=R $ in Period 1, completing the project.
- Partner 2 does not need to contribute.
2. If $ (R-\sqrt{V})^{2} \leq \delta V $ and $ (2-\delta) \sqrt{V}<2 R $ :
- Partner 1 contributes $ c_{1}=R-\sqrt{V} $ in Period 1 .
- Partner 2 contributes $ c_{2}=\sqrt{V} $ in Period 2, completing the project.
3. Else:
- Partner 1 contributes $ c_{1}=0 $.
- Partner 2 contributes $ c_{2}=0 $.
- Project is not completed.