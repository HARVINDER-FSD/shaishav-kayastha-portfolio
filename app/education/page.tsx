import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Book, Globe, Award, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Qualifications - Shaishav Kayastha | IIM Ahmedabad",
  description: "IIM Ahmedabad AGMP, IIPM Planning & Entrepreneurship, MBA from Europe. International research at Georgetown, UN, World Bank.",
  openGraph: {
    title: "Education - Shaishav Kayastha",
    description: "World-class education from IIM Ahmedabad and international institutions.",
    images: ["/education.JPG"],
  },
}

export default function Education() {
  const education = [
    {
      institution: "The Indian Institute of Management, Ahmedabad – IIM A",
      course: "Advanced General Management Program (AGMP)",
      year: "2019 - 2020",
      icon: Award,
      details:
        "Premier post-graduate management program focusing on advanced business leadership, strategic thinking, and executive decision-making. Participated in case studies, simulations, and interactions with industry leaders.",
    },
    {
      institution: "The Indian Institute of Planning and Management, Ahmedabad – IIPM",
      course: "PGP – Planning & Entrepreneurship",
      year: "2006 - 2008",
      icon: Book,
      details:
        "Two-year postgraduate program specializing in business planning, venture creation, market analysis, and entrepreneurial strategies. Strong focus on practical application and industry interaction.",
    },
    {
      institution: "IMI Belgium (Europe)",
      course: "MBA – Marketing & Entrepreneurship",
      year: "2006 - 2008",
      icon: Globe,
      details:
        "European MBA program with international perspective on marketing strategy, business development, and global entrepreneurship. Exposure to international business practices and diverse markets.",
    },
    {
      institution: "Gujarat University",
      course: "B.Com. (Bachelor of Commerce)",
      year: "2003 - 2006",
      icon: Book,
      details:
        "Three-year commerce degree covering accounting, finance, business law, economics, and management fundamentals. Strong foundation for business career and higher education.",
    },
  ]

  const projects = [
    {
      institution: "Georgetown University, USA",
      title: "Comparative Study: Indian Secondary Education vs Global Models",
      details:
        "Comprehensive research comparing Indian secondary education system with international models from USA, UK, and other developed nations. Analysis of curriculum, teaching methodologies, student outcomes, and recommendations for improvement.",
      year: "2008",
    },
    {
      institution: "United Nations HQ, New York",
      title: "Participated in sessions on international development and world peace",
      details:
        "Attended and participated in UN sessions covering global sustainable development goals, peace initiatives, and international cooperation on education and economic development.",
      year: "2008",
    },
    {
      institution: "World Bank, Washington DC",
      title: "Research on Indian economic growth & global positioning",
      details:
        "In-depth research on India's economic growth trajectory, factors driving development, global competitiveness ranking, and emerging opportunities in business and education sectors.",
      year: "2008",
    },
    {
      institution: "New York Mercantile Exchange (NYMEX), New York",
      title: "Study on global commodity exchange and market dynamics",
      details:
        "Practical study of global commodity markets, trading mechanisms, price discovery process, and economic impact of commodity exchanges on global markets.",
      year: "2008",
    },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      {/* Header with Image in Columns */}
      <section className="pt-24 sm:pt-28 md:pt-32 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Education & Development
              </h1>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground">
              World-Class Learning & International Exposure from Premier Institutions
            </p>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 sm:w-80 md:w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/education.JPG"
                alt="Shaishav Kayastha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-card/50 border border-primary/20 rounded-xl p-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Educational Philosophy</h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Continuous learning and professional development form the core of my career philosophy. With education
            spanning international institutions and premier business schools, I have gained comprehensive knowledge in
            commerce, management, entrepreneurship, and strategic business leadership. This diverse educational
            background has equipped me with global perspectives and practical tools for business excellence.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12">Academic Qualifications</h2>
        <div className="space-y-6">
          {education.map((edu, idx) => {
            const IconComponent = edu.icon
            return (
              <div key={idx} className="group">
                <div className="bg-card/50 border border-primary/20 hover:border-primary/40 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6 pb-6 border-b border-primary/10">
                    <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <IconComponent className="text-primary" size={36} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                        <h3 className="text-lg sm:text-2xl font-bold text-primary">{edu.institution}</h3>
                        <span className="text-primary font-bold text-sm sm:text-lg whitespace-nowrap">{edu.year}</span>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground font-semibold">{edu.course}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* International Projects & Research */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
          International Research & Projects
        </h2>
        <p className="text-muted-foreground mb-8 text-base sm:text-lg">
          International exposure through leading research institutions and participation in global forums on education,
          economics, and sustainable development.
        </p>
        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/40 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-primary font-bold text-base sm:text-lg">{proj.institution}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{proj.year}</p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{proj.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{proj.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Thesis */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Research Thesis</h2>
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 sm:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
              <BookOpen className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                Status of Secondary Education in India and Road Ahead
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Completed: 2008</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              A comprehensive research study exploring the current state of secondary education in India and proposing
              strategic roadmaps for future development and improvements in educational systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-card/50 p-4 rounded-lg border border-primary/10">
                <p className="text-primary font-bold mb-2">Key Focus Areas</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curriculum structure</li>
                  <li>• Teacher training</li>
                  <li>• Infrastructure</li>
                </ul>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-primary/10">
                <p className="text-primary font-bold mb-2">Findings</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Identified gaps</li>
                  <li>• Best practices</li>
                  <li>• Global benchmarks</li>
                </ul>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-primary/10">
                <p className="text-primary font-bold mb-2">Recommendations</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Policy changes</li>
                  <li>• Innovation framework</li>
                  <li>• Implementation roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
