"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "framer-motion";
import { useRef } from "react";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const experiences = ["techcorp", "digitalagency", "startup"];

export default function Experience() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <SectionHeader label="Experience" title={t("experience.title")} />

        <div className="timeline">
          {experiences.map((key, index) => (
            <motion.div
              key={key}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}>
              <div className="timeline-dot" />
              <div className="card">
                <div className="card-meta">
                  <span className="period">
                    {t(`experience.${key}.period`)}
                  </span>
                  <span className="company">
                    {t(`experience.${key}.company`)}
                  </span>
                </div>
                <h3 className="card-title">{t(`experience.${key}.title`)}</h3>
                <p className="card-description">
                  {t(`experience.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
