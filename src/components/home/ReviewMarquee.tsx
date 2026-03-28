"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { Review } from "@/data/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[260px] sm:w-[280px] shrink-0 bg-white border border-neutral-200 p-4 sm:p-5 snap-start">
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-3">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 bg-accent-100 text-accent-700 flex items-center justify-center font-heading font-bold text-xs">
          {review.initial}
        </div>
        <div>
          <p className="text-xs font-bold text-neutral-900">{review.author}</p>
          <p className="text-[10px] text-neutral-400">{review.project}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -300 : 300;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
                Reviews
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
                What Customers Say
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Google badge */}
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 shrink-0"
                  fill="none"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-1.5">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="w-9 h-9 flex items-center justify-center border border-neutral-300 bg-white text-neutral-700 hover:bg-accent-600 hover:text-white hover:border-accent-600 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="w-9 h-9 flex items-center justify-center border border-neutral-300 bg-white text-neutral-700 hover:bg-accent-600 hover:text-white hover:border-accent-600 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrollable row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div
          ref={scrollRef}
          className="flex gap-3 px-6 lg:px-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Leave a Review CTA */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-8">
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/search?q=donaula+handyman+scarsdale+ny"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent-600 hover:text-accent-700 transition-colors duration-300"
            >
              Leave a Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-neutral-300">|</span>
            <span className="text-xs text-neutral-400">
              Your feedback helps us improve
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
