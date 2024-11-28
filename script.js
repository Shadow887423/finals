/*slides*/
// For Phones slide
let currentSlideIndex1 = 0; // For Phones section
const slide1 = document.querySelector('.slide'); // Phones slide container
const totalCards1 = document.querySelectorAll('.slide .image-card').length; // Total cards in Phones section
const visibleCards = 5; // Number of visible cards in the viewport
const cardWidth = 170; // Width of each card including margin

// For Laptops slide
let currentSlideIndex2 = 0; // For Laptops section
const slide2 = document.querySelector('.slide2'); // Laptops slide container
const totalCards2 = document.querySelectorAll('.slide2 .image-card2').length; // Total cards in Laptops section

// Function to move the slide (Reusable for Phones and Laptops)
function moveSlide(slide, currentIndex, totalCards, direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards; // Wrap around to the end
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0; // Wrap around to the beginning
    }

    const offset = -currentIndex * cardWidth;
    slide.style.transform = `translateX(${offset}px)`;
    return currentIndex; // Return the updated index
}

// Event listeners for Phones section
document.querySelector('.prev1').addEventListener('click', () => {
    currentSlideIndex1 = moveSlide(slide1, currentSlideIndex1, totalCards1, -1);
});

document.querySelector('.next1').addEventListener('click', () => {
    currentSlideIndex1 = moveSlide(slide1, currentSlideIndex1, totalCards1, 1);
});

// Event listeners for Laptops section
document.querySelector('.prev2').addEventListener('click', () => {
    currentSlideIndex2 = moveSlide(slide2, currentSlideIndex2, totalCards2, -1);
});

document.querySelector('.next2').addEventListener('click', () => {
    currentSlideIndex2 = moveSlide(slide2, currentSlideIndex2, totalCards2, 1);
});


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


