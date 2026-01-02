import { Radio, Satellite, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-orbitron)] glow-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a second-year <span className="text-primary font-semibold">Telecommunications Engineering</span>{" "}
              student with a deep passion for{" "}
              <span className="text-accent font-semibold">Aerospace and Satellite Communications</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My fascination lies in the intersection of communication systems and space technology—from satellite link
              simulations to deep-space networking protocols. I'm driven by the challenge of connecting our world and
              beyond through innovative communication solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Through my studies and projects, I explore signal processing, modulation techniques, and embedded systems
              that power the future of aerospace communications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Satellite,
                title: "Satellite Systems",
                description: "Exploring orbital mechanics and satellite communication protocols",
              },
              {
                icon: Radio,
                title: "Signal Processing",
                description: "Analyzing and optimizing communication signals for space applications",
              },
              {
                icon: Zap,
                title: "Optical Communication",
                description: "Exploring fiber optics and light-based communication systems",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
