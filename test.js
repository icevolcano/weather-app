// const request = require('request')
// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGJ5YW5nIiwiYSI6ImNrZDN3MnY2NDA5OGkyeW9keHBhanA1ZncifQ.GFqSfCEXPSkn0KwDtIb6pw&limit=1'

// request({url:geocodeURL,json:true},(error,response)=>{
//     const latitude =  response.body.features[0].center[1]
//     const longitude =  response.body.features[0].center[0]
//     console.log(latitude,longitude)
// })

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});