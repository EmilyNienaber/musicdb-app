import React from 'react';
import styles from './Card.module.css'

const Card = () => {
    
    return (
      <div className={styles.body}>
        <div className={styles.bodyImg} />
        <div className={styles.infoPanel}>
          <div className={styles.titleRow}>
            <p className={styles.title}>On the low</p>
            <p className={styles.trackLength}>02:44</p>
          </div>
          <p className={styles.artist}>by Artist Name</p>
          <p className={styles.album}>Album Name</p>
        </div>
      </div>
    )
}

export default Card;