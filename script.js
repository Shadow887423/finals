/*slides*/
let currentSlideIndex = 0; 
const slide = document.querySelector('.slide');
const totalCards = document.querySelectorAll('.image-card').length; 
const visibleCards = 5; 
const cardWidth = 170;

function moveSlide(direction) {
  currentSlideIndex += direction;

  if (currentSlideIndex < 0) {
    currentSlideIndex = totalCards - visibleCards;
  } else if (currentSlideIndex > totalCards - visibleCards) {
    currentSlideIndex = 0;
  }

  const offset = -currentSlideIndex * cardWidth;
  slide.style.transform = `translateX(${offset}px)`;
};

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const backToTopButton = document.getElementById('backToTop');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


