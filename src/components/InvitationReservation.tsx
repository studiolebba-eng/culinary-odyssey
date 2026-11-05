"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, MapPin, Phone, Calendar, Sparkles } from "lucide-react";

interface InvitationReservationProps {
  onOpenReservation: () => void;
}

export default function InvitationReservation({ onOpenReservation }: InvitationReservationProps) {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-[#151a22] text-[#FCF2E1] overflow-hidden">
      {/* Background with dramatic seaside image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/invite-bg.webp"
          alt="Invitation Background"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151a22] via-[#151a22]/70 to-[#151a22]/80" />
      </div>

      {/* Floating authentic crystal SVGs */}
      <div className="absolute top-16 left-12 rtl:left-auto rtl:right-12 w-16 h-16 pointer-events-none opacity-30 animate-float-slow hidden md:block">
        <Image src="/images/crystal-6.svg" alt="Salt Crystal" width={64} height={64} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.25em] text-[#C79D6B]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.invitationSection.badge}</span>
        </div>

        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] text-[#FCF2E1]/70">
            {t.invitationSection.subtitle}
          </p>
          <h2 className="font-ltremark text-4xl sm:text-6xl md:text-7xl text-[#FCF2E1] leading-[1.05]">
            {t.invitationSection.titleLine1} <br />
            <span className="font-serif-luxury italic text-[#C79D6B]">
              {t.invitationSection.titleLine2}
            </span>
          </h2>
        </div>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#FCF2E1]/90 font-light leading-relaxed">
          {t.invitationSection.description}
        </p>

        {/* Arrival note */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#1E242E]/80 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
          <div className="text-[#C79D6B] font-semibold uppercase tracking-wider text-[11px] mb-1">
            {t.invitationSection.traditionTitle}
          </div>
          {t.invitationSection.traditionDesc}
        </div>

        {/* Primary CTA button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="btn-laguna-gold text-sm sm:text-base py-4 px-10 shadow-2xl hover:scale-105 transition-transform flex items-center gap-2.5 font-semibold"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.invitationSection.btnReserve}</span>
          </button>
        </div>

        {/* Essential Info Strip */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 text-start">
          <div>
            <div className="text-[#C79D6B] text-[10px] uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{t.invitationSection.statShowTime}</span>
            </div>
            <div className="font-serif-luxury text-xl text-[#FCF2E1]">19:30</div>
            <div className="text-[11px] text-white/50">{t.invitationSection.statDaily}</div>
          </div>

          <div>
            <div className="text-[#C79D6B] text-[10px] uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{t.invitationSection.statHours}</span>
            </div>
            <div className="font-serif-luxury text-xl text-[#FCF2E1]">18:00 - 00:00</div>
            <div className="text-[11px] text-white/50">{t.invitationSection.statDays}</div>
          </div>

          <div>
            <div className="text-[#C79D6B] text-[10px] uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>{t.invitationSection.statAddress}</span>
            </div>
            <div className="font-medium text-sm text-[#FCF2E1]">Promenade du Soleil, 12</div>
            <div className="text-[11px] text-white/50">Nice, France</div>
          </div>

          <div>
            <div className="text-[#C79D6B] text-[10px] uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              <span>{t.invitationSection.statPhone}</span>
            </div>
            <div className="font-medium text-sm text-[#FCF2E1]" dir="ltr">+33 (4) 93 12 34 56</div>
            <div className="text-[11px] text-white/50">hello@MinaAlBahr.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
