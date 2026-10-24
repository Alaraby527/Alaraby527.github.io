"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const CHARS = "!@#$%^&*():{};|,.<>/?abcdefghijklmnopqrstuvwxyz0123456789"

interface ScrambleTextProps {
  text: string
  className?: string
  delay?: number
}

export function ScrambleText({ text, className = "", delay = 0 }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const [display, setDisplay] = useState(text)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    let frame = 0
    const revealPerFrame = 0.5
    const totalFrames = Math.ceil(text.length / revealPerFrame)
    let revealed = 0

    const timer = setInterval(() => {
      frame++
      revealed = Math.min(frame * revealPerFrame, text.length)
      const revealCount = Math.floor(revealed)

      let output = ""
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) {
          output += text[i]
        } else if (i === revealCount) {
          output += text[i]
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setDisplay(output)

      if (frame >= totalFrames + 5) {
        setDisplay(text)
        clearInterval(timer)
      }
    }, 25)

    return () => clearInterval(timer)
  }, [inView, text])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {display}
    </motion.span>
  )
}
