import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up order-2 md:order-1">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 bg-primary/20 border border-primary rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">IIM Ahmedabad Alumni</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Shaishav <span className="text-primary">Kayastha</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg pt-2 sm:pt-3 md:pt-4">
              Strategic business leader transforming EdTech, building high-performing teams, and driving sustainable
              growth across the education sector.
            </p>
          </div>

          <div className="flex justify-center pt-3 sm:pt-4 md:pt-6">
            <button className="group bg-primary text-primary-foreground px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center animate-slide-in-left order-1 md:order-2">
          <div className="relative w-full max-w-sm lg:max-w-md">
            {/* Animated gradient background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl animate-pulse"></div>
            
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
            
            {/* Image container with modern frame */}
            <div className="relative w-full aspect-square overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
                <img
                  src="/hero.JPG"
                  alt="Shaishav Kayastha"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
