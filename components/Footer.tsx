import { Mail, Phone, MapPin, Linkedin, Instagram, Mic2 } from "lucide-react"

export default function Footer() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "shaishav.kayastha@gmail.com", href: "mailto:shaishav.kayastha@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 90999 21767", href: "tel:+919099921767" },
    { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
  ]

  const social = [
    { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/shaishav-kayastha", followers: "5.5K+" },
    { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/shaishav.edupreneur", followers: "23K+" },
    { platform: "Facebook", icon: Mic2, url: "https://www.facebook.com/shaishav.kayastha", followers: "2.7K+" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
  ]

  return (
    <footer className="bg-[#0f1419] border-t border-[#334155]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-14">
          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a574] mb-5 sm:mb-6">Get In Touch</h3>
            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <div key={idx} className="flex gap-3 sm:gap-4">
                    <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs text-[#94a3b8] uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-[#d4a574] transition-colors font-medium text-sm sm:text-base break-all sm:break-normal"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Follow Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a574] mb-5 sm:mb-6">Follow</h3>
            <div className="space-y-4 sm:space-y-5">
              {social.map((s, idx) => {
                const IconComponent = s.icon
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 sm:gap-4 items-center hover:translate-x-1 transition-transform duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1a1f2e] border border-[#334155] flex items-center justify-center group-hover:bg-[#d4a574]/10 group-hover:border-[#d4a574] transition-all">
                      <IconComponent className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <div>
                      <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#d4a574] transition-colors block">
                        {s.platform}
                      </span>
                      <span className="text-[#94a3b8] text-xs">{s.followers}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a574] mb-5 sm:mb-6">Quick Links</h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white hover:text-[#d4a574] transition-colors font-medium text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#334155] pt-8 sm:pt-10 md:pt-12">
          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="text-[#94a3b8] text-center sm:text-left">
              <p>© 2025 Shaishav Kayastha. All rights reserved.</p>
              <p className="mt-1">
                Designed & Developed by{" "}
                <a
                  href="https://www.instagram.com/ignitegrowthadvertising?igsh=eDAwdmk2NDIzYTRh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a574] font-semibold hover:text-[#e0b886] transition-colors"
                >
                  Ignite Growth Advertising
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#" className="text-[#94a3b8] hover:text-[#d4a574] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#94a3b8] hover:text-[#d4a574] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
