const express = require('express');
const axios = require('axios');

const app = express();

let counter = 0;
const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    language: 'Node',
  });
});

app.get('/communicate/:q', (req, res) => {
  const { q } = req.params;

  if (q === 'python') {
    axios.default
      .get('http://localhost:3001')
      .then(value => res.send({ ...value.data, from: 'Node' }))
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
