const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("All is Well. Babude");
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Wazzappppp");
});