// src/components/ImageScroller.tsx
import React from 'react';
import {useFontToggle} from "@/context/FontToggleContext";

interface ImageScrollerProps {}

const ImageScroller: React.FC<ImageScrollerProps> = () => {
  const { fontToggle } = useFontToggle();

  const imageFilenames = [
    'xd.png',
    'fl.png',
    'pr.png',
    'vs.png',
    'blender.png',
    'rd.png',
    'bp.png',
    'sai.png',
    'au.png',
    'pc.png',
    'ps.png',
    'ds.png',
    'unity.png',
    'vsc.png',
    'rr.png',
    'ae.png',
    'mma.png',
    'cl.png',
  ];

  const rows = 3;
  const imagesPerRow = Math.ceil(imageFilenames.length / rows);

  const imageRows = Array.from({ length: rows }, (_, rowIndex) =>
    imageFilenames.slice(rowIndex * imagesPerRow, (rowIndex + 1) * imagesPerRow)
  );

  const imageFolder = fontToggle ? '/ico/pixel' : '/ico/common';

  return (
    <div>
      <div className="overflow-hidden">
        {imageRows.map((images, index) => (
          <div
            key={index}
            className={`flex whitespace-nowrap my-4 ${index % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}
            style={{ '--animation-duration': `${300 + index * 5}s` } as React.CSSProperties}
          >
            {[...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map((filename, imageIndex) => (
              <img
                key={imageIndex}
                src={`${imageFolder}/${filename}`}
                alt={filename}
                className="w-40 h-40 object-cover mx-2"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
