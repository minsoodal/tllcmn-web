import Link from "next/link";
import { notFound } from "next/navigation";

import EmbeddedForm from "@/components/forms/EmbeddedForm";
import type { Lang } from "@/lib/i18n/config";
import { isLang } from "@/lib/i18n/config";

const connectContent: Record<Lang, {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  visitSteps: Array<{
    title: string;
    description: string;
  }>;
  contactCards: Array<{
    title: string;
    details: string;
    href?: string;
  }>;
  forms: Array<{
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  }>;
  community: Array<{
    name: string;
    description: string;
  }>;
}> = {
  ko: {
    hero: {
      title: "새가족 & 연결",
      subtitle: "함께 걸음을 내딛어요",
      description:
        "TLLC 미네소타 교회에 처음 오셨나요? 환영합니다! 아래 안내를 통해 예배를 계획하고 공동체 모임에 참여해 보세요.",
    },
    visitSteps: [
      {
        title: "주일 방문 신청",
        description: "아래 양식을 작성해 주시면 환영팀이 자리 안내와 환영 선물을 준비합니다.",
      },
      {
        title: "예배 후 환영 만남",
        description: "주일 2부 예배 후 새가족 라운지에서 담임목사와 리더들을 만나보세요.",
      },
      {
        title: "새가족 클래스",
        description: "4주 과정으로 교회 소개, 신앙 기초, 사역 연결을 돕습니다.",
      },
    ],
    contactCards: [
      {
        title: "전화",
        details: "(612) 555-1234",
        href: "tel:16125551234",
      },
      {
        title: "이메일",
        details: "hellotllcmn@gmail.com",
        href: "mailto:hellotllcmn@gmail.com",
      }
    ],
    forms: [
      {
        title: "새가족 등록",
        description: "간단한 정보를 남겨주시면 환영팀이 연락드립니다.",
        ctaLabel: "등록 폼 작성",
        ctaHref: "#newcomer-form",
      },
      {
        title: "기도 제목 나눔",
        description: "함께 기도하기 원하는 내용을 알려주세요.",
        ctaLabel: "기도 요청",
        ctaHref: "/forms/prayer",
      },
    ],
    community: [
      {
        name: "소그룹 Lifegroups",
        description: "연령과 지역별 소그룹이 월 2회 모임을 갖습니다.",
      },
      {
        name: "NextGen EM",
        description: "영어권 청년 성도들이 주중에 교제하고 말씀을 나눕니다.",
      },
      {
        name: "부부 & 가정",
        description: "가정을 위한 세미나와 멘토링이 마련되어 있습니다.",
      },
    ],
  },
  en: {
    hero: {
      title: "Plan Your Visit",
      subtitle: "Get Connected",
      description:
        "We can’t wait to meet you. Follow these steps to plan your Sunday, connect with a pastor, and find a community group.",
    },
    visitSteps: [
      {
        title: "Let Us Know You’re Coming",
        description: "Complete the form so we can reserve seating and prepare a welcome gift.",
      },
      {
        title: "Meet the Team",
        description: "After the 11:30 AM service, join us in the Welcome Lounge for coffee and conversation.",
      },
      {
        title: "Newcomers Track",
        description: "A four-week pathway introduces our story, beliefs, and ministry opportunities.",
      },
    ],
    contactCards: [
      {
        title: "Phone",
        details: "(612) 555-1234",
        href: "tel:16125551234",
      },
      {
        title: "Email",
        details: "connect@tllcmn.org",
        href: "mailto:connect@tllcmn.org",
      },
      {
        title: "KakaoTalk",
        details: "@tllcmn",
        href: "https://open.kakao.com",
      },
    ],
    forms: [
      {
        title: "Newcomer Form",
        description: "Share your info and our welcome team will follow up within two days.",
        ctaLabel: "Start Form",
        ctaHref: "#newcomer-form",
      },
      {
        title: "Prayer Request",
        description: "Our pastors and intercessors would love to pray with you.",
        ctaLabel: "Share a Request",
        ctaHref: "/forms/prayer",
      },
    ],
    community: [
      {
        name: "Lifegroups",
        description: "Regional and life-stage groups meeting twice a month.",
      },
      {
        name: "NextGen EM",
        description: "English Ministry gatherings with teaching, meals, and mentorship.",
      },
      {
        name: "Marriage & Family",
        description: "Seasonal workshops, mentoring, and retreats to strengthen homes.",
      },
    ],
  },
};

type ConnectPageProps = {
  params: {
    lang: string;
  };
};

export default function ConnectPage({ params }: ConnectPageProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const content = connectContent[lang];

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
        {content.visitSteps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">{lang === "ko" ? "연락처" : "Contact"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {content.contactCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              {card.href ? (
                <Link href={card.href} className="mt-3 block text-sm font-semibold text-slate-700 hover:underline">
                  {card.details}
                </Link>
              ) : (
                <p className="mt-3 text-sm text-slate-600">{card.details}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {content.forms.map((form) => (
          <div key={form.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{form.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{form.description}</p>
            <Link
              href={form.ctaHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {form.ctaLabel}
            </Link>
          </div>
        ))}
      </section>

      <section id="newcomer-form" className="mt-12">
        <EmbeddedForm
          src="https://docs.google.com/forms/d/e/1FAIpQLSeT0cN4KIT2ZOw-Jtq4zzRX5MUf_JxyQaN2Mjxs6VoSQGbXyg/viewform?embedded=true"
          title={lang === "ko" ? "새가족 등록 폼" : "Newcomer Form"}
          height={818}
        />
      </section>

      <section className="mt-12 rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <h2 className="text-3xl font-semibold text-white">{lang === "ko" ? "공동체 모임" : "Community Groups"}</h2>
          <p className="text-sm leading-6 text-slate-100 sm:text-base">
            {lang === "ko"
              ? "신앙의 여정을 함께 걸을 소그룹과 멘토링 커뮤니티를 찾아보세요."
              : "Discover a small group or mentoring community to walk with you in faith."}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {content.community.map((group) => (
              <div key={group.name} className="rounded-2xl bg-white/10 p-5 text-left">
                <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                <p className="mt-2 text-sm text-slate-100">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
