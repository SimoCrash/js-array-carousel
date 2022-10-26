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

const listImg = document.querySelector(".slider-img");
let firstImg = 0;

btnTop.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    firstImg++;
    listImg[firstImg].classList.add("d-block");
})

btnBottom.addEventListener("click", function(){
    listImg[firstImg].classList.remove("d-block");
    firstImg--;
    listImg[firstImg].classList.add("d-block");
})
