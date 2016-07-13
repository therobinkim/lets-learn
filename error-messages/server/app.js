const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile('./index.html', function () {
    if(err) {
      console.log('error!');
    } else {
      console.log('no error!');
    }
  });
});

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}!`);
});
