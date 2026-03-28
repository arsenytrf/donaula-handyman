import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServiceRows() {
  const featuredServices = services.slice(0, 10);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-12">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
              What We Do
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900">
              25+ Services.<br />
              <span className="text-accent-600">One Phone Call.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-neutral-200">
          {featuredServices.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.04}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-center gap-6 lg:gap-10 py-6 lg:py-8 transition-colors duration-300 hover:bg-neutral-50 -mx-4 px-4"
              >
                <span className="font-heading text-4xl lg:text-5xl font-black text-neutral-200 group-hover:text-accent-500 transition-colors duration-300 w-16 shrink-0 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-neutral-900 w-48 lg:w-64 shrink-0">
                  {service.title}
                </h3>
                <p className="hidden md:block text-sm text-neutral-500 flex-1 leading-relaxed">
                  {service.shortDescription}
                </p>
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-bold text-sm tracking-wide uppercase transition-colors duration-300"
            >
              View All 25+ Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
