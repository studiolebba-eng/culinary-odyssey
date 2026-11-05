import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { experienceOrders } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      itemType = "voucher",
      title,
      price,
      customerName,
      customerEmail,
      recipientName = "",
      recipientNote = "",
    } = body;

    if (!customerName || !customerEmail || !title) {
      return NextResponse.json(
        { success: false, error: "Missing required order details" },
        { status: 400 }
      );
    }

    const orderNumber = `LAGUNA-${Math.floor(100000 + Math.random() * 900000)}`;

    const [order] = await db
      .insert(experienceOrders)
      .values({
        orderNumber,
        itemType,
        title,
        price: Number(price) || 165,
        customerName: String(customerName).trim(),
        customerEmail: String(customerEmail).trim().toLowerCase(),
        recipientName: String(recipientName).trim(),
        recipientNote: String(recipientNote).trim(),
        status: "confirmed",
      })
      .returning();

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
  }
}
