const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get('/', (req, res) => {
  res.send('hello'); // Yeh browser par dikhega
});
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
app.listen(3000, () => console.log('Server is up!'));