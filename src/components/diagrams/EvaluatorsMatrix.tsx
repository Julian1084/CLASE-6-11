import React, { useState } from 'react';
import { EVALUATOR_MODELS, EvaluatorModel } from '../../data/presentationData';
import { Users, User, UserCheck, ArrowUpCircle, GitFork, Building2, UserMinus, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const EvaluatorsMatrix: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<EvaluatorModel>(EVALUATOR_MODELS[0]);

  const getIcon = (title: string) => {
    switch (title) {
      case "Autoevaluación": return User;
      case "El Gerente de Línea": return UserCheck;
      case "El Individuo y el Gerente": return GitFork;
      case "El Equipo de Trabajo": return Users;
      case "Evaluación Circular (360°)": return Users;
      case "Evaluación Hacia Arriba": return ArrowUpCircle;
      case "Comisión de Evaluación": return Building2;
      case "Órgano de Recursos Humanos": return UserMinus;
      default: return User;
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Espectro Teórico • ¿Quién debe evaluar?
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Las 8 Alternativas de Agentes Evaluadores</h4>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>De la Autocracia Centralizada a la Democracia Participativa</span>
        </div>
      </div>

      {/* Grid of the 8 options */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        {EVALUATOR_MODELS.map((model, idx) => {
          const Icon = getIcon(model.title);
          const isSelected = selectedModel.title === model.title;
          const isObsolete = model.title.includes("Órgano de Recursos Humanos");
          return (
            <button
              key={idx}
              onClick={() => setSelectedModel(model)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-600/25 border-indigo-400 ring-1 ring-indigo-400 shadow-md scale-[1.02]'
                  : isObsolete
                  ? 'bg-slate-950/50 border-rose-950/50 text-slate-400 hover:border-rose-900'
                  : 'bg-slate-800/50 border-slate-700/70 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : isObsolete ? 'text-rose-400' : 'text-slate-400'}`} />
                <span className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {model.title}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">{model.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Detailed Card for Selected Model */}
      <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-800/80 gap-2">
          <div>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
              Modelo Seleccionado
            </span>
            <h5 className="text-base font-bold text-slate-100 mt-1">{selectedModel.title}</h5>
            <p className="text-xs text-indigo-400 font-medium">{selectedModel.subtitle}</p>
          </div>
          <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="font-semibold text-slate-300">Contexto Típico: </span>
            {selectedModel.context}
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <span className="font-semibold text-slate-300 block mb-1">Rol Operativo y Mecánica:</span>
            <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-md border border-slate-800/60">
              {selectedModel.role}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-emerald-200">
              <div className="flex items-center gap-1.5 font-bold mb-1 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Fortalezas Teóricas (Pros)</span>
              </div>
              <p className="text-[11px] leading-relaxed text-emerald-200/90">{selectedModel.pros}</p>
            </div>

            <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-rose-200">
              <div className="flex items-center gap-1.5 font-bold mb-1 text-rose-300">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Riesgos y Limitaciones (Contras)</span>
              </div>
              <p className="text-[11px] leading-relaxed text-rose-200/90">{selectedModel.cons}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
