import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://globov-main.vercel.app"),
  title: { default: "Сайт Сергея Глобова", template: "%s — Сергей Глобов" },
  description: "Персональный сайт Сергея Глобова",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
