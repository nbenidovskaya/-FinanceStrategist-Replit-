import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Linkedin, Phone } from "lucide-react";

  export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjgjvpj", {
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
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
          >
            Как со мной связаться
          </motion.h2>
          <div
            className="w-12 h-[2px] mx-auto mb-6"
            style={{ background: "#C9A96E" }}
          />
          <p style={{ color: "#6B7280" }}>
            Напишите напрямую или оставьте заявку — я отвечу в течение 24 часов.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 lg:gap-12">
          {/* Left: Direct contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact card */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "#0A1628" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FAF8F5" }}
              >
                Прямой контакт
              </h3>
              <p
                className="text-sm mb-8 leading-relaxed"
                style={{ color: "rgba(250,248,245,0.55)" }}
              >
                Удобнее написать напрямую? Выберите любой способ связи.
              </p>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:nbenidovskaya@yandex.ru"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:-translate-y-0.5"
                    style={{
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "rgba(250,248,245,0.4)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "rgba(250,248,245,0.85)" }}
                    >
                      nbenidovskaya@yandex.ru
                    </p>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/Natalia_Benidovskaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:-translate-y-0.5"
                    style={{
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    <Send className="w-4 h-4" style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "rgba(250,248,245,0.4)" }}
                    >
                      Telegram
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "rgba(250,248,245,0.85)" }}
                    >
                      @Natalia_Benidovskaya
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/наталья-бенидовская-9a160723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:-translate-y-0.5"
                    style={{
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    <Linkedin className="w-4 h-4" style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "rgba(250,248,245,0.4)" }}
                    >
                      LinkedIn
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "rgba(250,248,245,0.85)" }}
                    >
                      Наталья Бенидовская
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Extra note */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.12)",
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="font-semibold" style={{ color: "#0A1628" }}>
                  Вводная сессия — бесплатно.
                </span>{" "}
                30 минут, без обязательств. Разберём вашу ситуацию и определим,
                чем могу быть полезна.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            style={{ border: "1px solid rgba(201,169,110,0.12)" }}
          >
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "#0A1628" }}
            >
              Оставить заявку
            </h3>
            <p className="text-sm mb-8" style={{ color: "#6B7280" }}>
              Заполните форму — я свяжусь с вами в течение 24 часов.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,169,110,0.1)" }}
                >
                  <span className="text-2xl" style={{ color: "#C9A96E" }}>✓</span>
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
                <div className="grid md:grid-cols-2 gap-5 mb-5">
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
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:ring-1"
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
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    Опишите вашу задачу
                  </label>
                  <textarea
                    name="message"
                    rows={4}
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
                  className="w-full py-4 rounded-xl font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60"
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
      </div>
    </section>
  );
}