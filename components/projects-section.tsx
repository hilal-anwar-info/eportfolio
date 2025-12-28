import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Satellite Link Simulation",
    description:
      "Comprehensive simulation of satellite communication links including path loss calculations, signal attenuation, and link budget analysis for LEO and GEO satellites.",
    technologies: ["MATLAB", "Python", "Signal Processing"],
    image: "/satellite-communication-simulation.jpg",
  },
  {
    title: "4-ary Modulation Chain",
    description:
      "Implementation of a complete 4-ary modulation and demodulation system with error correction, demonstrating advanced digital communication techniques.",
    technologies: ["MATLAB", "C", "DSP"],
    image: "/digital-modulation-waveform.jpg",
  },
  {
    title: "Dijkstra Pathfinding in Networks",
    description:
      "Network routing optimization using Dijkstra's algorithm for efficient data transmission in satellite constellation networks.",
    technologies: ["Python", "C", "Graph Theory"],
    image: "/network-routing.png",
  },
  {
    title: "SDR Spectrum Analyzer",
    description:
      "Software-defined radio application for real-time spectrum analysis and signal detection across multiple frequency bands.",
    technologies: ["SDR", "Python", "GNU Radio"],
    image: "/spectrum-analyzer-display.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-orbitron)] glow-text">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
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
                <CardTitle className="flex items-center justify-between text-foreground">
                  <span className="font-[family-name:var(--font-orbitron)]">{project.title}</span>
                  <ExternalLink className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
