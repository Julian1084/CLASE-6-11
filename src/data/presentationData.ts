export interface Slide {
  id: number;
  chapterId: number; // 8, 9, 10, 11
  chapterTitle: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  keyTakeaway: string;
  speakerNotes: string;
  bulletPoints: {
    title: string;
    description: string;
    badge?: string;
  }[];
  diagramType?: 'hero' | 'factorsModel' | 'dimensions' | 'puestosVsCompetencias' | 'reasons7' | 'evaluators' | 'radar360' | 'traditionalMatrix' | 'traditionalDeep1' | 'traditionalDeep2' | 'eppoConcept' | 'eppoCycle' | 'contract' | 'trends' | 'competencies' | 'sixHRProcesses' | 'performanceManagement' | 'conclusions' | 'compensation' | 'compensationFactors' | 'compensationValuation' | 'compensationBands' | 'compensationVariable' | 'benefits' | 'benefitsClassification' | 'benefitsCafeteria' | 'benefitsPrinciples' | 'benefitsCosts' | 'training' | 'trainingCycle' | 'trainingDNC' | 'trainingDesign' | 'trainingKirkpatrick' | 'trainingChanges';
  theoryQuote?: string;
}

export interface ChapterInfo {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
}

export const CHAPTERS_INFO: ChapterInfo[] = [
  {
    id: 0,
    title: "Clase Completa 4/11",
    subtitle: "Programa: Capítulos 8, 9, 10 y 11",
    badge: "Clase 4/11",
    color: "from-indigo-600 to-slate-900"
  },
  {
    id: 8,
    title: "Capítulo 8: Evaluación del Desempeño",
    subtitle: "Modelos, Métodos, EPPO, 360° y Performance Management",
    badge: "Cap. 8",
    color: "from-indigo-600 to-purple-700"
  },
  {
    id: 9,
    title: "Capítulo 9: Remuneración (Recompensas)",
    subtitle: "Remuneración Total, Valuación y Equidad Salarial",
    badge: "Cap. 9",
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: 10,
    title: "Capítulo 10: Prestaciones y Servicios",
    subtitle: "Beneficios Sociales, Asistenciales y Planes Flexibles",
    badge: "Cap. 10",
    color: "from-teal-600 to-cyan-700"
  },
  {
    id: 11,
    title: "Capítulo 11: Entrenamiento de Personal",
    subtitle: "Ciclo Sistémico de Capacitación y Evaluación ROI",
    badge: "Cap. 11",
    color: "from-purple-600 to-pink-700"
  }
];

