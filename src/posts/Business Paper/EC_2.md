---
title: Business Paper - Week 2
date: 2025-9-10 
---

# Model

$1$: consumers totalling mass

$E, NE$: Experts, Non-Experts

$\psi\in(0,1)$: the share of Experts

$1 - \psi$: thetshare of Non-Experts

$q\in [0, 1]$ product quality

$0$ prices normalized to 0

$F_E(q)$: Experts choose, a continuous, smooth cumulative distribution

$f_E(q)$ density

$F_{NE}(q), f_{NE}(q)$: Non-Experts

### Assumption 1 (Expertise and Choice)

> $F_E(q)\le F_{NE}(q), \forall q\in [0, 1]$: On average, Experts identify and purchase better products.
> $\dfrac{\partial \left(\frac{f_E(q)}{f_{NE}(q)}\right)}{\partial q} > 0$: MLRP property
> MLRP: Monotone Likelihood Ratio Property, the better will be better.

**Assumption 1** gives us:
- Experts experience higher quality on average
- the higher the product’s quality, the higher the share of its buyers that are Experts.

$r_E := \int_{0}^{1}q\mathrm d F_E(q), \quad r_{NE}:= \int_{0}^{1}q\mathrm d F_{NE}(q)$: Choice Procedure (Also means Expectation)

$r_E > r_{NE}$

- We denote this gap by $ \Delta(r):=r_{E}-r_{N E}>0 $.
-  In our empirical analysis, we find a substantial $ \Delta(r) $ on both IMDb and MovieLens.

### Assumption 2 (Reference-Dependence)

>  For every $ q \in[0,1] $ and consumer type $ i=E, N E $, we have:
>
> #### (1)
>
> $ U_{i}(q)=u(q)+\mu\left(u(q)-u\left(r_{i}\right)\right) $
> - $ u(\cdot) $ satisfying the standard assumptions $ u^{\prime}(\cdot)>0 $ and $ u^{\prime \prime}(\cdot)<0 $
> - $ \mu>0 $.

