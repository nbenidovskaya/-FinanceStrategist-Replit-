import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="pt-16 pb-24" style={{ background: "#0A1628" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative">
          {/* Decorative gold line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            }}
          />

          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />

          <div className="relative z-10 pt-16">
            <div className="grid md:grid-cols-[1fr,auto] gap-12 lg:gap-16">
              {/* Left: text content */}
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}
                >
                  Обо мне
                </h2>
                <div className="w-12 h-[2px] mb-8" style={{ background: "#C9A96E" }} />

                {/* Headline stat */}
                <div className="flex items-baseline gap-4 mb-8">
                  <p
                    className="text-5xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#C9A96E", lineHeight: "1" }}
                  >
                    20<span style={{ fontSize: "0.55em", verticalAlign: "super", lineHeight: "0" }}>+</span>
                  </p>
                  <p
                    className="text-lg"
                    style={{ color: "rgba(250,248,245,0.85)" }}
                  >
                    лет управления финансами и экономикой бизнеса
                  </p>
                </div>

                {/* Competencies checklist */}
                <div className="space-y-4 mb-10">
                  {[
                    "Бизнес-трансформация и реструктуризация (в т.ч. M&A)",
                    "Разработка и внедрение финансовых стратегий",
                    "Оценка инвестиционных и бизнес проектов",
                    "Внедрение и стабилизация ERP систем",
                    "Формирование команд",
                    "Менторинг",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <BadgeCheck className="w-5 h-5 shrink-0" style={{ color: "#C9A96E" }} />
                      <span
                        className="text-base"
                        style={{ color: "rgba(250,248,245,0.85)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="leading-relaxed mb-10"
                  style={{ color: "rgba(250,248,245,0.65)" }}
                >
                  Карьерный путь начинался с базы — учёт, контроль,
                  внутренние процессы. Работала в российском
                  и международном бизнесе — в условиях санкций,
                  трансформаций и стремительного масштабирования.
                  Сегодня помогаю лидерам выстраивать финансовую
                  функцию как двигатель стратегического роста.
                </p>

              </div>

              {/* Right: photo + stats */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                  style={{ border: "1px solid rgba(250,248,245,0.1)" }}
                >
                  <img
                    src="/photo-about.jpg"
                    alt="Наталья Бенидовская"
                    className="object-cover object-top w-full h-full"
                  />
                </motion.div>

                {/* Credentials under photo */}
                <div className="mt-6 w-64 lg:w-72 space-y-3">
                  {[
                    { icon: <GraduationCap className="w-4 h-4" />, text: "EMBA РАНХиГС / Kingston" },
                    { icon: <BadgeCheck className="w-4 h-4" />, text: "ACCA" },
                    { icon: <BadgeCheck className="w-4 h-4" />, text: "Английский C1" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ color: "#C9A96E" }}>{item.icon}</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgba(250,248,245,0.8)" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logos row */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
              <p
                className="text-xs uppercase tracking-wider mb-6"
                style={{ color: "rgba(250,248,245,0.4)" }}
              >
                Опыт работы в компаниях:
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
                {[
                  { name: "deloitte", h: 24 },
                  { name: "weatherford", h: 34 },
                  { name: "linde", h: 40 },
                  { name: "Galen", h: 34 },
                  { name: "gpb", h: 34 },
                  { name: "praxair", h: 26 },
                ].map((logo) => (
                    <img
                      key={logo.name}
                      src={`/Logos/${logo.name}.png`}
                      alt={logo.name}
                      className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{ filter: "brightness(0) invert(1)", height: `${logo.h}px` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}