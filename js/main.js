//	SCROLL-TOP NAVIGATION
$( document ).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 270) {
            $(".navigation").addClass("color__fill");
            $(".menu__btn").addClass("color__fill");
        }
        else{
        	$(".navigation").removeClass("color__fill");
        	$(".menu__btn").removeClass("color__fill");
        }
    }); 
}); 

//  MOBILE NAVIGATION

$( document ).ready(function() {
    $('.menu__btn').click(function() {
	    $('span').toggleClass('animate');
	    $('nav ul').toggleClass('open');
	    $(".navigation").addClass("color__fill");
	});
});
