$(document).ready(function() {

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton2').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton2').removeClass('on2');

		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent2').slideUp('normal');

		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {

			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on2');

			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 }

	 });


	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/

	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER
	$('.accordionButton2').mouseover(function() {
		$(this).addClass('over');

	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');
	});

	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/
	$('.accordionContent2').hide();

});
