import { Trophy, Star, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Achievements() {
  const achievements = [
    {
      title: "Times of India",
      subtitle: '"Men of the Year"',
      year: "2018 & 2019",
      icon: Trophy,
    },
    {
      title: "Best Business Head",
      subtitle: "Extramarks National Award",
      year: "Multiple Years",
      icon: Star,
    },
    {
      title: "Market Leadership",
      subtitle: "#1 EdTech in Gujarat",
      year: "Since 2012",
      icon: TrendingUp,
    },
  ]

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">
            Recognition & Awards
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4 md:mb-6">
            Achievements & Impact
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
            Recognized for excellence in business leadership, innovation, and positive impact in the education
            technology sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 space-y-4 text-center">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 w-fit mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.subtitle}</p>
                    <p className="text-xs text-primary font-semibold">{achievement.year}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/achievements">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 group">
              View All Awards & Recognition
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
