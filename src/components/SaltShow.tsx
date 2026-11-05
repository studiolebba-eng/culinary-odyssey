"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Palette, History, Sparkles } from "lucide-react";

interface SaltShowProps {
  onOpenReservation: () => void;
}

export default function SaltShow({ onOpenReservation }: SaltShowProps) {
  const { t, isRTL } = useLanguage();

  const pillars = [
    {
      title: t.saltShow.p1Title,
      subtitle: t.saltShow.p1Sub,
      description: t.saltShow.p1Desc,
      icon: BookOpen,
    },
    {
      title: t.saltShow.p2Title,
      subtitle: t.saltShow.p2Sub,
      description: t.saltShow.p2Desc,
      icon: Palette,
    },
    {
      title: t.saltShow.p3Title,
      subtitle: t.saltShow.p3Sub,
      description: t.saltShow.p3Desc,
      icon: History,
    },
    {
      title: t.saltShow.p4Title,
      subtitle: t.saltShow.p4Sub,
      description: t.saltShow.p4Desc,
      icon: Sparkles,
    },
  ];

  return (
    <section id="salt-show" className="relative py-24 sm:py-32 bg-[#151a22] text-[#FCF2E1] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C79D6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section tag */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.25em] text-[#C79D6B] mb-4">
            <span>{t.saltShow.tag}</span>
          </div>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#FCF2E1]/70">
            {t.saltShow.wePresent}
          </p>
          <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1] tracking-tight mt-2">
            {t.saltShow.title}
          </h2>
        </div>

        {/* Authentic stylized typography letters: S - A - L - T */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-4xl mx-auto my-12 items-center justify-items-center">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C79D6B]/40 transition-all group">
            <Image
              src="/images/letter-s.svg"
              alt="Letter S"
              width={140}
              height={140}
              className="w-full h-auto max-h-24 sm:max-h-36 object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C79D6B]/40 transition-all group">
            <Image
              src="/images/letter-a.svg"
              alt="Letter A"
              width={140}
              height={140}
              className="w-full h-auto max-h-24 sm:max-h-36 object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C79D6B]/40 transition-all group">
            <Image
              src="/images/letter-l.svg"
              alt="Letter L"
              width={140}
              height={140}
              className="w-full h-auto max-h-24 sm:max-h-36 object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C79D6B]/40 transition-all group">
            <Image
              src="/images/letter-t.svg"
              alt="Letter T"
              width={140}
              height={140}
              className="w-full h-auto max-h-24 sm:max-h-36 object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Narrative description */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="font-serif-luxury text-lg sm:text-xl text-[#FCF2E1]/90 leading-relaxed italic">
            {t.saltShow.description1}
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            {t.saltShow.description2}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              className="btn-laguna-gold text-xs sm:text-sm py-3 px-8 uppercase tracking-widest font-semibold"
            >
              {t.saltShow.btnReserve}
            </button>
          </div>
        </div>

        {/* The 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative p-6 sm:p-8 rounded-3xl bg-[#1E242E]/70 border border-white/10 hover:border-[#C79D6B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#C79D6B]">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C79D6B] group-hover:bg-[#C79D6B] group-hover:text-[#151a22] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-ltremark uppercase text-2xl tracking-wider text-[#FCF2E1] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#C79D6B] font-medium mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                  <span>{t.brand.name}</span>
                  <span className="text-[#C79D6B]">★</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
