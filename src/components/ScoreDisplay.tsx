import React from 'react';
import { Zap } from 'lucide-react';
import { ScoreDisplayProps } from '../types';

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 w-full">
      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 animate-pulse" />
      <span className="text-xl sm:text-2xl font-bold text-green-500 neon-text">
        Puntos: {score}
      </span>
    </div>
  );
}