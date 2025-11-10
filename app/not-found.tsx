import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-primary/20 leading-none">404</h1>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-sm text-primary hover:text-accent transition-colors">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/experience" className="text-sm text-primary hover:text-accent transition-colors">
              Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/expertise" className="text-sm text-primary hover:text-accent transition-colors">
              Expertise
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-sm text-primary hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
