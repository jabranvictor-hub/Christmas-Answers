import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/schoolAndBibleData';
import { Gamepad2, CheckCircle2, XCircle, RotateCcw, Trophy, Award, Sparkles, BookOpen } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: selectedAnswer }));

    if (selectedAnswer === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setUserAnswers({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white p-6 sm:p-8 border border-emerald-600/30 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-amber-300 text-xs font-bold border border-emerald-700">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>INTERACTIVE FAITH & CHRISTMAS GAME</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
          <span>🎮</span> Christmas & Bible Quiz
        </h1>
        <p className="text-sm text-emerald-100/90 max-w-2xl">
          Test your knowledge of the Nativity, the Gospels of Luke and Matthew, and Christmas history!
        </p>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500">
              <span>Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="text-emerald-700">Score: {score}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
              <span>📖 Category: {currentQ.category}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-stone-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
              if (isSelected && !isAnswerSubmitted) {
                btnStyle = 'bg-emerald-50 text-emerald-950 border-emerald-500 ring-2 ring-emerald-500/20';
              }
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-red-100 text-red-950 border-red-500 line-through';
                } else {
                  btnStyle = 'bg-stone-50 text-stone-400 border-stone-200 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-stone-300 flex items-center justify-center text-xs font-bold text-stone-700">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box on Submit */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Scriptural Explanation:</span>
                </span>
                <span className="text-red-800 font-extrabold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{currentQ.scriptureReference}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-sm shadow-md transition-colors"
              >
                {currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'See Results 🏆'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl shadow-md">
            🏆
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              Quiz Completed!
            </h2>
            <p className="text-stone-600 text-sm">
              You scored <span className="font-extrabold text-emerald-700 text-lg">{score}</span> out of{' '}
              <span className="font-bold">{QUIZ_QUESTIONS.length}</span>!
            </p>
          </div>

          {/* Student Leaderboard */}
          <div className="max-w-md mx-auto p-4 rounded-xl bg-stone-50 border border-stone-200 text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>School Students & Player Leaderboard</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-100/70 border border-emerald-300 font-bold text-emerald-950">
                <span>⭐ You (Current Run)</span>
                <span>{score} / 8</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-200 text-stone-700">
                <span>🎓 Balaj (5th Grade)</span>
                <span className="font-semibold text-stone-900">8 / 8 (Perfect)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-200 text-stone-700">
                <span>🎓 Arnan (4th Grade)</span>
                <span className="font-semibold text-stone-900">7 / 8</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-stone-200 text-stone-700">
                <span>🎓 Eliab (3rd Grade)</span>
                <span className="font-semibold text-stone-900">7 / 8</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-sm shadow-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
