import React, { useState } from 'react';
import { Slide } from '../data/presentationData';
import { FactorsModelDiagram } from './diagrams/FactorsModelDiagram';
import { PuestosVsCompetenciasDiagram } from './diagrams/PuestosVsCompetenciasDiagram';
import { DimensionsDiagram } from './diagrams/DimensionsDiagram';
import { EvaluatorsMatrix } from './diagrams/EvaluatorsMatrix';
import { Radar360Visualizer } from './diagrams/Radar360Visualizer';
import { TraditionalMethodsMatrix } from './diagrams/TraditionalMethodsMatrix';
import { EppoCycleVisualizer } from './diagrams/EppoCycleVisualizer';
import { SixHRProcessesDiagram } from './diagrams/SixHRProcessesDiagram';
import { PerformanceTrendsDiagram } from './diagrams/PerformanceTrendsDiagram';
import { ContractModalDiagram } from './diagrams/ContractModalDiagram';
import { CompensationSystemDiagram } from './diagrams/CompensationSystemDiagram';
import { BenefitsAndServicesDiagram } from './diagrams/BenefitsAndServicesDiagram';
import { TrainingCycleDiagram } from './diagrams/TrainingCycleDiagram';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Quote, 
  Lightbulb, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

interface SlideViewProps {
  slide: Slide;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SlideView: React.FC<SlideViewProps> = ({
  slide,
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen
}) => {
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);

  const renderDiagram = () => {
    switch (slide.diagramType) {
      case 'compensation':
        return <CompensationSystemDiagram initialTab="total" />;
      case 'compensationFactors':
        return <CompensationSystemDiagram initialTab="factors" />;
      case 'compensationValuation':
        return <CompensationSystemDiagram initialTab="valuation" />;
      case 'compensationBands':
        return <CompensationSystemDiagram initialTab="bands" />;
      case 'compensationVariable':
        return <CompensationSystemDiagram initialTab="variable" />;

      case 'benefits':
      case 'benefitsClassification':
        return <BenefitsAndServicesDiagram initialTab="classification" />;
      case 'benefitsCafeteria':
        return <BenefitsAndServicesDiagram initialTab="cafeteria" />;
      case 'benefitsPrinciples':
        return <BenefitsAndServicesDiagram initialTab="principles" />;
      case 'benefitsCosts':
        return <BenefitsAndServicesDiagram initialTab="costs" />;

      case 'training':
      case 'trainingCycle':
        return <TrainingCycleDiagram initialTab="cycle" />;
      case 'trainingDNC':
        return <TrainingCycleDiagram initialTab="dncLevels" />;
      case 'trainingDesign':
        return <TrainingCycleDiagram initialTab="design7" />;
      case 'trainingKirkpatrick':
        return <TrainingCycleDiagram initialTab="kirkpatrick" />;
      case 'trainingChanges':
        return <TrainingCycleDiagram initialTab="changes" />;

      case 'factorsModel':
        return <FactorsModelDiagram />;
      case 'puestosVsCompetencias':
        return <PuestosVsCompetenciasDiagram />;
      case 'dimensions':
        return <DimensionsDiagram />;
      case 'evaluators':
        return <EvaluatorsMatrix />;
      case 'radar360':
        return <Radar360Visualizer />;
      case 'traditionalMatrix':
      case 'traditionalDeep1':
      case 'traditionalDeep2':
        return <TraditionalMethodsMatrix />;
      case 'eppoCycle':
      case 'eppoConcept':
        return <EppoCycleVisualizer />;
      case 'sixHRProcesses':
        return <SixHRProcessesDiagram />;
      case 'trends':
      case 'competencies':
        return <PerformanceTrendsDiagram />;
      case 'contract':
        return <ContractModalDiagram />;
      case 'conclusions':
        return <SixHRProcessesDiagram />;
      default:
        return null;
    }
  };

  const progressPercentage = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto w-full">
      {/* Slide Navigation Header Bar */}
      <div className="flex items-center justify-between py-2 px-3 bg-slate-900/90 border border-slate-800 rounded-xl mb-4 backdrop-blur shadow-sm">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono text-indigo-400 font-bold bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Diapositiva {currentIndex + 1} / {totalSlides}
          </span>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="hidden sm:inline-block text-slate-300 font-medium truncate max-w-xs md:max-w-md">
            {slide.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              showSpeakerNotes
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm ring-1 ring-amber-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Ver notas del orador para exponer con solvencia (Tecla N)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Notas del Orador</span>
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors"
            title="Pantalla Completa (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <div className="h-4 w-px bg-slate-800 mx-1" />

          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            title="Diapositiva Anterior (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="p-1.5 rounded-lg bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-sm"
            title="Siguiente Diapositiva (→)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="relative flex-1 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Top Badges & Title */}
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
              {slide.tag}
            </span>
            <span className="text-xs text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
              {slide.chapterTitle}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Clase 4/11 • Chiavenato
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {slide.title}
          </h2>

          <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-4xl">
            {slide.subtitle}
          </p>
        </div>

        {/* Slide Content Layout: Split or Centered depending on visual presence */}
        <div className="space-y-6 flex-1">
          {/* Theoretical Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {slide.bulletPoints.map((bp, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{bp.title}</span>
                    </h4>
                    {bp.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800 shrink-0">
                        {bp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {bp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visual Diagram (if present) */}
          {slide.diagramType && (
            <div className="my-5">
              {renderDiagram()}
            </div>
          )}

          {/* Key Theoretical Quote from Chiavenato */}
          {slide.theoryQuote && (
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs text-indigo-200/90 flex items-start gap-3">
              <Quote className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="italic leading-relaxed">
                {slide.theoryQuote}
              </div>
            </div>
          )}

          {/* Core Takeaway Banner */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                Conclusión Teórica Clave
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {slide.keyTakeaway}
              </p>
            </div>
          </div>
        </div>

        {/* Slide Footer with Speaker Notes Drawer */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Idalberto Chiavenato • Capítulo 8</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Enfoque conceptual riguroso (sin anécdotas accesorias)</span>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 w-full md:w-64">
            <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-slate-400 font-semibold">{progressPercentage}%</span>
          </div>
        </div>

        {/* Floating / Expandable Speaker Notes Drawer */}
        {showSpeakerNotes && (
          <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-600/50 shadow-xl text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between text-amber-300 font-bold">
              <span className="flex items-center gap-1.5 uppercase font-mono tracking-wider">
                <FileText className="w-4 h-4" />
                Guía del Disertante / Notas de Exposición
              </span>
              <button
                onClick={() => setShowSpeakerNotes(false)}
                className="text-amber-400/80 hover:text-amber-200 text-xs font-mono"
              >
                Cerrar [Esc]
              </button>
            </div>
            <p className="text-slate-200 leading-relaxed text-xs">
              {slide.speakerNotes}
            </p>
            <div className="text-[11px] text-amber-200/70 font-mono pt-1">
              💡 Tip de presentación: Haz énfasis en el cambio de enfoque: de medir la obediencia estandarizada a potenciar el valor del capital humano.
            </div>
          </div>
        )}
      </div>

      {/* Slide Thumbnails strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 mt-2 px-1">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSlide(idx)}
            className={`h-2 rounded-full transition-all shrink-0 ${
              idx === currentIndex
                ? 'w-8 bg-indigo-500 shadow-sm'
                : 'w-2 bg-slate-800 hover:bg-slate-700'
            }`}
            title={`Ir a Diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
