import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Target, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Experience - Shaishav Kayastha | 17+ Years in EdTech",
  description: "17+ years of business leadership at Extramarks Education. Led 120+ teams, scaled revenue from ₹0 to ₹150+ Cr. Business Head - Western India.",
  openGraph: {
    title: "Experience - Shaishav Kayastha",
    description: "17+ years transforming EdTech and building high-performing teams.",
    images: ["/professional-business-portrait-executive-leader.jpg"],
  },
}

export default function Experience() {
  const experiences = [
    {
      title: "Business Head – Western India",
      company: "Extramarks Education India Pvt. Ltd.",
      period: "May 2010 – April 2025",
      duration: "15 Years",
      location: "Gujarat, Maharashtra, Goa & Rajasthan",
      overview:
        "Led comprehensive business operations across four states managing 120+ team members, generating ₹150+ Cr in regional revenue, and establishing Extramarks as the #1 EdTech company in Gujarat.",
      responsibilities: [
        "Led a 120+ member team across sales, training, marketing, and service functions with focus on continuous development",
        "Designed and executed omnichannel sales strategies including Retail, Institutional, and Corporate segments",
        "Delivered over 7,00,000 teacher trainings pan-India on transforming education methodologies",
        "Developed comprehensive Marketing Communication materials and managed ATL & BTL campaigns",
        "Enhanced regional revenue from baseline to ₹150+ Cr over 15 years through data-driven planning",
        "Contributed to establishing Extramarks as No. 1 EdTech company in Gujarat since 2012",
        "Recognized with Times of India 'Men of the Year' award in 2018 & 2019",
        "Successfully implemented go-to-market plans generating ₹74 Cr in cash revenue",
        "Developed the first 100% Advance Payment Model for Gujarat Territory",
        "Built strong institutional partnerships with 500+ schools across Western India",
      ],
      impact:
        "Transformed the region from underperformance to top-performing zone with consistent YoY growth of 25-30%",
    },
    {
      title: "Executive – Marketing & Corporate Relations",
      company: "Xcellon Education Ltd. (Claris Lifesciences)",
      period: "Dec 2008 – May 2010",
      duration: "1.5 Years",
      location: "Ahmedabad",
      overview:
        "Managed marketing initiatives and corporate partnerships for pharmaceutical and education sector company during growth phase.",
      responsibilities: [
        "Managed integrated marketing campaigns across digital and traditional channels",
        "Coordinated corporate events and strategic partnership initiatives",
        "Spearheaded ATL & BTL activities with creative teams for brand positioning",
        "Addressed public gatherings and conducted team training on sales and business development",
        "Built organizational foundation with strong marketing infrastructure",
        "Developed corporate communication strategies and brand messaging",
      ],
      impact: "Established strong brand presence and corporate relationships in growing market",
    },
    {
      title: "Marketing & Corporate Relations Executive",
      company: "Kuoni Travel Group (SOTC)",
      period: "Jan 2008 – Dec 2008",
      duration: "1 Year",
      location: "Ahmedabad",
      overview: "Managed corporate travel accounts and marketing initiatives for international travel company.",
      responsibilities: [
        "Managed premium corporate travel accounts for leading businesses",
        "Executed integrated marketing strategies for travel sector",
        "Built and maintained strong B2B relationships with corporate clients",
        "Coordinated travel packages and corporate event logistics",
      ],
      impact: "Established solid foundation in corporate travel sales and B2B marketing",
    },
    {
      title: "Customer Care Executive / Team Lead",
      company: "I-Call India Ltd. (Adani Group)",
      period: "Apr 2004 – Dec 2004",
      duration: "8 Months",
      location: "Ahmedabad",
      overview: "Provided customer support and team management for Adani Group subsidiary.",
      responsibilities: [
        "Provided exceptional customer support and issue resolution",
        "Led small customer care team with focus on satisfaction metrics",
        "Built strong foundation in customer relations and communication",
        "Trained team members on customer service excellence",
      ],
      impact: "Achieved high customer satisfaction scores and team efficiency",
    },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <img src="/experience-timeline.jpg" alt="background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Professional Journey
            </h1>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            17+ Years of Strategic Leadership, Business Growth, and Organizational Excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold text-primary">17+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Core Roles</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold text-primary">120+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Team Led</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold text-primary">₹150+Cr</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 mt-2"></div>
                  {idx < experiences.length - 1 && (
                    <div className="w-0.5 h-80 bg-gradient-to-b from-primary to-primary/20"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-3 sm:gap-4 pb-6 border-b border-primary/10">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-bold text-sm sm:text-base">{exp.duration}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm sm:text-base">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>

                    <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{exp.overview}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-primary mb-3 flex items-center gap-2">
                          <Target size={20} /> Key Responsibilities
                        </h4>
                        <div className="space-y-2">
                          {exp.responsibilities.map((responsibility, ridx) => (
                            <div key={ridx} className="flex gap-3">
                              <div className="text-primary mt-1 flex-shrink-0">✓</div>
                              <p className="text-foreground text-sm sm:text-base">{responsibility}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-primary/10">
                        <p className="text-sm sm:text-base flex items-start gap-2">
                          <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span>
                            <span className="font-bold text-primary">Impact:</span> {exp.impact}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
