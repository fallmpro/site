// Menu burger (mobile) : ouvre / ferme la barre de navigation
document.querySelectorAll(".burger").forEach(function (btn) {
  var nav = btn.closest(".sommaire");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
});
