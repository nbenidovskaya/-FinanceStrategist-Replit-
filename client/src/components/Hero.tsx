import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container-width grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide">
            Independent CFO & Strategic Mentor
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            Your Strategic Partner in Finance. <br />
            <span className="text-secondary italic font-serif">From Operational Numbers to Strategic Growth.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            15+ years as a CFO in companies with up to 50+ billion RUB turnover. I help leaders gain control, influence, and confidence through financial expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="contact" smooth={true} duration={500}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Schedule Strategy Session
              </Button>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-primary/5">
            {/* Professional portrait - serious finance context */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Strategic Finance Meeting"
              className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply"></div>
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="font-serif italic text-lg mb-2">"Complexity Simplified."</p>
                <p className="text-sm opacity-80">We talk about difficult things in plain language, with respect for your intellect.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -z-10 top-12 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
