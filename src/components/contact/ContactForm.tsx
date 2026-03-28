"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("_honey")) return;
    setStatus("loading");

    const firstName = data.get("firstName") || "";
    const lastName = data.get("lastName") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const serviceType = data.get("serviceType") || "";
    const preferredDate = data.get("preferredDate") || "";
    const details = data.get("details") || "";

    const subject = encodeURIComponent(
      `Estimate Request from ${firstName} ${lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceType}\nPreferred Date: ${preferredDate}\n\nDetails:\n${details}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 500);
  }

  const inputClass =
    "w-full bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/20 transition-all duration-300";

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                Contact Info
              </h2>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: company.phone,
                    href: company.phoneLink,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Service Area",
                    value: company.serviceRegion,
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: company.hours,
                  },
                  {
                    icon: Shield,
                    label: "Insurance",
                    value: company.insurance,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent-600" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-bold text-sm text-neutral-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      className="block hover:bg-neutral-50 -mx-2 px-2 py-1 transition-colors duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i} className="py-1">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="w-full h-52 bg-neutral-100 overflow-hidden border border-neutral-200">
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
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                Request Your Free Estimate
              </h2>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-neutral-900">
                    Request Received!
                  </h3>
                  <p className="text-neutral-500 mt-2">
                    John will get back to you within 2 hours.
                  </p>
                  <a
                    href={company.phoneLink}
                    className="inline-flex items-center gap-2 mt-4 text-secondary-500 font-bold text-sm hover:text-secondary-600 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Or call now: {company.phone}
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        name="serviceType"
                        required
                        className={`${inputClass} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        name="preferredDate"
                        type="date"
                        className={`${inputClass} min-h-[46px] [-webkit-appearance:none]`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 uppercase tracking-wide mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      placeholder="Tell us about the project — what needs to be done, any special considerations..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

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
                    className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3.5 font-bold tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center gap-2"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {status === "loading"
                      ? "Sending..."
                      : "Submit Request"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm" role="alert">
                      Something went wrong.{" "}
                      <a
                        href={company.phoneLink}
                        className="underline font-medium"
                      >
                        Call us directly at {company.phone}
                      </a>
                    </p>
                  )}
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
