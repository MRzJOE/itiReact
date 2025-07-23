import React from 'react';
import styles from './StatisticCard.module.css';

const StatisticCard = ({ value, label }) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatisticCard;