let element = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () =>{
    let scrollTop = document.documentElement.scrollTop;
    element.style.width = `${(scrollTop / height) * 100}%`
});  

let bar = document.getElementById('bar');
let close = document.getElementById('close');
let navbar = document.querySelector('.navbar');


if(bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}

let mainImg = document.getElementById('mainImg');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].ownerDocument = function() {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick  = function() {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick  = function() {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick  = function() {
    mainImg.src = smallImg[3].src;
}