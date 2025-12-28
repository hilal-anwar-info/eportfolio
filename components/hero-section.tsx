"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Path to your CV file
    link.download = 'CV_Anwar_Hilal.pdf'// Downloaded filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Contenu central */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <div className="space-y-8">
          {/* Nom et filière avec satellite flottant */}
          <div className="relative">
            <div className="space-y-6 relative z-10">
              <h1 className="text-6xl sm:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-orbitron)] glow-text text-balance">
                Anwar Hilal
              </h1>
              <h2 className="text-3xl sm:text-2xl lg:text-4xl font-semibold text-primary font-[family-name:var(--font-orbitron)]">
                Telecommunications Engineering Student
              </h2>
            </div>
          </div>

          <p className="text-2xl sm:text-xl text-accent font-medium">Aerospace Enthusiast</p>

          <p className="text-xl sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Exploring the link between Earth and Space through communication systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xl px-10 py-8 glow-border"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore My Work
                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="group border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-xl px-10 py-8 glow-border bg-transparent"
            >
              <span className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                Download CV
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center p-3">
          <div className="w-2 h-4 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
