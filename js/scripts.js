// Front end
$(document).ready(function(){

$(".input form").submit(function(event){
  event.preventDefault();
  var number = parseInt($("input#num").val());
  $("ul.output").text("<li>"+"test"+"</li>");

});

});


// Back end Logic
var result;
function pingpong(x){
  for (i=1;i<=x;i++){
    if(i%3===0){
      result = "ping";
      //return result;
    }
    else if (i%5===0){
      result = "pong";
      //return result;
    }
    else if (i%3===0 && num%5===0){
      result = "pingPong";
      //return result
    }
    else {
      result = i;
    };

  }
  return result;
}
