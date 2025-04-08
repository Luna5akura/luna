# 一维随机游走是暂态还是常返态？

$$
\begin{array}{l}
\sum_{n=1}^\infty P_{00}^n\\ \\
=\sum_{n=1}^\infty P_{00}^{2n}\\ \\
= \sum_{n=1}^\infty \dfrac{(2n)!}{n!n!}p^n(1-p)^n \\ \\
= \sum_{n=1}^\infty \dfrac{1\times 2\times \cdots \times (2n-1)\times 2n}{(1\times 2 \times \cdots \times n)(1\times 2 \times \cdots \times n)}p^n(1-p)^n \\ \\
= \sum_{n=1}^\infty \dfrac{1\times 3 \times\cdots\times (2n-1)2^n}{1\times 2 \times \cdots \times n}p^n(1-p)^n \text{  （分子偶数项的每一个是分母第一部分每一个的两倍 ）} 
\end{array} 
$$

寻找上界：

$$
\begin{array}{l}
\sum_{n=1}^\infty \dfrac{1\times 3 \times\cdots\times (2n-1)2^n}{1\times 2 \times \cdots \times n}p^n(1-p)^n \\\\ 
<\sum_{n=1}^\infty \dfrac{2\times 4 \times\cdots\times 2n}{1\times 2 \times \cdots \times n}2^np^n(1-p)^n\\ \\
=  \sum_{n=1}^\infty (4p(1-p))^n 
\end{array}
$$

当 $p\ne 0.5$时：

$$
\begin{array}{l }
\sum_{n=1}^\infty P_{00}^n\\ \\ 
<\sum_{n=1}^\infty (4p(1-p))^n \\\\  
< \sum_{n-1}^\infty 1^n \\\\  
<\infty
\end{array}
$$

寻找下界：


$$
\begin{array}{l}
\sum_{n=1}^\infty \dfrac{1\times 3 \times\cdots\times (2n-1)2^n}{1\times 2 \times \cdots \times n}p^n(1-p)^n \\ \\ 
=\sum_{n=1}^\infty \dfrac{1}{1}\cdot \dfrac{3}{2}\cdots\dfrac{2n-3}{n-1}\dfrac{2n-1}{n} 2^np^n(1-p)^n \\ \\ 
=\sum_{n=1}^\infty \dfrac{3}{1}\cdot \dfrac{5}{2}\cdots\dfrac{2n-1}{n-1}\dfrac{1}{n} 2^np^n(1-p)^n \text{   （分子整体向左移动）}\\ \\ 
\gt \sum_{n=1}^\infty 2^{n-1}\dfrac{1}{n} 2^n p^n (1-p)^n \\ \\
=\sum_{n=1}^\infty \dfrac{1}{2n}(4p(1-p))^n
\end{array}
$$

当 $p=0.5$时：

$$
\begin{array}{l }
\sum_{n=1}^\infty P_{00}^n\\ \\
\gt\sum_{n=1}^\infty \dfrac{1}{2n}(4p(1-p))^n\\ \\
= \sum_{n=1}^\infty \dfrac{1}{2n} \\ \\ 
=\infty
\end{array}
$$

# 一维对称随机游走是正常返还是零常返？

$$
\begin{array}{l }
\sum_{n=1}^\infty n P_{00}^n\\ \\
\sum_{n=1}^\infty 2n P_{00}^{2n}\\ \\
\gt\sum_{n=1}^\infty 2n\dfrac{1}{2n}(4p(1-p))^n\\ \\
= \sum_{n=1}^\infty 1 \\ \\ 
=\infty
\end{array}
$$

# 二维对称随机游走是暂态还是常返态？

