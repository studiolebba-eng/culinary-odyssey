"use client";

import React from "react";
import Image from "next/image";
import LagunaLogo from "./LagunaLogo";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Phone, Mail, ArrowUpRight, Shield } from "lucide-react";

interface FooterProps {
  onOpenReservation: () => void;
  onOpenMaitreD?: () => void;
  onOpenVoucher?: () => void;
}

export default function Footer({ onOpenReservation, onOpenMaitreD, onOpenVoucher }: FooterProps) {
  const { t, locale, isRTL } = useLanguage();

  return (
    <footer id="contacts" className="bg-[#151a22] text-[#FCF2E1] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/3 rtl:left-auto rtl:right-1/3 w-96 h-96 bg-[#C79D6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top mosaic images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="/images/footer-dish2.webp"
              alt="Culinary Creation"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="/images/footer-photo.png"
              alt="Restaurant Atmosphere"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="/images/footer-dish4.webp"
              alt="Seaside Presentation"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between bg-[#1E242E]/80">
            <div className="text-xs uppercase tracking-widest text-[#C79D6B] font-semibold">
              {t.footer.mosaicTitle}
            </div>
            <div className="font-ltremark text-xl text-[#FCF2E1]">
              {t.footer.mosaicSub}
            </div>
            <button
              onClick={onOpenReservation}
              className="text-xs uppercase tracking-wider text-[#C79D6B] hover:text-white flex items-center gap-1 transition-colors self-start"
            >
              <span>{t.footer.mosaicBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </button>
          </div>
        </div>

        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-6">
            <LagunaLogo className="h-10 text-[#FCF2E1]" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenReservation}
                className="btn-laguna text-xs py-2.5 px-6 font-medium"
              >
                {t.nav.reservation}
              </button>
              {onOpenVoucher && (
                <button
                  onClick={onOpenVoucher}
                  className="px-5 py-2.5 rounded-full border border-white/15 text-xs uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  {t.nav.giftVoucher}
                </button>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C79D6B] font-semibold">
              {t.footer.locationHeading}
            </div>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C79D6B] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#FCF2E1] font-medium">{t.nav.addressVal}</div>
                  <div className="text-white/50 text-xs">
                    {locale === "ar" ? "مطل على خليج الملائكة، نيس" : "Facing the Baie des Anges, Nice"}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C79D6B] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#FCF2E1] font-medium">{t.nav.openingHours}</div>
                  <div className="text-white/50 text-xs">
                    {locale === "ar" ? "العرض اليومي الأكبر يبدأ في ١٩:٣٠" : "Grand Show commences daily at 19:30"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C79D6B] font-semibold">
              {t.footer.contactHeading}
            </div>
            <div className="space-y-3 text-sm font-light">
              <a
                href="tel:+33493123456"
                className="flex items-center gap-3 text-white/80 hover:text-[#C79D6B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C79D6B] flex-shrink-0" />
                <span dir="ltr">{t.nav.phoneVal}</span>
              </a>

              <a
                href="mailto:hello@MinaAlBahr.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#C79D6B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C79D6B] flex-shrink-0" />
                <span dir="ltr">hello@MinaAlBahr.com</span>
              </a>

              {onOpenMaitreD && (
                <div className="pt-2">
                  <button
                    onClick={onOpenMaitreD}
                    className="flex items-center gap-2 text-xs text-[#C79D6B] hover:text-white transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>{t.footer.portalBtn}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom micro-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {t.brand.name}. {t.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-6">
            <span>{t.footer.continentsStrip}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
