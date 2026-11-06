import React, { useState } from 'react';
import { Award, Zap, UserCheck, Target, ArrowRight, HelpCircle } from 'lucide-react';

export const FactorsModelDiagram: React.FC = () => {
  const [activeFactor, setActiveFactor] = useState<string | null>('esfuerzo');

  const factorDetails: Record<string, { title: string; desc: string; role: string; hrAdvice: string }> = {
    recompensas: {
      title: "Valor de las Recompensas (Valencia)",
      desc: "¿Qué tanto desea o valora el colaborador los incentivos ofrecidos (monetarios, ascensos, reconocimiento)?",
      role: "Condicionante Motivacional 1",
      hrAdvice: "RRHH debe diseñar paquetes de recompensas flexibles y significativos para el perfil individual del trabajador."
    },
    probabilidad: {
      title: "Percepción Esfuerzo-Recompensa (Instrumentalidad)",
      desc: "La convicción subjetiva de que un mayor esfuerzo se traducirá de manera directa y justa en la recompensa prometida.",
      role: "Condicionante Motivacional 2",
      hrAdvice: "Si el colaborador percibe favoritismos o metas arbitrarias, la instrumentalidad colapsa y el esfuerzo cae a cero."
    },
    esfuerzo: {
      title: "Esfuerzo Individual (Empeño)",
      desc: "La energía, tiempo y dedicación que la persona decide invertir. No equivale automáticamente a desempeño.",
      role: "Insumo Humano Primario",
      hrAdvice: "Distinguir entre empeño (voluntad bruta) y desempeño (resultado útil). El esfuerzo ciego sin dirección produce desgaste sin valor."
    },
    competencias: {
      title: "Competencias de la Persona",
      desc: "Los conocimientos, destrezas, habilidades y aptitudes técnicas y emocionales requeridas para ejecutar la labor.",
      role: "Filtro Capacitador",
      hrAdvice: "El esfuerzo sin competencias genera frustración. Es responsabilidad de la organización capacitar y desarrollar al talento."
    },
    funcion: {
      title: "Percepción de la Función (Claridad de Rol)",
      desc: "El entendimiento exacto de lo que se espera de su posición, qué actividades son prioritarias y cuáles son los criterios de éxito.",
      role: "Filtro Direccional",
      hrAdvice: "La falta de descripción clara del puesto y la ambigüedad de rol desvían el esfuerzo individual hacia tareas accesorias."
    },
    desempeño: {
      title: "Desempeño en el Puesto (Resultado)",
      desc: "El logro concreto, observable y mensurable de las metas que contribuyen directamente a la competitividad del negocio.",
      role: "Salida y Objetivo de la Evaluación",
      hrAdvice: "La evaluación del desempeño debe medir este resultado integral y proporcionar feedback constructivo para el siguiente ciclo."
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Figura 8.1 • Modelo Teórico de Chiavenato
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Factores Condicionantes del Desempeño</h4>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Haz clic en cada componente para analizar su impacto en la dinámica del talento humano.
        </p>
      </div>

      {/* Interactive Diagram Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Motivators */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <button
            onClick={() => setActiveFactor('recompensas')}
            className={`p-3.5 rounded-lg border text-left transition-all ${
              activeFactor === 'recompensas'
                ? 'bg-indigo-600/20 border-indigo-400 shadow-md shadow-indigo-950/50 scale-[1.02]'
                : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-slate-200">Valor de las Recompensas</span>
            </div>
            <p className="text-xs text-slate-400">Valencia subjetiva del incentivo ofrecido</p>
          </button>

          <button
            onClick={() => setActiveFactor('probabilidad')}
            className={`p-3.5 rounded-lg border text-left transition-all ${
              activeFactor === 'probabilidad'
                ? 'bg-indigo-600/20 border-indigo-400 shadow-md shadow-indigo-950/50 scale-[1.02]'
                : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-slate-200">Percepción Esfuerzo-Premio</span>
            </div>
            <p className="text-xs text-slate-400">Instrumentalidad y certidumbre de justicia</p>
          </button>
        </div>

        {/* Center-Left: Effort */}
        <div className="lg:col-span-3 flex flex-col items-center">
          <div className="hidden lg:flex items-center text-slate-500 mb-1">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
          <button
            onClick={() => setActiveFactor('esfuerzo')}
            className={`w-full p-4 rounded-xl border text-center transition-all ${
              activeFactor === 'esfuerzo'
                ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-950/40 ring-1 ring-amber-400'
                : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-100">Esfuerzo Individual</div>
            <div className="text-[11px] text-amber-300/80 mt-0.5 font-medium">"Empeño Bruto"</div>
          </button>
        </div>

        {/* Center-Right: Modulators */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <button
            onClick={() => setActiveFactor('competencias')}
            className={`p-3 rounded-lg border text-left transition-all ${
              activeFactor === 'competencias'
                ? 'bg-emerald-600/20 border-emerald-400 shadow-md'
                : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
              <UserCheck className="w-3.5 h-3.5" />
              Competencias
            </div>
            <div className="text-[11px] text-slate-400">Saber hacer, conocimientos y destrezas</div>
          </button>

          <button
            onClick={() => setActiveFactor('funcion')}
            className={`p-3 rounded-lg border text-left transition-all ${
              activeFactor === 'funcion'
                ? 'bg-teal-600/20 border-teal-400 shadow-md'
                : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="text-xs font-bold text-teal-300 flex items-center gap-1.5 mb-1">
              <Target className="w-3.5 h-3.5" />
              Claridad de Rol
            </div>
            <div className="text-[11px] text-slate-400">Percepción de prioridades de la función</div>
          </button>
        </div>

        {/* Right: Actual Performance */}
        <div className="lg:col-span-3 flex flex-col items-center">
          <button
            onClick={() => setActiveFactor('desempeño')}
            className={`w-full p-4 rounded-xl border text-center transition-all ${
              activeFactor === 'desempeño'
                ? 'bg-indigo-600/30 border-indigo-400 shadow-xl shadow-indigo-950/60 ring-2 ring-indigo-400'
                : 'bg-gradient-to-br from-indigo-950/40 to-slate-900 border-indigo-700/60 hover:border-indigo-500'
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-300 flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-indigo-100">Desempeño Efectivo</div>
            <div className="text-[11px] text-indigo-300 mt-0.5">Aporte de Valor al Negocio</div>
          </button>
        </div>
      </div>

      {/* Explanatory Panel for Selected Factor */}
      {activeFactor && factorDetails[activeFactor] && (
        <div className="mt-5 p-4 rounded-lg bg-slate-800/90 border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-wide uppercase px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                {factorDetails[activeFactor].role}
              </span>
              <h5 className="text-sm font-bold text-slate-100">{factorDetails[activeFactor].title}</h5>
            </div>
            <p className="text-xs text-slate-300">{factorDetails[activeFactor].desc}</p>
          </div>
          <div className="md:max-w-xs p-2.5 rounded bg-slate-950/60 border border-slate-800 text-[11px] text-amber-200/90 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Clave de Gestión:</span>{' '}
              {factorDetails[activeFactor].hrAdvice}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