$$
\begin{array}{l}
\sum_{n=1}^\infty P_{00}^n\\ \\
=\sum_{n=1}^\infty P_{00}^{2n}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{4}\right)^{2n}\sum_{i=0}^n \dfrac{(2n)!}{i!i!(n-i)!(n-i)!}\\ \\ 
=\sum_{n=1}^\infty \left(\dfrac{1}{4}\right)^{2n}\sum_{i=0}^n\dfrac{n!}{i!(n-i)!}\dfrac{n!}{i!(n-i)!}\dfrac{(2n)!}{n!n!} \\ \\ 
= \sum_{n=1}^\infty \left(\dfrac{1}{4}\right)^{2n}\sum_{i=0}^n \binom{n}{i}\binom{n}{n-i}\binom{2n}{n} \\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{4}\right)^{2n}\binom{2n}{n} \sum_{i=0}^n \binom{n}{i}\binom{n}{n-i}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{4}\right)^{2n}\binom{2n}{n} \binom{2n}{n} \\ \\ 
\text{   （直观理解： 2n 个球，在前 n 个选 i 个，后 n 个选 n-i 个，等价于 2n 个球直接选 n 个）}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{4^n}\right)^{2}\binom{2n}{n} \binom{2n}{n} \\ \\ 
=\sum_{n=1}^\infty \left(\dfrac{(2n)!}{n!n!2^n2^n}\right)^2 \\ \\
=\sum_{n=1}^\infty  \left(\dfrac{1\times 2 \times \cdots 2n }{(2\times 4 \times \cdots\times 2n)(2\times 4 \times \cdots\times 2n)}\right)^2 \\ \\
=\sum_{n=1}^\infty \left(\dfrac{1\times 3\times \cdots\times 2n-1}{2\times 4\times \cdots\times 2n}\right)^2 \\ \\
= \sum_{n=1}^\infty \dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{3}{4}\cdot\dfrac{3}{4}\cdot\dfrac{5}{6}\cdot\dfrac{5}{6}\cdots\dfrac{2n-1}{2n}\cdot \dfrac{2n-1}{2n} \\ \\ 
= \sum_{n=1}^\infty \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{3}{4}\cdot\dfrac{5}{4}\cdot\dfrac{5}{6}\cdot\dfrac{7}{6}\cdots\dfrac{2n-1}{2n}\cdot\dfrac{1}{2n}\\ \\ 
\text{（分子整体向左移动）}\\ \\ 
= \sum_{n=1}^\infty \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{3}{4}\cdot\dfrac{5}{4}\cdot\dfrac{5}{6}\cdot\dfrac{7}{6}\cdots\dfrac{2n-1}{2n}\cdot\dfrac{2n+1}{2n}\cdot \dfrac{1}{2n+1} \\ \\ 
\gt\sum_{n=1}^\infty  \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{2}{3}\cdot\dfrac{4}{3}\cdots\dfrac{n-1}{n}\cdot\dfrac{n+1}{n}\cdot\dfrac{1}{2n+1} \\ \\ 
\text{（因为} \dfrac{2k-1}{2k}\cdot\dfrac{2k+1}{2k}= 1-\dfrac{1}{4k^2} > 1-\dfrac{1}{k^2}=\dfrac{k-1}{k}\cdot\dfrac{k+1}{k}\text{）} \\ \\
= \sum_{n=1}^\infty \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{1}{2}\cdot\left(\dfrac{3}{2}\cdot\dfrac{2}{3}\right)\cdot\left(\dfrac{4}{3}\cdots\dfrac{n-1}{n}\right)\cdot\dfrac{n+1}{n}\cdot\dfrac{1}{2n+1} \\ \\ 
= \sum_{n=1}^\infty   \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{1}{2}\cdot\dfrac{n+1}{n}\cdot\dfrac{1}{2n+1} \\ \\ 
\gt \sum_{n=1}^\infty \dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{1}{2} \cdot 1 \cdot \dfrac{1}{3n} \\ \\
=\dfrac{1}{8} \sum_{n=1}^\infty \dfrac{1}{n}\\ \\ 
=\infty
\end{array} 
$$

# 三维对称随机游走是暂态还是常返态？

$$
\begin{array}{l}
\sum_{n=1}^\infty P_{00}^n\\ \\
= \sum_{n=1}^\infty P_{00}^{2n}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \sum_{i+j=0}^n\dfrac{(2n)!}{i!i!j!j!(n-i-j)!(n-i-j)!} \\ 
=  \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \binom{2n}{n}\sum_{i+j=0}^n\dfrac{n!}{i!j!(n-i-j)!}\dfrac{n!}{i!j!(n-i-j)!}\\ 
\end{array}
$$

接下来需要推导一个放缩：

首先当 $i>j$, 有：

$$
\begin{array}{l}
i!j! \\ \\ 
= (i-1)! \cdot i\cdot (j+1)!\cdot \dfrac{1}{j+1}\\\\
= (i-1)!(j+1)! \dfrac{i}{j+1}\\ \\  
\ge (i-1)!(j+1)!
\end{array}
$$

同理可以得到：

$i!j! \ge \left(\dfrac{i+j}{2}\right)!\left(\dfrac{i+j}{2}\right)!$

$i!j!(n-i-j)! \ge (n/3)!(n/3)!(n/3)!$

$\dfrac{n!}{i!j!(n-i-j)!} \le \dfrac{n!}{(n/3)!(n/3)!(n/3)!}$

接下来继续：

$$
\begin{array}{l}
\sum_{n=1}^\infty P_{00}^n\\ \\
=  \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \binom{2n}{n}\sum_{i+j=0}^n\dfrac{n!}{i!j!(n-i-j)!}\dfrac{n!}{i!j!(n-i-j)!}\\ \\
\le  \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \binom{2n}{n}\sum_{i+j=0}^n\dfrac{n!}{i!j!(n-i-j)!}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \binom{2n}{n}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\sum_{i+j=0}^n\dfrac{n!}{i!j!(n-i-j)!}\\ \\
= \sum_{n=1}^\infty \left(\dfrac{1}{6}\right)^{2n} \binom{2n}{n}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}3^n\\ \\
\text{（对于所有可能三种方向的全排列，就是全部的路径数）} \\ \\ 
= \sum_{n=1}^\infty\left(\dfrac{1}{6}\right)^n\left(\dfrac{1}{2}\right)^n\binom{2n}{n}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\\ \\
= \sum_{n=1}^\infty\left(\dfrac{1}{3}\right)^n\left(\dfrac{1}{4}\right)^n\binom{2n}{n}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\\ \\
\end{array}
$$

