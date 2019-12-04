$('html,body').css('cursor','crosshair');
$(document).ready(function(){
   console.log('THE DOCUMENT IS WORKING');

  //  $('.outline').click(function(){
  //    setInterval(function(){
  //       $('.outline').toggleClass('picture2');
  //     },100);
  // });
  $('.outline').click(function(){
    $('.outline').toggleClass('blink');
 });

 $('audio#pop')[0].play()
 $('audio#pop')[0].pause()
 $('audio#pop')[0].currentTime = 0

 $('.outline').click(function(){
   $('.outline').toggleClass('pop');
});
});
