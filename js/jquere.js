$("#img-card1").mouseenter(function(){
  $("#img-card1").addClass("zoom");
}).mouseleave(function(){
  $("#img-card1").removeClass("zoom");
});
$("#img-card2").mouseenter(function(){
  $("#img-card2").addClass("zoom");
}).mouseleave(function(){
  $("#img-card2").removeClass("zoom");
});
$("#img-card3").mouseenter(function(){
  $("#img-card3").addClass("zoom");
}).mouseleave(function(){
  $("#img-card3").removeClass("zoom");
});
$("#img-card4").mouseenter(function(){
  $("#img-card4").addClass("zoom");
}).mouseleave(function(){
  $("#img-card4").removeClass("zoom");
});


$("#link1").click(function(){
  $("#info1").toggle();
  document.getElementById("link1").innerHTML = "Click to see less"
});
$("#link2").click(function(){
  $("#info2").toggle();
  document.getElementById("link2").innerHTML = "Click to see less"
});
$("#link3").click(function(){
  $("#info3").toggle();
  document.getElementById("link3").innerHTML = "Click to see less"
});
$("#link4").click(function(){
  $("#info4").toggle();
  document.getElementById("link4").innerHTML = "Click to see less"
});
