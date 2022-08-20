burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
logo = document.querySelector('.logo')
li = document.querySelector('.navlist li')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    logo.classList.toggle('hide-class-resp')
    navlist.classList.toggle('hide-class-resp')
})

function ReachUs(){
    window.open("Reachus.html")
}