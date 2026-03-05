// ============================================================
// ФАЙЛ: src/components/Navigation.tsx
// ============================================================

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Услуги", to: "services" },
    { name: "Методология", to: "method" },
    { name: "Обо мне", to: "about" },
    { name: "Кейсы", to: "cases" },
    { name: "Контакты", to: "contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-4 shadow-lg" : "py-6"
    )}
    style={{
      background: isScrolled ? "rgba(10,22,40,0.97)" : "transparent",
      backdropFilter: isScrolled ? "blur(12px)" : "none",
    }}>
      {/* Gold accent line when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)" }}></div>
      )}

      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: isScrolled ? "#FAF8F5" : "#0A1628" }}>
          Finance<span style={{ color: "#C9A96E" }}>Strategist</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium cursor-pointer transition-colors"
              style={{ color: isScrolled ? "rgba(250,248,245,0.75)" : "rgba(10,22,40,0.7)" }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500}>
            <button className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: "#C9A96E", color: "#0A1628" }}>
              Записаться на консультацию
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: isScrolled ? "#FAF8F5" : "#0A1628" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t p-4 shadow-xl flex flex-col gap-4"
          style={{ background: "#0A1628", borderColor: "rgba(201,169,110,0.2)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-2 cursor-pointer"
              style={{ color: "rgba(250,248,245,0.85)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}


// ============================================================
// ФАЙЛ: src/components/ContactForm.tsx  
// Изменение: исправлен placeholder "Максим Иванов" → "Ваше имя"
// ============================================================
// Найдите в вашем ContactForm.tsx строку:
//   <Input placeholder="Максим Иванов" ...
// И замените на:
//   <Input placeholder="Ваше имя" ...


// ============================================================
// ФАЙЛ: src/pages/LandingPage.tsx
// Добавлен импорт Cases
// ============================================================

/*
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Personas } from "@/components/Personas";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";          // ← НОВОЕ
import { Methodology } from "@/components/Methodology";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Personas />
        <Services />
        <Cases />                                     // ← НОВОЕ
        <Methodology />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
*/
