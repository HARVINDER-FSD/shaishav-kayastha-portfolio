import { Lightbulb, Users, BarChart3, Rocket, BookOpen, Target } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Business Strategy",
      description: "Develop and execute comprehensive business strategies for sustainable growth and market expansion.",
    },
    {
      icon: Users,
      title: "Team Building",
      description:
        "Create high-performing teams through effective leadership, mentoring, and organizational development.",
    },
    {
      icon: Lightbulb,
      title: "EdTech Innovation",
      description:
        "Transform educational technology initiatives to enhance learning outcomes and operational efficiency.",
    },
    {
      icon: Rocket,
      title: "Scaling Operations",
      description: "Scale business operations while maintaining quality, culture, and delivering exceptional results.",
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Conduct workshops, training sessions, and mentoring programs for organizational excellence.",
    },
    {
      icon: Target,
      title: "Market Leadership",
      description: "Establish thought leadership and market positioning in competitive and dynamic industries.",
    },
  ]

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background border-t border-border"
    >
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: "url('/about-section-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase text-primary tracking-widest mb-3 sm:mb-4">Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pretty mb-4 sm:mb-6">
            Services & Capabilities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Comprehensive business solutions tailored to drive growth, innovation, and sustainable success across
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 md:p-8 rounded-2xl border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer animate-fade-in-up hover:shadow-xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 sm:mb-5 md:mb-6 p-2.5 sm:p-3 bg-primary/20 rounded-xl w-fit group-hover:bg-primary/30 transition-colors">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
