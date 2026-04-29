"use client";

import { useState } from "react";

const PROMO = "LS_GLOBOV";

export function PromoActions() {
  const [copied, setCopied] = useState(false);

  async function copyPromo() {
    try {
      await navigator.clipboard.writeText(PROMO);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={copyPromo}
        className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#f4ff4f] px-6 text-sm font-extrabold text-slate-950 shadow-[0_0_34px_rgba(244,255,79,.28)] transition hover:-translate-y-0.5 hover:bg-[#fbff74] focus:outline-none focus:ring-2 focus:ring-[#f4ff4f]/70"
        aria-label="Скопировать промокод LS_GLOBOV"
      >
        <span aria-hidden="true">⧉</span>
        {copied ? "Промокод скопирован" : "Скопировать промокод"}
      </button>

      <a
        href="https://linkensphere.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#f4ff4f]/55 bg-slate-950/35 px-6 text-sm font-bold text-[#f4ff4f] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#f4ff4f] hover:bg-[#f4ff4f]/10 focus:outline-none focus:ring-2 focus:ring-[#f4ff4f]/50"
        aria-label="Перейти к регистрации Linken Sphere"
      >
        Перейти к регистрации <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
