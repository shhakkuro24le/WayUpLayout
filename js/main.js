 var btn = document.getElementById('btn');
btn.onclick = function() {
	 var text = document.querySelector('.intro')
 	text.classList.add('red');
 	document.getElementById("title-span").style.color ="black";

 	
}

var btnform = document.getElementById('btn-form');
btnform.onclick = function() {
	var text = document.querySelector ('.section-titles');
	text.classList.add('blue');
	document.getElementById("btn-form").style.backgroundColor ="red";
}

$(function () {
	$(window).scroll(function() {
	    $('.advantages').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})