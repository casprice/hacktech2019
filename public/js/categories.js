var selected = ['false', 'false', 'false', 'false'];
  function togglePrice(index) {
      switch(index) {
        case '0':
          property = document.getElementById("cheap"); break;
        case '1':
          property = document.getElementById("medium"); break;
        case '2':
          property = document.getElementById("expensive"); break;
        case '3':
          property = document.getElementById("bougie"); break;
      }

      if (selected[index]) {
          property.style.backgroundColor = "white";
      } else {
          property.style.backgroundColor = "#55cc3b";
      }

      selected[index] = !selected[index];
  }


var categories = ['true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true']

var burgers = 0;
var breakfast = 1;
var barbeque = 2;
var chinese = 3;
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
