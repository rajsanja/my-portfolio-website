import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden pt-4 pb-6 sm:pt-8">
      <div className="pointer-events-none absolute top-10 -left-24 h-64 w-64 rounded-full bg-[#f8ecdf]/80 blur-2xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-4">
        <div className="hero-in relative z-10 max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#9a9086] uppercase">
            {site.hero.eyebrow}
          </p>
          <h1 className="relative mt-3 font-display text-[3.35rem] leading-[0.9] tracking-tight whitespace-nowrap text-[#1c1916] sm:text-7xl lg:text-[5.15rem]">
            {site.hero.name}
            <svg viewBox="0 0 180 16" className="absolute -bottom-1 left-0 h-3 w-36 text-[#c4784a] sm:w-48" aria-hidden="true" fill="none">
              <path d="M3 10c24-7 42-8 66-2 20 5 36 6 60 0 16-3 32-5 46-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="mt-7 font-display text-[1.7rem] leading-[1.2] text-[#1c1916] sm:text-[2.15rem]">
            A Creative Designer
            <br />
            Who Builds <span className="font-script text-[1.25em] text-[#c4784a]">Digital Experiences</span>
            <br />
            That People Love.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#6f675e]">{site.hero.summary}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1c1916] px-5 text-sm font-medium text-white"
            >
              View My Work
              <Arrow />
            </Link>
            <Link
              href="/#about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#e6d9c8] bg-white px-5 text-sm font-medium text-[#1c1916]"
            >
              <PlayIcon />
              Watch Intro
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <SocialLinks />
            <p className="inline-flex items-center gap-2 text-sm text-[#5c564e]">
              <span className="h-2 w-2 rounded-full bg-[#3caf6e]" aria-hidden="true" />
              {site.availability}
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[540px]">
          <div className="pointer-events-none absolute top-[18%] right-[2%] h-[78%] w-[78%] rounded-[48%_52%_46%_54%/42%_46%_54%_58%] bg-[#d7e6d4]" aria-hidden="true" />
          <div className="pointer-events-none absolute top-2 right-10 h-28 w-28 rounded-full bg-[#f4ebdd]" aria-hidden="true" />
          <Image
            src="/avatar-portrait.png"
            alt="Portrait of Raj Sanja, smiling, with round glasses, a short beard, and a pink shirt"
            width={736}
            height={736}
            loading="eager"
            className="absolute bottom-0 left-[8%] z-10 w-[78%] max-w-[430px] drop-shadow-[0_18px_30px_rgba(80,55,30,0.08)]"
          />
          <p className="pointer-events-none absolute top-1 left-0 z-20 hidden max-w-[8.2rem] -rotate-6 font-script text-[1.65rem] leading-[0.95] text-[#c4784a] sm:block">
            Good Design Brighter Tomorrow
            <svg viewBox="0 0 70 36" className="mt-1 h-8 w-16" aria-hidden="true" fill="none">
              <path d="M4 8c18 2 28 10 34 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M32 22l8 6-8 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
          <div className="absolute top-2 right-0 z-20 w-[148px] rounded-[1.15rem] bg-white px-4 py-3 shadow-[0_16px_40px_rgba(80,55,30,0.08)] sm:w-[164px]">
            <p className="font-display text-[2rem] leading-none text-[#1c1916]">100+</p>
            <p className="mt-1 text-xs leading-4 text-[#6f675e]">Happy Clients Worldwide</p>
          </div>
          <div className="absolute top-[62%] left-0 z-20 w-[146px] rounded-[1.15rem] bg-white px-4 py-3 shadow-[0_16px_40px_rgba(80,55,30,0.08)] sm:left-1">
            <p className="font-display text-[2rem] leading-none">5+</p>
            <p className="mt-1 text-xs leading-4 text-[#6f675e]">Years of Experience</p>
          </div>
          <p className="pointer-events-none absolute top-24 -right-1 z-20 hidden max-w-[5.2rem] rotate-6 text-right font-script text-[1.7rem] leading-none text-[#8a8176] xl:block">
            Ideas Design Repeat
            <span className="mt-1 block text-[#c4784a]">♡</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 5.5v5l4-2.5-4-2.5Z" fill="currentColor" />
    </svg>
  );
}
