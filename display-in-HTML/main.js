var time = 0;

const timer = setInterval(function () {
  time += 1;
  //  document.write(`<ul><li>${time} seconds</li></ul>`);
  document.getElementById("number").innerHTML = time;
}, 1000);
