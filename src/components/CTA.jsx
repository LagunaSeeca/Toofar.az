import React from "react";
import styles from "../style";
import Button2 from "./Button2";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const CTA = () => {
  const { t } = useTranslation();
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col glass rounded-2xl relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "var(--orb-accent)", filter: "blur(80px)" }} />
      <div className="flex-1 flex flex-col relative z-10">
        <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,2.5rem)] tracking-tighter leading-[1.15]" style={{ color: "var(--fg)" }}>{t("cta.heading")}</h2>
        <p className="font-body text-[15px] leading-[26px] max-w-[470px] mt-4" style={{ color: "var(--muted)" }}>{t("cta.description")}</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-8 relative z-10`}>
        <Button2 />
      </div>
    </motion.section>
  );
};

export default CTA;