export const SLIDES: Slide[] = [
  // ==========================================
  // CAPÍTULO 8: EVALUACIÓN DEL DESEMPEÑO
  // ==========================================
  {
    id: 1,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Fundamentos Teóricos",
    tag: "Apertura Temática",
    title: "Evaluación del Desempeño Humano",
    subtitle: "Fundamentos teóricos, modelos contemporáneos y métodos de medición en las organizaciones",
    keyTakeaway: "La evaluación del desempeño moderna no es un juicio burocrático orientado al pasado, sino un instrumento dinámico y prospectivo para agregar valor, potenciar competencias y alinear objetivos individuales con la estrategia organizacional.",
    speakerNotes: "Iniciar destacando el cambio de paradigma: históricamente la evaluación era un trámite burocrático de control jerárquico. En la moderna gestión del talento humano (Chiavenato), es una técnica imprescindible de dirección orientada al futuro y al desarrollo de competencias.",
    theoryQuote: "«La evaluación del desempeño es una valoración sistemática de la actuación de cada persona en función de las actividades que desempeña, las metas y resultados que debe alcanzar, las competencias que ofrece y su potencial de desarrollo.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Propósito Fundamental",
        description: "Estimar el valor, la excelencia y la contribución de la persona al negocio de la organización.",
        badge: "Núcleo Teórico"
      },
      {
        title: "Carácter Dinámico e Interactivo",
        description: "Involucra al colaborador, a su líder y a su entorno en un proceso continuo de retroalimentación constructiva.",
        badge: "Bilateral"
      },
      {
        title: "Medio, Nunca un Fin en Sí Mismo",
        description: "Su fin es resolver cuellos de botella de desempeño, orientar la capacitación y elevar la calidad de vida laboral.",
        badge: "Estratégico"
      }
    ],
    diagramType: 'hero'
  },
  {
    id: 2,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Marco Conceptual",
    tag: "Definición y Preguntas Clave",
    title: "El Concepto y las 6 Cuestiones Fundamentales",
    subtitle: "Estructura teórica del proceso de identificación, medición y administración del desempeño",
    keyTakeaway: "Todo sistema riguroso de evaluación responde a una tríada (Identificar + Medir + Administrar) y a seis interrogantes sistemáticas.",
    speakerNotes: "Hacer hincapié en que la 'Identificación' proviene del diseño y análisis de puestos; la 'Medición' requiere parámetros objetivos; y la 'Administración' debe mirar hacia el futuro y no quedarse anclada en el pasado.",
    theoryQuote: "«Identificar qué áreas del trabajo deben medirse, medir cómo ha sido el desempeño frente a parámetros objetivos y administrar orientando todo el potencial hacia el futuro.»",
    bulletPoints: [
      {
        title: "1. ¿Por qué se evalúa el desempeño?",
        description: "Justificar recompensas, retroalimentar, guiar desarrollo y definir sucesión de talento.",
        badge: "Finalidad"
      },
      {
        title: "2. ¿Cuál desempeño se debe evaluar?",
        description: "Los resultados concretos, las competencias aplicadas y los factores críticos de éxito.",
        badge: "Objeto"
      },
      {
        title: "3. ¿Cómo se debe evaluar?",
        description: "A través de metodologías estructuradas (escalas, elección forzada) o participativas (EPPO, 360°).",
        badge: "Método"
      },
      {
        title: "4. ¿Quién debe evaluar?",
        description: "Autoevaluación, gerente de línea, equipo, clientes, comisión o evaluación circular 360°.",
        badge: "Agente"
      },
      {
        title: "5. ¿Cuándo se debe evaluar?",
        description: "Superando el ritual anual estático hacia el seguimiento cotidiano y continuo.",
        badge: "Temporalidad"
      },
      {
        title: "6. ¿Cómo se debe comunicar?",
        description: "Entrevista de realimentación bilateral, constructiva, sinérgica y orientada a compromisos futuros.",
        badge: "Comunicación"
      }
    ],
    diagramType: 'dimensions'
  },
  {
    id: 3,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Marco Conceptual",
    tag: "Modelo Teórico 8.1",
    title: "Condicionantes del Desempeño en el Puesto",
    subtitle: "La relación teórica entre valor de recompensa, percepción del rol, esfuerzo y resultado",
    keyTakeaway: "El desempeño no es meramente un acto de voluntad: es una función contingente condicionada por las competencias, el esfuerzo y la percepción clara de la función. Empeño y desempeño son conceptos distintos.",
    speakerNotes: "Explicar el modelo teórico de la Figura 8.1. Detenerse en la distinción teórica vital: 'Empeño' (voluntad/esfuerzo bruto) vs. 'Desempeño' (resultado efectivo que agrega valor). Sin competencias ni claridad de rol, el esfuerzo no se traduce en desempeño.",
    theoryQuote: "«Empeño y desempeño son cosas muy diferentes. La evaluación se debe concentrar en un análisis objetivo del desempeño y no en una apreciación subjetiva de hábitos personales.»",
    bulletPoints: [
      {
        title: "Ecuación de Motivación y Esfuerzo",
        description: "El esfuerzo individual depende de: 1) El valor subjetivo de las recompensas (Valencia), y 2) La percepción de que la recompensa depende de dicho esfuerzo (Instrumentalidad).",
        badge: "Expectativa"
      },
      {
        title: "El Filtro de las Competencias",
        description: "El esfuerzo individual solo se convierte en desempeño útil si el colaborador cuenta con los conocimientos y habilidades requeridas.",
        badge: "Aptitud"
      },
      {
        title: "Percepción de la Función (Rol)",
        description: "El colaborador debe entender con precisión qué se espera de su posición, qué prioridades tiene y cuáles son los límites de su actuación.",
        badge: "Claridad"
      }
    ],
    diagramType: 'factorsModel'
  },
  {
    id: 4,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Comparativa Estructural",
    tag: "Puestos vs. Competencias",
    title: "Evaluación con Base en Puestos vs. en Competencias",
    subtitle: "Diferencias ontológicas y metodológicas entre el modelo mecanicista y el modelo orgánico",
    keyTakeaway: "El enfoque tradicional busca encasillar al individuo en las rutinas de un puesto rígido; el enfoque moderno busca desplegar competencias esenciales aplicables a los desafíos cambiantes del negocio.",
    speakerNotes: "Esta tabla (Figura 8.2 del texto) es central para la discusión teórica. Explicar cómo cambia el objetivo primario, la eficiencia (ocupantes adecuados vs competencias adecuadas) y el ROI (costo de evaluación por puesto vs valor aportado por competencias).",
    theoryQuote: "«¿Qué es más importante, el desempeño en el puesto o la aportación de las competencias que requiere la organización para el éxito de su negocio?»",
    bulletPoints: [
      {
        title: "Objetivo Primario",
        description: "Base en Puestos: Evaluar el cumplimiento de las tareas del puesto. | Base en Competencias: Evaluar competencias individuales y grupales aplicadas.",
        badge: "Foco"
      },
      {
        title: "Criterio de Eficiencia",
        description: "Base en Puestos: Ocupantes que encajan rígidamente en la descripción del puesto. | Base en Competencias: Competencias idóneas para el modelo de negocio.",
        badge: "Eficiencia"
      },
      {
        title: "Retorno sobre Inversión (ROI)",
        description: "Base en Puestos: Puestos ocupados / Costo de evaluación. | Base en Competencias: Competencias aplicadas / Costo de evaluación.",
        badge: "ROI"
      }
    ],
    diagramType: 'puestosVsCompetencias'
  },
  {
    id: 5,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Agentes Evaluadores",
    tag: "¿Quién debe evaluar?",
    title: "Modelos y Alternativas de Agentes Evaluadores",
    subtitle: "El espectro de descentralización: de la autoevaluación autónoma al comité centralizado",
    keyTakeaway: "No existe un único evaluador válido. Las organizaciones eligen modelos según su madurez cultural, transitando de la centralización burocrática a la corresponsabilidad democrática.",
    speakerNotes: "Recorrer las 8 opciones teóricas. Resaltar la decadencia del 'Órgano de RRHH' como evaluador directo (produce distanciamiento y estandarización nociva). El rol ideal de RRHH es staff asesor, no juez de línea.",
    theoryQuote: "«El ideal sería un sistema simple de evaluación, en el cual el propio trabajo o entorno proporcione toda la realimentación sobre el desempeño, sin intermediarios burocráticos.»",
    bulletPoints: [
      {
        title: "Autoevaluación",
        description: "El propio individuo monitorea su actuación y eficacia en base a parámetros objetivos y necesidades personales.",
        badge: "Autonomía"
      },
      {
        title: "El Individuo y el Gerente",
        description: "Fórmula bilateral: el líder facilita recursos y orientación; el colaborador aporta esfuerzo y resultados.",
        badge: "Negociación"
      },
      {
        title: "Evaluación Hacia Arriba",
        description: "El equipo evalúa la calidad del liderazgo, soporte y recursos provistos por el gerente.",
        badge: "Democrática"
      }
    ],
    diagramType: 'evaluators'
  },
  {
    id: 6,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Modelos Contemporáneos",
    tag: "Evaluación Circular",
    title: "Evaluación de 360 Grados (Feedback Circular)",
    subtitle: "La apreciación holística del desempeño desde todas las perspectivas del entorno laboral",
    keyTakeaway: "La evaluación de 360° ofrece la visión más rica y fidedigna del desempeño al recolectar percepciones de todos los grupos de interés que interactúan con el evaluado.",
    speakerNotes: "Explicar los 6 actores del círculo 360°: Superior, Pares, Subordinados, Clientes (internos/externos), Proveedores y Autoevaluación. Discutir por qué requiere una cultura madura para evitar conspiraciones o vulnerabilidad.",
    theoryQuote: "«Produce información distinta, procedente de todas partes, y asegura la adaptación a las diversas demandas del entorno. Sin embargo, para el evaluado no es fácil permanecer en una pasarela recibiendo opiniones de todas partes.»",
    bulletPoints: [
      {
        title: "Multiplicidad de Perspectivas",
        description: "Intervienen superiores inmediatos, colegas de mismo nivel jerárquico, subordinados directos, clientes y proveedores.",
        badge: "Holístico"
      },
      {
        title: "Ventajas Teóricas (Pros)",
        description: "Visión integral no sesgada por un único jefe; información de mayor calidad; estimula la calidad total y el trabajo en equipo; impulsa el autodesarrollo.",
        badge: "Ventajas"
      },
      {
        title: "Limitaciones Teóricas (Contras)",
        description: "Alta complejidad administrativa de tabulación; riesgo de intimidación o resentimiento; opiniones contradictorias; exige entrenamiento previo riguroso.",
        badge: "Desafíos"
      }
    ],
    diagramType: 'radar360'
  },
  {
    id: 7,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Metodologías Tradicionales",
    tag: "Escalas y Elección Forzada",
    title: "Métodos Tradicionales I: Escalas Gráficas y Elección Forzada",
    subtitle: "Mecánica operativa, distorsiones cognitivas, pros y contras teóricos",
    keyTakeaway: "La escala gráfica es vulnerable al Efecto Halo y a la subjetividad; la elección forzada los elimina pero destruye la retroalimentación cualitativa y la participación del evaluado.",
    speakerNotes: "Definir con precisión el 'Efecto Halo' (Halo Effect): generalización cognitiva donde calificar favorable o desfavorablemente un factor contamina todos los demás factores. En elección forzada, explicar la estructura de bloques de frases (+ y -).",
    theoryQuote: "«El método de la elección forzada surgió para eliminar la superficialidad, la generalización y la subjetividad que caracterizaban a las escalas gráficas.»",
    bulletPoints: [
      {
        title: "Escalas Gráficas - Pros",
        description: "Instrumento simple de elaborar y entender; fácil comparación visual de resultados entre varios colaboradores; economía operativa.",
        badge: "Escala Gráfica"
      },
      {
        title: "Efecto Halo y Tendencia Central",
        description: "Produce efecto de generalización (halo); tendencia a calificar en el centro; reduce la riqueza humana a números fríos.",
        badge: "Sesgo Mayor"
      },
      {
        title: "Elección Forzada",
        description: "Bloques de frases donde el evaluador elige obligatoriamente la que más y menos define al trabajador. Neutraliza sesgos pero resulta una caja negra inerte.",
        badge: "Elección Forzada"
      }
    ],
    diagramType: 'traditionalDeep1'
  },
  {
    id: 8,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Metodologías Tradicionales",
    tag: "Inv. Campo y Otros",
    title: "Métodos Tradicionales II: Investigación de Campo e Incidentes Críticos",
    subtitle: "Profundidad cualitativa vs. gestión por excepciones y simplificación",
    keyTakeaway: "La investigación de campo es el método tradicional más completo por integrar línea y staff en 4 etapas; los incidentes críticos destacan lo extraordinario descuidando lo cotidiano.",
    speakerNotes: "Detallar las 4 etapas de la Investigación de Campo: 1) Evaluación inicial, 2) Análisis complementario, 3) Planificación de medidas, 4) Seguimiento. En incidentes críticos, recordar el principio de administración por excepción de Taylor.",
    theoryQuote: "«La investigación de campo permite evaluar a fondo el desempeño y propicia una relación provechosa entre el gerente de línea y el especialista de staff.»",
    bulletPoints: [
      {
        title: "Investigación de Campo: 4 Etapas",
        description: "1. Evaluación inicial; 2. Análisis complementario; 3. Planificación de medidas y sustitutos; 4. Seguimiento de resultados. Muy exhaustivo pero costoso.",
        badge: "4 Etapas"
      },
      {
        title: "Método de Incidentes Críticos",
        description: "Registra solo comportamientos laborales extremos excepcionalmente positivos o negativos. Ignora el desempeño normal cotidiano.",
        badge: "Por Excepción"
      },
      {
        title: "Listas de Verificación (Checklists)",
        description: "Relación de factores cuantitativos que opera como recordatorio estructurado. Simplificación mecanicista de las escalas.",
        badge: "Checklist"
      }
    ],
    diagramType: 'traditionalDeep2'
  },
  {
    id: 9,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Metodologías Modernas",
    tag: "Modelo EPPO / APPO",
    title: "Evaluación Participativa por Objetivos (EPPO)",
    subtitle: "El renacimiento de la APO de Peter Drucker en clave democrática: consenso y autonomía",
    keyTakeaway: "La EPPO sustituye la coerción vertical por el consenso bilateral: objetivos negociados, provisión obligatoria de recursos, autonomía en los medios y autocontrol de resultados.",
    speakerNotes: "Subrayar la reivindicación histórica de Peter Drucker (1954): la APO original era autocontrol y autodirección, pero las organizaciones la corrompieron volviéndola una rutina burocrática asfixiante de arriba hacia abajo. La EPPO restaura la base democrática y participativa.",
    theoryQuote: "«La APO es una de las buenas ideas destruidas por el furor burocrático... Si respetamos que las bases se ubiquen arriba, restauramos su verdadero concepto democrático y participativo.»",
    bulletPoints: [
      {
        title: "Enfoque Prospectivo (Futuro)",
        description: "A diferencia de los métodos tradicionales que juzgan el pasado de forma punitiva, la EPPO planifica y proyecta el desempeño futuro.",
        badge: "Futuro"
      },
      {
        title: "Consenso y Contrato de Desempeño",
        description: "Los objetivos no bajan como órdenes autocráticas; se negocian bilateralmente y se sellan en un contrato formal y psicológico.",
        badge: "Pacto"
      },
      {
        title: "Autonomía en los Medios",
        description: "El colaborador define libremente la estrategia y los medios para cumplir las metas acordadas; el líder asesora y provee recursos.",
        badge: "Empowerment"
      }
    ],
    diagramType: 'eppoCycle'
  },
  {
    id: 10,
    chapterId: 8,
    chapterTitle: "Cap. 8: Evaluación del Desempeño",
    category: "Visión Sistémica",
    tag: "Eje Integrador RRHH",
    title: "La Evaluación como Eje Integrador de los Procesos de RRHH",
    subtitle: "Cómo el diagnóstico del desempeño nutre y conecta los seis subsistemas del talento humano",
    keyTakeaway: "La evaluación del desempeño es la llave maestra que conecta e irriga todos los procesos de la administración de personas: sumar, colocar, recompensar, desarrollar, retener y monitorear.",
    speakerNotes: "Analizar la Figura 8.14: cómo la evaluación nutre cada uno de los 6 procesos: desde el inventario de reclutamiento hasta la auditoría y planes de carrera. Concluir con la transición a Performance Management.",
    theoryQuote: "«La evaluación del desempeño es el elemento articulador: la llave que integra los diferentes procesos de recursos humanos en un sistema armónico y coherente.»",
    bulletPoints: [
      {
        title: "1. Sumar y Colocar Talentos",
        description: "Retroalimenta el perfil de contratación (selección) y verifica el acoplamiento óptimo de la persona con el puesto.",
        badge: "Entrada"
      },
      {
        title: "2. Recompensar y Desarrollar",
        description: "Sustenta la equidad salarial e incentivos por mérito; diagnostica necesidades precisas de capacitación (DNC).",
        badge: "Potenciación"
      },
      {
        title: "3. Retener y Monitorear",
        description: "Mejora el clima laboral para fidelizar a los colaboradores clave y provee la base de auditoría del sistema de RRHH.",
        badge: "Permanencia"
      }
    ],
    diagramType: 'sixHRProcesses'
  },

  // ==========================================
  // CAPÍTULO 9: REMUNERACIÓN (RECOMPENSAS)
  // ==========================================
  {
    id: 11,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Fundamentos Salariales",
    tag: "Concepto y Carácter Multidimensional",
    title: "El Concepto y Carácter Multidimensional del Salario",
    subtitle: "Doble perspectiva económica: costo e inversión organizacional frente a sustento y estatus personal",
    keyTakeaway: "El salario jamás es un dato puramente contable: posee un carácter multidimensional donde convergen la economía, la psicología social, el estatus y la supervivencia del colaborador.",
    speakerNotes: "Iniciar el Capítulo 9 destacando que el salario es la transacción económica central del contrato de trabajo. Diferenciar la perspectiva de la empresa (es a la vez costo operativo que debe optimizarse e inversión en capital humano que genera valor) de la perspectiva del empleado (medio de vida, poder adquisitivo, reconocimiento de valía y jerarquía social). Explicar la diferencia crucial entre salario nominal (la cifra en el cheque) y salario real (el poder de compra efectivo ajustado por la inflación).",
    theoryQuote: "«Para las organizaciones, el salario es a la vez un costo y una inversión. Costo porque se refleja en el precio final del producto; inversión porque representa la aplicación de dinero en un factor productivo —el trabajo humano— capaz de generar un rendimiento muy superior.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Doble Perspectiva Teórica",
        description: "Para la empresa: Costo de producción e inversión de rentabilidad. Para el individuo: Medio de subsistencia, estatus social y medida de su valía personal.",
        badge: "Dualidad"
      },
      {
        title: "Salario Nominal vs. Salario Real",
        description: "Salario nominal: Importe monetario formal expresado en moneda corriente. Salario real: Cantidad de bienes y servicios que ese dinero puede adquirir según el IPC.",
        badge: "Poder Adquisitivo"
      },
      {
        title: "Salario Directo vs. Indirecto",
        description: "Directo: Retribución en dinero por el trabajo en el puesto. Indirecto: Conjunto de prestaciones, beneficios y facilidades provistas por la firma (Cap. 10).",
        badge: "Estructura"
      }
    ],
    diagramType: 'compensation'
  },
  {
    id: 12,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Arquitectura Salarial",
    tag: "Factores Internos vs. Externos",
    title: "Composición del Salario: Factores Internos vs. Factores Externos",
    subtitle: "La resultante dialéctica entre las condiciones organizacionales y las presiones del entorno ambiental",
    keyTakeaway: "El nivel de remuneración de un puesto no surge al azar, sino de la interacción de factores endógenos (capacidad financiera, política salarial) y exógenos (mercado, inflación, sindicatos, legislación).",
    speakerNotes: "Analizar el modelo de fuerzas de Chiavenato: los factores internos están bajo control de la gerencia (cómo valúa sus puestos, su solvencia y su política de retención). Los factores externos son restricciones del entorno macroeconómico (ley de oferta y demanda laboral, convenios sindicales paritarios y salario mínimo legal). En épocas de inflación, los factores externos tensionan constantemente a los internos.",
    theoryQuote: "«La remuneración no es un acto aislado, sino una resultante de fuerzas internas (organizacionales) y externas (ambientales) que interactúan permanentemente.»",
    bulletPoints: [
      {
        title: "Factores Internos (Organizacionales)",
        description: "1) Tipología y valuación de los puestos; 2) Política salarial corporativa; 3) Capacidad financiera y balance de ganancias; 4) Productividad y desempeño alcanzado.",
        badge: "Endógenos"
      },
      {
        title: "Factores Externos (Ambientales)",
        description: "1) Situación de oferta/demanda en el mercado de trabajo; 2) Coyuntura económica, costo de vida e inflación; 3) Negociación sindical y convenios paritarios; 4) Legislación laboral.",
        badge: "Exógenos"
      },
      {
        title: "Poder de Negociación y Mercado",
        description: "Cuando la demanda de talentos escasos supera la oferta laboral, la presión externa eleva los salarios por encima de las bandas internas.",
        badge: "Mercado"
      }
    ],
    diagramType: 'compensationFactors'
  },
  {
    id: 13,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Remuneración Total",
    tag: "Los Tres Componentes",
    title: "La Remuneración Total: Fija, Incentivos y Prestaciones",
    subtitle: "La arquitectura del paquete integral que equilibra estabilidad, motivación por metas y bienestar",
    keyTakeaway: "La compensación moderna trasciende el salario básico fijo mensual: combina una base fija segura, incentivos variables que premian el logro y prestaciones que aseguran la protección familiar.",
    speakerNotes: "Desglosar la tríada de la Remuneración Total: 1) Remuneración Básica (50%-70% del paquete: paga el puesto y da certidumbre básica); 2) Incentivos Salariales (15%-30%: bonos por KPIs, comisiones y PLR que vinculan paga con éxito); 3) Prestaciones y Beneficios (15%-25%: salario indirecto en salud, previsión y conveniencia). Subrayar cómo esta mezcla permite a la empresa flexibilizar sus costos fijos.",
    theoryQuote: "«La remuneración total es el paquete integral de recompensas cuantitativas y cualitativas que una organización ofrece a cambio del tiempo, esfuerzo y competencias de sus colaboradores.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "1. Remuneración Básica (Salario Base)",
        description: "Sueldo fijo mensual o salario por hora que retribuye el cargo formal desempeñado; otorga certidumbre económica mínima.",
        badge: "Seguridad Fija"
      },
      {
        title: "2. Incentivos Salariales (Variable)",
        description: "Programas contingentes al rendimiento: bonos por objetivos (EPPO), comisiones por ventas, gratificaciones y participación en resultados.",
        badge: "Motivación"
      },
      {
        title: "3. Prestaciones y Servicios Sociales",
        description: "Seguro médico de salud, vales de comida, subsidio de transporte, fondo de retiro y guardería (salario indirecto, Cap. 10).",
        badge: "Bienestar"
      }
    ],
    diagramType: 'compensation'
  },
  {
    id: 14,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Equidad Interna",
    tag: "Los 4 Métodos de Valuación",
    title: "Equidad Interna y los 4 Métodos de Valuación de Puestos",
    subtitle: "Técnicas cualitativas y cuantitativas para ordenar y jerarquizar el valor de las funciones",
    keyTakeaway: "La equidad interna exige que los puestos de mayor complejidad, responsabilidad y esfuerzo reciban una retribución proporcionalmente superior; se garantiza mediante la valuación técnica de puestos.",
    speakerNotes: "Detallar rigurosamente los 4 métodos de Valuación de Puestos de Chiavenato: 1) Jerarquización (cualitativo simple: ordenar de mayor a menor); 2) Graduación previa / Categorías predeterminadas (cualitativo: definir grados como 'Técnico I, II, III' y encasillar); 3) Comparación de factores (cuantitativo analítico con puestos clave y distribución de dinero por factor); 4) Valuación por puntos (Point Rating / Hay System: el estándar mundial con grados, factores compensables y ponderación matemática).",
    theoryQuote: "«La valuación de puestos es un medio sistemático para determinar la importancia relativa de cada cargo dentro de la empresa, asegurando un principio de justicia distributiva: a mayor exigencia de la tarea, mayor salario base.»",
    bulletPoints: [
      {
        title: "1. Jerarquización (Job Ranking)",
        description: "Método cualitativo no analítico. Ordena los puestos globalmente de mayor a menor complejidad. Sencillo y veloz pero altamente subjetivo.",
        badge: "Cualitativo Global"
      },
      {
        title: "2. Categorías Predeterminadas (Job Classification)",
        description: "Método cualitativo no analítico. Define clases o grados salariales formales (ej. Administrativo, Profesional, Jefatura) y ubica cada puesto.",
        badge: "Clasificación"
      },
      {
        title: "3. Comparación de Factores",
        description: "Método cuantitativo analítico. Descompone los puestos en factores compensables esenciales y los compara con puestos de referencia (benchmark).",
        badge: "Analítico"
      },
      {
        title: "4. Valuación por Puntos (Point Rating / Hay)",
        description: "Método cuantitativo analítico estándar. Pondera factores compensables en grados con puntos acumulativos; máxima objetividad matemática.",
        badge: "Estándar Global"
      }
    ],
    diagramType: 'compensationValuation'
  },
  {
    id: 15,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Equidad Externa",
    tag: "Curva Salarial y Franjas",
    title: "Curva Salarial de Mercado, Encuestas y Franjas Salariales",
    subtitle: "El equilibrio competitivo entre la línea de mercado y la amplitud de banda interna",
    keyTakeaway: "La equidad externa se logra mediante encuestas salariales en el sector; los puestos se ubican en franjas (salary bands) delimitadas por el salario mínimo, el punto medio y el salario máximo.",
    speakerNotes: "Explicar cómo se construye la política salarial: se correlacionan los puntos de la valuación (eje X) con los salarios monetarios del mercado (eje Y) trazando una línea de regresión. Explicar los percentiles: Percentil 25 (estrategia defensiva de costos), Percentil 50 (paridad de mercado / retención estándar), Percentil 75 (estrategia agresiva de atracción de talento). Detallar qué es el 'Spread' o amplitud de franja (diferencia de 30% a 50% entre el mínimo y máximo de un grado para permitir aumentos por mérito sin cambiar de puesto).",
    theoryQuote: "«La curva salarial de mercado reconcilia la equidad interna (puntos de valuación) con la equidad externa (lo que paga la competencia), evitando la fuga de talentos clave.»",
    bulletPoints: [
      {
        title: "Encuesta Salarial de Referencia",
        description: "Investigación estadística sobre puestos arquetipo (benchmark) en empresas comparables del mismo sector geográfico y económico.",
        badge: "Benchmark"
      },
      {
        title: "Línea de Tendencia y Percentiles",
        description: "La línea de regresión proyecta la política de la empresa: P25 (ahorro en costos), P50 (mediana de mercado), P75 (liderazgo para captar élite).",
        badge: "P25 / P50 / P75"
      },
      {
        title: "Franjas Salariales (Salary Bands)",
        description: "Cada categoría define un Salario Mínimo, un Punto Medio (Midpoint) y un Salario Máximo; permite incrementos por mérito dentro de la misma banda.",
        badge: "Amplitud (Spread)"
      }
    ],
    diagramType: 'compensationBands'
  },
  {
    id: 16,
    chapterId: 9,
    chapterTitle: "Cap. 9: Remuneración (Recompensas)",
    category: "Tendencias Modernas",
    tag: "PLR y Competencias",
    title: "Nuevas Tendencias: Remuneración Variable, PLR y por Competencias",
    subtitle: "El desplazamiento del pago burocrático por permanencia hacia la retribución por valor y saberes",
    keyTakeaway: "La remuneración contemporánea reduce los costos fijos rígidos ligando la retribución al logro colectivo (PLR) y retribuye el caudal de competencias demostradas del colaborador.",
    speakerNotes: "Cerrar el Capítulo 9 analizando los dos grandes avances contemporáneos: 1) Remuneración Variable y Participación en Utilidades y Resultados (PLR): flexibiliza costos laborales, no crea pasivo rígido y alinea al trabajador con el EBITDA y las metas corporativas; 2) Remuneración por Competencias (Skill-based pay): no paga por el nombre del cargo, sino por los bloques certificados de conocimiento y polivalencia que la persona pone en juego.",
    theoryQuote: "«La remuneración por competencias no premia la antigüedad ni la silla que ocupa la persona: recompensa el caudal de saberes y destrezas aplicadas que ensanchan la competitividad de la organización.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Participación en Resultados (PLR)",
        description: "Distribución de un porcentaje de las utilidades operativas ligado a metas prefijadas; transforma al asalariado pasivo en socio de éxito.",
        badge: "Variable Colectiva"
      },
      {
        title: "Remuneración por Competencias",
        description: "El salario básico aumenta cuando el trabajador adquiere y certifica nuevas competencias técnicas, directivas o relacionales.",
        badge: "Skill-Based Pay"
      },
      {
        title: "Opciones de Acciones (Stock Options)",
        description: "Planes de incentivos a largo plazo donde los colaboradores adquieren acciones de la firma, sincronizando sus intereses con los de los accionistas.",
        badge: "Largo Plazo"
      }
    ],
    diagramType: 'compensationVariable'
  },

  // ==========================================
  // CAPÍTULO 10: PRESTACIONES Y SERVICIOS SOCIALES
  // ==========================================
  {
    id: 17,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Salario Indirecto",
    tag: "Concepto y Fuerzas Históricas",
    title: "Concepto y Racionalidad de las Prestaciones Sociales",
    subtitle: "La dimensión asistencial y de calidad de vida laboral como salario indirecto de alto impacto",
    keyTakeaway: "Las prestaciones sociales son el salario indirecto que complementa la remuneración monetaria: satisfacen necesidades de seguridad humana, reducen el ausentismo y representan del 30% al 60% del costo total de nómina.",
    speakerNotes: "Iniciar el Capítulo 10 definiendo con rigor qué son las prestaciones: pagos indirectos, facilidades y servicios que ahorran preocupaciones al trabajador. Detallar las 4 fuerzas históricas que impulsaron su nacimiento según Chiavenato: 1) Presiones y demandas de los sindicatos organizados; 2) Legislación laboral de previsión social del Estado; 3) Competencia feroz entre empresas por retener personal calificado; 4) Ventajas fiscales y deducciones tributarias concedidas por los gobiernos.",
    theoryQuote: "«Las prestaciones sociales son las facilidades, comodidades, ventajas y servicios que las empresas ofrecen a sus empleados para ahorrarles esfuerzos y preocupaciones económicas.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Naturaleza de Salario Indirecto",
        description: "Beneficios marginales que no se abonan como dinero líquido en el sueldo básico, pero cubren contingencias y bienestar de la vida del trabajador.",
        badge: "Salario Indirecto"
      },
      {
        title: "Las 4 Fuerzas Impulsoras",
        description: "1) Reclamos sindicales; 2) Legislación estatal de seguridad social; 3) Competencia por retener talentos en el mercado; 4) Exenciones y deducciones fiscales corporativas.",
        badge: "Orígenes"
      },
      {
        title: "Peso Financiero Estratégico",
        description: "En empresas modernas representan entre el 30% y el 60% del costo salarial total de la organización; no pueden gestionarse como dádivas caritativas.",
        badge: "30% - 60% Nómina"
      }
    ],
    diagramType: 'benefits'
  },
  {
    id: 18,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Taxonomía Teórica",
    tag: "Criterio 1: Exigibilidad Legal",
    title: "Clasificación por Exigibilidad Legal: Legales vs. Espontáneas",
    subtitle: "El piso imperativo del marco normativo frente a las ventajas competitivas de la política patronal",
    keyTakeaway: "Las prestaciones legales son mandatos obligatorios del derecho laboral; las prestaciones espontáneas o voluntarias son ventajas estratégicas diseñadas por la firma para atraer y fidelizar talento.",
    speakerNotes: "Explicar el primer criterio taxonómico de Chiavenato. Las prestaciones legales no generan lealtad especial hacia la empresa porque el trabajador sabe que provienen del Estado y la ley (aguinaldo, vacaciones anuales pagadas, aportes jubilatorios, seguro de accidentes laborales). En contraste, las prestaciones voluntarias (seguro de salud privado de alta gama, vales de comida, planes de jubilación complementaria) son las que verdaderamente diferencian a la empresa y generan compromiso.",
    theoryQuote: "«Las prestaciones legales son exigidas por la legislación laboral y ningún empleador puede rehuirlas; las prestaciones espontáneas nacen de la generosidad voluntaria y la estrategia competitiva de la empresa.»",
    bulletPoints: [
      {
        title: "Prestaciones Legales (Obligatorias)",
        description: "Mandato del derecho del trabajo: Aguinaldo (sueldo 13), vacaciones anuales remuneradas, licencias por maternidad/paternidad, aportes previsionales e indemnizaciones legales.",
        badge: "Piso Normativo"
      },
      {
        title: "Prestaciones Espontáneas (Voluntarias)",
        description: "Otorgadas por iniciativa propia de la empresa: Seguro médico privado (prepaga), vales de despensa, seguro de vida grupal, plan de retiro privado y becas universitarias.",
        badge: "Ventaja Competitiva"
      },
      {
        title: "Impacto Psicológico Diferencial",
        description: "Las legales se perciben como un derecho adquirido inalienable; las voluntarias construyen la reputación de marca empleadora (Employer Branding).",
        badge: "Fidelización"
      }
    ],
    diagramType: 'benefitsClassification'
  },
  {
    id: 19,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Taxonomía Teórica",
    tag: "Criterio 2: Por su Propósito",
    title: "Clasificación por Propósito: Asistenciales, Recreativas y Supletorias",
    subtitle: "Protección ante contingencias, higiene mental y facilitación de la rutina diaria",
    keyTakeaway: "Según su propósito, las prestaciones se dividen en: asistenciales (salud, vida, guardería), recreativas (higiene mental, deporte, descanso) y supletorias (comedor, transporte, comodidades operativas).",
    speakerNotes: "Detallar exhaustivamente la tríada de propósitos de Chiavenato: 1) Asistenciales: buscan resguardar la salud física, mental y la seguridad económica del colaborador y su núcleo familiar ante imprevistos (consultorio médico, subsidio por invalidez, sala cuna); 2) Recreativas: buscan proporcionar descanso mental, distensión y esparcimiento saludable para contrarrestar el estrés laboral (clubes deportivos, eventos culturales); 3) Supletorias: comodidades que ahorran tiempo y dinero al empleado (comedor subsidiado, estacionamiento, transporte de empresa).",
    theoryQuote: "«Las asistenciales previenen contingencias; las recreativas brindan higiene mental y esparcimiento; las supletorias facilitan la vida del colaborador ahorrándole esfuerzos cotidianos.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "1. Prestaciones Asistenciales",
        description: "Protegen ante imprevistos de salud y seguridad: Medicina prepaga, seguro de vida, subsidio por incapacidad médica, guardería infantil y farmacia corporativa.",
        badge: "Protección y Salud"
      },
      {
        title: "2. Prestaciones Recreativas",
        description: "Proporcionan descanso físico e higiene mental: Clubes sociales y deportivos, áreas de esparcimiento en sede, colonias de vacaciones para hijos de empleados.",
        badge: "Higiene Mental"
      },
      {
        title: "3. Prestaciones Supletorias (Conveniencia)",
        description: "Facilidades que ahorran tiempo y dinero al colaborador: Comedor en planta subsidiado, transporte corporativo puerta a puerta, estacionamiento y cooperativa de consumo.",
        badge: "Conveniencia Diaria"
      }
    ],
    diagramType: 'benefitsClassification'
  },
  {
    id: 20,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Taxonomía Teórica",
    tag: "Criterio 3: Forma de Pago",
    title: "Clasificación por Forma de Pago: Monetarias vs. No Monetarias",
    subtitle: "Compensación en dinero contante frente a provisión directa de infraestructura y servicios",
    keyTakeaway: "La tercera clasificación teórica separa los beneficios que se pagan en dinero contante (primas, gratificaciones) de los provistos en especie y servicios directos (comida, transporte, consultorio).",
    speakerNotes: "Explicar el tercer eje de clasificación: Monetarias (flujo dinerario directo en la cuenta bancaria del trabajador como plus vacacional, aguinaldo o reembolso médico) vs. No Monetarias (servicios directos provistos por la infraestructura de la empresa: consultorio médico de planta, comedor empresarial, guardería in situ). Analizar la ventaja de las prestaciones en especie: generan economías de escala (la empresa compra en volumen más barato de lo que el empleado pagaría individualmente en el mercado).",
    theoryQuote: "«Las prestaciones monetarias son pagos adicionales en dinero; las no monetarias son comodidades, servicios o infraestructura que la empresa pone a disposición del personal.»",
    bulletPoints: [
      {
        title: "Prestaciones Monetarias",
        description: "Se liquidan en dinero contante: Aguinaldo legal, prima vacacional, gratificaciones de fin de año, bonos de complemento y reembolsos de gastos médicos.",
        badge: "En Efectivo"
      },
      {
        title: "Prestaciones No Monetarias (En Especie)",
        description: "Servicios e infraestructura provistos directamente: Atención médica en enfermería de planta, raciones de comida en comedor, uniformes y transporte colectivo.",
        badge: "En Especie"
      },
      {
        title: "Poder de Compra y Economías de Escala",
        description: "La empresa compra seguros y servicios con tarifas corporativas masivas muy inferiores a las contrataciones individuales que haría el trabajador.",
        badge: "Economía de Escala"
      }
    ],
    diagramType: 'benefitsClassification'
  },
  {
    id: 21,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Gestión Contemporánea",
    tag: "Planes Cafetería Flexibles",
    title: "Prestaciones Flexibles: El Modelo Cafetería y Adaptación al Ciclo de Vida",
    subtitle: "La superación del paquete uniforme rígido hacia la personalización de puntos presupuestarios",
    keyTakeaway: "El modelo moderno abandona el paquete rígido uniforme y otorga una canasta de puntos presupuestarios para que cada colaborador elija según su etapa vital (joven soltero, padre de familia o profesional senior).",
    speakerNotes: "Explicar la revolución de los Planes Cafetería (Flexible Benefits): en el modelo tradicional de paquete rígido, a un joven de 22 años soltero se le daba el mismo paquete que a un empleado de 55 años con hijos grandes, desperdiciando presupuesto en beneficios inútiles para uno u otro. Con el Menú Cafetería, la empresa fija un saldo de puntos presupuestarios y el empleado elige: el joven prioriza becas universitarias y membresía de gimnasio; el padre de familia prioriza guardería y seguro médico ampliado; el senior prioriza fondo de pensión y chequeos de salud.",
    theoryQuote: "«Las prestaciones flexibles permiten que cada colaborador elija el menú de opciones que mejor responda a su ciclo vital y a sus prioridades familiares, maximizando el valor percibido dentro de un presupuesto prefijado.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Superación del Modelo Uniforme",
        description: "Elimina el desperdicio del paquete idéntico ('one-size-fits-all') que ofrecía beneficios irrelevantes a colaboradores en distintas etapas de vida.",
        badge: "Personalización"
      },
      {
        title: "Administración de Puntos Presupuestarios",
        description: "La empresa otorga un saldo fijo de créditos/puntos anuales; el colaborador los distribuye libremente en una plataforma digital de beneficios.",
        badge: "Bolsa de Puntos"
      },
      {
        title: "Segmentación por Ciclo Vital",
        description: "Jóvenes solteros (educación, tiempo libre); Empleados con familia (salud pediátrica, guardería); Seniors (pensión complementaria y previsión).",
        badge: "Ciclo de Vida"
      }
    ],
    diagramType: 'benefitsCafeteria'
  },
  {
    id: 22,
    chapterId: 10,
    chapterTitle: "Cap. 10: Prestaciones y Servicios",
    category: "Criterios de Diseño",
    tag: "Principios de Chiavenato",
    title: "Principios de Diseño: Rendimiento de Inversión (ROI) y Responsabilidad Compartida",
    subtitle: "Racionalidad económica: prevención del paternalismo gratuito y corresponsabilidad del costo",
    keyTakeaway: "Chiavenato formula dos principios rectores imprescindibles: ningún beneficio debe otorgarse sin retorno tangible en productividad y ausentismo (ROI), y los costos deben cofinanciarse para evitar el despilfarro (copago).",
    speakerNotes: "Analizar los dos principios cardinales de Chiavenato: 1) Principio del Rendimiento de la Inversión: las prestaciones deben financiarse por sí mismas a través de la reducción del ausentismo por enfermedad, la disminución de renuncias de talento y la mejora del clima laboral; 2) Principio de la Responsabilidad Compartida: cuando las cosas son 100% gratuitas, las personas tienden a abusar o subestimar su valor real. La cofinanciación (por ejemplo, la empresa paga el 80% del seguro médico y el empleado el 20%) fomenta el uso prudente y responsable de los servicios.",
    theoryQuote: "«Ninguna prestación debe concederse como simple acto de paternalismo. Debe regir el principio del rendimiento de la inversión y el principio de la responsabilidad compartida: lo que cuesta poco, poco se valora.»",
    bulletPoints: [
      {
        title: "1. Principio del Rendimiento de la Inversión",
        description: "Toda prestación debe justificarse en base al retorno medible: menor tasa de absentismo por enfermedad, reducción del turnover y mayor productividad.",
        badge: "ROI de Beneficios"
      },
      {
        title: "2. Principio de la Responsabilidad Compartida",
        description: "La financiación conjunta (copago empresa + empleado) elimina la mentalidad paternalista de dádiva y previene el abuso de los servicios médicos.",
        badge: "Cofinanciación"
      },
      {
        title: "Criterios de Viabilidad Organizacional",
        description: "Evaluar el costo total de la nómina, el impacto impositivo, la viabilidad financiera a largo plazo y la compatibilidad con la cultura laboral.",
        badge: "Viabilidad"
      }
    ],
    diagramType: 'benefitsPrinciples'
  },

  // ==========================================
  // CAPÍTULO 11: ENTRENAMIENTO DE PERSONAL (CAPACITACIÓN)
  // ==========================================
  {
    id: 23,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Desarrollo de Personas",
    tag: "Concepto y 4 Cambios de Conducta",
    title: "Concepto de Entrenamiento vs. Desarrollo y los 4 Cambios de Conducta",
    subtitle: "La distinción teórica capital entre el puesto actual y la carrera futura",
    keyTakeaway: "El entrenamiento se enfoca en el puesto actual y habilidades tácticas inmediatas de corto plazo; el desarrollo se orienta al crecimiento integral y a la carrera futura a largo plazo.",
    speakerNotes: "Iniciar el Capítulo 11 aclarando la distinción teórica entre 'Entrenamiento' (proceso de corto plazo orientado a adquirir destrezas inmediatas para el puesto actual) y 'Desarrollo de Personas' (proceso de mediano y largo plazo enfocado en el crecimiento integral de la persona y su preparación para futuros retos estratégicos). Desglosar los 4 tipos de cambios de conducta que produce el entrenamiento según Chiavenato: 1) Información (saber); 2) Habilidades (saber hacer); 3) Actitudes (saber ser); 4) Conceptos (saber trascender y pensar estratégicamente).",
    theoryQuote: "«El entrenamiento es el proceso educacional a corto plazo aplicado de manera sistemática y organizada, mediante el cual las personas aprenden conocimientos, actitudes y habilidades en función de objetivos definidos.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Entrenamiento vs. Desarrollo de Personas",
        description: "Entrenamiento: Corto plazo, centrado en el puesto actual y tareas operativas. Desarrollo: Largo plazo, centrado en la persona integral y su carrera futura.",
        badge: "Presente vs Futuro"
      },
      {
        title: "1. Transmisión de Información y 2. Habilidades",
        description: "Información: Aumentar el conocimiento sobre productos, normas y empresa. Habilidades: Desarrollar destrezas prácticas, manejo de software y maquinarias.",
        badge: "Saber y Saber Hacer"
      },
      {
        title: "3. Actitudes y 4. Desarrollo de Conceptos",
        description: "Actitudes: Modificar conductas negativas hacia la colaboración y empatía. Conceptos: Elevar el nivel de abstracción y pensamiento holístico/estratégico.",
        badge: "Ser y Trascender"
      }
    ],
    diagramType: 'trainingChanges'
  },
  {
    id: 24,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Ciclo Sistémico",
    tag: "Las 4 Etapas del Ciclo",
    title: "El Ciclo Sistémico del Entrenamiento (Modelo Cibernético de 4 Etapas)",
    subtitle: "El circuito cerrado de retroalimentación: Diagnóstico, Diseño, Conducción y Evaluación",
    keyTakeaway: "El entrenamiento opera como un sistema continuo y cerrado de cuatro etapas interconectadas: detectar carencias (DNC), planificar el programa, ejecutar la instrucción y medir los resultados logrados.",
    speakerNotes: "Presentar el esquema de 4 etapas de Chiavenato como un sistema cibernético con inputs, procesos, outputs y bucle de realimentación continua. Enfatizar que jamás debe ejecutarse un curso sin haber diagnosticado previamente las necesidades reales de capacitación (Etapa 1). La Evaluación del Desempeño (Cap. 8) es el principal insumo que alimenta al DNC.",
    theoryQuote: "«El entrenamiento es un proceso cíclico y continuo compuesto de cuatro etapas fundamentales: 1) DNC; 2) Diseño; 3) Conducción; 4) Evaluación de los resultados alcanzados.»",
    bulletPoints: [
      {
        title: "Etapa 1: Diagnóstico de Necesidades (DNC)",
        description: "Inventario riguroso de carencias y brechas entre el desempeño actual y el esperado; nutre de datos a todo el programa.",
        badge: "Etapa 1: DNC"
      },
      {
        title: "Etapa 2: Diseño del Programa de Entrenamiento",
        description: "Planificación didáctica metódica: Formulación de objetivos instruccionales, temarios, recursos pedagógicos y presupuesto.",
        badge: "Etapa 2: Diseño"
      },
      {
        title: "Etapa 3: Ejecución / Conducción Pedagógica",
        description: "Aplicación práctica de la instrucción mediante la interacción facilitador-aprendiz (en el puesto o en aula digital).",
        badge: "Etapa 3: Acción"
      },
      {
        title: "Etapa 4: Evaluación de Resultados e Impacto",
        description: "Verificación cuantitativa y cualitativa para constatar si se cerraron las brechas de rendimiento y calcular el retorno financiero (ROI).",
        badge: "Etapa 4: Medición"
      }
    ],
    diagramType: 'trainingCycle'
  },
  {
    id: 25,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Diagnóstico (Etapa 1)",
    tag: "Los 3 Niveles de Análisis",
    title: "Etapa 1: Diagnóstico de Necesidades de Capacitación (DNC) en 3 Niveles de Análisis",
    subtitle: "La metodología analítica para evitar el despilfarro de recursos formativos",
    keyTakeaway: "El DNC investiga las necesidades en tres niveles sucesivos: organizacional (estrategia y metas), recursos humanos (perfiles y competencias faltantes) y operaciones/tareas (exigencias del puesto y fallas operativas).",
    speakerNotes: "Explicar con precisión metodológica los tres niveles de análisis del DNC según Chiavenato: 1) Análisis Organizacional: ¿Dónde se necesita entrenar? Mira la estrategia macro, la misión y los desafíos competitivos; 2) Análisis de los Recursos Humanos: ¿Quién debe ser entrenado? Analiza el inventario de competencias, escolaridad y potencial del personal; 3) Análisis de las Operaciones y Tareas: ¿Qué debe enseñarse? Examina los requisitos del puesto (Cap. 7) y las brechas detectadas en la Evaluación del Desempeño (Cap. 8). Detallar los métodos para recolectar datos: entrevistas, observación directa, encuestas y análisis de quejas de clientes.",
    theoryQuote: "«El DNC debe partir del diagnóstico en tres niveles: la organización como totalidad, la fuerza de trabajo en su conjunto y los puestos y tareas específicas que deben desempeñarse.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "1. Análisis Organizacional (Nivel Macro)",
        description: "Examina los objetivos estratégicos de la empresa, su visión a largo plazo y la asignación de recursos corporativos para competir en el mercado.",
        badge: "Estratégico"
      },
      {
        title: "2. Análisis de Recursos Humanos (Nivel Medio)",
        description: "Estudia el perfil del personal disponible, identificando brechas colectivas de saberes y actitudes frente a las metas de la firma.",
        badge: "Talento Humano"
      },
      {
        title: "3. Análisis de Operaciones y Puestos (Nivel Micro)",
        description: "Contrasta las exigencias de la descripción del puesto con las fallas reales observadas en la Evaluación del Desempeño (Cap. 8).",
        badge: "Puestos de Trabajo"
      }
    ],
    diagramType: 'trainingDNC'
  },
  {
    id: 26,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Diseño (Etapa 2)",
    tag: "Las 7 Preguntas Didácticas",
    title: "Etapa 2: Diseño del Programa y las 7 Preguntas Metodológicas",
    subtitle: "La estructuración curricular del plan formativo basada en objetivos pedagógicos claros",
    keyTakeaway: "El diseño del programa debe dar respuesta sistemática a siete preguntas clave: a quién, quién, sobre qué, dónde, cómo, cuándo y para qué se entrena.",
    speakerNotes: "Recorrer las 7 preguntas metodológicas de Chiavenato para el diseño pedagógico: 1) ¿A quién entrenar? (población diana y selección de aprendices); 2) ¿Quién debe entrenar? (instructores internos de la empresa vs consultores especializados externos); 3) ¿Sobre qué entrenar? (temario y contenidos específicos); 4) ¿Dónde entrenar? (en el puesto de trabajo o fuera de él); 5) ¿Cómo entrenar? (métodos didácticos, simuladores, casos); 6) ¿Cuándo entrenar? (calendario y horarios); 7) ¿Para qué entrenar? (objetivos instruccionales y resultados esperados para el negocio).",
    theoryQuote: "«Diseñar un programa de entrenamiento es planificar una intervención pedagógica deliberada que articula aprendices, instructores, contenidos, metodologías y objetivos claros de negocio.»",
    bulletPoints: [
      {
        title: "¿A quién y quién entrena?",
        description: "Población meta seleccionada en base a las brechas del DNC y facilitadores idóneos (expertos internos de línea o capacitadores externos).",
        badge: "Actores"
      },
      {
        title: "¿Sobre qué, dónde y cuándo?",
        description: "Contenido programático exhaustivo, espacio físico o virtual (on the job vs aula) y calendario estructurado compatible con la operación.",
        badge: "Currícula y Entorno"
      },
      {
        title: "¿Cómo y para qué entrenar?",
        description: "Metodologías activas (talleres, role-playing, e-learning) alineadas con los objetivos instruccionales y el valor agregado para el negocio.",
        badge: "Metodología y Fin"
      }
    ],
    diagramType: 'trainingDesign'
  },
  {
    id: 27,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Conducción (Etapa 3)",
    tag: "Técnicas de Instrucción",
    title: "Etapa 3: Técnicas y Modalidades de Conducción",
    subtitle: "Instrucción en el puesto de trabajo vs. fuera del puesto y nuevas tecnologías educativas",
    keyTakeaway: "La conducción del entrenamiento se clasifica según el lugar de aplicación: en el puesto de trabajo (on-the-job, rotación) o fuera de él (aula, simuladores, plataformas e-learning y universidades corporativas).",
    speakerNotes: "Contrastar las modalidades de conducción: 1) En el puesto de trabajo (On the Job Training): instrucción directa por parte del supervisor, aprendizaje por modelado, rotación de puestos (Job Rotation) y proyectos especiales. Ventaja: costo casi nulo y transferencia inmediata; Desventaja: riesgo de mermas o accidentes en plena línea de producción; 2) Fuera del puesto de trabajo: conferencias, talleres vivenciales, dinámicas grupales, simuladores inmersivos y plataformas digitales LMS. Analizar la irrupción de las Universidades Corporativas.",
    theoryQuote: "«El entrenamiento en el puesto proporciona un aprendizaje vivencial inmediato; el entrenamiento fuera del puesto permite una reflexión profunda y el dominio de conceptos sin la presión de la rutina operativa.»",
    bulletPoints: [
      {
        title: "En el Puesto de Trabajo (On the Job)",
        description: "Instrucción directa del supervisor, rotación programada de puestos (Job Rotation) y asignación a tareas especiales; máxima transferencia inmediata.",
        badge: "En el Puesto"
      },
      {
        title: "Fuera del Puesto de Trabajo (Aula y Simulación)",
        description: "Cursos presenciales, conferencias, estudios de caso, dramatización (role-playing) y simuladores que reproducen la realidad sin riesgos operativos.",
        badge: "Fuera del Puesto"
      },
      {
        title: "Universidades Corporativas y E-learning",
        description: "Plataformas digitales asincrónicas, microlearning y campus corporativos para el aprendizaje continuo y autogestionado de toda la organización.",
        badge: "Tecnología Educativa"
      }
    ],
    diagramType: 'trainingCycle'
  },
  {
    id: 28,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Evaluación (Etapa 4)",
    tag: "Kirkpatrick y ROI",
    title: "Etapa 4: Evaluación de Resultados, Modelo Kirkpatrick y Retorno Financiero (ROI)",
    subtitle: "La pirámide de cuatro niveles de Donald Kirkpatrick y el cálculo económico de rentabilidad",
    keyTakeaway: "La evaluación científica supera la mera encuesta de satisfacción inmediata (Nivel 1): mide el aprendizaje adquirido (Nivel 2), la transferencia al puesto a los 3-6 meses (Nivel 3) y el retorno económico formal del programa (Nivel 4 / ROI).",
    speakerNotes: "Detallar la jerarquía de Donald Kirkpatrick: Nivel 1 (Reacción: ¿les agradó el curso?); Nivel 2 (Aprendizaje: ¿qué conceptos o habilidades dominan ahora? pruebas pre y post); Nivel 3 (Comportamiento / Transferencia: ¿aplican lo aprendido en su puesto cotidiano a los 3-6 meses? medido junto al supervisor); Nivel 4 (Resultados en el Negocio: ¿hubo menos accidentes, menos desperdicio, más ventas?). Presentar la fórmula matemática de Phillips para calcular el ROI: ROI = [(Beneficios Netos - Costos) / Costos] * 100.",
    theoryQuote: "«El éxito de un programa de entrenamiento jamás se mide por el número de horas en el aula ni por las caritas sonrientes en la encuesta: se mide por el cambio de conducta laboral y su impacto cuantificable en el negocio.» — Donald Kirkpatrick",
    bulletPoints: [
      {
        title: "Nivel 1 (Reacción) y Nivel 2 (Aprendizaje)",
        description: "Nivel 1: Satisfacción de los aprendices con el facilitador e instalaciones. Nivel 2: Comprobación de conocimientos adquiridos mediante pruebas pre y post.",
        badge: "Inmediato y Cognitivo"
      },
      {
        title: "Nivel 3: Comportamiento (Transferencia al Puesto)",
        description: "Medición a los 3-6 meses junto al gerente: Constata si las conductas aprendidas se trasladaron efectivamente a la rutina diaria laboral.",
        badge: "Transferencia Real"
      },
      {
        title: "Nivel 4: Resultados y Retorno de Inversión (ROI)",
        description: "Aumento de ventas, reducción de mermas y aplicación de la fórmula matemática de ROI: [(Beneficios - Costos) / Costos] * 100.",
        badge: "Fórmula de ROI"
      }
    ],
    diagramType: 'trainingKirkpatrick'
  },
  {
    id: 29,
    chapterId: 11,
    chapterTitle: "Cap. 11: Entrenamiento de Personal",
    category: "Síntesis Magistral",
    tag: "Clase Completa 4/11",
    title: "Síntesis Doctrinal de la Clase 4/11: El Ecosistema Integrador del Talento Humano",
    subtitle: "La articulación sinérgica entre Evaluación (8), Remuneración (9), Prestaciones (10) y Entrenamiento (11)",
    keyTakeaway: "Los cuatro capítulos conforman el motor central de la administración del personal: la evaluación diagnostica el rendimiento; la remuneración premia los logros con equidad; las prestaciones protegen al colaborador; y el entrenamiento desarrolla el potencial futuro.",
    speakerNotes: "Cierre magistral para la clase presencial del 4/11: articular los cuatro capítulos en una visión holística y sistémica. Mostrar cómo la Evaluación del Desempeño (Cap. 8) es el centro neurálgico que retroalimenta a la Remuneración (Cap. 9) para fijar aumentos por mérito, a las Prestaciones (Cap. 10) para ajustar beneficios según rendimiento y necesidades vitales, y al Entrenamiento (Cap. 11) como insumo maestro del DNC para cerrar brechas de competencias.",
    theoryQuote: "«Evaluar, recompensar y capacitar no son tareas aisladas: son los pilares interconectados que convierten a las personas en el activo más dinámico y competitivo de la organización moderna.» — Idalberto Chiavenato",
    bulletPoints: [
      {
        title: "Capítulo 8: El Diagnóstico del Rendimiento",
        description: "Identifica, mide y administra la contribución humana, detectando con objetividad las fortalezas y las brechas de competencias.",
        badge: "Diagnóstico"
      },
      {
        title: "Capítulos 9 y 10: La Motivación y Protección Total",
        description: "Cap. 9 asegura equidad interna y externa con salarios competitivos e incentivos; Cap. 10 brinda seguridad integral y planes flexibles.",
        badge: "Recompensas y Bienestar"
      },
      {
        title: "Capítulo 11: El Cierre de Brechas y Desarrollo Futuro",
        description: "Toma las brechas detectadas en la evaluación (Cap. 8) y las convierte en competencias a través del ciclo cibernético de capacitación.",
        badge: "Potenciación Competitiva"
      }
    ],
    diagramType: 'conclusions'
  }
];

