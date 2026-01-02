
"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-orbitron)] glow-text">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="p-8 rounded-lg bg-card/50 backdrop-blur-sm glow-border mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Interested in collaborating on aerospace communication projects or discussing satellite systems? Feel free
              to reach out through one of the platforms below!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:anwarhilal88@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span>anwarhilal88@gmail.com</span>
              </a>
              <a
                href="https://github.com/hilal-anwar-info/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <span>github.com/hilal-anwar-info</span>
              </a>
              <a
                href="https://linkedin.com/in/anwarhilal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <span>linkedin.com/in/anwarhilal</span>
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 glow-border">
            <p className="text-center text-lg font-medium text-foreground italic">
              "The sky is not the limit when there are footprints on the moon."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

