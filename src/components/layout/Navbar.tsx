"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const normalizedPath = pathname.replace(/\/donaula-handyman/, "") || "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col leading-none">
              <span
                className={`font-heading font-black text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-accent-700" : "text-white"
                }`}
              >
                DONAULA
              </span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                scrolled ? "text-neutral-400" : "text-white/60"
              }`}>
                Handyman
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  normalizedPath === link.href
                    ? scrolled
                      ? "text-accent-600"
                      : "text-white"
                    : scrolled
                    ? "text-neutral-600 hover:text-accent-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneLink}
              className={`flex items-center gap-2 text-sm font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-lg"
            >
              Free Estimate
            </Link>
          </div>

          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-neutral-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {drawerOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[70%] max-w-[360px] bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex flex-col leading-none">
                  <span className="font-heading font-black text-xl text-accent-700 tracking-tight">DONAULA</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 font-medium">Handyman</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-px bg-gradient-to-r from-accent-500 via-secondary-500 to-accent-500" />

              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 30,
                      delay: 0.2 + i * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`block py-3 font-heading font-bold text-3xl tracking-tight transition-colors duration-300 ${
                        normalizedPath === link.href
                          ? "text-accent-600"
                          : "text-neutral-900 hover:text-accent-600"
                      }`}
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween" as const,
                  duration: 0.4,
                  delay: 0.5,
                }}
                className="px-8 pb-8 space-y-4"
              >
                <div className="space-y-2 text-sm text-neutral-600">
                  <a
                    href={company.phoneLink}
                    className="flex items-center gap-2 hover:text-accent-600 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-accent-500" />
                    {company.phone}
                  </a>
                  <p className="text-xs text-neutral-400">
                    {company.serviceRegion}
                  </p>
                </div>

                <div className="inline-block text-xs font-medium text-accent-600 bg-accent-50 px-3 py-1.5 border border-accent-200">
                  $2M Insured &bull; 24/7 Available
                </div>

                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="block w-full text-center bg-secondary-500 hover:bg-secondary-600 text-white py-3.5 font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg"
                >
                  Get Free Estimate
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
