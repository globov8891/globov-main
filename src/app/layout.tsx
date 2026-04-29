import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://globov-main.vercel.app"),
  title: {
    default: "Промокод Linken Sphere LS_GLOBOV — скидка 10%",
    template: "%s — Linken Sphere",
  },
  description:
    "Промокод LS_GLOBOV для Linken Sphere: скидка 10% на антидетект браузер для мультиаккаунтинга, арбитража, крипты и маркетплейсов.",
  keywords: [
    "Linken Sphere промокод",
    "LS_GLOBOV",
    "скидка Linken Sphere",
    "антидетект браузер",
    "мультиаккаунтинг",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Linken Sphere Promo",
    title: "Промокод Linken Sphere LS_GLOBOV — скидка 10%",
    description: "Получите скидку 10% на Linken Sphere по промокоду LS_GLOBOV.",
    images: [{ url: "/assets/space-bg.png", width: 1600, height: 900, alt: "Linken Sphere промокод LS_GLOBOV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Промокод Linken Sphere LS_GLOBOV — скидка 10%",
    description: "Получите скидку 10% на Linken Sphere по промокоду LS_GLOBOV.",
    images: ["/assets/space-bg.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020611",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
