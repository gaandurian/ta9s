const r_yargs = require('yargs');

const r_geocode = require('./geocode/geocode.js');
const r_weather = require('./weather/weather.js');

let argv = r_yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;

r_geocode.geocodeAddress(argv.address, (errMessage, results) => {
  if (errMessage) {
    console.log(errMessage);
  } else {
    r_weather.getWeather(results.latitude, results.longitude, (errMessage, weatherResults) => {
      if (errMessage) {
        console.log(errMessage);
      } else {
        console.log(`It is ${weatherResults.icon} in ${results.address} \nthe temperature ${weatherResults.currentTemp}F\nit feels like ${weatherResults.feelsTemp}F`);
      }
    });

  }
});
