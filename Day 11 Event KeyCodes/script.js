"use strict;";

const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key}
  <small>event.key</small>
</div>
<div class="key" id="old">
  ${event.keyCode + " (deprecated)"}
  <small>event.keycode</small>
</div>
<div class="key" id="new">
  ${event.code}
  <small>event.code</small>
</div>
`;
});
