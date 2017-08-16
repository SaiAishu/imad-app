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
var cntr=document.getElementById('ctr');
cntr.onclick = function(){
var request = new XMLHttpRequest();

request.onreadystatechange=function(){
    
    if(request.readyState===DONE){
        if(request.status===200){
            var ctr=request.responseText;
            var span=document.getElementById('inc');
            span.innerHTML=ctr;
        }
    }
    
};

request.open('GET','https://http://ksaiaishwarya.imad.hasura-app.io/counter',true);
request.send(null);
};