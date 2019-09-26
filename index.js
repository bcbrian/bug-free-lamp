function damoLightPull() {
  const lightPullEl = document.getElementById("light-pull-string");
  const lightEl = document.getElementById("light");

  lightPullEl.addEventListener("click", function() {
    lightEl.classList.toggle("on");
  });
}

damoLightPull();
