import { Check, Leaf, Users, Award, Shield, Paintbrush } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../lib/language-context";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.service1Title,
      description: t.services.service1Desc,
      image: "https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🏯",
    },
    {
      title: t.services.service2Title,
      description: t.services.service2Desc,
      image: "https://images.unsplash.com/photo-1704200612857-0e9c9fd265ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMTA1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🎍",
    },
    {
      title: t.services.service3Title,
      description: t.services.service3Desc,
      image: "https://images.unsplash.com/photo-1592885355659-53ce4560ce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMDUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "✨",
    },
  ];

  const whyChooseUs = [
    { text: t.home.whyChoose1, icon: Users },
    { text: t.home.whyChoose2, icon: Leaf },
    { text: t.home.whyChoose3, icon: Paintbrush },
    { text: t.home.whyChoose4, icon: Shield },
    { text: t.home.whyChoose5, icon: Award },
    { text: t.home.whyChoose6, icon: Check },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657043496304-2bf74ed2c2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBhcmNoaXRlY3R1cmUlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjMxMDUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bamboo Architecture"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/70 via-[#2C2416]/50 to-[#2C2416]/70" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white animate-fade-in-up">
          <div className="mb-6 inline-block">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4C5A3] opacity-90" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Sustainable Luxury Since 2009
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, letterSpacing: '-0.03em' }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("portfolio")}
              className="bg-white text-[#3D5A3C] hover:bg-[#F5F1E8] shadow-luxury hover:shadow-luxury-lg transition-all duration-500 px-10 py-6 text-base"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              {t.hero.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("contact")}
              className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-10 py-6 text-base transition-all duration-500"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6 lg:px-12 texture-organic">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B6456]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Welcome
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2416] mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            {t.home.introTitle}
          </h2>
          <p className="text-lg md:text-xl text-[#6B6456] leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            {t.home.introText}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B6456] mb-4 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2416] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {t.home.servicesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-luxury-lg transition-all duration-500 cursor-pointer group border-[#3D5A3C]/10 bg-white"
                onClick={() => onNavigate("services")}
              >
                <div className="h-80 overflow-hidden relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 via-[#2C2416]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 text-6xl opacity-90 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl text-[#2C2416] mb-4 group-hover:text-[#3D5A3C] transition-colors duration-300" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{service.title}</h3>
                  <p className="text-[#6B6456] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => onNavigate("services")}
              className="bg-[#3D5A3C] hover:bg-[#2C4A2B] text-white shadow-luxury hover:shadow-luxury-lg transition-all duration-500 px-10 py-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              {t.nav.services}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#F5F1E8] to-white texture-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6B6456] mb-4 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2416] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {t.home.whyChooseTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group border border-[#3D5A3C]/10"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-[#2C2416] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D5A3C] via-[#2C4A2B] to-[#3D5A3C]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4C5A3] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D4C5A3] mb-6 block" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            Start Your Project
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            {t.contact.title}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            {t.contact.subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-white text-[#3D5A3C] hover:bg-[#F5F1E8] shadow-luxury-lg hover:shadow-2xl transition-all duration-500 px-12 py-7 text-lg"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.05em' }}
          >
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </section>
    </div>
  );
}
