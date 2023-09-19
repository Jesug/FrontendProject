const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled")
    mobileNav.classList.remove("scrolled");
  }
})

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
   
const activePage = window.location.pathname; 
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
}) 

const navLink = document.querySelectorAll('.mobile-menu-container a').forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
})  



var j = 0;
var time = 3000;
var isPaused = false; // Flag to track if the slideshow is paused
var img = [
  "images/pancake2.jpg",
  "images/pasta2.jpg",
  "images/dessert4.jpg",
  "images/smoothie4.jpg",
  "images/dessert8.jpg",
  "images/cocktail5.jpg",
  "images/chickenNuggets2.jpg",
  "images/chips.jpg",
  "images/dessert7.jpg",
  "images/sandwich3.jpg",
  "images/pizza4.jpeg",
  "images/cocktail6.jpg",
  "images/hamburger.jpg"
];

var slideImg = document.querySelector("[name='sliding']");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");


function changeImg() {
  if (!isPaused) {
    // Proceed only if not paused
    slideImg.src = img[j];

    if (j < img.length - 1) {
      j++;
    } else {
      j = 0;
    }
  }
  setTimeout(changeImg, time);
}
window.onload = changeImg;

// Toggle pause and play for index.html
function toggleSlideshow() {
isPaused = !isPaused; // Toggle the paused state

  if (isPaused) {
    pauseIcon.style.display = "none"; // Hide pause icon
    playIcon.style.display = "block"; // Show play icon
  } else {
    pauseIcon.style.display = "block"; // Show pause icon
    playIcon.style.display = "none"; // Hide play icon
  }
}

// Toggle pause and play
function toggleSlideshow() {
  isPaused = !isPaused; // Toggle the paused state

  if (isPaused) {
    pauseIcon.style.display = "none"; // Hide pause icon
    playIcon.style.display = "block"; // Show play icon
  } else {
    pauseIcon.style.display = "block"; // Show pause icon
    playIcon.style.display = "none"; // Hide play icon
  }
}

// Event listeners for pause and play icons
playIcon.addEventListener("click", toggleSlideshow);
pauseIcon.addEventListener("click", toggleSlideshow);
    

  // Previous image for menu.html
function prevImage() {
  if (j > 0) {
      j--;
  } else {
      j = img.length - 1;
  }
  slideImg.src = img[j];
}

  // Next image for menu.html
function nextImage() {
  if (j < img.length - 1) {
      j++;
  } else {
      j = 0;
  }
  slideImg.src = img[j];
}


/*Animation Effect*/









 