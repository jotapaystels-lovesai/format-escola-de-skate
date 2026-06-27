import React from "react";
import { MessageSquare, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { FounderSettings } from "../types";

interface HeroProps {
  settings: FounderSettings;
}

export default function Hero({ settings }: HeroProps) {
  const whatsappLink = `https://wa.me/${settings.whatsapp}?text=Olá%2C+quero+saber+mais+sobre+a+FormaT.`;
  const emailLink = `mailto:${settings.email}?subject=Contacto%20FormaT%20-%20Escola%20de%20Skate&body=Olá%20FormaT,%0A%0AGostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas%20de%20skate.`;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center bg-[#111111] pt-24 text-white overflow-hidden"
    >
      {/* Background image from user with overlays for high-contrast text readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/header.jpg"
          alt="FORMAT SKATE SCHOOL Background"
          className="h-full w-full object-cover opacity-50 filter grayscale contrast-110 brightness-90"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Hide the image if it fails to load or hasn't been uploaded yet
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Gradient layers to transition into the dark background and ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-[#111111]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,96,26,0.1),transparent_50%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between h-[calc(100vh-6rem)] min-h-[500px]">
        {/* Spacer */}
        <div className="hidden sm:block h-6 md:h-12" />

        {/* Core Contents */}
        <div className="max-w-4xl py-12 md:py-16">
          {/* Headline - Bebas Neue, Display */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] text-white uppercase"
          >
            MAIS RUA.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4601A] to-white">
              MENOS ECRÃS.
            </span>
          </motion.h1>

          {/* Subheadline - DM Sans 500 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 font-body text-lg sm:text-xl md:text-2xl font-medium text-gray-400 max-w-2xl leading-relaxed"
          >
            Aulas, campos de férias, workshops e festas de aniversário.
            <br className="hidden sm:inline" />
            Com um treinador certificado que vive o skate há {settings.coachExperience} anos.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            {/* Primary Orange Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded btn-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
            >
              <MessageSquare className="h-5 w-5 fill-[#111111]" />
              Falar no WhatsApp
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Contoured Button */}
            <a
              href={emailLink}
              className="group inline-flex items-center justify-center gap-3 rounded btn-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
            >
              <Mail className="h-5 w-5" />
              Enviar email
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center pb-8 sm:pb-12"
        >
          <a
            href="#confianca"
            className="flex flex-col items-center gap-2 text-xs text-gray-500 uppercase tracking-widest hover:text-white transition-colors duration-200"
          >
            <span>Deslizar para explorar</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-[#D4601A]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
