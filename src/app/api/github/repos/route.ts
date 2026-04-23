// app/api/github/repos/route.ts
// GET /api/github/repos?search=termo
// GET /api/github/repos?search=termo&topic=nextjs

import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "xmaj2001";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.toLowerCase() || "";

  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: GITHUB_USERNAME,
      sort: "updated",
      per_page: 100,
      type: "all", // só repos públicos — muda para "all" se quiseres privados
    });

    // Para cada repo, tenta buscar a capa da pasta .preview (se existir) e outras infos
    const reposWithMeta = await Promise.all(
      repos.map(async (repo) => {
        let coverUrl: string | null = null;
        let hasDotX = false;

        try {
          // Tenta listar a pasta .preview do repo
          const { data: dotXContents } = await octokit.repos.getContent({
            owner: GITHUB_USERNAME,
            repo: repo.name,
            path: ".preview",
          });

          console.log(`Repo ${repo.name} tem pasta .preview:`, dotXContents);
          if (Array.isArray(dotXContents)) {
            hasDotX = true;

            // Procura por cover.png, cover.jpg, cover.gif ou preview.*
            const coverFile = dotXContents.find((f) =>
              /^(cover|preview|thumbnail)\.(png|jpg|jpeg|gif|webp)$/i.test(
                f.name,
              ),
            );

            if (coverFile && "download_url" in coverFile) {
              coverUrl = coverFile.download_url;
            }
          }
        } catch {
          // Pasta .preview não existe neste repo — normal, não é pau
          console.warn(
            `Repo ${repo.name} não tem pasta .preview ou deu pau ao acessar.`,
          );
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at,
          topics: repo.topics || [],
          url: repo.html_url,
          homepage: repo.homepage,
          coverUrl,
          hasDotX,
        };
      }),
    );

    // Filtra por search se tiver
    const filtered = search
      ? reposWithMeta.filter(
          (r) =>
            r.name.toLowerCase().includes(search) ||
            r.description?.toLowerCase().includes(search) ||
            r.topics.some((t) => t.toLowerCase().includes(search)),
        )
      : reposWithMeta;

    return NextResponse.json({ repos: filtered, total: filtered.length });
  } catch (error: any) {
    console.error("[GitHub API] Deu pau:", error.message);
    return NextResponse.json(
      { error: "Erro a buscar repos", detail: error.message },
      { status: 500 },
    );
  }
}
