**第三章 基于资源满意度的门诊动态调度模型构建**  
（续）

### 3.4 扩展模型 (Model 3)：多诊室动态分流与协同速率控制模型  
**(Multi-Clinic Dynamic Routing and Rate Control Model)**  

**【设计思路】**  
为进一步贴近大型综合医院门诊的实际运营场景，本模型在核心模型（Model 2）的基础上，将系统扩展至 \( n \) 个平行诊室，并引入动态患者分配比例决策变量 \( p_{it} \)，实现分流（Routing）与速率控制（Rate Control）的联合优化。每个诊室可具有异构特性（如不同医生的赶工敏感度 \( \gamma_i \) 和安全阈值 \( C_{\text{safe},i} \)，反映医生经验或专科差异）。患者仍以固定泊松分布到达，每个患者的实际服务时长服从均匀分布 \( S_k \sim \text{Uniform}(a, b) \)。决策者通过同时调节各诊室的速率 \( \mu_{it} \) 和分配比例 \( p_{it} \)，在Min-Max RSI框架下最小化全系统所有诊室、所有时段的最大资源满意度指数 \( \rho \)，从而实现多诊室之间的智能负载均衡与风险均衡。该模型回答了“在多诊室、异构医生环境下，如何联合优化动态分流与服务速率以最小化广义系统压力尾部风险”的复杂问题，是本文模型体系中最具现实应用价值的版本，为大型门诊智慧调度提供了完整理论框架。

**【数学建模】**  
令 \( I = \{1, 2, \dots, n\} \) 为诊室集合。设 \( \tilde{A}_t \sim \text{Poisson}(\lambda_t) \) 为时段 \( t \) 内随机到达患者总数，第 \( k \) 个到达患者的服务时长 \( S_k \stackrel{\text{i.i.d.}}{\sim} \text{Uniform}(a, b) \)。决策变量包括：  
- \( \mu_{it} \)：诊室 \( i \) 在时段 \( t \) 的服务速率（相对于基准速率 1 的可调节倍数）；  
- \( p_{it} \in [0, 1] \)：时段 \( t \) 内到达患者分配给诊室 \( i \) 的比例（连续决策变量）。  

第 \( i \) 个诊室的广义系统压力 \( L_{it}(\mu_{it}, p_{it}, \tilde{D}_t) \)（单位：分钟）同时刻画排队积压与线性赶工惩罚：  
\[
L_{it} = \underbrace{W_{it} + p_{it} \tilde{D}_t - \mu_{it} \Delta}_{\text{净排队工作量}} + \underbrace{\gamma_i (\mu_{it} - \mu_{\min})}_{\text{赶工引发的质量惩罚}} \qquad (3.14)
\]  
其中 \( \tilde{D}_t = \sum_{k=1}^{\tilde{A}_t} S_k \) 为复合泊松总服务需求（\( m = \mathbb{E}[S] = (a + b)/2 \)，\( v = \text{Var}(S) = (b - a)^2 / 12 \)，分配给诊室 \( i \) 的随机需求近似为独立复合泊松过程）。设诊室 \( i \) 的安全崩溃阈值为 \( C_{\text{safe},i} \)。随机广义压力 \( L_{it} \) 相对于容量 \( C_{\text{safe},i} \) 的资源满意度指数记为 \( \rho(L_{it}, C_{\text{safe},i}) \)，它是以下方程的唯一正解：  
\[
\mathbb{E} \left[ \exp \left( \frac{L_{it} - C_{\text{safe},i}}{\rho(L_{it}, C_{\text{safe},i}) \cdot \nu} \right) \right] = 1 \qquad (3.15)
\]  
其中 \( \nu > 0 \) 为风险敏感度参数。  

