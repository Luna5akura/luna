---
title: Supply Chain Management - Week 6
category: Notes
date: 2025-9-10 
---

# Inventory Management and Risk Pooling

# Model 

## Notation 

$D$: demand rate per day 
$Q$: order quantities
$K$: fixed setup cost 
$h$: holding cost 
$Leadtime = 0$: time between order place and recept
$Initial-inventory = 0$
Planning horizon is infinite 

## EOQ

$K + \dfrac{hTQ}{2}$: total cost per cycle
- $\dfrac{hQ}{2}$: average inventory holding cost 
- $T=\dfrac{Q}{D}$: cycle time 

$\dfrac{KD}{Q}+\dfrac{hQ}{2}$: average total cost per unit time 

$Q^* = \sqrt{\dfrac{2KD}{h}}$: best Q 

# Continuous Review Policy 

## Notation 

$AVG$: Average daily demand 
$STD$: Stand Deviation of demand 
$L$: Lead time 
$h$: holding cost 
$\alpha $: service level (probability of stocking out is $1-\alpha  $)

## Model 

$L\cdot AVG$: Average demand during lead time 
$Safety stock$: $z\cdot STD\cdot \sqrt{L}$
$R = L\cdot AVG + z\cdot STD \cdot \sqrt{L}$: Reorder level
$Q^* = \sqrt{\dfrac{2K\cdot AVG}{h}}$: best quantity 

# Variable Lead Time 

## Notation 

$AVGL$: Average lead time 

$STDL$: stand Deviation of lead time 

## Model 

$Safety stock = z \sqrt{A V G L \times S T D^{2}+A V G^{2} \times S T D L^{2}}$

$R = =A V G \times A V G L+z \sqrt{A V G L \times S T D^{2}+A V G^{2} \times S T D L^{2}} $

$Q^* = \sqrt{\dfrac{2K\cdot AVG}{h}}$: best quantity 



