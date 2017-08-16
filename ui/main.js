console.log('Loaded!');

var img=document.getElementById('madi');

var mar=0;
function move(){
    mar+=2;
    img.style.marginLeft=mar+'px';
}

img.onclick = function (){
  //  img.style.marginLeft = '200px';
    setInterval(move,20);
    
};

//Counter Code
var counter=0;
var inc=document.getElementById("inc");
var ctr=document.getElementbyId("ctr");
ctr.onclick=function(){
  
  counter+=1;
  inc.innerHtml=counter.toString();
    
};