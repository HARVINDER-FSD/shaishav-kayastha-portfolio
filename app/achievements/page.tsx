import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Trophy, Star, Radio, Mic, Book, TrendingUp, Target, AwardIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Awards & Achievements - Shaishav Kayastha | Times of India Men of the Year",
  description: "Times of India 'Men of the Year' 2018 & 2019. Multiple Extramarks National Awards. ₹150+ Cr revenue generated. 700K+ teacher trainings delivered.",
  openGraph: {
    title: "Achievements - Shaishav Kayastha",
    description: "National awards, industry recognition, and measurable impact in EdTech.",
    images: ["/gift.JPG"],
  },
}

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Times of India - Men of the Year",
      description:
        "Recognized as 'Men of the Year' for exceptional contributions to business, education, and community development",
      years: "2018 & 2019",
      impact: "Honored for visionary leadership and transformational impact in EdTech sector",
    },
    {
      icon: Star,
      title: "Extramarks National Award - Best Business Head",
      description:
        "Awarded for outstanding business leadership, strategic vision, and consistent results across national operations",
      years: "Multiple Years",
      impact: "Recognized for building high-performing teams and delivering exceptional business outcomes",
    },
    {
      icon: TrendingUp,
      title: "Extramarks National Award - Best Revenue Generation",
      description:
        "Recognized for consistently delivering exceptional financial results and market growth across regions",
      years: "Multiple Years",
      impact: "Drove ₹150+ Cr regional revenue and created sustainable growth models",
    },
    {
      icon: Trophy,
      title: "Extramarks National Award - Best Team Lead",
      description:
        "Acknowledged for building and leading high-performing teams, mentoring talent, and fostering organizational excellence",
      years: "Multiple Years",
      impact: "Successfully developed and managed 120+ member teams with high engagement and retention",
    },
  ]

  const milestones = [
    { number: "₹150+ Cr", text: "Regional Revenue Generated Over 15 Years", icon: TrendingUp },
    { number: "₹74 Cr", text: "Cash Revenue from Go-to-Market Plans", icon: Target },
    { number: "7,00,000+", text: "Teacher Trainings Delivered Pan-India", icon: Book },
    { number: "120+", text: "Team Members Managed & Developed", icon: AwardIcon },
    { number: "#1", text: "Extramarks Market Position in Gujarat since 2012", icon: Trophy },
    { number: "100%", text: "Advance Payment Model Created for Gujarat Territory", icon: Star },
  ]

  const engagement = [
    {
      icon: Radio,
      title: "Radio Personality & Voice Artist",
      description: "Guest Radio Jockey & Voiceover Artist – Radio One FM 95 & 93.5 S FM",
      details:
        "Created engaging content on business, education, and personal development for radio audiences across Gujarat",
    },
    {
      icon: Book,
      title: "Academic Contributor & Mentor",
      description: "Visiting Faculty – Various premier business schools in India",
      details: "Mentoring students and professionals in business strategy, leadership, and entrepreneurship",
    },
    {
      icon: Mic,
      title: "Public Speaker & Influencer",
      description: "Social Media Influencer & Motivational Public Speaker with 50K+ combined followers",
      details: "Sharing insights on business leadership, education transformation, and personal growth",
    },
  ]

  const socialMedia = [
    {
      platform: "LinkedIn",
      handle: "Shaishav Kayastha",
      followers: "5514+",
      details: "Professional insights and business updates",
    },
    {
      platform: "Instagram",
      handle: "Shaishav.edupreneur",
      followers: "23K+",
      details: "Personal growth and educational content",
    },
    {
      platform: "Facebook",
      handle: "Shaishav Kayastha",
      followers: "2750+",
      details: "Community engagement and updates",
    },
    {
      platform: "Twitter/X",
      handle: "Shaishav Kayastha",
      followers: "667+",
      details: "Thoughts on education and business",
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
                Achievements & Recognition
              </h1>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Excellence Recognized Through Awards, Accomplishments, and Meaningful Impact
            </p>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-[24rem] h-[18rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/gift.JPG"
                alt="Shaishav Kayastha - Awards & Recognition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-card to-card/50 border border-primary/20 hover:border-primary/40 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-primary/10">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                    <span className="text-primary font-bold text-xs sm:text-sm bg-primary/10 px-3 py-1 rounded-full inline-block whitespace-nowrap">
                      {achievement.years}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                  {achievement.description}
                </p>
                <p className="text-foreground text-sm flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-1">✓</span>
                  <span>{achievement.impact}</span>
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Major Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, idx) => {
            const IconComponent = milestone.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">{milestone.number}</p>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  {milestone.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Additional Engagements */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Beyond Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagement.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3">{item.description}</p>
                <p className="text-foreground text-xs sm:text-sm border-t border-primary/10 pt-3">{item.details}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">Digital Presence & Community</h2>
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-xl p-8 sm:p-12">
          <p className="text-muted-foreground mb-8 text-base sm:text-lg">
            Active across multiple platforms with 50K+ combined followers, sharing insights on business leadership,
            education transformation, and professional growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialMedia.map((social, idx) => (
              <div
                key={idx}
                className="bg-card/50 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
              >
                <h4 className="text-primary font-bold text-lg mb-2">{social.platform}</h4>
                <p className="text-muted-foreground text-sm mb-2">@{social.handle}</p>
                <p className="text-primary font-bold text-base mb-2">{social.followers} Followers</p>
                <p className="text-muted-foreground text-sm">{social.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
