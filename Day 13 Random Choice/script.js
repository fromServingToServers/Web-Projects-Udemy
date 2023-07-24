"use strict";

const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter" && tags.childElementCount > 1) {
    // clears text area after 10ms
    setTimeout(() => {
      e.target.value = "";
      textarea.disabled = true;
    }, 10);

    randomSelect();
  }
});

// input is a string with commas separating choices
// dynamically creates tags on keyup
function createTags(input) {
  // creating an array of strings separated by commas
  const tags = input
    .split(",")
    // trimming whitespace i.e ('40   ', 'f') => ('40', 'f')
    .map((tag) => tag.trim())
    //filtering out blank entries ie [r, , s, g] => [r, s, g]
    .filter((tag) => tag !== "");

  // without this, it randomly creates a bunch of extra tags
  tagsEl.innerHTML = "";

  // looping through tags array
  tags.forEach((tag) => {
    // creates a span for each tag
    const tagEl = document.createElement("span");

    // adds tag class for styling
    tagEl.classList.add("tag");

    // applies the text to each tag
    tagEl.innerText = tag;

    // ?
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  // number of times the function will randomly highlight the choices
  const times = 30;

  // required since the highlight is going to repeat
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 1000);
  }, 100);

  // this is the part that selects the final choice
  setTimeout(() => {
    // stops the randomizer
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      textarea.disabled = false;
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  // node list of all tags
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
