var burgerMenu = document.querySelector(".burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileNav = document.querySelectorAll("#mobile-nav");
var infoRow = document.querySelectorAll('.contact-info-row');
var carouselContainer = document.querySelector('.images-carousel');
var carouselImageItem = document.querySelectorAll('.gallery-item');
var carouselInfinite = document.querySelector('.carousel-infinite');
var arrowRight = document.querySelector("#arrowRight");
var arrowLeft = document.querySelector("#arrowLeft");
var cross = document.querySelector('.cross');
var auxLeft = 0;

burgerMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle("mobile-open");
})


mobileNav.forEach(function(item){
    item.addEventListener('click',function(){
        mobileMenu.classList.remove("mobile-open");
    })
})


 infoRow.forEach(function(item){
     item.addEventListener('click',function(){
         item.classList.toggle("moveToLeft");
     })
 })

 carouselImageItem.forEach(function(item){
    item.addEventListener('click',function(){
        auxLeft = parseInt(-`${item.dataset.pos}`);
        console.log(auxLeft);
        carouselContainer.classList.add("showImageCarousel");
        carouselInfinite.style.left = `${auxLeft}rem`
        if(auxLeft < 0 && auxLeft > -800){
            arrowRight.style.display = "block";
            arrowLeft.style.display = "block";
        }
        if(auxLeft >= 0){
            arrowLeft.style.display = "none";
         }
         if(auxLeft <= -800){
            arrowRight.style.display = "none";
            arrowLeft.style.display = "block";
         }
    })
 })


 const moveToLeft = ()=>{
    auxLeft +=100;
   carouselInfinite.style.left = `${auxLeft}rem`
   if(auxLeft > -800){
    arrowRight.style.display = "block";
 }
   if(auxLeft >= 0){
    arrowLeft.style.display = "none";
 }  
 }

 const moveToRight = ()=>{
     auxLeft -=100;
    carouselInfinite.style.left = `${auxLeft}rem` 
     if(auxLeft < 0){
         arrowLeft.style.display = "block";
      }
     if(auxLeft <= -800){
        arrowRight.style.display = "none";
     }
 }



 cross.addEventListener('click',function(){
    carouselContainer.classList.remove("showImageCarousel");
    auxLeft = 0;
 })

 arrowRight.addEventListener('click',function(){
    moveToRight()
 });
 arrowLeft.addEventListener('click',function(){
    moveToLeft()
});

document.addEventListener('keydown', function(event) {
    if(carouselContainer.classList.contains("showImageCarousel")){
        if(event.keyCode == 37) {
            if(auxLeft >= 0){
                return false
             }else{
                 moveToLeft();
             }  
        }
        else if(event.keyCode == 39) {
            if(auxLeft <= -800){
                return false
             }else{
                 moveToRight();
             }
        }
        else if(event.keyCode == 27){
            carouselContainer.classList.remove("showImageCarousel");
            auxLeft = 0;
        }
    }
});

