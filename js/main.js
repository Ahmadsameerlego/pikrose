// add to like button

let like_button = document.querySelectorAll('.addToLike');
like_button.forEach((element) => {
    element.addEventListener('click', ()=>{
        console.log(element.children[0])
        element.children[0].classList.toggle('active')
    })
});



//toggle navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navSmallScreen");
const links = document.querySelectorAll(".navSmallScreen li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fadee");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// Initialize WOW.JS
new WOW().init();
