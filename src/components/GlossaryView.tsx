import React, { useState } from 'react';
import { CONCEPT_GLOSSARY, ConceptGlossaryItem } from '../data/presentationData';
import { Search, BookMarked, ArrowRight, Tag, Bookmark } from 'lucide-react';

interface GlossaryViewProps {
  onGoToSlide: (slideId: number) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onGoToSlide }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number>(0); // 0 = all

  const chapterFilters = [
    { id: 0, label: 'Todos los Capítulos' },
    { id: 8, label: 'Cap. 8: Evaluación' },
    { id: 9, label: 'Cap. 9: Remuneración' },
    { id: 10, label: 'Cap. 10: Prestaciones' },
    { id: 11, label: 'Cap. 11: Entrenamiento' }
  ];

  const filteredItems = CONCEPT_GLOSSARY.filter(item => {
    const matchesChapter = selectedChapter === 0 || item.chapterId === selectedChapter;
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.practicalImplication.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesChapter && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto w-full pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Léxico Especializado
              </span>
              <span className="text-xs text-slate-400">Diccionario Teórico de RRHH</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Glosario de Conceptos Fundamentales
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Fichas conceptuales rápidas de los términos técnicos de Gestión del Talento Humano para enriquecer el vocabulario de tu presentación.
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar término (ej. Halo, EPPO, Instrumentalidad, Valencia)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {chapterFilters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedChapter === ch.id
                    ? 'bg-indigo-600 text-white border-indigo-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Flashcards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/50 transition-all shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                  {item.category}
                </span>
                <Bookmark className="w-3.5 h-3.5 text-slate-500" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-100">{item.term}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.definition}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-300">
                <span className="font-semibold text-amber-300 block mb-0.5">Implicación en RRHH:</span>
                {item.practicalImplication}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px]">En Slide {item.relatedSlideId}</span>
              <button
                onClick={() => onGoToSlide(item.relatedSlideId - 1)}
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 text-[11px]"
              >
                <span>Ir al Tema</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
