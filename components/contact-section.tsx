"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-orbitron)] glow-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interested in collaborating on aerospace communication projects or discussing satellite systems? Feel free
              to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/50 border-primary/30 focus:border-primary glow-border text-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/50 border-primary/30 focus:border-primary glow-border text-foreground"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/50 border-primary/30 focus:border-primary glow-border text-foreground resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-border group"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm glow-border">
              <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-orbitron)] text-foreground">
                Connect With Me
              </h3>
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <span>github.com/anwarhilal</span>
                </a>
                <a
                  href="https://linkedin.com"
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

            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 glow-border">
              <p className="text-center text-lg font-medium text-foreground italic">
                "The sky is not the limit when there are footprints on the moon."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
