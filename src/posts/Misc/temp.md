好的，我们来分析这个问题。这个问题要求对一个连续时间系统进行离散化，并分析离散化对能控性的影响。

我们将分步进行分析：
1.  判断原连续时间系统的能控性。
2.  对系统进行离散化。
3.  判断离散化后系统的能控性，并分析采样周期 T 的影响。

---

### 1. 连续时间系统的能控性分析

给定的连续时间线性系统为：
$$ \frac{d\mathbf{x}(t)}{dt} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \mathbf{x}(t) + \begin{pmatrix} 1 \\ 0 \end{pmatrix} u(t) $$

我们定义系统矩阵 A 和输入矩阵 B：
$$ A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$

要判断系统的能控性，我们需要计算能控性矩阵 $ W_c = [B \quad AB] $，并检查其秩。

首先，计算 $ AB $：
$$ AB = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \end{pmatrix} $$

因此，能控性矩阵为：
$$ W_c = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$

计算 $ W_c $ 的行列式：
$$ \det(W_c) = (1)(-1) - (0)(0) = -1 \neq 0 $$

由于能控性矩阵的行列式不为零，其秩为 2，等于系统的阶数。因此，**该连续时间系统是完全能控的**。

---

### 2. 系统离散化

为了得到离散时间系统 $ \mathbf{x}(k+1) = G\mathbf{x}(k) + H u(k) $，我们需要计算离散化后的系统矩阵 G 和输入矩阵 H。设采样周期为 T。

G 的计算公式为 $ G = e^{AT} $。
H 的计算公式为 $ H = \left( \int_{0}^{T} e^{A\tau} d\tau \right) B $。

首先，计算状态转移矩阵 $ e^{At} $。我们可以通过拉普拉斯逆变换法计算：
$ e^{At} = \mathcal{L}^{-1}[(sI - A)^{-1}] $

$$ (sI - A) = \begin{pmatrix} s & -1 \\ 1 & s \end{pmatrix} $$
$$ (sI - A)^{-1} = \frac{1}{s^2 + 1} \begin{pmatrix} s & 1 \\ -1 & s \end{pmatrix} = \begin{pmatrix} \frac{s}{s^2+1} & \frac{1}{s^2+1} \\ \frac{-1}{s^2+1} & \frac{s}{s^2+1} \end{pmatrix} $$

进行拉普拉斯逆变换，我们得到：
$$ e^{At} = \begin{pmatrix} \cos(t) & \sin(t) \\ -\sin(t) & \cos(t) \end{pmatrix} $$

因此，离散系统矩阵 G 为：
$$ G = e^{AT} = \begin{pmatrix} \cos(T) & \sin(T) \\ -\sin(T) & \cos(T) \end{pmatrix} $$

接下来，计算离散输入矩阵 H：
$$ \int_{0}^{T} e^{A\tau} d\tau = \int_{0}^{T} \begin{pmatrix} \cos(\tau) & \sin(\tau) \\ -\sin(\tau) & \cos(\tau) \end{pmatrix} d\tau = \begin{pmatrix} [\sin(\tau)]_0^T & [-\cos(\tau)]_0^T \\ [\cos(\tau)]_0^T & [\sin(\tau)]_0^T \end{pmatrix} $$
$$ = \begin{pmatrix} \sin(T) & 1-\cos(T) \\ \cos(T)-1 & \sin(T) \end{pmatrix} $$

将上式乘以 B：
$$ H = \begin{pmatrix} \sin(T) & 1-\cos(T) \\ \cos(T)-1 & \sin(T) \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} \sin(T) \\ \cos(T)-1 \end{pmatrix} $$

最终，离散化的系统状态空间表达式为：
$$ \mathbf{x}(k+1) = \begin{pmatrix} \cos(T) & \sin(T) \\ -\sin(T) & \cos(T) \end{pmatrix} \mathbf{x}(k) + \begin{pmatrix} \sin(T) \\ \cos(T)-1 \end{pmatrix} u(k) $$

---

### 3. 离散时间系统的能控性分析

对于离散系统，其能控性矩阵为 $ W_d = [H \quad GH] $。

