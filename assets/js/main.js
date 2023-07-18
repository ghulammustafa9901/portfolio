var navToggle = document.getElementById("nav-toggle");
var offCanvas = document.getElementById("off-canvas");
var wrapper = document.getElementById("wrapper");
var bodyElement = document.body;

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("open")) {
    navToggle.classList.remove("open");
    offCanvas.classList.remove("off-canvas-click");
    wrapper.classList.remove("wrapper");
  } else {
    navToggle.classList.add("open");
    offCanvas.classList.add("off-canvas-click");
    wrapper.classList.add("wrapper");
  }
});
