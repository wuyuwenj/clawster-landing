"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import Image from "next/image";

type Mood =
  | "idle"
  | "happy"
  | "sleep"
  | "walking"
  | "startle"
  | "peek"
  | "side-eye"
  | "doze"
  | "proud"
  | "huff"
  | "spin"
  | "crossed";

const MOOD_SVGS: Record<Mood, string> = {
  idle: "/animations/idle.svg",
  happy: "/animations/happy.svg",
  sleep: "/animations/sleep.svg",
  walking: "/animations/walking.svg",
  startle: "/animations/startle.svg",
  peek: "/animations/peek.svg",
  "side-eye": "/animations/side-eye.svg",
  doze: "/animations/doze.svg",
  proud: "/animations/proud.svg",
  huff: "/animations/huff.svg",
  spin: "/animations/spin.svg",
  crossed: "/animations/crossed.svg",
};

// Moods to cycle through when poked
const POKE_REACTIONS: Mood[] = [
  "happy",
  "proud",
  "startle",
  "spin",
  "huff",
  "crossed",
  "peek",
  "side-eye",
];

// Speech bubbles for each mood
const MOOD_MESSAGES: Partial<Record<Mood, string>> = {
  happy: "Hi there!",
  proud: "Look at me!",
  startle: "!",
  spin: "Wheee!",
  huff: "Hmph!",
  crossed: "...",
  peek: "Boo!",
  "side-eye": "I see you",
};

const MOOD_DURATION: Partial<Record<Mood, number>> = {
  startle: 800,
  happy: 1500,
  peek: 1500,
  proud: 1500,
  huff: 1500,
  spin: 1200,
  crossed: 1500,
  "side-eye": 1500,
};

