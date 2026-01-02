
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareerPage() {
  return (
    <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)] glow-text">
            Career Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal and Professional Project (PPP)
          </p>
        </div>

        {/* PPP Button */}
        <Card className="bg-card/50 backdrop-blur-sm glow-border">
          <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
            <FileText className="w-16 h-16 text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">
              View My PPP Document
            </h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
              Access my complete Personal and Professional Project document outlining my career trajectory, skills, and goals.
            </p>
            <a href="/ppp1.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <FileText className="w-5 h-5 mr-2" />
                View PPP Document
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

