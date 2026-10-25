import React from 'react';
import { Link } from 'react-router-dom';
import { CELEBRATIONS } from '../data/content';
import { ArrowUpRight, Heart, Check, Info } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const CelebrationsPage: React.FC = () => {
  usePageMeta({
    title: 'Celebracions Íntimes & Enllaços',
    description: 'Trobades familiars pausades, celebracions i enllaços en petit comitè fins a 60 convidats a Mas de l’Alzina.',
  });
  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Trobades assenyalades & família
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            Celebracions Íntimes.
          </h1>
          <p className="text-base text-[#51483D] leading-relaxed font-light mt-4">
            Defugim les celebracions massives i impersonalitzades. A Mas de l'Alzina acollim
            trobades familiars d'alta sensibilitat, aniversaris d'un cap de setmana i cerimònies
            simbòliques en un entorn que afavoreix el diàleg, el bon vi i el temps de qualitat.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="mb-14 p-4 bg-[#FBF9F4] border border-[#DDD4C5] text-xs text-[#51483D] flex items-center gap-3">
          <Info className="w-4 h-4 text-[#B56F50] shrink-0" />
          <span>
            <strong>Avís de demo:</strong> Mas de l'Alzina no té caràcter comercial en actiu ni llicència oberta de noces públiques. Les imatges i serveis són una proposta artística i conceptual.
          </span>
        </div>

        {/* Celebrations Grid */}
        <div className="space-y-16">
          {CELEBRATIONS.map((cel, idx) => (
            <div
              key={cel.id}
              className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className={`lg:col-span-6 overflow-hidden rounded-xs ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={cel.imageUrl}
                  alt={cel.title}
                  className="w-full h-96 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>

              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B56F50] font-semibold">
                    Capacitat: {cel.capacity}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#343D2D] mt-1 font-normal">
                    {cel.title}
                  </h2>
                  <p className="text-xs text-[#51483D]/80 italic mt-1 font-light">
                    "{cel.tagline}"
                  </p>
                </div>

                <p className="text-sm text-[#51483D] leading-relaxed font-light">
                  {cel.description}
                </p>

                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D] mb-2">
                    Espais recomanats:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cel.recommendedSpaces.map((sp, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-3 py-1 bg-[#F5F2EA] border border-[#DDD4C5] text-[#343D2D]"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D] mb-2">
                    Serveis i atencions incloses:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#51483D]/85 font-light">
                    {cel.servicesIncluded.map((serv, servIdx) => (
                      <li key={servIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B56F50] shrink-0 mt-0.5" />
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to="/sollicitud"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] hover:bg-[#232a1e] text-[#FBF9F4] transition-all"
                  >
                    <span>Consultar celebració per a la meva data</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formulario / Contact CTA específic per a celebracions */}
        <div className="mt-20 p-8 md:p-12 bg-[#FBF9F4] border border-[#DDD4C5] max-w-4xl mx-auto text-center space-y-4">
          <Heart className="w-8 h-8 text-[#B56F50] mx-auto" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#343D2D]">
            Tens una idea particular per a la teva trobada?
          </h2>
          <p className="text-xs md:text-sm text-[#51483D] font-light max-w-xl mx-auto leading-relaxed">
            Personalitzem el temps de muntatge, l'ús de sales auxiliars i el contacte amb xefs de confiança que respectin el nostre manifest de sostenibilitat.
          </p>
          <div className="pt-2">
            <Link
              to="/sollicitud"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#B56F50] hover:bg-[#975336] text-[#FBF9F4] transition-all"
            >
              <span>Obrir formulari d'esdeveniments</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
