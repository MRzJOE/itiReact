import React from "react";
import styles from "./AboutUsPage.module.css";
import StatisticCard from "../components/StatisticCard";
import FeatureCard from "../components/FeatureCard";

import aboutImage from "../assets/0.png";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={styles.sectionTitle}>About The Carrot</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis,
            ratione, repudiandae necessitatibus quasi incidunt iste
            adipisci,porro! Lorem iusto beatae doloribus assumenda rerum quasi
            fugiat.Maiores, placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            magnam omnis ducimus dolorum architecto. Ipsum deleniti expedita
            similique incidunt voluptatum eius perferendis amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime amet architecto eo exercitationem optio ea
            maiores corporis beatae, doloris doloribus itaque sunt officia
            dolores deserunt adipisci voluptatum magni sunt aed blanditiis quid
            aspernatur iusto?
          </p>

          <div className={styles.statistics}>
            <StatisticCard value="0.1K" label="Vendors" />
            <StatisticCard value="23K" label="Customers" />
            <StatisticCard value="2K" label="Products" />
          </div>
        </div>
        <div className={styles.aboutImageContainer && "p-2"}>
          <img
            src={aboutImage}
            alt="Assortment of fresh vegetables"
            className={styles.aboutImage && "p-0"}
          />
        </div>
      </section>

      <section className={styles.featuresSection}>
        <FeatureCard
          title="Product Packing"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <FeatureCard
          title="24X7 Support"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <FeatureCard
          title="Delivery In 5 Days"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <FeatureCard
          title="Payment Secure"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
      </section>
    </div>
  );
};

export default AboutUsPage;
