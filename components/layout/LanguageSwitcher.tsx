"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Lang } from "@/lib/i18n/config";
import { languages } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  lang: Lang;
};

function buildHref(pathname: string | null, locale: Lang) {
  if (!pathname || pathname === "/") {
    return `/${locale}`;
  }

  const stripped = pathname.replace(/^\/(ko|en)/, "");
  const normalized = stripped.startsWith("/") || stripped.length === 0 ? stripped : `/${stripped}`;

  return `/${locale}${normalized}`;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-600">
      {languages.map((locale) => {
        const isActive = locale === lang;
        const href = buildHref(pathname, locale);

        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full px-2 py-1 transition ${
              isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {locale === "ko" ? "한국어" : "EN"}
          </Link>
        );
      })}
    </div>
  );
}
