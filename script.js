document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 3000);
  });

});

function hideLoader() {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const textElement = document.querySelector(".text-slide-left")
  const imgElement = document.querySelector(".img-slide-right")

  loader.classList.add("hide");

  setTimeout(() => {
    mainContent.classList.add("show");
    imgElement.classList.add("show")
    textElement.classList.add("show")

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 250);
}

