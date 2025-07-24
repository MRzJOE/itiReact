import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ image, name, count }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.count}>{count}</p>
    </div>
  );
};

export default CategoryCard;