"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Calculator, CircuitBoard, Radio, Cpu, Users } from "lucide-react"

const courses = [
  {
    year: "Year 1",
    semesters: [
      {
        semester: "S5",
        ue: [
          {
            title: "Integration and Applications - Probabilities",
            code: "S5-UE1",
            description: "Advanced probability theory and its engineering applications",
            credits: "TBD",
          },
          {
            title: "Imperative Programming",
            code: "S5-UE2",
            description: "Low-level programming concepts, algorithms, and software development",
            credits: "TBD",
          },
          {
            title: "Numerical Analysis - Statistics",
            code: "S5-UE3",
            description: "Numerical methods and statistical analysis for engineering",
            credits: "TBD",
          },
          {
            title: "Automatic Control - Data Analysis",
            code: "S5-UE4",
            description: "Control systems theory and data analysis techniques",
            credits: "TBD",
          },
          {
            title: "Modeling - Architecture",
            code: "S5-UE5",
            description: "System modeling and architectural design principles",
            credits: "TBD",
          },
          {
            title: "Support",
            code: "S5-UE6",
            description: "Additional support and reinforcement coursework",
            credits: "TBD",
          },
          {
            title: "UE - SHS (Sciences Humaines et Sociales)",
            code: "S5-UE7",
            description: "Human and social sciences courses for engineering students",
            credits: "TBD",
            icon: Users,
          },
        ],
      },
      {
        semester: "S6",
        ue: [
          {
            title: "Signal Processing - Telecommunications",
            code: "S6-UE1",
            description: "Digital signal processing and telecommunications fundamentals",
            credits: "TBD",
          },
          {
            title: "Networks",
            code: "S6-UE2",
            description: "Computer networks architecture and protocols",
            credits: "TBD",
          },
          {
            title: "Scientific Computing - Machine Learning",
            code: "S6-UE3",
            description: "Numerical computing and introduction to machine learning",
            credits: "TBD",
          },
          {
            title: "Object Technology",
            code: "S6-UE4",
            description: "Object-oriented programming and software engineering",
            credits: "TBD",
          },
          {
            title: "Architecture - System",
            code: "S6-UE5",
            description: "Computer architecture and operating systems",
            credits: "TBD",
          },
          {
            title: "UE - SHS (Sciences Humaines et Sociales)",
            code: "S6-UE6",
            description: "Human and social sciences courses for engineering students",
            credits: "TBD",
            icon: Users,
          },
        ],
      },
    ],
  },
  {
    year: "Year 2 - Telecommunications Systems",
    semesters: [
      {
        semester: "S7",
        ue: [
          {
            title: "Coded Digital Communications",
            code: "S7-UE1",
            description: "Error-correcting codes, modulation schemes, and channel coding",
            credits: "TBD",
          },
          {
            title: "Digital Communications over Selective Channels",
            code: "S7-UE2",
            description: "OFDM, equalization, and multipath channel techniques",
            credits: "TBD",
          },
          {
            title: "Modeling and Optimization",
            code: "S7-UE3",
            description: "Mathematical optimization and system modeling",
            credits: "TBD",
          },
          {
            title: "Internet and Graphs",
            code: "S7-UE4",
            description: "Graph theory applications in network routing and internet",
            credits: "TBD",
          },
          {
            title: "Local and Telecommunications Networks",
            code: "S7-UE5",
            description: "LAN, WAN, and telecommunications network architectures",
            credits: "TBD",
          },
          {
            title: "UE - SHS (Sciences Humaines et Sociales)",
            code: "S7-UE6",
            description: "Human and social sciences courses for engineering students",
            credits: "TBD",
            icon: Users,
          },
        ],
      },
      {
        semester: "S8",
        ue: [
          {
            title: "Digital Receivers",
            code: "S8-UE1",
            description: "Synchronization, demodulation, and digital receiver design",
            credits: "TBD",
          },
          {
            title: "Information Processing Systems",
            code: "S8-UE2",
            description: "Digital signal processing systems and architectures",
            credits: "TBD",
          },
          {
            title: "Machine Learning for Telecommunications",
            code: "S8-UE3",
            description: "AI and ML applications in telecom systems",
            credits: "TBD",
          },
          {
            title: "Mobile Applications and Security",
            code: "S8-UE4",
            description: "Mobile app development and cybersecurity fundamentals",
            credits: "TBD",
          },
          {
            title: "Wireless and Mobile Telecom Systems",
            code: "S8-UE5",
            description: "Cellular networks, 5G, and wireless communications",
            credits: "TBD",
          },
          {
            title: "UE - SHS (Sciences Humaines et Sociales)",
            code: "S8-UE6",
            description: "Human and social sciences courses for engineering students",
            credits: "TBD",
            icon: Users,
          },
        ],
      },
    ],
  },
]

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            Engineering Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Telecommunications Engineering program - Specialization in Telecom Systems
          </p>
        </div>

        {/* Courses by Year */}
        {courses.map((yearData, yearIndex) => (
          <div key={yearIndex} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-primary/30 flex-grow" />
              <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-orbitron)] text-primary whitespace-nowrap">
                {yearData.year}
              </h2>
              <div className="h-px bg-primary/30 flex-grow" />
            </div>

            {/* Semesters */}
            {yearData.semesters.map((semester, semIndex) => (
              <div key={semIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="outline" className="text-lg px-4 py-1 border-primary text-primary">
                    {semester.semester}
                  </Badge>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-orbitron)]">
                    {semester.ue.length} Teaching Units
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {semester.ue.map((ue, ueIndex) => (
                    <Card
                      key={ueIndex}
                      className="bg-card/50 backdrop-blur-sm glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="secondary" className="mb-2">
                              {ue.code}
                            </Badge>
                            <CardTitle className="text-lg font-[family-name:var(--font-orbitron)] leading-tight">
                              {ue.title}
                            </CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {ue.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{ue.credits} ECTS</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

