$(document).ready(function(){
	$("#myName").show(1000);
	
	//Function to make smooth scroll
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
					});
				}
		}
	});
	
	//Function to scroll top, when it´s click on the button "buttonToTop"
	$("#buttonToTop").click(function topFunction(){
		$(window).scrollTop(0);
	});
	
	//Scrooll event, call function "makeDisappear"
	window.onscroll = function() {makeDisappear()};
	
	//Function to make principalNav and buttonToTop disappear
	function makeDisappear(){
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        $("#buttonToTop").css("display", "block");
		$("#principalNav").hide(1000);
    }else{
        $("#buttonToTop").css("display", "none");
		$("#principalNav").show(1000);
    }
}
});
