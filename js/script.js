$('.slider').slick({
   centerMode: true,
   centerPadding: '50px',
   slidesToShow: 3,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
 });

 $(document).ready(function(){
   $('.chtul').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.chtulhu').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.chtul').css('color', '#079992');   
   });
   $('.dag').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.dagon').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.dag').css('color', '#079992');
   });
   $('.shab').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.shab-nigurath').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.shab').css('color', '#079992');   
   });
   $('.yog').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.yog-sothoth').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.yog').css('color', '#079992');   
   });
   $('.deep').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.deep_ones').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.deep').css('color', '#079992');   
   });
   $('.old').on("click", function (event) {
      event.preventDefault();
      $('.monster_card').removeClass('active_monster');
      $('.great_old_ones').addClass('active_monster');
      $('.monster_name').css('color', '#717171');
      $('.old').css('color', '#079992');   
   });
});

$('.films_cards').slick({
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2500,
});

function slowScroll(id) {
   var offset = 0;
   $('html, body').animate({
       scrollTop: $(id).offset().top - offset
   }, 1000);
   return false;
}
