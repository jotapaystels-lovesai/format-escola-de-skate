/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { DEFAULT_SETTINGS } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import WhereWeAre from "./components/WhereWeAre";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  const settings = DEFAULT_SETTINGS;

  // Load settings from localStorage and setup global IntersectionObserver for section fade-up
  useEffect(() => {
    // Set up scroll trigger for section entries
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all fade-up elements
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] font-sans antialiased selection:bg-[#D4601A] selection:text-white overflow-x-hidden">
      {/* 1. Header & Navigation (Sticky) */}
      <Header settings={settings} />

      {/* Main Sections */}
      <main>
        {/* 2. Hero Section (Secção 01) */}
        <Hero settings={settings} />

        {/* 3. Confiança Section (Secção 02) */}
        <Trust settings={settings} />

        {/* 4. Serviços Section (Secção 03) */}
        <Services settings={settings} />

        {/* 5. Como Funciona Section (Secção 04) */}
        <HowItWorks settings={settings} />

        {/* 5.5. Benefícios do Skate (Secção Sabias que?) */}
        <Benefits />

        {/* 5.75. Testemunhos */}
        <Testimonials />

        {/* 6. Onde Estamos Section (Secção 05) */}
        <WhereWeAre settings={settings} />
      </main>

      {/* 7. Footer (Secção 06) */}
      <Footer settings={settings} />

      {/* 9. Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}
