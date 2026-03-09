import { motion } from "framer-motion";

const cases = [
  {
    tag: "Антикризисное управление · Гален, 2022",
    title: "Ликвидность сохранена в условиях санкционного шока",
    context:
      "Группа компаний — крупный дистрибьютор медоборудования и реагентов для IVD диагностики. Оборот ~15 млрд руб. В 2022 году разрыв цепи поставок из Европы, США и Великобритании поставил бизнес под угрозу.",
    actions:
      "Внедрена система антикризисного управления ликвидностью. Проведены переговоры с ключевыми поставщиками. Достигнута согласованная позиция по условиям оплаты с отсрочкой — DPO вырос с 15 до 90 дней.",
    result:
      "Поставки сохранены. Кассовых разрывов не допущено. Бизнес продолжил работу без потери ключевых контрактов.",
  },
  {
    tag: "Менторство · Частный клиент",
    title: "CEO перестал зависеть от финансового директора",
    context:
      "Владелец бизнеса с глубокой отраслевой экспертизой — но без понимания финансовой отчётности. Запрос: научиться управлять бизнесом через финансы, а не вокруг них.",
    actions:
      "Разработана индивидуальная программа финансовой грамотности. Внедрён управленческий дашборд с ключевыми показателями. Выстроен еженедельный формат финансового обзора.",
    result:
      "Руководитель самостоятельно читает P&L, контролирует маржинальность и управляет ликвидностью. Скорость принятия решений выросла кратно.",
  },
  {
    tag: "Операционная трансформация · Linde/Praxair",
    title: "Два бизнеса. Одна команда. Без потерь в эффективности.",
    context:
      "Структурная трансформация объединённой компании — производителя промышленных газов на территории России и Казахстана. 20+ производственных площадок, оборот ~30 млрд руб.",
    actions:
      "За 6 месяцев разработана и внедрена стратегия развития на период слияния через BSC — сбалансированную систему показателей.",
    result:
      "Выстроена единая операционная модель для всех функций компании. Издержки сокращены на 9% выше целевых показателей.",
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

export function Cases() {
  return (
    <section id="cases" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
          >
            Кейсы
          </h2>
          <div
            className="w-12 h-[2px] mx-auto mb-6"
            style={{ background: "#C9A96E" }}
          />
          <p style={{ color: "#6B7280" }}>
            Примеры реализованных проектов и достигнутых результатов.
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
          {cases.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 flex flex-col"
              style={{ border: "1px solid rgba(201,169,110,0.12)" }}
            >
              {/* Tag */}
              <p
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: "#C9A96E" }}
              >
                {item.tag}
              </p>

              {/* Title - fixed min-height for alignment */}
              <h3
                className="text-lg font-bold mb-6 min-h-[3.5rem]"
                style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
              >
                {item.title}
              </h3>

              {/* Context */}
              <div className="mb-5">
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: "#0A1628" }}
                >
                  Контекст:
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {item.context}
                </p>
              </div>

              {/* Actions */}
              <div className="mb-5">
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: "#0A1628" }}
                >
                  Что сделано:
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {item.actions}
                </p>
              </div>

              {/* Result - pushed to bottom */}
              <div
                className="mt-auto pt-5 border-t"
                style={{ borderColor: "rgba(201,169,110,0.12)" }}
              >
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: "#C9A96E" }}
                >
                  Результат:
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#0A1628" }}>
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
