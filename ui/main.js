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
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            var ctr=request.responseText;
            var span=document.getElementById('inc');
            span.innerHTML=ctr;
        }
    }
};
request.open('GET','http://ksaiaishwarya.imad.hasura-app.io/counter',true);
request.send(null);
};

//Name update
var sub=document.getElementById('give');
sub.onclick = function(){
var request = new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            var name=request.responseText;
            var list;
            var name1=JSON.parse(name);
            for(var i=0;i<name1.length;i=i+1 ){
                list += '<li>'+name1[i]+'</li>';
            }
            var ul=document.getElementById('list');
            ul.innerHTML = list;
        }
    }
};
var n1=document.getElementById('name')
var n=n1.value;
request.open('GET','http://ksaiaishwarya.imad.hasura-app.io/input-name?name='+n,true);
request.send('');
};
