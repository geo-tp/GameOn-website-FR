// DOM Elements
var myTopnav = document.getElementById("myTopnav");
var mainNavBar = document.querySelectorAll("main-navbar");
var closeIcon = document.getElementById("navbar-close-icon");
var barIcon = document.getElementById("navbar-bar-icon");
var header = document.querySelectorAll(".header");

// Onscroll event to apply border to header
window.onscroll = function () {
  borderToHeader();
};

// Open or close navList
function editNav() {
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
    closeIcon.style.display = "none";
    barIcon.style.display = "block";
    // Avoid display conflict
    closeModal();
  } else {
    closeIcon.style.display = "block";
    barIcon.style.display = "none";
    myTopnav.className = "topnav";
  }
}

// close nav list
function closeNav() {
  myTopnav.className = "topnav";
}

function borderToHeader() {
  console.log(window.pageYOffset);
  if (window.pageYOffset == 0) {
    header[0].style.border = "1px solid white";
  } else {
    header[0].style.border = "1px solid lightgrey";
  }
}
