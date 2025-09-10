# The Dollar Auction Game: A Game-Theoretic Analysis of Escalation and Commitment

## Abstract

This paper examines the dollar auction game, a paradigmatic example in game theory that demonstrates the phenomenon of escalation of commitment and rational irrationality. In this auction format, the highest bidder wins the prize but the second-highest bidder must also pay their bid without receiving anything in return. We develop a comprehensive theoretical framework to analyze the strategic interactions, equilibrium properties, and behavioral implications of this seemingly simple yet profoundly complex game. Our analysis reveals fundamental insights into competitive dynamics, sunk cost fallacies, and the paradoxical nature of rational decision-making in strategic environments.

**Keywords:** Game theory, Auction theory, Escalation of commitment, Nash equilibrium, Behavioral economics

## 1. Introduction

The dollar auction game, first introduced by economist Martin Shubik in 1971, represents one of the most compelling paradoxes in game theory and behavioral economics. At its core, the game appears deceptively simple: an auctioneer offers to sell a dollar bill to the highest bidder, with the standard auction rule that the winner pays their bid and receives the prize. However, the game introduces a crucial twist—the second-highest bidder must also pay their bid but receives nothing in return.

This seemingly minor modification transforms a straightforward auction into a complex strategic environment that can lead to escalating commitments far exceeding the value of the prize itself. The dollar auction has been used to model various real-world scenarios, from military conflicts and corporate takeovers to political campaigns and research and development competitions.

The significance of the dollar auction extends beyond its theoretical elegance. It serves as a powerful metaphor for situations where rational actors can find themselves trapped in escalating commitments, where the fear of losing their investment drives continued participation despite diminishing returns. This phenomenon, known as escalation of commitment or the "winner's curse," has profound implications for understanding decision-making in competitive environments.

## 2. Literature Review and Theoretical Background

### 2.1 Historical Development

The dollar auction game emerged from Shubik's broader work on game theory and social psychology. The original formulation was designed to demonstrate how rational individuals could be led into seemingly irrational behavior through the structure of incentives. Shubik's insight was that the combination of competitive bidding and the penalty for coming in second could create a "rationality trap" where players continue bidding beyond the point of economic sensibility.

Subsequent research has expanded on Shubik's original framework. O'Neill (1986) provided one of the first rigorous game-theoretic analyses, demonstrating that the game has no pure strategy Nash equilibrium when players have unlimited resources. Leininger (1989) further developed the theoretical foundations, showing that mixed strategy equilibria exist but are highly unstable.

### 2.2 Related Literature

The dollar auction belongs to a broader class of games studied in auction theory and mechanism design. It shares characteristics with war of attrition models (Maynard Smith, 1974), where contestants compete for a prize while incurring costs over time. The key difference lies in the discrete bidding structure and the specific penalty mechanism for the second-place finisher.

The game also relates to the extensive literature on escalation of commitment in organizational behavior (Staw, 1976; Brockner, 1992). This research stream examines why decision-makers continue investing in failing projects, often attributing the behavior to psychological biases such as loss aversion and the sunk cost fallacy.

### 2.3 Empirical Evidence

Experimental studies of the dollar auction have consistently demonstrated the theoretical predictions of escalation. Teger (1980) conducted early laboratory experiments showing that participants regularly bid beyond the value of the prize. More recent studies (Ku, Malhotra, and Murnighan, 2005) have examined the psychological mechanisms underlying escalation, finding that competitive arousal and self-justification play crucial roles.

## 3. Model Setup and Formal Framework

### 3.1 Basic Game Structure

We formally define the dollar auction game as follows:

**Players:** $N = {1, 2, ..., n} $ where  $n ≥ 2 $

**Prize Value:** $ V > 0  $(typically normalized to  $V = 1 $)

**Bidding Process:** Sequential bidding with minimum increment  $δ > 0 $

**Payoff Structure:**
- Highest bidder:  $V - b_i $ (where  $b_i $ is their winning bid)
- Second-highest bidder:  $-b_j $ (where  $b_j $ is their losing bid)
- All other players: $ 0 $

### 3.2 Strategic Form Representation

Let  $B_i $ represent the set of possible bids for player $ i $, where $B_i = {0, δ, 2δ, 3δ, ...}$. The strategy space for each player is the set of decision rules that map the current state of the auction to a bidding decision.

For simplicity, we initially consider a two-player version of the game with discrete bidding increments. Let$ b_1 $and$ b_2$ represent the final bids of players 1 and 2, respectively.

**Payoff Functions:**

For player 1:
$$
π_1(b_1, b_2) = \\
\begin {array}{ll}
V - b_1    & if b_1 > b_2\\
-b_1       & if b_1 < b_2\\
V/2 - b_1   &if b_1 = b_2 \\
\end{array} \\ 
\text{
(assuming equal probability of winning ties)}
$$

