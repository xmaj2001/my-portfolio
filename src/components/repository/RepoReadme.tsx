"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { PropsWithChildren, ReactNode } from "react";

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
};

const components = {
  code({ inline, className, children }: CodeProps) {
    const match = /language-(\w+)/.exec(className || "");
    if (!inline && match) {
      return (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            borderRadius: "8px",
            border: "1px solid #30363d",
            fontSize: "13px",
            margin: "16px 0",
            background: "#161b22",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    }
    return (
      <code className="rounded-md border border-[#30363d] bg-[#161b22] px-1.5 py-0.5 font-mono text-[13px] text-[#e6edf3]">
        {children}
      </code>
    );
  },

  h1: ({ children }: PropsWithChildren) => (
    <h1 className="mb-4 border-b border-[#21262d] pb-3 text-[28px] font-bold text-[#e6edf3]">
      {children}
    </h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="mb-3 mt-8 border-b border-[#21262d] pb-2 text-xl font-semibold text-[#e6edf3]">
      {children}
    </h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="mb-2 mt-6 text-base font-semibold text-[#e6edf3]">
      {children}
    </h3>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <h4 className="mb-2 mt-4 text-sm font-semibold text-[#e6edf3]">
      {children}
    </h4>
  ),

  p: ({ children }: PropsWithChildren) => (
    <p className="mb-4 leading-7 text-[#c9d1d9]">{children}</p>
  ),

  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[#58a6ff] underline-offset-2 hover:underline"
    >
      {children}
    </a>
  ),

  ul: ({ children }: PropsWithChildren) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-[#c9d1d9]">{children}</ul>
  ),
  ol: ({ children }: PropsWithChildren) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-[#c9d1d9]">
      {children}
    </ol>
  ),
  li: ({ children }: PropsWithChildren) => (
    <li className="leading-7">{children}</li>
  ),

  blockquote: ({ children }: PropsWithChildren) => (
    <blockquote className="my-4 border-l-4 border-[#3b82f6] bg-[#161b22] py-2 pl-4 pr-2 text-[#8b949e] italic">
      {children}
    </blockquote>
  ),

  table: ({ children }: PropsWithChildren) => (
    <div className="my-4 overflow-x-auto rounded-lg border border-[#30363d]">
      <table className="w-full border-collapse text-sm text-[#c9d1d9]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: PropsWithChildren) => (
    <thead className="bg-[#161b22]">{children}</thead>
  ),
  th: ({ children }: PropsWithChildren) => (
    <th className="border-b border-[#30363d] px-4 py-2 text-left font-semibold text-[#e6edf3]">
      {children}
    </th>
  ),
  td: ({ children }: PropsWithChildren) => (
    <td className="border-b border-[#21262d] px-4 py-2 last:border-0">
      {children}
    </td>
  ),

  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img
      src={src}
      alt={alt ?? ""}
      className="my-3 max-w-full rounded-lg border border-[#30363d]"
    />
  ),

  hr: () => <hr className="my-6 border-t border-[#21262d]" />,

  pre: ({ children }: PropsWithChildren) => <>{children}</>,
};

interface RepoReadmeProps {
  readme: string | null;
}

export function RepoReadme({ readme }: RepoReadmeProps) {
  return (
    <article className="border border-[#21262d] bg-[#0d1117]/90 p-6 backdrop-blur-sm md:p-8">
      <h2 className="mb-6 text-xl font-bold text-[#e6edf3]">README</h2>
      <div className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={components}
        >
          {readme ??
            "# Sem README\n\nEste repositório ainda não tem documentação."}
        </ReactMarkdown>
      </div>
    </article>
  );
}
