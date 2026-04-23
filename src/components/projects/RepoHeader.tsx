"use client";

import { LANG_COLORS } from "@/features/projects/type";

type Repo = {
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  url: string;
  homepage: string | null;
  topics: string[];
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  createdAt: string;
  updatedAt: string;
  defaultBranch: string;
  license: string | null;
};

type Asset = {
  type: "cover" | "gif" | "screenshot";
  url: string;
  name: string;
};

function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("pt-PT", {
    month: "short",
    year: "numeric",
  });
}

function getIconForLanguage(language: string) {
  const icons: Record<string, string> = {
    TypeScript: "⬡",
    Python: "🐍",
    Go: "🦫",
    Rust: "⚙️",
    JavaScript: "☁️",
  };
  return icons[language] ?? "📦";
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#21262d] bg-[#010409] px-3 py-2">
      <p className="text-[11px] uppercase tracking-wide text-[#8b949e]">
        {label}
      </p>
      <p className="mt-1 text-sm text-[#e6edf3]">{value}</p>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#21262d] bg-[#010409] px-3 py-2">
      <p className="text-xs text-[#8b949e]">{label}</p>
      <p className="mt-1 font-mono text-sm text-[#e6edf3]">{value}</p>
    </div>
  );
}

interface RepoHeaderProps {
  repo: Repo;
  cover?: Asset;
}

export function RepoHeader({ repo, cover }: RepoHeaderProps) {
  const langColor = repo.language
    ? (LANG_COLORS[repo.language] ?? "#30363d")
    : "#30363d";

  return (
    <article className="overflow-hidden border border-[#21262d] bg-[#0d1117]/90 backdrop-blur-sm">
      {/* Cover */}
      <div
        className="relative flex h-64 items-center justify-center border-b border-[#21262d] bg-[#0b1220]"
        style={
          cover
            ? {
                backgroundImage: `url(${cover.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {!cover && (
          <span className="text-7xl opacity-20">
            {getIconForLanguage(repo.language ?? "")}
          </span>
        )}

        {repo.language && (
          <span
            className="absolute top-4 right-4 rounded-md border bg-black/70 px-2.5 py-1 font-mono text-xs backdrop-blur"
            style={{ borderColor: langColor, color: langColor }}
          >
            {repo.language}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title + links */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-[clamp(24px,4vw,38px)] font-extrabold tracking-tight text-[#e6edf3]">
              {repo.name}
            </h1>
            <p className="mt-1 text-sm text-[#8b949e]">{repo.fullName}</p>
            {repo.description && (
              <p className="mt-3 max-w-2xl leading-7 text-[#c9d1d9]">
                {repo.description}
              </p>
            )}
          </div>

          <div className="flex shrink-0 gap-2">
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#30363d] px-3 py-2 text-sm text-[#e6edf3] transition hover:border-[#58a6ff] hover:text-[#58a6ff]"
            >
              GitHub ↗
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#30363d] px-3 py-2 text-sm text-[#e6edf3] transition hover:border-[#58a6ff] hover:text-[#58a6ff]"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[#58a6ff]/20 bg-[#58a6ff]/10 px-2.5 py-0.5 text-xs text-[#58a6ff]"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:grid-cols-6">
          <Stat label="Stars" value={`⭐ ${repo.stars}`} />
          <Stat label="Forks" value={`🍴 ${repo.forks}`} />
          <Stat label="Watchers" value={`👀 ${repo.watchers}`} />
          <Stat label="Issues" value={`🐞 ${repo.openIssues}`} />
          <Stat label="Criado" value={formatMonthYear(repo.createdAt)} />
          <Stat label="Atualizado" value={formatMonthYear(repo.updatedAt)} />
        </div>

        {/* Meta */}
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <MetaRow label="Branch padrão" value={repo.defaultBranch} />
          <MetaRow label="Licença" value={repo.license ?? "Sem licença"} />
        </div>
      </div>
    </article>
  );
}
