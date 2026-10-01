"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function formatValue(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function CountUp({
  to,
  suffix = "",
  durationMs = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

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
  }, [to]);

  useEffect(() => {
    if (!started) return;

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
  }, [started, to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatValue(value)}
      {suffix}
    </span>
  );
}