From [Equation 1](#1):
- standards enter utility negatively
- $\mu$ quantify their impace 

This leads Experts to be less satisfied than Non-Experts

For any level of $q$:

$ \begin{aligned} r_{E}>r_{N E} & \Rightarrow U_{E}(q)-U_{N E}(q) \\ & =\left(u(q)+\mu\left(u(q)-u\left(r_{E}\right)\right)\right)-\left(u(q)+\mu\left(u(q)-u\left(r_{N E}\right)\right)\right) \\ & =\mu \cdot\left(u\left(r_{N E}\right)-u\left(r_{E}\right)\right) \\ & <0 \quad \forall q \geq 0\end{aligned} $

- the inequality follows from $ \mu>0, u^{\prime}(\cdot)>0 $ and $ r_{E}>r_{N E} $

### Assumption 3 ((Subjectively) Honest Ratings)

> For every $ q \in[0,1] $, and $ i=E, N E $, ratings reflect subjective satisfaction:
> $ \mathcal{R}_{i}(q)=U_{i}(q) $

Without loss of generality, given Experts' higher stringency:

we can normalize utilities so that 
- $ \mathcal{R}_{E}(0)=0 $ 
- $ \mathcal{R}_{N E}(1)=1 $. 

This ensures all ratings lie within this interval

---

We first consider the case:

the average ratings displayed by the platform are the average of individual opinions. 

That is, given a share $ \psi $ of Experts, choice densities $ f_{E}(\cdot) $ and $ f_{N E}(\cdot) $, and ratings $ R_{E}(\cdot) $ and $ R_{N E}(\cdot) $, 

we have:

$ \begin{aligned} \mathcal{R}(q) & =\frac{\psi f_{E}(q) \mathcal{R}_{E}(q)+(1-\psi) f_{N E}(q) \mathcal{R}_{N E}(q)}{\psi f_{E}(q)+(1-\psi) f_{N E}(q)} \\ & =\frac{\psi f_{E}(q) U_{E}(q)+(1-\psi) f_{N E}(q) U_{N E}(q)}{\psi f_{E}(q)+(1-\psi) f_{N E}(q)} \\ & =: \omega_{E}(q, \psi) U_{E}(q)+\left(1-\omega_{E}(q, \psi)\right) U_{N E}(q) \\ & =(1+\mu) u(q)-\mu\left(\omega_{E}(q, \psi) r_{E}+\left(1-\omega_{E}(q, \psi)\right) r_{N E}\right)\end{aligned} $

- $ \omega_{E}(q, \psi):=\frac{\psi f_{E}(q)}{\psi f_{E}(q)+(1-\psi) f_{N E}(q)} $
  - represents the share of buyers who are Experts, 
  - as a function of product quality $ q $, their baseline share $ \psi $, and choice densities $ f_{E}(\cdot) $ and $ f_{N E}(\cdot) $.

We will relax assumption and consider slightly more general aggregation rules, such as:

- prioritize more expert consumers
- prioritize products with a larger number of ratings

### Proposition 1

> Quality-based self-selection causes ratings to underestimate quality differences. 
> 
> Moreover, ratings can be non-monotonic in quality. 
> 
> In particular, $ \mathcal{R}^{\prime}(q)>0 $ if and only if the following condition is satisfied:

> #### (2)
>
> $ u^{\prime}(q) \geq \frac{\partial \omega_{E}(q, \psi)}{\partial q} \cdot \Delta(r) \cdot \frac{\mu}{1+\mu} $

First result follows:
- higher quality products are purchased by a higher share of Experts

Thus:

they face a higher “burden of proof”, 
- which implies their relative ratings are penalized compared to those of their lower quality alternatives.

Second result admits a intuition, we list the terms of [Equation 2](#2):

$ \underbrace{u^{\prime}(q)}_{\text {Gains in individual satisfaction }} \geq \underbrace{\frac{\partial \omega_{E}(q, \psi)}{\partial q}}_{\text {Increase in } \% \text { of } \mathrm{E} \text { buyers }} \cdot \underbrace{\Delta(r)}_{\text {Difference in standards }} \cdot \underbrace{\frac{\mu}{1+\mu}}_{\text {Importance of reference-dependence }} $

- the LHS quantifies the gains in ratings from improved quality:
  - each individual consumer is more satisfied, as measured by $ u^{\prime}(q) $. 
- The RHS quantifies its costs, driven by self-selection: 
  - the first term represents choice heterogeneity, 
  - and the second and third rating heterogeneity. 
    - In particular, $ \frac{\partial \omega_{E}(q, \psi)}{\partial q} $ represents negative self-selection, 
      - or the increase in the share of Experts buyers as $ q $ increases; 
    - $ \Delta(r) $ represents the difference in standards between Experts and Non-Experts; 
    - $ \frac{\mu}{1+\mu} $ measures the relative weight of referencedependence in shaping total individual utility.

Note that:
 
when either $ \frac{\partial \omega_{E}(q, \psi)}{\partial q}, \Delta(r) $ or $ \mu $ go to zero,
- ratings are guaranteed to be increasing,
- since $ u^{\prime}(\cdot)>0 $. 

It is straightforward to see why: 
- the first case corresponds to a lack of self-selection, 
- the second to equal standards (and thus ratings) for the two types of consumers,
- and the third to reference-independent 

and, thus, homogenous across consumers - utility.

In Section 4.4,:

we propose a fixed-point algorithm to back out individual stringency for each user, 
- which allows us to correct for it
- and thus obtain new ratings reflecting $ \Delta(r)=0 $, thus eliminating the bias.

## 3.1 Platform Design 

Consider two commonly observed real world practices. 
- First, a vast majority of platforms overweight the opinions of their most expert reviewers. 
- While there are obvious rationales for doing so 
  - for instance, more expert consumers might be less likely to post fake ratings,
  - or more thorough in their quality evaluations 

the following Corollary shows that this can have perverse effect in our context

### Corollary 1 

> When the percentage of Experts, $ \psi $, is low, >
> 
> overweighting their opinions by a factor $ \gamma>1 $ worsens the bias, 
> 
> further contracting ratings and thus making it more likely for the monotonicity between ratings and quality to be broken.

Observation:

the bias gets worse when the crowd of buyers is more heterogeneous: 

- If $ 90 \% $ of buyers were Experts, 
  - then overweighting their opinions bring aggregate ratings closer to essentially only reflecting the (homogeneous) opinions of Experts, 
  - yielding monotonicity: $ \mathcal{R}^{\prime}(q) \approx(1+ $ $ \mu) u^{\prime}(q)>0 $. 
- Conversely, if - say - only $ 10 \% $ were Experts (which we believe to be the far more likely scenario empirically), increasing their share worsens the bias


the number of buyers for a given product is proportional to the share of Experts buyers: 
- while everybody responds to quality, Experts do so more than Non-Experts. 

Therefore, more popular products are effectively facing a higher burden of proof. 

We thus provide an additional rationale for the platform rewarding products receiving more ratings, even in a setting in which a greater number of reviews does not bring more accuracy or credibility per se.

### Corollary 2

> Denote by $ \mathcal{N}(q):=\psi f_{E}(q)+(1-\psi) f_{N E}(q) $ the number of ratings for product $ q $,
> 
> and by $ \beta(\cdot) $ a reward function, with $ \beta(\cdot), \beta^{\prime}(\cdot)>0 $. 
> 
> Then, substituting average ratings $ \mathcal{R}(q) $ with mass inflated ratings $ \beta(\mathcal{N}(q)) \cdot \mathcal{R}(q) $ reduces ratings' contraction and improves monotonicity.


A very stylized relationship between quality and number of ratings:
- higher quality products are on average more popular than their lower quality alternatives.
-  While fairly natural, this relationship need not always hold empirically. 
-  In particular, one can think of products of mediocre quality but huge mass appeal, and viceversa, high quality and niche appeal. 
-  In those situations, the impact of inflating the ratings of popular products would be reversed.

In Section 4.4 : 

we propose a complementary design remedy that:
- is both new (to the best of our knowledge)
- and conceptually orthogonal to those highlighted in Corollaries 1 and 2. 

Unlike in Corollary 1, our algorithm counts all ratings equally, 

and thus does not require us to take a stance on which opinions are credible or not; 

it also requires less knowledge of the proportion of Experts (even more: it does not require us to take a stance on who is an expert in the first place). 

Moreover, unlike in Corollary 2, our algorithm is agnostic as to the predictive power of the number of ratings on ratings' stringency, and correct for the bias in either of the two cases highlighted here.

# 4 Data and Empirical Strategy

We now provide empirical support for the role of consumer expertise on:

both choice and rating behavior as described in Section 3, and study its consequences for movie ratings.

We start by presenting the dataset in Section 4.1. 

Our dataset is obtained by combining data from two online platforms: MovieLens and IMDb. 

In particular,
- we carefully explain how we proxy movies' quality with festival and industry awards,
-  and users' stringency with the number of ratings posted on the platforms. 

Then, in Subsections 4.2 and 4.3, we provide empirical evidence for our two main assumptions. 

In particular, we will center our analysis on the following two empirical counterparts of Assumptions 1 and 2 in Section 3:

### Choice heterogeneity

> Experts watch and rate higher-quality movies than Non-Experts 

### Rating heterogeneity

> For a given movie, Experts post lower rating than Non-Experts 

After providing support for these two facts, 

in Subsection 4.4 we provide a fixed-point algorithm to remove the self-selection of stringent, expert reviewers into high quality movies 

Allow us to compute new, normalized ratings, and provide convincing evidence for the main proposition of the model: 

average ratings understate differences in quality, thus unfaitly penalizing high quality movies compared to their inferior alternatives 

## 4.1 The Database

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
 & \text{Mean} & \text{SD} & \text{N} & \text{Min} & \text{Max} \\
\hline
\text{Year of Production} & 2007 & 6.81 & 9426 & 1995 & 2019 \\
\hline
\text{Movie Runtime} & 104.1 & 28.9 & 9426 & 2 & 629 \\
\hline
\text{Genre: Action (\%)} & 17 & - & 9426 & - & - \\
\hline
\text{Genre: Comedy (\%)} & 26 & - & 9426 & - & - \\
\hline
\text{Genre: Drama (\%)} & 26 & - & 9426 & - & - \\
\hline
\text{Nominated or Awarded (\%)} & 58 & - & 9426 & - & - \\
\hline
\text{Nominated or Awarded (Excluding Academy) (\%)} & 48 & - & 9426 & - & - \\
\hline
\text{IMDb Ratings: } \bar{r}_{i}^{I M D b} & 6.5 & 0.979 & 9426 & 1.4 & 9.5 \\
\hline
\text{IMDb Number of Users: } n_{i}^{I M D b}(\times 1000) & 69 & 148 & 9426 & 0.05 & 2588 \\
\hline
\text{IMDb Top1000 Ratings: } \bar{r}_{i}^{\text{Top } 1000} & 6 & 0.864 & 9426 & 1 & 9 \\
\hline
\text{IMDb Number of Top1000 Users: } n_{i}^{\text{Top1000 }} & 260.3 & 191 & 9426 & 2 & 928 \\
\hline
\text{MovieLens Ratings: } \bar{r}_{i}^{\text{Movielens }} & 3.2 & 0.459 & 9426 & 0.8548 & 4.483 \\
\hline
\text{MovieLens Number of Users: } n_{i}^{\text{Movielens }}(\times 1000) & 1.6 & 4.36 & 9426 & 0.031 & 72.67 \\
\hline
\text{Have Critics Reviews: } \operatorname{Meta}_{i}(\%) & 72 & - & 9426 & - & - \\
\hline
\text{Have Positive Critics Reviews: } M e t a_{i}^{>60} (\%) & 32 & - & 9426 & - & - \\
\hline
\text{Share 18-29 Users: } p_{i}^{18-29} (\%) & 13 & - & 9426 & - & - \\
\hline
\text{Share 30-44 Users: } p_{i}^{30-44} (\%) & 60 & - & 9426 & - & - \\
\hline
\text{Share Over 45 Users: } p_{i}^{45} (\%) & 26 & - & 9426 & - & - \\
\hline
\text{Share Female Users: } p_{i}^{\text{female }} (\%) & 21 & - & 9426 & - & - \\
\hline
\text{Share US Users: } p_{i}^{U S}(\%) & 30 & - & 9426 & - & - \\
\hline
\end{array}
$$

![Figure 1](image.png)

Figure 1: Distribution of the number of ratings posted by Top 1000 users.

## 4.2 Choice Heterogeneity 

Experts differ from Non-Experts since:
- they are more capable of choosing high quality products. 

Thus, we expect Top1000 users to watch and rate more high quality movies. 

The main estimating equation to study this assumption is the following:

### (3)

$ n_{i}^{\text {Top } 1000}=\alpha+\beta_{1} q_{i}+\beta_{2} X_{i}+\epsilon_{i} $,

- $ n_{i}^{\text {Top } 1000} $ is the total number of ratings by Top 1000 users for movie $ i $; 

Figure 1 shows the distribution of $ n_{i}^{\text {Top } 1000} $ for all movies in our sample. 

No movies are rated by all 1000 Top1000 users. 

Accordingly, issues related to censoring bias are not relevant in our analysis. 

- $ q_{i} $ is the unobserved quality of movie $ i ; 
- X_{i} $ is a set of controls related to movie characteristics and its audience; 
- and $ \epsilon_{i} $ is an error term. 

Movie quality is not perfectly observable. 

In our preferred specifications, we proxy quality using three measures that do not depend on platforms' feedback. 

- In particular, we use one dummy variable that equals 1 if a movie has received at least one nomination or award to one of the major festival or industry awards around the world. 

- A second dummy variable that equals 1 if a movie has received at least one nomination or award excluding the Academy awards. 

We exclude the Academy awards since previous research has shown that:
- the relevance of the Oscars is such that it may move users' reference point, and affect selection of users who watch the nominated and awarded movies (Rossi, 2021). 

Finally, we use a third dummy variable that equals 1 if a movie has received a Metacritic Metascore greater than 60 .

Quality and popularity are correlated positively.

## Rating Heterogeneity 

Experts have higher standards than Non-Experts.

## 4.4 Debiasing the Ratings 

Of course, individual stringency and ratings are intertwined: updating one implies updating the other. 

Thus, we iterate this process until it converges. 

More formally, for each MovieLens user $ j $, defined as $ \mathcal{I}_{j} $ the set of movies she has watched. 

Moreover, define by $ n_{j} $ the cardinality of $ \mathcal{I}_{j} $, or user expertise. 

Then, for each movie $ i \in \mathcal{I}_{j} $, compute the movie-user specific stringency as the average movie rating, $ \bar{r}_{i} $, minus the rating posted by the user, $ r_{i j} $. 

Then, we define the user's stringency as the average of movie-user specific stringency over the set $ \mathcal{I}_{j} $ :

### (4)

$ s_{j}:=\frac{\sum_{i \in \mathcal{I}_{j}}\left(\bar{r}_{i}-r_{i j}\right)}{n_{j}} $

Then, we compute new movie ratings 
- which take into account - and correct for - how stringent their watchers are. 

Define by $ \mathcal{J}_{i} $ the set of all users who have watched movie $ i $, 

and by $ n_{i} $ its cardinality. 

Then, we update, or normalize, movie $ i $ 's rating $ \bar{r}_{i} $ to:

### (5)

$ \bar{r}_{i}^{\text {norm }}:=\frac{\sum_{j \in \mathcal{J}_{i}}\left(r_{i j}+s_{j}\right)}{n_{i}}=\bar{r}_{i}+\frac{\sum_{j \in \mathcal{J}_{i}} s_{j}}{n_{i}} $.

Notice:

-  it weights all opinions equally
-   it does not require us to make assumptions about the rating and choice processes for each category of consumers.







placeholder


placeholder


placeholder


placeholder


placeholder