我们已经有 G 和 H，现在计算 $ GH $：
$$ GH = \begin{pmatrix} \cos(T) & \sin(T) \\ -\sin(T) & \cos(T) \end{pmatrix} \begin{pmatrix} \sin(T) \\ \cos(T)-1 \end{pmatrix} $$
$$ = \begin{pmatrix} \cos(T)\sin(T) + \sin(T)(\cos(T)-1) \\ -\sin^2(T) + \cos(T)(\cos(T)-1) \end{pmatrix} = \begin{pmatrix} 2\sin(T)\cos(T) - \sin(T) \\ \cos^2(T)-\sin^2(T) - \cos(T) \end{pmatrix} $$
利用三角恒等式 $ \sin(2T) = 2\sin(T)\cos(T) $ 和 $ \cos(2T) = \cos^2(T) - \sin^2(T) $，我们得到：
$$ GH = \begin{pmatrix} \sin(2T) - \sin(T) \\ \cos(2T) - \cos(T) \end{pmatrix} $$

现在构建离散能控性矩阵 $ W_d $：
$$ W_d = \begin{pmatrix} \sin(T) & \sin(2T) - \sin(T) \\ \cos(T)-1 & \cos(2T) - \cos(T) \end{pmatrix} $$

判断其能控性，需要计算其行列式：
$$ \det(W_d) = \sin(T)[\cos(2T) - \cos(T)] - (\cos(T)-1)[\sin(2T) - \sin(T)] $$
$$ = \sin(T)\cos(2T) - \sin(T)\cos(T) - [\cos(T)\sin(2T) - \cos(T)\sin(T) - \sin(2T) + \sin(T)] $$
$$ = \sin(T)\cos(2T) - \cos(T)\sin(2T) + \sin(2T) - \sin(T) $$
再次利用三角恒等式 $ \sin(A-B) = \sin(A)\cos(B) - \cos(A)\sin(B) $：
$$ = -\sin(2T-T) + \sin(2T) - \sin(T) = -\sin(T) + \sin(2T) - \sin(T) $$
$$ = \sin(2T) - 2\sin(T) = 2\sin(T)\cos(T) - 2\sin(T) $$
$$ = 2\sin(T)(\cos(T) - 1) $$

离散系统是能控的，当且仅当 $ \det(W_d) \neq 0 $。因此，系统不可控的条件是 $ \det(W_d) = 0 $，即：
$$ 2\sin(T)(\cos(T) - 1) = 0 $$
这会导致两种情况：
1.  $ \sin(T) = 0 $：这意味着采样周期 $ T = k\pi $，其中 k 是正整数 ($ k=1, 2, 3, \ldots $)。
2.  $ \cos(T) - 1 = 0 $：这意味着 $ \cos(T) = 1 $，即采样周期 $ T = 2k\pi $，其中 k 是正整数。这种情况已经被第一种情况所包含。

所以，当采样周期 **T 是 π 的整数倍**时，离散化后的系统将变得**不可控**。

---

### 结论

1.  **原连续时间系统是完全能控的。**
2.  **离散化对系统的能控性有显著影响，其影响取决于采样周期 T 的选择。**
3.  如果采样周期 **T 不是 π 的整数倍** ($ T \neq k\pi, k \in \mathbb{Z}^+ $)，则离散化后的系统**保持能控性**。
4.  如果采样周期 **T 是 π 的整数倍** ($ T = k\pi, k \in \mathbb{Z}^+ $)，则离散化后的系统会**失去能控性**，变为不可控系统。

这种现象被称为“采样引起不可控性”。它发生在当采样频率与系统的自然频率之间存在特定关系时，导致输入在采样点上对系统的某个模态失去控制能力。对于本题中的系统，其特征值为 $ \lambda = \pm i $，对应的是一个振荡频率为 1 rad/s 的谐振环节，其周期为 $ 2\pi $。当采样周期 T 是振荡周期的一半（$ \pi $）的整数倍时，采样点恰好落在系统状态循环的特定位置，使得控制输入无法影响系统的状态，从而导致能控性丧失。