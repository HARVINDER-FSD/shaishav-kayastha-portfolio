import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "EdTech Platform Scaling",
      category: "Business Growth",
      description: "Scaled EdTech platform from ₹10Cr to ₹50Cr revenue in 3 years through strategic expansion",
      image: "/about.JPG",
    },
    {
      title: "Teacher Network Expansion",
      category: "Community Building",
      description: "Built 700K+ teacher training network across India with innovative content delivery",
      image: "/teachers-network-education-training-community.jpg",
    },
    {
      title: "Organizational Restructuring",
      category: "Operations",
      description: "Led organizational restructuring to improve efficiency and create high-performance culture",
      image: "/business-organization-team-structure-modern.jpg",
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 border-t border-border bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-20">
          <p className="text-xs font-semibold uppercase text-primary tracking-widest mb-2 sm:mb-3 md:mb-4">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Notable initiatives and transformative projects that demonstrate impact and strategic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 sm:mb-6 h-40 sm:h-48 bg-secondary/10 border border-border hover:border-primary transition-all">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">{project.category}</p>
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
