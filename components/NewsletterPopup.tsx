"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("clawster-popup-seen");
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("clawster-popup-seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("You're on the list!");
        localStorage.setItem("clawster-popup-seen", "true");
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/animations/happy.svg"
              alt="Clawster"
              width={64}
              height={64}
              className="animate-bounce"
            />
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
            Stay in the loop!
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            Get notified when Clawster is ready to adopt. No spam, just one email when we launch.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-400 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF8C69]/50 focus:ring-1 focus:ring-[#FF8C69]/50 transition-colors"
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 rounded-xl bg-[#FF8C69] text-black font-medium text-sm hover:bg-[#ff9d7f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Subscribing..." : "Notify Me"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm">{message}</p>
              )}
            </form>
          )}

          <button
            onClick={handleClose}
            className="mt-4 text-neutral-500 text-xs hover:text-neutral-400 transition-colors"
          >
            No thanks, I&apos;ll check back later
          </button>
        </div>
      </div>
    </div>
  );
}
