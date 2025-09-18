import { notFound } from "next/navigation";

import type { Lang } from "@/lib/i18n/config";
import { isLang } from "@/lib/i18n/config";

const aboutContent: Record<Lang, {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  mission: {
    title: string;
    body: string;
  };
  values: Array<{
    title: string;
    body: string;
  }>;
  timeline: Array<{
    year: string;
    description: string;
  }>;
  leaders: Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}> = {
  ko: {
    hero: {
      title: "교회 소개",
      subtitle: "TLLC 미네소타 교회",
      description:
        "하나님의 사랑으로 미네소타 지역을 섬기며 다음 세대를 세워가는 공동체입니다. 한어, 영어, 다음세대가 함께 예배하며 복음을 전하고 삶으로 증거합니다.",
    },
    mission: {
      title: "우리의 사명",
      body: "복음으로 사람을 세우고, 세대를 잇고, 도시와 열방을 섬기는 교회가 됩니다.",
    },
    values: [
      {
        title: "말씀 중심의 예배",
        body: "성경적 설교와 진정성 있는 찬양으로 하나님께 집중하는 예배를 드립니다.",
      },
      {
        title: "다음 세대 동역",
        body: "유아부터 청년까지 말씀으로 양육하며 믿음의 유산을 다음 세대에 전합니다.",
      },
      {
        title: "선교적 삶",
        body: "지역사회와 열방을 향해 사랑과 섬김을 실천하며 복음을 전합니다.",
      },
    ],
    timeline: [
      { year: "2012", description: "미네소타 한인 공동체와 함께 개척예배 드림" },
      { year: "2016", description: "다음세대 예배 공간 확장 및 영어권 사역 시작" },
      { year: "2021", description: "지역사회 섬김 프로젝트 TLLC Cares 런칭" },
    ],
    leaders: [
      {
        name: "김은혜",
        role: "담임목사",
        bio: "복음 중심의 제자훈련과 다음세대 사역에 열정을 품고 섬기고 있습니다.",
      },
      {
        name: "박현우",
        role: "부목사 (교육/EM)",
        bio: "청소년과 영어권 성도들이 복음 안에서 성장하도록 돕습니다.",
      },
    ],
    faq: [
      {
        question: "처음 방문하려면 어떻게 해야 하나요?",
        answer: "주일 예배 10분 전에 새가족 안내 데스크를 방문하시면 안내팀이 친절히 도와드립니다.",
      },
      {
        question: "새가족 등록 과정이 있나요?",
        answer: "4주 과정의 새가족 클래스와 환영 만남이 준비되어 있으며, connect@tllcmn.org 로 문의하시면 안내해 드립니다.",
      },
    ],
  },
  en: {
    hero: {
      title: "About Our Church",
      subtitle: "TLLC Minnesota Church",
      description:
        "We are a gospel-centered Korean church serving the Twin Cities, discipling every generation to worship Jesus and love our neighbors.",
    },
    mission: {
      title: "Our Mission",
      body: "Form disciples, bridge generations, and bless the city and nations through the gospel.",
    },
    values: [
      {
        title: "Worship Rooted in Scripture",
        body: "We gather around Christ through expository preaching and Spirit-led worship.",
      },
      {
        title: "Next Generation Partnership",
        body: "Kids, youth, and college students are equipped to carry a vibrant faith into their world.",
      },
      {
        title: "Missional Living",
        body: "We embody the love of Jesus in our neighborhoods and across the globe.",
      },
    ],
    timeline: [
      { year: "2012", description: "Launched with a small group of families in the Twin Cities." },
      { year: "2016", description: "Expanded facilities and launched dedicated English Ministry services." },
      { year: "2021", description: "Introduced TLLC Cares, a community outreach and mercy initiative." },
    ],
    leaders: [
      {
        name: "Grace Kim",
        role: "Lead Pastor",
        bio: "Passionate about gospel transformation, leadership development, and kingdom hospitality.",
      },
      {
        name: "Daniel Park",
        role: "Associate Pastor (Education/EM)",
        bio: "Equipping youth and English Ministry members to live missional lives rooted in Scripture.",
      },
    ],
    faq: [
      {
        question: "How do I plan my first visit?",
        answer: "Arrive 10 minutes before service and stop by the Welcome Center. Our hospitality team will guide you.",
      },
      {
        question: "Is there a newcomers class?",
        answer: "Yes! A four-week Welcome Pathway runs each quarter. Email connect@tllcmn.org for details.",
      },
    ],
  },
};

type AboutPageProps = {
  params: {
    lang: string;
  };
};

export default function AboutPage({ params }: AboutPageProps) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const content = aboutContent[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <section className="rounded-3xl bg-white px-6 py-12 shadow-sm sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {content.hero.subtitle}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
          {content.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          {content.hero.description}
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-3xl font-semibold text-slate-900">{content.mission.title}</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600">{content.mission.body}</p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {content.values.map((value) => (
          <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{value.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">{lang === "ko" ? "걸어온 길" : "Our Story"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {content.timeline.map((item) => (
            <div key={item.year} className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">{item.year}</p>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">{lang === "ko" ? "섬기는 분들" : "Leadership"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {content.leaders.map((leader) => (
            <div key={leader.name} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{leader.name}</h3>
              <p className="text-sm font-medium text-slate-500">{leader.role}</p>
              <p className="mt-3 text-sm text-slate-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {content.faq.map((item) => (
          <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
