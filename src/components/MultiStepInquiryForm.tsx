import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export type InquiryType = 'estada' | 'celebracio' | 'empresa' | 'altres';

export interface InquiryFormData {
  type: InquiryType;
  // Step 2
  startDate: string;
  endDate: string;
  guestsCount: number;
  datesFlexible: boolean;
  // Step 3
  stayOption?: string;
  celebrationType?: string;
  corporateGoal?: string;
  cateringNeeded: string;
  specialRequests: string;
  // Step 4
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  privacyAccepted: boolean;
}

const initialFormData: InquiryFormData = {
  type: 'estada',
  startDate: '',
  endDate: '',
  guestsCount: 10,
  datesFlexible: true,
  stayOption: 'integre',
  celebrationType: 'familia',
  corporateGoal: 'estrategia',
  cateringNeeded: 'consultar',
  specialRequests: '',
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  privacyAccepted: false,
};

const getTodayIso = () => new Date().toISOString().split('T')[0];

export const MultiStepInquiryForm: React.FC = () => {
  const [todayStr] = useState<string>(getTodayIso);
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<InquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [simulationMode, setSimulationMode] = useState<'success' | 'simulated-error'>('success');
  const [demoReferenceId, setDemoReferenceId] = useState<string>('MDA-8492');

  const updateField = (field: keyof InquiryFormData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!data.type) errs.type = 'Selecciona el tipus de sol·licitud.';
    }

    if (currentStep === 2) {
      if (!data.startDate) {
        errs.startDate = 'Indica la data d’arribada o esdeveniment.';
      } else {
        const selected = new Date(data.startDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
          errs.startDate = 'La data no pot ser en el passat.';
        }
      }

      if (data.type === 'estada') {
        if (!data.endDate) {
          errs.endDate = 'Indica la data de sortida estimada.';
        } else if (data.startDate && new Date(data.endDate) <= new Date(data.startDate)) {
          errs.endDate = 'La sortida ha de ser posterior a l’arribada.';
        }
      }

      if (!data.guestsCount || data.guestsCount < 1) {
        errs.guestsCount = 'Indica com a mínim 1 persona.';
      } else if (data.guestsCount > 80) {
        errs.guestsCount = 'La capacitat màxima de la finca és de 65 persones per esdeveniment.';
      }
    }

    if (currentStep === 4) {
      if (!data.fullName.trim()) {
        errs.fullName = 'El nom complet és necessari.';
      }
      if (!data.email.trim()) {
        errs.email = 'El correu electrònic és imprescindible.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errs.email = 'Format de correu no vàlid.';
      }
      if (!data.privacyAccepted) {
        errs.privacyAccepted = 'Has d’acceptar les condicions de la demo per continuar.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (simulationMode === 'simulated-error') {
        setErrors({ submit: 'Simulació d’error de connexió en xarxa de prova. Pots provar de nou en mode èxit.' });
      } else {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        setDemoReferenceId(`MDA-${randNum}`);
        setIsSubmitted(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#343D2D', '#B56F50', '#DDD4C5']
        });
      }
    }, 900);
  };

  const resetForm = () => {
    setData(initialFormData);
    setStep(1);
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 sm:p-10 md:p-12 shadow-sm rounded-xs max-w-4xl mx-auto">
      {/* Demo disclaimer banner */}
      <div className="mb-8 p-4 bg-[#F5F2EA] border-l-4 border-[#B56F50] text-xs text-[#51483D] flex items-start gap-3">
        <Info className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-[#343D2D] uppercase tracking-wider text-[11px] mb-0.5">
            Formulari Interactiu de Demostració
          </p>
          <p>
            Aquesta sol·licitud és una simulació tècnica de frontend. No envia dades a cap servidor extern ni compromet cap reserva real.
          </p>
        </div>
      </div>

      {!isSubmitted ? (
        <div>
          {/* Progress Indicator */}
          <div className="mb-10" aria-label={`Pas ${step} de 5`}>
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#51483D]/70 mb-3" aria-hidden="true">
              <span className={step >= 1 ? 'text-[#343D2D] font-bold' : ''}>1. Tipus</span>
              <span className={step >= 2 ? 'text-[#343D2D] font-bold' : ''}>2. Dates</span>
              <span className={step >= 3 ? 'text-[#343D2D] font-bold' : ''}>3. Detalls</span>
              <span className={step >= 4 ? 'text-[#343D2D] font-bold' : ''}>4. Contacte</span>
              <span className={step >= 5 ? 'text-[#343D2D] font-bold' : ''}>5. Resum</span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={5}
              aria-label={`Progrés del formulari: pas ${step} de 5`}
              className="w-full bg-[#DDD4C5]/60 h-1.5 rounded-full overflow-hidden"
            >
              <div
                className="bg-[#343D2D] h-full transition-all duration-300 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* STEP 1: Tipus de sol·licitud */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    Quin tipus d'experiència estàs planejant?
                  </h3>
                  <p className="text-sm text-[#51483D]/80 mt-1 font-light">
                    Selecciona la modalitat principal per personalitzar les opcions de la teva consulta.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      id: 'estada',
                      title: 'Estada Privada',
                      desc: 'Ús de les suites per a descans familiar o grup d’amics.'
                    },
                    {
                      id: 'celebracio',
                      title: 'Celebració Íntima',
                      desc: 'Aniversari, enllaç íntim o dinar llarg d’amics de dia.'
                    },
                    {
                      id: 'empresa',
                      title: 'Trobada d’Empresa',
                      desc: 'Retir estratègic, comitè directiu o jornada de treball.'
                    },
                    {
                      id: 'altres',
                      title: 'Altres Consultes',
                      desc: 'Produccions fotogràfiques, rodatges o propostes a mida.'
                    }
                  ].map((option) => (
                    <label
                      key={option.id}
                      onClick={() => updateField('type', option.id as InquiryType)}
                      className={`cursor-pointer border p-5 flex flex-col justify-between transition-all ${
                        data.type === option.id
                          ? 'border-[#343D2D] bg-[#F5F2EA] ring-1 ring-[#343D2D]'
                          : 'border-[#DDD4C5] bg-[#FBF9F4] hover:border-[#51483D]/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-serif text-lg text-[#343D2D] font-medium">
                            {option.title}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              data.type === option.id
                                ? 'border-[#343D2D] bg-[#343D2D]'
                                : 'border-[#DDD4C5]'
                            }`}
                          >
                            {data.type === option.id && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FBF9F4]" />
                            )}
                          </span>
                        </div>
                        <p className="text-xs text-[#51483D]/80 font-light leading-relaxed">
                          {option.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.type && (
                  <p className="text-xs text-[#B56F50] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> {errors.type}
                  </p>
                )}
              </div>
            )}

            {/* STEP 2: Dates i Convidats */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    Quan t’agradaria vindre i quantes persones sereu?
                  </h3>
                  <p className="text-sm text-[#51483D]/80 mt-1 font-light">
                    Pots indicar dates orientatives; revisem la disponibilitat de cada data de manera personalitzada.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                      {data.type === 'estada' ? 'Data d’arribada estimada' : 'Data de la celebració'} *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={todayStr}
                        value={data.startDate}
                        onChange={(e) => updateField('startDate', e.target.value)}
                        className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                      />
                    </div>
                    {errors.startDate && (
                      <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.startDate}
                      </p>
                    )}
                  </div>

                  {data.type === 'estada' ? (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                        Data de sortida estimada *
                      </label>
                      <input
                        type="date"
                        min={data.startDate || todayStr}
                        value={data.endDate}
                        onChange={(e) => updateField('endDate', e.target.value)}
                        className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                      />
                      {errors.endDate && (
                        <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.endDate}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                        Horari aproximat
                      </label>
                      <select
                        className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                        defaultValue="migdia"
                      >
                        <option value="migdia">Migdia i vesprada (11:00h - 19:30h)</option>
                        <option value="nit">Tardor / Nit (18:00h - 01:00h)</option>
                        <option value="dia_sencer">Jornada completa de matí a nit</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                    Nombre aproximat d’assistents o hostes: <span className="font-bold text-[#B56F50]">{data.guestsCount}</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="65"
                    value={data.guestsCount}
                    onChange={(e) => updateField('guestsCount', parseInt(e.target.value))}
                    className="w-full accent-[#343D2D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#51483D]/60 mt-1">
                    <span>2 (Íntim)</span>
                    <span>16 (Capacitat màx. pernocta)</span>
                    <span>45</span>
                    <span>65 (Límit esdeveniment exterior)</span>
                  </div>
                  {errors.guestsCount && (
                    <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.guestsCount}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.datesFlexible}
                      onChange={(e) => updateField('datesFlexible', e.target.checked)}
                      className="w-4 h-4 accent-[#343D2D] rounded-xs"
                    />
                    <span className="text-xs text-[#51483D]">
                      Tinc flexibilitat de dates (± 1 o 2 caps de setmana).
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 3: Preferències condicionals */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    Preferències i necessitats de l’experiència
                  </h3>
                  <p className="text-sm text-[#51483D]/80 mt-1 font-light">
                    Ajustem els espais i recomanacions segons la tipologia escollida.
                  </p>
                </div>

                {data.type === 'estada' && (
                  <div className="space-y-4">
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold">
                      Format d'estada desitjat
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => updateField('stayOption', 'integre')}
                        className={`text-left p-3.5 border transition-all ${
                          data.stayOption === 'integre'
                            ? 'border-[#343D2D] bg-[#F5F2EA] font-medium'
                            : 'border-[#DDD4C5] bg-[#FBF9F4]'
                        }`}
                      >
                        <span className="text-sm text-[#343D2D] block">Finca Íntegra en Exclusivitat</span>
                        <span className="text-xs text-[#51483D]/70 font-light">Totes les 7 suites i espais privats</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => updateField('stayOption', 'suites')}
                        className={`text-left p-3.5 border transition-all ${
                          data.stayOption === 'suites'
                            ? 'border-[#343D2D] bg-[#F5F2EA] font-medium'
                            : 'border-[#DDD4C5] bg-[#FBF9F4]'
                        }`}
                      >
                        <span className="text-sm text-[#343D2D] block">Suites individuals seleccionades</span>
                        <span className="text-xs text-[#51483D]/70 font-light">Segons disponibilitat oberta</span>
                      </button>
                    </div>
                  </div>
                )}

                {data.type === 'celebracio' && (
                  <div className="space-y-4">
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold">
                      Tipus de celebració
                    </label>
                    <select
                      value={data.celebrationType}
                      onChange={(e) => updateField('celebrationType', e.target.value)}
                      className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D]"
                    >
                      <option value="familia">Trobada / Aniversari familiar</option>
                      <option value="boda">Enllaç íntim / Petit comitè (fins a 60)</option>
                      <option value="amics">Retrobament d'amics de ritme pausat</option>
                      <option value="altres">Un altre format privat</option>
                    </select>
                  </div>
                )}

                {data.type === 'empresa' && (
                  <div className="space-y-4">
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold">
                      Objectiu principal de la jornada
                    </label>
                    <select
                      value={data.corporateGoal}
                      onChange={(e) => updateField('corporateGoal', e.target.value)}
                      className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D]"
                    >
                      <option value="estrategia">Retir estratègic de lideratge i direcció</option>
                      <option value="cohesio">Teambuilding i cohesió d'equip en la natura</option>
                      <option value="product">Sprints de disseny o presentació interna</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                    Previsió gastronòmica
                  </label>
                  <select
                    value={data.cateringNeeded}
                    onChange={(e) => updateField('cateringNeeded', e.target.value)}
                    className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D]"
                  >
                    <option value="consultar">Volem valorar xef privat / càtering de producte local</option>
                    <option value="autopreparat">Gestionarem els àpats pel nostre compte (ús de cuina)</option>
                    <option value="nomes_esmorzars">Només esmorzars saludables cada matí</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1.5">
                    Observacions o requisits particulars
                  </label>
                  <textarea
                    rows={3}
                    value={data.specialRequests}
                    onChange={(e) => updateField('specialRequests', e.target.value)}
                    placeholder="Detalla qualsevol necessitat de mobilitat, horaris o dubtes que tinguis..."
                    className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Contacte */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    On podem contactar amb tu?
                  </h3>
                  <p className="text-sm text-[#51483D]/80 mt-1 font-light">
                    Enviarem la proposta orientativa i la confirmació de disponibilitat directament per email.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="p. ex. Maria Garcia Soler"
                      className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1">
                      Correu electrònic *
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="nom@exemple.com"
                      className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1">
                      Telèfon de contacte (opcional)
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+34 600 000 000"
                      className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                    />
                  </div>

                  {data.type === 'empresa' && (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#343D2D] font-semibold mb-1">
                        Empresa o Organització
                      </label>
                      <input
                        type="text"
                        value={data.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        placeholder="Nom de la companyia"
                        className="w-full bg-[#F5F2EA] border border-[#DDD4C5] p-3 text-sm text-[#343D2D] focus:border-[#343D2D] focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {/* Simulation toggle */}
                <div className="pt-2 p-3.5 bg-[#F5F2EA] border border-[#DDD4C5] text-xs space-y-2">
                  <span className="font-semibold text-[#343D2D] block uppercase tracking-wider text-[10px]">
                    Prova tècnica de frontend (Comportament de la Demo):
                  </span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="simMode"
                        checked={simulationMode === 'success'}
                        onChange={() => setSimulationMode('success')}
                        className="accent-[#343D2D]"
                      />
                      <span>Simulació d'enviament reeixit</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="simMode"
                        checked={simulationMode === 'simulated-error'}
                        onChange={() => setSimulationMode('simulated-error')}
                        className="accent-[#B56F50]"
                      />
                      <span className="text-[#B56F50]">Simular error de xarxa</span>
                    </label>
                  </div>
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.privacyAccepted}
                      onChange={(e) => updateField('privacyAccepted', e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-[#343D2D] rounded-xs"
                    />
                    <span className="text-xs text-[#51483D] leading-relaxed">
                      Entenc que aquest formulari és part d'un projecte conceptual de disseny web i que les meves dades no seran venudes ni utilitzades comercialment.{' '}
                      <Link to="/legal" className="text-[#B56F50] underline">
                        Veure condicions de la demo
                      </Link>
                      . *
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="text-xs text-[#B56F50] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.privacyAccepted}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 5: Resum de la sol·licitud */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    Revisa les dades de la teva consulta
                  </h3>
                  <p className="text-sm text-[#51483D]/80 mt-1 font-light">
                    Abans d'enviar la sol·licitud orientativa, comprova que tota la informació és correcta.
                  </p>
                </div>

                <div className="bg-[#F5F2EA] border border-[#DDD4C5] p-6 space-y-4 text-xs text-[#51483D]">
                  <div className="flex justify-between items-center border-b border-[#DDD4C5]/60 pb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#343D2D]">Tipologia</span>
                    <div className="flex items-center gap-3">
                      <span className="capitalize font-medium text-sm text-[#343D2D]">
                        {data.type === 'estada' && 'Estada Privada'}
                        {data.type === 'celebracio' && 'Celebració Íntima'}
                        {data.type === 'empresa' && 'Trobada d’Empresa'}
                        {data.type === 'altres' && 'Altres Consultes'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[11px] uppercase tracking-wider text-[#B56F50] hover:underline cursor-pointer"
                      >
                        Canviar
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#DDD4C5]/60 pb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#343D2D]">Dates</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[#343D2D]">
                        {data.startDate} {data.endDate ? `fins a ${data.endDate}` : ''}{' '}
                        {data.datesFlexible ? '(Amb flexibilitat)' : '(Dates fixes)'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-[11px] uppercase tracking-wider text-[#B56F50] hover:underline cursor-pointer"
                      >
                        Canviar
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#DDD4C5]/60 pb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#343D2D]">Assistents</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[#343D2D]">{data.guestsCount} persones</span>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-[11px] uppercase tracking-wider text-[#B56F50] hover:underline cursor-pointer"
                      >
                        Canviar
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#DDD4C5]/60 pb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#343D2D]">Contacte</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[#343D2D]">
                        {data.fullName} ({data.email})
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="text-[11px] uppercase tracking-wider text-[#B56F50] hover:underline cursor-pointer"
                      >
                        Canviar
                      </button>
                    </div>
                  </div>

                  {data.specialRequests && (
                    <div className="pt-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="uppercase tracking-wider font-semibold text-[#343D2D] block">
                          Comentaris
                        </span>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="text-[11px] uppercase tracking-wider text-[#B56F50] hover:underline cursor-pointer"
                        >
                          Canviar
                        </button>
                      </div>
                      <p className="italic text-[#51483D]/80 bg-[#FBF9F4] p-3 border border-[#DDD4C5]/50">
                        "{data.specialRequests}"
                      </p>
                    </div>
                  )}
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errors.submit}</span>
                  </div>
                )}
              </div>
            )}

            {/* Form Action Controls */}
            <div className="mt-10 pt-6 border-t border-[#DDD4C5]/80 flex flex-wrap items-center justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#343D2D] hover:text-[#B56F50] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs uppercase tracking-widest font-semibold text-[#FBF9F4] bg-[#343D2D] hover:bg-[#232a1e] transition-colors shadow-xs"
                >
                  <span>Següent pas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FBF9F4] bg-[#B56F50] hover:bg-[#975336] transition-colors disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processant sol·licitud...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar sol·licitud conceptual</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        /* SUCCESS CONFIRMATION STATE */
        <div className="text-center py-12 px-4 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#343D2D]/10 text-[#343D2D] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-[#343D2D]" />
          </div>

          <div className="max-w-lg mx-auto space-y-2">
            <h3 className="font-serif text-3xl md:text-4xl text-[#343D2D]">
              Sol·licitud de prova rebuda
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B56F50] font-sans font-semibold">
              Referència conceptual: #{demoReferenceId}
            </p>
            <p className="text-sm text-[#51483D] leading-relaxed pt-2 font-light">
              Gràcies, <strong className="font-medium text-[#343D2D]">{data.fullName}</strong>.
              Aquesta és una simulació interactiva d’alta fidelitat. En una implementació de producció,
              el nostre equip rebria la teva petició per a{' '}
              <strong className="text-[#343D2D]">{data.guestsCount} persones</strong> i enviaria la disponibilitat
              en menys de 24 hores a <span className="underline">{data.email}</span>.
            </p>
          </div>

          <div className="p-4 bg-[#F5F2EA] border border-[#DDD4C5] max-w-md mx-auto text-xs text-[#51483D]/80">
            Recordatori: No s'ha creat cap reserva vinculant ni s'ha contactat amb cap allotjament físic real.
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-[#343D2D] text-[#343D2D] hover:bg-[#343D2D] hover:text-[#FBF9F4] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Fer una altra prova</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] text-[#FBF9F4] hover:bg-[#232a1e] transition-colors"
            >
              <span>Tornar a l'inici</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
