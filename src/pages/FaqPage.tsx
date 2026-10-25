import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../data/content';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const FaqPage: React.FC = () => {
  usePageMeta({
    title: 'Preguntes Freqüents & Informació Pràctica',
    description: 'Resolució de dubtes sobre arribada, reserves, serveis de càtering i sostenibilitat a Mas de l’Alzina.',
  });
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Totes les preguntes' },
    { id: 'reserva', label: 'Reserva & Tarifes' },
    { id: 'espais', label: 'Espais & Esdeveniments' },
    { id: 'arribada', label: 'Arribada & Accés' },
    { id: 'politiques', label: 'Horaris & Polítiques' },
  ];

  const filteredFaqs =
    categoryFilter === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === categoryFilter);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Resolució de dubtes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            Informació Pràctica & FAQ.
          </h1>
          <p className="text-sm md:text-base text-[#51483D] leading-relaxed font-light mt-4 max-w-xl mx-auto">
            Recollim les qüestions més habituals sobre com arribar a la finca, l'ús exclusiu dels espais, les polítiques de convivència i els detalls de la sol·licitud.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategoryFilter(c.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                categoryFilter === c.id
                  ? 'bg-[#343D2D] text-[#FBF9F4] font-semibold'
                  : 'bg-[#FBF9F4] text-[#51483D] border border-[#DDD4C5] hover:bg-[#DDD4C5]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F4] border border-[#DDD4C5] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl text-[#343D2D]">
                    {faq.question}
                  </span>
                  <span className="text-[#343D2D] shrink-0 p-1 bg-[#F5F2EA] rounded-full border border-[#DDD4C5]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-1 text-sm text-[#51483D] leading-relaxed font-light border-t border-[#DDD4C5]/40 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Practical Access Box */}
        <div className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 md:p-8 space-y-4">
          <h3 className="font-serif text-2xl text-[#343D2D]">Ubicació i accés</h3>
          <p className="text-xs text-[#51483D] leading-relaxed font-light">
            Mas de l'Alzina està situada a la comarca de la Vall d'Albaida (interior de València). A menys d'una hora per autovia des de l'Aeroport de València (Manises) i 1h 15m des d'Alacant. Coordenades exactes i indicacions d'accés es faciliten exclusivament a les sol·licituds amb dates assignades per mantenir la privacitat del paratge.
          </p>
          <div className="pt-2">
            <Link
              to="/sollicitud"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B56F50] hover:text-[#975336]"
            >
              <span>Preguntar per una altra qüestió</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
