let controller = require('../Controllers/weatherController');
let app = require('../app');
let express = require('express');


let Router = express.Router();

Router.route('/weather/:cityName')
    .get(controller.getWeather)

module.exports = Router;