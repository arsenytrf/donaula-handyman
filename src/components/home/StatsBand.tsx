import { CountUp } from "@/components/shared/CountUp";

const stats = [
  { target: 25, suffix: "+", label: "Services Offered" },
  { target: 2, prefix: "$", suffix: "M", label: "Insurance Coverage" },
  { target: 24, suffix: "/7", label: "Availability" },
  { target: 4, suffix: "+", label: "Counties Served" },
];

export function StatsBand() {
  return (
    <section className="relative bg-accent-700 diagonal-both -mt-1 py-20 md:py-24 overflow-hidden">
      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00C0C_khhftiXqd3C_0aT0ew_600x450.jpg')",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                />
              </p>
              <p className="text-white/70 text-sm mt-2 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
