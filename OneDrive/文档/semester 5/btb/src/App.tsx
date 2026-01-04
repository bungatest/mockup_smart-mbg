import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ProductsPage } from "./components/ProductsPage";
import { ContactPage } from "./components/ContactPage";
import { LanguageProvider } from "./lib/language-context";
import { Toaster } from "./components/ui/sonner";

type Page = "home" | "about" | "services" | "portfolio" | "products" | "contact";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string | null>(null);

  const handleNavigate = (page: string, projectCategory?: string) => {
    setCurrentPage(page as Page);
    if (projectCategory) {
      setSelectedProjectCategory(projectCategory);
    } else {
      setSelectedProjectCategory(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "portfolio":
        return <PortfolioPage onNavigate={handleNavigate} />;
      case "products":
        return <ProductsPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage selectedProjectCategory={selectedProjectCategory} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
