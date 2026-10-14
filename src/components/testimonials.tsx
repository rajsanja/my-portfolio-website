import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9a9086] uppercase">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl text-[#1c1916] sm:text-5xl">What Clients Say</h2>
        </div>
        <ul className="relative mt-12 grid gap-4 lg:grid-cols-3">
          <svg viewBox="0 0 70 48" className="pointer-events-none absolute -top-2 -left-2 hidden h-12 w-16 text-[#c4784a] lg:block" aria-hidden="true" fill="none">
            <path d="M8 10c16 2 24 12 28 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M30 28c4 4 6 6 10 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {site.testimonials.map((item, index) => (
            <li key={item.name} className="rounded-[1.5rem] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(80,55,30,0.05)]">
              <p className="font-script text-5xl leading-none text-[#d7c3ae]" aria-hidden="true">
                “
              </p>
              <p className="mt-1 text-[15px] leading-7 text-[#3f3a34]">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Face index={index} tone={item.tone} />
                <div className="min-w-0">
                  <p className="font-medium text-[#1c1916]">{item.name}</p>
                  <p className="text-sm text-[#8a8176]">{item.role}</p>
                </div>
                <p className="ml-auto text-sm tracking-tight text-[#e2b15a]" aria-label="5 stars">
                  ★★★★★
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Face({ index, tone }: { index: number; tone: string }) {
  if (index === 1) {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill={tone} />
        <path d="M14 58c2-12 8-18 18-18s16 6 18 18" fill="#f4e4d4" />
        <circle cx="32" cy="30" r="12" fill="#f0c7a4" />
        <path d="M16 34c1-16 8-24 16-24s15 8 16 22c-4-6-8-8-16-8s-12 3-16 10Z" fill="#4a3028" />
        <path d="M20 46c6 8 18 8 24 0" fill="#3a2420" />
        <circle cx="27.5" cy="31" r="1.1" fill="#1c1916" />
        <circle cx="36.5" cy="31" r="1.1" fill="#1c1916" />
        <path d="M29 35.5c1.2 1 2.2 1.4 3 1.4s1.8-.4 3-1.4" fill="none" stroke="#a86b52" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }
  const shirt = index === 0 ? "#243044" : "#1c1916";
  const hair = index === 0 ? "#2a211c" : "#3a2c24";
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill={tone} />
      <path d="M16 60c1-14 7-20 16-20s15 6 16 20" fill={shirt} />
      <circle cx="32" cy="30" r="12" fill="#e8c2a2" />
      <path d="M18 28c1-12 7-18 14-18s13 6 14 16c-2-4-6-6-14-6s-12 2-14 8Z" fill={hair} />
      {index === 2 ? <path d="M24 38c2 3 5 4 8 4s6-1 8-4" fill="#c9956e" /> : <path d="M26 37c2 2 4 3 6 3s4-1 6-3" fill="none" stroke="#a86b52" strokeWidth="1" strokeLinecap="round" />}
      <circle cx="27.5" cy="30" r="1.1" fill="#1c1916" />
      <circle cx="36.5" cy="30" r="1.1" fill="#1c1916" />
    </svg>
  );
}
