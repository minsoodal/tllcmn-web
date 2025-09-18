import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Lang } from "@/lib/i18n/config";
import { getAlternateLanguage, isLang } from "@/lib/i18n/config";
import { siteCopy } from "@/lib/i18n/siteCopy";

type Awaitable<T> = T | Promise<T>;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Awaitable<{
    lang: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Awaitable<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const resolvedLang = lang as Lang;
  const copy = siteCopy[resolvedLang];
  const alternate = getAlternateLanguage(resolvedLang);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    openGraph: {
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription,
      url: `/${resolvedLang}`,
      type: "website",
    },
    alternates: {
      canonical: `/${resolvedLang}`,
      languages: {
        [resolvedLang]: `/${resolvedLang}`,
        [alternate]: `/${alternate}`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const resolvedLang = lang as Lang;

  return (
    <div lang={resolvedLang} className="flex min-h-screen flex-col">
      <Header lang={resolvedLang} />
      <main className="flex-1 bg-gradient-to-b from-white via-white to-slate-50">
        {children}
      </main>
      <Footer lang={resolvedLang} />
    </div>
  );
}
