$(".img-card1").mouseenter(function(){
  $(".img-card1").toggleClass("zoom");
});
$("#img2").mouseenter(function(){
  $("#img2").addClass("zoom");
}).mouseleave(function(){
	$("#img2").removeClass("zoom");
});
$("#img3").mouseenter(function(){
  $("#img3").addClass("zoom");
}).mouseleave(function(){
	$("#img3").removeClass("zoom");
});
$("#img4").mouseenter(function(){
  $("#img4").addClass("zoom");
}).mouseleave(function(){
	$("#img4").removeClass("zoom");
});

$("#link1").click(function(){
  $("#info1").show();
});
$("#link2").click(function(){
  $("#info2").show();
});
$("#link3").click(function(){
  $("#info3").show();
});
$("#link4").click(function(){
  $("#info4").show();
});