扩展模型的目标是寻找服务速率序列 \( \{\mu_{it}\} \) 与分配比例序列 \( \{p_{it}\} \)，使得系统所有诊室、所有时段的广义压力 RSI 值尽可能小。其 Min-Max 优化问题表述如下：  
\[
\begin{aligned}
\min_{\boldsymbol{\mu}, \mathbf{p}, \rho} \quad & \rho \\
\text{s.t.} \quad & \rho(L_{it}, C_{\text{safe},i}) \le \rho, \quad \forall i \in I, \, t = 1, \dots, T \\
& \sum_{i=1}^{n} p_{it} = 1, \quad \forall t \quad (\text{分配比例守恒}) \\
& W_{i,t+1} = \max(0, W_{it} + \lambda_t p_{it} m - \mu_{it} \Delta), \quad \forall i, t \quad (\text{流体状态转移}) \\
& \mu_{\min} \le \mu_{it} \le \mu_{\max}, \quad p_{it} \ge 0, \quad \forall i, t
\end{aligned} \qquad (3.16)
\]  
其中 \( \boldsymbol{\mu} = (\mu_{it})_{i,t} \)，\( \mathbf{p} = (p_{it})_{i,t} \)。根据 RSI 定义，约束 \( \rho(L_{it}, C_{\text{safe},i}) \le \rho \) 等价于：  
\[
\mathbb{E} \left[ \exp \left( \frac{W_{it} + p_{it} \tilde{D}_t - \mu_{it} \Delta + \gamma_i(\mu_{it} - \mu_{\min}) - C_{\text{safe},i}}{\rho \nu} \right) \right] \le 1 \qquad (3.17)
\]  
该约束的完整确定性转化过程见第 4 章 4.1 节（正态近似法）。状态转移方程采用流体近似（以期望服务需求 \( \lambda_t p_{it} m \) 代替随机总需求），同时保留 \( \max(0, \cdot) \) 以确保非负性。

**【模型特点分析】**  
该扩展模型是本文模型体系的顶层实现。它在核心模型（Model 2）基础上实现了从单诊室到多诊室的自然递进，通过连续决策变量 \( p_{it} \) 引入了动态分流机制，同时允许诊室异构参数 \( \gamma_i \) 和 \( C_{\text{safe},i} \)。质量惩罚仍采用线性形式 \( \gamma_i (\mu_{it} - \mu_{\min}) \)，优化目标则采用包含排队积压与赶工惩罚的广义系统压力，并以最小化最大 RSI 指数为准则。与核心模型相比，本模型通过 RSI 对尾部风险的指数敏感性，自动实现智能负载均衡——系统会倾向于将更多患者分配给当前压力较低或抗压能力更强（\( \gamma_i \) 较小）的诊室，同时差异化调节各诊室速率，避免任何单个诊室成为系统瓶颈。该模型结构简洁、求解高效，可作为后续算法实现与仿真验证的直接基础。其核心贡献在于：在服务时长随机、到达服从固定泊松分布且多诊室并行的前提下，为门诊管理者提供了可量化的动态分流与速率调控路径，显著提升了全系统效率与质量的帕累托改进。

---

**第四章 模型求解算法与动态执行策略**  

### 4.1 RSI 约束的确定性转化 (正态近似法)  
**(Deterministic Equivalent Transformation of RSI Constraints via Normal Approximation)**  

**【设计思路与适用性说明】**  
公式 (3.4)、(3.9) 与 (3.17) 中的 RSI 约束涉及随机变量期望的指数运算，直接求解困难。为使模型具有可操作性，我们假设广义系统压力 \( L_{it} \) 服从正态分布（该近似在泊松到达过程下具有良好精度，尤其当 \( \lambda_t \) 较大时），即 \( L_{it} \sim \mathcal{N}(\mathbb{E}[L_{it}], \text{Var}(L_{it})) \)。在此假设下，可对 RSI 约束进行解析转化，得到仅含决策变量 \( \mu_{it} \) 和 \( p_{it} \) 的确定性不等式约束。该方法同时适用于基础模型（Model 1）、核心模型（Model 2）与扩展模型（Model 3），其推导过程具有普适性。

**【引理 1】** 若随机变量 \( X \sim \mathcal{N}(\mu, \sigma^2) \)，则方程 \( \mathbb{E}\left[\exp\left(\frac{X - C}{\rho\nu}\right)\right] = 1 \) 的唯一正解为：  
\[
\rho = \frac{\sigma^2}{2\nu (C - \mu)} \qquad (4.1)
\]  
（前提条件：\( C > \mu \)，以确保 \( \rho > 0 \)）。  

