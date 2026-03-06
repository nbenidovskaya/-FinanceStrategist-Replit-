import { motion } from "framer-motion";
import { BadgeCheck, Building2, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden"
          style={{ background: "#0A1628" }}>

          {/* Decorative gold line */}
          <div className="absolute top-0 left-16 right-16 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}></div>

          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            style={{ background: "rgba(201,169,110,0.08)" }}></div>

          <div className="relative z-10 grid md:grid-cols-[2fr,1fr] gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}>
                Обо мне
              </h2>
              <div className="w-12 h-[2px] mb-6" style={{ background: "#C9A96E" }}></div>

              <div className="float-right ml-6 mb-4 w-32 h-40 rounded-xl overflow-hidden shadow-lg border border-white/10">
                <img src="/photo-about.jpg" alt="Наталья Бенидовская" className="object-cover object-top w-full h-full" />
              </div>

              <p className="text-lg leading-relaxed mb-5" style={{ color: "rgba(250,248,245,0.9)" }}>
                Я — независимый CFO и стратегический ментор с более чем 15-летним опытом работы.
                В роли финансового директора я управляла финансами компаний с{" "}
                <span className="font-bold" style={{ color: "#C9A96E" }}>оборотом до 50+ млрд рублей</span>,
                сопровождала сделки M&A, преодолевала кризисы и фазы взрывного роста.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(250,248,245,0.75)" }}>
                Карьерный путь строился с фундамента — учёт, контроль, внутренние процессы с ростом до финансового директора в компаниях с оборотом до 50+ млрд рублей. Работала в российском и международном бизнесе — в условиях санкций, M&A, кризисов и взрывного роста. Сегодня помогаю лидерам выстраивать финансовую функцию как двигатель стратегического роста.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Building2 className="w-4 h-4" />, text: "Deloitte · Linde · Weatherford" },
                  { icon: <GraduationCap className="w-4 h-4" />, text: "EMBA РАНХиГС / Kingston" },
                  { icon: <BadgeCheck className="w-4 h-4" />, text: "ACCA" },
                  { icon: <BadgeCheck className="w-4 h-4" />, text: "Английский C1" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ color: "#C9A96E" }}>{item.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "rgba(250,248,245,0.85)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "rgba(250,248,245,0.5)" }}>Опыт работы в компаниях:</p>
                <p className="text-sm font-medium mb-6" style={{ color: "rgba(250,248,245,0.85)" }}>
                  Deloitte · Weatherford · Linde/Praxair · Гален · ГПБ Комплект
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  {["deloitte", "weatherford", "linde", "galen", "gpb"].map((logo) => (
                    <img 
                      key={logo}
                      src={`/logos/${logo}.png`} 
                      alt={logo} 
                      className="h-8 w-auto object-contain opacity-80" 
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col justify-center gap-6 border-l pl-8 md:pl-12"
              style={{ borderColor: "rgba(201,169,110,0.2)" }}>
              {[
                { value: "15+", label: "Лет опыта CFO" },
                { value: "50+", label: "млрд руб. — оборот под управлением" },
                { value: "", label: "Российский и международный бизнес" },
                { value: "100%", label: "Реальные результаты" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-left"
                >
                  {stat.value && (
                    <p className="text-4xl font-bold mb-1" style={{ color: "#C9A96E", fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </p>
                  )}
                  <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(250,248,245,0.5)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
