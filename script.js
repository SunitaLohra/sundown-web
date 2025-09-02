function page4Animation(){
   const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const elemC = document.querySelector("#elem-container")
const fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
   fixed.style.display = "block";
});
 
 elemC.addEventListener("mouseleave", function(){
   fixed.style.display = "none";
});

const elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
      const image = e.getAttribute("data-image")
      fixed.style.backgroundImage =`url(${image})`
   });
}); 
}

  function swiperAnimation(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
  }
   swiperAnimation()
   page4Animation()

let menu = document.querySelector("nav h3")
let navimg = document.querySelector("nav img")
let full = document.querySelector("#full-scr" )
let flag = 0
menu.addEventListener("click", function(){
   if(flag == 0){
   full.style.top = "0"
   navimg.style.opacity = 0
   flag = 1
   }else{
      full.style.top = "-100%"
   navimg.style.opacity = 1
   flag = 0
   }
})

    
 