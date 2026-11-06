import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/presentationData';
import { CheckCircle2, XCircle, RotateCcw, Award, HelpCircle, ChevronRight, BookOpen } from 'lucide-react';

export const QuizView: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const activeQuestions = QUIZ_QUESTIONS.filter(q => selectedChapter === 0 || q.chapterId === selectedChapter);

  const question: QuizQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];
  const userAnswer = question ? selectedAnswers[question.id] : undefined;
  const isAnswered = userAnswer !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered || !question) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [question.id]: optionIndex
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const handleChapterChange = (chId: number) => {
    setSelectedChapter(chId);
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const totalQuestions = activeQuestions.length;
  const score = calculateScore();
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const chapterTabs = [
    { id: 0, label: 'Todos (Clase 4/11)' },
    { id: 8, label: 'Cap. 8: Evaluación Desempeño' },
    { id: 9, label: 'Cap. 9: Remuneración' },
    { id: 10, label: 'Cap. 10: Prestaciones' },
    { id: 11, label: 'Cap. 11: Entrenamiento' }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto w-full pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Verificación Conceptual
              </span>
              <span className="text-xs text-slate-400">Banco de Preguntas • Administración del Personal</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Cuestionario Teórico: Clase 4/11
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Pon a prueba el dominio conceptual de los capítulos del programa antes de dictar la cátedra o responder a la audiencia.
            </p>
          </div>

          <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-center shrink-0">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Progreso</span>
            <span className="text-lg font-bold text-indigo-400">
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
        </div>

        {/* Chapter Tabs */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto pb-1">
          {chapterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleChapterChange(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedChapter === tab.id
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {!quizCompleted ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          {/* Question Meta */}
          <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
            <span className="font-mono text-indigo-400 font-bold bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-800/40">
              Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </span>
            <span className="text-slate-400 font-medium">Tema: {question.conceptTag}</span>
          </div>

          {/* Question Text */}
          <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = userAnswer === idx;
              const isCorrect = question.correctAnswer === idx;

              let btnStyle = "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900";
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50";
                } else if (isSelected) {
                  btnStyle = "bg-rose-950/40 border-rose-500 text-rose-200 ring-1 ring-rose-500/50";
                } else {
                  btnStyle = "bg-slate-950/30 border-slate-850 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                    isAnswered && isCorrect ? 'bg-emerald-500 text-slate-950 border-emerald-400' :
                    isAnswered && isSelected ? 'bg-rose-500 text-white border-rose-400' :
                    'bg-slate-850 border-slate-700 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                {userAnswer === question.correctAnswer ? (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> ¡Correcto!
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Respuesta Incorrecta
                  </span>
                )}
                <span className="text-xs text-slate-400">• Sustento Teórico de Chiavenato</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Aciertos hasta ahora: <strong className="text-indigo-400">{score}</strong> de {currentQuestionIndex + (isAnswered ? 1 : 0)}
            </span>

            {isAnswered && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-md"
              >
                <span>{currentQuestionIndex < totalQuestions - 1 ? 'Siguiente Pregunta' : 'Finalizar Examen'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 border border-indigo-400 text-indigo-300 flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-white">¡Evaluación Conceptual Completada!</h3>
            <p className="text-sm text-slate-400 mt-1">
              Has revisado los 15 fundamentos doctrinales clave de Evaluación del Desempeño.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 max-w-sm mx-auto">
            <div className="text-4xl font-black text-indigo-400 mb-1">{percentage}%</div>
            <div className="text-xs font-medium text-slate-300">
              {score} respuestas correctas de {totalQuestions}
            </div>
            <div className="mt-3 text-[11px] text-slate-400 font-medium">
              {percentage >= 80 ? '🌟 Excelente dominio teórico de los conceptos de RRHH.' :
               percentage >= 60 ? '👍 Buen entendimiento; repasa los sesgos y el ciclo EPPO.' :
               '📚 Recomendado revisar las diapositivas de métodos y agentes evaluadores.'}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar Cuestionario</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
