import React, { useState } from "react";
import { MessageSquare, Mail, Instagram, MapPin } from "lucide-react";
import { FounderSettings } from "../types";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

interface FooterProps {
  settings: FounderSettings;
}

export default function Footer({ settings }: FooterProps) {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const whatsappLink = `https://wa.me/${settings.whatsapp}?text=Olá%2C+quero+saber+mais+sobre+a+FormaT.`;

  const emailLink = `mailto:${settings.email}?subject=Contacto%20FormaT%20-%20Escola%20de%20Skate&body=Olá%20FormaT,%0A%0AGostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas%20de%20skate.`;
  const instagramLink = `https://instagram.com/${settings.instagram}`;

  // Format phone number visually (e.g. +351 968 259 078)
  const formatPhone = (num: string) => {
    if (num.startsWith("+351") && num.length === 13) {
      return `+351 ${num.slice(4, 7)} ${num.slice(7, 10)} ${num.slice(10)}`;
    }
    return num;
  };

  return (
    <footer id="contacto" className="bg-[#111111] text-gray-400 py-16 relative overflow-hidden">
      {/* Subtle bottom radial gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-[radial-gradient(circle_at_bottom,rgba(212,96,26,0.04),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#hero" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#D4601A] rounded p-1">
              <img
                src="/format_wh.png"
                alt="FormaT Logo Footer"
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="space-y-2 font-body text-sm max-w-sm">
              <p className="text-gray-300 font-bold">FormaT - Skate &amp; Comunidade</p>
              <p className="text-gray-500">
                Aulas de skate estruturadas e planeadas em Castelo Branco, ensinamos técnica, resiliência e força de vontade.
              </p>
            </div>
          </div>

          {/* Empty spacer / visual column */}
          <div className="hidden md:col-span-1 md:block" />

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-sans">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a href="#hero" className="hover:text-[#D4601A] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#D4601A] transition-colors">
                  Atividades
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#D4601A] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#onde-estamos" className="hover:text-[#D4601A] transition-colors">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-sans">
              Contactos Oficiais
            </h4>
            <ul className="space-y-3 text-sm font-body">
              
              {/* WhatsApp */}
              <li className="flex flex-col gap-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#D4601A] transition-colors group w-fit"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400 group-hover:bg-[#D4601A]/10 group-hover:text-[#D4601A] transition-colors">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span>{formatPhone(settings.whatsapp)}</span>
                </a>
                <span className="text-xs text-gray-500 ml-11">(Custo de chamada para a rede fixa nacional.)</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <a
                  href={emailLink}
                  className="flex items-center gap-2.5 hover:text-[#D4601A] transition-colors group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400 group-hover:bg-[#D4601A]/10 group-hover:text-[#D4601A] transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="break-all">{settings.email}</span>
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-3">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#D4601A] transition-colors group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400 group-hover:bg-[#D4601A]/10 group-hover:text-[#D4601A] transition-colors">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span>@{settings.instagram}</span>
                </a>
              </li>

              {/* General Map Pin */}
              <li className="flex items-center gap-3 text-gray-500">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-xs">Castelo Branco, Portugal</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Border & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-600">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>© 2025 FormaT. Todos os direitos reservados.</p>
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Política de Privacidade
            </button>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Desenvolvido para <span className="font-extrabold text-[#D4601A]">FormaT - Skate &amp; Comunidade</span>
            </p>
          </div>
        </div>

      </div>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
        settings={settings} 
      />
    </footer>
  );
}
