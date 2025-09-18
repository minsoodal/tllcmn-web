type EmbeddedFormProps = {
  src: string;
  title: string;
  height?: number;
  className?: string;
};

export default function EmbeddedForm({ src, title, height = 820, className }: EmbeddedFormProps) {
  const containerClassName = [
    "overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      <iframe
        src={src}
        title={title}
        height={height}
        className="w-full rounded-2xl border-0"
        allowFullScreen
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
}
