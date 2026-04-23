"use client";

import { Navigation } from "@/components/landing/navigation";
import ShapeGrid from "@/components/ShapeGrid";
import { RepoCard } from "@/features/projects/components/RepoCard";
import { useRepos } from "@/features/projects/hooks/useGitHub";
import { useState } from "react";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce simples sem lib externa
  const handleSearch = (val: string) => {
    setSearch(val);
    clearTimeout((window as any).__searchTimeout);
    (window as any).__searchTimeout = setTimeout(
      () => setDebouncedSearch(val),
      400,
    );
  };

  const { repos, loading, error } = useRepos(debouncedSearch);
  return (
    <main className="relative h-screen w-screen overflow-x-hidden dark:text-slate-50 light:text-red-500">
      <Navigation />
      <div className="fixed inset-0 -z-20">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          borderColor="#2F293A"
          hoverFillColor="#222"
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
          direction="diagonal"
          shape="square"
        />
      </div>

      {/* Overlay para contraste */}
      <div className="fixed inset-0 bg-linear-to-b from-black/0 to-black/80 -z-10" />

      {/* Header */}
      <div className="px-6 pt-20 pb-12 max-w-275 mx-auto text-center">
        <h1
          className="
          text-[clamp(32px,5vw,56px)]
          font-extrabold
          mb-4
          tracking-tight
        "
        >
          Projectos
        </h1>

        <p className="text-[#8b949e] text-base mb-10">
          Repositórios públicos — código aberto e experiências
        </p>

        {/* Search */}
        <div className="max-w-125 mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b949e]">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Pesquisar por nome, linguagem ou topic..."
            className="
              w-full
              pl-11 pr-5 py-3.5
              bg-[#0d111759]
              border border-[#30363d]
              text-sm
              outline-none
              transition
              focus:border-[#ffffff]
            "
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-275 mx-auto px-6 pb-20">
        {error && (
          <div className="bg-[#3d1a1a] border border-[#f85149] rounded-lg p-4 text-[#f85149] mb-6 text-sm">
            ⚠️ Deu pau: {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[320px] bg-[#0d1117] border border-[#21262d] rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-20 text-[#8b949e]">
            <p className="text-5xl mb-4">🔭</p>
            <p>Nenhum repo encontrado para "{search}"</p>
          </div>
        ) : (
          <>
            <p className="text-[#8b949e] text-xs mb-5">
              {repos.length} {repos.length === 1 ? "projecto" : "projectos"}{" "}
              encontrados
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
