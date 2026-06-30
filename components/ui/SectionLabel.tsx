interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4
        ${light ? "text-gold-light" : "text-gold"}
        ${className}`}
    >
      {children}
    </p>
  );
}
