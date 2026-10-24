"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from "framer-motion"

interface CinematicSectionProps {
  lines: string[]
  className?: string
}

export function CinematicSection({ lines, className = "" }: CinematicSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  })

  const yTransform = useTransform(smoothProgress, [0, 1], [-40, 40])
  const textStyle = useMotionTemplate`translateY(${yTransform}px) rotateX(12deg)`

  return (
    <section
      ref={containerRef}
      className={`relative flex min-h-screen min-h-[100dvh] items-center justify-center overflow-visible ${className}`}
    >
      <div
        className="flex w-full max-w-4xl flex-col items-center gap-3 text-center px-8 py-10"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          style={{ transform: textStyle, transformStyle: "preserve-3d" }}
          className="flex flex-col items-center gap-6"
        >
          {lines.map((line, i) => (
            <p
              key={i}
              className="cinematic-text block text-pretty font-serif italic text-base leading-relaxed md:text-xl cursor-pointer"
            >
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
