"use strict";

const faqs = document.querySelectorAll(".faq");
const buttons = document.querySelectorAll(".faq-toggle");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", function () {
//     faq.classList.toggle("active");
//   });
// });

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active");
  });
});
