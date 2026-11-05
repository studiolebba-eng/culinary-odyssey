import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const status = searchParams.get("status");

    let query = db.select().from(reservations);
    
    if (status) {
      // @ts-expect-error drizzle query condition
      query = query.where(eq(reservations.status, status));
    }

    const data = await query.orderBy(desc(reservations.createdAt));
    return NextResponse.json({ success: true, reservations: data });
  } catch (error) {
    console.error("Failed to fetch reservations:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      guests = 2,
      bookingDate,
      timeSlot = "19:30 - Grand Show",
      roomPreference = "The Ocean Room",
      pairingChoice = "Signature Georgian Wine & Cocktail Pairing",
      allergies = "",
      specialRequests = "",
    } = body;

    if (!fullName || !email || !phone || !bookingDate) {
      return NextResponse.json(
        { success: false, error: "Full name, email, phone, and date are required" },
        { status: 400 }
      );
    }

    // Generate unique confirmation code e.g. ODISSEY-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const confirmationCode = `ODISSEY-${randomSuffix}`;

    // Auto-assign realistic table number
    const tablePrefix = roomPreference.includes("Salt") ? "B" : "T";
    const tableNumber = `${tablePrefix}-0${Math.floor(1 + Math.random() * 8)}`;

    const [newRes] = await db
      .insert(reservations)
      .values({
        confirmationCode,
        fullName: String(fullName).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        guests: Number(guests) || 2,
        bookingDate: String(bookingDate),
        timeSlot: String(timeSlot),
        roomPreference: String(roomPreference),
        pairingChoice: String(pairingChoice),
        allergies: allergies ? String(allergies).trim() : "None noted",
        specialRequests: specialRequests ? String(specialRequests).trim() : "",
        status: "confirmed",
        tableNumber,
      })
      .returning();

    return NextResponse.json({
      success: true,
      reservation: newRes,
      message: "Your table for Laguna Al-Sha'ab has been secured.",
    });
  } catch (error) {
    console.error("Failed to create reservation:", error);
    return NextResponse.json(
      { success: false, error: "Unable to complete reservation at this time." },
      { status: 500 }
    );
  }
}
