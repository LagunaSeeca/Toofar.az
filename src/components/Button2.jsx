import React from "react";
import { useTranslation } from "react-i18next";

const Button2 = ({ styles }) => {
  const { t } = useTranslation();
  return (
    <a href="https://play.google.com/store/apps/details?id=com.app.too_far_logistics" target="_blank" rel="noopener noreferrer"
      className={`btn-pill btn-pill-secondary group ${styles}`}>
      {t("cta.getApp")}
      <span className="transition-transform duration-300 group-hover:rotate-45">→</span>
    </a>
  );
};

export default Button2;
