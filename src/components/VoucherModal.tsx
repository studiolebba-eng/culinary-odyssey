"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Gift, CheckCircle2, Copy, Check } from "lucide-react";

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoucherModal({ isOpen, onClose }: VoucherModalProps) {
  const [selectedType, setSelectedType] = useState<"show2" | "cheftable" | "saltbox">("show2");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientNote, setRecipientNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderNumber: string;
    title: string;
    price: number;
    recipientName: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const { t, isRTL, locale } = useLanguage();

  if (!isOpen) return null;

  const packages = {
    show2: {
      title: locale === "ar" ? "عرض التذوق المسرحي لشخصين (٥ أطباق)" : "5-Course Gastronomic Show for Two",
      price: 330,
      description:
        locale === "ar"
          ? "أوديسة كاملة تجمع مصر وجورجيا والمتوسط مع مشروب الترحيب المطل على البحر."
          : "Full Odyssey across Egypt, Georgia & Mediterranean with welcome sea-mist aperitif.",
    },
    cheftable: {
      title: locale === "ar" ? "تجربة مقصورة طاولة الشيف مع المشروبات النادرة" : "Chef Table Chamber Master Odyssey with Pairings",
      price: 490,
      description:
        locale === "ar"
          ? "جلسة حصرية مع الشيف أدريان سوليريس مع باقة نبيذ الكفيفري وكوكتيلات البحر."
          : "Front-row experience with Chef Adrian Soleris, including rare Qvevri wine & cocktail pairing.",
    },
    saltbox: {
      title: locale === "ar" ? "صندوق أملاح الأرض السبعة والدقة الإسكندرانية الفاخرة" : "The 7 Salts of the Earth & Egyptian Dukkah Tasting Box",
      price: 85,
      description:
        locale === "ar"
          ? "في صندوق خشبي يدوي الصنع: لوح هيمالايا، ملح سفانيتي، بلورات سيوة، ودقة مصرية."
          : "Delivered in handmade cedar box: Himalayan slab, Svaneti herb salt, Siwa crystals, and Alexandria dukkah.",
    },
  };

  const currentPkg = packages[selectedType];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemType: selectedType,
          title: currentPkg.title,
          price: currentPkg.price,
          customerName,
          customerEmail,
          recipientName,
          recipientNote,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setConfirmedOrder(data.order);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    if (!confirmedOrder) return;
    navigator.clipboard.writeText(confirmedOrder.orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#1E242E] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#FCF2E1]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedOrder ? (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C79D6B]/20 border border-[#C79D6B] flex items-center justify-center text-[#C79D6B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#C79D6B] font-semibold">
                {t.modalVoucher.confirmedTag}
              </div>
              <h3 className="font-ltremark text-2xl sm:text-3xl text-[#FCF2E1]">
                {t.modalVoucher.confirmedTitle}
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-[#151a22] border border-[#C79D6B]/40 max-w-md mx-auto text-start space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs text-white/50 uppercase">{t.modalVoucher.voucherLabel}</span>
                <button
                  onClick={copyCode}
                  className="font-mono font-bold text-[#C79D6B] flex items-center gap-1.5 text-sm hover:underline"
                  dir="ltr"
                >
                  <span>{confirmedOrder.orderNumber}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-sm font-semibold text-white">{confirmedOrder.title}</div>
              <div className="text-xs text-white/60">
                {t.modalVoucher.recipientLabel} <strong className="text-[#C79D6B]">{confirmedOrder.recipientName || (locale === "ar" ? "ضيفنا العزيز" : "Honored Guest")}</strong>
              </div>
              <div className="text-xs text-white/40">
                {t.modalVoucher.validityNote}
              </div>
            </div>

            <button onClick={onClose} className="btn-laguna-gold text-xs py-3 px-8">
              {locale === "ar" ? "تم بنجاح" : "Done"}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C79D6B] font-semibold">
                <Gift className="w-4 h-4" />
                <span>{t.modalVoucher.tag}</span>
              </div>
              <h3 className="font-ltremark text-2xl sm:text-3xl text-[#FCF2E1]">
                {t.modalVoucher.title}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Package selector */}
              <div className="grid grid-cols-1 gap-2.5">
                {(Object.keys(packages) as Array<keyof typeof packages>).map((key) => {
                  const pkg = packages[key];
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setSelectedType(key)}
                      className={`p-3.5 rounded-xl text-start border transition-all ${
                        selectedType === key
                          ? "border-[#C79D6B] bg-[#151a22] shadow-md"
                          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm text-[#FCF2E1]">{pkg.title}</span>
                        <span className="font-mono text-sm text-[#C79D6B] font-bold" dir="ltr">€{pkg.price}</span>
                      </div>
                      <p className="text-xs text-white/60 font-light leading-normal">
                        {pkg.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                    {t.modalVoucher.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === "ar" ? "اسمك" : "Your Name"}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                    {t.modalVoucher.yourEmail}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={locale === "ar" ? "البريد الإلكتروني" : "Your Email"}
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                    {t.modalVoucher.recipientName}
                  </label>
                  <input
                    type="text"
                    placeholder={locale === "ar" ? "اسم المهدى إليه" : "Name for Voucher"}
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                    {t.modalVoucher.recipientNote}
                  </label>
                  <input
                    type="text"
                    placeholder={locale === "ar" ? "كل عام وأنتم بخير!" : "e.g. Happy Anniversary!"}
                    value={recipientNote}
                    onChange={(e) => setRecipientNote(e.target.value)}
                    className="w-full bg-[#151a22] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#FCF2E1] focus:outline-none focus:border-[#C79D6B]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-laguna-gold w-full py-3.5 text-xs tracking-widest uppercase font-semibold disabled:opacity-50"
                >
                  {loading
                    ? t.modalVoucher.btnPurchasing
                    : `${t.modalVoucher.btnPurchase} (€${currentPkg.price})`}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
