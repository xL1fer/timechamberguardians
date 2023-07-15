/*
*	scripts.js scripting file
*/

/* Mobile interaction */

window.addEventListener("resize", function(event) {
    //console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    if (document.body.clientWidth > 820) {
        let mobile_display = document.getElementById("mobile_nav");
        
        mobile_display.style.visibility = "hidden";
        mobile_display.style.opacity = "0";
        //mobile_display.style.zIndex = "-1";
        mobile_display.style.transform = "translateY(-3em)";
        mobile_display.style.transition = "all, visibility, z-index";
        mobile_display.style.transitionDuration = "300ms, 0ms, 0ms";
        mobile_display.style.transitionDelay = "0ms, 300ms, 10ms";
    }
})

jQuery(($) => {
    $burgButton = $("#burg");

    $burgButton.click(function() {
        let mobile_display = document.getElementById("mobile_nav");

        if (mobile_display.style.visibility == "hidden" || mobile_display.style.visibility == "") {
            mobile_display.style.visibility = "visible";
            mobile_display.style.opacity = "1";
            //mobile_display.style.zIndex = "1";
            mobile_display.style.transform = "translateY(0)";
            mobile_display.style.transitionDelay = "0s, 0s, 0.3s";
        }
        else {
            mobile_display.style.visibility = "hidden";
            mobile_display.style.opacity = "0";
            //mobile_display.style.zIndex = "-1";
            mobile_display.style.transform = "translateY(-3em)";
            mobile_display.style.transition = "all, visibility, z-index";
            mobile_display.style.transitionDuration = "300ms, 0ms, 0ms";
            mobile_display.style.transitionDelay = "0ms, 300ms, 10ms";
        }
    });
});

/* Scrolling event */

let lastKnownScrollPosition = 0;
let ticking = false;

hookScrolling = (scrollPos, lambda) => {
    lambda.style.opacity = (100 - (scrollPos / 8)) + "%";
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    let lambda = document.getElementById("lambda");

    if (lambda && !ticking) {
        window.requestAnimationFrame(() => {
            hookScrolling(lastKnownScrollPosition, lambda);
            ticking = false;
        });

        ticking = true;
    }
});

/* Slide images */

let slideIndex = 1;
window.addEventListener('load', function () {
    showSlides(slideIndex);
})

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide_img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}