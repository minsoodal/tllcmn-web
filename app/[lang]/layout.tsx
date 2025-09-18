import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Lang } from "@/lib/i18n/config";
import { getAlternateLanguage, isLang } from "@/lib/i18n/config";
import { siteCopy } from "@/lib/i18n/siteCopy";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const copy = siteCopy[lang];
  const alternate = getAlternateLanguage(lang);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    openGraph: {
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription,
      url: `/${lang}`,
      type: "website",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        [lang]: `/${lang}`,
        [alternate]: `/${alternate}`,
      },
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;

  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <Header lang={lang} />
      <main className="flex-1 bg-gradient-to-b from-white via-white to-slate-50">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
