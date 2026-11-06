import React, { useState, useEffect, useRef } from 'react';
import { SLIDES, CHAPTERS_INFO, Slide, QUIZ_QUESTIONS } from './data/presentationData';
import { SlideView } from './components/SlideView';
import { ExplorerView } from './components/ExplorerView';
import { MethodsComparatorView } from './components/MethodsComparatorView';
import { QuizView } from './components/QuizView';
import { GlossaryView } from './components/GlossaryView';
import { 
  Presentation, 
  Map, 
  Scale, 
  HelpCircle, 
  BookMarked, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  GraduationCap,
  Sparkles,
  Command,
  BookOpen,
  Filter
} from 'lucide-react';

type AppMode = 'presentation' | 'explorer' | 'methods' | 'quiz' | 'glossary';

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>('presentation');
  const [selectedChapter, setSelectedChapter] = useState<number>(0); // 0 = all
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
  // Filter active slides based on selected chapter
  const activeSlides: Slide[] = SLIDES.filter(s => selectedChapter === 0 || s.chapterId === selectedChapter);

  // Presentation Timer State
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (currentMode === 'presentation') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          setCurrentSlideIndex(prev => Math.min(prev + 1, activeSlides.length - 1));
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
        }
      }

      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMode, activeSlides.length]);

  const handleGoToSlide = (indexInAll: number) => {
    const targetSlide = SLIDES[indexInAll];
    if (targetSlide) {
      if (selectedChapter !== 0 && targetSlide.chapterId !== selectedChapter) {
        setSelectedChapter(0);
      }
      const newIndex = (selectedChapter === 0 ? SLIDES : SLIDES.filter(s => s.chapterId === selectedChapter))
        .findIndex(s => s.id === targetSlide.id);
      setCurrentSlideIndex(newIndex >= 0 ? newIndex : 0);
      setCurrentMode('presentation');
    }
  };

  const handleChapterFilterChange = (chId: number) => {
    setSelectedChapter(chId);
    setCurrentSlideIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Professional Executive Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Subject Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-indigo-950/60 font-black text-sm tracking-wider">
              AP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold text-white tracking-tight">
                  Administración del Personal
                </h1>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-bold">
                  Clase Presencial 4/11
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Marco Teórico de Gestión del Talento Humano • Chiavenato (Caps. 8, 9, 10 y 11)
              </p>
            </div>
          </div>

          {/* Mode Navigation Tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto max-w-full">
            <button
              onClick={() => setCurrentMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                currentMode === 'presentation'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Presentación ({activeSlides.length})</span>
            </button>

            <button
              onClick={() => setCurrentMode('explorer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                currentMode === 'explorer'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Mapa Conceptual</span>
            </button>

            <button
              onClick={() => setCurrentMode('methods')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                currentMode === 'methods'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Laboratorio Métodos</span>
            </button>

            <button
              onClick={() => setCurrentMode('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                currentMode === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Cuestionario ({QUIZ_QUESTIONS.length})</span>
            </button>

            <button
              onClick={() => setCurrentMode('glossary')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                currentMode === 'glossary'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Glosario Técnico</span>
            </button>
          </div>

          {/* Speaker Presentation Timer & Fullscreen Tools */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Timer Badge */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-indigo-400 hover:text-indigo-300"
                title={isTimerRunning ? "Pausar cronómetro" : "Iniciar cronómetro"}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <span className="font-bold text-slate-200">{formatTimer(timerSeconds)}</span>
              <button
                onClick={handleResetTimer}
                className="text-slate-500 hover:text-slate-300 ml-1"
                title="Reiniciar cronómetro"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              title="Pantalla Completa (F)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Chapter Selection Bar for Class 4/11 */}
        <div className="max-w-7xl mx-auto pt-2.5 mt-2 border-t border-slate-800/60 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-indigo-400" />
              <span>Capítulo:</span>
            </span>
            {CHAPTERS_INFO.map(ch => (
              <button
                key={ch.id}
                onClick={() => handleChapterFilterChange(ch.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all whitespace-nowrap border ${
                  selectedChapter === ch.id
                    ? 'bg-indigo-600/30 text-indigo-200 border-indigo-400 ring-1 ring-indigo-400/50 shadow-sm'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {ch.badge}: {ch.title.split(':')[1] || ch.title}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 font-mono hidden md:inline-block shrink-0">
            <span>Diapositivas activas: <strong className="text-indigo-400">{activeSlides.length}</strong></span>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
        {currentMode === 'presentation' && activeSlides.length > 0 && (
          <SlideView
            slide={activeSlides[Math.min(currentSlideIndex, activeSlides.length - 1)]}
            currentIndex={Math.min(currentSlideIndex, activeSlides.length - 1)}
            totalSlides={activeSlides.length}
            onNext={() => setCurrentSlideIndex(prev => Math.min(prev + 1, activeSlides.length - 1))}
            onPrev={() => setCurrentSlideIndex(prev => Math.max(prev - 1, 0))}
            onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />
        )}

        {currentMode === 'explorer' && (
          <ExplorerView
            onSelectSlide={(idx) => handleGoToSlide(idx)}
            onLaunchPresentation={(idx) => handleGoToSlide(idx)}
          />
        )}

        {currentMode === 'methods' && (
          <MethodsComparatorView />
        )}

        {currentMode === 'quiz' && (
          <QuizView />
        )}

        {currentMode === 'glossary' && (
          <GlossaryView onGoToSlide={(idx) => handleGoToSlide(idx)} />
        )}
      </main>

      {/* Subtle Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 px-4 py-3 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-400" />
          <span>Administración del Personal • Clase Presencial 4/11 • Gestión del Talento Humano</span>
        </div>
        <div className="mt-1 sm:mt-0 flex items-center gap-3 text-[11px] text-slate-500 font-mono">
          <span>Shortcuts: [← / → / Espacio] Navegar • [N] Notas del Orador • [F] Pantalla Completa</span>
        </div>
      </footer>
    </div>
  );
}
