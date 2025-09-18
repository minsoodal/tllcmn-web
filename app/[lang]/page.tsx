import { notFound } from "next/navigation";

import EventsSection from "@/components/home/EventsSection";
import Hero from "@/components/home/Hero";
import LocationSection from "@/components/home/LocationSection";
import MinistryHighlightsSection from "@/components/home/MinistryHighlightsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import ServiceTimesSection from "@/components/home/ServiceTimesSection";
import SermonHighlightSection from "@/components/home/SermonHighlightSection";
import { getHomeContent } from "@/lib/content/home";
import type { Lang } from "@/lib/i18n/config";
import { isLang, languages } from "@/lib/i18n/config";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

type HomePageProps = {
  params: {
    lang: string;
  };
};

export default function HomePage({ params }: HomePageProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const content = getHomeContent(lang);

  return (
    <div className="mx-auto flex min-h-full max-w-6xl flex-col gap-12 px-6 py-16 sm:gap-16 sm:py-20">
      <Hero hero={content.hero} />
      <ServiceTimesSection serviceTimes={content.serviceTimes} />
      <QuickLinksSection quickLinks={content.quickLinks} />
      <SermonHighlightSection sermon={content.sermonHighlight} lang={lang} />
      <MinistryHighlightsSection ministries={content.ministries} />
      <EventsSection events={content.events} lang={lang} />
      <LocationSection location={content.location} />
      <NewsletterSection newsletter={content.newsletter} />
    </div>
  );
}
