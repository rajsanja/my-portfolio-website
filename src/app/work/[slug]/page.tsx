import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArt } from "@/components/project-art";
import { getProject, site } from "@/content/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/#work" className="text-sm text-[#6f675e] hover:text-[#1c1916]">
          ← All projects
        </Link>
        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[#c4784a] uppercase">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-[#1c1916] sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#5e584f]">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full bg-white px-3 py-1 text-sm text-[#1c1916]">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-[#eadfce]">
          <div className="aspect-[16/9]">
            <ProjectArt kind={project.art} />
          </div>
        </div>
        <div className="mt-8 space-y-4 text-base leading-7 text-[#5e584f]">
          {project.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#1c1916] px-5 text-sm font-medium text-white"
          >
            Open repository
          </a>
        ) : null}
      </div>
    </article>
  );
}
