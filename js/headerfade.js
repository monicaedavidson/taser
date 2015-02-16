var opacity = 1;
var lastScrollTop = 0;
    $(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0) {
    $('#headerFade').css('opacity','2');
    opacity = 2;
    }
    if (opacity > 0.5 && (st > lastScrollTop)){
    $('#headerFade').css('opacity','-=0.01');
    opacity -= 0.01;
    }
    else if(opacity < 1)
    {
    $('#headerFade').css('opacity','+=0.01');
    opacity += 0.01;
    }
lastScrollTop = st;
});
