// For the changing the color on the scroll down
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};


// For the image slider


let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("slider")[0].children;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

