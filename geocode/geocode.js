const r_request = require('request');

module.exports.geocodeAddress = (address, callback) => {

  r_request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Error: Unable to connect to Google servers');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
     else {
      callback(`Error: Google did not give us what we want :c: \b status: ${body.status}`);
    }
  });
};

/*console.log(`Address: ${body.results[0].formatted_address}`);
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);*/
