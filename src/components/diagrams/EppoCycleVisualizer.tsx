import React, { useState } from 'react';
import { Target, HeartHandshake, Wrench, PlayCircle, BarChart3, RefreshCw, ArrowRight, UserCheck, CheckCircle } from 'lucide-react';

interface EppoStage {
  step: number;
  title: string;
  shortDesc: string;
  icon: any;
  managerRole: string;
  employeeRole: string;
  keyRule: string;
}

export const EppoCycleVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stages: EppoStage[] = [
    {
      step: 1,
      title: "Objetivos Consensuados",
      shortDesc: "Negociación bilateral de metas del periodo",
      icon: Target,
      managerRole: "Alinea las metas estratégicas de la unidad y facilita la deliberación sin imponer.",
      employeeRole: "Aporta la realidad del puesto y propone metas desafiantes pero alcanzables.",
      keyRule: "Los objetivos se consensan, nunca se bajan autocráticamente de la cima a la base."
    },
    {
      step: 2,
      title: "Compromiso Personal",
      shortDesc: "Aceptación plena y pacto psicológico",
      icon: HeartHandshake,
      managerRole: "Valida la motivación intrínseca y sella el contrato de desempeño formal y psicológico.",
      employeeRole: "Adquiere el compromiso ético y profesional de volcar su energía en los objetivos.",
      keyRule: "El compromiso voluntario del evaluado es la condición sine qua non del sistema."
    },
    {
      step: 3,
      title: "Asignación de Recursos",
      shortDesc: "Garantía de herramientas, tiempo y capacitación",
      icon: Wrench,
      managerRole: "Suministra equipos, presupuesto, personal de apoyo, entrenamiento y asesoría.",
      employeeRole: "Exige y especifica los recursos mínimos viables para no quedar desprotegido.",
      keyRule: "Sin recursos ni medios, los objetivos son simples promesas vacías."
    },
    {
      step: 4,
      title: "Desempeño y Estrategia",
      shortDesc: "Autonomía en los medios y métodos de trabajo",
      icon: PlayCircle,
      managerRole: "Brinda consultoría y orientación actuando como mentor, no como policía vigilante.",
      employeeRole: "Elige con total autonomía su estrategia personal y los medios para cumplir las metas.",
      keyRule: "El desempeño es la estrategia personal que escoge libremente el individuo."
    },
    {
      step: 5,
      title: "Monitoreo y Autocontrol",
      shortDesc: "Medición constante de avance vs. metas",
      icon: BarChart3,
      managerRole: "Acompaña la lectura de indicadores con datos fidedignos y transparentes.",
      employeeRole: "Es el principal responsable de monitorear sus propios avances y desvíos.",
      keyRule: "Siempre que sea posible, el propio evaluado debe autoevaluarse y medir sus brechas."
    },
    {
      step: 6,
      title: "Feedback Continuo y Reciclaje",
      shortDesc: "Evaluación conjunta y rediseño de metas",
      icon: RefreshCw,
      managerRole: "Reconoce logros, analiza obstáculos y co-diseña los nuevos objetivos del ciclo posterior.",
      employeeRole: "Recibe retroalimentación enriquecedora, evalúa su esfuerzo/resultado y renueva su plan.",
      keyRule: "El ciclo nunca termina: se retroalimenta y recicla para elevar continuamente el estándar."
    }
  ];

  const current = stages.find(s => s.step === activeStep) || stages[0];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
            Figura 8.11 • Modelo Dinámico
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">El Ciclo de 6 Etapas de la EPPO / APPO</h4>
        </div>
        <p className="text-xs text-slate-400">
          Haz clic en cada etapa para ver la división de roles entre el líder y el colaborador
        </p>
      </div>

      {/* 6 Stage Navigation Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isSelected = stage.step === activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(stage.step)}
              className={`p-3 rounded-lg border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-emerald-600/25 border-emerald-400 ring-1 ring-emerald-400 shadow-md scale-[1.02]'
                  : 'bg-slate-800/50 border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                }`}>
                  0{stage.step}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
              </div>
              <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-emerald-200' : 'text-slate-200'}`}>
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail */}
      <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800/80 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Etapa {current.step} de 6
              </span>
              <h5 className="text-base font-bold text-slate-100">{current.title}</h5>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{current.shortDesc}</p>
          </div>
          <div className="text-xs text-emerald-300 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/50">
            <strong>Principio Rector:</strong> {current.keyRule}
          </div>
        </div>

        {/* Bilateral roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-blue-950/20 border border-blue-900/40">
            <div className="flex items-center gap-2 font-bold mb-1.5 text-blue-300">
              <UserCheck className="w-4 h-4 text-blue-400" />
              <span>Acción Individual del Gerente</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">{current.managerRole}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
            <div className="flex items-center gap-2 font-bold mb-1.5 text-emerald-300">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Acción Individual del Colaborador</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">{current.employeeRole}</p>
          </div>
        </div>

        {/* Theoretical Insight from Drucker */}
        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
          <span>
            <strong>Rescate Histórico:</strong> La EPPO restaura la concepción original de Peter Drucker (1954): <em>autodirección por autocontrol</em>, donde las bases se ubican en la cima del proceso participativo.
          </span>
          <span className="text-emerald-400 font-mono shrink-0 ml-4">Chiavenato p. 260</span>
        </div>
      </div>
    </div>
  );
};
