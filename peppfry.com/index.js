// slide all javascript
window.addEventListener("load",execute)
function execute(){
    document.querySelector(".slideshow-container").addEventListener("mouseleave",leave)
    document.querySelector(".slideshow-container").addEventListener("mouseenter",enter)
    leave()
        let btnleft=document.querySelector(".btnleft")
        let btnright=document.querySelector(".btnright")
        btnright.addEventListener("click",scrollright)
        btnleft.addEventListener("click",scrollleft)
}
        function scrollright(){
            console.log("object")
            document.querySelector(".card__container").scrollBy(250,0)
            document.querySelector(".card__container").style.padding="0px"
        }
        function scrollleft(){
            console.log("object")
            document.querySelector(".card__container").scrollBy(-250,0)
        }
let sliding
function leave(){
    console.log("leave")
    sliding =  setInterval(showSlidess, 3000)
}
function enter(){
    console.log("enter")
    clearInterval(sliding)
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var showSlidess=function() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}