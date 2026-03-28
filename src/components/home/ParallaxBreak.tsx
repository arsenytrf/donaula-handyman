"use client";

import { useRef, useEffect } from "react";

export function ParallaxBreak() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (imgRef.current) {
          gsap.to(imgRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: imgRef.current.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
      <div
        ref={imgRef}
        className="absolute inset-[-20%] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00l0l_lrokxe4xRjb_0aT0ew_600x450.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-neutral-950/50" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <blockquote className="max-w-3xl">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            &ldquo;I don&apos;t have the best price. I have the best
            work.&rdquo;
          </p>
          <cite className="block mt-4 text-secondary-300 text-sm tracking-widest uppercase not-italic">
            &mdash; John, DONAULA Handyman
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
