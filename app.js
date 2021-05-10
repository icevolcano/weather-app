// http://api.weatherstack.com/current?access_key=aa5845e4e2c39639398d17c52c65b0bc&query=37.8267,-122.4233

/* console.log('Starting')
setTimeout(() => {
    console.log('2 Secpnd Timer')
},2000)
setTimeout(() => {
    console.log('0 Second Timer')
},0)
console.log('Stopping') */

//const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//const url = 'http://api.weatherstack.com/current?access_key=aa5845e4e2c39639398d17c52c65b0bc&query=37.8267,-122.4233&units=f'

/* request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
   //console.log("It is currently " + response.body.current.temperature + "degrees out. It feels like " + response.body.current.feelslike + "degress out.")
}) */

/* request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
    //console.log("It is currently " + response.body.current.temperature + "degrees out. It feels like " + response.body.current.feelslike + "degress out.")
})
 */
//
// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 9 degrees out. It feels like 5 degrees out."
// 2. Test your work

// Geoc/* oding
//  */Address -> lat/long -> Weather
//
// Goal: Print the lat/long for Los Angeles
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longtitude to the terminal
// 4. Test your work!
//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGJ5YW5nIiwiYSI6ImNrZDN3MnY2NDA5OGkyeW9keHBhanA1ZncifQ.GFqSfCEXPSkn0KwDtIb6pw&limit=1

/* const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGJ5YW5nIiwiYSI6ImNrZDN3MnY2NDA5OGkyeW9keHBhanA1ZncifQ.GFqSfCEXPSkn0KwDtIb6pw&limit=1"
request({ url: geocodeUrl, json: true }, (error, response) => {
    //   console.log(response.body)
    if (error) {
        console.log('Unable to connect to location service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find the location. Try again')
    } else {
        const latitude = response.body.features[0].center[1]
        const longtitude = response.body.features[0].center[0]
        console.log(latitude, longtitude)
    }
})
 */

//
// Goal: Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geoccode if a location was provided
// 4. Test you work with a couple locations

const address = process.argv[2]
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
