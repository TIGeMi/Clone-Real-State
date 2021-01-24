let slideIndex = 1;
showSlide(slideIndex);

var timer = null;

function navSlideshow(i) {
    slideIndex += i;
    clearTimeout(timer);
    showSlide(slideIndex);
    
}

function selectSlide(n) {
    slideIndex = n;
    clearTimeout(timer);
    showSlide(slideIndex);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slideshow__item");
    console.log(slides.length);
    var dots = document.getElementsByClassName("slideshow__select-dot");
    slideIndex = n;
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i=0;i<slides.length;i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(
            "slideshow__select-dot--active",
            ""
        );
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " slideshow__select-dot--active";
    timer = setTimeout(() => {
        console.log("show slide", slideIndex+1);
        showSlide(slideIndex+1);
    }, 5000);
}
