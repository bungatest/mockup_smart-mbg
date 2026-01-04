import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../lib/language-context";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "portfolio", label: t.nav.portfolio },
    { key: "products", label: t.nav.products },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C2416] via-[#1F1A10] to-[#2C2416] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎋</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500 }}>Bali Tiing</span>
                <span className="text-xs text-[#D4C5A3] uppercase tracking-widest" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>Bamboo Craftsmen</span>
              </div>
            </div>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              {t.footer.about}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 hover:bg-[#3D5A3C] border border-white/10 hover:border-[#3D5A3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 hover:bg-[#3D5A3C] border border-white/10 hover:border-[#3D5A3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 hover:bg-[#3D5A3C] border border-white/10 hover:border-[#3D5A3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 500 }}>{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="text-white/60 hover:text-[#D4C5A3] text-sm transition-colors duration-300 group flex items-center"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                  >
                    <span className="w-0 h-px bg-[#D4C5A3] group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 500 }}>{t.contact.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/70 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4C5A3]" />
                <span>Ubud, Gianyar<br />Bali, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                <Phone className="w-5 h-5 flex-shrink-0 text-[#D4C5A3]" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70 hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                <Mail className="w-5 h-5 flex-shrink-0 text-[#D4C5A3]" />
                <span>info@balitiing.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sustainability Statement */}
        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="bg-gradient-to-r from-[#3D5A3C]/20 to-transparent rounded-2xl p-8 mb-10 border border-[#3D5A3C]/20">
            <h4 className="text-white mb-3 tracking-wide" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 500 }}>{t.footer.sustainability}</h4>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              {t.footer.sustainabilityText}
            </p>
          </div>

          <div className="text-center text-white/50 text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Bali Tiing Bamboo. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
