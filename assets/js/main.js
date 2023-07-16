var navToggle = document.getElementById("nav-toggle");
var offCanvas = document.getElementById("off-canvas");
var bodyElement = document.body;

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("open")) {
    navToggle.classList.remove("open");
    offCanvas.classList.remove("off-canvas-click");
    bodyElement.classList.remove("shadow");
  } else {
    navToggle.classList.add("open");
    offCanvas.classList.add("off-canvas-click");
    bodyElement.classList.add("shadow");
  }
});
