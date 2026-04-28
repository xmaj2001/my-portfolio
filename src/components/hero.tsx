"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Magnet from "./Magnet";

export function Hero() {
  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col justify-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6 mt-20"
      >
        <div className="flex flex-col items-start gap-40 md:flex-row md:items-center">
          <div className="max-w-3xl space-y-4">
            <Badge tone="accent" className="shadow-sm">
              DEVELOPER FULLSTACK
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-4xl">
              Xavier Moisés Alberto José
            </h1>
            <p className="max-w-5xl text-base leading-7 text-gray-300 dark:text-slate-300 sm:text-lg">
              Full Stack Developer especializado em aplicações escaláveis
              modular e modernas. Desenvolvo sistemas completos — do frontend ao
              backend — seja Mobiler, Web, Desktop, incluindo arquitetura, APIs
              e deploy com Docker e CI/CD,NGNIX, LoadBlancer.
              <br />
              Foco em performance, organização e soluções reais para problemas
              reais. Desenvolvedor
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-black">
                <Link href="mailto:hello@myportfolio.dev" target="_blank">
                  Falar comigo
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white dark:text-black"
              >
                <Link href="#projetos">
                  Explorar projeto
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="border border-gray-200/20 p-6 mt-8">
            <Magnet padding={50} disabled={false} magnetStrength={50}>
              <Image
                src="/imagens/me.png"
                alt="Imagem de um laptop com código e gráficos, representando um portfolio moderno."
                width={600}
                height={600}
                className="rounded-lg border border-border object-cover shadow-sm"
              />
            </Magnet>
          </div>
        </div>

        {/* Destaques SKILLS */}

        <motion.section
          id="destaques_skills"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid gap-4 md:grid-cols-3"
        >
          {[
            [
              "Dev Web",
              "Desenvolvimento de aplicações Web usando tecnologias como PhP, Node.js, React, Next.js, Angular(estudando), HTML5, CSS3, JavaScript/TypeScript.",
            ],
            [
              "Dev Mobile",
              "Desenvolvimento de aplicativos para iOS e Android usando tecnologias Flutter(estudando), React Native.",
            ],
            [
              "Dev Desktop",
              "Desenvolvimento de aplicações desktop usando tecnologias como Electron e .NET.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="border border-gray-200/20 p-6">
              <article className="">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300">
                  {description}
                </p>
              </article>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
}
