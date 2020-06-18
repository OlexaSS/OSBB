$(function(){
    $('.main__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: 'dots-style'
    });

    $('.menu-btn').on('click', function(){
      $('.header-menu').toggleClass('active');
    });

    window.addEventListener('resize', function(){
      let w = $(window).width();
    console.log (w);
      
  });
  

});