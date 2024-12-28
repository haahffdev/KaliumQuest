import React from 'react';
import { Shield } from 'lucide-react';

export function GameTitle() {
  return (
    <div className="w-full flex justify-center mb-8 px-4">
      <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm border border-green-500/30 hover:scale-105 transition-transform duration-300">
        <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-bounce" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 neon-text animate-title">
          Kalium Quest Game
        </h1>
        <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-bounce" />
      </div>
    </div>
  );
}