"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillsSection } from "./shill-session";
import { SKILLS } from "../const/constants";

export function StackAndTools() {
  const skills = [
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Nextjs", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Npm", icon: "https://skillicons.dev/icons?i=npm" },
    { name: "Php", icon: "https://skillicons.dev/icons?i=php" },
    { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
    { name: "Sqlite", icon: "https://skillicons.dev/icons?i=sqlite" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Unity", icon: "https://skillicons.dev/icons?i=unity" },
    { name: "Vscode", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Dotnet", icon: "https://skillicons.dev/icons?i=dotnet" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    {
      name: "Visual Studio",
      icon: "https://skillicons.dev/icons?i=visualstudio",
    },

    // ✅ Novos mambos adicionados
    { name: "Nginx", icon: "https://skillicons.dev/icons?i=nginx" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
    { name: "WebSocket", icon: "https://skillicons.dev/icons?i=nodejs" }, // skillicons não tem ícone próprio, usa Node como referência
    { name: "Webhook", icon: "https://skillicons.dev/icons?i=nodejs" }, // idem
    {
      name: "n8n",
      icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
    }, // logo oficial do GitHub do n8n
    { name: "Docker Compose", icon: "https://skillicons.dev/icons?i=docker" }, // mesmo ecossistema Docker
    { name: "MCP", icon: "https://skillicons.dev/icons?i=nodejs" }, // sem ícone dedicado ainda
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="mx-auto flex h-screen max-w-5xl flex-col justify-center gap-10">
      <motion.div
        className="space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight">Stack & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no meu dia a dia como
            desenvolvedor e designer
          </p>
        </motion.div>

        <SkillsSection skills={skills} />
      </motion.div>
    </section>
  );
}

interface SkillBadgeProps {
  name: string;
  className?: string;
}

function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-500/10 text-gold-500",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  );
}
