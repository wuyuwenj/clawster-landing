"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "1",
    title: "Welcome",
    description: "Meet Clawster and learn what it can do.",
    color: "#FF8C69",
  },
  {
    step: "2",
    title: "Workspace",
    description: "Choose an existing OpenClaw workspace or create a new one.",
    color: "#008080",
  },
  {
    step: "3",
    title: "Memory",
    description: "Inherit past conversations or start with a clean slate.",
    color: "#6366f1",
  },
  {
    step: "4",
    title: "Connection",
    description: "Auto-detect and connect to your local OpenClaw gateway.",
    color: "#22c55e",
  },
  {
    step: "5",
    title: "Personality",
    description:
      "Edit IDENTITY.md and SOUL.md to shape how Clawster behaves.",
    color: "#a855f7",
  },
  {
    step: "6",
    title: "Watch",
    description:
      "Choose whether Clawster can see your active app and window titles.",
    color: "#eab308",
  },
  {
    step: "7",
    title: "Hotkeys",
    description:
      "Set custom keyboard shortcuts for chat, screenshots, and more.",
    color: "#3b82f6",
  },
  {
    step: "8",
    title: "Ready",
    description: "Review your setup and wake up Clawster.",
    color: "#ef4444",
  },
];

/* ── Mockup UI for each onboarding step ── */

function MockToggle({ on }: { on: boolean }) {
  return (
    <div
      className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors ${on ? "bg-[#FF8C69]" : "bg-neutral-700"}`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform ${on ? "translate-x-4" : ""}`}
      />
    </div>
  );
}

function MockInput({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[10px] text-neutral-500 mb-1">{label}</div>
      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-[11px] text-neutral-300 font-mono">
        {value}
      </div>
    </div>
  );
}

