import React, { useState, useCallback } from 'react';
import { Binary, Lock } from 'lucide-react';
import { questions } from './questions';
import { ScoreDisplay } from './components/ScoreDisplay';
import { QuestionCard } from './components/QuestionCard';
import { GameTitle } from './components/GameTitle';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(() => 
    Math.floor(Math.random() * questions.length)
  );
  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const getNextQuestion = useCallback(() => {
    let nextQuestion;
    do {
      nextQuestion = Math.floor(Math.random() * questions.length);
    } while (nextQuestion === currentQuestion);
    setCurrentQuestion(nextQuestion);
    setShowFeedback(null);
  }, [currentQuestion]);

  const handleAnswer = (answer: boolean) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(prev => prev + 100);
      setShowFeedback('correct');
    } else {
      setScore(0);
      setShowFeedback('incorrect');
    }
    setTimeout(getNextQuestion, 1500);
  };

  return (
    <div className="min-h-screen cyber-bg text-white flex flex-col items-center justify-center p-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Binary className="absolute top-10 left-10 w-8 h-8 text-green-500/40 animate-pulse hidden sm:block" />
        <Lock className="absolute bottom-10 right-10 w-8 h-8 text-red-500/40 animate-pulse hidden sm:block" />
        <Binary className="absolute top-10 right-10 w-8 h-8 text-green-500/40 animate-pulse hidden sm:block" />
        <Lock className="absolute bottom-10 left-10 w-8 h-8 text-red-500/40 animate-pulse hidden sm:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <GameTitle />
        <ScoreDisplay score={score} />
        <div className="w-full flex justify-center px-4">
          <QuestionCard
            question={questions[currentQuestion].text}
            onAnswer={handleAnswer}
            showFeedback={showFeedback}
          />
        </div>
      </div>
    </div>
  );
}

export default App;