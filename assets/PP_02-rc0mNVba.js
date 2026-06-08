const e=`# Duality

**The Principle of Duality.** The principle of duality holds for a class of
planes $\\gamma$ if and only if $\\gamma$ has the property that for every
theorem $T$ of $\\gamma$, $T^d$ is also a theorem of $\\gamma$.

**Definition 1.4.1** Let
$\\Sigma = (\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ be a plane. Then the
triple
$$
(\\mathscr{L}, \\mathscr{P}, \\mathscr{J}^{-1})
$$
where
$$
\\mathscr{J}^{-1} = \\{(L, p) : (p, L) \\in \\mathscr{J}\\},
$$
is called the dual plane of $\\Sigma$.

$\\Sigma^d$: dual plane of $\\Sigma$

**Theorem 1.4.2** The principle of duality holds in $\\gamma$ if $\\gamma$
has the property that if $\\Sigma \\in \\gamma$, then $\\Sigma^d \\in \\gamma$.

**Proof.** Suppose that $\\Sigma \\in \\gamma$ implies that
$\\Sigma^d \\in \\gamma$. Let $T$ be an arbitrary theorem of $\\gamma$, and let
$\\Sigma$ be an arbitrary plane in $\\gamma$. Since $T$ holds true for all
members of $\\gamma$, it holds true in particular for $\\Sigma^d$.

Because $T$ holds true for $\\Sigma^d$, it follows that $T^d$ holds true for
$(\\Sigma^d)^d$. But $(\\Sigma^d)^d = \\Sigma$, so $T^d$ holds for $\\Sigma$.
Since $\\Sigma$ was arbitrary, $T^d$ is a theorem of $\\gamma$.

**Theorem 1.4.3** The principle of duality holds for the class of partial
planes.

**Proof.** Let
$\\Sigma = (\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ be a partial plane.
Then
$\\mathscr{L} \\cap \\mathscr{P} = \\varnothing$,
$\\mathscr{L} \\cup \\mathscr{P} \\ne \\varnothing$, and
$\\mathscr{J}^{-1} \\subseteq \\mathscr{L} \\times \\mathscr{P}$.
Furthermore, by Theorem 1.3.3, for every two members
$L, M \\in \\mathscr{L}$, there is at most one point
$p \\in \\mathscr{P}$ such that
$(L, p) \\in \\mathscr{J}^{-1}$ and $(M, p) \\in \\mathscr{J}^{-1}$.
Thus Ax1 holds for $\\Sigma^d$, so $\\Sigma^d$ is a partial plane.

It follows from Theorem 1.4.2 that the principle of duality holds for the
class of partial planes.

**Theorem 1.4.4** The principle of duality does not hold for the class of
primitive planes.

**Proof.** Consider the dual of Ax2:

**Ax2$^d$:** Every point lies on at least two lines.

This statement is not true for every primitive plane. For example, in the
plane of Definition 1.3.9(ii), there are four points and no lines. It is a
primitive plane because Ax1 and Ax2 are vacuously true, but no point lies
on two lines. Therefore, the class of primitive planes does not satisfy the
principle of duality.

**Theorem 1.4.5** The principle of duality holds for the class of
projective planes.

**Proof.** Let
$\\Sigma = (\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ be a projective plane.
We prove that $\\Sigma^d$ is also a projective plane.

In $\\Sigma^d$, Pj1 says that every two lines of $\\Sigma$ pass through
exactly one point. This is exactly Pj2 for $\\Sigma$. Similarly, Pj2 in
$\\Sigma^d$ says that every two points of $\\Sigma$ lie on exactly one line,
which is Pj1 for $\\Sigma$.

It remains to prove Pj3 for $\\Sigma^d$. By Pj3 in $\\Sigma$, there exists a
four-point $a, b, c, d$, so no three of these points are collinear. Let
$ab$, $ac$, $db$, and $dc$ denote the four lines determined by these pairs
of points. No three of these four lines are concurrent: if three of them
passed through one point, that would force three of $a, b, c, d$ to be
collinear. Hence these four lines of $\\Sigma$ form a four-point in
$\\Sigma^d$.

Thus $\\Sigma^d$ is a projective plane. By Theorem 1.4.2, the principle of
duality holds for the class of projective planes.

**Theorem 1.4.6** The principle of duality does not hold for the class of
affine planes.

**Proof.** In every affine plane, there exist two distinct parallel lines.
Indeed, by Af3 choose three noncollinear points $a$, $b$, and $c$. Let
$L$ be the line through $a$ and $b$. Since $c$ is not on $L$, Af2 gives a
unique line $M$ through $c$ parallel to $L$. Since $c \\notin L$, we have
$M \\ne L$.

The dual statement is that there exist two distinct points with no line
passing through both of them. This is false in every affine plane, because
Af1 says that every two points lie on exactly one line.

Therefore, the principle of duality does not hold for the class of affine
planes.
`;export{e as default};
