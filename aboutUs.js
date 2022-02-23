/**
 * function background1(){
    document.getElementById('bgPic1').src='Images/p1.jpg'
}

setInterval(function b1 () {    document.getElementById('bgPic1').src='Images/p1.jpg'
}, 1000);
setInterval(function b2 () {    document.getElementById('bgPic1').src='Images/p2.jpg'
}, 2000);
setInterval(function b3 () {    document.getElementById('bgPic1').src='Images/p3.jpg'
}, 3000);

b3();
b2();
b1();
*/

var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'Images/p1.jpg';
images[1] = 'Images/p2.jpg';
images[2] = 'Images/p3.jpg';

function changePicture() {

    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);

}

window.onload = changePicture;