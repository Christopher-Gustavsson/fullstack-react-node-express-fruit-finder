import React, { useState } from 'react';
import styles from './styles.scss';
import { func } from 'prop-types';

// Promise syntax
// const fetchFruitData = (fruitName, setFruitData) => event => {
//   event.preventDefault();
//   fetch(`http://localhost:8000/api/fruit/${fruitName}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//     .then(res => {
//       const fruitData = res.data;
//       setFruitData(fruitData);
//     })
// }

// Async await syntax
// Ideally make fetch request outside of the component, in a redux-thunk or redux-saga for example.
const fetchFruitData = (fruitName, setFruitData) => async event => {
  event.preventDefault();
  try {
    let response = await fetch(`http://localhost:8000/api/fruit/${fruitName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    const fruitData = response.data;
    if(!fruitData.length){
      throw new Error(`there was no data for ${fruitName}`)
    }
    setFruitData(fruitData);
    
  } catch(error) {
    console.log("there was an error fetching fruit data:", error);
  }
}

const onChange = setterFunction => event => {
  event.preventDefault();
  setterFunction(event.target.value);
}

const FruitInput = props => {
  const [ inputVal, setInputVal ] = useState('');
  const { setFruitData } = props;
  return(
    <div className={styles['fruit-input-container']}>
      <form onSubmit={fetchFruitData(inputVal, setFruitData)}> 
        <div className={styles['title']}>
          Search a fruit
        </div>
        <input 
          id="fruit"
          placeholder="Enter a fruit"
          value={inputVal}
          onChange={onChange(setInputVal)}
        />
        <div className={styles['button-container']}>
          <button className={styles['button']}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

FruitInput.propTypes = {
  setFruitData: func
};

export default FruitInput;
