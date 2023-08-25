// wow.js
new WOW().init();

// Sticky navbar state
const x = document.getElementById("nav-scroll");
window.addEventListener("resize", updateNav);
window.addEventListener("scroll", updateNav);

function updateNav() {
    const w = window.innerWidth;
    const s = window.scrollY;

    if (w > 992 && s < 80) {
        x.style.width = "90%";
    } else {
        x.style.width = "100%";
    }
}

// Top Arrow button
let topArrow = document.querySelector(".top-arrow")
window.addEventListener("scroll" , () => {
    (window.scrollY >= 400) ? topArrow.classList.add("visible"): topArrow.classList.remove("visible") })

topArrow.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth", })
})

// Light Box
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': false, 
    'disableScrolling': true,
  })

// Counter Up
$('.counter').countUp({
    'time': 2000,
    'delay': 10
  });

// Testimonials slider
$(".testimonials-img").slick({
    autoplaySpeed:5000,
    speed:600,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 4,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    asNavFor: '.testimonials-txt'
  });
  $(".testimonials-txt").slick({
    autoplaySpeed:5000,
    speed:600,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    asNavFor: '.testimonials-img'
  });

// Isotope filter
var $filter = $('.project-filter').isotope({
  itemSelector: '.project-item',
  percentPosition: true,
});

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $filter.isotope({ filter: filterValue });
});

// Active button function
const buttons = document.querySelectorAll(".buttons-group button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {btn.removeAttribute("id")})
    button.id = "btn-active"
  })
})

// Single page caroussel
$('.post-carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
			