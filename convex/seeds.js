import { internalMutation } from "./_generated/server";

const SAMPLE_EVENTS = [
  // --- CHAND RAAT (2) ---
  {
    title: "Dhanmondi Mehendi Festival - Chand Raat Special",
    description: `Get ready for the most vibrant Chand Raat in Dhanmondi!

In this session, we feature:
- Professional Mehendi artists from Puran Dhaka
- Local street food stalls (Fuchka, Chotpoti, and Kulfi)
- Eid fashion pop-ups and jewelry exhibitions

Join us as we sight the moon and celebrate the start of Eid with the community!`,
    category: "chand-raat",
    tags: ["mehendi", "dhaka", "festival"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Rabindra Sarobar Amphitheatre",
    address: "Rabindra Sarobar, Dhanmondi 8/A, Dhaka",
    capacity: 200,
    ticketType: "free",
    coverImage: "https://i.ibb.co/gZ9bYCTV/Mehedi.jpg",
    themeColor: "#065f46",

  },
  {
    title: "Chawkbazar Ittar & Surma Walk",
    description: `A final Ramadan walk to find the perfect scent for Eid morning!

What we will explore:
- Authentic Ittar shops with 100-year-old legacies
- Traditional Surma and organic skincare stalls
- The festive chaos of the last Chawkbazar Iftar market`,
    category: "chand-raat",
    tags: ["heritage", "fragrance", "old-dhaka"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Boro Katra Entrance",
    address: "Chawkbazar, Old Dhaka",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 450,
    coverImage: "https://images.unsplash.com/photo-1615485244993-42468305097b?w=1200&q=80",
    themeColor: "#92400e",
  },

  // --- EID JAMAAT (2) ---
  {
    title: "Sholakia Eid-ul-Fitr Grand Jamaat",
    description: `Join the historic congregation at the nation's largest Eidgah!

Event highlights:
- Massive gathering of over 300,000 devotees
- Special "Eid Special" train services to the venue
- High-level security and volunteer support`,
    category: "jamaat",
    tags: ["prayer", "jamaat", "tradition"],
    city: "Kishoreganj",
    state: "Dhaka Division",
    venue: "Sholakia Eidgah Maidan",
    address: "Kishoreganj Sadar",
    capacity: 300000,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1564120222391-764722513495?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "National Eidgah Primary Jamaat",
    description: `The central Eid prayer for the capital city of Dhaka.

What to know:
- Attended by national leaders and foreign diplomats
- All-weather protected pandal covering the main area
- Strict security screening at all entry points`,
    category: "jamaat",
    tags: ["dhaka", "prayer", "national"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "National Eidgah",
    address: "High Court Area, Dhaka",
    capacity: 35000,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1598506509927-464a4b49045b?w=1200&q=80",
    themeColor: "#065f46",
  },

  // --- EID DAWAT (3) ---
  {
    title: "Old Dhaka Kacchi Dawat: The Heritage Feast",
    description: `Experience the legendary taste of Puran Dhaka this Eid!

This Dawat features:
- Signature Mutton Kacchi Biryani (Basmati)
- Traditional Borhani and Jorda
- Meet & greet with local food historians`,
    category: "dawat",
    tags: ["food", "kacchi", "heritage"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Heritage Kitchen Rooftop",
    address: "Nazirabazar, Old Dhaka",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 1450,
    coverImage: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Shemai & Sweets Tasting Tour",
    description: `Discover why Eid is incomplete without a sugar rush!

We will visit:
- 5 iconic sweet shops in Chittagong
- Live demonstration of "Lachha Shemai" making
- Tasting of Nawabi Shemai, Balushai, and Rosogolla`,
    category: "dawat",
    tags: ["sweets", "foodie", "tour"],
    city: "Chittagong",
    state: "Chittagong Division",
    venue: "GEC Circle",
    address: "GEC, Chittagong",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 800,
    coverImage: "https://images.unsplash.com/photo-1589113182631-94b2f5673d31?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Solo Travelers Eid Movie Night",
    description: `No family in town? No problem! You're with us.

Plan for the night:
- Group viewing of the latest blockbuster
- Large popcorn and soda included
- Communal dinner at a nearby restaurant`,
    category: "dawat",
    tags: ["community", "social", "movies"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Star Cineplex SKS",
    address: "Mohakhali, Dhaka",
    capacity: 30,
    ticketType: "paid",
    ticketPrice: 1100,
    coverImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
    themeColor: "#000000",
  },

  // --- BATCH REUNION (2) ---
  {
    title: "Batch of '18 - Mega Eid Reunion",
    description: `Connect with fellow alumni and startup enthusiasts over tea and snacks!

What to expect:
- Speed networking sessions
- Pitch practice for budding entrepreneurs
- One-on-one mentor meetings`,
    category: "reunion",
    tags: ["reunion", "networking", "alumni"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Crimson Cup Banani",
    address: "Road 11, Banani, Dhaka",
    capacity: 45,
    ticketType: "paid",
    ticketPrice: 850,
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "SSC '12 Alumni Cricket Match",
    description: `Relive the golden school days with a friendly match of cricket!

Itinerary:
- 10-over tape-tennis cricket tournament
- Traditional Jhalmuri and Lemonade breaks
- Post-match heavy dinner (Beef Kacchi)`,
    category: "reunion",
    tags: ["reunion", "cricket", "sports"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Banani DOHS Field",
    address: "Banani DOHS, Dhaka",
    capacity: 100,
    ticketType: "paid",
    ticketPrice: 1200,
    coverImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    themeColor: "#047857",
  },

  // --- GORUR HAAT (2) ---
  {
    title: "Gabtoli Gorur Haat - Smart Buyer's Guide",
    description: `Planning your Qurbani? Join our community walk-through!

Topics covered:
- Identifying healthy animals without getting scammed
- Understanding 2026 market price trends
- Negotiation best practices with sellers`,
    category: "haat",
    tags: ["qurbani", "haat", "logistics"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Gabtoli Market Entrance",
    address: "Gabtoli, Dhaka",
    capacity: 100,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Purbachal Bull Exhibition 2026",
    description: `A showcase of the most majestic cattle in the country!

Featuring:
- 1000kg+ 'Super Giant' bulls from famous farms
- Organic feeding workshops for farm owners
- Food stalls and entertainment for kids`,
    category: "haat",
    tags: ["cattle", "exhibition", "giant-bulls"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "300 Feet Road",
    address: "Purbachal, Dhaka",
    capacity: 500,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1570051008101-93a536243930?w=1200&q=80",
    themeColor: "#14532d",
  },

  // --- EIDI & SALAMI (2) ---
  {
    title: "Kids' Eid Carnival - Eidi Hunt",
    description: `Give your children an Eid they will never forget!

Carnival activities:
- Guided "Treasure Hunt" for special Eidi envelopes
- Puppet shows and magic performances
- Face painting and balloon twisting`,
    category: "salami",
    tags: ["kids", "games", "carnival"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Toggl World",
    address: "Bashundhara City, Dhaka",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Street Kids Eidi Distribution",
    description: `Share the joy of Eid with those who have less.

Our mission:
- Distribute 200 new sets of clothes
- Hand out festive meals and small Eidi cash packs
- Spend time playing games with local kids`,
    category: "salami",
    tags: ["charity", "kids", "volunteer"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Banani Field",
    address: "Road 11, Banani, Dhaka",
    capacity: 50,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    themeColor: "#065f46",
  },

  // --- LIFESTYLE EXPO (2) ---
  {
    title: "Eid Lifestyle Expo 2026",
    description: `Your one-stop destination for all things Eid fashion!

What to find:
- 40+ local boutique brands under one roof
- Exclusive Panjabi, Salwar Kamiz, and Abayas
- Handmade leather footwear and artisan jewelry`,
    category: "exhibition",
    tags: ["fashion", "lifestyle", "shopping"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Celebrity Convention Hall",
    address: "Gulshan 1, Dhaka",
    capacity: 400,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1589409514187-c21d14da0d04?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Silk & Jamdani Fair - Sylhet",
    description: `The finest weaves of Bangladesh come to Sylhet!

Exhibition highlights:
- Authentic Tangail Silk and Rajshahi Silk
- High-quality Jamdani directly from weavers
- Live weaving demonstrations`,
    category: "exhibition",
    tags: ["heritage", "weaving", "shopping"],
    city: "Sylhet",
    state: "Sylhet Division",
    venue: "Amanullah Convention Center",
    address: "Zindabazar, Sylhet",
    capacity: 250,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
    themeColor: "#7c2d12",
  },

  // --- CHARITY (3) ---
  {
    title: "Zakat-ul-Fitr Food Pack Assembly",
    description: `Help us ensure every table has food this Eid morning.

Task list:
- Segregating staples (Rice, Lentils, Oil, Sugar)
- Packing 1000 individual 'Fitra Packs'
- Coordinating with delivery vans`,
    category: "charity",
    tags: ["volunteer", "ramadan", "social-work"],
    city: "Khulna",
    state: "Khulna Division",
    venue: "Khulna City Eidgah",
    address: "Boyra, Khulna",
    capacity: 60,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Education Zakat Fundraiser",
    description: `Your Zakat can change a child's future forever!

Event details:
- Presentation on rural education gaps
- Stories from students who benefited last year
- Formal dinner and networking`,
    category: "charity",
    tags: ["education", "zakat", "fundraiser"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "EMK Center",
    address: "Dhanmondi, Dhaka",
    capacity: 100,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Zakat-funded Health Camp",
    description: `Bringing essential healthcare to the community this Eid.

Services provided:
- Free blood sugar and BP monitoring
- Pediatric consultation for children
- Distribution of basic essential medicines`,
    category: "charity",
    tags: ["health", "service", "zakat"],
    city: "Sylhet",
    state: "Sylhet Division",
    venue: "Sylhet Shishu Hospital",
    address: "Amberkhana, Sylhet",
    capacity: 200,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80",
    themeColor: "#b91c1c",
  },

  // --- EID GETAWAY (4) ---
  {
    title: "Sajek Valley: Cloud Watching Eid Getaway",
    description: `Escape to the 'Queen of Hills' this Eid vacation.

Package includes:
- AC Bus transport from Dhaka
- 2 Nights stay in a premium hilltop cottage
- Traditional hill-tracts meals`,
    category: "trip",
    tags: ["outdoor", "adventure", "sajek"],
    city: "Rangamati",
    state: "Chittagong Division",
    venue: "Sajek Resort Hub",
    address: "Sajek Valley, Rangamati",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 9500,
    coverImage: "https://images.unsplash.com/photo-1626500155553-620248555981?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Cox’s Bazar Beach BBQ & Bonfire",
    description: `Celebrate Eid under the stars on the world's longest beach!

What to expect:
- Live BBQ station with fresh seafood
- Acoustic performances by local beach bands
- Midnight bonfire and sky-lantern release`,
    category: "trip",
    tags: ["beach", "party", "music"],
    city: "Cox's Bazar",
    state: "Chittagong Division",
    venue: "Sugandha Beach Point",
    address: "Marine Drive, Cox's Bazar",
    capacity: 1000,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    themeColor: "#0e7490",
  },
  {
    title: "Sundarbans Eco-Cruise Holiday",
    description: `A 3-day deep-forest experience into the world's largest mangrove.

Itinerary:
- Day 1: Cruising through Karamjal and wildlife spotting
- Day 2: Morning walk through Kotka beach forest
- Day 3: Exploring Harbaria and return`,
    category: "trip",
    tags: ["nature", "wildlife", "cruise"],
    city: "Khulna",
    state: "Khulna Division",
    venue: "Mongla Port",
    address: "Mongla, Khulna",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 16000,
    coverImage: "https://images.unsplash.com/photo-1621614217122-f32f48366967?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Purbachal Sunset Photography Walk",
    description: `Capture the colors of Eid through your lens!

Walk details:
- Golden hour shooting at the 300-feet bypass
- Technical workshop on lighting and composition
- Final photo review over tea at Neela Market`,
    category: "trip",
    tags: ["photography", "hobby", "sunset"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Neela Market",
    address: "Purbachal 300 Feet, Dhaka",
    capacity: 15,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    themeColor: "#92400e",
  },

  // --- EID MELA (2) ---
  {
    title: "Traditional Eid Mela - Sonargaon",
    description: `Step back in time and enjoy a traditional village fair!

Attractions:
- Bamboo-made 'Nagordola' (Hand-spun Ferris Wheel)
- Handmade clay toys and wood-craft stalls
- Local snacks like Murali, Nimki, and Kadma`,
    category: "mela",
    tags: ["culture", "fair", "heritage"],
    city: "Narayanganj",
    state: "Dhaka Division",
    venue: "Folk Art & Craft Museum",
    address: "Sonargaon, Narayanganj",
    capacity: 2000,
    ticketType: "paid",
    ticketPrice: 50,
    coverImage: "https://images.unsplash.com/photo-1603228254119-e6a4d0ad4ad8?w=1200&q=80",
    themeColor: "#c2410c",
  },
  {
    title: "Urban Eid Fair - Banani DOHS",
    description: `A modern twist on the classic Eid mela!

What's inside:
- Premium boutique clothing and lifestyle stalls
- Virtual Reality (VR) gaming zone for teens
- Gourmet food court with international desserts`,
    category: "mela",
    tags: ["community", "fair", "shopping"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Banani DOHS Field",
    address: "Banani DOHS, Dhaka",
    capacity: 500,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
    themeColor: "#4338ca",
  },

  // --- OTHERS (1) ---
  {
    title: "Eid Morning Yoga at Hatirjheel",
    description: `Start the most festive day of the year with mental clarity.

Session plan:
- 45-minute Sun Salutation and flow
- 15-minute guided mindfulness meditation
- Herbal tea and interaction session`,
    category: "trip",
    tags: ["fitness", "meditation", "peace"],
    city: "Dhaka",
    state: "Dhaka Division",
    venue: "Hatirjheel Amphitheatre",
    address: "Hatirjheel, Dhaka",
    capacity: 100,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    themeColor: "#047857",
  },
];

// --- Helper Utilities ---
function getRandomFutureDate(minDays = 7, maxDays = 20) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}

function getEventEndTime(startTime) {
  const durationHours = Math.floor(Math.random() * 3) + 3;
  return startTime + durationHours * 60 * 60 * 1000;
}

function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// --- MAIN RUN MUTATION ---
export const run = internalMutation({
  handler: async (ctx) => {
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      const organizerId = await ctx.db.insert("users", {
        email: "hello@spott.com.bd",
        tokenIdentifier: "seed-user-token",
        name: "Spott Bangladesh",
        hasCompletedOnboarding: true,
        location: {
          city: "Dhaka",
          state: "Dhaka Division",
          country: "Bangladesh",
        },
        interests: ["dawat", "reunion", "chand-raat"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(organizerId);
    }

    const createdEvents = [];

    for (const eventData of SAMPLE_EVENTS) {
      const startDate = getRandomFutureDate();
      const endDate = getEventEndTime(startDate);
      const registrationCount = Math.floor(Math.random() * eventData.capacity * 0.3);

      const event = {
        title: eventData.title,
        description: eventData.description,
        slug: generateSlug(eventData.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        category: eventData.category,
        tags: eventData.tags,
        startDate,
        endDate,
        timezone: "Asia/Dhaka",
        locationType: "physical",
        venue: eventData.venue,
        address: eventData.address,
        city: eventData.city,
        state: eventData.state,
        country: "Bangladesh",
        capacity: eventData.capacity,
        ticketType: eventData.ticketType,
        ticketPrice: eventData.ticketPrice || 0,
        registrationCount,
        coverImage: eventData.coverImage,
        themeColor: eventData.themeColor,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      await ctx.db.insert("events", event);
      createdEvents.push(eventData.title);
    }

    console.log(`✅ Spott successfully seeded ${createdEvents.length} events!`);
    return { success: true, count: createdEvents.length };
  },
});

export const clear = internalMutation({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    for (const event of events) {
      const regs = await ctx.db
        .query("registrations")
        .filter((q) => q.eq(q.field("eventId"), event._id))
        .collect();

      for (const reg of regs) {
        await ctx.db.delete(reg._id);
      }
      await ctx.db.delete(event._id);
    }
    return { success: true };
  },
});
