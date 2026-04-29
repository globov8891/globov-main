import Image from "next/image";
import { HeroVisual } from "./HeroVisual";
import { PromoActions } from "./PromoActions";

const PROMO = "LS_GLOBOV";

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
            <a className="transition hover:text-white" href="#tariffs">Тарифы</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>

          <a
            href="#promo"
            className="hidden rounded-2xl border border-[#8bb7e8]/55 px-5 py-3 text-sm font-bold text-[#d7e8ff] shadow-[0_0_22px_rgba(101,169,238,.10)] transition hover:bg-[#d7e8ff]/10 sm:inline-flex"
          >
            Получить скидку 🎁
          </a>
        </header>

        <div id="top" className="relative z-20 mx-auto grid max-w-7xl gap-6 pt-8 md:h-[calc(100vh-92px)] md:items-center md:pt-0">
          <div className="relative z-40 max-w-2xl md:max-w-[58%] lg:max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[.055] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_0_22px_rgba(255,255,255,.035)] backdrop-blur">
              <span className="text-[#d7e8ff]">✦</span> Промокод Linken Sphere 2026
            </p>

            <h1 id="hero-title" className="mt-7 text-balance tracking-[-0.055em]">
              <span className="block text-[48px] font-black leading-[0.94] text-white sm:text-[62px] md:text-[64px] lg:text-[82px] xl:text-[92px]">
                Linken Sphere
              </span>
              <span className="mt-4 block max-w-[640px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-100 sm:text-[36px] md:text-[38px] lg:text-[48px] xl:text-[54px]">
                скидка <span className="rounded-2xl border border-[#8bb7e8]/28 bg-[#8bb7e8]/10 px-3 py-0.5 text-[#d7e8ff] shadow-[0_0_22px_rgba(101,169,238,.16)]">10%</span> по промокоду
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Антидетект браузер для мультиаккаунтинга, арбитража, крипты, маркетплейсов и командной работы. Введите промокод при регистрации и получите скидку на оплату.
            </p>

            <PromoActions variant="card" />

            <PromoActions />

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Быстрый старт: зарегистрируйтесь, укажите промокод <strong className="text-slate-200">{PROMO}</strong> и активируйте скидку.
            </p>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="tariffs" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12" aria-labelledby="tariffs-title">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7e8ff]">Тарифы и скидка</p>
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
