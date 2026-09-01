import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent ?? "var(--accent)";

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover sm:p-7"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-70"
        style={{ background: accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{ background: `color-mix(in srgb, ${accent} 16%, transparent)`, color: accent }}
          >
            {project.context}
          </span>
          <span>{project.period}</span>
          {project.status && (
            <span className="rounded-full border border-border-strong px-2.5 py-1 text-muted">
              {project.status}
            </span>
          )}
        </div>

        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="mt-0.5 h-4 w-4 shrink-0 text-muted-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {project.title}
          {project.subtitle && (
            <span className="ml-2 text-base font-normal text-muted-dim">
              {project.subtitle}
            </span>
          )}
        </h3>
        <p className="text-sm text-muted">{project.role}</p>
      </div>

      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border-strong px-2 py-1 font-mono text-[11px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}
