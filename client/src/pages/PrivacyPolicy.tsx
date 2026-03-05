// ============================================================
// ФАЙЛ: src/pages/PrivacyPolicy.tsx
// Создайте этот файл и добавьте в Router в App.tsx:
// <Route path="/privacy" component={PrivacyPolicy} />
// ============================================================

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "#FAF8F5" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm mb-8 inline-block hover:underline" style={{ color: "#C9A96E" }}>
          ← Вернуться на главную
        </a>

        <h1 className="text-3xl font-bold mb-2" style={{ color: "#0A1628", fontFamily: "'Playfair Display', serif" }}>
          Политика конфиденциальности
        </h1>
        <p className="text-sm mb-10" style={{ color: "#9B9BAB" }}>Последнее обновление: {new Date().toLocaleDateString("ru-RU")}</p>

        <div className="space-y-8 text-base leading-relaxed" style={{ color: "#4A4A5A" }}>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>1. Общие положения</h2>
            <p>
              Настоящая политика конфиденциальности описывает, как Наталья Бенидовская (далее — «Консультант»)
              собирает, использует и защищает персональные данные, которые вы предоставляете при использовании
              сайта и при обращении за консультационными услугами.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>2. Какие данные собираются</h2>
            <p>При заполнении контактной формы на сайте могут быть собраны следующие данные:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона (по желанию)</li>
              <li>Сообщение с описанием вашего запроса</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>3. Цели использования данных</h2>
            <p>Собранные данные используются исключительно для:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ответа на ваш запрос и организации консультации</li>
              <li>Информирования о профессиональных услугах (только с вашего согласия)</li>
            </ul>
            <p className="mt-2">Данные не передаются третьим лицам и не используются в рекламных целях.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>4. Хранение данных</h2>
            <p>
              Ваши данные хранятся в защищённых системах и удаляются по вашему запросу или по истечении
              необходимого для деловых целей срока.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>5. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Запросить копию ваших персональных данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку данных в любое время</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>6. Контакты</h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных, обращайтесь по адресу:{" "}
              <a href="mailto:nbenidovskaya@yandex.ru" className="underline" style={{ color: "#C9A96E" }}>
                nbenidovskaya@yandex.ru
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
