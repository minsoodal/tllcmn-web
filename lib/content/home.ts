import type { Lang } from "@/lib/i18n/config";
import ko from "@/content/home/ko.json";
import en from "@/content/home/en.json";

type CTA = {
  label: string;
  href: string;
};

type SectionIntro = {
  title: string;
  description: string;
};

type ServiceItem = {
  name: string;
  time: string;
  description: string;
};

type QuickLink = {
  label: string;
  description: string;
  href: string;
};

type EventItem = {
  title: string;
  date: string;
  time?: string;
  description: string;
  href: string;
};

type MinistryItem = {
  name: string;
  description: string;
  href: string;
};

type SermonHighlight = {
  title: string;
  messageTitle: string;
  speaker: string;
  date: string;
  description: string;
  watchLabel: string;
  watchHref: string;
};

type LocationSection = {
  title: string;
  description: string;
  addressLines: string[];
  mapLabel: string;
  mapHref: string;
  mapPlaceholder: string;
};

type NewsletterSection = {
  title: string;
  description: string;
  cta: CTA;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  serviceTimes: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  quickLinks: QuickLink[];
  sermonHighlight: SermonHighlight;
  ministries: SectionIntro & {
    items: MinistryItem[];
  };
  events: SectionIntro & {
    seeAllLabel: string;
    seeAllHref: string;
    items: EventItem[];
  };
  location: LocationSection;
  newsletter: NewsletterSection;
};

const homeContentMap: Record<Lang, HomeContent> = {
  ko: ko as HomeContent,
  en: en as HomeContent,
};

export function getHomeContent(lang: Lang): HomeContent {
  return homeContentMap[lang];
}
