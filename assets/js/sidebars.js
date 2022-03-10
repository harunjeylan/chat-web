/* global bootstrap: false */


setInterval('refreshPage()', 1000);


(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

function sidebar(){
  var sidebar = document.getElementById("sidebar");
  
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

function homepage(){
  var fraindesPage = document.getElementById("fraindes-page");
  var messagesPage = document.getElementById("messages-page");
  var fraindesCol = document.getElementById("fraindes-col");
  var messagesCol = document.getElementById("messages-col");
  var mediaQuery = window.matchMedia("(max-width: 768px)")
  console.log(mediaQuery.matches)

  if (mediaQuery.matches) {
  
    if (fraindesPage.getAttribute("aria-expanded") == "false") {
      fraindesPage.style.display = "none";
      messagesPage.style.display = "flex";

      fraindesCol.style.display = "none";
      messagesCol.style.display = "flex";
      fraindesPage.setAttribute("aria-expanded", "true");

    }else{
      messagesCol.style.display = "none";
      fraindesPage.style.display = "flex";

      messagesPage.style.display = "none";
      fraindesCol.style.display = "flex";
      fraindesPage.setAttribute("aria-expanded", "false");

    }
  
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