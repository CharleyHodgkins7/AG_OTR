interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest font-inter mb-3 ${
            light ? "text-[var(--sand)]" : "text-[var(--teal)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-[var(--charcoal)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed font-inter ${
            light ? "text-white/75" : "text-[var(--text-muted)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
