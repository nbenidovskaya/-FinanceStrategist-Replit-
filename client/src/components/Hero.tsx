import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "#FAF8F5", paddingBottom: "120px" }}>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(#0A1628 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{ background: "linear-gradient(90deg, #0A1628, #C9A96E, #0A1628)" }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold tracking-wide"
            style={{ background: "rgba(10,22,40,0.05)", borderColor: "rgba(10,22,40,0.15)", color: "#0A1628" }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#C9A96E" }}></span>
            Независимый CFO и стратегический ментор
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#0A1628", fontFamily: "'Playfair Display', serif" }}>
            Финансы, которые работают
            на стратегию — а не против неё.
            <br />
            <span className="italic" style={{ color: "#C9A96E" }}>
              Опыт CFO изнутри.
              <br />
              Взгляд советника снаружи.
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "#4A4A5A" }}>
            15+ лет опыта в роли CFO в международных и российских компаниях
            с оборотом до 50+ млрд рублей. Помогаю лидерам принимать
            финансовые решения с уверенностью.
          </p>

          {/* Credential badges */}
          <div className="flex flex-wrap gap-3">
            {["EMBA РАНХиГС / Kingston", "ACCA"].map((cred) => (
              <span key={cred} className="px-3 py-1 text-xs font-semibold rounded-full border"
                style={{ borderColor: "#C9A96E", color: "#0A1628", background: "rgba(201,169,110,0.08)" }}>
                {cred}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="contact" smooth={true} duration={500}>
              <Button size="lg" className="rounded-full px-6 h-12 text-sm font-semibold w-full sm:w-auto shadow-md transition-all hover:-translate-y-0.5"
                style={{ background: "#C9A96E", color: "#0A1628", border: "none" }}>
                Записаться на консультацию
              </Button>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="rounded-full px-6 h-12 text-sm w-full sm:w-auto transition-all hover:-translate-y-0.5"
                style={{ borderColor: "rgba(10,22,40,0.25)", color: "#0A1628" }}>
                Узнать больше <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="/photo-hero.jpg"
              alt="Наталья Бенидовская — независимый CFO и стратегический ментор"
              className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.1) 50%, transparent 100%)" }}>
            </div>

            {/* Quote overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="p-5"
                style={{ borderLeft: "1px solid #C9A96E", paddingLeft: "16px", background: "none", border: "none" }}>
                <p className="text-base" style={{ color: "#C9A96E", fontFamily: "'Playfair Display', serif" }}>
                  "Финансовый директор должен быть там, где принимаются решения —
                  а не там, где они объясняются."
                </p>
              </div>
            </div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute -z-10 top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{ background: "#C9A96E" }}></div>
          <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "#0A1628" }}></div>
        </motion.div>
      </div>
    </section>
  );
}