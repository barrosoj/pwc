var i = 0;
var images = [];
var time = 2000;
window.onload = changeImg;

images[0] = "img/foto1.jpg";
images[1] = 'img/foto2.jpg';
images[2] = 'img/foto3.jpg';
images[3] = 'img/foto4.jpg';
images[4] = 'img/foto5.jpg';
images[5] = 'img/foto6.jpg';



function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    
}
var a = setInterval("changeImg()", time);


function stop(){
    clearInterval(a);
    }

function restart() {
   a = setInterval("changeImg()",2000);
}

function next(){
    document.slide.src = images[i];
    i++;
    if (i> images.length-1){
        i=0;
    }
    
   }

function previous(){
    document.slide.src = images[i-1];
    i--;
    if ( i < 0){
        i=images.length - 1 ;
    }

}

