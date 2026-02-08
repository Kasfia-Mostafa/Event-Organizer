import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table: Handles Clerk authentication and user profiles
  users: defineTable({
    // Auth & Basic Info
    email: v.string(),
    tokenIdentifier: v.string(), // Clerk user ID for auth lookup
    name: v.string(),
    imageUrl: v.optional(v.string()),

    // Onboarding Status
    hasCompletedOnboarding: v.boolean(),

    // Attendee preferences & Localized info
    location: v.optional(
      v.object({
        city: v.string(),
        state: v.optional(v.string()),
        country: v.string(),
      }),
    ),
    interests: v.optional(v.array(v.string())), // Array of category IDs

    // Organizer tracking
    freeEventsCreated: v.number(), // Track free event limit (e.g., 1 free event per user)

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  // Events table: Core table for the platform
  events: defineTable({
    title: v.string(),
    description: v.string(),
    slug: v.string(), // SEO friendly URL identifier

    // Organizer Details
    organizerId: v.id("users"),
    organizerName: v.string(),

    // Classification
    category: v.string(), // chand-raat, jamaat, dawat, etc.
    tags: v.array(v.string()),

    // Date & Time (Stored as Unix Timestamps)
    startDate: v.number(),
    endDate: v.number(),
    timezone: v.string(), // e.g., "Asia/Dhaka"

    // Location details
    locationType: v.union(v.literal("physical"), v.literal("online")),
    venue: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.string(),
    state: v.optional(v.string()),
    country: v.string(),

    // Capacity & Ticketing
    capacity: v.number(),
    ticketType: v.union(v.literal("free"), v.literal("paid")),
    ticketPrice: v.optional(v.number()), // Price in BDT (for Bangladesh context)
    registrationCount: v.number(),

    // Branding & UI Customization
    coverImage: v.optional(v.string()),
    themeColor: v.optional(v.string()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_organizer", ["organizerId"])
    .index("by_category", ["category"])
    .index("by_start_date", ["startDate"])
    .index("by_slug", ["slug"])
    // Search index for global search functionality
    .searchIndex("search_title", {
        searchField: "title",
        filterFields: ["category", "city"]
    }),

  // Registrations table: Maps users to the events they are attending
  registrations: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),

    // Cached attendee info for quick display
    attendeeName: v.string(),
    attendeeEmail: v.string(),

    // Ticket & Entry
    qrCode: v.string(), // Unique string for QR generation
    checkedIn: v.boolean(),
    checkedInAt: v.optional(v.number()),

    // Status tracking
    status: v.union(v.literal("confirmed"), v.literal("cancelled")),

    registeredAt: v.number(),
  })
    .index("by_event", ["eventId"])
    .index("by_user", ["userId"])
    .index("by_event_user", ["eventId", "userId"])
    .index("by_qr_code", ["qrCode"]),
});
