import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const Stats = () => {
  const { t } = useTranslation();
  const allStats = [...stats, { id: "stats-4", titleKey: "stats.experience", value: "3+" }];

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {allStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            className="glass rounded-2xl p-6 text-center"
          >
            <h4 className="font-display font-bold text-[36px] sm:text-[44px] leading-none mb-2" style={{ color: "var(--accent)" }}>
              {stat.value}
            </h4>
            <p className="font-body font-medium text-[13px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
              {t(stat.titleKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
