"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutConcept from "@/components/AboutConcept";
import SaltShow from "@/components/SaltShow";
import CoursesShowcase from "@/components/CoursesShowcase";
import DrinksSection from "@/components/DrinksSection";
import ChefTeam from "@/components/ChefTeam";
import SaltLaboratory from "@/components/SaltLaboratory";
import ReviewsSection from "@/components/ReviewsSection";
import InvitationReservation from "@/components/InvitationReservation";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import VoucherModal from "@/components/VoucherModal";
import MaitreDPortal from "@/components/MaitreDPortal";

function MainContent() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);
  const [maitreDOpen, setMaitreDOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1E242E] text-[#FCF2E1]">
      {/* Navigation */}
      <Header
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenVoucher={() => setVoucherModalOpen(true)}
        onOpenMaitreD={() => setMaitreDOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Concept & Philosophy */}
      <AboutConcept />

      {/* Show Salt: S-A-L-T presentation */}
      <SaltShow onOpenReservation={() => setReservationModalOpen(true)} />

      {/* 5-Course Gastronomic Odyssey */}
      <CoursesShowcase />

      {/* Drinks & Cocktail Pairings */}
      <DrinksSection />

      {/* Chef & International Culinary Team */}
      <ChefTeam />

      {/* 7 Rare Salts Laboratory */}
      <SaltLaboratory onOpenVoucher={() => setVoucherModalOpen(true)} />

      {/* Guest Reviews & Testimonials */}
      <ReviewsSection />

      {/* Invitation & Seating Traditions */}
      <InvitationReservation onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Footer & Contacts */}
      <Footer
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenMaitreD={() => setMaitreDOpen(true)}
        onOpenVoucher={() => setVoucherModalOpen(true)}
      />

      {/* Modals */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      <VoucherModal
        isOpen={voucherModalOpen}
        onClose={() => setVoucherModalOpen(false)}
      />

      <MaitreDPortal
        isOpen={maitreDOpen}
        onClose={() => setMaitreDOpen(false)}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
