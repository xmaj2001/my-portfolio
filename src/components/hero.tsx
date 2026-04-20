"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <Badge tone="accent" className="shadow-sm">
          Next.js 16.2.4 + Tailwind + Biome
        </Badge>

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Um portfolio moderno, rápido e pronto para crescer.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Projeto preparado com `src/`, App Router, Tailwind,
              `tailwind-merge`, `tailwind-variants`, shadcn/ui, Framer Motion e
              Biome para um fluxo de trabalho limpo.
            </p>
          </div>
          <div className="border border-gray-200/20 p-6 mt-8">
            <Image
              src="/imagens/me.png"
              alt="Imagem de um laptop com código e gráficos, representando um portfolio moderno."
              width={600}
              height={600}
              className="rounded-lg border border-border object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="mailto:hello@myportfolio.dev">
              Falar comigo
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              Ver GitHub
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#projetos">
              Explorar projeto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.section
        id="projetos"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {[
          ["App Router", "Estrutura em `src/app` com rotas modernas."],
          ["Tailwind", "Base configurada para design system e utilitários."],
          ["Biome", "Lint e formatação num único fluxo."],
        ].map(([title, description]) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm backdrop-blur"
          >
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </article>
        ))}
      </motion.section>
    </div>
  );
}
