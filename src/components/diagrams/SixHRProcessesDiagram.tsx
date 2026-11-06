import React, { useState } from 'react';
import { UserPlus, UserCheck, DollarSign, GraduationCap, Heart, Search, Cpu, ArrowRight } from 'lucide-react';

interface HRProcessNode {
  id: string;
  name: string;
  tag: string;
  icon: any;
  color: string;
  borderActive: string;
  evalContribution: string;
  impactMetrics: string[];
}

export const SixHRProcessesDiagram: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState<string>('desarrollar');

  const processes: HRProcessNode[] = [
    {
      id: 'integrar',
      name: 'Procesos para Sumar (Integrar)',
      tag: 'Reclutamiento y Selección',
      icon: UserPlus,
      color: 'from-blue-600 to-indigo-600',
      borderActive: 'border-blue-400 ring-blue-400',
      evalContribution: 'Encuentra a las personas con las características y actitudes idóneas para los negocios. Alimenta el banco de talentos y el inventario de habilidades de la organización.',
      impactMetrics: ['Mejores perfiles de contratación', 'Mayor precisión en la selección', 'Menor curva de aprendizaje inicial', 'Alineación cultural previa']
    },
    {
      id: 'colocar',
      name: 'Procesos para Colocar',
      tag: 'Diseño de Puestos y Orientación',
      icon: UserCheck,
      color: 'from-cyan-600 to-teal-600',
      borderActive: 'border-cyan-400 ring-cyan-400',
      evalContribution: 'Indica si las personas están bien integradas y acopladas a sus respectivos puestos, tareas y competencias. Detecta disonancias o sobrecalificación en la asignación laboral.',
      impactMetrics: ['Acoplamiento óptimo persona-puesto', 'Claridad de expectativas de rol', 'Adaptación acelerada a la tarea', 'Reducción de fricción funcional']
    },
    {
      id: 'recompensar',
      name: 'Procesos para Recompensar',
      tag: 'Compensación y Beneficios',
      icon: DollarSign,
      color: 'from-emerald-600 to-green-600',
      borderActive: 'border-emerald-400 ring-emerald-400',
      evalContribution: 'Indica si las personas reciben remuneración y recompensas adecuadas en función de sus méritos y aportes concretos al negocio. Sustenta la remuneración variable y bonos.',
      impactMetrics: ['Equidad interna y externa objetiva', 'Mayores incentivos por logro real', 'Aumento de la satisfacción laboral', 'Elevación de la motivación instrumental']
    },
    {
      id: 'desarrollar',
      name: 'Procesos para Desarrollar',
      tag: 'Capacitación y Carrera',
      icon: GraduationCap,
      color: 'from-purple-600 to-pink-600',
      borderActive: 'border-purple-400 ring-purple-400',
      evalContribution: 'Mapea los puntos fuertes que se deben potenciar y las debilidades que deben corregirse mediante entrenamiento. Provee la base para planes de sucesión, ascensos y cuadros de reemplazo.',
      impactMetrics: ['Diagnóstico de necesidades de capacitación (DNC)', 'Menor costo por entrenamiento ineficaz', 'Mayor crecimiento profesional', 'Retención del alto potencial']
    },
    {
      id: 'retener',
      name: 'Procesos para Retener',
      tag: 'Clima, Cultura y Bienestar',
      icon: Heart,
      color: 'from-rose-600 to-red-600',
      borderActive: 'border-rose-400 ring-rose-400',
      evalContribution: 'Revela el nivel de compromiso, satisfacción y resultados de los colaboradores. Permite corregir causas de frustración o estrés antes de que desencadenen fuga de talentos.',
      impactMetrics: ['Mayor permanencia y lealtad', 'Mejor clima organizacional', 'Reducción de la rotación (turnover)', 'Mayor seguridad psicológica']
    },
    {
      id: 'monitorear',
      name: 'Procesos para Monitorear',
      tag: 'Auditoría y Sistemas de RRHH',
      icon: Search,
      color: 'from-amber-600 to-orange-600',
      borderActive: 'border-amber-400 ring-amber-400',
      evalContribution: 'Proporciona la realimentación constante para que las personas conozcan su desempeño y la dirección audite el retorno sobre la inversión de todos los programas de talento.',
      impactMetrics: ['Indicadores fidedignos de gestión', 'Auditoría continua de efectividad de RRHH', 'Bases de datos actualizadas', 'Cierre de brechas estratégicas']
    }
  ];

  const current = processes.find(p => p.id === selectedProcess) || processes[0];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
            Figuras 8.14 y 8.15 • Arquitectura Sistémica
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">La Evaluación como Eje Integrador de RRHH</h4>
        </div>
        <p className="text-xs text-slate-400">
          La evaluación no es una isla: irriga los 6 subsistemas de gestión de talento
        </p>
      </div>

      {/* Centerpiece Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mb-6">
        {/* Core Hub Badge */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-950 border border-indigo-700/60 text-center shadow-lg relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-400 text-indigo-300 flex items-center justify-center mx-auto mb-3 shadow-md">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono tracking-wider text-indigo-300 uppercase block mb-1">
            Núcleo Articulador
          </span>
          <h5 className="text-base font-extrabold text-white">Evaluación del Desempeño</h5>
          <p className="text-xs text-indigo-200/80 mt-1 leading-relaxed">
            Funciona como la «llave maestra» que retroalimenta con datos objetivos a todos los demás procesos organizacionales.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-600/40 text-[11px] text-indigo-300 font-medium">
            Chiavenato p. 269
          </div>
        </div>

        {/* 6 Peripheral Process Buttons */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {processes.map((proc) => {
            const Icon = proc.icon;
            const isSelected = selectedProcess === proc.id;
            return (
              <button
                key={proc.id}
                onClick={() => setSelectedProcess(proc.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? `bg-slate-800/90 ${proc.borderActive} ring-1 shadow-lg scale-[1.02]`
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${proc.color} flex items-center justify-center text-white mb-2 shadow-sm`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-100 truncate">{proc.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{proc.tag}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Process Detail Panel */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800/80 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
              Subsistema Conectado
            </span>
            <h5 className="text-sm font-bold text-slate-100">{current.name}</h5>
          </div>
          <span className="text-xs text-slate-400 font-medium">Área: {current.tag}</span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/70">
          <strong className="text-indigo-300">Aporte de la Evaluación: </strong>
          {current.evalContribution}
        </p>

        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Impactos e Indicadores Clave en este Proceso (Figura 8.15):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {current.impactMetrics.map((m, i) => (
              <div key={i} className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                <span className="truncate">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
