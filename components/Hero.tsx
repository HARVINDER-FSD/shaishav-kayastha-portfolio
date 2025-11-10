import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 bg-primary/20 border border-primary rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">IIM Ahmedabad Alumni</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-pretty text-foreground">
              Shaishav
              <span className="block text-primary">Kayastha</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg pt-2 sm:pt-3 md:pt-4">
              Strategic business leader transforming EdTech, building high-performing teams, and driving sustainable
              growth across the education sector.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6">
            <button className="group bg-primary text-primary-foreground px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Shaishav Kayastha CV .docx"
              download="Shaishav-Kayastha-CV.docx"
              className="border-2 border-primary hover:bg-primary/10 text-foreground px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm md:text-base inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center animate-slide-in-left">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl"></div>
            <div className="relative w-full aspect-square rounded-3xl bg-secondary/20 border-2 border-primary flex items-center justify-center overflow-hidden group cursor-pointer">
              <img
                src="/hero.JPG"
                alt="Shaishav Kayastha"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
