import { cn } from "@/lib/utils";

export const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-slate-800/50 border border-slate-700/50 p-6 shadow-md transition-all duration-300 hover:border-slate-500",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 transform transition-all duration-300 group-hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-slate-100">{name}</h3>
      <p className="max-w-lg text-slate-400 text-sm">{description}</p>
    </div>

    {href && cta && (
      <div className="pointer-events-none z-10 flex items-center gap-1 text-sm font-semibold text-sky-400">
        <a href={href} className="pointer-events-auto hover:underline">
          {cta} &rarr;
        </a>
      </div>
    )}
  </div>
);