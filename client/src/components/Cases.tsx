import { motion } from "framer-motion";

const cases = [
  {
    title: "Оптимизация ритейл-сети",
    description: "Внедрение системы управленческого учета и дашбордов для сети из 50+ точек. Результат: сокращение кассовых разрывов на 80%.",
    metrics: "ROI: +25%",
  },
  {
    title: "Подготовка к M&A",
    description: "Проведение Due Diligence и приведение отчетности к международным стандартам для привлечения инвестора.",
    metrics: "Сделка: 1.2 млрд руб",
  },
  {
    title: "Кризис-менеджмент",
    description: "Реструктуризация кредитного портфеля и оптимизация затрат в период падения спроса на 40%.",
    metrics: "Выход в безубыточность: 4 мес",
  }
];

export function Cases() {
  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1628] font-serif">Кейсы</h2>
          <p className="text-muted-foreground text-lg">
            Примеры реализованных проектов и достигнутых результатов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-[#0A1628] mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{item.description}</p>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-sm font-bold text-[#C9A96E]">{item.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
