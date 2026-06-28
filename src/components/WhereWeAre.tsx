import React from "react";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";
import { FounderSettings } from "../types";

interface WhereWeAreProps {
  settings: FounderSettings;
}

export default function WhereWeAre({ settings }: WhereWeAreProps) {
  // Direct Google Maps search URL with exact coordinates/name
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    settings.address
  )}`;

  return (
    <section id="onde-estamos" className="relative bg-gradient-to-b from-[#1a1a1a] to-[#111111] py-20 md:py-28 text-white overflow-hidden fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Schedules */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
                  Localização
                </span>
                <div className="h-[1px] w-8 bg-[#D4601A]/40" />
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-sans">
                  ONDE ESTAMOS
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05] text-white">
                CASTELO BRANCO.
                <br />
                <span className="text-white/60">É AQUI.</span>
              </h2>
            </div>

            {/* Address Block */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#D4601A]/10 p-3 text-[#D4601A] flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans">
                    Morada Oficial
                  </h4>
                  <p className="font-body text-base font-bold text-white">
                    {settings.address}
                  </p>
                  <p className="font-body text-xs text-gray-400">
                    O ponto de encontro e treino oficial de todos os nossos alunos.
                  </p>
                </div>
              </div>
            </div>

            {/* Schedules Block */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <Clock className="h-5 w-5 text-[#D4601A]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 font-sans">
                  Horário de Aulas Regulares
                </h4>
              </div>

              <div className="space-y-3 font-body text-sm text-gray-300">
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="font-medium text-white">Terça a Sexta-feira</span>
                  <span className="font-mono bg-white/5 px-2 py-0.5 rounded text-xs text-gray-300">19:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="font-medium text-white">Sábados</span>
                  <span className="font-mono bg-white/5 px-2 py-0.5 rounded text-xs text-gray-300">09:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-white">Domingos e Feriados</span>
                  <span className="text-xs font-medium text-[#D4601A] uppercase">Mediante Marcação</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Styled Map Mapbox-like Vector Representation */}
          <div className="lg:col-span-6">
            <div className="bg-[#111111] rounded-2xl border border-white/20 overflow-hidden shadow-2xl relative group">
              
              {/* Map Image Representation */}
              <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <img 
                  src="/skatepark.jpg" 
                  alt="FormaT Skatepark" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Image Overlay Gradient for better contrast */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Pinpoint marker with pulsating effect */}
                <div className="absolute top-[45%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  {/* Pulse Circles */}
                  <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#D4601A]/40 animate-ping" />
                  
                  {/* Actual Marker Pin */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#D4601A] text-black shadow-xl border-2 border-[#111111]">
                    <img
                      src="/IconeB_FormaT.png"
                      alt="FormaT Pin"
                      className="h-5 w-auto object-contain flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Pin Label */}
                  <div className="mt-2 bg-[#D4601A] text-black text-[10px] font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-md shadow-md border border-white/10 whitespace-nowrap">
                    FormaT Skatepark
                  </div>
                </div>

                {/* Location Text Accents */}
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/80 drop-shadow-md">Castelo Branco, PT</div>
              </div>

              {/* Action Overlay footer on Map Card */}
              <div className="p-5 bg-[#111111] border-t border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-[#D4601A] font-bold uppercase tracking-widest">Apoio à Navegação</div>
                  <div className="text-sm font-extrabold tracking-wide uppercase">Abrir no Google Maps</div>
                </div>
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded btn-primary px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
                >
                  <Navigation className="h-4 w-4 fill-[#111111]" />
                  Obter Direções
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