export interface TraditionalMethodDetail {
  id: string;
  name: string;
  concept: string;
  structure: string;
  pros: string[];
  cons: string[];
  biasRisk: string;
  verdict: string;
}

export const TRADITIONAL_METHODS: TraditionalMethodDetail[] = [
  {
    id: "escalas-graficas",
    name: "Escalas Gráficas",
    concept: "Tabla de doble asiento donde las líneas horizontales representan factores previamente seleccionados y las columnas verticales representan grados de variación (ej. de pésimo a excelente o de 1 a 5).",
    structure: "Factores de desempeño (comportamientos, rasgos o resultados) x Grados de graduación continua o discontinua.",
    pros: [
      "Fácil planificación y construcción del instrumento.",
      "Sencillo de comprender y de aplicar por los evaluadores.",
      "Visión gráfica, global y rápida de los factores a evaluar.",
      "Facilita la comparación estadística entre varios trabajadores.",
      "Permite una realimentación directa de los puntajes al evaluado."
    ],
    cons: [
      "Superficial y altamente subjetivo.",
      "Genera severo Efecto Halo (un factor alto contamina a todos los demás).",
      "Peca de homogeneización de las singularidades individuales.",
      "Funciona como un sistema cerrado con factores rígidos prefijados.",
      "Nula participación activa del trabajador evaluado (es pasivo).",
      "Evalúa exclusivamente el desempeño anterior (orientación al pasado)."
    ],
    biasRisk: "Efecto Halo (Halo Effect), Tendencia Central y Benevolencia / Rigor.",
    verdict: "Ampliamente utilizado por su bajo costo, pero conceptualmente obsoleto si no se complementa con objetivos y feedback continuo."
  },
  {
    id: "eleccion-forzada",
    name: "Elección Forzada",
    concept: "Desarrollado durante la Segunda Guerra Mundial para neutralizar la subjetividad. Evalúa mediante bloques de frases descriptivas donde el evaluador debe elegir obligatoriamente las que más y menos representan al evaluado.",
    structure: "Bloques de 2 a 4 frases agrupadas por características de desempeño (+ más define / - menos define).",
    pros: [
      "Evita por completo el Efecto Halo en la calificación.",
      "Elimina la influencia y subjetividad personal del evaluador.",
      "No requiere capacitación previa exhaustiva de los evaluadores.",
      "Garantiza una distribución estadística neutral de los resultados."
    ],
    cons: [
      "Complejidad estadística extrema para diseñar y calibrar el instrumento.",
      "No proporciona una visión global ni cualitativa al evaluador.",
      "No permite la realimentación educativa ni orientativa al trabajador.",
      "Técnica poco contundente y genera sensación de 'caja negra'.",
      "El trabajador evaluado carece por completo de participación."
    ],
    biasRisk: "Cero subjetividad aparente, pero alta frustración y desconfianza en el proceso.",
    verdict: "Eficaz para auditorías frías de personal numeroso, pero inútil como herramienta de desarrollo y motivación de talento."
  },
  {
    id: "investigacion-campo",
    name: "Investigación de Campo",
    concept: "Método basado en la responsabilidad de línea (el gerente evalúa) y la función de staff (el especialista de RRHH asesora). Se realizan entrevistas estructuradas in situ para evaluar y planificar el futuro de cada trabajador.",
    structure: "Proceso estructurado en 4 fases: 1) Evaluación inicial, 2) Análisis complementario, 3) Planificación de medidas y 4) Seguimiento de resultados.",
    pros: [
      "Permite una evaluación cualitativa profunda y contextualizada.",
      "Articula sinérgicamente a la línea con los expertos de staff de RRHH.",
      "Hace hincapié en la mejora futura, capacitación y planes de acción.",
      "Permite proyectar sustitutos y cuadros de reemplazo para la organización.",
      "Genera planes de desarrollo concretos para el evaluado."
    ],
    cons: [
      "Costo operacional muy elevado por demandar tiempo de especialistas de staff.",
      "Proceso sumamente lento y tardado para organizaciones grandes.",
      "Poca participación directa del evaluado en el momento de la entrevista diagnóstica."
    ],
    biasRisk: "Sesgo mitigado por el contraste técnico entre el gerente y el analista de RRHH.",
    verdict: "El más completo de los métodos tradicionales; sentó las bases para el coaching y la consultoría interna de RRHH."
  },
  {
    id: "incidentes-criticos",
    name: "Incidentes Críticos",
    concept: "Técnica basada en la administración por excepciones (Taylor): no se ocupa del desempeño normal o promedio, sino de comportamientos extremos excepcionalmente positivos (éxitos) o negativos (fracasos).",
    structure: "Bitácora o formulario de dos columnas: aspectos excepcionalmente positivos vs. aspectos excepcionalmente negativos.",
    pros: [
      "Focaliza con nitidez las fortalezas sobresalientes y las fallas críticas.",
      "Permite reconocer y premiar aportes extraordinarios al negocio.",
      "Facilita identificar puntos neurálgicos que requieren corrección urgente.",
      "Método intuitivo, sencillo de instituir y fácil de registrar."
    ],
    cons: [
      "Ignora por completo el desempeño normal, cotidiano y regular del trabajador.",
      "Puede resultar tendencioso, punitivo y parcial si el líder solo anota fallas.",
      "Genera estrés y temor a cometer errores visibles."
    ],
    biasRisk: "Sesgo de disponibilidad (recordar solo lo más reciente o lo más dramático).",
    verdict: "Excelente como herramienta auxiliar de bitácora gerencial, pero incompleto como sistema integral de evaluación."
  },
  {
    id: "listas-verificacion",
    name: "Listas de Verificación (Checklists)",
    concept: "Método que enumera una serie de afirmaciones o factores descriptivos de la tarea y conductas del puesto, donde el evaluador asigna una ponderación o check cuantitativo.",
    structure: "Checklist simplificado de áreas de desempeño (ej. autonomía, actitud, puntualidad, liderazgo) graduadas numéricamente.",
    pros: [
      "Funciona como un recordatorio estructurado y rápido para el evaluador.",
      "Fácil estandarización para múltiples puestos de trabajo.",
      "Poco consumo de tiempo en su llenado."
    ],
    cons: [
      "Es una simplificación mecanicista de las escalas gráficas.",
      "Arrastra la misma superficialidad y rigidez de los cuestionarios tradicionales.",
      "No fomenta el diálogo profundo ni el compromiso del trabajador."
    ],
    biasRisk: "Tendencia a marcar opciones intermedias o de complacencia.",
    verdict: "Herramienta operativa básica, recomendable solo como soporte tabular preliminar."
  }
];

