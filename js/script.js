var buttonNav = document.querySelector(".header__button-call-nav");
var menu = document.querySelector(".navigation");
var modal = document.querySelector(".modal");
var modalWrapper = document.querySelector(".modal__wrapper");
var modalContainer = document.querySelector(".modal__container");
var modalCall = document.querySelectorAll(".modal-call");

window.onload = function() {
  menu.classList.add("navigation--close");
  buttonNav.classList.add("header__button-call-nav--open");
};

buttonNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("navigation--open");
  buttonNav.classList.toggle("header__button-call-nav--close");
});

for (var i = 0; i < modalCall.length; i++) {
  var call = modalCall[i];
  call.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--open");
  });
}

modalWrapper.addEventListener("click", function (evt) {
  if (modal.classList.contains("modal--open")) {
    evt.preventDefault();
    modal.classList.remove("modal--open");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--open")) {
      modal.classList.remove("modal--open");
    }
  }
});
