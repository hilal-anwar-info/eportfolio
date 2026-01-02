"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Plane, MapPin, Calendar, GraduationCap, Flag } from "lucide-react"

const mobilityData = {
  description:
    "My journey from Morocco to France represents a significant step in my academic and professional development. After completing my CPGE in Technology and Industrial Sciences at Lycée Mohammed VI d'excellence, I chose to pursue my engineering studies at ENSEEIHT in Toulouse to specialize in telecommunications and aerospace.",
  heroImage: "/capitole-toulouse.jpg",
  origin: {
    country: "Morocco",
    flag: "🇲🇦",
    description: "My home country, where I developed my passion for science and technology.",
  },
  education: {
    institution: "Lycée Mohammed VI d'excellence",
    location: "Morocco",
    period: "2022 - 2024",
    description: "CPGE in Technology and Industrial Sciences (Mathématiques et Physique), developing strong analytical and problem-solving skills.",
  },
  currentLocation: {
    institution: "ENSEEIHT, Toulouse",
    city: "Toulouse",
    country: "France",
    period: "2024 - Present",
    description: "Pursuing my engineering degree in Telecommunications at one of France's most prestigious engineering schools, in the heart of the European aerospace industry.",
  },
}

export default function MobilityPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="mb-16 overflow-hidden rounded-2xl">
          <img
            src={mobilityData.heroImage}
            alt="My Journey"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Plane className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            International Mobility
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{mobilityData.description}</p>
        </div>

        {/* Origin */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-orbitron)] glow-text flex items-center gap-3">
            <Flag className="w-8 h-8 text-accent" />
            My Origins
          </h2>
          <Card className="bg-card/50 backdrop-blur-sm glow-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6">
                <span className="text-6xl">{mobilityData.origin.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold">{mobilityData.origin.country}</h3>
                  <p className="text-muted-foreground">{mobilityData.origin.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Journey Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-orbitron)] glow-text">
            My Journey
          </h2>
          <div className="space-y-6">
            {/* CPGE */}
            <Card className="bg-card/50 backdrop-blur-sm glow-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      {mobilityData.education.institution}
                    </CardTitle>
                    <CardDescription>{mobilityData.education.location}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {mobilityData.education.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{mobilityData.education.description}</p>
              </CardContent>
            </Card>

            {/* Current Location */}
            <Card className="bg-card/50 backdrop-blur-sm glow-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      {mobilityData.currentLocation.institution}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {mobilityData.currentLocation.city}, {mobilityData.currentLocation.country}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {mobilityData.currentLocation.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{mobilityData.currentLocation.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

