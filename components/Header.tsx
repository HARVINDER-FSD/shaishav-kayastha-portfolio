"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Briefcase } from "lucide-react"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Expertise", href: "/expertise" },
    { label: "Education", href: "/education" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-xl bg-background/95 border-b border-border z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-9 sm:w-10 lg:w-12 h-9 sm:h-10 lg:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
              <Briefcase className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-sm lg:text-base text-primary">Shaishav Kayastha</p>
              <p className="text-xs text-muted-foreground hidden md:block">Business Leader & Consultant</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-4 lg:gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs lg:text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 uppercase tracking-wider hover:drop-shadow-lg whitespace-nowrap"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:block bg-primary text-primary-foreground px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex-shrink-0"
          >
            Get In Touch
          </Link>

          <button
            className="lg:hidden p-1 sm:p-2 text-foreground flex-shrink-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar menu"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-56 sm:w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } mt-16 sm:mt-20 lg:hidden`}
      >
        <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm sm:text-base font-semibold text-muted-foreground hover:text-primary transition-colors py-2 sm:py-3 border-b border-border/50"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center hover:shadow-xl hover:shadow-primary/40 transition-all duration-200 mt-4 sm:mt-6"
            onClick={() => setSidebarOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  )
}