export interface EvaluatorModel {
  title: string;
  subtitle: string;
  role: string;
  pros: string;
  cons: string;
  context: string;
}

export const EVALUATOR_MODELS: EvaluatorModel[] = [
  {
    title: "Autoevaluación",
    subtitle: "El propio colaborador como sujeto de su desempeño",
    role: "Cada individuo evalúa permanentemente su actuación, metas, fortalezas y carencias con parámetros claros de su supervisor.",
    pros: "Estimula la madurez, la autodirección y la responsabilidad sobre el propio desarrollo profesional.",
    cons: "Requiere alta madurez cultural y criterios de referencia objetivos para neutralizar la subjetividad personal.",
    context: "Organizaciones abiertas, participativas, consultorías de innovación y trabajadores del conocimiento."
  },
  {
    title: "El Gerente de Línea",
    subtitle: "Responsabilidad de línea tradicional",
    role: "El líder directo supervisa, evalúa el desempeño y comunica formalmente los resultados a su equipo.",
    pros: "Claridad en la línea de mando; el gerente es quien más conoce el trabajo y la presencia cotidiana del colaborador.",
    cons: "Riesgo de juicios unilaterales, autoritarismo o sesgos personales; el gerente suele carecer de formación evaluativa.",
    context: "Estructuras organizacionales jerárquicas con apoyo de staff de RRHH para establecer criterios uniformes."
  },
  {
    title: "El Individuo y el Gerente",
    subtitle: "La fórmula bilateral de corresponsabilidad",
    role: "Reunión de diálogo e intercambio: el gerente aporta orientación, recursos y metas; el colaborador aporta esfuerzo y ejecución.",
    pros: "Transforma la evaluación en una negociación constructiva; reduce la brecha jerárquica y genera compromisos mutuos.",
    cons: "Demanda tiempo intensivo de entrevistas y capacidad dialógica en ambas partes.",
    context: "Empresas modernas orientadas a la Gestión por Objetivos (APPO/EPPO)."
  },
  {
    title: "El Equipo de Trabajo",
    subtitle: "Autorregulación grupal en células autónomas",
    role: "El grupo de trabajo evalúa el desempeño colectivo de la unidad y la aportación individual de cada uno de sus integrantes.",
    pros: "Fomenta la solidaridad, el compromiso con el resultado común y la eliminación del individualismo.",
    cons: "Puede generar tensiones internas de grupo, rivalidades interpersonales o condescendencia cómplice.",
    context: "Equipos autosuficientes, células ágiles (Scrum/Agile) y organizaciones sociotécnicas."
  },
  {
    title: "Evaluación Circular (360°)",
    subtitle: "Red envolvente de múltiples grupos de interés",
    role: "Califican el gerente, pares, colaboradores a cargo, clientes internos/externos, proveedores y la propia persona.",
    pros: "Visión panorámica de altísima riqueza; minimiza sesgos individuales; promueve el servicio al cliente y el clima de equipo.",
    cons: "Administrativamente compleja; riesgo de sobrecarga de evaluaciones; vulnerable a resentimientos si la cultura no es madura.",
    context: "Mandos medios, directivos y empresas con programas consolidados de Calidad Total y Excelencia."
  },
  {
    title: "Evaluación Hacia Arriba",
    subtitle: "El equipo evalúa el liderazgo del gerente",
    role: "Los colaboradores evalúan la eficacia con que su líder proporciona medios, elimina obstáculos y facilita el logro de metas.",
    pros: "Democratiza la gestión; permite detectar líderes tóxicos o ineficaces; promueve el estilo de liderazgo de servicio.",
    cons: "Puede generar temor a represalias si no se garantiza el anonimato y la seguridad psicológica de los subordinados.",
    context: "Cultura de feedback abierto, liderazgo participativo y organizaciones horizontales."
  },
  {
    title: "Comisión de Evaluación",
    subtitle: "Órgano colegiado permanente y transitorio",
    role: "Comité integrado por directivos estables (Presidente, Director de RRHH) y miembros transitorios (gerente del área evaluada).",
    pros: "Mantiene la coherencia de juicios, el respeto a las normas institucionales y la equidad global entre áreas.",
    cons: "Procedimiento lento, centralizador, burocrático y oneroso; percibe a las personas como números en una criba externa.",
    context: "Instituciones públicas, universidades o empresas con fuerte arraigo burocrático."
  },
  {
    title: "Órgano de Recursos Humanos",
    subtitle: "Modelo centralizado conservador (en desuso)",
    role: "El departamento de RRHH asume íntegramente la evaluación, recabando datos para emitir informes estandarizados.",
    pros: "Centralización técnica de bases de datos y normativas uniformes en toda la compañía.",
    cons: "Desconectado de la realidad operativa diaria; trata con medias aritméticas; resta flexibilidad y genera desapego de los líderes.",
    context: "Modelo en franco abandono en la teoría moderna de gestión del talento humano."
  }
];

