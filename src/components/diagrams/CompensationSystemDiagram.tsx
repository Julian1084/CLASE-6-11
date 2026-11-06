import React, { useState } from 'react';
import { DollarSign, Award, Gift, Scale, TrendingUp, ShieldCheck, Layers, CheckCircle2, ChevronRight, BarChart3, Sliders, Briefcase } from 'lucide-react';

interface Props {
  initialTab?: 'total' | 'factors' | 'valuation' | 'bands' | 'variable';
}

export const CompensationSystemDiagram: React.FC<Props> = ({ initialTab = 'total' }) => {
  const [activeTab, setActiveTab] = useState<'total' | 'factors' | 'valuation' | 'bands' | 'variable'>(initialTab);

  // State for job valuation simulator
  const [selectedMethod, setSelectedMethod] = useState<'ranking' | 'grades' | 'factors' | 'points'>('points');
  
  // State for salary bands percentiles
  const [selectedPercentile, setSelectedPercentile] = useState<'p25' | 'p50' | 'p75'>('p50');

  const compensationPillars = [
    {
      title: "1. Remuneración Básica",
      icon: DollarSign,
      color: "from-emerald-600 to-green-700",
      desc: "Salario base mensual o tarifa horaria fija que retribuye el cargo y el tiempo dedicado.",
      detail: "Garantiza estabilidad y seguridad económica mínima para el colaborador.",
      ratio: "50% - 70% del paquete total"
    },
    {
      title: "2. Incentivos Salariales",
      icon: Award,
      color: "from-amber-600 to-orange-700",
      desc: "Programas variables diseñados para recompensar el desempeño de excelencia y cumplimiento de metas.",
      detail: "Bonos por objetivos, comisiones, gratificaciones y participación en utilidades/resultados (PLR).",
      ratio: "15% - 30% del paquete total"
    },
    {
      title: "3. Prestaciones y Beneficios",
      icon: Gift,
      color: "from-blue-600 to-indigo-700",
      desc: "Seguridad social y facilidades orientadas a elevar la calidad de vida y bienestar laboral integral.",
      detail: "Seguro de salud privado, vales de despensa, planes de pensión, guardería y subsidio de transporte.",
      ratio: "15% - 25% del paquete total"
    }
  ];

  const valuationMethods = [
    {
      id: 'ranking',
      name: '1. Jerarquización (Job Ranking)',
      type: 'No cuantitativo (Global)',
      summary: 'Compara los puestos entre sí de manera global y los ordena en una escala jerárquica de mayor a menor complejidad o responsabilidad.',
      process: 'El comité revisa las descripciones de puesto y elabora una lista ordenada sin descomponer el puesto en partes.',
      pros: 'Muy económico, simple, rápido de implementar en pequeñas empresas.',
      cons: 'Altamente subjetivo; no cuantifica la distancia salarial entre un puesto y otro.'
    },
    {
      id: 'grades',
      name: '2. Graduación Previa / Categorías (Job Classification)',
      type: 'No cuantitativo (Global)',
      summary: 'Se definen previamente clases o grados salariales con criterios preestablecidos y luego se encasilla cada puesto en la categoría que le corresponde.',
      process: 'Se redactan descripciones de niveles (ej. Auxiliar, Técnico, Profesional, Jefatura) y se clasifican los puestos existentes.',
      pros: 'Fácil de comunicar, estandarizado, muy utilizado en administración pública y grandes corporaciones.',
      cons: 'Rígido; los puestos fronterizos pueden forzarse en categorías no del todo exactas.'
    },
    {
      id: 'factors',
      name: '3. Comparación de Factores (Factor Comparison)',
      type: 'Cuantitativo (Analítico)',
      summary: 'Descompone los puestos en factores compensables esenciales (requisitos mentales, destreza física, responsabilidad y condiciones de trabajo) usando puestos de referencia (benchmark jobs).',
      process: 'Se ordenan los puestos clave por cada factor y se distribuye el valor monetario del salario entre dichos factores.',
      pros: 'Permite una comparación analítica directa y cuantificable en moneda.',
      cons: 'Complejo de diseñar y difícil de mantener actualizado con la inflación constante.'
    },
    {
      id: 'points',
      name: '4. Valuación por Puntos (Point Rating / Hay System)',
      type: 'Cuantitativo (Analítico - El más utilizado mundialmente)',
      summary: 'Descompone los puestos en factores compensables, subdivididos en grados y ponderados con una escala de puntos numéricos.',
      process: 'Se ponderan los factores (ej. Educación 20%, Responsabilidad 30%), se define el grado de cada puesto y se suma el puntaje total.',
      pros: 'Máxima objetividad matemática, minimiza reclamos de inequidad interna y correlaciona de forma exacta con la curva salarial.',
      cons: 'Requiere capacitación especializada y tiempo de consultoría para su diseño inicial.'
    }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header with Title and Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
              Capítulo 9 • Recompensar a las Personas
            </span>
            <span className="text-xs text-slate-400 font-mono">Chiavenato</span>
          </div>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Estructura Estratégica del Sistema Salarial</h4>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('total')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'total' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Remuneración Total
          </button>
          <button
            onClick={() => setActiveTab('factors')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'factors' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Factores Internos / Externos
          </button>
          <button
            onClick={() => setActiveTab('valuation')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'valuation' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4 Métodos de Valuación
          </button>
          <button
            onClick={() => setActiveTab('bands')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'bands' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Curva y Franjas
          </button>
          <button
            onClick={() => setActiveTab('variable')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'variable' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Variable y Competencias
          </button>
        </div>
      </div>

      {/* TAB 1: REMUNERACIÓN TOTAL */}
      {activeTab === 'total' && (
        <div className="space-y-4">
          <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-xl text-xs text-slate-300 leading-relaxed">
            La <strong className="text-emerald-300">Remuneración Total</strong> es el paquete global que una persona recibe a cambio de su trabajo. Para la organización constituye simultáneamente un <em>costo operativo</em> y una <em>inversión de capital humano</em> destinada a generar retornos de valor:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {compensationPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${p.color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {p.ratio}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-100 mb-1">{p.title}</h5>
                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Alcance:</strong> {p.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: FACTORES INTERNOS VS EXTERNOS */}
      {activeTab === 'factors' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            Según Chiavenato, el salario de un puesto no se fija de forma arbitraria, sino que resulta de la conjunción de <strong className="text-emerald-300">Factores Internos (organizacionales)</strong> y <strong className="text-blue-300">Factores Externos (ambientales)</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Factores Internos */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 font-bold text-emerald-300 pb-2 border-b border-slate-800 uppercase tracking-wider text-xs">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Factores Internos (Organizacionales)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-emerald-400 block mb-0.5">1. Tipología y Valuación del Puesto</strong>
                  Importancia relativa, complejidad de las tareas, nivel de responsabilidad y condiciones laborales.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-emerald-400 block mb-0.5">2. Política Salarial de la Empresa</strong>
                  Decisión estratégica de situarse por encima, a la par o por debajo de la media del mercado.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-emerald-400 block mb-0.5">3. Capacidad Financiera y Presupuesto</strong>
                  Márgenes de ganancia, volumen de ventas y límite de la nómina respecto a los ingresos operativos.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-emerald-400 block mb-0.5">4. Desempeño y Productividad</strong>
                  Capacidad de los colaboradores para agregar valor medible y cumplir metas pactadas.
                </li>
              </ul>
            </div>

            {/* Factores Externos */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 font-bold text-blue-300 pb-2 border-b border-slate-800 uppercase tracking-wider text-xs">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Factores Externos (Ambientales)</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-blue-400 block mb-0.5">1. Situación del Mercado de Trabajo</strong>
                  Ley de oferta y demanda de profesionales: la escasez de talentos especializados eleva la cotización.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-blue-400 block mb-0.5">2. Inflación y Costo de Vida</strong>
                  Deterioro del salario real (poder de compra) que exige reajustes periódicos para sostener el nivel adquisitivo.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-blue-400 block mb-0.5">3. Negociaciones Sindicales y Convenios</strong>
                  Pisos salariales, paritarias y cláusulas de indexación acordadas en convenios colectivos.
                </li>
                <li className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                  <strong className="text-blue-400 block mb-0.5">4. Legislación Laboral y Salario Mínimo</strong>
                  Marco normativo legal obligatorio y cargas sociales impuestas por el Estado.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 4 MÉTODOS DE VALUACIÓN DE PUESTOS */}
      {activeTab === 'valuation' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            La <strong>Valuación de Puestos</strong> es el procedimiento sistemático para determinar el valor relativo de cada puesto y garantizar la <strong className="text-emerald-300">Equidad Interna</strong>. Chiavenato distingue cuatro métodos:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {valuationMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMethod(m.id as any)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  selectedMethod === m.id
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-xs truncate">{m.name.split('(')[0]}</div>
                <div className="text-[10px] text-slate-500 truncate">{m.type.split('(')[0]}</div>
              </button>
            ))}
          </div>

          {(() => {
            const currentMethod = valuationMethods.find(m => m.id === selectedMethod)!;
            return (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 gap-2">
                  <h5 className="font-bold text-emerald-300 text-sm">{currentMethod.name}</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">
                    {currentMethod.type}
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-slate-200 block mb-0.5">Concepto Teórico:</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{currentMethod.summary}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 block mb-0.5">Procedimiento Operativo:</span>
                    <p className="text-slate-400 text-xs leading-relaxed">{currentMethod.process}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/40 text-emerald-300">
                      <strong className="block text-[11px] mb-0.5 text-emerald-400">Ventajas:</strong>
                      <span className="text-[11px] text-emerald-200/90">{currentMethod.pros}</span>
                    </div>
                    <div className="p-2.5 rounded bg-rose-950/20 border border-rose-900/40 text-rose-300">
                      <strong className="block text-[11px] mb-0.5 text-rose-400">Desventajas / Límites:</strong>
                      <span className="text-[11px] text-rose-200/90">{currentMethod.cons}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 4: CURVA SALARIAL Y FRANJAS */}
      {activeTab === 'bands' && (
        <div className="space-y-4 text-xs">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">
                Línea de Regresión de Mercado y Franjas Salariales (Salary Bands)
              </span>
              <div className="flex items-center gap-1">
                {(['p25', 'p50', 'p75'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedPercentile(p)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                      selectedPercentile === p ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {p.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Las empresas trazan una <strong className="text-emerald-400">curva salarial</strong> relacionando los puntos del puesto (eje X) con los salarios monetarios del mercado (eje Y). Sobre esa curva se definen franjas con un Salario Mínimo, un Punto Medio (Midpoint) y un Salario Máximo (Spread habitual de 30% a 50%).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border transition-all ${selectedPercentile === 'p25' ? 'bg-emerald-950/30 border-emerald-500' : 'bg-slate-950 border-slate-800'}`}>
              <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Percentil 25 (P25)</span>
              <h5 className="font-bold text-slate-200 text-xs mb-1">Estrategia Defensiva / Seguidora</h5>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Paga por debajo de la mediana del sector. Adecuada cuando la empresa prioriza eficiencia extrema de costos o cuando hay abundante oferta de mano de obra poco calificada.
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border transition-all ${selectedPercentile === 'p50' ? 'bg-emerald-950/30 border-emerald-500' : 'bg-slate-950 border-slate-800'}`}>
              <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Percentil 50 (P50) - Mediana</span>
              <h5 className="font-bold text-slate-200 text-xs mb-1">Estrategia de Paridad de Mercado</h5>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Paga exactamente la media del mercado. Asegura retención estándar sin inflar sobrecostos laborales y mantiene la equidad externa en equilibrio.
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border transition-all ${selectedPercentile === 'p75' ? 'bg-emerald-950/30 border-emerald-500' : 'bg-slate-950 border-slate-800'}`}>
              <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Percentil 75 (P75)</span>
              <h5 className="font-bold text-slate-200 text-xs mb-1">Estrategia Agresiva / Liderazgo</h5>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Paga por encima del 75% de las empresas del mercado. Permite atraer y retener a los mejores talentos y especialistas del sector que generan ventajas competitivas directas.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: VARIABLE Y POR COMPETENCIAS */}
      {activeTab === 'variable' && (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 pb-1.5 border-b border-slate-800 text-slate-200 font-bold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Participación en Utilidades y Resultados (PLR)</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Mecanismo que distribuye parte del excedente económico de la organización entre los colaboradores, en función del logro de metas globales y departamentales.
              </p>
              <ul className="text-slate-400 text-[11px] space-y-1">
                <li>• No se incorpora al salario básico fijo (no genera pasivo laboral rígido).</li>
                <li>• Estimula el compromiso con el EBITDA y la rentabilidad del negocio.</li>
                <li>• Convierte a los colaboradores en socios estratégicos del éxito colectivo.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-emerald-200 space-y-2">
              <div className="flex items-center gap-2 pb-1.5 border-b border-emerald-900/50 text-emerald-300 font-bold">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Remuneración por Competencias (Skill-based)</span>
              </div>
              <p className="text-emerald-200 text-[11px] leading-relaxed">
                El salario no se fija en función del organigrama o del nombre del puesto, sino del <strong>repertorio certificado de competencias</strong> que la persona domina y aplica.
              </p>
              <ul className="text-emerald-300/90 text-[11px] space-y-1">
                <li>• Fomenta el aprendizaje continuo y la adquisición de nuevas destrezas.</li>
                <li>• Otorga máxima flexibilidad funcional y polivalencia al equipo.</li>
                <li>• La remuneración crece a medida que la persona amplía su valor demostrable.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>Equilibrio dual: Equidad Interna (Valuación de Puestos) + Equidad Externa (Curva de Mercado).</span>
        <span className="text-emerald-400 font-mono font-semibold">Chiavenato • Cap. 9</span>
      </div>
    </div>
  );
};
