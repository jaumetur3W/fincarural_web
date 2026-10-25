import React from 'react';
import { Link } from 'react-router-dom';
import { CORPORATE_PROGRAMS } from '../data/content';
import { ArrowUpRight, Check, Briefcase, Wifi, Monitor, Coffee, Info } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export const CorporatePage: React.FC = () => {
  usePageMeta({
    title: 'Encuentres de Empresa & Retirs',
    description: 'Espai inspirador per a comitès estratègics, tallers d’innovació i retirs d’equip en un paratge protegit.',
  });
  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            B2B & Retirs Professionals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            Encuentres de Empresa.
          </h1>
          <p className="text-base text-[#51483D] leading-relaxed font-light mt-4">
            Un entorn serè dissenyat per a equips que necessiten pensar sense interferències.
            Espais modulars per a debats d'alta direcció, tallers de disseny estratègic
            i convivència d'equip en plena natura mediterrània.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="mb-14 p-4 bg-[#FBF9F4] border border-[#DDD4C5] text-xs text-[#51483D] flex items-center gap-3">
          <Info className="w-4 h-4 text-[#B56F50] shrink-0" />
          <span>
            <strong>Informació de concepte B2B:</strong> Les capacitats tècniques i equipament d'aquesta pàgina formen part del disseny conceptual de la demo de portfolio.
          </span>
        </div>

        {/* Corporate Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#FBF9F4] p-6 border border-[#DDD4C5] space-y-2">
            <Briefcase className="w-5 h-5 text-[#343D2D]" />
            <h3 className="font-serif text-lg font-medium text-[#343D2D]">Confidencialitat Absoluta</h3>
            <p className="text-xs text-[#51483D]/80 font-light leading-relaxed">
              La finca queda tancada exclusivament per a la vostra organització durant tota l'estada.
            </p>
          </div>

          <div className="bg-[#FBF9F4] p-6 border border-[#DDD4C5] space-y-2">
            <Monitor className="w-5 h-5 text-[#343D2D]" />
            <h3 className="font-serif text-lg font-medium text-[#343D2D]">Equipament Tècnic Subtil</h3>
            <p className="text-xs text-[#51483D]/80 font-light leading-relaxed">
              Pantalles de gran format i sistemes de so perfectament integrats en fusteria sense trencar l'harmonia.
            </p>
          </div>

          <div className="bg-[#FBF9F4] p-6 border border-[#DDD4C5] space-y-2">
            <Wifi className="w-5 h-5 text-[#343D2D]" />
            <h3 className="font-serif text-lg font-medium text-[#343D2D]">Connexió i Desconnexió</h3>
            <p className="text-xs text-[#51483D]/80 font-light leading-relaxed">
              Connexió de xarxa per treballar en equip i quilòmetres de senders per a converses en moviment.
            </p>
          </div>

          <div className="bg-[#FBF9F4] p-6 border border-[#DDD4C5] space-y-2">
            <Coffee className="w-5 h-5 text-[#343D2D]" />
            <h3 className="font-serif text-lg font-medium text-[#343D2D]">Coffee & Nutrició Real</h3>
            <p className="text-xs text-[#51483D]/80 font-light leading-relaxed">
              Estació oberta de cafè d'especialitat, infusions locals, fruita fresca de l'hort i fruits secs.
            </p>
          </div>
        </div>

        {/* Programs */}
        <div className="space-y-16">
          {CORPORATE_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 overflow-hidden rounded-xs">
                <img
                  src={prog.imageUrl}
                  alt={prog.title}
                  className="w-full h-88 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#B56F50] font-semibold mb-1">
                    <span>{prog.format}</span>
                    <span>•</span>
                    <span>{prog.capacity}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#343D2D] font-normal">
                    {prog.title}
                  </h2>
                  <p className="text-xs text-[#51483D]/80 font-medium mt-1">
                    Perfil idoni: {prog.target}
                  </p>
                </div>

                <p className="text-sm text-[#51483D] leading-relaxed font-light">
                  {prog.description}
                </p>

                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D] mb-2">
                    Espais principals destinats:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.spacesIncluded.map((sp, sIdx) => (
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
                    Equipament i logística de treball:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#51483D]/85 font-light">
                    {prog.equipmentDemo.map((eq, eqIdx) => (
                      <li key={eqIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#343D2D] shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to="/sollicitud"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] hover:bg-[#232a1e] text-[#FBF9F4] transition-all"
                  >
                    <span>Sol·licitar proposta per a empreses</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
