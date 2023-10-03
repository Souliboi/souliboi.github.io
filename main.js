var creditModalJs = document.getElementById("credit-modal-id");
var creditBtn = document.getElementById("credit-id");
var creditExit = document.getElementsByClassName("credit-close")[0];

creditBtn.onclick = function() {
  creditModalJs.style.display = "block";
}

creditExit.onclick = function() {
  creditModalJs.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == creditModalJs) {
    creditModalJs.style.display = "none";
  }
}
