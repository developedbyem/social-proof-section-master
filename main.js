const rateImg = document.querySelectorAll(".rate-img");

window.addEventListener("DOMContentLoaded", function () {
  rateImg.forEach(function (img) {
    for (let i = 0; i < 5; i++) {
      img.innerHTML += `<img src="images/icon-star.svg" alt="star icon" />`;
    }
  });
});
