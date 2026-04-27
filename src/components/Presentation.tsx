import { Pill } from "./Pill";
import { Button } from "./ui/button";
import Icon from "./ui/icon";

const painPoints = [
  "Не знаешь, с чего начать организацию мероприятия",
  "Путаешься в сроках, подрядчиках и бюджете",
  "Боишься провалить ивент из-за отсутствия опыта",
  "Не понимаешь, как выстроить сценарий события",
  "Нет структуры — всё держится на интуиции",
];

export function Presentation() {
  return (
    <section id="presentation" className="relative z-10 py-24 md:py-36 border-t border-white/10">
      <div className="container mx-auto">
        <Pill className="mb-10">ПРЕЗЕНТАЦИЯ</Pill>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: pain points */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-sentient mb-4 leading-tight">
                Руководство для тех, кто{" "}
                <i className="font-light">хочет делать события</i>
              </h2>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                Закрытый материал, который снимает главные вопросы организаторов без опыта — доступен после оплаты курса.
              </p>
            </div>

            <ul className="space-y-3">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 font-mono text-sm text-foreground/70">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <a href="#program">
              <Button className="w-fit">
                [Получить презентацию]
              </Button>
            </a>
          </div>

          {/* Right: locked card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto border border-white/10 bg-white/5 backdrop-blur-sm p-10 flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center">
                <Icon name="Lock" size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-sentient text-2xl mb-2">Презентация</p>
                <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                  Полное руководство по организации мероприятий
                </p>
              </div>
              <div className="w-full border-t border-white/10 pt-6 flex flex-col gap-2">
                {["Структура события", "Сценарий шаг за шагом", "Работа с подрядчиками", "Бюджет и тайминг"].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-mono text-xs text-foreground/40">
                    <Icon name="FileText" size={12} className="text-primary/50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-primary/60 uppercase tracking-widest">
                Доступно после оплаты
              </p>
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-primary/30" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
