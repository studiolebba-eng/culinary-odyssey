import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const resId = parseInt(id, 10);
    if (isNaN(resId)) {
      return NextResponse.json({ success: false, error: "Invalid ID" }, { status: 400 });
    }

    const body = await req.json();
    const { status, tableNumber } = body;

    const updateData: Record<string, string> = {};
    if (status) updateData.status = status;
    if (tableNumber) updateData.tableNumber = tableNumber;

    const [updated] = await db
      .update(reservations)
      .set(updateData)
      .where(eq(reservations.id, resId))
      .returning();

    return NextResponse.json({ success: true, reservation: updated });
  } catch (error) {
    console.error("Failed to update reservation:", error);
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const resId = parseInt(id, 10);
    if (isNaN(resId)) {
      return NextResponse.json({ success: false, error: "Invalid ID" }, { status: 400 });
    }

    await db.delete(reservations).where(eq(reservations.id, resId));
    return NextResponse.json({ success: true, message: "Reservation deleted" });
  } catch (error) {
    console.error("Failed to delete reservation:", error);
    return NextResponse.json({ success: false, error: "Delete failed" }, { status: 500 });
  }
}
