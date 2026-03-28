"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const navigate = (dir: -1 | 1) => {
    if (lightbox === null) return;
    const next = (lightbox + dir + galleryImages.length) % galleryImages.length;
    setLightbox(next);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-32 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
              Recent Projects
            </h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
              Real photos from real jobs across Westchester, the Bronx, and
              beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Tight 4-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={(i % 4) * 0.04}>
              <button
                onClick={() => openLightbox(i)}
                className="w-full block overflow-hidden group relative aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent-950/0 group-hover:bg-accent-950/40 transition-colors duration-300 flex items-end justify-start p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.category}
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 lg:left-8 text-white/70 hover:text-white z-10 transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 lg:right-8 text-white/70 hover:text-white z-10 transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <p className="absolute bottom-6 text-white/50 text-sm">
              {lightbox + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
