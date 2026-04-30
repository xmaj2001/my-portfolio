"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
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
            <Badge className="shadow-sm">FULL STACK DEVELOPER</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-4xl">
              Xavier Moisés Alberto José
            </h1>
            <p className="max-w-5xl text-base leading-7 text-gray-300 dark:text-slate-300 sm:text-lg">
              <b>Full Stack Developer</b> Mobile · Web · Desktop ·
              Infraestrutura
              <br />
              <br />
              Desenvolvo sistemas completos do frontend ao backend — em
              plataformas Mobile, Web e Desktop. Especializado em arquiteturas
              escaláveis e modulares, com foco em performance real, organização
              sólida e soluções que funcionam em produção. Da interface ao
              servidor, passando por APIs, deploys e infraestrutura.
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

        {/* Destaques especialidades */}

        <motion.section
          id="destaques_especialidades"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid gap-4 md:grid-cols-4"
        >
          {[
            [
              "Arquitetura modular",
              "FSD, separação por domínio, escalabilidade desde o início, DDD ",
            ],
            [
              "UI/UX com interatividade",
              "Interfaces animadas, fluidas e com foco na experiência real.",
            ],
            [
              "Deploy & Infra",
              "Blue/green deployment, load balancer, NGINX, zero downtime, docker",
            ],
            [
              "Integrações & Automações",
              "APIs REST, webhooks, MCP e pipelines de CI/CD",
            ],
          ].map(([title, description]) => (
            <div key={title} className="border border-gray-200/20 p-6">
              <article className="">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400 dark:text-slate-300">
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
