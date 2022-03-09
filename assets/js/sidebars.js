/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

function sidebar(){
  var sidebar = document.getElementById("sidebar");
  var mediaQuery = window.matchMedia("(max-width: 768px)")
  console.log(sidebar)
  if (sidebar.getAttribute("aria-expanded") == "false"){
    sidebar.style.display = "block";
    sidebar.style.width = "33.334%";
    sidebar.setAttribute("aria-expanded", "true");
    sidebar.style.transform = "translateX(0%)";
  } else {
    sidebar.style.width = "0rem";
    sidebar.style.transform = "translateX(-100%)";
    sidebar.setAttribute("aria-expanded", "false");
    setTimeout(function () {
      sidebar.style.display = "none";
    }, 300);
  }
}

function myFunction(mediaQuery) {
  var sidebar = document.getElementById("sidebar");
  sidebar.removeAttribute("style");
  setTimeout(function () {
    sidebar.style.display = "none";
  }, 300);
}

var mediaQuery = window.matchMedia("(max-width: 768px)")
myFunction(mediaQuery)
mediaQuery.addListener(myFunction) 