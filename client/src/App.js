import React, { useState } from 'react';
import FruitInput from './components/FruitInput';
import FruitList from './components/FruitList';

const App = () => {
  const [ fruitData, setFruitData ] = useState([]);
  return (
    <div>
      <FruitInput setFruitData={setFruitData} />
      <FruitList fruitData={fruitData}/>
    </div>
  );
}

export default App;
