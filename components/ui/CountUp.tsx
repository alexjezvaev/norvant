"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function formatValue(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function CountUp({
  to,
  suffix = "",
  durationMs = 1600,
  className,
}: CountUpProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, to]);

  useEffect(() => {
    if (!started || reducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      setValue(to * easeOutCubic(progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, started, to, durationMs]);

  const shown = reducedMotion ? to : value;

  return (
    <span ref={ref} className={className}>
      {formatValue(shown)}
      {suffix}
    </span>
  );
}
