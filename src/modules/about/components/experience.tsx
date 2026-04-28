"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../const/constants";

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="space-y-8">
        {EXPERIENCE.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TimelineItem
              title={item.title}
              date={item.date}
              description={item.description}
              isLast={index === EXPERIENCE.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({
  title,
  date,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-start">
      <div className="text-right pr-8 pt-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-muted-foreground">{date}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-gold-500"></div>
        {!isLast && <div className="h-full w-px bg-gold-500/20 mt-1"></div>}
      </div>

      <div className="pl-8 pb-8">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