export interface QuizQuestion {
  id: number;
  chapterId: number; // 8, 9, 10, 11
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  conceptTag: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==================== CAPÍTULO 8 (5 PREGUNTAS) ====================
  {
    id: 1,
    chapterId: 8,
    question: "¿Cuál es la definición teórica más precisa de la evaluación del desempeño según Chiavenato (Capítulo 8)?",
    options: [
      "Un formulario semestral para castigar o premiar el desempeño pasado.",
      "Una valoración sistemática de la actuación de cada persona en función de actividades, metas, competencias y potencial de desarrollo.",
      "Un control disciplinario exclusivo del órgano central de recursos humanos.",
      "La medición estricta del tiempo invertido por los obreros en las máquinas."
    ],
    correctAnswer: 1,
    explanation: "La evaluación del desempeño es una valoración sistemática y dinámica orientada a juzgar el valor, la excelencia y la aportación de la persona al negocio, estimando su potencial futuro.",
    conceptTag: "Concepto de Evaluación (Cap. 8)"
  },
  {
    id: 2,
    chapterId: 8,
    question: "En el modelo teórico de condicionantes del desempeño (Figura 8.1), ¿qué diferencia existe entre 'empeño' y 'desempeño'?",
    options: [
      "Son sinónimos idénticos en la teoría organizacional.",
      "El empeño es el esfuerzo o voluntad individual; el desempeño es el resultado útil alcanzado cuando ese esfuerzo se filtra por las competencias y la claridad del rol.",
      "El empeño lo mide el supervisor y el desempeño lo mide la dirección financiera.",
      "El empeño se refiere a las sanciones y el desempeño a los despidos."
    ],
    correctAnswer: 1,
    explanation: "Chiavenato subraya que 'empeño y desempeño son cosas muy distintas'. El empeño es el esfuerzo bruto; el desempeño efectivo requiere competencias y percepción nítida de la función.",
    conceptTag: "Factores Condicionantes (Cap. 8)"
  },
  {
    id: 3,
    chapterId: 8,
    question: "¿Qué es el 'Efecto Halo' (Halo Effect) en la evaluación por escalas gráficas?",
    options: [
      "El incremento voluntario de horas extras durante el mes de evaluación.",
      "La distorsión cognitiva por la cual el evaluador, influido por una impresión general o un solo rasgo, califica igual todos los demás factores independientes.",
      "La rotación voluntaria del personal tras recibir una compensación.",
      "La entrega puntual de las planillas de sueldos por recursos humanos."
    ],
    correctAnswer: 1,
    explanation: "El Efecto Halo es el principal sesgo de las escalas gráficas: la simpatía o antipatía general contamina y homogeneiza la calificación de todas las variables.",
    conceptTag: "Sesgos Evaluativos (Cap. 8)"
  },
  {
    id: 4,
    chapterId: 8,
    question: "¿Por qué fracasó la Administración por Objetivos (APO) clásica concebida por Peter Drucker en 1954 según Chiavenato?",
    options: [
      "Porque los objetivos numéricos no son aplicables a las empresas comerciales.",
      "Porque las organizaciones la desvirtuaron convirtiéndola en una rutina burocrática inflexible, vertical y coercitiva de la cima hacia abajo.",
      "Porque Peter Drucker canceló los derechos del modelo.",
      "Porque los sindicatos prohibieron el uso de metas en los contratos."
    ],
    correctAnswer: 1,
    explanation: "Drucker propuso la administración por objetivos y autocontrol (autodirección). La práctica empresarial burocrática la transformó en una rutina coercitiva y angustiante de arriba hacia abajo, perdiendo su esencia participativa.",
    conceptTag: "Origen de la EPPO (Cap. 8)"
  },
  {
    id: 5,
    chapterId: 8,
    question: "En la Evaluación Circular de 360 Grados, ¿quiénes califican la actuación del colaborador?",
    options: [
      "Únicamente el presidente de la corporación y el auditor contable.",
      "El superior jerárquico, los pares del mismo nivel, los subordinados, los clientes internos/externos, proveedores y la autoevaluación.",
      "El departamento legal y el tribunal de disciplina.",
      "Exclusivamente las agencias de empleo externas."
    ],
    correctAnswer: 1,
    explanation: "La evaluación de 360° abarca todo el entorno circular de 360 grados: gerente, colegas del mismo nivel, dependientes, clientes, proveedores y la propia persona evaluada.",
    conceptTag: "Evaluación 360° (Cap. 8)"
  },

