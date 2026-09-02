import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Target, ShieldCheck, Brain, Focus, Trophy, Users, Compass, ChevronDown } from "lucide-react";

const benefitsData = [
  {
    label: "CORPO",
    items: [
      {
        title: "Trabalha o corpo todo",
        description:
          "O skate activa praticamente todos os grupos musculares: core, pernas e glúteos para manter o equilíbrio, braços para controlar o movimento. É treino funcional sem parecer treino.",
        icon: Activity,
      },
      {
        title: "Melhora a coordenação motora",
        description:
          "Pés, pernas, braços e visão trabalham em simultâneo para manter o equilíbrio e executar movimentos. Com o tempo, essa coordenação transfere-se para todas as outras actividades físicas e do dia-a-dia.",
        icon: Target,
      },
      {
        title: "Ensina a cair sem se magoar",
        description:
          "Aprender a cair correctamente é uma das primeiras coisas que se aprende no skate. Uma competência que reduz o risco de lesões no skate e em qualquer outro desporto ou situação de vida.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "MENTE",
    items: [
      {
        title: "Desenvolve paciência e resiliência",
        description:
          "Nenhuma manobra aparece do nada. São precisas dezenas de tentativas antes de sair. Quem anda de skate aprende, de forma natural, a tolerar a frustração e a persistir, sem que ninguém precise de o dizer.",
        icon: Brain,
      },
      {
        title: "Reduz o stress e melhora o foco",
        description:
          "Quando estás a andar de skate, não consegues pensar em mais nada. A concentração total no movimento cria um estado próximo da meditação, e o stress vai a baixo com o esforço físico.",
        icon: Focus,
      },
      {
        title: "Constrói autoestima de forma real",
        description:
          "Cada manobra conseguida é uma vitória concreta e visível. A autoconfiança que o skate desenvolve vem do esforço real, não de elogios fáceis. E isso faz toda a diferença.",
        icon: Trophy,
      },
    ],
  },
  {
    label: "COMUNIDADE",
    items: [
      {
        title: "Cria laços entre pessoas diferentes",
        description:
          "O skate une pessoas de idades, origens e contextos completamente diferentes. O que importa é a companhia, não o que trazes de fora. Das coisas mais bonitas que uma actividade pode oferecer.",
        icon: Users,
      },
      {
        title: "Dá um propósito positivo ao tempo livre",
        description:
          "Jovens com um espaço, uma comunidade e um objectivo claro ocupam o tempo de forma saudável. O skate canaliza energia, competitividade e vontade de aprender, tudo ao mesmo tempo. Mais rua, menos ecrãs.",
        icon: Compass,
      },
    ],
  },
];

export default function Benefits() {
  const [openItems, setOpenItems] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  const toggleItem = (catIndex: number, itemIndex: number) => {
    setOpenItems(prev => ({
      ...prev,
      [catIndex]: prev[catIndex] === itemIndex ? -1 : itemIndex
    }));
  };

  return (
    <section id="beneficios" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#D4601A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 uppercase tracking-wider"
          >
            Sabias que o skate<br className="hidden md:block" /> faz mais do que parecer?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-body"
          >
            Não é só uma actividade. É uma ferramenta de desenvolvimento que trabalha o corpo, a mente e as relações ao mesmo tempo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {benefitsData.map((category, catIndex) => (
            <div key={category.label} className="flex flex-col relative">
              {/* Vertical line separator on desktop */}
              {catIndex !== 0 && (
                <div className="hidden lg:block absolute left-[-16px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-[#D4601A] font-body font-medium uppercase tracking-widest text-sm inline-block border-b border-[#D4601A]/30 pb-2">
                  {category.label}
                </h3>
              </motion.div>

              <div className="space-y-4 flex-1">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const isOpen = openItems[catIndex] === itemIndex;
                  
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (catIndex * 0.2) + (itemIndex * 0.1) 
                      }}
                      className="group border-b border-white/10 pb-4 last:border-0"
                    >
                      <button
                        onClick={() => toggleItem(catIndex, itemIndex)}
                        className="flex items-start gap-4 w-full text-left"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <Icon className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-[#D4601A]' : 'text-gray-500 group-hover:text-[#D4601A]/80'}`} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-xl font-display uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                              {item.title}
                            </h4>
                            <ChevronDown 
                              className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#D4601A]' : 'text-gray-600 group-hover:text-gray-400'}`} 
                            />
                          </div>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-400 font-body text-base leading-relaxed pt-3">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
