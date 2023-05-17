const request = require('request');

const breedName = process.argv[2];

if (!breedName) {
  console.log("Please provide name of breed.");
  process.exit(1);
}

// make a GET request to API endpoint
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Log the breed name and the request URL
console.log(`Breed name: ${breedName}`);
console.log(`Request URL: ${url}`);

// Make a GET request to API endpoint
request(url, (error, response, body) => {
  // If there's an error, log it and return
  if (error) {
    console.log('Error:', error);
    return;
  }

  // Parse JSON into JavaScript object
  const data = JSON.parse(body);

  // If no breed in response, log message and return
  if (data.length === 0) {
    console.log('No breed found');
    return;
  }

  // If one breed in response, log its description
  console.log(data[0].description);
});