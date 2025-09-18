import type { Lang } from "@/lib/i18n/config";

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    links: Array<{
      label: string;
      href: string;
    }>;
    cta: {
      label: string;
      href: string;
    };
    languageToggleLabel: string;
  };
  footer: {
    tagline: string;
    addressHeading: string;
    addressLines: string[];
    mapLabel: string;
    mapHref: string;
    contactHeading: string;
    contactItems: Array<{
      label: string;
      value: string;
      href?: string;
    }>;
    socialHeading: string;
    socialLinks: Array<{
      label: string;
      href: string;
    }>;
    copyright: string;
  };
};

export const siteCopy: Record<Lang, SiteCopy> = {
  ko: {
    meta: {
      title: "미네소타 주님의 참빛교회",
      description:
        "하나님의 사랑으로 미네소타 지역을 섬기는 TLLC 미네소타 교회의 예배, 사역, 공동체 소식을 만나보세요.",
      keywords: ["TLLC", "미네소타", "한인교회", "예배", "사역"],
      ogTitle: "TLLC 미네소타 교회",
      ogDescription:
        "주님의 사랑으로 환영합니다. 예배와 사역, 공동체 소식을 통해 하나님의 은혜를 나눕니다.",
    },
    nav: {
      links: [
        { label: "교회 소개", href: "/ko/about" },
        { label: "사역 소개", href: "/ko/ministries" },
        { label: "예배 & 행사", href: "/ko/events" },
        { label: "새가족 & 연결", href: "/ko/connect" },
      ],
      cta: {
        label: "주일예배 안내",
        href: "/ko/events",
      },
      languageToggleLabel: "English",
    },
    footer: {
      tagline: "믿음과 사랑으로 지역과 다음 세대를 섬기는 공동체",
      addressHeading: "예배 장소",
      addressLines: ["3920 Victoria St N", "Shoreview, MN 55126"],
      mapLabel: "지도에서 길 찾기",
      mapHref: "https://maps.google.com?q=3920+Victoria+St+N+Shoreview+MN+55126",
      contactHeading: "문의",
      contactItems: [
        { label: "전화", value: "(612) 555-1234", href: "tel:16125551234" },
        { label: "이메일", value: "hellotllcmn@gmail.com", href: "mailto:hellotllcmn@gmail.com" },
      ],
      socialHeading: "온라인으로 연결",
      socialLinks: [
        { label: "YouTube", href: "https://www.youtube.com/@tllcmn" },
        // { label: "Facebook", href: "https://facebook.com" },
        // { label: "KakaoTalk 채널", href: "https://open.kakao.com" },
      ],
      copyright: "© " + new Date().getFullYear() + " TLLC 미네소타 교회. All rights reserved.",
    },
  },
  en: {
    meta: {
      title: "True Light of the Lord Church MN",
      description:
        "Discover worship services, ministries, and community life at TLLC Minnesota Church serving the Korean-American community.",
      keywords: ["TLLC", "Minnesota", "Korean church", "worship", "ministries"],
      ogTitle: "True Light of the Lord Church MN",
      ogDescription:
        "A welcoming gospel-centered community with vibrant worship, ministries, and next generation focus.",
    },
    nav: {
      links: [
        { label: "About", href: "/en/about" },
        { label: "Ministries", href: "/en/ministries" },
        { label: "Worship & Events", href: "/en/events" },
        { label: "Plan Your Visit", href: "/en/connect" },
      ],
      cta: {
        label: "Sunday Schedule",
        href: "/en/events",
      },
      languageToggleLabel: "한국어",
    },
    footer: {
      tagline: "A gospel family serving Minnesota with hope and hospitality",
      addressHeading: "Gathering Location",
      addressLines: ["3920 Victoria St N", "Shoreview, MN 55126"],
      mapLabel: "Get Directions",
      mapHref: "https://maps.google.com?q=3920+Victoria+St+N+Shoreview+MN+55126",
      contactHeading: "Contact",
      contactItems: [
        { label: "전화", value: "(612) 555-1234", href: "tel:16125551234" },
        { label: "이메일", value: "hellotllcmn@gmail.com", href: "mailto:hellotllcmn@gmail.com" },
      ],
      socialHeading: "Connect Online",
      socialLinks: [
        { label: "YouTube", href: "https://www.youtube.com/@tllcmn" },
        // { label: "Facebook", href: "https://facebook.com" },
        // { label: "KakaoTalk 채널", href: "https://open.kakao.com" },
      ],
      copyright:
        "© " + new Date().getFullYear() + " TLLC Minnesota Church. All rights reserved.",
    },
  },
};
