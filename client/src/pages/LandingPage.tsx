import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Personas } from "@/components/Personas";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navigation />
      <main>
        <Hero />
        <Personas />
        <Services />
        <Methodology />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
