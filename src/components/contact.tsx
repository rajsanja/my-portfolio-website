export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 pt-4 pb-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#e7f0e4] px-5 py-10 sm:px-12 sm:py-14">
        <Plants />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_9rem] lg:pl-36">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6d7a68] uppercase">Let&apos;s work together</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-[#1c1916] sm:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-[#4e584c]">
              Let&apos;s create something amazing together. I&apos;m always open to discussing new ideas, opportunities and creative projects.
            </p>
          </div>
          <a
            href="https://github.com/rajsanja"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#1c1916] px-6 text-sm font-medium text-white"
          >
            Get in Touch
            <Arrow />
          </a>
          <p className="max-w-[9rem] font-script text-[1.7rem] leading-none text-[#6d7a68] lg:text-right">
            Great Ideas Start with a Conversation
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

function Plants() {
  return (
    <svg viewBox="0 0 180 120" className="pointer-events-none absolute bottom-0 left-2 hidden h-28 w-40 sm:block" aria-hidden="true">
      <ellipse cx="78" cy="112" rx="18" ry="6" fill="#e7d3b4" />
      <path d="M62 112c0-10 6-16 16-16s16 6 16 16" fill="#f4efe6" />
      <path d="M78 96c-2-18 6-34 2-48 10 10 14 28 10 48" fill="#7ea37a" />
      <path d="M78 98c2-16 12-28 18-36-2 16-6 28-10 36" fill="#5f8f62" />
      <path d="M76 98c-8-14-6-30-2-42-8 12-12 26-8 42" fill="#8fb48a" />
      <ellipse cx="128" cy="114" rx="14" ry="5" fill="#eadcc4" />
      <path d="M116 114c0-8 5-12 12-12s12 4 12 12" fill="#f7f1e6" />
      <path d="M128 102c-6-16 2-28 0-40 8 8 12 20 8 40" fill="#b7d3b4" />
      <ellipse cx="36" cy="116" rx="12" ry="4" fill="#e7c8a4" />
      <path d="M26 116c0-7 4-11 10-11s10 4 10 11" fill="#c4784a" />
      <path d="M36 106c-4-12 2-22 0-32 6 8 8 16 6 32" fill="#6f9a6c" />
    </svg>
  );
}
