

function ani(){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'265px'},200);
    }

function closemenu(){
    $('.menu').animate({left:'-265px'},200);
    $('body').animate({left:'0px'},200);
    
}
$(document).ready(main)