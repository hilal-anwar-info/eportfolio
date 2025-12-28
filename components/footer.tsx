export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Anwar Hilal. All rights reserved.
          </p>
          <p className="text-center text-accent font-medium italic font-[family-name:var(--font-orbitron)]">
            Connecting the world — and beyond.
          </p>
        </div>
      </div>
    </footer>
  )
}
