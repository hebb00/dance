import React from "react";
import Image from "next/image";
import styles from "../styles/AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUsSection}>
        <Image
          src="/assets/aboutUs.svg" 
          alt="About Us"
          width={500}
          height={600}
          className={styles.image}
        />
      <div className={styles.textContainer}>
        <div className={styles.logo}>
          <Image
            src="/assets/about.svg" 
            alt="Logo Icon"
            width={90}
            height={80}
          />
           
        </div>
        <div>
          <h2 className={styles.title}>ABOUT US</h2>
        <p className={styles.description}>
          We organize shows, events, and parties for all kinds of occasions.
        </p>
        </div>
       
      </div>
    </section>
  );
};

export default AboutUs;
