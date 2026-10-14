"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;

    const update = () => {
      const marker = window.scrollY + Math.round(window.innerHeight * 0.32);
      let current = "home";
      for (const item of site.nav) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= marker) current = item.id;
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const current = pathname === "/" ? active || "home" : "";

  function onNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    if (!href.startsWith("/#") || pathname !== "/") return;
    const target = document.getElementById(href.slice(2));
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <header className="no-print sticky top-0 z-50 bg-[#f6f1e8]/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <Link href="/" className="font-display text-[1.85rem] leading-none tracking-tight text-[#1c1916]">
          {site.logo}
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const selected = current === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={selected ? "true" : undefined}
                onClick={(event) => onNavClick(event, item.href)}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  selected ? "bg-[#efe4d4] text-[#1c1916]" : "text-[#5c564e] hover:text-[#1c1916]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            onClick={(event) => onNavClick(event, "/#contact")}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-[#1c1916] px-4 text-sm font-medium text-white sm:inline-flex"
          >
            <ChatIcon />
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#e4d8c8] bg-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span className={`block h-0.5 bg-[#1c1916] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 bg-[#1c1916] transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[#1c1916] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id={menuId} aria-label="Mobile" className="border-t border-[#eadfce] bg-[#f6f1e8] px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(event) => onNavClick(event, item.href)}
                  className="block rounded-xl px-3 py-3 text-lg text-[#1c1916]"
                  aria-current={current === item.id ? "true" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={(event) => onNavClick(event, "/#contact")}
            className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1c1916] text-white sm:hidden"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M3 4.5h10v7H8l-2.5 2v-2H3v-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
