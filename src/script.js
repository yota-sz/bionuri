  document.addEventListener('click', function (event) {
    // Check if the clicked element is a toggle button
    if (event.target.classList.contains('toggle-button')) {
      const button = event.target; // The button that was clicked
      console.log('Button clicked:', button);

      const card = button.closest('.blog-card'); // Find the parent card
      console.log('Parent card:', card);

      if (!card) {
        console.error('Parent card not found.');
        return;
      }

      const content = card.querySelector('.content'); // Find the content inside the card
      console.log('Content element:', content);

      if (!content) {
        console.error('Content element not found.');
        return;
      }

      // Collapse all other cards first
      document.querySelectorAll('.blog-card').forEach((otherCard) => {
        if (otherCard !== card) {
          const otherContent = otherCard.querySelector('.content');
          const otherButton = otherCard.querySelector('.toggle-button');

          if (otherContent && otherButton) {
            otherCard.classList.add('max-h-48'); // Add max-h-48 to other cards
            otherContent.style.maxHeight = '0'; // Reset max-height
            otherButton.textContent = 'Read More'; // Reset button text
            otherCard.classList.remove('expanded'); // Remove expanded class
          }
        }
      });

      // Toggle the clicked card's expanded state
      if (card.classList.contains('expanded')) {
        // Collapse the card
        card.classList.remove('expanded');
        card.classList.add('max-h-48'); // Add max-h-48 to the clicked card
        content.style.maxHeight = '0';
        button.textContent = 'Read More';
      } else {
        // Expand the card
        card.classList.add('expanded');
        card.classList.remove('max-h-48'); // Remove max-h-48 from the clicked card
        content.style.maxHeight = content.scrollHeight + 'px';
        button.textContent = 'Read Less';
      }
    }
  });



  // Animasi "Read More" yang lebih smooth
  document.getElementById('read-more').addEventListener('click', function() {
    const moreText = document.getElementById('more-text');

    if (moreText.style.maxHeight && moreText.style.maxHeight !== '0px') {
      moreText.style.maxHeight = '0px';
      moreText.style.opacity = '0';
      this.innerText = 'Selengkapnya...';
    } else {
      moreText.style.maxHeight = moreText.scrollHeight + 'px';
      moreText.style.opacity = '1';
      this.innerText = 'Sembunyikan';
    }
  });

// Fixed Navbar
window.onscroll = function() { // auto run this when the page scrolled
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; // getting the header's offset to the top page

    // window.pageYOffset = the offset between the top page and the viewport's top
    if (window.pageYOffset > fixedNav) { // if the offset of the viewport is larger than nav's offset
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// toggling hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if(hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden')
    });
} else {
    console.error("hamburger not found.")
}


// Image Carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const dotContainer = document.querySelector(".absolute.bottom-2");
    const images = carousel.children;
    const totalSlides = images.length;
    let index = 0;

    // Generate dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.className = "dot w-3 h-3 bg-gray-300 rounded-full cursor-pointer";
        dot.dataset.index = i;
        dotContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-gray-900", i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            index = parseInt(this.dataset.index);
            updateCarousel();
        });
    });

    setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
});
