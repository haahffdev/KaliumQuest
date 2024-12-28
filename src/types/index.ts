export interface Question {
  id: number;
  text: string;
  answer: boolean;
}

export interface QuestionCardProps {
  question: string;
  onAnswer: (answer: boolean) => void;
  showFeedback: 'correct' | 'incorrect' | null;
}

export interface ScoreDisplayProps {
  score: number;
}