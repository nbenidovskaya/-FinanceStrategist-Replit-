import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="py-16" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl px-8 md:px-16 py-12 md:py-16 text-center relative overflow-hidden"
          style={{ background: "#0A1628" }}
        >
          {/* Decorative gold line */}
          <div
            className="absolute top-0 left-16 right-16 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            }}
          />

          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />

          <div className="relative z-10">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-snug max-w-2xl mx-auto"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FAF8F5",
              }}
            >
              Запишитесь на вводную сессию — разберём
              вашу ситуацию и определим первый шаг.
            </h3>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(250,248,245,0.6)" }}
            >
              30 минут, бесплатно, без обязательств.
            </p>
            <a
              href="#contact"
              className="inline-block font-semibold px-8 py-4 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #C9A96E, #B8944F)",
                color: "#0A1628",
              }}
            >
              Обсудить вашу задачу
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
