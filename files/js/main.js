/**
 * Scroll the products list right or left
 * @param isRight boolean
 */
function scrollHorizontally(isRight) {
  if (isRight) {
    document.getElementById("horizontal-scrollable").scrollLeft += 50;
  } else {
    document.getElementById("horizontal-scrollable").scrollLeft -= 50;
  }
}
/**
 * Show or Hide scrolling buttons when scrolled to an end
 */
function onHorizontalScroll() {
  const scrollable = document.getElementById("horizontal-scrollable");
  const previousButton = document.getElementById("previousBtn");
  const nextButton = document.getElementById("nextBtn");

  if (scrollable.scrollLeft <= 0) {
    previousButton.classList.add("hidden");
  } else {
    previousButton.classList.remove("hidden");
  }

  if (
    scrollable.scrollWidth - scrollable.scrollLeft <=
    scrollable.clientWidth
  ) {
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.remove("hidden");
  }
}
