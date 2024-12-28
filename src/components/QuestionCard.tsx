import React from 'react';
import { Check, X } from 'lucide-react';
import { QuestionCardProps } from '../types';

export function QuestionCard({ question, onAnswer, showFeedback }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl bg-black/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg relative overflow-hidden border border-green-500/30 neon-border">
      {showFeedback && (
        <div className={`absolute inset-0 flex items-center justify-center bg-opacity-90 fade-in ${
          showFeedback === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}>
          {showFeedback === 'correct' ? (
            <Check className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
          ) : (
            <X className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
          )}
        </div>
      )}
      <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 text-white">
        {question}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => onAnswer(true)}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black border border-green-500 hover:bg-green-500/20 rounded-lg font-semibold transition-all duration-300 text-green-500 hover:scale-105"
        >
          Verdadero
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black border border-red-500 hover:bg-red-500/20 rounded-lg font-semibold transition-all duration-300 text-red-500 hover:scale-105"
        >
          Falso
        </button>
      </div>
    </div>
  );
}