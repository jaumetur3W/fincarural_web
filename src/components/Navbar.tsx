import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FINCA_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'La Finca', path: '/la-finca' },
    { name: 'Estades', path: '/estades' },
    { name: 'Celebracions', path: '/celebracions' },
    { name: 'Encuentres', path: '/encuentres' },
    { name: 'Info & FAQ', path: '/faq' },
  ];

  return (
    <>
      {/* Conceptual portfolio top notice banner */}
      <div className="bg-[#343D2D] text-[#ECE6DC] text-xs py-1.5 px-4 text-center tracking-wide font-sans flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B56F50] animate-pulse"></span>
        <span>{FINCA_INFO.noticeDisclaimer}</span>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F4]/95 backdrop-blur-md shadow-xs border-b border-[#DDD4C5]/60 py-3.5'
            : 'bg-[#F5F2EA] border-b border-[#DDD4C5]/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col focus-visible:outline-[#343D2D]"
            aria-label="Mas de l'Alzina - Pàgina principal"
          >
            <span className="font-serif text-2xl md:text-3xl text-[#343D2D] tracking-tight group-hover:text-[#B56F50] transition-colors leading-none">
              Mas de l'Alzina
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#51483D]/70 font-sans mt-0.5">
              Interior de València
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navegació principal">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#343D2D] font-semibold'
                      : 'text-[#51483D] hover:text-[#343D2D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B56F50]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link
              to="/sollicitud"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#FBF9F4] bg-[#343D2D] hover:bg-[#232a1e] transition-all duration-200 border border-[#343D2D] shadow-xs hover:shadow-md"
            >
              <span>Consultar disponibilitat</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DDD4C5]" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/sollicitud"
              className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#FBF9F4] bg-[#343D2D] hover:bg-[#232a1e] transition-colors"
            >
              Consultar
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#343D2D] hover:text-[#B56F50] focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tancar menú" : "Obrir menú de navegació"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#FBF9F4] border-b border-[#DDD4C5] px-6 py-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4" aria-label="Navegació mòbil">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-serif tracking-wide py-2 border-b border-[#DDD4C5]/30 ${
                    location.pathname === link.path
                      ? 'text-[#B56F50] font-semibold'
                      : 'text-[#343D2D]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/sollicitud"
                  className="w-full inline-flex justify-center items-center gap-2 py-3 text-xs uppercase tracking-widest font-semibold text-[#FBF9F4] bg-[#343D2D]"
                >
                  <span>Sol·licitar disponibilitat i pressupost</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

