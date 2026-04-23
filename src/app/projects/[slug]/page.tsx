"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Navigation } from "@/components/landing/navigation";
import ShapeGrid from "@/components/ShapeGrid";
import { useRepoDetail } from "@/features/projects/hooks/useGitHub";
import { RepoHeader } from "@/components/projects/RepoHeader";
import { RepoGallery } from "@/components/projects/RepoGallery";
import { RepoReadme } from "@/components/projects/RepoReadme";

// ─── Background ──────────────────────────────────────────────────────────────

function PageBackground() {
  return (
    <>
      <Navigation />
      <div className="fixed inset-0 -z-20">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          borderColor="#2F293A"
          hoverFillColor="#222"
          hoverTrailAmount={0}
          direction="diagonal"
          shape="square"
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/0 to-black/85" />
    </>
  );
}

// ─── States ───────────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden text-slate-100">
      <PageBackground />
      <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="rounded-xl border border-[#30363d] bg-[#0d1117]/80 px-8 py-10 text-center backdrop-blur-sm">
          <div className="mb-3 animate-spin text-4xl">⏳</div>
          <p className="text-[#8b949e]">A carregar projecto...</p>
        </div>
      </section>
    </main>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden text-slate-100">
      <PageBackground />
      <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="rounded-xl border border-[#f85149]/40 bg-[#0d1117]/85 px-8 py-10 text-center backdrop-blur-sm">
          <div className="mb-3 text-4xl">⚠️</div>
          <p className="text-[#f85149]">Deu pau: {message}</p>
          <Link
            href="/projects"
            className="mt-4 inline-block text-sm text-[#58a6ff] hover:underline"
          >
            ← Voltar aos projectos
          </Link>
        </div>
      </section>
    </main>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : (slugParam ?? "");

  const { data, loading, error } = useRepoDetail(slug);

  if (loading) return <LoadingState />;
  if (error || !data)
    return <ErrorState message={error ?? "Repo não encontrado"} />;

  const { repo, readme, assets } = data;
  const cover = assets.find((a) => a.type === "cover");

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden text-slate-100">
      <PageBackground />

      <div className="mx-auto max-w-5xl space-y-8 px-6 pt-24 pb-20">
        <Link
          href="/projects"
          className="inline-block text-sm text-[#58a6ff] hover:underline"
        >
          ← Voltar aos projectos
        </Link>

        <RepoHeader repo={repo} cover={cover} />

        <RepoGallery assets={assets} />

        <RepoReadme readme={readme} />
      </div>
    </main>
  );
}
