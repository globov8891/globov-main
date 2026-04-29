"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroVisual() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;

    function onMove(event: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        setPos({ x, y });
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="relative min-h-[390px] sm:min-h-[520px] md:absolute md:inset-y-0 md:right-[-112px] md:z-10 md:w-[58%] lg:right-[-36px]" aria-hidden="true">
      <Image
        src="/assets/browser-ui-cut.png"
        alt="Интерфейс антидетект браузера Linken Sphere"
        width={1200}
        height={900}
        priority
        style={{
          transform: `translate3d(${pos.x * -10}px, ${pos.y * -8}px, 0) rotate(-6deg)`,
        }}
        className="absolute left-[2%] top-[3%] w-[72%] max-w-[720px] opacity-92 drop-shadow-[0_0_42px_rgba(45,136,255,.42)] transition-transform duration-200 ease-out sm:left-[10%] sm:top-[2%] md:left-[-4%] md:top-[17%] md:w-[88%] lg:left-[0%] lg:top-[14%] lg:w-[76%]"
      />
      <Image
        src="/assets/astronaut.png"
        alt="Космонавт Linken Sphere"
        width={800}
        height={1100}
        priority
        style={{
          transform: `translate3d(${pos.x * 18}px, ${pos.y * 14}px, 0)`,
        }}
        className="absolute bottom-0 right-[-12%] h-[92%] w-auto max-w-none object-contain drop-shadow-[0_0_40px_rgba(61,151,255,.25)] transition-transform duration-200 ease-out sm:right-[-2%] md:right-0 md:bottom-0 md:h-[70%] lg:bottom-0 lg:h-[84%]"
      />
      <div
        style={{ transform: `translate3d(${pos.x * 8}px, ${pos.y * 6}px, 0)` }}
        className="absolute left-[18%] top-[54%] rounded-2xl border border-cyan-300/14 bg-slate-950/58 px-4 py-3 text-xs text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,.15)] backdrop-blur-md transition-transform duration-200 ease-out sm:text-sm md:left-[8%] md:top-[52%] lg:left-[18%] lg:top-[54%]"
      >
        <b className="block text-white">Безопасность</b>
        <span className="text-slate-400">Локальный профиль · Шифрование</span>
      </div>
    </div>
  );
}
