import React, { useState } from 'react';
import { UserCheck, Users, ArrowDownCircle, ShoppingBag, Truck, User, Info, CheckCircle2, AlertTriangle } from 'lucide-react';

interface PerspectiveDetail {
  id: string;
  role: string;
  angle: string;
  icon: any;
  color: string;
  focus: string;
  contribution: string;
}

export const Radar360Visualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('autoevaluacion');

  const nodes: PerspectiveDetail[] = [
    {
      id: 'gerente',
      role: 'Gerente / Superior Directo',
      angle: 'Norte (12:00)',
      icon: UserCheck,
      color: 'from-blue-600 to-indigo-600',
      focus: 'Alineación con metas, cumplimiento de directrices, responsabilidad y resultados cuantitativos.',
      contribution: 'Evalúa la eficacia técnica, la rendición de cuentas y el apego a las normas del negocio.'
    },
    {
      id: 'pares',
      role: 'Pares / Compañeros del Mismo Nivel',
      angle: 'Este (03:00)',
      icon: Users,
      color: 'from-teal-600 to-emerald-600',
      focus: 'Cooperación diaria, espíritu de equipo, confianza mutua y resolución colaborativa de problemas.',
      contribution: 'Detecta conductas horizontales que el superior no siempre puede observar en la rutina de trabajo.'
    },
    {
      id: 'subordinados',
      role: 'Subordinados / Colaboradores a Cargo',
      angle: 'Sur (06:00)',
      icon: ArrowDownCircle,
      color: 'from-amber-600 to-orange-600',
      focus: 'Calidad del liderazgo, delegación, empatía, provisión de recursos y retroalimentación recibida.',
      contribution: 'Mide la capacidad de gestión de personas y clima laboral sin el velo de la sumisión jerárquica.'
    },
    {
      id: 'clientes',
      role: 'Clientes Internos y Externos',
      angle: 'Oeste (09:00)',
      icon: ShoppingBag,
      color: 'from-rose-600 to-pink-600',
      focus: 'Calidad de servicio, agilidad de respuesta, empatía, resolución de reclamos y confiabilidad.',
      contribution: 'Garantiza que la evaluación no se encierre en la burocracia interna y mire al usuario real.'
    },
    {
      id: 'proveedores',
      role: 'Proveedores y Asociados',
      angle: 'Noroeste (10:30)',
      icon: Truck,
      color: 'from-cyan-600 to-blue-600',
      focus: 'Cumplimiento de acuerdos, ética en negociaciones, articulación de suministros e integración.',
      contribution: 'Evalúa la interfaz comercial e institucional con el ecosistema de la cadena de valor.'
    },
    {
      id: 'autoevaluacion',
      role: 'Autoevaluación del Colaborador (Centro)',
      angle: 'Centro Axial',
      icon: User,
      color: 'from-violet-600 to-purple-600',
      focus: 'Autocrítica, conciencia de fortalezas, reconocimiento de brechas formativas y aspiraciones.',
      contribution: 'Punto de contraste frente a la constelación de miradas externas: reduce la disonancia cognitiva.'
    }
  ];

  const current = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Figura 8.13 • Enfoque Circular Multidimensional
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Evaluación de 360 Grados (Feedback Circular)</h4>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
          <Info className="w-3.5 h-3.5 text-indigo-400" />
          <span>Haz clic en un actor para explorar su vector evaluativo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive 360 Orbit Visualizer */}
        <div className="lg:col-span-6 flex items-center justify-center p-4">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-indigo-500/30 flex items-center justify-center bg-slate-950/60 shadow-inner">
            {/* Concentric subtle rings */}
            <div className="absolute w-56 h-56 rounded-full border border-slate-800 pointer-events-none" />
            <div className="absolute w-40 h-40 rounded-full border border-slate-800/70 pointer-events-none" />

            {/* Center Node (Autoevaluación) */}
            <button
              onClick={() => setActiveNode('autoevaluacion')}
              className={`relative z-20 w-24 h-24 rounded-full flex flex-col items-center justify-center p-2 text-center transition-all ${
                activeNode === 'autoevaluacion'
                  ? 'bg-violet-600 text-white shadow-xl shadow-violet-950/70 ring-4 ring-violet-400/50 scale-105'
                  : 'bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-violet-500'
              }`}
            >
              <User className="w-6 h-6 mb-1 text-violet-300" />
              <span className="text-[11px] font-bold leading-tight">Autoevaluación</span>
              <span className="text-[9px] opacity-80">(El Evaluado)</span>
            </button>

            {/* Satellite 1: Gerente (Top) */}
            <button
              onClick={() => setActiveNode('gerente')}
              className={`absolute -top-3 z-10 px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-all text-xs font-semibold ${
                activeNode === 'gerente'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md ring-2 ring-blue-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-blue-400'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Gerente</span>
            </button>

            {/* Satellite 2: Pares (Right) */}
            <button
              onClick={() => setActiveNode('pares')}
              className={`absolute -right-3 z-10 px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-all text-xs font-semibold ${
                activeNode === 'pares'
                  ? 'bg-teal-600 text-white border-teal-400 shadow-md ring-2 ring-teal-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-teal-400'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-teal-400" />
              <span>Pares (Colegas)</span>
            </button>

            {/* Satellite 3: Subordinados (Bottom) */}
            <button
              onClick={() => setActiveNode('subordinados')}
              className={`absolute -bottom-3 z-10 px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-all text-xs font-semibold ${
                activeNode === 'subordinados'
                  ? 'bg-amber-600 text-white border-amber-400 shadow-md ring-2 ring-amber-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400'
              }`}
            >
              <ArrowDownCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Subordinados</span>
            </button>

            {/* Satellite 4: Clientes (Left) */}
            <button
              onClick={() => setActiveNode('clientes')}
              className={`absolute -left-3 z-10 px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-all text-xs font-semibold ${
                activeNode === 'clientes'
                  ? 'bg-rose-600 text-white border-rose-400 shadow-md ring-2 ring-rose-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-rose-400'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-rose-400" />
              <span>Clientes</span>
            </button>

            {/* Satellite 5: Proveedores (Top-Left) */}
            <button
              onClick={() => setActiveNode('proveedores')}
              className={`absolute top-8 left-0 z-10 px-2.5 py-1 rounded-full border flex items-center gap-1 transition-all text-[11px] font-semibold ${
                activeNode === 'proveedores'
                  ? 'bg-cyan-600 text-white border-cyan-400 shadow-md ring-2 ring-cyan-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-400'
              }`}
            >
              <Truck className="w-3 h-3 text-cyan-400" />
              <span>Proveedores</span>
            </button>
          </div>
        </div>

        {/* Right: Selected Node Analysis + Pros/Contras Box */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                {current.angle}
              </span>
              <h5 className="font-bold text-sm text-slate-100">{current.role}</h5>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-semibold text-slate-400 block text-[11px]">Enfoque de Evaluación:</span>
                <p className="text-slate-300 leading-relaxed">{current.focus}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[11px]">Aporte al Diagnóstico de Talento:</span>
                <p className="text-slate-300 leading-relaxed">{current.contribution}</p>
              </div>
            </div>
          </div>

          {/* Theoretical Pros & Cons of 360 (Chiavenato p. 268) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-emerald-950/25 border border-emerald-900/40 text-emerald-200">
              <div className="flex items-center gap-1.5 font-bold mb-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pros Teóricos 360°</span>
              </div>
              <ul className="space-y-1 text-[11px] text-emerald-200/90">
                <li>• Sistema comprehensivo y rico.</li>
                <li>• Calidad superior de información.</li>
                <li>• Estimula calidad total y clientes.</li>
                <li>• Potencia autodesarrollo personal.</li>
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-rose-950/25 border border-rose-900/40 text-rose-200">
              <div className="flex items-center gap-1.5 font-bold mb-1.5 text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Contras y Riesgos</span>
              </div>
              <ul className="space-y-1 text-[11px] text-rose-200/90">
                <li>• Complejidad administrativa extrema.</li>
                <li>• Puede intimidar o causar resentimiento.</li>
                <li>• Evaluaciones encontradas o contradictorias.</li>
                <li>• Requiere evaluadores bien entrenados.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
