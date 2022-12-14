'use strict';

const hamGue=document.querySelector("#ham-gue");
const hamLog=document.querySelector("#ham-log");
const gueNav=document.querySelector("#nav-gue");
const logNav=document.querySelector("#nav-log");

//this is guest mobilemenu toggle fuction
hamGue.addEventListener("click", () => {

  hamGue.classList.toggle("active");

  gueNav.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

  hamGue.classList.remove("active");

  gueNav.classList.remove("active");

}))


//this is logged-in mobilemenu toggle fuction
hamLog.addEventListener("click", () => {

  hamLog.classList.toggle("active");

  logNav.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

  hamLog.classList.remove("active");

  logNav.classList.remove("active");

}))


//if user is logged-in we change this header to logged-in header
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
