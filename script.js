let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll(".contact .row .faq .box h3").forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  spaceBetween: 30,
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
  },
});

const form = document.getElementById("bookingForm"); // give your form id=bookingForm for easy grab

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop refresh

  // collect form values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const check_in = document.getElementById("check_in").value;
  const check_out = document.getElementById("check_out").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const rooms = document.getElementById("rooms").value;

  // customize this your number
  const apartmentNumber = "2347047074290"; // your WhatsApp number without "+"

  // build WhatsApp message
  const message = `Hello Prestige Haven!%0A
  I want to book an apartment.%0A
  First Name: ${firstname}%0A
  Last Name: ${lastname}%0A
  Phone: ${phone}%0A
  Email: ${email}%0A
  Check In: ${check_in}%0A
  Check Out: ${check_out}%0A
  Number of Adults: ${adults}%0A
  Number of Children: ${children}%0A
  Number of Rooms: ${rooms}%0A`;

  // Sweet Alert Message
  Swal.fire({
    icon: "success",
    title: "Booking Successful!",
    text: "Redirecting you to our admin...",
    showConfirmButton: false,
    timer: 3000,
  });

  // redirect to WhatsApp
  (window.location.href = `https://wa.me/${apartmentNumber}?text=${message}`),
    "_blank";
});

const form2 = document.getElementById("booking-form-2"); // give your form id=bookingForm for easy grab

form2.addEventListener("submit", function (e) {
  e.preventDefault(); // stop refresh

  // collect form values
  const firstname = document.getElementById("firstname2").value;
  const lastname = document.getElementById("lastname2").value;
  const phone = document.getElementById("phone2").value;
  const email = document.getElementById("email2").value;
  const check_in = document.getElementById("checkin2").value;
  const check_out = document.getElementById("checkout2").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const rooms = document.getElementById("rooms").value;

  // customize this your number
  const apartmentNumber = "2347047074290";

  // build WhatsApp message
  const message = `Hello Prestige Haven!%0A
  I want to book an apartment.%0A
  First Name: ${firstname}%0A
  Last Name: ${lastname}%0A
  Phone: ${phone}%0A
  Email: ${email}%0A
  Check In: ${check_in}%0A
  Check Out: ${check_out}%0A
  Number of Adults: ${adults}%0A
  Number of Children: ${children}%0A
  Number of Rooms: ${rooms}%0A`;

  // Sweet Alert Message
  Swal.fire({
    icon: "success",
    title: "Booking Successful!",
    text: "Redirecting you to our admin...",
    showConfirmButton: false,
    timer: 4000,
  });

  // redirect to WhatsApp
  (window.location.href = `https://wa.me/${apartmentNumber}?text=${message}`),
    "_blank";
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;
  const number = contactForm.querySelector('input[name="number"]').value;
  const message = contactForm.querySelector('textarea[name="message"]').value;

  emailjs
    .send(
      "service_iuc4for",
      "template_o5bqyj9",
      {
        name: name,
        email: email,
        number: number,
        message: message,
      },
      "bFf-DTeZBTEglOkWm"
    )
    .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us. We will get back to you shortly.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later!",
          confirmButtonColor: "#d33",
          confirmButtonText: "Close",
        });
        console.log(error);
      }
    );
});