  // ==================== CAPÍTULO 9 (5 PREGUNTAS) ====================
  {
    id: 6,
    chapterId: 9,
    question: "¿Cuáles son los tres componentes esenciales de la Remuneración Total según el Capítulo 9 de Chiavenato?",
    options: [
      "Sueldo básico, viáticos y deducciones sindicales.",
      "Remuneración básica (fija), incentivos salariales (variable) y prestaciones sociales (indirectas).",
      "Comisiones, multas disciplinarias y propinas.",
      "Préstamos bancarios, aguinaldo y subsidios estatales."
    ],
    correctAnswer: 1,
    explanation: "La remuneración total se compone de: 1) Remuneración básica (salario base fijo), 2) Incentivos salariales (bonos, comisiones, utilidades) y 3) Prestaciones y servicios (salud, previsión, vales).",
    conceptTag: "Remuneración Total (Cap. 9)"
  },
  {
    id: 7,
    chapterId: 9,
    question: "¿A qué se refiere la 'Equidad Interna' en la administración de compensaciones y cómo se garantiza?",
    options: [
      "A pagar exactamente lo mismo a todos los trabajadores sin importar el puesto.",
      "A asegurar una relación justa y coherente entre el valor de los puestos dentro de la empresa mediante la valuación técnica de puestos.",
      "A cobrar impuestos sobre los salarios de los directivos.",
      "A igualar los salarios con el promedio del mercado de la competencia."
    ],
    correctAnswer: 1,
    explanation: "La equidad interna se asegura mediante la valuación y clasificación de puestos, garantizando coherencia y justicia distributiva entre las diferentes responsabilidades dentro de la misma organización.",
    conceptTag: "Equidad Salarial (Cap. 9)"
  },
  {
    id: 8,
    chapterId: 9,
    question: "¿Cuál de los 4 métodos de Valuación de Puestos es cuantitativo, analítico y el más extendido globalmente (Point Rating)?",
    options: [
      "Método de Jerarquización simple.",
      "Método de Valuación por Puntos (Sistema Hay / Point Rating).",
      "Método de Categorías Predeterminadas.",
      "Método de sorteo por antigüedad."
    ],
    correctAnswer: 1,
    explanation: "El método de valuación por puntos descompone los puestos en factores compensables, asigna grados y pondera numéricamente con puntos, ofreciendo la mayor objetividad matemática del mercado.",
    conceptTag: "Valuación por Puntos (Cap. 9)"
  },
  {
    id: 9,
    chapterId: 9,
    question: "En las encuestas salariales y curvas de mercado, ¿qué representa situar la política salarial en el Percentil 75 (P75)?",
    options: [
      "Una estrategia de recorte de costos para pagar por debajo del promedio.",
      "Una política agresiva de liderazgo para pagar por encima del 75% del mercado y atraer talento de élite.",
      "Un congelamiento de salarios durante tres trimestres consecutivos.",
      "La obligación de contratar a personal sin experiencia previa."
    ],
    correctAnswer: 1,
    explanation: "El Percentil 75 (P75) es una postura de liderazgo salarial agresivo que retribuye por encima del 75% de las firmas competidoras, atrayendo a los mejores especialistas del sector.",
    conceptTag: "Curva Salarial y Percentiles (Cap. 9)"
  },
  {
    id: 10,
    chapterId: 9,
    question: "¿Qué ventaja estratégica otorga la Participación en Utilidades y Resultados (PLR) a la empresa?",
    options: [
      "Aumentar el salario básico fijo en el contrato formal.",
      "Flexibilizar los costos laborales ligando la retribución al EBITDA y al logro de metas, sin generar un pasivo salarial fijo rígido.",
      "Evitar pagar impuestos corporativos ante el fisco nacional.",
      "Eliminar el seguro médico obligatorio de los colaboradores."
    ],
    correctAnswer: 1,
    explanation: "La PLR convierte costos fijos en variables: cuando la empresa genera utilidades y cumple objetivos colectivos, comparte el excedente; si no hay beneficios, no se compromete la solvencia de la firma.",
    conceptTag: "Remuneración Variable / PLR (Cap. 9)"
  },

