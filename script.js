// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close When Clicking On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    // Reset body scrolling
    body.style.overflow = "auto";
  });
}

// Type JS Plugin
let typeJsText = document.querySelector(".typeJsText");
let lines = typeJsText.dataset.typetext.split("|");
let lineIndex = 0;
let charIndex = 0;
typeJsText.innerHTML = "";

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      // Join lines up to the current line being typed
      let textToShow = lines.slice(0, lineIndex).join("<br>");
      if (lineIndex > 0) textToShow += "<br>";
      textToShow += lines[lineIndex].substring(0, charIndex + 1) + '<span class="cursor">|</span>';
      typeJsText.innerHTML = textToShow;
      charIndex++;
      setTimeout(type, 150); // Adjust typing speed (in milliseconds)
    } else {
      charIndex = 0;
      lineIndex++;
      setTimeout(type, 1000); // Delay before typing the next line
    }
  } else {
    lineIndex = 0;
    charIndex = 0;
    setTimeout(type, 1000); // Restart typing after a delay
  }
}

type();

// Function to open Gmail with a pre-filled recipient
function openGmail() {
  const email = "bharatkrathore8952@gmail.com";
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(url, "_blank");
}

// Function to download CV
function downloadCV() {
  const link = document.createElement("a");
  link.href = "Bharat-Rathore-Resume.pdf"; // Path to your resume file
  link.download = "Bharat-Rathore-Resume.pdf"; // Name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
