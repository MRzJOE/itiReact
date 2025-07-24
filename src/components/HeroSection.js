import React from 'react';
import styles from './HeroSection.module.css';
import roastTurkeyImage from '../assets/images/Turkey.png';

const HeroSection = () => {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${roastTurkeyImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
      </div>
    </section>
  );
};

export default HeroSection;