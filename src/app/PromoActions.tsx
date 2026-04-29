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
    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={copyPromo}
        className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#d7e867] px-6 text-sm font-extrabold text-slate-950 shadow-[0_0_24px_rgba(215,232,103,.18)] transition hover:-translate-y-0.5 hover:bg-[#e0ef7a] focus:outline-none focus:ring-2 focus:ring-[#d7e867]/60 sm:h-14"
        aria-label="Скопировать промокод LS_GLOBOV"
      >
        {copied ? "Промокод скопирован" : "Скопировать промокод"}
      </button>

      <a
        href="https://linkensphere.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-[#d7e867]/45 bg-slate-950/35 px-6 text-sm font-bold text-[#d7e867] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#d7e867] hover:bg-[#d7e867]/10 focus:outline-none focus:ring-2 focus:ring-[#d7e867]/45 sm:h-14"
        aria-label="Перейти к регистрации Linken Sphere"
      >
        Перейти к регистрации <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
