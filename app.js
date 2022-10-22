const express = require('express');
const cors = require('cors')

const apiRoutes = require('./src/routes/mainRouter');

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRoutes );

app.listen(port, () => {
  console.log(`Conservation Heroes is listening at http://localhost:${port}/api`);
})
