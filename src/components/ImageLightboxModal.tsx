import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  url: string;
  caption: string;
  spaceName?: string;
}

interface ImageLightboxModalProps {
  images: GalleryImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync index if initial changes
  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria d'imatges arquitectònica"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-[#ECE6DC] hover:text-[#B56F50] rounded-full bg-black/40 hover:bg-black/60 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#B56F50]"
        aria-label="Tancar visualitzador"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 p-3 text-[#ECE6DC] hover:text-[#B56F50] rounded-full bg-black/40 hover:bg-black/60 transition-colors z-50 focus:outline-none"
          aria-label="Imatge anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 p-3 text-[#ECE6DC] hover:text-[#B56F50] rounded-full bg-black/40 hover:bg-black/60 transition-colors z-50 focus:outline-none"
          aria-label="Imatge següent"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={current.url}
          alt={current.caption || "Fotografia de Mas de l'Alzina"}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-white/10"
        />

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-xl">
          {current.spaceName && (
            <p className="text-xs uppercase tracking-widest text-[#B56F50] font-sans font-medium mb-1">
              {current.spaceName}
            </p>
          )}
          <p className="text-sm text-[#ECE6DC] font-serif italic">
            {current.caption}
          </p>
          <p className="text-[11px] text-[#ECE6DC]/50 font-sans mt-1">
            {currentIndex + 1} de {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};