function MockCard({
  selected,
  icon,
  title,
  path,
  badge,
  badgeColor,
}: {
  selected: boolean;
  icon: React.ReactNode;
  title: string;
  path: string;
  badge: string;
  badgeColor: string;
}) {
  return (
    <div
      className={`rounded-xl border p-4 transition-all ${selected ? "border-[#FF8C69] bg-[#FF8C69]/5 shadow-[0_0_12px_rgba(255,140,105,0.15)]" : "border-white/10 bg-neutral-900/50"}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-neutral-800/80 border border-white/5 flex items-center justify-center text-neutral-400">
            {icon}
          </div>
          <span className="text-xs font-medium text-white">{title}</span>
        </div>
        <span
          className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: `${badgeColor}20`, color: badgeColor }}
        >
          {badge}
        </span>
      </div>
      <div className="text-[10px] text-neutral-500 font-mono">{path}</div>
    </div>
  );
}

function StepWelcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="relative">
        <div className="absolute inset-0 bg-[#FF8C69]/20 blur-3xl rounded-full scale-150" />
        <Image
          src="/animations/happy.svg"
          alt="Clawster"
          width={100}
          height={100}
          className="relative z-10"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-1">
          Welcome to Clawster
        </h3>
        <p className="text-[11px] text-neutral-500">
          Let&apos;s get your AI companion set up
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {[
          {
            label: "Watches workflow",
            icon: (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            label: "Answers questions",
            icon: (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            ),
          },
          {
            label: "Monitors files",
            icon: (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 16h4" />
              </svg>
            ),
          },
          {
            label: "Custom personality",
            icon: (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.862 1.782 5.413 3.5 7.5.829.998 1.5 2.5 1.5 3.5h4c0-1 .671-2.502 1.5-3.5C17.218 14.413 19 11.862 19 9a7 7 0 00-7-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6M10 20h4M9 12a1 1 0 102 0 1 1 0 00-2 0zM13 12a1 1 0 102 0 1 1 0 00-2 0z" />
              </svg>
            ),
          },
        ].map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-2 bg-neutral-800/50 border border-white/5 rounded-lg px-3 py-2"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/5 flex items-center justify-center text-neutral-400 shrink-0">
              {f.icon}
            </div>
            <span className="text-[10px] text-neutral-300">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepWorkspace() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-4">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Choose Your Workspace
        </h3>
        <p className="text-[11px] text-neutral-500">
          Where should Clawster store its personality and memory?
        </p>
      </div>
      <div className="flex flex-col gap-3 flex-1 justify-center">
        <MockCard
          selected={false}
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          }
          title="Use OpenClaw Workspace"
          path="~/.openclaw/workspace/"
          badge="Detected"
          badgeColor="#22c55e"
        />
        <MockCard
          selected={true}
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          }
          title="Create Clawster Workspace"
          path="~/.openclaw/workspace-clawster/"
          badge="New"
          badgeColor="#FF8C69"
        />
      </div>
    </div>
  );
}

function StepMemory() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-4">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Migrate Your Memory?
        </h3>
        <p className="text-[11px] text-neutral-500">
          Bring over conversations from your existing workspace
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        {/* Toggle */}
        <div className="flex bg-neutral-800 rounded-lg p-1 text-[11px]">
          <div className="px-4 py-1.5 bg-neutral-700 rounded-md text-white font-medium">
            Inherit Memory
          </div>
          <div className="px-4 py-1.5 text-neutral-400">Start Fresh</div>
        </div>
        {/* Info box */}
        <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 w-full max-w-xs">
          <svg className="w-8 h-8 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-xs text-neutral-400 text-center">
            Copy existing conversations to your new workspace
          </span>
        </div>
      </div>
    </div>
  );
}

function StepConnection() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-4">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Connect to OpenClaw
        </h3>
        <p className="text-[11px] text-neutral-500">
          Connect Clawster to your local AI gateway
        </p>
      </div>
      {/* Auto-detect banner */}
      <div className="flex items-center gap-2 bg-[#008080]/10 border border-[#008080]/20 rounded-lg px-3 py-2">
        <svg className="w-4 h-4 text-[#008080] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[10px] text-[#008080]">
          Configuration auto-detected from ~/.openclaw/openclaw.json
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center">
        <MockInput label="Gateway URL" value="http://127.0.0.1:18789" />
        <MockInput label="Gateway Token (Optional)" value="••••••••••••" />
        {/* Test button */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1.5 bg-[#008080]/20 border border-[#008080]/30 text-[#008080] rounded-lg px-3 py-1.5 text-[11px] font-medium">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Connected
          </div>
        </div>
      </div>
    </div>
  );
}

function StepPersonality() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-3">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Customize Personality
        </h3>
        <p className="text-[11px] text-neutral-500">
          Define who Clawster is and how it behaves
        </p>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-white/5 text-[11px]">
        <div className="px-3 py-2 text-white font-medium border-b-2 border-[#FF8C69]">
          IDENTITY.md
        </div>
        <div className="px-3 py-2 text-neutral-500">SOUL.md</div>
      </div>
      {/* Editor */}
      <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-lg p-3 font-mono text-[10px] text-neutral-400 leading-relaxed overflow-hidden">
        <div className="text-neutral-500"># Who am I?</div>
        <div className="mt-1">
          <span className="text-[#FF8C69]">Name:</span> Clawster
        </div>
        <div>
          <span className="text-[#FF8C69]">Species:</span> Animated Lobster
        </div>
        <div>
          <span className="text-[#FF8C69]">Vibe:</span> Playful, helpful
        </div>
        <div className="mt-2 text-neutral-500"># Appearance</div>
        <div className="mt-1">Salmon-colored lobster with</div>
        <div>teal belt and expressive eyes.</div>
        <div className="mt-2 text-neutral-500"># Actions</div>
        <div className="mt-1">
          <span className="text-[#008080]">set_mood</span>,{" "}
          <span className="text-[#008080]">move_to</span>,{" "}
          <span className="text-[#008080]">snip</span>,{" "}
          <span className="text-[#008080]">wave</span>
        </div>
      </div>
    </div>
  );
}

function StepWatch() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-4">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Watch Preferences
        </h3>
        <p className="text-[11px] text-neutral-500">
          Control what Clawster can see on your screen
        </p>
      </div>
      {/* Permission notice */}
      <div className="flex items-center gap-2 bg-neutral-900/50 border border-white/5 rounded-lg px-3 py-2">
        <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span className="text-[10px] text-neutral-400">
          Requires Accessibility permission on macOS
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
        {/* Toggle 1 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-white">
              Watch Active Application
            </div>
            <div className="text-[10px] text-neutral-500">
              Know which app you&apos;re currently using
            </div>
          </div>
          <MockToggle on={true} />
        </div>
        {/* Toggle 2 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-white">
              Send Window Titles
            </div>
            <div className="text-[10px] text-neutral-500">
              Share window titles for context
            </div>
          </div>
          <MockToggle on={false} />
        </div>
      </div>
    </div>
  );
}

function StepHotkeys() {
  return (
    <div className="flex flex-col h-full px-8 py-6 gap-4">
      <div>
        <h3 className="text-base font-semibold text-white mb-1">
          Keyboard Shortcuts
        </h3>
        <p className="text-[11px] text-neutral-500">
          Customize hotkeys to quickly access Clawster
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center divide-y divide-white/5">
        {[
          {
            name: "Open Chat",
            desc: "Summon the quick chat bar",
            keys: ["Cmd", "Shift", "Space"],
          },
          {
            name: "Capture Screen",
            desc: "Take a screenshot and ask about it",
            keys: ["Cmd", "Shift", "/"],
          },
          {
            name: "Open Assistant",
            desc: "Open the full assistant panel",
            keys: ["Cmd", "Shift", "A"],
          },
        ].map((h) => (
          <div key={h.name} className="flex items-center justify-between py-3">
            <div>
              <div className="text-xs font-medium text-white">{h.name}</div>
              <div className="text-[10px] text-neutral-500">{h.desc}</div>
            </div>
            <div className="flex items-center gap-1">
              {h.keys.map((k) => (
                <kbd
                  key={k}
                  className="bg-neutral-800 border border-white/10 text-[10px] text-neutral-300 px-2 py-1 rounded-md font-mono"
                >
                  {k}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Info */}
      <div className="flex items-center gap-2 bg-neutral-900/50 border border-white/5 rounded-lg px-3 py-2">
        <svg className="w-4 h-4 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[10px] text-neutral-400">
          Click a shortcut and press your desired key combination to change it.
        </span>
      </div>
    </div>
  );
}

function StepComplete() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="relative">
        <div className="absolute inset-0 bg-[#FF8C69]/20 blur-3xl rounded-full scale-150" />
        <Image
          src="/animations/proud.svg"
          alt="Clawster celebrating"
          width={100}
          height={100}
          className="relative z-10"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-1">
          Clawster is Ready!
        </h3>
        <p className="text-[11px] text-neutral-500">
          Everything is configured and ready to go.
        </p>
      </div>
      {/* Summary */}
      <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-4 w-full max-w-xs text-[11px] flex flex-col gap-2">
        {[
          "Workspace: ~/.openclaw/workspace-clawster/",
          "Connected to http://127.0.0.1:18789",
          "Watching Active App",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#008080] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neutral-400 font-mono truncate">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-neutral-500">
        Press{" "}
        <kbd className="bg-neutral-800 border border-white/10 px-1.5 py-0.5 rounded text-[9px] text-neutral-300 font-mono">
          Cmd+Shift+Space
        </kbd>{" "}
        to open chat anytime
      </p>
    </div>
  );
}

const stepComponents = [
  StepWelcome,
  StepWorkspace,
  StepMemory,
  StepConnection,
  StepPersonality,
  StepWatch,
  StepHotkeys,
  StepComplete,
];

/* ── Carousel ── */

export default function OnboardingCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    if (active < steps.length - 1) goTo(active + 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    if (active > 0) goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  const current = steps[active];
  const StepComponent = stepComponents[active];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">
      {/* Carousel */}
      <div
        className="relative rounded-2xl border border-white/10 bg-[#1A1A1A] overflow-hidden shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* macOS-style title bar */}
        <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[11px] text-neutral-500">Clawster Setup</span>
          </div>
          <div className="w-12" />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={active === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-default hover:bg-black/70 transition-all"
          aria-label="Previous step"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          disabled={active === steps.length - 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-default hover:bg-black/70 transition-all"
          aria-label="Next step"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Step content area */}
        <div className="relative overflow-hidden bg-[#0f0f0f]" style={{ height: 400 }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <StepComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#1a1a1a]">
          <button className="text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors">
            Skip Setup
          </button>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `${current.color}20`,
                color: current.color,
              }}
            >
              Step {current.step} of 8
            </span>
            <div className="bg-[#FF8C69] text-black text-[11px] font-medium px-4 py-1.5 rounded-lg">
              {active === steps.length - 1 ? "Wake Up Clawster" : "Continue"}
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <h3 className="text-base font-semibold text-white mb-1">
          {current.title}
        </h3>
        <p className="text-sm text-neutral-400">{current.description}</p>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative p-1"
            aria-label={`Go to step ${i + 1}: ${step.title}`}
          >
            <div
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  i === active ? step.color : "rgba(255,255,255,0.15)",
                transform: i === active ? "scale(1.3)" : "scale(1)",
                boxShadow:
                  i === active ? `0 0 8px ${step.color}60` : "none",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