接下来针对 $\left(\dfrac{1}{4}\right)^n \binom{2n}{n}$，回顾二维随机游走：

$$
\begin{array}{l}
\left(\dfrac{1}{4}\right)^{2n} \binom{2n}{n} \binom{2n}{n} \\ \\ 
=\dfrac{1}{2}\cdot\dfrac{3}{2}\cdot\dfrac{3}{4}\cdot\dfrac{5}{4}\cdot\dfrac{5}{6}\cdot\dfrac{7}{6}\cdots\dfrac{2n-1}{2n}\cdot\dfrac{2n+1}{2n}\cdot \dfrac{1}{2n+1} \\ \\ 
=  \left(\dfrac{1}{2}\cdot\dfrac{3}{2}\right)\cdot\left(\dfrac{3}{4}\cdot\dfrac{5}{4}\right)\cdot\left(\dfrac{5}{6}\cdot\dfrac{7}{6}\right)\cdots\left(\dfrac{2n-1}{2n}\cdot\dfrac{2n+1}{2n}\right)\cdot \dfrac{1}{2n+1} \\ \\ 
\lt  1\cdot 1\cdot 1 \cdots 1\cdot \dfrac{1}{2n+1} \\ 
\lt \dfrac{1}{n}
\end{array}
$$

因此有$\left(\dfrac{1}{4}\right)^n \binom{2n}{n}<\dfrac{1}{\sqrt n}$

我们继续：

$$
\begin{array}{l}
\sum_{n=1}^\infty P_{00}^n\\ \\
= \sum_{n=1}^\infty\left(\dfrac{1}{3}\right)^n\left(\dfrac{1}{4}\right)^n\binom{2n}{n}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\\ \\
\lt \sum_{n=1}^\infty \left(\dfrac{1}{3}\right)^n\dfrac{1}{\sqrt{n}}\dfrac{n!}{(n/3)!(n/3)!(n/3)!}\\ \\
\overset{n=3k}{=}\sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  \dfrac{1}{3^{3k}}\dfrac{(3k)!}{k!k!k!}\\ \\
=\sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  \dfrac{1\times 2\times 3\times 4\times 5 \times 6 \cdots\times 3k}{(3\times 6\times\cdots\times(3k-2)\times(3k-1)\times 3k)(3\times 6\times\cdots\times 3k)(3\times 6\times\cdots\times 3k)} \\ \\ 
=\sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}} \dfrac{1\times 2\times 4\times 5  \cdots\times 3k-1}{(3\times 6\times\cdots\times 3k)(3\times 6\times\cdots\times(3k-2)\times(3k-1))} \\ \\ 
=\sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  \dfrac{1}{3}\cdot\dfrac{2}{3}\cdot\dfrac{4}{6}\cdot\dfrac{5}{6}\cdots\dfrac{3k-2}{3k}\cdot\dfrac{3k-1}{3k}\\ \\
=\sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}} \dfrac{2}{3}\cdot\dfrac{4}{3}\cdot\dfrac{5}{6}\cdot\dfrac{7}{6}\cdots\dfrac{3k-1}{3k}\cdot\dfrac{1}{3k}\\ \\
= \sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  \left(\dfrac{2}{3}\cdot\dfrac{4}{3}\right)\cdot\left(\dfrac{5}{6}\cdot\dfrac{7}{6}\right)\cdots\left(\dfrac{3k-1}{3k}\cdot\dfrac{3k+1}{3k}\right)\cdot\dfrac{1}{3k+1}\\ \\
\end{array} \\ \\ 
\lt \sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  1\cdot 1 \cdots 1 \cdot \dfrac{1}{3k+1} \\ \\
\overset{3k=n}{=} \sum_{3k=1}^\infty\dfrac{1}{\sqrt{n}}  \cdot\dfrac{1}{n+1} \\ \\
\lt \sum_{3k=1}^\infty\dfrac{1}{n\sqrt{n}}  \\ \\
\lt\infty
$$

# 更高维的对称随机游走是暂态还是常返态？

更高维的对称随机游走相比与三维更容易放缩，均为暂态

# 为什么维度高了之后是暂态的？直觉是什么？

假设我们在偏离 0 位置的地方，我们想要走到 0 处， 也就是 “内部”： 

- 一维随机游走的“内部”可以看作一根杆上的线段（如 $[-1, 1]$）
- 二维随机游走的“内部”可以看作一个平面内的圆（如 $x^2+y^2 = 1$）
- 三维随机游走的“内部”可以看作一个空间内的一个球（如 $x^2+y^2+z^2 = 1$）

可以发现：维度越高，“内部” 相对于“外部” 所占的 “比例” 会更小，因此也更难返回
