import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Zap, Target, BarChart3, Briefcase, Users, TrendingUp, Award, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Core Competencies & Expertise - Shaishav Kayastha",
  description: "8 core areas of expertise: Strategic Planning, Business Development, P&L Management, Marketing, Sales, Leadership, Customer Engagement, and Innovation.",
  openGraph: {
    title: "Expertise - Shaishav Kayastha",
    description: "Specialized skills in business strategy, leadership, and EdTech transformation.",
    images: ["/gifting.JPG"],
  },
}

export default function Expertise() {
  const competencies = [
    {
      icon: Target,
      title: "Strategic Planning & Execution",
      description:
        "Developing comprehensive business strategies and ensuring flawless implementation across teams and markets.",
      details: [
        "End-to-end business planning and strategy development",
        "Market analysis and competitive positioning",
        "Strategic roadmap creation for 3-5 year timelines",
        "Cross-functional alignment and execution tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Development & Expansion",
      description:
        "Identifying growth opportunities and scaling operations into new markets with sustainable growth models.",
      details: [
        "Market entry and expansion strategies",
        "New business development and revenue streams",
        "Scaling operations from startup to ₹150+ Cr",
        "Strategic partnerships and channel development",
      ],
    },
    {
      icon: BarChart3,
      title: "P&L Management & Forecasting",
      description:
        "Expert financial management, profit optimization, and accurate revenue forecasting across business units.",
      details: [
        "Budget development and financial forecasting",
        "Profit optimization and cost management",
        "Revenue growth strategies and targets",
        "Financial performance tracking and reporting",
      ],
    },
    {
      icon: Briefcase,
      title: "Marketing & Brand Communication",
      description:
        "Building powerful brand narratives and executing integrated marketing campaigns for market leadership.",
      details: [
        "Brand strategy and positioning",
        "Integrated marketing communications",
        "ATL and BTL campaign management",
        "Digital and traditional media strategies",
      ],
    },
    {
      icon: Users,
      title: "Channel Sales & Institutional Partnerships",
      description:
        "Establishing and managing strategic partnerships with educational institutions and corporate clients.",
      details: [
        "B2B partnership development and management",
        "Institutional sales strategies",
        "Corporate relationship management",
        "Channel partner development and training",
      ],
    },
    {
      icon: Award,
      title: "Team Leadership & Talent Development",
      description:
        "Building high-performance teams and delivering comprehensive training programs for skill development.",
      details: [
        "Team building and organization development",
        "Performance management and incentivization",
        "Training program design and delivery",
        "Leadership development initiatives",
      ],
    },
    {
      icon: BookOpen,
      title: "Customer Engagement & Loyalty",
      description: "Creating lasting customer relationships and implementing loyalty programs for sustainable growth.",
      details: [
        "Customer experience optimization",
        "Loyalty program development",
        "Customer feedback and satisfaction management",
        "Retention strategies and upselling",
      ],
    },
    {
      icon: Zap,
      title: "Innovation & Market Transformation",
      description: "Leading organizational change and introducing innovative solutions to transform market dynamics.",
      details: [
        "Innovation management and ideation",
        "Change management and organizational transformation",
        "Process optimization and automation",
        "Technology integration and digital transformation",
      ],
    },
  ]

  const stats = [
    { number: "17+", label: "Years Experience" },
    { number: "120+", label: "Team Members Led" },
    { number: "₹150+Cr", label: "Revenue Generated" },
    { number: "7,00,000+", label: "Trainings Delivered" },
    { number: "#1", label: "Market Position Created" },
    { number: "100%", label: "Advance Payment Model" },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <img
          src="/educational-technology-platform-dashboard-modern.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Header with Image in Columns */}
      <section className="pt-24 sm:pt-28 md:pt-32 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Core Competencies & Expertise
              </h1>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Specialized Skills & Knowledge Developed Through 17+ Years of Industry Excellence and Market Leadership
            </p>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 sm:w-80 md:w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/gifting.JPG"
                alt="Shaishav Kayastha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Eight Core Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp, idx) => {
            const IconComponent = comp.icon
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-card to-card/50 border border-primary/20 hover:border-primary/50 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary">{comp.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">{comp.description}</p>
                <ul className="space-y-2">
                  {comp.details.map((detail, didx) => (
                    <li key={didx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary flex-shrink-0 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Expertise in Numbers</h2>
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 sm:p-8 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</p>
                <p className="text-muted-foreground text-sm sm:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Application */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">How I Apply This Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card/50 border border-primary/20 rounded-xl p-8">
            <h3 className="text-lg font-bold text-primary mb-4">For Organizations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Strategic business transformation and market expansion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Building and scaling high-performance teams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Revenue growth and profit optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Market leadership through innovation</span>
              </li>
            </ul>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-xl p-8">
            <h3 className="text-lg font-bold text-primary mb-4">Consulting & Advisory</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Business strategy and planning consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Leadership and organizational development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Market and competitive analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary flex-shrink-0">→</span>
                <span className="text-muted-foreground">Training and skill development programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
