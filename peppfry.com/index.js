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





// hover js
let furn = document.querySelector('#furn') ///form link
let hovef=document.querySelector('#hov_Eff_sec') // for card

furn.addEventListener('mouseover', function(){
hovef.style.visibility="visible"

})

furn.addEventListener('mouseout', function(){
hovef.style.visibility="hidden"

})

hovef.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})







let furn2 = document.querySelector('#fur2') ///form link
let hovef2=document.querySelector('#hov_Eff_dec') // for card

furn2.addEventListener('mouseover', function(){
  hovef2.style.visibility="visible"

})

furn2.addEventListener('mouseout', function(){
  hovef2.style.visibility="hidden"

})

hovef2.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef2.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})


let furn3 = document.querySelector('#fur3') ///form link
let hovef3=document.querySelector('#hov_Eff_dec') // for card

furn3.addEventListener('mouseover', function(){
  hovef3.style.visibility="visible"

})

furn3.addEventListener('mouseout', function(){
  hovef3.style.visibility="hidden"

})

hovef3.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef3.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})




let furn4 = document.querySelector('#fur4') ///form link
let hovef4=document.querySelector('#hov_Eff_home') // for card

furn4.addEventListener('mouseover', function(){
  hovef4.style.visibility="visible"

})

furn4.addEventListener('mouseout', function(){
  hovef4.style.visibility="hidden"

})

furn4.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef4.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})


let furn5 = document.querySelector('#fur5') ///form link
let hovef5=document.querySelector('#hov_Eff_kits') // for card

furn5.addEventListener('mouseover', function(){
  hovef5.style.visibility="visible"

})

furn5.addEventListener('mouseout', function(){
  hovef5.style.visibility="hidden"

})

furn5.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef5.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})




let furn6 = document.querySelector('#fur6') ///form link
let hovef6=document.querySelector('#hov_Eff_out') // for card

furn6.addEventListener('mouseover', function(){
  hovef6.style.visibility="visible"

})

furn6.addEventListener('mouseout', function(){
  hovef6.style.visibility="hidden"

})

furn6.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef6.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})




let furn7 = document.querySelector('#fur7') ///form link
let hovef7=document.querySelector('#holiday') // for card

furn7.addEventListener('mouseover', function(){
  hovef7.style.visibility="visible"

})

furn7.addEventListener('mouseout', function(){
  hovef7.style.visibility="hidden"

})

furn7.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef7.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})



let furn8 = document.querySelector('#fur8') ///form link
let hovef8=document.querySelector('#selss') // for card

furn8.addEventListener('mouseover', function(){
  hovef8.style.visibility="visible"

})

furn8.addEventListener('mouseout', function(){
  hovef8.style.visibility="hidden"

})

furn8.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef8.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})