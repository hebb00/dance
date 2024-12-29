import React from "react";
import styles from "../styles/ContactUs.module.css";
import Image from "next/image";
const ContactUs: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.infoContainer}>
                <div className={styles.logo}>
                    <Image
                        src="/assets/contact.svg"
                        alt="Logo Icon"
                        width={90}
                        height={80}
                    />
                </div>
                <div>
                    <h1 className={styles.title}>CONTACT US</h1>
                    <ul className={styles.contactList}>
                        <li>
                            <span className={styles.icon}>📍</span> Riyadh, Saudi Arabia 11754
                        </li>
                        <li>
                            <span className={styles.icon}>📞</span> +966564420024
                        </li>
                        <li>
                            <span className={styles.icon}>📧</span> INFOTEAM@DANCEKSA.COM
                        </li>
                    </ul>
                </div>

            </div>
            <div className={styles.imageContainer}>
                <Image
                    alt="contact us"
                    src={"/assets/contactUs.svg"}
                    width={400}
                    height={500} />
            </div>
        </section >
    );
};

export default ContactUs;
