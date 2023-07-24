"use strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // adding a '+' before the counter turns type into number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    // this variable allows the numbers to finish counting at roughly the same time
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
