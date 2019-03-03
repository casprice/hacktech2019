socket = io();

socket.on('connect', function () {
  console.log("connected to server");
});

socket.on('disconnect', function () {
  console.log("disconnected from server");
})

socket.on('restaurant_data', function (data) {

  let name = `${data.name}`;
  console.log("====NAME===== " + name);
  //document.querySelector("nameID").appendChild() = name;
  let image_url = data.image_url;
  let is_closed = data.is_closed;
  let yelp_url = data.yelp_url;
  let categories = "";

  for (index in data.categories) {
    categories = categories.concat(data.categories[index].title);
    categories = categories.concat("   ");
  }

  let rating = data.rating;
  let price = data.price;
  let address = data.address;
  let phone_num = data.phone_num;
  //li.innerText = `${message.from}: ${message.text}`
  //document.querySelector('body').appendChild(li);
})

// prevents refresh of page after submit, and prevents message from appearing in the URL
document.querySelector('#submit-btn').addEventListener('click', function(e) {
  e.preventDefault();

  //socket.emit("createMessage", {
  //  from: 'User',
  //  text: document.querySelector('input[name="city"]').value
  //}, function () )
})
