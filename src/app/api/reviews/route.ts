import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reviews } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const list = await db.select().from(reviews).orderBy(desc(reviews.createdAt));
    return NextResponse.json({ success: true, reviews: list });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      location,
      rating = 5,
      favoriteCourse = "",
      favoriteCocktail = "",
      comment,
      visitDate = "Spring 2026",
    } = body;

    if (!fullName || !comment) {
      return NextResponse.json(
        { success: false, error: "Name and comment are required." },
        { status: 400 }
      );
    }

    const [newReview] = await db
      .insert(reviews)
      .values({
        fullName: String(fullName).trim(),
        location: location ? String(location).trim() : "Guest",
        rating: Math.min(5, Math.max(1, Number(rating) || 5)),
        favoriteCourse: String(favoriteCourse).trim(),
        favoriteCocktail: String(favoriteCocktail).trim(),
        comment: String(comment).trim(),
        visitDate: String(visitDate).trim(),
        isVerified: true,
      })
      .returning();

    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    console.error("Failed to post review:", error);
    return NextResponse.json({ success: false, error: "Failed to submit review" }, { status: 500 });
  }
}
