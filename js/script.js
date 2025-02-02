function navOpen(){
    let navShow = document.querySelector('.navMobile');
    navShow.style.display = 'block';
}
function navClose(){
    let navhide = document.querySelector('.navMobile');
    navhide.style.display = "none";
}
window.addEventListener('resize', function() {
    let navhide = document.querySelector('.navMobile');
    if (window.innerWidth >= 992) {
        navhide.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Full-Stack Developer", "Freelancer", "Designer"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});