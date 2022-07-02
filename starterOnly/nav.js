// DOM Elements
var myTopnav = document.getElementById("myTopnav");
var mainNavBar = document.querySelectorAll("main-navbar");

// Open or close navList
function editNav() {
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
    // Avoid display conflict
    closeModal();
  } else {
    myTopnav.className = "topnav";
  }
}

// close nav list
function closeNav() {
  myTopnav.className = "topnav";
}
