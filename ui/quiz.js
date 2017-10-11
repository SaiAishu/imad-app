  function listclick(){
       $('.qlist').html(`<div class="qname current">India
<div class="desc">This is the india quiz</div>
</div>
<div class="qname">Canada
<div class="desc">This is the canada quiz</div>
</div>
<div class="qname">England
<div class="desc">This is the uk quiz</div>
</div>
<div class="qname">GreenLand
<div class="desc">This is the gl quiz</div>

</div>`)
$(document).ready(main)
  }


var main=function(){
    $('.icon-menu').click(function (){
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
};

$(document).ready(main)