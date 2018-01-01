$(document).ready(function() {

// toggle class scroll
$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }

});

// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){

  var textareas = document.querySelectorAll('.expanding'),

      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },

      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };

  // IE7 support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }

    textareas = getElementsByClass('expanding');
  }

  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }

})();


$(".envelope").one("click", function(){

   $(".top-wrap").animate({ textIndent: 180}, {
    duration: 500,
    step: function(now) {$(this).css('-webkit-transform',"rotateX(" + now + "deg)");},
    complete: function(){ $(".top-wrap").animate({zIndex:-1}, 100);}
  });

  $(".letter-wrap").delay(500).animate({
    height:'520px',
    top:'-500px'
  },500);

  $(".letter-wrap").delay(1000).animate({
    top:'-200px',
    zIndex:999
  },500);

 $(".envelope").delay(500).animate({
    top:'50px'
  },500);

});

$(".send").one("click", function(e){
  e.preventDefault();

   $(".letter-wrap").animate({
    top:'-500px',
  },500);

  $(".front").delay(800).animate({
    zIndex:999
  },500);

  $(".letter-wrap").delay(1000).animate({
    top:'0px',
    height:'200px'
  },500);

 $(".envelope").delay(1000).animate({
    top:'0px'
  },500);

$(".top-wrap").delay(2500).animate({
    zIndex:999
  },500);

$(".top-wrap").animate({ textIndent: 0}, {
    step: function(now,fx) {
      $(this).css('-webkit-transform',"rotateX(" + now + "deg)");
    }
  },500);

  $(".envelope").delay(3000).animate({
    right:'-5000px'
  },500).fadeOut(1000, function(){
      $("p.notif").fadeIn(1000);
  });

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      window.location.hostname == this.hostname
    ) {
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

  //Extra animations
  // typing animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };

  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("FULL STACK WEB DEVELOPER + MICROBIOLOGIST");

  // initialize wow.js
  new WOW().init();

  function hex_initial_animation() {
  		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
  		$(".hex-wrap").velocity("callout.pulse");
  		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
  		}
  	hex_initial_animation();

  var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
  function hovernotify() {
      $(".hover-notify").velocity("callout.tada");
  }
  function myStopFunction() {
  $(".hover-notify").velocity('stop', true).velocity("fadeOut");
      clearInterval(hoverdetect);
  }

  		$(".hex-init").mouseenter(function () {

  			myStopFunction();

  			var title_color =  $(this).parent().attr("data-color");
  			var title_name = $(this).parent().attr("data-title");
  			var desc_name = $(this).parent().attr("data-content");

  				function hex_description() {
  					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
  					$('.' + desc_name).siblings().removeClass('desc-active');
  						setTimeout(function() {
  							$('.' + desc_name).addClass('desc-active');
  							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
  							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
  							$('.code-title').text(title_name)
  						}, 0);
  			    }
  			    hex_description();

  				$(this).parent().addClass('hexactive');
  				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

  			}).mouseleave(function () {
  				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
  			});
});
