"use client";

type Asset = {
  type: "cover" | "gif" | "screenshot";
  url: string;
  name: string;
};

interface RepoGalleryProps {
  assets: Asset[];
}

export function RepoGallery({ assets }: RepoGalleryProps) {
  const visuals = assets.filter(
    (a) => a.type === "gif" || a.type === "screenshot",
  );

  if (visuals.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-[#e6edf3]">Visuals</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visuals.map((asset) => (
          <a
            key={asset.url}
            href={asset.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-xl border border-[#21262d] bg-[#0d1117]/90 transition hover:border-[#30363d]"
          >
            <img
              src={asset.url}
              alt={asset.name}
              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="flex items-center justify-between border-t border-[#21262d] px-3 py-2 text-xs text-[#8b949e]">
              <span className="truncate">{asset.name}</span>
              <span className="ml-2 shrink-0 rounded-sm border border-[#30363d] px-1.5 py-0.5 font-mono uppercase">
                {asset.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
