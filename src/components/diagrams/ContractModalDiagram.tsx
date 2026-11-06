import React, { useState } from 'react';
import { FileSignature, CheckCircle2, Sliders, MessageSquare, AlertCircle } from 'lucide-react';

export const ContractModalDiagram: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('90');

  const contractItems = [
    {
      resp: "Gestión de Procesos y Flujo de Trabajo",
      norma: "Cumplimiento del 98% en entregas a tiempo, cero cuellos de botella no reportados y optimización de recursos.",
      level: 92
    },
    {
      resp: "Calidad Técnica y Cero Defectos",
      norma: "Menos de 2% de tasa de error o retrabajo; apego estricto a estándares metodológicos del área.",
      level: 88
    },
    {
      resp: "Liderazgo y Sinergia de Equipo",
      norma: "Proveer retroalimentación constructiva semanal a pares y subordinados; clima de cooperación superior al 85%.",
      level: 79
    },
    {
      resp: "Innovación y Mejora Continua",
      norma: "Presentación e implantación de al menos una iniciativa trimestral de automatización o simplificación del proceso.",
      level: 95
    }
  ];

  const tiers: Record<string, { label: string; desc: string; action: string; badgeColor: string }> = {
    '50': {
      label: "< 50% (Crítico / Insatisfactorio)",
      desc: "Desempeño gravemente por debajo de los parámetros acordados. Riesgo operativo.",
      action: "Entrevista de emergencia, diagnóstico exhaustivo de causas, advertencia formal y plan urgente de remediación o reubicación.",
      badgeColor: "bg-rose-950/60 border-rose-800 text-rose-300"
    },
    '75': {
      label: "50 - 75% (Tolerable / En Desarrollo)",
      desc: "Cumplimiento parcial de normas. Esfuerzo presente pero con brechas de competencia o recursos faltantes.",
      action: "Asignación inmediata de entrenamiento técnico específico, tutoría (coaching) cercana y seguimiento quincenal.",
      badgeColor: "bg-amber-950/60 border-amber-800 text-amber-300"
    },
    '90': {
      label: "76 - 90% (Satisfactorio / Bueno)",
      desc: "Cumple cabalmente con los requisitos del puesto y las normas de desempeño concertadas.",
      action: "Consolidación de logros, ajustes menores de eficiencia y preparación para asumir mayores responsabilidades.",
      badgeColor: "bg-blue-950/60 border-blue-800 text-blue-300"
    },
    '100': {
      label: "> 90% (Excelente / Superior)",
      desc: "Supera sistemáticamente los parámetros fijados; aporta valor innovador y modela el comportamiento del equipo.",
      action: "Celebración y reconocimiento público, remuneración variable/bono, asignación a proyectos estratégicos y plan de sucesión.",
      badgeColor: "bg-emerald-950/60 border-emerald-800 text-emerald-300"
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
            Figura 8.16 & 8.17 • Instrumento Operativo
          </span>
          <h4 className="text-lg font-bold text-slate-100 mt-1">El Contrato de Desempeño y Registro de Resultados</h4>
        </div>
        <p className="text-xs text-slate-400">
          El pacto bilateral entre Responsabilidades Básicas y Normas de Desempeño
        </p>
      </div>

      {/* Contract Simulation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Left: The Performance Contract Elements */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
            <FileSignature className="w-4 h-4 text-emerald-400" />
            <span>Matriz de Responsabilidades y Normas Concertadas</span>
          </div>

          <div className="space-y-2.5">
            {contractItems.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-slate-200">{item.resp}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                    item.level > 90 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                    item.level > 75 ? 'bg-blue-950 text-blue-300 border border-blue-800' :
                    'bg-amber-950 text-amber-300 border border-amber-800'
                  }`}>
                    Cumplimiento: {item.level}%
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">Norma de Desempeño: </strong>{item.norma}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The 4 Achievement Tiers (Figura 8.16) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <span>Escala de Desarrollo del Trabajador</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {Object.keys(tiers).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setSelectedTier(tierKey)}
                className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                  selectedTier === tierKey
                    ? `${tiers[tierKey].badgeColor} ring-1 font-bold shadow-md`
                    : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tiers[tierKey].label}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-700 block w-fit">
              Consecuencia y Acción de RRHH
            </span>
            <h6 className="font-bold text-slate-200">{tiers[selectedTier].label}</h6>
            <p className="text-[11px] text-slate-400">{tiers[selectedTier].desc}</p>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-indigo-200 leading-relaxed">
              <strong className="text-indigo-400">Plan de Acción: </strong>
              {tiers[selectedTier].action}
            </div>
          </div>
        </div>
      </div>

      {/* The Feedback Counseling Interview (Figura 8.17) */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-700/50 text-indigo-300 flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-bold text-slate-200 text-xs">La Entrevista de Asesoría y Realimentación (Fig. 8.17)</h5>
            <p className="text-[11px] text-slate-400">
              No es una sentencia: es una sesión dialógica bilateral para analizar puntos fuertes, áreas bajo parámetro y firmar el plan de mejora continua.
            </p>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 font-mono shrink-0 bg-slate-900 px-2.5 py-1.5 rounded border border-slate-800">
          Contrato Psicológico + Formal
        </div>
      </div>
    </div>
  );
};
