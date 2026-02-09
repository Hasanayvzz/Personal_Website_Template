"use client";

import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/themeStore";
import { useLanguageStore } from "@/stores/languageStore";
import { useTranslation } from "@/hooks/useTranslation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const { language, toggleLanguage } = useLanguageStore();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="container">
        <motion.a
          href="#"
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}>
          <span className="logo-gradient">JD</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <button
                onClick={() => scrollToSection(item)}
                className="nav-link">
                {t(`nav.${item}`)}
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="controls">
          <motion.button
            className="lang-toggle"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            {language.toUpperCase()}
          </motion.button>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-nav-link">
                {t(`nav.${item}`)}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
