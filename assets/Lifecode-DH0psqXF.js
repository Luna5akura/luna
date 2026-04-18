import{j as e}from"./react-vendor-D5uu0Jun.js";import"./misc-vendor-H0r4-IPV.js";import"./markdown-vendor-C9hxAi1z.js";function n(){return e.jsxs("div",{className:"promo-container",children:[e.jsx("div",{className:"bg-layer bg-gradient"}),e.jsx("div",{className:"bg-layer grid-pattern"}),e.jsx("div",{className:"bg-layer radial-glow"}),e.jsx("div",{className:"bg-layer floating-particles"}),e.jsx("div",{className:"bg-layer noise-overlay"}),e.jsxs("div",{className:"card-wrapper",children:[e.jsx("div",{className:"card-glow"}),e.jsxs("div",{className:"card-content",children:[e.jsx("div",{className:"limited-badge",children:e.jsx("span",{children:"⚡ LIMITED 50 SETS ⚡"})}),e.jsx("div",{className:"artist-tag",children:"DJ MURASAME"}),e.jsxs("h1",{className:"main-title",children:["BEYOND THE WAVE",e.jsx("span",{className:"title-plus",children:"＋"}),"TECHNO-MATRIX"]}),e.jsx("div",{className:"sub-album",children:"＋ FREE CONNECTION 3 — DRUM'N BASS STYLE"}),e.jsxs("div",{className:"details-box",children:[e.jsxs("div",{className:"disc-info",children:[e.jsx("span",{className:"disc-icon",children:"💿"}),"『BEYOND THE WAVE ＋ TECHNO-MATRIX』",e.jsx("span",{className:"small-note",children:"（2枚組・全28曲）"})]}),e.jsxs("div",{className:"disc-info",children:[e.jsx("span",{className:"disc-icon",children:"🎧"}),"『FREE CONNECTION 3 / DJ MURASAME -DRUM'N BASS STYLE-』"]})]}),e.jsxs("div",{className:"price-area",children:[e.jsx("div",{className:"price",children:"¥6,400"}),e.jsx("div",{className:"price-note",children:"+ 运费另计"})]}),e.jsxs("div",{className:"bonus-section",children:[e.jsx("div",{className:"bonus-title",children:"✨ 预约限定特典 ✨"}),e.jsxs("div",{className:"bonus-items",children:[e.jsxs("div",{className:"bonus-item",children:[e.jsx("span",{className:"bonus-icon",children:"📁"}),"原创透明文件夹"]}),e.jsxs("div",{className:"bonus-item",children:[e.jsx("span",{className:"bonus-icon",children:"💌"}),"限定页面访问明信片",e.jsxs("div",{className:"bonus-sub",children:["NAOKI / 彩音 / Tatsh 直笔签名",e.jsx("br",{}),"（日本Note平台限定内容）"]})]})]})]}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-cell",children:[e.jsx("div",{className:"info-label",children:"🏪 独家销售"}),e.jsx("div",{className:"info-value",children:"DIVERSE DIRECT"}),e.jsx("div",{className:"info-warning",children:"仅限50套 · 售完即止"})]}),e.jsxs("div",{className:"info-cell",children:[e.jsx("div",{className:"info-label",children:"📅 预约时间"}),e.jsx("div",{className:"info-value",children:"2025年4月3日 19:00 〜 4月19日"}),e.jsx("div",{className:"info-sub",children:"预约开始后即可订购"})]}),e.jsxs("div",{className:"info-cell",children:[e.jsx("div",{className:"info-label",children:"📦 发售 / 发货"}),e.jsx("div",{className:"info-value",children:"2025年4月26日"}),e.jsx("div",{className:"info-sub",children:"发货自发售日起依次安排"})]})]}),e.jsx("div",{className:"urgent-note",children:"⚠️ 由于限定50套，预计很快完售！请尽早预约。"}),e.jsx("div",{className:"cta-button",children:e.jsx("span",{children:"4月3日 19:00 预约开始 →"})}),e.jsxs("div",{className:"footer-note",children:["※ 预约特典仅限预约期间内购买之订单。",e.jsx("br",{}),"※ 明信片上的限定页面URL随商品一同寄送。"]})]})]}),e.jsx("style",{children:`
        .promo-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', sans-serif;
          position: relative;
          background: #030518;
        }
        
        /* 多层背景样式 */
        .bg-layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .bg-gradient {
          background: radial-gradient(circle at 20% 30%, #0a1f3e, #020617);
          opacity: 0.9;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 200, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 100, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
        }
        
        .radial-glow {
          background: radial-gradient(ellipse at 70% 20%, rgba(0, 200, 255, 0.25), transparent 60%);
          z-index: 2;
          mix-blend-mode: screen;
        }
        
        .floating-particles {
          background-image: radial-gradient(circle at 15% 40%, rgba(168, 85, 247, 0.3) 1.5px, transparent 1.5px);
          background-size: 35px 35px;
          z-index: 2;
          opacity: 0.5;
        }
        
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
          opacity: 0.08;
          mix-blend-mode: overlay;
          z-index: 3;
        }
        
        /* 卡片包装 */
        .card-wrapper {
          position: relative;
          z-index: 10;
          max-width: 460px;
          width: 100%;
          border-radius: 2.5rem;
          backdrop-filter: blur(2px);
        }
        
        .card-glow {
          position: absolute;
          inset: -2px;
          border-radius: 2.7rem;
          background: linear-gradient(135deg, #00c8ff, #c084fc, #ff66c0);
          opacity: 0.4;
          filter: blur(12px);
          z-index: -1;
          transition: opacity 0.3s ease;
        }
        
        .card-content {
          background: rgba(8, 12, 38, 0.65);
          backdrop-filter: blur(18px);
          border-radius: 2.2rem;
          padding: 2rem 1.8rem;
          border: 1px solid rgba(0, 200, 255, 0.3);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
        }
        
        .limited-badge {
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .limited-badge span {
          background: linear-gradient(95deg, #ff4d8c, #ffaa44);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 0.3rem 1rem;
          border-radius: 40px;
          color: #010101;
          display: inline-block;
          text-transform: uppercase;
          box-shadow: 0 0 8px rgba(255, 70, 140, 0.5);
        }
        
        .artist-tag {
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: #a0f0ff;
          text-transform: uppercase;
          border-left: 3px solid #c084fc;
          padding-left: 12px;
          margin-bottom: 1.2rem;
          font-weight: 500;
          text-shadow: 0 0 5px rgba(0,200,255,0.5);
        }
        
        .main-title {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 0.25rem 0;
          background: linear-gradient(135deg, #ffffff, #b2f0ff, #e2b0ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .title-plus {
          display: inline-block;
          font-size: 1.8rem;
          margin: 0 0.3rem;
          background: linear-gradient(145deg, #ff99cc, #ff66cc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .sub-album {
          font-size: 1rem;
          font-weight: 600;
          color: #d9b0ff;
          margin-bottom: 1.4rem;
          letter-spacing: -0.2px;
          border-left: 2px solid #00c8ff;
          padding-left: 12px;
        }
        
        .details-box {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 1.4rem;
          padding: 0.9rem 1.2rem;
          margin: 1.2rem 0;
          border: 1px solid rgba(0, 200, 255, 0.25);
        }
        
        .disc-info {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #eef5ff;
        }
        
        .disc-icon {
          font-size: 1.1rem;
        }
        
        .small-note {
          font-size: 0.7rem;
          color: #b0d4ff;
          margin-left: 4px;
        }
        
        .price-area {
          text-align: center;
          margin: 1rem 0 0.5rem;
        }
        
        .price {
          font-size: 2.8rem;
          font-weight: 800;
          background: linear-gradient(145deg, #c084fc, #00e0ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -1px;
          line-height: 1;
        }
        
        .price-note {
          font-size: 0.7rem;
          color: #9bb5ff;
          letter-spacing: 0.5px;
        }
        
        .bonus-section {
          margin: 1.5rem 0 1.2rem;
          background: linear-gradient(115deg, rgba(192, 132, 252, 0.15), rgba(0, 200, 255, 0.1));
          border-radius: 1.4rem;
          padding: 1rem 1.2rem;
          border: 1px solid rgba(192, 132, 252, 0.4);
        }
        
        .bonus-title {
          font-size: 1rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.9rem;
          color: #ffe0b5;
          letter-spacing: 1px;
        }
        
        .bonus-items {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .bonus-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #f0f3ff;
          background: rgba(0,0,0,0.3);
          padding: 0.5rem 0.8rem;
          border-radius: 1rem;
        }
        
        .bonus-icon {
          font-size: 1.2rem;
        }
        
        .bonus-sub {
          font-size: 0.7rem;
          font-weight: normal;
          color: #c0d4ff;
          margin-top: 4px;
          line-height: 1.3;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
          margin: 1.2rem 0;
        }
        
        .info-cell {
          background: rgba(0, 10, 30, 0.6);
          border-radius: 1.2rem;
          padding: 0.6rem 1rem;
          border-left: 3px solid #00c8ff;
        }
        
        .info-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: #82e9ff;
          letter-spacing: 1px;
          margin-bottom: 0.2rem;
        }
        
        .info-value {
          font-weight: 700;
          font-size: 0.9rem;
          color: white;
        }
        
        .info-sub {
          font-size: 0.65rem;
          color: #aac9ff;
          margin-top: 3px;
        }
        
        .info-warning {
          font-size: 0.7rem;
          color: #ffbb77;
          margin-top: 4px;
          font-weight: 500;
        }
        
        .urgent-note {
          background: rgba(255, 70, 110, 0.2);
          border: 1px solid #ff4d6d;
          border-radius: 1rem;
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          text-align: center;
          color: #ffbfbf;
          font-weight: 600;
          margin: 0.8rem 0;
        }
        
        .cta-button {
          background: linear-gradient(105deg, #0077ff, #c452ff);
          margin: 1rem 0 0.8rem;
          text-align: center;
          padding: 0.85rem 0;
          border-radius: 60px;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: white;
          cursor: default;
          transition: all 0.2s ease;
          box-shadow: 0 6px 14px rgba(0, 160, 255, 0.3);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .cta-button span {
          background: none;
        }
        
        .footer-note {
          font-size: 0.6rem;
          text-align: center;
          color: #96abdf;
          margin-top: 1rem;
          border-top: 1px dashed rgba(0,200,255,0.3);
          padding-top: 0.9rem;
          line-height: 1.4;
        }
        
        @media (max-width: 480px) {
          .card-content {
            padding: 1.5rem;
          }
          .main-title {
            font-size: 1.6rem;
          }
          .price {
            font-size: 2.3rem;
          }
        }
      `})]})}export{n as default};
