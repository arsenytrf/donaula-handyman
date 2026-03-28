"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Shield,
  Clock,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Hero() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) return;
    setStatus("loading");

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const serviceType = data.get("serviceType") || "";
    const details = data.get("details") || "";

    const subject = encodeURIComponent(
      `Estimate Request from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceType}\n\nDetails:\n${details}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 500);
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-accent-400 focus:outline-none transition-colors duration-300";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00O0O_brOtGrOiUzXz_0dm0sU_600x450.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
                $2M Insured &bull; 24/7 Available
              </span>
            </div>

            <h1 className="font-heading font-black tracking-tight mb-6">
              <span className="block text-stroke text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95]">
                NOT THE BEST
              </span>
              <span className="block text-stroke text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] mt-1">
                PRICE.
              </span>
              <span className="block accent-shimmer-animate text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] mt-2">
                THE BEST WORK.
              </span>
            </h1>

            <p className="text-neutral-300 text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
              25+ services from roofing to IKEA assembly. Bronx through
              Connecticut. One call handles it all.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3.5 font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call John — {company.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/10 hover:border-white/40 px-6 py-3.5 font-medium text-sm tracking-wide uppercase transition-all duration-300"
              >
                View All Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/70 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-400" />
                <span>{company.insurance}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-400" />
                <span>{company.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            {status === "success" ? (
              <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-8 lg:p-10 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-white font-bold tracking-wide">
                  GOT IT!
                </h3>
                <p className="text-neutral-400 mt-2">
                  John will reach out within 2 hours.
                </p>
                <a
                  href={company.phoneLink}
                  className="inline-flex items-center gap-2 mt-4 text-secondary-400 hover:text-secondary-300 text-sm font-medium transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Or call now: {company.phone}
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-6 lg:p-8 space-y-4 relative"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-accent-500" />
                  <div className="absolute top-0 left-0 h-full w-px bg-accent-500" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-px bg-accent-500" />
                  <div className="absolute top-0 right-0 h-full w-px bg-accent-500" />
                </div>

                <h3 className="font-heading text-xl font-bold tracking-wide text-white">
                  GET YOUR FREE ESTIMATE
                </h3>
                <p className="text-neutral-400 text-sm">
                  Project-based or hourly rates. Materials quoted separately.
                </p>

                <select
                  name="serviceType"
                  required
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-neutral-900">
                    What do you need done?
                  </option>
                  {services.map((s) => (
                    <option
                      key={s.slug}
                      value={s.title}
                      className="bg-neutral-900"
                    >
                      {s.title}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Your name *"
                    required
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number *"
                    required
                    className={inputClass}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={inputClass}
                />

                <input
                  name="preferredDate"
                  type="date"
                  className={`${inputClass} min-h-[46px] [-webkit-appearance:none]`}
                />

                <textarea
                  name="details"
                  placeholder="Describe the project — what needs to be done?"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <input
                  name="_honey"
                  type="text"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3.5 font-bold tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === "loading"
                    ? "Sending..."
                    : "Get My Free Estimate"}
                </button>

                {status === "error" && (
                  <p
                    className="text-red-400 text-xs text-center"
                    role="alert"
                  >
                    Something went wrong.{" "}
                    <a href={company.phoneLink} className="underline">
                      Call us directly
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