  // ==================== CAPÍTULO 10 (5 PREGUNTAS) ====================
  {
    id: 11,
    chapterId: 10,
    question: "Según el propósito de las prestaciones sociales (Capítulo 10), ¿cuál es la diferencia entre prestaciones asistenciales y supletorias?",
    options: [
      "Las asistenciales se pagan en efectivo y las supletorias en acciones de bolsa.",
      "Las asistenciales protegen ante contingencias y salud (médica, vida, guardería); las supletorias brindan facilidades cotidianas que ahorran tiempo y dinero (comedor, transporte).",
      "Las asistenciales son obligatorias y las supletorias están prohibidas por ley.",
      "No existe diferencia teórica; ambas persiguen exactamente el mismo fin."
    ],
    correctAnswer: 1,
    explanation: "Las prestaciones asistenciales brindan seguridad ante contingencias (salud, vida, invalidez); las supletorias o de conveniencia facilitan la vida diaria ahorrando tiempo y esfuerzo (comedor, transporte).",
    conceptTag: "Tipología de Prestaciones (Cap. 10)"
  },
  {
    id: 12,
    chapterId: 10,
    question: "¿Cuáles fueron las 4 fuerzas históricas impulsoras del surgimiento de las prestaciones sociales según Chiavenato?",
    options: [
      "La invención del dinero, los bancos centrales, la bolsa de valores y la imprenta.",
      "1) Demandas sindicales, 2) Legislación laboral de previsión social, 3) Competencia por retener talento, y 4) Deducciones e incentivos fiscales.",
      "Las guerras comerciales, la devaluación monetaria, los aranceles y las exportaciones.",
      "El trabajo a distancia, las redes sociales, el comercio electrónico y la robótica."
    ],
    correctAnswer: 1,
    explanation: "Chiavenato destaca que las prestaciones nacieron por la confluencia de reclamos sindicales, leyes laborales estatales, rivalidad por captar talentos calificados e incentivos tributarios gubernamentales.",
    conceptTag: "Orígenes de las Prestaciones (Cap. 10)"
  },
  {
    id: 13,
    chapterId: 10,
    question: "¿En qué consiste el modelo moderno de Prestaciones Flexibles o 'Planes Cafetería'?",
    options: [
      "En obligar a todos los empleados a desayunar en el comedor de la empresa.",
      "En permitir que cada colaborador diseñe su propio paquete de beneficios dentro de un presupuesto de puntos asignado, según su ciclo de vida.",
      "En eliminar todas las prestaciones legales para bajar costos.",
      "En otorgar vales de cafetería únicamente a los gerentes de área."
    ],
    correctAnswer: 1,
    explanation: "Los planes flexibles (cafetería) superan el paquete estándar homogéneo: cada empleado elige las opciones que realmente valora (salud, guardería, pensión o educación) dentro de un tope presupuestario.",
    conceptTag: "Planes Cafetería (Cap. 10)"
  },
  {
    id: 14,
    chapterId: 10,
    question: "¿Qué postula el 'Principio del Rendimiento de la Inversión' (ROI) en el diseño de prestaciones de Chiavenato?",
    options: [
      "Que los beneficios son una dádiva caritativa incondicional.",
      "Que toda prestación debe justificarse en un retorno medible para la organización (reducción de ausentismo, menor rotación y mayor productividad).",
      "Que el empleado debe devolver el dinero de los beneficios al renunciar.",
      "Que las prestaciones solo se pagan si las acciones de bolsa suben de precio."
    ],
    correctAnswer: 1,
    explanation: "Ninguna prestación debe ser un simple acto paternalista: la empresa debe verificar un retorno económico y operativo real a través de menores tasas de ausentismo y retención del capital humano.",
    conceptTag: "Principio de Rendimiento (Cap. 10)"
  },
  {
    id: 15,
    chapterId: 10,
    question: "¿Por qué Chiavenato defiende el 'Principio de la Responsabilidad Compartida' (copago empresa-empleado)?",
    options: [
      "Para castigar económicamente a los empleados que se enferman seguido.",
      "Porque los beneficios 100% gratuitos suelen despilfarrarse o desvalorizarse; la cofinanciación fomenta el aprecio real y el uso responsable.",
      "Para que el departamento de recursos humanos no tenga que hacer trámites contables.",
      "Porque la ley laboral prohíbe pagar el 100% de la salud privada."
    ],
    correctAnswer: 1,
    explanation: "La responsabilidad compartida (copago) hace que el trabajador valore genuinamente el servicio y evita el abuso o la sobreutilización negligente de las prestaciones médicas y asistenciales.",
    conceptTag: "Responsabilidad Compartida (Cap. 10)"
  },

