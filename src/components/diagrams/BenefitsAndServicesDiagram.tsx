import React, { useState } from 'react';
import { Gift, Shield, HeartHandshake, Coffee, Scale, Users, CheckCircle, Sliders, DollarSign, TrendingDown, Sparkles } from 'lucide-react';

interface Props {
  initialTab?: 'classification' | 'cafeteria' | 'principles' | 'costs';
}

export const BenefitsAndServicesDiagram: React.FC<Props> = ({ initialTab = 'classification' }) => {
  const [activeTab, setActiveTab] = useState<'classification' | 'cafeteria' | 'principles' | 'costs'>(initialTab);

  // Cafeteria flexible plan simulator state
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>(['salud', 'comedor']);
  const [activeProfile, setActiveProfile] = useState<'custom' | 'junior' | 'family' | 'senior'>('custom');
  const totalBudgetPoints = 100;

  const benefitOptions = [
    { id: 'salud', name: 'Seguro Médico Integral Privado (Medicina Prepaga)', points: 35, category: 'Asistencial', tag: 'Salud y Cobertura' },
    { id: 'comedor', name: 'Vales de Alimentación / Comedor en Planta', points: 20, category: 'Supletoria', tag: 'Ahorro Diario' },
    { id: 'guarderia', name: 'Subsidio Guardería / Sala Maternal', points: 20, category: 'Asistencial', tag: 'Familia con Hijos' },
    { id: 'transporte', name: 'Transporte Corporativo / Tarjeta Combustible', points: 15, category: 'Supletoria', tag: 'Movilidad' },
    { id: 'gimnasio', name: 'Membresía Gimnasio y Bienestar Físico', points: 15, category: 'Recreativa', tag: 'Calidad de Vida' },
    { id: 'pension', name: 'Fondo de Jubilación / Pensión Complementaria', points: 25, category: 'Asistencial', tag: 'Previsión Futura' },
    { id: 'estudios', name: 'Beca de Capacitación y Posgrado', points: 25, category: 'Desarrollo', tag: 'Crecimiento' },
    { id: 'dias_extra', name: 'Días Libres por Cumpleaños y Trámites', points: 10, category: 'Recreativa', tag: 'Tiempo Libre' }
  ];

  const applyProfile = (profile: 'junior' | 'family' | 'senior') => {
    setActiveProfile(profile);
    if (profile === 'junior') {
      setSelectedBenefits(['estudios', 'gimnasio', 'dias_extra', 'comedor', 'transporte']);
    } else if (profile === 'family') {
      setSelectedBenefits(['salud', 'guarderia', 'comedor', 'transporte']);
    } else if (profile === 'senior') {
      setSelectedBenefits(['salud', 'pension', 'dias_extra', 'comedor']);
    }
  };

  const currentPoints = selectedBenefits.reduce((sum, id) => {
    const item = benefitOptions.find(b => b.id === id);
    return sum + (item ? item.points : 0);
  }, 0);

  const toggleBenefit = (id: string, cost: number) => {
    setActiveProfile('custom');
    if (selectedBenefits.includes(id)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== id));
    } else {
      if (currentPoints + cost <= totalBudgetPoints) {
        setSelectedBenefits([...selectedBenefits, id]);
      }
    }
  };

  const classifications = [
    {
      criteria: "1. Por su Exigibilidad Legal",
      badge: "Legal vs. Voluntario",
      color: "from-blue-600 to-indigo-700",
      items: [
        {
          title: "Prestaciones Legales (Obligatorias)",
          desc: "Impuestas con fuerza vinculante por la legislación laboral nacional y convenios colectivos obligatorios.",
          examples: "Aguinaldo (sueldo 13), vacaciones anuales pagadas, licencias por maternidad/paternidad, aportes a la seguridad social y fondo de jubilación obligatorio, indemnización por despido injustificado."
        },
        {
          title: "Prestaciones Espontáneas (Voluntarias)",
          desc: "Otorgadas por decisión estratégica y generosidad voluntaria de la empresa para atraer y retener talento calificado.",
          examples: "Seguro médico privado (prepaga), vales de despensa, seguro de vida colectivo, planes privados de pensión, préstamos personales de emergencia, convenios educativos con universidades."
        }
      ]
    },
    {
      criteria: "2. Por su Propósito / Naturaleza",
      badge: "Asistencial, Recreativo, Supletorio",
      color: "from-emerald-600 to-teal-700",
      items: [
        {
          title: "Prestaciones Asistenciales",
          desc: "Proporcionan seguridad y protección al empleado y a su familia frente a contingencias e imprevistos de salud o fuerza mayor.",
          examples: "Asistencia médica integral, seguro de vida, subsidio por incapacidad médica o invalidez, farmacia con descuento, guardería infantil."
        },
        {
          title: "Prestaciones Recreativas",
          desc: "Ofrecen descanso físico, higiene mental, relajación y actividades de integración social y esparcimiento.",
          examples: "Clubes sociales y deportivos, colonias de vacaciones para hijos de empleados, salas de juegos y pausas activas, paseos corporativos."
        },
        {
          title: "Prestaciones Supletorias (Conveniencia)",
          desc: "Brindan facilidades, comodidades y servicios prácticos que le ahorran tiempo, energía y dinero al empleado en su rutina cotidiana.",
          examples: "Comedor subsidiado en planta, servicio de transporte puerta a puerta, estacionamiento privado, cooperativa de consumo, guardería en el lugar de trabajo."
        }
      ]
    },
    {
      criteria: "3. Por su Forma de Pago / Financiación",
      badge: "Monetario vs. No Monetario",
      color: "from-purple-600 to-pink-700",
      items: [
        {
          title: "Prestaciones Monetarias",
          desc: "Se abonan directamente en dinero contante o depósitos bancarios como complemento al sueldo formal.",
          examples: "Aguinaldo legal, primas y plus vacacional, gratificaciones de fin de año, bonos de compensación por costo de vida, reembolso en efectivo de gastos médicos."
        },
        {
          title: "Prestaciones No Monetarias (En Especie)",
          desc: "Servicios, infraestructura y facilidades directas provistas en especie para el consumo del colaborador.",
          examples: "Atención directa en consultorio médico de planta, comida en comedor empresarial, transporte colectivo corporativo, uniformes y ropa de trabajo."
        }
      ]
    }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header with Title and Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-800/40">
              Capítulo 10 • Prestaciones y Servicios Sociales
            </span>
            <span className="text-xs text-slate-400 font-mono">Chiavenato</span>
          </div>
          <h4 className="text-lg font-bold text-slate-100 mt-1">Salario Indirecto y Planes Flexibles (Cafetería)</h4>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('classification')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'classification' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Taxonomía Teórica (3 Ejes)
          </button>
          <button
            onClick={() => setActiveTab('cafeteria')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'cafeteria' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Simulador Plan Cafetería
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'principles' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Principios de Diseño
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
              activeTab === 'costs' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Costo de Nómina y ROI
          </button>
        </div>
      </div>

      {/* TAB 1: TAXONOMÍA TEÓRICA EN 3 EJES */}
      {activeTab === 'classification' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            Las prestaciones sociales constituyen el <strong>salario indirecto</strong>. Chiavenato establece una estricta taxonomía teórica basada en <strong className="text-teal-300">tres criterios fundamentales</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {classifications.map((cl, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                      Criterio {i + 1}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{cl.badge}</span>
                  </div>
                  <h5 className="font-bold text-sm text-slate-100 mb-3">{cl.criteria}</h5>

                  <div className="space-y-2.5">
                    {cl.items.map((it, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs space-y-1">
                        <strong className="text-teal-300 block">{it.title}</strong>
                        <p className="text-slate-300 text-[11px] leading-relaxed">{it.desc}</p>
                        <p className="text-slate-400 text-[10px] pt-1 border-t border-slate-800">
                          <strong className="text-slate-400 font-semibold">Ejemplos:</strong> {it.examples}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SIMULADOR PLAN CAFETERÍA FLEXIBLE */}
      {activeTab === 'cafeteria' && (
        <div className="space-y-4 text-xs">
          <div className="p-3.5 rounded-xl bg-teal-950/25 border border-teal-800/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="font-bold text-teal-300 block text-xs">
                El Nuevo Paradigma: Prestaciones Flexibles (Planes Cafetería)
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Supera el viejo modelo uniforme de paquete idéntico para todos. Cada colaborador administra un saldo de puntos presupuestarios y elige libremente las prestaciones que mejor se adapten a su <strong>ciclo vital</strong>:
              </p>
            </div>
            <div className="bg-slate-950 px-3.5 py-2 rounded-lg border border-slate-800 text-center shrink-0">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Puntos Utilizados</span>
              <span className={`text-base font-extrabold ${currentPoints > 90 ? 'text-amber-400' : 'text-teal-400'}`}>
                {currentPoints} / {totalBudgetPoints} pts
              </span>
            </div>
          </div>

          {/* Quick Archetype Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs font-semibold">Cargar Arquetipo Vital:</span>
            <button
              onClick={() => applyProfile('junior')}
              className={`px-2.5 py-1 rounded text-xs transition-all ${activeProfile === 'junior' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'}`}
            >
              Joven Soltero (Formación + Deporte)
            </button>
            <button
              onClick={() => applyProfile('family')}
              className={`px-2.5 py-1 rounded text-xs transition-all ${activeProfile === 'family' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'}`}
            >
              Con Hijos Pequeños (Salud + Guardería)
            </button>
            <button
              onClick={() => applyProfile('senior')}
              className={`px-2.5 py-1 rounded text-xs transition-all ${activeProfile === 'senior' ? 'bg-teal-600 text-white font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'}`}
            >
              Profesional Senior (Previsión y Pensión)
            </button>
          </div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            {benefitOptions.map((opt) => {
              const isSelected = selectedBenefits.includes(opt.id);
              const canAdd = isSelected || currentPoints + opt.points <= totalBudgetPoints;
              return (
                <button
                  key={opt.id}
                  onClick={() => toggleBenefit(opt.id, opt.points)}
                  disabled={!canAdd}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-950/40 border-teal-400 ring-1 ring-teal-400 shadow-md'
                      : canAdd
                      ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-950/30 border-slate-900 opacity-40 cursor-not-allowed'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-teal-400 border border-slate-800">
                        {opt.category}
                      </span>
                      <span className="font-mono font-bold text-teal-300 text-xs">
                        {opt.points} pts
                      </span>
                    </div>
                    <div className="font-bold text-slate-200 text-xs mb-1">{opt.name}</div>
                    <span className="text-[10px] text-slate-400 block mb-2">{opt.tag}</span>
                  </div>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-300' : 'text-slate-500'}`}>
                    {isSelected ? '✓ Activo en mi plan' : '+ Agregar a mi paquete'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: PRINCIPIOS DE DISEÑO (CHIAVENATO) */}
      {activeTab === 'principles' && (
        <div className="space-y-4 text-xs">
          <p className="text-xs text-slate-300">
            Chiavenato advierte que las prestaciones no pueden diseñarse como un acto caritativo paternalista, sino con base en <strong className="text-teal-300">principios rectores estratégicos</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-teal-300 font-bold uppercase tracking-wider text-xs">
                <Scale className="w-4 h-4 text-teal-400" />
                <span>1. Principio del Rendimiento de la Inversión (ROI)</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                Ninguna prestación debe concederse sin evaluar previamente su retorno en valor para la compañía. El beneficio debe traducirse en:
              </p>
              <ul className="text-slate-400 text-xs space-y-1.5 pl-1">
                <li>• Reducción sensible del <strong>ausentismo laboral</strong> y licencias médicas.</li>
                <li>• Disminución de la <strong>rotación de personal (turnover)</strong> y costos de reemplazo.</li>
                <li>• Elevación de la <strong>productividad</strong> y atracción de talentos escasos.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-teal-300 font-bold uppercase tracking-wider text-xs">
                <HeartHandshake className="w-4 h-4 text-teal-400" />
                <span>2. Principio de la Responsabilidad Compartida</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                El diseño óptimo de beneficios es el <strong>mutuo y cofinanciado</strong> entre la empresa y el empleado (copago de salud, aportes 1 a 1 a pensión privada):
              </p>
              <ul className="text-slate-400 text-xs space-y-1.5 pl-1">
                <li>• El empleado valora más lo que cofinancia que lo que recibe como regalo gratuito.</li>
                <li>• Frena el despilfarro y el uso abusivo o negligente de los servicios médicos.</li>
                <li>• Fomenta una cultura de corresponsabilidad y madurez organizacional.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: COSTO DE NÓMINA Y ROI */}
      {activeTab === 'costs' && (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-bold">
                <DollarSign className="w-4 h-4" />
                <span>Peso Presupuestario</span>
              </div>
              <div className="text-2xl font-black text-slate-100 font-mono">30% - 60%</div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                En empresas de vanguardia, las prestaciones representan entre un tercio y más de la mitad del costo total de la nómina salarial.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <TrendingDown className="w-4 h-4" />
                <span>Retorno en Rotación</span>
              </div>
              <div className="text-2xl font-black text-emerald-300 font-mono">-40% Turnover</div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Un paquete integral de salud, cuidado infantil y flexibilidad disminuye drásticamente la fuga de talento calificado y costos de onboarding.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Ventaja Fiscal y Tributaria</span>
              </div>
              <div className="text-2xl font-black text-blue-300 font-mono">Deducción Fiscal</div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                A diferencia de los aumentos salariales directos (gravados con altas cargas sociales), muchas prestaciones son deducibles del impuesto corporativo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>Las prestaciones transforman el salario monetario en bienestar, seguridad y calidad de vida.</span>
        <span className="text-teal-400 font-mono font-semibold">Chiavenato • Cap. 10</span>
      </div>
    </div>
  );
};
