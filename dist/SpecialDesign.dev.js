"use strict";

// Check If there is Local Storage Color Option
var mainColors = localStorage.getItem("color-option"); // console.log(mainColors);

if (mainColors !== null) {
  // console.log('good');
  // console.log(localStorage.getItem("color-option"));
  document.documentElement.style.setProperty('--main-color', mainColors); // Remove Class Active from All Colors list

  document.querySelectorAll(".colors-list li").forEach(function (element) {
    element.classList.remove("active"); // Add Class Active on Element With Data-Color === Local Storage Item

    if (element.dataset.color === mainColors) {
      // Add Class Active
      element.classList.add("active");
    }

    ;
  });
} // Random background option


var backgroundOption = true; // Variable to control Interval

var backgroundInterval; // Check Local Storage if it Random

var backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null) {
  // console.log("Not Empty");
  // console.log(backgroundLocalItem);
  // console.log(typeof (backgroundLocalItem));
  if (backgroundLocalItem === 'true') {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  } // console.log(backgroundLocalItem);
  // Remove Class Active From All Span


  document.querySelectorAll(".random span").forEach(function (element) {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === 'true') {
    document.querySelector(".random .yes").classList.add("active");
  } else {
    document.querySelector(".random .no").classList.add("active");
  }
}

; // Toggle Spin Class on Icon

document.querySelector(".toggle-settings .sett").onclick = function () {
  // Toggle Class fa-spin for Rotation on Self
  this.classList.toggle("fa-spin"); // Toggle Class open on Main Setting Box

  document.querySelector(".setting-box").classList.toggle("open");
}; // Switch Colors


var colorsLi = document.querySelectorAll(".colors-list li"); // console.log(colorsLi);

colorsLi.forEach(function (li) {
  // console.log(li);
  li.addEventListener("click", function (e) {
    // console.log(e.target.dataset.color);
    // Set Color on Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color); // Set Color on Local Storage

    localStorage.setItem("color-option", e.target.dataset.color); // // Remove Class Active from All Children
    // e.target.parentElement.querySelectorAll(".active").forEach(element => {
    //     element.classList.remove("active");
    // });
    // // Add Class Active 
    // e.target.classList.add("active");
    // OR

    handleActive(e);
  });
}); // Switch Background

var randomBackEl = document.querySelectorAll(".random span"); // console.log(colorsLi);

randomBackEl.forEach(function (span) {
  // console.log(span);
  span.addEventListener("click", function (e) {
    // // Remove Class Active from All Children
    // e.target.parentElement.querySelectorAll(".active").forEach(element => {
    //     element.classList.remove("active");
    // });
    // // Add Class Active 
    // e.target.classList.add("active");
    // OR
    handleActive(e);

    if (e.target.dataset.background === 'yes') {
      // console.log("yes");
      backgroundOption = true; // console.log(backgroundOption);

      randomizeImg();
      localStorage.setItem("background-option", true);
    } else {
      // console.log("No");
      backgroundOption = false; // console.log(backgroundOption);

      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
}); // Select Landing Page Element

var landingPage = document.querySelector(".landing-page"); // Get Array of Imgs

var imgsArray = ["Background01.jpg", "Background02.jpg", "Background03.jpg", "Background04.jpg", "Background05.jpg", "Background06.jpg"]; // Function to Randomize Img

function randomizeImg() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(function () {
      // Get Random Number
      var randomNumber = Math.floor(Math.random() * imgsArray.length); // Change Background Imge Url

      landingPage.style.backgroundImage = 'url("Data/' + imgsArray[randomNumber] + '")'; // console.log(randomNumber);
    }, 5000);
  }
}

randomizeImg(); // Select Skills Selector

var ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  var skillsOffsetTop = ourSkills.offsetTop; // console.log(skillsOffsetTop);
  // Skills Outer Height

  var skillsOuterHeight = ourSkills.offsetHeight; // this.console.log(skillsOuterHeight);
  // Window Height

  var windowHeight = this.innerHeight; // this.console.log(windowHeight);
  // Window ScrollTop

  var windowScrollTop = this.pageYOffset; // this.console.log(windowScrollTop);

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    // this.console.log('skills Section Reached');
    var allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(function (skill) {
      skill.style.width = skill.dataset.progress;
    });
  }
}; // Create Popup With Images


