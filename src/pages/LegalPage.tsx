import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, FileText, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const LegalPage: React.FC = () => {
  usePageMeta({
    title: 'Condicions de la Demo & Privacitat',
    description: 'Avís sobre la naturalesa conceptual de portfolio del projecte Mas de l’Alzina i tractament de dades en frontend.',
  });
  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#343D2D] hover:text-[#B56F50] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tornar a l'inici</span>
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold block">
            Transparència & Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#343D2D] mt-2 font-normal">
            Condicions de la Demo & Privacitat.
          </h1>
          <p className="text-xs text-[#51483D]/70 mt-2 font-light">
            Última revisió: Octubre 2026 • Versió conceptual v1.0
          </p>
        </div>

        <div className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 md:p-10 space-y-8 text-sm text-[#51483D] leading-relaxed font-light">
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <Info className="w-5 h-5 text-[#B56F50]" />
              <h2 className="font-serif text-2xl font-normal">1. Naturalesa del Projecte</h2>
            </div>
            <p>
              Aquest lloc web (<strong>Mas de l'Alzina</strong>) és un projecte conceptual de demostració de disseny web i desenvolupament frontend per a portfolio professional.
            </p>
            <p>
              La marca "Mas de l'Alzina", els serveis oferts, els horaris, les capacitats de les sales i les declaracions d'experiència no corresponen a un establiment turístic real obert al públic. Cap dels formularis no formalitza una reserva contractual ni un cobrament econòmic.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <ShieldCheck className="w-5 h-5 text-[#B56F50]" />
              <h2 className="font-serif text-2xl font-normal">2. Tractament de Dades i Privacitat</h2>
            </div>
            <p>
              El formulari de sol·licitud multipaso integrat s'executa exclusivament en l'entorn de frontend (client-side). No s'emmagatzemen dades personals en servidors de producció, bases de dades de tercers ni sistemes de màrqueting.
            </p>
            <p>
              Recomanem utilitzar dades fictícies en provar el formulari per avaluar la resposta d'interfície, les validacions i els canvis d'estat de confirmació i error.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <FileText className="w-5 h-5 text-[#B56F50]" />
              <h2 className="font-serif text-2xl font-normal">3. Propietat Intel·lectual i Imatges</h2>
            </div>
            <p>
              Les fotografies utilitzades en aquesta demostració provenen de bancs de recursos lliures per a desenvolupament (com Unsplash) amb llicència d'ús editorial i de prototipat. Representen exemples d'arquitectura mediterrània autèntica per transmetre la direcció d'art desitjada.
            </p>
          </section>

          <div className="pt-4 border-t border-[#DDD4C5]/80">
            <p className="text-xs text-[#51483D]/80 italic">
              Per a qualsevol consulta sobre el codi font o la implementació d'aquest projecte, pots revisar el repositori de codi associat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
