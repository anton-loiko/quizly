import { gsap } from "gsap"

export const fadeInOut = (
  element: HTMLElement | SVGSVGElement | null,
  duration = 1,
  delay = 0,
) => {
  if (!element) {
    return null
  }

  return gsap.fromTo(
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

export const fadeIn = (
  element: HTMLElement | SVGSVGElement | null,
  duration = 1,
  delay = 0,
) => {
  if (!element) {
    return null
  }

  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      yoyo: true,
      ease: "power1.in",
    },
  )
}
