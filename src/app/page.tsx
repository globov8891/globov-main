import Image from "next/image";
import { PromoActions } from "./PromoActions";

const PROMO = "LS_GLOBOV";

const benefits = [
  { title: "5 профилей бесплатно", text: "Быстрый старт без оплаты для проверки рабочих сценариев." },
  { title: "Windows и macOS", text: "Комфортная работа на основных десктопных системах." },
  { title: "Локальное хранение", text: "Данные профилей хранятся локально и шифруются." },
  { title: "Скидка 10%", text: "Промокод LS_GLOBOV активирует скидку при регистрации." },
];

const faq = [
  {
    q: "Как применить промокод Linken Sphere?",
    a: "Скопируйте LS_GLOBOV, перейдите к регистрации и укажите промокод в форме оплаты или активации скидки.",
  },
  {
    q: "Какая скидка по промокоду LS_GLOBOV?",
    a: "Промокод даёт скидку 10% на оплату Linken Sphere.",
  },
  {
    q: "Для кого подходит Linken Sphere?",
    a: "Для мультиаккаунтинга, арбитража, крипты, маркетплейсов, командной работы и безопасного управления браузерными профилями.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Промокод Linken Sphere LS_GLOBOV",
        url: "https://globov-main.vercel.app/",
        inLanguage: "ru-RU",
      },
      {
        "@type": "SoftwareApplication",
        name: "Linken Sphere",
        applicationCategory: "BrowserApplication",
        operatingSystem: "Windows, macOS",
        description:
          "Антидетект браузер для мультиаккаунтинга, арбитража, крипты, маркетплейсов и командной работы.",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          discount: "10%",
          description: "Скидка 10% по промокоду LS_GLOBOV",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020611] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-screen px-5 py-6 sm:px-8 lg:px-12" aria-labelledby="hero-title">
        <Image
          src="/assets/space-bg.png"
          alt="Космический фон с планетой и синей туманностью"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover opacity-80"
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_66%_28%,rgba(63,157,255,.24),transparent_34%),linear-gradient(90deg,rgba(2,6,17,.98)_0%,rgba(2,6,17,.82)_42%,rgba(2,6,17,.35)_75%,rgba(2,6,17,.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#020611] to-transparent" />

        <header className="mx-auto flex max-w-7xl items-center justify-between gap-5" aria-label="Верхнее меню">
          <a href="#top" className="flex items-center gap-3" aria-label="Linken Sphere — главная">
            <Image src="/assets/linken-sphere-logo.png" alt="Логотип Linken Sphere" width={235} height={40} priority className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex" aria-label="Навигация по странице">
            <a className="transition hover:text-white" href="#benefits">Преимущества</a>
            <a className="transition hover:text-white" href="#tariffs">Тарифы</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>

          <a
            href="#promo"
            className="hidden rounded-2xl border border-[#f4ff4f]/60 px-5 py-3 text-sm font-bold text-[#f4ff4f] shadow-[0_0_24px_rgba(244,255,79,.14)] transition hover:bg-[#f4ff4f]/10 sm:inline-flex"
          >
            Получить скидку 🎁
          </a>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-10 pt-12 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.95fr)] lg:pt-0">
          <div className="relative z-20 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_0_22px_rgba(255,255,255,.04)] backdrop-blur">
              <span className="text-[#f4ff4f]">✦</span> Промокод Linken Sphere 2026
            </p>

            <h1 id="hero-title" className="mt-7 text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Linken Sphere со скидкой <span className="block text-[#f4ff4f] drop-shadow-[0_0_22px_rgba(244,255,79,.25)]">10% по промокоду</span>
              <span className="block text-[#f4ff4f]">{PROMO}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              Антидетект браузер для мультиаккаунтинга, арбитража, крипты, маркетплейсов и командной работы. Введите промокод при регистрации и получите скидку на оплату.
            </p>

            <div id="promo" className="mt-7 max-w-xl rounded-3xl border border-[#f4ff4f]/35 bg-slate-950/48 p-5 shadow-[0_0_55px_rgba(42,132,255,.13),inset_0_0_36px_rgba(255,255,255,.035)] backdrop-blur-md">
              <p className="text-sm text-slate-400">Ваш промокод</p>
              <div className="mt-1 flex items-center justify-between gap-4">
                <strong className="text-4xl font-black tracking-[0.08em] text-[#f4ff4f] drop-shadow-[0_0_18px_rgba(244,255,79,.45)] sm:text-5xl">{PROMO}</strong>
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-xl text-slate-100" aria-hidden="true">⧉</span>
              </div>
            </div>

            <PromoActions />

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
              Быстрый старт: зарегистрируйтесь, укажите промокод <strong className="text-slate-200">{PROMO}</strong> и активируйте скидку.
            </p>
          </div>

          <div className="relative z-10 min-h-[430px] lg:min-h-[640px]" aria-hidden="true">
            <Image
              src="/assets/browser-ui.png"
              alt="Интерфейс антидетект браузера Linken Sphere"
              width={1200}
              height={900}
              priority
              className="absolute left-0 top-16 w-[76%] max-w-[720px] -rotate-[7deg] rounded-[32px] opacity-90 shadow-[0_0_70px_rgba(45,136,255,.35)] lg:left-[-30px] lg:top-20"
            />
            <Image
              src="/assets/astronaut.png"
              alt="Космонавт Linken Sphere"
              width={800}
              height={1100}
              priority
              className="absolute -right-20 bottom-[-120px] w-[58%] max-w-[520px] drop-shadow-[0_0_42px_rgba(61,151,255,.28)] sm:right-0 lg:-right-16 lg:bottom-[-60px] lg:w-[62%]"
            />
            <div className="absolute left-[15%] top-[56%] rounded-2xl border border-cyan-300/15 bg-slate-950/55 px-5 py-4 text-sm text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,.16)] backdrop-blur-md">
              <b className="block text-white">Безопасность</b>
              <span className="text-slate-400">Локальный профиль · Шифрование</span>
            </div>
          </div>
        </div>

        <div id="benefits" className="mx-auto mt-6 grid max-w-7xl gap-3 rounded-3xl border border-white/10 bg-white/[.045] p-3 shadow-[inset_0_0_42px_rgba(255,255,255,.025)] backdrop-blur md:grid-cols-4">
          {benefits.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-white/8 bg-slate-950/30 p-5">
              <div className="mb-3 grid size-10 place-items-center rounded-full border border-[#f4ff4f]/45 text-[#f4ff4f]">{index === 0 ? "✓" : index === 1 ? "⌘" : index === 2 ? "◇" : "%"}</div>
              <h2 className="text-base font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tariffs" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12" aria-labelledby="tariffs-title">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f4ff4f]">Тарифы и скидка</p>
          <h2 id="tariffs-title" className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Промокод для оплаты Linken Sphere</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Используйте <strong className="text-white">LS_GLOBOV</strong>, чтобы получить скидку 10%. Блок тарифов расширим после финального согласования оффера и партнёрской ссылки.</p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-3xl font-black tracking-tight sm:text-5xl">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faq.map((item) => (
            <article key={item.q} className="rounded-3xl border border-white/10 bg-white/[.045] p-6 backdrop-blur">
              <h3 className="text-lg font-bold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
