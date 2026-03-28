import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CtaBanner({ variant = "home" }: { variant?: string }) {
  const headlines: Record<string, { title: string; subtitle: string }> = {
    home: {
      title: "Ready to get it done?",
      subtitle:
        "One call. One contractor. From a dripping faucet to a full kitchen remodel.",
    },
    services: {
      title: "Need something not listed?",
      subtitle:
        "If it involves a tool and a house, we probably do it. Call and ask.",
    },
    about: {
      title: "Let's talk about your project.",
      subtitle:
        "Free estimates. Transparent pricing. No pressure, no BS.",
    },
    contact: {
      title: "Prefer to just call?",
      subtitle:
        "John picks up. No phone tree, no voicemail maze. Real person, real answers.",
    },
  };

  const content = headlines[variant] || headlines.home;

  return (
    <section className="relative bg-accent-700 py-20 md:py-24 overflow-hidden">
      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00i0i_6WFSyhD9jqX_0aT0ew_600x450.jpg')",
        }}
      />
      {/* Decorative big text */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-heading text-[16rem] lg:text-[20rem] font-black text-white/[0.04] leading-none pointer-events-none select-none hidden lg:block">
        24/7
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {content.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-2 bg-white text-accent-700 px-6 py-3.5 font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:bg-neutral-50"
            >
              <Phone className="w-4 h-4" />
              Call {company.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3.5 font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white/10"
            >
              Request Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
