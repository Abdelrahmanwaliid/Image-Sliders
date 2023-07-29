// Get Slider imgs
let sliderContainer = Array.from(
    document.querySelectorAll(".slider-container img")
  ),
  // Get Numbers Of slides
  sliderCount = sliderContainer.length;
// Slid Number Element
(slidNum = document.querySelector(".slid-num")),
  // Set current Index
  (currentIndex = 1);
// Previous and Next Btn
(nextBtn = document.getElementById("next")),
  (prevBtn = document.getElementById("prev"));

// Handel Click on previous and next button
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create The Ul Elements
let ul = document.createElement("ul");
ul.setAttribute("id", "pagination-ul");

// create li
for (let i = 1; i <= sliderCount; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-slide", i);

  li.appendChild(document.createTextNode(i));

  //append items to the main ul
  ul.appendChild(li);
}

// add ul to the page
document.getElementById("indicators").appendChild(ul);

let ulId = document.getElementById("pagination-ul");

let bullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    currentIndex = parseInt(this.getAttribute("data-slide"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    theChecker();
  }
}

// Checker Function
function theChecker() {
  // Set The Slid Number
  slidNum.innerHTML = `Slide #${currentIndex} of ${sliderCount}`

  removeAllActive();

  // Set active class on current slid
  sliderContainer[currentIndex - 1].classList.add("active");

  // Set active class on li
  ulId.children[currentIndex - 1].classList.add("active");

  //check if current slid is the first
  if (currentIndex === 1) {
    //add disabled class is previous btn
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  //check if current slid is the last
  if (currentIndex === sliderCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

// Remove all active classes
function removeAllActive() {
  // loop on images
  sliderContainer.forEach((img) => {
    img.classList.remove("active");
  });

  // loop on bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
