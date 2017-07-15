console.log(Date());

const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();
let count = 0;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  count++;
  next();
});

app.use(express.static('public'));

app.get('/api/time', (req, res) => {
  const data = `{ "time": "${Date()}" }`;
  if(req.query.callback) {
    res.end(`${req.query.callback}(${data});`);
  } else {
    res.end(data);
  }
});

app.get('/api/viewCount', (req, res) => {
  const data = `{ "viewCount": ${count} }`;
  if(req.query.callback) {
    res.end(`${req.query.callback}(${data});`);
  } else {
    res.end(data);
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`)
});
