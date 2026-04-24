import { Pill } from "./Pill";

export function About() {
  const stats = [
    { value: "200+", label: "успешных мероприятий" },
    { value: "8 лет", label: "опыта в индустрии" },
    { value: "3 500+", label: "выпускников курса" },
  ];

  return (
    <section id="about" className="relative z-10 py-24 md:py-36 border-t border-white/10">
      <div className="container mx-auto">
        <Pill className="mb-10">ОБ АВТОРЕ</Pill>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <img
                src="https://cdn.poehali.dev/projects/42581af7-83ad-49bc-9de9-1800a6d19c54/files/59b2e6a4-ef80-4bf6-a690-43ebaef0e05a.jpg"
                alt="Автор курса"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
            {/* Decorative line */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 hidden md:block" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-sentient mb-2">
                Имя <i className="font-light">Фамилия</i>
              </h2>
              <p className="font-mono text-sm text-primary uppercase tracking-widest">
                Эксперт по ивент-менеджменту
              </p>
            </div>

            <div className="space-y-4 font-mono text-sm text-foreground/60 leading-relaxed">
              <p>
                Организовывала мероприятия для крупнейших компаний страны — от корпоративных форумов на 2 000 человек до международных конференций и закрытых светских вечеров.
              </p>
              <p>
                Разработала авторскую методику управления событиями, которая сокращает время подготовки вдвое и устраняет типичные ошибки начинающих организаторов.
              </p>
              <p>
                Преподаёт ивент-менеджмент с 2017 года. Студенты курса работают с ведущими агентствами России и СНГ.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-sentient text-primary">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-foreground/50 uppercase leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
