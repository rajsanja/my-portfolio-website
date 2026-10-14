import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Public resume for ${site.name}. Lists GitHub projects only.`,
};

export default function ResumePage() {
  return (
    <div className="px-4 pt-28 pb-16">
      <div className="no-print mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <Link href="/" className="text-sm text-[#5e584f] hover:text-[#1c1916]">
          ← Back to the site
        </Link>
        <PrintButton />
      </div>
      <article className="resume-sheet mx-auto max-w-3xl rounded-[1.6rem] border border-[#eadfce] bg-[#f7f4ee] p-6 text-[#1c1916] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d5cff]">
          {site.role}
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">{site.name}</h1>
        <p className="mt-4 max-w-2xl leading-7 text-[#4e4840]">{site.about.body}</p>
        <p className="mt-4">
          <a className="font-medium text-[#3340c7]" href={site.github}>
            github.com/{site.handle}
          </a>
        </p>
        <h2 className="mt-10 font-display text-2xl">Selected work</h2>
        <ul className="mt-4 space-y-5">
          {site.projects.map((project) => (
            <li key={project.slug}>
              <p className="font-semibold">{project.title}</p>
              <p className="mt-1 text-sm leading-6 text-[#4e4840]">{project.summary}</p>
              <p className="mt-1 text-sm text-[#6a6258]">{project.stack.join(" · ")}</p>
              {project.repoUrl ? (
                <a className="text-sm text-[#3340c7]" href={project.repoUrl}>
                  {project.repoUrl.replace("https://", "")}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
        <h2 className="mt-10 font-display text-2xl">Technologies</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {["TypeScript", "React", "Tailwind CSS", "Next.js", "Vite", "HTML", "CSS"].map((skill) => (
            <li key={skill} className="rounded-full bg-white px-3 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm leading-6 text-[#6a6258]">
          Employment history is not listed. The pieces above are the selected projects on this site.
        </p>
      </article>
    </div>
  );
}
