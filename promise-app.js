const r_yargs = require('yargs');
const r_axios = require('axios');
const r_express = require('express');

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
