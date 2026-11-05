"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Sparkles, Layers, Award } from "lucide-react";

interface SaltLaboratoryProps {
  onOpenVoucher?: () => void;
}

export default function SaltLaboratory({ onOpenVoucher }: SaltLaboratoryProps) {
  const [selectedId, setSelectedId] = useState(1);
  const { t } = useLanguage();

  const salts = t.saltLabSection.salts;
  const activeSalt = salts.find((s) => s.id === selectedId) || salts[0];

  return (
    <section id="salt-lab" className="py-24 sm:py-32 bg-[#151a22] relative overflow-hidden text-[#FCF2E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C79D6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
                {t.saltLabSection.tag}
              </span>
            </div>
            <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1]">
              {t.saltLabSection.title}
            </h2>
          </div>

          <p className="text-white/70 text-sm max-w-md font-light leading-relaxed">
            {t.saltLabSection.description}
          </p>
        </div>

        {/* Salt Selector Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar mb-10">
          {salts.map((salt) => (
            <button
              key={salt.id}
              onClick={() => setSelectedId(salt.id)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap flex items-center gap-2.5 ${
                salt.id === selectedId
                  ? "bg-[#C79D6B] text-[#151a22] font-semibold shadow-xl"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0 bg-white/20">
                <Image src={salt.image} alt={salt.name} fill className="object-cover" />
              </div>
              <span>{salt.name.split(" ")[0]} {salt.name.split(" ")[1] || ""}</span>
            </button>
          ))}
        </div>

        {/* Spotlight Card */}
        <div className="bg-[#1E242E] border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Salt Crystal Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-4 bg-gradient-to-b from-[#C79D6B]/20 via-transparent to-transparent flex items-center justify-center">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-2 border-[#C79D6B]/40 group">
                <Image
                  src={activeSalt.image}
                  alt={activeSalt.name}
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating crystal decoration */}
              <div className="absolute -top-2 right-4 rtl:right-auto rtl:left-4 w-10 h-10 opacity-60 animate-bounce">
                <Sparkles className="w-6 h-6 text-[#C79D6B]" />
              </div>
            </div>

            <div className="mt-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#C79D6B] font-mono">
              {t.saltLabSection.specimen} 0{activeSalt.id}
            </div>
          </div>

          {/* Salt Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C79D6B] font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeSalt.origin}</span>
              </div>
              <h3 className="font-ltremark text-2xl sm:text-4xl text-[#FCF2E1]">
                {activeSalt.name}
              </h3>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {activeSalt.history}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C79D6B] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t.saltLabSection.textureLabel}</span>
                </div>
                <div className="text-sm text-[#FCF2E1] font-light">
                  {activeSalt.texture}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C79D6B] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.saltLabSection.tasteLabel}</span>
                </div>
                <div className="text-sm text-[#FCF2E1] font-light">
                  {activeSalt.flavor}
                </div>
              </div>
            </div>

            {/* Course paired */}
            <div className="p-4 rounded-xl bg-[#C79D6B]/10 border border-[#C79D6B]/30 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#C79D6B] font-semibold">
                  {t.saltLabSection.serviceLabel}
                </div>
                <div className="text-sm text-[#FCF2E1] font-medium">
                  {activeSalt.courseUsed}
                </div>
              </div>

              {onOpenVoucher && (
                <button
                  onClick={onOpenVoucher}
                  className="px-4 py-2 rounded-full bg-[#C79D6B] text-[#151a22] text-xs uppercase font-semibold tracking-wider hover:bg-white transition-all flex items-center gap-1.5"
                >
                  <Award className="w-3 h-3" />
                  <span>{t.saltLabSection.btnGiftSalt}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
