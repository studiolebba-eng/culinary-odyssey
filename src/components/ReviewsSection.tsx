"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Plus, CheckCircle, Quote } from "lucide-react";

interface ReviewItem {
  id: number;
  fullName: string;
  location: string;
  rating: number;
  favoriteCourse: string;
  favoriteCocktail: string;
  comment: string;
  visitDate: string;
}

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { t, locale } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    rating: 5,
    favoriteCourse: "Course III: Trout on the vine",
    favoriteCocktail: "Batumi Wave Cocktail",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      if (data.success) {
        setReviewsList(data.reviews || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setReviewsList((prev) => [data.review, ...prev]);
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
          setModalOpen(false);
          setFormData({
            fullName: "",
            location: "",
            rating: 5,
            favoriteCourse: "Course III: Trout on the vine",
            favoriteCocktail: "Batumi Wave Cocktail",
            comment: "",
          });
        }, 1200);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#1E242E] relative text-[#FCF2E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C79D6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
                {t.reviewsSection.tag}
              </span>
            </div>
            <h2 className="font-ltremark text-3xl sm:text-5xl md:text-6xl text-[#FCF2E1]">
              {t.reviewsSection.title}
            </h2>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-laguna-gold text-xs py-3 px-6 flex items-center gap-2 self-start md:self-end"
          >
            <Plus className="w-4 h-4" />
            <span>{t.reviewsSection.btnShare}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#151a22]/70 border border-white/10 hover:border-[#C79D6B]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C79D6B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-mono">
                    {item.visitDate || (locale === "ar" ? "زيارة موثقة" : "Verified")}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-[#C79D6B]/20 absolute -top-2 -left-1 rtl:left-auto rtl:-right-1" />
                  <p className="font-serif-luxury text-sm sm:text-base text-white/90 italic pl-5 rtl:pl-0 rtl:pr-5 leading-relaxed">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="font-semibold text-sm text-[#FCF2E1]">{item.fullName}</div>
                <div className="text-xs text-[#C79D6B]">{item.location}</div>
                {item.favoriteCourse && (
                  <div className="text-[11px] text-white/50 truncate">
                    {t.reviewsSection.favPrefix} {item.favoriteCourse}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#1E242E] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#FCF2E1]">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70"
            >
              ✕
            </button>

            {successMsg ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#C79D6B] mx-auto animate-bounce" />
                <h3 className="font-ltremark text-2xl text-[#FCF2E1]">{t.reviewsSection.successTitle}</h3>
                <p className="text-xs text-white/70">{t.reviewsSection.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-widest text-[#C79D6B] font-semibold mb-1">
                    {t.reviewsSection.modalTitle}
                  </div>
                  <h3 className="font-ltremark text-2xl text-[#FCF2E1]">
                    {t.reviewsSection.modalSub}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      {t.reviewsSection.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === "ar" ? "أحمد المحمد" : "e.g. Jean-Luc"}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      {t.reviewsSection.cityLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === "ar" ? "دبي / نيس" : "e.g. Monaco / Nice"}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      {t.reviewsSection.courseLabel}
                    </label>
                    <select
                      value={formData.favoriteCourse}
                      onChange={(e) => setFormData({ ...formData, favoriteCourse: e.target.value })}
                      className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                    >
                      <option value="Course I: Fresh Breeze Tuna">Course I: Fresh Breeze Tuna</option>
                      <option value="Course II: Denis fish tagine">Course II: Denis fish tagine</option>
                      <option value="Course III: Trout on the vine">Course III: Trout on the vine</option>
                      <option value="Course IV: Lobio Mussels">Course IV: Lobio Mussels</option>
                      <option value="Course V: Sunset Date Mousse">Course V: Sunset Date Mousse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      {t.reviewsSection.cocktailLabel}
                    </label>
                    <select
                      value={formData.favoriteCocktail}
                      onChange={(e) => setFormData({ ...formData, favoriteCocktail: e.target.value })}
                      className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                    >
                      <option value="Batumi Wave Cocktail">Batumi Wave Cocktail</option>
                      <option value="Lilac Mist Cocktail">Lilac Mist Cocktail</option>
                      <option value="Desert Whispe Cocktail">Desert Whispe Cocktail</option>
                      <option value="Red Sea Cocktail">Red Sea Cocktail</option>
                      <option value="Gold of the Pharaohs">Gold of the Pharaohs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                    {t.reviewsSection.commentLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.reviewsSection.commentPlaceholder}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-laguna-gold w-full py-3 text-xs tracking-widest font-semibold uppercase disabled:opacity-50"
                >
                  {submitting ? t.reviewsSection.btnSubmitting : t.reviewsSection.btnSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
