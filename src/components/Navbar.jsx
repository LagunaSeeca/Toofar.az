import React, { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";

const ease = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const languages = ["az", "en", "ru"];

  return (
    <nav
      className={`w-full flex py-4 justify-between items-center transition-all duration-500 ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* Logo — always white (logo is white SVG) */}
      <a href="#home" className="flex items-center">
        <img src={logo} alt="TOOFAR Logistics" className="xs:h-[55px] h-[38px] transition-all duration-300" />
      </a>

      {/* Desktop Nav — uses navbar text colors */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-8">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="font-body font-medium text-[14px] transition-colors duration-200"
              style={{ color: "var(--nav-text)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--nav-text-hover)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--nav-text)")}
            >
              {t(nav.titleKey)}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: Theme Toggle + Lang + CTA */}
      <div className="hidden sm:flex items-center gap-3 ml-6">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="lang-switcher">
          {languages.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`lang-btn ${i18n.language === lng ? "active" : ""}`}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>

        <a href="tel:+994515554554" className="btn-nav-cta">
          {t("nav.cta")}
        </a>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex items-center gap-2">
        <button onClick={toggleTheme} className="theme-toggle" style={{ width: 30, height: 30, fontSize: 14 }}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="lang-switcher">
          {languages.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`lang-btn ${i18n.language === lng ? "active" : ""}`}
              style={{ padding: "4px 7px", fontSize: "10px" }}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer opacity-80 invert"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* Mobile Dropdown — uses page colors, not nav colors */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease }}
            className="p-6 absolute top-[70px] right-4 left-4 rounded-2xl sidebar sm:hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-elegant)",
            }}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="font-body font-medium text-[15px] transition-colors"
                    style={{ color: "var(--muted)" }}
                    onClick={() => setToggle(false)}
                  >
                    {t(nav.titleKey)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:+994515554554"
              className="btn-pill btn-pill-accent text-[13px] py-2.5 px-5 mt-4 w-full justify-center"
            >
              {t("nav.cta")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
