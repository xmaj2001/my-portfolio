"use client";

import { useCallback, useEffect, useState } from "react";
import { Repo, RepoDetail } from "../type";

export function useRepos(search: string = "") {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : "";
      const res = await fetch(`/api/github/repos${params}`);
      if (!res.ok) throw new Error(`Deu pau: ${res.status}`);
      const data = await res.json();
      setRepos(data.repos);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, loading, error, refetch: fetchRepos };
}

// ─── HOOK: detalhe de um repo ──────────────────────────────

export function useRepoDetail(slug: string) {
  const [data, setData] = useState<RepoDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    const fetch_ = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/github/repos/${slug}`);
        if (!res.ok) throw new Error(`Repo não encontrado (${res.status})`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err: any) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetch_();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading, error };
}
