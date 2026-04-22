import React, { useState, useRef, useEffect } from "react";
import { images } from "../constants";
import styles, { layout } from "../style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const Showcase = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => { setIsSmallScreen(window.innerWidth < 768); setCurrentSlide(0); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checklist = t("showcase.checklist", { returnObjects: true });

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    centerMode: true,
    centerPadding: isSmallScreen ? "20px" : "0px",
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: !isSmallScreen,
  };

  return (
    <section id="about" className={`${styles.paddingY}`}>
      {/* About: 50/50 split */}
      <div className="flex md:flex-row flex-col gap-12 mb-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={images[0]?.logo} alt="TOO FAR Logistics" className="w-full h-[400px] object-cover" style={{ opacity: "var(--img-opacity)" }} />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 sm:right-6 sm:bottom-6 glass-accent rounded-2xl px-5 py-3">
            <p className="font-display font-bold text-[20px]" style={{ color: "var(--accent)" }}>{t("showcase.badge")}</p>
          </motion.div>
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ background: "var(--accent)" }} />
              <span className="w-2 h-2 rounded-full absolute" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-[11px] ml-2" style={{ color: "var(--accent)" }}>{checklist[checklist.length - 1]}</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease }} className="md:w-1/2 flex flex-col justify-center">
          <p className="eyebrow mb-4">{t("showcase.eyebrow")}</p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-tighter leading-[1.1] mb-6" style={{ color: "var(--fg)" }}>{t("showcase.heading")}</h2>
          <p className="font-body text-[15px] leading-[26px] mb-8" style={{ color: "var(--muted)" }}>{t("showcase.description")}</p>
          <div className="space-y-3">
            {checklist.slice(0, -1).map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.08, ease }} className="flex items-center gap-3 group cursor-default">
                <div className="w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300"
                  style={{ border: "1px solid var(--border-color)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.querySelector("span").style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.querySelector("span").style.color = "transparent"; }}>
                  <span className="text-[12px] font-bold transition-colors duration-300" style={{ color: "transparent" }}>✓</span>
                </div>
                <span className="font-body text-[15px] transition-colors duration-300" style={{ color: "var(--fg)", opacity: 0.8 }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Redesigned Photo Gallery */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
        <div className="gallery-section">
          <Slider
            {...gallerySettings}
            beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
            ref={sliderRef}
          >
            {images.map((image, index) => (
              <div key={image.id} className="px-2 cursor-pointer" onClick={() => sliderRef.current?.slickGoTo(index)}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image.logo}
                    alt="TOO FAR operations"
                    className="w-full h-[280px] sm:h-[340px] object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
