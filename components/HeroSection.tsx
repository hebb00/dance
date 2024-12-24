import Image from "next/image";
import styles from "../styles/HeroSection.module.css";
import {motion} from "framer-motion"
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          International shows for all kinds of events!
        </h1>
            <motion.button
            whileTap={{ scale: 0.95 }} 
            className={styles.button}
            whileHover={{
                scale: 1.05,
                background: [
                    'linear-gradient(91.66deg, #D3297B 10.32%, #479ED6 85.75%)', // Original gradient
                    'linear-gradient(92.66deg, #479ED6 10.32%, #D3297B 85.75%)', // Reversed gradient
                ],
                transition: { duration: 0.7 },
            }}
        >
             Book Now
        </motion.button>
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
