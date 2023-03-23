//OPEN AND CLOSE CONTACT FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//DISPLAYS 1ST IMAGE IN SLIDESHOW WHEN PAGE LOADS
var slideIndex = 1;
showSlides(slideIndex);

//CHANGE SLIDE WHEN ARROWS ARE CLICKED
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//CHANGE SLIDE WHEN DOTS ARE CLICKED
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//DISPLAY SLIDES
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //HIDES SLIDES
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace(" active", ""); //REMOVED "none" STYLE FROM CURRENT SLIDE TO DISPLAY
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".formPopup") && !event.target.closest(".popupButton") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )