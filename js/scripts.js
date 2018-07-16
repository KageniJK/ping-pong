// Front end
$(document).ready(function() {
  $(".input form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#num").val());
    $(".outList").empty();
    if (Number.isInteger(number) && number>0){
    pingPong(number);
  } else {
    alert("Please enter a positive number");
  }
  });
});


// Back end Logic
function pingPong(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        $("ul.outList").append("<li>" + "ping-pong" + "</li>");
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
