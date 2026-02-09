"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import StarField from "@/components/effects/StarField";
import Button from "@/components/ui/Button/Button";
export default function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <StarField />
      <div className="container">
        <div className="content">
          <motion.p
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}>
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            {t("hero.name")}
          </motion.h1>

          <motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}>
            {t("hero.title")}
          </motion.h2>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}>
            <Button
              variant="primary"
              onClick={scrollToProjects}
              rightIcon={<ArrowRight size={18} />}>
              {t("hero.cta")}
            </Button>
            <Button variant="outline" onClick={scrollToContact}>
              {t("hero.contact")}
            </Button>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@johndoe.dev" className="social-link">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}>
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
