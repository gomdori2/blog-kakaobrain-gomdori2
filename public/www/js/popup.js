window.addEventListener("load", function () {
  const closeBt = document.querySelector(".popup-close");
  const popup = document.querySelector(".popup");
  closeBt.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
