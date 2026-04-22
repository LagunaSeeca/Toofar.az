import React from "react";
import { logo } from "../assets";
import { socialMedia } from "../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 flex justify-between items-center md:flex-row flex-col gap-6">
      <div className="flex items-center gap-4">
        <img src={logo} alt="TOOFAR Logistics" className="h-[40px] object-contain opacity-80" />
      </div>
      <div className="flex items-center gap-6 md:flex-row flex-col">
        <p className="font-body font-normal text-[13px]" style={{ color: "var(--footer-text)" }}>{t("footer.copyright")}</p>
        <div className="flex gap-3">
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; }}>
              <img src={social.icon} alt={social.id} className="w-[14px] h-[14px] object-contain invert opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
