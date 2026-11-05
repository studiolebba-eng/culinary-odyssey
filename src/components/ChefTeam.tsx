"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, Sparkles } from "lucide-react";

export default function ChefTeam() {
  const { t } = useLanguage();

  return (
    <section id="creators" className="py-24 sm:py-32 bg-[#1E242E] relative overflow-hidden text-[#FCF2E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#C79D6B]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
            {t.creatorsSection.tag}
          </span>
        </div>

        <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1] leading-tight mb-16">
          {t.creatorsSection.title}
        </h2>

        {/* Chef Adrian Soleris Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 bg-[#151a22]/70 rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
              <Image
                src="/images/chef-adrian.webp"
                alt="Chef Adrian Soleris"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151a22] via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-4 -right-4 rtl:right-auto rtl:-left-4 px-4 py-2 rounded-xl bg-[#C79D6B] text-[#151a22] font-semibold text-xs uppercase tracking-widest shadow-lg">
              {t.creatorsSection.chefRoleBadge}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold mb-1">
                {t.creatorsSection.chefRoleSmall}
              </div>
              <h3 className="font-ltremark text-3xl sm:text-5xl text-[#FCF2E1]">
                {t.creatorsSection.chefName}
              </h3>
            </div>

            {/* Quote from the original website */}
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 py-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C79D6B] space-y-1">
              <Quote className="w-8 h-8 text-[#C79D6B]/30 absolute -top-3 -left-3 rtl:left-auto rtl:-right-3" />
              <p className="font-serif-luxury text-2xl sm:text-3xl text-[#FCF2E1] italic leading-tight">
                {t.creatorsSection.chefQuote}
              </p>
            </div>

            {/* Narrative from the original website */}
            <div className="space-y-4 text-white/80 text-base leading-relaxed font-light">
              <p>{t.creatorsSection.chefBio1}</p>
              <p>{t.creatorsSection.chefBio2}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FCF2E1] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C79D6B]" />
                <span>{t.creatorsSection.chefBadge1}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FCF2E1] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C79D6B]" />
                <span>{t.creatorsSection.chefBadge2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Chef Team */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold mb-1">
                {t.creatorsSection.tag}
              </div>
              <h3 className="font-ltremark text-2xl sm:text-4xl text-[#FCF2E1]">
                {t.creatorsSection.teamTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-md font-light">
              {t.creatorsSection.teamSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.creatorsSection.teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-[#151a22]/50 rounded-2xl p-4 border border-white/10 hover:border-[#C79D6B]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider text-[#C79D6B]">
                      {member.origin}
                    </div>
                  </div>

                  <h4 className="font-ltremark uppercase tracking-wider text-base text-[#FCF2E1] leading-tight mb-0.5">
                    {member.name}
                  </h4>
                  <div className="text-xs text-[#C79D6B] uppercase font-medium tracking-wide mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-white/70 font-light leading-relaxed mb-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] text-white/50 tracking-wider">
                  <span className="text-[#C79D6B]">{t.creatorsSection.teamSpecialtyLabel}</span> {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
