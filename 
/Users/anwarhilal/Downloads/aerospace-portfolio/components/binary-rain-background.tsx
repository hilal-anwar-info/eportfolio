
"use client"

import { useEffect, useRef } from "react"

export function BinaryRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const dropsRef = useRef<any[]>([])
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize binary rain drops
    const initDrops = () => {
      dropsRef.current = []
      const dropCount = Math.min(30, Math.floor(canvas.width / 50))
      
      for (let i = 0; i < dropCount; i++) {
        dropsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: Math.random() < 0.5 ? '0' : '1',
          opacity: Math.random() * 0.8 + 0.2,
          size: Math.random() * 8 + 12,
          trail: []
        })
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = 50
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3
        })
      }
    }

    initDrops()
    initParticles()

    const drawSatellite = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      // Moving Earth and satellite across the background
      const scrollX = (time * 50) % (width + 200) // Horizontal scrolling
      const earthX = width - scrollX
      const earthY = height * 0.7
      const earthRadius = Math.min(width, height) * 0.25
      
      // Satellite flying above Earth
      const satelliteX = earthX + Math.cos(time * 2) * earthRadius * 1.5
      const satelliteY = earthY - earthRadius - 50 + Math.sin(time * 3) * 20
      const angle = time * 0.8

      // Draw Earth
      ctx.save()
      ctx.translate(earthX, earthY)
      
      // Earth gradient
      const earthGradient = ctx.createRadialGradient(0, 0, earthRadius * 0.3, 0, 0, earthRadius)
      earthGradient.addColorStop(0, "#4A90E2")
      earthGradient.addColorStop(0.7, "#1E3A8A")
      earthGradient.addColorStop(1, "#0F172A")
      ctx.fillStyle = earthGradient
      ctx.shadowColor = "#1E3A8A"
      ctx.shadowBlur = 20
      ctx.beginPath()
      ctx.arc(0, 0, earthRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
      
      // Earth atmosphere glow
      const atmosphereGradient = ctx.createRadialGradient(0, 0, earthRadius, 0, 0, earthRadius * 1.2)
      atmosphereGradient.addColorStop(0, "rgba(74, 144, 226, 0.3)")
      atmosphereGradient.addColorStop(1, "rgba(74, 144, 226, 0)")
      ctx.fillStyle = atmosphereGradient
      ctx.beginPath()
      ctx.arc(0, 0, earthRadius * 1.2, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.restore()

      // Draw satellite above Earth
      ctx.save()
      ctx.translate(satelliteX, satelliteY)
      ctx.rotate(angle * 0.1)

      // Satellite body
      ctx.fillStyle = "#00ff96"
      ctx.shadowColor = "#00ff96"
      ctx.shadowBlur = 15
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      // Solar panels
      ctx.fillStyle = "#0080ff"
      ctx.fillRect(-25, -4, 12, 8)
      ctx.fillRect(13, -4, 12, 8)

      // Satellite details
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(-3, -2, 6, 4)

      ctx.restore()

      // Communication waves
      ctx.save()
      ctx.strokeStyle = `rgba(0, 255, 150, ${0.3 + Math.sin(time * 4) * 0.2})`
      ctx.lineWidth = 2
      const waveRadius = 30 + Math.sin(time * 3) * 10
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(satelliteX, satelliteY, waveRadius + i * 15, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()
    }

    const drawStarsAndParticles = (ctx: CanvasRenderingContext2D, particles: any[], width: number, height: number, time: number) => {
      const scrollX = (time * 50) % (width + 200) // Same scrolling as Earth
      
      particles.forEach((particle, index) => {
        // Update position with scroll
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Apply scroll effect
        const scrollOffset = scrollX
        particle.displayX = particle.x - scrollOffset
        
        // Wrap around with scroll consideration
        if (particle.displayX < -50) particle.displayX = width + 50
        if (particle.displayX > width + 50) particle.displayX = -50
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0
        
        // Draw particle with glow
        const pulse = Math.sin(time * 3 + index) * 0.3 + 0.7
        const alpha = particle.opacity * pulse
        
        // Outer glow
        const gradient = ctx.createRadialGradient(particle.displayX, particle.y, 0, particle.displayX, particle.y, particle.radius * 3)
        gradient.addColorStop(0, `rgba(200, 220, 255, ${alpha * 0.5})`)
        gradient.addColorStop(1, 'rgba(200, 220, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.displayX, particle.y, particle.radius * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Core
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(particle.displayX, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawBinaryRain = (ctx: CanvasRenderingContext2D, drops: any[], width: number, height: number, time: number) => {
      const scrollX = (time * 50) % (width + 200) // Same scrolling as Earth
      
      drops.forEach((drop, index) => {
        // Update position
        drop.y += drop.speed
        drop.x += Math.sin(time + index * 0.1) * 0.2 // Slight horizontal drift
        
        // Apply scroll effect for display
        const displayX = drop.x - scrollX
        
        // Wrap around with scroll consideration
        if (displayX < -50) drop.x = width + 50
        if (displayX > width + 50) drop.x = -50
        
        // Add trail effect
        drop.trail.unshift({ x: displayX, y: drop.y, opacity: drop.opacity })
        if (drop.trail.length > 8) {
          drop.trail.pop()
        }
        
        // Reset when off screen
        if (drop.y > height + 20) {
          drop.y = -20
          drop.x = Math.random() * width
          drop.char = Math.random() < 0.5 ? '0' : '1'
          drop.speed = Math.random() * 2 + 1
          drop.opacity = Math.random() * 0.8 + 0.2
          drop.size = Math.random() * 8 + 12
          drop.trail = []
        }
        
        // Draw trail
        drop.trail.forEach((point: any, trailIndex: number) => {
          const trailAlpha = point.opacity * (trailIndex / drop.trail.length) * 0.3
          ctx.fillStyle = `rgba(0, 255, 150, ${trailAlpha})`
          ctx.font = `${drop.size * (trailIndex / drop.trail.length)}px monospace`
          ctx.fillText(drop.char, point.x, point.y)
        })
        
        // Draw main drop
        ctx.fillStyle = `rgba(0, 255, 150, ${drop.opacity})`
        ctx.shadowColor = "#00ff96"
        ctx.shadowBlur = 5
        ctx.font = `${drop.size}px monospace`
        ctx.fillText(drop.char, drop.x - scrollX, drop.y)
        ctx.shadowBlur = 0
      })
    }

    const drawDataStreams = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      const scrollX = (time * 50) % (width + 200) // Same scrolling as Earth
      
      const streams = [
        { x: width * 0.3, y: 0, direction: 1 },
        { x: width * 0.7, y: height, direction: -1 },
        { x: 0, y: height * 0.6, direction: 1 },
        { x: width, y: height * 0.4, direction: -1 }
      ]

      streams.forEach((stream, index) => {
        for (let i = 0; i < 20; i++) {
          const progress = (time * 0.02 + i * 0.1) % 1
          const x = stream.x + (stream.direction > 0 ? progress * width : -progress * width) - scrollX
          const y = stream.y + (stream.direction > 0 ? progress * height : -progress * height)
          
          const alpha = 1 - progress
          const size = 10 + Math.sin(time + i) * 3
          
          ctx.fillStyle = `rgba(100, 200, 255, ${alpha * 0.6})`
          ctx.shadowColor = "#64c8ff"
          ctx.shadowBlur = 8
          ctx.font = `${size}px monospace`
          ctx.fillText(Math.random() < 0.5 ? '0' : '1', x, y)
          ctx.shadowBlur = 0
        }
      })
    }

    const animate = (currentTime: number) => {
      const time = currentTime * 0.001
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0a0a")
      gradient.addColorStop(0.5, "#1a1a2e")
      gradient.addColorStop(1, "#16213e")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw all elements with scroll
      drawStarsAndParticles(ctx, particlesRef.current, canvas.width, canvas.height, time)
      drawBinaryRain(ctx, dropsRef.current, canvas.width, canvas.height, time)
      drawDataStreams(ctx, canvas.width, canvas.height, time)
      drawSatellite(ctx, canvas.width, canvas.height, time)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          display: 'block'
        }}
      />
    </div>
  )
}

