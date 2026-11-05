"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Wine, Info } from "lucide-react";

export default function CoursesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const { t, isRTL } = useLanguage();

  const courses = t.coursesSection.items;
  const currentCourse = courses[activeIndex] || courses[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="courses" className="py-24 sm:py-32 bg-[#1E242E] relative overflow-hidden">
      {/* Decorative crystal SVG */}
      <div className="absolute top-12 right-8 rtl:right-auto rtl:left-8 w-24 h-24 opacity-20 pointer-events-none hidden md:block">
        <Image src="/images/crystal-5.svg" alt="Crystal" width={96} height={96} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C79D6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
                {t.coursesSection.tag}
              </span>
            </div>
            <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1]">
              {t.coursesSection.title}
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={isRTL ? handleNext : handlePrev}
              className="p-3 rounded-full border border-white/20 text-[#FCF2E1] hover:bg-[#C79D6B] hover:text-[#151a22] hover:border-[#C79D6B] transition-all"
              aria-label="Previous Course"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C79D6B] px-2">
              0{activeIndex + 1} / 0{courses.length}
            </span>
            <button
              onClick={isRTL ? handlePrev : handleNext}
              className="p-3 rounded-full border border-white/20 text-[#FCF2E1] hover:bg-[#C79D6B] hover:text-[#151a22] hover:border-[#C79D6B] transition-all"
              aria-label="Next Course"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Course Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/10 mb-10">
          {courses.map((course, idx) => (
            <button
              key={course.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                idx === activeIndex
                  ? "bg-[#C79D6B] text-[#151a22] font-semibold shadow-lg"
                  : "bg-white/5 text-[#FCF2E1]/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="opacity-70 font-mono">0{course.id}</span>
              <span>{course.title}</span>
            </button>
          ))}
        </div>

        {/* Active Course Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#151a22]/70 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Dish Image */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src={currentCourse.image}
              alt={currentCourse.dishName}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151a22]/90 via-transparent to-transparent opacity-60" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1.5 rounded-full bg-[#151a22]/80 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-wider text-[#C79D6B] font-semibold">
              {currentCourse.roman}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FCF2E1]">
              <span className="font-serif-luxury italic text-white/90">
                {currentCourse.theme}
              </span>
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#C79D6B]">
                {currentCourse.saltUsed}
              </span>
            </div>
          </div>

          {/* Dish Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-block text-xs uppercase tracking-[0.2em] text-[#C79D6B] font-semibold mb-2">
                {currentCourse.roman} • {currentCourse.theme}
              </div>
              <h3 className="font-ltremark text-2xl sm:text-4xl text-[#FCF2E1] leading-tight">
                {currentCourse.title}
              </h3>
              <p className="font-serif-luxury text-lg sm:text-xl text-[#C79D6B] italic mt-1">
                {currentCourse.dishName}
              </p>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {currentCourse.description}
            </p>

            {/* Continents dialogue badge */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-white/40 mb-2">
                {t.coursesSection.dialogueTag}
              </div>
              <div className="flex flex-wrap gap-2">
                {currentCourse.continents.map((continent) => (
                  <span
                    key={continent}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-[#FCF2E1]"
                  >
                    {continent}
                  </span>
                ))}
              </div>
            </div>

            {/* Key ingredients */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-white/40 mb-2">
                {t.coursesSection.ingredientsTag}
              </div>
              <div className="flex flex-wrap gap-2">
                {currentCourse.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1 rounded-lg text-xs bg-[#C79D6B]/10 border border-[#C79D6B]/30 text-[#E6C59B]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Wine pairing */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#C79D6B] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] uppercase tracking-widest text-[#C79D6B] font-semibold">
                  {t.coursesSection.wineTag}
                </div>
                <div className="text-sm text-[#FCF2E1] font-serif-luxury italic">
                  {currentCourse.winePairing}
                </div>
              </div>
            </div>

            {/* Notes toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="text-xs uppercase tracking-wider text-[#C79D6B] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>
                  {showNotes
                    ? t.coursesSection.chefSecretHide
                    : t.coursesSection.chefSecretBtn}
                </span>
              </button>

              {showNotes && (
                <div className="mt-3 p-4 rounded-xl bg-[#1E242E] border border-[#C79D6B]/30 text-xs text-white/80 leading-relaxed font-light animate-in fade-in duration-300">
                  <span className="text-[#C79D6B] font-semibold">{t.creatorsSection.chefName}:</span> {t.coursesSection.chefQuote}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
