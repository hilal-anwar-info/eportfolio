"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileCode } from "lucide-react"

const projects = [
  {
    title: "2-ary Modulation Chain",
    description:
      "Implementation of a complete 2-ary modulation and demodulation system with OFDM, demonstrating advanced digital communication techniques.",
    technologies: ["MATLAB", "OFDM", "DSP"],
    image: "/digital-modulation-waveform.jpg",
    github: "https://github.com",
    code: "/BE_OFDM.m",
    report: "/rapport_BE_OFDM.pdf",
    demo: null,
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects in telecommunications, satellite communications, and signal processing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm glow-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-start justify-between text-foreground">
                  <span className="font-[family-name:var(--font-orbitron)] text-lg">{project.title}</span>
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 glow-border text-center relative z-20 backdrop-blur-md bg-black/40">
          <FileCode className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-orbitron)]">
            More Projects Coming Soon
          </h3>
          <p className="text-muted-foreground">
            I'm constantly working on new projects. Check my GitHub for the latest updates and contributions.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </main>
  )
}
