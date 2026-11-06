import React, { useState } from 'react';
import { SLIDES, Slide } from '../data/presentationData';
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
  Search, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  Lightbulb, 
  CheckCircle2, 
  Filter, 
  SlidersHorizontal,
  FileText
} from 'lucide-react';

interface ExplorerViewProps {
  onSelectSlide: (index: number) => void;
  onLaunchPresentation: (index: number) => void;
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({ onSelectSlide, onLaunchPresentation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number>(0); // 0 = all
  const [expandedSlideId, setExpandedSlideId] = useState<number | null>(1);

  const chaptersFilter = [
    { id: 0, label: 'Todos los Capítulos (Clase 4/11)' },
    { id: 8, label: 'Cap. 8: Evaluación Desempeño' },
    { id: 9, label: 'Cap. 9: Remuneración (Recompensas)' },
    { id: 10, label: 'Cap. 10: Prestaciones y Servicios' },
    { id: 11, label: 'Cap. 11: Entrenamiento de Personal' }
  ];

  const filteredSlides = SLIDES.filter(slide => {
    const matchesChapter = selectedChapter === 0 || slide.chapterId === selectedChapter;
    const matchesSearch = 
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.bulletPoints.some(bp => 
        bp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        bp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesChapter && matchesSearch;
  });

  const renderEmbeddedDiagram = (type?: string) => {
    switch (type) {
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

      case 'factorsModel': return <FactorsModelDiagram />;
      case 'puestosVsCompetencias': return <PuestosVsCompetenciasDiagram />;
      case 'dimensions': return <DimensionsDiagram />;
      case 'evaluators': return <EvaluatorsMatrix />;
      case 'radar360': return <Radar360Visualizer />;
      case 'traditionalMatrix':
      case 'traditionalDeep1':
      case 'traditionalDeep2': return <TraditionalMethodsMatrix />;
      case 'eppoCycle':
      case 'eppoConcept': return <EppoCycleVisualizer />;
      case 'sixHRProcesses':
      case 'conclusions': return <SixHRProcessesDiagram />;
      case 'trends':
      case 'competencies': return <PerformanceTrendsDiagram />;
      case 'contract': return <ContractModalDiagram />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Guía de Estudio & Mapa Teórico
              </span>
              <span className="text-xs text-slate-400">Idalberto Chiavenato • Capítulos 8, 9, 10 y 11</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Explorador Conceptual: Clase Presencial 4/11
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Navega ordenadamente por toda la doctrina teórica de Evaluación del Desempeño, Remuneración, Prestaciones y Entrenamiento. Accede a diagramas interactivos, modelos y notas de cátedra.
            </p>
          </div>

          <button
            onClick={() => onLaunchPresentation(0)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-950/60 transition-all shrink-0 border border-indigo-400/30"
          >
            <BookOpen className="w-4 h-4" />
            <span>Iniciar Modo Presentación</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar conceptos (ej. Efecto Halo, EPPO, 360°, Valencia, Puestos vs Competencias)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Chapter Chips Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {chaptersFilter.map((chap) => (
              <button
                key={chap.id}
                onClick={() => setSelectedChapter(chap.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedChapter === chap.id
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {chap.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Cards Accordion / Detailed Feed */}
      <div className="space-y-4">
        {filteredSlides.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-xl">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-300">No se encontraron conceptos para esa búsqueda</h4>
            <p className="text-xs text-slate-400 mt-1">Prueba con términos como: "360", "Drucker", "Escalas", "Competencias", "Resultados".</p>
          </div>
        ) : (
          filteredSlides.map((slide, index) => {
            const isExpanded = expandedSlideId === slide.id;
            const originalIndex = SLIDES.findIndex(s => s.id === slide.id);
            return (
              <div
                key={slide.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedSlideId(isExpanded ? null : slide.id)}
                  className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {slide.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {slide.category}
                        </span>
                        <span className="text-[10px] text-indigo-400 font-semibold">• {slide.tag}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-100">{slide.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{slide.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLaunchPresentation(originalIndex);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver en Slide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono text-slate-500 px-2 py-1 rounded bg-slate-950">
                      {isExpanded ? 'Plegar [-]' : 'Desplegar [+]'}
                    </span>
                  </div>
                </div>

                {/* Expanded Detailed Content */}
                {isExpanded && (
                  <div className="px-4 md:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 animate-in fade-in duration-200">
                    {/* Theoretical Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {slide.bulletPoints.map((bp, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <h5 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                              <span>{bp.title}</span>
                            </h5>
                            {bp.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800">
                                {bp.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-300 leading-relaxed">{bp.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Integrated Interactive Visual Diagram (if applicable) */}
                    {slide.diagramType && (
                      <div className="mt-4">
                        {renderEmbeddedDiagram(slide.diagramType)}
                      </div>
                    )}

                    {/* Chiavenato Quote & Key Takeaway */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {slide.theoryQuote && (
                        <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-indigo-200/90 italic leading-relaxed">
                          {slide.theoryQuote}
                        </div>
                      )}

                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-300 text-xs block mb-0.5">Conclusión Teórica:</span>
                          <p className="text-slate-300 text-[11px] leading-relaxed">{slide.keyTakeaway}</p>
                        </div>
                      </div>
                    </div>

                    {/* Speaker Notes Callout */}
                    <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs flex items-start gap-2.5 text-amber-200/90">
                      <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300 text-xs block mb-0.5">Nota para el Disertante:</span>
                        <p className="text-slate-300 text-[11px] leading-relaxed">{slide.speakerNotes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
