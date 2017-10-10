
function ani(){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'256px'},200);
    }


var main=function(){
    $('.icon-menu').click(function(){
        $('.menu').animate({left:'0px'},200);
    });
};
$(document).ready(main);
