$(document).ready(function(){
    $(".hoverMario").mouseenter(function(){
        $(".turnblue").css("background-color", "#156cbf");
        $(".turnblue").css("color", "white");
    });
    $(".hoverMario").mouseleave(function(){
    	$(".turnblue").css("background-color", "#ededed");
    	$(".turnblue").css("color", "gray");
    });
});