**【推导过程】**  
由于 \( X \) 服从正态分布，其矩母函数为：  
\[
\mathbb{E}[e^{tX}] = \exp\left(\mu t + \frac{1}{2}\sigma^2 t^2\right).
\]  
令 \( t = \frac{1}{\rho\nu} \)，代入 RSI 定义方程可得：  
\[
\mathbb{E}\left[\exp\left(\frac{X - C}{\rho\nu}\right)\right] = \exp\left(\frac{\mu - C}{\rho\nu} + \frac{\sigma^2}{2\rho^2\nu^2}\right) = 1.
\]  
等式两边同时取自然对数：  
\[
\frac{\mu - C}{\rho\nu} + \frac{\sigma^2}{2\rho^2\nu^2} = 0.
\]  
两边同时乘以 \( 2\rho^2\nu^2 \)（注意 \( \rho > 0 \)，\( \nu > 0 \)，不改变不等式方向）：  
\[
2\rho\nu(\mu - C) + \sigma^2 = 0.
\]  
解得：  
\[
\rho = \frac{\sigma^2}{2\nu (C - \mu)}.
\]  
证毕。

（基础模型 Model 1 与核心模型 Model 2 的确定性等价形式略，与前文一致。）

**【应用于扩展模型 (Model 3) 的确定性等价形式】**  
在 Model 3 中，每个诊室 \( i \) 的随机需求近似为独立复合泊松过程（分配比例 \( p_{it} \) 下到达率 \( \lambda_t p_{it} \)，服务时长仍为 \( \text{Uniform}(a, b) \)。令 \( m = \mathbb{E}[S] = (a + b)/2 \)，\( v = \text{Var}(S) = (b - a)^2 / 12 \)。则第 \( i \) 个诊室的期望与方差为：  
\[
\begin{aligned}
\mathbb{E}[L_{it}] &= W_{it} + \lambda_t p_{it} m - \mu_{it} \Delta + \gamma_i (\mu_{it} - \mu_{\min}), \\
\text{Var}(L_{it}) &= \lambda_t p_{it} v + (\lambda_t p_{it}) m^2.
\end{aligned}
\]  
（方差包含服务时长随机性贡献的 \( \lambda_t p_{it} v \) 项，惩罚项为确定性变量，不贡献方差）。  

将引理 1 应用于 RSI 约束 \( \rho(L_{it}, C_{\text{safe},i}) \le \rho \)，可得：  
\[
\rho \ge \frac{\text{Var}(L_{it})}{2\nu(C_{\text{safe},i} - \mathbb{E}[L_{it}])} \qquad (4.8)
\]  
将上述表达式代入 Model 3 的 Min-Max 优化问题，转化为在每个时段 \( t \) 进行独立决策的简化形式：  
\[
\begin{aligned}
\min_{\boldsymbol{\mu}, \mathbf{p}} \quad & \max_{i \in I} \frac{\lambda_t p_{it} v + (\lambda_t p_{it}) m^2}{2\nu\left(C_{\text{safe},i} - \bigl(W_{it} + \lambda_t p_{it} m - \mu_{it} \Delta + \gamma_i(\mu_{it} - \mu_{\min})\bigr)\right)} \\
\text{s.t.} \quad & \sum_{i=1}^{n} p_{it} = 1, \quad p_{it} \ge 0, \quad \forall t \\
& W_{it} + \lambda_t p_{it} m - \mu_{it} \Delta + \gamma_i(\mu_{it} - \mu_{\min}) < C_{\text{safe},i}, \quad \forall i, t \\
& \mu_{\min} \le \mu_{it} \le \mu_{\max}, \quad \forall i, t
\end{aligned} \qquad (4.9)
\]  
目标函数在约束条件下关于 \( \mu_{it} \) 和 \( p_{it} \) 为凸函数，可通过交替优化或内点法高效求解。该确定性转化保留了 RSI 对尾部风险的敏感性，同时使模型在实时多诊室环境中可快速计算最优速率与分配比例建议。

**【解释与管理意义】**  
正态近似法将原本复杂的随机约束转化为确定性凸优化问题，大幅提升了计算效率，同时保持了对极端事件的控制能力。在扩展模型（Model 3）中，由于引入了动态分流比例 \( p_{it} \) 和诊室异构参数，模型自动实现了智能负载均衡与协同调速，最优 \( \rho \) 通常显著低于单诊室情形。在实际应用中，管理者可根据历史数据验证正态假设的合理性；若方差较大，可进一步采用更精确的分布进行灵敏度分析。该方法是本文所有 RSI 模型求解的核心技术支撑，确保动态速率决策与分流策略既稳健又可操作。