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

/* ====================================
    Skill Animation
==================================== */

function animateProgressBar() {
  const progressBars = document.querySelectorAll(".progressBar");
  progressBars.forEach((progressBar) => {
    const rect = progressBar.getBoundingClientRect();
    const progressBarTop = rect.top;
    const progressBarBottom = rect.bottom;

    console.log("top " + rect.top);
    console.log("bottom " + rect.bottom);

    const windowBottom = window.innerHeight;

    // Check if the progress bar is in the viewport
    if (progressBarBottom > 0 && progressBarTop < windowBottom) {
      const progressValue = progressBar.getAttribute("data-progress-value");
      const bar = progressBar.querySelector(".bar");
      bar.style.width = `${progressValue}%`;
    }
  });
}

// Call the animateProgressBar function on page load
window.addEventListener("load", animateProgressBar);

// Initialize AOS after page load
window.addEventListener("load", () => {
  AOS.init();
});

// Attach the animateProgressBar function to the scroll event
window.addEventListener("scroll", animateProgressBar);
