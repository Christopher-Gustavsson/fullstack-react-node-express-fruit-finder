import React from 'react';
import styles from './styles.scss';

const FruitCard = props => {
  return(
    <div className={styles['card']}>
      <img
        className={styles['image']}
        alt="fruit"
        src={props.pictureUrl}
      />
      <div className={styles['center-text']}>
        Name: {props.name || 'No Data'}
      </div>
      <div className={styles['center-text']}>
        Weight: {props.weight || 'No Data'}
      </div>
    </div>
  );
}

export default FruitCard;
