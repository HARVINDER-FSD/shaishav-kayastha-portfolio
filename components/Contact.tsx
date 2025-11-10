"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export default function Contact() {
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
      // Simulated form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setStatusMessage("Your message has been sent successfully!")
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
      setSubmitStatus("error")
      setStatusMessage("Failed to send message. Please try again.")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    { icon: Mail, label: "Email", value: "shaishav.kayastha@gmail.com", href: "mailto:shaishav.kayastha@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 90999 21767", href: "tel:+919099921767" },
    { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
  ]

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-background border-t border-border"
    >
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: "url('/contact-background.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase text-primary tracking-widest mb-2 sm:mb-3 md:mb-4">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4 md:mb-6">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Ready to discuss your project or explore opportunities? I'm always open to conversations about business
            growth, innovation, and transformative initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {contactDetails.map((detail, idx) => {
            const IconComponent = detail.icon
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer animate-fade-in-up hover:shadow-xl"
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
                    className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-base sm:text-lg font-bold text-foreground">{detail.value}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Form - improved responsive form layout */}
        <div className="max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-foreground">First Name</label>
                <input
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
                <label className="text-xs sm:text-sm font-semibold text-foreground">Last Name</label>
                <input
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
                <label className="text-xs sm:text-sm font-semibold text-foreground">Email</label>
                <input
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
                <label className="text-xs sm:text-sm font-semibold text-foreground">Phone</label>
                <input
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
              <label className="text-xs sm:text-sm font-semibold text-foreground">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-semibold text-foreground">Subject</label>
              <select
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
              <label className="text-xs sm:text-sm font-semibold text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm"
                placeholder="Share your thoughts, ideas, or inquiries..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <p className="text-emerald-500 font-medium text-xs sm:text-sm">{statusMessage}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-500 font-medium text-xs sm:text-sm">{statusMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
