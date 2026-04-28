import Link from "next/link";
import { LANG_COLORS, Repo } from "../type";

export function RepoCardx({ repo }: { repo: Repo }) {
  return (
    <Link href={`/repository/${repo.name}`} className="no-underline">
      <article
        className="
          bg-[#0d1117]
          border border-[#21262d]
          rounded-2xl
          overflow-hidden
          cursor-pointer
          h-full
          flex flex-col
          transition-all duration-200
          hover:border-[#58a6ff]
          hover:-translate-y-1
          hover:shadow-[0_12px_32px_rgba(88,166,255,0.12)]
        "
      >
        {/* Capa */}
        <div
          className="
            h-[180px]
            relative
            flex items-center justify-center
            bg-gradient-to-br from-[#161b22] to-[#0d1117]
          "
          style={
            repo.coverUrl
              ? { background: `url(${repo.coverUrl}) center/cover` }
              : undefined
          }
        >
          {!repo.coverUrl && (
            <span className="text-5xl opacity-30">
              {repo.language === "TypeScript"
                ? "⬡"
                : repo.language === "Python"
                  ? "🐍"
                  : repo.language === "Go"
                    ? "🦫"
                    : "📦"}
            </span>
          )}

          {/* Badge */}
          {repo.language && (
            <div
              className="
                absolute top-3 right-3
                flex items-center gap-1
                px-2 py-[2px]
                text-xs font-mono
                rounded-md
                backdrop-blur
                bg-black/70
                border
              "
              style={{
                borderColor: LANG_COLORS[repo.language] || "#30363d",
                color: LANG_COLORS[repo.language] || "#8b949e",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{
                  background: LANG_COLORS[repo.language] || "#8b949e",
                }}
              />
              {repo.language}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="text-[16px] font-semibold text-[#e6edf3] font-mono">
            {repo.name}
          </h3>

          {repo.description && (
            <p className="text-[13px] text-[#8b949e] leading-6 line-clamp-2 flex-1">
              {repo.description}
            </p>
          )}

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="
                    text-[11px]
                    px-2 py-[2px]
                    rounded-full
                    border
                    text-[#58a6ff]
                    border-[#58a6ff]/20
                    bg-[#58a6ff]/10
                  "
                >
                  {topic}
                </span>
              ))}
              {repo.topics.length > 3 && (
                <span className="text-[11px] text-[#8b949e] px-1">
                  +{repo.topics.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex gap-3.5 border-t border-[#21262d] pt-3 mt-auto text-xs text-[#8b949e]">
            <span className="flex items-center gap-1">⭐ {repo.stars}</span>
            <span className="flex items-center gap-1">🍴 {repo.forks}</span>
            <span className="ml-auto">
              {new Date(repo.updatedAt).toLocaleDateString("pt-PT", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Link href={`/repository/${repo.name}`} className="no-underline">
      <div className="border border-gray-200/20 p-4">
        <div className="bg-zinc-800">
          {/* Capa */}
          <div
            className="border border-gray-100/30 h-45 relative flex items-center justify-center"
            style={
              repo.coverUrl
                ? { background: `url(${repo.coverUrl}) center/cover` }
                : undefined
            }
          >
            {!repo.coverUrl && (
              <IconForLanguage language={repo.language || ""} />
            )}

            {/* Badge */}

            {repo.language && <BadgeForLanguage language={repo.language} />}
          </div>

          {/* Conteúdo */}
          <div className="p-5 flex flex-col gap-2 flex-1">
            <h3 className="text-[16px] font-semibold text-[#e6edf3] font-mono">
              {repo.name}
            </h3>

            {repo.description && (
              <p className="text-[13px] text-[#8b949e] leading-6 line-clamp-2 flex-1">
                {repo.description}
              </p>
            )}

            {/* Topics */}
            {repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="
                    text-[11px]
                    px-2 py-[2px]
                    rounded-full
                    border
                    text-[#58a6ff]
                    border-[#58a6ff]/20
                    bg-[#58a6ff]/10
                  "
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="text-[11px] text-[#8b949e] px-1">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="flex gap-3.5 border-t border-[#21262d] pt-3 mt-auto text-xs text-[#8b949e]">
              <span className="flex items-center gap-1">⭐ {repo.stars}</span>
              <span className="flex items-center gap-1">🍴 {repo.forks}</span>
              <span className="ml-auto">
                {new Date(repo.updatedAt).toLocaleDateString("pt-PT", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
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
        px-2 py-[2px]
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
