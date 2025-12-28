"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-pulse-glow group"
      aria-label="Scroll to top"
    >
      <Rocket className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </Button>
  )
}
