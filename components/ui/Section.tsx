interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-24 md:py-32 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
