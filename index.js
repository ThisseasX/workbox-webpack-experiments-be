const express = require('express');
const cors = require('cors');

express()
  .use(cors({ origin: 'http://localhost:3000' }))
  .get('/some-data', async (req, res) => {
    res.json({ name: 'Some Data' });
  })
  .listen(4000);
