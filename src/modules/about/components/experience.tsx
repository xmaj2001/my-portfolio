"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../const/constants";
import { Calendar, Clock, Code, FileText, User } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import Image from "next/image";

const timelineData = [
  {
    id: 1,
    title: "Descktop Application",
    date: "Jan 2024",
    content:
      "Atualmente trabalho no desenvolvimento de aplicações desktop com C#, WPF e .NET, Electron e React.js",
    category: "Descktop Application",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content:
      "Atualmente faço os designs UI/UX das aplicações web,mobile e desktop, no Figma",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Mobile Application",
    date: "Mar 2024",
    content:
      "Atualmente trabalho no desenvolvimento de aplicações Mobile com React Native, Expo, TypeScript, Tailwind CSS, Firebase. Estou estudando Flutter.",
    category: "Mobile Application",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Web Application",
    date: "Apr 2024",
    content:
      "Atualmente trabalho no desenvolvimento de aplicações web com Next.js, TypeScript, Tailwind CSS e Php e estou a estudar Angular.",
    category: "Web Application",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Game Development",
    date: "May 2024",
    content: "Desenvolvimento de jogos com Unity e C#.",
    category: "Game Development",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    // <div className="relative w-full h-screen flex flex-row items-center justify-center">
    //   <motion.div
    //     className="bg-amber-50"
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     viewport={{ once: true, margin: "-100px" }}
    //   >
    //     <Image
    //       src="/imagens/me-bg-transparent0.png"
    //       alt="Background"
    //       width={500}
    //       height={500}
    //     />
    //   </motion.div>

    //   <motion.div
    //     className="max-w-3xl mx-auto space-y-8 relative"
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, margin: "-100px" }}
    //     variants={containerVariants}
    //   >
    //     <RadialOrbitalTimeline timelineData={timelineData} />
    //   </motion.div>
    // </div>
    <div className="mx-auto flex h-screen w-full flex-col justify-center">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Skills
        </h2>
        <p className="text-xl tracking-tight text-center">
          Aqui estão algumas das habilidades que adquiri durante minha jornada:
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}
