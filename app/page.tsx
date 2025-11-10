import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Achievements from "@/components/Achievements"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shaishav Kayastha - Business Leader & EdTech Expert | IIM Ahmedabad",
  description: "Strategic business leader with 17+ years in EdTech. Led 120+ teams, generated ₹150+ Cr revenue. IIM Ahmedabad alumni. Business consultation, speaking engagements & mentoring.",
  keywords: "Shaishav Kayastha, Business Leader, EdTech Expert, IIM Ahmedabad, Business Consultant, Strategic Planning, Leadership, Ahmedabad",
  authors: [{ name: "Shaishav Kayastha" }],
  openGraph: {
    title: "Shaishav Kayastha - Business Leader & EdTech Expert",
    description: "Strategic business leader transforming EdTech with 17+ years experience. IIM Ahmedabad alumni.",
    url: "https://shaishavkayastha.com",
    siteName: "Shaishav Kayastha",
    images: [
      {
        url: "/hero.JPG",
        width: 1200,
        height: 630,
        alt: "Shaishav Kayastha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaishav Kayastha - Business Leader & EdTech Expert",
    description: "Strategic business leader with 17+ years in EdTech. IIM Ahmedabad alumni.",
    images: ["/hero.JPG"],
  },
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  )
}
