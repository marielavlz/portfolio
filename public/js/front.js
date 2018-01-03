if ($.cookie("theme_csspath")) {
    $('link#theme-stylesheet').attr("href", $.cookie("theme_csspath"));
}

$(function () {

    animations();
    fullScreenContainer();
    contactForm();
    parallax();
});

$(window).load(function () {
    windowWidth = $(window).width();
    // $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
	setTimeout(function () {
	    // $(this).alignElementsSameHeight();
	    fullScreenContainer();
	    waypointsRefresh();
	}, 205);
	windowWidth = newWindowWidth;
    }

});


/* =========================================
 *  animations
 *  =======================================*/

function animations() {

    if (Modernizr.csstransitions) {

	delayTime = 0;
	$('[data-animate]').css({opacity: '0'});
	$('[data-animate]').waypoint(function (direction) {
	    delayTime += 150;
	    $(this).delay(delayTime).queue(function (next) {
		$(this).toggleClass('animated');
		$(this).toggleClass($(this).data('animate'));
		delayTime = 0;
		next();
		//$(this).removeClass('animated');
		//$(this).toggleClass($(this).data('animate'));
	    });
	},
		{
		    offset: '95%',
		    triggerOnce: true
		});
	$('[data-animate-hover]').hover(function () {
	    $(this).css({opacity: 1});
	    $(this).addClass('animated');
	    $(this).removeClass($(this).data('animate'));
	    $(this).addClass($(this).data('animate-hover'));
	}, function () {
	    $(this).removeClass('animated');
	    $(this).removeClass($(this).data('animate-hover'));
	});
    }

}
/* =========================================
 * parallax
 *  =======================================*/

function parallax() {

    $('.text-parallax').parallax("50%", 0.1);

}

/* =========================================
 *  open reference
 *  =======================================*/

$('.reference-item').click(function (e) {
    e.preventDefault();

    var element = $(this);
    var title = element.find('.reference-title').text();
    var description = element.find('.reference-description').html();

    images = element.find('.reference-description').data('images').split(',');

    if (images.length > 0) {
	slider = '';
	for (var i = 0; i < images.length; ++i) {
	    slider = slider + '<div class="item"><img src=' + images[i] + ' alt="" class="img-responsive"></div>';
	}
    }
    else {
	slider = '';
    }



    $('#detail-title').text(title);
    $('#detail-content').html(description);
    $('#detail-slider').html(slider);

    openReference();

});

function openReference() {

    $('#detail').addClass('open');
    $('#references-masonry').animate({opacity: 0}, 300);
    $('#detail').animate({opacity: 1}, 300);

    setTimeout(function () {
	$('#detail').slideDown();
	$('#references-masonry').slideUp();

	if ($('#detail-slider').html() !== '') {

	    $('#detail-slider').owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		autoPlay: true,
		stopOnHover: true,
		singleItem: true,
		afterInit: ''
	    });
	}
    }, 300);

    setTimeout(function () {
	$('body').scrollTo($('#detail'), 1000, {offset: -80});
    }, 500);

}

function closeReference() {

    $('#detail').removeClass('open');
    $('#detail').animate({'opacity': 0}, 300);

    setTimeout(function () {
	$('#detail').slideUp();
	$('#detail-slider').data('owlCarousel').destroy();
	$('#references-masonry').slideDown().animate({'opacity': 1}, 300).masonry('reloadItems').masonry();

    }, 300);

    setTimeout(function () {
	$('body').scrollTo($('#filter'), 1000, {offset: -110});
    }, 500);


    setTimeout(function () {
	$('#references-masonry').masonry('reloadItems').masonry();
    }, 800);

}

$('#detail .close').click(function () {
    closeReference(true);
})

/* =========================================
 * full screen intro
 *  =======================================*/

function fullScreenContainer() {

    var screenWidth = $(window).width() + "px";
    var screenHeight = '';
    if ($(window).height() > 500) {
	screenHeight = $(window).height() + "px";
    }
    else {
	screenHeight = "500px";
    }


    $("#intro, #intro .item").css({
	width: screenWidth,
	height: screenHeight
    });
}

/* ajax contact form */

function contactForm() {
    $("#contact-form").submit(function () {

	var url = "contact.php"; // the script where you handle the form input.

	$.ajax({
	    type: "POST",
	    url: url,
	    data: $(this).serialize(), // serializes the form's elements.
	    success: function (data)
	    {
		var messageAlert = 'alert-' + data.type;
		var messageText = data.message;
		var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable animated bounceIn"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
		if (messageAlert && messageText) {
		    $('#contact-form').find('.messages').html(alertBox);
		}
	    }
	});
	return false; // avoid to execute the actual submit of the form.
    });
}
