"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Waves, Sparkles, Compass } from "lucide-react";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const [activeRoom, setActiveRoom] = useState<"ocean" | "salt">("ocean");
  const { t, locale } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1E242E]">
      {/* Background imagery with crossfade */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            activeRoom === "ocean" ? "opacity-75 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src="/images/hero-cover1.webp"
            alt="The Ocean Room at Mina Al-Bahr"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            activeRoom === "salt" ? "opacity-75 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src="/images/hero-cover3.webp"
            alt="THE Salt Bar at Mina Al-Bahr"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
        </div>

        {/* Ambient atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E242E] via-[#1E242E]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E242E]/70 via-transparent to-[#1E242E]/50 pointer-events-none" />
      </div>

      {/* Floating authentic crystal SVGs */}
      <div className="absolute top-20 right-[15%] w-16 h-16 pointer-events-none opacity-40 animate-float-slow hidden md:block">
        <Image src="/images/crystal-1.svg" alt="Salt Crystal" width={64} height={64} />
      </div>
      <div className="absolute top-[45%] left-[8%] w-12 h-12 pointer-events-none opacity-30 animate-float-slow hidden md:block delay-700">
        <Image src="/images/crystal-2.svg" alt="Salt Crystal" width={48} height={48} />
      </div>
      <div className="absolute bottom-32 right-[8%] w-14 h-14 pointer-events-none opacity-35 animate-float-slow hidden md:block delay-1000">
        <Image src="/images/crystal-3.svg" alt="Salt Crystal" width={56} height={56} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.2em] text-[#FCF2E1]">
            <Compass className="w-3.5 h-3.5 text-[#C79D6B]" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-ltremark text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#FCF2E1] drop-shadow-md">
            {t.hero.titleLine1} <br />
            <span className="font-serif-luxury italic font-normal text-[#C79D6B] tracking-normal">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FCF2E1]/90 font-light leading-relaxed max-w-2xl drop-shadow">
            {t.hero.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenReservation}
              className="btn-laguna text-sm sm:text-base py-3.5 px-8 bg-[#FCF2E1] text-[#1E242E] hover:bg-white hover:text-[#1E242E] shadow-xl hover:shadow-2xl transition-all font-medium"
            >
              {t.hero.btnReserve}
            </button>

            <a
              href="#salt-show"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-xs sm:text-sm uppercase tracking-wider text-[#FCF2E1] hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#C79D6B]" />
              <span>{t.hero.btnExplore}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom room tabs bar & scroll prompt */}
      <div className="relative z-10 border-t border-white/10 bg-[#151a22]/80 backdrop-blur-md py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs uppercase tracking-widest text-[#C79D6B] font-semibold hidden md:inline">
              {t.hero.atmosphereTitle}
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setActiveRoom("ocean")}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeRoom === "ocean"
                    ? "bg-[#C79D6B] text-[#151a22] font-semibold shadow-md"
                    : "bg-white/5 text-[#FCF2E1]/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Waves className="w-3.5 h-3.5" />
                <span>{t.hero.oceanRoom}</span>
              </button>

              <button
                onClick={() => setActiveRoom("salt")}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeRoom === "salt"
                    ? "bg-[#C79D6B] text-[#151a22] font-semibold shadow-md"
                    : "bg-white/5 text-[#FCF2E1]/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.saltBar}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#FCF2E1]/60">
            <span className="hidden lg:inline">{t.hero.arrivalNotice}</span>
            <a
              href="#concept"
              className="flex items-center gap-2 text-white/70 hover:text-[#C79D6B] transition-colors uppercase tracking-widest text-[11px]"
            >
              <span>{t.hero.scrollDown}</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
