import React from "react";
import { MessageSquare, Mail, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { FounderSettings } from "../types";

interface HowItWorksProps {
  settings: FounderSettings;
}

export default function HowItWorks({ settings }: HowItWorksProps) {
  const whatsappLink = `https://wa.me/${settings.whatsapp}?text=Olá%2C+quero+saber+mais+sobre+a+FormaT.`;
  const emailLink = `mailto:${settings.email}?subject=Contacto%20FormaT%20-%20Escola%20de%20Skate&body=Olá%20FormaT,%0A%0AGostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas%20de%20skate.`;

  return (
    <section id="como-funciona" className="relative bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20 md:py-28 text-white overflow-hidden fade-up">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,96,26,0.05),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">
            Descomplicado
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal sm:tracking-wide uppercase leading-[1.05]">
            TRÊS PASSOS. SEM COMPLICAÇÕES.
          </h2>
          <p className="font-body text-gray-400 text-base sm:text-lg">
            O processo de entrada na escola é direto, pessoal e sem burocracias desnecessárias.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          
          {/* Step 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative bg-[#111111]/40 border border-white/5 rounded p-8 space-y-6 transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-[#111111]/60 group"
          >
            <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded bg-[#D4601A] text-black font-display text-2xl font-bold shadow-lg shadow-[#D4601A]/10 transition-colors">
              01
            </div>
            <div className="pt-4 space-y-3">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-[#D4601A] transition-colors">
                Falas Connosco
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Entra em contacto via WhatsApp ou e-mail. Diz o que procuras (aulas, workshops, aniversários) e para quem é (idade, nível).
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative bg-[#111111]/40 border border-white/5 rounded p-8 space-y-6 transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-[#111111]/60 group"
          >
            <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded bg-[#D4601A] text-black font-display text-2xl font-bold shadow-lg shadow-[#D4601A]/10 transition-colors">
              02
            </div>
            <div className="pt-4 space-y-3">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-[#D4601A] transition-colors">
                Combinamos Detalhes
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Apresentamos as melhores opções consoante o que pretendes. Definimos em conjunto as datas ideais e todos os pormenores da atividade.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative bg-[#111111]/40 border border-white/5 rounded p-8 space-y-6 transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-[#111111]/60 group"
          >
            <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded bg-[#D4601A] text-black font-display text-2xl font-bold shadow-lg shadow-[#D4601A]/10 transition-colors">
              03
            </div>
            <div className="pt-4 space-y-3">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-[#D4601A] transition-colors">
                Começamos
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Sem burocracias complexas nem letras pequeninas. Apareces no skatepark e focamo-nos naquilo que realmente interessa: desfrutar da experiência e andar de skate.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Manual Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-20 mx-auto max-w-md rounded-xl overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-black/50 bg-white"
        >
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IcneLs_zOFA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Final Reassuring Action Area */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-xl mx-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded btn-primary px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
            >
              <MessageSquare className="h-5 w-5 fill-[#111111]" />
              Falar no WhatsApp
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div>
            <a
              href={emailLink}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border-b border-gray-600 hover:border-white pb-0.5 transition-colors font-body"
            >
              <Mail className="h-4 w-4" />
              Ou prefiro enviar email para {settings.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
