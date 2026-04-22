import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const CardDeal = () => {
  const { t } = useTranslation();
  return (
    <section className={layout.section}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className={layout.sectionInfo}>
        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-tighter leading-[1.1] mb-4" style={{ color: "var(--fg)" }}>{t("cardDeal.heading")}</h2>
        <p className="font-body text-[15px] leading-[26px] max-w-[470px]" style={{ color: "var(--muted)" }}>{t("cardDeal.description")}</p>
        <Button styles="mt-8" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease }} className={layout.sectionImg}>
        <img src={card} alt="Reports" className="w-[100%] h-[100%] rounded-2xl" style={{ opacity: "var(--img-opacity)" }} />
      </motion.div>
    </section>
  );
};

export default CardDeal;
