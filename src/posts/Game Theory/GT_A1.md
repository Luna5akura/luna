---
title: Game Theory - Assignment - Week 1
category: Assignments
date: 2025-9-10 
---

# 1 Solution 

## (1)

### Answer

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & 7 & 6 & 4 & 2 & 1 & 9 \\
\hline 7 & 9 & 4 & 5 & 1 & 2 & 6 & 8 & 3 \\
\hline 2 & 1 & 6 & 3 & 9 & 8 & 7 & 5 & 4 \\
\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\
\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\
\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\
\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\
\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\
\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\
\hline
\end{array}
$$

### Steps

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline & 8 & 5 & & & & 2 & 1 & \\
\hline & 9 & 4 & & 1 & 2 & & & 3 \\
\hline & & & 3 & & & 7 & & 4 \\
\hline 5 & & 3 & 4 & & 9 & & & \\
\hline & 4 & & 2 & & 6 & & 3 & \\
\hline & & & 1 & & 3 & 9 & & 7 \\
\hline 6 & & 8 & & & 5 & & & \\
\hline 1 & & & 8 & 4 & & 3 & 6 & \\
\hline & 2 & 7 & & & & 8 & 9 & \\
\hline
\end{array}
$$

We can rule out 3's sequentially in first, seventh, eighth room: 

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & & & & 2 & 1 & \\
\hline & 9 & 4 & & 1 & 2 & & & 3 \\
\hline & & & 3 & & & 7 & & 4 \\
\hline 5 & & 3 & 4 & & 9 & & & \\
\hline & 4 & & 2 & & 6 & & 3 & \\
\hline & & & 1 & & 3 & 9 & & 7 \\
\hline 6 & 3 & 8 & & & 5 & & & \\
\hline 1 & & & 8 & 4 & & 3 & 6 & \\
\hline & 2 & 7 & & 3 & & 8 & 9 & \\
\hline
\end{array}
$$

We can rule out the seventh room's numbers:


$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & & & & 2 & 1 & \\
\hline & 9 & 4 & & 1 & 2 & & & 3 \\
\hline & & & 3 & & & 7 & & 4 \\
\hline 5 & & 3 & 4 & & 9 & & & \\
\hline & 4 & & 2 & & 6 & & 3 & \\
\hline & & & 1 & & 3 & 9 & & 7 \\
\hline 6 & 3 & 8 & & & 5 & & & \\
\hline 1 & 5 & 9 & 8 & 4 & & 3 & 6 & \\
\hline 4 & 2 & 7 & & 3 & & 8 & 9 & \\
\hline
\end{array}
$$

We can sequentially rule out the eighth, ninth room's numbers:

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & & & & 2 & 1 & \\
\hline & 9 & 4 & & 1 & 2 & & & 3 \\
\hline & & & 3 & & & 7 & & 4 \\
\hline 5 & & 3 & 4 & & 9 & & & \\
\hline & 4 & & 2 & & 6 & & 3 & \\
\hline & & & 1 & & 3 & 9 & & 7 \\
\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\
\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\
\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\
\hline
\end{array}
$$

We can sequentially rule out the sixth, fifth, fourth room's numbers:

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & & & & 2 & 1 & \\
\hline & 9 & 4 & & 1 & 2 & & & 3 \\
\hline & & & 3 & & & 7 & & 4 \\
\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\
\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\
\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\
\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\
\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\
\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\
\hline
\end{array}
$$

We can sequentially rule out the first, second third room's numbers:

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|}
\hline 3 & 8 & 5 & 7 & 6 & 4 & 2 & 1 & 9 \\
\hline 7 & 9 & 4 & 5 & 1 & 2 & 6 & 8 & 3 \\
\hline 2 & 1 & 6 & 3 & 9 & 8 & 7 & 5 & 4 \\
\hline 5 & 7 & 3 & 4 & 8 & 9 & 1 & 2 & 6 \\
\hline 9 & 4 & 1 & 2 & 7 & 6 & 5 & 3 & 8 \\
\hline 8 & 6 & 2 & 1 & 5 & 3 & 9 & 4 & 7 \\
\hline 6 & 3 & 8 & 9 & 2 & 5 & 4 & 7 & 1 \\
\hline 1 & 5 & 9 & 8 & 4 & 7 & 3 & 6 & 2 \\
\hline 4 & 2 & 7 & 6 & 3 & 1 & 8 & 9 & 5 \\
\hline
\end{array}
$$

## (2)

Answer: It's not a game.

Proof: Notice the definition of a "Game": Game is a **multiple-person decison problem**,
- however, sudoku is a single player game, there's no other person.

Moreover: In a game **you best decision depends on what others do**,
- however, your decision depends on the board, not others.

# 2 Solution 

## Solution

May 2

## Steps

We first establish a sheet:

$$
\begin{array}{|l|l|l|l|l|l|l|}
\hline & 2 & 5 & 10 & 15 & 28 & 30 \\
\hline Jan & & & ? & ? & & ? \\
\hline Mar & & & ? & & ? & \\
\hline May & ? & & & ? & & \\
\hline Jul & ? & ? & & & & ? \\
\hline
\end{array}
$$

Xiaoming knows Xiaohong doesn't know either:
- It can't be a Month where there's a day with only one month (e.g. March, with 28 being the day with only one month)
  - Otherwise, Xiaohong will know the month throught the day.

Thus, we eliminate March(Because of March 28) and July (Because of July 5)

Then we get:


$$
\begin{array}{|l|l|l|l|l|l|l|}
\hline & 2 & 5 & 10 & 15 & 28 & 30 \\
\hline Jan & & & ? & ? & & ? \\
\hline Mar & & & \text{x} & & \text{x} & \\
\hline May & ? & & & ? & & \\
\hline Jul & \text{x} & \text{x} & & & & \text{x} \\
\hline
\end{array}
$$

Xiaohong now know the day:
- It must be a day with only one month (e.g. 2, with May), otherwise, she won't know it.
Thus, we eliminate 15(It has more than one month)

Then we get:


$$
\begin{array}{|l|l|l|l|l|l|l|}
\hline & 2 & 5 & 10 & 15 & 28 & 30 \\
\hline Jan & & & ? & \text{x} & & ? \\
\hline Mar & & & \text{x} & & \text{x} & \\
\hline May & ? & & & \text{x} & & \\
\hline Jul & \text{x} & \text{x} & & & & \text{x} \\
\hline
\end{array}
$$

Xiaoming now know the day:
- It must be a month with only one day (the only answer May 2), otherwise, he won't know it.
Thus, we can get the final answer: **May 2**


