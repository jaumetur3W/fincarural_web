import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F5F2EA] min-h-[70vh] flex items-center justify-center py-20 px-6 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <Compass className="w-12 h-12 text-[#B56F50] mx-auto animate-spin-slow" />
        <span className="text-xs uppercase tracking-[0.25em] text-[#B56F50] font-semibold block">
          Pàgina no trobada (404)
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#343D2D] font-normal">
          Un sender sense sortida.
        </h1>
        <p className="text-sm text-[#51483D] leading-relaxed font-light">
          L'espai o l'enllaç que cerques no existeix a Mas de l'Alzina o ha canviat d'adreça.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-[#343D2D] text-[#FBF9F4] hover:bg-[#232a1e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tornar a la finca</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

