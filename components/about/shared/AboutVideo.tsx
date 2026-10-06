"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type AboutVideoProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function AboutVideo({
  src,
  label,
  poster,
  className,
}: AboutVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reducedMotion, src]);

  return (
    <div
      className={cx(
        "relative h-full min-h-72 overflow-hidden md:min-h-0",
        className,
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover object-center"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}
