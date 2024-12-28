import styles from "../styles/Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <a href="#work" className={styles.link}>
                    Our Work
                </a>
                <a href="#services" className={styles.link}>
                    Our Services
                </a>
                <a href="#about" className={styles.link}>
                    About Us
                </a>
                <a href="#contact" className={styles.link}>
                    Contact Us
                </a>
            </nav>
            <div className={styles.socialIcons}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles.icon} />
                </a>
            </div>
            <div className={styles.logo}>
                <a href="/">
                    <img height={40} src='assets/logo.png' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
