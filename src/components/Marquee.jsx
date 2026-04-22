import React from "react";
import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  const items = t("marquee.items", { returnObjects: true });
  const doubled = [...items, ...items];

  return (
    <div className="marquee-container py-8 my-8" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={index} className="flex items-center gap-4 px-6 whitespace-nowrap">
            <span className="font-display font-semibold text-[18px] sm:text-[22px] transition-colors duration-300 cursor-default"
              style={{ color: "var(--fg)", opacity: 0.7 }}
              onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
              onMouseLeave={(e) => e.target.style.color = "var(--fg)"}>
              {item}
            </span>
            <span style={{ color: "var(--accent)" }} className="text-[14px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
