import styles from "../styles/Btn.module.css";
import { motion } from "framer-motion"
const Btn = ({text}:any) => {
    return (
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
            {text}
        </motion.button>
    )
};
export default Btn;