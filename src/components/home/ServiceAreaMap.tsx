import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <ScrollReveal>
            <div className="w-full h-80 lg:h-[450px] bg-neutral-100 overflow-hidden border border-neutral-200">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service area map"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <div>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
                Service Area
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
                Bronx through<br />
                <span className="text-accent-600">Connecticut.</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                We cover the Bronx, all of Westchester County, Rockland
                County, and into Connecticut. If you&apos;re within driving
                distance, we&apos;ll be there.
              </p>

              <div className="flex flex-wrap gap-2">
                {company.areasServed.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 bg-accent-50 text-accent-700 border border-accent-200 transition-colors duration-300 hover:bg-accent-100"
                  >
                    <MapPin className="w-3 h-3" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
