export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
};

// ─── TYPES ─────────────────────────────────────────────────

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  url: string;
  homepage: string | null;
  coverUrl: string | null;
  hasDotX: boolean;
};

export type RepoDetail = {
  repo: {
    id: number;
    name: string;
    fullName: string;
    description: string | null;
    language: string | null;
    stars: number;
    forks: number;
    watchers: number;
    openIssues: number;
    topics: string[];
    url: string;
    homepage: string | null;
    defaultBranch: string;
    createdAt: string;
    updatedAt: string;
    license: string | null;
  };
  readme: string;
  assets: {
    name: string;
    type: "cover" | "gif" | "screenshot" | "other";
    url: string;
  }[];
};
