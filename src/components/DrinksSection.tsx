"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GlassWater, Sparkles } from "lucide-react";

export default function DrinksSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { t } = useLanguage();

  const cocktails = t.drinksSection.items;
  const activeCocktail = cocktails[selectedIdx] || cocktails[0];

  return (
    <section id="drinks" className="py-24 sm:py-32 bg-[#151a22] relative overflow-hidden text-[#FCF2E1]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C79D6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C79D6B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
              {t.drinksSection.tag}
            </span>
          </div>

          <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1] leading-tight mb-4">
            {t.drinksSection.title}
          </h2>

          <p className="font-serif-luxury text-xl sm:text-2xl text-[#C79D6B] italic mb-4">
            {t.drinksSection.subtitle}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            {t.drinksSection.description}
          </p>
        </div>

        {/* 5 Cocktail Grid / Slider */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {cocktails.map((cocktail, idx) => (
            <button
              key={cocktail.id}
              onClick={() => setSelectedIdx(idx)}
              className={`p-4 rounded-2xl text-start transition-all relative overflow-hidden group border ${
                idx === selectedIdx
                  ? "border-[#C79D6B] bg-[#1E242E] shadow-xl ring-1 ring-[#C79D6B]/40"
                  : "border-white/10 bg-[#1E242E]/40 hover:bg-[#1E242E]/80 hover:border-white/20"
              }`}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-[#C79D6B]">
                  {cocktail.roman}
                </div>
              </div>

              <div className="font-ltremark text-sm uppercase tracking-wider text-[#FCF2E1] truncate">
                {cocktail.name}
              </div>
              <div className="text-[11px] text-[#C79D6B] truncate font-light mt-0.5">
                {cocktail.coursePairing.split(" — ")[0] || cocktail.coursePairing.split(" - ")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Active Spotlight */}
        <div className="bg-[#1E242E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Glass Image */}
          <div className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden group">
            <Image
              src={activeCocktail.image}
              alt={activeCocktail.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151a22] via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-[#FCF2E1] flex items-center gap-2">
              <GlassWater className="w-3.5 h-3.5 text-[#C79D6B]" />
              <span>{t.drinksSection.pairedFor} {activeCocktail.coursePairing}</span>
            </div>
          </div>

          {/* Cocktail Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold mb-2">
                {activeCocktail.roman}
              </div>
              <h3 className="font-ltremark text-3xl sm:text-4xl text-[#FCF2E1]">
                {activeCocktail.name}
              </h3>
              <p className="font-serif-luxury text-base sm:text-lg text-[#C79D6B] italic mt-1">
                {activeCocktail.ingredients}
              </p>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {activeCocktail.story}
            </p>

            {/* Flavor Matrix */}
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C79D6B]" />
                <span>{t.drinksSection.spectrumTitle}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="flex justify-between text-[11px] text-white/60 mb-1">
                    <span>{t.drinksSection.salinity}</span>
                    <span className="font-mono text-[#C79D6B]">{activeCocktail.flavorProfile.salinity}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2BBBDC] rounded-full transition-all duration-500"
                      style={{ width: `${activeCocktail.flavorProfile.salinity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/60 mb-1">
                    <span>{t.drinksSection.sweetness}</span>
                    <span className="font-mono text-[#C79D6B]">{activeCocktail.flavorProfile.sweetness}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C79D6B] rounded-full transition-all duration-500"
                      style={{ width: `${activeCocktail.flavorProfile.sweetness}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/60 mb-1">
                    <span>{t.drinksSection.acidity}</span>
                    <span className="font-mono text-[#C79D6B]">{activeCocktail.flavorProfile.acidity}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${activeCocktail.flavorProfile.acidity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/60 mb-1">
                    <span>{t.drinksSection.depth}</span>
                    <span className="font-mono text-[#C79D6B]">{activeCocktail.flavorProfile.depth}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${activeCocktail.flavorProfile.depth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Wine alternative banner */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-white/70 leading-relaxed">
              <span className="text-[#C79D6B] font-semibold">{t.drinksSection.sommelierTag}</span> {t.drinksSection.sommelierNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
