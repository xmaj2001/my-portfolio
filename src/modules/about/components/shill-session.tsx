'use client';

import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string; // Assuming skillicons.dev format (e.g., 'react', 'nodejs')
}

interface SkillsSectionProps {
    skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skillss" className="py-4 md:py-2 text-center">
            <motion.div
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="flex flex-col items-center p-3 bg-card rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-accent/30"
                    >
                        <img
                            // Individual icon URL (might need adjustments based on skillicons.dev)
                            src={`${skill.icon}`}
                            alt={skill.name}
                            className="h-10 w-10 md:h-12 md:w-12 mb-2"
                            loading="lazy"
                        />
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
