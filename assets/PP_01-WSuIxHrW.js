const n=`# Terminology and Notation

$p, q, r, s,a, b, c, d$: Points
$L, M, N$: Lines
$\\mathscr{P}$: Sets of points
$\\mathscr{L}$: Sets of lines
$\\mathscr{J}$: Incidence relation on points and lines
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$: Plane

---

$p$ is "on" $L$, $L$ passes through $p$: $(p, L)\\in \\mathscr{J}$

Points collinear: two or more points lie on the same line

Lines concurrent: two ore more lines pass through the sam# point

four-point: $p, q, r, s$ where no three are collinear, an ordered set of four points

iff: if and only if

## 1.3 Planes

**Definition 1.3.1** A plane (incidence plane) is a triple
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ such that
$\\mathscr{P}$, $\\mathscr{L}$, and $\\mathscr{J}$ are sets,
$\\mathscr{P} \\cap \\mathscr{L} = \\varnothing$,
$\\mathscr{P} \\cup \\mathscr{L} \\ne \\varnothing$, and
$\\mathscr{J} \\subseteq \\mathscr{P} \\times \\mathscr{L}$.

$\\Sigma$: Planes 

**Definition 1.3.2** A partial plane is a plane
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ satisfying

**Ax1:** At most one line passes through two points.

**Theorem 1.3.3** If $L$ and $M$ are distinct lines in a partial plane
$\\Sigma$, then there is at most one point incident with both lines.

**Proof.** Suppose that there exist two distinct points $p$ and $q$ on both
of the lines. Then
$(p, L), (p, M), (q, L), (q, M) \\in \\mathscr{J}$, and $L \\ne M$.
This contradicts Ax1.

**Definition 1.3.4** A primitive plane is a partial plane
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ satisfying

**Ax2:** Every line passes through at least two points.

**Definition 1.3.5** An affine plane is a plane
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ such that

**Af1:** Every two points lie on exactly one line.

**Af2:** If $p$ and $L$ are a given point and line such that $p$ is not on
$L$, then there exists exactly one line $M$ that passes through $p$ and is
parallel to $L$. ($M$ does not intersect $L$.)

**Af3:** There exist three noncollinear points.

$\\alpha$: affine plane

**Theorem 1.3.6** An affine plane is a primitive plane.

**Proof.** Let $\\alpha = (\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ be an
affine plane. By Af1, every two points lie on exactly one line. Hence every
two points lie on at most one line, so $\\alpha$ satisfies Ax1 and is a
partial plane.

It remains to prove Ax2. Let $L$ be a line. By Af3, there exist three
noncollinear points $a$, $b$, and $c$.

If at least two of $a$, $b$, and $c$ lie on $L$, then $L$ passes through at
least two points.

Otherwise, at most one of $a$, $b$, and $c$ lies on $L$. Choose a point
$a \\notin L$. By Af2, there is a unique line through $a$ parallel to $L$.
Among the two distinct lines $ab$ and $ac$, at most one can be parallel to
$L$, so one of them intersects $L$. Thus $L$ contains at least one point;
call it $d$.

If $d$ is already different from the possible point among $a$, $b$, and $c$
that lies on $L$, then $L$ has at least two points. If not, relabel the
points so that $c=d$ and $a,b \\notin L$. If $ab$ intersects $L$, its
intersection point is not $c$, since $a$, $b$, and $c$ are noncollinear.
So suppose $ab$ is parallel to $L$.

By Af2, there is a unique line $N$ through $b$ parallel to $ac$. The line
$N$ is distinct from $ab$, because $ab$ intersects $ac$ at $a$. Since $ab$
is the unique line through $b$ parallel to $L$, the line $N$ is not parallel
to $L$, and therefore intersects $L$. Also, $N$ does not pass through $c$,
because $N$ is parallel to $ac$. Hence this intersection is a second point
on $L$.

Therefore every line passes through at least two points, so $\\alpha$
satisfies Ax2. Thus $\\alpha$ is a primitive plane.

**Definition 1.3.7** A projective plane is a plane
$(\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ such that

**Pj1:** Every two points lie on exactly one line.

**Pj2:** Every two lines pass through exactly one point.

**Pj3:** There exists a four-point.

**Theorem 1.3.8** A projective plane is a primitive plane.

**Proof.** Let $\\Pi = (\\mathscr{P}, \\mathscr{L}, \\mathscr{J})$ be a
projective plane. By Pj1, every two points lie on exactly one line. Hence
every two points lie on at most one line, so $\\Pi$ satisfies Ax1 and is a
partial plane.

It remains to prove Ax2. Let $L$ be a line. By Pj3, there exists a
four-point $a$, $b$, $c$, $d$, so no three of these points are collinear.

If at least two of $a$, $b$, $c$, and $d$ lie on $L$, then $L$ passes
through at least two points.

Otherwise, at most one of them lies on $L$, so choose three of them,
say $a$, $b$, and $c$, that do not lie on $L$. By Pj1, there are distinct
lines $ab$ and $ac$. By Pj2, $L$ intersects $ab$ in exactly one point $x$
and intersects $ac$ in exactly one point $y$.

Since $a \\notin L$, neither $x$ nor $y$ is equal to $a$. Also, $x \\ne y$;
otherwise $x$ would lie on both $ab$ and $ac$, forcing $x=a$. Thus $L$
passes through two distinct points $x$ and $y$.

Therefore every line passes through at least two points, so $\\Pi$ satisfies
Ax2. Thus $\\Pi$ is a primitive plane.

$\\pi$: projective plane

**Definition 1.3.9** 

i. $\\mathscr{P} = \\{p\\}$, $\\mathscr{L} = \\{L\\}$, and
$\\mathscr{J} = \\varnothing$.

ii. $\\mathscr{P} = \\{p, q, r, s\\}$, $\\mathscr{L} = \\varnothing$, and
$\\mathscr{J} = \\varnothing$.

iii. $\\mathscr{P} = \\{p, q\\}$, $\\mathscr{L} = \\{L\\}$, and
$\\mathscr{J} = \\{(p, L), (q, L)\\}$.

iv. $\\mathscr{P} = \\{p, q, r\\}$, $\\mathscr{L} = \\{L, M, N\\}$, and
$$
\\mathscr{J}
= \\{(p, L), (q, L), (p, M), (r, M), (q, N), (r, N)\\}.
$$

v. Let
$$
\\mathscr{P} = \\{(x, y) : x, y \\in \\mathbb{R}\\}.
$$
Let $\\mathscr{L}$ be the set of all subsets of $\\mathscr{P}$ of the form
$$
\\{(x, y) \\in \\mathbb{R}^2 : ax + by + c = 0\\},
$$
where $a, b, c \\in \\mathbb{R}$ and not all of $a$, $b$, and $c$ are zero.
Let
$$
\\mathscr{J} = \\{(p, L) : p \\in L\\}.
$$

vi. Let
$$
\\mathscr{P}
= \\{[x, y, z] : x, y, z \\in \\mathbb{R}
\\text{ and } (x, y, z) \\ne (0, 0, 0)\\}.
$$
Let
$$
\\mathscr{L}
= \\{[a, b, c] : a, b, c \\in \\mathbb{R}
\\text{ and } (a, b, c) \\ne (0, 0, 0)\\}.
$$
Let
$$
\\mathscr{J}
= \\{([x, y, z], [a, b, c]) : ax + by + cz = 0\\}.
$$
Here $[x, y, z]$ denotes the equivalence class of all triples
$(rx, ry, rz)$ where $r \\ne 0$, and $[a, b, c]$ denotes the equivalence
class of all triples $(ra, rb, rc)$ where $r \\ne 0$.

The constructions (i)--(vi) are partial planes; (iii)--(vi) are primitive
planes; (v) is an affine plane; and (vi) is a projective plane.

**Definition 1.3.10** The plane in Definition 1.3.9(v) is called the real
affine plane. The plane in Definition 1.3.9(vi) is called the real
projective plane.

$\\alpha_R$: real affine plane

$\\pi_R$: real projective plane

"[]": points
"<>": lines

`;export{n as default};
