// Open the Model
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/Previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//Form validation
function validateForm() {
  let x = document.forms["contactForm"];
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i].value == "") {
      if (i == 0) {
        alert("You forgot to fill in your first name.");
        return false;
      } else if (i == 1) {
        alert("You forgot to fill in your last name.");
        return false;
      } else if (i == 2) {
        alert("You forgot to fill in your email.");
        return false;
      } else if (i == 3) {
        alert("You forgot to fill in your phone number.");
        return false;
      } else {
        alert("This is an error, you shouldn't have got this alert.Please contact admins.");
        return false;
      }
    }
  }
}
