import { Leaf, Heart, Users } from "lucide-react";
import { useLanguage } from "../lib/language-context";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601062032283-9c1a28ad50e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzMTA1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/60 via-[#2C2416]/40 to-[#2C2416]/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6 lg:px-12 animate-fade-in-up">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D4C5A3] mb-6 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>{t.about.title}</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-6 lg:px-12 texture-organic">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-2xl flex items-center justify-center mb-6 shadow-luxury">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl text-[#2C2416] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>{t.about.storyTitle}</h2>
              </div>
              <p className="text-[#6B6456] text-lg leading-relaxed mb-12" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                {t.about.storyText}
              </p>
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-2xl flex items-center justify-center mb-6 shadow-luxury">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl text-[#2C2416] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>{t.about.philosophyTitle}</h3>
              </div>
              <p className="text-[#6B6456] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                {t.about.philosophyText}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-72 rounded-2xl overflow-hidden shadow-luxury group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577199019410-0d4567e04117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBtYXRlcmlhbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMTA1MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bamboo texture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-72 rounded-2xl overflow-hidden mt-12 shadow-luxury group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bamboo gazebo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-80 rounded-2xl overflow-hidden col-span-2 shadow-luxury-lg group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1592885355659-53ce4560ce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMDUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bamboo interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-[#F5F1E8] texture-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-luxury-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B6456] mb-4 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2416] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>{t.about.teamTitle}</h2>
          </div>
          <p className="text-[#6B6456] text-xl leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            {t.about.teamText}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B6456] mb-4 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2416]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {t.home.whyChooseTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-10 bg-gradient-to-br from-white to-[#F5F1E8] rounded-3xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group border border-[#3D5A3C]/10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-luxury">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{t.footer.sustainability}</h3>
              <p className="text-[#6B6456] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                {t.footer.sustainabilityText}
              </p>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-white to-[#F5F1E8] rounded-3xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group border border-[#3D5A3C]/10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-luxury">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{t.home.whyChoose3}</h3>
              <p className="text-[#6B6456] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Every project is tailored to your unique vision and requirements, ensuring exceptional results.
              </p>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-white to-[#F5F1E8] rounded-3xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group border border-[#3D5A3C]/10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-luxury">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{t.home.whyChoose1}</h3>
              <p className="text-[#6B6456] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Our master craftsmen bring generations of traditional knowledge combined with modern techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
