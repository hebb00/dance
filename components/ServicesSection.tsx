import React from "react";
import Image from "next/image";
import styles from "../styles/ServicesSection.module.css";

const services = [
  {
    title: "Theater Dance",
    imgSrc: "/assets/service1.jpg",
    size: "large",
  },
  {
    title: "Dance Entertainment",
    imgSrc: "/assets/service2.jpg",
     size: "medium",
  },
  {
    title: "Kids Shows",
    imgSrc: "/assets/service3.jpg",
    size: "small",
  },
  {
    title: "Wedding Services",
    imgSrc: "/assets/service4.jpg",
    size: "large",
    
  },
  {
    title: "Festivals Events",
    imgSrc: "/assets/service5.jpg",
     size: "medium",
  },
];

const OurServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>OUR SERVICES</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceCard} ${styles[service.size]}`}
          >
            <Image
              src={service.imgSrc}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <p className={styles.serviceTitle}>{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;

