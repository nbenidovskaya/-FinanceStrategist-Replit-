import { motion } from "framer-motion";
import { TrendingUp, Briefcase, UserCheck } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Владелец / CEO",
    subtitle: "Стратегический лидер",
    challenge:
      "Финансы остаются «чёрным ящиком». Сложно связать цифры со стратегией и реальным ростом.",
    goal:
      "Принимать решения уверенно. Увеличить стоимость бизнеса и масштабироваться без потери контроля.",
  },
  {
    icon: Briefcase,
    title: "CFO / Финансовый директор / Контроллер / Эксперт",
    subtitle: "Трансформатор финансов",
    challenge:
      "Операционка поглотила. Не хватает стратегического веса и влияния в компании.",
    goal:
      "Трансформировать финансовую функцию и стать стратегическим партнёром для бизнеса.",
  },
  {
    icon: UserCheck,
    title: "Карьерный переход",
    subtitle: "Профессионал в движении",
    challenge:
      "Богатый опыт в смежной области, но нет системного понимания корпоративных финансов.",
    goal:
      "Освоить финансовый язык бизнеса и применить накопленный опыт на новом уровне.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export function Audience() {
  return (
    <section id="audience" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
          >
            С кем я работаю
          </h2>
          <div
            className="w-12 h-[2px] mx-auto mb-6"
            style={{ background: "#C9A96E" }}
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 flex flex-col items-center"
                style={{ border: "1px solid rgba(201,169,110,0.12)" }}
              >
                {/* Icon - centered */}
                <div className="w-full flex items-center justify-center mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(10,22,40,0.05)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#0A1628" }} />
                  </div>
                </div>

                {/* Title — centered */}
                <h3
                  className="text-xl font-bold text-center mb-4 w-full"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
                >
                  {item.title}
                </h3>

                {/* Subtitle — centered */}
                <p
                  className="text-xs font-medium uppercase tracking-wide text-center mb-6 w-full"
                  style={{ color: "#C9A96E" }}
                >
                  {item.subtitle}
                </p>

                {/* Challenge */}
                <div className="mb-3 w-full" style={{ minHeight: "90px" }}>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#9CA3AF" }}
                  >
                    Вызов
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {item.challenge}
                  </p>
                </div>

                {/* Goal */}
                <div
                  className="mt-auto pt-5 border-t w-full"
                  style={{ borderColor: "rgba(201,169,110,0.12)" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#9CA3AF" }}
                  >
                    Цель
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#0A1628" }}>
                    {item.goal}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
