import { Code2, Cpu, Radio, Satellite, Signal, Waves } from "lucide-react"

const skills = [
  {
    category: "Communication Systems",
    icon: Signal,
    items: ["Satellite Communications", "RF Engineering", "Antenna Design", "Link Budget Analysis"],
  },
  {
    category: "Signal Processing",
    icon: Waves,
    items: ["Digital Modulation", "DSP Algorithms", "Fourier Analysis", "Filter Design"],
  },
  {
    category: "Embedded Systems",
    icon: Cpu,
    items: ["Microcontrollers", "Real-time Systems", "Hardware Interfacing", "IoT Protocols"],
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["MATLAB", "Python", "C/C++", "Keil"],
  },
  {
    category: "Tools & Platforms",
    icon: Radio,
    items: ["SDR", "GNU Radio", "LabVIEW", "Simulink"],
  },
  {
    category: "Aerospace",
    icon: Satellite,
    items: ["Orbital Mechanics", "Space Systems", "Satellite Networks", "Deep Space Comm"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-orbitron)] glow-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card/50 backdrop-blur-sm glow-border hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors animate-pulse-glow">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-orbitron)] text-foreground">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
