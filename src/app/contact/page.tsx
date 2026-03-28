import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck,
  ClipboardList,
  HardHat,
  ChevronDown,
} from "lucide-react";
import { company } from "@/data/company";
import { galleryImages } from "@/data/gallery";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free estimate from ${company.name}. Call ${company.phone} or fill out our contact form. Available 24/7.`,
};

function FAQ() {
  const faqs = [
    {
      q: "How do I get a free estimate?",
      a: "Call, text, or fill out the form on this page. We'll respond within 2 hours — often faster. For most projects, we can give you a price over the phone or after a quick site visit.",
    },
    {
      q: "Do you charge for estimates?",
      a: "No. Estimates are always free. We'll come out, look at the work, and give you a clear price. No obligation.",
    },
    {
      q: "What are your rates?",
      a: "We offer project-based pricing and hourly rates depending on the job. Materials are always quoted separately so you know exactly what's labor and what's materials.",
    },
    {
      q: "Are you insured?",
      a: "Yes — $2 million in liability coverage on every project. Your property is protected from the moment we start.",
    },
    {
      q: "What areas do you serve?",
      a: "The Bronx, all of Westchester County (White Plains, Yonkers, Scarsdale, New Rochelle, Mount Vernon, Tarrytown, and more), Rockland County, and parts of Connecticut.",
    },
    {
      q: "Do you work on weekends and holidays?",
      a: "We're available 24/7. If you have an emergency at 3 AM on a Sunday, call us.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-neutral-50">
      <div className="max-w-[800px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
              FAQ
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
              Common Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <details className="group bg-white border border-neutral-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-heading font-bold text-neutral-900 text-sm pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${galleryImages[8].src}')`,
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
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            <span className="text-stroke">GET YOUR</span>{" "}
            <span className="text-white">FREE ESTIMATE</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl">
            Tell us what you need. We&apos;ll give you a straight answer and
            a clear price — no runaround.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* What Happens Next */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-bold text-neutral-900 text-center mb-10">
              What Happens Next
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardList,
                  step: "1",
                  title: "We Review",
                  desc: "We review your request within 2 hours — usually much faster.",
                },
                {
                  icon: FileCheck,
                  step: "2",
                  title: "We Estimate",
                  desc: "Free on-site visit or phone estimate. Clear pricing, no surprises.",
                },
                {
                  icon: HardHat,
                  step: "3",
                  title: "We Get to Work",
                  desc: "Show up on time, do the job right. You sign off when you're happy.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 bg-accent-100 text-accent-700 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-accent-600 tracking-wider uppercase">
                      Step {item.step}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-neutral-900 mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ />

      <CtaBanner variant="contact" />
    </>
  );
}
