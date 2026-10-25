import React from 'react';
import { MultiStepInquiryForm } from '../components/MultiStepInquiryForm';
import { Mail, Clock, ShieldCheck } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const InquiryPage: React.FC = () => {
  usePageMeta({
    title: 'Sol·licitar Disponibilitat & Pressupost',
    description: 'Consulta de disponibilitat en 5 passos per a estades exclusives, celebracions familiars o retirs corporatius.',
  });
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
            Prova el formulari interactiu en 5 passos i explora com seria una sol·licitud real. Aquesta demo no envia correus ni dades a cap servidor, i no genera reserves ni pressupostos reals.
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
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Enviament de correu</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">Desactivat en aquesta demo</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Resposta real</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">No hi ha contacte posterior</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B56F50] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D]">Privacitat de prova</p>
              <p className="text-xs text-[#51483D]/80 font-light mt-0.5">Les dades no s'envien a cap servidor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
