import Link from "next/link";
import { LANG_COLORS, type Repo } from "@/modules/repository/type";
import { cn } from "@/lib/utils";
import React from "react";

type RepoGridCardProps = React.ComponentProps<"article"> & {
  repo: Repo;
};

export function RepoGridCard({ repo, className, ...props }: RepoGridCardProps) {
  const p = genRandomPattern();

  return (
    <Link href={`/repository/${repo.name}`} className="block no-underline">
      <article
        className={cn(
          "relative overflow-hidden border border-[#21262d] bg-[#0d1117] p-6 transition-colors hover:border-[#58a6ff]",
          className,
        )}
        {...props}
      >
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
          <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
            <GridPattern
              width={20}
              height={20}
              x="-12"
              y="4"
              squares={p}
              className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
            />
          </div>
        </div>

        <div
          className="relative z-20 h-40 border border-gray-100/20 bg-zinc-900"
          style={
            repo.coverUrl
              ? { background: `url(${repo.coverUrl}) center/cover` }
              : undefined
          }
        >
          {!repo.coverUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <IconForLanguage language={repo.language || ""} />
            </div>
          )}

          {repo.language && <BadgeForLanguage language={repo.language} />}
        </div>

        <h3 className="relative z-20 mt-5 text-sm font-semibold md:text-base">
          {repo.name}
        </h3>
        <p className="text-muted-foreground relative z-20 mt-2 line-clamp-2 text-xs font-light">
          {repo.description || "Sem descrição para este repositório."}
        </p>

        {repo.topics.length > 0 && (
          <div className="relative z-20 mt-3 flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index.toString()}
                className="rounded-full border border-[#58a6ff]/20 bg-[#58a6ff]/10 px-2 py-0.5 text-[11px] text-[#58a6ff]"
              >
                {topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="px-1 text-[11px] text-[#8b949e]">
                +{repo.topics.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="relative z-20 mt-4 flex items-center gap-3.5 border-t border-[#21262d] pt-3 text-xs text-[#8b949e]">
          <span className="flex items-center gap-1">⭐ {repo.stars}</span>
          <span className="flex items-center gap-1">🍴 {repo.forks}</span>
          <span className="ml-auto">
            {new Date(repo.updatedAt).toLocaleDateString("pt-PT", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </article>
    </Link>
  );
}

function getIconForLanguage(language: string) {
  switch (language) {
    case "TypeScript":
      return "⬡";
    case "Python":
      return "🐍";
    case "Go":
      return "🦫";
    default:
      return "📦";
  }
}

function IconForLanguage({ language }: { language: string }) {
  return (
    <span className="text-5xl opacity-30">{getIconForLanguage(language)}</span>
  );
}

function BadgeForLanguage({ language }: { language: string }) {
  if (!language) return null;

  return (
    <div
      className="
				absolute top-3 right-3
				flex items-center gap-1
				px-2 py-0.5
				text-xs font-mono
				rounded-md
				backdrop-blur
				bg-black/70
				border
			"
      style={{
        borderColor: LANG_COLORS[language] || "#30363d",
        color: LANG_COLORS[language] || "#8b949e",
      }}
    >
      <span
        className="w-2 h-2 rounded-full inline-block"
        style={{
          background: LANG_COLORS[language] || "#8b949e",
        }}
      />
      {language}
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible" aria-hidden="true">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}-${index.toString()}`}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
    Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
  ]);
}
