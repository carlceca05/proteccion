const popup = document.querySelector(".popupBox");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(() => {
    popup.style.display = "block";
  }, 40000);
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   timeStarted = 0;
   time = document.getElementById("time");
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});

