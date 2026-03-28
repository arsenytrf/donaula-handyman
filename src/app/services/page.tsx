import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { galleryImages } from "@/data/gallery";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description: `${company.name} offers 25+ handyman services across Westchester County, the Bronx, Rockland County, and Connecticut.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${galleryImages[2].src}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/50" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <nav className="text-sm text-white/60 mb-6">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            <span className="text-stroke">OUR</span>{" "}
            <span className="text-white">SERVICES</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl">
            From roof to foundation. 25+ services — one contractor, one
            phone call.
          </p>
        </div>
      </section>

      {/* Featured photo grid */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
              {galleryImages.slice(0, 6).map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden group ${
                    i === 0 ? "row-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Quote break */}
          <ScrollReveal>
            <div className="relative bg-accent-700 px-8 py-12 lg:px-16 lg:py-16 mb-16 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('${galleryImages[7].src}')`,
                }}
              />
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-white leading-snug">
                  &ldquo;I don&apos;t cut corners. If I wouldn&apos;t put it
                  in my own house, it&apos;s not going in yours.&rdquo;
                </p>
                <cite className="block mt-4 text-white/60 text-sm not-italic">
                  &mdash; John, DONAULA Handyman
                </cite>
              </div>
            </div>
          </ScrollReveal>

          {/* Full service list */}
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
                All Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-neutral-200">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.03}>
                <div
                  id={service.slug}
                  className="group flex items-start gap-6 lg:gap-10 py-6 lg:py-8 scroll-mt-24"
                >
                  <span className="font-heading text-3xl lg:text-4xl font-black text-neutral-200 group-hover:text-accent-500 transition-colors duration-300 w-14 shrink-0 text-right pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2.5 py-1 border border-accent-200 shrink-0 hidden sm:block mt-2">
                    {service.category}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick process */}
          <ScrollReveal>
            <div className="mt-20 text-center">
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                How We Work
              </h3>
              <p className="text-neutral-500 mb-8">
                Call &rarr; Free Estimate &rarr; We Do the Work &rarr; You
                Sign Off
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={company.phoneLink}
                  className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3.5 font-bold text-sm tracking-wide uppercase transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call {company.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-accent-600 text-accent-600 hover:bg-accent-50 px-6 py-3.5 font-medium text-sm tracking-wide uppercase transition-all duration-300"
                >
                  Request Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner variant="services" />
    </>
  );
}
