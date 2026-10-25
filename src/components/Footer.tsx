import React from 'react';
import { Link } from 'react-router-dom';
import { FINCA_INFO } from '../data/content';
import { ArrowUpRight, Compass, Mail, Clock, ShieldCheck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#343D2D] text-[#ECE6DC] pt-16 pb-12 border-t border-[#343D2D]/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#ECE6DC]/15">
          {/* Col 1: Brand & Concept */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <h2 className="font-serif text-3xl text-[#FBF9F4] font-normal tracking-tight">
              {FINCA_INFO.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#B56F50] font-sans">
              {FINCA_INFO.descriptor}
            </p>
            <p className="text-sm text-[#ECE6DC]/80 leading-relaxed font-light max-w-md">
              Una finca mediterrània a l'interior de la província de València.
              Restaurada amb calç, fusta i pedra seca per acollir moments
              d'intimitat, calma i convivència sense distraccions.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#ECE6DC]/60">
              <Compass className="w-4 h-4 text-[#B56F50]" />
              <span>{FINCA_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Explorar */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#FBF9F4]/90">
              Espais & Experiència
            </h3>
            <ul className="space-y-2 text-sm text-[#ECE6DC]/75 font-light">
              <li>
                <Link to="/la-finca" className="hover:text-[#FBF9F4] transition-colors">
                  La Finca & Història
                </Link>
              </li>
              <li>
                <Link to="/estades" className="hover:text-[#FBF9F4] transition-colors">
                  Estades Privades
                </Link>
              </li>
              <li>
                <Link to="/celebracions" className="hover:text-[#FBF9F4] transition-colors">
                  Celebracions Íntimes
                </Link>
              </li>
              <li>
                <Link to="/encuentres" className="hover:text-[#FBF9F4] transition-colors">
                  Retirs Corporatius
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Informació */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#FBF9F4]/90">
              Informació Pràctica
            </h3>
            <ul className="space-y-2 text-sm text-[#ECE6DC]/75 font-light">
              <li>
                <Link to="/faq" className="hover:text-[#FBF9F4] transition-colors">
                  Preguntes Freqüents
                </Link>
              </li>
              <li>
                <Link to="/sollicitud" className="hover:text-[#FBF9F4] transition-colors">
                  Procés de Sol·licitud
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-[#FBF9F4] transition-colors">
                  Condicions de la Demo
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-[#FBF9F4] transition-colors">
                  Privacitat i Avís Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacte Demo */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#FBF9F4]/90">
              Contacte de Demo
            </h3>
            <p className="text-xs text-[#ECE6DC]/70 leading-relaxed font-light">
              Pots provar el formulari interactiu en qualsevol moment; no s'envien sol·licituds reals.
            </p>
            <div className="space-y-2 pt-1 text-xs text-[#ECE6DC]/85">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B56F50]" />
                <span>{FINCA_INFO.demoContact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B56F50]" />
                <span>{FINCA_INFO.demoContact.hours}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/sollicitud"
                className="inline-flex items-center gap-1.5 text-xs text-[#ECE6DC] font-medium border-b border-[#B56F50] pb-0.5 hover:text-[#FBF9F4] transition-colors"
              >
                <span>Obrir formulari</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#ECE6DC]/60 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B56F50]" />
            <span>
              © {CURRENT_YEAR} Mas de l'Alzina. {FINCA_INFO.noticeDisclaimer}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/legal" className="hover:underline">
              Condicions legals fictícies
            </Link>
            <span>•</span>
            <Link to="/faq" className="hover:underline">
              Accessibilitat & FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

