import React from 'react';
import styles from './PopularCategoriesSection.module.css';
import CategoryCard from './CategoryCard';

import mainDishImage from '../assets/images/maindish.png';
import breakfastImage from '../assets/images/breakfast.png';
import dessertImage from '../assets/images/dessert.png';
import browseAllImage from '../assets/images/browseall.png';
import breakfastFoodImage from '../assets/images/breakfastfood.png';

const categories = [
  { id: 1, name: 'Main Dish', count: '88 dishes', image: mainDishImage },
  { id: 2, name: 'Break Fast', count: '12 break fast', image: breakfastImage },
  { id: 3, name: 'Dessert', count: '48 dessert', image: dessertImage },
  { id: 4, name: 'Browse All', count: '255 items', image: browseAllImage },
  { id: 5, name: 'Breakfast Food', count: '205 items', image: breakfastFoodImage },
];

const PopularCategoriesSection = () => {
  return (
    <section className={styles.popularCategoriesSection}>
      <p className={styles.subtitle}>CUSTOMER FAVORITES</p>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            image={category.image}
            name={category.name}
            count={category.count}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCategoriesSection;