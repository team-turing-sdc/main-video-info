const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;


app.use(express.static('client/dist'))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})