For player 2:
$$
π_2(b_1, b_2) = \\
\begin {array}{ll}
-b_2       & if b_1 > b_2\\
π_2(b_1, b_2) = V - b_2     & if b_1 < b_2\\
π_2(b_1, b_2) = V/2 - b_2   &if b_1 = b_2 \\
\end{array} \\ 
\text{
(assuming equal probability of winning ties)}
$$  


### 3.3 Dynamic Formulation

To capture the sequential nature of bidding, we model the game as an extensive form game with perfect information. The game proceeds in rounds, with players alternating bids until no player is willing to raise the current high bid.

Let$ h_t$ represent the history of bids up to round$ t$, and let $σ_i$ be player $i$'s strategy, which maps histories to actions (bid or pass). The game terminates when no player raises the current high bid in a given round.

## 4. Game-Theoretic Analysis

### 4.1 Pure Strategy Equilibria

A fundamental result of the dollar auction is that no pure strategy Nash equilibrium exists when players have unlimited resources. This can be demonstrated through contradiction:

**Proposition 1:** In the dollar auction game with unlimited resources and continuous bidding, no pure strategy Nash equilibrium exists.

**Proof Sketch:** Suppose there exists a pure strategy equilibrium where the highest bid is $b*$. If$ b* < V$, then the second-highest bidder has an incentive to bid $b* + ε$ for arbitrarily small$ ε > 0$, winning the auction and obtaining payoff $V - (b* + ε) > 0.$ If$ b* ≥ V,$ then the highest bidder receives negative payoff and would prefer not to bid, contradicting the equilibrium assumption.

This impossibility result highlights the inherent instability of the dollar auction and explains the observed escalation in experimental settings.

### 4.2 Mixed Strategy Analysis

Given the absence of pure strategy equilibria, we examine mixed strategy Nash equilibria. The analysis becomes complex due to the discrete nature of bidding and the asymmetric payoff structure.

**Proposition 2:** Mixed strategy equilibria exist but are characterized by high variance and potential for significant losses.

In the mixed strategy equilibrium, players randomize over their bidding strategies, leading to uncertain outcomes and expected payoffs that can be negative for both players. The equilibrium mixing probabilities depend critically on the players' risk preferences and resource constraints.

### 4.3 Resource-Constrained Analysis

When players face budget constraints, the game structure changes significantly. Let$ W_i $represent player$ i$'s wealth constraint, where $W_i ≥ 0.$

With binding wealth constraints, pure strategy equilibria can exist. Specifically, if one player has significantly more resources than others, they may be able to credibly commit to bidding beyond the prize value, deterring entry from resource-constrained opponents.

**Proposition 3:** If $W_1 > W_2 + V,$ then player 1 can guarantee victory by bidding$ W_2 + δ, $regardless of player 2's strategy.

This result demonstrates how asymmetric resources can resolve the escalation problem, but at the cost of potential inefficiency.

## 5. Behavioral and Psychological Considerations

### 5.1 Escalation of Commitment

The dollar auction serves as a laboratory for studying escalation of commitment, where decision-makers increase investment in a course of action based on previously invested resources (sunk costs) rather than future value.

The psychological mechanisms driving escalation include:

1. **Sunk Cost Fallacy:** Players continue bidding to justify previous investments
2. **Competitive Arousal:** The competitive nature of the auction increases risk-taking
3. **Loss Aversion:** The fear of losing invested amounts motivates continued bidding
4. **Self-Justification:** Players rationalize continued participation to maintain self-image

### 5.2 Cognitive Biases and Heuristics

Experimental evidence suggests that players in dollar auctions exhibit systematic deviations from rational choice predictions. Common biases include:

**Anchoring:** Initial bids serve as reference points that influence subsequent decisions
**Availability Heuristic:** Players overweight recent or memorable outcomes
**Overconfidence:** Systematic overestimation of the probability of winning

### 5.3 Learning and Adaptation

Repeated play of the dollar auction provides insights into learning dynamics. Studies show that while some players learn to avoid the escalation trap, others continue to exhibit commitment escalation across multiple rounds.

The learning process is complicated by the game's inherent uncertainty and the tension between individual rationality and collective irrationality.

## 6. Applications and Extensions

### 6.1 Military Conflicts and Arms Races

The dollar auction has been used to model military conflicts where opposing sides continue to invest resources in a winner-takes-all competition. Historical examples include:

- **World War I:** The prolonged trench warfare represented escalating commitments by both sides
- **Arms Races:** Cold War military spending exhibited similar escalation dynamics
- **Regional Conflicts:** Many territorial disputes show characteristics of dollar auction dynamics

### 6.2 Corporate Takeovers and Bidding Wars

