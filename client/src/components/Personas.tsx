import { motion } from "framer-motion";
import { User, Briefcase, TrendingUp } from "lucide-react";

const personas = [
  {
    id: "ceo",
    name: "Владелец / CEO",
    role: "Стратегический лидер",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    problem:
      "Финансы остаются «чёрным ящиком». Сложно связать цифры со стратегией и реальным ростом.",
    goal: "Принимать решения уверенно. Увеличить стоимость бизнеса и масштабироваться без потери контроля.",
    color: "#0A1628",
  },
  {
    id: "cfo",
    name: "CFO / Финансовый директор / Контроллер / Эксперт",
    role: "Трансформатор финансов",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    problem:
      "Операционка поглотила. Не хватает стратегического веса и влияния в компании.",
    goal: "Трансформировать финансовую функцию и стать стратегическим партнёром для бизнеса.",
    color: "#1B3A6B",
  },
  {
    id: "transition",
    name: "Карьерный переход",
    role: "Профессионал в движении",
    icon: <User className="w-8 h-8 text-white" />,
    problem:
      "Богатый опыт в смежной области, но нет системного понимания корпоративных финансов.",
    goal: "Освоить финансовый язык бизнеса и применить накопленный опыт на новом уровне.",
    color: "#3A3A4A",
  },
];

export function Personas() {
  return (
    <section className="section-padding" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "#0A1628",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            С кем я работаю
          </h2>
          <div
            className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "#C9A96E" }}
          ></div>
          <p className="text-lg" style={{ color: "#6B6B7B" }}>
            Экспертная поддержка для лидеров на разных этапах финансового пути.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              id={persona.id === "ceo" ? "personas" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: "#FAF8F5",
                borderColor: "rgba(10,22,40,0.08)",
              }}
            >
              {/* Gold top border on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#C9A96E" }}
              ></div>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ background: persona.color }}
              >
                {persona.icon}
              </div>

              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#0A1628" }}
              >
                {persona.name}
              </h3>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ color: "#C9A96E" }}
              >
                {persona.role}
              </p>

              <div className="space-y-4">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: "#9B9BAB" }}
                  >
                    Вызов
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4A4A5A" }}
                  >
                    {persona.problem}
                  </p>
                </div>
                <div
                  className="h-px"
                  style={{ background: "rgba(10,22,40,0.07)" }}
                ></div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: "#9B9BAB" }}
                  >
                    Цель
                  </p>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{ color: "#0A1628" }}
                  >
                    {persona.goal}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
