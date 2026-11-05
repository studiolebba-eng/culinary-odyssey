"use client";

import React, { useState, useEffect } from "react";
import LagunaLogo from "./LagunaLogo";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MapPin, Clock, Menu, X, Calendar, Sparkles, Globe } from "lucide-react";

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenVoucher?: () => void;
  onOpenMaitreD?: () => void;
}

export default function Header({
  onOpenReservation,
  onOpenVoucher,
  onOpenMaitreD,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.concept, href: "#concept" },
    { label: t.nav.showSalt, href: "#salt-show" },
    { label: t.nav.courses, href: "#courses" },
    { label: t.nav.drinks, href: "#drinks" },
    { label: t.nav.creators, href: "#creators" },
    { label: t.nav.saltLab, href: "#salt-lab" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contacts" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <>
      {/* Top micro-bar */}
      <div className="hidden lg:block bg-[#151a22] border-b border-white/5 text-[11px] text-[#FCF2E1]/70 px-6 py-1.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C79D6B]" />
              {t.nav.addressVal}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C79D6B]" />
              {t.nav.openingHours}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Language toggle pill */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-0.5 border border-white/10">
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase transition-all ${
                  locale === "en"
                    ? "bg-[#C79D6B] text-[#151a22] font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLocale("ar")}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  locale === "ar"
                    ? "bg-[#C79D6B] text-[#151a22] font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                العربية
              </button>
            </div>

            <a
              href="tel:+33493123456"
              className="flex items-center gap-1.5 hover:text-[#C79D6B] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C79D6B]" />
              <span dir="ltr">{t.nav.phoneVal}</span>
            </a>
            <span className="text-white/20">|</span>
            <button
              onClick={onOpenMaitreD}
              className="hover:text-[#C79D6B] transition-colors text-white/50"
            >
              {t.nav.maitreD}
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1E242E]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10"
            : "bg-[#1E242E]/70 backdrop-blur-sm py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center focus:outline-none">
            <LagunaLogo className="h-9 sm:h-10 text-[#FCF2E1]" />
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.14em] rtl:tracking-normal rtl:font-semibold text-[#FCF2E1]/80 hover:text-[#C79D6B] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#C79D6B] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Quick language button for tablet/mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#FCF2E1] transition-all"
              title={locale === "en" ? "تبديل إلى العربية" : "Switch to English"}
            >
              <Globe className="w-3.5 h-3.5 text-[#C79D6B]" />
              <span className="font-bold">{locale === "en" ? "العربية" : "EN"}</span>
            </button>

            {onOpenVoucher && (
              <button
                onClick={onOpenVoucher}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C79D6B]/40 hover:border-[#C79D6B] bg-[#C79D6B]/10 text-xs tracking-wider uppercase text-[#C79D6B] transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>{t.nav.giftVoucher}</span>
              </button>
            )}

            <button
              onClick={onOpenReservation}
              className="btn-laguna text-xs sm:text-sm py-2 px-3.5 sm:px-6 shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C79D6B]" />
              <span>{t.nav.reservation}</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-[#FCF2E1] hover:text-[#C79D6B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="fixed inset-0 z-50 bg-[#1E242E] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <LagunaLogo className="h-8 text-[#FCF2E1]" />
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full border border-[#C79D6B] text-xs font-bold text-[#C79D6B]"
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white rounded-full bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-ltremark rtl:font-peyda text-2xl sm:text-3xl uppercase tracking-wider rtl:tracking-normal text-[#FCF2E1] hover:text-[#C79D6B] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono tracking-widest text-white/30 group-hover:text-[#C79D6B]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10 text-xs text-white/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[#C79D6B] uppercase font-semibold mb-1 tracking-wider text-[11px]">
                  {locale === "ar" ? "العنوان" : "Address"}
                </div>
                <div>{t.nav.addressVal}</div>
                <div className="text-white/40">{t.nav.openingHours}</div>
              </div>
              <div>
                <div className="text-[#C79D6B] uppercase font-semibold mb-1 tracking-wider text-[11px]">
                  {locale === "ar" ? "الاتصال" : "Contact"}
                </div>
                <div dir="ltr">{t.nav.phoneVal}</div>
                <div>hello@MinaAlBahr.com</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="btn-laguna w-full py-3 text-center"
              >
                {t.nav.reservation}
              </button>
              {onOpenMaitreD && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMaitreD();
                  }}
                  className="text-center text-xs text-white/40 hover:text-[#C79D6B] py-2"
                >
                  {t.nav.maitreD}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
