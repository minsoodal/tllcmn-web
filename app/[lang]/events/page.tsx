import Link from "next/link";
import { notFound } from "next/navigation";

import type { Lang } from "@/lib/i18n/config";
import { isLang } from "@/lib/i18n/config";

const eventsContent: Record<Lang, {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  weeklyRhythms: Array<{
    title: string;
    time: string;
    description: string;
  }>;
  announcements: Array<{
    title: string;
    description: string;
  }>;
  resources: Array<{
    label: string;
    href: string;
    description: string;
  }>;
  cta: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
}> = {
  ko: {
    hero: {
      title: "예배 & 행사",
      subtitle: "모임 일정",
      description:
        "주일예배와 주중 모임, 특별 행사를 한눈에 확인하세요. 모든 일정은 계절별로 업데이트됩니다.",
    },
    weeklyRhythms: [
      {
        title: "주일 예배",
        time: "주일 오전 9:30 / 11:30",
        description: "한어 1부와 연합 2부 예배로 함께 예배합니다.",
      },
      {
        title: "수요 기도모임",
        time: "수요일 오후 7:00",
        description: "찬양과 말씀, 기도로 한 주를 재정비합니다.",
      },
      {
        title: "새벽 말씀묵상",
        time: "화-금 오전 6:30 (온라인)",
        description: "Zoom으로 연결되어 하루를 말씀으로 시작합니다.",
      },
    ],
    announcements: [
      {
        title: "새가족 클래스 10월 과정",
        description: "10월 첫째 주부터 4주 과정으로 진행됩니다. 환영팀에 문의해주세요.",
      },
      {
        title: "겨울 단기선교 팀 모집",
        description: "11월 초 오리엔테이션이 있으며, 관심 있으신 분은 Missions@tllcmn.org 로 연락주세요.",
      },
    ],
    resources: [
      {
        label: "주보 PDF",
        href: "/files/jubo - Aug 03-1.pdf",
        description: "예배 순서와 공동체 소식을 다운로드하세요.",
      },
      {
        label: "연간 캘린더",
        href: "/files/calendar.pdf",
        description: "연중 주요 사역과 행사 일정을 확인할 수 있습니다.",
      },
    ],
    cta: {
      title: "행사 제안 및 문의",
      body: "교회 일정에 추가하고 싶은 모임이나 사역 아이디어가 있으신가요? 팀과 함께 논의하고 싶습니다.",
      ctaLabel: "행사 제안 폼",
      ctaHref: "/ko/connect",
    },
  },
  en: {
    hero: {
      title: "Worship & Events",
      subtitle: "Weekly Schedule",
      description:
        "Stay updated with weekly rhythms, seasonal gatherings, and resources to help you participate.",
    },
    weeklyRhythms: [
      {
        title: "Sunday Worship",
        time: "Sundays 9:30 AM / 11:30 AM",
        description: "Korean service followed by a bilingual family gathering.",
      },
      {
        title: "Midweek Prayer",
        time: "Wednesdays 7:00 PM",
        description: "Worship and intercession for our church and city.",
      },
      {
        title: "Morning Devotions",
        time: "Tue–Fri 6:30 AM (Online)",
        description: "Start your day with Scripture and prayer on Zoom.",
      },
    ],
    announcements: [
      {
        title: "October Welcome Pathway",
        description: "Four-week newcomers track launches the first Sunday of October. RSVP with the hospitality team.",
      },
      {
        title: "Winter Missions Team",
        description: "Orientation begins early November. Email Missions@tllcmn.org to learn more.",
      },
    ],
    resources: [
      {
        label: "Weekly Bulletin",
        href: "/files/jubo - Aug 03-1.pdf",
        description: "Download the worship liturgy and announcements.",
      },
      {
        label: "Annual Calendar",
        href: "/files/calendar.pdf",
        description: "See major ministry dates across the year.",
      },
    ],
    cta: {
      title: "Share an Event Idea",
      body: "Planning a gathering or outreach initiative? Let our team know how we can partner with you.",
      ctaLabel: "Submit Event Request",
      ctaHref: "/en/connect",
    },
  },
};

type EventsPageProps = {
  params: {
    lang: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const content = eventsContent[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <section className="rounded-3xl bg-white px-6 py-12 shadow-sm sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {content.hero.subtitle}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
          {content.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">{content.hero.description}</p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {content.weeklyRhythms.map((rhythm) => (
          <div key={rhythm.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{rhythm.title}</h2>
            <p className="mt-2 text-sm font-medium text-slate-500">{rhythm.time}</p>
            <p className="mt-3 text-sm text-slate-600">{rhythm.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {content.announcements.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">{lang === "ko" ? "자료실" : "Resources"}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {content.resources.map((resource) => (
            <Link
              key={resource.label}
              href={resource.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white"
            >
              <p className="text-sm font-semibold text-slate-900">{resource.label}</p>
              <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <h2 className="text-3xl font-semibold text-white">{content.cta.title}</h2>
          <p className="text-sm leading-6 text-slate-100 sm:text-base">{content.cta.body}</p>
          <div className="flex justify-center">
            <Link
              href={content.cta.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              {content.cta.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
