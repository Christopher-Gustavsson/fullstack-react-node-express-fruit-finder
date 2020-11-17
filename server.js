const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/images', express.static('images'));
const mockData = require(`${__dirname}/mock-data.js`);
const PORT = 8000;


app.get('/api/fruit/:fruitName', (req, res) => {
  const { fruitList } = mockData;
  const fruitName = req.params.fruitName.toLowerCase();
  
  const fruitData = fruitList.filter(fruit => {
    if (fruit.name.toLowerCase() === fruitName){
      fruit.pictureUrl = `http://localhost:${PORT}/images/${fruitName}.jpg`;
      return fruit;
    }
  })
  
  if(!fruitData.length){
    res.status(200).send({
      data: [{
        id: null,
        name: null,
        weight: null,
        pictureUrl: 'http://localhost:8000/images/no_data.png'
      }],
      errorMessage: `no data found for ${fruitName}`,
    })
    return;
  }

  res.status(200).send({
    data: fruitData,
    errorMessage: ''
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})