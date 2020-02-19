const hero__text = document.getElementById('hero__text');
const menu__logo = document.getElementById('menu__logo');


document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;

    if (scroll > 20) {
        menu__logo.classList.add("logo__icon");
        menu__logo.classList.remove("hidden");

    } else {
        menu__logo.classList.add("hidden");
        menu__logo.classList.remove("logo__icon");
    }

    var header = document.getElementById("menu");
    var sticky = header.offsetTop;


    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");


    } else {
        header.classList.remove("sticky");
    }


    hero__text.style.cssText = "transform: translate(0px , " + scroll / 2 + "%)";



});



