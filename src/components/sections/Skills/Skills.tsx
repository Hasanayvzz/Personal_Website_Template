"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

export default function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Skills"
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                style={
                  {
                    "--skill-color": skill.color,
                  } as React.CSSProperties
                }>
                <Icon className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
