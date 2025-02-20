# The Bright Side of Supplier Encroachment

# Note 

## Methodology

Backward induction:

- set some variables as given
- solve the optimize problem 
- replace the value back to eliminate the variables

## Intuitions

Why Everyone benefits from encroachment?

- $\Pi_{M}^{E} - \Pi_{M}^{N} = \underbrace{\frac{3(a-2c)^2}{24b}}_{\text{Increase in wholesale profit}} + \underbrace{\frac{2c^2}{24b}}_{\text{Supplement from retail profit}} > 0 $
- $CS^{E} - CS^{N} = \underbrace{\frac{(9a-2c)(3a-2c)}{288b}}_{\text{Price reduction and increased choice}} > 0$
- $c \in \left(\underbrace{\frac{3a}{4\sqrt{2}}}_{\text{Lower bound: avoid excessive squeezing of the retailer}}, \underbrace{\frac{3a}{5}}_{\text{Upper bound: ensure manufacturer's retail competitiveness}}\right)$



# 2 The basic model 

In vertical supply chain
- manufacturer(supplier) sell wholesale product to retailer 
- retailer sell product to final consumer 
- manufacturer may sell product directly to consumers

Some additional retail competition are examined in 3.4

Consumer demand:

- $P = a-bQ$
  - $a, b > 0$
  - $P$: price
  - $Q$: quantity

manufacturer produce good at constant unit (marginal) cost: $0$

retailer selling cost: $0$

- manufacturer's unit cost of selling to consumer: $c\in [0,a)$

- manufacturer unit price: $w$

- Linear pricing arrangement

---

Timing:

1. the manufacturer establishes its wholesale price ($w$). 
2. the retailer chooses its profit-maximizing retail output $ q_{R} $. 
3. the manufacturer determines the number of units $ \left(q_{M}\right) $ of the homogeneous product it will sell directly to consumers 

Backward induction is employed to identify the equilibrium of the game 

Key properties are presented in 3

# 3 Findings

## 3.1 The No-Encroachment Setting 

Benchmark:
- the manufacturer can only reach consumers through its retailer. 

the retailer chooses its output $ q_{R} $ to maximize its monopoly profit from retail sales, 
- taking the unit wholesale price $ w $ as given. 

---

The retailer's problem is:

#### (1)

$ \underset{q_{R}}{\operatorname{Maximize}}\left[a-b q_{R}\right] q_{R}-w q_{R} $

We get:

the retailer's output in the no-encroach-ment setting given unit wholesale price:

#### (2)

$ q_{R}^{N}(w)=\frac{a-w}{2 b} $

Anticipating the retailer's response , the manufacturer chooses $ w $, solving:

#### (3)

$ \underset{w}{\operatorname{Maximize}} w q_{R}^{N}(w) \Leftrightarrow \underset{w}{\operatorname{Maximize}} \frac{w[a-w]}{2 b} $

Then the equilibrium:

#### (4)

$ w^{N}=\frac{a}{2} \quad $ and $ \quad q_{R}^{N}=\frac{a}{4 b} $

We get profit:

#### (5)

$ \Pi_{R}^{N}=\frac{a^{2}}{16 b} \quad $ and $ \quad \Pi_{M}^{N}=\frac{a^{2}}{8 b} $

Consumer surplus:

#### (6)

$ C S^{N}=\int_{0}^{q_{R}^{N}} b\left[q_{R}^{N}-q\right] d q=\frac{b}{2}\left[q_{R}^{N}\right]^{2}=\frac{a^{2}}{32 b} $

## 3.2 The Encroachment Setting 

In this setting:

- manufacturer can sell the product directly to consumers 
  - after setting the wholesale price
  - and supplying the wholesale product to the (incumbent) retailer.

---

Given wholesale price $ w $ and retailer supply $ q_{R} $, the manufacturer chooses $ q_{M} $ to:

#### (7)

$ \underset{q_{M}}{\operatorname{Maximize}}\left[a-b q_{R}-b q_{M}\right] q_{M}-c q_{M}+w q_{R} $

We get:

#### (8)

$ q_{M}^{E}\left(q_{R}\right)=\frac{a-c-b q_{R}}{2 b} $

Given $w$, retailer choose $q_R$:

#### (9)

$ \underset{q_{R}}{\operatorname{Maximize}}\left[a-b q_{R}-b q_{M}^{E}\left(q_{R}\right)\right] q_{R}-w q_{R} $

We get:

#### (10)

$ q_{R}^{E}(w)=\frac{a+c-2 w}{2 b} $

Substitute [(8)](#8) and [(8)](#10) into [(7)](#7) :

#### (11)

$ w^{E}=\frac{a}{2}-\frac{c}{6}, \quad q_{R}^{E}=\frac{2 c}{3 b}, \quad $ and $ \quad q_{M}^{E}=\frac{3 a-5 c}{6 b} $

Then we get:

#### (12)

$ \begin{array}{c}\Pi_{R}^{E}=\frac{2 c^{2}}{9 b}, \quad \Pi_{M}^{E}=\frac{3 a^{2}-6 a c+7 c^{2}}{12 b}, \quad \text { and } \\ C S^{E}=\frac{b}{2}\left[q_{R}^{N}+q_{M}^{N}\right]^{2}=\frac{[3 a-c]^{2}}{72 b} .\end{array} $

## 3.3 No Encroachment vs Encroachment 

Proposition 1 confirm that:
- Encroachment benefits manufacturer and consumer 
- manufacturer will encroach $ \left(q_{M}^{E}>0\right) $ if and only if its retail cost disadvantage is not too pronounced.

### Proposition 1 

> The manufacturer encroaches if and only if $ c<3 a / 5 $. 
> 
> The manufacturer and consumers both benefit from encroachment in this case: 
> 
> $ \Pi_{M}^{E}-\Pi_{M}^{N}= $ $ \left(3[a-2 c]^{2}+2 c^{2}\right) /[24 b]>0 $ 
> and $ C S^{E}-C S^{N}=[9 a-2 c] \times $ $ [3 a-2 c] /[288 b]>0 $.

Key point: encroachment by the manufacturer can alter its preferred wholesale price

Fact: The manufacturer sets a lower wholesale price in the encroachment setting

the retailer may benefit from manufacturer encroachment

### Proposition 2

> Encroachment that increases retailer profit arises if and only if $ c \in(3 a /[4 \sqrt{2}], 3 a / 5) $

We get: systematic reduction in the wholesale price secure Pareto gains

- manufacturer reduces the price of the wholesale product in order to increase the retailer's demand for the input and thereby expand the use of the efﬁcient sales channel
- the substantial wholesale price reduction outweighs the direct reduction in demand due to the manufacturer's retail sales, and the retailer beneﬁts from encroachment

---

If the wholesale price is a result of bargaining between the parties

Suppose:

Wholesale price is determined by generalized Nash bargaining,
- the weights $ \beta \in(0,1] $ and $ 1-\beta $ reflect the bargaining strengths of the manufacturer and the retailer, respectively. 

Encroachment that produces Pareto gains will arise in this setting
- if and only if $ c \in(3 a /[4 \sqrt{2}], 3 a /[7-2 \beta]) $. The interval is nonempty whenever the manufacturer's bargaining strength is sufficiently pronounced 
  - (i.e., $ \beta> $ $ [7-4 \sqrt{2}] / 2 \approx 0.67) $. 

Intuitively, substantial manufacturer bargaining strength produces relatively high wholesale prices in the absence of encroachment, which permits the wholesale price reductions that generate Pareto gains under encroachment.

---

Increase in industry profit:

$ \Pi_{R}^{E}+\Pi_{M}^{E}-\left[\Pi_{R}^{N}+\Pi_{M}^{N}\right]=\frac{9 a^{2}-72 a c+116 c^{2}}{144 b} $

We get Proposition 3:

### Proposition 3

> Encroachment that increases industry profit arises if and only if $ c \in[0,3 a /[2[6+\sqrt{7}]]) $ or $ c \in $ $ (3 a / 2[6-\sqrt{7}], 3 a / 5) $.

Increase profit when:

- retailer's downstream cost advantage is sufﬁciently pronounced
- or sufficiently limited 

Industry profit can increase by as much as $ 28 \% $ when the retailer's downstream cost advantage is pronounced $ (c>0.45 a) $
- primary effect of encroachment is to reduce the wholesale price and thereby limit losses from double marginalization. 

Industry profit can increase by as much as $ 33 \% $ when the retailer's cost advantage is limited $ (c<0.17 a) $,
- encroachment enables the manufacturer to profit from serving retail customers directly and thereby limit losses from double marginalization by using a direct channel.

---

Consider **simultaneous encroachment setting**:

#### (14)

$ w^{E}=\frac{a}{2}-\frac{c}{10}, \quad q_{R}^{E}=\frac{2 c}{5 b}, \quad $ and $ \quad q_{M}^{E}=\frac{5 a-7 c}{10 b} $

And:

#### (15)

$ \begin{aligned} \Pi_{R}^{E}=\frac{4 c^{2}}{25 b}, \quad \Pi_{M}^{E} & =\frac{5 a^{2}-10 a c+9 c^{2}}{20 b}, \quad \text { and } \\ C S^{E} & =\frac{[5 a-3 c]^{2}}{200 b} .\end{aligned} $

We get:

### Proposition 4

> The retailer, the manufacturer, and consumers all are better off under sequential encroachment than under simultaneous encroachment

## 3.4 The Effect of Additional Retail Competition 

Suppose:

- retailer (denoted $ R $ ) now faces competition from $ n \geq 0 $ incumbent rivals 
  - (where rival $ i $ is denoted $ R_{i}^{\prime} $ ). 
- For simplicity, each rival is presumed to be a vertically integrated producer of a substitute good who operates with unit cost $c$. 
- The inverse demand function is: $ P=a-b\left[q_{R}+\sum_{i} q_{R_{i}^{\prime}}+q_{M}\right] $, 
  - $ q_{R}, q_{R_{i}^{\prime}} $, and $ q_{M} $ denote the retail output of retailer $ R $, established rival $ R_{i}^{\prime} $, and the manufacturer, respectively.

Using the method in [3.1](#31-the-no-encroachment-setting), when no encroachment:

#### (16)

$ \begin{array}{c}w^{N}(n)=\frac{a+n c}{2[1+n]}, \quad q_{R}^{N}(n)=\frac{a+n c}{2 b[2+n]}, \quad \text { and } \\ q_{R_{i}^{\prime}}^{N}(n)=\frac{a[3+2 n]-c[4+3 n]}{2 b\left[2+3 n+n^{2}\right]} .\end{array} $

Using the method in [3.2](#32-the-encroachment-setting), When encroachment:

#### (17)

$ \begin{array}{c}w^{E}(n)=\frac{a[3+n]+c\left[-1+5 n+2 n^{2}\right]}{2\left[3+6 n+2 n^{2}\right]}, \\ q_{R}^{E}(n)=\frac{n a+c\left[2+3 n+2 n^{2}\right]}{b\left[3+6 n+2 n^{2}\right]}, \\ q_{R_{i}^{\prime}}^{E}(n)=\frac{a[3+2 n]-c[5+4 n]}{b\left[3+6 n+2 n^{2}\right]}, \quad \text { and } \\ q_{M}^{E}(n)=\frac{a[3+2 n]-c[5+4 n]}{2 b\left[3+6 n+2 n^{2}\right]} .\end{array} $

When encroachment arise:
- the manufacturer and consumers gain for all $n$

Profit:

#### (18)

$ \begin{array}{c}\Pi_{R}^{N}(n)=\frac{[a+n c]^{2}}{4 b[2+n]^{2}} \text { and } \\ \Pi_{R}^{E}(n)=\frac{\left[n a+c\left(2+3 n+2 n^{2}\right)\right]^{2}}{2 b\left[3+6 n+2 n^{2}\right]^{2}}\end{array} $

### Proposition 5

> For all $n\ge 0$
>
> (i) Encroachment arises if and only if $ c<[3+2 n] $ a/ [ $ 5+4 n] $, in which case both the manufacturer and consumers benefit from encroachment; and
> 
> (ii) Encroachment that increases retailer profit arises if and only if
>
> $ \begin{array}{c}c \in\left(f(n) a, \frac{[3+2 n] a}{[5+4 n]}\right), \text { where } \\ f(n)=\frac{9+36 n+40 n^{2}+16 n^{3}+2 n^{4}}{7 n+4 n^{2}-4 n^{3}-2 n^{4}+\sqrt{2}[2+n]^{2}\left[3+9 n+8 n^{2}+2 n^{3}\right]} .\end{array} $
>

#### Corollary

> The range of $ c $ values for which the retailer benefits from encroachment increases as $ n $ increases, i.e., $ [3+2 n] a /[5+4 n]-f(n) a $ is increasing in $ n $

- As $n$ increases, retailer R is weakened by the larger number of retail rivals it faces.

retailer R's demand becomes more sensitive to the established wholesale price as $ n $ increases.
- (Retailer R's demand decreases as $ w $ increases at the rate $ 2[1+n] /[2+n] $, which is an increasing function of n.) 

In response to this increased sensitivity, the manufacturer lowers the input price.

This benefit of encroachment accrues exclusively to retailer $ R $. 

In contrast, the burden of the revenue reduction caused by encroachment is shared by all incumbent retailers.

Consequently, the range of $ c / a $ realizations in which retailer $ R $ gains from encroachment increases as the number of incumbent retailers ( $ n $ ) increases. 

Importantly, the range in which encroachment secures retailer gains in the absence of incumbent retail competition (i.e., when $ n=0 $, as specified in Proposition 2 and as illustrated by the region between the vertical intercepts of the two curves in Figure 1): is smaller than the corresponding range in the presence of incumbent retail competition.

# 4 Extensions

## 4.1 Imperfect Substitutes

- $n=0$

- not perfect substitute 

---

Let the (inverse) demand curve for the retail product of firm $ i $ be $ P_{i}=a-q_{i}-k q_{j} $,
- $ P_{i} $ is the price of firm $ i^{\prime} $ s product, 
- $ q_{i} $ and $ q_{j} $ are the retail outputs of firms $ i $ and $ j $, respectively (for $ i, j=R, M $ ). 
- The parameter $ k \in(0,1) $ represents the degree of product substitution. 

The demands for the two retail products become independent as $ k $ approaches 0 . 

The retail products become perfect substitutes (as in [3](#3)) as $ k $ approaches 1 .

We get:

#### (19)

$ \begin{array}{c}w^{E}(k)=\frac{a}{2}-\frac{k^{2}[a(1-k)+c k]}{2\left[8-5 k^{2}\right]} \\ q_{R}^{E}(k)=\frac{2[a(1-k)+c k]}{8-5 k^{2}}, \\ q_{M}^{E}(k)=\frac{[a-c]\left[8-3 k^{2}\right]-2 a k}{2\left[8-5 k^{2}\right]}\end{array} $

We can see: when the manufacturer encroaches, consumers and the manufacturer both beneﬁt for all values of $k$

Profit:

#### (20)

$ \begin{aligned} \Pi_{R}^{E}(k) & =\left[a-q_{R}^{E}(k)-k q_{M}^{E}(k)\right] q_{R}^{E}(k)-w q_{R}^{E}(k) \\ & =\frac{\left[4-2 k^{2}\right][a(1-k)+c k]^{2}}{\left[8-5 k^{2}\right]^{2}} .\end{aligned} $

Compare [(20)](#20) and [(5)](#5) we get:

### Proposition 6

> With imperfect substitutes:
>
> (i) Encroachment arises if and only if $ c< $ ([8-2k$ \left.\left.3 k^{2}\right] a\right) /\left[8-3 k^{2}\right] $, in which case both the manufacturer and consumers benefit from encroachment; and
> 
> (ii) Encroachment that increases retailer profit arises if and only if:
>
> $ \begin{array}{c}c \in\left(g_{1}(k) a, \frac{\left[8-2 k-3 k^{2}\right] a}{\left[8-3 k^{2}\right]}\right), \text { where } \\ g_{1}(k)=\frac{128-112 k-64 k^{2}+57 k^{3}}{4\left[\left(8-5 k^{2}\right) \sqrt{4-2 k^{2}}+8\left(2-2 k-k^{2}+k^{3}\right)\right]}\end{array} $
>
> 

- manufacturer always encroaches
- does not affect retailer's profit 

Retailer

- benefits from more homogeneity ($k$ increase) for lower wholesale price
- harmed by more intense competition 

## 4.2 Price Competition 

Suppose set price rather than quantities:

#### (21)

$ \begin{array}{c}\widetilde{w}^{E}(k)=\frac{a}{2}-\frac{k^{2}[a(1-k)+c k]}{2\left[8-5 k^{2}+k^{4}\right]}, \\ \tilde{q}_{R}^{E}(k)=\frac{\left[2-k^{2}\right][a(1-k)+c k]}{\left[1-k^{2}\right]\left[8-5 k^{2}+k^{4}\right]}, \quad \text { and } \\ \tilde{q}_{M}^{E}(k)=\frac{[a-c]\left[8-7 k^{2}+k^{4}\right]-a k\left[6-5 k^{2}+k^{4}\right]}{2\left[1-k^{2}\right]\left[8-5 k^{2}+k^{4}\right]}\end{array} $

The retailer's profit:

#### (22)

$ \begin{aligned} \widetilde{\Pi}_{R}^{E}(k) & =\left[a-\tilde{q}_{R}^{E}(k)-k \tilde{q}_{M}^{E}(k)\right] \tilde{q}_{R}^{E}(k)-w \tilde{q}_{R}^{E}(k) \\ & =\frac{\left[4-2 k^{2}\right][a(1-k)+c k]^{2}}{\left[1-k^{2}\right]\left[8-5 k^{2}+k^{4}\right]^{2}} .\end{aligned} $

We get:

### Proposition 7

> Under retail price competition:
>
> $ \begin{aligned} \widetilde{\Pi}_{R}^{E}(k) & =\left[a-\tilde{q}_{R}^{E}(k)-k \tilde{q}_{M}^{E}(k)\right] \tilde{q}_{R}^{E}(k)-w \tilde{q}_{R}^{E}(k) \\ & =\frac{\left[4-2 k^{2}\right][a(1-k)+c k]^{2}}{\left[1-k^{2}\right]\left[8-5 k^{2}+k^{4}\right]^{2}} .\end{aligned} $
> 