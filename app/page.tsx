import Image from "next/image";
import Link from "next/link";
import InteractiveClawster from "@/components/InteractiveClawster";
import EmailForm from "@/components/EmailForm";
import NewsletterPopup from "@/components/NewsletterPopup";

// Mood data with all 12 SVG animations
const moods = [
  { name: "Happy", svg: "/animations/happy.svg", color: "FF8C69" },
  { name: "Crossed", svg: "/animations/crossed.svg", color: "008080" },
  { name: "Sleep", svg: "/animations/sleep.svg", color: "6366f1" },
  { name: "Idle", svg: "/animations/idle.svg", color: "a855f7" },
  { name: "Peek", svg: "/animations/peek.svg", color: "22c55e" },
  { name: "Side Eye", svg: "/animations/side-eye.svg", color: "eab308" },
  { name: "Doze", svg: "/animations/doze.svg", color: "3b82f6" },
  { name: "Startle", svg: "/animations/startle.svg", color: "ef4444" },
  { name: "Proud", svg: "/animations/proud.svg", color: "f97316" },
  { name: "Huff", svg: "/animations/huff.svg", color: "ec4899" },
  { name: "Spin", svg: "/animations/spin.svg", color: "14b8a6" },
  { name: "Walking", svg: "/animations/walking.svg", color: "8b5cf6" },
];

