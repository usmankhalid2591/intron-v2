let body = document.querySelector("body");
let sideNav = document.getElementById("sideNav");

window.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    if (!!sideNav) {
      body.style.paddingLeft = "315px";
      body.style.paddingRight = "15px";
    }
  } else {
    body.style.paddingRight = "30px";
    body.style.paddingLeft = "30px";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    if (!!sideNav) {
      body.style.paddingLeft = "315px";
      body.style.paddingRight = "15px";
    }
  } else {
    body.style.paddingRight = "30px";
    body.style.paddingLeft = "30px";
  }
});

let sideNavToggler = document.getElementById("sideNavToggler");

sideNavToggler.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-show");
  sideNavToggler.classList.toggle("side-nav-toggler-position");
});
