"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Calendar, CheckCircle2, Download, AlertCircle } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDate?: string;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { t, isRTL, locale } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 2,
    bookingDate: "2026-05-15",
    timeSlot: "19:30 - Grand Show",
    roomPreference: "The Ocean Room",
    pairingChoice: "Signature Georgian Wine & Cocktail Pairing",
    allergies: "",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedReservation, setConfirmedReservation] = useState<{
    id: number;
    confirmationCode: string;
    fullName: string;
    bookingDate: string;
    timeSlot: string;
    guests: number;
    roomPreference: string;
    tableNumber: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to make reservation");
      }

      setConfirmedReservation(data.reservation);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Download .ics calendar event
  const downloadCalendarFile = () => {
    if (!confirmedReservation) return;
    const { confirmationCode, bookingDate, timeSlot, roomPreference, fullName } = confirmedReservation;
    const dateClean = bookingDate.replace(/-/g, "");
    const startTime = "193000Z";
    const endTime = "223000Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      `PRODID:-//${t.brand.name}//Culinary Odyssey//EN`,
      "BEGIN:VEVENT",
      `SUMMARY:${t.brand.name}: Culinary Odyssey (${roomPreference})`,
      `DESCRIPTION:5-Course Gastronomic Show for ${fullName}. Booking Code: ${confirmationCode}. Arrive 15 minutes before for sea-view aperitif.`,
      "LOCATION:Promenade du Soleil 12, 06000 Nice, France",
      `DTSTART:${dateClean}T${startTime}`,
      `DTEND:${dateClean}T${endTime}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `MinaAlBahr-Odyssey-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#1E242E] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 text-[#FCF2E1]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedReservation ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C79D6B]/20 border border-[#C79D6B] flex items-center justify-center text-[#C79D6B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C79D6B] font-semibold">
                {t.modalReservation.confirmedTag}
              </div>
              <h3 className="font-ltremark text-3xl sm:text-4xl text-[#FCF2E1]">
                {t.modalReservation.confirmedTitle}
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto">
                {t.modalReservation.confirmedSub}
              </p>
            </div>

            {/* Booking voucher card */}
            <div className="p-6 rounded-2xl bg-[#151a22] border border-[#C79D6B]/30 max-w-md mx-auto text-start space-y-3 font-light text-sm">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">{t.modalReservation.codeLabel}</span>
                <span className="font-mono font-bold text-[#C79D6B] text-base" dir="ltr">
                  {confirmedReservation.confirmationCode}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">{t.modalReservation.guestLabel}</span>
                <span className="text-white font-medium">{confirmedReservation.fullName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">{t.modalReservation.partyLabel}</span>
                <span className="text-white">{confirmedReservation.guests} {locale === "ar" ? "أفراد" : "Persons"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">{t.modalReservation.atmosphereResultLabel}</span>
                <span className="text-white">{confirmedReservation.roomPreference} (Table {confirmedReservation.tableNumber})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">{t.modalReservation.dateTimeResultLabel}</span>
                <span className="text-white">{confirmedReservation.bookingDate} • {confirmedReservation.timeSlot}</span>
              </div>
            </div>

            <div className="text-xs text-white/60 max-w-md mx-auto font-light">
              <span className="text-[#C79D6B] font-semibold">{t.modalReservation.welcomeArrivalTitle}</span> {t.modalReservation.welcomeArrivalDesc}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={downloadCalendarFile}
                className="btn-laguna-gold text-xs py-3 px-6 flex items-center gap-2 font-medium"
              >
                <Download className="w-4 h-4" />
                <span>{t.modalReservation.btnCalendar}</span>
              </button>

              <button
                onClick={() => {
                  setConfirmedReservation(null);
                  onClose();
                }}
                className="btn-laguna text-xs py-3 px-6"
              >
                {t.modalReservation.btnClose}
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#C79D6B]">
                <Calendar className="w-3 h-3" />
                <span>{t.modalReservation.tag}</span>
              </div>
              <h3 className="font-ltremark text-2xl sm:text-4xl text-[#FCF2E1] leading-tight">
                {t.modalReservation.title}
              </h3>
              <p className="text-xs text-white/60 font-light">
                {t.modalReservation.subtitle}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-900/30 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.dayTimeLabel}
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  >
                    <option value="19:30 - Grand Show">19:30 - Grand Show (Ocean Sunset)</option>
                    <option value="19:00 - Early Seating">19:00 - Early Seating</option>
                    <option value="20:30 - Night Odyssey">20:30 - Night Odyssey</option>
                    <option value="21:30 - Moonlight Set">21:30 - Moonlight Set</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.bookingDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>
              </div>

              {/* Guests & Room */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium flex items-center justify-between">
                    <span>{t.modalReservation.guestsLabel}</span>
                    <span className="text-[#C79D6B] font-mono">{formData.guests}</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) || 1 })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.atmosphereLabel}
                  </label>
                  <select
                    value={formData.roomPreference}
                    onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  >
                    <option value="The Ocean Room">{locale === "ar" ? "قاعة المحيط (إطلالة بانورامية على البحر)" : "The Ocean Room (Panoramic Sea View)"}</option>
                    <option value="THE Salt Bar">{locale === "ar" ? "بار الملح (منضدة التذوق التفاعلية)" : "THE Salt Bar (Interactive Alchemist Counter)"}</option>
                    <option value="Chef Table Chamber">{locale === "ar" ? "مقصورة طاولة الشيف الخاصة" : "Chef Table Chamber (Private Tasting)"}</option>
                  </select>
                </div>
              </div>

              {/* Beverage Journey */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  {t.modalReservation.pairingLabel}
                </label>
                <select
                  value={formData.pairingChoice}
                  onChange={(e) => setFormData({ ...formData, pairingChoice: e.target.value })}
                  className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                >
                  <option value="Signature Georgian Wine & Cocktail Pairing">
                    {locale === "ar"
                      ? "باقة النبيذ الجورجي الفاخر و٥ كوكتيلات بحرية (+٨٠ يورو)"
                      : "Signature Georgian Wine & 5 Sea Cocktails Pairing (+€80)"}
                  </option>
                  <option value="Botanical Non-Alcoholic Pairing">
                    {locale === "ar"
                      ? "إكسير الأعشاب والنباتات البحرية غير الكحولية (+٥٠ يورو)"
                      : "Botanical Non-Alcoholic Sea Elixirs Pairing (+€50)"}
                  </option>
                  <option value="5-Course Gastronomic Show Only">
                    {locale === "ar"
                      ? "عرض الأطباق الخمسة فقط (المشروبات حسب الطلب)"
                      : "5-Course Gastronomic Show Only (A la Carte Drinks)"}
                  </option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === "ar" ? "الاسم" : "name"}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] placeholder:text-white/30 focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={locale === "ar" ? "رقم الهاتف" : "telephone"}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] placeholder:text-white/30 focus:outline-none focus:border-[#C79D6B]"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Email & Allergies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={locale === "ar" ? "البريد الإلكتروني" : "email"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] placeholder:text-white/30 focus:outline-none focus:border-[#C79D6B]"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    {t.modalReservation.allergiesLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.modalReservation.allergiesPlaceholder}
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    className="w-full bg-[#151a22] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FCF2E1] placeholder:text-white/30 focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-laguna-gold w-full py-4 text-center text-xs sm:text-sm font-semibold tracking-widest disabled:opacity-50"
                >
                  {loading ? t.modalReservation.btnSubmitting : t.modalReservation.btnSubmit}
                </button>
              </div>

              <div className="text-[11px] text-center text-white/40">
                {t.modalReservation.guaranteeNote}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
