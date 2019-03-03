var selected = ['false', 'false', 'false', 'false'];

function togglePrice(index) {
  console.log(`inside togglePrice, ${index}`);
  debugger
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

function toggleCategory(index) {
    switch(index) {
      case '0':
        property = document.getElementById("burgers"); break;
      case '1':
        property = document.getElementById("fast_food"); break;
      case '2':
        property = document.getElementById("breakfast"); break;
      case '3':
        property = document.getElementById("barbeque"); break;
      case '4':
        property = document.getElementById("chinese"); break;
      case '5':
        property = document.getElementById("italian"); break;
      case '6':
        property = document.getElementById("japanese"); break;
      case '7':
        property = document.getElementById("korean"); break;
      case '8':
        property = document.getElementById("mexican"); break;
      case '9':
        property = document.getElementById("sandwiches"); break;
      case '10':
        property = document.getElementById("pizza"); break;
      case '11':
        property = document.getElementById("thai"); break;
      case '12':
        property = document.getElementById("seafood"); break;
      case '13':
        property = document.getElementById("indian"); break;
    }

    if (categories[index]) {
        property.style.backgroundColor = "white";
    } else {
        property.style.backgroundColor = "#ed3654";
    }

    categories[index] = !categories[index];
}
