import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../lib/language-context";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.service1Title,
      description: t.services.service1Desc,
      image: "https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Custom designs for any space",
        "Structural engineering excellence",
        "Weather-resistant treatments",
        "Professional installation",
      ],
    },
    {
      title: t.services.service2Title,
      description: t.services.service2Desc,
      image: "https://images.unsplash.com/photo-1704200612857-0e9c9fd265ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMTA1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Privacy & decorative options",
        "Multiple design styles",
        "Durable & long-lasting",
        "Easy maintenance",
      ],
    },
    {
      title: t.services.service3Title,
      description: t.services.service3Desc,
      image: "https://images.unsplash.com/photo-1592885355659-53ce4560ce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMDUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Complete architectural design",
        "3D rendering & visualization",
        "Interior & exterior solutions",
        "End-to-end project management",
      ],
    },
  ];

  const processSteps = [
    t.services.process1,
    t.services.process2,
    t.services.process3,
    t.services.process4,
    t.services.process5,
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657043496304-2bf74ed2c2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBhcmNoaXRlY3R1cmUlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjMxMDUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl mb-4">{t.services.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive bamboo solutions for your dream property
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl text-green-900 mb-4">{service.title}</h2>
                <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate("contact")}
                  className="bg-green-700 hover:bg-green-800"
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-green-900 text-center mb-12">
            {t.services.processTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {index + 1}
                </div>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-green-900 mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a consultation and detailed quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("portfolio")}
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50"
            >
              {t.hero.cta}
            </Button>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-green-700 hover:bg-green-800"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
