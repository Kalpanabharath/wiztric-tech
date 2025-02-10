AOS.init();
AOS.refresh();
AOS.init({
  offset: 100, // Start animation 100px before scrolling into view
 
});
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


// isotope

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector("#blog-grid"); // Selecting the grid container

    // Check if Isotope is loaded and the grid exists
    if (typeof Isotope === "undefined" || !grid) {
        console.error("Isotope is not loaded or the grid container was not found.");
        return;
    }

    // Initialize Isotope
    var iso = new Isotope(grid, {
        itemSelector: ".col-md-4", // Targeting grid items
        layoutMode: "fitRows" // Arrange items in a grid
    });

    // Select all filter buttons
    var filterButtons = document.querySelectorAll(".nav-link");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filterValue = this.getAttribute("data-filter");

            // Apply the filter using Isotope
            iso.arrange({ filter: filterValue });

            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active"); // Add active class to the clicked button
        });
    });
});



