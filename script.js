const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const submitButton = document.querySelector(".submit-button");


menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close Mobile Menu when clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close Mobile Menu when Link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.innerText = "Sending...";
  submitButton.disabled = true;

  setTimeout(() => {
    submitButton.innerText = "Send";
    submitButton.disabled = false;
    formStatus.textContent = "Thank you! Your message has been sent succesfully.";

    formStatus.classList.add("success");
    
    contactForm.reset();
    setTimeout(() => {
      formStatus.classList.remove("success");
      formStatus.textConten = "";
    
    }, 5000);


  },800);
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints 
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});