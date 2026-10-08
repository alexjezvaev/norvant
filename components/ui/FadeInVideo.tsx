"use client";

import { EASE, motionTransition } from "@/lib/motion";
import { useReducedMotion } from "motion/react";
import {
  useState,
  type ComponentPropsWithoutRef,
  type Ref,
} from "react";

type FadeInVideoProps = Omit<
  ComponentPropsWithoutRef<"video">,
  "onCanPlay" | "onLoadedData"
> & {
  ref?: Ref<HTMLVideoElement>;
};

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function FadeInVideo({
  className,
  ref,
  style,
  ...props
}: FadeInVideoProps) {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const visible = Boolean(ready || reduceMotion);

  function markReady(video: HTMLVideoElement) {
    video.muted = true;
    setReady(true);
    if (video.autoplay && video.paused) {
      void video.play().catch(() => {});
    }
  }

  return (
    <video
      {...props}
      ref={(node) => {
        assignRef(ref, node);
        if (node && node.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          markReady(node);
        }
      }}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: reduceMotion
          ? undefined
          : `opacity ${motionTransition.reveal.duration}s cubic-bezier(${EASE.join(",")})`,
      }}
      onCanPlay={(event) => markReady(event.currentTarget)}
      onLoadedData={(event) => markReady(event.currentTarget)}
      onPlaying={(event) => markReady(event.currentTarget)}
    />
  );
}
