// Front end
$(document).ready(function() {

  $(".input form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#num").val());
    $(".outList").empty();
    pingpong(number);
    // console.log(results);
    // results.forEach(function(result) {
    //   $("ul.outList").append("<li>" + result + "</li>");
    // });



  });

});


// Back end Logic
//var results = [];

function pingpong(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        $("ul.outList").append("<li>" + "ping-pong" + "</li>");;
      } else {
        $("ul.outList").append("<li>" + "ping" + "</li>");
      }
    } else if (i % 5 === 0) {
      $("ul.outList").append("<li>" + "pong" + "</li>");
    } else {
      $("ul.outList").append("<li>" + i + "</li>");
    };
  }
}
