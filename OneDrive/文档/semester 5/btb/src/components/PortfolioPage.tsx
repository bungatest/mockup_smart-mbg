import { useState } from "react";
import { MapPin, Calendar, ArrowRight, ExternalLink, X, Users, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/language-context";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  name: string;
  type: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  testimonial: string;
  client: string;
  tags: string[];
  duration?: string;
  budget?: string;
  team?: string;
  gallery?: string[];
}

export function PortfolioPage({ onNavigate }: { onNavigate?: (page: string, category?: string) => void }) {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "luxury-villa-gazebo-ubud",
      name: language === "en" ? "Luxury Villa Gazebo" : "Gazebo Villa Mewah",
      type: language === "en" ? "Villa" : "Vila",
      category: "gazebo",
      location: "Ubud, Bali",
      year: "2024",
      duration: language === "en" ? "3 months" : "3 bulan",
      budget: "$15,000",
      team: language === "en" ? "8 craftsmen" : "8 pengrajin",
      description: language === "en"
        ? "A stunning custom gazebo designed for a luxury villa overlooking rice terraces. Features intricate bamboo weaving and modern structural design."
        : "Gazebo kustom yang menakjubkan dirancang untuk villa mewah menghadap sawah terasering. Menampilkan anyaman bambu yang rumit dan desain struktural modern.",
      image: "https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "Absolutely beautiful work. The craftsmanship exceeded our expectations!"
        : "Pekerjaan yang sangat indah. Keahliannya melebihi ekspektasi kami!",
      client: "John Mitchell",
      tags: ["Bamboo Gazebo", "Luxury Design", "Villa Architecture"],
    },
    {
      id: "tropical-resort-restaurant-seminyak",
      name: language === "en" ? "Tropical Resort Restaurant" : "Restoran Resort Tropis",
      type: language === "en" ? "Restaurant" : "Restoran",
      category: "restaurant",
      location: "Seminyak, Bali",
      year: "2024",
      duration: language === "en" ? "4 months" : "4 bulan",
      budget: "$25,000",
      team: language === "en" ? "12 craftsmen" : "12 pengrajin",
      description: language === "en"
        ? "Complete bamboo interior and exterior design for a beachfront restaurant, creating an authentic tropical dining experience."
        : "Desain interior dan eksterior bambu lengkap untuk restoran tepi pantai, menciptakan pengalaman bersantap tropis yang autentik.",
      image: "https://images.unsplash.com/photo-1592885355659-53ce4560ce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMDUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "The bamboo design perfectly captures the Bali spirit. Our guests love it!"
        : "Desain bambu sempurna menangkap semangat Bali. Tamu kami menyukainya!",
      client: "The Beach House Bali",
      tags: ["Restaurant Design", "Bamboo Interior", "Beachfront"],
    },
    {
      id: "private-villa-compound-canggu",
      name: language === "en" ? "Private Villa Compound" : "Kompleks Villa Pribadi",
      type: language === "en" ? "Villa" : "Vila",
      category: "fencing",
      location: "Canggu, Bali",
      year: "2023",
      duration: language === "en" ? "2 months" : "2 bulan",
      budget: "$12,000",
      team: language === "en" ? "6 craftsmen" : "6 pengrajin",
      description: language === "en"
        ? "Comprehensive bamboo fencing and multiple gazebo structures for a private villa compound, combining privacy with natural elegance."
        : "Pagar bambu komprehensif dan beberapa struktur gazebo untuk kompleks villa pribadi, menggabungkan privasi dengan keanggunan alami.",
      image: "https://images.unsplash.com/photo-1728050829093-9ee62013968a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGJhbGl8ZW58MXx8fHwxNzYzMTA1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "Professional, timely, and the quality is outstanding. Highly recommended!"
        : "Profesional, tepat waktu, dan kualitasnya luar biasa. Sangat direkomendasikan!",
      client: "Sarah & David Thompson",
      tags: ["Bamboo Fencing", "Villa Compound", "Privacy Solutions"],
    },
    {
      id: "boutique-hotel-pavilion-ubud",
      name: language === "en" ? "Boutique Hotel Pavilion" : "Pavilion Hotel Boutique",
      type: language === "en" ? "Hotel" : "Hotel",
      category: "hotel",
      location: "Ubud, Bali",
      year: "2023",
      duration: language === "en" ? "5 months" : "5 bulan",
      budget: "$35,000",
      team: language === "en" ? "15 craftsmen" : "15 pengrajin",
      description: language === "en"
        ? "A large bamboo pavilion serving as the main reception and lounge area for a boutique eco-hotel."
        : "Pavilion bambu besar yang berfungsi sebagai area resepsionis utama dan lounge untuk hotel ramah lingkungan boutique.",
      image: "https://images.unsplash.com/photo-1752769041956-1af511b2a225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMGJhbGl8ZW58MXx8fHwxNzYzMTA1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "A masterpiece that perfectly represents our sustainable luxury brand."
        : "Sebuah karya yang sempurna merepresentasikan brand kemewahan berkelanjutan kami.",
      client: "Green Retreat Hotels",
      tags: ["Hotel Design", "Eco Architecture", "Bamboo Pavilion"],
    },
    {
      id: "modern-bamboo-fence-sanur",
      name: language === "en" ? "Modern Bamboo Fence" : "Pagar Bambu Modern",
      type: language === "en" ? "Residential" : "Residensial",
      category: "fencing",
      location: "Sanur, Bali",
      year: "2024",
      duration: language === "en" ? "1.5 months" : "1.5 bulan",
      budget: "$8,000",
      team: language === "en" ? "5 craftsmen" : "5 pengrajin",
      description: language === "en"
        ? "Contemporary bamboo fencing with innovative design patterns, providing both privacy and aesthetic appeal."
        : "Pagar bambu kontemporer dengan pola desain inovatif, memberikan privasi dan daya tarik estetika.",
      image: "https://images.unsplash.com/photo-1704200612857-0e9c9fd265ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMTA1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "The fence is not just functional, it's a work of art!"
        : "Pagar ini bukan hanya fungsional, tapi karya seni!",
      client: "Robert Anderson",
      tags: ["Modern Fencing", "Residential", "Design Innovation"],
    },
    {
      id: "bamboo-architecture-showcase-nusa-dua",
      name: language === "en" ? "Bamboo Architecture Showcase" : "Showcase Arsitektur Bambu",
      type: language === "en" ? "Resort" : "Resort",
      category: "resort",
      location: "Nusa Dua, Bali",
      year: "2023",
      duration: language === "en" ? "6 months" : "6 bulan",
      budget: "$50,000",
      team: language === "en" ? "20 craftsmen" : "20 pengrajin",
      description: language === "en"
        ? "Multiple bamboo structures throughout a luxury resort, showcasing the versatility and beauty of bamboo architecture."
        : "Beberapa struktur bambu di seluruh resort mewah, menampilkan keserbagunaan dan keindahan arsitektur bambu.",
      image: "https://images.unsplash.com/photo-1657043496304-2bf74ed2c2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBhcmNoaXRlY3R1cmUlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjMxMDUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: language === "en"
        ? "Bali Tiing Bamboo transformed our resort into a tropical paradise."
        : "Bali Tiing Bamboo mengubah resort kami menjadi surga tropis.",
      client: "Paradise Bay Resort",
      tags: ["Resort Architecture", "Bamboo Structures", "Luxury Design"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D5A3C] via-[#2C4A2B] to-[#2C2416]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5F1E8] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          {/* Breadcrumb */}
          <nav className="mb-12" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <a href="/" className="text-[#F5F1E8]/70 hover:text-white transition-colors">
                  {language === "en" ? "Home" : "Beranda"}
                </a>
              </li>
              <li className="text-[#F5F1E8]/50">/</li>
              <li className="text-white" aria-current="page">
                {language === "en" ? "Portfolio" : "Portofolio"}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 text-[#3D5A3C]" />
                <span className="text-[#2C2416] text-sm tracking-wide" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  {language === "en" ? "50+ Premium Projects" : "50+ Proyek Premium"}
                </span>
              </div>

              <h1
                className="text-white mb-6 tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.portfolio.title}
              </h1>

              <p
                className="text-[#F5F1E8]/90 text-lg mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {language === "en"
                  ? "Discover our collection of sustainable bamboo masterpieces. Each project tells a unique story of craftsmanship, innovation, and environmental harmony."
                  : "Temukan koleksi karya bambu berkelanjutan kami. Setiap proyek menceritakan kisah unik tentang keahlian, inovasi, dan harmoni lingkungan."}
              </p>

              {/* Stats Mini */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-white text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>50+</div>
                  <div className="text-white/90 text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                    {language === "en" ? "Projects" : "Proyek"}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-white text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>100%</div>
                  <div className="text-white/90 text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                    {language === "en" ? "Satisfaction" : "Kepuasan"}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-white text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>15+</div>
                  <div className="text-white/90 text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                    {language === "en" ? "Years" : "Tahun"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641754644192-24e09c2b444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBnYXplYm8lMjBiYWxpfGVufDF8fHx8MTc2MzEwNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bali Tiing Bamboo Portfolio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 via-transparent to-transparent" />

                {/* Floating Award Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl border border-white/40 p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[#2C2416] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                        {language === "en" ? "Award Winning" : "Pemenang Penghargaan"}
                      </div>
                      <div className="text-[#6B6456] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                        {language === "en" ? "Premium Craftsmanship" : "Keahlian Premium"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F5F1E8] px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#3D5A3C] rounded-full animate-pulse" />
              <span className="text-[#3D5A3C] text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                {language === "en" ? "Featured Projects" : "Proyek Unggulan"}
              </span>
            </div>

            <h2
              className="text-[#2C2416] mb-4 tracking-tight max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {language === "en"
                ? "Crafting Sustainable Bamboo Excellence"
                : "Menciptakan Keunggulan Bambu Berkelanjutan"}
            </h2>

            <p
              className="text-[#6B6456] max-w-2xl mx-auto text-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {language === "en"
                ? "From luxury villas to boutique resorts, explore how we transform spaces with premium bamboo craftsmanship."
                : "Dari villa mewah hingga resort boutique, jelajahi bagaimana kami mengubah ruang dengan keahlian bambu premium."}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                itemScope
                itemType="https://schema.org/CreativeWork"
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full overflow-hidden border border-[#3D5A3C]/10 hover:border-[#3D5A3C]/30 hover:shadow-luxury-lg transition-all duration-500 bg-white rounded-none">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F1E8]">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.name} - ${project.type} project in ${project.location} by Bali Tiing Bamboo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      itemProp="image"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        className="bg-white/95 backdrop-blur-md border border-white/40 text-[#2C2416] shadow-xl tracking-wide"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      >
                        {project.type}
                      </Badge>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <Button
                        className="bg-[#3D5A3C] hover:bg-[#2C4A2B] border-2 border-white/80 text-white px-8 py-6 rounded-none flex items-center gap-2 transition-all duration-200 shadow-2xl hover:shadow-luxury-lg hover:scale-105"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <span>{language === "en" ? "View Details" : "Lihat Detail"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Header */}
                    <header className="mb-4">
                      <h3
                        className="text-[#2C2416] mb-3 group-hover:text-[#3D5A3C] transition-colors duration-200 tracking-tight"
                        style={{ fontFamily: 'var(--font-serif)' }}
                        itemProp="name"
                      >
                        {project.name}
                      </h3>

                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-[#6B6456] mb-3">
                        <div
                          className="flex items-center gap-1.5"
                          itemProp="contentLocation"
                          itemScope
                          itemType="https://schema.org/Place"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#3D5A3C]" />
                          <span
                            itemProp="name"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          >
                            {project.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#3D5A3C]" />
                          <time
                            dateTime={project.year}
                            itemProp="dateCreated"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          >
                            {project.year}
                          </time>
                        </div>
                      </div>
                    </header>

                    {/* Description */}
                    <p
                      className="text-[#6B6456] text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                      itemProp="description"
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-[#F5F1E8] text-[#6B6456] rounded-sm border border-[#3D5A3C]/10 tracking-wide"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F1E8] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-[#2C2416] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {language === "en" ? "Ready to Start Your Project?" : "Siap Memulai Proyek Anda?"}
          </h2>
          <p
            className="text-[#6B6456] mb-8 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {language === "en"
              ? "Let's discuss how we can bring your vision to life with sustainable bamboo construction."
              : "Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan konstruksi bambu berkelanjutan."}
          </p>
          <Button
            className="bg-[#3D5A3C] text-white px-8 py-6 hover:bg-[#2C4A2B] transition-all duration-300 shadow-luxury hover:shadow-luxury-lg rounded-none group"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
          >
            <span>{language === "en" ? "Get a Free Quote" : "Dapatkan Penawaran Gratis"}</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-none border-[#3D5A3C]/20">
          {selectedProject && (
            <div>
              {/* Hero Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#F5F1E8]">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 via-transparent to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-10"
                >
                  <X className="w-5 h-5 text-[#2C2416]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <DialogHeader className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <DialogTitle
                        className="text-[#2C2416] mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {selectedProject.name}
                      </DialogTitle>
                      <div className="flex items-center gap-4 text-sm text-[#6B6456]">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#3D5A3C]" />
                          <span style={{ fontFamily: 'var(--font-sans)' }}>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#3D5A3C]" />
                          <span style={{ fontFamily: 'var(--font-sans)' }}>{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      className="bg-[#3D5A3C] text-white hover:bg-[#2C4A2B] text-sm px-4 py-2"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {selectedProject.type}
                    </Badge>
                  </div>
                </DialogHeader>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#F5F1E8] p-4 border-l-2 border-[#3D5A3C]">
                    <div className="text-xs text-[#6B6456] uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                      {language === "en" ? "Duration" : "Durasi"}
                    </div>
                    <div className="text-[#2C2416]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                      {selectedProject.duration}
                    </div>
                  </div>
                  <div className="bg-[#F5F1E8] p-4 border-l-2 border-[#3D5A3C]">
                    <div className="text-xs text-[#6B6456] uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                      {language === "en" ? "Investment" : "Investasi"}
                    </div>
                    <div className="text-[#2C2416]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                      {selectedProject.budget}
                    </div>
                  </div>
                  <div className="bg-[#F5F1E8] p-4 border-l-2 border-[#3D5A3C]">
                    <div className="text-xs text-[#6B6456] uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                      {language === "en" ? "Team" : "Tim"}
                    </div>
                    <div className="text-[#2C2416]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                      {selectedProject.team}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4
                    className="text-[#2C2416] mb-3 tracking-tight"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {language === "en" ? "Project Overview" : "Tinjauan Proyek"}
                  </h4>
                  <p
                    className="text-[#6B6456] leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h4
                    className="text-[#2C2416] mb-3 tracking-tight text-lg"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {language === "en" ? "Features" : "Fitur"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#F5F1E8] text-[#3D5A3C] border border-[#3D5A3C]/20 tracking-wide"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-white/95 mb-3 italic text-lg leading-relaxed"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        "{selectedProject.testimonial}"
                      </p>
                      <div className="text-[#F5F1E8]/80 tracking-wide" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                        — {selectedProject.client}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 mt-8">
                  <Button
                    onClick={() => onNavigate && onNavigate("contact", selectedProject?.category)}
                    className="flex-1 bg-[#3D5A3C] text-white hover:bg-[#2C4A2B] py-6 rounded-none shadow-lg"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  >
                    {language === "en" ? "Request Similar Project" : "Minta Proyek Serupa"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#3D5A3C] text-[#3D5A3C] hover:bg-[#F5F1E8] py-6 rounded-none"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    {language === "en" ? "Close" : "Tutup"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
