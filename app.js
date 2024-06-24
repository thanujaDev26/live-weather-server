let express = require('express');
let cors = require('cors');
let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

let weatherRouter = require('./Routers/weatherRouter')


app.use('/api/v1', weatherRouter);

module.exports = app;
