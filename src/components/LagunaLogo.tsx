"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LagunaLogo({ className = "h-10 text-[#FCF2E1]" }: { className?: string }) {
  const { locale, t } = useLanguage();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Authentic Laguna Arched Crest */}
      <svg
        viewBox="0 0 129 74"
        fill="currentColor"
        className="h-full w-auto aspect-[129/74] flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M87 23C87 11.1259 77.3741 1.5 65.5 1.5C53.6259 1.5 44 11.1259 44 23V49.5H87V23ZM88 50.5H43V23C43 10.5736 53.0736 0.5 65.5 0.5C77.9264 0.5 88 10.5736 88 23V50.5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.0003 30.1914L57.5342 34.7193L58.4889 43.1719L63.946 42.4791L70.6215 44.5L73.5914 39.9434L74 30.1795L71.9497 18.5992L68.3193 9.37868L65.0042 8.5L58.4889 18.1847L53.0003 30.1914ZM59.0959 42.4139L58.254 34.9598L60.4156 32.7589L63.6104 34.7821L69.0563 43.3193L64.006 41.7904L59.0959 42.4139ZM63.986 33.4123L61.1125 31.5925L64.7854 18.7011L67.9983 16.3857L69.8857 26.793L63.986 33.4123ZM67.7842 14.8639L63.9668 17.615L59.7518 17.5336L65.3048 9.27957L67.6452 9.89967L67.7842 14.8639ZM53.8208 30.047L58.9306 18.8687L63.2842 18.9529L59.6967 31.5441L57.5294 33.7508L53.8208 30.047ZM69.1689 15.1301L69.1171 13.2793L71.2831 18.7805L72.9622 28.2642L71.2598 26.659L69.1689 15.1301ZM72.9112 39.7333L73.2995 30.4556L70.6645 27.9711L64.9673 34.3632L70.6278 43.2368L72.9112 39.7333ZM58.4889 43.1719L63.946 42.4791L70.6215 44.5L73.5914 39.9434L74 30.1795L71.9497 18.5992L68.3193 9.37868L65.0042 8.5L58.4889 18.1847L53.0003 30.1914L57.5342 34.7193L58.4889 43.1719Z"
        />
      </svg>
      <div className="flex flex-col text-start leading-none">
        <span className="font-ltremark rtl:font-peyda tracking-[0.14em] rtl:tracking-normal text-sm sm:text-base font-semibold text-[#FCF2E1]">
          {t.brand.name}
        </span>
        <span className="text-[10px] tracking-[0.2em] rtl:tracking-normal rtl:font-peyda text-[#C79D6B] uppercase mt-0.5">
          {locale === "ar" ? "أوديسة الطهي • نيس" : "Culinary Odyssey • Nice"}
        </span>
      </div>
    </div>
  );
}
