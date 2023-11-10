if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById('offcanvasDarkNavbar').classList.add("w-75");
    var leg = document.querySelectorAll('.carousel_img');
    for (let i = 0; i < leg.length; i++) {
        document.querySelectorAll('.carousel_img')[i].setAttribute("height", "200px");
        document.querySelectorAll('.carousel-caption ')[i].style.borderRadius = "70px 0px 70px 0px"
    }

} else {
    document.getElementById('searchinput').style.width = "700px";
    document.querySelector('.hr-img').classList.add("w-25");
    var leg = document.querySelectorAll('.carousel_img');
    for (let i = 0; i < leg.length; i++) {
        document.querySelectorAll('.carousel_img')[i].setAttribute("height", "600px");
        document.querySelectorAll('.carousel-caption ')[i].style.borderRadius = "0px 0px 70px 70px";
    }

}


