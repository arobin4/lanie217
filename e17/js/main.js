
$(document).ready(function(){
   console.log('THE DOCUMENT IS WORKING');

   $('.title').click(function(){
     $('.title').toggleClass('changecolor');
  });
  $('.title').hover(function(){
    $('.title').toggleClass('changecolor');
 });
  $('.title').click(function(){
    $('.letter').toggleClass('textcolor');
 });

   $('.emotion').click(function(){
     $('.letter1').toggleClass('align-left');
  });

     $('.emotion').click(function(){
       $('.emotion').toggleClass('changecolor1');
    });

   $('.emotion').click(function(){
     $('.letter1').toggleClass('textcolor1');
  });

  $('.traumatic').click(function(){
    $('.letter2').toggleClass('align-right');
 });

  $('.traumatic').click(function(){
    $('.traumatic').toggleClass('changecolor2');
 });

 $('.traumatic').click(function(){
  $('.letter2').toggleClass('textcolor1');
 });

 $('.physical').click(function(){
  $('.letter3').toggleClass('textcolor1');
 });

 $('.physical').click(function(){
   $('.letter3').toggleClass('align-left');
});

 $('.physical').click(function(){
   $('.physical').toggleClass('changecolor3');
});

$('.chronic').click(function(){
 $('.letter4').toggleClass('textcolor1');
});

$('.chronic').click(function(){
  $('.letter4').toggleClass('align-right');
});

$('.chronic').click(function(){
  $('.chronic').toggleClass('changecolor4');
});

$('.exhaustion').click(function(){
 $('.letter5').toggleClass('textcolor1');
});

$('.exhaustion').click(function(){
  $('.letter5').toggleClass('align-left');
});

$('.exhaustion').click(function(){
  $('.exhaustion').toggleClass('changecolor5');
});






});
