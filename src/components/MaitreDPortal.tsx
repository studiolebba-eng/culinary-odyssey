"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Search, CheckCircle, UserCheck, AlertTriangle, RefreshCw, Users } from "lucide-react";

interface ReservationRecord {
  id: number;
  confirmationCode: string;
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  bookingDate: string;
  timeSlot: string;
  roomPreference: string;
  pairingChoice: string;
  allergies: string;
  specialRequests: string;
  status: string;
  tableNumber: string;
  createdAt: string;
}

interface MaitreDPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MaitreDPortal({ isOpen, onClose }: MaitreDPortalProps) {
  const [reservations, setReservations] = useState<ReservationRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const { t, isRTL, locale } = useLanguage();

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      if (data.success) {
        setReservations(data.reservations || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchReservations();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateStatus = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/reservations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setReservations((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter reservations
  const filtered = reservations.filter((r) => {
    const matchesStatus = filterStatus === "all" || r.status === filterStatus;
    const matchesSearch =
      r.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.confirmationCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.phone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const totalGuests = reservations
    .filter((r) => r.status !== "cancelled")
    .reduce((sum, r) => sum + r.guests, 0);

  const allergiesNoted = reservations.filter(
    (r) => r.allergies && r.allergies.toLowerCase() !== "none" && r.allergies.toLowerCase() !== "none noted"
  );

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-[#1E242E] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#FCF2E1] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C79D6B]/15 border border-[#C79D6B]/40 flex items-center justify-center text-[#C79D6B]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#C79D6B] font-semibold">
                {locale === "ar" ? "لوحة تحكم مدير الصالة والكونسيرج" : "Staff & Concierge Console"}
              </div>
              <h3 className="font-ltremark text-2xl text-[#FCF2E1]">
                {locale === "ar" ? `سجل حجوزات ${t.brand.name}` : `${t.brand.name} Maitre d' Registry`}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchReservations}
              title={locale === "ar" ? "تحديث" : "Refresh"}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-[#151a22] border border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {locale === "ar" ? "إجمالي الحجوزات" : "Total Bookings"}
            </div>
            <div className="font-mono text-xl font-bold text-[#FCF2E1]">{reservations.length}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#151a22] border border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {locale === "ar" ? "إجمالي الضيوف المتوقعين" : "Expected Covers"}
            </div>
            <div className="font-mono text-xl font-bold text-[#C79D6B]">
              {totalGuests} {locale === "ar" ? "ضيف" : "Guests"}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#151a22] border border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {locale === "ar" ? "تم إجلاسهم حالياً" : "Seated Currently"}
            </div>
            <div className="font-mono text-xl font-bold text-emerald-400">
              {reservations.filter((r) => r.status === "seated").length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#151a22] border border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {locale === "ar" ? "تنبيهات الحساسية بالمطبخ" : "Kitchen Allergy Flags"}
            </div>
            <div className="font-mono text-xl font-bold text-amber-400">
              {allergiesNoted.length}
            </div>
          </div>
        </div>

        {/* Kitchen Alert Strip if allergies exist */}
        {allergiesNoted.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
            <div className="font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>{locale === "ar" ? "تنبيهات حساسية الطعام للمطبخ والشيف:" : "Chef & Kitchen Allergy Notifications:"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allergiesNoted.map((item) => (
                <span
                  key={item.id}
                  className="px-2.5 py-1 rounded bg-black/40 border border-amber-500/30 font-light"
                >
                  <strong className="text-white">{item.fullName} ({item.tableNumber}):</strong> {item.allergies}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Filter & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={locale === "ar" ? "بحث بالاسم، الرمز، الهاتف..." : "Search guest, code, phone..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151a22] border border-white/10 rounded-xl pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2 text-xs text-[#FCF2E1] placeholder:text-white/30 focus:outline-none focus:border-[#C79D6B]"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["all", "confirmed", "seated", "completed", "cancelled"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                  filterStatus === st
                    ? "bg-[#C79D6B] text-[#151a22] font-semibold"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Reservations Table */}
        <div className="flex-1 overflow-y-auto no-scrollbar border border-white/10 rounded-2xl bg-[#151a22]/50">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-white/40 text-xs">
              {locale === "ar" ? "لا توجد حجوزات مطابقة لمعايير البحث." : "No reservations matching the search criteria."}
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filtered.map((res) => (
                <div
                  key={res.id}
                  className="p-4 hover:bg-white/[0.02] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#FCF2E1]">{res.fullName}</span>
                      <span className="font-mono text-xs text-[#C79D6B] bg-[#C79D6B]/10 px-2 py-0.5 rounded" dir="ltr">
                        {res.confirmationCode}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/80">
                        Table {res.tableNumber}
                      </span>
                    </div>

                    <div className="text-xs text-white/60 flex flex-wrap items-center gap-3 font-light">
                      <span>{res.bookingDate}</span>
                      <span>•</span>
                      <span>{res.timeSlot}</span>
                      <span>•</span>
                      <span>{res.guests} {locale === "ar" ? "ضيوف" : "Guests"}</span>
                      <span>•</span>
                      <span>{res.roomPreference}</span>
                    </div>

                    <div className="text-xs text-white/40 font-mono" dir="ltr">
                      {res.phone} | {res.email}
                    </div>

                    {res.allergies && res.allergies !== "None noted" && (
                      <div className="text-xs text-amber-300 font-light flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-400" />
                        <span>{locale === "ar" ? "حساسية:" : "Allergy:"} {res.allergies}</span>
                      </div>
                    )}
                  </div>

                  {/* Status Actions */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
                        res.status === "confirmed"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : res.status === "seated"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : res.status === "completed"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {res.status}
                    </span>

                    {res.status === "confirmed" && (
                      <button
                        onClick={() => updateStatus(res.id, "seated")}
                        disabled={updatingId === res.id}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-200 text-xs transition-all flex items-center gap-1"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{locale === "ar" ? "إجلاس" : "Seat"}</span>
                      </button>
                    )}

                    {res.status === "seated" && (
                      <button
                        onClick={() => updateStatus(res.id, "completed")}
                        disabled={updatingId === res.id}
                        className="px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 text-xs transition-all flex items-center gap-1"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{locale === "ar" ? "إنهاء" : "Complete"}</span>
                      </button>
                    )}

                    {res.status !== "cancelled" && res.status !== "completed" && (
                      <button
                        onClick={() => updateStatus(res.id, "cancelled")}
                        disabled={updatingId === res.id}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-red-900/30 border border-white/10 hover:border-red-500/40 text-white/50 hover:text-red-300 text-xs transition-all"
                      >
                        {locale === "ar" ? "إلغاء" : "Cancel"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
