


function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }

  // Make sure the DOM is fully loaded before adding event listeners
  window.onload = function () {
    const moveRandom = document.querySelector("#move-random");

    moveRandom.addEventListener("mouseenter", function (e) {
      moveRandomEl(e.target);
    });
  };