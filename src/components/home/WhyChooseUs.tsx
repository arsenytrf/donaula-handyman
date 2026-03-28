import {
  Shield,
  Clock,
  MapPin,
  Wrench,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const reasons = [
  {
    icon: Shield,
    title: "$2 Million Insurance",
    description:
      "Full liability coverage on every project. Your property is protected from day one.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Burst pipe at 2 AM? Roof leak during a storm? We pick up the phone when you need us.",
  },
  {
    icon: MapPin,
    title: "Bronx to Connecticut",
    description:
      "We cover the Bronx, all of Westchester County, Rockland County, and into Connecticut.",
  },
  {
    icon: Wrench,
    title: "One Contractor, Everything",
    description:
      "Roofing, plumbing, electrical, painting, renovations — no need to call five different guys.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Project-based or hourly rates. Materials quoted separately. You know what you're paying before we start.",
  },
  {
    icon: ThumbsUp,
    title: "References on Request",
    description:
      "Excellent references available. We let our past work and happy customers speak for themselves.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-950 text-white overflow-hidden">
      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00E0E_dWwxUnO7jYJ_0aT0ew_600x450.jpg')",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-secondary-400">
                Why Us
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight mb-4">
                Why Westchester<br />
                <span className="text-accent-400">trusts DONAULA</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                There are a lot of handymen. Most of them disappear after the
                first phone call. We show up, do the work right, and answer
                the phone when you call back.
              </p>
            </ScrollReveal>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="group p-6 bg-white/[0.03] border border-white/[0.06] hover:border-accent-500/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-accent-600/20 flex items-center justify-center mb-4 group-hover:bg-accent-600/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-accent-400" />
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
