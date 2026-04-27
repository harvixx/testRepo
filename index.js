const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello'); // Yeh browser par dikhega
});

app.listen(3000, () => console.log('Server is up!'));