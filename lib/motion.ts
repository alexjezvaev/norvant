/** Shared easing — matches Reveal, Stagger, gallery, nav, modals. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const motionTransition = {
  overlay: { duration: 0.3, ease: EASE },
  panel: { duration: 0.35, ease: EASE },
  item: { duration: 0.4, ease: EASE },
  staggerItem: { duration: 0.45, ease: EASE },
  reveal: { duration: 0.55, ease: EASE },
} as const;
