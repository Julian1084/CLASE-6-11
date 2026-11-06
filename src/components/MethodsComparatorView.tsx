import React, { useState } from 'react';
import { TRADITIONAL_METHODS } from '../data/presentationData';
import { TraditionalMethodsMatrix } from './diagrams/TraditionalMethodsMatrix';
import { EppoCycleVisualizer } from './diagrams/EppoCycleVisualizer';
import { Radar360Visualizer } from './diagrams/Radar360Visualizer';
import { 
  ArrowLeftRight, 
  Layers, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Sliders, 
  Scale, 
  Eye,
  FileCheck
} from 'lucide-react';

export const MethodsComparatorView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'simulator' | 'modern'>('matrix');

  // Halo effect simulation state
  const [haloRating, setHaloRating] = useState<number>(5); // 1 to 5
  const [enableHaloSync, setEnableHaloSync] = useState<boolean>(true);
  const [customRatings, setCustomRatings] = useState<Record<string, number>>({
    produccion: 5,
    calidad: 5,
    conocimiento: 5,
    cooperacion: 5,
    creatividad: 5
  });

  const factors = [
    { id: 'produccion', name: 'Producción (Cantidad de trabajo)' },
    { id: 'calidad', name: 'Calidad (Esmero en el trabajo)' },
    { id: 'conocimiento', name: 'Conocimiento del trabajo' },
    { id: 'cooperacion', name: 'Cooperación (Relaciones humanas)' },
    { id: 'creatividad', name: 'Creatividad (Capacidad de innovar)' }
  ];

  const handleGlobalHaloChange = (value: number) => {
    setHaloRating(value);
    if (enableHaloSync) {
      setCustomRatings({
        produccion: value,
        calidad: value,
        conocimiento: value,
        cooperacion: value,
        creatividad: value
      });
    }
  };

  const handleSingleFactorChange = (id: string, value: number) => {
    setCustomRatings(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const gradeLabels: Record<number, { text: string; color: string }> = {
    1: { text: "Malo / Pésimo", color: "text-rose-400" },
    2: { text: "Tolerable / Regular bajo", color: "text-amber-400" },
    3: { text: "Regular / Satisfactorio", color: "text-yellow-400" },
    4: { text: "Bueno / Superior", color: "text-blue-400" },
    5: { text: "Excelente / Óptimo", color: "text-emerald-400" }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                Laboratorio Teórico Comparativo
              </span>
              <span className="text-xs text-slate-400">Métodos Tradicionales vs. Métodos Modernos</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Evolución Metodológica de la Evaluación
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Compara rigurosamente los métodos tradicionales (escalas, elección forzada, investigación de campo) con los enfoques participativos contemporáneos (EPPO y 360°).
            </p>
          </div>

          {/* Subview Selector */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'matrix' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Matriz Comparativa</span>
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'simulator' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Simulador Efecto Halo</span>
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'modern' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Modelos Modernos (EPPO/360)</span>
            </button>
          </div>
        </div>
      </div>

      {/* View 1: Comparative Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-6">
          {/* High-level contrast card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Layers className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="text-base font-bold text-slate-100">Métodos Tradicionales</h4>
                  <p className="text-xs text-slate-400">Escalas gráficas, elección forzada, investigación de campo, listas</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Orientación al pasado:</strong> Evalúan lo que el colaborador ya hizo (retrospectivo).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Rol del colaborador:</strong> Sujeto pasivo juzgado por un evaluador supremo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Instrumento:</strong> Formularios burocráticos, ritual anual y estandarización homogénea.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Finalidad:</strong> Control, juzgar méritos pasados o sancionar deficiencias.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-900/50 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-indigo-900/40">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <div>
                  <h4 className="text-base font-bold text-indigo-100">Métodos Modernos</h4>
                  <p className="text-xs text-indigo-300/80">Evaluación participativa por objetivos (EPPO) y 360° circular</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-indigo-200/90">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Orientación al futuro:</strong> Planificación de metas desafiantes y desarrollo de competencias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Rol del colaborador:</strong> Activo, corresponsable, con autonomía en la elección de medios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Instrumento:</strong> Contrato de desempeño (formal y psicológico) y retroalimentación continua.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Finalidad:</strong> Agregar valor, autodiagnóstico, motivación y alineación estratégica.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Traditional Methods Tabular Component */}
          <TraditionalMethodsMatrix />
        </div>
      )}

      {/* View 2: Halo Effect Simulator */}
      {activeTab === 'simulator' && (
        <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-6 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Sesgo Cognitivo Mayor • Chiavenato p. 255
              </span>
              <h3 className="text-lg font-bold text-slate-100 mt-1">
                Simulador del Efecto de Generalización (Halo Effect)
              </h3>
            </div>
            <div className="text-xs text-slate-400 max-w-sm">
              Demuestra cómo una percepción global preconcebida contamina la calificación en escalas gráficas.
            </div>
          </div>

          {/* Explanatory banner */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Definición Teórica:</strong> El <em>Efecto Halo</em> ocurre cuando el evaluador tiene una impresión general favorable o desfavorable de un individuo. Si le otorga "Excelente" en un factor llamativo (o "Pésimo"), tiende automáticamente a calificar de forma idéntica todos los demás factores independientes, anulando la veracidad diagnóstica.
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Impresión General del Evaluador (Sesgo Global):
              </span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleGlobalHaloChange(val)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      haloRating === val
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Grado {val}: {gradeLabels[val].text}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={enableHaloSync}
                  onChange={(e) => setEnableHaloSync(e.target.checked)}
                  className="rounded border-slate-700 text-indigo-600 focus:ring-0"
                />
                <span>Simular Contaminación Total (Efecto Halo Activo)</span>
              </label>
            </div>
          </div>

          {/* Visual Scale Simulation (Table like Fig 8.5) */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-950">
                  <th className="p-3 text-slate-300 font-semibold w-1/3">Factor de Desempeño</th>
                  <th className="p-3 text-center text-rose-400 font-semibold">1. Malo</th>
                  <th className="p-3 text-center text-amber-400 font-semibold">2. Tolerable</th>
                  <th className="p-3 text-center text-yellow-400 font-semibold">3. Regular</th>
                  <th className="p-3 text-center text-blue-400 font-semibold">4. Bueno</th>
                  <th className="p-3 text-center text-emerald-400 font-semibold">5. Excelente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {factors.map((factor) => {
                  const currentVal = customRatings[factor.id];
                  return (
                    <tr key={factor.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-semibold text-slate-200">{factor.name}</td>
                      {[1, 2, 3, 4, 5].map((colVal) => (
                        <td key={colVal} className="p-3 text-center">
                          <button
                            onClick={() => {
                              setEnableHaloSync(false);
                              handleSingleFactorChange(factor.id, colVal);
                            }}
                            className={`w-7 h-7 rounded-full text-xs font-bold transition-all ${
                              currentVal === colVal
                                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300 scale-110'
                                : 'bg-slate-800/60 text-slate-500 hover:text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            {colVal}
                          </button>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Theoretical remedy: Forced Choice */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-indigo-400 block mb-0.5">
                ¿Cómo neutralizaron los teóricos este defecto?
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Creando el método de <strong>Elección Forzada</strong>, que oculta el valor de las frases para obligar al evaluador a describir conductas reales sin poder distorsionar los factores por simpatía o aversión global.
              </p>
            </div>
            <span className="text-indigo-400 font-mono text-[11px] shrink-0">Chiavenato p. 256</span>
          </div>
        </div>
      )}

      {/* View 3: Modern Models Showcase */}
      {activeTab === 'modern' && (
        <div className="space-y-6">
          <EppoCycleVisualizer />
          <Radar360Visualizer />
        </div>
      )}
    </div>
  );
};
