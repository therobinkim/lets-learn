const path = require('path');
const express = require('express');
// const express = require('./express');
const bodyParser = require('body-parser');
const PORT = 8542;

const app = express();
const cats = [{
  name: 'floofy',
  color: 'spotted',
  personality: 'horrible'
}];

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

app.get('/api/cats/', (req, res) => {
  res.json(cats);
});

app.post('/api/cats', (req, res) => {
  const newCat = {
    name: req.body.name,
    color: req.body.color,
    personality: req.body.personality
  };
  cats.push(newCat);
  res.json(newCat);
})

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
