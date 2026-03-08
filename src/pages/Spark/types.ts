// src/pages/Spark/types.ts

import React from 'react';

export type Palette = {
  bg: string;
  fg1: string;
  fg2: string;
  accent: string;
};

export interface EffectProps {
  palette: Palette;
  triggerKey: number;
}

export type EffectModule = React.FC<EffectProps>;