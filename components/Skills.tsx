import { Target, BarChart3, Users2, Handshake, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Skills() {
  const skillCategories = [
    {
      title: "Strategic Planning",
      icon: Target,
      skills: [
        "Business Strategy & Execution",
        "P&L Management",
        "Market Analysis",
      ],
    },
    {
      title: "Marketing & Sales",
      icon: BarChart3,
      skills: [
        "Channel Sales & Partnerships",
        "Brand Communication",
        "Digital Marketing",
      ],
    },
    {
      title: "Leadership",
      icon: Users2,
      skills: [
        "Team Building & Training",
        "Change Management",
        "Performance Management",
      ],
    },
    {
      title: "Relationships",
      icon: Handshake,
      skills: [
        "Customer Engagement",
        "Stakeholder Management",
        "Corporate Partnerships",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-16 animate-fade-in-up">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">Expertise Areas</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pretty mb-3 sm:mb-4 md:mb-6">
            Core Competencies
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
            Comprehensive skill set developed over 17+ years of leading transformational initiatives in education
            technology and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <div
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/20 mb-3 sm:mb-4 w-fit group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-5 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-muted-foreground flex gap-2 sm:gap-3 group-hover:text-foreground transition-colors"
                    >
                      <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/expertise">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 group">
              View All 8 Core Competencies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
