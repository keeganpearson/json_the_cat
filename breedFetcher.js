const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // make a GET request to API endpoint
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // send HTTP request to API
  request(url, (error, response, body) => {

    // If there's an error, call callback with error, and 'null' for description
    if (error) {
      callback(error, null);
      return;
    }

    // If no error, parse JSON into JavaScript object
    const data = JSON.parse(body);

    // If data array empty (no breed found), call callback with custom error message and 'null' for description
    if (data.length === 0) {
      callback('No breed found', null);
      return;
    }

    // if breed found, call callback with 'null' for error, breed description as second argument
    callback(null, data[0].description);
  });
  
};

module.exports = { fetchBreedDescription };