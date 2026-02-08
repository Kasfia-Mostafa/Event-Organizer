/* --- Category Definitions --- */
export const CATEGORIES = [
  {
    id: "chand-raat",
    label: "Chand Raat",
    icon: "🌙",
    description: "Mehendi, street food, and last-minute shopping before the big day.",
  },
  {
    id: "jamaat",
    label: "Eid Jamaat",
    icon: "🕌",
    description: "Prayer times and locations for local Eidgahs and Maidan gatherings.",
  },
  {
    id: "dawat",
    label: "Eid Dawat",
    icon: "🥘",
    description: "Traditional home gatherings, Kacchi parties, and family dinners.",
  },
  {
    id: "reunion",
    label: "Batch Reunion",
    icon: "🎓",
    description: "School and college alumni meetups at local cafes or campuses.",
  },
  {
    id: "haat",
    label: "Gorur Haat",
    icon: "🐄",
    description: "Cattle market locations, pricing updates, and logistics.",
  },
  {
    id: "salami",
    label: "Eidi & Salami",
    icon: "🧧",
    description: "Events for children, gift distributions, and community Eidi.",
  },
  {
    id: "exhibition",
    label: "Eid Lifestyle Expo",
    icon: "👗",
    description: "Showcasing Panjabis, Kurtis, and boutique jewelry collections.",
  },
  {
    id: "charity",
    label: "Zakat & Fitra",
    icon: "🤲",
    description: "Community-led charity drives and distribution to the needy.",
  },
  {
    id: "trip",
    label: "Eid Getaway",
    icon: "🚌",
    description: "Group tours to Cox's Bazar, Sylhet, or Sajek during the break.",
  },
  {
    id: "mela",
    label: "Eid Mela", 
    icon: "🎡",
    description: "Traditional fairs featuring Nagordola, local crafts, and snacks.",
  },
];

/* --- Helper Utilities --- */

export const getCategoryById = (id) => CATEGORIES.find((cat) => cat.id === id);

// Defaults to "Event" if no ID found
export const getCategoryLabel = (id) => getCategoryById(id)?.label || "Event";

// Defaults to a generic calendar icon if no ID found
export const getCategoryIcon = (id) => getCategoryById(id)?.icon || "📅";
