import React, { useEffect, useRef, useState, ReactNode } from 'react';
import './Skill.css';

interface Item {
  imageUrl: string;
  content: ReactNode;
  leftText: string;
  rightText: string;
}

interface SkillProps {
  items: Item[];
}

const Skill: React.FC<SkillProps> = ({ items }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 当组件顶部进入视口时开始计算进度
      const start = windowHeight * 0.2; // 组件顶部距离视口顶部80%时开始
      const end = -windowHeight * 0.8; // 组件顶部到达视口底部-20%时结束
      
      let progress = 0;
      if (rect.top < start && rect.top > end) {
        progress = 1 - (rect.top - end) / (start - end);
      } else if (rect.top <= end) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const numItems = items.length;

  return (
    <div className="skill-container" ref={containerRef}>
      <div className="perspective-wrapper">
        {items.map((item: Item, index: number) => {
          // 每个项目的延迟效果
          const itemDelay = index * 0.15;
          const itemProgress = Math.max(0, Math.min(1, 
            (scrollProgress - itemDelay) / (1 - itemDelay)
          ));

          // Z轴堆叠 - 初始时堆叠在一起，然后展开
          const baseZSpacing = 50;
          const zTranslate = -index * baseZSpacing * (1 - itemProgress * 0.8);
          
          // Y轴位移 - 创建展开效果
          const ySpread = 80;
          const yTranslate = (index - (numItems - 1) / 2) * ySpread * itemProgress;
          
          // X轴旋转 - 从45度倾斜到0度正对
          const maxRotation = 45;
          const rotateX = maxRotation * (1 - itemProgress);
          
          // Z轴旋转 - 从45度菱形到0度正常
          const rotateZ = 45 * (1 - itemProgress);
          
          // 缩放效果
          const scale = 0.7 + 0.3 * itemProgress;

          const isFacingCamera = itemProgress > 0.6;
          const showTexts = isFacingCamera;

          return (
            <div
              key={index}
              className={`stack-item ${isFacingCamera ? 'facing-camera' : ''}`}
              style={{
                transform: `
                  translateZ(${zTranslate}px) 
                  rotateX(${rotateX}deg)
                  rotateZ(${rotateZ}deg)
                  translateY(${yTranslate}px)
                  scale(${scale})
                `,
                zIndex: numItems - index,
                opacity: 0.8 + 0.2 * itemProgress,
              }}
            >
              <div className="item-background">
                {!isFacingCamera ? (
                  <img src={item.imageUrl} alt={`Item ${index}`} className="item-image" />
                ) : (
                  <div className="item-content">{item.content}</div>
                )}
              </div>
              
              {showTexts && (
                <>
                  <div className="side-text left-text">
                    {item.leftText}
                  </div>
                  <div className="side-text right-text">
                    {item.rightText}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;