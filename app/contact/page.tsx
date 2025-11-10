import Header from "@/components/Header"
import ContactPageContent from "@/components/ContactPageContent"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Contact - Shaishav Kayastha",
  description:
    "Get in touch with Shaishav Kayastha for business consultation, speaking engagements, partnerships, or mentoring opportunities.",
}

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
