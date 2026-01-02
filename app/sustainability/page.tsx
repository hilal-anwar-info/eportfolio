
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, HandHeart } from "lucide-react"

const sustainabilityData = {
  description:
    "As a future engineer, I am committed to giving back to my community. Through volunteer work, I help bridge the digital divide and make science education accessible to all.",
  initiatives: [
    {
      title: "Secours Populaire Français - Engineering Tutoring",
      organization: "Secours Populaire",
      role: "Volunteer Tutor",
      period: "2025 - Present",
      description:
        "Providing free tutoring in engineering sciences (mathematics, physics, programming) to underprivileged students. Helping young people discover their potential in STEM fields and build confidence in their academic abilities.",
      logo: "/logo-desktop.svg",
    },
  ],
}

export default function SustainabilityPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Leaf className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            Sustainability & Civic Engagement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sustainabilityData.description}</p>
        </div>

        {/* Initiatives */}
        <section>
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-orbitron)] glow-text">
            Volunteer Initiatives
          </h2>
          <div className="space-y-6">
            {sustainabilityData.initiatives.map((initiative, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm glow-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {initiative.logo && (
                        <img 
                          src={initiative.logo} 
                          alt="Organization Logo" 
                          className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                        />
                      )}
                      <div>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <HandHeart className="w-5 h-5 text-accent" />
                          {initiative.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {initiative.organization} | {initiative.role}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {initiative.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

