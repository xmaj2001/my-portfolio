"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import ShapeGrid from "@/components/ShapeGrid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useRepoDetail } from "@/features/projects/hooks/useGitHub";

// ─────────────────────────────────────────────
// MARKDOWN COMPONENTS (Tailwind)
// ─────────────────────────────────────────────
const markdownComponents = {
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        customStyle={{
          borderRadius: "12px",
          border: "1px solid #30363d",
          fontSize: "13px",
          margin: "16px 0",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-[#21262d] border border-[#30363d] rounded px-1.5 py-[2px] text-sm font-mono text-[#e6edf3]">
        {children}
      </code>
    );
  },

  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold border-b border-[#21262d] pb-3 mb-5">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-semibold border-b border-[#21262d] pb-2 mt-8 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: any) => (
    <p className="text-[#c9d1d9] leading-7 mb-4">{children}</p>
  ),
  a: ({ href, children }: any) => (
    <a href={href} target="_blank" className="text-[#58a6ff] hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }: any) => (
    <ul className="pl-6 mb-4 text-[#c9d1d9] leading-7 list-disc">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="pl-6 mb-4 text-[#c9d1d9] leading-7 list-decimal">
      {children}
    </ol>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-[#30363d] pl-4 py-1 my-4 text-[#8b949e]">
      {children}
    </blockquote>
  ),
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: any) => (
    <th className="bg-[#161b22] border border-[#30363d] px-3 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="border border-[#21262d] px-3 py-2">{children}</td>
  ),
  img: ({ src, alt }: any) => (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg border border-[#30363d]"
    />
  ),
  hr: () => <hr className="border-t border-[#21262d] my-6" />,
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  console.log("Slug:", slug);

  const { data, loading, error } = useRepoDetail(slug);

  // ─── LOADING ─────────────────────────────
  if (loading) {
    return (
      <main className="min-h-screen bg-[#010409] flex items-center justify-center text-[#8b949e]">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p>A carregar projecto...</p>
        </div>
      </main>
    );
  }

  // ─── ERROR ─────────────────────────────
  if (error || !data) {
    return (
      <main className="min-h-screen bg-[#010409] flex items-center justify-center text-[#f85149]">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p>Deu pau: {error || "Repo não encontrado"}</p>
          <Link
            href="/projects"
            className="text-[#58a6ff] text-sm mt-2 inline-block"
          >
            ← Voltar aos projectos
          </Link>
        </div>
      </main>
    );
  }

  const { repo, readme, assets } = data;

  const cover = assets.find((a) => a.type === "cover");
  const gifs = assets.filter((a) => a.type === "gif");
  const screenshots = assets.filter((a) => a.type === "screenshot");

  return (
    <main className="relative min-h-screen bg-[#010409] text-[#e6edf3]">
      {/* 🔥 Background animado */}
      <div className="fixed inset-0 -z-10">
        <ShapeGrid speed={0.3} borderColor="#1f2937" hoverFillColor="#111827" />
      </div>

      <div className="fixed inset-0 bg-gradient-to-b from-black/0 to-black/80 -z-10" />

      {/* ─── HERO ───────────────────────── */}
      <div
        className={`
          ${cover ? "h-[400px]" : "h-[200px]"}
          flex items-end px-6 pb-8
          bg-gradient-to-br from-[#0d1117] to-[#010409]
        `}
        style={
          cover
            ? {
                background: `linear-gradient(to bottom, transparent 40%, #010409), url(${cover.url}) center/cover`,
              }
            : undefined
        }
      />

      {/* ─── CONTAINER ─────────────────── */}
      <div className="max-w-[860px] mx-auto px-6 pb-20">
        {/* Breadcrumb */}
        <div className="text-sm text-[#8b949e] mb-6">
          <Link href="/projects" className="text-[#58a6ff] hover:underline">
            Projectos
          </Link>
          {" / "}
          <span>{repo.name}</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold mb-3 font-mono tracking-tight">
            {repo.name}
          </h1>

          {repo.description && (
            <p className="text-[#8b949e] text-base mb-5 leading-6">
              {repo.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              `⭐ ${repo.stars} stars`,
              `🍴 ${repo.forks} forks`,
              `👁 ${repo.watchers} watchers`,
              repo.license && `📄 ${repo.license}`,
            ]
              .filter(Boolean)
              .map((label) => (
                <span
                  key={label}
                  className="bg-[#161b22] border border-[#30363d] rounded-full px-3 py-1 text-xs text-[#8b949e]"
                >
                  {label}
                </span>
              ))}
          </div>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {repo.topics.map((t) => (
                <span
                  key={t}
                  className="bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={repo.url}
              target="_blank"
              className="bg-[#21262d] border border-[#30363d] px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:border-[#58a6ff]"
            >
              🐙 GitHub
            </a>

            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                className="bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] px-4 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                🌐 Demo
              </a>
            )}
          </div>
        </div>

        {/* ─── PREVIEW ─────────────────── */}
        {(gifs.length > 0 || screenshots.length > 0) && (
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest text-[#8b949e] mb-4">
              Preview
            </h2>

            <div
              className={`grid gap-3 ${gifs.length > 0 ? "grid-cols-1" : "grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"}`}
            >
              {[...gifs, ...screenshots].map((a) => (
                <img
                  key={a.name}
                  src={a.url}
                  alt={a.name}
                  className="w-full rounded-xl border border-[#30363d]"
                />
              ))}
            </div>
          </div>
        )}

        {/* ─── README ─────────────────── */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-[#8b949e] mb-5 flex items-center gap-2">
            📖 README.md
          </h2>

          <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {readme}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
