var burgerMenu = document.querySelector(".burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileNav = document.querySelectorAll("#mobile-nav");
burgerMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle("mobile-open")
})

console.log(mobileNav);
mobileNav.forEach(function(item){
    item.addEventListener('click',function(){
        console.log("entre");
        mobileMenu.classList.remove("mobile-open")
    })
})
    


