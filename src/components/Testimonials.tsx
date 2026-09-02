import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "A melhor escola de skate da cidade! O meu filho adorou as aulas e perdeu o medo de cair logo na primeira semana. Os professores são muito atenciosos.",
    name: "João Silva",
    role: "Pai do Martim (8 anos)"
  },
  {
    id: 2,
    quote: "Comecei a andar aos 15 anos e não sabia nada. A malta da FormaT deu-me a confiança que precisava para evoluir. O ambiente é incrível!",
    name: "Sofia Ramos",
    role: "Aluna (15 anos)"
  },
  {
    id: 3,
    quote: "Excelente espaço para os miúdos aprenderem disciplina e resiliência de uma forma super divertida. Recomendo a 100% para qualquer pai.",
    name: "Miguel Pereira",
    role: "Pai da Inês (10 anos)"
  },
  {
    id: 4,
    quote: "As aulas particulares fizeram toda a diferença na minha evolução. Consegui aprender manobras que achava serem impossíveis para mim.",
    name: "Tomás Castro",
    role: "Aluno (12 anos)"
  },
  {
    id: 5,
    quote: "Achei que fosse velho para isto mas estava enganado, o professor Jota mostrou-me que o skate não tem idade. Uma experiência fantástica que me devolveu a vitalidade!",
    name: "Carlos Martins",
    role: "Aluno Adulto (45 anos)"
  },
  {
    id: 6,
    quote: "Fizemos um campo de férias com 140 crianças numa tarde, todas ficaram radiantes e ainda receberam um chapéu da FormaT como brinde. Uma organização irrepreensível!",
    name: "Município de Oleiros",
    role: "Parceiro Institucional"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="testemunhos" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4601A]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 uppercase tracking-wider">
            O QUE DIZEM <br className="md:hidden" />
            <span className="text-[#D4601A]">SOBRE NÓS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-body max-w-2xl mx-auto">
            A opinião de quem já faz parte da nossa comunidade. Pais tranquilos, alunos focados e felizes.
          </p>
        </div>

        <div className="relative h-[400px] sm:h-[320px] md:h-[280px] w-full max-w-4xl mx-auto flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full px-4"
            >
              <div className="bg-[#111111] p-8 md:p-12 rounded border border-white/10 shadow-2xl relative">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-[#D4601A]/20" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl text-gray-200 font-body italic mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-white font-display text-2xl uppercase tracking-wider">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#D4601A] font-body text-sm uppercase tracking-widest mt-1">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8 relative z-20">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-white/20 bg-[#111111] flex items-center justify-center text-white hover:bg-[#D4601A] hover:border-[#D4601A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4601A]/50"
            aria-label="Testemunho anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D4601A] w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-white/20 bg-[#111111] flex items-center justify-center text-white hover:bg-[#D4601A] hover:border-[#D4601A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4601A]/50"
            aria-label="Próximo testemunho"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