  // ==================== CAPÍTULO 11 (5 PREGUNTAS) ====================
  {
    id: 16,
    chapterId: 11,
    question: "¿Cuál es la diferencia conceptual capital entre 'Entrenamiento' y 'Desarrollo de Personas' en el Capítulo 11?",
    options: [
      "El entrenamiento es solo para operarios de fábrica y el desarrollo para contadores.",
      "El entrenamiento es de corto plazo y enfocado en el puesto actual; el desarrollo es de largo plazo y enfocado en la carrera futura y potencial de la persona.",
      "El entrenamiento lo dictan instructores extranjeros y el desarrollo profesores universitarios.",
      "No existe diferencia alguna en la doctrina de Chiavenato."
    ],
    correctAnswer: 1,
    explanation: "Entrenamiento = corto plazo, tareas tácticas operativas en el cargo presente. Desarrollo = largo plazo, ampliación del potencial holístico para cargos de mayor complejidad futura.",
    conceptTag: "Entrenamiento vs Desarrollo (Cap. 11)"
  },
  {
    id: 17,
    chapterId: 11,
    question: "¿Cuáles son los 3 niveles de análisis sistemático en el Diagnóstico de Necesidades de Capacitación (DNC)?",
    options: [
      "Nivel Nacional, Nivel Provincial y Nivel Municipal.",
      "1) Análisis Organizacional (macro), 2) Análisis de Recursos Humanos (medio), y 3) Análisis de Operaciones y Puestos (micro).",
      "Nivel Directivo, Nivel Administrativo y Nivel Tercerizado.",
      "Nivel Pasado, Nivel Presente y Nivel Futuro sin base técnica."
    ],
    correctAnswer: 1,
    explanation: "El DNC de Chiavenato investiga en 3 niveles: el sistema organizacional (metas estratégicas), el sistema de recursos humanos (competencias colectivas) y el sistema de operaciones (tareas del puesto y fallas).",
    conceptTag: "Los 3 Niveles del DNC (Cap. 11)"
  },
  {
    id: 18,
    chapterId: 11,
    question: "En el diseño curricular del entrenamiento (Etapa 2), ¿cuáles son las 7 preguntas metodológicas esenciales?",
    options: [
      "Quién compra, quién vende, cuánto vale, en qué moneda, cuándo paga, dónde factura y por qué.",
      "¿A quién, quién, sobre qué, dónde, cómo, cuándo y para qué entrenar?",
      "Las preguntas de la entrevista de selección de personal únicamente.",
      "Las preguntas del examen médico preocupacional."
    ],
    correctAnswer: 1,
    explanation: "Las 7 preguntas curriculares definen aprendices, facilitador, contenido, espacio pedagógico, metodología didáctica, calendario y objetivos de negocio esperados.",
    conceptTag: "Diseño y 7 Preguntas (Cap. 11)"
  },
  {
    id: 19,
    chapterId: 11,
    question: "En el Modelo de 4 Niveles de Donald Kirkpatrick, ¿qué mide específicamente el Nivel 3 (Comportamiento)?",
    options: [
      "La simpatía que los participantes sienten por el instructor en la primera clase.",
      "La transferencia efectiva y aplicación de los nuevos saberes y hábitos en las tareas del puesto a los 3-6 meses.",
      "El porcentaje de preguntas acertadas en el examen escrito al terminar el curso.",
      "El costo monetario del diploma de certificación."
    ],
    correctAnswer: 1,
    explanation: "El Nivel 3 (Comportamiento/Transferencia) es la prueba de fuego: mide si el conocimiento adquirido en el aula se traslada a la realidad operativa del trabajo y se sostiene en el tiempo.",
    conceptTag: "Modelo Kirkpatrick (Cap. 11)"
  },
  {
    id: 20,
    chapterId: 11,
    question: "¿Cómo se calcula formalmente el Retorno sobre la Inversión (ROI) de un programa de entrenamiento (Nivel 4)?",
    options: [
      "Dividiendo las horas de clase por la cantidad de alumnos matriculados.",
      "ROI (%) = [(Beneficios Netos Obtenidos - Costos Totales) / Costos Totales] * 100.",
      "Sumando los salarios de los instructores con los gastos de papelería.",
      "Comparando el presupuesto de marketing con el presupuesto de ventas."
    ],
    correctAnswer: 1,
    explanation: "La fórmula estándar de Phillips para el ROI del entrenamiento contrasta el beneficio neto financiero (ahorros de desperdicio, aumento de ventas) con el costo integral del programa formativo.",
    conceptTag: "Fórmula de ROI Pedagógico (Cap. 11)"
  }
];

export interface ConceptGlossaryItem {
  term: string;
  chapterId: number; // 8, 9, 10, 11
  category: string;
  definition: string;
  practicalImplication: string;
  relatedSlideId: number;
}

export const CONCEPT_GLOSSARY: ConceptGlossaryItem[] = [
  // ==================== CAPÍTULO 8 (6 TÉRMINOS) ====================
  {
    term: "Evaluación del Desempeño",
    chapterId: 8,
    category: "Desempeño",
    definition: "Valoración sistemática y continua de la actuación individual en función de metas, competencias, resultados y potencial futuro.",
    practicalImplication: "Debe servir como brújula de crecimiento y alineación estratégica, no como instrumento de fiscalización punitiva.",
    relatedSlideId: 1
  },
  {
    term: "Efecto Halo (Halo Effect)",
    chapterId: 8,
    category: "Sesgo",
    definition: "Tendencia del evaluador a emitir una calificación generalizada en todos los factores basándose en una impresión global previa o en un único atributo llamativo.",
    practicalImplication: "Invalida la discriminación objetiva entre fortalezas y debilidades reales del evaluado en escalas gráficas.",
    relatedSlideId: 7
  },
  {
    term: "EPPO / APPO",
    chapterId: 8,
    category: "Desempeño",
    definition: "Evaluación / Administración Participativa por Objetivos. Sistema democrático de fijación bilateral de metas, provisión de recursos y autocontrol de resultados.",
    practicalImplication: "Empodera al trabajador otorgándole libertad en la elección de medios mientras asume la responsabilidad del resultado final.",
    relatedSlideId: 9
  },
  {
    term: "Evaluación Circular (360°)",
    chapterId: 8,
    category: "Desempeño",
    definition: "Modelo de realimentación circular donde convergen las evaluaciones de superiores, pares, subordinados, clientes y autoevaluación.",
    practicalImplication: "Otorga una imagen fidedigna del desempeño interpersonal y servicio, ideal para líderes y gestión de calidad.",
    relatedSlideId: 6
  },
  {
    term: "Contrato de Desempeño",
    chapterId: 8,
    category: "Desempeño",
    definition: "Pacto explícito (formal y psicológico) entre el gerente y el colaborador que define responsabilidades básicas, estándares de éxito y recursos comprometidos.",
    practicalImplication: "Sienta las reglas del juego: el trabajador exige medios idóneos y la gerencia exige resultados objetivos.",
    relatedSlideId: 10
  },
  {
    term: "Performance Management",
    chapterId: 8,
    category: "Desempeño",
    definition: "Enfoque holístico que trasciende la medición aislada anual para gestionar activamente el contexto, las competencias y la retroalimentación continua.",
    practicalImplication: "Convierte al líder en coach y alineador estratégico cotidiano de su equipo.",
    relatedSlideId: 10
  },

  // ==================== CAPÍTULO 9 (6 TÉRMINOS) ====================
  {
    term: "Remuneración Total",
    chapterId: 9,
    category: "Compensación",
    definition: "Retribución global que recibe el trabajador integrada por salario básico, incentivos salariales vinculados a resultados y prestaciones sociales.",
    practicalImplication: "Permite balancear la seguridad fija con el estímulo variable a la productividad y la retención del talento.",
    relatedSlideId: 11
  },
  {
    term: "Salario Real vs. Nominal",
    chapterId: 9,
    category: "Compensación",
    definition: "El salario nominal es la suma monetaria formal en el recibo de sueldo; el salario real es el poder adquisitivo efectivo según la canasta de precios (IPC).",
    practicalImplication: "La gestión salarial debe monitorear la inflación para evitar la desvalorización oculta del poder de compra.",
    relatedSlideId: 11
  },
  {
    term: "Valuación de Puestos",
    chapterId: 9,
    category: "Compensación",
    definition: "Técnica cuantitativa o cualitativa para tasar el valor relativo de cada puesto dentro de la organización con el fin de asegurar equidad interna.",
    practicalImplication: "Elimina la arbitrariedad salarial, garantiza justicia laboral y previene conflictos gremiales por discriminación salarial.",
    relatedSlideId: 14
  },
  {
    term: "Valuación por Puntos (Point Rating)",
    chapterId: 9,
    category: "Compensación",
    definition: "Método cuantitativo analítico que descompone puestos en factores compensables ponderados numéricamente con grados y puntos.",
    practicalImplication: "Es el estándar corporativo global (Método Hay) que proporciona máxima objetividad matemática.",
    relatedSlideId: 14
  },
  {
    term: "Franjas Salariales (Salary Bands)",
    chapterId: 9,
    category: "Compensación",
    definition: "Estructura de grados salariales delimitados por un valor mínimo, un punto medio (midpoint) y un valor máximo (spread de 30% a 50%).",
    practicalImplication: "Permite otorgar aumentos salariales por mérito y desempeño sin necesidad de cambiar forzosamente al empleado de puesto.",
    relatedSlideId: 15
  },
  {
    term: "PLR (Participación en Resultados)",
    chapterId: 9,
    category: "Compensación",
    definition: "Modalidad de remuneración variable que distribuye un porcentaje de utilidades o excedentes según metas corporativas y departamentales.",
    practicalImplication: "Alinea al personal con la rentabilidad (EBITDA) y convierte costos fijos rígidos en variables según el éxito del negocio.",
    relatedSlideId: 16
  },

  // ==================== CAPÍTULO 10 (6 TÉRMINOS) ====================
  {
    term: "Salario Indirecto",
    chapterId: 10,
    category: "Beneficios",
    definition: "Conjunto de prestaciones sociales, servicios y facilidades que complementan la retribución monetaria directa.",
    practicalImplication: "Representa entre el 30% y el 60% del costo salarial de la empresa y funciona como escudo de protección social.",
    relatedSlideId: 17
  },
  {
    term: "Prestaciones Legales vs. Espontáneas",
    chapterId: 10,
    category: "Beneficios",
    definition: "Las legales son obligatorias por normativa estatal (aguinaldo, vacaciones); las espontáneas son voluntarias de la empresa (medicina prepaga, vales).",
    practicalImplication: "Las prestaciones espontáneas son las que construyen la marca empleadora y generan ventaja competitiva real.",
    relatedSlideId: 18
  },
  {
    term: "Prestaciones Asistenciales",
    chapterId: 10,
    category: "Beneficios",
    definition: "Servicios y coberturas orientadas a proteger la salud y la seguridad del trabajador y su familia ante imprevistos (asistencia médica, pensión, guardería).",
    practicalImplication: "Aportan tranquilidad psicológica al colaborador, disminuyendo distracciones y estrés fuera del trabajo.",
    relatedSlideId: 19
  },
  {
    term: "Prestaciones Supletorias",
    chapterId: 10,
    category: "Beneficios",
    definition: "Facilidades de conveniencia que ahorran tiempo, energía y dinero al empleado en su jornada cotidiana (comedor en planta, transporte corporativo).",
    practicalImplication: "Aumentan la puntualidad, disminuyen la fatiga física y facilitan la logística diaria de los colaboradores.",
    relatedSlideId: 19
  },
  {
    term: "Planes Cafetería (Flexibles)",
    chapterId: 10,
    category: "Beneficios",
    definition: "Sistema en el que el empleado autogestiona su paquete de beneficios eligiendo entre múltiples opciones dentro de un límite de puntos presupuestarios.",
    practicalImplication: "Maximiza la satisfacción percibida del colaborador sin incrementar el costo financiero de la empresa.",
    relatedSlideId: 21
  },
  {
    term: "Principio de Responsabilidad Compartida",
    chapterId: 10,
    category: "Beneficios",
    definition: "Criterio de diseño que prescribe la cofinanciación (copago) de los beneficios entre la empresa y el empleado.",
    practicalImplication: "Evita el despilfarro, crea cultura de madurez y eleva la apreciación subjetiva del servicio provisto.",
    relatedSlideId: 22
  },

  // ==================== CAPÍTULO 11 (6 TÉRMINOS) ====================
  {
    term: "Entrenamiento (Training)",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Proceso educacional de corto plazo enfocado en el puesto actual para transmitir información y desarrollar habilidades operativas inmediatas.",
    practicalImplication: "Resuelve problemas tácticos presentes, reduce mermas operativas y eleva la calidad del trabajo diario.",
    relatedSlideId: 23
  },
  {
    term: "Desarrollo de Personas (Development)",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Proceso de mediano y largo plazo orientado al crecimiento integral del colaborador y su preparación para la carrera futura.",
    practicalImplication: "Construye el semillero de líderes y asegura la continuidad estratégica de la organización.",
    relatedSlideId: 23
  },
  {
    term: "Diagnóstico de Necesidades (DNC)",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Primera etapa del ciclo de entrenamiento que identifica las brechas entre el desempeño actual y los estándares requeridos por la organización.",
    practicalImplication: "Asegura que el presupuesto de capacitación resuelva problemas reales del negocio y no modas teóricas.",
    relatedSlideId: 24
  },
  {
    term: "On-the-Job Training",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Modalidad de instrucción en el propio puesto de trabajo a través del modelado del supervisor y la práctica directa.",
    practicalImplication: "Máxima transferencia inmediata y mínimo costo logístico, aunque requiere supervisión cuidadosa.",
    relatedSlideId: 27
  },
  {
    term: "Transferencia al Puesto (Kirkpatrick N3)",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Tercer nivel de evaluación de Donald Kirkpatrick que verifica si las conductas aprendidas se aplican en la rutina laboral cotidiana a los 3-6 meses.",
    practicalImplication: "Evita el 'efecto curso': que el aprendizaje se quede en el aula y no cambie la realidad del puesto.",
    relatedSlideId: 28
  },
  {
    term: "ROI de Capacitación (Phillips / N4)",
    chapterId: 11,
    category: "Entrenamiento",
    definition: "Cálculo matemático formal que relaciona los beneficios netos obtenidos (ahorros, ventas) con los costos totales del entrenamiento.",
    practicalImplication: "Justifica ante el directorio la capacitación como inversión de alto rendimiento y no como gasto prescindible.",
    relatedSlideId: 28
  }
];
