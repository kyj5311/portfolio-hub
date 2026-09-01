import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-20 sm:py-28">
      <header className="flex flex-col gap-6">
        <span className="font-mono text-sm text-accent">Portfolio</span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-base text-muted sm:text-lg">{profile.role}</p>
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border-strong px-4 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <section className="mt-20 flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-medium tracking-wide text-muted-dim uppercase">
            Projects
          </h2>
          <span className="font-mono text-xs text-muted-dim">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-border pt-8 text-xs text-muted-dim">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </div>
  );
}
