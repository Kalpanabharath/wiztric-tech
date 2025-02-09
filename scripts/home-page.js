AOS.init();
// document.addEventListener("DOMContentLoaded", function () {
//     const dropdowns = document.querySelectorAll(".nav-item.dropdown");

//     dropdowns.forEach(dropdown => {
//       dropdown.addEventListener("mouseenter", function () {
//         this.querySelector(".dropdown-menu").classList.add("show");
//       });

//       dropdown.addEventListener("mouseleave", function () {
//         this.querySelector(".dropdown-menu").classList.remove("show");
//       });
//     });
//   });

// swiper start
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// swiper end

document.querySelectorAll(".counter").forEach((item) => {
  const targetValue = Number(item.dataset.value);
  const increment = Number(item.dataset.plus);
  const suffix = item.textContent.trim();
  let currentCount = 0;

  const updateCounter = () => {
    if (currentCount >= targetValue) {
      item.textContent = `${targetValue}${suffix}`;
      clearInterval(interval);
      return;
    }
    item.textContent = `${currentCount}${suffix}`;
    currentCount += increment;
  };

  const interval = setInterval(updateCounter, 100);
});

// slick

$(document).ready(function () {
  $(".leadership-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
