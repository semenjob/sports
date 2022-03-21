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
  $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
    $(this)
      .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
      .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
            $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
        })
    });
};

toggleSlide('.catalog-item_link');
toggleSlide('.catalog-item_back');


//modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consaltion').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
      $('.overlay, #consaltion, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').on('click', function() {
      $('.overlay, #order').fadeIn('slow'); 
    });
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow'); 
      })
    });
});
	