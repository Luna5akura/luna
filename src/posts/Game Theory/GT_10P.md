---
title: Game Theory - Paper - Week 10
category: Game Theory Paper
date: 2025-9-10 
---

# Model 

Period 1:
- The manufacturer sets a wholesale price $ w_{1} $ and offers a rebate $ \delta $ to consumers, applicable only in period 1.
- The retailer chooses the procurement quantity $ Q_{1} $ and sets the retail price $ p_{1} $.
- Consumers pay an out-of-pocket price $ P_{1}=p_{1}-\delta $, leading to purchases $ q\left(p_{1}-\delta\right) $.
- Excess procurement becomes inventory: $ I=Q_{1}-q\left(p_{1}-\delta\right) $, carried to period 2 at a holding cost $ h \geq 0 $ per unit.

Period 2:
- The manufacturer sets a wholesale price $ w_{2} $.
- The retailer chooses procurement $ Q_{2} $ and retail price $ p_{2} $, using inventory $ I $ and new purchases $ Q_{2} $.
- Consumers pay $ P_{2}=p_{2} $ (no rebate), leading to purchases $ q\left(p_{2}\right) $.

- Consumer demand in each period $ i=1,2 $ is given by:
\[
q\left(P_{i}\right)=\frac{a-P_{i}}{b}
\]
where $ P_{i} $ is the out-of-pocket price paid by consumers, $ a>0 $ is the demand intercept, and $ b>0 $ scales the price sensitivity.

# Proposition 1

(i) The manufacturer strictly benefits from offering consumer rebates.
(ii) The manufacturer's decision to offer rebates also benefits the retailer and consumers.

## Intuition

Without Rebates: The retailer uses inventory strategically to force the manufacturer to lower the wholesale price in period 2. By carrying extra inventory from period 1, the retailer reduces its dependence on period 2 purchases, weakening the manufacturer's pricing power. Anticipating this, the manufacturer sets a high $ w_{1} $ in period 1 to discourage excessive inventory, leading to high retail prices and inefficiencies (e.g., too much inventory and distorted pricing).

With Rebates: The manufacturer offers a rebate $ \delta $ in period 1 , lowering the consumer's out-of-pocket price ( $ P_{1}=p_{1}-\delta $ ). This boosts period 1 sales, making it more profitable for the retailer to sell now rather than hoard inventory for later. As a result:
- The retailer carries less inventory, reducing holding costs.
- The manufacturer can lower $ w_{1} $ since it doesn't need to counter excessive inventory buildup.
- Consumers enjoy lower prices in period 1 due to the rebate, and more efficient pricing overall.
- Why Everyone Wins: The rebate aligns incentives-sales increase, inventory costs drop, and pricing becomes less distorted, boosting profits for the manufacturer and retailer while lowering consumer costs.

# Proposition 2

The use of consumer rebates is preferred to the elimination of inventories (just-in-time, or JIT) by the manufacturer, retailer, and consumers alike.

## Intuition

- JIT (No Inventory): In a JIT system, the retailer cannot carry inventory, so each period operates independently. This leads to double marginalization-the manufacturer sets a high wholesale price, the retailer adds its markup, and consumers face high prices with reduced quantities. Efficiency suffers as there's no mechanism to soften the manufacturer's pricing power.
- Strategic Inventory Without Rebates (AAB): The retailer uses inventory to lower $ w_{2} $, mitigating double marginalization in period 2 . However, this comes at the cost of a high $ w_{1} $ (to deter inventory) and holding costs, which can outweigh the benefits depending on parameters.
- With Rebates: Rebates encourage period 1 sales, reducing excessive inventory while preserving some strategic use of inventory to limit double marginalization in period 2. This strikes a balance:
- Better than JIT because some inventory reduces pricing distortions.
- Better than no rebates because rebates prevent overstocking, lowering costs and stabilizing prices.
- Why Preferred: All parties benefit-manufacturer and retailer profits rise due to efficiency gains, and consumers get lower prices compared to JIT's high markups.

# Proposition 3

With nonlinear wholesale pricing, consumer rebates yield Pareto gains for positive holding costs $ (h>0) $.

## Intuition

Nonlinear Pricing Without Rebates: Nonlinear contracts (e.g., quantity-contingent pricing $ T_{t}\left(Q_{t}\right) $ ) allow the manufacturer to better align incentives than linear pricing, potentially extracting all retailer surplus. However, strategic inventory still creates inefficiencies-the retailer holds inventory to influence future terms, preventing the manufacturer from achieving the fully coordinated (first-best) outcome, as shown in AAB.

With Rebates: Adding rebates reduces the retailer's incentive to hold strategic inventory. The rebate boosts period 1 demand, making immediate sales more attractive than stockpiling. This allows the nonlinear contract to work more effectively:
- Inventory drops to zero (or minimal levels), eliminating holding cost inefficiencies.
- The manufacturer achieves first-best profit (like an integrated supply chain), while consumers benefit from lower prices.
- The retailer is indifferent (profit $ =0 $ ) as the manufacturer extracts all surplus, but this is still a Pareto improvement over the no-rebate case.

Why Pareto Gains: Rebates enhance coordination, benefiting the manufacturer (higher profit), consumers (lower prices), and at least not harming the retailer compared to the baseline.

# Proposition 4

In a three-period game:
- (i) The manufacturer and retailer each benefit from expiring consumer rebates regardless of their duration.
- (ii) The manufacturer prefers a long-duration rebate (valid in periods 1 and 2) if and only if the holding cost $ h $ is sufficiently large.

## Intuition 

Three-Period Dynamics: With three periods, the retailer can carry inventory from period 1 to $ 2\left(I_{1}\right) $ and from 2 to $ 3\left(I_{2}\right) $, amplifying strategic behavior. Without rebates, this leads to more inventory buildup and higher initial wholesale prices, increasing inefficiency.
Expiring Rebates (Short or Long):
- Short-Term Rebate (Period 1 Only): Encourages sales in period 1, reducing inventory carried to both period 2 and 3 .
- Long-Term Rebate (Periods 1 and 2): Boosts sales in the first two periods, mainly curbing inventory from period 2 to 3 .
- Both reduce strategic hoarding, lowering costs and wholesale prices, benefiting the manufacturer and retailer.

Duration Preference:
- Low Holding Costs: The retailer is willing to hold inventory longer (e.g., to period 3). A short-term rebate is more effective because it aggressively curbs inventory buildup across all periods by focusing on period 1 sales.
- High Holding Costs: Inventory is costly, so the retailer avoids long-term hoarding (period 3). The main issue is inventory from period 1 to 2 . A long-term rebate addresses this by incentivizing sales through period 2, aligning with the two-period model's logic.

Why Benefits Persist: Rebates, regardless of duration, mitigate strategic inventory, improving efficiency. The manufacturer's preference hinges on how holding costs shape inventory behavior.




