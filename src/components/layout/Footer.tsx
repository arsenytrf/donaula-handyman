import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + Contact */}
          <div className="lg:col-span-4">
            <span className="font-heading font-black text-2xl text-white tracking-tight block mb-4">
              DONAULA
            </span>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Full-service handyman covering the Bronx through Connecticut.
              $2M insured. Available 24/7.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={company.phoneLink}
                className="flex items-center gap-2 text-white hover:text-accent-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-accent-500" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-accent-500" />
                {company.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                <span>{company.serviceRegion}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-500" />
                <span>{company.hours}</span>
              </div>
            </div>
          </div>

          {/* Nav + Services */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4 mt-8">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Areas */}
          <div className="lg:col-span-5">
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {company.areasServed.map((area) => (
                <span
                  key={area}
                  className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 hover:border-accent-500/40 hover:text-accent-300 transition-colors duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="w-full h-40 bg-neutral-800 overflow-hidden">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(0.8) contrast(1.1)",
                }}
                allowFullScreen
                loading="lazy"
                title="Service area map"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Website by{" "}
            <a
              href="https://epageusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
            >
              ePageUSA.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
