import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Activity, Info, MapPin, Mail, ChevronDown } from "lucide-react";
import { FounderSettings } from "../types";

interface HeaderProps {
  settings: FounderSettings;
}

export default function Header({ settings }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu dropdown states
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${settings.whatsapp}?text=Olá%2C+quero+saber+mais+sobre+a+FormaT.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 navbar ${
        isScrolled
          ? "bg-[#111111] scrolled border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo Brand Icon / Image */}
          <div className="flex-shrink-0 py-2">
            <a href="#hero" className="block focus:outline-none focus:ring-2 focus:ring-[#D4601A] rounded p-1 transition-opacity hover:opacity-80">
              <img
                src="/format_wh.png"
                alt="FormaT"
                className="h-8 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Atividades Dropdown */}
            <div className="relative group">
              <button className="group flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#D4601A] py-2">
                <Activity className="h-4 w-4 text-gray-500 transition-colors group-hover:text-[#D4601A]" />
                Atividades
                <ChevronDown className="h-3 w-3 ml-1 opacity-50 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="py-2">
                  <a href="#aulas-particulares" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Aulas de Skate</a>
                  <a href="#campos-de-ferias" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Campos de Férias</a>
                  <a href="#workshops" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Workshops</a>
                  <a href="#aniversarios" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Aniversários</a>
                </div>
              </div>
            </div>

            {/* Sobre Nós Dropdown */}
            <div className="relative group">
              <button className="group flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#D4601A] py-2">
                <Info className="h-4 w-4 text-gray-500 transition-colors group-hover:text-[#D4601A]" />
                Sobre Nós
                <ChevronDown className="h-3 w-3 ml-1 opacity-50 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="py-2">
                  <a href="#como-funciona" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Como Funciona</a>
                  <a href="#beneficios" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Benefícios do Skate</a>
                  <a href="#testemunhos" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">Testemunhos</a>
                  <a href="#confianca" className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4601A] transition-colors">A Nossa Experiência</a>
                </div>
              </div>
            </div>

            <a
              href="#onde-estamos"
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#D4601A]"
            >
              <MapPin className="h-4 w-4 text-gray-500 transition-colors group-hover:text-[#D4601A]" />
              Onde Estamos
            </a>
            <a
              href="#contacto"
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#D4601A]"
            >
              <Mail className="h-4 w-4 text-gray-500 transition-colors group-hover:text-[#D4601A]" />
              Contacto
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded px-5 py-2.5 text-xs font-bold uppercase tracking-wider btn-primary transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="h-4 w-4" />
              Falar connosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D4601A]"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-white/5 px-4 pt-2 pb-6 space-y-2 animate-slide-in overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="space-y-1">
            {/* Atividades Mobile */}
            <div className="border-b border-white/5 pb-2">
              <button
                onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                className="w-full flex items-center justify-between gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-gray-500" />
                  Atividades
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isActivitiesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isActivitiesOpen && (
                <div className="pl-11 pr-3 py-2 space-y-3">
                  <a href="#aulas-particulares" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Aulas Particulares</a>
                  <a href="#campos-de-ferias" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Campos de Férias</a>
                  <a href="#workshops" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Workshops</a>
                  <a href="#aniversarios" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Aniversários</a>
                </div>
              )}
            </div>

            {/* Sobre Nós Mobile */}
            <div className="border-b border-white/5 py-2">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full flex items-center justify-between gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-gray-500" />
                  Sobre Nós
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isAboutOpen && (
                <div className="pl-11 pr-3 py-2 space-y-3">
                  <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Como Funciona</a>
                  <a href="#beneficios" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Benefícios do Skate</a>
                  <a href="#testemunhos" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Testemunhos</a>
                  <a href="#confianca" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">A Nossa Experiência</a>
                </div>
              )}
            </div>

            <a
              href="#onde-estamos"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white border-b border-white/5"
            >
              <MapPin className="h-5 w-5 text-gray-500 group-hover:text-[#D4601A]" />
              Onde Estamos
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              <Mail className="h-5 w-5 text-gray-500 group-hover:text-[#D4601A]" />
              Contacto
            </a>
          </div>
          <div className="px-3 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded py-3 text-sm font-bold uppercase tracking-wider btn-primary transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              Falar connosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
