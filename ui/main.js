console.log('Loaded!');

alert('Page has loaded');

document.getElementById('txt').innerHTML='Showing Progress';

var img=document.getElementById('madi');

var mar=0;
function move(){
    mar+=50;
    img.style.marginLeft=mar+'px';
}

img.onclick = function (){
  //  img.style.marginLeft = '200px';
    setInterval(move,100);
    
};