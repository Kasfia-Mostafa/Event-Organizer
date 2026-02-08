"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { createLocationSlug } from "@/lib/location-utils";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CATEGORIES } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import EventCard from "@/components/event-card";


export default function ExplorePage() {
  const router = useRouter();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  // Fallback location constants for Bangladesh
  const DEFAULT_CITY = "Dhaka";
  const DEFAULT_STATE = "Dhaka Division";

  // Fetch current user for location
  const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);

  // Fetch events
  const { data: featuredEvents, isLoading: loadingFeatured } = useConvexQuery(
    api.explore.getFeaturedEvents,
    { limit: 5 },
  );

  const { data: localEvents, isLoading: loadingLocal } = useConvexQuery(
    api.explore.getEventsByLocation,
    {
      city: currentUser?.location?.city || DEFAULT_CITY,
      state: currentUser?.location?.state || DEFAULT_STATE,
      limit: 4,
    },
  );

  const { data: popularEvents, isLoading: loadingPopular } = useConvexQuery(
    api.explore.getPopularEvents,
    { limit: 6 },
  );

  const { data: categoryCounts } = useConvexQuery(
    api.explore.getCategoryCounts,
  );

  const handleEventClick = (slug) => {
    router.push(`/events/${slug}`);
  };

  const handleCategoryClick = (categoryId) => {
    router.push(`/explore/category/${categoryId}`);
  };

  const handleViewLocalEvents = () => {
    const city = currentUser?.location?.city || DEFAULT_CITY;
    const state = currentUser?.location?.state || DEFAULT_STATE;
    const slug = createLocationSlug(city, state);
    router.push(`/explore/location/${slug}`);
  };

  // Format categories with counts
  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: categoryCounts?.[cat.id] || 0,
  }));

  const isLoading = loadingFeatured || loadingLocal || loadingPopular;

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">
          Finding events in Bangladesh...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Title */}
      <div className="pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Discover Events
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From Chand Raat festivals to alumni reunions, explore what&apos;s
          happening across Bangladesh.
        </p>
      </div>

      {/* Featured Carousel */}
      {featuredEvents && featuredEvents.length > 0 && (
        <div className="mb-20">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {featuredEvents.map((event) => (
                <CarouselItem key={event._id}>
                  <div
                    className="relative h-112.5 md:h-125 rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => handleEventClick(event.slug)}
                  >
                    {event.coverImage ? (
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: event.themeColor || "#1e3a8a",
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
                      <Badge
                        className="w-fit mb-4 bg-primary/90 hover:bg-primary"
                        variant="default"
                      >
                        Featured Event
                      </Badge>
                      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-6 text-white/90">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary-foreground" />
                          <span className="font-medium">
                            {format(event.startDate, "PPP")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary-foreground" />
                          <span className="font-medium">{event.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary-foreground" />
                          <span className="font-medium">
                            {event.registrationCount} Attending
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-6" />
            <CarouselNext className="hidden md:flex right-6" />
          </Carousel>
        </div>
      )}

      {/* Categories Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoriesWithCounts.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-xl transition-all border-2 hover:border-primary/50"
              onClick={() => handleCategoryClick(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{category.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} {category.count === 1 ? "Event" : "Events"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Events */}
      {popularEvents && popularEvents.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Trending in Bangladesh
              </h2>
              <p className="text-muted-foreground">
                Most anticipated events across the country
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularEvents.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onClick={() => handleEventClick(event.slug)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
