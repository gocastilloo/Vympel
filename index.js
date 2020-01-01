var burgerMenu = document.querySelector(".burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
burgerMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle("mobile-open")
})