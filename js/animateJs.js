ScrollReveal().reveal('.scroll__event', {delay: 500 ,opacity: 0.05 ,duration: 2000})
ScrollReveal().reveal('.ex-title', {delay: 500 ,opacity: 0.05})
ScrollReveal().reveal('.slide__wrap', {delay: 1000 ,opacity: 0.05})

//SWIPER

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1.5,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 25,
            initialSlide: 3,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 10
        },
        767: {
            slidesPerView: 3.2,
            spaceBetween: 20
        },
        // when window width is >= 920px
        920: {
            slidesPerView: 5,
            spaceBetween: 0
            
        }
    }
    })

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    clickable: true,
    mousewheel: {
        invert: false,
      },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        reverseDirection: false,
        waitForTransition: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

/*---Mousemove ---*/

$(window).mousemove(function(evt){
    $(".mouseSymbol").css("left",evt.pageX+'px').css("top",evt.pageY+'px')
})





