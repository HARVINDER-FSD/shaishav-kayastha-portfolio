"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Phone, Mail, Calendar, Award, Target, Zap, Briefcase, Users, TrendingUp } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Leadership Excellence",
      description:
        "Leading 120+ member teams across sales, training, marketing, and service functions with a focus on growth and development.",
    },
    {
      icon: Target,
      title: "Revenue Generation",
      description:
        "Enhanced regional revenue to ₹150+ Cr over 15 years through data-driven planning and strategic execution.",
    },
    {
      icon: Zap,
      title: "Market Transformation",
      description:
        "Contributed to Extramarks becoming the No. 1 EdTech company in Gujarat since 2012 with innovative market strategies.",
    },
  ]

  const strengths = [
    {
      icon: Briefcase,
      title: "Strategic Visionary",
      desc: "Crafting comprehensive business strategies that drive sustainable growth",
    },
    {
      icon: Users,
      title: "Team Builder",
      desc: "Developing high-performance teams with mentoring and leadership excellence",
    },
    {
      icon: TrendingUp,
      title: "Growth Catalyst",
      desc: "Transforming markets and creating breakthrough business opportunities",
    },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      {/* Background with overlay */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <img src="/about-hero.jpg" alt="background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/about.JPG"
                alt="Shaishav Kayastha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up order-1 md:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                Shaishav Kayastha
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                IIM Ahmedabad Alumni | Business Head | Public Speaker
              </p>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>

            <div className="space-y-3 text-base sm:text-lg">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">
                  A-5, Sangath Bungalows – I, Near Motera Stadium, Motera Road, Sabarmati, Ahmedabad – 380005, Gujarat,
                  India.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <a href="tel:+919099921767" className="hover:text-primary transition-colors font-semibold">
                  +91 90999 21767
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <a
                  href="mailto:shaishav.kayastha@gmail.com"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  shaishav.kayastha@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary flex-shrink-0" size={24} />
                <p className="text-muted-foreground">17th April 1986 | English, Hindi, Gujarati</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Professional Overview</h2>
        <div className="space-y-6">
          <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              Strategic and performance-driven business leader with{" "}
              <span className="text-primary font-bold">over 17 years of expertise</span> in managing large-scale
              operations, leading teams of 120+ members, and driving transformational change across the education and
              service sectors.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Specialized expertise in{" "}
              <span className="text-primary font-bold">
                Marketing Strategy, Sales Leadership, P&L Management, Business Operations
              </span>
              , and <span className="text-primary font-bold">Organizational Development</span> within rapidly growing
              industries.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Proven track record in transforming underperforming regions into high-revenue zones through innovative
              strategies, building high-performance teams, and implementing customer-centric solutions that drive
              sustainable growth.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-primary font-bold">Key Contribution:</span> Instrumental in establishing Extramarks
              as India's No. 1 EdTech company in Gujarat with consistent revenue growth from ₹5 Cr to ₹150+ Cr over 15
              years.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Key Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Major Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Professional Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create sustainable business growth through innovation, strategic excellence, and the development of
                high-performing teams that deliver exceptional value to customers and stakeholders.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To lead organizations in transforming their market position through data-driven strategies, operational
                excellence, and a commitment to continuous learning and improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
