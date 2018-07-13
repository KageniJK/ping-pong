// Front end
$(document).ready(function() {

  $(".input form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#num").val());
    pingpong(number);
    results.forEach(function(result){
      $("ul#outList").append("<li>"+result+"</li>");
    });


    //$(".output").text("test");

  });

});


// Back end Logic
var results =[];
function pingpong(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      if (i % 15 === 0) {
        //console.log("pingpong")
        results.push("Ping-Pong");
        //return result
      } else {
        //console.log("ping")
        results.push("Ping");
        //return result;
      }
    } else if (i % 5 === 0) {
      //console.log("pong")
      results.push("Pong");
      //return result;
    } else {
      //console.log(i);
      results.push(i);
    };

  }

}
