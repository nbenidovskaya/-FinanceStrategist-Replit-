import { motion } from "framer-motion";
import { Search, Map, Wrench, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Диагностика",
    duration: "1–2 недели",
    description:
      "Глубокий аудит финансовой функции: процессы, отчётность, команда, инструменты. Нахожу узкие места и скрытые резервы.",
    deliverables: ["Карта текущего состояния", "Список quick wins", "Оценка зрелости финансов"],
  },
  {
    number: "02",
    icon: Map,
    title: "Дорожная карта",
    duration: "1–2 недели",
    description:
      "Формирую план с приоритетами, сроками и ожидаемым эффектом. Каждый шаг привязан к бизнес-результату.",
    deliverables: ["План на 90 дней", "Целевые метрики", "Бюджет изменений"],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Внедрение",
    duration: "1–3 месяца",
    description:
      "Работаю рядом с вашей командой: настраиваю процессы, строю модели, внедряю управленческую отчётность.",
    deliverables: ["Новые процессы и регламенты", "Финансовые модели", "Обучение команды"],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Сопровождение",
    duration: "по запросу",
    description:
      "Остаюсь на связи как внешний CFO или советник. Регулярные сессии, ревью результатов, корректировка курса.",
    deliverables: ["Ежемесячные ревью", "Доступ для ad-hoc вопросов", "Квартальная стратсессия"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Methodology() {
  return (
    <section id="method" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header with image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium uppercase tracking-widest mb-4"
              style={{ color: "#C9A96E" }}
            >
              Как я работаю
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
            >
              От диагностики до результата — прозрачный процесс на каждом шаге
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Вы всегда знаете, на каком этапе мы находимся, что уже сделано
              и какой эффект ожидать дальше. Никаких чёрных ящиков.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Вид на город из окна офиса"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl border p-8 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "rgba(201,169,110,0.15)" }}
              >
                <span
                  className="absolute top-6 right-8 text-7xl font-bold select-none pointer-events-none transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "rgba(10,22,40,0.04)",
                  }}
                >
                  {step.number}
                </span>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(201,169,110,0.1)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#C9A96E" }} />
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#0A1628" }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <span
                    className="inline-block text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full"
                    style={{
                      color: "#C9A96E",
                      background: "rgba(201,169,110,0.08)",
                      border: "1px solid rgba(201,169,110,0.15)",
                    }}
                  >
                    {step.duration}
                  </span>

                  <p style={{ color: "#6B7280" }} className="leading-relaxed">
                    {step.description}
                  </p>

                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: "rgba(201,169,110,0.1)" }}
                  >
                    <p
                      className="text-xs font-medium uppercase tracking-wide mb-2"
                      style={{ color: "#9CA3AF" }}
                    >
                      Что вы получаете
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1 rounded-md"
                          style={{
                            color: "#0A1628",
                            background: "rgba(10,22,40,0.03)",
                            border: "1px solid rgba(10,22,40,0.06)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
