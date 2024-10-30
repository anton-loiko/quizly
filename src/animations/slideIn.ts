import { gsap } from "gsap"

export const slideIn = (element: HTMLElement | null, duration = 1) => {
  if (element) {
    gsap.fromTo(
      element,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration, ease: "power3.out" },
    )
  }
}
