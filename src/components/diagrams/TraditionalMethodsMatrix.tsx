import React, { useState } from 'react';
import { TRADITIONAL_METHODS, TraditionalMethodDetail } from '../../data/presentationData';
import { Layers, ShieldCheck, AlertCircle, FileText, SplitSquareVertical } from 'lucide-react';

export const TraditionalMethodsMatrix: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<TraditionalMethodDetail>(TRADITIONAL_METHODS[0]);

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/40">
            Marco Clásico • Chiavenato pp. 253-259
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Los 5 Métodos Tradicionales de Evaluación</h4>
        </div>
        <p className="text-xs text-slate-400">
          Selecciona un método para examinar su formulación, pros, contras y sesgos
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {TRADITIONAL_METHODS.map((method) => {
          const isSelected = selectedMethod.id === method.id;
          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
                isSelected
                  ? 'bg-amber-600/30 text-amber-200 border-amber-400 ring-1 ring-amber-400 shadow-md'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700/80 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {method.name}
            </button>
          );
        })}
      </div>

      {/* Main Analysis Card */}
      <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800/80 gap-2">
          <div>
            <h5 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>{selectedMethod.name}</span>
            </h5>
            <p className="text-xs text-slate-400 mt-0.5">{selectedMethod.concept}</p>
          </div>
          <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-amber-300">
            <span className="font-semibold text-slate-400">Riesgo de Sesgo: </span>
            {selectedMethod.biasRisk}
          </div>
        </div>

        {/* Structure description */}
        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
          <span className="font-bold text-indigo-300 block mb-1">Estructura Operativa:</span>
          <p className="text-slate-300 leading-relaxed">{selectedMethod.structure}</p>
        </div>

        {/* Pros and Cons Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
            <div className="flex items-center gap-1.5 font-bold mb-2 text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Ventajas Teóricas (Pros)</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-emerald-200/90">
              {selectedMethod.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-900/40">
            <div className="flex items-center gap-1.5 font-bold mb-2 text-rose-300">
              <AlertCircle className="w-4 h-4" />
              <span>Desventajas y Limitaciones (Contras)</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-rose-200/90">
              {selectedMethod.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-xs flex items-start gap-2 text-indigo-200">
          <SplitSquareVertical className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-indigo-300">Veredicto Teórico de RRHH:</span>{' '}
            {selectedMethod.verdict}
          </div>
        </div>
      </div>

      {/* Global Criticism Banner */}
      <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>
          <strong>Crítica Global a los Tradicionales (p. 256):</strong> Son burocráticos, rutinarios, tratan a las personas como piezas estandarizadas y juzgan el pasado sin proyectar el desarrollo futuro.
        </span>
      </div>
    </div>
  );
};
