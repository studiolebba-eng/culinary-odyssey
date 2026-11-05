"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Globe, Compass, Flame } from "lucide-react";

export default function AboutConcept() {
  const { t } = useLanguage();

  return (
    <section id="concept" className="relative py-24 sm:py-32 bg-[#1E242E] overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <Image
          src="/images/about-bg.jpg"
          alt="Mina Al-Bahr Texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-[#C79D6B]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
            {t.concept.tag}
          </span>
        </div>

        {/* Two-column layout with authentic copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1] leading-[1.05]">
              {t.concept.title} <br />
              <span className="font-serif-luxury italic text-[#C79D6B]">
                {t.concept.titleHighlight}
              </span>
            </h2>

            <p className="font-serif-luxury text-xl sm:text-2xl text-[#FCF2E1]/90 italic leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C79D6B] pl-6 rtl:pl-0 rtl:pr-6 py-1">
              {t.concept.quote}
            </p>

            <div className="space-y-4 text-[#FCF2E1]/80 text-base sm:text-lg leading-relaxed font-light">
              <p>{t.concept.p1}</p>
              <p>{t.concept.p2}</p>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C79D6B]/50 transition-all group">
                <Globe className="w-6 h-6 text-[#C79D6B] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-ltremark uppercase tracking-wider text-sm text-[#FCF2E1] mb-1">
                  {t.concept.pillar1Title}
                </h4>
                <p className="text-xs text-white/60 leading-normal">
                  {t.concept.pillar1Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C79D6B]/50 transition-all group">
                <Flame className="w-6 h-6 text-[#C79D6B] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-ltremark uppercase tracking-wider text-sm text-[#FCF2E1] mb-1">
                  {t.concept.pillar2Title}
                </h4>
                <p className="text-xs text-white/60 leading-normal">
                  {t.concept.pillar2Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C79D6B]/50 transition-all group">
                <Sparkles className="w-6 h-6 text-[#C79D6B] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-ltremark uppercase tracking-wider text-sm text-[#FCF2E1] mb-1">
                  {t.concept.pillar3Title}
                </h4>
                <p className="text-xs text-white/60 leading-normal">
                  {t.concept.pillar3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right visual presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/about-dish.webp"
                alt="Gastronomic fusion dish at Mina Al-Bahr"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151a22] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1E242E]/80 backdrop-blur-md border border-white/10">
                <div className="text-[10px] uppercase tracking-widest text-[#C79D6B] font-semibold mb-1">
                  {t.concept.labNoteTag}
                </div>
                <div className="text-sm font-serif-luxury text-[#FCF2E1] italic">
                  {t.concept.labNoteQuote}
                </div>
              </div>
            </div>

            {/* Decorative crystal SVG */}
            <div className="absolute -top-6 -right-6 rtl:right-auto rtl:-left-6 w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
              <Image src="/images/crystal-4.svg" alt="Crystal" width={80} height={80} />
            </div>
          </div>
        </div>

        {/* The 3 banner mantras */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#151a22]/50 border border-white/5 flex flex-col items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C79D6B] mb-1">01</span>
            <span className="font-ltremark text-2xl uppercase tracking-wider text-[#FCF2E1]">
              {t.concept.mantra1}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#151a22]/50 border border-white/5 flex flex-col items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C79D6B] mb-1">02</span>
            <span className="font-ltremark text-2xl uppercase tracking-wider text-[#FCF2E1]">
              {t.concept.mantra2}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#151a22]/50 border border-white/5 flex flex-col items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C79D6B] mb-1">03</span>
            <span className="font-ltremark text-2xl uppercase tracking-wider text-[#FCF2E1]">
              {t.concept.mantra3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
