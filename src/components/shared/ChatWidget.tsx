"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, ArrowLeft, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

type Step = "service" | "urgency" | "property" | "description" | "contact" | "done";

const serviceOptions = [
  "Carpentry / Woodwork",
  "Roofing",
  "Painting",
  "Plumbing",
  "Electrical",
  "Bathroom / Kitchen Reno",
  "Decks & Patios",
  "Power Washing",
  "TV Mounting / Assembly",
  "Other",
];

const urgencyOptions = [
  "ASAP — it's urgent",
  "This week",
  "This month",
  "Just getting quotes",
];

const propertyOptions = [
  "Single-family home",
  "Apartment / Condo",
  "Townhouse",
  "Commercial property",
];

interface Message {
  from: "bot" | "user";
  text: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hey! What do you need help with?" },
  ]);
  const [typing, setTyping] = useState(false);
  const [form, setForm] = useState({
    service: "",
    urgency: "",
    property: "",
    description: "",
    name: "",
    phone: "",
    email: "",
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const addBotMessage = (text: string, nextStep: Step) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text }]);
      setStep(nextStep);
    }, 350);
  };

  const handleSelect = (value: string) => {
    setMessages((prev) => [...prev, { from: "user", text: value }]);

    if (step === "service") {
      setForm((prev) => ({ ...prev, service: value }));
      addBotMessage("How soon do you need this done?", "urgency");
    } else if (step === "urgency") {
      setForm((prev) => ({ ...prev, urgency: value }));
      addBotMessage("What type of property is this for?", "property");
    } else if (step === "property") {
      setForm((prev) => ({ ...prev, property: value }));
      addBotMessage(
        "Describe the job briefly — what needs to be done?",
        "description"
      );
    }
  };

  const handleDescription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const desc = fd.get("desc") as string;
    if (!desc.trim()) return;
    setForm((prev) => ({ ...prev, description: desc }));
    setMessages((prev) => [...prev, { from: "user", text: desc }]);
    e.currentTarget.reset();
    addBotMessage(
      "Almost done — drop your name and phone so John can reach you.",
      "contact"
    );
  };

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const email = (fd.get("email") as string) || "";

    if (!name.trim() || !phone.trim()) return;

    const updatedForm = { ...form, name, phone, email };
    setForm(updatedForm);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `${name} — ${phone}` },
    ]);

    // POST to formspree
    fetch(company.formAction, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "Chat Widget",
        ...updatedForm,
      }),
    }).catch(() => {});

    addBotMessage(
      `Got it! John will reach out shortly. If it's urgent, call ${company.phone} directly.`,
      "done"
    );
  };

  const reset = () => {
    setStep("service");
    setMessages([
      { from: "bot", text: "Hey! What do you need help with?" },
    ]);
    setForm({
      service: "",
      urgency: "",
      property: "",
      description: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const options =
    step === "service"
      ? serviceOptions
      : step === "urgency"
      ? urgencyOptions
      : step === "property"
      ? propertyOptions
      : null;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-40 flex items-center gap-2 bg-white text-accent-700 px-5 py-3 shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300 group"
          >
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">
              Hey, how can we help?
            </span>
            <MessageCircle className="w-4 h-4 text-accent-500 group-hover:text-accent-600 transition-colors duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[580px] bg-white shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
            style={{ borderRadius: "12px" }}
          >
            {/* Header */}
            <div className="bg-accent-700 text-white px-5 py-4 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm">
                  DONAULA Handyman
                </p>
                <p className="text-white/70 text-xs">
                  Usually responds in minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[380px]"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-accent-600 text-white"
                        : "bg-neutral-100 text-neutral-800"
                    }`}
                    style={{ borderRadius: "12px" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div
                    className="bg-neutral-100 px-4 py-3 flex gap-1"
                    style={{ borderRadius: "12px" }}
                  >
                    <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}

              {/* Option buttons */}
              {!typing && options && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className="text-xs px-3 py-2 border border-accent-300 text-accent-700 hover:bg-accent-50 transition-colors duration-300"
                      style={{ borderRadius: "8px" }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Description input */}
              {!typing && step === "description" && (
                <form onSubmit={handleDescription} className="flex gap-2 pt-1">
                  <input
                    name="desc"
                    placeholder="Describe the job..."
                    autoFocus
                    className="flex-1 text-sm px-3 py-2 border border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  />
                  <button
                    type="submit"
                    className="bg-accent-600 text-white p-2 hover:bg-accent-700 transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Contact form */}
              {!typing && step === "contact" && (
                <form
                  onSubmit={handleContact}
                  className="space-y-2 pt-1"
                >
                  <input
                    name="name"
                    placeholder="Your name *"
                    required
                    className="w-full text-sm px-3 py-2 border border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number *"
                    required
                    className="w-full text-sm px-3 py-2 border border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email (optional)"
                    className="w-full text-sm px-3 py-2 border border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent-600 text-white py-2.5 text-sm font-bold hover:bg-accent-700 transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  >
                    Send My Info
                  </button>
                </form>
              )}

              {/* Done state */}
              {!typing && step === "done" && (
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex-1 text-xs px-3 py-2 border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors duration-300"
                    style={{ borderRadius: "8px" }}
                  >
                    Close
                  </button>
                  <button
                    onClick={reset}
                    className="flex-1 text-xs px-3 py-2 bg-accent-50 text-accent-700 border border-accent-200 hover:bg-accent-100 transition-colors duration-300 flex items-center justify-center gap-1"
                    style={{ borderRadius: "8px" }}
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Start Over
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
