window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

//   document.getElementById("progress-bar").style.width = scrollPercent + "%";
  document.getElementById("progress-bar-mobile").style.width = scrollPercent + "%";
});
