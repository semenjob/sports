$(document).ready(function(){
  $('.carousel_inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/solid/left-solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/solid/right-solid.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });
});
	