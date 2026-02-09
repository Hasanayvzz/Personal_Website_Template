"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Users, Coffee, Award } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <SectionHeader label="About" title={t("about.title")} />

        <div className="content">
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="image-container">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                alt="Profile"
                width={280}
                height={280}
                className="image"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="text-content"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <p className="bio">{t("about.bio")}</p>
            <p className="bio">{t("about.bio2")}</p>

            <div className="stats">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.4 }}>
                <Code2 className="stat-icon" size={18} />
                <div className="stat-value">50+</div>
                <div className="stat-label">{t("about.stats.projects")}</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.5 }}>
                <Users className="stat-icon" size={18} />
                <div className="stat-value">30+</div>
                <div className="stat-label">{t("about.stats.clients")}</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.6 }}>
                <Coffee className="stat-icon" size={18} />
                <div className="stat-value">1000+</div>
                <div className="stat-label">{t("about.stats.coffees")}</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.7 }}>
                <Award className="stat-icon" size={18} />
                <div className="stat-value">5+</div>
                <div className="stat-label">{t("about.stats.years")}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
