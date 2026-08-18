type SectionHeadingProps = {
    badge: string;
    title: string;
    description: string;
    center?: boolean;
  };
  
  export function SectionHeading({
    badge,
    title,
    description,
    center = false,
  }: SectionHeadingProps) {
    return (
      <div
        className={
          center
            ? "mx-auto max-w-3xl text-center"
            : "max-w-2xl"
        }
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D90429]">
          {badge}
        </p>
  
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          {title}
        </h2>
  
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    );
  }