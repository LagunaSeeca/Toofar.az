import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "../style";

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  const { t } = useTranslation();
  const contactCards = [
    { label: t("contact.phone"), value: "+994 51 555 45 54", href: "tel:+994515554554", icon: "✆" },
    { label: t("contact.email"), value: "toofarmmc@gmail.com", href: "mailto:toofarmmc@gmail.com", icon: "✉" },
    { label: t("contact.address"), value: t("contact.addressValue"), href: "https://www.google.com/maps?q=110+Samad+vurgun,+Bakı+1000", icon: "📍" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden my-12">
      <div className="relative py-20 sm:py-28 px-6 sm:px-16" style={{ background: "var(--contact-bg)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: "var(--grain-opacity)", mixBlendMode: "overlay",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }} />
        <div className="w-full relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
            className="text-[12px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--contact-muted)" }}>
            {t("contact.eyebrow")}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-display font-bold text-[clamp(2rem,6vw,4rem)] tracking-tighter leading-[1.1] mb-10" style={{ color: "var(--contact-fg)" }}>
            {t("contact.heading")}{" "}
            <span className="italic font-semibold" style={{ opacity: 0.7 }}>{t("contact.headingHighlight")}</span>{" "}
            {t("contact.headingSuffix")}
          </motion.h2>
          <motion.a href="mailto:toofarmmc@gmail.com" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }} className="btn-pill btn-pill-secondary mb-12 group inline-flex">
            {t("contact.cta")}
            <span className="transition-transform duration-300 group-hover:rotate-45">→</span>
          </motion.a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {contactCards.map((card, index) => (
              <motion.a key={index} href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease }}
                className="p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "var(--contact-card-bg)", border: "1px solid var(--contact-card-border)" }}>
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="font-mono text-[12px] mb-1" style={{ color: "var(--contact-muted)" }}>{card.label}</p>
                <p className="font-display font-semibold text-[15px]" style={{ color: "var(--contact-fg)" }}>{card.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
