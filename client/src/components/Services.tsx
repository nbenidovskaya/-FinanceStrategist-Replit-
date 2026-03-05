import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-scroll";

const services = [
  {
    title: "Консалтинг",
    subtitle: "Проектная экспертиза",
    description: "Глубокое погружение для решения критических финансовых задач вашего бизнеса.",
    price: "от 150 000 ₽ / проект",
    items: [
      "Due Diligence и финансовый аудит",
      "Оптимизация финансовой функции",
      "Стратегия M&A и сопровождение сделок",
      "Кризис-менеджмент и реструктуризация",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Менторство",
    subtitle: "Индивидуальное и групповое",
    description: "Развитие финансовой грамотности лидеров и карьерное сопровождение CFO.",
    price: "от 80 000 ₽ / месяц",
    items: [
      "Коучинг «Путь к CFO»",
      "Финансовая грамотность для CEO",
      "Программы карьерного перехода",
      "Развитие финансового мышления команды",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Ретайнер",
    subtitle: "Независимый советник",
    description: "Постоянное стратегическое партнёрство для устойчивого роста компании.",
    price: "от 200 000 ₽ / месяц",
    items: [
      "Ежемесячные стратегические обзоры",
      "Участие в советах директоров",
      "Регулярный аудит здоровья бизнеса",
      "Консультации по запросу (unlimited)",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: "#1B3A6B" }}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(#FAF8F5 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Услуги и решения
          </h2>
          <div className="w-16 h-[2px] mx-auto mb-6" style={{ background: "#C9A96E" }}></div>
          <p className="text-lg" style={{ color: "rgba(250,248,245,0.65)" }}>
            Структурированные форматы работы для достижения измеримых результатов.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-2xl overflow-hidden border group hover:-translate-y-1 transition-all duration-300"
              style={{ background: "rgba(10,22,40,0.5)", borderColor: "rgba(201,169,110,0.2)" }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 z-10 transition-colors duration-300"
                  style={{ background: "rgba(10,22,40,0.45)" }}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: "#C9A96E" }}>{service.subtitle}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(250,248,245,0.6)" }}>
                  {service.description}
                </p>

                {/* Price */}
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{ background: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}>
                  {service.price}
                </div>

                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(250,248,245,0.8)" }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#C9A96E" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "rgba(250,248,245,0.35)" }}>
          * Стоимость указана ориентировочно и зависит от объёма и сложности задачи. Итоговые условия обсуждаются индивидуально.
        </p>
      </div>
    </section>
  );
}
