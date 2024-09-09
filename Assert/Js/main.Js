// Navbar move 100px add background
const navbarToggler = document.getElementById("navbar-toggler");
const mobileNavbarToggler = document.getElementById("mobile-navbar-toggler");

navbarToggler.addEventListener("click", () => {
  mobileNavbarToggler.classList.toggle("mobile-navbar-toggler-show");
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    header.style.backgroundColor = "#37517ef1"; // Change background color when scrolled 100px
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// back-to-top
let backToUp = document.getElementById("back-to-up");

backToUp.addEventListener("click", () => {
  $("html, body").animate({ scrollTop: 0 }, 0.2);
  return false;
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    backToUp.classList.add("active"); // Change background color when scrolled 100px
  } else {
    backToUp.classList.remove("active");
  }
});

// navbar move the title content active the navbar menu list that's target

document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll("nav div ul li a");
  var sections = document.querySelectorAll("section");

  let makeLinkActive = (targetId) => {
    // Remove 'active' class from all links
    menuLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add 'active' class to the corresponding link
    var activeLink = document.querySelector(
      'nav ul li a[href="#' + targetId + '"]',
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  // Function to check which section is at the top of the viewport
  function checkSectionInView() {
    var scrollPosition = window.scrollY + 75; // Adjusted for any additional offset
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        var targetId = section.getAttribute("id");
        makeLinkActive(targetId);
      }
    });
  }

  // Attach scroll event listener to check which section is in view
  window.addEventListener("scroll", checkSectionInView);

  // Attach click event listeners to each menu item
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      var targetId = link.getAttribute("href").substring(1); // Get the target ID without the '#'
      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        var offset = targetSection.offsetTop - 70; // Adjust the offset as needed
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });

  // Call checkSectionInView initially to set the correct active link on page load
  checkSectionInView();
});

//  portfolio isotope and filter

$(document).ready(function () {
  // Initialize Isotope
  var $grid = $("#portfolio-group").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "masonry",
  });

  // Filter buttons
  $(".btn-filter").click(function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    // Activate the clicked button
    $(".btn-filter").removeClass("active");
    $(this).addClass("active");
  });
});
