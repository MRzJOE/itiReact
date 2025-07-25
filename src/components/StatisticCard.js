import React from "react";
import styles from "./StatisticCard.module.css";

const StatisticCard = ({ value, label }) => {
  return (
    <div className={styles.card}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default StatisticCard;
