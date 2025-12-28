
"use client"

import React, { useEffect, useRef } from 'react'

interface BinaryParticle {
  x: number
  y: number
  char: string
  speed: number
  opacity: number
  size: number
  trail: { x: number; y: number; opacity: number }[]
}

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<BinaryParticle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor(window.innerWidth / 20)
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          char: Math.random() < 0.5 ? '0' : '1',
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          size: Math.random() * 8 + 12,
          trail: []
        })
      }
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle) => {
        particle.y += particle.speed
        
        particle.trail.unshift({ x: particle.x, y: particle.y, opacity: particle.opacity })
        if (particle.trail.length > 5) {
          particle.trail.pop()
        }
        
        if (particle.y > canvas.height + 20) {
          particle.y = -20
          particle.x = Math.random() * canvas.width
          particle.char = Math.random() < 0.5 ? '0' : '1'
          particle.speed = Math.random() * 3 + 1
          particle.opacity = Math.random() * 0.8 + 0.2
          particle.size = Math.random() * 8 + 12
          particle.trail = []
        }
        
        particle.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (index / particle.trail.length) * 0.3
          ctx.fillStyle = `rgba(0, 255, 150, ${trailOpacity})`
          ctx.font = `${particle.size * (index / particle.trail.length)}px monospace`
          ctx.fillText(particle.char, point.x, point.y)
        })
        
        ctx.fillStyle = `rgba(0, 255, 150, ${particle.opacity})`
        ctx.shadowColor = "#00ff96"
        ctx.shadowBlur = 5
        ctx.font = `${particle.size}px monospace`
        ctx.fillText(particle.char, particle.x, particle.y)
        ctx.shadowBlur = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      <canvas
        ref={canvasRef}
        style={{
          background: "transparent",
          display: 'block'
        }}
      />
    </div>
  )
}

export { DigitalRain }