export default function LandingPage() {
  return (
    <div className="bg-[#121212] text-neutral-300 antialiased selection:bg-[#FF8C69]/30 selection:text-white flex flex-col min-h-screen">
      {/* Newsletter Popup */}
      <NewsletterPopup />

      {/* Interactive Clawster Pet */}
      <InteractiveClawster />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/animations/idle.svg"
              alt="Clawster"
              width={28}
              height={28}
              className="text-[#FF8C69]"
            />
            <span className="text-sm font-semibold tracking-tighter text-white uppercase">
              Clawster
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block"
            >
              Features
            </Link>
            <Link
              href="https://github.com/openclaw/openclaw"
              className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block"
            >
              OpenClaw
            </Link>
            <Link
              href="https://github.com/wuyuwenj/clawster"
              className="flex items-center gap-2 text-sm font-medium text-black bg-white hover:bg-neutral-200 px-4 py-1.5 rounded-full transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-glow">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#008080]/30 bg-[#008080]/10 text-[#008080] text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008080]"></span>
            </span>
            2nd Place @ humans& hackathon
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl mx-auto leading-tight mb-6">
            Meet Clawster. <br className="hidden md:block" /> Your Screen-Aware{" "}
            <span className="text-[#FF8C69]">AI Companion.</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            An AI pet that watches your screen, checks live info, and craves
            your attention. It blinks, scuttles toward you, and helps you get
            things done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="https://github.com/wuyuwenj/clawster"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF8C69] text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-[#ff9d7f] transition-colors shadow-[0_0_20px_rgba(255,140,105,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Star on GitHub
            </Link>
            <a
              href="https://github.com/wuyuwenj/clawster/releases/download/v0.1.3/Clawster-0.1.3-arm64.dmg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l4-4m-4 4l-4-4m8 8H8" />
              </svg>
              Download for Mac
            </a>
          </div>

          {/* Demo Video */}
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#1A1A1A] p-2 shadow-2xl">
            <div className="rounded-xl overflow-hidden bg-black aspect-video relative border border-white/5">
              <video
                src="/clawsterDemo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid (Moods) */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Meet the Moods
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              12 interactive states that react to your environment and
              interactions. Hover to preview.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {moods.map((mood) => (
              <div
                key={mood.name}
                className="group bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.03] card-hover relative overflow-hidden"
                style={{
                  ["--mood-color" as string]: `#${mood.color}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, #${mood.color}15, transparent 70%)`,
                  }}
                ></div>
                <Image
                  src={mood.svg}
                  alt={mood.name}
                  width={64}
                  height={64}
                  className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <span className="text-xs font-medium text-neutral-500 group-hover:text-white mt-4 transition-colors tracking-tight absolute bottom-4">
                  {mood.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Z-Pattern */}
      <section id="features" className="py-24 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {/* Feature 1 - Quick Chat */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="h-10 w-10 rounded-lg bg-[#FF8C69]/10 border border-[#FF8C69]/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#FF8C69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Context-Aware Quick Chat
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                Never lose your flow state. Press{" "}
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white border border-white/20 font-mono">
                  Cmd+Shift+Space
                </kbd>{" "}
                anywhere to summon Clawster. It instantly knows what app you&apos;re
                using and provides contextual, screen-aware help.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl border border-white/10 p-2 shadow-2xl relative transform md:-rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[4/3] relative">
                  <Image
                    src="/screenshots/chat-popup.png"
                    alt="Quick Chat Feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Screenshot Questions */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="h-10 w-10 rounded-lg bg-[#008080]/10 border border-[#008080]/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Screenshot Questions
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                Stuck on a bizarre bug? Press{" "}
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white border border-white/20 font-mono">
                  Cmd+Shift+/
                </kbd>{" "}
                to snap a section of your screen. Clawster will analyze the
                image structure, read the code, and give you the answer
                instantly.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-bl from-[#1A1A1A] to-[#121212] rounded-2xl border border-white/10 p-2 shadow-2xl relative transform md:rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[4/3] relative">
                  <Image
                    src="/screenshots/quick-chat.png"
                    alt="Screenshot Analysis Feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - OpenClaw Integration */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Deep Dives with OpenClaw
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                Powered entirely by your local OpenClaw gateway for maximum
                privacy. Double-click your pet to open the full assistant panel
                for extended architecture conversations and setting tweaks.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl border border-white/10 p-2 shadow-2xl relative transform md:-rotate-1 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[4/3] relative">
                  <Image
                    src="/screenshots/assistant.png"
                    alt="OpenClaw Deep Dive Feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#1A1A1A]/30 relative overflow-hidden">
        {/* Background subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Run it locally. Customize its Soul.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Clawster connects directly to your local OpenClaw API. You have
              complete control over its identity, rules, and behavior via local
              configuration files.
            </p>
          </div>

          {/* Terminal Mockup */}
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs text-neutral-500 font-mono">
                ~/workspace/clawster
              </div>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
              <div className="flex items-center gap-4 mb-1">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#FF8C69]">git</span> clone
                  https://github.com/wuyuwenj/clawster.git
                </span>
              </div>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#FF8C69]">cd</span> clawster
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#FF8C69]">npm</span> install
                </span>
              </div>

              <div className="text-neutral-500 mb-1">
                # Set up Clawster&apos;s personality from your OpenClaw workspace
              </div>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#008080]">cp</span>{" "}
                  openclaw/IDENTITY.md ~/.openclaw/workspace/
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#008080]">cp</span> openclaw/SOUL.md
                  ~/.openclaw/workspace/
                </span>
              </div>

              <div className="flex items-center gap-4 mb-1">
                <span className="text-neutral-500 select-none">$</span>
                <span>
                  <span className="text-[#FF8C69]">npm</span> run dev
                </span>
              </div>
              <div className="text-green-400 mt-2">
                &gt; clawster@1.0.0 dev
                <br />
                &gt; vite
                <br />
                <br />
                VITE v5.0.0 ready in 250 ms
                <br />
                <br />
                ➜ Local: http://localhost:5173/
                <br />
                ➜ Network: use --host to expose
                <br />➜ Gateway: Connected to OpenClaw at port 11434
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Make it a strict code reviewer, a cheerful cheerleader, or a
            sarcastic debugger. The choice is yours.
          </p>
        </div>
      </section>

      {/* Footer & CTA */}
      <footer className="border-t border-white/5 mt-auto bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Get notified when Clawster is ready
          </h2>
          <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">
            We&apos;re polishing Clawster. Drop your email and be the first to know when it launches.
          </p>

          <div className="relative mb-12">
            <EmailForm />
          </div>

          <div className="flex items-center justify-center gap-4 text-neutral-500 text-sm mb-12">
            <span className="h-px w-12 bg-white/10"></span>
            <span>or</span>
            <span className="h-px w-12 bg-white/10"></span>
          </div>

          <Link
            href="https://github.com/wuyuwenj/clawster"
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium text-sm px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors mb-20 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Clone Repository
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/animations/idle.svg"
                  alt="Clawster"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-semibold tracking-tighter text-white uppercase">
                  Clawster
                </span>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Your local, screen-aware AI companion. Built for developers.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-4">Resources</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="https://github.com/wuyuwenj/clawster#readme"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/openclaw/openclaw"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    OpenClaw Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/wuyuwenj/clawster/tree/main/openclaw"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    Identity Setup
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-4">Project</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="https://github.com/wuyuwenj/clawster"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    GitHub Repository
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              © 2025 Clawster. Open source under MIT.
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-600">
              <span>Designed for tinkerers.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
