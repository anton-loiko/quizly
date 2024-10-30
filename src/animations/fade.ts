import { gsap } from "gsap"

export const fadeInOut = (
  element: HTMLElement | SVGSVGElement | null,
  duration = 1,
  delay = 0,
) => {
  if (element) {
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      },
    )
  }
}
