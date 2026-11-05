import { pgTable, serial, varchar, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  confirmationCode: varchar("confirmation_code", { length: 64 }).notNull().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 64 }).notNull(),
  guests: integer("guests").notNull().default(2),
  bookingDate: varchar("booking_date", { length: 64 }).notNull(),
  timeSlot: varchar("time_slot", { length: 64 }).notNull(),
  roomPreference: varchar("room_preference", { length: 64 }).notNull().default("The Ocean Room"),
  pairingChoice: varchar("pairing_choice", { length: 128 }).notNull().default("Signature Georgian Wine & Cocktail Pairing"),
  allergies: text("allergies").default(""),
  specialRequests: text("special_requests").default(""),
  status: varchar("status", { length: 32 }).notNull().default("confirmed"),
  tableNumber: varchar("table_number", { length: 32 }).default("T-04"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  rating: integer("rating").notNull().default(5),
  favoriteCourse: varchar("favorite_course", { length: 128 }).default(""),
  favoriteCocktail: varchar("favorite_cocktail", { length: 128 }).default(""),
  comment: text("comment").notNull(),
  isVerified: boolean("is_verified").notNull().default(true),
  visitDate: varchar("visit_date", { length: 64 }).default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const experienceOrders = pgTable("experience_orders", {
  id: serial("id").primaryKey(),
  orderNumber: varchar("order_number", { length: 64 }).notNull().unique(),
  itemType: varchar("item_type", { length: 128 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  customerEmail: varchar("customer_email", { length: 255 }).notNull(),
  recipientName: varchar("recipient_name", { length: 255 }).default(""),
  recipientNote: text("recipient_note").default(""),
  status: varchar("status", { length: 32 }).notNull().default("confirmed"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 64 }).default(""),
  desiredDate: varchar("desired_date", { length: 64 }).notNull(),
  guests: integer("guests").notNull().default(2),
  notes: text("notes").default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Reservation = typeof reservations.$inferSelect;
export type NewReservation = typeof reservations.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
export type ExperienceOrder = typeof experienceOrders.$inferSelect;
export type NewExperienceOrder = typeof experienceOrders.$inferInsert;
