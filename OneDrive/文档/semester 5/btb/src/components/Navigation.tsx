import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/language-context";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const navRef = useRef<HTMLDivElement>(null);

  // Close all dropdowns when page changes
  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setPortfolioOpen(false);
    setProductsOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setPortfolioOpen(false);
        setProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services, hasDropdown: true },
    { key: "portfolio", label: t.nav.portfolio, hasDropdown: true },
    { key: "products", label: t.nav.products, hasDropdown: true },
    { key: "contact", label: t.nav.contact },
  ];

  const handleDropdownClick = (page: string) => {
    onNavigate(page);
    setServicesOpen(false);
    setPortfolioOpen(false);
    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  const servicesDropdown = [
    { 
      label: language === "en" ? "Custom Bamboo Gazebos" : "Gazebo Bambu Kustom",
      action: () => handleDropdownClick("services")
    },
    { 
      label: language === "en" ? "Bamboo Fencing Solutions" : "Solusi Pagar Bambu",
      action: () => handleDropdownClick("services")
    },
    { 
      label: language === "en" ? "Design & Construction" : "Desain & Konstruksi",
      action: () => handleDropdownClick("services")
    },
  ];

  const portfolioDropdown = [
    { 
      label: language === "en" ? "All Projects" : "Semua Proyek",
      action: () => handleDropdownClick("portfolio")
    },
    { 
      label: language === "en" ? "Villas & Residences" : "Villa & Residensi",
      action: () => handleDropdownClick("portfolio")
    },
    { 
      label: language === "en" ? "Resorts & Hotels" : "Resort & Hotel",
      action: () => handleDropdownClick("portfolio")
    },
    { 
      label: language === "en" ? "Restaurants & Cafes" : "Restoran & Kafe",
      action: () => handleDropdownClick("portfolio")
    },
  ];

  const productsDropdown = [
    { 
      label: language === "en" ? "All Products" : "Semua Produk",
      action: () => handleDropdownClick("products")
    },
    { 
      label: language === "en" ? "Bamboo Poles" : "Batang Bambu",
      action: () => handleDropdownClick("products")
    },
    { 
      label: language === "en" ? "Bamboo Panels" : "Panel Bambu",
      action: () => handleDropdownClick("products")
    },
    { 
      label: language === "en" ? "Bamboo Flooring" : "Lantai Bambu",
      action: () => handleDropdownClick("products")
    },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#2C2416]/20 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <nav ref={navRef} className="fixed top-0 left-0 right-0 glass-effect border-b border-[#3D5A3C]/10 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#3D5A3C] to-[#2C4A2B] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl">🎋</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2C2416] tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>Bali Tiing</span>
              <span className="text-xs text-[#6B6456] uppercase tracking-widest" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>Bamboo Craftsmen</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              if (item.hasDropdown && item.key === "services") {
                return (
                  <div key={item.key} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`text-sm tracking-wide transition-all duration-300 relative group flex items-center gap-1 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C]"
                          : "text-[#6B6456] hover:text-[#3D5A3C]"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#3D5A3C] transition-all duration-300 ${
                        currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-[#3D5A3C]/20 shadow-luxury-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="py-2">
                          {servicesDropdown.map((dropItem, idx) => (
                            <button
                              key={idx}
                              onClick={dropItem.action}
                              className="w-full text-left px-6 py-3 text-sm text-[#2C2416] hover:bg-[#F5F1E8] hover:text-[#3D5A3C] transition-all duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]"
                              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                            >
                              {dropItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else if (item.hasDropdown && item.key === "portfolio") {
                return (
                  <div key={item.key} className="relative">
                    <button
                      onClick={() => setPortfolioOpen(!portfolioOpen)}
                      className={`text-sm tracking-wide transition-all duration-300 relative group flex items-center gap-1 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C]"
                          : "text-[#6B6456] hover:text-[#3D5A3C]"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#3D5A3C] transition-all duration-300 ${
                        currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    {portfolioOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-[#3D5A3C]/20 shadow-luxury-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="py-2">
                          {portfolioDropdown.map((dropItem, idx) => (
                            <button
                              key={idx}
                              onClick={dropItem.action}
                              className="w-full text-left px-6 py-3 text-sm text-[#2C2416] hover:bg-[#F5F1E8] hover:text-[#3D5A3C] transition-all duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]"
                              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                            >
                              {dropItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else if (item.hasDropdown && item.key === "products") {
                return (
                  <div key={item.key} className="relative">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className={`text-sm tracking-wide transition-all duration-300 relative group flex items-center gap-1 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C]"
                          : "text-[#6B6456] hover:text-[#3D5A3C]"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#3D5A3C] transition-all duration-300 ${
                        currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    {productsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-[#3D5A3C]/20 shadow-luxury-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="py-2">
                          {productsDropdown.map((dropItem, idx) => (
                            <button
                              key={idx}
                              onClick={dropItem.action}
                              className="w-full text-left px-6 py-3 text-sm text-[#2C2416] hover:bg-[#F5F1E8] hover:text-[#3D5A3C] transition-all duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]"
                              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                            >
                              {dropItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.key)}
                    className={`text-sm tracking-wide transition-all duration-300 relative group ${
                      currentPage === item.key
                        ? "text-[#3D5A3C]"
                        : "text-[#6B6456] hover:text-[#3D5A3C]"
                    }`}
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  >
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#3D5A3C] transition-all duration-300 ${
                      currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                );
              }
            })}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-[#6B6456] hover:text-[#3D5A3C] hover:bg-[#F5F1E8] transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs tracking-widest" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#F5F1E8] rounded-lg transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2C2416]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2C2416]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#3D5A3C]/10 bg-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => {
              if (item.hasDropdown && item.key === "services") {
                return (
                  <div key={item.key} className="border-b border-[#3D5A3C]/5 last:border-0">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center justify-between w-full text-left px-6 py-3.5 text-sm transition-all duration-200 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C] bg-[#F5F1E8]"
                          : "text-[#2C2416] hover:bg-[#F5F1E8] active:bg-[#F5F1E8]/70"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#F5F1E8]/50 pl-4 py-2">
                        {servicesDropdown.map((dropItem, idx) => (
                          <button
                            key={idx}
                            onClick={dropItem.action}
                            className="block w-full text-left px-6 py-2.5 text-sm text-[#6B6456] hover:text-[#3D5A3C] active:text-[#3D5A3C] transition-colors duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]/30"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          >
                            {dropItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (item.hasDropdown && item.key === "portfolio") {
                return (
                  <div key={item.key} className="border-b border-[#3D5A3C]/5 last:border-0">
                    <button
                      onClick={() => setPortfolioOpen(!portfolioOpen)}
                      className={`flex items-center justify-between w-full text-left px-6 py-3.5 text-sm transition-all duration-200 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C] bg-[#F5F1E8]"
                          : "text-[#2C2416] hover:bg-[#F5F1E8] active:bg-[#F5F1E8]/70"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${portfolioOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#F5F1E8]/50 pl-4 py-2">
                        {portfolioDropdown.map((dropItem, idx) => (
                          <button
                            key={idx}
                            onClick={dropItem.action}
                            className="block w-full text-left px-6 py-2.5 text-sm text-[#6B6456] hover:text-[#3D5A3C] active:text-[#3D5A3C] transition-colors duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]/30"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          >
                            {dropItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (item.hasDropdown && item.key === "products") {
                return (
                  <div key={item.key} className="border-b border-[#3D5A3C]/5 last:border-0">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className={`flex items-center justify-between w-full text-left px-6 py-3.5 text-sm transition-all duration-200 ${
                        currentPage === item.key
                          ? "text-[#3D5A3C] bg-[#F5F1E8]"
                          : "text-[#2C2416] hover:bg-[#F5F1E8] active:bg-[#F5F1E8]/70"
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-[#F5F1E8]/50 pl-4 py-2">
                        {productsDropdown.map((dropItem, idx) => (
                          <button
                            key={idx}
                            onClick={dropItem.action}
                            className="block w-full text-left px-6 py-2.5 text-sm text-[#6B6456] hover:text-[#3D5A3C] active:text-[#3D5A3C] transition-colors duration-200 border-l-2 border-transparent hover:border-[#3D5A3C]/30"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                          >
                            {dropItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.key)}
                    className={`block w-full text-left px-6 py-3.5 text-sm border-b border-[#3D5A3C]/5 last:border-0 transition-all duration-200 ${
                      currentPage === item.key
                        ? "text-[#3D5A3C] bg-[#F5F1E8]"
                        : "text-[#2C2416] hover:bg-[#F5F1E8] active:bg-[#F5F1E8]/70"
                    }`}
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  >
                    {item.label}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
