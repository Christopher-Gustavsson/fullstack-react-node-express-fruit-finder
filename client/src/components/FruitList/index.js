import React, { Fragment } from 'react';
import FruitCard from '../FruitCard';
import styles from './styles.scss';
import { arrayOf, number, string, shape } from 'prop-types';

const FruitList = props => {
  const { fruitData } = props;
  return(
    <Fragment>
      <div className={styles['fruit-list-container']}>
        {fruitData.map(fruit => 
          <FruitCard 
            key={fruit.id} 
            name={fruit.name}
            weight={fruit.weight}
            pictureUrl={fruit.pictureUrl}
          />)}
        </div>
        
        {// Ideally I would use lodash's get method to get the id
          fruitData[0] &&
          !fruitData[0].id &&
          <div className={styles['no-data-found-text']}>
            Sorry, no data was found for that fruit. Please try another one.
          </div>
        } 
    </Fragment>
  );
}

FruitList.propTypes = {
  fruitData: arrayOf(shape({
    id: number,
    name: string,
    pictureUrl: string,
    weight: string
  }))
}

export default FruitList;
