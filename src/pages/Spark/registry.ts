// src/pages/Spark/registry.tsx

import { EffectModule } from './types';
import { LiquidGradient, AsciiMatrix, ConstellationNet, SynthwaveTerrain, HyperspaceWarp, DynamicFractalMirrors, PixelTessellationGrid, FluidGooJets, InfinitePanBlueprint } from './effects/Backgrounds';
import { GlitchTypography, EnergyCore, BrutalistPatches, BauhausPopShapes, LaserSpanningLines, KineticWaveText, NoiseFormations, OrbitingMonoliths, CipherHackerText } from './effects/Subjects';
import { SciFiHUD } from './effects/HudLayers';
import { CRTEffect, FilmGrain, MotionSpeedBlur, SignalGlitchOverlay } from './effects/Overlays';

const None: EffectModule = () => null;

export const BACKGROUNDS: EffectModule[] =[
  LiquidGradient, AsciiMatrix, ConstellationNet, SynthwaveTerrain, HyperspaceWarp, 
  PixelTessellationGrid, DynamicFractalMirrors, FluidGooJets, InfinitePanBlueprint
];

export const SUBJECTS: EffectModule[] =[
  GlitchTypography, EnergyCore, BrutalistPatches, BauhausPopShapes, LaserSpanningLines,
  KineticWaveText, OrbitingMonoliths, NoiseFormations, CipherHackerText
]; 

export const HUD_LAYERS: EffectModule[] =[None, SciFiHUD]; 

export const OVERLAYS: EffectModule[] =[None, CRTEffect, FilmGrain, MotionSpeedBlur, SignalGlitchOverlay];