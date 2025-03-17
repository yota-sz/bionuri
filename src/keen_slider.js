import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';

document.addEventListener("DOMContentLoaded", () => {
  const keenSlider = new KeenSlider(
    '#keen-slider',
    {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    },
    []
  );

  // Get navigation buttons
  const keenSliderPrevious = document.getElementById('keen-slider-previous');
  const keenSliderNext = document.getElementById('keen-slider-next');
  const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
  const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

  // Add event listeners for navigation
  keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
  keenSliderNext?.addEventListener('click', () => keenSlider.next());
  keenSliderPreviousDesktop?.addEventListener('click', () => keenSlider.prev());
  keenSliderNextDesktop?.addEventListener('click', () => keenSlider.next());
});
