const links = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Behance", icon: BehanceIcon },
];

export function SocialLinks({ className = "", plain = false }: { className?: string; plain?: boolean }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {links.map((item) => (
        <li key={item.label}>
          <a
            href="#contact"
            aria-label={item.label}
            className={
              plain
                ? "grid h-9 w-9 place-items-center text-[#1c1916]"
                : "grid h-9 w-9 place-items-center rounded-full border border-[#e6d9c8] bg-white text-[#1c1916] transition hover:border-[#1c1916]"
            }
          >
            <item.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M6.5 9H4V20h2.5V9ZM5.2 4A1.5 1.5 0 1 0 5.2 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.8-.7-2.4-1.7-2.4s-1.9.8-1.9 2.5V20H11.4V9H14v1.2c.5-.8 1.6-1.5 3.1-1.5 2.2 0 3.9 1.4 3.9 4.4V20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.7" cy="7.3" r="0.8" fill="currentColor" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M8.7 11.2c.8-.3 1.3-1 1.3-1.8 0-1.4-1.1-2.2-2.9-2.2H4v9.6h3.4c1.9 0 3.1-.9 3.1-2.5 0-1.1-.6-1.9-1.8-2.1Zm-2.9-2.5h1.3c.7 0 1.1.3 1.1.8s-.4.8-1.1.8H5.8V8.7Zm1.5 5.1H5.8v-1.8h1.5c.8 0 1.2.4 1.2.9s-.4.9-1.2.9ZM14.2 7.4h4.2v1.3h-4.2V7.4Zm2.2 2.2c-2.2 0-3.6 1.5-3.6 3.6 0 2.2 1.4 3.7 3.7 3.7 1.5 0 2.6-.6 3.2-1.7h-1.7c-.3.4-.8.7-1.5.7-1 0-1.7-.6-1.9-1.5h5.2v-.5c0-2.1-1.2-3.3-3.4-3.3Zm-1.8 2.7c.2-.8.8-1.3 1.7-1.3.9 0 1.5.5 1.7 1.3h-3.4Z" />
    </svg>
  );
}
