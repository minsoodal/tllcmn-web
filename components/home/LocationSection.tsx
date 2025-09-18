import Link from "next/link";

import type { HomeContent } from "@/lib/content/home";

type LocationSectionProps = {
  location: HomeContent["location"];
};

export default function LocationSection({ location }: LocationSectionProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            {location.title}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">{location.description}</h2>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            {location.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Link
            href={location.mapHref}
            target="_blank"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {location.mapLabel}
          </Link>
        </div>
        <div className="flex items-center justify-center bg-slate-900/5 p-10">
          <iframe
            title="TLLC Minnesota Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.2703660882107!2d-93.13303022374795!3d45.06002627107017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b329b78a4adf1b%3A0xe6ee4c003958f4d2!2s3920%20Victoria%20St%20N%2C%20Shoreview%2C%20MN%2055126!5e0!3m2!1sen!2sus!4v1758157511424!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0, borderRadius: "1.5rem", width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
