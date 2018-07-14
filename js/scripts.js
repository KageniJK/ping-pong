// Front end
$(document).ready(function() {

  $(".input form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#num").val());
    pingpong(number);
    results.forEach(function(result) {
      $("ul#outList").append("<li>" + result + "</li>");
    });

  });

});


// Back end Logic
var results = [];

function pingpong(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      if (i % 15 === 0) {
        results.push("Ping-Pong");
      } else {
        results.push("Ping");
      }
    } else if (i % 5 === 0) {
      results.push("Pong");
    } else {
      results.push(i);
    };
  }
}
