"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // motion used for FAQ buttons

const steps = [
  { num: "01", label: "Избирате пакет", sub: "Разглеждате нашите оферти и избирате най-подходящия за вашия проект и бюджет." },
  { num: "02", label: "Попълвате формуляр", sub: "Оставяте валиден телефон и/или имейл, за да можем да се свържем с вас." },
  { num: "03", label: "Свързваме се с вас", sub: "Наш представител ще се свърже с вас в рамките на 24 часа." },
  { num: "04", label: "Споделяте визия", sub: "Разказвате ни за вашия бизнес, стил и конкретни желания за сайта." },
  { num: "05", label: "Подписваме договор", sub: "Изготвяме договор с ясни условия, обхват и срокове. Без изненади." },
  { num: "06", label: "Пускаме сайта", sub: "Стартираме веднага след подписване. Срокът е от 2 до 4 седмици." },
];

const faqs = [
  { q: "Колко струва един сайт?", a: "Предлагаме три пакета — Старт (€200), Про (€250) и Премиум (€500+). Цената зависи от обема и сложността на проекта." },
  { q: "Колко бързо ще е готов сайтът?", a: "Стандартният срок е от 2 до 4 седмици след подписване на договора и получаване на всички материали." },
  { q: "Имам ли нужда от технически познания?", a: "Не. Ние се грижим за всичко техническо — хостинг, домейн, публикуване. Вие просто ни разказвате за вашия бизнес." },
  { q: "Мога ли да редактирам сайта сам след това?", a: "Да. Ще ви обясним как да правите основни промени. При по-мащабни обновления можете да се свържете с нас." },
  { q: "Какво ми е нужно да предоставя?", a: "Лого, снимки, текстове и идея за визията. Ако нямате някое от тях — помагаме и с това." },
  { q: "Предлагате ли поддръжка след пускане?", a: "Да, предлагаме опционална месечна поддръжка. Можем да обсъдим условията при подписване на договора." },
];

function StepRow({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <div
      className="grid items-start py-8 sm:py-10 border-b"
      style={{
        gridTemplateColumns: "min(140px, 22vw) 1fr",
        gap: "clamp(16px, 3vw, 32px)",
        borderColor: "rgba(240,244,255,0.07)",
      }}
    >
      {/* Ghost number */}
      <div className="flex items-start pt-1 overflow-hidden">
        <span
          className="font-black leading-none tracking-tighter select-none"
          style={{
            fontSize: "clamp(48px, 7vw, 100px)",
            color: "rgba(240,244,255,0.11)",
            letterSpacing: "-0.04em",
          }}
        >
          {step.num}
        </span>
      </div>

      {/* Text */}
      <div className="pt-2">
        <h3
          className="font-black leading-none tracking-tight mb-3"
          style={{ fontSize: "clamp(22px, 2.2vw, 34px)", color: "#F0F4FF" }}
        >
          {step.label}
        </h3>
        <p
          className="text-[#F0F4FF]/45 leading-relaxed max-w-lg"
          style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
        >
          {step.sub}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0F1E] py-16 sm:py-24 px-6" id="process">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-4">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B7AE8" }}>
            Как работим
          </p>
          <div className="overflow-hidden">
            <h2
              className="font-black leading-none tracking-tighter select-none"
              style={{
                fontSize: "clamp(72px, 13vw, 160px)",
                color: "rgba(240,244,255,0.11)",
                letterSpacing: "-0.04em",
              }}
            >
              Процесът
            </h2>
          </div>
        </div>

        {/* Top border above first step */}
        <div className="mt-16 border-t" style={{ borderColor: "rgba(240,244,255,0.07)" }} />

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <StepRow key={i} step={step} index={i} />
          ))}
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(240,244,255,0.07)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B7AE8" }}>
                Въпроси
              </p>
              <div className="overflow-hidden">
                <h3
                  className="font-black leading-none tracking-tighter select-none"
                  style={{
                    fontSize: "clamp(52px, 7vw, 100px)",
                    color: "rgba(240,244,255,0.11)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Имате<br />въпроси?
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b" style={{ borderColor: "rgba(240,244,255,0.07)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="font-semibold text-[#F0F4FF]" style={{ fontSize: "clamp(14px, 1.1vw, 15px)" }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: openFaq === i ? "#3B7AE8" : "rgba(240,244,255,0.08)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm text-[#F0F4FF]/50 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
