import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import './RandomFont.css';

const RandomFont: React.FC = () => {
  // ==========================================
  // 所有字体合并为单一全局池（与输入文本语言无关）
  // ==========================================
  const allFonts = useMemo(() => [
    // 英文池
    'Kreeper', 'Calvera', 'FifthAgent', 'Chettavissto', 'Deberta',
    'Aabukeyan', 'AgreePersonalThin', 'GoodTiming', 'AvenueMadison',
    'MaassSlicerItalic', 'Bauhaus93', 'OV', 'BlackAcute', 'PixelFont12',
    'BlackFlag', 'RealityHyper', 'BostonCaps', 'Jasmin',
    // 中文池
    'BaiTuoHeLiMa', 'FangZhengBeiWeiKaiShu', 'FangZhengRuiSuTi',
    'FusionPixelZH', 'FangZhengSongTiKai', 'DFSoGe7',
    // 日文池
    'AOTFHaseTopPostD',
  ], []);

  // 语言检测（仅用于显示框，与字体选择无关）
  const detectLanguage = (text: string): 'en' | 'zh' | 'ja' => {
    if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) return 'ja';
    if (/[\u4e00-\u9fa5]/.test(text)) return 'zh';
    return 'en';
  };

  // 随机选取字体（从全局池中随机）
  const getRandomFont = useCallback(() => {
    return allFonts[Math.floor(Math.random() * allFonts.length)];
  }, [allFonts]);

  // 演示文本
  const [inputText, setInputText] = useState(
    'Welcome to LUNA WORLD\n欢迎来到赛博世界\nようこそ LUNA WORLD へ'
  );
  const [currentFont, setCurrentFont] = useState<string>('');
  const [currentLang, setCurrentLang] = useState<'en' | 'zh' | 'ja'>('en');

  // 初始加载时随机一次字体（与输入文本无关）
  useEffect(() => {
    setCurrentFont(getRandomFont());
  }, [getRandomFont]); // 仅在组件挂载时执行一次

  // 输入文本变化时，仅更新语言显示框（字体不随输入变化）
  useEffect(() => {
    const lang = detectLanguage(inputText);
    setCurrentLang(lang);
  }, [inputText]);

  // 手动重新随机字体（完全独立于输入文本）
  const handleReroll = () => {
    setCurrentFont(getRandomFont());
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,rgba(3,11,15,1),rgba(2,6,10,1))] text-white cursor-none selection:bg-cyan-500/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(103,232,249,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.18) 1px, transparent 1px)', backgroundSize: '104px 104px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_0_30%),radial-gradient(circle_at_82%_12%,rgba(20,184,166,0.08),transparent_0_24%)]" />

      {/* 页面标题（保持赛博风格） */}
      <div className="relative z-10 pt-12 pb-8 text-center">
        <h1 className="font-mono text-6xl md:text-7xl font-black tracking-[-0.05em] text-slate-200">
          RANDOM<span className="text-cyan-400">.</span>FONT
        </h1>
        <p className="mt-2 font-mono text-xs tracking-[0.3em] text-cyan-600">
          LANGUAGE-AWARE DISPLAY • GLOBAL RANDOM TYPEFACE
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* 输入区 */}
        <div className="mb-8 border border-cyan-900/40 bg-[linear-gradient(180deg,rgba(7,14,24,0.88),rgba(4,10,16,0.72))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-40 resize-none bg-transparent font-mono text-lg text-slate-300 outline-none"
            placeholder="在此输入任意文本（支持英文 / 中文 / 日文）..."
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="border border-cyan-900/50 bg-cyan-950/40 px-3 py-1 text-cyan-300">当前语言: {currentLang.toUpperCase()}</span>
              <span className="border border-cyan-900/50 bg-cyan-950/40 px-3 py-1 text-cyan-300">当前字体: {currentFont}</span>
            </div>
            <button
              onClick={handleReroll}
              className="border border-cyan-500/60 bg-transparent px-8 py-3 font-mono text-sm tracking-widest text-cyan-300 transition-all hover:bg-cyan-400 hover:text-[#031015]"
            >
              REROLL FONT
            </button>
          </div>
        </div>

        {/* 实时预览区 */}
        <div className="flex min-h-[420px] items-center justify-center border border-cyan-900/35 bg-[linear-gradient(180deg,rgba(7,14,24,0.8),rgba(4,10,16,0.62))] p-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md">
          <motion.p
            key={currentFont}
            className="text-4xl md:text-5xl leading-relaxed max-w-2xl"
            style={{ fontFamily: currentFont }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {inputText || '请输入文本以触发随机字体'}
          </motion.p>
        </div>

        {/* 说明 */}
        <div className="mt-12 text-center font-mono text-xs text-slate-500">
          输入任意文本 → “当前语言”显示框实时更新<br />
          点击 REROLL FONT → 从全局字体库中随机选取（与输入语言无关）
        </div>
      </div>
    </motion.div>
  );
};

export default RandomFont;
