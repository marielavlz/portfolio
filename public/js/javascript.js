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

  // Push the body and the nav over by 285px over
  // var main = function() {
  //   $('.fa-bars').click(function() {
  //     $('.nav-screen').animate({
  //       right: "0px"
  //     }, 200);
  //
  //     $('body').animate({
  //       right: "285px"
  //     }, 200);
  //   });
  //
  //   // Then push them back */
  //   $('.fa-times').click(function() {
  //     $('.nav-screen').animate({
  //       right: "-285px"
  //     }, 200);
  //
  //     $('body').animate({
  //       right: "0px"
  //     }, 200);
  //   });
  //
  //   $('.nav-links a').click(function() {
  //     $('.nav-screen').animate({
  //       right: "-285px"
  //     }, 500);
  //
  //     $('body').animate({
  //       right: "0px"
  //     }, 500);
  //   });
  // };
  //
  // $(document).ready(main);

  // initiate full page scroll

  // $('#fullpage').fullpage({
  //   scrollBar: true,
  //   responsiveWidth: 400,
  //   navigation: true,
  //   navigationTooltips: ['home', 'about', 'portfolio', 'contact', 'connect'],
  //   anchors: ['home', 'about', 'portfolio', 'contact', 'connect'],
  //   menu: '#myMenu',
  //   fitToSection: false,
  //
  //   afterLoad: function ( anchorLink, index){
  //     var loadedSection = $(this);
  //
  //
  //     //using index
  //     if(index==1){
  //       /* add opacity to arrow */
  //       $('.fa-chevron-down').each(function(){
  //         $(this).css('opacity','1')
  //       });
  //       $('.header-links a').each(function(){
  //         $(this).css('color','white')
  //       });
  //       $('.header-links').css("background-color","transparent");
  //     }
  //
  //     else if(index!=1){
  //       $('.header-links a').each(function(){
  //         $(this).css('color','black')
  //       });
  //       $('.header-links').css('background-color', 'white');
  //     }

      //using index
      // if(index == 2){
      //
      //   /* animate skill bars */
      //   $('.skillbar').each(function(){
      //     $(this).find('.skillbar-bar').animate({
      //       width:jQuery(this).attr('data-percent')
      //     },2500);
      //   });
      // }
  //   }
  // });

});
