// app/api/github/repos/[slug]/route.ts
// GET /api/github/repos/nome-do-repo
// Retorna: info do repo + README formatado + assets da pasta .x

import { Octokit } from "@octokit/rest";
import { NextResponse } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "xmaj2001";

function decodeBase64(content: string): string {
  return Buffer.from(content, "base64").toString("utf-8");
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const repoName = params.slug;

  try {
    // 1. Info base do repo
    const { data: repo } = await octokit.repos.get({
      owner: GITHUB_USERNAME,
      repo: repoName,
    });

    // 2. README
    let readmeContent = "";
    try {
      const { data: readme } = await octokit.repos.getReadme({
        owner: GITHUB_USERNAME,
        repo: repoName,
      });
      readmeContent = decodeBase64(readme.content);
    } catch {
      readmeContent =
        "# Sem README\n\nEste projecto ainda não tem documentação.";
    }

    // 3. Assets da pasta .preview
    let dotXAssets: {
      name: string;
      type: "cover" | "gif" | "screenshot" | "other";
      url: string;
    }[] = [];

    try {
      const { data: dotXContents } = await octokit.repos.getContent({
        owner: GITHUB_USERNAME,
        repo: repoName,
        path: ".preview",
      });

      if (Array.isArray(dotXContents)) {
        dotXAssets = dotXContents
          .filter(
            (f) => f.type === "file" && "download_url" in f && f.download_url,
          )
          .map((f) => {
            const name = f.name.toLowerCase();
            let type: "cover" | "gif" | "screenshot" | "other" = "other";

            if (/^(cover|thumbnail|preview)/.test(name)) type = "cover";
            else if (name.endsWith(".gif")) type = "gif";
            else if (/^(screen|demo|preview|screenshot)/.test(name))
              type = "screenshot";

            return {
              name: f.name,
              type,
              url: (f as any).download_url as string,
            };
          });
      }
    } catch {
      // Pasta .preview não existe — tá fixe, segue em frente
      console.warn(`Repo ${repo.name} não tem pasta .preview ou deu pau ao acessar.`);
    }

    // Ordena: cover primeiro, depois gifs, depois o resto
    const order = { cover: 0, gif: 1, screenshot: 2, other: 3 };
    dotXAssets.sort((a, b) => order[a.type] - order[b.type]);

    return NextResponse.json({
      repo: {
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        openIssues: repo.open_issues_count,
        topics: repo.topics || [],
        url: repo.html_url,
        homepage: repo.homepage,
        defaultBranch: repo.default_branch,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        license: repo.license?.name || null,
      },
      readme: readmeContent,
      assets: dotXAssets,
    });
  } catch (error: any) {
    if (error.status === 404) {
      return NextResponse.json(
        { error: "Repo não encontrado" },
        { status: 404 },
      );
    }
    console.error("[GitHub API] Deu pau no repo", repoName, error.message);
    return NextResponse.json(
      { error: "Erro a buscar detalhes", detail: error.message },
      { status: 500 },
    );
  }
}
