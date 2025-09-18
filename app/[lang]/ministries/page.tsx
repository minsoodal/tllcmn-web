import Link from "next/link";
import { notFound } from "next/navigation";

import type { Lang } from "@/lib/i18n/config";
import { isLang } from "@/lib/i18n/config";

const ministriesContent: Record<Lang, {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  areas: Array<{
    name: string;
    summary: string;
    highlights: string[];
  }>;
  teams: Array<{
    name: string;
    description: string;
  }>;
  nextSteps: Array<{
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  }>;
}> = {
  ko: {
    hero: {
      title: "사역 소개",
      subtitle: "함께 세워가는 공동체",
      description:
        "TLLC 미네소타 교회는 모든 세대가 복음 안에서 성장하고 세상을 섬기도록 예배, 교육, 선교 사역을 통해 동행합니다.",
    },
    areas: [
      {
        name: "예배 & 찬양",
        summary: "하나님께 중심을 두는 주일예배와 기도모임을 통해 공동체를 세웁니다.",
        highlights: [
          "주일 1,2부 예배 섬김 팀",
          "찬양팀, 미디어 & 음향",
          "중보기도 네트워크",
        ],
      },
      {
        name: "다음세대",
        summary: "영유아부터 청년까지 복음의 정체성을 세워가고, 영어권 EM과 협력합니다.",
        highlights: [
          "영유아/어린이 주일학교",
          "Youth & College 모임",
          "EM 주중 소그룹",
        ],
      },
      {
        name: "선교 & 지역 섬김",
        summary: "지역 사회를 섬기고 열방을 향해 나아가는 선교적 삶을 실천합니다.",
        highlights: [
          "TLLC Cares 봉사",
          "단기선교 & 후원",
          "지역 파트너십",
        ],
      },
    ],
    teams: [
      {
        name: "환영팀",
        description: "새가족 맞이와 안내, 주일 환대 사역을 담당합니다.",
      },
      {
        name: "미디어팀",
        description: "예배 중계, 촬영, 온라인 콘텐츠 제작을 섬깁니다.",
      },
      {
        name: "교육팀",
        description: "아이들과 학생들의 주일학교, 제자훈련 커리큘럼을 준비합니다.",
      },
      {
        name: "선교팀",
        description: "국내외 단기선교, 후원, 기도 모임을 이끕니다.",
      },
    ],
    nextSteps: [
      {
        title: "사역 신청하기",
        description: "관심 있는 사역팀을 알려주시면 담당자가 연락드립니다.",
        ctaLabel: "사역 지원 폼",
        ctaHref: "/ko/connect",
      },
      {
        title: "리더십 트레이닝",
        description: "사역 리더를 위한 연 2회 리더십 Lab에 참여하세요.",
        ctaLabel: "교육 일정 보기",
        ctaHref: "/ko/events",
      },
    ],
  },
  en: {
    hero: {
      title: "Ministries",
      subtitle: "Growing Together",
      description:
        "Every generation is equipped to follow Jesus through worship, discipleship, and mission partnerships across the Twin Cities and beyond.",
    },
    areas: [
      {
        name: "Worship & Prayer",
        summary: "Anchor our church family in Christ through Sunday gatherings and prayer rhythms.",
        highlights: [
          "Sunday service hospitality and production",
          "Worship band & media team",
          "Intercessory prayer network",
        ],
      },
      {
        name: "Next Generation",
        summary: "Discipling kids, students, and young adults with gospel fluency and cultural wisdom.",
        highlights: [
          "Early Childhood & Kids ministry",
          "Youth and College small groups",
          "English Ministry midweek gatherings",
        ],
      },
      {
        name: "Missions & Outreach",
        summary: "Serve our neighbors and the nations through mercy, justice, and church partnerships.",
        highlights: [
          "TLLC Cares monthly service projects",
          "Short-term mission teams",
          "Local nonprofit collaborations",
        ],
      },
    ],
    teams: [
      {
        name: "Hospitality Team",
        description: "Welcome newcomers, prepare refreshments, and create a warm Sunday experience.",
      },
      {
        name: "Media Team",
        description: "Run livestream, photography, and creative storytelling across platforms.",
      },
      {
        name: "Discipleship Team",
        description: "Develop curriculum and lead cohorts for all ages.",
      },
      {
        name: "Missions Team",
        description: "Coordinate short-term trips, partnerships, and global prayer.",
      },
    ],
    nextSteps: [
      {
        title: "Join a Team",
        description: "Share your interest and a ministry leader will follow up with next steps.",
        ctaLabel: "Serve Interest Form",
        ctaHref: "/en/connect",
      },
      {
        title: "Leadership Lab",
        description: "Twice-a-year training for current and emerging ministry leaders.",
        ctaLabel: "View Training Dates",
        ctaHref: "/en/events",
      },
    ],
  },
};

type MinistriesPageProps = {
  params: {
    lang: string;
  };
};

export default function MinistriesPage({ params }: MinistriesPageProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const content = ministriesContent[lang];

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
        {content.areas.map((area) => (
          <div key={area.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{area.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{area.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {area.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">{lang === "ko" ? "사역팀" : "Serve Teams"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {content.teams.map((team) => (
            <div key={team.name} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{team.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{team.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {content.nextSteps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            <Link
              href={step.ctaHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {step.ctaLabel}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
