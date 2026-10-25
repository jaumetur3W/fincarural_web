import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SPACES } from '../data/content';
import { ImageLightboxModal, type GalleryImage } from '../components/ImageLightboxModal';
import { ArrowUpRight, Maximize2, Shield, Sparkles, Feather } from 'lucide-react';

export const FincaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tots' | 'interior' | 'exterior' | 'comu'>('tots');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const galleryImages: GalleryImage[] = SPACES.map((s) => ({
    url: s.imageUrl,
    caption: s.description,
    spaceName: s.name,
  }));

  const filteredSpaces =
    activeTab === 'tots' ? SPACES : SPACES.filter((s) => s.category === activeTab);

  const openLightbox = (index: number) => {
    setCurrentImgIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header editorial */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Espai, paisatge i arquitectura
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            La Finca & el Terreny.
          </h1>
          <p className="text-base text-[#51483D] leading-relaxed font-light mt-4">
            Construïda a finals del segle XVIII i rehabilitada integralment entre 2021 i 2023.
            Mas de l'Alzina preserva el llenguatge sobri de les masies tradicionals de secà valencianes:
            murs gruixuts de maçoneria calcària, obertures proporcionades i protecció solar passiva.
          </p>
        </div>

        {/* Narrative columns with architectural details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-[#DDD4C5] mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <Feather className="w-5 h-5 text-[#B56F50]" />
              <h3 className="font-serif text-xl font-medium">Materials de proximitat</h3>
            </div>
            <p className="text-xs text-[#51483D] leading-relaxed font-light">
              Tota la restauració s'ha efectuat emprant calç aèria artesanal de Morón, maons manuals de teuleria local i fusta de pi i castanyer amb certificat forestal sostenible.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <Sparkles className="w-5 h-5 text-[#B56F50]" />
              <h3 className="font-serif text-xl font-medium">Climatització invisible</h3>
            </div>
            <p className="text-xs text-[#51483D] leading-relaxed font-light">
              Terra radiant i refrescant alimentat per energia aerotèrmica combinada amb un sistema fotovoltaic aïllat en coberta no visible des dels camins d'accés.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#343D2D]">
              <Shield className="w-5 h-5 text-[#B56F50]" />
              <h3 className="font-serif text-xl font-medium">L'entorn natural protegit</h3>
            </div>
            <p className="text-xs text-[#51483D] leading-relaxed font-light">
              18 hectàrees cultivades en règim d'agricultura regenerativa i ecològica: oli d'oliva verge extra de varietat morrut i ametla marcona collida a mà.
            </p>
          </div>
        </div>

        {/* Space Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center space-x-2">
            {[
              { id: 'tots', label: 'Tots els racons' },
              { id: 'exterior', label: 'Exteriors & Patis' },
              { id: 'interior', label: 'Interiors & Sales' },
              { id: 'comu', label: 'Zones Comunes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#343D2D] text-[#FBF9F4] font-semibold'
                    : 'bg-[#FBF9F4] text-[#51483D] border border-[#DDD4C5] hover:bg-[#DDD4C5]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#51483D]/60 font-light">
            Fes clic a qualsevol imatge per ampliar en alta resolució
          </span>
        </div>

        {/* Architectural Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredSpaces.map((space) => (
            <div
              key={space.id}
              className="bg-[#FBF9F4] border border-[#DDD4C5] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative h-72 cursor-pointer overflow-hidden group"
                  onClick={() => openLightbox(SPACES.findIndex((s) => s.id === space.id))}
                >
                  <img
                    src={space.imageUrl}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 text-white text-xs uppercase tracking-wider backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" /> Ampliar fotografia
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#FBF9F4]/90 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#343D2D]">
                    {space.surface}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#B56F50] uppercase tracking-wider font-medium">
                    <span>{space.category}</span>
                    <span className="text-[#343D2D] font-semibold">{space.capacity}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-[#343D2D]">
                    {space.name}
                  </h2>

                  <p className="text-sm text-[#51483D] leading-relaxed font-light">
                    {space.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D] mb-2">
                      Detalls constructius & característiques:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#51483D]/80 font-light">
                      {space.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#B56F50] mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-8 py-4 bg-[#F5F2EA] border-t border-[#DDD4C5] flex flex-wrap gap-2">
                {space.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-[11px] px-2.5 py-1 bg-[#FBF9F4] text-[#343D2D] border border-[#DDD4C5]/60"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-12 bg-[#343D2D] text-[#ECE6DC] text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FBF9F4]">
            Vols comprovar la disponibilitat d'aquests espais?
          </h2>
          <p className="text-xs md:text-sm text-[#ECE6DC]/80 font-light max-w-xl mx-auto">
            Organitzem visites concertades per a organitzadors de retirs i parelles amb dates orientatives.
          </p>
          <div className="pt-2">
            <Link
              to="/sollicitud"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#B56F50] hover:bg-[#975336] text-[#FBF9F4] transition-all"
            >
              <span>Consultar dates i tarifes orientatives</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <ImageLightboxModal
        images={galleryImages}
        initialIndex={currentImgIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};
