

import React from 'react';
import styles from '../styles/Btn.module.css'

interface ButtonProps {
  // onClick: () => void; 
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ( {children }) => {
  return (
    <button 
      // onClick={onClick} 
      className={styles.btn} 
    >
    <div className={styles.txt}>
        {children}
    </div>
    </button>
  );
};

export default Button;
