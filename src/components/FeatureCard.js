import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconPlaceholder}></div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;