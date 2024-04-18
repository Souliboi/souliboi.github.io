const creditModalJs = document.getElementById("credit-modal-id");
const creditBtn = document.getElementById("credit-id");
const creditExit = document.getElementsByClassName("credit-close")[0];

creditBtn.onclick = function() {
  creditModalJs.style.display = "block";
}

creditExit.onclick = function() {
  creditModalJs.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === creditModalJs) {
    creditModalJs.style.display = "none";
  } else if (event.target === wikiModalJs) {
    wikiModalJs.style.display = "none";
  }
}

const wikiModalJs = document.getElementById("wiki-db-modal-id");
const wikiBtn = document.getElementById("wiki-db-id");
const wikiExit = document.getElementsByClassName("wiki-db-close")[0];

wikiBtn.onclick = function() {
  wikiModalJs.style.display = "block";
}

wikiExit.onclick = function() {
  wikiModalJs.style.display = "none";
}