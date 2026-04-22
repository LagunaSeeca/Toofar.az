import { clients } from "../constants";
import styles from "../style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = { dots: !isSmallScreen, infinite: true, speed: 300, slidesToShow: isSmallScreen ? 2 : 6, slidesToScroll: isSmallScreen ? 1 : 2, autoplay: true, autoplaySpeed: 2000 };

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="clients" className="logo-container py-8">
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 items-center`}>
            <img src={client.logo} alt={client.id}
              className={`${isSmallScreen ? "sm:w-[120px]" : "sm:w-[192px]"} w-[100px] object-contain opacity-40 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-400`} />
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Clients;
