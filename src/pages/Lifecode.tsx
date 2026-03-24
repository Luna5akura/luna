import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CommissionBoardNeon: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  },[]);

  const worksList =[
    '万代南梦宫游戏株式会社《太鼓之达人》',
    '科乐美数码娱乐株式会社《BEMANI系列》',
    '世嘉株式会社《CHUNITHM》《maimai》',
    '太东株式会社《GROOVE COASTER》',
    '卡普空株式会社《CROSS×BEATS》',
    'AXTORM株式会社《MASH VP! Re:VISION》',
    'Toylogic株式会社《Warlander》',
    'HIKKY株式会社《Vket Summer》《Vket Winter》',
    '5bp.株式会社《秋之回忆（Memories Off）系列》',
    'HTC NIPPON株式会社“VR购物中心型商店”',
    '雷亚游戏（Rayark.Inc）《DEEMO》《Cytus》《VOEZ》',
    'lowiro limited《Arcaea》',
    'TunerGames《Paradigm: Reboot》（律动轨迹）',
    'Hololive《レクトシティ feat. Aki Rosenthal》',
    '朝之姐妹Project《忍》',
    'Tatsh&NAOKI《REDRAVE》',
    '偶像大师《Day of the future》',
    'TV动画 向阳素描×365《?でわっしょい》',
    'TV动画 11eyes《Arrival of Tears》',
    'OVA AIKa ZERO《Dream Hunter》',
    'TV动画 无赖勇者的鬼畜美学《Realization》'
  ];

  return (
    <div className="min-h-screen w-full bg-[#05020a] text-white font-sans relative overflow-x-hidden flex flex-col items-center py-16 selection:bg-[#00ff9d] selection:text-black">
      
      {/* ================= 1. 极限深度背景层 (Deep Space & Grids) ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#070310]"></div>
        
        {/* 底部透视赛博网格 (Perspective Grid) */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] perspective-grid opacity-20"></div>

        {/* 流体光晕：更极致的对比度 */}
        <div className="absolute top-[-15%] left-[-20%] w-[800px] h-[800px] bg-[#a855f7] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] bg-[#ff1493] rounded-full mix-blend-screen filter blur-[180px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[700px] h-[700px] bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[160px] opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* 胶片噪点与扫描线 */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]"></div>
      </div>

      {/* ================= 2. 前景 HUD / UI 装饰层 (Foreground Overlays) ================= */}
      <div className="fixed inset-0 z-50 pointer-events-none flex justify-between p-4 md:p-8 opacity-40 mix-blend-screen">
        {/* 左上角/右上角十字准星 */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ff9d]"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ff9d]"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ff9d]"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ff9d]"></div>
        
        {/* 侧边信息条 (Vertical text) */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 rotate-180 writing-vertical-rl text-[10px] font-mono tracking-[0.5em] text-purple-500/50">
          SYS.AUDIO_RENDER.PIPELINE // SECURE
        </div>
        <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 writing-vertical-rl text-[10px] font-mono tracking-[0.5em] text-[#00ff9d]/50">
          BPM:180 // MASTERING_MODE: ON
        </div>
      </div>

      {/* ================= 主内容区 ================= */}
      <div className="w-full max-w-[800px] relative z-10 flex flex-col px-6 md:px-12 pb-32">
        
        {/* --- 1. 头部标题区 (Header) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center pt-10 mb-16"
        >
          {/* 超大空心背景字 */}
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] font-black whitespace-nowrap pointer-events-none z-[-1] font-zh tracking-tighter opacity-10 text-transparent text-stroke-purple">
            乐曲制作
          </div>

          <div className="flex justify-between items-center border-b border-purple-500/20 pb-4 mb-10">
             <span className="text-[#00ff9d] text-[10px] md:text-xs tracking-[0.4em] font-mono font-bold flex items-center gap-3">
               <span className="w-2 h-2 bg-[#00ff9d] animate-pulse shadow-[0_0_10px_#00ff9d]"></span>
               <span className="opacity-80">AUDIO_INTERFACE // LINKED</span>
             </span>
             <span className="text-purple-400/80 text-[10px] md:text-xs tracking-[0.3em] font-mono">
               T:{time.toLocaleTimeString()}
             </span>
          </div>
          
          <div className="inline-block relative">
            <h2 className="text-purple-300 text-sm md:text-base tracking-[0.6em] mb-2 font-bold uppercase relative z-10">
              Tatsh Music Circle
            </h2>
            {/* 动态音频 EQ 装饰 */}
            <div className="flex justify-center gap-1 mb-6 h-4 items-end opacity-50">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-1 bg-[#00ff9d] rounded-t-sm animate-eq" style={{ animationDelay: `${Math.random()}s` }}></div>
              ))}
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-white mb-2 chromatic-text relative z-10">
            COMMISSION
          </h1>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff1493]"></div>
            <p className="text-[#ff1493] text-xs md:text-sm tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_12px_rgba(255,20,147,0.8)]">
              Original Music Production
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff1493]"></div>
          </div>
        </motion.div>

        {/* --- 2. 个人简介 (Profile Panel) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full mb-16 glass-panel group overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00ff9d] shadow-[0_0_20px_#00ff9d]"></div>
          {/* 背景几何科技纹理 */}
          <div className="absolute -right-20 -top-20 w-64 h-64 border-[1px] border-purple-500/10 rounded-full"></div>
          <div className="absolute -right-10 -top-10 w-48 h-48 border-[1px] border-purple-500/20 rounded-full"></div>
          
          <div className="p-8 md:p-10 text-[15px] leading-relaxed text-purple-100/80 relative z-10 font-zh">
            <p className="text-2xl font-bold text-white mb-6 flex items-baseline gap-2">
              中国的朋友们，大家好！我是 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#00ff9d] font-black text-4xl ml-2">Tatsh</span> 
              <span className="text-sm font-normal text-purple-400 tracking-widest">。</span>
            </p>
            <p className="mb-8 max-w-2xl">我是一名创作多种流派音乐的作曲家。目前，我长期接受原创歌曲的作编曲以及作词委托。无论什么曲风，我都能为您的项目提供最合适的声音。</p>
            
            <div className="flex flex-col md:flex-row md:items-stretch gap-0 border border-purple-500/30 rounded-sm overflow-hidden bg-black/40">
              <div className="bg-purple-900/60 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-purple-500/30">
                <span className="text-[#00ff9d] font-mono font-bold tracking-[0.2em] text-[10px] uppercase">Known Aliases</span>
              </div>
              <div className="p-4 flex-1 flex flex-wrap gap-3 items-center">
                {['世阿弥', 'DJ MURASAME', '白虎', 'Persona'].map((alias, i) => (
                  <span key={i} className="text-white/90 font-bold tracking-wider text-sm bg-purple-500/10 px-3 py-1 border border-purple-500/20 rounded-sm hover:border-[#00ff9d]/50 transition-colors">
                    {alias}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 3. 业务范围 (Services - 纵深排版) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 relative"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-[#ff1493]"></div>
            <h3 className="text-[#ff1493] text-lg font-mono tracking-[0.3em] font-bold">
              AVAILABLE SERVICES
            </h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff1493]/50 to-transparent"></div>
          </div>
          
          <div className="flex flex-col gap-6 font-zh relative">
            {/* 连接线 */}
            <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-purple-500/20 hidden md:block"></div>

            {[
              { num: '01', title: '原创歌曲的作编曲・作词', desc: '可作词语言：日语・英语（※不接受“仅作词”的委托）', color: 'from-[#00ff9d]' },
              { num: '02', title: '乐曲的Remix・编曲', desc: 'Remix & Arrangement Requests。将现有乐曲提升至新的维度。', color: 'from-[#a855f7]' },
              { num: '03', title: '日本歌手的安排与邀约', desc: '可以根据乐曲为您匹配并安排最合适的歌手（Vocalist）。', color: 'from-[#ff1493]' }
            ].map((srv, idx) => (
              <div key={idx} className="relative pl-0 md:pl-16 group">
                <div className="glass-card relative overflow-hidden p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                  {/* 超大数字水印 */}
                  <div className="absolute -right-4 -bottom-8 text-8xl font-black font-mono text-white/5 pointer-events-none transition-transform group-hover:scale-110">
                    {srv.num}
                  </div>
                  {/* 渐变指示块 */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${srv.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-2xl font-black font-mono text-white/40 md:w-12">{srv.num}.</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff9d] transition-colors">{srv.title}</h4>
                      <p className="text-sm text-purple-200/60">{srv.desc}</p>
                    </div>
                  </div>
                </div>
                {/* 侧边连接点 */}
                <div className="hidden md:block absolute left-[21px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-[#00ff9d] group-hover:shadow-[0_0_10px_#00ff9d] transition-all"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- 4. 履历与代表作 (Career & Works) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 relative"
        >
          <div className="flex items-center gap-4 mb-10 justify-end text-right">
            <div className="flex-1 h-[1px] bg-gradient-to-l from-[#a855f7]/50 to-transparent"></div>
            <h3 className="text-[#a855f7] text-lg font-mono tracking-[0.3em] font-bold">
              CAREER & WORKS
            </h3>
            <div className="h-8 w-1 bg-[#a855f7]"></div>
          </div>

          <div className="glass-panel p-8 mb-8 font-zh text-[14px] leading-loose text-purple-100/90 border-r-4 border-r-[#a855f7]">
            <p className="mb-4">
              18岁时从制作广告音乐和电视节目配乐开始了我的职业生涯。<br/>
              此后，在担任了<span className="text-black bg-[#00ff9d] px-2 py-0.5 font-bold mx-1 rounded-sm">《beatmania IIDX》的音乐总监</span>之后，我又为音乐游戏、动画、主机游戏以及VTuber提供过乐曲。
            </p>
            <p className="opacity-80">
              现在除了提供乐曲外，我还担任音乐讲师、游戏的日本地区推广宣发、游戏音乐总监以及音乐比赛的评委。
            </p>
          </div>

          {/* 跑马灯风格的作品展示区 (音游感强) */}
          <div className="bg-[#0a0415] border border-purple-500/20 relative overflow-hidden">
            <div className="bg-purple-900/30 px-6 py-3 border-b border-purple-500/20 flex justify-between items-center">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase font-zh">
                代表作 / 合作客户
              </span>
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#ff1493] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-[#a855f7] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full"></span>
              </span>
            </div>
            
            <div className="p-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[13px] text-purple-200 font-zh relative z-10">
                {worksList.map((work, idx) => (
                  <div key={idx} className="flex items-start gap-3 group cursor-default border-b border-white/5 pb-2">
                    <span className="text-[#a855f7] font-mono text-xs mt-0.5 group-hover:text-[#00ff9d] transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="leading-snug opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">{work}</span>
                  </div>
                ))}
              </div>
              
              {/* 装饰音轨线 */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent hidden md:block"></div>
            </div>
          </div>
        </motion.div>

        {/* --- 5. 委托须知 & 联系方式 (Contact - 终极视觉焦点) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full mt-10"
        >
          {/* 高能警示边框 */}
          <div className="relative p-[2px] bg-gradient-to-b from-[#00ff9d] via-[#a855f7] to-[#ff1493] rounded-sm">
            <div className="bg-[#0a0510] p-8 md:p-12 h-full relative overflow-hidden flex flex-col items-center">
              
              {/* 录制闪烁灯 */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></span>
                <span className="text-red-500 font-mono text-xs font-bold tracking-widest">REC</span>
              </div>

              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(0,255,157,0.3)_0%,transparent_70%)] pointer-events-none"></div>
              
              <h3 className="text-3xl font-black text-white mb-8 text-center tracking-widest font-zh drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                委托・咨询
              </h3>
              
              <div className="text-sm text-purple-100/90 leading-loose mb-10 font-zh text-center max-w-xl">
                <p className="text-[#00ff9d] font-bold text-lg mb-4 border-b border-[#00ff9d]/30 pb-2 inline-block">
                  我不仅承接来自企业的制作委托，也非常重视来自个人的乐曲制作委托。
                </p>
                <p className="mb-6 opacity-80">无论是什么曲风或用途都没关系。如果您能来找我咨询，我将非常高兴。<br/>对于过去没有尝试过的音乐类型，我也依然想不断去挑战。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-6">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm hover:border-[#a855f7]/50 transition-colors">
                    <p className="text-[#a855f7] font-mono text-xs font-bold mb-1">LANG // 语言</p>
                    <p className="text-xs text-white/80">即使是通过翻译软件进行交流也没有问题。</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm hover:border-[#00ff9d]/50 transition-colors">
                    <p className="text-[#00ff9d] font-mono text-xs font-bold mb-1">PRICE // 金额</p>
                    <p className="text-xs text-white/80">制作金额会因具体项目而异。<br/>详情将另行出具报价单。</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm hover:border-[#ff1493]/50 transition-colors">
                    <p className="text-[#ff1493] font-mono text-xs font-bold mb-1">PAY // 支付</p>
                    <p className="text-xs text-white/80">请使用PayPal或银行转账进行支付。</p>
                  </div>
                </div>
              </div>

              {/* 核心邮箱区 - 终端输入风格 */}
              <div className="w-full max-w-lg mt-4 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9d] via-[#a855f7] to-[#ff1493] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="relative border border-white/20 bg-black/80 p-6 md:p-8 flex flex-col items-center">
                  <p className="text-[10px] text-white/50 font-mono tracking-[0.2em] mb-4 uppercase text-center w-full border-b border-white/10 pb-2">
                    Send your request to the address below
                  </p>
                  <div className="font-mono text-xl md:text-3xl font-black text-white tracking-widest flex items-center gap-2 select-all">
                    <span className="text-[#00ff9d] animate-pulse">{'>'}</span> 
                    tatshmail@yahoo.co.jp
                    <span className="w-3 h-8 bg-white/80 animate-blink ml-1"></span>
                  </div>
                </div>
              </div>
              
              <p className="text-[11px] text-purple-400 mt-8 font-zh bg-[#1a0b2e]/80 border border-purple-500/30 px-6 py-2 rounded-full">
                ※如果发送后超过一星期仍未收到回复，请您再次联系我。
              </p>

            </div>
          </div>
        </motion.div>

        {/* --- 6. Footer --- */}
        <div className="mt-20 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-4 mb-4 opacity-50">
            <div className="h-[1px] w-16 bg-purple-500"></div>
            <div className="w-2 h-2 rotate-45 border border-purple-500"></div>
            <div className="h-[1px] w-16 bg-purple-500"></div>
          </div>
          <p className="text-[10px] text-purple-400/60 font-mono uppercase tracking-[0.4em] font-bold">
            SYSTEM_TERMINATED // EOF<br/><br/>
            © {new Date().getFullYear()} TatshMusicCircle. All Rights Reserved.
          </p>
        </div>

      </div>

      {/* ================= 全局自定义 CSS ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Noto+Sans+SC:wght@400;700;900&display=swap');

        .font-sans { font-family: 'Orbitron', -apple-system, sans-serif; }
        .font-mono { font-family: 'Share Tech Mono', monospace; }
        .font-zh { font-family: 'Noto Sans SC', sans-serif; }
        
        ::-webkit-scrollbar { display: none; }

        /* 极致深度：透视网格 (模拟音游轨道/地平线) */
        .perspective-grid {
          background-image: 
            linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
            linear-gradient(to top, rgba(168, 85, 247, 0.3) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: bottom;
          mask-image: linear-gradient(to top, black, transparent);
          -webkit-mask-image: linear-gradient(to top, black, transparent);
        }

        /* 文字描边技巧 */
        .text-stroke-purple {
          -webkit-text-stroke: 2px rgba(168, 85, 247, 0.2);
        }

        /* 垂直文字方向 */
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .glass-panel {
          background: linear-gradient(135deg, rgba(20, 10, 35, 0.7), rgba(10, 5, 20, 0.9));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        }

        .glass-card {
          background: rgba(15, 7, 30, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
        }

        /* 动画：光球缓慢游动 */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 15s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* 动画：音频均衡器 */
        @keyframes eq {
          0%, 100% { height: 4px; }
          50% { height: 24px; }
        }
        .animate-eq { animation: eq 0.8s ease-in-out infinite; }

        /* 动画：终端光标闪烁 */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        /* RGB色差故障字效 (Chromatic Aberration) */
        .chromatic-text {
          position: relative;
          display: inline-block;
          text-shadow: 
            3px 0px 0px rgba(255, 20, 147, 0.7), 
            -3px 0px 0px rgba(0, 255, 157, 0.7);
          animation: chromaticPulse 3s infinite alternate;
        }

        @keyframes chromaticPulse {
          0% { text-shadow: 2px 0 0 rgba(255,20,147,0.8), -2px 0 0 rgba(0,255,157,0.8); }
          50% { text-shadow: 1px 0 0 rgba(255,20,147,0.5), -1px 0 0 rgba(0,255,157,0.5); }
          100% { text-shadow: 4px 0 0 rgba(255,20,147,1), -4px 0 0 rgba(0,255,157,1); }
        }
      `}</style>
    </div>
  );
};

export default CommissionBoardNeon;