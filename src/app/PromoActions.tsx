"use client";

import { useState } from "react";

const PROMO = "LS_GLOBOV";

type PromoActionsProps = {
  variant?: "buttons" | "card";
};

export function copyPromoCode() {
  if (typeof window === "undefined") return false;

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = PROMO;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      document.body.removeChild(textarea);
      return false;
    }
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(PROMO).catch(fallbackCopy);
    return true;
  }

  return fallbackCopy();
}

export function PromoActions({ variant = "buttons" }: PromoActionsProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    try {
      copyPromoCode();
    } catch {
      // визуально подтверждаем копирование даже если браузер запретил Clipboard API
    }
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (variant === "card") {
    return (
      <button
        id="promo"
        type="button"
        onClick={handleCopy}
        className="group mt-7 w-full max-w-[560px] rounded-[24px] border border-[#77a7d8]/28 bg-[#041021]/72 p-5 text-left shadow-[0_0_38px_rgba(45,111,184,.16),inset_0_0_32px_rgba(255,255,255,.026)] backdrop-blur-md transition hover:border-[#9fc7ef]/44 hover:bg-[#06162b]/78 focus:outline-none focus:ring-2 focus:ring-[#8bb7e8]/35"
        aria-label="Скопировать промокод LS_GLOBOV"
      >
        <span className="text-sm text-slate-400">Ваш промокод</span>
        <span className="mt-1 flex items-center justify-between gap-4">
          <strong className="text-[38px] font-black tracking-[0.08em] text-[#d7e8ff] drop-shadow-[0_0_16px_rgba(101,169,238,.22)] sm:text-5xl">
            {PROMO}
          </strong>
          <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/8 text-lg text-slate-200 transition group-hover:bg-white/12" aria-hidden="true">
            ⧉
          </span>
        </span>
        <span className="mt-3 block text-xs font-medium text-[#9fc7ef]">
          {copied ? "Промокод скопирован" : "Нажмите, чтобы скопировать"}
        </span>
      </button>
    );
  }

  return (
    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#d7e8ff] px-6 text-sm font-extrabold text-slate-950 shadow-[0_0_24px_rgba(101,169,238,.16)] transition hover:-translate-y-0.5 hover:bg-[#e7f2ff] focus:outline-none focus:ring-2 focus:ring-[#9fc7ef]/55 sm:h-14"
        aria-label="Скопировать промокод LS_GLOBOV"
      >
        {copied ? "Промокод скопирован" : "Скопировать промокод"}
      </button>

      <a
        href="https://linkensphere.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex h-13 items-center justify-center gap-3 rounded-2xl border border-[#8bb7e8]/38 bg-slate-950/35 px-6 text-sm font-bold text-[#d7e8ff] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#b8d7f6] hover:bg-[#8bb7e8]/10 focus:outline-none focus:ring-2 focus:ring-[#8bb7e8]/40 sm:h-14"
        aria-label="Перейти к регистрации Linken Sphere"
      >
        Перейти к регистрации <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
