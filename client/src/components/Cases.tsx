import { motion } from "framer-motion";

const cases = [
  {
    tag: "Антикризисное управление · Гален, 2022",
    title: "Ликвидность сохранена в условиях санкционного шока",
    context: "Группа компаний — крупный дистрибьютор медоборудования и реагентов для IVD диагностики. Оборот ~15 млрд руб. В 2022 году разрыв цепи поставок из Европы, США и Великобритании поставил бизнес под угрозу.",
    action: "Внедрена система антикризисного управления ликвидностью. Проведены переговоры с ключевыми поставщиками. Достигнута согласованная позиция по условиям оплаты с отсрочкой — DPO вырос с 15 до 90 дней.",
    result: "Поставки сохранены. Кассовых разрывов не допущено. Бизнес продолжил работу без потери ключевых контрактов.",
  },
  {
    tag: "Менторство · Частный клиент",
    title: "CEO перестал зависеть от финансового директора",
    context: "Владелец бизнеса с глубокой отраслевой экспертизой — но без понимания финансовой отчётности. Запрос: научиться управлять бизнесом через финансы, а не вокруг них.",
    action: "Разработана индивидуальная программа финансовой грамотности. Внедрён управленческий дашборд с ключевыми показателями. Выстроен еженедельный формат финансового обзора.",
    result: "Руководитель самостоятельно читает P&L, контролирует маржинальность и управляет ликвидностью. Скорость принятия решений выросла кратно.",
  },
  {
    tag: "Операционная трансформация · Linde/Praxair",
    title: "Два бизнеса. Одна команда. Без потерь в эффективности.",
    context: "Структурная трансформация объединённой компании — производителя промышленных газов на территории России и Казахстана. 20+ производственных площадок, оборот ~30 млрд руб.",
    action: "За 6 месяцев разработана и внедрена стратегия развития на период слияния через BSC — сбалансированную систему показателей.",
    result: "Выстроена единая операционная модель для всех функций компании. Издержки сокращены на 9% выше целевых показателей.",
  }
];

export function Cases() {
  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1628] font-serif">Кейсы</h2>
          <div className="w-16 h-[2px] mx-auto mb-6" style={{ background: "#C9A96E" }}></div>
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
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all flex flex-col"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9A96E] mb-3">{item.tag}</span>
              <h3 className="text-xl font-bold text-[#0A1628] mb-4 font-serif">{item.title}</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-slate-600 flex-grow">
                <div>
                  <p className="font-bold text-[#0A1628] mb-1">Контекст:</p>
                  <p>{item.context}</p>
                </div>
                <div>
                  <p className="font-bold text-[#0A1628] mb-1">Что сделано:</p>
                  <p>{item.action}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-[#C9A96E] mb-1">Результат:</p>
                  <p className="font-medium text-[#0A1628]">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