export default function InteractiveClawster() {
  const [mood, setMood] = useState<Mood>("idle");
  const [isDragging, setIsDragging] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sleepTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastInteractionRef = useRef<number>(Date.now());
  const pokeIndexRef = useRef<number>(0);

  // Motion values for position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Reset idle timer - only resets the timestamp and clears timers
  const resetIdleTimer = useCallback(() => {
    lastInteractionRef.current = Date.now();

    if (sleepTimerRef.current) {
      clearTimeout(sleepTimerRef.current);
      sleepTimerRef.current = null;
    }

    // Reset to idle if was sleeping
    setMood("idle");
  }, []);

  // Sleep progression effect - separate from resetIdleTimer
  useEffect(() => {
    // Don't start sleep timer if dragging or already in sleep states
    if (isDragging || mood === "sleep" || mood === "doze") {
      return;
    }

    // Start doze timer
    sleepTimerRef.current = setTimeout(() => {
      setMood("doze");
    }, 5000);

    return () => {
      if (sleepTimerRef.current) {
        clearTimeout(sleepTimerRef.current);
      }
    };
  }, [isDragging, mood]);

  // Transition from doze to sleep
  useEffect(() => {
    if (mood === "doze" && !isDragging) {
      sleepTimerRef.current = setTimeout(() => {
        setMood("sleep");
      }, 5000);

      return () => {
        if (sleepTimerRef.current) {
          clearTimeout(sleepTimerRef.current);
        }
      };
    }
  }, [mood, isDragging]);

  // Set temporary mood then return to idle
  const setTemporaryMood = useCallback(
    (newMood: Mood, returnTo: Mood = "idle") => {
      setMood(newMood);
      const duration = MOOD_DURATION[newMood] || 1000;

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = setTimeout(() => {
        setMood(returnTo);
        resetIdleTimer();
      }, duration);
    },
    [resetIdleTimer]
  );

  // Handle poke/click
  const handlePoke = useCallback(() => {
    if (isDragging) return;

    resetIdleTimer();

    // Get the next mood in the rotation
    const nextMood = POKE_REACTIONS[pokeIndexRef.current];
    pokeIndexRef.current = (pokeIndexRef.current + 1) % POKE_REACTIONS.length;

    // Set the mood
    setTemporaryMood(nextMood);

    // Add a little bounce
    const currentY = y.get();
    animate(y, currentY - 20, {
      type: "spring",
      stiffness: 500,
      damping: 10,
    });
  }, [isDragging, resetIdleTimer, setTemporaryMood, y]);

  // Handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
    setMood("walking");
    resetIdleTimer();
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    setTemporaryMood("happy");
  };

  // Handle mouse enter (peek)
  const handleMouseEnter = () => {
    if (!isDragging && mood === "idle") {
      setTemporaryMood("peek");
    }
  };

  // Cursor following behavior
  useEffect(() => {
    if (typeof window === "undefined") return;

    let followInterval: NodeJS.Timeout | null = null;
    let mouseX = window.innerWidth - 100;
    let mouseY = window.innerHeight - 100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Check if should follow cursor (when idle for 8+ seconds)
    followInterval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteractionRef.current;

      if (timeSinceInteraction > 8000 && !isDragging && mood === "sleep") {
        // Wake up and look
        setMood("side-eye");
        setIsFollowing(true);
      }

      if (isFollowing && !isDragging) {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Only follow if cursor is far enough
        if (distance > 200) {
          const speed = 0.02;
          const newX = x.get() + deltaX * speed;
          const newY = y.get() + deltaY * speed;

          // Boundary constraints
          const maxX = window.innerWidth - 150;
          const maxY = window.innerHeight - 150;

          x.set(Math.max(-window.innerWidth + 200, Math.min(maxX, newX)));
          y.set(Math.max(-window.innerHeight + 200, Math.min(maxY, newY)));

          if (mood !== "walking") {
            setMood("walking");
          }
        } else {
          if (mood === "walking" && isFollowing) {
            setMood("happy");
            setIsFollowing(false);
            resetIdleTimer();
          }
        }
      }
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (followInterval) clearInterval(followInterval);
    };
  }, [isDragging, isFollowing, mood, x, y, resetIdleTimer]);

  // Initialize idle timer on mount
  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, [resetIdleTimer]);

  return (
    <>
      {/* Invisible constraint boundary covering the viewport */}
      <div
        ref={constraintsRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9998 }}
      />

      <motion.div
        ref={containerRef}
        className="fixed bottom-8 right-8 z-[9999] cursor-grab active:cursor-grabbing select-none"
        style={{ x: smoothX, y: smoothY }}
        drag
        dragConstraints={constraintsRef}
        dragMomentum={true}
        dragElastic={0.05}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handlePoke}
        onMouseEnter={handleMouseEnter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#FF8C69]/20 rounded-full blur-xl scale-150 pointer-events-none" />

      {/* Speech bubble on hover */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: MOOD_MESSAGES[mood] ? 1 : 0,
          y: MOOD_MESSAGES[mood] ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
      >
        {MOOD_MESSAGES[mood] || ""}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 border-r border-b border-white/20 rotate-45" />
      </motion.div>

      {/* The Clawster */}
      <motion.div
        className="relative w-24 h-24 md:w-32 md:h-32"
        animate={{
          rotate: mood === "spin" ? 360 : isDragging ? [0, -5, 5, -5, 5, 0] : 0,
          y: mood === "sleep" || mood === "doze" ? [0, 3, 0] : 0,
          scale: mood === "proud" ? [1, 1.1, 1] : mood === "huff" ? [1, 0.95, 1] : 1,
        }}
        transition={{
          rotate: mood === "spin"
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 0.5, repeat: isDragging ? Infinity : 0 },
          y: {
            duration: 2,
            repeat: mood === "sleep" || mood === "doze" ? Infinity : 0,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.3,
            repeat: mood === "proud" || mood === "huff" ? 2 : 0,
          },
        }}
      >
        <Image
          src={MOOD_SVGS[mood]}
          alt={`Clawster - ${mood}`}
          fill
          className="object-contain drop-shadow-lg"
          priority
          draggable={false}
        />
      </motion.div>

      {/* Mood indicator (small text) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 capitalize">
        {mood === "side-eye" ? "watching you..." : ""}
        {mood === "sleep" ? "zzz..." : ""}
        {mood === "walking" && isFollowing ? "coming!" : ""}
      </div>
    </motion.div>
    </>
  );
}
