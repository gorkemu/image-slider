function getCurrentSlideNumber() {
  for (let i = 1; i < 6; i++) {
    let img = document.getElementById("img" + i);
    let leftProperty = getComputedStyle(img).getPropertyValue("left");
    if (leftProperty === "0px") {
      return i;
    }
  }
}

function displayImage(num) {
  const distance = num - getCurrentSlideNumber();
  for (let i = 1; i < 6; i++) {
    let img = document.getElementById("img" + i);
    let leftProperty = getComputedStyle(img).getPropertyValue("left");
    let leftPropertyNumber = Number(
      leftProperty.slice(0, leftProperty.length - 2)
    );
    img.style.left = leftPropertyNumber - distance * 600 + "px";
  }
  document.getElementById("circle" + num).checked = true;
}

function moveLeft() {
  const currentSlideNumber = getCurrentSlideNumber();
  if (currentSlideNumber > 1) {
    displayImage(currentSlideNumber - 1);
  } else {
    displayImage(5);
  }
}

function moveRight() {
  const currentSlideNumber = getCurrentSlideNumber();
  if (currentSlideNumber < 5) {
    displayImage(currentSlideNumber + 1);
  } else {
    displayImage(1);
  }
}

document.getElementById("left-arrow").addEventListener("click", () => {
  moveLeft();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  moveRight();
});

document
  .getElementById("navigation-circles")
  .addEventListener("mouseover", (e) => {
    if (e.target.parentElement.classList.contains("circle-container")) {
      displayImage(e.target.parentElement.id.slice(-1));
    }
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  }
});

window.setInterval(function () {
  moveRight();
}, 5000);
