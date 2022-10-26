const arrImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
] 

const sliderImg = document.querySelector(".container");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");


for (let i = 0; i < arrImg.length; i++) {
    const eleImg = document.createElement("img");
    eleImg.src = arrImg[i];
    eleImg.classList.add("slider-img");

    if (i === 0) {
        eleImg.classList.add("d-block");
    }
    sliderImg.append(eleImg);
}

const listImg = document.querySelectorAll(".slider-img");
const smallImage = document.querySelectorAll(".small-img");
let firstImg = 0;

btnBottom.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    smallImage[firstImg].classList.remove("real-img");
    firstImg++;
    if (firstImg == 5) {
        firstImg = 0;
    }
    listImg[firstImg].classList.add("d-block");
    smallImage[firstImg].classList.add("real-img");
})

btnTop.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    smallImage[firstImg].classList.remove("real-img");
    firstImg--;
    if (firstImg == -1) {
        firstImg = 4;
    }
    listImg[firstImg].classList.add("d-block");
    smallImage[firstImg].classList.add("real-img");
})










// codice vecchio
// btnTop.addEventListener("click", function(){
//     listImg[firstImg].classList.remove("d-block");
//     firstImg++;
//     listImg[firstImg].classList.add("d-block");
//     if (firstImg == 4) {
//         firstImg = 0;
//         listImg[firstImg].classList.add("d-block");
//     }
// })
