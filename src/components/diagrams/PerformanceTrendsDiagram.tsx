import React, { useState } from 'react';
import { DollarSign, Smile, Repeat, Lightbulb, Zap, UserCheck, Wrench, Layers } from 'lucide-react';

export const PerformanceTrendsDiagram: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'indicators' | 'competencies' | 'expectancy'>('indicators');

  const indicatorFamilies = [
    {
      title: "1. Indicadores Financieros",
      icon: DollarSign,
      color: "from-emerald-600 to-teal-700",
      border: "border-emerald-500/50",
      items: ["Flujo de caja y liquidez", "Utilidad neta y margen operativo", "Rendimiento sobre la inversión (ROI)", "Relación costo-beneficio"]
    },
    {
      title: "2. Indicadores del Cliente",
      icon: Smile,
      color: "from-blue-600 to-indigo-700",
      border: "border-blue-500/50",
      items: ["Satisfacción de cliente interno y externo", "Tiempos de entrega y SLA", "Competitividad de precios y calidad", "Cuota de mercado fidelizada"]
    },
    {
      title: "3. Indicadores Internos de Proceso",
      icon: Repeat,
      color: "from-cyan-600 to-sky-700",
      border: "border-cyan-500/50",
      items: ["Tiempos de ciclo y lead time", "Índices de seguridad y accidentes cero", "Tasa de retrabajo y mermas", "Eficacia de procesos operativos"]
    },
    {
      title: "4. Indicadores de Innovación",
      icon: Lightbulb,
      color: "from-purple-600 to-pink-700",
      border: "border-purple-500/50",
      items: ["Desarrollo de nuevos productos/servicios", "Proyectos de mejora continua (Kaizen)", "Programas de calidad total", "Investigación, desarrollo y patentes"]
    }
  ];

  const competencies = [
    {
      name: "Competencia Personal",
      icon: UserCheck,
      desc: "Capacidad para aprender continuamente; autorregulación, desaprendizaje de hábitos obsoletos y asimilación de nuevas habilidades.",
      badge: "Aprender a Aprender"
    },
    {
      name: "Competencia Tecnológica",
      icon: Wrench,
      desc: "Asimilación y dominio técnico de las herramientas, maquinarias y plataformas digitales requeridas; multifuncionalidad y versatilidad.",
      badge: "Saber Técnico"
    },
    {
      name: "Competencia Metodológica",
      icon: Zap,
      desc: "Espíritu emprendedor, iniciativa e inventiva para afrontar contingencias, resolver anomalías y proponer soluciones pragmáticas espontáneas.",
      badge: "Resolución de Problemas"
    },
    {
      name: "Competencia Social",
      icon: Layers,
      desc: "Capacidad de relacionamiento interpersonal, empatía, negociación constructiva, comunicación asertiva y sinergia en equipos de alto rendimiento.",
      badge: "Inteligencia Interpersonal"
    }
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
            Tendencias y Futuro • Chiavenato pp. 261-263
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Nuevos Enfoques y Macrocompetencias</h4>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveSection('indicators')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeSection === 'indicators' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4 Familias de Indicadores
          </button>
          <button
            onClick={() => setActiveSection('competencies')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeSection === 'competencies' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4 Macrocompetencias
          </button>
          <button
            onClick={() => setActiveSection('expectancy')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeSection === 'expectancy' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Teoría de la Expectación
          </button>
        </div>
      </div>

      {activeSection === 'indicators' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-300">
            Los indicadores deben ser <strong>sistémicos y balanceados</strong>. Ningún indicador aislado es suficiente. Se estructuran en cascada desde la estrategia global hacia el individuo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {indicatorFamilies.map((fam, idx) => {
              const Icon = fam.icon;
              return (
                <div key={idx} className={`p-4 rounded-xl bg-slate-950/70 border ${fam.border} flex flex-col justify-between`}>
                  <div>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${fam.color} flex items-center justify-center text-white mb-2.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="font-bold text-sm text-slate-100 mb-2">{fam.title}</h5>
                    <ul className="space-y-1.5">
                      {fam.items.map((it, i) => (
                        <li key={i} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeSection === 'competencies' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-300">
            La evaluación moderna debe suministrar retroalimentación suficiente para que cada profesional autodiagnostique sus 4 dimensiones de competencia:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {competencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="font-bold text-sm text-slate-100">{comp.name}</h5>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                        {comp.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{comp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeSection === 'expectancy' && (
        <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <Zap className="w-5 h-5 text-amber-400" />
            <div>
              <h5 className="font-bold text-sm text-slate-100">La Noción de Expectación y Valencia Positiva (Chiavenato p. 262)</h5>
              <p className="text-xs text-slate-400">Teoría de las contingencias de la motivación aplicada a la evaluación del desempeño</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-indigo-300 uppercase block mb-1">1. Esfuerzo Productivo</span>
              <p className="text-slate-300 text-[11px]">
                El trabajador invierte energía personal con base en la expectativa de que logrará un desempeño de excelencia.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-amber-300 uppercase block mb-1">2. Instrumentalidad</span>
              <p className="text-slate-300 text-[11px]">
                La certeza inquebrantable de que el desempeño de excelencia conducirá necesariamente al resultado final deseado.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-emerald-300 uppercase block mb-1">3. Valencia de Recompensa</span>
              <p className="text-slate-300 text-[11px]">
                Valor positivo de las recompensas deseadas: salario variable, promoción, reconocimiento público y autonomía.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/50 text-xs text-indigo-200">
            <strong>Principio para RRHH:</strong> Para que la evaluación del desempeño dinamice a las personas, la organización debe vincularla con incentivos tangibles de corto plazo (remuneración flexible o reconocimiento formal).
          </div>
        </div>
      )}
    </div>
  );
};
