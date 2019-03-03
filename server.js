// https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

// https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js

// for setting up web framework and running a web server
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

// yelp api
const yelp = require('yelp-fusion')
const request = require('request')
<<<<<<< HEAD

// private api key
=======
>>>>>>> 9e6af23cebcdccf791d3302b7d946013927129f0
const config = require('./config.json');
const apiKey = config.yelpApi;
const client = yelp.client(apiKey);
var index = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// default render of index.html
app.get('/', function (req, res) {
  res.render('index');
})

// render index.html with city
app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `https://api.yelp.com/v3`;
  let loc = String(req.body.city);
  res.render('index');

  const searchRequest = {
    //term: 'Four Barrel Coffee',
    location: loc,
  }

  console.log()
  console.log("==== new restaurant ====")
  console.log("city = " + city);


  // collect data from the search result
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[index++];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    let data = JSON.parse(prettyJson);
    let name = data['name'];
    let image_url = data['image_url'];
    let is_closed = data['is_closed'];
    let yelp_url = data['url'];
    let categories = data.categories;
    let rating = data['rating'];
    let price = data['price'];
    let address = data.location.display_address;
    let phone_num = data['display_phone']
    console.log("name = " + name);
    console.log("image url = " + image_url);
    console.log("is closed = " + is_closed);
    console.log("yelp url = " + yelp_url);

    for (index in categories) {
      console.log("categoryattempt = " + categories[index].title);
    }

    console.log("rating = " + rating);
    console.log("price = " + price);
    console.log("address = " + address);
    console.log("phone num = " + phone_num)
  }). catch(e => {
    console.log(e);
  });

})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
