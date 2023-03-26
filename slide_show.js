
const images = [];
const time =3000;
images[0] = '1.png';
images[1] = '2.png';
images[2] = '3.png';

const changeImg = () =>{
    document.querySelector(".pic").src = images[i]

    if(i < images.length - 1){
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}
// Run function when page loads
window.onload=changeImg;