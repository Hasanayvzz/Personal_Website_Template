"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}>
          <div className="brand">
            <span className="logo">JD</span>
            <p className="tagline">{t("hero.title")}</p>
          </div>

          <div className="links">
            <a href="#home">{t("nav.home")}</a>
            <a href="#about">{t("nav.about")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </div>

          <div className="copyright">
            <p>
              © {currentYear} John Doe. {t("footer.rights")}
            </p>
            <p className="made-with">
              {t("footer.madeWith")} <span className="heart">❤️</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
