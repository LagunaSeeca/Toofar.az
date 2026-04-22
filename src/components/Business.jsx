import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const FeatureCard = ({ icon, titleKey, contentKey, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="feature-card rounded-2xl p-6 group"
    >
      <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{ background: "var(--accent-light)", border: "1px solid var(--card-border)" }}>
        <img src={icon} alt="feature" className="w-[55%] h-[55%] object-contain" />
      </div>
      <span className="font-mono text-[12px] mb-2 block" style={{ color: "var(--accent)", opacity: 0.5 }}>
        /{String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="font-display font-semibold text-[18px] leading-[24px] mb-2" style={{ color: "var(--fg)" }}>{t(titleKey)}</h4>
      <p className="font-body font-normal text-[14px] leading-[22px]" style={{ color: "var(--muted)" }}>{t(contentKey)}</p>
    </motion.div>
  );
};

const Business = () => {
  const { t } = useTranslation();
  return (
    <section id="features" className={`${styles.paddingY}`}>
      <div className="flex md:flex-row flex-col gap-8 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="md:w-5/12">
          <p className="eyebrow mb-4">{t("business.eyebrow")}</p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tighter leading-[1.1]" style={{ color: "var(--fg)" }}>{t("business.heading")}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease }} className="md:w-7/12 flex flex-col justify-end">
          <p className="font-body text-[15px] leading-[26px] max-w-[500px]" style={{ color: "var(--muted)" }}>{t("business.description")}</p>
          <Button styles="mt-6" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map((feature, index) => (<FeatureCard key={feature.id} {...feature} index={index} />))}
      </div>
    </section>
  );
};

export default Business;
