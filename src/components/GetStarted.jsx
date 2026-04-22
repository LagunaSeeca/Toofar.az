import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <a href="tel:+994515554554"
      className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full p-[2px] cursor-pointer hover:shadow-lg transition-all duration-300 relative group`}
      style={{ background: "var(--gradient-accent)" }}>
      <div className="absolute inset-[-8px] rounded-full animate-ping" style={{ border: "1px solid var(--card-hover-border)" }} />
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`} style={{ background: "var(--bg)" }}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-display font-semibold text-[14px] leading-[20px]" style={{ color: "var(--fg)" }}>{t("getStarted.line1")}</p>
          <img src={arrowUp} alt="arrow" className="w-[16px] h-[16px] object-contain ml-1 transition-transform duration-300 group-hover:rotate-45" />
        </div>
        <p className="font-display font-semibold text-[14px] leading-[20px]" style={{ color: "var(--accent)" }}>{t("getStarted.line2")}</p>
      </div>
    </a>
  );
};

export default GetStarted;
