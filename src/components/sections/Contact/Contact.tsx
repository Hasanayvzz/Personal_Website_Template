"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { Input, Textarea } from "@/components/ui/Input/Input";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
];

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formState);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Contact"
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="content">
          <motion.div
            className="info"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="info-item">
              <Mail size={18} className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <a href="mailto:hello@johndoe.dev" className="info-value">
                  hello@johndoe.dev
                </a>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={18} className="info-icon" />
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">Istanbul, Turkey</span>
              </div>
            </div>

            <div className="socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="form-row">
              <Input
                id="name"
                label={t("contact.name")}
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
              />
              <Input
                id="email"
                label={t("contact.email")}
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
              />
            </div>

            <Textarea
              id="message"
              label={t("contact.message")}
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              required
            />

            <Button
              type="submit"
              isLoading={isSubmitting}
              rightIcon={<Send size={16} />}
              className="submit-btn">
              {t("contact.send")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
