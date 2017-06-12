
$(document).ready(function(){
	$('.resultado__slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:"<i class='left_arrow fa fa-angle-left' aria-hidden='true'></i>",
      	nextArrow:"<i class='right_arrow fa fa-angle-right' aria-hidden='true'></i>",
		responsive: [
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}  
			]
		});
	$('.slick-current').next().find('label').css('visibility','visible');
  	$('.slick-arrow').on('click',function(){
  		$('.slick-slide').find('label').css('visibility','hidden');
  		$('.slick-current').next().find('label').css('visibility','visible');
  	});
});