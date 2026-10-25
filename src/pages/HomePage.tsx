import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SPACES } from '../data/content';
import { ImageLightboxModal, type GalleryImage } from '../components/ImageLightboxModal';
import { ArrowUpRight, ArrowRight, MapPin, Eye } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
      caption: 'Pati dels Tarongers en silenci a mig matí',
      spaceName: 'El Pati Central'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      caption: 'Voltes de pedra seca i llum tamisada a la Sala dels Arcs',
      spaceName: 'La Sala dels Arcs'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
      caption: 'La bassa d’aigua salina integrada en el bancal d’ametlers',
      spaceName: 'Bassa Natural'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
      caption: 'Dormitori principal amb lli rentat i llum de ponent',
      spaceName: 'Suite L’Almàssera'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F5F2EA] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#DDD4C5]/80">
        {/* Background Image with Architectural Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Arquitectura mediterrània de pedra i calç a Mas de l'Alzina"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#343D2D]/90 via-[#343D2D]/40 to-black/30" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center text-[#FBF9F4]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF9F4]/15 backdrop-blur-xs border border-[#FBF9F4]/30 rounded-xs text-[11px] uppercase tracking-[0.25em] text-[#ECE6DC] mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#B56F50]" />
            <span>Vall d'Albaida • València Interior</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] max-w-4xl mx-auto font-normal text-balance">
            Un lloc per a estar, reunir-se i celebrar.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-[#ECE6DC]/90 max-w-2xl mx-auto leading-relaxed">
            Una finca mediterrània rehabilitada amb calç, pedra i fusta noble.
            Privacitat exclusiva per a estades en grup, celebracions assossegades i trobades amb propòsit.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/sollicitud"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#B56F50] hover:bg-[#975336] text-[#FBF9F4] transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Consultar disponibilitat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/la-finca"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#FBF9F4]/20 hover:bg-[#FBF9F4]/30 text-[#FBF9F4] border border-[#FBF9F4]/40 transition-all backdrop-blur-xs"
            >
              Descobrir la finca
            </Link>
          </div>

          <div className="mt-12 text-[11px] text-[#ECE6DC]/60 tracking-wider font-light">
            Demo conceptual • No representa un allotjament obert al públic
          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓ EDITORIAL ASIMÈTRICA */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
              El manifest del refugi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#343D2D] leading-tight font-normal">
              La bellesa del silenci i la matèria prima.
            </h2>
            <div className="w-12 h-[1.5px] bg-[#343D2D]" />
            <p className="text-sm md:text-base text-[#51483D] leading-relaxed font-light">
              Mas de l'Alzina neix del desig de recuperar l'esperit de les antigues masies valencianes:
              construccions arrelades a la terra que no necessiten artificis per transmetre calma.
            </p>
            <p className="text-sm md:text-base text-[#51483D] leading-relaxed font-light">
              Sense recepcions atapeïdes ni passadissos impersonals. Cada estança ha estat concebuda
              perquè la llum, l'aire fresc de la serra i el tacte de la calç viva acompanyin trobades significatives.
            </p>

            <div className="pt-2">
              <Link
                to="/la-finca"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#343D2D] border-b-2 border-[#343D2D] pb-1 hover:text-[#B56F50] hover:border-[#B56F50] transition-colors"
              >
                <span>Llegir sobre la restauració</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Asymmetric composition of images */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-8 overflow-hidden rounded-xs shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Interiors de pedra i arcs restaurats"
                className="w-full h-[380px] md:h-[460px] object-cover hover:scale-102 transition-transform duration-700 cursor-pointer"
                onClick={() => openLightbox(1)}
              />
            </div>
            <div className="col-span-4 flex flex-col justify-end space-y-4">
              <div className="bg-[#FBF9F4] p-5 border border-[#DDD4C5] shadow-xs">
                <p className="font-serif text-2xl text-[#343D2D] font-medium">18 ha</p>
                <p className="text-xs text-[#51483D]/80 mt-1 font-light">D'oliveres i bosc protegit</p>
              </div>
              <div className="overflow-hidden rounded-xs shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                  alt="Detall de mobiliari i fusta noble"
                  className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openLightbox(3)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIÈNCIES (3 LÍNIES DE SERVEI EDITORIALS) */}
      <section className="py-20 bg-[#FBF9F4] border-y border-[#DDD4C5]/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
                Tres maneres d'habitar la finca
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#343D2D] mt-2 font-normal">
                Propostes d'hospitalitat meditada.
              </h2>
            </div>
            <p className="text-sm text-[#51483D]/80 max-w-md font-light">
              Tant si busques aïllar-te uns dies amb els teus com si necessites un espai inspirador per al teu equip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Estades */}
            <div className="group bg-[#F5F2EA] border border-[#DDD4C5] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="overflow-hidden h-60 -mx-6 -mt-6 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                    alt="Habitació càlida i serena"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#B56F50] font-semibold">
                  01 / Allotjament
                </span>
                <h3 className="font-serif text-2xl text-[#343D2D]">
                  Estades Privades
                </h3>
                <p className="text-xs text-[#51483D] leading-relaxed font-light">
                  Lloguer exclusiu de la masia per a famílies o grups d’amics. 7 suites independents, cuina comunitària i bassa d’aigua salina.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/estades"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#343D2D] group-hover:text-[#B56F50] transition-colors"
                >
                  <span>Explorar estades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Celebracions */}
            <div className="group bg-[#F5F2EA] border border-[#DDD4C5] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="overflow-hidden h-60 -mx-6 -mt-6 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Taula preparada a l'aire lliure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#B56F50] font-semibold">
                  02 / Trobades
                </span>
                <h3 className="font-serif text-2xl text-[#343D2D]">
                  Celebracions Íntimes
                </h3>
                <p className="text-xs text-[#51483D] leading-relaxed font-light">
                  Enllaços en petit comitè, aniversaris de vida i àpats sota els tarongers. Celebracions sense presses fins a 60 convidats.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/celebracions"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#343D2D] group-hover:text-[#B56F50] transition-colors"
                >
                  <span>Veure celebracions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Retirs */}
            <div className="group bg-[#F5F2EA] border border-[#DDD4C5] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="overflow-hidden h-60 -mx-6 -mt-6 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                    alt="Espai de treball tranquil i lluminós"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#B56F50] font-semibold">
                  03 / Professional
                </span>
                <h3 className="font-serif text-2xl text-[#343D2D]">
                  Encuentres de Empresa
                </h3>
                <p className="text-xs text-[#51483D] leading-relaxed font-light">
                  Retirs de lideratge, comitès de decisió estratègica i workshops de cocreació. Silenci absolut i espais per connectar.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/encuentres"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#343D2D] group-hover:text-[#B56F50] transition-colors"
                >
                  <span>Conèixer retirs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESPAIS DESTACATS (Configurables de Demo) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
            Arquitectura i racons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#343D2D] mt-2 font-normal">
            Els espais del Mas.
          </h2>
          <p className="text-xs text-[#51483D]/70 mt-1 font-light">
            Dades de superfície i capacitats basades en la configuració conceptual del projecte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPACES.slice(0, 3).map((space, idx) => (
            <div
              key={space.id}
              className="bg-[#FBF9F4] border border-[#DDD4C5] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-52 -mx-5 -mt-5 mb-4 group cursor-pointer" onClick={() => openLightbox(idx)}>
                  <img
                    src={space.imageUrl}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 rounded-xs backdrop-blur-xs">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#B56F50] font-medium uppercase tracking-wider mb-1">
                  <span>{space.category}</span>
                  <span>{space.surface}</span>
                </div>

                <h3 className="font-serif text-xl text-[#343D2D] mb-2">{space.name}</h3>
                <p className="text-xs text-[#51483D] leading-relaxed font-light mb-4">
                  {space.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DDD4C5]/60">
                <span className="text-[11px] text-[#343D2D] font-semibold block">
                  Capacitat: {space.capacity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/la-finca"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold border border-[#343D2D] text-[#343D2D] hover:bg-[#343D2D] hover:text-[#FBF9F4] transition-colors"
          >
            <span>Veure tots els espais i la galeria completa</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. COM FUNCIONA EL PROCÉS DE SOL·LICITUD */}
      <section className="py-20 bg-[#343D2D] text-[#ECE6DC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
              Procés transparent
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F4] mt-2 font-normal">
              Com organitzem la teva visita.
            </h2>
            <p className="text-xs text-[#ECE6DC]/70 mt-2 font-light">
              La finca funciona mitjançant sol·licituds prèvies ateses per l'equip humà. No utilitzem reserves instantànies automatitzades per preservar la coherència de cada estada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#232a1e]/40 border border-[#ECE6DC]/15 relative">
              <span className="font-serif text-4xl text-[#B56F50] block mb-3">01</span>
              <h3 className="font-serif text-xl text-[#FBF9F4] mb-2">
                Explica'ns el teu propòsit
              </h3>
              <p className="text-xs text-[#ECE6DC]/80 leading-relaxed font-light">
                Indica les dates desitjades, el nombre aproximat de persones i si cerques descans, una celebració o un retir de treball.
              </p>
            </div>

            <div className="p-6 bg-[#232a1e]/40 border border-[#ECE6DC]/15 relative">
              <span className="font-serif text-4xl text-[#B56F50] block mb-3">02</span>
              <h3 className="font-serif text-xl text-[#FBF9F4] mb-2">
                Revisem el calendari
              </h3>
              <p className="text-xs text-[#ECE6DC]/80 leading-relaxed font-light">
                Comprovem la disponibilitat d'exclusivitat i preparem una proposta personalitzada amb els espais i serveis més adequats.
              </p>
            </div>

            <div className="p-6 bg-[#232a1e]/40 border border-[#ECE6DC]/15 relative">
              <span className="font-serif text-4xl text-[#B56F50] block mb-3">03</span>
              <h3 className="font-serif text-xl text-[#FBF9F4] mb-2">
                Concretem tots els detalls
              </h3>
              <p className="text-xs text-[#ECE6DC]/80 leading-relaxed font-light">
                Mantenim una conversa personal o visita prèvia per resoldre qualsevol dubte abans de formalitzar l'acord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION EDITORIAL DE TANCAMENT */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold">
          Comença la conversa
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#343D2D] mt-3 mb-6 font-normal">
          Parlem del que tens en ment.
        </h2>
        <p className="text-sm md:text-base text-[#51483D] leading-relaxed font-light max-w-xl mx-auto mb-10">
          Tant si vols consultar disponibilitat per al proper estiu com si desitges informació per a un retir d'empresa a la tardor.
        </p>

        <Link
          to="/sollicitud"
          className="inline-flex items-center gap-2 px-9 py-4 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] hover:bg-[#232a1e] text-[#FBF9F4] transition-all shadow-md"
        >
          <span>Sol·licitar informació i disponibilitat</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        images={galleryImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};
