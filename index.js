var burgerMenu = document.querySelector(".burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileNav = document.querySelectorAll("#mobile-nav");
var infoRow = document.querySelectorAll('.contact-info-row');
burgerMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle("mobile-open")
})


mobileNav.forEach(function(item){
    item.addEventListener('click',function(){
        mobileMenu.classList.remove("mobile-open")
    })
})


 infoRow.forEach(function(item){
     item.addEventListener('click',function(){
         item.classList.toggle("moveToLeft")
     })
 })

