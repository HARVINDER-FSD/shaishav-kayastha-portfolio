import { GraduationCap, Award, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
  const highlights = [
    { label: "Years Experience", value: "17+", icon: Award },
    { label: "Revenue Generated", value: "₹150+ Cr", icon: GraduationCap },
    { label: "Team Members Led", value: "120+", icon: Award },
    { label: "Teacher Trainings", value: "700K+", icon: GraduationCap },
  ]

  const profile = [
    "Strategic business leader with proven expertise in EdTech transformation",
    "Mastered team building, organizational growth, and revenue expansion",
    "Known for innovative problem-solving and change management",
  ]

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase text-primary tracking-widest mb-2 sm:mb-3 md:mb-4">
            Professional Overview
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4 md:mb-6">
            About Shaishav
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A visionary business leader with transformative experience in the EdTech industry, driving organizational
            excellence and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {highlights.map((highlight, idx) => {
            const IconComponent = highlight.icon
            return (
              <div
                key={idx}
                className="group p-4 sm:p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer animate-fade-in-up text-center"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="mb-3 p-2 bg-primary/20 rounded-lg w-fit mx-auto">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold mb-1 text-primary">{highlight.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">{highlight.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Photo section */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-md">
              <div className="absolute inset-0 bg-primary/15 rounded-2xl blur-2xl"></div>
              <div className="relative w-full aspect-[3/4] rounded-2xl bg-secondary/20 border-2 border-primary flex items-center justify-center overflow-hidden group cursor-pointer">
                <img
                  src="/about.JPG"
                  alt="Shaishav Kayastha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">Profile</h3>
              <ul className="space-y-3 sm:space-y-4">
                {profile.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 sm:gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl bg-secondary/20 border border-secondary hover:border-primary transition-all duration-300">
                <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Education</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> IIM Ahmedabad
                  </li>
                  <li className="flex gap-2">
                    <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> IIPM Ahmedabad
                  </li>
                  <li className="flex gap-2">
                    <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> MBA - Europe
                  </li>
                </ul>
                <Link href="/education">
                  <button className="mt-4 text-xs sm:text-sm text-primary hover:text-accent font-semibold flex items-center gap-2 group">
                    View Full Education <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-accent/20 border border-accent hover:border-primary transition-all duration-300">
                <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Recognition</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Times of India "Men of the Year"
                  </li>
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Multiple National Awards
                  </li>
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> EdTech Industry Leader
                  </li>
                </ul>
                <Link href="/achievements">
                  <button className="mt-4 text-xs sm:text-sm text-primary hover:text-accent font-semibold flex items-center gap-2 group">
                    View All Achievements <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <Link href="/about">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group">
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
