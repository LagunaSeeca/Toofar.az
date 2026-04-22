import React from "react";
import styles from "../style";
import { food } from "../assets";
import GetStarted from "./GetStarted";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[85vh] items-center relative`}>
      {/* Floating orbs */}
      <div className="absolute top-20 right-[10%] w-[300px] h-[300px] accent-orb pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[200px] h-[200px] secondary-orb pointer-events-none" />

      <div className={`flex-1 ${styles.flexStart} flex-col relative z-10`}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="eyebrow mb-6">
          {t("hero.eyebrow")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
          <h1 className="font-display font-bold ss:text-[clamp(2.75rem,8vw,5rem)] text-[2rem] tracking-tighter ss:leading-[1.05] leading-[1.15]" style={{ color: "var(--fg)" }}>
            {t("hero.title1")}
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient-accent font-semibold italic">{t("hero.titleHighlight")}</span>
          </h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
          className="font-display font-bold ss:text-[clamp(2.75rem,8vw,5rem)] text-[2rem] tracking-tighter ss:leading-[1.05] leading-[1.15] w-full"
          style={{ color: "var(--fg)" }}
        >
          {t("hero.title2")}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          className="font-body max-w-[560px] mt-6 text-[15px] leading-[26px]" style={{ color: "var(--muted)" }}>
          {t("hero.description")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55, ease }} className="mt-6 space-y-2.5">
          {t("hero.bulletPoints", { returnObjects: true }).map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }} className="mt-0.5 text-sm">✦</span>
              <p className="font-body text-[14px] leading-[22px]" style={{ color: "var(--muted)" }}>{point}</p>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="https://play.google.com/store/apps/details?id=com.app.too_far_logistics" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7, ease }}
          className="btn-pill btn-pill-accent mt-8 group"
        >
          {t("business.orderBtn")}
          <span className="transition-transform duration-300 group-hover:rotate-45">→</span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease }}
        className={`flex-1 flex ${styles.flexCenter} md:ml-10 md:my-0 my-10 relative`}
      >
        <div className="relative">
          <img src={food} alt="TOO FAR Logistics delivery" className="w-[90%] h-auto object-cover rounded-2xl relative z-10 ml-auto" style={{ opacity: "var(--img-opacity)" }} />
          <div className="absolute inset-0 rounded-2xl z-20 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        </div>
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