In corporate finance, hostile takeover battles often resemble dollar auctions. Multiple bidders compete for a target company, with the losing bidders incurring significant costs (legal fees, due diligence, opportunity costs) without receiving any benefit.

Notable examples include:
- The RJR Nabisco takeover battle (1988)
- The Time-Warner-Paramount conflict (1989)
- Various telecom spectrum auctions

### 6.3 Research and Development Competitions

Patent races in pharmaceutical development exhibit dollar auction characteristics. Multiple firms invest heavily in research, but only the first to market typically captures the lion's share of profits.

### 6.4 Political Campaigns

Electoral campaigns, particularly primary contests, can take on dollar auction characteristics where candidates continue spending despite diminishing returns, driven by sunk costs and competitive pressures.

## 7. Extensions and Variations

### 7.1 Multi-Player Variations

Extending the dollar auction to multiple players $(n > 2)$ introduces additional complexity. With more players, the probability of winning decreases for each individual, but the competitive dynamics may intensify.

**Proposition 4:** In the n-player dollar auction, the expected total expenditure increases with the number of players, ceteris paribus.

### 7.2 Incomplete Information

When players have private information about their valuations or resources, the game becomes a Bayesian game. This extension is particularly relevant for modeling real-world scenarios where participants have different assessments of the prize value.

### 7.3 All-Pay Auctions

The dollar auction is closely related to all-pay auctions, where all bidders pay their bids regardless of whether they win. The key difference is that in dollar auctions, only the top two bidders pay, creating a discontinuous payoff structure.

### 7.4 Temporal Discounting

Incorporating time preferences and discounting rates can significantly alter the game dynamics. If players discount future payoffs, the incentive to escalate may be reduced, potentially leading to earlier termination.

### 7.5 Reputation and Repeated Games

In repeated dollar auction settings, reputation effects become important. Players may develop reputations for commitment or restraint, which can influence opponents' strategies in future rounds.


## 8. Conclusion

The dollar auction game represents a fundamental paradox in game theory, demonstrating how rational individuals can be led into collectively irrational outcomes through the structure of strategic incentives. Our analysis has revealed several key insights:

1. **Equilibrium Properties:** The absence of pure strategy Nash equilibria highlights the inherent instability of the game and explains observed escalation behavior.

2. **Behavioral Mechanisms:** Psychological factors such as sunk cost fallacy, competitive arousal, and loss aversion provide complementary explanations for escalation beyond pure game-theoretic predictions.

3. **Real-World Applications:** The dollar auction framework successfully models various competitive situations, from military conflicts to corporate takeovers, providing valuable insights for understanding escalation dynamics.

4. **Policy Implications:** The pathological properties of dollar auctions inform mechanism design and regulatory policy, highlighting the importance of avoiding structures that penalize unsuccessful participants.

5. **Methodological Contributions:** The game serves as an important testing ground for game-theoretic concepts, behavioral economics theories, and computational approaches.

The dollar auction's enduring relevance lies not only in its theoretical elegance but also in its practical applications. As we face increasingly complex competitive environments in business, politics, and international relations, understanding the mechanisms that drive escalation becomes ever more critical.

Future research should continue to explore the intersection of rational choice theory and behavioral psychology, developing more nuanced models that can better predict and prevent destructive escalation. The dollar auction will undoubtedly continue to serve as a valuable laboratory for these investigations, helping us understand the delicate balance between competition and cooperation in strategic interactions.

The game ultimately teaches us that in competitive environments, the structure of incentives matters as much as the rational calculation of outcomes. By recognizing when we find ourselves in dollar auction-like situations, we can perhaps avoid the trap of escalating commitment and make more informed strategic decisions.

---

## References

Brockner, J. (1992). The escalation of commitment to a failing course of action: Toward theoretical progress. *Academy of Management Review*, 17(1), 39-61.

Ku, G., Malhotra, D., & Murnighan, J. K. (2005). Towards a competitive arousal model of decision-making: A study of auction fever in live and Internet auctions. *Organizational Behavior and Human Decision Processes*, 96(2), 89-103.

Leininger, W. (1989). Escalation and cooperation in conflict situations: The dollar auction revisited. *Journal of Conflict Resolution*, 33(2), 231-254.

Maynard Smith, J. (1974). The theory of games and the evolution of animal conflicts. *Journal of Theoretical Biology*, 47(1), 209-221.

O'Neill, B. (1986). International escalation and the dollar auction. *Journal of Conflict Resolution*, 30(1), 33-50.

Shubik, M. (1971). The dollar auction game: A paradox in noncooperative behavior and escalation. *Journal of Conflict Resolution*, 15(1), 109-111.

Staw, B. M. (1976). Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action. *Organizational Behavior and Human Performance*, 16(1), 27-44.

Teger, A. I. (1980). *Too much invested to quit*. New York: Pergamon Press.