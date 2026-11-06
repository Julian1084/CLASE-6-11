import React, { useState } from 'react';
import { Briefcase, Sparkles, CheckCircle2, TrendingUp, Cpu, Gauge, Layers } from 'lucide-react';

export const PuestosVsCompetenciasDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparative' | 'puestos' | 'competencias'>('comparative');

  const rows = [
    {
      criterion: "Objetivo Primario",
      icon: Layers,
      puestos: "Evaluar el desempeño en el puesto específico.",
      competencias: "Evaluar competencias individuales o grupales aplicadas."
    },
    {
      criterion: "Objetivo Final",
      icon: CheckCircle2,
      puestos: "Trabajos debidamente desempeñados por los ocupantes de forma reglada.",
      competencias: "Competencias debidamente aplicadas por las personas a los desafíos del negocio."
    },
    {
      criterion: "Criterio de Eficiencia",
      icon: Gauge,
      puestos: "Ocupantes adecuados que se adaptan a los perfiles fijos de los puestos.",
      competencias: "Competencias adecuadas y versátiles para el modelo estratégico de la organización."
    },
    {
      criterion: "Criterio de Eficacia",
      icon: TrendingUp,
      puestos: "Fuerza de trabajo que se ciñe mecánicamente al conjunto de puestos.",
      competencias: "Resultado directo de las competencias aplicadas a la ventaja competitiva."
    },
    {
      criterion: "Indicador Central",
      icon: Briefcase,
      puestos: "Puestos ocupados y bien desempeñados según el manual de funciones.",
      competencias: "Personas que cuentan con competencias esenciales para el éxito del negocio."
    },
    {
      criterion: "Rendimiento sobre Inversión (ROI)",
      icon: Sparkles,
      puestos: "Puestos debidamente ocupados / Costos de evaluación del desempeño.",
      competencias: "Competencias aplicables y aplicadas / Costos de evaluación del desempeño."
    }
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Figura 8.2 • Paradigmas de Gestión
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Base en Puestos vs. Base en Competencias</h4>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('comparative')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'comparative' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Vista Paralela
          </button>
          <button
            onClick={() => setActiveTab('puestos')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'puestos' ? 'bg-slate-800 text-slate-200' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Enfoque Puestos
          </button>
          <button
            onClick={() => setActiveTab('competencias')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'competencias' ? 'bg-teal-700 text-teal-100' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Enfoque Competencias
          </button>
        </div>
      </div>

      {activeTab === 'comparative' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-950/70">
                <th className="p-3 text-slate-400 font-semibold uppercase tracking-wider w-1/4">Dimensión Teórica</th>
                <th className="p-3 text-slate-300 font-bold bg-slate-800/40 border-x border-slate-800 w-[37.5%]">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <span>Con Base en los Puestos (Tradicional)</span>
                  </div>
                </th>
                <th className="p-3 text-teal-300 font-bold bg-teal-950/30 w-[37.5%]">
                  <div className="flex items-center gap-1.5 text-teal-300">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Con Base en Competencias (Contemporáneo)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {rows.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3 font-semibold text-slate-300">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{row.criterion}</span>
                      </div>
                    </td>
                    <td className="p-3 text-slate-400 bg-slate-800/20 border-x border-slate-800/60 leading-relaxed">
                      {row.puestos}
                    </td>
                    <td className="p-3 text-teal-200/90 bg-teal-950/15 font-medium leading-relaxed">
                      {row.competencias}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'puestos' && (
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-slate-300 pb-3 border-b border-slate-700">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <div>
              <h5 className="font-bold text-sm text-slate-100">Modelo Mecanicista Tradicional: Enfoque en Puestos</h5>
              <p className="text-xs text-slate-400">Premisa: El puesto antecede a la persona; la estabilidad y la estandarización rigen el sistema.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {rows.map((r, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-semibold text-indigo-300 block mb-1">{r.criterion}</span>
                <p className="text-slate-300 leading-relaxed">{r.puestos}</p>
              </div>
            ))}
          </div>
          <div className="p-3 rounded bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200/90">
            <strong>Crítica teórica:</strong> Trata a la organización como una máquina estática. Pierde agilidad en mercados hipercompetitivos donde los puestos cambian más rápido que los manuales.
          </div>
        </div>
      )}

      {activeTab === 'competencias' && (
        <div className="bg-teal-950/30 border border-teal-800/50 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-teal-300 pb-3 border-b border-teal-800/40">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <div>
              <h5 className="font-bold text-sm text-teal-100">Modelo Orgánico Contemporáneo: Enfoque en Competencias</h5>
              <p className="text-xs text-teal-300/80">Premisa: Las personas aportan capital intelectual y competencias adaptativas al negocio.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {rows.map((r, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-teal-900/40">
                <span className="font-semibold text-teal-300 block mb-1">{r.criterion}</span>
                <p className="text-teal-100/90 leading-relaxed">{r.competencias}</p>
              </div>
            ))}
          </div>
          <div className="p-3 rounded bg-teal-900/40 border border-teal-700/50 text-xs text-teal-200">
            <strong>Ventaja competitiva:</strong> Flexibilidad total. Permite que el colaborador aplique sus capacidades para innovar, reconfigurar procesos y resolver contingencias en tiempo real.
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span>Síntesis: El ROI moderno se mide por la tasa de competencias aplicadas versus el costo de evaluar.</span>
        <span className="text-indigo-400 font-medium">Chiavenato p. 247</span>
      </div>
    </div>
  );
};
