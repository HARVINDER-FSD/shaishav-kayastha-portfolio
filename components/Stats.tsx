import { TrendingUp, Users, Award, Target, BookOpen, Star } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "₹150+ Cr",
      label: "Regional Revenue Generated",
      description: "Over 15 years of consistent growth",
    },
    {
      icon: Users,
      number: "120+",
      label: "Team Members Led",
      description: "Across sales, training & operations",
    },
    {
      icon: BookOpen,
      number: "7,00,000+",
      label: "Teacher Trainings",
      description: "Delivered across Pan-India",
    },
    {
      icon: Target,
      number: "₹74 Cr",
      label: "Cash Revenue",
      description: "From strategic go-to-market plans",
    },
    {
      icon: Star,
      number: "#1",
      label: "Market Position",
      description: "Extramarks in Gujarat since 2012",
    },
    {
      icon: Award,
      number: "17+",
      label: "Years Experience",
      description: "In EdTech & business leadership",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center animate-fade-in-up">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
            Impact & Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pretty mb-4 sm:mb-6">
            Proven Track Record
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Measurable achievements demonstrating consistent excellence in business leadership and organizational growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-card/50 border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{stat.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
