"use client";

import { motion } from "framer-motion";
import { BoxIcon, Reply, Send, Square } from "lucide-react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

const domains: FeatureType[] = [
  {
    title: "Arquitetura modular",
    icon: BoxIcon,
    description:
      "FSD, separação por domínio, escalabilidade desde o início, DDD ",
  },
  {
    title: "UI/UX com interatividade",
    description: "Interfaces animadas, fluidas e com foco na experiência real",
    icon: Square,
  },
  {
    title: "Deploy & Infra ",
    description: "Blue/green deployment, load balancer, NGINX, zero downtime",
    icon: Reply,
  },
  {
    title: "Integrações & Automações",
    description:
      "APIs, serviços externos, GitHub Actions, CI/CD, webhooks, MCP e pipelines de CI/CD, scripts personalizados",
    icon: Send,
  },
];
export function Expertise() {
  return (
    <motion.section
      id="expertise"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-10"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Domínios de atuação
          </h2>
          <p>
            Aqui estão as principais áreas em que atuo, com as tecnologias e
            metodologias que utilizo em cada uma delas:
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y *:p-12 sm:grid-cols-2 lg:grid-cols-2">
          {domains.map((domain) => (
            <div
              className="space-y-2 border border-gray-200/10 m-4 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors"
              key={domain.title}
            >
              <div className="flex items-center gap-2">
                <domain.icon className="size-4" />
                <h3 className="text-sm font-bold">{domain.title}</h3>
              </div>
              <p className="text-sm">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
