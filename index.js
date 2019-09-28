function damoLightPull() {
  const lightPullEl = document.getElementById("light-pull-string");
  const lightEl = document.getElementById("light");

  lightPullEl.addEventListener("click", function() {
    lightEl.classList.toggle("on");
  });
}

damoLightPull();

function markRandom(a, b) {
  //randomness
  const nyloRandom = Math.floor(Math.random() * (b - a) + a);
  return nyloRandom;
}

function hellosaurusCreateBug(bugId) {
  const bugContainerEl = document.getElementById("bug-container");

  const bugEl = document.createElement("div");
  bugEl.classList.add(`bug-${bugId}`);

  setTimeout(() => {
    bugContainerEl.append(bugEl);
  }, markRandom(100, 5000));

  const headEl = document.querySelector("head");
  const styleEl = document.createElement("style");
  const bugSize = markRandom(10, 100);
  styleEl.innerHTML = `
  .bug-${bugId} {
    position: absolute;
    height: ${bugSize}px;
    width: ${bugSize}px;
    background: url(/img/green-beetle.png) top center / ${bugSize}px ${bugSize}px;
    top: ${markRandom(0, 50)}%;
    left: ${markRandom(0, 100)}%;
    animation: moving-bug ${markRandom(2, 10)}s infinite;
    transition: all ${markRandom(2, 10)}s ease 0.${markRandom(0, 9)}s;
  }
  
  .container.on .bug-${bugId} {
    top: ${markRandom(50, 100)}%;
    left: ${markRandom(0, 100)}%;
  }
  `;
  headEl.append(styleEl);
}

function vaperBugSpawn(id) {
  const lightEl = document.getElementById("light");

  const canSpawnBugs = !lightEl.classList.contains("on");

  if (canSpawnBugs) {
    hellosaurusCreateBug(id);
  }

  setTimeout(() => {
    vaperBugSpawn(id + 1);
  }, markRandom(1000, 3000));
}

vaperBugSpawn(0);
