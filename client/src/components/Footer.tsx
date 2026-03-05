import { Link } from "react-scroll";
import { Linkedin, Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t" style={{ background: "#0A1628", borderColor: "rgba(201,169,110,0.15)" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Finance<span style={{ color: "#C9A96E" }}>Strategist</span>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(250,248,245,0.55)" }}>
              Трансформация финансов из бэк-офисной функции в двигатель стратегического роста.
              Независимое консультирование для прогрессивных лидеров.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/наталья-бенидовская-9a160723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", color: "#C9A96E" }}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Natalia_Benidovskaya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", color: "#C9A96E" }}
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:nbenidovskaya@yandex.ru"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", color: "#C9A96E" }}
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "#C9A96E" }}>Услуги</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(250,248,245,0.55)" }}>
              {[
                "Стратегический консалтинг",
                "Менторство CFO",
                "Независимый советник",
                "Кризис-менеджмент",
                "Финансовое моделирование",
              ].map((item) => (
                <li key={item}>
                  <Link to="services" smooth={true} className="hover:text-amber-300 cursor-pointer transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "#C9A96E" }}>Навигация</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(250,248,245,0.55)" }}>
              <li><Link to="about" smooth={true} className="hover:text-amber-300 cursor-pointer transition-colors">Обо мне</Link></li>
              <li><Link to="cases" smooth={true} className="hover:text-amber-300 cursor-pointer transition-colors">Кейсы</Link></li>
              <li><Link to="method" smooth={true} className="hover:text-amber-300 cursor-pointer transition-colors">Методология</Link></li>
              <li><Link to="contact" smooth={true} className="hover:text-amber-300 cursor-pointer transition-colors">Контакты</Link></li>
              <li>
                <a href="/privacy" className="hover:text-amber-300 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(201,169,110,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(250,248,245,0.3)" }}>
            © {new Date().getFullYear()} Наталья Бенидовская. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: "rgba(250,248,245,0.3)" }}>
            nbenidovskaya@yandex.ru · @Natalia_Benidovskaya
          </p>
        </div>
      </div>
    </footer>
  );
}
