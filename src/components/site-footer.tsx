import Link from "next/link";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="no-print px-4 pt-4 pb-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 border-t border-[#eadfce] pt-8 md:grid-cols-[1.1fr_auto_auto] md:items-center">
        <div>
          <p className="font-display text-[2rem] leading-none text-[#1c1916]">{site.logo}</p>
          <p className="mt-2 text-sm text-[#6f675e]">Designing a Better Tomorrow.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5c564e]">
          {site.nav.map((item) => (
            <Link key={item.id} href={item.href} className="hover:text-[#1c1916]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:text-right">
          <SocialLinks plain className="md:justify-end" />
          <p className="mt-3 text-sm text-[#6f675e]">© {site.copyrightYear} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
