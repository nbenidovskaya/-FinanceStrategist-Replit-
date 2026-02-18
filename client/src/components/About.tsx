import { BadgeCheck, Building2, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width max-w-5xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid md:grid-cols-[2fr,1fr] gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Я — независимый CFO и стратегический ментор с более чем 15-летним опытом работы. 
                В роли финансового директора я управлял финансами компаний с <span className="text-secondary font-bold">оборотом более 50 млрд рублей</span>, 
                сопровождал сделки M&A, преодолевал кризисы и фазы взрывного роста.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Моя миссия — сделать высокоуровневую финансовую стратегию доступной. Я верю, что каждый лидер заслуживает 
                ясности и уверенности, которые дает владение цифрами. Будь вы CEO, будущий финансовый директор 
                или профессионал в процессе карьерного перехода — я помогу построить маршрут.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Опыт в крупных корпорациях</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">EMBA и ACCA/FCCA</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Стратегический партнер</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 border-l border-white/10 pl-8 md:pl-12">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-secondary mb-1">15+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Лет опыта</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-secondary mb-1">50М+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Управляемый оборот (млрд руб)</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-secondary mb-1">100%</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Реальные результаты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
