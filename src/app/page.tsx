import Image from "next/image";
import { PromoActions } from "./PromoActions";

const PROMO = "LS_GLOBOV";

const benefits = [
  { title: "5 профилей бесплатно", text: "Старт без оплаты" },
  { title: "Windows и macOS", text: "Работа на десктопе" },
  { title: "Локальное хранение", text: "Шифрование данных" },
  { title: "Скидка 10%", text: "Промокод LS_GLOBOV" },
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
    <main className="bg-[#020611] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="relative isolate min-h-screen overflow-hidden px-5 py-5 sm:px-8 md:h-screen lg:px-12 lg:py-6"
        aria-labelledby="hero-title"
      >
        <Image
          src="/assets/space-bg.png"
          alt="Космический фон с планетой и синей туманностью"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_24%,rgba(47,136,213,.16),transparent_34%),linear-gradient(90deg,rgba(2,6,17,.96)_0%,rgba(2,6,17,.88)_38%,rgba(2,6,17,.38)_67%,rgba(2,6,17,.54)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#020611]/95 to-transparent" />

        <header className="relative z-30 mx-auto flex h-14 max-w-7xl items-center justify-between gap-5" aria-label="Верхнее меню">
          <a href="#top" className="flex items-center gap-3" aria-label="Linken Sphere — главная">
            <Image
              src="/assets/linken-sphere-logo.png"
              alt="Логотип Linken Sphere"
              width={235}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex" aria-label="Навигация по странице">
            <a className="transition hover:text-white" href="#benefits">Преимущества</a>
            <a className="transition hover:text-white" href="#tariffs">Тарифы</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>

          <a
            href="#promo"
            className="hidden rounded-2xl border border-[#d7e867]/55 px-5 py-3 text-sm font-bold text-[#d7e867] shadow-[0_0_22px_rgba(215,232,103,.10)] transition hover:bg-[#d7e867]/10 sm:inline-flex"
          >
            Получить скидку 🎁
          </a>
        </header>

        <div id="top" className="relative z-20 mx-auto grid max-w-7xl gap-6 pt-8 md:h-[calc(100vh-174px)] md:items-center md:pt-0">
          <div className="max-w-2xl md:max-w-[58%] lg:max-w-2xl lg:pb-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[.055] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_0_22px_rgba(255,255,255,.035)] backdrop-blur">
              <span className="text-[#d7e867]">✦</span> Промокод Linken Sphere 2026
            </p>

            <h1 id="hero-title" className="mt-7 text-balance text-[46px] font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-[54px] md:text-[56px] lg:text-[76px] xl:text-[84px]">
              Linken Sphere
              <span className="mt-1 block text-[#d7e867] drop-shadow-[0_0_18px_rgba(215,232,103,.18)]">
                скидка 10% по промокоду
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Антидетект браузер для мультиаккаунтинга, арбитража, крипты, маркетплейсов и командной работы. Введите промокод при регистрации и получите скидку на оплату.
            </p>

            <button
              id="promo"
              type="button"
              aria-label="Промокод LS_GLOBOV. Нажмите кнопку ниже, чтобы скопировать"
              className="mt-7 w-full max-w-[560px] rounded-[22px] border border-[#d7e867]/30 bg-[#050b18]/62 p-5 text-left shadow-[0_0_38px_rgba(40,108,178,.14),inset_0_0_32px_rgba(255,255,255,.028)] backdrop-blur-md"
            >
              <span className="text-sm text-slate-400">Ваш промокод</span>
              <span className="mt-1 flex items-center justify-between gap-4">
                <strong className="text-[38px] font-black tracking-[0.08em] text-[#d7e867] drop-shadow-[0_0_13px_rgba(215,232,103,.30)] sm:text-5xl">{PROMO}</strong>
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/8 text-lg text-slate-200" aria-hidden="true">⧉</span>
              </span>
            </button>

            <PromoActions />

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Быстрый старт: зарегистрируйтесь, укажите промокод <strong className="text-slate-200">{PROMO}</strong> и активируйте скидку.
            </p>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[520px] md:absolute md:inset-y-0 md:right-[-112px] md:z-10 md:w-[58%] lg:right-[-36px]" aria-hidden="true">
            <Image
              src="/assets/browser-ui-cut.png"
              alt="Интерфейс антидетект браузера Linken Sphere"
              width={1200}
              height={900}
              priority
              className="absolute left-[2%] top-[3%] w-[72%] max-w-[720px] -rotate-[6deg] opacity-92 drop-shadow-[0_0_42px_rgba(45,136,255,.42)] sm:left-[10%] sm:top-[2%] md:left-[-4%] md:top-[17%] md:w-[88%] lg:left-[0%] lg:top-[14%] lg:w-[76%]"
            />
            <Image
              src="/assets/astronaut.png"
              alt="Космонавт Linken Sphere"
              width={800}
              height={1100}
              priority
              className="absolute bottom-0 right-[-12%] h-[92%] w-auto max-w-none object-contain drop-shadow-[0_0_40px_rgba(61,151,255,.25)] sm:right-[-2%] md:right-0 md:bottom-0 md:h-[70%] lg:bottom-0 lg:h-[84%]"
            />
            <div className="absolute left-[18%] top-[54%] rounded-2xl border border-cyan-300/14 bg-slate-950/58 px-4 py-3 text-xs text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,.15)] backdrop-blur-md sm:text-sm md:left-[8%] md:top-[52%] lg:left-[18%] lg:top-[54%]">
              <b className="block text-white">Безопасность</b>
              <span className="text-slate-400">Локальный профиль · Шифрование</span>
            </div>
          </div>
        </div>

        <div id="benefits" className="relative z-30 mx-auto mt-4 grid max-w-7xl gap-2 rounded-3xl border border-white/10 bg-[#050b18]/56 p-2 shadow-[inset_0_0_42px_rgba(255,255,255,.022)] backdrop-blur md:absolute md:bottom-5 md:left-8 md:right-8 md:mt-0 md:grid-cols-2 lg:bottom-6 lg:left-12 lg:right-12 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <article key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-slate-950/22 p-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d7e867]/45 text-[#d7e867]">{index === 0 ? "✓" : index === 1 ? "⌘" : index === 2 ? "◇" : "%"}</div>
              <div>
                <h2 className="text-sm font-bold text-white sm:text-base">{item.title}</h2>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tariffs" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12" aria-labelledby="tariffs-title">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7e867]">Тарифы и скидка</p>
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
