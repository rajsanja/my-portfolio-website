import { site, type Service } from "@/content/site";

const icons = {
  pen: PenIcon,
  monitor: MonitorIcon,
  palette: PaletteIcon,
  megaphone: MegaphoneIcon,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9a9086] uppercase">What I do</p>
          <h2 className="relative mt-3 inline-block font-display text-4xl text-[#1c1916] sm:text-5xl">
            <Sparkle className="absolute -top-3 -left-8 hidden text-[#c4784a] sm:block" />
            Skills <span className="font-script text-[#c4784a]">&</span> Services
            <Sparkle className="absolute -right-8 -bottom-1 hidden text-[#c4784a] sm:block" />
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {site.services.map((service) => (
            <li key={service.title}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="h-full rounded-[1.6rem] px-5 pt-5 pb-7" style={{ background: service.tone }}>
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#1c1916] shadow-[0_8px_18px_rgba(80,55,30,0.05)]">
        <Icon />
      </span>
      <h3 className="mt-10 font-display text-[1.7rem] leading-tight text-[#1c1916]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5e584f]">{service.description}</p>
    </article>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className ?? ""}`} aria-hidden="true" fill="currentColor">
      <path d="M12 2.5 13.4 8 19 9.2 13.4 10.6 12 16.2 10.6 10.6 5 9.2 10.6 8 12 2.5Z" />
      <path d="m18 14 .6 2.2 2.2.6-2.2.6L18 19.6l-.6-2.2-2.2-.6 2.2-.6L18 14Z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M14 5.5 18.5 10 9 19.5 4.5 20 5 15.5 14 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 19.5h8M12 16.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 4.5a7.5 7.5 0 1 0 0 15h1.2a1.8 1.8 0 0 0 0-3.6h-.8a1.4 1.4 0 0 1 0-2.8H14a2.6 2.6 0 0 0 2.6-2.6A6 6 0 0 0 12 4.5Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="10" r="0.8" fill="currentColor" />
      <circle cx="10" cy="7.6" r="0.8" fill="currentColor" />
      <circle cx="13.2" cy="7.4" r="0.8" fill="currentColor" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M5 10.5v3l9 3.5V7L5 10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 9.2c1.6.6 2.5 1.6 2.5 2.8s-.9 2.2-2.5 2.8M7.2 13.6l.8 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
