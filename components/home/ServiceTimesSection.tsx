import type { HomeContent } from "@/lib/content/home";

type ServiceTimesSectionProps = {
  serviceTimes: HomeContent["serviceTimes"];
};

export default function ServiceTimesSection({ serviceTimes }: ServiceTimesSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-slate-900 text-strong">{serviceTimes.title}</h2>
          <p className="mt-3 text-sm text-strong">{serviceTimes.description}</p>
        </div>
        <ul className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTimes.items.map((item) => (
            <li key={item.name} className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-soft">{item.time}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 text-muted">{item.name}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
