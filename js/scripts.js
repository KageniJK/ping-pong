// Front end
$(document).ready(function() {

  $(".input form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#num").val());
    
    //$(".output").text("test");

  });

});


// Back end Logic
var result =[];
function pingpong(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      if (i % 15 === 0) {
        //console.log("pingpong")
        result.push("pingPong");
        //return result
      } else {
        //console.log("ping")
        result.push("ping");
        //return result;
      }
    } else if (i % 5 === 0) {
      //console.log("pong")
      result.push("pong");
      //return result;
    } else {
      //console.log(i);
      result.push(i);
    };
  }

}
