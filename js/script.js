$(document).ready(function(){
	var speed = 500;  //fade speed
	var autoswitch = true; //auto slider option
	var autoswitch_speed = 4000// Auto slider speed

	// add initials active class
	$('.slide').first().addClass('active');

	//hide all slide

	$('.slide').hide();


	//show first slide
	$('.active').show();


	$('#next').on('click',nextSlide);


	$('#prev').on('click',previousSlide)

if(autoswitch==true){
	setInterval(nextSlide, autoswitch_speed);
}

	if(autoswitch==true){
		setInterval(function(){

$('.active').removeClass('.active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		},autoswitch_speed)
	}



//switch to next slide

function nextSlide(){
	$('.active').removeClass('.active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
}




function previousSlide(){
	$('.active').removeClass('.active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
}




})