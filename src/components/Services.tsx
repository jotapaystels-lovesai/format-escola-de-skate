import React, { useState, useEffect } from "react";
import { MessageSquare, Users, User, Clock, Check, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FounderSettings } from "../types";

interface ServicesProps {
  settings: FounderSettings;
}

export default function Services({ settings }: ServicesProps) {
  // Pre-filled WhatsApp link helpers
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  // Workshop Carousel Images
  const workshopSlides = [
    { url: "/presi.jpg", alt: "Apresentação de workshop de skate" },
    { url: "/guys.jpg", alt: "Grupo de skate reunido para workshop" },
    { url: "/ajuda.jpg", alt: "Iniciação e acompanhamento personalizado de skate" },
    { url: "/workshop.jpg", alt: "Sessão prática e manobras em workshop" },
    { url: "/ajuda2.jpg", alt: "Treinador a dar instruções de skate em workshop" },
    { url: "/skaters.jpg", alt: "Jovens skaters a treinar manobras em conjunto" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshopSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshopSlides.length) % workshopSlides.length);
  };

  // Auto-play interval: 5 seconds for the first slide, 4 seconds for the rest
  useEffect(() => {
    const duration = currentSlide === 0 ? 5000 : 4000;
    const timer = setTimeout(() => {
      nextSlide();
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide, workshopSlides.length]);

  return (
    <section id="servicos" className="w-full">
      {/* ----------------- SERVIÇO 01 - AULAS DE SKATE ----------------- */}
      <div id="aulas-particulares" className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-white py-20 md:py-28 relative overflow-hidden service-card fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
                    01
                  </span>
                  <div className="h-[1px] w-8 bg-[#D4601A]/40" />
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-sans">
                    AULAS DE SKATE
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05]">
                  APRENDER COM ESTRUTURA.
                  <br />
                  <span className="text-[#D4601A]">AO TEU RITMO.</span>
                </h2>
              </div>

              <div className="space-y-4 font-body text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Aulas individuais e personalizadas com progressão definida e adaptada ao nível de cada um. Desde quem nunca subiu a um skate até quem quer afinar técnica a sério. Funcionam sob marcação prévia, o que garante uma flexibilidade enorme para o teu dia-a-dia.
                </p>
                <p className="font-medium text-white/90">
                  Para já, estamos a aceitar apenas inscrições para aulas particulares para garantir foco total. As aulas em grupo serão anunciadas em breve!
                </p>
              </div>

              {/* Para quem é */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 font-sans">
                  Para quem é:
                </h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="space-y-2.5 font-body"
                >
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">A partir dos 6 anos e sem limite de idade (nunca é tarde para começar)</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Skaters de todos os níveis que procuram progressão técnica</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Quem procura superar medos ou ganhar confiança no skate num ambiente seguro</span>
                  </motion.li>
                </motion.ul>
              </div>

              {/* Formatos */}
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#D4601A]/10 border border-[#D4601A]/30 px-4 py-2.5">
                  <User className="h-4 w-4 text-[#D4601A]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-200">Particular: Mediante Marcação</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 opacity-50">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Em Grupo: Anúncio em Breve</span>
                </div>
              </div>
            </div>

            {/* Price Column */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white border-b border-white/10 pb-3">
                Preçário de Referência
              </h3>

              <div className="space-y-4">
                {/* Price Item 1 */}
                <div className="flex justify-between items-center bg-black/30 p-3.5 rounded border border-white/5">
                  <div>
                    <div className="text-sm font-bold text-white uppercase">Aula Individual / Sessão</div>
                    <div className="text-[11px] text-gray-400">Sessão dedicada de 1h</div>
                  </div>
                  <div className="text-2xl font-extrabold text-[#D4601A] font-display">
                    {settings.lessonPriceIndividual}€
                  </div>
                </div>

                {/* Price Item 2 */}
                <div className="flex justify-between items-center bg-black/30 p-3.5 rounded border border-[#D4601A]/20">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm font-bold text-white uppercase">Pack de 5 Sessões</div>
                      <span className="bg-[#D4601A]/10 text-[#D4601A] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Poupa 15€</span>
                    </div>
                    <div className="text-[11px] text-gray-400">Total de 5h individuais</div>
                  </div>
                  <div className="text-2xl font-extrabold text-[#D4601A] font-display">
                    {settings.lessonPricePack5}€
                  </div>
                </div>

                {/* Price Item 3 */}
                <div className="flex justify-between items-center bg-[#D4601A]/10 p-3.5 rounded border border-[#D4601A]/30">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm font-bold text-white uppercase">Pack de 10 Sessões</div>
                      <span className="bg-[#D4601A] text-black text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Poupa 50€</span>
                    </div>
                    <div className="text-[11px] text-gray-300">Evolução acelerada com foco</div>
                  </div>
                  <div className="text-2xl font-extrabold text-[#D4601A] font-display">
                    {settings.lessonPricePack10}€
                  </div>
                </div>

                {/* Price Item 4 */}
                <div className="flex justify-between items-center bg-black/40 p-3.5 rounded border border-white/5 opacity-60">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm font-bold text-gray-400 uppercase">Aula em Grupo</div>
                      <span className="bg-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Brevemente</span>
                    </div>
                    <div className="text-[11px] text-gray-500">2 a 4 alunos por sessão</div>
                  </div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Anúncio em Breve
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="https://forms.gle/yTUjepdb3vYvXCM27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-2 rounded-lg bg-[#D4601A] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors active:scale-95"
                >
                  Inscrever agora
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ----------------- VÍDEO SHOWCASE - FORMAT EM MOVIMENTO ----------------- */}
      <div className="bg-[#111111] pb-20 md:pb-28 relative overflow-hidden service-card fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12 flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-[#D4601A] tracking-wider">
                FormaT em Movimento
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl justify-items-center">
              {/* Vídeo 1: Drop Bros */}
              <div className="relative overflow-hidden rounded-3xl aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] md:max-w-none bg-black border border-white/10 shadow-2xl group transition-opacity duration-300 hover:opacity-90">
                <video
                  src="/drop_bros.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vídeo 2: Drop Incline */}
              <div className="relative overflow-hidden rounded-3xl aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] md:max-w-none bg-black border border-white/10 shadow-2xl group transition-opacity duration-300 hover:opacity-90">
                <video
                  src="/drop_incline.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vídeo 3: TicTac */}
              <div className="relative overflow-hidden rounded-3xl aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] md:max-w-none bg-black border border-white/10 shadow-2xl group transition-opacity duration-300 hover:opacity-90">
                <video
                  src="/tictac.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vídeo 4: Carving */}
              <div className="relative overflow-hidden rounded-3xl aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] md:max-w-none bg-black border border-white/10 shadow-2xl group transition-opacity duration-300 hover:opacity-90">
                <video
                  src="/carving.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- CAMPOS DE FÉRIAS ----------------- */}
      <div id="campos-de-ferias" className="bg-gradient-to-b from-[#111111] to-[#1c0f08] text-white py-20 md:py-28 relative overflow-hidden service-card fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Logo Complete Black used on Light backgrounds */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center gap-6 justify-center">
              <div className="bg-white/5 rounded p-6 sm:p-8 border border-white/10 shadow-xl space-y-6 max-w-md w-full">
                <div className="flex justify-center border-b border-white/10 pb-6">
                  <img
                    src="/format_wh.png"
                    alt="FormaT Logo White"
                    className="h-14 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 font-sans text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#D4601A]">Valor e Reserva</div>
                  <div className="text-2xl font-extrabold uppercase text-white">Mediante consulta</div>
                  <p className="text-xs text-gray-400 font-body">O orçamento é adaptado ao número de participantes, duração da atividade e localização do campo.</p>
                </div>
                
                <div className="space-y-2.5">
                  <a
                    href={getWhatsAppLink("Olá, quero saber mais sobre as atividades da FormaT para campos de férias.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 rounded-lg bg-[#D4601A] text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-colors active:scale-95"
                  >
                    <MessageSquare className="h-4 w-4 fill-black" />
                    Pedir informação
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <div className="text-center text-[10px] text-gray-400 font-sans uppercase font-semibold">
                    Respondemos em menos de 24 horas.
                  </div>
                </div>
              </div>

              {/* Dynamic Image Grid showing real moments from Campos de Férias */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-white/5 border border-white/10 shadow-lg group">
                  <img
                    src="/jota_ajuda.jpg"
                    alt="Treinador João Pedro a ajudar no campo de férias"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-white/5 border border-white/10 shadow-lg group">
                  <img
                    src="/bernas_ajuda.jpg"
                    alt="Bernas a ajudar no campo de férias"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
                    02
                  </span>
                  <div className="h-[1px] w-8 bg-[#D4601A]/40" />
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-sans">
                    CAMPOS DE FÉRIAS
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05] text-white">
                  INTEGRA O SKATE
                  <br />
                  <span className="text-[#D4601A]">NA PROGRAMAÇÃO DO TEU CAMPO.</span>
                </h2>
              </div>

              <div className="space-y-4 font-body text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Colaboramos com escolas, associações, clubes e organizadores de campos de férias para levar o skate à vossa programação. Oferecemos sessões dinâmicas de iniciação e progressão, adaptadas à estrutura do vosso campo.
                </p>
                <p className="font-medium text-white/90">
                  Nós tratamos de tudo: levamos o material (skates e proteções), garantimos a máxima segurança e asseguramos um treinador certificado. Uma atividade marcante para os vossos participantes.
                </p>
              </div>

              {/* Para quem é */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 font-sans">
                  Para quem é:
                </h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="space-y-2.5 font-body"
                >
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Organizadores de campos de férias (escolas, clubes, associações, entidades privadas)</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Responsáveis que querem enriquecer a sua programação com uma atividade ativa e diferenciadora</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Grupos de crianças e jovens (dos 6 aos 16 anos) integrados em programas sazonais (Páscoa, Verão, Natal)</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ----------------- SERVIÇO 03 - WORKSHOPS ----------------- */}
      <div id="workshops" className="bg-gradient-to-b from-[#1c0f08] to-[#1a1a1a] text-white py-20 md:py-28 relative overflow-hidden service-card fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
                    03
                  </span>
                  <div className="h-[1px] w-8 bg-[#D4601A]/40" />
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-sans">
                    WORKSHOPS
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05]">
                  EXPERIMENTA.
                  <br />
                  <span className="text-[#D4601A]">SEM COMPROMISSO.</span>
                </h2>
              </div>

              <div className="space-y-4 font-body text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Sessões pontuais de skate abertas a quem quer experimentar pela primeira vez - ou a quem quer trabalhar um aspecto específico da técnica sem se comprometer com aulas regulares. Temos também uma forte vertente direcionada para a integração institucional.
                </p>
                <p className="font-medium text-white/90">
                  A porta de entrada da FormaT. Sem pressão, com acompanhamento real.
                </p>
              </div>

              {/* Para quem é */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 font-sans">
                  Para quem é:
                </h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="space-y-2.5 font-body"
                >
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Quem nunca andou de skate e quer perceber se é para si</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Grupos de amigos que querem uma experiência coletiva diferente</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Quem quer aperfeiçoar um movimento ou manobra específica</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Municípios, escolas e associações que procuram dinamizar atividades</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>

            {/* Value & Carousel Column */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6 justify-center">
              <div className="bg-white/5 rounded p-6 sm:p-8 border border-white/10 shadow-xl space-y-6 max-w-md w-full">
                <div className="flex justify-center border-b border-white/10 pb-6">
                  <img
                    src="/format_wh.png"
                    alt="FormaT Logo White"
                    className="h-14 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 font-sans text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#D4601A]">Orçamento e Planeamento</div>
                  <div className="text-2xl font-extrabold uppercase text-white">Mediante consulta</div>
                  <p className="text-xs text-gray-400 font-body">O formato, equipamentos e a duração são definidos com base no tamanho do grupo e objectivo.</p>
                </div>
                
                <div className="space-y-2.5">
                  <a
                    href={getWhatsAppLink("Olá, tenho interesse num workshop da FormaT.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 rounded-lg bg-[#D4601A] text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-colors active:scale-95"
                  >
                    <MessageSquare className="h-4 w-4 fill-black" />
                    Pedir informação
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <div className="text-center text-[10px] text-gray-400 font-sans uppercase font-semibold">
                    Respondemos em menos de 24 horas.
                  </div>
                </div>
              </div>

              {/* Workshops Image Carousel */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-white/5 border border-white/10 shadow-lg group w-full max-w-md">
                {/* Arrow navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/60 hover:bg-[#D4601A] hover:text-black text-white flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/60 hover:bg-[#D4601A] hover:text-black text-white flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                  aria-label="Seguinte"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slides using AnimatePresence */}
                <div className="relative h-full w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <img
                        src={workshopSlides[currentSlide].url}
                        alt={workshopSlides[currentSlide].alt}
                        className="absolute inset-0 h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Brand color filter overlay (faded/esbatido): alternating orange and black */}
                      <div 
                        className={`absolute inset-0 pointer-events-none transition-all duration-500 mix-blend-multiply ${
                          currentSlide % 2 === 0 
                            ? "bg-[#D4601A]/20" 
                            : "bg-black/40"
                        }`} 
                      />
                      {/* Subtle dark gradient for depth, contrast and control visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {workshopSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "w-5 bg-[#D4601A]" : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ----------------- SERVIÇO 04 - ANIVERSÁRIOS ----------------- */}
      <div id="aniversarios" className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-white py-20 md:py-28 relative overflow-hidden service-card fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Action Column on Left */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="bg-white/5 rounded p-6 sm:p-8 border border-white/10 shadow-xl space-y-6 max-w-md w-full">
                <div className="flex justify-center border-b border-white/10 pb-6">
                  <img
                    src="/format_wh.png"
                    alt="FormaT Logo White"
                    className="h-14 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 font-sans text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#D4601A]">Preço de Festa</div>
                  <div className="text-2xl font-extrabold uppercase text-white">Mediante consulta</div>
                  <p className="text-xs text-gray-400 font-body">O valor é orçamentado com base no número total de convidados e tempo de sessão pretendido.</p>
                </div>
                
                <div className="space-y-2.5">
                  <a
                    href={getWhatsAppLink("Olá, quero marcar um aniversário na FormaT.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 rounded-lg bg-[#D4601A] text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-colors active:scale-95"
                  >
                    <MessageSquare className="h-4 w-4 fill-black" />
                    Pedir informação
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <div className="text-center text-[10px] text-gray-400 font-sans uppercase font-semibold">
                    Respondemos em menos de 24 horas.
                  </div>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
                    04
                  </span>
                  <div className="h-[1px] w-8 bg-[#D4601A]/40" />
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-sans">
                    FESTAS DE ANIVERSÁRIO
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05] text-white">
                  UM ANIVERSÁRIO
                  <br />
                  <span className="text-[#D4601A]">QUE NINGUÉM ESQUECE.</span>
                </h2>
              </div>

              <div className="space-y-4 font-body text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Uma festa de aniversário diferente - com skate a sério. Sessão guiada com os treinadores para o aniversariante e os convidados, com foco na diversão e experiência real, adaptada à idade e nível do grupo.
                </p>
                <p className="font-medium text-white/90">
                  Não é só diversão (embora isso também esteja 100% garantido). É dar substância à festa dos teus filhos.
                </p>
              </div>

              {/* Para quem é */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 font-sans">
                  Para quem é:
                </h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="space-y-2.5 font-body"
                >
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Crianças e jovens dos 6 aos 16 anos</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Grupos de amigos com energia para gastar</span>
                  </motion.li>
                  <motion.li
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4601A]/10 text-[#D4601A]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-gray-300">Pais que procuram uma alternativa com substância e movimento</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
