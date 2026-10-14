import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

const statIcons = [LayersIcon, SmileIcon, ClockIcon];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-6 sm:px-6">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] bg-white px-5 py-8 shadow-[0_24px_60px_rgba(80,55,30,0.05)] sm:px-8 lg:grid-cols-[240px_1.15fr_240px] lg:gap-10 lg:px-10 lg:py-10">
        <div className="relative mx-auto w-full max-w-[230px]">
          <div className="blob-mask relative aspect-[4/5] overflow-hidden bg-[#d7e6d4]">
            <Image
              src="/avatar-portrait.png"
              alt=""
              fill
              sizes="230px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9a9086] uppercase">{site.about.eyebrow}</p>
          <h2 className="mt-3 max-w-md font-display text-[2.4rem] leading-[1.05] text-[#1c1916] sm:text-5xl">
            {site.about.title}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#5e584f]">{site.about.body}</p>
          <Link
            href="/resume"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1c1916] px-5 text-sm font-medium text-white"
          >
            <DownloadIcon />
            Download Resume
          </Link>
        </div>
        <ul className="grid gap-6">
          {site.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? LayersIcon;
            return (
              <li key={stat.label} className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f6f1e8] text-[#1c1916]">
                  <Icon />
                </span>
                <div>
                  <p className="font-display text-[1.8rem] leading-none">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#6f675e]">{stat.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="pointer-events-none absolute top-[42%] right-[15.5rem] hidden max-w-[6.5rem] -rotate-12 font-script text-[1.65rem] leading-none text-[#c4784a] xl:block">
          Design A Better You
        </p>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M8 2.5v7M5.2 7.2 8 10l2.8-2.8M3.5 13h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 13.5c.8 1.4 2 2 3.5 2s2.7-.6 3.5-2M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
