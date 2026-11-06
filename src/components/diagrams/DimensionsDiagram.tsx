import React, { useState } from 'react';
import { Target, Activity, Award, ShieldAlert, CheckSquare, Brain, Compass } from 'lucide-react';

export const DimensionsDiagram: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<number>(0);

  const dimensions = [
    {
      id: 0,
      title: "1. Los Resultados",
      subtitle: "Metas concretas y finales",
      icon: Target,
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-400",
      desc: "Resultados cuantificables que la organización desea alcanzar dentro de un periodo determinado.",
      examples: ["Volumen y cantidad de producción", "Reducción de mermas y costos", "Cumplimiento estricto de plazos", "Margen y valor de negocio alcanzado"]
    },
    {
      id: 1,
      title: "2. El Desempeño",
      subtitle: "Comportamiento y medios",
      icon: Activity,
      color: "from-emerald-600 to-teal-600",
      textColor: "text-emerald-400",
      desc: "El comportamiento instrumental observable mediante el cual la persona pretende materializar los resultados.",
      examples: ["Espíritu de equipo y cooperación", "Hábitos de seguridad y cumplimiento", "Actitud proactiva e iniciativa", "Responsabilidad en la ejecución"]
    },
    {
      id: 2,
      title: "3. Las Competencias",
      subtitle: "Habilidades y capital intelectual",
      icon: Award,
      color: "from-purple-600 to-pink-600",
      textColor: "text-purple-400",
      desc: "Las destrezas individuales que aportan valor, resuelven problemas y diferencian el capital humano de la organización.",
      examples: ["Conocimiento técnico del trabajo", "Capacidad intuitiva y buen juicio", "Creatividad e innovación aplicada", "Facilidad y agilidad para aprender"]
    },
    {
      id: 3,
      title: "4. Factores Críticos",
      subtitle: "Aspectos clave de supervivencia",
      icon: ShieldAlert,
      color: "from-amber-600 to-orange-600",
      textColor: "text-amber-400",
      desc: "Variables imprescindibles sin las cuales el desempeño general colapsa o pierde viabilidad competitiva.",
      examples: ["Calidad cero defectos en servicio", "Ausencia absoluta de accidentes", "Retención y satisfacción de clientes", "Mantenimiento óptimo de equipamiento"]
    }
  ];

  const criteriaAxis = [
    {
      group: "Habilidades y Rasgos",
      icon: Brain,
      items: ["Conocimiento del puesto y negocio", "Puntualidad y asiduidad", "Lealtad y honestidad", "Buen juicio y discernimiento", "Capacidad de ejecución"]
    },
    {
      group: "Comportamientos Observables",
      icon: Compass,
      items: ["Desempeño riguroso de la tarea", "Espíritu de equipo y cooperación", "Liderazgo situacional", "Hábitos de seguridad", "Soltura e iniciativa"]
    },
    {
      group: "Metas y Resultados",
      icon: CheckSquare,
      items: ["Cantidad y calidad producida", "Satisfacción del cliente", "Reducción de costos", "Rapidez de soluciones", "Cumplimiento de plazos"]
    }
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Marco de Medición • ¿Qué se debe medir?
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Las 4 Dimensiones y los 3 Ejes de Criterios (Fig. 8.4)</h4>
        </div>
        <span className="text-xs text-slate-400">
          Equilibrio entre medios (desempeño) y fines (resultados)
        </span>
      </div>

      {/* 4 Central Dimensions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {dimensions.map((dim) => {
          const Icon = dim.icon;
          const isSelected = selectedDimension === dim.id;
          return (
            <button
              key={dim.id}
              onClick={() => setSelectedDimension(dim.id)}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-slate-800/95 border-indigo-400 shadow-lg ring-1 ring-indigo-400/50 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${dim.color} flex items-center justify-center text-white mb-2.5 shadow-sm`}>
                <Icon className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-sm text-slate-100">{dim.title}</h5>
              <p className={`text-xs ${dim.textColor} font-medium mb-1`}>{dim.subtitle}</p>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{dim.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Dimension Detail Box */}
      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
              Profundización Teórica
            </span>
            <span className="font-bold text-sm text-slate-200">{dimensions[selectedDimension].title}</span>
          </div>
          <p className="text-xs text-slate-300 max-w-xl">{dimensions[selectedDimension].desc}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 md:max-w-md">
          {dimensions[selectedDimension].examples.map((ex, i) => (
            <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
              ✓ {ex}
            </span>
          ))}
        </div>
      </div>

      {/* 3 Criteria Axes of Chiavenato (Figure 8.4) */}
      <div className="border-t border-slate-800/80 pt-4">
        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <span>Los Tres Ejes de Criterios Operativos (Chiavenato, Fig. 8.4)</span>
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {criteriaAxis.map((ax, idx) => {
            const Icon = ax.icon;
            return (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-800/40 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-700/60">
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-slate-200">{ax.group}</span>
                </div>
                <ul className="space-y-1">
                  {ax.items.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
