import React, { useState } from 'react';
import styles from './Button.module.css';
import Confetti from 'react-confetti';

const Button = () => {
  const [confettiVisible, setConfettiVisible] = useState(false);

  const actionCut = async () => {
    setConfettiVisible(true);

    setTimeout(() => {
      setConfettiVisible(false);
    }, 7000);
    
    try {
      const response = await fetch('http://192.168.43.2/run');
      if (response.ok) {
        console.log('Light toggled successfully!');
      } else {
        console.error('Failed to toggle light:', response.statusText);
      }
    } catch (error) {
      console.error('Error while toggling light:', error);
    }
  };

  return (
    <div className={styles.container}>
      {confettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <button className={styles.buttonPushable} role="button" onClick={actionCut}>
        <span className={styles.buttonShadow}></span>
        <span className={styles.buttonEdge}></span>
        <span className={styles.buttonFront}>
          CUT
        </span>
      </button>
    </div>
  );
}

export default Button;
