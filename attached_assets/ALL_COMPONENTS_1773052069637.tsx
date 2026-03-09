// ============================================================
// ФАЙЛ: src/components/Methodology.tsx
// Замените полностью содержимое файла
// ============================================================

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
                className="group relative bg-white rounded-2xl border p-8
                           hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "rgba(201,169,110,0.15)" }}
              >
                {/* Step number watermark */}
                <span
                  className="absolute top-6 right-8 text-7xl font-bold select-none pointer-events-none
                             transition-colors duration-300"
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


// ============================================================
// ФАЙЛ: src/components/CtaBanner.tsx
// Создайте новый файл или замените существующий
// ============================================================

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


// ============================================================
// ФАЙЛ: src/components/About.tsx
// Замените полностью содержимое файла
// ============================================================

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0A1628" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative">
          {/* Decorative gold line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            }}
          />

          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />

          <div className="relative z-10 pt-16">
            <div className="grid md:grid-cols-[1fr,auto] gap-12 lg:gap-16">
              {/* Left: text content */}
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}
                >
                  Обо мне
                </h2>
                <div className="w-12 h-[2px] mb-8" style={{ background: "#C9A96E" }} />

                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: "rgba(250,248,245,0.9)" }}
                >
                  Я — независимый CFO и стратегический ментор с более чем
                  15-летним опытом работы. В роли финансового директора я
                  управляла финансами компаний с{" "}
                  <span className="font-bold" style={{ color: "#C9A96E" }}>
                    оборотом до 50+ млрд рублей
                  </span>
                  , сопровождала сделки M&A, преодолевала кризисы и фазы
                  взрывного роста.
                </p>
                <p
                  className="leading-relaxed mb-10"
                  style={{ color: "rgba(250,248,245,0.65)" }}
                >
                  Карьерный путь строился с фундамента — учёт, контроль,
                  внутренние процессы. Работала в российском и международном
                  бизнесе — в условиях санкций, трансформаций и стремительного
                  масштабирования. Сегодня помогаю лидерам выстраивать
                  финансовую функцию как двигатель стратегического роста.
                </p>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: <GraduationCap className="w-4 h-4" />, text: "EMBA РАНХиГС / Kingston" },
                    { icon: <BadgeCheck className="w-4 h-4" />, text: "ACCA" },
                    { icon: <BadgeCheck className="w-4 h-4" />, text: "Английский C1" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ color: "#C9A96E" }}>{item.icon}</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgba(250,248,245,0.8)" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div
                  className="flex gap-10 pt-8 border-t"
                  style={{ borderColor: "rgba(201,169,110,0.15)" }}
                >
                  <div>
                    <p
                      className="text-4xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#C9A96E" }}
                    >
                      15+
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "rgba(250,248,245,0.45)" }}
                    >
                      Лет опыта CFO
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-4xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#C9A96E" }}
                    >
                      50+
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "rgba(250,248,245,0.45)" }}
                    >
                      Млрд руб. оборот под управлением
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: photo */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                  style={{ border: "1px solid rgba(250,248,245,0.1)" }}
                >
                  <img
                    src="/photo-about.jpg"
                    alt="Наталья Бенидовская"
                    className="object-cover object-top w-full h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Logos row */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
              <p
                className="text-xs uppercase tracking-wider mb-6"
                style={{ color: "rgba(250,248,245,0.4)" }}
              >
                Опыт работы в компаниях:
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
                {["deloitte", "weatherford", "linde", "galen", "gpb"].map(
                  (logo) => (
                    <img
                      key={logo}
                      src={`/logos/${logo}.png`}
                      alt={logo}
                      className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================================
// ФАЙЛ: src/components/Services.tsx
// Замените полностью содержимое файла
// ============================================================

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
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6e?q=80&w=800&auto=format&fit=crop",
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
    price: "от 200 000 ₽ / месяц",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    features: [
      "Ежемесячные стратегические обзоры",
      "Участие в советах директоров",
      "Мониторинг финансового состояния компании",
      "Консультации по запросу (unlimited)",
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
    <section id="services" className="py-24" style={{ background: "#0A1628" }}>
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


// ============================================================
// ФАЙЛ: src/components/Cases.tsx
// Замените полностью содержимое файла
// ============================================================

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


// ============================================================
// ФАЙЛ: src/components/Audience.tsx
// Замените полностью содержимое файла
// ============================================================

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
                className="bg-white rounded-2xl p-8 flex flex-col"
                style={{ border: "1px solid rgba(201,169,110,0.12)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(10,22,40,0.05)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#0A1628" }} />
                </div>

                {/* Title - fixed min-height for alignment */}
                <h3
                  className="text-xl font-bold min-h-[3.5rem]"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-medium uppercase tracking-wide mb-6"
                  style={{ color: "#C9A96E" }}
                >
                  {item.subtitle}
                </p>

                {/* Challenge */}
                <div className="mb-5">
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

                {/* Goal - pushed to bottom */}
                <div
                  className="mt-auto pt-5 border-t"
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


// ============================================================
// ФАЙЛ: src/components/Contact.tsx
// Замените полностью содержимое файла
// ⚠️ ВАЖНО: замените YOUR_FORM_ID на ваш ID из Formspree.io
// ============================================================

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
          >
            Как со мной связаться
          </motion.h2>
          <p style={{ color: "#6B7280" }}>
            Напишите — и мы найдём удобное время для вводной сессии.
          </p>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          style={{ border: "1px solid rgba(201,169,110,0.12)" }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(201,169,110,0.1)" }}
              >
                <span className="text-2xl">✓</span>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#0A1628" }}
              >
                Заявка отправлена!
              </h3>
              <p style={{ color: "#6B7280" }}>
                Я свяжусь с вами в течение 24 часов.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    Полное имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: "#FAF8F5",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#0A1628",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: "#FAF8F5",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#0A1628",
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    Телефон (необязательно)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: "#FAF8F5",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#0A1628",
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    Кто вы?
                  </label>
                  <select
                    name="role"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors appearance-none"
                    style={{
                      background: "#FAF8F5",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#0A1628",
                    }}
                  >
                    <option value="ceo">Владелец / CEO</option>
                    <option value="cfo">CFO / Финансовый директор</option>
                    <option value="career">Карьерный переход</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0A1628" }}
                >
                  Опишите вашу задачу
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Расскажите о ситуации — что сейчас не работает или что хотите изменить..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                  style={{
                    background: "#FAF8F5",
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#0A1628",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl font-semibold transition-all hover:opacity-90 disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #C9A96E, #B8944F)",
                  color: "#0A1628",
                }}
              >
                {submitting ? "Отправляю..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}


// ============================================================
// ФАЙЛ: src/components/Footer.tsx
// Замените полностью содержимое файла
// ============================================================

import { Link } from "react-scroll";
import { Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/наталья-бенидовская-9a160723",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://t.me/Natalia_Benidovskaya",
    icon: Send,
    label: "Telegram",
    external: true,
  },
  {
    href: "mailto:nbenidovskaya@yandex.ru",
    icon: Mail,
    label: "Email",
    external: false,
  },
];

const navLinks = [
  { to: "audience", label: "С кем я работаю" },
  { to: "method", label: "Методология" },
  { to: "services", label: "Услуги" },
  { to: "cases", label: "Кейсы" },
  { to: "about", label: "Обо мне" },
  { to: "contact", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t" style={{ background: "#0A1628", borderColor: "rgba(201,169,110,0.15)" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 max-w-md">
            <a
              href="#"
              className="text-2xl font-bold text-white mb-4 block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Finance<span style={{ color: "#C9A96E" }}>Strategist</span>
            </a>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              Трансформация финансов из бэк-офисной функции
              в двигатель стратегического роста.
              Независимое консультирование для прогрессивных лидеров.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  title={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#C9A96E",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold mb-5 text-sm uppercase tracking-wider"
              style={{ color: "#C9A96E" }}
            >
              Навигация
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(250,248,245,0.55)" }}>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    className="hover:text-amber-300 cursor-pointer transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/privacy" className="hover:text-amber-300 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(201,169,110,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(250,248,245,0.3)" }}>
            © {new Date().getFullYear()} Наталья Бенидовская. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: "rgba(250,248,245,0.3)" }}>
            <a
              href="mailto:nbenidovskaya@yandex.ru"
              className="hover:text-amber-300 transition-colors"
            >
              nbenidovskaya@yandex.ru
            </a>
            {" · "}
            <a
              href="https://t.me/Natalia_Benidovskaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              @Natalia_Benidovskaya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


// ============================================================
// ФАЙЛ: src/pages/PrivacyPolicy.tsx
// Без изменений — оставьте как есть
// ============================================================
