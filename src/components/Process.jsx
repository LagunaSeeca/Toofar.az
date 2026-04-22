import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "../style";

const ease = [0.22, 1, 0.36, 1];

const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section className={`${styles.paddingY}`}>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease }} className="eyebrow mb-4">
        {t("process.eyebrow")}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1, ease }}
        className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tighter leading-[1.1] mb-16" style={{ color: "var(--fg)" }}>
        {t("process.heading")}{" "}
        <span className="text-gradient-accent italic font-semibold">{t("process.headingHighlight")}</span>{" "}
        {t("process.headingSuffix")}
      </motion.h2>
      <div className="relative">
        <div className="process-line hidden sm:block" />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }} className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="process-node glass-accent" style={{ color: "var(--accent)" }}>
                  <span className="font-mono text-[13px]">/{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="process-node-ring" style={{ animationDelay: `${index * 0.3}s` }} />
              </div>
              <h4 className="font-display font-semibold text-[18px] mb-2" style={{ color: "var(--fg)" }}>{step.title}</h4>
              <p className="font-body text-[14px] leading-[22px] max-w-[200px]" style={{ color: "var(--muted)" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
