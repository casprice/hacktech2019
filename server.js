// https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

// https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const yelp = require('yelp-fusion')
const config = require('./config.json');
const apiKey = config.yelpApi;
const client = yelp.client(apiKey);

var loc = null;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `https://api.yelp.com/v3`;
  let loc = String(req.body.city);
  res.render('index');
  const searchRequest = {
    //term: 'Four Barrel Coffee',
    location: loc,
    //location: 'san francisco, ca'
  }

  console.log("city = " + req.body.city);
  console.log("searchRequest = " + searchRequest);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log("prettyJson = " + prettyJson);
  }). catch(e => {
    console.log(e);
  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
