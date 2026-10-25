import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCOMMODATIONS } from '../data/content';
import { ImageLightboxModal, type GalleryImage } from '../components/ImageLightboxModal';
import { ArrowUpRight, Check, BedDouble, Users, ShieldAlert, Maximize2 } from 'lucide-react';

export const StaysPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openOptionGallery = (optionImages: string[], title: string) => {
    setLightboxImages(
      optionImages.map((img) => ({
        url: img,
        caption: title,
        spaceName: 'Estades a Mas de l\'Alzina',
      }))
    );
    setSelectedIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F5F2EA] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Allotjament i descans
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-2 font-normal">
            Estades Privades.
          </h1>
          <p className="text-base text-[#51483D] leading-relaxed font-light mt-4">
            Un refugi íntim per a gaudir en família o en grup sense presses.
            Prioritzem el lloguer de la finca en exclusiva, posant a disposició 7 suites completes
            amb bany privat, cuina de masia i espais exteriors il·limitats.
          </p>
        </div>

        {/* Demo notification alert */}
        <div className="mb-14 p-4 bg-[#FBF9F4] border-l-4 border-[#343D2D] text-xs text-[#51483D] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#B56F50] shrink-0" />
            <span>
              Les opcions d'allotjament i preus es presenten amb finalitat il·lustrativa de portfolio. No es produeix cap cobrament ni confirmació de reserva sense contracte directe.
            </span>
          </div>
          <Link
            to="/sollicitud"
            className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#343D2D] underline hover:text-[#B56F50]"
          >
            Demanar pressupost
          </Link>
        </div>

        {/* Accommodation Cards */}
        <div className="space-y-16">
          {ACCOMMODATIONS.map((option) => (
            <div
              key={option.id}
              className="bg-[#FBF9F4] border border-[#DDD4C5] p-6 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Collage / Main Visual */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  className="relative h-80 overflow-hidden cursor-pointer group"
                  onClick={() => openOptionGallery(option.images, option.title)}
                >
                  <img
                    src={option.images[0]}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#343D2D] text-[#FBF9F4] text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {option.capacity}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-xs flex items-center gap-1.5 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Veure {option.images.length} fotos</span>
                  </div>
                </div>

                {/* Sub thumbs if multiple */}
                {option.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {option.images.slice(1).map((subImg, sIdx) => (
                      <div
                        key={sIdx}
                        className="h-28 overflow-hidden cursor-pointer"
                        onClick={() => openOptionGallery(option.images, option.title)}
                      >
                        <img
                          src={subImg}
                          alt={`${option.title} detall`}
                          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text & Specs */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#B56F50] font-semibold">
                    {option.idealFor}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#343D2D] mt-1">
                    {option.title}
                  </h2>
                  <p className="text-xs text-[#51483D]/75 italic mt-0.5">
                    {option.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-[#343D2D] py-2 border-y border-[#DDD4C5]/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <BedDouble className="w-4 h-4 text-[#B56F50]" /> {option.bedrooms}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Users className="w-4 h-4 text-[#B56F50]" /> {option.capacity}
                  </span>
                  <span>•</span>
                  <span>{option.surface}</span>
                </div>

                <p className="text-sm text-[#51483D] leading-relaxed font-light">
                  {option.description}
                </p>

                {/* Amenities */}
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#343D2D] mb-2.5">
                    Equipament i confort inclòs:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#51483D]/85 font-light">
                    {option.amenities.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#343D2D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-[#51483D]/70 italic mb-4">
                    {option.isDemoNote}
                  </p>
                  <Link
                    to="/sollicitud"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] hover:bg-[#232a1e] text-[#FBF9F4] transition-all"
                  >
                    <span>Sol·licitar dates per a aquesta opció</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practical info banner */}
        <div className="mt-20 p-8 bg-[#ECE6DC]/60 border border-[#DDD4C5] max-w-4xl mx-auto space-y-3">
          <h3 className="font-serif text-2xl text-[#343D2D]">Informació per a hostes</h3>
          <p className="text-xs text-[#51483D] leading-relaxed font-light">
            Per tal de garantir la tranquil·litat del paratge, l'accés a les instal·lacions queda restringit als hostes degudament registrats. Oferim serveis addicionals sota petició prèvia: compra de benvinguda amb productes artesans de la comarca, llenya per a la xemeneia i recomanació de rutes a peu pel massís proper.
          </p>
        </div>
      </div>

      <ImageLightboxModal
        images={lightboxImages}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};
