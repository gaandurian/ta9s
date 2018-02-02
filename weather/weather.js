const r_request = require('request');

const apikey = 'bb6456c8c0ebbd645c7d31ce6557eb4e';

let getWeather = (latitude, longitude, callback) => {
  r_request({
    url: `https://api.darksky.net/forecast/${apikey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200)
      callback(undefined, {
        currentTemp: body.currently.temperature,
        feelsTemp: body.currently.apparentTemperature,
        icon: body.currently.icon
      });
    else {
      callback('Error: Could not fetch weather data from the darksky servers');
    }
  })
}

module.exports.getWeather = getWeather;
