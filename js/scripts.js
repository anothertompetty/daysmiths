//view-all

$(".view-all-trigger").click(viewAll)
	function viewAll() {
		$("#view-all").fadeToggle(400);
	}

//sign-up top

$(".signup").click(signupmenu)
	function signupmenu() {
		$(".signupform").slideToggle(600, "swing");
	}
	
//mobile menu toggle

$(document).ready(function() {
	$('#menu-icon').click(function() {
		$('#menu').slideToggle(500);
	});
});

//bio toggle

$(".person").click(biography)
	function biography() {
		$(".bio").slideToggle(500);
	}
	
// smooth anchor scrolling

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
	        
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 500);
					return false;
	      }
	    }
	  });
	});