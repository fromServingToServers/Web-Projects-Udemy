const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);
panels.forEach((pan) => {
  pan.addEventListener("click", () => {
    removeActiveClasses();
    pan.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((pan) => {
    pan.classList.remove("active");
  });
}
