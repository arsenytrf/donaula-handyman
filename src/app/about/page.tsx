import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Clock, MapPin, Wrench, Award, Users } from "lucide-react";
import { company } from "@/data/company";
import { galleryImages } from "@/data/gallery";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: `Meet John — the person behind ${company.name}. $2M insured, 24/7 available, serving Westchester, the Bronx, Rockland County, and Connecticut.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${galleryImages[4].src}')`,
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
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            <span className="text-stroke">ABOUT</span>{" "}
            <span className="text-white">JOHN</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl">
            The person behind the work. One contractor, every trade.
          </p>
        </div>
      </section>

      {/* Story split */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-6">
              <div className="overflow-hidden">
                <img
                  src={galleryImages[9].src}
                  alt="DONAULA project work"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-6">
              <div>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 mb-6">
                  One guy who does<br />
                  <span className="text-accent-600">
                    everything right.
                  </span>
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Most homeowners in Westchester and the Bronx have the same
                    complaint: they call three contractors, one shows up, gives
                    a vague quote, then disappears. John built DONAULA to be
                    the opposite of that.
                  </p>
                  <p>
                    With 25+ services under one roof — from carpentry and
                    roofing to TV mounting and furniture assembly — you get one
                    reliable person who handles everything. No subcontractors,
                    no middlemen, no excuses.
                  </p>
                  <p>
                    John backs every job with $2 million in insurance coverage
                    and 24/7 availability. When the pipe bursts at midnight or
                    the roof leaks during a storm, he picks up the phone.
                  </p>
                </div>

                <blockquote className="border-l-4 border-secondary-500 pl-5 mt-8">
                  <p className="font-heading text-xl font-bold text-neutral-900 italic">
                    &ldquo;I don&apos;t have the best price. I have the best
                    work.&rdquo;
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: `url('${galleryImages[5].src}')`,
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-secondary-400">
                What We Stand For
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight">
                Built on standards,<br />
                <span className="text-accent-400">not shortcuts.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Quality Over Speed",
                desc: "Every job gets the time it needs to be done right. We don't rush to get to the next one — we finish yours properly first.",
              },
              {
                icon: Shield,
                title: "$2 Million Insured",
                desc: "Full liability coverage protects your property on every project. If something goes wrong, you're covered. Period.",
              },
              {
                icon: Users,
                title: "Straight Talk",
                desc: "You get a clear price before we start. Materials are separate. If something changes, we tell you before we touch it.",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Emergencies don't wait for business hours. Burst pipes, roof leaks, power outages — call anytime, we'll be there.",
              },
              {
                icon: Wrench,
                title: "One Call, Every Trade",
                desc: "25+ services means you're not calling five different contractors. Roofing, plumbing, electrical, painting — all one crew.",
              },
              {
                icon: MapPin,
                title: "Local to the Bone",
                desc: "We know Westchester. We know the Bronx. We know the weather, the building codes, and the neighborhoods.",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="p-6 bg-white/[0.03] border border-white/[0.06] hover:border-accent-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent-400 mb-4" />
                    <h3 className="font-heading text-lg font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section
        id="service-area"
        className="py-20 md:py-28 lg:py-32 bg-white"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
                  Where We Work
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
                  Bronx to<br />
                  <span className="text-accent-600">Connecticut.</span>
                </h2>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  We serve the Bronx, every town in Westchester County,
                  Rockland County, and communities across the Connecticut
                  border. If you can describe where you are, we can get
                  there.
                </p>
                <div className="flex flex-wrap gap-2">
                  {company.areasServed.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 bg-accent-50 text-accent-700 border border-accent-200"
                    >
                      <MapPin className="w-3 h-3" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="w-full h-80 lg:h-[400px] bg-neutral-100 overflow-hidden border border-neutral-200">
                <iframe
                  src={company.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Service area"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBanner variant="about" />
    </>
  );
}
