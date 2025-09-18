import Link from "next/link";

import type { Lang } from "@/lib/i18n/config";
import { siteCopy } from "@/lib/i18n/siteCopy";

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const copy = siteCopy[lang];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {copy.meta.title}
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-600">{copy.footer.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{copy.footer.addressHeading}</h3>
          <div className="mt-3 space-y-1 text-sm text-slate-600">
            {copy.footer.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Link
            href={copy.footer.mapHref}
            className="mt-4 inline-block text-sm font-semibold text-slate-900 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {copy.footer.mapLabel}
          </Link>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{copy.footer.contactHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {copy.footer.contactItems.map((item) => (
              <li key={item.label}>
                <span className="font-semibold text-slate-900">{item.label}:</span>{" "}
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.value}
                  </Link>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-slate-900">{copy.footer.socialHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {copy.footer.socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <p className="text-center text-xs text-slate-500">{copy.footer.copyright}</p>
      </div>
    </footer>
  );
}
