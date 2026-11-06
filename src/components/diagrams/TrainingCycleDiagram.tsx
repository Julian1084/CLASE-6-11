import React, { useState } from 'react';
import { GraduationCap, Search, Compass, Play, Award, CheckCircle2, TrendingUp, RefreshCw, Calculator, HelpCircle, Layers } from 'lucide-react';

interface Props {
  initialTab?: 'cycle' | 'dncLevels' | 'design7' | 'kirkpatrick' | 'changes';
}

export const TrainingCycleDiagram: React.FC<Props> = ({ initialTab = 'cycle' }) => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'cycle' | 'dncLevels' | 'design7' | 'kirkpatrick' | 'changes'>(initialTab);

  // Interactive ROI Calculator State for Kirkpatrick Level 4
  const [programCost, setProgramCost] = useState<number>(10000);
  const [programGain, setProgramGain] = useState<number>(25000);

  const calculatedRoi = programCost > 0
    ? Math.round(((programGain - programCost) / programCost) * 100)
    : 0;

  const cycleStages = [
    {
      step: 1,
      name: "1. Diagnóstico de Necesidades (DNC)",
      tag: "Inventario de Carencias",
      icon: Search,
      color: "from-blue-600 to-indigo-600",
      what: "¿Qué debe enseñarse y a quién?",
      desc: "Diagnóstico sistemático de las brechas entre el desempeño actual y el deseado. No es improvisar ni adivinar: se sustenta rigurosamente en la Evaluación del Desempeño (Cap. 8), análisis de puestos y problemas de calidad.",
      tools: ["Evaluación del desempeño (Cap. 8)", "Observación y quejas de clientes", "Análisis de puestos (Cap. 7)", "Entrevistas y comités con supervisores"]
    },
    {
      step: 2,
      name: "2. Diseño del Programa de Entrenamiento",
      tag: "Planificación Pedagógica",
      icon: Compass,
      color: "from-amber-600 to-orange-600",
      what: "¿Cómo, quién, cuándo y dónde enseñar?",
      desc: "Estructuración metódica del plan respondiendo a las 7 preguntas curriculares: objetivos instruccionales, contenidos, instructores (internos/externos), tecnología educativa y presupuesto asignado.",
      tools: ["Población meta (aprendices)", "Métodos didácticos y tecnologías", "Contenidos y módulos", "Lugar (en el puesto vs. aula digital)"]
    },
    {
      step: 3,
      name: "3. Ejecución / Conducción del Programa",
      tag: "Aplicación Práctica",
      icon: Play,
      color: "from-emerald-600 to-teal-600",
      what: "¿Cómo se conduce la instrucción?",
      desc: "Puesta en práctica de la acción formativa mediante la interacción pedagógica entre facilitador y aprendices. Requiere materiales adecuados, motivación de los participantes y aplicabilidad laboral.",
      tools: ["Instrucción en el puesto (On the Job)", "Cursos presenciales y talleres vivenciales", "E-learning y plataformas digitales", "Simuladores y rotación de puestos"]
    },
    {
      step: 4,
      name: "4. Evaluación de los Resultados",
      tag: "Medición del Impacto y ROI",
      icon: Award,
      color: "from-purple-600 to-pink-600",
      what: "¿Qué resultados concretos se lograron?",
      desc: "Verificación de si el entrenamiento modificó efectivamente el comportamiento y si resolvió las carencias diagnosticadas. Es el cierre del ciclo y la justificación financiera de la inversión.",
      tools: ["Modelo de 4 niveles de Kirkpatrick", "Reducción de mermas y retrabajo", "Incremento de productividad", "Cálculo del Retorno sobre la Inversión (ROI)"]
    }
  ];

  const dncThreeLevels = [
    {
      level: "1. Análisis Organizacional",
      badge: "Nivel Macro",
      color: "from-indigo-600 to-blue-700",
      question: "¿Dónde se necesita entrenamiento dentro de la organización?",
      desc: "Examina los objetivos estratégicos de la empresa a largo plazo, su misión, su visión y sus prioridades de expansión o transformación digital.",
      focus: "Determina si la empresa en su conjunto dispone del capital humano necesario para competir con éxito en su mercado."
    },
    {
      level: "2. Análisis de los Recursos Humanos",
      badge: "Nivel Medio",
      color: "from-purple-600 to-pink-700",
      question: "¿Quién necesita ser entrenado y qué competencias faltan?",
      desc: "Analiza el inventario actual de talentos, competencias del personal, perfiles de escolaridad, habilidades técnicas y potencial de desarrollo futuro.",
      focus: "Identifica las brechas colectivas o departamentales de competencias para programar planes de carrera e itinerarios formativos."
    },
    {
      level: "3. Análisis de las Operaciones y Tareas",
      badge: "Nivel Micro (Puestos)",
      color: "from-emerald-600 to-teal-700",
      question: "¿Qué habilidades específicas exige la tarea en el puesto de trabajo?",
      desc: "Contrasta los requisitos formales de la descripción del puesto con el rendimiento real observado en la Evaluación del Desempeño (Cap. 8).",
      focus: "Diseña el contenido específico del curso: destrezas mecánicas, procedimientos operativos, software o atención al cliente."
    }
  ];

  const designSevenQuestions = [
    { q: "1. ¿A quién entrenar?", resp: "Personal seleccionado (aprendices según brechas de evaluación)." },
    { q: "2. ¿Quién debe entrenar?", resp: "Facilitador o instructor (líder interno o consultor externo especialista)." },
    { q: "3. ¿Sobre qué entrenar?", resp: "Contenido programático (temario, saberes teóricos y destrezas prácticas)." },
    { q: "4. ¿Dónde entrenar?", resp: "Lugar físico o virtual (en el puesto de trabajo, aula o plataforma LMS)." },
    { q: "5. ¿Cómo entrenar?", resp: "Métodos y recursos didácticos (talleres, simuladores, casos, e-learning)." },
    { q: "6. ¿Cuándo entrenar?", resp: "Época, calendario y horario (jornada laboral, contraturno, módulos)." },
    { q: "7. ¿Para qué entrenar?", resp: "Objetivos de aprendizaje y resultados esperados para el negocio." }
  ];

  const kirkpatrickLevels = [
    {
      level: 1,
      name: "Reacción (Satisfacción)",
      focus: "¿Les gustó el curso?",
      measure: "Encuestas de satisfacción inmediata sobre el instructor, la claridad pedagógica, las instalaciones y el material didáctico.",
      badge: "Inmediato"
    },
    {
      level: 2,
      name: "Aprendizaje (Conocimientos)",
      focus: "¿Qué aprendieron realmente?",
      measure: "Exámenes teóricos y pruebas prácticas pre y post-entrenamiento que cuantifican la adquisición de saberes y destrezas.",
      badge: "Cognitivo"
    },
    {
      level: 3,
      name: "Comportamiento (Transferencia)",
      focus: "¿Aplican lo aprendido en su puesto?",
      measure: "Evaluación en el puesto de trabajo realizada a los 3 a 6 meses junto al supervisor; observa si los nuevos hábitos se sostienen en la rutina.",
      badge: "Conductual"
    },
    {
      level: 4,
      name: "Resultados en el Negocio (ROI)",
      focus: "¿Qué impacto financiero o de calidad tuvo?",
      measure: "Aumento de ventas, reducción de scrap/mermas, disminución de accidentes laborales y cálculo formal del Retorno sobre la Inversión.",
      badge: "Estratégico / ROI"
    }
  ];

  const behavioralChanges = [
    {
      title: "1. Transmisión de Información",
      desc: "Aumentar el conocimiento de las personas sobre la organización, sus productos y servicios, políticas internas, normativas y contexto del negocio.",
      badge: "Saber"
    },
    {
      title: "2. Desarrollo de Habilidades",
      desc: "Mejorar las destrezas prácticas operativas: manejo de maquinarias, herramientas de software, técnicas de venta y resolución de fallas técnicas.",
      badge: "Saber Hacer"
    },
    {
      title: "3. Desarrollo o Modificación de Actitudes",
      desc: "Transformar actitudes negativas o de resistencia en proactivas: empatía hacia clientes, motivación al logro, trabajo en equipo y lealtad institucional.",
      badge: "Saber Ser"
    },
    {
      title: "4. Desarrollo de Conceptos",
      desc: "Elevar la capacidad de abstracción y el pensamiento holístico para interpretar situaciones complejas y anticipar escenarios estratégicos futuros.",
      badge: "Saber Trascender"
    }
  ];

  const current = cycleStages.find(s => s.step === activeStage) || cycleStages[0];

  return (
    <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header with Title and Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
              Capítulo 11 • Desarrollo de Personas (Entrenamiento)
            </span>
            <span className="text-xs text-slate-400 font-mono">Chiavenato</span>
          </div>
          <h4 className="text-lg font-bold text-slate-100 mt-1">El Ciclo Sistémico de Capacitación y Desarrollo</h4>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('cycle')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'cycle' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Las 4 Etapas del Ciclo
          </button>
          <button
            onClick={() => setActiveTab('dncLevels')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'dncLevels' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3 Niveles DNC
          </button>
          <button
            onClick={() => setActiveTab('design7')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'design7' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Las 7 Preguntas
          </button>
          <button
            onClick={() => setActiveTab('kirkpatrick')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'kirkpatrick' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Kirkpatrick & ROI
          </button>
          <button
            onClick={() => setActiveTab('changes')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'changes' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4 Cambios de Conducta
          </button>
        </div>
      </div>

      {/* TAB 1: LAS 4 ETAPAS DEL CICLO */}
      {activeTab === 'cycle' && (
        <div className="space-y-4 text-xs">
          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {cycleStages.map((st) => (
              <button
                key={st.step}
                onClick={() => setActiveStage(st.step)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  activeStage === st.step
                    ? 'bg-purple-950/60 border-purple-500 text-purple-200 ring-1 ring-purple-500'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono text-purple-400 mb-0.5">Etapa {st.step}</div>
                <div className="font-bold text-xs truncate">{st.name.split('.')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${current.color} flex items-center justify-center text-white`}>
                  <current.icon className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-purple-300 text-sm">{current.name}</h5>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-purple-400">
                {current.tag}
              </span>
            </div>

            <div className="space-y-2">
              <div>
                <span className="font-semibold text-slate-200 block mb-0.5">Interrogante Cardinal:</span>
                <p className="text-purple-300 font-medium text-xs">{current.what}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-200 block mb-0.5">Fundamento Teórico:</span>
                <p className="text-slate-300 text-xs leading-relaxed">{current.desc}</p>
              </div>
              <div className="pt-2">
                <span className="font-semibold text-slate-300 block mb-1 text-[11px]">Herramientas e Insumos Metodológicos:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.tools.map((t, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LOS 3 NIVELES DE ANÁLISIS DEL DNC */}
      {activeTab === 'dncLevels' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            Para que el entrenamiento no sea un gasto desordenado, Chiavenato prescribe un <strong>Diagnóstico de Necesidades (DNC)</strong> articulado en tres niveles sucesivos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {dncThreeLevels.map((lvl, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {lvl.badge}
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-slate-100 mb-2">{lvl.level}</h5>
                  <div className="p-2 rounded bg-purple-950/20 border border-purple-900/30 text-purple-200 font-medium text-[11px] mb-3">
                    {lvl.question}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">{lvl.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Enfoque:</strong> {lvl.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: LAS 7 PREGUNTAS DEL DISEÑO */}
      {activeTab === 'design7' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            En la Etapa 2 (Diseño del Programa), el área de Recursos Humanos debe estructurar el plan respondiendo sistemáticamente a las <strong className="text-purple-300">siete preguntas pedagógicas</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {designSevenQuestions.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-purple-400 block text-xs">{item.q}</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">{item.resp}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: KIRKPATRICK & SIMULADOR DE ROI */}
      {activeTab === 'kirkpatrick' && (
        <div className="space-y-4 text-xs">
          {/* Kirkpatrick 4 levels cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {kirkpatrickLevels.map((lvl) => (
              <div key={lvl.level} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-purple-400 border border-slate-800">
                      Nivel {lvl.level}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">{lvl.badge}</span>
                  </div>
                  <h5 className="font-bold text-slate-200 text-xs mb-1">{lvl.name}</h5>
                  <div className="text-purple-300 font-medium text-[11px] mb-1.5">{lvl.focus}</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{lvl.measure}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive ROI Calculator */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-xs pb-1 border-b border-purple-900/50">
              <Calculator className="w-4 h-4 text-purple-400" />
              <span>Simulador del Retorno sobre la Inversión en Capacitación (ROI Kirkpatrick Nivel 4)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Costo Total del Programa ($):</label>
                <input
                  type="number"
                  value={programCost}
                  onChange={(e) => setProgramCost(Number(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-slate-200 font-mono text-xs focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Beneficios Netos Obtenidos ($):</label>
                <input
                  type="number"
                  value={programGain}
                  onChange={(e) => setProgramGain(Number(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-slate-200 font-mono text-xs focus:outline-none focus:border-purple-500"
                />
                <span className="text-[10px] text-slate-500">Mermas ahorradas, ventas adicionales, menos retrabajos</span>
              </div>

              <div className="p-2.5 bg-slate-950 rounded-lg border border-purple-900/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">ROI Calculado</span>
                  <span className="text-xs text-slate-300">Fórmula de Phillips</span>
                </div>
                <div className={`text-xl font-extrabold font-mono ${calculatedRoi >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {calculatedRoi}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: LOS 4 CAMBIOS DE CONDUCTA */}
      {activeTab === 'changes' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            Según Chiavenato, el objetivo del entrenamiento es producir <strong className="text-purple-300">cuatro tipos esenciales de cambios de comportamiento</strong> en el personal:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {behavioralChanges.map((ch, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <h5 className="font-bold text-purple-300 text-xs">{ch.title}</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-400">
                    {ch.badge}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>El entrenamiento no es un gasto contingente: es el motor que transforma el potencial humano en valor.</span>
        <span className="text-purple-400 font-mono font-semibold">Chiavenato • Cap. 11</span>
      </div>
    </div>
  );
};
