"use strict";

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const body = document.querySelector(".body");

btn.addEventListener("click", (e) => {
  search.classList.add("active");
  input.focus();
});

// Click ouside to hide the bar
document.addEventListener("click", (e) => {
  if (e.target.nodeName === "BODY") {
    search.classList.remove("active");
    input.value = "";
  }
});

// Submit function on button
search.addEventListener("submit", (e) => {
  e.preventDefault();
  input.value && console.log("submit", input.value);
  input.value = "";
});
