import Image from "next/image";
import styles from "../styles/HeroSection.module.css";
import {motion} from "framer-motion"
import Btn from "./Btn";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          International shows for all kinds of events!
        </h1>
        <Btn text={'Book Now'}/>
      </div>
      <Image
        src="/assets/hero.png" // Replace with the actual path to your image
        alt="International Shows"
        layout="fill"
        objectFit="cover"
        className={styles.image}
      />
    </section>
  );
};

export default HeroSection;
