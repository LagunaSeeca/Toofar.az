import React from "react";
import { bill } from "../assets";
import styles, { layout } from "../style";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const Billing = () => {
  const { t } = useTranslation();
  const items = t("billing.items", { returnObjects: true });

  return (
    <section id="product" className={layout.sectionReverse}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className={layout.sectionImgReverse}>
        <img src={bill} alt="Mobile app" className="w-[100%] h-[100%] relative z-[5] rounded-2xl" style={{ opacity: "var(--img-opacity)" }} />
        <div className="absolute z-[3] -left-1/4 top-0 w-[50%] h-[50%] rounded-full accent-orb" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease }} className={layout.sectionInfo}>
        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-tighter leading-[1.1] mb-4" style={{ color: "var(--fg)" }}>{t("billing.heading")}</h2>
        <p className="font-body text-[15px] leading-[26px] max-w-[700px]" style={{ color: "var(--muted)" }}>{t("billing.description")}</p>
        <ul className="mt-5 space-y-2.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }} className="mt-0.5 text-sm">✦</span>
              <p className="font-body text-[14px] leading-[22px]" style={{ color: "var(--fg)", opacity: 0.8 }}>{item}</p>
            </li>
          ))}
        </ul>
        <p className="font-body text-[14px] leading-[24px] max-w-[700px] mt-5" style={{ color: "var(--muted)" }}>{t("billing.afterItems")}</p>
      </motion.div>
    </section>
  );
};

export default Billing;
