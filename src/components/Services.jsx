import React from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const ExtraServices = () => {
  const { t } = useTranslation();
  const items = t("extraServices.items", { returnObjects: true });

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="py-16">
      <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-tighter leading-[1.15] mb-4" style={{ color: "var(--fg)" }}>
        {t("extraServices.heading")}
      </h2>
      <p className="font-body text-[15px] leading-[26px] mb-10 max-w-[600px]" style={{ color: "var(--muted)" }}>{t("extraServices.intro")}</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04, ease }} className="service-card rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[12px] mt-0.5 flex-shrink-0" style={{ color: "var(--accent)", opacity: 0.5 }}>/{String(index + 1).padStart(2, "0")}</span>
              <p className="font-body text-[13px] leading-[20px]" style={{ color: "var(--fg)", opacity: 0.8 }}>{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraServices;
