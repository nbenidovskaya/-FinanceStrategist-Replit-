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
