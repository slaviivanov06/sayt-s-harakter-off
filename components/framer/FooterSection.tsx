"use client";

import { useState } from "react";
import OrderModal from "./OrderModal";
import ContactModal from "./ContactModal";

const footerLinks = {
  Company: ["About", "Careers", "Cookies", "Security", "Privacy", "Abuse", "Charges", "Terms"],
  Product: ["Learn", "Plugins", "Gallery", "Agencies", "Startups", "Freelancers", "Prototyping"],
  Templates: ["New", "Free", "Agency", "Blog", "Brand Guidelines", "Changelog", "Landing Page", "Personal", "Photography", "Podcast", "Portfolio", "Splash Page", "Startup", "Web3", "3D"],
  Resources: ["Desktop Apps", "Figma Plugin", "SEO", "Partner program", "Webflow vs. Framer"],
  Support: ["Updates", "Discord", "Startups", "Contact"],
};

function TwitterIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.854L1.254 2.25H8.08l4.265 5.638 5.9-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.86 5.322a10.042 10.042 0 0 1 2.26 5.872c-.328-.065-3.618-.733-6.927-.317-.073-.182-.146-.363-.219-.546a52.32 52.32 0 0 0-.528-1.244c3.601-1.462 5.236-3.563 5.414-3.765zm-1.463-1.418c-.146.202-1.635 2.145-5.127 3.463-1.608-2.944-3.384-5.368-3.673-5.74A10.04 10.04 0 0 1 12 2c2.31 0 4.44.783 6.137 2.073zM5.96 2.26c.274.362 2.02 2.793 3.647 5.677-4.586 1.22-8.64 1.196-9.069 1.187A10.044 10.044 0 0 1 5.96 2.26zM1.965 11.998c0-.139.005-.278.01-.418.418.01 5.138.077 10.027-1.389.28.55.546 1.105.8 1.664-.146.04-.292.082-.437.127-5.044 1.634-7.683 6.119-7.889 6.486A10.012 10.012 0 0 1 1.965 12zm10.03 10.038a10.012 10.012 0 0 1-6.052-2.028c.172-.35 2.128-4.18 7.638-6.099.027-.01.05-.02.073-.03a39.58 39.58 0 0 1 2.01 7.161 9.97 9.97 0 0 1-3.669.996zm5.452-1.763a41.22 41.22 0 0 0-1.89-6.744c3.102-.497 5.826.315 6.172.424a10.044 10.044 0 0 1-4.282 6.32z"/>
    </svg>
  );
}

function ProductHuntIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.8 0-.994-.806-1.8-1.8-1.8zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.8V6h5.804c2.319 0 4.2 1.881 4.2 4.2 0 2.319-1.881 4.2-4.2 4.2z"/>
    </svg>
  );
}

export default function FooterSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const packages = [
    {
      name: "Старт",
      price: "200",
      suffix: "€",
      desc: "Идеален за малък бизнес или лично портфолио. Бърз старт, чист дизайн.",
      features: ["1 страница","Мобилна оптимизация","Базово SEO","Публикуване","1 ревизия"],
      btnLabel: "Избери Старт",
      popular: false,
    },
    {
      name: "Про",
      price: "250",
      suffix: "€",
      oldPrice: "300€",
      discount: "-17%",
      desc: "За бизнеси, които искат да изпъкнат. Пълен дизайн с анимации и допълнителни секции.",
      features: ["До 5 секции","Персонализиран дизайн","Анимации и интерактивност","SEO оптимизация","Контактна форма","3 ревизии","30 дни поддръжка"],
      btnLabel: "Избери Про",
      popular: true,
    },
    {
      name: "Премиум",
      price: "500",
      suffix: "€+",
      desc: "За амбициозни проекти и e-commerce. Напълно персонализирано решение.",
      features: ["Неограничени секции","E-commerce интеграция","Напреднали анимации","Пълно SEO","CMS система","Неограничени ревизии","3 месеца поддръжка","Приоритетна комуникация"],
      btnLabel: "Свържи се с нас",
      popular: false,
    },
  ];

  return (
    <>
    <OrderModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    <footer className="bg-[#0A0F1E] border-t border-white/[0.07]">
      {/* Pricing */}
      <div className="max-w-[1180px] mx-auto px-6 py-16 sm:py-24 border-b border-white/[0.07]">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#3B7AE8] mb-3">Ценови пакети</p>
          <div className="overflow-hidden">
            <h2
              className="font-black leading-none tracking-tighter select-none mb-4"
              style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                color: "rgba(240,244,255,0.11)",
                letterSpacing: "-0.04em",
              }}
            >Изберете своя пакет</h2>
          </div>
          <p className="text-[#F0F4FF]/40 text-lg max-w-xl mx-auto">Професионален сайт, пригоден за вашия бизнес. Без скрити такси.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => {
            const hovered = hoveredCard === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative flex flex-col rounded-2xl p-5 sm:p-8 border transition-all duration-300 cursor-default"
                style={{
                  background: hovered ? "linear-gradient(145deg, #4F8EF7, #3B7AE8)" : "rgba(240,244,255,0.05)",
                  borderColor: hovered ? "transparent" : "rgba(240,244,255,0.12)",
                  boxShadow: hovered ? "0 20px 50px rgba(79,142,247,0.15)" : "none",
                  transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  zIndex: hovered ? 10 : 1,
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: hovered ? "rgba(255,255,255,0.2)" : "linear-gradient(90deg, #3B7AE8, #3B7AE8)" }}>
                      НАЙ-ПОПУЛЯРЕН
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p className="text-sm font-medium mb-1 transition-colors duration-300"
                    style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(240,244,255,0.5)" }}>
                    {pkg.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold transition-colors duration-300"
                      style={{ color: hovered ? "#fff" : "#F0F4FF" }}>
                      {pkg.price}
                    </span>
                    <span className="text-2xl font-semibold mb-1 transition-colors duration-300"
                      style={{ color: hovered ? "rgba(255,255,255,0.6)" : "rgba(240,244,255,0.5)" }}>
                      {pkg.suffix}
                    </span>
                  </div>
                  {pkg.oldPrice && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm line-through transition-colors duration-300"
                        style={{ color: hovered ? "rgba(255,255,255,0.4)" : "rgba(240,244,255,0.3)" }}>
                        {pkg.oldPrice}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: hovered ? "#fff" : "#3B7AE8", background: hovered ? "rgba(255,255,255,0.15)" : "rgba(79,142,247,0.12)" }}>
                        {pkg.discount}
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: hovered ? "rgba(255,255,255,0.6)" : "rgba(240,244,255,0.5)" }}>
                    {pkg.desc}
                  </p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm transition-colors duration-300"
                      style={{ color: hovered ? "rgba(255,255,255,0.8)" : "rgba(240,244,255,0.6)" }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16"
                        style={{ color: hovered ? "rgba(255,255,255,0.6)" : "#3B7AE8" }}>
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => pkg.name === "Премиум" ? setContactOpen(true) : setSelectedPkg(pkg.name)}
                  className="w-full py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: hovered ? "rgba(255,255,255,0.15)" : "linear-gradient(135deg, #3B7AE8, #3B7AE8)",
                    color: "#fff",
                    border: hovered ? "1px solid rgba(255,255,255,0.25)" : "none",
                  }}
                >
                  {pkg.btnLabel}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-[#F0F4FF]/30 text-sm">WebStudio © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4 text-[#F0F4FF]/30">
          {[TwitterIcon, DiscordIcon, YouTubeIcon, DribbbleIcon, ProductHuntIcon].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-[#F0F4FF]/70 transition-colors">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
    </>
  );
}
