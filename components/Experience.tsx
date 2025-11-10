import { Building2, Calendar, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Experience() {
  const currentRole = {
    title: "Business Head – Western India",
    company: "Extramarks Education India Pvt. Ltd.",
    period: "May 2010 – April 2025",
    duration: "15 years",
    highlights: [
      "Led a dynamic 120+ member team across sales, training, marketing, and service functions",
      "Scaled regional revenue from ₹0 to ₹150+ Cr, establishing market leadership",
      "Delivered 700,000+ teacher trainings across Pan-India network",
      "Positioned Extramarks as #1 EdTech company in Gujarat since 2012",
    ],
  }

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-14 md:mb-16 animate-fade-in-up">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">Career Timeline</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pretty">Journey</h2>
        </div>

        <div className="group relative animate-fade-in-up">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <p className="text-xs font-semibold text-primary tracking-widest">{currentRole.period}</p>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{currentRole.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Building2 className="w-5 h-5 text-accent" />
                  <span className="text-base sm:text-lg">{currentRole.company}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-0 inline-block px-4 py-2 bg-primary/20 border border-primary rounded-lg">
                <p className="text-sm font-semibold text-primary">{currentRole.duration}</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {currentRole.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 sm:gap-4 group/item">
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            <Link href="/experience">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                View Complete Career Timeline
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
