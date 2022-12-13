'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

    hamburger.classList.remove("active");

    navMenu.classList.remove("active");
    
  }))

  
if (document.cookie.indexOf('token=')!=-1) {
  document.querySelectorAll('#guest').forEach(function (el) {
      el.style.display='none';
  });
  document.querySelectorAll('#logged').forEach(function (el) {
      el.style.display='inherit';
  });
} else {
  document.querySelectorAll('#guest').forEach(function (el) {
      el.style.display='inherit';
  });
  document.querySelectorAll('#logged').forEach(function (el) {
      el.style.display='none';
  });
}
