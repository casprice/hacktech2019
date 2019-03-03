// https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

// https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const yelp = require('yelp-fusion')
const request = require('request')
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

  console.log("city = " + city);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    let data = JSON.parse(prettyJson);
    let name = data['name'];
    let image_url = data['image_url'];
    let is_closed = data['is_closed'];
    let yelp_url = data['url'];
    //let categories = data.categories.title;
    let rating = data['rating'];
    let price = data['price'];
    let address = data.location.display_address;
    let phone_num = data['display_phone']
    console.log("name = " + name);
    console.log("image url = " + image_url);
    console.log("is closed = " + is_closed);
    console.log("yelp url = " + yelp_url);
    //console.log("categories = " + categories);
    console.log("rating = " + rating);
    console.log("price = " + price);
    console.log("address = " + address);
    console.log("phone num = " + phone_num)
  }). catch(e => {
    console.log(e);
  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
