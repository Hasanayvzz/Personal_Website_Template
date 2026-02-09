"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const projects = [
  {
    id: "ecommerce",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    year: "2024",
    github: "#",
    live: "#",
    image: "/projects/ecommerce.png",
  },
  {
    id: "taskapp",
    tags: ["React", "Firebase", "TypeScript"],
    year: "2023",
    github: "#",
    live: "#",
    image: "/projects/taskapp.png",
  },
  {
    id: "ai",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    year: "2023",
    github: "#",
    live: "#",
    image: "/projects/ai.png",
  },
  {
    id: "realestate",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    year: "2022",
    github: "#",
    live: "#",
    image: "/projects/realestate.png",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Work"
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="image-container">
                <Image
                  src={project.image}
                  alt={t(`projects.${project.id}.title`)}
                  width={600}
                  height={300}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <span className="project-year">{project.year}</span>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      aria-label="View code">
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      aria-label="View live">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className="project-description">
                  {t(`projects.${project.id}.description`)}
                </p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
