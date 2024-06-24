const axios = require('axios');
require('dotenv').config();
let apiKey = process.env.API_KEY;

let getCoordinates = async(cityName, apiKey) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
        if (response.data.length > 0) {
            const { lat, lon } = response.data[0];

            return { lat, lon };
        } else {
            console.log('City not found');
        }
    } catch (error) {
        throw new Error(`Error fetching coordinates: ${error.message}`);
    }
}
let getParams = async(lat, lon, apiKey) => {
    try {
        //let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=metric&appid=${apiKey}'
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid={API key}`);
        console.log('Response is ' + response.data);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching weather: ${error.message}`);
    }
}

exports.getWeather = async (req, res) => {
    const cityName = req.params.cityName;
    try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`);
        res.status(200).json({
            status: 'OK',
            data: result.data
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
