$('html,body').css('cursor','crosshair');
$(document).ready(function(){
   console.log('THE DOCUMENT IS WORKING');

   $('.outline').click(function(){
     $('.outline').toggleClass('picture2');
  });
  $('.outline').click(function(){
    $('.outline').toggleClass('picture3');
 });
});
