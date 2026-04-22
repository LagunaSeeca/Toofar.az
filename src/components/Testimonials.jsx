import React from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute w-[250px] h-[250px] accent-orb -right-[10%] top-[20%] pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-8 relative z-[1]">
        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tighter leading-[1.1] text-gradient-accent">
          {t("testimonials.heading1")}{" "}<br className="sm:block hidden" />{t("testimonials.heading2")}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-body text-[15px] leading-[26px] text-left max-w-[550px]" style={{ color: "var(--muted)" }}>{t("testimonials.description")}</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease }}>
        <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-tighter" style={{ color: "var(--fg)" }}>{t("testimonials.partnersTitle")}</h3>
      </motion.div>
    </section>
  );
};

export default Testimonials;
