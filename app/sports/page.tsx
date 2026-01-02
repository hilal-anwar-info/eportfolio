"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Dumbbell, Music, Piano, Guitar } from "lucide-react"

const sportsData = {
  description:
    "Beyond my engineering studies, I maintain a balanced lifestyle through various sports and cultural activities. Golf, music production, and classical instruments help me stay creative and focused.",
  sports: [
    {
      name: "Golf",
      level: "Golfer",
      since: "2024",
      organization: "Golf de la Ramée, Toulouse",
      period: "2024 - Present",
      description: "Regular practice at Golf de la Ramée in Toulouse. Golf teaches me patience, precision, and strategic thinking.",
      image: "/ugolf-toulouse-la-ramee.png.jpeg",
    },
  ],
  otherActivities: [
    {
      icon: Piano,
      title: "Piano",
      period: "2015 - 2021",
      image: "/19784724_800.jpg",
      description: "Classical piano training, developing musical expression and discipline",
    },
    {
      icon: Guitar,
      title: "Flute",
      period: "2015 - 2021",
      image: "/cropped-205a-soprano-en-ut-serie-robin-57619.png",
      description: "Soprano flute studies, enhancing breath control and coordination",
    },
    {
      icon: Music,
      title: "Music Production",
      period: "2015 - 2021",
      image: "/music_production_award_winners_article_image_2022.jpg",
      description: "Creating electronic music and learning audio engineering techniques",
    },
  ],
  philosophy:
    "I believe in the importance of work-life balance. These activities help me stay energized, focused, and creative in my engineering work.",
}

export default function SportsPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            Sports & Other Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sportsData.description}</p>
        </div>

        {/* Sports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-orbitron)] glow-text">Sports</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sportsData.sports.map((sport, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
              >
                {sport.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/30">
                      {sport.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Since {sport.since}</span>
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-orbitron)] flex items-center gap-2">
                    <Medal className="w-5 h-5 text-accent" />
                    {sport.name}
                  </CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {sport.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{sport.description}</p>
                  <Badge variant="outline" className="text-primary border-primary">
                    {sport.period}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-orbitron)] glow-text">
            Music & Arts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sportsData.otherActivities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
                >
                  {activity.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="pt-4">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-1">{activity.title}</h3>
                    <p className="text-xs text-muted-foreground text-center mb-2">{activity.period}</p>
                    <p className="text-muted-foreground text-sm text-center">{activity.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <Card className="bg-gradient-to-br from-primary/20 to-accent/20 glow-border relative z-20 backdrop-blur-md bg-black/40">
            <CardContent className="pt-8 pb-8 text-center">
              <Dumbbell className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">My Philosophy</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{sportsData.philosophy}</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
