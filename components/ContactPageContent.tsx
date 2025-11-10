"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2, AlertCircle, Send, Settings } from "lucide-react"

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is your typical response time?",
      answer:
        "I typically respond to inquiries within 24-48 hours. For urgent matters, you can reach me directly via phone at +91 90999 21767.",
    },
    {
      question: "Do you offer remote consultations?",
      answer:
        "Yes, I offer both in-person and remote consultations via video call, phone, or email depending on your preference and needs. Remote consultations are available globally.",
    },
    {
      question: "What are your areas of expertise?",
      answer:
        "I specialize in business consultation, organizational development, strategic planning, executive coaching, EdTech transformation, and team leadership. Visit the Expertise page for detailed information about my 8 core competencies.",
    },
    {
      question: "How do I request a speaking engagement?",
      answer:
        "Select 'Speaking Engagement' as the subject in the contact form and provide details about your event, audience size, date, location, and topic requirements. I typically respond within 24 hours with availability and next steps.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "While my primary expertise is in EdTech, I work with organizations across various industries including education, technology, services, and corporate sectors. My strategic planning and leadership skills are transferable across industries.",
    },
    {
      question: "Do you offer mentoring programs?",
      answer:
        "Yes, I offer one-on-one mentoring and group coaching programs for business leaders, entrepreneurs, and professionals looking to advance their careers. Programs are customized based on your goals and needs.",
    },
  ]

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-border bg-background/50 overflow-hidden transition-all duration-300 hover:border-primary/50"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-primary/5 transition-colors group"
          >
            <h3 className="text-base sm:text-lg font-bold text-foreground">{faq.question}</h3>
            <Settings
              className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-500 ${
                openIndex === idx ? "rotate-180 scale-110" : "group-hover:rotate-45"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitStatus("success")
      setStatusMessage("Your message has been sent successfully! I'll get back to you soon.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus("error")
      setStatusMessage("Failed to send message. Please try again or email directly at shaishav.kayastha@gmail.com")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "shaishav.kayastha@gmail.com",
      href: "mailto:shaishav.kayastha@gmail.com",
      description: "For general inquiries and collaborations",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90999 21767",
      href: "tel:+919099921767",
      description: "Available for direct calls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      description: "Based in Ahmedabad with global reach",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "24-48 hours",
      description: "Typically respond within 1-2 business days",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: "url('/contact-background.jpg')",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className="text-xs font-semibold uppercase text-primary tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pretty mb-4 sm:mb-6 md:mb-8">
            Let's Start a Conversation
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in business consultation, speaking engagements, partnership opportunities, or
            mentoring, I'd love to hear from you. Let's explore how we can work together to achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {contactDetails.map((detail, idx) => {
              const IconComponent = detail.icon
              return (
                <div
                  key={idx}
                  className="group p-6 sm:p-7 rounded-2xl border border-border hover:border-primary bg-background/50 hover:bg-primary/5 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4 p-3 bg-primary/20 rounded-xl w-fit group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors block mb-2"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-bold text-foreground mb-2">{detail.value}</p>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground">{detail.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section - 2 Columns */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Send Me a Message</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form and I'll get back to you as soon as possible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs sm:text-sm font-semibold text-foreground">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs sm:text-sm font-semibold text-foreground">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-foreground">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-foreground">
                  Phone <span className="text-muted-foreground">(Optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-xs sm:text-sm font-semibold text-foreground">
                Company <span className="text-muted-foreground">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-foreground">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              >
                <option value="">Select a subject</option>
                <option value="business-consultation">Business Consultation</option>
                <option value="speaking-engagement">Speaking Engagement</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="mentoring">Mentoring & Coaching</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-foreground">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm"
                placeholder="Share your thoughts, ideas, or inquiries..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-3 p-4 sm:p-5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <p className="text-emerald-500 font-medium text-sm">{statusMessage}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-3 p-4 sm:p-5 rounded-lg bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-500 font-medium text-sm">{statusMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </>
              )}
            </button>
            </form>

            {/* Right Column - Contact Information */}
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactDetails.map((detail, idx) => {
                    const IconComponent = detail.icon
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg h-fit">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-base font-bold text-foreground hover:text-primary transition-colors block mb-1"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-base font-bold text-foreground mb-1">{detail.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{detail.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <h3 className="text-lg font-bold mb-3 text-primary">Why Connect?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Business consultation & strategic planning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Speaking engagements & workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Partnership opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Mentoring & executive coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Quick answers to common questions about working together
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>
    </>
  )
}
