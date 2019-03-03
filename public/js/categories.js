
// ----------   $       $$     $$$  ------ //
var prices = ['true', 'true', 'true'];

function togglePrice(index) {
  prices[index] = !prices[index];
}

var categories = ['true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true']

var burgers = 0;
var breakfast_brunch = 1;
var barbeque = 2;
var deli = 3;
var italian = 4;
var japanese = 5;
var korean = 6;
var mexican = 7;
var sandwiches = 8;
var pizza = 9;
var thai = 10;
var seafood = 11;
var fast_food = 12;

function toggleCategory(index) {
  categories[index] = !categories[index];
}
