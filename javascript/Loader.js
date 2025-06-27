document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.querySelector(".content");
  const images = document.images;
  let loadedImages = 0;

  const totalImages = images.length;
  if (totalImages === 0) {
    hideLoader();
    return;
  }

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
      hideLoader();
    }
  }

  function hideLoader() {
    loader.style.display = "none";
    content.style.display = "block";
  }

  for (let img of images) {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded); // En cas d'échec de chargement
    }
  }
});