var ourGallery = document.querySelectorAll(".gallery .images-box img");
ourGallery.forEach(function (img) {
  img.addEventListener('click', function (e) {
    // Create Overlay Element
    var Overlay = document.createElement("div"); // Add class to overlay

    Overlay.className = 'popup-overlay'; // Append overlay to Body

    document.body.appendChild(Overlay); // Create Popup

    var popupBox = document.createElement("div"); // Add Class to PopupBox

    popupBox.className = 'popup-box';

    if (img.alt !== null) {
      // Create Heading
      var imgHeading = document.createElement("h3"); // Create Text for Heading

      var imgText = document.createTextNode(img.alt); // Append Text to Heading

      imgHeading.appendChild(imgText); // Append Heading to PopupBox

      popupBox.appendChild(imgHeading);
    } // Create Image


    var popupImage = document.createElement("img"); // console.log(img.src);
    // Set Image Source

    popupImage.src = img.src; // Add Image to Popup Box

    popupBox.appendChild(popupImage); // Append Popup Box to Body

    document.body.appendChild(popupBox); // Create Close Span

    var closeButton = document.createElement("span"); // Create Close Button Text

    var closeButtonText = document.createTextNode("X"); // Append Text to Close Button

    closeButton.appendChild(closeButtonText); // Add Class to CloseButton

    closeButton.className = 'close-button'; // Add CloseButton to PopupBox

    popupBox.appendChild(closeButton);
  });
}); // Close Popup

document.addEventListener("click", function (e) {
  if (e.target.className === 'close-button') {
    // Remove Current Popup
    e.target.parentNode.remove(); // Remove Overlay

    document.querySelector(".popup-overlay").remove();
  }
}); // Select All Bullets

var allBullets = document.querySelectorAll(".nav-bullets .bullet"); // console.log(allBullets);
// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
//  Or
// Select All links

var alllinks = document.querySelectorAll(".links a"); // console.log(alllinks);
// alllinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// Or

function scrollToSection(elements) {
  elements.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

scrollToSection(allBullets);
scrollToSection(alllinks); // Handle Active State

function handleActive(ev) {
  // Remove Class Active from All Children
  ev.target.parentElement.querySelectorAll(".active").forEach(function (element) {
    element.classList.remove("active");
  }); // Add Class Active 

  ev.target.classList.add("active");
}

var bulletsSpan = document.querySelectorAll(".bullets-option span");
var bulletsContainer = document.querySelector(".nav-bullets");
var bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
  // console.log('Not Empty');
  bulletsSpan.forEach(function (span) {
    span.classList.remove("active");
  });

  if (bulletLocalItem === 'block') {
    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach(function (span) {
  span.addEventListener("click", function (e) {
    if (span.dataset.display === 'show') {
      bulletsContainer.style.display = 'block';
      localStorage.setItem("bullets-option", 'block');
    } else {
      bulletsContainer.style.display = 'none';
      localStorage.setItem("bullets-option", 'none');
    }

    handleActive(e);
  });
}); // Reset Button

document.querySelector(".reset-option").onclick = function () {
  // localStorage.clear();
  // OR
  localStorage.removeItem("bullets-option");
  localStorage.removeItem("color-option");
  localStorage.removeItem("background-option"); // Reload Window

  window.location.reload();
}; // Toggel Menu


var toggleBtn = document.querySelector(".toggle-menu");
var tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation(); // Toggle Class menu-active on Button

  this.classList.toggle("menu-active"); // Toggle Class Open on Links

  tLinks.classList.toggle("open");
}; // Click anywhere Outside Menu and Toggle Button


document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target !== toggleBtn && e.target !== tLinks) {
    // console.log("good");
    // Check If Menu is Open
    if (tLinks.classList.contains("open")) {
      // console.log("good");
      // Toggle Class menu-active on Button
      toggleBtn.classList.toggle("menu-active"); // Toggle Class Open on Links

      tLinks.classList.toggle("open");
    }
  }
}); // Stop Propagation

tLinks.onclick = function (e) {
  e.stopPropagation();
};