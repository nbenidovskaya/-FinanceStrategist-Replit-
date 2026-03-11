import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Консалтинг",
    subtitle: "Проектная работа",
    description:
      "Точечное погружение в задачу: от диагностики до результата.",
    price: "от 150 000 ₽ / проект",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    features: [
      "Due Diligence и финансовый аудит",
      "Оптимизация финансовой функции",
      "Стратегия M&A и сопровождение сделок",
      "Кризис-менеджмент и реструктуризация",
    ],
  },
  {
    title: "Менторство",
    subtitle: "Индивидуальное и групповое",
    description:
      "Развитие финансового мышления лидеров и карьерный рост в финансах.",
    price: "по договорённости",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    features: [
      "Менторинг «Путь к CFO»",
      "Финансовая грамотность для CEO",
      "Программы карьерного перехода",
      "Развитие финансового мышления команды",
    ],
  },
  {
    title: "Поддержка",
    subtitle: "Постоянный советник",
    description:
      "Стратегический партнёр на регулярной основе — рядом, когда нужно.",
    price: "от 300 000 ₽ / месяц",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    features: [
      "Ежемесячные стратегические обзоры",
      "Участие в советах директоров",
      "Мониторинг финансового состояния компании",
      "Консультации по запросу",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#122240" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}
          >
            Форматы работы
          </h2>
          <div
            className="w-12 h-[2px] mx-auto mb-6"
            style={{ background: "#C9A96E" }}
          />
          <p style={{ color: "rgba(250,248,245,0.55)" }}>
            Выберите формат — или обсудим индивидуально.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(250,248,245,0.03)",
                border: "1px solid rgba(201,169,110,0.12)",
              }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "#C9A96E" }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(250,248,245,0.55)" }}
                >
                  {service.description}
                </p>

                {/* Price */}
                <span
                  className="inline-block self-start text-sm font-semibold px-4 py-2 rounded-full mb-6"
                  style={{
                    color: "#C9A96E",
                    border: "1px solid rgba(201,169,110,0.3)",
                    background: "rgba(201,169,110,0.08)",
                  }}
                >
                  {service.price}
                </span>

                {/* Features */}
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: "#C9A96E" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "rgba(250,248,245,0.7)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}