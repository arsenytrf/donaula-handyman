import { processSteps } from "@/data/process";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function Process() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-accent-600">
                How It Works
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
                From call to<br />
                <span className="text-accent-600">done right.</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                No runaround, no ghosting, no surprise invoices. Here&apos;s
                exactly what happens when you reach out.
              </p>
            </ScrollReveal>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-200" />

            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 bg-accent-600 flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-white font-heading font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
