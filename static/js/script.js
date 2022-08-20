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

function changeColor(){
    document.querySelector(".skill").style.backgroundColor = "#0095ffb6";
    document.querySelector(".skill").style.color = "white";
    document.querySelector(".mainContainer").style.backgroundColor = "#0095ffb6"
    
}

function rechangeColor(){
    document.querySelector(".mainContainer").style.backgroundColor = "white";
    document.querySelector(".skill").style.color = "#394867";
    document.querySelector(".skill").style.backgroundColor = "#F1F6F9";
}

function changeHeight(){
    document.querySelector(".slider").style.height = "100%";
    document.querySelector(".slider").style.opacity = "100";
}

function rechangeHeight(){
    document.querySelector(".slider").style.height = "0%";
    document.querySelector(".slider").style.opacity = "0";
}

function setGetParameter(searchId){ 
    window.location.href = "{% url 'project_details' %}" + "?searchid="+searchId;
}