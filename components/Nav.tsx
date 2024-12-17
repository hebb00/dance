import React from 'react';
import styles from '../styles/Nav.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Nav: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <a href="/">
                <img height={40}  src='assets/logo.png'/>
                </a>
            </div>

            <div className={styles.navbarRight}>
                <ul className={styles.navbarLinks}>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#work">Our Work</a></li>
                </ul>

                <div className={styles.navbarIcons}>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

