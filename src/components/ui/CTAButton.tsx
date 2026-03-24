import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold font-inter rounded-full transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--cta-orange)] hover:bg-[var(--cta-orange-dark)] text-white shadow-sm hover:shadow-md",
    secondary:
      "bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white shadow-sm hover:shadow-md",
    outline:
      "border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white",
  };

  const sizes = {
    sm: "text-sm px-5 py-2.5",
    md: "text-base px-7 py-3.5",
    lg: "text-lg px-9 py-4",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
