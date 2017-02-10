$(function(){
    $('.navbar-toggle').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
  $('body').toggleClass('active');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
        $(".description-page").each(function(i){
    if($(this).hasClass('open')){
     $(".nav-trigger").addClass('close');
    }
   })
    });
});

$(function(){
    $('.nav-drawer-home').click(function(){
		 $('.navbar-toggle').toggleClass('navbar-on');
		  $('.navbar-toggle').removeClass('close');
		$('body').removeClass('active');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
    });
});


$(".basic-more").click(function () {
    $(".what-is").addClass('open');
	 $(".nav-trigger").addClass('close');
});
if ( $('.what-is').hasClass('open') ) {
    $("html").click(function () {
        $(".what-is").removeClass('open');
    });
}

$(".services").click(function () {
    $(".services-p").addClass('open');
	 $(".nav-trigger").addClass('close');
});
if ( $('.services-p').hasClass('open') ) {
    $("html").click(function () {
        $(".services-p").removeClass('open');
    });
}

$(".location").click(function () {
    $(".location-p").addClass('open');
	 $(".nav-trigger").addClass('close');
});
if ( $('.location-p').hasClass('open') ) {
    $("html").click(function () {
        $(".location-p").removeClass('open');
    });
}

/*$(".nextstep").click(function () {
    $(".nextstep-p").addClass('open');
	 $(".nav-trigger").addClass('close');
});
if ( $('.nextstep-p').hasClass('open') ) {
    $("html").click(function () {
        $(".nextstep-p").removeClass('open');
    });
}*/

$(".flossbar").click(function () {
    $(".flossbar-p").addClass('open');
	 $(".nav-trigger").addClass('close');
});
if ( $('.flossbar-p').hasClass('open') ) {
    $("html").click(function () {
        $(".flossbar-p").removeClass('open');
    });
}

$(".back-button").click(function () {
    $(".description-page").removeClass('open');
	  $(".nav-trigger").removeClass('close');
});


$(".more-detail").click(function () {
    $(".back-button").addClass('show-button');
});





$(".desktop-button, .nextstep").click(function () {
    $(".google-form").addClass('show-popup');
});

$(".close-button").click(function () {
    $(".google-form").removeClass('show-popup');
});


$(".mobile-button").click(function () {
    $(".google-form").addClass('show-popup');
});

$(function(){
/*$("#typed").typed({
stringsElement: $('#typed-strings'),
typeSpeed: 60,
backDelay: 500,
loop: true,
contentType: 'html',
loopCount: false,
callback: function(){ foo(); },
resetCallback: function() { newTyped(); }
});
$(".reset").click(function(){
$("#typed").typed('reset');
});*/
$(".google-form").on("click", ".typeform-launcher", function(){
    $(".google-form").removeClass('show-popup');
});
});
//function newTyped(){ /* A new typed object */ }
//function foo(){ console.log("Callback"); }




