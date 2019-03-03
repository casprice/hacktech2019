let socket = io();

socket.on('connect', function () {
  console.log("connected to server");
});

socket.on('disconnect', function () {
  console.log("disconnected from server");
})

socket.on('newMessage', function (message) {
  console.log("newMessage", message);
  let li = document.createElement('li');
  li.innerText = `${message.from}: ${message.text}`
  document.querySelector('body').appendChild(li);
})

// prevents refresh of page after submit, and prevents message from appearing in the URL
document.querySelector('#submit-btn').addEventListener('click', function(e) {
  e.preventDefault();

  socket.emit("createMessage", {
    from: 'User',
    text: document.querySelector('input[name="city"]').value;
  }, function () )
})
