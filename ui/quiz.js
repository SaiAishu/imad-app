

var main=function(){
    $('.jumbotron').click(function (){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'265px'},200);
    });

$('.icon-close').click( function(){
    $('.menu').animate({left:'-265px'},200);
    $('body').animate({left:'0px'},200);
    
});
   $('.qname').click(function(){
       $('.desc').hide();
       $('.qname').removeClass('current');
       $(this).children('.desc').show();
       $(this).addClass('current');
       $(this).children('.desc').removeClass('current');
   });
   $('.')
};

$(document).ready(main)