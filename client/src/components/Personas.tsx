import { motion } from "framer-motion";
import { User, Briefcase, TrendingUp } from "lucide-react";

const personas = [
  {
    id: "maxim",
    name: "Максим",
    role: "Стратегический лидер (Владелец/CEO)",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    problem: "Нужно связать финансы со стратегией, боится потери контроля.",
    goal: "Хочет увеличить стоимость бизнеса и уверенно масштабироваться.",
    color: "bg-primary",
  },
  {
    id: "natalia",
    name: "Наталья",
    role: "Трансформатор финансов (CFO)",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    problem: "Погрязла в операционке, не хватает стратегического веса.",
    goal: "Хочет трансформировать финансовую функцию и стать стратегическим партнером.",
    color: "bg-secondary",
  },
  {
    id: "sergei",
    name: "Сергей",
    role: "Карьерный переход",
    icon: <User className="w-8 h-8 text-white" />,
    problem: "Опытный профессионал, переходящий из другой области.",
    goal: "Стремится освоить корпоративные финансы, не теряя прошлый опыт.",
    color: "bg-slate-600",
  },
];

export function Personas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">С кем я работаю</h2>
          <p className="text-muted-foreground text-lg">
            Специализированная поддержка для лидеров на разных этапах их финансового пути.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 ${persona.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                {persona.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-1">{persona.name}</h3>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6">{persona.role}</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">Вызов</p>
                  <p className="text-foreground/80 leading-relaxed">{persona.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">Цель</p>
                  <p className="text-foreground/80 leading-relaxed font-medium">{persona.goal}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
