const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/goodbye', (req, res) => {
  res.send('qwerty!');
});

app.get('/vasyok', (req, res) => {
  res.send('da!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});