import Link from "next/link";
import { site } from "@/content/site";
import { ProjectArt } from "@/components/project-art";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-4 pb-8 sm:px-6 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9a9086] uppercase">Featured work</p>
            <h2 className="mt-3 inline-flex items-end gap-3 font-display text-4xl text-[#1c1916] sm:text-5xl">
              Selected Projects
              <svg viewBox="0 0 54 18" className="mb-2 hidden h-4 w-12 text-[#c4784a] sm:block" aria-hidden="true" fill="none">
                <path d="M2 12c8-6 14-6 20-2 6 4 10 5 16 2 6-3 10-4 14-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M2 6c10 2 16 2 24-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </h2>
          </div>
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-[#1c1916]">
            View All Projects
            <Arrow />
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block h-full rounded-[1.5rem] bg-white p-3 shadow-[0_18px_40px_rgba(80,55,30,0.05)]">
                <div className="aspect-[16/11] overflow-hidden rounded-[1.15rem]">
                  <div className="art-zoom h-full">
                    <ProjectArt kind={project.art} />
                  </div>
                </div>
                <div className="px-2 pt-4 pb-2">
                  <h3 className="font-medium text-[#1c1916]">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#8a8176]">{project.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
