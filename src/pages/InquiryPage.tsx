import React from 'react';
import { MultiStepInquiryForm } from '../components/MultiStepInquiryForm';
import { FINCA_INFO } from '../data/content';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

export const InquiryPage: React.FC = () => {
  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Planifica la teva experiència
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            Sol·licitar Disponibilitat.
          </h1>
          <p className="text-sm md:text-base text-[#51483D] leading-relaxed font-light mt-4">
            Emplena el formulari interactiu en 5 senzills passos. Revisarem la idoneïtat de les teves dates i rebràs una proposta detallada amb disponibilitat i pressupost orientatiu.
          </p>
        </div>

        {/* Multi-step Form */}
        <div className="mb-16">
          <MultiStepInquiryForm />
        </div>

        {/* Additional support info */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#DDD4C5]">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Correu de consulta</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">{FINCA_INFO.demoContact.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Temps de resposta</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">Menys de 24 hores laborables</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Sense compromís</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">La sol·licitud no genera cobraments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
