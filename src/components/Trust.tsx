import React, { useState, useEffect, useRef } from "react";
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { FounderSettings } from "../types";

interface TrustProps {
  settings: FounderSettings;
}

export default function Trust({ settings }: TrustProps) {
  const defaultImages = [
    "/treinador.jpeg",
    "/indy.jpeg",
    "/fsfeeble.jpg",
    "/tre.jpeg",
    "/fifty.jpg",
    "/bsfeeble.jpg",
    "/ollie.jpeg",
    "/smith.jpeg",
    "/bstail.jpeg",
    "/bssmith.jpeg",
    "/skatehug.jpg"
  ];
  
  const [images, setImages] = useState<string[]>(defaultImages);

  const handleNextImage = () => {
    setImages(prev => {
      const newImages = [...prev];
      const first = newImages.shift();
      if (first) newImages.push(first);
      return newImages;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [experienceCount, setExperienceCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const target = settings.coachExperience;
    if (hasCounted) {
      setExperienceCount(target);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasCounted(true);
          let startTimestamp: number | null = null;
          const duration = 1200; // ms
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setExperienceCount(Math.floor(eased * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setExperienceCount(target);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [settings.coachExperience, hasCounted]);

  return (
    <section id="confianca" ref={sectionRef} className="relative bg-gradient-to-b from-[#111111] via-[#1c0f08] to-[#1a1a1a] py-20 md:py-28 text-white overflow-hidden fade-up">
      {/* Structural element representing skateboard lines or concrete grip */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,96,26,0.08),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Facts & Bio */}
          <div className="lg:col-span-7 space-y-10">
            {/* Icon Header with protection spacing */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 p-2 flex items-center justify-center">
                <img
                  src="/IconeB_FormaT.png"
                  alt="FormaT Icon"
                  className="h-12 w-auto object-contain flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4601A] font-sans">O Treinador</span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none text-white mt-1">
                  A CULTURA E A TÉCNICA
                </h2>
              </div>
            </div>

            {/* Three Facts (Icon + Number + Label) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {/* Fact 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-[#1a1a1a] rounded p-5 border-b border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-zinc-900"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-xl bg-[#D4601A]/10 p-2.5 text-[#D4601A] border border-[#D4601A]/20">
                    <Clock className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight font-sans leading-none text-white">
                    <span id="count-anos" className="text-[#D4601A]">{experienceCount}</span> Anos
                  </div>
                  <div className="text-sm font-medium text-zinc-400 mt-1 font-body">De experiência</div>
                </div>
              </motion.div>

              {/* Fact 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-[#1a1a1a] rounded p-5 border-b border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-zinc-900"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-xl bg-[#D4601A]/10 p-2.5 text-[#D4601A] border border-[#D4601A]/20">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight font-sans leading-none text-white">Grau I FPP</div>
                  <div className="text-sm font-medium text-zinc-400 mt-1 font-body">Treinador certificado</div>
                </div>
              </motion.div>

              {/* Fact 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-[#1a1a1a] rounded p-5 border-b border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#D4601A]/30 hover:bg-zinc-900"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-xl bg-[#D4601A]/10 p-2.5 text-[#D4601A] border border-[#D4601A]/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight font-sans leading-none text-white">C. Branco</div>
                  <div className="text-sm font-medium text-zinc-400 mt-1 font-body">Onde estamos</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Personal bio in DM Sans */}
            <div className="space-y-4">
              <blockquote className="border-l-4 border-[#D4601A] pl-5">
                <p className="font-body text-lg md:text-xl font-medium leading-relaxed italic text-zinc-200">
                  "{settings.coachBio}"
                </p>
              </blockquote>
              <div className="flex items-center gap-2 pl-5">
                <ShieldCheck className="h-5 w-5 text-[#D4601A]" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Treinador Credenciado pela Federação de Patinagem de Portugal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Coach Photo Card with urban styling */}
          <div className="lg:col-span-5 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full group">
              {/* Thick background border frame for brutalist aesthetic */}
              <div className="absolute -inset-3 bg-black rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-2 opacity-50 lg:opacity-100" />
              
              {/* Stacked Images container */}
              <div className="relative aspect-[2/3] w-full">
                {images.slice().reverse().map((img, indexReverse) => {
                  const index = images.length - 1 - indexReverse;
                  const isTop = index === 0;
                  const isSecond = index === 1;
                  const isThird = index === 2;
                  
                  return (
                    <div 
                      key={img}
                      className={`absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-4 border-black transition-all duration-500 ease-in-out origin-bottom-right ${
                        isTop ? 'z-30 translate-y-0 translate-x-0 rotate-0 opacity-100 group-hover:-translate-y-2 group-hover:-rotate-1 scale-100' :
                        isSecond ? 'z-20 translate-y-3 translate-x-3 rotate-3 opacity-90 scale-[0.98]' :
                        isThird ? 'z-10 translate-y-6 translate-x-6 rotate-6 opacity-80 scale-[0.96]' :
                        'z-0 translate-y-8 translate-x-8 rotate-12 opacity-0 scale-[0.94]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={settings.coachName}
                        className="w-full h-full object-cover bg-zinc-900"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Photo Tag */}
                      <div className={`absolute bottom-4 left-4 right-4 bg-black text-white p-3 rounded-md flex items-center justify-between font-sans shadow-lg transition-opacity duration-300 ${isTop ? 'opacity-100' : 'opacity-0'}`}>
                        <div>
                          <div className="text-xs text-[#D4601A] font-bold uppercase tracking-widest">Fundador &amp; Treinador</div>
                          <div className="text-sm font-extrabold tracking-wide uppercase">João Pedro</div>
                        </div>
                        <div className="rounded-full bg-[#D4601A] text-black text-[10px] font-bold uppercase px-2.5 py-1">
                          Ativo desde 2009
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
